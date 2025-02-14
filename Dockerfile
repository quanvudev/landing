FROM oven/bun:1 AS base

FROM base AS build
WORKDIR /usr/src/app
COPY . .
COPY .env.example .env
RUN bun install
RUN bun run build

FROM oven/bun:1 AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/.output .output
COPY --from=build /usr/src/app/.env .env

EXPOSE 3000
CMD ["bun", "run", ".output/server/index.mjs"]