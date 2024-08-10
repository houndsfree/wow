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

        createMany: procedure.input($Schema.TemplateLabelInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templateLabel.createMany(input as any))),

        create: procedure.input($Schema.TemplateLabelInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templateLabel.create(input as any))),

        deleteMany: procedure.input($Schema.TemplateLabelInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templateLabel.deleteMany(input as any))),

        delete: procedure.input($Schema.TemplateLabelInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templateLabel.delete(input as any))),

        findFirst: procedure.input($Schema.TemplateLabelInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).templateLabel.findFirst(input as any))),

        findMany: procedure.input($Schema.TemplateLabelInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).templateLabel.findMany(input as any))),

        findUnique: procedure.input($Schema.TemplateLabelInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).templateLabel.findUnique(input as any))),

        updateMany: procedure.input($Schema.TemplateLabelInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templateLabel.updateMany(input as any))),

        update: procedure.input($Schema.TemplateLabelInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).templateLabel.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TemplateLabelCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplateLabelCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplateLabelCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplateLabelCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TemplateLabelCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplateLabelCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TemplateLabelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TemplateLabelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplateLabelCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplateLabelCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TemplateLabelGetPayload<T>, Context>) => Promise<Prisma.TemplateLabelGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TemplateLabelDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplateLabelDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplateLabelDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplateLabelDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TemplateLabelDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplateLabelDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TemplateLabelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TemplateLabelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplateLabelDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplateLabelDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TemplateLabelGetPayload<T>, Context>) => Promise<Prisma.TemplateLabelGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TemplateLabelFindFirstArgs, TData = Prisma.TemplateLabelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TemplateLabelFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TemplateLabelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TemplateLabelFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TemplateLabelFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TemplateLabelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TemplateLabelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TemplateLabelFindManyArgs, TData = Array<Prisma.TemplateLabelGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TemplateLabelFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TemplateLabelGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TemplateLabelFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TemplateLabelFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TemplateLabelGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TemplateLabelGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TemplateLabelFindUniqueArgs, TData = Prisma.TemplateLabelGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TemplateLabelFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TemplateLabelGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TemplateLabelFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TemplateLabelFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TemplateLabelGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TemplateLabelGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TemplateLabelUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplateLabelUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplateLabelUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplateLabelUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TemplateLabelUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TemplateLabelUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TemplateLabelGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TemplateLabelGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TemplateLabelUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TemplateLabelUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TemplateLabelGetPayload<T>, Context>) => Promise<Prisma.TemplateLabelGetPayload<T>>
            };

    };
}
