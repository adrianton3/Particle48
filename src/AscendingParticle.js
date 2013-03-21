(function(namespace) {
	"use strict";

	var AscendingParticle = function(p, v, agelim) {
		this.p = p;
		this.v = v;
		this.dim = 8;
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(20,' + Math.floor(Math.random() * 100) + ',255,0.7)';
		this.alive = true;
	}

	AscendingParticle.prototype.adv = function() {
		this.p.x += this.v.x;
		this.p.y += this.v.y;

		if(Math.random() < 0.2) {
			this.v.x = (Math.random() - 0.5);
			this.v.y += -0.03;
			this.dim *= 0.91;
		}

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	AscendingParticle.prototype.draw = function() {
		namespace.con2d.fillStyle = this.color;
		namespace.con2d.fillRect(this.p.x, this.p.y, this.dim, this.dim);
	}

	AscendingParticle.factory = function(p, v) {
		return new AscendingParticle(p, v, Math.floor(Math.random() * 20 + 110));
	}

	namespace.AscendingParticle = AscendingParticle;
})(_P); 