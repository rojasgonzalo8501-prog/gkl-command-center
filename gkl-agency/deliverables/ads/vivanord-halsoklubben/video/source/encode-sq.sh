#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
FF=$(node -e "console.log(require('/tmp/claude-0/-home-user-gkl-command-center/755072ec-c046-5422-95b2-d8def5256f65/scratchpad/node_modules/@ffmpeg-installer/ffmpeg').path)")
mkdir -p out
declare -A NAME=(
  [b]=halsoklubben_enfraga_1x1
  [c]=halsoklubben_utbetalning_1x1
  [d]=halsoklubben_odometer_1x1
)
for s in b c d; do
  "$FF" -y -framerate 30 -i "frames_sq_${s}/f%04d.png" \
    -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -movflags +faststart \
    "out/${NAME[$s]}.mp4" >/dev/null 2>&1
  echo "encoded ${NAME[$s]}.mp4"
done
