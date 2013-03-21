(function(namespace) {
	"use strict";

	var HSineParticle = function(p, amp, ak, agelim) {
		this.op = p;
		this.p = new namespace.Point(p.x, p.y);
		this.amp = amp;
		this.k = 0;
		this.ak = ak;
		this.age = 1;
		this.agelim = agelim;
		this.ageinc = 0.1;
		this.color = 'rgba(250,150,10,0.7)';
		this.alive = true;
		this.ay = 0;
		this.aay = 0;
	}

	HSineParticle.prototype.adv = function() {
		this.p.x = this.op.x + Math.sin(this.k) * this.amp;
		this.p.y = this.ay + this.op.y + Math.cos(this.k) * this.amp;
		this.k += this.ak;

		this.ay += this.aay;
		this.age += this.ageinc;
		if(this.age >= this.agelim) {
			this.aay = -2;
			this.detach = true; 
			this.ageinc *= -0.5;
			this.age += this.ageinc; 
		}
		else
			if(this.age <= 0)
				this.alive = false;
	}

	HSineParticle.prototype.draw = function() {
		namespace.con2d.lineWidth = 1;
    namespace.con2d.strokeStyle = "#FFFFFF";
		namespace.con2d.beginPath();
    namespace.con2d.arc(this.p.x, this.p.y, this.age, 0, 2 * Math.PI, false);
    namespace.con2d.stroke();
	}

	HSineParticle.factory = function(p, v) {
		return new HSineParticle(p, Math.random() * 8 + 4, Math.random() * 0.2 + 0.05, Math.floor(Math.random() * 5 + 5));
	}

	namespace.HSineParticle = HSineParticle;
})(_P);