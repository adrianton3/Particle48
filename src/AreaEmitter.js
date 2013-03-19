(function(namespace) {
	"use strict";

	var AreaEmitter = function(outer, p, d, sv, ev, nspawn, ncycles, factory) {
		this.outer = outer;

		this.p = p;
		this.d = d;
		this.sv = sv;
		this.ev = ev;

		this.nspawn = nspawn;
		this.ncycles = ncycles;

		this.factory = factory;

		this.clock = 0;

		this.alive = true;
	}

	AreaEmitter.prototype.emmit = function() {
		var p, v;
		for(var i = 0; i < this.nspawn; i++) {
			p = new namespace.Point(this.p.x + Math.random() * this.d.x, this.p.y + Math.random() * this.d.y);
			v = new namespace.Point(this.sv.x + Math.random() * (this.ev.x - this.sv.x), this.sv.y + Math.random() * (this.ev.y - this.sv.y));
			this.outer.add(this.factory(p, v));
		}
	}

	AreaEmitter.prototype.adv = function() {
		this.clock++;
		if(this.clock >= this.ncycles) {
			this.clock = 0;
			this.emmit();
		}
	}

	namespace.AreaEmitter = AreaEmitter;
})(_P);
/*
 AreaEmitter.prototype.adv = function() {
 this.clock++;
 if(this.clock >= this.ncycles) {
 this.clock = 0;
 var p, v;
 var i;
 for( i = 0; i < this.nspawn; i++) {
 p = new Point(this.p.x + Math.random() * this.d.x, this.p.y + Math.random() * this.d.y);
 v = new Point(this.sv.x + Math.random() * (this.ev.x - this.sv.x), this.sv.y + Math.random() * (this.ev.y - this.sv.y));
 this.outer.add(this.factory(p, v));
 }
 }
 }*/