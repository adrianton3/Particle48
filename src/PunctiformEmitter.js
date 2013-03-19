(function(namespace) {
	"use strict";
	
	var PunctiformEmitter = function(outer, p, sv, ev, nspawn, ncycles, factory) {
		this.outer = outer;

		this.p = p;
		this.sv = sv;
		this.ev = ev;

		this.nspawn = nspawn;
		this.ncycles = ncycles;

		this.factory = factory;

		this.clock = 0;

		this.alive = true;
	}

	PunctiformEmitter.prototype.emmit = function() {
		var p, v;
		for(var i = 0; i < this.nspawn; i++) {
			p = new namespace.Point(this.p.x, this.p.y);
			v = new namespace.Point(this.sv.x + Math.random() * (this.ev.x - this.sv.x), this.sv.y + Math.random() * (this.ev.y - this.sv.y));
			this.outer.add(this.factory(p, v));
		}
	}

	PunctiformEmitter.prototype.adv = function() {
		this.clock++;
		if(this.clock >= this.ncycles) {
			this.clock = 0;
			this.emmit();
		}
	}
	
	namespace.PunctiformEmitter = PunctiformEmitter;
})(_P);
