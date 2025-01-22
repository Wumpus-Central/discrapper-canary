r.d(n, {
    A: function () {
        return o;
    }
});
var i = r(198584),
    a = r(350167);
class o {
    static open(e, n) {
        return a.r.executeAsync('database_open', (r) => {
            var a;
            return i.d.databaseOpen(r, {
                database: e,
                invalidateDisabledHandles: null !== (a = null == n ? void 0 : n.invalidateDisabledHandles) && void 0 !== a && a
            });
        });
    }
    static openSyncUnsafe(e, n) {
        var r;
        return i.d.databaseOpen(
            null,
            {
                database: e,
                invalidateDisabledHandles: null !== (r = null == n ? void 0 : n.invalidateDisabledHandles) && void 0 !== r && r
            },
            { synchronous: !0 }
        );
    }
    static delete(e) {
        return a.r.executeAsync('database_delete', (n) => i.d.databaseDelete(n, { database: e }));
    }
    static async list() {
        return (await a.r.executeAsync('database_list', (e) => i.d.databaseList(e))).map((e) => e.data);
    }
    static optimize(e) {
        return a.r.executeAsync('database_optimize', (n) => i.d.databaseOptimize(n, { aggressive: e }));
    }
    static raise(e) {
        i.d.raise(e);
    }
}
