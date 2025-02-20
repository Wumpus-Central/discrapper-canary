n.d(t, { L: () => a }), n(627494), n(757143), n(301563);
var r = n(503461),
    i = n(190313);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a {
    get prefix() {
        return this.table.prefix;
    }
    withoutLogging() {
        return new a(this.originalPrefix, this.table.tableId, this.table.database, !1);
    }
    get(e) {
        return this.table.get([e]);
    }
    getMany(e) {
        return this.table.getMany([], e);
    }
    getRange(e, t, n) {
        return this.table.getRange([e], [t], n);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        return this.transaction((n) => n.put(e, t), ''.concat(this.prefix, ' put'));
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        return this.transaction((n) => n.putAll(e, t), ''.concat(this.prefix, ' putAll'));
    }
    replaceAll(e) {
        return this.transaction((t) => t.replaceAll(e), ''.concat(this.prefix, ' replaceAll'));
    }
    delete(e) {
        return this.transaction((t) => t.delete(e), ''.concat(this.prefix, ' delete'));
    }
    transaction(e, t) {
        return this.table.transaction((t) => e(new s(t)), t);
    }
    upgradeTransaction(e) {
        return new s(this.table.upgradeTransaction(e));
    }
    getManySyncUnsafe(e) {
        return this.table.getManySyncUnsafe([], e);
    }
    getMapEntriesSyncUnsafe() {
        return this.table.getMapEntriesSyncUnsafe();
    }
    static cell(e, t) {
        return {
            key: [e.id],
            data: e,
            generation: t
        };
    }
    constructor(e, t, n, r = !0) {
        o(this, 'originalPrefix', void 0), o(this, 'table', void 0), (this.originalPrefix = e), (this.table = new i.i([e], t, n, r));
    }
}
class s {
    static fromDatabaseTransaction(e, t, n) {
        return new s(new i.E(e, t, n));
    }
    put(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        return this.transaction.put(a.cell(e, null), t);
    }
    putAll(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Sn.Replace;
        return this.transaction.putAll(
            e.map((e) => a.cell(e, null)),
            t
        );
    }
    replaceAll(e) {
        this.delete(), this.putAll(e);
    }
    delete(e) {
        return 0 == arguments.length ? this.transaction.delete([]) : this.transaction.delete([e]);
    }
    constructor(e) {
        o(this, 'transaction', void 0), (this.transaction = e);
    }
}
