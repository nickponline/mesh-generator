#!/bin/bash

# Script to generate models.json from available assets in public/
# An item is only included if it has all required assets:
# - image-{name}.png
# - geometry-{name}.mp4
# - gaussian-{name}.mp4
# - glb-{name}.glb

cd "$(dirname "$0")/public"

# Extract unique model names from glb files
glb_names=$(ls glb-*.glb 2>/dev/null | sed 's/^glb-//' | sed 's/\.glb$//' | sort)

# Start JSON array
echo '['

first=true
for name in $glb_names; do
  # Check if all required files exist
  if [ -f "image-${name}.png" ] && \
     [ -f "geometry-${name}.mp4" ] && \
     [ -f "gaussian-${name}.mp4" ] && \
     [ -f "glb-${name}.glb" ]; then

    if [ "$first" = true ]; then
      first=false
    else
      echo ','
    fi

    # Output JSON object (no trailing comma handling done above)
    printf '  {"name": "%s", "previewUrl": "/image-%s.png", "meshVideo": "/geometry-%s.mp4", "rfVideo": "/gaussian-%s.mp4", "glbUrl": "/glb-%s.glb"}' \
      "$name" "$name" "$name" "$name" "$name"
  fi
done

echo ''
echo ']'
