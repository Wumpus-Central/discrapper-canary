"use strict";
n.d(t, { x: () => s });
var i = n(379299),
    r = n(129966);
class s {
    static open(e, t) {
        return r.v.executeAsync("database_open", (n) =>
            i.T.databaseOpen(n, { database: e, invalidateDisabledHandles: t?.invalidateDisabledHandles ?? !1 }),
        );
    }
    static openSyncUnsafe(e, t) {
        return i.T.databaseOpen(
            null,
            { database: e, invalidateDisabledHandles: t?.invalidateDisabledHandles ?? !1 },
            { synchronous: !0 },
        );
    }
    static delete(e) {
        return r.v.executeAsync("database_delete", (t) => i.T.databaseDelete(t, { database: e }));
    }
    static async list() {
        return (await r.v.executeAsync("database_list", (e) => i.T.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return r.v.executeAsync("database_optimize", (t) => i.T.databaseOptimize(t, { aggressive: e }));
    }
    static raise(e) {
        i.T.raise(e);
    }
}
