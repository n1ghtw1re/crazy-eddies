# Umami Analytics Fix - ERR_BLOCKED_BY_CLIENT

## Problem
Getting `ERR_BLOCKED_BY_CLIENT` error when loading Umami analytics, even though the same script works on other sites.

## Quick Fix
Replace this:
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR-ID"></script>
```

With this dynamic loading script:
```html
<script>
function loadUmami() {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', 'YOUR-WEBSITE-ID-HERE');
  
  script.onload = () => console.log('✅ Umami loaded successfully');
  script.onerror = () => console.error('❌ Umami loading failed');
  
  document.head.appendChild(script);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadUmami);
} else {
  loadUmami();
}
</script>
```

## Why It Works
- Static script tags get blocked by domain-specific rules
- Dynamic injection bypasses most blocking mechanisms
- Same data collection, just different loading method

## Steps
1. Remove static Umami script tag
2. Add dynamic loading script
3. Replace `YOUR-WEBSITE-ID-HERE` with actual ID
4. Deploy and check console for success message