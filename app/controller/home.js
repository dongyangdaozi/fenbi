'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      totalCount: 100,
      items: [
        {
          snippet: "[p]本题考查政治常识。2019年1月11日，[em]北[/em][em]京[/em]市级行政中心正式",
          sourceId: 1,
          source: "河北省2019年度定向招录选调生考试《基本素质和能力测试》真题",
          paperIndex: 59,
          id: 2343466,
          courseId: 1
        },
        {
          snippet: "[p]本题考查政治常识。2019年1月11日，[em]北[/em][em]京[/em]市级行政中心正式",
          sourceId: 1,
          source: "河北省2019年度定向招录选调生考试《基本素质和能力测试》真题",
          paperIndex: 59,
          id: 2343466,
          courseId: 1
        },
        {
          snippet: "[p]本题考查政治常识。2019年1月11日，[em]北[/em][em]京[/em]市级行政中心正式",
          sourceId: 1,
          source: "河北省2019年度定向招录选调生考试《基本素质和能力测试》真题",
          paperIndex: 59,
          id: 2343466,
          courseId: 1
        },
        {
          snippet: "[p]本题考查政治常识。2019年1月11日，[em]北[/em][em]京[/em]市级行政中心正式",
          sourceId: 1,
          source: "河北省2019年度定向招录选调生考试《基本素质和能力测试》真题",
          paperIndex: 59,
          id: 2343466,
          courseId: 1
        },
        {
          snippet: "[p]本题考查政治常识。2019年1月11日，[em]北[/em][em]京[/em]市级行政中心正式",
          sourceId: 1,
          source: "河北省2019年度定向招录选调生考试《基本素质和能力测试》真题",
          paperIndex: 59,
          id: 2343466,
          courseId: 1
        }
      ]
    };
  }
  async search() {
    const { ctx } = this;
    ctx.body = {
      count: 10,
      items: [
        {
          "topicId": 1,
          "answerId": 1,
          "topicContent": null,
          "answerContent": "凤娃飞机文",
          "type": 0,
          "tags": [1,
            2,
            3
          ],
          "status": 0,
          "inputTime": 0,
          "courseId": 0,
          "level": [
            0,
            2415753
          ],
          "responseId": 123,
          "answerTime": 0,
          "qinputer": 0
        },
        {
          "topicId": 1,
          "answerId": 1,
          "topicContent": null,
          "answerContent": "凤娃飞机文",
          "type": 0,
          "tags": [1,
            2,
            3
          ],
          "status": 0,
          "inputTime": 0,
          "courseId": 0,
          "level": [
            81,
            28555
          ],
          "responseId": 123,
          "answerTime": 0,
          "qinputer": 0
        },
        {
          "topicId": 1,
          "answerId": 1,
          "topicContent": null,
          "answerContent": "凤娃飞机文",
          "type": 0,
          "tags": [1,
            2,
            3
          ],
          "status": 0,
          "inputTime": 0,
          "courseId": 0,
          "level": [
            0,
            2423435
          ],
          "responseId": 123,
          "answerTime": 0,
          "qinputer": 0
        },
        {
          "topicId": 1,
          "answerId": 1,
          "topicContent": null,
          "answerContent": "凤娃飞机文",
          "type": 0,
          "tags": [1,
            2,
            3
          ],
          "status": 0,
          "inputTime": 0,
          "courseId": 0,
          "level": [
            0,
            2423438
          ],
          "responseId": 123,
          "answerTime": 0,
          "qinputer": 0
        }
      ]
    }
  }
}

module.exports = HomeController;
