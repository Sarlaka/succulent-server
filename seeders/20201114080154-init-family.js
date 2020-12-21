/*
 * @Author: duchengdong
 * @Date: 2020-11-14 16:01:54
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 17:21:17
 * @Description: 
 */
'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};
const initData= [{
  "id": 1,
  "family_name": "景天科(Crassulaceae)",
  "family_img": null,
  "name": "景天科"
},
{
  "id": 2,
  "family_name": "百合科（LILIACEAE）",
  "family_img": null,
  "name": "百合科"
},
{
  "id": 3,
  "family_name": "仙人掌科（Cactaceae）",
  "family_img": null,
  "name": "仙人掌科"
},
{
  "id": 4,
  "family_name": "番杏科（AIZOACEAE）",
  "family_img": null,
  "name": "番杏科"
},
{
  "id": 5,
  "family_name": "大戟科(Euphorbiaceae)",
  "family_img": null,
  "name": "大戟科"
},
{
  "id": 6,
  "family_name": "龙舌兰科（AGAVACEAE）",
  "family_img": null,
  "name": "龙舌兰科"
},
{
  "id": 7,
  "family_name": "菊科（COMPOSITAE）",
  "family_img": null,
  "name": "菊科"
},
{
  "id": 8,
  "family_name": "萝藦科（Asclepiadaceae）",
  "family_img": null,
  "name": "萝藦科"
},
{
  "id": 9,
  "family_name": "马齿苋科(Portulacaceae)",
  "family_img": null,
  "name": "马齿苋科"
},
{
  "id": 10,
  "family_name": "夹竹桃科（Apocynum）",
  "family_img": null,
  "name": "夹竹桃科"
},
{
  "id": 11,
  "family_name": "牻牛儿苗科（Geraniaceae）",
  "family_img": null,
  "name": "牻牛儿苗科"
},
{
  "id": 12,
  "family_name": "胡椒科（Piperaceae）",
  "family_img": null,
  "name": "胡椒科"
},
{
  "id": 13,
  "family_name": "鸭跖草科(Commelinaceae)",
  "family_img": null,
  "name": "鸭跖草科"
},
{
  "id": 14,
  "family_name": "龙树科（DIDIERACEAE）",
  "family_img": null,
  "name": "龙树科"
},
{
  "id": 15,
  "family_name": "唇形科（Labiatae）",
  "family_img": null,
  "name": "唇形科"
},
{
  "id": 16,
  "family_name": "石蒜科(Amaryllidaceae)",
  "family_img": null,
  "name": "石蒜科"
},
{
  "id": 17,
  "family_name": "山药科(Dioscoreaceae)",
  "family_img": null,
  "name": "山药科"
},
{
  "id": 18,
  "family_name": "葡萄科（Vitaceae）",
  "family_img": null,
  "name": "葡萄科"
},
{
  "id": 19,
  "family_name": "苦苣苔科(Streptocarpus)",
  "family_img": null,
  "name": "苦苣苔科"
},
{
  "id": 20,
  "family_name": "西番莲科（Passifloraceae）",
  "family_img": null,
  "name": "西番莲科"
},
{
  "id": 21,
  "family_name": "桑科(Moraceae)",
  "family_img": null,
  "name": "桑科"
},
{
  "id": 22,
  "family_name": "风信子科(Hyacinthaceae)",
  "family_img": null,
  "name": "风信子科"
}
].map(v => ({...v,...timestamps}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'family',
      initData, {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const {
      Op
    } = Sequelize;
    let data = []
    for (let index = 1; index < 10000; index++) {
      data.push(index)
    }
    // 删除 shop 表 id 为 1，2，3，4 的记录
    return queryInterface.bulkDelete('family', {
      id: {
        [Op.in]: data
      }
    }, {});
  }
};

