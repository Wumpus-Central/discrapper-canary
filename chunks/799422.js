"use strict";
n.d(t, { A: () => r }), n(205816);
var i = n(136722);
class r {
    static cache = {};
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        return i.pG(20, e);
    }
    static asBigFlag(e) {
        return Object.hasOwn(this.cache, e) || (this.cache[e] = i.iu(e)), this.cache[e];
    }
}
