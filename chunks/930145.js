n.d(t, { A: () => o });
var r = n(198584),
    i = n(350167);
class o {
    static open(e, t) {
        return i.r.executeAsync('database_open', (n) => {
            var i;
            return r.d.databaseOpen(n, {
                database: e,
                invalidateDisabledHandles: null != (i = null == t ? void 0 : t.invalidateDisabledHandles) && i
            });
        });
    }
    static openSyncUnsafe(e, t) {
        var n;
        return r.d.databaseOpen(
            null,
            {
                database: e,
                invalidateDisabledHandles: null != (n = null == t ? void 0 : t.invalidateDisabledHandles) && n
            },
            { synchronous: !0 }
        );
    }
    static delete(e) {
        return i.r.executeAsync('database_delete', (t) => r.d.databaseDelete(t, { database: e }));
    }
    static async list() {
        return (await i.r.executeAsync('database_list', (e) => r.d.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return i.r.executeAsync('database_optimize', (t) => r.d.databaseOptimize(t, { aggressive: e }));
    }
    static raise(e) {
        r.d.raise(e);
    }
}
