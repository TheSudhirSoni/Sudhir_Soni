'use client';
import { useEffect } from 'react';
import Script from 'next/script';

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

/**
 * Google Places autocomplete on #location-input (speaking page).
 * Loads only when a key is configured. IMPORTANT: restrict the key by
 * HTTP referrer in Google Cloud Console before going live.
 */
export default function PlacesAutocomplete() {
  useEffect(() => {
    window.initPlaces = function () {
      const input = document.getElementById('location-input');
      if (!input || !window.google?.maps?.places) return;
      // eslint-disable-next-line no-new
      new window.google.maps.places.Autocomplete(input, { types: ['(cities)'] });
    };
    if (window.google?.maps?.places) window.initPlaces();
    return () => { delete window.initPlaces; };
  }, []);

  if (!KEY) return null;
  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${KEY}&libraries=places&callback=initPlaces`}
      strategy="afterInteractive"
    />
  );
}
