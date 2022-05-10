'use strict';
const bodyParser = require('koa-bodyparser');


/**
 *  lead-form-submission controller
 */

// add user from request to strapi model
// get id then add id to lead-form-submission



const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lead-form-submission.lead-form-submission', () => ( {
    async create(ctx) {
        const {data} = ctx.request.body;
        const files = ctx.request.files;

        const parsedData = JSON.parse(data)

        const entry = await strapi.entityService.create('api::lead-form-submission.lead-form-submission', {
            data: {
                ...parsedData, 
            },
            files: {
                file: files['files.media']
            }
            
        }
        );


        ctx.send(entry);
        return entry;
    }

}));


