(function(namespace) {
	"use strict";

	var RedParticle = function(p, v, atenuator, agelim) {
		this.p = p;
		this.v = v;
		this.atenuator = atenuator;
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(250,20,20,0.7)';
		this.alive = true;
	}

	RedParticle.prototype.adv = function() {
		this.p.x += this.v.x;
		this.p.y += this.v.y;

		this.v.x *= this.atenuator;
		this.v.y *= this.atenuator;

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	RedParticle.prototype.draw = function() {
		namespace.con2d.fillStyle = this.color;
		namespace.con2d.fillRect(this.p.x - 1, this.p.y - 1, 7, 7);
	}

	RedParticle.factory = function(p, v) {
		return new RedParticle(p, v, 0.95, Math.floor(Math.random() * 25 + 15));
	}

	namespace.RedParticle = RedParticle;
})(_P);
