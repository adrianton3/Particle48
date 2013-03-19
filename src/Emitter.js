(function(namespace) {
	"use strict";

	var Emitter = function(outer, nspawn, ncycles, factory) {
		this.outer = outer;

		this.nspawn = nspawn;
		this.ncycles = ncycles;

		this.factory = factory;

		this.clock = 0;

		this.alive = true;
	}

	Emitter.prototype.emmit = function() {
		var p, v;
		for(var i = 0; i < this.nspawn; i++) {
			p = new Point(0, 0);
			v = new Point(0, 0);
			this.outer.add(this.factory(p, v));
		}
	}

	Emitter.prototype.adv = function() {
		this.clock++;
		if(this.clock >= this.ncycles) {
			this.clock = 0;
			this.emmit();
		}
	}

	namespace.Emitter = Emitter;
})(_P);