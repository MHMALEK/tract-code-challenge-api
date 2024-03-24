/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FarmsView } from '../models/FarmsView';
import type { FarmView } from '../models/FarmView';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FarmsService {

    /**
     * Read Farms
     * @returns FarmsView Successful Response
     * @throws ApiError
     */
    public static readFarms({
        skip,
        limit = 100,
    }: {
        skip?: number,
        limit?: number,
    }): CancelablePromise<FarmsView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/farms/',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Farm
     * @returns FarmView Successful Response
     * @throws ApiError
     */
    public static readFarm({
        id,
    }: {
        id: number,
    }): CancelablePromise<FarmView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/farms/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
