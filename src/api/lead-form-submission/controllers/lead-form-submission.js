'use strict';

/**
 *  lead-form-submission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lead-form-submission.lead-form-submission');


// , ({ }) => {
//     return {
        
//         async create(ctx) {
//             const {
//                 name,
//                 reason,
//                 message,
//                 file
//             } = ctx.request.body;
//             const formData = new FormData();
//             formData.append('name', name);
//             formData.append('reason', reason);
//             formData.append('info', message);
//             formData.append('media', file);
//             const response = await fetch('https://localhost:1337api/lead-form-submissions', {
//                 method: 'POST',
//                 body: formData
//             });
//             const data = await response.json();
//             if (data.success) {
//                 ctx.response.status = 200;
//                 ctx.response.body = {
//                     message: 'Your message has been sent successfully'
//                 };
//             } else {
//                 ctx.response.status = 400;
//                 ctx.response.body = {
//                     message: 'Something went wrong'
//                 };
//             }
//         }
        
// }  
    
// }