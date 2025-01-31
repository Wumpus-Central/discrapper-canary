n.d(t, { Z: () => i }), n(47120);
class i {
    toJS() {
        return { ...this };
    }
    set(e, t) {
        let n = this,
            i = n[e];
        return t instanceof Date && i instanceof Date && t.getTime() === i.getTime()
            ? this
            : i !== t
              ? new this.constructor({
                    ...this,
                    [e]: t
                })
              : this;
    }
    merge(e) {
        let t = this,
            n = null;
        for (let i in e) {
            if (!e.hasOwnProperty(i)) continue;
            let r = t[i],
                a = e[i];
            (!(a instanceof Date) || !(r instanceof Date) || a.getTime() !== r.getTime()) && r !== a && (null == n && (n = { ...this }), (n[i] = e[i]));
        }
        return null != n ? new this.constructor(n) : this;
    }
    update(e, t, n) {
        null == n && ((n = t), (t = void 0));
        let r = this,
            a = r[e];
        return a instanceof i || (a instanceof Array ? (a = [...a]) : a instanceof Object && (a = { ...a })), void 0 === a && (a = t), this.set(e, n(a));
    }
}
