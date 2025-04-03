i.d(t, { Z: () => o }), i(47120), i(653041), i(411104);
var r = i(250906),
    n = i(86104);
function a(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
async function s(e, t, i, a, s) {
    let o = s;
    if (null == o) {
        let e = await fetch(a);
        if (!e.ok) throw Error('Error fetching sticker at '.concat(a));
        o = await e.text();
    }
    if (null == o) return null;
    await (0, n.j)();
    let h = new n.Z(o);
    return new r.Z(h, e, t, i);
}
let o = new (class {
    create(e, t, i, r, n) {
        let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
        return this.getCached(e).then((o) => {
            var h;
            if ((this.referenceCounts.set(e, (null != (h = this.referenceCounts.get(e)) ? h : 0) + 1), o)) return o;
            let l = {
                key: e,
                promise: s(e, t, i, r, n)
            };
            return a && (this.entries.push(l), l.promise.then((t) => (null == t && this.removeEntry(e), t)).catch((t) => this.removeEntry(e)), this.entries.length > 50 && this.removeEntryAt(0)), l.promise;
        });
    }
    drop(e) {
        this.removeEntry(e);
    }
    getCached(e) {
        let t = this.entries.findIndex((t) => t.key === e);
        if (t >= 0) {
            let e = this.entries[t];
            return this.entries.splice(t, 1), this.entries.push(e), e.promise.then((e) => (null == e && this.removeEntryAt(t), e));
        }
        return Promise.resolve(null);
    }
    removeEntry(e) {
        let t = this.entries.findIndex((t) => t.key === e);
        if (!(t >= 0)) return null;
        this.removeEntryAt(t);
    }
    removeEntryAt(e) {
        let t = this.entries[e],
            i = this.referenceCounts.get(t.key);
        return null != i && i > 1 ? (this.referenceCounts.set(t.key, i - 1), null) : (this.entries.splice(e, 1), this.referenceCounts.delete(t.key), t.promise.then((e) => (null == e ? void 0 : e.drop())), t);
    }
    constructor() {
        a(this, 'entries', void 0), a(this, 'referenceCounts', void 0), (this.entries = []), (this.referenceCounts = new Map());
    }
})();
