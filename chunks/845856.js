(n.d(t, { fE: () => _ }), n(953529));
var r = n(442837),
    i = n(570140),
    a = n(311929);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = Symbol('setKv'),
    l = Symbol('setMetadata'),
    c = Object.prototype.hasOwnProperty,
    u = Symbol('version'),
    d = s,
    f = l;
class _ extends r.yh {
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived;
            if (c.call(n, t)) return n[t];
            let r = e(this.root);
            return ((n[t] = r), r);
        };
    }
    version() {
        let e = this.derived.memoized[u];
        return (null == e && (this.derived.memoized[u] = e = ++this.nextVersion), e);
    }
    get(e) {
        return this.root[e];
    }
    [d](e, t) {
        ((this.root = e), (this.derived = t));
    }
    [f](e) {
        this.derived = e;
    }
    length() {
        return this.derived.length;
    }
    constructor(e) {
        let t = {};
        if (null != e) {
            let n = !1,
                r = {
                    reset: (e) => {
                        let t = {};
                        ('function' == typeof e ? e((t = {}), this.root) : null != e && (t = e),
                            this[s](t, {
                                length: null == e ? 0 : Object.keys(t).length,
                                memoized: {}
                            }),
                            (n = !0));
                    },
                    get: (e) => this.root[e],
                    set: (e, t) => {
                        let r = this.root[e];
                        if (('function' == typeof t && (t = t(r)), void 0 !== r && (0, a.$E)(r, t))) return;
                        this.root[e] = t;
                        let { derived: i } = this;
                        (void 0 === r && i.length++, (i.memoized = {}), (n = !0));
                    },
                    remove: (e) => {
                        let t = c.call(this.root, e);
                        if (t) {
                            delete this.root[e];
                            let { derived: t } = this;
                            (t.length--, (t.memoized = {}), (n = !0));
                        }
                        return t;
                    }
                };
            for (let i in e) {
                let a = e[i],
                    o = (e) => {
                        if (((n = !1), a(e, r), !n)) return !1;
                    };
                t[i] = o;
            }
        }
        (super(i.Z, t),
            o(this, 'actionsHandledByLibdiscore', void 0),
            o(this, 'derived', {
                length: 0,
                memoized: {}
            }),
            o(this, 'nextVersion', 0),
            o(this, 'root', {}),
            (this.actionsHandledByLibdiscore = null == e));
    }
}
