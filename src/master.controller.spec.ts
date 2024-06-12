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
import { MasterService } from "./master.service"

// MARK: Controllers
import { MasterController } from "./master.controller"

// #endregion

describe("AppController", () => {
	let appController: MasterController

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [MasterController],
			providers: [MasterService]
		}).compile()

		appController = app.get<MasterController>(MasterController)
	})

	describe("root", () => {
		it('should return "Hello World!"', () => {})
	})
})
