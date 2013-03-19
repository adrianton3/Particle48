(function(namespace) {
	"use strict";

	var FrogParticle = function(p, ncycles, npas, agelim) {
		this.p = p;
		this.op = new namespace.Point(this.p.x, this.p.y);
		this.oop = new namespace.Point(this.p.x, this.p.y);
		this.v = new namespace.Point(0, 0);
		this.ncycles = ncycles;
		this.npas = npas;
		this.clock = 1;
		this.pasclock = 0;
		this.atenuator = 0.93;
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(20,250,100,0.7)';
		this.alive = true;
	}

	FrogParticle.prototype.adv = function() {
		if(this.clock >= 1) {
			this.clock++;
			if(this.clock >= this.ncycles) {
				this.clock = 0;
				this.pasclock = 1;
				this.v.x += (Math.random() - 0.5) * 10;
				this.v.y += (Math.random() - 0.5) * 10;
			}
		} else if(this.pasclock >= 1) {
			this.pasclock++;
			if(this.pasclock >= this.npas) {
				this.pasclock = 0;
				this.clock = 1;
			}
		}

		this.oop.x = this.op.x;
		this.oop.y = this.op.y;

		this.op.x = this.p.x;
		this.op.y = this.p.y;

		this.p.x += this.v.x;
		this.p.y += this.v.y;

		this.v.x *= this.atenuator;
		this.v.y *= this.atenuator;

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	FrogParticle.prototype.draw = function() {
		namespace.con2d.fillStyle = this.color;
		namespace.con2d.fillRect(this.p.x - 1, this.p.y - 1, 3, 3);
		namespace.con2d.fillRect(this.op.x - 1, this.op.y - 1, 3, 3);
		namespace.con2d.fillRect(this.oop.x - 1, this.oop.y - 1, 3, 3);
	}

	FrogParticle.factory = function(p, v) {
		return new FrogParticle(p, 10, 10, 1000);
	}

	namespace.FrogParticle = FrogParticle;
})(_P);
