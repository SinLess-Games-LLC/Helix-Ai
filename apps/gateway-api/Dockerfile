# Install dependencies only when needed
FROM docker.io/node:lts-alpine as deps
WORKDIR /usr/src/app
COPY dist/apps/gateway-api/package*.json ./
RUN npm install --only=production

# Production image, copy all the files and run nest
FROM docker.io/node:lts-alpine as runner
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
COPY dist/apps/gateway-api .
RUN chown -R node:node .
USER node
EXPOSE 3000
CMD ["node", "main.js"]
