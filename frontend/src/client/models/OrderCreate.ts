/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Farm } from './Farm';

export type OrderCreate = {
    farm: (Farm | null);
    product: (Farm | null);
    quantity?: number;
    status?: (string | null);
    farm_id?: (number | null);
    product_id?: (number | null);
    date: string;
    cost: number;
};

