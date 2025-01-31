n.d(t, { Z: () => u });
var i = n(710845),
    r = n(287328),
    a = n(870078);
function s(e, t, n) {
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
let o = new i.Z('KvCacheVersion');
class l {
    async okAsync(e) {
        let t = await r.Z.cache(e).get(a.aQ);
        return null == t ? null : t === a.Wj;
    }
    canUseGuildVersions() {
        return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
    }
    async doesDatabaseVersionMatchJsConstants() {
        let e = r.Z.forceResyncVersion();
        if (null == e) return !1;
        let t = await e.get(a.LH),
            n = null == t ? void 0 : t.version;
        return n === a.pL || (o.info('KVStore version mismatch: '.concat(n, ' vs ').concat(a.pL)), !1);
    }
    handleClear() {
        this.hasSuccessfullyConnected = !1;
    }
    handleConnectionOpen() {
        this.hasSuccessfullyConnected = !0;
    }
    handleWrite(e) {
        (this.hasSuccessfullyConnected = !0), r.Z.cacheTransaction(e).put(a.DQ, '\uD83D\uDC4B'), r.Z.cacheTransaction(e).put(a.aQ, a.Wj), r.Z.forceResyncVersionTransaction(e).put(a.LH, { version: a.pL });
    }
    resetInMemoryState() {
        this.hasSuccessfullyConnected = !1;
    }
    constructor() {
        s(this, 'hasSuccessfullyConnected', !1),
            s(this, 'actions', {
                BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWrite(t)
            });
    }
}
let u = new l();
