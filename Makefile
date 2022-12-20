brain-games:
node bin/brain-games.js

publish:
npm publish --dry-run

install:
npm ci

make lint:
npx eslint .