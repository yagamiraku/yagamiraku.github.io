window.__require=function e(t,i,o){function n(s,a){if(!i[s]){if(!t[s]){var l=s.split("/");if(l=l[l.length-1],!t[l]){var r="function"==typeof __require&&__require;if(!a&&r)return r(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+s+"'")}s=l}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){return n(t[s][1][e]||e)},d,d.exports,e,t,i,o)}return i[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<o.length;s++)n(o[s]);return n}({EnemyAI:[function(e,t,i){"use strict";cc._RF.push(t,"7c5dblIKRlMCJ5sPArsCRgB","EnemyAI");e("Global");cc.Class({extends:cc.Component,properties:{_body:cc.RigidBody,moveSpeed:{default:410,type:cc.Integer,tooltip:"\u6b63\u5e38\u901f\u5ea6"},turnSpeed:{default:100,type:cc.Interger,tooltip:"\u8f6c\u5411\u901f\u5ea6"}},setMoveSpeed:function(e,t){this.moveSpeed=e,this.turnSpeed=t},start:function(){this._body=this.node.getComponent(cc.RigidBody),this.Player=cc.find("Canvas/GameNode/Player")},move:function(e){var t=this.node.angle+90,i=cc.misc.radiansToDegrees(Math.atan2(this.Player.y-this.node.y-this.node.parent.y,this.Player.x-this.node.x-this.node.parent.x))-t;if((i%=360)>180?i-=360:i<-180&&(i+=360),Math.abs(i)>e*this.turnSpeed){if(i>=0)var o=e*this.turnSpeed;else o=-e*this.turnSpeed;this.node.angle=this.node.angle+o}var n=cc.v2(Math.cos((this.node.angle+90)/180*Math.PI),Math.sin((this.node.angle+90)/180*Math.PI));this._body.applyForceToCenter(cc.v2(n.x*this.moveSpeed*3,n.y*this.moveSpeed*3),!0)},update:function(e){this.move(e),this.velocityNormalize()},velocityNormalize:function(){if(this._body.linearVelocity.mag()>=400){var e=this._body.linearVelocity.normalize();this._body.linearVelocity=cc.v2(400*e.x,400*e.y)}}}),cc._RF.pop()},{Global:"Global"}],EnemyCollider:[function(e,t,i){"use strict";cc._RF.push(t,"cd5a5fhGyJHEryP/iKabOM1","EnemyCollider");var o=e("Global");cc.Class({extends:cc.Component,properties:{},start:function(){},onBeginContact:function(e,t,i){0==o.pause&&("Enemy"!=i.node.name&&"Wall"!=i.node.name||(t.node.destroy(),o.score+=1))}}),cc._RF.pop()},{Global:"Global"}],EnemyCreater:[function(e,t,i){"use strict";cc._RF.push(t,"a1ac0gopMRIAbbauXlGBr0B","EnemyCreater");var o=e("Global");cc.Class({extends:cc.Component,properties:{moveSpeed:{default:410,displayName:"Move Speed",tooltip:"\u79fb\u52a8\u901f\u5ea6"},turnSpeed:{default:400,type:cc.Interger,tooltip:"\u8f6c\u5411\u901f\u5ea6"},EnemyPrefab:cc.Prefab,Follow:!1,offset:{default:cc.v2(0,0)},CreateTime:3},onLoad:function(){this.EnemyNode=cc.find("Canvas/GameNode/EnemyNode")},start:function(){this.Player=cc.find("Canvas/GameNode/Player"),this.schedule(function(){0==o.pause&&this.createEnemy()},this.CreateTime)},createEnemy:function(){var e=cc.instantiate(this.EnemyPrefab);e.position=this.node.position,this.EnemyNode.addChild(e),e.getComponent("EnemyAI").setMoveSpeed(this.moveSpeed,this.turnSpeed),o.score+=1},update:function(e){this.Follow&&(this.node.position=cc.v2(this.Player.x+this.offset.x,this.Player.y+this.offset.y))}}),cc._RF.pop()},{Global:"Global"}],FitItem:[function(e,t,i){"use strict";cc._RF.push(t,"a8f1aUvdRNHcKG1T+ph6AuR","FitItem");var o=e("Global");cc.Class({extends:cc.Component,properties:{FitID:0,FitSprite:cc.Node,FitBuyButton:cc.Node,FitSelectButton:cc.Node,FitBuyPrice:cc.Label},start:function(){},init:function(e){this.FitID=e;var t=this;cc.loader.loadRes(o.Fits[e].texture,cc.SpriteFrame,function(e,i){(null!=e&&console.log(e),null!=t.node)&&(t.FitSprite.getComponent(cc.Sprite).spriteFrame=i)}),0==o.fit[this.FitID]?(this.FitBuyButton.active=!0,this.FitSelectButton.active=!1,this.FitBuyPrice.string=o.Fits[e].price):(this.FitBuyButton.active=!1,this.FitSelectButton.active=!0)},onBtnClick:function(e,t){1==t?(o.fit[this.FitID]=1,this.FitBuyButton.active=!1,this.FitSelectButton.active=!0,o.balanceGold-=o.Fits[this.FitID].price,cocosAnalytics.CAItem.buy({itemID:"F"+this.ItemID,itemCount:1,VirtualCoin:o.Fits[this.FitID].price,VirtualType:"\u91d1\u5e01"})):2==t&&(o.selectFit=this.FitID)},update:function(e){o.balanceGold<o.Fits[this.FitID].price?this.FitBuyButton.getComponent(cc.Button).interactable=!1:this.FitBuyButton.getComponent(cc.Button).interactable=!0,o.selectFit==this.FitID?this.FitSelectButton.getComponent(cc.Button).interactable=!1:this.FitSelectButton.getComponent(cc.Button).interactable=!0}}),cc._RF.pop()},{Global:"Global"}],GameMainCamera:[function(e,t,i){"use strict";cc._RF.push(t,"260186kQptJhqpgcD8lP/YR","GameMainCamera");var o=e("Global");cc.Class({extends:cc.Component,properties:{Player:cc.Node,BackGround:cc.Node,UI_ItemNode:cc.Node,HeartPrefab:cc.Prefab,CoinPrefab:cc.Prefab,targetScore:cc.Integer,UI:cc.Prefab,ItemKeyPrefab:cc.Prefab,MotionPrefab:cc.Prefab},onLoad:function(){cc.game.on(cc.game.EVENT_HIDE,function(){cc.game.pause()},this),cc.game.on(cc.game.EVENT_SHOW,function(){cc.game.resume()},this)},start:function(){this.dtCount=0,o.init(o.level);var e=cc.instantiate(this.UI);cc.find("UI").addChild(e),o.targetScore=this.targetScore,this.Controller=cc.find("UI/UI/JoyStick"),this.UI_Score=cc.find("UI/UI/Score").getComponent(cc.Label),this.UI_HeartLayout=cc.find("UI/UI/HearLayout"),this.UI_Gold=cc.find("UI/UI/Gold").getComponent(cc.Label),this.UI_ItemKeyLayout=cc.find("UI/UI/ItemLayout"),this.Player_MotionStreak=cc.find("Canvas/GameNode/Player/MotionStreak");for(var t=0;t<o.Items.length;t++){var i=cc.instantiate(this.ItemKeyPrefab);this.UI_ItemKeyLayout.addChild(i),i.getComponent("ItemKey").init(o.Items[t].id)}for(var n=0;n<o.life;n++){var c=cc.instantiate(this.HeartPrefab);this.UI_HeartLayout.addChild(c)}this.levelInit(o.level)},levelInit:function(e){if(1==e)for(var t=1;t<=10;t++)this.createCoin(0,200*t);else if(2==e)for(var i=1;i<=10;i++)this.createCoin(200*i,0);else if(3==e)for(var o=1;o<=10;o++)this.createCoin(200*-o,0);else if(4==e)for(var n=1;n<=10;n++)this.createCoin(0,200*-n)},createCoin:function(e,t){var i=cc.instantiate(this.CoinPrefab);this.UI_ItemNode.addChild(i),i.setPosition(cc.v2(e,t))},update:function(e){if(this.dtCount+=e,this.dtCount>.05&&0==o.pause){var t=cc.instantiate(this.MotionPrefab);this.BackGround.addChild(t);var i=this.Player.convertToWorldSpaceAR(cc.v2(0,-this.Player.height));i.x=i.x-cc.winSize.width/2+6*Math.random(),i.y=i.y-cc.winSize.height/2+6*Math.random(),t.scale=.8+Math.random(),t.position=i,this.dtCount=0}this.node.position=this.Player.position,this.UI_Score.string=o.score+" / "+this.targetScore,this.UI_Gold.string=o.gold,this.UI_HeartLayout.children.length>o.life&&this.UI_HeartLayout.children[this.UI_HeartLayout.children.length-1].destroy()}}),cc._RF.pop()},{Global:"Global"}],Global:[function(e,t,i){"use strict";cc._RF.push(t,"747adSY7KZG6K15MWJ+CVCZ","Global"),t.exports={title:"\u70b9\u51fb\u5f00\u59cb\u6e38\u620f",score:0,level:1,maxLevel:4,life:3,gold:0,continue:!0,balanceGold:0,godMode:!1,pause:!1,Initialized:!1,targetScore:0,bag:[0,0,0],fit:[1,0,0,0],skin:[1,0,0,0],selectSkin:0,selectFit:0,Items:[{id:0,context:"\u4f7f\u7528\u540e\u53ef\u4ee5\u6d88\u9664\u6240\u6709\u654c\u4eba",price:100,texture:"block_fire_jelly",cd:10},{id:1,context:"\u4f7f\u7528\u540e\u51b2\u523a10\u79d2",price:100,texture:"block_flash_jelly",cd:10},{id:2,context:"\u4f7f\u7528\u540e\u65e0\u654c10\u79d2",price:100,texture:"block_ice_jelly",cd:10}],Fits:[{id:0,texture:"00",price:0},{id:1,texture:"02",price:150},{id:2,texture:"03",price:200},{id:3,texture:"01",price:300}],Skins:[{id:0,texture:"plane-line-alpha",price:0},{id:1,texture:"plane-line-alpha",price:100},{id:2,texture:"plane-line-alpha",price:200},{id:3,texture:"plane-line-alpha",price:300}],init:function(e){this.level=e,this.score=0,this.life=3,this.gold=0,this.continue=!0,this.godMode=!1,this.pause=!1}},cc._RF.pop()},{}],ItemKey:[function(e,t,i){"use strict";cc._RF.push(t,"c56d87gXIBL+rMfbg7bXGe3","ItemKey");var o=e("Global");cc.Class({extends:cc.Component,properties:{ItemSprite:cc.Node,ItemCount:cc.Label,ItemButton:cc.Button,ItemID:cc.Integer,ItemCD:cc.Integer,ItemProgress:cc.Node},start:function(){this.Player=cc.find("Canvas/GameNode/Player")},init:function(e){var t=this;this.ItemID=e,this.ItemCD=0,o.bag[this.ItemID]<=0&&(this.ItemButton.interactable=!1),cc.loader.loadRes(o.Items[e].texture,cc.SpriteFrame,function(e,i){(null!=e&&console.log(e),null!=t.node)&&(t.ItemSprite.getComponent(cc.Sprite).spriteFrame=i)})},onItemBtnClick:function(e,t){this.ItemButton.interactable=!1,o.bag[this.ItemID]-=1,this.Player.getComponent("playerPhysics").playerItemFunction(this.ItemID,this),this.ItemCD=o.Items[this.ItemID].cd,cocosAnalytics.CAItem.consume({itemID:this.ItemID,itemType:1,itemCount:1})},update:function(e){this.ItemCount.string=o.bag[this.ItemID],this.ItemCD>0&&(this.ItemCD-=e),this.ItemCD<=0&&(this.ItemButton.interactable=!0),this.ItemProgress.getComponent(cc.Sprite).fillRange=this.ItemCD/10}}),cc._RF.pop()},{Global:"Global"}],JoystickEnum:[function(e,t,i){"use strict";cc._RF.push(t,"29753pvkBhLc5rN/SCpZBwE","JoystickEnum"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={JoystickType:cc.Enum({FIXED:0,FOLLOW:1}),DirectionType:cc.Enum({FOUR:4,EIGHT:8,ALL:0}),SpeedType:cc.Enum({STOP:0,NORMAL:1,FAST:2}),JoystickEventType:cc.Enum({TOUCH_START:"touchStart",TOUCH_MOVE:"touchMove",TOUCH_END:"touchEnd",CHANGE_JOYSTICK_TYPE:"changeJoystickType"})};i.default=o,t.exports=i.default,cc._RF.pop()},{}],JoystickEvent:[function(e,t,i){"use strict";cc._RF.push(t,"96bc3M2TwxGabIeDD4rOmQc","JoystickEvent"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=cc.Class({properties:{_event:null},ctor:function(){this._event=new cc.EventTarget},on:function(e,t,i){this._event.on(e,t,i)},off:function(e,t,i){this._event.off(e,t,i)},emit:function(e){for(var t,i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];(t=this._event).emit.apply(t,[e].concat(o))}}),n=null;o.getInstance=function(){return!n&&(n=new o),n};var c=o;i.default=c,t.exports=i.default,cc._RF.pop()},{}],Joystick:[function(e,t,i){"use strict";cc._RF.push(t,"965d6+vAp1OAajGemdUBWK+","Joystick");var o=c(e("JoystickEnum")),n=c(e("JoystickEvent"));function c(e){return e&&e.__esModule?e:{default:e}}var s=e("Global");cc.Class({extends:cc.Component,properties:{dot:{default:null,type:cc.Node,displayName:"Dot",tooltip:"\u6447\u6746\u64cd\u7eb5\u70b9"},ring:{default:null,type:cc.Node,displayName:"Ring",tooltip:"\u6447\u6746\u80cc\u666f\u8282\u70b9"},joystickType:{default:o.default.JoystickType.FIXED,type:o.default.JoystickType,displayName:"Touch Type",tooltip:"\u89e6\u6478\u7c7b\u578b"},directionType:{default:o.default.DirectionType.ALL,type:o.default.DirectionType,displayName:"Direction Type",tooltip:"\u65b9\u5411\u7c7b\u578b"},_stickPos:{default:null,type:cc.Node,tooltip:"\u6447\u6746\u6240\u5728\u4f4d\u7f6e"},_touchLocation:{default:null,type:cc.Node,tooltip:"\u89e6\u6478\u4f4d\u7f6e"}},onLoad:function(){this._radius=this.ring.width/2,this._initTouchEvent(),this.joystickType===o.default.JoystickType.FOLLOW&&(this.node.opacity=0)},onEnable:function(){n.default.getInstance().on(o.default.JoystickEventType.CHANGE_JOYSTICK_TYPE,this._onChangeJoystickType,this)},onDisable:function(){n.default.getInstance().off(o.default.JoystickEventType.CHANGE_JOYSTICK_TYPE,this._onChangeJoystickType,this)},_onChangeJoystickType:function(e){this.joystickType=e,this.node.opacity=e===o.default.JoystickType.FIXED?255:0},_initTouchEvent:function(){this.node.on(cc.Node.EventType.TOUCH_START,this._touchStartEvent,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this._touchMoveEvent,this),this.node.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this._touchEndEvent,this)},_touchStartEvent:function(e){if(!s.pause){n.default.getInstance().emit(o.default.JoystickEventType.TOUCH_START,"joystick touch start",10);var t=this.node.convertToNodeSpaceAR(e.getLocation());if(this.joystickType===o.default.JoystickType.FIXED){this._stickPos=this.ring.getPosition();var i=t.sub(this.ring.getPosition()).mag();this._radius>i&&this.dot.setPosition(t)}else this.joystickType===o.default.JoystickType.FOLLOW&&(this._stickPos=t,this.node.opacity=255,this._touchLocation=e.getLocation(),this.ring.setPosition(t),this.dot.setPosition(t))}},_touchMoveEvent:function(e){if(!s.pause){if(this.joystickType===o.default.JoystickType.FOLLOW&&this._touchLocation===e.getLocation())return!1;var t,i=this.ring.convertToNodeSpaceAR(e.getLocation()),c=i.mag(),a=this._stickPos.x+i.x,l=this._stickPos.y+i.y,r=cc.v2(a,l).sub(this.ring.getPosition()).normalize();if(this._radius>c)this.dot.setPosition(cc.v2(a,l)),t=o.default.SpeedType.NORMAL;else{var d=this._stickPos.x+r.x*this._radius,h=this._stickPos.y+r.y*this._radius;this.dot.setPosition(cc.v2(d,h)),t=o.default.SpeedType.FAST}n.default.getInstance().emit(o.default.JoystickEventType.TOUCH_MOVE,e,{speedType:t,moveDistance:r})}},_touchEndEvent:function(e){s.pause||(this.dot.setPosition(this.ring.getPosition()),this.joystickType===o.default.JoystickType.FOLLOW&&(this.node.opacity=0),n.default.getInstance().emit(o.default.JoystickEventType.TOUCH_END,e,{speedType:o.default.SpeedType.STOP}))}}),cc._RF.pop()},{Global:"Global",JoystickEnum:"JoystickEnum",JoystickEvent:"JoystickEvent"}],Motion:[function(e,t,i){"use strict";cc._RF.push(t,"2fe3006LZ1Fn67B1wefDxlT","Motion");var o=e("Global");cc.Class({extends:cc.Component,properties:{},start:function(){var e=this;cc.loader.loadRes(o.Fits[o.selectFit].texture,cc.SpriteFrame,function(t,i){(null!=t&&console.log(t),null!=e.node)&&(e.node.getComponent(cc.Sprite).spriteFrame=i)})},update:function(e){this.node.opacity-=500*e,this.node.opacity<=0&&this.node.destroy()}}),cc._RF.pop()},{Global:"Global"}],PlayerCollider:[function(e,t,i){"use strict";cc._RF.push(t,"8d7ffZh4w1KNp5VrhalVKZQ","PlayerCollider");var o=e("Global");cc.Class({extends:cc.Component,properties:{},start:function(){this.UI_GameOver=cc.find("UI/UI/GameOver"),this.UI_LevelPass=cc.find("UI/UI/LevelPass"),this.UI_Lebel=cc.find("UI/UI/LevelPass/Label")},onBeginContact:function(e,t,i){0==o.pause&&0==o.godMode&&("Enemy"!=i.node.name&&"Wall"!=i.node.name||(i.node.name,o.life-=1,o.godMode=!0,o.createrSwitch=!1,o.life<=0?(this._body=this.node.getComponent(cc.RigidBody),this._body.linearVelocity=cc.v2(0,0),o.pause=!0,o.continue?(this.UI_GameOver.active=!0,o.continue=!1):(this.UI_LevelPass.active=!0,this.UI_Lebel.getComponent(cc.Label).string="\u518d\u63a5\u518d\u5389 !",cocosAnalytics.CALevels.failed({level:o.level}))):(this.schedule(function(){255==this.node.opacity?this.node.opacity=100:this.node.opacity=255},.1,11,.01),this.scheduleOnce(function(){o.godMode=!1,o.createrSwitch=!0},1)))),"Coin"==i.node.name&&(i.node.destroy(),o.gold+=1)},update:function(e){0==o.pause&&o.score>=o.targetScore&&(o.pause=!0,this.UI_LevelPass.active=!0,this.UI_Lebel.getComponent(cc.Label).string="\u606d\u559c\u8fc7\u5173 !",this._body.linearVelocity=cc.v2(0,0),o.continue=!1,cocosAnalytics.CALevels.complete({level:o.level}))}}),cc._RF.pop()},{Global:"Global"}],ShopItem:[function(e,t,i){"use strict";cc._RF.push(t,"55bbdh3efhJ+qGMeIADvUzG","ShopItem");var o=e("Global");cc.Class({extends:cc.Component,properties:{ItemSprite:cc.Node,ItemLabel:cc.Label,ItemCount:cc.Label,ItemButton:cc.Button,ItemButtonPrice:cc.Label,ItemID:cc.Integer},start:function(){},init:function(e){this.ItemID=e;var t=this;cc.loader.loadRes(o.Items[e].texture,cc.SpriteFrame,function(e,i){(null!=e&&console.log(e),null!=t.node)&&(t.ItemSprite.getComponent(cc.Sprite).spriteFrame=i)}),this.ItemLabel.string=o.Items[e].context,this.ItemButtonPrice.string=o.Items[e].price,this.ItemID=e},onBuyBtnClick:function(e,t){o.balanceGold-=o.Items[id].price,o.bag[this.ItemID]+=1,cocosAnalytics.CAItem.buy({itemID:"I"+this.ItemID,itemCount:1,VirtualCoin:o.Items[id].price,VirtualType:"\u91d1\u5e01"})},update:function(e){o.balanceGold<o.Items[id].price?this.ItemButton.interactable=!1:this.ItemButton.interactable=!0,this.ItemCount.string=o.bag[this.ItemID]}}),cc._RF.pop()},{Global:"Global"}],SkinItem:[function(e,t,i){"use strict";cc._RF.push(t,"da4daIqk15K969i0jVRw2o7","SkinItem");var o=e("Global");cc.Class({extends:cc.Component,properties:{SkinID:0,SkinSprite:cc.Node,SkinBuyButton:cc.Node,SkinSelectButton:cc.Node,SkinBuyPrice:cc.Label},start:function(){},init:function(e){this.SkinID=e;var t=this;cc.loader.loadRes(o.Skins[e].texture,cc.SpriteFrame,function(e,i){(null!=e&&console.log(e),null!=t.node)&&(t.SkinSprite.getComponent(cc.Sprite).spriteFrame=i)}),0==o.skin[this.SkinID]?(this.SkinBuyButton.active=!0,this.SkinSelectButton.active=!1,this.SkinBuyPrice.string=o.Skins[e].price):(this.SkinBuyButton.active=!1,this.SkinSelectButton.active=!0)},onBtnClick:function(e,t){1==t?(o.skin[this.SkinID]=1,this.SkinBuyButton.active=!1,this.SkinSelectButton.active=!0,o.balanceGold-=o.Skins[this.SkinID].price,cocosAnalytics.CAItem.buy({itemID:"S"+this.ItemID,itemCount:1,VirtualCoin:o.Skins[this.SkinID].price,VirtualType:"\u91d1\u5e01"})):2==t&&(o.selectSkin=this.SkinID)},update:function(e){o.balanceGold<o.Skins[this.SkinID].price?this.SkinBuyButton.getComponent(cc.Button).interactable=!1:this.SkinBuyButton.getComponent(cc.Button).interactable=!0,o.selectSkin==this.SkinID?this.SkinSelectButton.getComponent(cc.Button).interactable=!1:this.SkinSelectButton.getComponent(cc.Button).interactable=!0}}),cc._RF.pop()},{Global:"Global"}],gameover:[function(e,t,i){"use strict";cc._RF.push(t,"dfc41J5gPhGLL15XP8IXljk","gameover");var o=e("Global");cc.Class({extends:cc.Component,properties:{UI_Heart:cc.Node,HeartPrefab:cc.Prefab},start:function(){this.Player=cc.find("Canvas/GameNode/Player")},onBackbtnClick:function(){this.onGetRewardClick()},onWatchADbtnClick:function(){o.pause=!1,o.life=3;for(var e=0;e<o.life;e++){var t=cc.instantiate(this.HeartPrefab);this.UI_Heart.addChild(t)}this.node.active=!1,o.godMode=!0,this.schedule(function(){255==this.Player.opacity?this.Player.opacity=100:this.Player.opacity=255},.1,11,.01),this.scheduleOnce(function(){o.godMode=!1},1)},onGetRewardClick:function(){o.balanceGold+=o.gold,cc.director.loadScene("Main"),cc.loader.release("Level_"+o.level),this.levelCheck()},onGetDoubleRewardClick:function(){o.balanceGold+=2*o.gold,cc.director.loadScene("Main"),cc.loader.release("Level_"+o.level),this.levelCheck()},levelCheck:function(){o.level>=o.maxLevel?o.level=o.maxLevel:o.level+=1}}),cc._RF.pop()},{Global:"Global"}],main:[function(e,t,i){"use strict";cc._RF.push(t,"68f15XkLAVMxIKcHO0eOWm4","main");var o=e("Global");cc.Class({extends:cc.Component,properties:{Lable:cc.Node,UI_Gold:cc.Label,UI_Level:cc.Label,UI_MaxLevel:cc.Label,ProgressBar:cc.Node,ShopItemPrefab:cc.Prefab,FitItemPrefab:cc.Prefab,SkinItemPrefab:cc.Prefab},onLoad:function(){cc.game.on(cc.game.EVENT_HIDE,function(){cocosAnalytics.onPause(!0),cc.game.pause()},this),cc.game.on(cc.game.EVENT_SHOW,function(){cocosAnalytics.onResume(!0),cc.game.resume()},this),cocosAnalytics.init({appID:"686424984",version:"1.0.0",storeID:"github",engine:"cocos"}),this.loginStart()},loginStart:function(){cocosAnalytics.CAAccount.loginStart({channel:"000001"})},loginSuccess:function(){cocosAnalytics.CAAccount.loginSuccess({userID:"John Doe",age:1,sex:1,channel:"000001"})},start:function(){this.node.on(cc.Node.EventType.TOUCH_END,this._touchEndEvent,this),this.Lable.string=o.title,this.ShopUI=cc.find("Canvas/Shop"),this.FitUI=cc.find("Canvas/Fit"),this.SkinUI=cc.find("Canvas/Skin"),this.ShopList=cc.find("Canvas/Shop/ScrollView/view/content");for(var e=0;e<o.Items.length;e++){var t=cc.instantiate(this.ShopItemPrefab);this.ShopList.addChild(t),t.getComponent("ShopItem").init(o.Items[e].id)}this.FitList=cc.find("Canvas/Fit/ScrollView/view/content");for(var i=0;i<o.Fits.length;i++){var n=cc.instantiate(this.FitItemPrefab);this.FitList.addChild(n),n.getComponent("FitItem").init(o.Fits[i].id)}this.SkinList=cc.find("Canvas/Skin/ScrollView/view/content");for(var c=0;c<o.Skins.length;c++){var s=cc.instantiate(this.SkinItemPrefab);this.SkinList.addChild(s),s.getComponent("SkinItem").init(o.Skins[c].id)}o.Initialized?this.savePlayerProfile():this.loadPlayerProfile()},savePlayerProfile:function(){},loadPlayerProfile:function(){o.Initialized=!0,o.balanceGold=500,o.bag=[50,5,100],o.selectSkin=0,o.selectFit=0},onShopBtnClick:function(){this.ShopUI.active=!0},onShopCloseBtnClick:function(){this.ShopUI.active=!1,this.FitUI.active=!1,this.SkinUI.active=!1,this.savePlayerProfile()},onFitBtnClick:function(){this.FitUI.active=!0},onSkinBtnClick:function(){this.SkinUI.active=!0},_touchEndEvent:function(e){!this.Lable.active||this.ShopUI.active||this.FitUI.active||this.SkinUI.active||(this.Lable.active=!1,this.ProgressBar.active=!0,cc.find("Canvas/ShopButton").active=!1,cc.find("Canvas/FitButton").active=!1,cc.director.preloadScene("Level_"+o.level,this.onProgress.bind(this),function(){cc.director.loadScene("Level_"+o.level)}))},onProgress:function(e,t,i){this.ProgressBar.progress=e/t},update:function(e){this.UI_Gold.string=o.balanceGold,this.UI_Level.string="\u7b2c "+o.level+" \u5173",this.UI_MaxLevel.string="\u5171 "+o.maxLevel+" \u5173"}}),cc._RF.pop()},{Global:"Global"}],playerPhysics:[function(e,t,i){"use strict";cc._RF.push(t,"e466cSQbytE4aWeyIpUZUY8","playerPhysics");var o=c(e("../joystick/JoystickEnum")),n=c(e("../joystick/JoystickEvent"));function c(e){return e&&e.__esModule?e:{default:e}}var s=e("Global");cc.Class({extends:cc.Component,properties:{moveDir:{default:cc.v2(0,1),displayName:"Move Dir",tooltip:"\u79fb\u52a8\u65b9\u5411"},_speedType:{default:o.default.SpeedType.STOP,displayName:"Speed Type",type:o.default.SpeedType,tooltip:"\u901f\u5ea6\u7ea7\u522b"},_moveSpeed:{default:0,displayName:"Move Speed",tooltip:"\u79fb\u52a8\u901f\u5ea6"},stopSpeed:{default:100,type:cc.Integer,tooltip:"\u505c\u6b62\u65f6\u901f\u5ea6"},normalSpeed:{default:200,type:cc.Integer,tooltip:"\u6b63\u5e38\u901f\u5ea6"},fastSpeed:{default:400,type:cc.Integer,tooltip:"\u6700\u5feb\u901f\u5ea6"},turnSpeed:{default:200,type:cc.Interger,tooltip:"\u8f6c\u5411\u901f\u5ea6"},_body:cc.RigidBody,GameNode:cc.Node,SpeedAS:{default:1,type:cc.Interger},MotionPrefab:cc.Prefab},onLoad:function(){var e=this;cc.director.getPhysicsManager().enabled=!0,this._body=this.node.getComponent(cc.RigidBody),n.default.getInstance().on(o.default.JoystickEventType.TOUCH_START,this.onTouchStart,this),n.default.getInstance().on(o.default.JoystickEventType.TOUCH_MOVE,this.onTouchMove,this),n.default.getInstance().on(o.default.JoystickEventType.TOUCH_END,this.onTouchEnd,this),cocosAnalytics.CALevels.begin({level:s.level}),cc.loader.loadRes(s.Skins[s.selectSkin].texture,cc.SpriteFrame,function(t,i){(null!=t&&console.log(t),null!=e.node)&&(e.node.getComponent(cc.Sprite).spriteFrame=i)})},onTouchStart:function(){},onTouchMove:function(e,t){this._speedType=t.speedType,this.moveDir=t.moveDistance},onTouchEnd:function(e,t){this._speedType=t.speedType},playerItemFunction:function(e,t){if(!s.pause)if(0==e){this.EnemyNode=cc.find("Canvas/GameNode/EnemyNode");for(var i=0;i<this.EnemyNode.children.length;i++){this.EnemyNode.children[i].destroy(),s.score+=1}}else 1==e?(this.SpeedAS=1.2,this.scheduleOnce(function(){this.SpeedAS=1},10)):2==e&&(s.godMode=!0,this.schedule(function(){255==this.node.opacity?this.node.opacity=100:this.node.opacity=255},.1,101,.01),this.scheduleOnce(function(){s.godMode=!1},10))},move:function(e){if(!s.pause){var t=cc.misc.radiansToDegrees(Math.atan2(this.moveDir.y,this.moveDir.x))-(this.node.angle+90);if(t>180?t-=360:t<-180&&(t+=360),Math.abs(t)>e*this.turnSpeed){if(t>=0)var i=e*this.turnSpeed;else i=-e*this.turnSpeed;this.node.angle=(this.node.angle+i)%360}var o=cc.v2(Math.cos((this.node.angle+90)/180*Math.PI),Math.sin((this.node.angle+90)/180*Math.PI));this._body.applyForceToCenter(cc.v2(o.x*this._moveSpeed*5,o.y*this._moveSpeed*5),!0)}},update:function(e){if(Math.abs(this.node.position.x)>=this.GameNode._contentSize.width/2)if(this.node.position.x>0){this.node.setPosition(cc.v2(this.node.position.x-this.GameNode._contentSize.width,this.node.position.y)),this.EnemyNode=cc.find("Canvas/GameNode/EnemyNode");for(var t=0;t<this.EnemyNode.children.length;t++){var i=this.EnemyNode.children[t];i.setPosition(i.x-this.GameNode._contentSize.width,i.y)}}else{this.node.setPosition(cc.v2(this.node.position.x+this.GameNode._contentSize.width,this.node.position.y)),this.EnemyNode=cc.find("Canvas/GameNode/EnemyNode");for(var n=0;n<this.EnemyNode.children.length;n++){var c=this.EnemyNode.children[n];c.setPosition(c.x+this.GameNode._contentSize.width,c.y)}}if(Math.abs(this.node.position.y)>=this.GameNode._contentSize.height/2)if(this.node.position.y>0){this.node.setPosition(cc.v2(this.node.position.x,this.node.position.y-this.GameNode._contentSize.height)),this.EnemyNode=cc.find("Canvas/GameNode/EnemyNode");for(var s=0;s<this.EnemyNode.children.length;s++){var a=this.EnemyNode.children[s];a.setPosition(a.x,a.y-this.GameNode._contentSize.height)}}else{this.node.setPosition(cc.v2(this.node.position.x,this.node.position.y+this.GameNode._contentSize.height)),this.EnemyNode=cc.find("Canvas/GameNode/EnemyNode");for(var l=0;l<this.EnemyNode.children.length;l++){var r=this.EnemyNode.children[l];r.setPosition(r.x,r.y+this.GameNode._contentSize.height)}}switch(this._speedType){case o.default.SpeedType.STOP:this._moveSpeed=this.stopSpeed,this.velocityNormalize();break;case o.default.SpeedType.NORMAL:this._moveSpeed=this.normalSpeed,this.velocityNormalize();break;case o.default.SpeedType.FAST:this._moveSpeed=this.fastSpeed,this.velocityNormalize()}this._speedType!==o.default.SpeedType.STOP&&this.move(e)},velocityNormalize:function(){if(this._body.linearVelocity.mag()>=342*this.SpeedAS){var e=this._body.linearVelocity.normalize();this._body.linearVelocity=cc.v2(342*e.x*this.SpeedAS,342*e.y*this.SpeedAS)}}}),cc._RF.pop()},{"../joystick/JoystickEnum":"JoystickEnum","../joystick/JoystickEvent":"JoystickEvent",Global:"Global"}]},{},["Global","ItemKey","EnemyCollider","PlayerCollider","EnemyAI","EnemyCreater","GameMainCamera","Motion","playerPhysics","Joystick","JoystickEnum","JoystickEvent","gameover","FitItem","ShopItem","SkinItem","main"]);