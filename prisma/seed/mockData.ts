import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('7955f299-1d86-43a5-8be9-026b6788113a', '1Selena73@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_L7f9u0j1k2l3', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('a3d17605-c227-458b-b644-237e4d2058d8', '7Julianne_Hoppe14@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=9', 'cus_K6e8t9g0h1i2', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('9f6e620f-112d-47ea-869d-fd158a301496', '13Demond.Kirlin@yahoo.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=15', 'cus_L7f9u0j1k2l3', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('dd020623-361d-48ab-b0ab-6f6ccc4df0a6', '19Solon_Lubowitz@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_L7f9u0j1k2l3', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('e4b8555b-c144-4b02-85a0-5a379f2c1e78', '25Kathryn.Ernser42@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=27', 'cus_J5d7s9f8s7d8', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('cc7cb9fd-5013-4be0-82a1-cc54fbed4e8e', '31Omer0@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=33', 'cus_N9h1w2m3n4o5', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('22e0f800-7275-4d88-9ee5-9cd0d2fe58b6', '37Tressie.Kozey@hotmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_K6e8t9g0h1i2', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('7b52ce0b-8b03-4ed7-9cb4-68033566de8a', '43Jacky_White@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_M8g0v1k2l3m4', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('96c05a28-0281-4d69-8bd2-581431a8990e', '55Stanley68@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'cus_K6e8t9g0h1i2', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "vectorId") VALUES ('a1bcbc77-af15-4f01-b1ab-18f15184e382', 'vec78901');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('3d079e30-23f3-498f-ba04-d568de8f3e3f', 'vec67890');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('000b11e4-b5b1-43b3-ba6b-6d6b96dc38d7', 'vec12345');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('346648e6-8889-4977-93f3-42223d56fa47', 'vec44556');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('1d6b84df-d547-4b23-9019-36f89c20f361', 'vec11223');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('9e0391fa-d2a6-41f8-be46-b3be3689137e', 'vec12345');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('3eb14633-429b-4a58-88cf-e2fbddb4eb03', 'vec12345');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('bc38bb11-2400-4c99-ace4-294cd7838e59', 'vec78901');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('fc852c8f-220d-45fd-aa3e-df93ca6c49cc', 'vec11223');
INSERT INTO "RagVector" ("id", "vectorId") VALUES ('c6f33d79-abf2-4725-810d-3baa82274d9d', 'vec12345');

INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('8a382670-a3e5-4180-8a91-c585b2663341', 'Phone Pros Inc.', 'cc7cb9fd-5013-4be0-82a1-cc54fbed4e8e');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('cbdca4e9-8923-4558-868b-9736f38c46c3', 'Phone Pros Inc.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('48869bb0-da5f-4fe1-84dc-d2eb49e2cc42', 'Gadget Gurus', 'dd020623-361d-48ab-b0ab-6f6ccc4df0a6');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('6c8902cd-8fc0-4465-8f93-0a2a97144a01', 'Mobile Masters', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('7a368ed5-0cbc-43f9-b525-791dc991f977', 'Gadget Gurus', 'a3d17605-c227-458b-b644-237e4d2058d8');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('eb48b26c-7cd3-4038-8453-b15c55eb81ef', 'Tech Haven Solutions', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('5cb0cea3-d8ae-4cdd-9985-27a0ab8d5b01', 'Gadget Gurus', 'dd020623-361d-48ab-b0ab-6f6ccc4df0a6');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd', 'Phone Pros Inc.', '96c05a28-0281-4d69-8bd2-581431a8990e');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('591887bb-0823-47e5-8381-2f1d39eb62d6', 'Mobile Masters', 'dd020623-361d-48ab-b0ab-6f6ccc4df0a6');
INSERT INTO "Organization" ("id", "name", "ownerId") VALUES ('d845f425-7ead-43f4-8b5f-ab5ddeb05d1c', 'Phone Pros Inc.', '96c05a28-0281-4d69-8bd2-581431a8990e');

INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('0a75db00-4191-4cbb-83b8-5bc38e079313', 'Manager', 'cc7cb9fd-5013-4be0-82a1-cc54fbed4e8e', '5cb0cea3-d8ae-4cdd-9985-27a0ab8d5b01');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('c6052377-f155-442d-9d29-dd7fa6d15e6a', 'Warehouse Staff', 'a3d17605-c227-458b-b644-237e4d2058d8', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('c829d73c-7b4d-4d78-b7b7-fc139af6db33', 'Customer Service', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7a368ed5-0cbc-43f9-b525-791dc991f977');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('0c8ca38f-0372-4e4f-83dc-2669c03d3812', 'Manager', '96c05a28-0281-4d69-8bd2-581431a8990e', '48869bb0-da5f-4fe1-84dc-d2eb49e2cc42');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('e9957011-d4ef-4753-a59f-90a11e9507dd', 'Manager', 'a3d17605-c227-458b-b644-237e4d2058d8', 'cbdca4e9-8923-4558-868b-9736f38c46c3');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('6ce6623f-3246-4845-8ad9-e7db0cb7ecc7', 'Warehouse Staff', '22e0f800-7275-4d88-9ee5-9cd0d2fe58b6', '48869bb0-da5f-4fe1-84dc-d2eb49e2cc42');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('02074441-d192-4ab8-ad46-1623247f14ac', 'Manager', 'cc7cb9fd-5013-4be0-82a1-cc54fbed4e8e', 'cbdca4e9-8923-4558-868b-9736f38c46c3');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('aa5232be-4138-4807-9102-a16c36732f90', 'Manager', '9f6e620f-112d-47ea-869d-fd158a301496', '6c8902cd-8fc0-4465-8f93-0a2a97144a01');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('137faf77-8da8-4a97-84c6-dcb9f74d789d', 'Customer Service', '9f6e620f-112d-47ea-869d-fd158a301496', '7a368ed5-0cbc-43f9-b525-791dc991f977');
INSERT INTO "OrganizationMember" ("id", "role", "userId", "organizationId") VALUES ('93f7897d-c904-4bbd-afc9-ab93c0d28dd5', 'Sales Associate', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '48869bb0-da5f-4fe1-84dc-d2eb49e2cc42');

INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('2389c762-e5f1-4ab5-87d3-4075b92e2db3', 'OnePlus 9 Pro', 'Highperformance smartphone with 5G connectivity', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('c54d669d-b0e0-4f8a-8419-0c7d966346c8', 'Samsung Galaxy S21', 'Flagship smartphone with advanced camera features', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('7d85d1ab-df43-45fe-9f94-edffd0e6ffd0', 'Google Pixel 6', 'Premium smartphone with fast charging capabilities', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('0f951a46-76b0-4778-8827-f235f6136f41', 'Google Pixel 6', 'Highperformance smartphone with 5G connectivity', '48869bb0-da5f-4fe1-84dc-d2eb49e2cc42');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('73296f03-152d-47f9-8de5-8f5c1bf0d24e', 'Google Pixel 6', 'Premium smartphone with fast charging capabilities', '48869bb0-da5f-4fe1-84dc-d2eb49e2cc42');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('69393cb0-db5a-498f-8f1d-40ffc6ebdb2a', 'iPhone 12 Pro Max', 'Premium smartphone with fast charging capabilities', '8a382670-a3e5-4180-8a91-c585b2663341');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('653cad08-39f8-4366-b04f-7336a763fbc2', 'Sony Xperia 5 II', 'Compact smartphone with highresolution display', '8a382670-a3e5-4180-8a91-c585b2663341');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('5c16947c-feeb-40be-af6d-92cffd19d0b7', 'Sony Xperia 5 II', 'Flagship smartphone with advanced camera features', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('5b018290-fe03-40bc-8836-012d3431ed46', 'Sony Xperia 5 II', 'Highperformance smartphone with 5G connectivity', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c');
INSERT INTO "MasterTemplate" ("id", "name", "description", "organizationId") VALUES ('c0db5af2-1084-4bbf-9f92-2e047bb48895', 'Google Pixel 6', 'Flagship smartphone with advanced camera features', '591887bb-0823-47e5-8381-2f1d39eb62d6');

INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('4935a6a0-6377-47d9-849c-11e77d074d74', 'Smartphones', '5b018290-fe03-40bc-8836-012d3431ed46');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('a3309974-4aa4-4352-a10c-055074ebebdb', 'Chargers', 'c0db5af2-1084-4bbf-9f92-2e047bb48895');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('74696359-94fa-4e1b-a1a4-02ad7b297459', 'Repair Parts', '5c16947c-feeb-40be-af6d-92cffd19d0b7');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('99c89ff1-0982-403f-91cf-a636cc47ac61', 'Smartphones', 'c0db5af2-1084-4bbf-9f92-2e047bb48895');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('54c82f82-c3e3-4604-a833-c9147c3e50b6', 'Repair Parts', '653cad08-39f8-4366-b04f-7336a763fbc2');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('42f58f41-1027-4b45-8fa7-8d10600cdb29', 'Smartphones', '69393cb0-db5a-498f-8f1d-40ffc6ebdb2a');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('ec9c09ca-82b9-4e1c-aa24-05b7a7b5db26', 'Accessories', '0f951a46-76b0-4778-8827-f235f6136f41');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('253b589c-6178-4ccd-8387-fe692ffa13a2', 'Accessories', '653cad08-39f8-4366-b04f-7336a763fbc2');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('e30176f6-5499-49f2-96ae-786fbb99ed76', 'Chargers', '5c16947c-feeb-40be-af6d-92cffd19d0b7');
INSERT INTO "TemplateLabel" ("id", "label", "masterTemplateId") VALUES ('8f05df12-fc31-44a8-883e-28d0a1865a31', 'Accessories', '7d85d1ab-df43-45fe-9f94-edffd0e6ffd0');

INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('5d900c5f-fd9d-4725-a845-b8839e41bea4', 'Westside Storage', '456 Elm St Rivertown', '6c8902cd-8fc0-4465-8f93-0a2a97144a01');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('5201f61d-5209-4b32-856f-dfdaae9cd04a', 'Central Depot', '101 Pine St Hilltop', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('87bae76d-cf6b-48e8-af1d-13031d682de9', 'Central Depot', '202 Maple St Greenfield', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('0951e535-5922-4f3b-93e7-8b441af27875', 'South Distribution Center', '202 Maple St Greenfield', '591887bb-0823-47e5-8381-2f1d39eb62d6');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('bd629cbf-0539-4bfb-aa4d-85c1caf660ee', 'South Distribution Center', '456 Elm St Rivertown', '7a368ed5-0cbc-43f9-b525-791dc991f977');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('98f1ae07-e24d-44ec-bc40-ec5e6092854c', 'North Hub', '123 Main St Springfield', '591887bb-0823-47e5-8381-2f1d39eb62d6');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('08b9a4a7-8ebf-444a-90c1-638735d2a91f', 'East End Warehouse', '456 Elm St Rivertown', 'cbdca4e9-8923-4558-868b-9736f38c46c3');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('9bd64551-0758-4065-a075-a7b26b782d7f', 'Central Depot', '101 Pine St Hilltop', 'eb48b26c-7cd3-4038-8453-b15c55eb81ef');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('2c7e81ee-ccc2-4f2f-a79a-2bb794424363', 'South Distribution Center', '789 Oak St Lakeside', '8a382670-a3e5-4180-8a91-c585b2663341');
INSERT INTO "Warehouse" ("id", "name", "location", "organizationId") VALUES ('858740ea-e608-468c-a778-e88f7c7224a7', 'South Distribution Center', '456 Elm St Rivertown', '6c8902cd-8fc0-4465-8f93-0a2a97144a01');

INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('ea48e25c-0527-41df-bd15-987d09c70434', 'Accepted', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd', '98f1ae07-e24d-44ec-bc40-ec5e6092854c');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('96f1aaf0-0777-4976-b9d6-21901bd27135', 'Processed', 'eb48b26c-7cd3-4038-8453-b15c55eb81ef', 'bd629cbf-0539-4bfb-aa4d-85c1caf660ee');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('ccfb76e7-92b6-42de-9c11-ba2802e5d52f', 'Processed', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c', 'bd629cbf-0539-4bfb-aa4d-85c1caf660ee');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('46926b1f-9189-4ea6-bfb5-e8f1812439e2', 'Cancelled', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c', '2c7e81ee-ccc2-4f2f-a79a-2bb794424363');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('3bbe1376-a0f5-4d95-896f-a6634038aab5', 'Pending', '591887bb-0823-47e5-8381-2f1d39eb62d6', '08b9a4a7-8ebf-444a-90c1-638735d2a91f');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('2067f605-f596-4374-b9c0-2e7050617da5', 'Pending', 'cbdca4e9-8923-4558-868b-9736f38c46c3', '0951e535-5922-4f3b-93e7-8b441af27875');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('f21c1c2c-7685-438c-b8aa-246ec791c051', 'Cancelled', 'd845f425-7ead-43f4-8b5f-ab5ddeb05d1c', '858740ea-e608-468c-a778-e88f7c7224a7');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('368620f2-158f-40fa-b578-2ce288377740', 'Accepted', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd', '5d900c5f-fd9d-4725-a845-b8839e41bea4');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('46e2b614-de84-44f8-add5-cf4d28e68190', 'Processed', '48869bb0-da5f-4fe1-84dc-d2eb49e2cc42', '87bae76d-cf6b-48e8-af1d-13031d682de9');
INSERT INTO "PurchaseOrder" ("id", "status", "organizationId", "warehouseId") VALUES ('9090e11b-1380-4cf8-a830-7491258ad454', 'Verified', 'cbdca4e9-8923-4558-868b-9736f38c46c3', '5d900c5f-fd9d-4725-a845-b8839e41bea4');

INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('2432c848-e1af-4210-81e6-79bfff42ef24', 72, 'shipped', '46926b1f-9189-4ea6-bfb5-e8f1812439e2', '7d85d1ab-df43-45fe-9f94-edffd0e6ffd0');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('ddafcd9c-2347-4dcb-86cd-64c81c47cb4b', 768, 'delivered', 'f21c1c2c-7685-438c-b8aa-246ec791c051', '73296f03-152d-47f9-8de5-8f5c1bf0d24e');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('f09343f1-34a9-4211-8e6f-f51694da794f', 597, 'delivered', '9090e11b-1380-4cf8-a830-7491258ad454', '2389c762-e5f1-4ab5-87d3-4075b92e2db3');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('358980cd-0914-4399-8dc1-58f1ac6cd472', 413, 'shipped', '9090e11b-1380-4cf8-a830-7491258ad454', '5c16947c-feeb-40be-af6d-92cffd19d0b7');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('4074c470-376d-4a3c-87fc-dd8ea58c8bfb', 239, 'processed', '3bbe1376-a0f5-4d95-896f-a6634038aab5', '73296f03-152d-47f9-8de5-8f5c1bf0d24e');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('b4034dd5-2900-48b7-99c5-56cd948a2a63', 507, 'cancelled', '368620f2-158f-40fa-b578-2ce288377740', '2389c762-e5f1-4ab5-87d3-4075b92e2db3');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('ce505d3a-db49-457c-ab0e-a9a54f5cea2e', 307, 'processed', '368620f2-158f-40fa-b578-2ce288377740', '7d85d1ab-df43-45fe-9f94-edffd0e6ffd0');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('12b2fd3d-31a7-4acc-b042-999706dff1f2', 927, 'processed', '9090e11b-1380-4cf8-a830-7491258ad454', '69393cb0-db5a-498f-8f1d-40ffc6ebdb2a');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('3fc2678a-5ce1-4c22-8a69-31a160c2f1cf', 828, 'processed', 'ccfb76e7-92b6-42de-9c11-ba2802e5d52f', '5b018290-fe03-40bc-8836-012d3431ed46');
INSERT INTO "PurchaseOrderItem" ("id", "quantity", "status", "purchaseOrderId", "masterTemplateId") VALUES ('7cb9e343-36d1-4892-a169-42e14dbeff9b', 171, 'processed', 'f21c1c2c-7685-438c-b8aa-246ec791c051', '2389c762-e5f1-4ab5-87d3-4075b92e2db3');

INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('000f0014-aca1-4845-9c4f-a526a7ffaba8', '356938035643810', 25, '08b9a4a7-8ebf-444a-90c1-638735d2a91f', 'c0db5af2-1084-4bbf-9f92-2e047bb48895');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('1b1c2865-d0bc-4670-b15a-a03bd6ae6c1c', '356938035643809', 269, '98f1ae07-e24d-44ec-bc40-ec5e6092854c', '7d85d1ab-df43-45fe-9f94-edffd0e6ffd0');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('6e7e483e-02db-43e2-b254-129d4694d1ad', '353755081234567', 572, '87bae76d-cf6b-48e8-af1d-13031d682de9', 'c0db5af2-1084-4bbf-9f92-2e047bb48895');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('0079ea99-acf3-4bc5-9f7c-b15c97bc684d', '864906031234567', 601, '2c7e81ee-ccc2-4f2f-a79a-2bb794424363', '7d85d1ab-df43-45fe-9f94-edffd0e6ffd0');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('5f634b2b-140a-4106-ba57-132c8f46426c', '356938035643810', 672, '858740ea-e608-468c-a778-e88f7c7224a7', '2389c762-e5f1-4ab5-87d3-4075b92e2db3');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('616a0a79-bef7-40cd-b37e-88e28fafe3d8', '356938035643809', 825, '5201f61d-5209-4b32-856f-dfdaae9cd04a', '73296f03-152d-47f9-8de5-8f5c1bf0d24e');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('8f319f46-9a63-4b64-85d5-e48c1bba8ae5', '356938035643810', 209, '5201f61d-5209-4b32-856f-dfdaae9cd04a', '5b018290-fe03-40bc-8836-012d3431ed46');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('04f69a5d-f2fa-4590-8dc8-7b65fb5c6564', '356938035643809', 881, 'bd629cbf-0539-4bfb-aa4d-85c1caf660ee', '5b018290-fe03-40bc-8836-012d3431ed46');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('6a35ebf7-9793-4acd-83c6-03f9e0ef148e', '864906031234567', 945, '858740ea-e608-468c-a778-e88f7c7224a7', '5b018290-fe03-40bc-8836-012d3431ed46');
INSERT INTO "StockItem" ("id", "imei", "quantity", "warehouseId", "masterTemplateId") VALUES ('71bd2599-bc6f-435e-891f-231e163f61e7', '864906031234567', 710, '858740ea-e608-468c-a778-e88f7c7224a7', '2389c762-e5f1-4ab5-87d3-4075b92e2db3');

INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('11aaad2b-de33-4243-be3d-4c92583ae30d', 'Battery replacement for Samsung Galaxy S20', 'In Progress', '6c8902cd-8fc0-4465-8f93-0a2a97144a01', 'e4b8555b-c144-4b02-85a0-5a379f2c1e78');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('8a7b1e39-c44d-4ca6-952a-8b49da184005', 'Screen replacement for iPhone 12', 'On Hold', '7a368ed5-0cbc-43f9-b525-791dc991f977', 'e4b8555b-c144-4b02-85a0-5a379f2c1e78');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('20b8de3f-8376-4c25-bbc0-27018b3ad84d', 'Software update for OnePlus 8', 'Completed', 'cbdca4e9-8923-4558-868b-9736f38c46c3', 'a3d17605-c227-458b-b644-237e4d2058d8');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('d5d89603-c51b-4002-9b11-35d100c5de6a', 'Screen replacement for iPhone 12', 'Pending', '6c8902cd-8fc0-4465-8f93-0a2a97144a01', '96c05a28-0281-4d69-8bd2-581431a8990e');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('375e21fc-388c-48b4-84e1-0ab778adf2a1', 'Software update for OnePlus 8', 'Completed', 'eb48b26c-7cd3-4038-8453-b15c55eb81ef', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('81d18db6-4a80-46ff-9cec-d737dfc9c820', 'Battery replacement for Samsung Galaxy S20', 'In Progress', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('6de17d45-58ef-4798-a957-a8305bbd7ba0', 'Screen replacement for iPhone 12', 'In Progress', 'cbdca4e9-8923-4558-868b-9736f38c46c3', '7b52ce0b-8b03-4ed7-9cb4-68033566de8a');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('73c123b9-8d0b-4390-b97c-35328ca2f5e7', 'Screen replacement for iPhone 12', 'In Progress', 'cbdca4e9-8923-4558-868b-9736f38c46c3', '7955f299-1d86-43a5-8be9-026b6788113a');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('e018f147-be50-4de9-bf5d-f9b504b1719f', 'Battery replacement for Samsung Galaxy S20', 'Pending', '2299ef4e-a51c-46eb-8e94-40c4a6eeb2cd', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "WorkOrder" ("id", "description", "status", "organizationId", "assignedToId") VALUES ('d7cb2f40-4748-4c2b-8fad-11f433aca807', 'Battery replacement for Samsung Galaxy S20', 'Cancelled', '7a368ed5-0cbc-43f9-b525-791dc991f977', 'dd020623-361d-48ab-b0ab-6f6ccc4df0a6');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
