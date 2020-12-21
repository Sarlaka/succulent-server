/*
 * @Author: duchengdong
 * @Date: 2020-11-13 18:52:04
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-24 11:43:51
 * @Description: 
 */
const Joi = require('joi')
const models = require("../models");
const {
    paginationDefine,
    jwtHeaderDefine,
    responseHelper
} = require('../utils/router-helper');

const GROUP_NAME = 'succulents';

module.exports = [{
        method: 'GET',
        path: `/${GROUP_NAME}/family`,
        handler: async (request, h) => {
            const result = await models.family.findAll({
                attributes: [
                    'id', 'name'
                ]
            });
            return responseHelper(result)
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取所有属名',
            validate: {
                ...jwtHeaderDefine
            }
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/treeData`,
        handler: async (request, h) => {
            let familys = await models.family.findAll({
                attributes: [
                    'id', 'name'
                ]
            });
            const genus = await models.genus.findAll({
                attributes: [
                    'id', 'genusName', 'genusImg', 'familyId'
                ]
            });
            familys = familys.map(family => {
                let child = genus.filter(v => v.familyId == family.id)
                return {
                    ...family.dataValues,
                    child
                }
            })
            return responseHelper(familys)
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取所有属名和科名',
            validate: {
                ...jwtHeaderDefine
            }
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{familyId}/genus`,
        handler: async (request, h) => {
            const {
                rows: results,
                count: totalCount
            } = await models.genus.findAndCountAll({
                // 基于 shop_id 的条件查询
                where: {
                    family_id: request.params.familyId,
                },
                limit: request.query.pageSize,
                offset: (request.query.page - 1) * request.query.pageSize,
            });
            return h.paginate({
                ...responseHelper(),
                results,
            }, totalCount, {
                key: 'results'
            })
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '根据属名获取所有科名列表',
            validate: {
                ...jwtHeaderDefine,
                params: Joi.object({
                    familyId: Joi.number().required(),
                }),
                query: Joi.object({
                    ...paginationDefine
                })
            }
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{genusId}/plants`,
        handler: async (request, h) => {
            // models.plant.belongsTo(models.genus, {
            //     as: 'genus',
            //     foreignKey: 'genus_id',
            //     targetKey: 'id'
            // });
            const {
                rows: results,
                count: totalCount
            } = await models.plant.findAndCountAll({
                where: {
                    genus_id: request.params.genusId,
                },
                attributes: [
                    'id', 'name','thumbUrl'
                ],
                limit: request.query.pageSize,
                offset: (request.query.page - 1) * request.query.pageSize,
                // include: [{ // include关键字表示关联查询
                //     model: models.genus, // 指定关联的model
                //     as: 'genus', // 由于前面建立映射关系时为class表起了别名，那么这里也要与前面保持一致，否则会报错
                //     attributes: [
                //         'genus_name','id'
                //     ], // 这里的attributes属性表示查询class表的name和rank字段，其中对name字段起了别名className
                // }]
            });
            // 开启分页的插件，返回的数据结构里，需要带上 result 与 totalCount 两个字段
            return h.paginate({
                ...responseHelper(),
                results,
            }, totalCount, {
                key: 'results'
            })
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '根据genusid获取多肉植物列表',
            validate: {
                ...jwtHeaderDefine,
                params: Joi.object({
                    genusId: Joi.number().required(),
                }),
                query: Joi.object({
                    ...paginationDefine
                })
            }
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/plant/{plantId}`,
        handler: async (request, h) => {
            const plant = await models.plant.findOne({
                where: {
                    id: request.params.plantId,
                },
                include: [{ // include关键字表示关联查询
                    model: models.genus, // 指定关联的model
                    as: 'genus', // 由于前面建立映射关系时为class表起了别名，那么这里也要与前面保持一致，否则会报错
                    attributes: [
                        ['genus_name','genusName'],'id'
                    ], // 这里的attributes属性表示查询class表的name和rank字段，其中对name字段起了别名className
                    include: [{
                        model: models.family, 
                        as: 'family',
                        attributes: [
                            'name','id'
                        ],
                    }]
                }]
            });
            // 开启分页的插件，返回的数据结构里，需要带上 result 与 totalCount 两个字段
            return responseHelper(plant)
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '根据genusid获取多肉植物列表',
            validate: {
                ...jwtHeaderDefine,
                params: Joi.object({
                    plantId: Joi.number().required(),
                })
            }
        }
    },
];