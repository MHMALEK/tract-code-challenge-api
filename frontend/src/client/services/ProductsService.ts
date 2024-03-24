/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductsView } from '../models/ProductsView';
import type { ProductView } from '../models/ProductView';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductsService {

    /**
     * Read Products
     * @returns ProductsView Successful Response
     * @throws ApiError
     */
    public static readProducts({
        skip,
        limit = 100,
    }: {
        skip?: number,
        limit?: number,
    }): CancelablePromise<ProductsView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/products/',
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
     * Read Product
     * @returns ProductView Successful Response
     * @throws ApiError
     */
    public static readProduct({
        id,
    }: {
        id: number,
    }): CancelablePromise<ProductView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
