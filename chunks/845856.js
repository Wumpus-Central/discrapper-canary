(n.d(t, { fE: () => f }), n(953529));
var r = n(442837),
    i = n(570140);
function a(e, t, n) {
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
let o = Symbol('setKv'),
    s = Symbol('setMetadata'),
    l = Object.prototype.hasOwnProperty,
    c = Symbol('version'),
    u = o,
    d = s;
class f extends r.yh {
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived;
            if (l.call(n, t)) return n[t];
            let r = e(this.root);
            return ((n[t] = r), r);
        };
    }
    version() {
        let e = this.derived.memoized[c];
        return (null == e && (this.derived.memoized[c] = e = ++this.nextVersion), e);
    }
    get(e) {
        return this.root[e];
    }
    [u](e, t) {
        ((this.root = e), (this.derived = t));
    }
    [d](e) {
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
                            this[o](t, {
                                length: null == e ? 0 : Object.keys(t).length,
                                memoized: {}
                            }),
                            (n = !0));
                    },
                    get: (e) => this.root[e],
                    set: (e, t) => {
                        let r = l.call(this.root, e);
                        ('function' == typeof t && (t = t(this.root[e])), (this.root[e] = t));
                        let { derived: i } = this;
                        (!r && i.length++, (i.memoized = {}), (n = !0));
                    },
                    remove: (e) => {
                        let t = l.call(this.root, e);
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
            a(this, 'actionsHandledByLibdiscore', void 0),
            a(this, 'derived', {
                length: 0,
                memoized: {}
            }),
            a(this, 'nextVersion', 0),
            a(this, 'root', {}),
            (this.actionsHandledByLibdiscore = null == e));
    }
}
