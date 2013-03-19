//no need for this
function Particle(p, v, atenuator, agelim, color) {
	this.p = p;
	this.v = v;
	this.atenuator = atenuator;
	this.age = 0;
	this.agelim = agelim;
	this.color = color;
	this.alive = true;
}

Particle.prototype.adv = function() {

	this.age++;
	if(this.age >= this.agelim)
		this.alive = false;
}

Particle.prototype.draw = function() {
	con2d.fillStyle = this.color;
	con2d.fillRect(this.p.x - 1, this.p.y - 1, 7, 7);
}

