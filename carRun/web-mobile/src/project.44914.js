window.__require=function t(e,o,i){function n(c,a){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var d="function"==typeof __require&&__require;if(!a&&d)return d(p,!0);if(s)return s(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var y=o[c]={exports:{}};e[c][0].call(y.exports,function(t){return n(e[c][1][t]||t)},y,y.exports,t,e,o,i)}return o[c].exports}for(var s="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({EnemyAI:[function(t,e,o){"use strict";cc._RF.push(e,"7c5dblIKRlMCJ5sPArsCRgB","EnemyAI"),cc.Class({extends:cc.Component,properties:{Player:cc.Node,_body:cc.RigidBody,_moveSpeed:{default:600,type:cc.Integer,tooltip:"\u6b63\u5e38\u901f\u5ea6"}},start:function(){this._body=this.node.getComponent(cc.RigidBody),this.Player=cc.find("Canvas/playerPhysics")},move:function(){var t=cc.v2(this.node.position.x,this.node.position.y),e=cc.v2(this.Player.x,this.Player.y),o=0,i=0;o=e.x-t.x>0?1:-1,i=e.y-t.y>0?1:-1,this.node.angle=cc.misc.radiansToDegrees(Math.atan2(e.y-t.y,e.x-t.x))-90,this._body.applyForceToCenter(cc.v2(o*this._moveSpeed,i*this._moveSpeed),!0)},update:function(t){this.move()}}),cc._RF.pop()},{}],EnemyCreater:[function(t,e,o){"use strict";cc._RF.push(e,"a1ac0gopMRIAbbauXlGBr0B","EnemyCreater"),cc.Class({extends:cc.Component,properties:{EnemyPrefab:cc.Prefab},start:function(){this.schedule(function(){var t=cc.instantiate(this.EnemyPrefab);this.node.addChild(t)},5)}}),cc._RF.pop()},{}],JoystickEnum:[function(t,e,o){"use strict";cc._RF.push(e,"29753pvkBhLc5rN/SCpZBwE","JoystickEnum"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={JoystickType:cc.Enum({FIXED:0,FOLLOW:1}),DirectionType:cc.Enum({FOUR:4,EIGHT:8,ALL:0}),SpeedType:cc.Enum({STOP:0,NORMAL:1,FAST:2}),JoystickEventType:cc.Enum({TOUCH_START:"touchStart",TOUCH_MOVE:"touchMove",TOUCH_END:"touchEnd",CHANGE_JOYSTICK_TYPE:"changeJoystickType"})};o.default=i,e.exports=o.default,cc._RF.pop()},{}],JoystickEvent:[function(t,e,o){"use strict";cc._RF.push(e,"96bc3M2TwxGabIeDD4rOmQc","JoystickEvent"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=cc.Class({properties:{_event:null},ctor:function(){this._event=new cc.EventTarget},on:function(t,e,o){this._event.on(t,e,o)},off:function(t,e,o){this._event.off(t,e,o)},emit:function(t){for(var e,o=arguments.length,i=new Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];(e=this._event).emit.apply(e,[t].concat(i))}}),n=null;i.getInstance=function(){return!n&&(n=new i),n};var s=i;o.default=s,e.exports=o.default,cc._RF.pop()},{}],Joystick:[function(t,e,o){"use strict";cc._RF.push(e,"965d6+vAp1OAajGemdUBWK+","Joystick");var i=s(t("JoystickEnum")),n=s(t("JoystickEvent"));function s(t){return t&&t.__esModule?t:{default:t}}cc.Class({extends:cc.Component,properties:{dot:{default:null,type:cc.Node,displayName:"Dot",tooltip:"\u6447\u6746\u64cd\u7eb5\u70b9"},ring:{default:null,type:cc.Node,displayName:"Ring",tooltip:"\u6447\u6746\u80cc\u666f\u8282\u70b9"},joystickType:{default:i.default.JoystickType.FIXED,type:i.default.JoystickType,displayName:"Touch Type",tooltip:"\u89e6\u6478\u7c7b\u578b"},directionType:{default:i.default.DirectionType.ALL,type:i.default.DirectionType,displayName:"Direction Type",tooltip:"\u65b9\u5411\u7c7b\u578b"},_stickPos:{default:null,type:cc.Node,tooltip:"\u6447\u6746\u6240\u5728\u4f4d\u7f6e"},_touchLocation:{default:null,type:cc.Node,tooltip:"\u89e6\u6478\u4f4d\u7f6e"},UINode:cc.Node},onLoad:function(){this._radius=this.ring.width/2,this._initTouchEvent(),this.joystickType===i.default.JoystickType.FOLLOW&&(this.node.opacity=0)},onEnable:function(){n.default.getInstance().on(i.default.JoystickEventType.CHANGE_JOYSTICK_TYPE,this._onChangeJoystickType,this)},onDisable:function(){n.default.getInstance().off(i.default.JoystickEventType.CHANGE_JOYSTICK_TYPE,this._onChangeJoystickType,this)},_onChangeJoystickType:function(t){this.joystickType=t,this.node.opacity=t===i.default.JoystickType.FIXED?255:0},_initTouchEvent:function(){this.node.on(cc.Node.EventType.TOUCH_START,this._touchStartEvent,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this._touchMoveEvent,this),this.node.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this._touchEndEvent,this)},_touchStartEvent:function(t){n.default.getInstance().emit(i.default.JoystickEventType.TOUCH_START,"joystick touch start",10);var e=this.node.convertToNodeSpaceAR(t.getLocation());if(this.joystickType===i.default.JoystickType.FIXED){this._stickPos=this.ring.getPosition();var o=e.sub(this.ring.getPosition()).mag();this._radius>o&&this.dot.setPosition(e)}else this.joystickType===i.default.JoystickType.FOLLOW&&(this._stickPos=e,this.node.opacity=255,this._touchLocation=t.getLocation(),this.ring.setPosition(e),this.dot.setPosition(e))},_touchMoveEvent:function(t){if(this.joystickType===i.default.JoystickType.FOLLOW&&this._touchLocation===t.getLocation())return!1;var e,o=this.ring.convertToNodeSpaceAR(t.getLocation()),s=o.mag(),c=this._stickPos.x+o.x,a=this._stickPos.y+o.y,p=cc.v2(c,a).sub(this.ring.getPosition()).normalize();if(this._radius>s)this.dot.setPosition(cc.v2(c,a)),e=i.default.SpeedType.NORMAL;else{var d=this._stickPos.x+p.x*this._radius,y=this._stickPos.y+p.y*this._radius;this.dot.setPosition(cc.v2(d,y)),e=i.default.SpeedType.FAST}n.default.getInstance().emit(i.default.JoystickEventType.TOUCH_MOVE,t,{speedType:e,moveDistance:p})},_touchEndEvent:function(t){this.dot.setPosition(this.ring.getPosition()),this.joystickType===i.default.JoystickType.FOLLOW&&(this.node.opacity=0),n.default.getInstance().emit(i.default.JoystickEventType.TOUCH_END,t,{speedType:i.default.SpeedType.STOP})}}),cc._RF.pop()},{JoystickEnum:"JoystickEnum",JoystickEvent:"JoystickEvent"}],MainCamera:[function(t,e,o){"use strict";cc._RF.push(e,"fe987Zm0v9L46KVzy9BorNC","MainCamera"),cc.Class({extends:cc.Component,properties:{Player:cc.Node,Controller:cc.Node,BackGround:cc.Node},start:function(){},update:function(t){this.node.position=this.Player.position,Math.abs(this.BackGround.position.x-this.node.position.x)>=360&&(this.BackGround.x=this.node.x),Math.abs(this.BackGround.position.y-this.node.position.y)>=360&&(this.BackGround.y=this.node.y)}}),cc._RF.pop()},{}],playerPhysics:[function(t,e,o){"use strict";cc._RF.push(e,"e466cSQbytE4aWeyIpUZUY8","playerPhysics");var i=s(t("./joystick/JoystickEnum")),n=s(t("./joystick/JoystickEvent"));function s(t){return t&&t.__esModule?t:{default:t}}cc.Class({extends:cc.Component,properties:{moveDir:{default:cc.v2(0,1),displayName:"Move Dir",tooltip:"\u79fb\u52a8\u65b9\u5411"},_speedType:{default:i.default.SpeedType.STOP,displayName:"Speed Type",type:i.default.SpeedType,tooltip:"\u901f\u5ea6\u7ea7\u522b"},_moveSpeed:{default:0,displayName:"Move Speed",tooltip:"\u79fb\u52a8\u901f\u5ea6"},stopSpeed:{default:0,type:cc.Integer,tooltip:"\u505c\u6b62\u65f6\u901f\u5ea6"},normalSpeed:{default:100,type:cc.Integer,tooltip:"\u6b63\u5e38\u901f\u5ea6"},fastSpeed:{default:200,type:cc.Integer,tooltip:"\u6700\u5feb\u901f\u5ea6"},_body:cc.RigidBody},onLoad:function(){cc.director.getPhysicsManager().enabled=!0,this._body=this.node.getComponent(cc.RigidBody),n.default.getInstance().on(i.default.JoystickEventType.TOUCH_START,this.onTouchStart,this),n.default.getInstance().on(i.default.JoystickEventType.TOUCH_MOVE,this.onTouchMove,this),n.default.getInstance().on(i.default.JoystickEventType.TOUCH_END,this.onTouchEnd,this)},onTouchStart:function(){},onTouchMove:function(t,e){this._speedType=e.speedType,this.moveDir=e.moveDistance},onTouchEnd:function(t,e){this._speedType=e.speedType},move:function(){this.node.angle=cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y,this.moveDir.x))-90,this._body.applyForceToCenter(cc.v2(this.moveDir.x*this._moveSpeed,this.moveDir.y*this._moveSpeed),!0)},update:function(t){switch(this._speedType){case i.default.SpeedType.STOP:this._moveSpeed=this.stopSpeed;break;case i.default.SpeedType.NORMAL:this._moveSpeed=this.normalSpeed;break;case i.default.SpeedType.FAST:this._moveSpeed=this.fastSpeed}this._speedType!==i.default.SpeedType.STOP&&this.move()}}),cc._RF.pop()},{"./joystick/JoystickEnum":"JoystickEnum","./joystick/JoystickEvent":"JoystickEvent"}]},{},["EnemyAI","EnemyCreater","MainCamera","Joystick","JoystickEnum","JoystickEvent","playerPhysics"]);