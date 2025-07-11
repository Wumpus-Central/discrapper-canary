(n.d(t, { fE: () => E }), n(953529), n(415506));
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(579092),
    s = n(570140),
    l = n(311929),
    c = n(466772);
function u(e, t, n) {
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
let d = new o.Yd('KvStore'),
    f = Symbol('setKv'),
    _ = Symbol('setMetadata'),
    p = Object.prototype.hasOwnProperty,
    h = Symbol('version'),
    m = _,
    g = f;
class E extends a.yh {
    actionsHandledByLibdiscore() {
        return 'libdiscore' === this.mode || 'typescript-libdiscore-dual-read' === this.mode;
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived;
            if (p.call(n, t)) return n[t];
            let r = e(this.root);
            return ((n[t] = r), r);
        };
    }
    version() {
        let e = this.derived.memoized[h];
        return (null == e && (this.derived.memoized[h] = e = ++this.nextVersion), e);
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
                        if (('function' == typeof n && (n = n(r)), void 0 !== r && (0, l.$E)(r, n))) return !1;
                        this.root[e] = n;
                        let { derived: i } = this;
                        return (void 0 === r && i.length++, (i.memoized = {}), (t = !0), !0);
                    },
                    remove: (e) => {
                        let n = p.call(this.root, e);
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
            (super(s.Z, n),
            u(this, 'mode', void 0),
            u(this, 'shadowState', void 0),
            u(this, m, void 0),
            u(this, g, void 0),
            u(this, 'root', void 0),
            u(this, 'derived', void 0),
            u(this, 'nextVersion', void 0),
            (this.mode = t),
            (this.shadowState = null),
            (this.root = {}),
            (this.derived = {
                length: 0,
                memoized: {}
            }),
            (this.nextVersion = 0),
            d.info(''.concat(this.getName(), ' initialized in mode: ').concat(this.mode)),
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
                    (this[_] = (e) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'), (this.shadowState.derived = e));
                    }),
                    (this[f] = (e, t) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'),
                            (this.shadowState = {
                                root: e,
                                derived: t
                            }));
                    }),
                    this.addChangeListener(() => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before running validation.'),
                            (0, c.t)(
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
                ((this[_] = (e) => {
                    this.derived = e;
                }),
                    (this[f] = (e, t) => {
                        this.setKvRoot(e, t);
                    }));
                break;
            case 'typescript':
                this[_] = this[f] = () => {
                    throw Error('This method should not be called in TypeScript mode.');
                };
                break;
            default:
                throw Error('Unknown KvStore mode: '.concat(t));
        }
    }
}
