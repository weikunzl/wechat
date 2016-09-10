/**
 * Created by apple on 9/9/16.
 */
var sideMenu = api.require('sideMenu');
sideMenu.open({
    trajectoryColor: '#3F9FEA',
    btnArray: [{
        title: '图标1',
        'icon': 'widget://res/center/0.png',
        'bgImg': 'widget://res/sideMenu/bg.png'
    }, {
        title: '图标2',
        'icon': 'widget://res/center/1.png',
        'bgImg': 'widget://res/sideMenu/bg.png'
    }, {
        title: '图标3',
        'icon': 'widget://res/center/2.png',
        'bgImg': 'widget://res/sideMenu/bg.png'
    }, {
        title: '图标4',
        'icon': 'widget://res/center/3.png',
        'bgImg': 'widget://res/sideMenu/bg.png'
    }, {
        title: '图标5',
        'icon': 'widget://res/center/4.png',
        'bgImg': 'widget://res/sideMenu/bg.png'
    }],
    fixedOn: api.frameName
}, function(ret, err) {
    if (ret) {
        alert(JSON.stringify(ret));
    } else {
        alert(JSON.stringify(err));
    }
});