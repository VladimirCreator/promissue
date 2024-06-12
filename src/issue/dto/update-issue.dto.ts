/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { PartialType } from "@nestjs/mapped-types"

// #endregion

// #region -Vladimir’s

// MARL: DTOs
import { CreateIssueDto } from "./create-issue.dto"

// #endregion

export class UpdateIssueDto extends PartialType(CreateIssueDto) {}
