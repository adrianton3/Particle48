(function(namespace) {
	"use strict";

	function RainParticle(p, v, agelim) {
		this.p = p;
		this.v = v;
		this.op = new namespace.Point(this.p.x - this.v.x, this.p.y - this.v.y);
		this.age = 0;
		this.agelim = agelim;
		this.color = 'rgba(150,150,250,0.7)';
		this.alive = true;
	}


	RainParticle.prototype.adv = function() {
		this.op.x = this.p.x;
		this.op.y = this.p.y;

		this.p.x += this.v.x;
		this.p.y += this.v.y;

		this.age++;
		if(this.age >= this.agelim)
			this.alive = false;
	}

	RainParticle.prototype.draw = function() {
		namespace.con2d.strokeStyle = this.color;
		namespace.con2d.beginPath();
		namespace.con2d.moveTo(this.op.x, this.op.y);
		namespace.con2d.lineTo(this.p.x, this.p.y);
		namespace.con2d.stroke();
	}

	RainParticle.factory = function(p, v) {
		return new RainParticle(p, v, 1000);
	}

	namespace.RainParticle = RainParticle;
})(_P);
