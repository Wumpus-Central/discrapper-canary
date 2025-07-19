(n.d(t, { fE: () => b }), n(953529), n(415506));
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(579092),
    s = n(570140),
    l = n(311929),
    c = n(611907),
    u = n(466772);
function d(e, t, n) {
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
let f = new o.Yd('KvStore'),
    _ = Symbol('setKv'),
    p = Symbol('setMetadata'),
    h = Object.prototype.hasOwnProperty,
    m = Symbol('version'),
    g = p,
    E = _;
class b extends a.yh {
    getMode() {
        return this.mode;
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.derived;
            if (h.call(n, t)) return n[t];
            let r = e(this.root);
            return ((n[t] = r), r);
        };
    }
    version() {
        let e = this.derived.memoized[m];
        return (null == e && (this.derived.memoized[m] = e = ++this.nextVersion), e);
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
        'typescript' === t || (0, c.F)() || (f.warn('Attempted to create a KvStore in mode '.concat(t, ', but libdiscore is not available. Falling back to typescript mode.')), (t = 'typescript'));
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
                        let n = h.call(this.root, e);
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
            d(this, 'mode', void 0),
            d(this, 'shadowState', void 0),
            d(this, g, void 0),
            d(this, E, void 0),
            d(this, 'root', void 0),
            d(this, 'derived', void 0),
            d(this, 'nextVersion', void 0),
            (this.mode = t),
            (this.shadowState = null),
            (this.root = {}),
            (this.derived = {
                length: 0,
                memoized: {}
            }),
            (this.nextVersion = 0),
            f.info(''.concat(this.getName(), ' initialized in mode: ').concat(this.mode)),
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
                    (this[p] = (e) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'), (this.shadowState.derived = e));
                    }),
                    (this[_] = (e, t) => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before setting derived data.'),
                            (this.shadowState = {
                                root: e,
                                derived: t
                            }));
                    }),
                    this.addChangeListener(() => {
                        (i()(null != this.shadowState, 'Shadow state must be set in dual-read mode before running validation.'),
                            (0, u.t)(
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
                ((this[p] = (e) => {
                    this.derived = e;
                }),
                    (this[_] = (e, t) => {
                        this.setKvRoot(e, t);
                    }));
                break;
            case 'typescript':
                this[p] = this[_] = () => {
                    throw Error('This method should not be called in TypeScript mode.');
                };
                break;
            default:
                throw Error('Unknown KvStore mode: '.concat(t));
        }
    }
}
