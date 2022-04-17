'use strict';

/**
 * investigation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::investigation.investigation');
