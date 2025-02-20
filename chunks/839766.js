i.d(e, { Z: () => o }), i(47120), i(653041), i(411104);
var n = i(250906),
    r = i(86104);
function a(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
async function s(t, e, i, a, s) {
    let o = s;
    if (null == o) {
        let t = await fetch(a);
        if (!t.ok) throw Error('Error fetching sticker at '.concat(a));
        o = await t.text();
    }
    if (null == o) return null;
    await (0, r.j)();
    let h = new r.Z(o);
    return new n.Z(h, t, e, i);
}
let o = new (class {
    create(t, e, i, n, r) {
        let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
        return this.getCached(t).then((o) => {
            var h;
            if ((this.referenceCounts.set(t, (null !== (h = this.referenceCounts.get(t)) && void 0 !== h ? h : 0) + 1), o)) return o;
            let l = {
                key: t,
                promise: s(t, e, i, n, r)
            };
            return a && (this.entries.push(l), l.promise.then((e) => (null == e && this.removeEntry(t), e)).catch((e) => this.removeEntry(t)), this.entries.length > 50 && this.removeEntryAt(0)), l.promise;
        });
    }
    drop(t) {
        this.removeEntry(t);
    }
    getCached(t) {
        let e = this.entries.findIndex((e) => e.key === t);
        if (e >= 0) {
            let t = this.entries[e];
            return this.entries.splice(e, 1), this.entries.push(t), t.promise.then((t) => (null == t && this.removeEntryAt(e), t));
        }
        return Promise.resolve(null);
    }
    removeEntry(t) {
        let e = this.entries.findIndex((e) => e.key === t);
        if (!(e >= 0)) return null;
        this.removeEntryAt(e);
    }
    removeEntryAt(t) {
        let e = this.entries[t],
            i = this.referenceCounts.get(e.key);
        return null != i && i > 1 ? (this.referenceCounts.set(e.key, i - 1), null) : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then((t) => (null == t ? void 0 : t.drop())), e);
    }
    constructor() {
        a(this, 'entries', void 0), a(this, 'referenceCounts', void 0), (this.entries = []), (this.referenceCounts = new Map());
    }
})();
