#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
FF=$(node -e "console.log(require('/tmp/claude-0/-home-user-gkl-command-center/755072ec-c046-5422-95b2-d8def5256f65/scratchpad/node_modules/@ffmpeg-installer/ffmpeg').path)")
mkdir -p out
declare -A NAME=(
  [a]=halsoklubben_skraplott_9x16
  [b]=halsoklubben_enfraga_9x16
  [c]=halsoklubben_utbetalning_9x16
  [d]=halsoklubben_odometer_9x16
  [e]=halsoklubben_dromresa_9x16_UTKAST
)
for s in a b c d e; do
  "$FF" -y -framerate 30 -i "frames_${s}/f%04d.png" \
    -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -movflags +faststart \
    "out/${NAME[$s]}.mp4" >/dev/null 2>&1
  echo "encoded ${NAME[$s]}.mp4"
done
ls -la out/*.mp4
