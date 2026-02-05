"use strict";
n.d(t, { x: () => a });
var r = n(689234),
    i = n(129966);
class a {
    static open(e, t) {
        return i.v.executeAsync("database_open", (n) =>
            r.T.databaseOpen(n, { database: e, invalidateDisabledHandles: t?.invalidateDisabledHandles ?? !1 }),
        );
    }
    static openSyncUnsafe(e, t) {
        return r.T.databaseOpen(
            null,
            { database: e, invalidateDisabledHandles: t?.invalidateDisabledHandles ?? !1 },
            { synchronous: !0 },
        );
    }
    static delete(e) {
        return i.v.executeAsync("database_delete", (t) => r.T.databaseDelete(t, { database: e }));
    }
    static async list() {
        return (await i.v.executeAsync("database_list", (e) => r.T.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return i.v.executeAsync("database_optimize", (t) => r.T.databaseOptimize(t, { aggressive: e }));
    }
    static raise(e) {
        r.T.raise(e);
    }
}
