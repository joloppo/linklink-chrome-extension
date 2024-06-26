/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Link } from '../models/Link';
import type { LinkCreate } from '../models/LinkCreate';
import type { LiPosition } from '../models/LiPosition';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LinkService {
    /**
     *  Create
     * :return: list of ADDED links
     * @param liliId
     * @param requestBody
     * @param authToken
     * @returns Link Successful Response
     * @throws ApiError
     */
    public static linkPost(
        liliId: string,
        requestBody: Array<LinkCreate>,
        authToken?: (string | null),
    ): CancelablePromise<Array<Link>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/link/',
            cookies: {
                'auth_token': authToken,
            },
            query: {
                'lili_id': liliId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     *  Update
     * @param requestBody
     * @param authToken
     * @returns Link Successful Response
     * @throws ApiError
     */
    public static linkPut(
        requestBody: Link,
        authToken?: (string | null),
    ): CancelablePromise<Link> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/link/',
            cookies: {
                'auth_token': authToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     *  Delete
     * @param requestBody
     * @param authToken
     * @returns string Successful Response
     * @throws ApiError
     */
    public static linkDelete(
        requestBody: Array<string>,
        authToken?: (string | null),
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/link/',
            cookies: {
                'auth_token': authToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     *  Create
     * @param liliId
     * @param requestBody
     * @param allowDuplicate
     * @param authToken
     * @returns Link Successful Response
     * @throws ApiError
     */
    public static linkSinglePost(
        liliId: string,
        requestBody: LinkCreate,
        allowDuplicate: boolean = false,
        authToken?: (string | null),
    ): CancelablePromise<Link> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/link/single',
            cookies: {
                'auth_token': authToken,
            },
            query: {
                'lili_id': liliId,
                'allow_duplicate': allowDuplicate,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     *  Set
     * @param liliId
     * @param requestBody
     * @param authToken
     * @returns any Successful Response
     * @throws ApiError
     */
    public static linkOrderPatch(
        liliId: string,
        requestBody: Array<LiPosition>,
        authToken?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/link/order',
            cookies: {
                'auth_token': authToken,
            },
            query: {
                'lili_id': liliId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
