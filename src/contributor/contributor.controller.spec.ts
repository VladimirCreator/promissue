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

// MARK: Controllers
import { ContributorController } from "./contributor.controller"

// #endregion

describe("ContributorController", () => {
	let controller: ContributorController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ContributorController]
		}).compile()

		controller = module.get<ContributorController>(ContributorController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
