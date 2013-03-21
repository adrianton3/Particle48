"use strict";

function Demo() {
	this.ps = [
		new _P.ParticleSystem(  new _P.AreaEmitter(null, new _P.Point(  0, 600), new _P.Point(600,   0), new _P.Point(  -1, -2), new _P.Point(   1, -1), 2,  1, _P.AscendingParticle.factory), new _P.Point(0,0), new _P.Point(600, 600)),
		new _P.ParticleSystem(new _P.RadialEmitter(null, new _P.Point(300, 500), new _P.Range(-Math.PI/2 - Math.PI/4, -Math.PI/4), new _P.Range(18, 21), 20,  10, _P.HeavyParticle.factory), new _P.Point(0,0), new _P.Point(600, 600)),
		new _P.ParticleSystem(new _P.RadialEmitter(null, new _P.Point(100, 500), new _P.Range(-Math.PI / 2, 0), new _P.Range(18, 21), 30, 20, _P.RedParticle.factory), new _P.Point(0,0), new _P.Point(600, 600)),
		new _P.ParticleSystem(  new _P.AreaEmitter(null, new _P.Point(250, 250), new _P.Point(100, 100), new _P.Point(  -8, -8), new _P.Point(   8,  8), 2, 40, _P.FrogParticle.factory), new _P.Point(0,0), new _P.Point(600, 600)),
		new _P.ParticleSystem(  new _P.AreaEmitter(null, new _P.Point(  0,   1), new _P.Point(600,   0), new _P.Point(-0.8, 10), new _P.Point(-0.8, 10), 1,  1, _P.RainParticle.factory), new _P.Point(0,0), new _P.Point(600, 600)),
		new _P.ParticleSystem(  new _P.AreaEmitter(null, new _P.Point(290, 290), new _P.Point( 20,  20), new _P.Point(  -8, -8), new _P.Point(   8,  8), 1,  3, _P.FishParticle.factory), new _P.Point(0,0), new _P.Point(600, 600)),
		new _P.ParticleSystem(  new _P.AreaEmitter(null, new _P.Point(50, 50), new _P.Point(500, 500), new _P.Point(  -8, -8), new _P.Point(   8,  8), 1,  2, _P.HSineParticle.factory), new _P.Point(0,0), new _P.Point(600, 600))];
		
	this.active_ps = null;
	this.changePS(0);
}

Demo.prototype.changePS = function(n) {
	this.active_ps = this.ps[n];
}

Demo.prototype.drawClear = function() {
	_P.con2d.fillStyle = '#000';
	_P.con2d.fillRect(0, 0, 600, 600);
}

Demo.prototype.adv = function() {
	this.active_ps.adv();
}

Demo.prototype.draw = function() {
	_P.con2d.globalCompositeOperation = 'source-over';
	this.drawClear();

	_P.con2d.globalCompositeOperation = 'lighter';
	this.active_ps.draw();
}
