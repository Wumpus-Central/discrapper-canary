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
    constructor(e, t = !1) {
        let n = {};
        if (!t) {
            let t = !1,
                r = {
                    reset: (e) => {
                        let n = {};
                        ('function' == typeof e ? e((n = {}), this.root) : null != e && (n = e),
                            this[s](n, {
                                length: null == e ? 0 : Object.keys(n).length,
                                memoized: {}
                            }),
                            (t = !0));
                    },
                    get: (e) => this.root[e],
                    set: (e, n) => {
                        let r = this.root[e];
                        if (('function' == typeof n && (n = n(r)), void 0 !== r && (0, a.$E)(r, n))) return;
                        this.root[e] = n;
                        let { derived: i } = this;
                        (void 0 === r && i.length++, (i.memoized = {}), (t = !0));
                    },
                    remove: (e) => {
                        let n = c.call(this.root, e);
                        if (n) {
                            delete this.root[e];
                            let { derived: n } = this;
                            (n.length--, (n.memoized = {}), (t = !0));
                        }
                        return n;
                    }
                };
            for (let i in e) {
                let a = e[i],
                    o = (e) => {
                        if (((t = !1), a(e, r), !t)) return !1;
                    };
                n[i] = o;
            }
        }
        (super(i.Z, n),
            o(this, 'actionsHandledByLibdiscore', void 0),
            o(this, 'derived', {
                length: 0,
                memoized: {}
            }),
            o(this, 'nextVersion', 0),
            o(this, 'root', {}),
            (this.actionsHandledByLibdiscore = t));
    }
}
