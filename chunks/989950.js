"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(35033),
    a = n(73153),
    s = n(626584),
    o = n(961350),
    l = n(652309);
let u = new s.A("DatabaseManager"),
    c = !1;
class d extends r.Ay.Store {
    databases = new Map();
    activeUserId = null;
    preventWritingCachesAgainThisSession = !1;
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
        );
    }
    initialize() {
        this.waitFor(o.default),
            this.carefullySpeculativelyOpen(l.F()),
            this.handleAuthenticationStoreChanged(),
            o.default.addChangeListener(() => this.handleAuthenticationStoreChanged());
    }
    databaseName(e) {
        return f(e);
    }
    database(e) {
        return null != e ? (this.databases.get(e) ?? null) : null;
    }
    carefullyOpenDatabase(e) {
        if (this.preventWritingCachesAgainThisSession)
            return u.verbose("Not opening database because caches have been manually cleared."), null;
        if (null != e && !this.databases.has(e)) {
            let t = p(e);
            u.verbose(`added database (${e} → ${t})`), this.databases.set(e, t), this.emitChange();
        }
        return this.database(e);
    }
    replaceDisableAllDatabases(e) {
        for (let t of (u.info(`disabling and nulling all databases (reason: ${e})`), this.databases.keys())) {
            let n = this.databases.get(t);
            n?.disable(e), n?.close(), this.databases.set(t, null);
        }
        this.emitChange();
    }
    remove(e) {
        let t = this.databases.get(e);
        u.log(`removing database (user: ${e}, database: ${t})`),
            t?.close(),
            this.databases.delete(e),
            this.emitChange();
    }
    handleClearCaches(e) {
        e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0),
            this.replaceDisableAllDatabases(`DatabaseManager (${e.reason})`);
    }
    handleConnectionOpen() {
        let e = o.default.getId(),
            t = this.databases.get(e),
            n = t?.state();
        null == t && n !== i.z9.Open && this.remove(e), this.carefullyOpenDatabase(e);
    }
    handleAuthenticationStoreChanged() {
        let e = o.default.getId(),
            t = this.activeUserId;
        if (e !== t) {
            let n = this.databases.get(t);
            u.verbose(`active user changed (now: ${e}, was: ${t}, was: ${n})`),
                n?.close(),
                l.d(e),
                (this.activeUserId = e),
                this.databases.delete(t);
        }
    }
    async carefullySpeculativelyOpen(e) {
        if (this.preventWritingCachesAgainThisSession)
            return void u.verbose("Not opening database because caches have been manually cleared.");
        if (null != e) {
            let t = await h(e);
            null == t || this.databases.has(e)
                ? (u.verbose(`discarding speculative database (${e} → ${t})`), t?.close())
                : (u.verbose(`added speculative database (${e} → ${t})`), this.databases.set(e, t), this.emitChange());
        }
    }
}
function _(e, t) {
    for (let n = 0; n < e; n++)
        try {
            return t();
        } catch (e) {
            u.error(`tryUntil ${n}`, e);
        }
    return null;
}
function f(e) {
    return `@account.${e}`;
}
function p(e) {
    if (c) {
        let t = 50,
            n = f(e);
        return (
            u.verbose(`synchronously opening ${n}`),
            _(t, () => i.Wm.openSyncUnsafe(n, { invalidateDisabledHandles: !0 }))
        );
    }
    return null;
}
async function h(e) {
    if (c) {
        let t = f(e);
        u.verbose(`speculatively opening ${t}`);
        try {
            return await i.Wm.open(t);
        } catch (e) {
            u.warn("couldn't speculatively open database.", e);
        }
    }
    return null;
}
let m = new d();
