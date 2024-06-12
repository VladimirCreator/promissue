/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Test, TestingModule } from "@nestjs/testing"

// #endregion

// #region -Vladimir’s

// MARK: Services
import { CommentaryService } from "./commentary.service"

// #endregion

describe("CommentaryService", () => {
	let service: CommentaryService

	// MARK: Setup
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CommentaryService]
		}).compile()

		service = module.get<CommentaryService>(CommentaryService)
	})

	// MARK: Teardown

	// MARK: Test 1
	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
