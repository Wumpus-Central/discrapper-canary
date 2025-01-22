r.d(n, {
    L: function () {
        return u;
    }
});
var i = r(627494);
var a = r(757143);
var o = r(503461),
    s = r(190313);
function l(e, n, r) {
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
class u {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new u(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e) {
        return this.table.get([e]);
    }
    getMany(e) {
        return this.table.getMany([], e);
    }
    getRange(e, n, r) {
        return this.table.getRange([e], [n], r);
    }
    getKvEntries() {
        return this.table.getKvEntries();
    }
    getMapEntries() {
        return this.table.getMapEntries();
    }
    getIds() {
        return this.table.getChildIds([]);
    }
    getParentId(e) {
        return this.table.getParentId([null, e]);
    }
    put(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Sn.Replace;
        return this.transaction((r) => r.put(e, n), ''.concat(this.prefix, ' put'));
    }
    putAll(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Sn.Replace;
        return this.transaction((r) => r.putAll(e, n), ''.concat(this.prefix, ' putAll'));
    }
    replaceAll(e) {
        return this.transaction((n) => n.replaceAll(e), ''.concat(this.prefix, ' replaceAll'));
    }
    delete(e) {
        return this.transaction((n) => n.delete(e), ''.concat(this.prefix, ' delete'));
    }
    transaction(e, n) {
        return this.table.transaction((n) => e(new c(n)), n);
    }
    upgradeTransaction(e) {
        return new c(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    static cell(e, n) {
        return {
            key: [e.id],
            data: e,
            generation: n
        };
    }
    constructor(e, n, r, i = !0) {
        l(this, 'originalPrefix', void 0), l(this, 'table', void 0), (this.originalPrefix = e), (this.table = new s.i([e], n, r, i));
    }
}
class c {
    static fromDatabaseTransaction(e, n, r) {
        return new c(new s.E(e, n, r));
    }
    put(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Sn.Replace;
        return this.transaction.put(u.cell(e, null), n);
    }
    putAll(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Sn.Replace;
        return this.transaction.putAll(
            e.map((e) => u.cell(e, null)),
            n
        );
    }
    replaceAll(e) {
        this.delete(), this.putAll(e);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e]);
    }
    constructor(e) {
        l(this, 'transaction', void 0), (this.transaction = e);
    }
}
