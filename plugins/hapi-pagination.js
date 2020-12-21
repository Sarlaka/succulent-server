/*
 * @Author: duchengdong
 * @Date: 2020-11-10 16:37:46
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-17 22:34:01
 * @Description: 
 */
const hapiPagination = require('hapi-pagination');

const options = {
  query: {
    page: {
      name: 'page',
      default: 1,
    },
    limit: {
      name: 'pageSize',
      default: 10000,
    },
    pagination: {
      name: 'pagination',
      default: true,
    },
    invalid: 'defaults',
  },
  meta: {
    name: 'pageInfo',
    count: {
      active: true,
      name: 'count',
    },
    totalCount: {
      active: true,
      name: 'totalCount',
    },
    pageCount: {
      active: true,
      name: 'totalPage',
    },
    self: {
      active: false,
      name: 'self',
    },
    previous: {
      active: false,
      name: 'previous',
    },
    next: {
      active: false,
      name: 'next',
    },
    first: {
      active: false,
      name: 'first',
    },
    last: {
      active: false,
      name: 'last',
    },
    page: {
      active: true,
      // name == default.query.page.name
    },
    limit: {
      active: true,
      // name == default.query.limit.name
    },
  },
  results: {
    name: 'results',
  },
  reply: {
    paginate: 'paginate',
  },
  routes: {
    include: [
      '/succulents/plants',
      '/succulents/{familyId}/genus',
      '/succulents/{genusId}/plants'
    ],
    exclude: [],
  },
};

module.exports = {
  plugin: hapiPagination,
  options
}