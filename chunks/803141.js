n.d(t, { Z: () => g }), n(388685), n(539854);
var r = n(750041),
    i = n(594174),
    a = n(131681),
    o = n(932941),
    s = n(363072),
    l = n(526761);
function c(e, t, n) {
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
let u = null;
function d() {
    let e = (0, a.U)() ? [...o.pF, ...o.wq, ...o.$u] : [],
        t = i.default.getCurrentUser();
    if (null == t ? void 0 : t.isStaff()) {
        let t = n(932941).Bk;
        e.push(...t);
    }
    (u = new s.B()).addWords(e);
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    null == u && (u = new s.B()), u.addWords(e);
}
function p() {
    d();
}
function _() {
    d();
}
function m(e) {
    let { local: t, settings: n } = e;
    if (!t || n.type !== l.yP.PRELOADED_USER_SETTINGS) return !1;
    null != u && u.clear(), d();
}
class h extends r.Z {
    loadCache() {
        let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
        null != e && (u = null != e.keywordTrie ? s.B.fromSnapshot(e.keywordTrie) : null);
    }
    takeSnapshot() {
        return {
            version: h.LATEST_SNAPSHOT_VERSION,
            data: { keywordTrie: u },
        };
    }
    getKeywordTrie() {
        return u;
    }
    initializeForKeywordTests() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        f(e);
    }
    constructor() {
        super({
            CONNECTION_OPEN: p,
            CONNECTION_OPEN_SUPPLEMENTAL: p,
            CACHE_LOADED: () => this.loadCache(),
            OVERLAY_INITIALIZE: _,
            USER_SETTINGS_PROTO_UPDATE: m,
        });
    }
}
c(h, "displayName", "KeywordFilterStore"), c(h, "LATEST_SNAPSHOT_VERSION", 2);
let g = new h();
