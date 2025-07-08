# Profile Image Setup Guide

## How to Add Your Local Profile Image

### Step 1: Prepare Your Image
1. **Recommended Dimensions**: 800x800 pixels to 1200x1200 pixels
2. **Aspect Ratio**: 1:1 (square) for best results with the circular frame
3. **File Format**: JPG, PNG, or WebP
4. **File Size**: Keep under 500KB for optimal loading speed
5. **Quality**: High resolution for crisp display on all devices

### Step 2: Add Image to Project
1. Create an `images` folder inside the `public` directory if it doesn't exist
2. Copy your profile image to `public/images/`
3. Rename it to `raj_profile.jpg` (or update the path in Hero.jsx accordingly)

### Step 3: File Structure
```
public/
├── images/
│   └── raj_profile.jpg  ← Your profile image goes here
├── logo.svg
└── ...other files
```

### Step 4: Verify the Setup
1. Make sure your image is in `public/images/raj_profile.jpg`
2. The Hero component has been updated to use `/images/raj_profile.jpg`
3. Refresh your browser to see the new image

### Image Optimization Tips
- **For JPG**: Use 85-90% quality for best balance of size and quality
- **For PNG**: Use if you need transparency, but file size will be larger
- **For WebP**: Modern format with excellent compression (if supported)

### Troubleshooting
- If image doesn't show: Check the file path and name exactly match
- If image looks pixelated: Use a higher resolution source image
- If page loads slowly: Compress the image or reduce dimensions

### Alternative Image Paths
If you want to use a different name or location:
1. Update the `src` attribute in `src/components/Hero.jsx`
2. Examples:
   - `/images/profile.png`
   - `/assets/my-photo.jpg`
   - `/raj-photo.webp`

### About Section Image
The About section also uses an external image. To update it:
1. Add another image to `public/images/` (e.g., `raj_about.jpg`)
2. Update `src/components/About.jsx` line ~47:
   ```javascript
   src="/images/raj_about.jpg"
   ```

## Current Status
✅ Hero component updated to use local image path
⏳ Waiting for you to add your image to `public/images/raj_profile.jpg`