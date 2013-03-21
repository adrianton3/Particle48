(function(namespace) {
	"use strict";

	var HeavyParticle = function(p, v, atenuator, agelim) {
		this.p = p;
		this.op = new namespace.Point(this.p.x, this.p.y);
		this.oop = new namespace.Point(this.p.x, this.p.y);
		this.v = v;
		this.atenuator = atenuator;
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(255,' + Math.floor(Math.random() * 100 + 155) + ',30,0.7)';
		this.grav = 0.5;
		this.alive = true;
	}

	HeavyParticle.prototype.adv = function() {
		this.oop.x = this.op.x;
		this.oop.y = this.op.y;

		this.op.x = this.p.x;
		this.op.y = this.p.y;
		
		this.p.x += this.v.x;
		this.p.y += this.v.y;
		this.v.y += this.grav;

		this.v.x *= this.atenuator;
		this.v.y *= this.atenuator;

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	HeavyParticle.prototype.draw = function() {
		namespace.con2d.fillStyle = this.color;
		namespace.con2d.fillRect(this.oop.x - 1, this.oop.y - 1, 3, 3);
		namespace.con2d.fillRect((this.oop.x + this.op.x) / 2 - 1, (this.oop.y + this.op.y) / 2 - 1, 3, 3);
		namespace.con2d.fillRect(this.op.x - 2, this.op.y - 2, 5, 5);
		namespace.con2d.fillRect((this.op.x + this.p.x) / 2 - 2, (this.op.y + this.p.y) / 2 - 2, 5, 5);
		namespace.con2d.fillRect(this.p.x - 3, this.p.y - 3, 7, 7);
	}

	HeavyParticle.factory = function(p, v) {
		return new HeavyParticle(p, v, 0.95, 70);
	}

	namespace.HeavyParticle = HeavyParticle;
})(_P);