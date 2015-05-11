var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('index', {//当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作，比如模版main.html里就有两个
        url: '/index',
        views: {
            '': {
                templateUrl: 'tpls/main.html'
            },
            'sider@index': {
                templateUrl: 'tpls/sider.html'
            },
            'list@index':{
                templateUrl: 'tpls/list.html'
            }
        }
    })
    .state('pageTab', {//一个页面里只有单个ui-view的写法
        url: '/pageTab',
        templateUrl: 'tpls/pageTab.html'
    })
    .state('PageTab.page1', {
        url: '/page1',
        templateUrl: 'tpls/page1.html'
    })
    .state('pageTab.page2', {
        url: '/page2',
        templateUrl: 'tpls/page2.html'
    })
    .state('pageTab.page3', {
        url: '/page3',
        templateUrl: 'tpls/page3.html'
    })

});