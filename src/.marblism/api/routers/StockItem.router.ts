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

        createMany: procedure.input($Schema.StockItemInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stockItem.createMany(input as any))),

        create: procedure.input($Schema.StockItemInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stockItem.create(input as any))),

        deleteMany: procedure.input($Schema.StockItemInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stockItem.deleteMany(input as any))),

        delete: procedure.input($Schema.StockItemInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stockItem.delete(input as any))),

        findFirst: procedure.input($Schema.StockItemInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).stockItem.findFirst(input as any))),

        findMany: procedure.input($Schema.StockItemInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).stockItem.findMany(input as any))),

        findUnique: procedure.input($Schema.StockItemInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).stockItem.findUnique(input as any))),

        updateMany: procedure.input($Schema.StockItemInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stockItem.updateMany(input as any))),

        update: procedure.input($Schema.StockItemInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stockItem.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.StockItemCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockItemCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockItemCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockItemCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.StockItemCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockItemCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StockItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StockItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockItemCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockItemCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StockItemGetPayload<T>, Context>) => Promise<Prisma.StockItemGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.StockItemDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockItemDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockItemDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockItemDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StockItemDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockItemDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StockItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StockItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockItemDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockItemDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StockItemGetPayload<T>, Context>) => Promise<Prisma.StockItemGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StockItemFindFirstArgs, TData = Prisma.StockItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StockItemFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StockItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StockItemFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StockItemFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StockItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StockItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StockItemFindManyArgs, TData = Array<Prisma.StockItemGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.StockItemFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StockItemGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StockItemFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StockItemFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StockItemGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StockItemGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StockItemFindUniqueArgs, TData = Prisma.StockItemGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StockItemFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StockItemGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StockItemFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StockItemFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StockItemGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StockItemGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.StockItemUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockItemUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockItemUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockItemUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.StockItemUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockItemUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StockItemGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StockItemGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockItemUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockItemUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StockItemGetPayload<T>, Context>) => Promise<Prisma.StockItemGetPayload<T>>
            };

    };
}
