r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(47120);
class a {
    toJS() {
        return { ...this };
    }
    set(e, n) {
        let r = this,
            i = r[e];
        return n instanceof Date && i instanceof Date && n.getTime() === i.getTime()
            ? this
            : i !== n
              ? new this.constructor({
                    ...this,
                    [e]: n
                })
              : this;
    }
    merge(e) {
        let n = this,
            r = null;
        for (let i in e) {
            if (!e.hasOwnProperty(i)) continue;
            let a = n[i],
                o = e[i];
            if (!(o instanceof Date) || !(a instanceof Date) || o.getTime() !== a.getTime()) a !== o && (null == r && (r = { ...this }), (r[i] = e[i]));
        }
        return null != r ? new this.constructor(r) : this;
    }
    update(e, n, r) {
        null == r && ((r = n), (n = void 0));
        let i = this,
            o = i[e];
        return o instanceof a || (o instanceof Array ? (o = [...o]) : o instanceof Object && (o = { ...o })), void 0 === o && (o = n), this.set(e, r(o));
    }
}
