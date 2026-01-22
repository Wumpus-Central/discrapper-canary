n.d(t, {
    x: () => a,
});
var r = n(689234),
    i = n(129966);
class a {
    static open(e, t) {
        return i.v.executeAsync("database_open", (n) => {
            var i;
            return r.T.databaseOpen(n, {
                database: e,
                invalidateDisabledHandles: null != (i = null == t ? void 0 : t.invalidateDisabledHandles) && i,
            });
        });
    }
    static openSyncUnsafe(e, t) {
        var n;
        return r.T.databaseOpen(
            null,
            {
                database: e,
                invalidateDisabledHandles: null != (n = null == t ? void 0 : t.invalidateDisabledHandles) && n,
            },
            {
                synchronous: !0,
            },
        );
    }
    static delete(e) {
        return i.v.executeAsync("database_delete", (t) =>
            r.T.databaseDelete(t, {
                database: e,
            }),
        );
    }
    static async list() {
        return (await i.v.executeAsync("database_list", (e) => r.T.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return i.v.executeAsync("database_optimize", (t) =>
            r.T.databaseOptimize(t, {
                aggressive: e,
            }),
        );
    }
    static raise(e) {
        r.T.raise(e);
    }
}
