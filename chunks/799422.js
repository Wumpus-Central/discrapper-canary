"use strict";
n.d(t, { A: () => i }), n(205816);
var r = n(136722);
class i {
    static cache = {};
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        return r.pG(20, e);
    }
    static asBigFlag(e) {
        return Object.hasOwn(this.cache, e) || (this.cache[e] = r.iu(e)), this.cache[e];
    }
}
