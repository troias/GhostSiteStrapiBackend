'use strict';
const bodyParser = require('koa-bodyparser');


/**
 *  lead-form-submission controller
 */

// add user from request to strapi model
// get id then add id to lead-form-submission

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lead-form-submission.lead-form-submission', () => (
    {


    async create(ctx) {

    


        const { data } = ctx.request.body;
        const files = ctx.request.files;

        console.log("user", ctx.user);
      
        console.log("user3", ctx.state.user)
      
     

        console.log("files", files);
       
      
       



        const parsedData = JSON.parse(data);
       
        

        console.log("parsedData", parsedData)

        console.log("files", files['files.media']);

    

        

        const leadFormSubmission = await strapi.query('api::lead-form-submission.lead-form-submission').create({
           data: {
       
           ...parsedData,

            },
            files: {
                media: files['files.media'],

           }
  

         
        


         

          
        });

        if (ctx.request.is('multipart/form-data')) {

            
        }
     
        return leadFormSubmission;
    
       




    }
        }
        
        )
   
)






// Language: javascript
// Path: my-project/backend/src/api/lead-form-submission/controllers/lead-form-submission.js