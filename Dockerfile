FROM oven/bun:1 AS base

# Install Python and build-essential
RUN apt-get update && apt-get install -y python3 build-essential

FROM base AS build
WORKDIR /usr/src/app
COPY . .
COPY .env.example .env
RUN bun install
RUN bun run build

FROM base AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/.output .output
COPY --from=build /usr/src/app/.env .env

EXPOSE 3000
CMD ["bun", "run", ".output/server/index.mjs"]