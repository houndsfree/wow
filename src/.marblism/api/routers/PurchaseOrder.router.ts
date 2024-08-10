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

        createMany: procedure.input($Schema.PurchaseOrderInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrder.createMany(input as any))),

        create: procedure.input($Schema.PurchaseOrderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrder.create(input as any))),

        deleteMany: procedure.input($Schema.PurchaseOrderInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrder.deleteMany(input as any))),

        delete: procedure.input($Schema.PurchaseOrderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrder.delete(input as any))),

        findFirst: procedure.input($Schema.PurchaseOrderInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).purchaseOrder.findFirst(input as any))),

        findMany: procedure.input($Schema.PurchaseOrderInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).purchaseOrder.findMany(input as any))),

        findUnique: procedure.input($Schema.PurchaseOrderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).purchaseOrder.findUnique(input as any))),

        updateMany: procedure.input($Schema.PurchaseOrderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrder.updateMany(input as any))),

        update: procedure.input($Schema.PurchaseOrderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).purchaseOrder.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PurchaseOrderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PurchaseOrderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseOrderGetPayload<T>, Context>) => Promise<Prisma.PurchaseOrderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PurchaseOrderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PurchaseOrderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseOrderGetPayload<T>, Context>) => Promise<Prisma.PurchaseOrderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PurchaseOrderFindFirstArgs, TData = Prisma.PurchaseOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseOrderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PurchaseOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseOrderFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseOrderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PurchaseOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PurchaseOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PurchaseOrderFindManyArgs, TData = Array<Prisma.PurchaseOrderGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseOrderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PurchaseOrderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseOrderFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseOrderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PurchaseOrderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PurchaseOrderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PurchaseOrderFindUniqueArgs, TData = Prisma.PurchaseOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PurchaseOrderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PurchaseOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PurchaseOrderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PurchaseOrderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PurchaseOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PurchaseOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PurchaseOrderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PurchaseOrderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PurchaseOrderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PurchaseOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PurchaseOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PurchaseOrderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PurchaseOrderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PurchaseOrderGetPayload<T>, Context>) => Promise<Prisma.PurchaseOrderGetPayload<T>>
            };

    };
}
