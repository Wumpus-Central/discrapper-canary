n.d(t, { A: () => a }), n(205816);
var r = n(136722);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class a {
    static has(e, t) {
        return (e & t) != 0;
    }
    static asBasicFlag(e) {
        let t = 20;
        return r.pG(t, e);
    }
    static asBigFlag(e) {
        return Object.hasOwn(this.cache, e) || (this.cache[e] = r.iu(e)), this.cache[e];
    }
}
i(a, "cache", {});
