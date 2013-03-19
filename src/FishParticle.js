(function(namespace) {
	"use strict";

	var FishParticle = function(p, ncycles, lpas, agelim) {
		this.p = p;
		this.k = Math.random() * Math.PI * 2;
		this.ak = 0.2;
		this.ncycles = ncycles;
		this.lpas = lpas;
		this.clock = 0;
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(250,250,250,0.7)';
		this.alive = true;
	}

	FishParticle.prototype.adv = function() {
		this.clock++;
		if(this.clock >= this.ncycles) {
			this.clock = 0;
			this.ak *= -1;
		}

		this.p.x += Math.cos(this.k) * this.lpas;
		this.p.y += Math.sin(this.k) * this.lpas;

		this.k += this.ak;

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	FishParticle.prototype.draw = function() {
		if(Math.random() < 0.05) {
			namespace.con2d.fillStyle = 'rgba(250,250,250,1.0)';
			namespace.con2d.fillRect(this.p.x - 2, this.p.y - 2, 5, 5);
		}
		else {
			namespace.con2d.fillStyle = this.color;
			namespace.con2d.fillRect(this.p.x - 1, this.p.y - 1, 3, 3);
		}
	}

	FishParticle.factory = function(p, v) {
		return new FishParticle(p, 8, 1.2, 1000);
	}

	namespace.FishParticle = FishParticle;
})(_P);
