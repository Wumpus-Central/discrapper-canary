n.d(t, { Z: () => b }), n(47120), n(653041);
var r = n(412788),
    i = n(594174),
    o = n(131681),
    c = n(932941),
    a = n(363072),
    s = n(526761);
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
let l = null;
function g() {
    let e = (0, o.U)() ? [...c.pF, ...c.wq, ...c.$u] : [],
        t = i.default.getCurrentUser();
    if (null == t ? void 0 : t.isStaff()) {
        let t = n(932941).Bk;
        e.push(...t);
    }
    (l = new a.B()).addWords(e);
}
function k() {
    g();
}
function d() {
    g();
}
function f(e) {
    let { local: t, settings: n } = e;
    if (!t || n.type !== s.yP.PRELOADED_USER_SETTINGS) return !1;
    null != l && l.clear(), g();
}
class h extends r.Z {
    loadCache() {
        let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
        null != e && (l = null != e.keywordTrie ? a.B.fromSnapshot(e.keywordTrie) : null);
    }
    takeSnapshot() {
        return {
            version: h.LATEST_SNAPSHOT_VERSION,
            data: { keywordTrie: l }
        };
    }
    getKeywordTrie() {
        return l;
    }
    initializeForKeywordTests() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        !(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            null == l && (l = new a.B()), l.addWords(e);
        })(e);
    }
    constructor() {
        super({
            CONNECTION_OPEN: k,
            CONNECTION_OPEN_SUPPLEMENTAL: k,
            CACHE_LOADED: () => this.loadCache(),
            OVERLAY_INITIALIZE: d,
            USER_SETTINGS_PROTO_UPDATE: f
        });
    }
}
u(h, 'displayName', 'KeywordFilterStore'), u(h, 'LATEST_SNAPSHOT_VERSION', 2);
let b = new h();
