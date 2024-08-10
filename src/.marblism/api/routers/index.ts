/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationMemberRouter from "./OrganizationMember.router";
import createMasterTemplateRouter from "./MasterTemplate.router";
import createTemplateLabelRouter from "./TemplateLabel.router";
import createPurchaseOrderItemRouter from "./PurchaseOrderItem.router";
import createPurchaseOrderRouter from "./PurchaseOrder.router";
import createWarehouseRouter from "./Warehouse.router";
import createStockItemRouter from "./StockItem.router";
import createWorkOrderRouter from "./WorkOrder.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationMemberClientType } from "./OrganizationMember.router";
import { ClientType as MasterTemplateClientType } from "./MasterTemplate.router";
import { ClientType as TemplateLabelClientType } from "./TemplateLabel.router";
import { ClientType as PurchaseOrderItemClientType } from "./PurchaseOrderItem.router";
import { ClientType as PurchaseOrderClientType } from "./PurchaseOrder.router";
import { ClientType as WarehouseClientType } from "./Warehouse.router";
import { ClientType as StockItemClientType } from "./StockItem.router";
import { ClientType as WorkOrderClientType } from "./WorkOrder.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationMember: createOrganizationMemberRouter(router, procedure),
        masterTemplate: createMasterTemplateRouter(router, procedure),
        templateLabel: createTemplateLabelRouter(router, procedure),
        purchaseOrderItem: createPurchaseOrderItemRouter(router, procedure),
        purchaseOrder: createPurchaseOrderRouter(router, procedure),
        warehouse: createWarehouseRouter(router, procedure),
        stockItem: createStockItemRouter(router, procedure),
        workOrder: createWorkOrderRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationMember: OrganizationMemberClientType<AppRouter>;
    masterTemplate: MasterTemplateClientType<AppRouter>;
    templateLabel: TemplateLabelClientType<AppRouter>;
    purchaseOrderItem: PurchaseOrderItemClientType<AppRouter>;
    purchaseOrder: PurchaseOrderClientType<AppRouter>;
    warehouse: WarehouseClientType<AppRouter>;
    stockItem: StockItemClientType<AppRouter>;
    workOrder: WorkOrderClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
