n.d(t, { Z: () => c });
var r = n(710845),
    i = n(287328),
    a = n(870078);
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
let s = new r.Z('KvCacheVersion');
class l {
    async okAsync(e) {
        let t = await i.Z.cache(e).get(a.aQ);
        return null == t ? null : t === a.Wj;
    }
    canUseGuildVersions() {
        return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
    }
    async doesDatabaseVersionMatchJsConstants() {
        let e = i.Z.forceResyncVersion();
        if (null == e) return !1;
        let t = await e.get(a.LH),
            n = null == t ? void 0 : t.version;
        return n === a.pL || (s.info('KVStore version mismatch: '.concat(n, ' vs ').concat(a.pL)), !1);
    }
    handleClear() {
        this.hasSuccessfullyConnected = !1;
    }
    handleConnectionOpen() {
        this.hasSuccessfullyConnected = !0;
    }
    handleWrite(e) {
        (this.hasSuccessfullyConnected = !0), i.Z.cacheTransaction(e).put(a.DQ, '\uD83D\uDC4B'), i.Z.cacheTransaction(e).put(a.aQ, a.Wj), i.Z.forceResyncVersionTransaction(e).put(a.LH, { version: a.pL });
    }
    resetInMemoryState() {
        this.hasSuccessfullyConnected = !1;
    }
    constructor() {
        o(this, 'hasSuccessfullyConnected', !1),
            o(this, 'actions', {
                BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWrite(t)
            });
    }
}
let c = new l();
