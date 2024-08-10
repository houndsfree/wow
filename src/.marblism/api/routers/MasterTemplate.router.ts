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

        createMany: procedure.input($Schema.MasterTemplateInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).masterTemplate.createMany(input as any))),

        create: procedure.input($Schema.MasterTemplateInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).masterTemplate.create(input as any))),

        deleteMany: procedure.input($Schema.MasterTemplateInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).masterTemplate.deleteMany(input as any))),

        delete: procedure.input($Schema.MasterTemplateInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).masterTemplate.delete(input as any))),

        findFirst: procedure.input($Schema.MasterTemplateInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).masterTemplate.findFirst(input as any))),

        findMany: procedure.input($Schema.MasterTemplateInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).masterTemplate.findMany(input as any))),

        findUnique: procedure.input($Schema.MasterTemplateInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).masterTemplate.findUnique(input as any))),

        updateMany: procedure.input($Schema.MasterTemplateInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).masterTemplate.updateMany(input as any))),

        update: procedure.input($Schema.MasterTemplateInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).masterTemplate.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MasterTemplateCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MasterTemplateCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MasterTemplateCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MasterTemplateCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MasterTemplateCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MasterTemplateCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MasterTemplateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MasterTemplateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MasterTemplateCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MasterTemplateCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MasterTemplateGetPayload<T>, Context>) => Promise<Prisma.MasterTemplateGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MasterTemplateDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MasterTemplateDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MasterTemplateDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MasterTemplateDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MasterTemplateDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MasterTemplateDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MasterTemplateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MasterTemplateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MasterTemplateDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MasterTemplateDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MasterTemplateGetPayload<T>, Context>) => Promise<Prisma.MasterTemplateGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MasterTemplateFindFirstArgs, TData = Prisma.MasterTemplateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MasterTemplateFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MasterTemplateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MasterTemplateFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MasterTemplateFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MasterTemplateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MasterTemplateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MasterTemplateFindManyArgs, TData = Array<Prisma.MasterTemplateGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.MasterTemplateFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MasterTemplateGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MasterTemplateFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MasterTemplateFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MasterTemplateGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MasterTemplateGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MasterTemplateFindUniqueArgs, TData = Prisma.MasterTemplateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MasterTemplateFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MasterTemplateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MasterTemplateFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MasterTemplateFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MasterTemplateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MasterTemplateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MasterTemplateUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MasterTemplateUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MasterTemplateUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MasterTemplateUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MasterTemplateUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MasterTemplateUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MasterTemplateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MasterTemplateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MasterTemplateUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MasterTemplateUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MasterTemplateGetPayload<T>, Context>) => Promise<Prisma.MasterTemplateGetPayload<T>>
            };

    };
}
