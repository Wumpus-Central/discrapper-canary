(n.d(t, { fE: () => m }), n(953529), n(415506));
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(311929),
    l = n(466772);
function c(e, t, n) {
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
let u = Symbol('setKv'),
    d = Symbol('setMetadata'),
    f = Object.prototype.hasOwnProperty,
    _ = Symbol('version'),
    p = d,
    h = u;
class m extends a.yh {
    actionsHandledByLibdiscore() {
        return 'libdiscore' === this.mode || 'typescript-libdiscore-dual-read' === this.mode;
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived;
            if (f.call(n, t)) return n[t];
            let r = e(this.root);
            return ((n[t] = r), r);
        };
    }
    version() {
        let e = this.derived.memoized[_];
        return (null == e && (this.derived.memoized[_] = e = ++this.nextVersion), e);
    }
    get(e) {
        return this.root[e];
    }
    setKvRoot(e, t) {
        ((this.root = e), (this.derived = t));
    }
    length() {
        return this.derived.length;
    }
    constructor(e, t = 'typescript') {
        let n = {};
        if ('typescript' === t || 'typescript-libdiscore-dual-read' === t) {
            let t = !1,
                r = {
                    reset: (e) => {
                        let n = {};
                        ('function' == typeof e ? e((n = {}), this.root) : null != e && (n = e),
                            this.setKvRoot(n, {
                                length: Object.keys(n).length,
                                memoized: {}
                            }),
                            (t = !0));
                    },
                    get: (e) => this.root[e],
                    set: (e, n) => {
                        let r = this.root[e];
                        if (('function' == typeof n && (n = n(r)), void 0 !== r && (0, s.$E)(r, n))) return;
                        this.root[e] = n;
                        let { derived: i } = this;
                        (void 0 === r && i.length++, (i.memoized = {}), (t = !0));
                    },
                    remove: (e) => {
                        let n = f.call(this.root, e);
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
        switch (
            (super(o.Z, n),
            c(this, 'mode', void 0),
            c(this, 'shadowState', void 0),
            c(this, p, void 0),
            c(this, h, void 0),
            c(this, 'root', void 0),
            c(this, 'derived', void 0),
            c(this, 'nextVersion', void 0),
            (this.mode = t),
            (this.shadowState = null),
            (this.root = {}),
            (this.derived = {
                length: 0,
                memoized: {}
            }),
            (this.nextVersion = 0),
            t)
        ) {
            case 'typescript-libdiscore-dual-read':
                ((this.shadowState = {
                    root: {},
                    derived: {
                        length: 0,
                        memoized: {}
                    }
                }),
                    (this[d] = (e) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'), (this.shadowState.derived = e));
                    }),
                    (this[u] = (e, t) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'),
                            (this.shadowState = {
                                root: e,
                                derived: t
                            }));
                    }),
                    this.addChangeListener(() => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before running validation.'),
                            (0, l.t)(
                                this.getName(),
                                {
                                    root: this.root,
                                    derived: this.derived
                                },
                                this.shadowState
                            ));
                    }));
                break;
            case 'libdiscore':
                ((this[d] = (e) => {
                    this.derived = e;
                }),
                    (this[u] = (e, t) => {
                        this.setKvRoot(e, t);
                    }));
                break;
            case 'typescript':
                this[d] = this[u] = () => {
                    throw Error('This method should not be called in TypeScript mode.');
                };
                break;
            default:
                throw Error('Unknown KvStore mode: '.concat(t));
        }
    }
}
