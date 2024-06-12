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

// #region Vladimir’s

// MARK: Services
import { ContributorService } from "./contributor.service"

// #endregion

describe("ContributorService", () => {
	let service: ContributorService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ContributorService]
		}).compile()

		service = module.get<ContributorService>(ContributorService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
