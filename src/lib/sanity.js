import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

// Configured only when a project id is present, so the site still builds
// before Sanity is connected.
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = client ? imageUrlBuilder(client) : null;
export const urlFor = (source) => (builder ? builder.image(source) : { url: () => '' });

// ---- GROQ queries ----
export const ALL_POSTS = `*[_type == "post"] | order(publishedAt desc){
  _id, title, "slug": slug.current, category, excerpt, readTime, featured, publishedAt,
  "coverImage": coverImage.asset->url
}`;

export const FEATURED_POST = `*[_type == "post" && featured == true] | order(publishedAt desc)[0]{
  _id, title, "slug": slug.current, category, excerpt, readTime,
  "coverImage": coverImage.asset->url
}`;

export const POST_BY_SLUG = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, category, excerpt, readTime, publishedAt, body,
  "coverImage": coverImage.asset->url
}`;

export const ALL_SLUGS = `*[_type == "post" && defined(slug.current)][].slug.current`;

// Safe fetch helper: returns fallback if Sanity isn't configured yet.
export async function sanityFetch(query, params = {}, fallback = null) {
  if (!client) return fallback;
  try {
    return await client.fetch(query, params, { next: { revalidate: 60 } });
  } catch (e) {
    console.warn('Sanity fetch failed:', e?.message);
    return fallback;
  }
}
