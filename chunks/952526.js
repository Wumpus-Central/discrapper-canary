n.d(t, {
    U: () => p,
}),
    n(228524),
    n(896048),
    n(321073),
    n(65821);
var r = n(311907),
    i = n(73153),
    a = n(867051);

function o(e, t, n) {
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
let s = Symbol("version"),
    l = Symbol("boxedPartition"),
    c = Object.freeze({}),
    u = Object.freeze({
        current: c,
        length: 0,
        version: -1,
    }),
    d = Object.hasOwnProperty;

function f(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n) {
        let n = r;
        if (!d.call(t, r) || !(0, a.Kl)(e[n], t[n])) return !1;
    }
    return !0;
}
class p extends r.il {
    _derivedVersion(e) {
        let t = e[s];
        return null == t && (e[s] = t = this.nextVersion++), t;
    }
    mapPartitions(e) {
        let t = [],
            { root: n } = this.state;
        for (let r in n)
            t.push({
                partitionKey: r,
                values: e(n[r].root, r),
            });
        return t;
    }
    version() {
        return this._derivedVersion(this.state.derived.memoized);
    }
    partitionVersion(e) {
        let t = this.state.root[e];
        return null == t ? null : this._derivedVersion(t.derived.memoized);
    }
    getRecord(e, t) {
        var n;
        return null == (n = this.state.root[e]) ? void 0 : n.root[t];
    }
    getManyRecords(e, t) {
        let n = this.state.root[e];
        if (null == n) return [];
        let r = [];
        for (let e of t) {
            let t = n.root[e];
            null != t && r.push(t);
        }
        return r;
    }
    getPartition(e) {
        let t = this.state.root[e];
        return null != t ? t.root : c;
    }
    getPartitionKeys() {
        return Object.keys(this.state.root);
    }
    getBoxedPartition(e) {
        let t = this.state.root[e];
        if (null == t) return u;
        let {
                root: n,
                derived: { memoized: r, length: i },
            } = t,
            a = r[l];
        return (
            null == a &&
                (r[l] = a =
                    {
                        current: n,
                        version: this._derivedVersion(r),
                        length: i,
                    }),
            a
        );
    }
    partitionLength(e) {
        let t = this.state.root[e];
        return null == t ? 0 : t.derived.length;
    }
    length() {
        return this.state.derived.length;
    }
    numPartitions() {
        return this.state.derived.numPartitions;
    }
    getNullablePartition(e) {
        let t = this.state.root[e];
        return null == t ? null : t.root;
    }
    memoizedPartition(e, t) {
        let n = Symbol(),
            r = void 0 !== t ? t : e("", {});
        return (t) => {
            let i = this.state.root[t];
            if (null == i) return r;
            let {
                    root: a,
                    derived: { memoized: o },
                } = i,
                s = o[n];
            return d.call(o, n) || ((s = e(t, a)), (o[n] = s)), s;
        };
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.state.derived,
                r = n[t];
            return d.call(n, t) || ((r = e(this.state.root)), (n[t] = r)), r;
        };
    }
    memoizedSecondaryIndex() {
        let e = this.memoized((e) => {
            let t = {};
            for (let n in e) {
                let r = e[n];
                for (let e in r.root) {
                    if (Object.prototype.hasOwnProperty.call(t, e)) throw Error("Duplicate clustering key: ".concat(e));
                    t[e] = r.root[e];
                }
            }
            return t;
        });
        return (t) => e()[t];
    }
    setKkvState(e) {
        this.state = e;
    }
    debugFindRecordByClusteringKeyDoNotUse(e) {
        let t = [],
            { root: n } = this.state;
        for (let r in n) {
            let i = n[r].root[e];
            null != i &&
                t.push({
                    partitionKey: r,
                    record: i,
                });
        }
        return t;
    }
    constructor(e) {
        const t = {};
        let n = !1;
        const r = {
            getPartitionKeys: () => Object.keys(this.state.root),
            reset: (e) => {
                let t = {};
                "function" == typeof e ? e(t, this.state.root) : null != e && (t = e);
                let r = {},
                    i = 0,
                    a = 0;
                for (let e in t) {
                    let n = Object.keys(t[e]).length;
                    i++,
                        (a += n),
                        (r[e] = {
                            root: t[e],
                            derived: {
                                length: n,
                                memoized: {},
                            },
                        });
                }
                (0 !== a || 0 !== this.state.derived.length) &&
                    ((n = !0),
                    this.setKkvState({
                        root: r,
                        derived: {
                            memoized: {},
                            numPartitions: i,
                            length: a,
                        },
                    }));
            },
            set: (e, t, r) => {
                let i = this.state.root[e];
                if (null == i) {
                    (r = "function" == typeof r ? r(void 0) : r),
                        (this.state.root[e] = {
                            root: {
                                [t]: r,
                            },
                            derived: {
                                length: 1,
                                memoized: {},
                            },
                        });
                    let { derived: i } = this.state;
                    return i.numPartitions++, i.length++, (n = !0), !0;
                }
                let o = i.root[t];
                return (
                    "function" == typeof r && (r = r(o)),
                    !(void 0 !== o && (0, a.Kl)(o, r)) &&
                        ((i.root[t] = r),
                        void 0 === o && (i.derived.length++, this.state.derived.length++),
                        (i.derived.memoized = {}),
                        (n = !0),
                        !0)
                );
            },
            setPartition: (e, t) => {
                let r = this.state.root[e];
                if (null == r) {
                    "function" == typeof t && (t = t(void 0));
                    let r = Object.keys(t).length;
                    if (0 === r) return !1;
                    let { root: i, derived: a } = this.state;
                    return (
                        (i[e] = {
                            root: t,
                            derived: {
                                length: r,
                                memoized: {},
                            },
                        }),
                        a.numPartitions++,
                        (a.length += r),
                        (n = !0),
                        !0
                    );
                }
                if (("function" == typeof t && (t = t(r.root)), f(r.root, t))) return !1;
                let i = Object.keys(t).length,
                    a = r.derived.length;
                if (((this.state.derived.length -= a), 0 === i))
                    delete this.state.root[e], this.state.derived.numPartitions--;
                else {
                    let { root: n, derived: r } = this.state;
                    (n[e] = {
                        root: t,
                        derived: {
                            length: i,
                            memoized: {},
                        },
                    }),
                        (r.length += i);
                }
                return (n = !0), !0;
            },
            get: (e, t) => {
                var n;
                return null == (n = this.state.root[e]) ? void 0 : n.root[t];
            },
            getPartition: (e) => {
                var t;
                return null == (t = this.state.root[e]) ? void 0 : t.root;
            },
            remove: (e, t) => {
                let r = this.state.root[e];
                return (
                    null != r &&
                    void 0 !== r.root[t] &&
                    (delete r.root[t],
                    r.derived.length--,
                    0 === r.derived.length
                        ? (delete this.state.root[e], this.state.derived.numPartitions--)
                        : (r.derived.memoized = {}),
                    this.state.derived.length--,
                    (n = !0),
                    !0)
                );
            },
            removePartition: (e) => {
                let t = this.state.root[e];
                if (null == t) return !1;
                let r = t.derived.length,
                    { root: i, derived: a } = this.state;
                return delete i[e], a.numPartitions--, (a.length -= r), (n = !0), !0;
            },
        };
        for (const i in e) {
            const a = e[i],
                o = (e) => {
                    if (((n = !1), a(e, r), !n)) return !1;
                    this.state.derived.memoized = {};
                };
            t[i] = o;
        }
        super(i.h, t),
            o(this, "state", {
                root: {},
                derived: {
                    numPartitions: 0,
                    length: 0,
                    memoized: {},
                },
            }),
            o(this, "nextVersion", 0);
    }
}
