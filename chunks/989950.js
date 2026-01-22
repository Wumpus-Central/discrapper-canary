n.d(t, { A: () => g }), n(896048);
var r = n(311907),
    i = n(35033),
    a = n(73153),
    s = n(626584),
    o = n(961350),
    l = n(652309);
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
let u = new s.A("DatabaseManager"),
    d = !1;
class f extends r.Ay.Store {
    initialize() {
        this.waitFor(o.default),
            this.carefullySpeculativelyOpen(l.F()),
            this.handleAuthenticationStoreChanged(),
            o.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
    }
    databaseName(e) {
        return _(e);
    }
    database(e) {
        if (null != e) {
            var t;
            return null != (t = this.databases.get(e)) ? t : null;
        }
        return null;
    }
    carefullyOpenDatabase(e) {
        if (this.preventWritingCachesAgainThisSession)
            return u.verbose("Not opening database because caches have been manually cleared."), null;
        if (null != e && !this.databases.has(e)) {
            let t = h(e);
            u.verbose("added database (".concat(e, " \u2192 ").concat(t, ")")),
                this.databases.set(e, t),
                this.emitChange();
        }
        return this.database(e);
    }
    replaceDisableAllDatabases(e) {
        for (let t of (u.info("disabling and nulling all databases (reason: ".concat(e, ")")), this.databases.keys())) {
            let n = this.databases.get(t);
            null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null);
        }
        this.emitChange();
    }
    remove(e) {
        let t = this.databases.get(e);
        u.log("removing database (user: ".concat(e, ", database: ").concat(t, ")")),
            null == t || t.close(),
            this.databases.delete(e),
            this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0),
            this.replaceDisableAllDatabases("DatabaseManager (".concat(e.reason, ")"));
    }
    handleConnectionOpen() {
        let e = o.default.getId(),
            t = this.databases.get(e),
            n = null == t ? void 0 : t.state();
        null == t && n !== i.z9.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = o.default.getId(),
            t = this.activeUserId;
        if (e !== t) {
            let n = this.databases.get(t);
            u.verbose("active user changed (now: ".concat(e, ", was: ").concat(t, ", was: ").concat(n, ")")),
                null == n || n.close(),
                l.d(e),
                (this.activeUserId = e),
                this.databases.delete(t);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession)
            return void u.verbose("Not opening database because caches have been manually cleared.");
        if (null != e) {
            let t = await m(e);
            null == t || this.databases.has(e)
                ? (u.verbose("discarding speculative database (".concat(e, " \u2192 ").concat(t, ")")),
                  null == t || t.close())
                : (u.verbose("added speculative database (".concat(e, " \u2192 ").concat(t, ")")),
                  this.databases.set(e, t),
                  this.emitChange());
        }
    }
    constructor() {
        super(
            a.h,
            {
                CLEAR_CACHES: (e) => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged(),
            },
            a.A.Early,
        ),
            c(this, "databases", new Map()),
            c(this, "activeUserId", null),
            c(this, "preventWritingCachesAgainThisSession", !1);
    }
}
function p(e, t) {
    for (let n = 0; n < e; n++)
        try {
            return t();
        } catch (e) {
            u.error("tryUntil ".concat(n), e);
        }
    return null;
}
function _(e) {
    return "@account.".concat(e);
}
function h(e) {
    if (d) {
        let t = 50,
            n = _(e);
        return (
            u.verbose("synchronously opening ".concat(n)),
            p(t, () => i.Wm.openSyncUnsafe(n, { invalidateDisabledHandles: !0 }))
        );
    }
    return null;
}
async function m(e) {
    if (d) {
        let t = _(e);
        u.verbose("speculatively opening ".concat(t));
        try {
            return await i.Wm.open(t);
        } catch (e) {
            u.warn("couldn't speculatively open database.", e);
        }
    }
    return null;
}
let g = new f();
