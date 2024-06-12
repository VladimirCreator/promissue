# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#
# Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.

# MARK: -Section 1
FROM oven/bun:1 as builder

ENV NODE_ENV build

USER bun
WORKDIR /home/bun

# MARK: Dependances
COPY package.json bun.lockb \
		 ./
RUN bun install --frozen-lockfile

# MARK: ...
COPY --chown=bun:bun . .

# MARK: Building
RUN bun run build

# MARK: -Section 2
FROM oven/bun:1

ENV NODE_ENV production

USER bun
WORKDIR /home/bun

# MARK: Section 2.1
COPY --from=builder --chown=bun:bun /home/bun/package.json ./

# MARK: Section 2.2
COPY --from=builder --chown=bun:bun /home/bun/node_modules ./node_modules/
COPY --from=builder --chown=bun:bun /home/bun/dist/ ./dist/

# MARK: Section 2.3
COPY --from=builder --chown=bun:bun /home/bun/public ./public/
COPY --from=builder --chown=bun:bun /home/bun/resources ./resources/

ENTRYPOINT ["bun", "run", "dist/main.js"]
