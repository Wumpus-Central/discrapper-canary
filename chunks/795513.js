var i = r(710845),
    a = r(287328),
    o = r(870078);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = new i.Z('KvCacheVersion');
class u {
    async okAsync(e) {
        let n = await a.Z.cache(e).get(o.aQ);
        return null == n ? null : n === o.Wj;
    }
    canUseGuildVersions() {
        return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants();
    }
    async doesDatabaseVersionMatchJsConstants() {
        let e = a.Z.forceResyncVersion();
        if (null == e) return !1;
        let n = await e.get(o.LH),
            r = null == n ? void 0 : n.version;
        return r === o.pL || (l.info('KVStore version mismatch: '.concat(r, ' vs ').concat(o.pL)), !1);
    }
    handleClear() {
        this.hasSuccessfullyConnected = !1;
    }
    handleConnectionOpen() {
        this.hasSuccessfullyConnected = !0;
    }
    handleWrite(e) {
        (this.hasSuccessfullyConnected = !0), a.Z.cacheTransaction(e).put(o.DQ, '\uD83D\uDC4B'), a.Z.cacheTransaction(e).put(o.aQ, o.Wj), a.Z.forceResyncVersionTransaction(e).put(o.LH, { version: o.pL });
    }
    resetInMemoryState() {
        this.hasSuccessfullyConnected = !1;
    }
    constructor() {
        s(this, 'hasSuccessfullyConnected', !1),
            s(this, 'actions', {
                BACKGROUND_SYNC: (e, n) => this.handleWrite(n),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, n) => this.handleWrite(n)
            });
    }
}
n.Z = new u();
