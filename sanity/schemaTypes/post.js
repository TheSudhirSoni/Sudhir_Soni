import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Essay',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'category', title: 'Category', type: 'string',
      description: 'e.g. Suffering & Clarity, Relationships, Meaning' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3,
      description: 'Short summary shown on the cards.' }),
    defineField({ name: 'readTime', title: 'Read time', type: 'string',
      description: 'e.g. "6 min read"' }),
    defineField({ name: 'featured', title: 'Featured essay?', type: 'boolean', initialValue: false }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime',
      initialValue: () => new Date().toISOString() }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [
      { type: 'block' },
      { type: 'image', options: { hotspot: true } },
    ]}),
  ],
  orderings: [
    { title: 'Newest', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
});
