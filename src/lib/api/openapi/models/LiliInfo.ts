/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Includes field that come from having a current user...
 */
export type LiliInfo = {
    id: string;
    permission: LiliInfo.permission;
    permissions: Array<'owner' | 'admin' | 'edit_permissions' | 'edit' | 'view'>;
    bookmarked: boolean;
};
export namespace LiliInfo {
    export enum permission {
        OWNER = 'owner',
        ADMIN = 'admin',
        EDIT_PERMISSIONS = 'edit_permissions',
        EDIT = 'edit',
        VIEW = 'view',
    }
}

