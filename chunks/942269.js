"use strict";
n.d(t, { yW: () => p }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(626584),
    a = n(747465);
let o = Symbol("version"),
    l = Object.freeze({}),
    u = new s.A("LibdiscoreStore"),
    c = (e) => e;
class d {
    type;
    kkvDatabase;
    k1key;
    k2key;
    shouldIndex;
    constructor(e, t, n, r, i) {
        (this.type = e), (this.kkvDatabase = t), (this.k1key = n), (this.k2key = r), (this.shouldIndex = i);
    }
    getK1Key(e) {
        return "kv" === this.type ? "0" : "string" == typeof this.k1key ? e[this.k1key] : this.k1key(e);
    }
    getK2Key(e) {
        let t = "kv" === this.type ? this.k1key : this.k2key;
        if ((null == this.shouldIndex || this.shouldIndex(e)) && null != t) return "string" == typeof t ? e[t] : t(e);
    }
}
class _ {
    kkvDatabase;
    partition;
    constructor(e, t) {
        (this.kkvDatabase = e), (this.partition = t);
    }
    set(e, t) {
        this.kkvDatabase.setRecord(this.partition, e, t);
    }
    get(e) {
        return this.kkvDatabase.getRecord(this.partition, e);
    }
    has(e) {
        return this.kkvDatabase.hasRecord(this.partition, e);
    }
    getAllRecords() {
        return this.kkvDatabase.getPartition(this.partition);
    }
    remove(e) {
        return this.kkvDatabase.removeRecord(this.partition, e);
    }
    clear() {
        this.kkvDatabase.removePartition(this.partition), this.kkvDatabase.setPartition(this.partition, {});
    }
    length() {
        return this.kkvDatabase.partitionLength(this.partition);
    }
    version() {
        return this.kkvDatabase.partitionVersion(this.partition) ?? this.kkvDatabase.version();
    }
    memoized(e, t) {
        return this.kkvDatabase.memoizedSinglePartition(this.partition, e, t);
    }
}
class f {
    nextVersion;
    state;
    secondaryIndexes = [];
    constructor(e) {
        (this.nextVersion = e), (this.state = this.emptyState());
    }
    addSecondaryKVIndex(e, t) {
        let n = new f(this.nextVersion),
            r = new d("kv", n, e, void 0, t);
        return this.secondaryIndexes.push(r), n.intoKV();
    }
    addSecondaryKKVIndex(e, t, n) {
        let r = new f(this.nextVersion),
            i = new d("kkv", r, e, t, n);
        return this.secondaryIndexes.push(i), r;
    }
    intoKV(e) {
        return new _(this, e ?? "0");
    }
    version() {
        return this.state.version;
    }
    partitionVersion(e) {
        let t = this.state.root[e];
        return null == t ? this.version() : this._derivedVersion(t.derived.memoized);
    }
    hasPartition(e) {
        return null != this.state.root[e];
    }
    hasRecord(e, t) {
        return this.state.root[e]?.root[t] != null;
    }
    getRecord(e, t) {
        return this.state.root[e]?.root[t];
    }
    getManyRecords(e, t) {
        let n = this.state.root[e];
        if (null == n) return [];
        let r = [];
        for (let e of t) {
            let t = n.root[e];
            null != t && r.push(t);
        }
        return r;
    }
    getPartition(e) {
        let t = this.state.root[e];
        return null != t ? t.root : l;
    }
    getAllPartitions() {
        return this.state.root;
    }
    getPartitionKeys() {
        return Object.keys(this.state.root);
    }
    partitionLength(e) {
        let t = this.state.root[e];
        return null == t ? 0 : t.derived.length;
    }
    length() {
        return this.state.derived.length;
    }
    numPartitions() {
        return this.state.derived.numPartitions;
    }
    getNullablePartition(e) {
        let t = this.state.root[e];
        return null == t ? null : t.root;
    }
    _derivedVersion(e) {
        let t = e[o];
        return null == t && (e[o] = t = this.nextVersion()), t;
    }
    mapPartitions(e) {
        let t = [],
            { root: n } = this.state;
        for (let r in n) t.push({ partitionKey: r, values: e(n[r].root, r) });
        return t;
    }
    memoizedPartition(e, t) {
        let n = Symbol(),
            r = void 0 !== t ? t : e("", {});
        return (t) => {
            let i = this.state.root[t];
            if (null == i) return r;
            let {
                    root: s,
                    derived: { memoized: a },
                } = i,
                o = a[n];
            return Object.hasOwnProperty.call(a, n) || ((o = e(t, s)), (a[n] = o)), o;
        };
    }
    memoizedSinglePartition(e, t, n) {
        let r = Symbol(),
            i = void 0 !== n ? n : t(l);
        return () => {
            let n = this.state.root[e];
            if (null == n) return i;
            let {
                    root: s,
                    derived: { memoized: a },
                } = n,
                o = a[r];
            return Object.hasOwnProperty.call(a, r) || ((o = t(s)), (a[r] = o)), o;
        };
    }
    memoized(e) {
        let t = Symbol();
        return () => {
            let { memoized: n } = this.state.derived,
                r = n[t];
            return Object.hasOwnProperty.call(n, t) || ((r = e(this.state.root)), (n[t] = r)), r;
        };
    }
    emptyState() {
        return { root: {}, version: this.nextVersion(), derived: { length: 0, numPartitions: 0, memoized: {} } };
    }
    emptyPartitionState(e) {
        return { root: {}, version: e ?? this.nextVersion(), derived: { length: 0, memoized: {} } };
    }
    clear() {
        for (let e of ((this.state = this.emptyState()), this.secondaryIndexes)) e.kkvDatabase.clear();
    }
    removePartition(e, t) {
        t ??= this.nextVersion();
        let n = this.state.root[e];
        return (
            null != n &&
            (this.updateSecondaryIndexes(void 0, Object.values(n.root), t),
            delete this.state.root[e],
            this.state.derived.numPartitions--,
            (this.state.version = t),
            (this.state.derived.memoized = {}),
            (this.state.derived.length -= n.derived.length),
            !0)
        );
    }
    removeRecord(e, t, n) {
        n ??= this.nextVersion();
        let r = this.state.root[e];
        if (null == r) return !1;
        let i = r.root[t];
        return (
            null != i &&
            (this.updateSecondaryIndexes(void 0, [i], n),
            delete r.root[t],
            r.derived.length--,
            0 === r.derived.length
                ? (delete this.state.root[e], this.state.derived.numPartitions--)
                : (r.derived.memoized = {}),
            this.state.derived.length--,
            (this.state.version = n),
            (this.state.derived.memoized = {}),
            !0)
        );
    }
    updateRecord(e, t, n, r, i) {
        if (((i ??= this.nextVersion()), null == this.state.root[e])) throw Error(`Partition ${e} does not exist`);
        if (null == this.state.root[e].root[t]) throw Error(`Record ${t} does not exist in partition ${e}`);
        let s = this.state.root[e].root[t],
            a = r({ ...s, ...n });
        return this.updateSecondaryIndexes([a], [s], i), (this.touchPartition(e, i).root[t] = a), !0;
    }
    touchPartition(e, t) {
        return (
            (t ??= this.nextVersion()),
            null == this.state.root[e]
                ? ((this.state.root[e] = this.emptyPartitionState(t)), this.state.derived.numPartitions++)
                : ((this.state.root[e].version = t), (this.state.root[e].derived.memoized = {})),
            (this.state.version = t),
            (this.state.derived.memoized = {}),
            this.state.root[e]
        );
    }
    setRecord(e, t, n, r) {
        r ??= this.nextVersion();
        let i = this.touchPartition(e, r);
        return (
            null == i.root[t] && (i.derived.length++, this.state.derived.length++),
            (i.root[t] = n),
            this.updateSecondaryIndexes([n], void 0, r),
            !0
        );
    }
    setPartition(e, t, n) {
        (n ??= this.nextVersion()), this.removePartition(e, n);
        let r = Object.keys(t).length;
        if (0 === r) return !0;
        this.updateSecondaryIndexes(Object.values(t), void 0, n);
        let i = this.touchPartition(e, n);
        return (i.root = t), (i.derived.length = r), (this.state.derived.length += r), !0;
    }
    updateSecondaryIndexes(e, t, n) {
        for (let r of this.secondaryIndexes) {
            if (void 0 !== t)
                for (let e of t) {
                    let t = r.getK1Key(e),
                        i = r.getK2Key(e);
                    null != t && null != i && r.kkvDatabase.removeRecord(t, i, n);
                }
            if (void 0 !== e)
                for (let t of e) {
                    let e = r.getK1Key(t),
                        i = r.getK2Key(t);
                    null != e && null != i && r.kkvDatabase.setRecord(e, i, t, n);
                }
        }
    }
}
class p extends r.il {
    mode;
    state;
    _nextVersion = 0;
    recordCreators = new Map();
    wrappedState = null;
    shadowDatabases = null;
    shadowRecordCreators = null;
    dualReadValidationDisabled = !1;
    constructor(e, t = "typescript") {
        const n = {};
        if ("typescript" === t || "typescript-libdiscore-dual-read" === t)
            for (const t in e) {
                const r = e[t],
                    i = (e) => {
                        this.wrappedState ??= this.stateWrapper();
                        let t = this._nextVersion;
                        if ((r(e, this.wrappedState), this._nextVersion === t)) return !1;
                    };
                n[t] = i;
            }
        super(i.h, n),
            (this.mode = t),
            (this.state = { databases: {} }),
            "typescript-libdiscore-dual-read" === t &&
                ((this.shadowDatabases = {}), (this.shadowRecordCreators = new Map()));
    }
    getMode() {
        return this.mode;
    }
    disableDualReadValidation() {
        "typescript-libdiscore-dual-read" === this.mode && (this.dualReadValidationDisabled = !0);
    }
    connectWithLibdiscore(e) {
        if ("typescript" === this.mode) throw Error("connectWithLibdiscore should not be called in TypeScript mode.");
        let { storeToken: t, initialState: n } = e.connectStore({
            storeName: this.getName(),
            databases: Object.keys(this.state.databases).map((e) => ({ name: e, type: "kkv" })),
        });
        return (
            this.applyChanges(n), "typescript-libdiscore-dual-read" === this.mode && this.setupDualReadValidation(), t
        );
    }
    setupDualReadValidation() {
        let e = Symbol("didValidatePartition"),
            t = { root: {}, derived: { length: 0, memoized: {} } };
        this.addChangeListener(() => {
            let n = this.shadowDatabases;
            if (null != n && !this.dualReadValidationDisabled)
                for (let r in this.state.databases) {
                    let i = this.state.databases[r],
                        s = n[r];
                    if (null == s) {
                        u.warn(`Shadow database ${r} not found for dual-read validation`);
                        continue;
                    }
                    let o = i.getAllPartitions(),
                        l = s.getAllPartitions();
                    (0, a.R7)(`${this.getName()}:${r}`, "Kkv", (n) => {
                        let r = Object.keys(o),
                            i = Object.keys(l);
                        for (let i of r) {
                            let r = o[i];
                            if (!Object.prototype.hasOwnProperty.call(l, i)) {
                                n(r, t);
                                continue;
                            }
                            let s = l[i],
                                a = r.derived.memoized[e],
                                u = s.derived.memoized[e];
                            if (null != a && a === u) continue;
                            n(r, s);
                            let c = {};
                            (r.derived.memoized[e] = c), (s.derived.memoized[e] = c);
                        }
                        for (let e of i) Object.prototype.hasOwnProperty.call(o, e) || n(t, l[e]);
                    });
                }
        });
    }
    addKKVDatabase(e, t) {
        let n = new f(this.nextVersion.bind(this));
        if (((this.state.databases[e] = n), this.recordCreators.set(e, t ?? c), null != this.shadowDatabases)) {
            let n = new f(this.nextVersion.bind(this));
            (this.shadowDatabases[e] = n), this.shadowRecordCreators.set(e, t ?? c);
        }
        return n;
    }
    addKVDatabase(e, t) {
        let n = new f(this.nextVersion.bind(this)),
            r = n.intoKV();
        if (((this.state.databases[e] = n), this.recordCreators.set(e, t ?? c), null != this.shadowDatabases)) {
            let n = new f(this.nextVersion.bind(this));
            (this.shadowDatabases[e] = n), this.shadowRecordCreators.set(e, t ?? c);
        }
        return r;
    }
    applyChanges(e) {
        let t = "typescript-libdiscore-dual-read" === this.mode;
        for (let n of e) this.executeDatabaseChange(n, t);
    }
    clearAllDatabases() {
        for (let e in this.state.databases) this.state.databases[e].clear();
    }
    markDirty() {
        this._nextVersion++;
    }
    executeDatabaseChange(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { databaseName: n, opcodes: r } = e,
            i = this.nextVersion(),
            s = t ? this.shadowDatabases : this.state.databases,
            a = t ? this.shadowRecordCreators : this.recordCreators,
            o = s[n];
        if (null == o) throw Error(`Database ${n} does not exist`);
        let l = a.get(n);
        for (let e of r)
            switch (e.opcode) {
                case "removePartition":
                    o.removePartition(e.partitionKey, i);
                    break;
                case "setPartition": {
                    let t = e.partition;
                    for (let e in t) t[e] = l(t[e]);
                    o.setPartition(e.partitionKey, t, i);
                    break;
                }
                case "updateRecord":
                    o.updateRecord(e.partitionKey, e.clusteringKey, e.value, l, i);
                    break;
                case "setRecord":
                    o.setRecord(e.partitionKey, e.clusteringKey, l(e.value), i);
                    break;
                case "removeRecord":
                    o.removeRecord(e.partitionKey, e.clusteringKey, i);
                    break;
                case "clearDatabase":
                    o.clear();
            }
    }
    nextVersion() {
        return this._nextVersion++;
    }
}
