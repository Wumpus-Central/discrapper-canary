n.d(e, { b: () => o });
var r = n(180450),
    i = n(362133);
class s extends i.kb {
    constructor(t, e) {
        super(), (this.finished = !1), (this.destroyed = !1), (0, r.vp)(t);
        let n = (0, i.O0)(e);
        if (((this.iHash = t.create()), 'function' != typeof this.iHash.update)) throw Error('Expected instance of class which extends utils.Hash');
        (this.blockLen = this.iHash.blockLen), (this.outputLen = this.iHash.outputLen);
        let s = this.blockLen,
            o = new Uint8Array(s);
        o.set(n.length > s ? t.create().update(n).digest() : n);
        for (let t = 0; t < o.length; t++) o[t] ^= 54;
        this.iHash.update(o), (this.oHash = t.create());
        for (let t = 0; t < o.length; t++) o[t] ^= 106;
        this.oHash.update(o), o.fill(0);
    }
    update(t) {
        return (0, r.Gg)(this), this.iHash.update(t), this;
    }
    digestInto(t) {
        (0, r.Gg)(this), (0, r.aI)(t, this.outputLen), (this.finished = !0), this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
    }
    digest() {
        let t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: e, iHash: n, finished: r, destroyed: i, blockLen: s, outputLen: o } = this;
        return (t.finished = r), (t.destroyed = i), (t.blockLen = s), (t.outputLen = o), (t.oHash = e._cloneInto(t.oHash)), (t.iHash = n._cloneInto(t.iHash)), t;
    }
    destroy() {
        (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
    }
}
let o = (t, e, n) => new s(t, e).update(n).digest();
o.create = (t, e) => new s(t, e);
