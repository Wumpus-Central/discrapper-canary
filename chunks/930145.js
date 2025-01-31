n.d(t, { A: () => a });
var i = n(198584),
    r = n(350167);
class a {
    static open(e, t) {
        return r.r.executeAsync('database_open', (n) => {
            var r;
            return i.d.databaseOpen(n, {
                database: e,
                invalidateDisabledHandles: null !== (r = null == t ? void 0 : t.invalidateDisabledHandles) && void 0 !== r && r
            });
        });
    }
    static openSyncUnsafe(e, t) {
        var n;
        return i.d.databaseOpen(
            null,
            {
                database: e,
                invalidateDisabledHandles: null !== (n = null == t ? void 0 : t.invalidateDisabledHandles) && void 0 !== n && n
            },
            { synchronous: !0 }
        );
    }
    static delete(e) {
        return r.r.executeAsync('database_delete', (t) => i.d.databaseDelete(t, { database: e }));
    }
    static async list() {
        return (await r.r.executeAsync('database_list', (e) => i.d.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return r.r.executeAsync('database_optimize', (t) => i.d.databaseOptimize(t, { aggressive: e }));
    }
    static raise(e) {
        i.d.raise(e);
    }
}
