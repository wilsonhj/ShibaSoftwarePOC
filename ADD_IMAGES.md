# Add Your Images to Shiba Software Website

I've updated all the code to display your founder photo and company logo. Now you just need to save the two images to these exact locations:

## 📸 Image Locations

### 1. Founder Photo

**File:** The professional headshot (person in navy blazer)  
**Save to:** `public/images/founder.jpg`  
**Used in:** About page - "Meet the Founder" section

### 2. Company Logo

**File:** The Shiba Software Consulting logo (orange shiba inu with tech elements)  
**Save to:** `public/logos/shiba-logo.png`  
**Used in:**

- Header (navigation bar)
- Footer

## 🚀 How to Add the Images

### Option 1: Download from Chat

1. Scroll up to see the two images you sent in the chat
2. Right-click on the founder photo → "Save Image As..."
3. Save it to: `/Users/hirokazu/Dev_Projects/ShibaSoftwarePOC/public/images/founder.jpg`
4. Right-click on the logo → "Save Image As..."
5. Save it to: `/Users/hirokazu/Dev_Projects/ShibaSoftwarePOC/public/logos/shiba-logo.png`

### Option 2: Drag and Drop

1. Open Finder and navigate to your project folder
2. Drag the images from the chat directly into the appropriate folders:
   - `public/images/` for founder.jpg
   - `public/logos/` for shiba-logo.png

## ✅ Verification

After adding the images, verify they're in place:

```bash
ls -lh public/images/founder.jpg
ls -lh public/logos/shiba-logo.png
```

## 🎨 Code Changes Made

I've updated these files:

- ✅ `app/about/page.tsx` - Added founder photo with nice styling
- ✅ `components/layout/header.tsx` - Updated to use new logo
- ✅ `components/layout/footer.tsx` - Updated to use new logo

All changes passed linter checks!

## 🔧 What's Next

Once you've saved the images, restart your dev server (if running) and view:

- **Home page** - New logo in header/footer
- **About page** (`/about`) - Founder photo displayed beautifully

---

**Note:** The filenames MUST match exactly:

- `founder.jpg` (not .jpeg or .png)
- `shiba-logo.png` (not .jpg)
