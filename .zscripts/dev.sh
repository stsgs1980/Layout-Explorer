#!/bin/bash
set -e
cd /home/z/my-project

echo "Installing dependencies..."
bun install

echo "Starting dev server..."
nohup npx next dev -p 3000 > /home/z/my-project/.zscripts/dev.log 2>&1 &
echo $! > /home/z/my-project/.zscripts/dev.pid

echo "Waiting for server..."
for i in $(seq 1 30); do
  STATUS=$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/ 2>/dev/null || echo "000")
  if [ "$STATUS" = "200" ]; then
    echo "Server is ready! (200 OK)"
    exit 0
  fi
  sleep 2
done

echo "Timeout waiting for server"
exit 1
