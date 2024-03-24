/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderView = {
    properties: {
        farm: {
            type: 'any-of',
            contains: [{
                type: 'Farm',
            }, {
                type: 'null',
            }],
            isRequired: true,
        },
        product: {
            type: 'any-of',
            contains: [{
                type: 'Farm',
            }, {
                type: 'null',
            }],
            isRequired: true,
        },
        quantity: {
            type: 'number',
            isRequired: true,
        },
        status: {
            type: 'any-of',
            contains: [{
                type: 'string',
            }, {
                type: 'null',
            }],
        },
        farm_id: {
            type: 'any-of',
            contains: [{
                type: 'number',
            }, {
                type: 'null',
            }],
        },
        product_id: {
            type: 'any-of',
            contains: [{
                type: 'number',
            }, {
                type: 'null',
            }],
        },
        date: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        cost: {
            type: 'number',
            isRequired: true,
        },
        id: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
