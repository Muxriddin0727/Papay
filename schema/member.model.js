const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
    {
        mb_nick: {  
            type: String,
            required:true, 
            index: {unique:true, sparse:true} 
        },
        mb_phone: {
            type: String,
            required: true,
        },
        mb_password: {
            type: String,
            required:true,
            select:false
        },
        mb_types: {
            type: String,
            required: false,
            default: "USER",
            enum : {
                values: exports.member_type_enums,
                message: "{VALUE} is not among permitted values"
            }
        },
        mb_status: {
            type: String,
            required: false,
            default: "ACTIVE",
            enum : {
                values: exports.member_status_enums,
                message: "{VALUE} is not among permitted values"
            }
        },

        mb_full_name: {
            type: String,
            required:false,
        },
        mb_address: {
            type: String,
            required:false,
        },
        mb_decription: {
            type: String,
            required: false
        },
        mb_image: {
            type: String,
            required:false,
        },
        mb_point: {
            type: Number,
            required:false,
            default:0,
        },
        mb_top: {
            type: String,
            required: false,
            default: "N",
            enums:{
                values: exports.ordinary_enums,
                message: "{VALUE} is not among permitted values"
            },
        },

        mb_views: {
            type: Number,
            required: false,
            default: 0,
        },
        mb_likes: {
            type: Number,
            required:false,
            default:0,
        },
        mb_follow_cnt: {
            type: Number,
            required: false,
            default: 0,
        },
        mb_subscriber_cnt: {
            type: Number,
            required:false,
            default: 0,
        },
    },
    {timestamps:true}

    );
module.exports = mongoose.mosdel("Model", memberSchema);