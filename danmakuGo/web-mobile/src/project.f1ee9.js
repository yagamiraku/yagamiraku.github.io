window.__require=function e(t,c,n){function i(o,r){if(!c[o]){if(!t[o]){var s=o.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!r&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+o+"'")}o=s}var h=c[o]={exports:{}};t[o][0].call(h.exports,function(e){return i(t[o][1][e]||e)},h,h.exports,e,t,c,n)}return c[o].exports}for(var a="function"==typeof __require&&__require,o=0;o<n.length;o++)i(n[o]);return i}({EnemyBullet:[function(e,t,c){"use strict";cc._RF.push(t,"af4b41LxbRCFrZ1VMOI0eDu","EnemyBullet"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],Enemy:[function(e,t,c){"use strict";cc._RF.push(t,"86076awQKxKpqWhpsg1FDmt","Enemy");var n=e("Global");cc.Class({extends:cc.Component,properties:{EnemyBullet1Prefeb:cc.Prefab,EnemyBullet2Prefeb:cc.Prefab},start:function(){this.canvas=cc.find("Canvas"),this.anim=this.getComponent(cc.Animation),this.dtCount=0;var e=0,t=0,c=0,i=0,a=0,o=0;this.schedule(function(){if(-1==n.danmakuMode)e=0,t=0,c=0,i=0;else if(0==n.danmakuMode){if(o%50==0)for(var r=0;r<45;r++)this.createEnemyBullet(1,a+8*r,200,0,cc.v2(0,0),cc.v2(0,0))}else if(1==n.danmakuMode){if(o%50==0)for(var s=0;s<45;s++)a%2==0?this.createEnemyBullet(1,2*s+180,200,0,cc.v2(0,0),cc.v2(0,0)):this.createEnemyBullet(2,2*s+270,200,0,cc.v2(0,0),cc.v2(0,0))}else if(2==n.danmakuMode){if(o%50==0){for(var l=0;l<45;l++)this.createEnemyBullet(1,a+16*l,200,0,cc.v2(0,0),cc.v2(0,0));for(var h=0;h<45;h++)this.createEnemyBullet(2,a+16*h,400,0,cc.v2(0,0),cc.v2(0,0))}}else if(3==n.danmakuMode){if(o%50==0){for(var u=0;u<15;u++)this.createEnemyBullet(1,a%3+60+4*u,200,2,cc.v2(0,0),cc.v2(0,0));for(var d=0;d<12;d++)this.createEnemyBullet(2,a%3+16*d,200,2,cc.v2(0,0),cc.v2(0,0))}}else if(4==n.danmakuMode){if(o%30==0){for(var y=0;y<24;y++)this.createEnemyBullet(1,.5*a+15*y,200,0,cc.v2(0,0),cc.v2(0,0));e+=1}if(o%80==0&&e>8)for(var m=0;m<90;m++)this.createEnemyBullet(2,4*m,200,0,cc.v2(0,0),cc.v2(0,0))}else if(5==n.danmakuMode){if(o%80==0){var f=15+Math.ceil(15*Math.random());this.scheduleOnce(function(){for(var e=0;e<45;e++)e%45<=f+1&&e%45>=f-1||this.createEnemyBullet(1,2*e-45,200,0,cc.v2(0,0),cc.v2(0,0))},.1),this.scheduleOnce(function(){for(var e=45;e<90;e++)e%45<=f+1&&e%45>=f-1||this.createEnemyBullet(1,2*e-45,200,0,cc.v2(0,0),cc.v2(0,0))},.2),this.scheduleOnce(function(){for(var e=90;e<135;e++)e%45<=f+1&&e%45>=f-1||this.createEnemyBullet(1,2*e-45,200,0,cc.v2(0,0),cc.v2(0,0))},.3),this.scheduleOnce(function(){for(var e=135;e<180;e++)e%45<=f+1&&e%45>=f-1||this.createEnemyBullet(1,2*e-45,200,0,cc.v2(0,0),cc.v2(0,0))},.4)}}else if(6==n.danmakuMode){if(o%20==0){f=-320+Math.ceil(640*Math.random());this.createEnemyBullet(1,270,200,0,cc.v2(f,160),cc.v2(0,0)),this.createEnemyBullet(1,270,200,0,cc.v2(f-20,160),cc.v2(0,0)),this.createEnemyBullet(1,270,200,0,cc.v2(f+20,160),cc.v2(0,0))}0==t?(e+=1)>180&&(t=1):0==(e-=1)&&(t=0),0==c?(i+=1,e>80&&(c=1)):0==(i-=1)&&(c=0),o%4==0&&(this.createEnemyBullet(2,270,400,0,cc.v2(e+40,i-40),cc.v2(-e,0)),this.createEnemyBullet(2,270,400,0,cc.v2(-e-40,i-40),cc.v2(e,0)))}else if(7==n.danmakuMode)(e=4*o%360)>240&&e<300?this.createEnemyBullet(2,e,200,0,cc.v2(0,0),cc.v2(0,0)):this.createEnemyBullet(2,e,200,1,cc.v2(0,0),cc.v2(0,0));else if(8==n.danmakuMode&&o%50==0){e=Math.ceil(160*Math.random()-80),t=Math.ceil(160*Math.random()-80);for(var v=0;v<45;v++)8*v>240&&8*v<300?this.createEnemyBullet(1,8*v,200,0,cc.v2(e,0),cc.v2(0,0)):this.createEnemyBullet(1,8*v,200,1,cc.v2(e,0),cc.v2(0,0))}(o+=1)%10==0&&(a+=1)},.01)},createEnemyBullet:function(e,t,c,i,a,o){if(!n.isPlayAnim&&this.EnemyBullet1Prefeb){if(1==e)var r=cc.instantiate(this.EnemyBullet1Prefeb);else if(2==e)r=cc.instantiate(this.EnemyBullet2Prefeb);this.node.addChild(r),r.parent=this.node.parent,r.position=cc.v2(this.node.position.x+a.x,this.node.position.y+a.y);for(var s=[],l=null,h=null,u=Math.sqrt(Math.pow(cc.winSize.width,2)+Math.pow(cc.winSize.height,2)),d=null,y=0;y<=i;){t%=360,l=0==y?r.position:h,h=cc.v2(Math.cos(t/180*Math.PI)*u+l.x,Math.sin(t/180*Math.PI)*u+l.y),d=u/c;for(var m=cc.director.getPhysicsManager().rayCast(this.canvas.convertToWorldSpaceAR(l),this.canvas.convertToWorldSpaceAR(h),cc.RayCastType.AllClosest),f=0;f<m.length;f++)if("wall"==m[f].collider.node.group){0==m[f].normal.x&&-1==m[f].normal.y?t=360-t:0==m[f].normal.x&&1==m[f].normal.y?t=0-t:1==m[f].normal.x&&0==m[f].normal.y?t=180-t:-1==m[f].normal.x&&0==m[f].normal.y&&(t=540-t);var v=this.canvas.convertToNodeSpaceAR(m[f].point);h=cc.v2(v.x+o.x,v.y+o.y),d*=m[f].fraction,t%=360;break}s.push(cc.moveTo(d,h)),y++}var P=cc.removeSelf();s.push(P);var p=cc.sequence(s);r.runAction(p)}},onBeginContact:function(e,t,c){var i=this;if("PlayerBullet"==c.node.name)if(c.node.destroy(),0==n.isPlayAnim)n.HP>0?(n.HP-=n.PlayerACT,n.score+=1):n.isPlayAnim=!0;else if(-1!=n.danmakuMode){var a=n.danmakuMode;n.danmakuMode=-1,n.godMode=!0,n.death+=1,this.send=0,this.anim.play("Enemy_Big_Explode"),n.cleanEnemyBullets(),a>=n.danmakuModeMAX?cc.loader.loadRes("Prefab/GameOver",function(e,t){var c=cc.instantiate(t);c.active=!0,c.parent=i.node.parent,n.lockController=!0,c.getComponent("GameOver").setTitle("\u606d\u559c\u901a\u5173")}):(this.schedule(function(){n.HP+=10},.001,59,2),this.scheduleOnce(function(){n.danmakuMode=a+1,n.godMode=!1,n.lockController=!1,n.isPlayAnim=!1},5))}},Enemy_Explode:function(){this.anim.play()},update:function(e){}}),cc._RF.pop()},{Global:"Global"}],GameOver:[function(e,t,c){"use strict";cc._RF.push(t,"d3b43HVMU5MvqPC82gx9wQk","GameOver"),cc.Class({extends:cc.Component,properties:{UI_Title:cc.Label},start:function(){},reStart:function(){cc.director.loadScene("Game")},setTitle:function(e){this.UI_Title.string=e}}),cc._RF.pop()},{}],Game:[function(e,t,c){"use strict";cc._RF.push(t,"5ed84xzYjpLZKMBrmL7r8SX","Game");var n=e("Global");cc.Class({extends:cc.Component,properties:{PlayerBulletPrefeb:cc.Prefab,PlayerPrefeb:cc.Prefab,EnemyPrefeb:cc.Prefab,UI_HP:cc.Label,UI_Score:cc.Label,UI_Death:cc.Label,UI_Life:cc.Label},onLoad:function(){var e=cc.director.getPhysicsManager();e.enabled=!0,e.enabledAccumulator=!0,e.FIXED_TIME_STEP=1/15,e.VELOCITY_ITERATIONS=4,e.POSITION_ITERATIONS=4,e.debugDrawFlags=cc.PhysicsManager.DrawBits.e_aabbBit|cc.PhysicsManager.DrawBits.e_pairBit|cc.PhysicsManager.DrawBits.e_centerOfMassBit|cc.PhysicsManager.DrawBits.e_jointBit|cc.PhysicsManager.DrawBits.e_shapeBit,e.debugDrawFlags=0},start:function(){void 0===this.Player&&(this.Player=cc.instantiate(this.PlayerPrefeb),this.node.addChild(this.Player),this.nodePos=this.Player.getPosition(),this.Player.parent.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.Player.parent.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.Player.parent.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.Player.parent.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancel,this)),void 0===this.Enemy&&(this.Enemy=cc.instantiate(this.EnemyPrefeb),this.Enemy.setPosition(cc.v2(0,320)),this.node.addChild(this.Enemy)),this.Fire=!1,this.dtCountNormal=0,this.dtCountAim=0,n.init()},onTouchStart:function(e){0==n.lockController&&(this.Fire=!0,this.nodePos=this.Player.getPosition())},onTouchMove:function(e){if(0==n.lockController){this.Fire=!0;var t=e.getTouches(),c=this.Player.parent.convertToNodeSpaceAR(t[0].getStartLocation()),i=this.Player.parent.convertToNodeSpaceAR(t[0].getLocation()),a=c.sub(i);this.Player.x=this.nodePos.x-a.x,this.Player.y=this.nodePos.y-a.y;var o=-this.Player.parent.width/2+this.Player.width/2,r=Math.abs(o),s=-this.Player.parent.height/2+this.Player.height/2,l=Math.abs(s),h=this.Player.getPosition();h.x<o&&(h.x=o),h.x>r&&(h.x=r),h.y<s&&(h.y=s),h.y>l&&(h.y=l),this.Player.setPosition(h)}},onTouchEnd:function(){0==n.lockController&&(this.Fire=!1,this.nodePos=this.Player.getPosition())},onTouchCancel:function(){0==n.lockController&&(this.Fire=!1,this.nodePos=this.Player.getPosition())},setNodePos:function(e){this.nodePos=e},update:function(e){1==n.lockController&&(this.Fire=!1),this.Fire&&(this.dtCountNormal+=e,this.dtCountAim+=e,this.dtCountNormal>.05&&(this.dtCountNormal=0,this.createPlayerBullet(10),this.createPlayerBullet(-10)),this.dtCountAim>.15&&(this.dtCountAim=0,this.createPlayerBulletAutoAim(20),this.createPlayerBulletAutoAim(-20))),this.UI_HP.string=n.HP+" / "+n.MaxHP,this.UI_Score.string="Score: "+n.score,this.UI_Death.string="Death: "+n.death,this.UI_Life.string="Life: "+n.life},createPlayerBulletAutoAim:function(e){var t=cc.instantiate(this.PlayerBulletPrefeb);this.node.addChild(t),t.parent=this.Player.parent,t.position=this.Player.position,t.x+=e;var c=(cc.winSize.height-this.Player.y)/1600,n=cc.moveTo(c,this.Enemy.position),i=cc.removeSelf(),a=cc.sequence(n,i);t.runAction(a)},createPlayerBullet:function(e){var t=cc.instantiate(this.PlayerBulletPrefeb);this.node.addChild(t),t.parent=this.Player.parent,t.position=this.Player.position,t.x+=e;var c=cc.winSize.height-this.Player.y,n=c/3200,i=cc.moveBy(n,cc.v2(0,c)),a=cc.removeSelf(),o=cc.sequence(i,a);t.runAction(o)}}),cc._RF.pop()},{Global:"Global"}],Global:[function(e,t,c){"use strict";cc._RF.push(t,"b7662dqrMtDSbpIpKOF+QBk","Global"),t.exports={life:0,death:0,score:0,lockController:!1,godMode:!1,MaxHP:0,HP:0,danmakuMode:0,isPlayAnim:!1,PlayerACT:2,init:function(){this.life=30,this.death=0,this.score=0,this.lockController=!1,this.godMode=!1,this.MaxHP=600,this.HP=600,this.danmakuMode=0,this.danmakuModeMAX=8,this.isPlayAnim=!1,this.PlayerACT=1},cleanEnemyBullets:function(){for(var e=cc.find("Canvas").children,t=0;t<e.length;t++)"EnemyBullet"==e[t].name&&e[t].destroy()}},cc._RF.pop()},{}],Main:[function(e,t,c){"use strict";cc._RF.push(t,"11421JmmbJD5YUeqZsYSZI0","Main"),cc.Class({extends:cc.Component,properties:{ProgressBar:cc.ProgressBar,LoadingProgressBar:cc.Node},onLoad:function(){},start:function(){},startButtonOnClick:function(e,t){e.target.getComponent(cc.Button).interactable=!1,this.LoadingProgressBar.active=!0,cc.director.preloadScene("Game",this.onProgress.bind(this),function(){cc.director.loadScene("Game")})},onProgress:function(e,t,c){this.ProgressBar.progress=e/t}}),cc._RF.pop()},{}],Player:[function(e,t,c){"use strict";cc._RF.push(t,"17460H8yNhLMI+h6yLkJSl/","Player");var n=e("Global");cc.Class({extends:cc.Component,properties:{UI_GameOver:cc.Prefab},start:function(){this.anim=this.getComponent(cc.Animation)},onBeginContact:function(e,t,c){"EnemyBullet"!=c.node.name&&"Enemy"!=c.node.name||n.godMode||0!=n.lockController||(n.lockController=!0,this.Flash(),n.cleanEnemyBullets(),this.anim.play("Player_Death"))},playerDeath:function(){if(n.lockController=!1,n.godMode=!0,this.node.opacity=100,this.anim.play("Player"),this.node.x=0,this.node.y=-320,n.life>0)n.life-=1;else{n.danmakuMode=-1;var e=this;cc.loader.loadRes("Prefab/GameOver",function(t,c){var i=cc.instantiate(c);i.active=!0,i.parent=e.node.parent,n.lockController=!0,i.getComponent("GameOver").setTitle("\u6e38\u620f\u7ed3\u675f")})}this.scheduleOnce(function(){this.node.opacity=255,n.godMode=!1},3)},Flash:function(){var e=cc.find("FlashLayout");e.opacity=255,this.schedule(function(){e.opacity-=1},.01,255,.01)}}),cc._RF.pop()},{Global:"Global"}]},{},["Enemy","EnemyBullet","Game","GameOver","Global","Main","Player"]);