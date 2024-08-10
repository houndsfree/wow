/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PurchaseOrderItemInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrderItem.createMany(input as any))),

        create: procedure.input($Schema.PurchaseOrderItemInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrderItem.create(input as any))),

        deleteMany: procedure.input($Schema.PurchaseOrderItemInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrderItem.deleteMany(input as any))),

        delete: procedure.input($Schema.PurchaseOrderItemInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrderItem.delete(input as any))),

        findFirst: procedure.input($Schema.PurchaseOrderItemInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).purchaseOrderItem.findFirst(input as any))),

        findMany: procedure.input($Schema.PurchaseOrderItemInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).purchaseOrderItem.findMany(input as any))),

        findUnique: procedure.input($Schema.PurchaseOrderItemInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).purchaseOrderItem.findUnique(input as any))),

        updateMany: procedure.input($Schema.PurchaseOrderItemInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrderItem.updateMany(input as any))),

        update: procedure.input($Schema.PurchaseOrderItemInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrderItem.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PurchaseOrderItemCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderItemCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderItemCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderItemCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PurchaseOrderItemCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderItemCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseOrderItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseOrderItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderItemCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderItemCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseOrderItemGetPayload<T>, Context>) => Promise<Prisma.PurchaseOrderItemGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PurchaseOrderItemDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderItemDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderItemDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderItemDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PurchaseOrderItemDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderItemDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseOrderItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseOrderItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderItemDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderItemDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseOrderItemGetPayload<T>, Context>) => Promise<Prisma.PurchaseOrderItemGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PurchaseOrderItemFindFirstArgs, TData = Prisma.PurchaseOrderItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PurchaseOrderItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseOrderItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PurchaseOrderItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PurchaseOrderItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PurchaseOrderItemFindManyArgs, TData = Array<Prisma.PurchaseOrderItemGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PurchaseOrderItemGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseOrderItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PurchaseOrderItemGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PurchaseOrderItemGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PurchaseOrderItemFindUniqueArgs, TData = Prisma.PurchaseOrderItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PurchaseOrderItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseOrderItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseOrderItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PurchaseOrderItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PurchaseOrderItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PurchaseOrderItemUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderItemUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderItemUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderItemUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PurchaseOrderItemUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderItemUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseOrderItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseOrderItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderItemUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderItemUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseOrderItemGetPayload<T>, Context>) => Promise<Prisma.PurchaseOrderItemGetPayload<T>>
            };

    };
}
