/*
 * @Author: duchengdong
 * @Date: 2020-11-14 16:09:34
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 17:06:06
 * @Description: 
 */
'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};
let initData = {
  "genus": [{
      "id": 1,
      "genus_name": "拟石莲属",
      "genus_img": "\/thumbUrl\/thumb-1.jpg",
      "family_id": 1
    },
    {
      "id": 2,
      "genus_name": "青锁龙属",
      "genus_img": "\/thumbUrl\/thumb-197.jpg",
      "family_id": 1
    },
    {
      "id": 3,
      "genus_name": "景天属",
      "genus_img": "\/thumbUrl\/thumb-290.jpg",
      "family_id": 1
    },
    {
      "id": 4,
      "genus_name": "仙女杯属",
      "genus_img": "\/thumbUrl\/thumb-338.jpg",
      "family_id": 1
    },
    {
      "id": 5,
      "genus_name": "伽蓝菜属",
      "genus_img": "\/thumbUrl\/thumb-381.jpg",
      "family_id": 1
    },
    {
      "id": 6,
      "genus_name": "莲花掌属",
      "genus_img": "\/thumbUrl\/thumb-402.jpg",
      "family_id": 1
    },
    {
      "id": 7,
      "genus_name": "长生草属",
      "genus_img": "\/thumbUrl\/thumb-422.jpg",
      "family_id": 1
    },
    {
      "id": 8,
      "genus_name": "厚叶草属",
      "genus_img": "\/thumbUrl\/thumb-440.jpg",
      "family_id": 1
    },
    {
      "id": 9,
      "genus_name": "奇峰锦属",
      "genus_img": "\/thumbUrl\/thumb-454.jpg",
      "family_id": 1
    },
    {
      "id": 10,
      "genus_name": "风车草属",
      "genus_img": "\/thumbUrl\/thumb-464.jpg",
      "family_id": 1
    },
    {
      "id": 11,
      "genus_name": "银波锦属",
      "genus_img": "\/thumbUrl\/thumb-475.jpg",
      "family_id": 1
    },
    {
      "id": 12,
      "genus_name": "杂交属",
      "genus_img": "\/thumbUrl\/thumb-482.jpg",
      "family_id": 1
    },
    {
      "id": 13,
      "genus_name": "天锦章属",
      "genus_img": "\/thumbUrl\/thumb-492.jpg",
      "family_id": 1
    },
    {
      "id": 14,
      "genus_name": "瓦松属",
      "genus_img": "\/thumbUrl\/thumb-498.jpg",
      "family_id": 1
    },
    {
      "id": 15,
      "genus_name": "Sedeveria属",
      "genus_img": "\/thumbUrl\/thumb-503.jpg",
      "family_id": 1
    },
    {
      "id": 16,
      "genus_name": "魔南景天属",
      "genus_img": "\/thumbUrl\/thumb-510.jpg",
      "family_id": 1
    },
    {
      "id": 17,
      "genus_name": "塔连属",
      "genus_img": "\/thumbUrl\/thumb-514.jpg",
      "family_id": 1
    },
    {
      "id": 18,
      "genus_name": "十二卷属\/瓦苇属",
      "genus_img": "\/thumbUrl\/thumb-516.jpg",
      "family_id": 2
    },
    {
      "id": 19,
      "genus_name": "芦荟属",
      "genus_img": "\/thumbUrl\/thumb-619.jpg",
      "family_id": 2
    },
    {
      "id": 20,
      "genus_name": "沙鱼掌属",
      "genus_img": "\/thumbUrl\/thumb-637.jpg",
      "family_id": 2
    },
    {
      "id": 21,
      "genus_name": "苍角殿属",
      "genus_img": "\/thumbUrl\/thumb-647.jpg",
      "family_id": 2
    },
    {
      "id": 22,
      "genus_name": "元宝掌属",
      "genus_img": "\/thumbUrl\/thumb-649.jpg",
      "family_id": 2
    },
    {
      "id": 23,
      "genus_name": "Scilla属",
      "genus_img": "\/thumbUrl\/thumb-650.jpg",
      "family_id": 2
    },
    {
      "id": 24,
      "genus_name": "虎眼万年青属",
      "genus_img": "\/thumbUrl\/thumb-651.jpg",
      "family_id": 2
    },
    {
      "id": 25,
      "genus_name": "乳突球属",
      "genus_img": "\/thumbUrl\/thumb-652.jpg",
      "family_id": 3
    },
    {
      "id": 26,
      "genus_name": "裸萼球属",
      "genus_img": "\/thumbUrl\/thumb-662.jpg",
      "family_id": 3
    },
    {
      "id": 27,
      "genus_name": "星球属",
      "genus_img": "\/thumbUrl\/thumb-669.jpg",
      "family_id": 3
    },
    {
      "id": 28,
      "genus_name": "花座球属",
      "genus_img": "\/thumbUrl\/thumb-678.jpg",
      "family_id": 3
    },
    {
      "id": 29,
      "genus_name": "鹿角柱属",
      "genus_img": "\/thumbUrl\/thumb-681.jpg",
      "family_id": 3
    },
    {
      "id": 30,
      "genus_name": "南国玉属",
      "genus_img": "\/thumbUrl\/thumb-683.jpg",
      "family_id": 3
    },
    {
      "id": 31,
      "genus_name": "岩牡丹属",
      "genus_img": "\/thumbUrl\/thumb-687.jpg",
      "family_id": 3
    },
    {
      "id": 32,
      "genus_name": "强刺球属",
      "genus_img": "\/thumbUrl\/thumb-690.jpg",
      "family_id": 3
    },
    {
      "id": 33,
      "genus_name": "多棱球属",
      "genus_img": "\/thumbUrl\/thumb-692.jpg",
      "family_id": 3
    },
    {
      "id": 34,
      "genus_name": "假昙花属",
      "genus_img": "\/thumbUrl\/thumb-694.jpg",
      "family_id": 3
    },
    {
      "id": 35,
      "genus_name": "姣丽球属",
      "genus_img": "\/thumbUrl\/thumb-695.jpg",
      "family_id": 3
    },
    {
      "id": 36,
      "genus_name": "光山属",
      "genus_img": "\/thumbUrl\/thumb-696.jpg",
      "family_id": 3
    },
    {
      "id": 37,
      "genus_name": "裸玉属",
      "genus_img": "\/thumbUrl\/thumb-697.jpg",
      "family_id": 3
    },
    {
      "id": 38,
      "genus_name": "圆盘玉属",
      "genus_img": "\/thumbUrl\/thumb-698.jpg",
      "family_id": 3
    },
    {
      "id": 39,
      "genus_name": "子孙球属",
      "genus_img": "\/thumbUrl\/thumb-699.jpg",
      "family_id": 3
    },
    {
      "id": 40,
      "genus_name": "仙人球属",
      "genus_img": "\/thumbUrl\/thumb-700.jpg",
      "family_id": 3
    },
    {
      "id": 41,
      "genus_name": "松球属",
      "genus_img": "\/thumbUrl\/thumb-703.jpg",
      "family_id": 3
    },
    {
      "id": 42,
      "genus_name": "矮疣球属",
      "genus_img": "\/thumbUrl\/thumb-704.jpg",
      "family_id": 3
    },
    {
      "id": 43,
      "genus_name": "圆筒仙人掌属",
      "genus_img": "\/thumbUrl\/thumb-705.jpg",
      "family_id": 3
    },
    {
      "id": 44,
      "genus_name": "帝冠属",
      "genus_img": "\/thumbUrl\/thumb-706.jpg",
      "family_id": 3
    },
    {
      "id": 45,
      "genus_name": "长钩球属",
      "genus_img": "\/thumbUrl\/thumb-707.jpg",
      "family_id": 3
    },
    {
      "id": 46,
      "genus_name": "白仙玉属",
      "genus_img": "\/thumbUrl\/thumb-708.jpg",
      "family_id": 3
    },
    {
      "id": 47,
      "genus_name": "金琥属",
      "genus_img": "\/thumbUrl\/thumb-709.jpg",
      "family_id": 3
    },
    {
      "id": 48,
      "genus_name": "顶花球属",
      "genus_img": "\/thumbUrl\/thumb-710.jpg",
      "family_id": 3
    },
    {
      "id": 49,
      "genus_name": "大凤龙属",
      "genus_img": "\/thumbUrl\/thumb-711.jpg",
      "family_id": 3
    },
    {
      "id": 50,
      "genus_name": "尤伯球属",
      "genus_img": "\/thumbUrl\/thumb-712.jpg",
      "family_id": 3
    },
    {
      "id": 51,
      "genus_name": "士童属",
      "genus_img": "\/thumbUrl\/thumb-713.jpg",
      "family_id": 3
    },
    {
      "id": 52,
      "genus_name": "斧突球属",
      "genus_img": "\/thumbUrl\/thumb-714.jpg",
      "family_id": 3
    },
    {
      "id": 53,
      "genus_name": "仙人柱属",
      "genus_img": "\/thumbUrl\/thumb-715.jpg",
      "family_id": 3
    },
    {
      "id": 54,
      "genus_name": "瘤玉属",
      "genus_img": "\/thumbUrl\/thumb-718.jpg",
      "family_id": 3
    },
    {
      "id": 55,
      "genus_name": "肉锥花属",
      "genus_img": "\/thumbUrl\/thumb-719.jpg",
      "family_id": 4
    },
    {
      "id": 56,
      "genus_name": "肉黄菊属",
      "genus_img": "\/thumbUrl\/thumb-731.jpg",
      "family_id": 4
    },
    {
      "id": 57,
      "genus_name": "虾钳花属",
      "genus_img": "\/thumbUrl\/thumb-735.jpg",
      "family_id": 4
    },
    {
      "id": 58,
      "genus_name": "生石花属",
      "genus_img": "\/thumbUrl\/thumb-738.jpg",
      "family_id": 4
    },
    {
      "id": 59,
      "genus_name": "仙宝属",
      "genus_img": "\/thumbUrl\/thumb-741.jpg",
      "family_id": 4
    },
    {
      "id": 60,
      "genus_name": "对叶花属",
      "genus_img": "\/thumbUrl\/thumb-743.jpg",
      "family_id": 4
    },
    {
      "id": 61,
      "genus_name": "未知",
      "genus_img": "\/thumbUrl\/thumb-745.jpg",
      "family_id": 4
    },
    {
      "id": 62,
      "genus_name": "棒叶花属",
      "genus_img": "\/thumbUrl\/thumb-748.jpg",
      "family_id": 4
    },
    {
      "id": 63,
      "genus_name": "菱鲛属",
      "genus_img": "\/thumbUrl\/thumb-749.jpg",
      "family_id": 4
    },
    {
      "id": 64,
      "genus_name": "照波属",
      "genus_img": "\/thumbUrl\/thumb-750.jpg",
      "family_id": 4
    },
    {
      "id": 65,
      "genus_name": "露草属",
      "genus_img": "\/thumbUrl\/thumb-751.jpg",
      "family_id": 4
    },
    {
      "id": 66,
      "genus_name": "旭波属",
      "genus_img": "\/thumbUrl\/thumb-752.jpg",
      "family_id": 4
    },
    {
      "id": 67,
      "genus_name": "Echinus属",
      "genus_img": "\/thumbUrl\/thumb-753.jpg",
      "family_id": 4
    },
    {
      "id": 68,
      "genus_name": "覆盆花属",
      "genus_img": "\/thumbUrl\/thumb-754.jpg",
      "family_id": 4
    },
    {
      "id": 69,
      "genus_name": "天女属",
      "genus_img": "\/thumbUrl\/thumb-755.jpg",
      "family_id": 4
    },
    {
      "id": 70,
      "genus_name": "快刀乱麻属",
      "genus_img": "\/thumbUrl\/thumb-756.jpg",
      "family_id": 4
    },
    {
      "id": 71,
      "genus_name": "露子花属",
      "genus_img": "\/thumbUrl\/thumb-757.jpg",
      "family_id": 4
    },
    {
      "id": 72,
      "genus_name": "碧光环属",
      "genus_img": "\/thumbUrl\/thumb-758.jpg",
      "family_id": 4
    },
    {
      "id": 73,
      "genus_name": "藻铃玉属",
      "genus_img": "\/thumbUrl\/thumb-761.jpg",
      "family_id": 4
    },
    {
      "id": 74,
      "genus_name": "春桃玉属",
      "genus_img": "\/thumbUrl\/thumb-762.jpg",
      "family_id": 4
    },
    {
      "id": 75,
      "genus_name": "奇鸟菊属",
      "genus_img": "\/thumbUrl\/thumb-763.jpg",
      "family_id": 4
    },
    {
      "id": 76,
      "genus_name": "舌叶花属",
      "genus_img": "\/thumbUrl\/thumb-764.jpg",
      "family_id": 4
    },
    {
      "id": 77,
      "genus_name": "银叶花属",
      "genus_img": "\/thumbUrl\/thumb-765.jpg",
      "family_id": 4
    },
    {
      "id": 78,
      "genus_name": "鹿角海棠属",
      "genus_img": "\/thumbUrl\/thumb-766.jpg",
      "family_id": 4
    },
    {
      "id": 79,
      "genus_name": "楠舟属",
      "genus_img": "\/thumbUrl\/thumb-767.jpg",
      "family_id": 4
    },
    {
      "id": 80,
      "genus_name": "大戟属",
      "genus_img": "\/thumbUrl\/thumb-768.jpg",
      "family_id": 5
    },
    {
      "id": 81,
      "genus_name": "白雀珊瑚属",
      "genus_img": "\/thumbUrl\/thumb-806.jpg",
      "family_id": 5
    },
    {
      "id": 82,
      "genus_name": "翡翠塔属",
      "genus_img": "\/thumbUrl\/thumb-808.jpg",
      "family_id": 5
    },
    {
      "id": 83,
      "genus_name": "麻疯树属",
      "genus_img": "\/thumbUrl\/thumb-810.jpg",
      "family_id": 5
    },
    {
      "id": 84,
      "genus_name": "龙舌兰属",
      "genus_img": "\/thumbUrl\/thumb-811.jpg",
      "family_id": 6
    },
    {
      "id": 85,
      "genus_name": "虎尾兰属",
      "genus_img": "\/thumbUrl\/thumb-830.jpg",
      "family_id": 6
    },
    {
      "id": 86,
      "genus_name": "千里光属(黄苑属)",
      "genus_img": "\/thumbUrl\/thumb-832.jpg",
      "family_id": 7
    },
    {
      "id": 87,
      "genus_name": "厚敦菊属",
      "genus_img": "\/thumbUrl\/thumb-847.jpg",
      "family_id": 7
    },
    {
      "id": 88,
      "genus_name": "剑龙角属",
      "genus_img": "\/thumbUrl\/thumb-849.jpg",
      "family_id": 8
    },
    {
      "id": 89,
      "genus_name": "亚罗汉属",
      "genus_img": "\/thumbUrl\/thumb-852.jpg",
      "family_id": 8
    },
    {
      "id": 90,
      "genus_name": "吊灯花属",
      "genus_img": "\/thumbUrl\/thumb-854.jpg",
      "family_id": 8
    },
    {
      "id": 91,
      "genus_name": "苦瓜掌属",
      "genus_img": "\/thumbUrl\/thumb-856.jpg",
      "family_id": 8
    },
    {
      "id": 92,
      "genus_name": "Edithcolea属",
      "genus_img": "\/thumbUrl\/thumb-857.jpg",
      "family_id": 8
    },
    {
      "id": 93,
      "genus_name": "球兰属",
      "genus_img": "\/thumbUrl\/thumb-858.jpg",
      "family_id": 8
    },
    {
      "id": 94,
      "genus_name": "Pseudolithos属",
      "genus_img": "\/thumbUrl\/thumb-859.jpg",
      "family_id": 8
    },
    {
      "id": 95,
      "genus_name": "Stapelianthus属",
      "genus_img": "\/thumbUrl\/thumb-860.jpg",
      "family_id": 8
    },
    {
      "id": 96,
      "genus_name": "丽钟角属",
      "genus_img": "\/thumbUrl\/thumb-861.jpg",
      "family_id": 8
    },
    {
      "id": 97,
      "genus_name": "豹皮花属",
      "genus_img": "\/thumbUrl\/thumb-862.jpg",
      "family_id": 8
    },
    {
      "id": 98,
      "genus_name": "萝藦属",
      "genus_img": "\/thumbUrl\/thumb-863.jpg",
      "family_id": 8
    },
    {
      "id": 99,
      "genus_name": "回欢草属",
      "genus_img": "\/thumbUrl\/thumb-864.jpg",
      "family_id": 9
    },
    {
      "id": 100,
      "genus_name": "马齿苋属",
      "genus_img": "\/thumbUrl\/thumb-870.jpg",
      "family_id": 9
    },
    {
      "id": 101,
      "genus_name": "毛马齿苋属",
      "genus_img": "\/thumbUrl\/thumb-874.jpg",
      "family_id": 9
    },
    {
      "id": 102,
      "genus_name": "棒棰树属",
      "genus_img": "\/thumbUrl\/thumb-875.jpg",
      "family_id": 10
    },
    {
      "id": 103,
      "genus_name": "沙漠玫瑰属",
      "genus_img": "\/thumbUrl\/thumb-883.jpg",
      "family_id": 10
    },
    {
      "id": 104,
      "genus_name": "龙骨葵属",
      "genus_img": "\/thumbUrl\/thumb-884.jpg",
      "family_id": 11
    },
    {
      "id": 105,
      "genus_name": "草胡椒属",
      "genus_img": "\/thumbUrl\/thumb-889.jpg",
      "family_id": 12
    },
    {
      "id": 106,
      "genus_name": "鸭跖草属（重扇属）",
      "genus_img": "\/thumbUrl\/thumb-893.jpg",
      "family_id": 13
    },
    {
      "id": 107,
      "genus_name": "银毛冠属",
      "genus_img": "\/thumbUrl\/thumb-897.jpg",
      "family_id": 13
    },
    {
      "id": 108,
      "genus_name": "亚龙木属",
      "genus_img": "\/thumbUrl\/thumb-898.jpg",
      "family_id": 14
    },
    {
      "id": 109,
      "genus_name": "龙树属（龙木属）",
      "genus_img": "\/thumbUrl\/thumb-899.jpg",
      "family_id": 14
    },
    {
      "id": 110,
      "genus_name": "Coleus属",
      "genus_img": "\/thumbUrl\/thumb-900.jpg",
      "family_id": 15
    },
    {
      "id": 111,
      "genus_name": "香茶菜属",
      "genus_img": "\/thumbUrl\/thumb-901.jpg",
      "family_id": 15
    },
    {
      "id": 112,
      "genus_name": "刺眼花属",
      "genus_img": "\/thumbUrl\/thumb-902.jpg",
      "family_id": 16
    },
    {
      "id": 113,
      "genus_name": "垂筒花属",
      "genus_img": "\/thumbUrl\/thumb-903.jpg",
      "family_id": 16
    },
    {
      "id": 114,
      "genus_name": "龟甲龙属",
      "genus_img": "\/thumbUrl\/thumb-904.jpg",
      "family_id": 17
    },
    {
      "id": 115,
      "genus_name": "葡萄翁属",
      "genus_img": "\/thumbUrl\/thumb-905.jpg",
      "family_id": 18
    },
    {
      "id": 116,
      "genus_name": "月之宴属",
      "genus_img": "\/thumbUrl\/thumb-906.jpg",
      "family_id": 19
    },
    {
      "id": 117,
      "genus_name": "阿丹藤属",
      "genus_img": "\/thumbUrl\/thumb-907.jpg",
      "family_id": 20
    },
    {
      "id": 118,
      "genus_name": "琉桑属（臭桑属）",
      "genus_img": "\/thumbUrl\/thumb-908.jpg",
      "family_id": 21
    },
    {
      "id": 119,
      "genus_name": "哨兵花属",
      "genus_img": "\/thumbUrl\/thumb-909.jpg",
      "family_id": 22
    }
  ]
}
initData.genus = initData.genus.map(v => ({...v,...timestamps}))


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
      'genus',
      initData.genus, {},
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
    return queryInterface.bulkDelete('genus', {
      id: {
        [Op.in]: data
      }
    }, {});
  }
}