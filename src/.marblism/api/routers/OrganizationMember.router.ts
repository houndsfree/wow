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

        createMany: procedure.input($Schema.OrganizationMemberInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).organizationMember.createMany(input as any))),

        create: procedure.input($Schema.OrganizationMemberInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).organizationMember.create(input as any))),

        deleteMany: procedure.input($Schema.OrganizationMemberInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).organizationMember.deleteMany(input as any))),

        delete: procedure.input($Schema.OrganizationMemberInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).organizationMember.delete(input as any))),

        findFirst: procedure.input($Schema.OrganizationMemberInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).organizationMember.findFirst(input as any))),

        findMany: procedure.input($Schema.OrganizationMemberInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).organizationMember.findMany(input as any))),

        findUnique: procedure.input($Schema.OrganizationMemberInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).organizationMember.findUnique(input as any))),

        updateMany: procedure.input($Schema.OrganizationMemberInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).organizationMember.updateMany(input as any))),

        update: procedure.input($Schema.OrganizationMemberInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).organizationMember.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.OrganizationMemberCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OrganizationMemberCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OrganizationMemberCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OrganizationMemberCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.OrganizationMemberCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OrganizationMemberCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OrganizationMemberGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OrganizationMemberGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OrganizationMemberCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OrganizationMemberCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OrganizationMemberGetPayload<T>, Context>) => Promise<Prisma.OrganizationMemberGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.OrganizationMemberDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OrganizationMemberDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OrganizationMemberDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OrganizationMemberDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.OrganizationMemberDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OrganizationMemberDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OrganizationMemberGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OrganizationMemberGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OrganizationMemberDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OrganizationMemberDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OrganizationMemberGetPayload<T>, Context>) => Promise<Prisma.OrganizationMemberGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.OrganizationMemberFindFirstArgs, TData = Prisma.OrganizationMemberGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OrganizationMemberFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OrganizationMemberGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OrganizationMemberFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OrganizationMemberFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OrganizationMemberGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OrganizationMemberGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.OrganizationMemberFindManyArgs, TData = Array<Prisma.OrganizationMemberGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.OrganizationMemberFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.OrganizationMemberGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OrganizationMemberFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OrganizationMemberFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.OrganizationMemberGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.OrganizationMemberGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.OrganizationMemberFindUniqueArgs, TData = Prisma.OrganizationMemberGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.OrganizationMemberFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.OrganizationMemberGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.OrganizationMemberFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.OrganizationMemberFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.OrganizationMemberGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.OrganizationMemberGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.OrganizationMemberUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OrganizationMemberUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OrganizationMemberUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OrganizationMemberUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.OrganizationMemberUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.OrganizationMemberUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.OrganizationMemberGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.OrganizationMemberGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.OrganizationMemberUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.OrganizationMemberUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.OrganizationMemberGetPayload<T>, Context>) => Promise<Prisma.OrganizationMemberGetPayload<T>>
            };

    };
}
