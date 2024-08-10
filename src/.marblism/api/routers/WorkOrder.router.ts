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

        createMany: procedure.input($Schema.WorkOrderInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workOrder.createMany(input as any))),

        create: procedure.input($Schema.WorkOrderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workOrder.create(input as any))),

        deleteMany: procedure.input($Schema.WorkOrderInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workOrder.deleteMany(input as any))),

        delete: procedure.input($Schema.WorkOrderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workOrder.delete(input as any))),

        findFirst: procedure.input($Schema.WorkOrderInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).workOrder.findFirst(input as any))),

        findMany: procedure.input($Schema.WorkOrderInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).workOrder.findMany(input as any))),

        findUnique: procedure.input($Schema.WorkOrderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).workOrder.findUnique(input as any))),

        updateMany: procedure.input($Schema.WorkOrderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workOrder.updateMany(input as any))),

        update: procedure.input($Schema.WorkOrderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).workOrder.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WorkOrderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkOrderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkOrderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkOrderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WorkOrderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkOrderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkOrderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkOrderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkOrderGetPayload<T>, Context>) => Promise<Prisma.WorkOrderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WorkOrderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkOrderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkOrderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkOrderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WorkOrderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkOrderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkOrderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkOrderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkOrderGetPayload<T>, Context>) => Promise<Prisma.WorkOrderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WorkOrderFindFirstArgs, TData = Prisma.WorkOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorkOrderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkOrderFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkOrderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WorkOrderFindManyArgs, TData = Array<Prisma.WorkOrderGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.WorkOrderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WorkOrderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkOrderFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkOrderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WorkOrderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WorkOrderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WorkOrderFindUniqueArgs, TData = Prisma.WorkOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorkOrderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorkOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorkOrderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorkOrderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorkOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorkOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WorkOrderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkOrderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkOrderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkOrderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WorkOrderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorkOrderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorkOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorkOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorkOrderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorkOrderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorkOrderGetPayload<T>, Context>) => Promise<Prisma.WorkOrderGetPayload<T>>
            };

    };
}
