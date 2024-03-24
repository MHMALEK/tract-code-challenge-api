/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderCreate } from '../models/OrderCreate';
import type { OrdersView } from '../models/OrdersView';
import type { OrderView } from '../models/OrderView';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrdersService {

    /**
     * Read Orders
     * @returns OrdersView Successful Response
     * @throws ApiError
     */
    public static readOrders({
        skip,
        limit = 100,
        farmId,
        productId,
    }: {
        skip?: number,
        limit?: number,
        farmId?: any,
        productId?: any,
    }): CancelablePromise<OrdersView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/orders/',
            query: {
                'skip': skip,
                'limit': limit,
                'farm_id': farmId,
                'product_id': productId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Order
     * @returns OrderView Successful Response
     * @throws ApiError
     */
    public static createOrder({
        requestBody,
    }: {
        requestBody: OrderCreate,
    }): CancelablePromise<OrderView> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/orders/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Order
     * @returns OrderView Successful Response
     * @throws ApiError
     */
    public static readOrder({
        id,
    }: {
        id: number,
    }): CancelablePromise<OrderView> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/orders/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
