(function(namespace) {
	"use strict";
	
	var RadialEmitter = function(outer, p, r, v, nspawn, ncycles, factory) {
		this.outer = outer;

		this.p = p;
		this.r = r;
		this.v = v;

		this.nspawn = nspawn;
		this.ncycles = ncycles;

		this.factory = factory;

		this.clock = 0;

		this.alive = true;
	}

	RadialEmitter.prototype.emmit = function() {
		var p, v, vv, k;
		for(var i = 0; i < this.nspawn; i++) {
			p = new namespace.Point(this.p.x, this.p.y);
			k = Math.random() * (this.r.e - this.r.s) + this.r.s;
			vv = Math.random() * (this.v.e - this.v.s) + this.v.s;
			v = new namespace.Point(Math.cos(k) * vv, Math.sin(k) * vv);
			this.outer.add(this.factory(p, v));
		}
	}

	RadialEmitter.prototype.adv = function() {
		this.clock++;
		if(this.clock >= this.ncycles) {
			this.clock = 0;
			this.emmit();
		}
	}

	namespace.RadialEmitter = RadialEmitter;
})(_P);
