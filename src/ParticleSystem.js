(function(namespace) {
	"use strict";

	var ParticleSystem = function(emitter, ss, es) {
		this.emitter = emitter;
		this.ss = ss;
		this.es = es;
		
		this.emitter.outer = this;
		this.par = [];
	}

	ParticleSystem.prototype.add = function(p) {
		this.par.push(p);
	}

	ParticleSystem.prototype.removeDead = function() {
		/*
		 * investigate what's worse:
		 * doing this reallocation,
		 * using splice or
		 * rewriting on dead particles
		 */
		var npar = [];
		for(var i in this.par)
		if(this.par[i].alive && 
			 (this.par[i].p.x > this.ss.x && this.par[i].p.y > this.ss.y && 
			 	this.par[i].p.x < this.es.x && this.par[i].p.y < this.es.y))
			npar.push(this.par[i]);

		this.par = npar;
	}

	ParticleSystem.prototype.adv = function() {
		this.emitter.adv();
		for(var i in this.par)
			this.par[i].adv();
		this.removeDead();
	}

	ParticleSystem.prototype.draw = function() {
		namespace.con2d.save();
		for(var i in this.par)
			this.par[i].draw();
		namespace.con2d.restore();
	}

	namespace.ParticleSystem = ParticleSystem;
})(_P);
