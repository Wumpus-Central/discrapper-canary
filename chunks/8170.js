n.d(t, { b: () => o });
var r = n(134994),
    i = n(492733);
class a extends i.kb {
    constructor(e, t) {
        (super(), (this.finished = !1), (this.destroyed = !1), (0, r.vp)(e));
        let n = (0, i.O0)(t);
        if (((this.iHash = e.create()), 'function' != typeof this.iHash.update)) throw Error('Expected instance of class which extends utils.Hash');
        ((this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen));
        let a = this.blockLen,
            o = new Uint8Array(a);
        o.set(n.length > a ? e.create().update(n).digest() : n);
        for (let e = 0; e < o.length; e++) o[e] ^= 54;
        (this.iHash.update(o), (this.oHash = e.create()));
        for (let e = 0; e < o.length; e++) o[e] ^= 106;
        (this.oHash.update(o), o.fill(0));
    }
    update(e) {
        return ((0, r.Gg)(this), this.iHash.update(e), this);
    }
    digestInto(e) {
        ((0, r.Gg)(this), (0, r.aI)(e, this.outputLen), (this.finished = !0), this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy());
    }
    digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return (this.digestInto(e), e);
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: t, iHash: n, finished: r, destroyed: i, blockLen: a, outputLen: o } = this;
        return ((e.finished = r), (e.destroyed = i), (e.blockLen = a), (e.outputLen = o), (e.oHash = t._cloneInto(e.oHash)), (e.iHash = n._cloneInto(e.iHash)), e);
    }
    destroy() {
        ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
    }
}
let o = (e, t, n) => new a(e, t).update(n).digest();
o.create = (e, t) => new a(e, t);
