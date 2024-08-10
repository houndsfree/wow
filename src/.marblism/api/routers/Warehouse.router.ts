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

        createMany: procedure.input($Schema.WarehouseInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).warehouse.createMany(input as any))),

        create: procedure.input($Schema.WarehouseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).warehouse.create(input as any))),

        deleteMany: procedure.input($Schema.WarehouseInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).warehouse.deleteMany(input as any))),

        delete: procedure.input($Schema.WarehouseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).warehouse.delete(input as any))),

        findFirst: procedure.input($Schema.WarehouseInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).warehouse.findFirst(input as any))),

        findMany: procedure.input($Schema.WarehouseInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).warehouse.findMany(input as any))),

        findUnique: procedure.input($Schema.WarehouseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).warehouse.findUnique(input as any))),

        updateMany: procedure.input($Schema.WarehouseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).warehouse.updateMany(input as any))),

        update: procedure.input($Schema.WarehouseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).warehouse.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WarehouseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WarehouseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WarehouseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WarehouseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WarehouseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WarehouseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WarehouseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WarehouseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WarehouseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WarehouseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WarehouseGetPayload<T>, Context>) => Promise<Prisma.WarehouseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WarehouseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WarehouseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WarehouseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WarehouseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WarehouseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WarehouseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WarehouseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WarehouseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WarehouseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WarehouseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WarehouseGetPayload<T>, Context>) => Promise<Prisma.WarehouseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WarehouseFindFirstArgs, TData = Prisma.WarehouseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WarehouseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WarehouseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WarehouseFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WarehouseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WarehouseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WarehouseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WarehouseFindManyArgs, TData = Array<Prisma.WarehouseGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.WarehouseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WarehouseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WarehouseFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WarehouseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WarehouseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WarehouseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WarehouseFindUniqueArgs, TData = Prisma.WarehouseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WarehouseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WarehouseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WarehouseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WarehouseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WarehouseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WarehouseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WarehouseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WarehouseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WarehouseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WarehouseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WarehouseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WarehouseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WarehouseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WarehouseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WarehouseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WarehouseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WarehouseGetPayload<T>, Context>) => Promise<Prisma.WarehouseGetPayload<T>>
            };

    };
}
