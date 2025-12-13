#!/bin/bash
echo "🔍 Checking for website images..."
echo ""

# Check founder photo
if [ -f "public/images/founder.jpg" ]; then
    size=$(ls -lh public/images/founder.jpg | awk '{print $5}')
    echo "✅ Founder photo found! (Size: $size)"
else
    echo "❌ Missing: public/images/founder.jpg"
    echo "   Please save the founder photo to this location"
fi

echo ""

# Check company logo
if [ -f "public/logos/shiba-logo.png" ]; then
    size=$(ls -lh public/logos/shiba-logo.png | awk '{print $5}')
    echo "✅ Company logo found! (Size: $size)"
else
    echo "❌ Missing: public/logos/shiba-logo.png"
    echo "   Please save the logo to this location"
fi

echo ""
echo "📝 See ADD_IMAGES.md for detailed instructions"
