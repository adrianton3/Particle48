(function(namespace) {
	"use strict";

	var HSineParticle = function(p, amp, ak, agelim) {
		this.op = p;
		this.p = new namespace.Point(p.x, p.y);
		this.amp = amp;
		this.k = 0;
		this.ak = ak;
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(250,150,10,0.7)';
		this.alive = true;
	}

	HSineParticle.prototype.adv = function() {
		this.p.x = this.op.x + Math.sin(this.k) * this.amp;
		this.k += this.ak;

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	HSineParticle.prototype.draw = function() {
		namespace.con2d.fillStyle = this.color;
		namespace.con2d.fillRect(this.p.x - 2, this.p.y - 2, 5, 5);
	}

	HSineParticle.factory = function(p, v) {
		return new HSineParticle(p, 8, 0.2, Math.floor(Math.random() * 55 + 95));
	}

	namespace.HSineParticle = HSineParticle;
})(_P);