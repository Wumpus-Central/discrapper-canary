(n.d(t, {
    IZ: () => d,
    Re: () => s,
    j_: () => f
}),
    n(953529),
    n(539854));
var r = n(512722),
    i = n.n(r),
    a = n(668757);
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
let s = [],
    l = Symbol('unknown');
class c {
    getCachedConfig() {
        return (this.cachedConfig === l && ((0, a.X6)() ? (this.cachedConfig = (0, a.Md)().getConfig(this.id)) : (this.cachedConfig = void 0)), this.cachedConfig);
    }
    setExperiment(e) {
        this.inner = e;
    }
    getCurrentConfig() {
        return (i()(null != this.inner, 'experiment must be set before calling getCurrentConfig'), this.inner.getCurrentConfig({ location: 'default' }));
    }
    constructor(e) {
        (o(this, 'id', void 0), o(this, 'inner', void 0), o(this, 'cachedConfig', void 0), (this.id = e), (this.inner = null), (this.cachedConfig = l), s.push(this));
    }
}
class u extends c {
    getCachedKvStoreMode() {
        var e;
        let t = this.getCachedConfig();
        switch (null != (e = null == t ? void 0 : t.treatmentId) ? e : -1) {
            case 1:
                return 'typescript-libdiscore-dual-read';
            case 2:
                return 'libdiscore';
            default:
                return 'typescript';
        }
    }
    isEnabled() {
        let e = this.getCachedConfig();
        return void 0 !== e && e.treatmentId > 0;
    }
    getLabel() {
        return 'libdiscore KVStore['.concat(this.storeName, '] Migration');
    }
    getTreatments() {
        return [
            {
                treatmentId: 0,
                label: 'Use typescript as the source of truth'
            },
            {
                treatmentId: 1,
                label: 'Typescript <-> libdiscore Dual Read, Typescript is the source of truth'
            },
            {
                treatmentId: 2,
                label: 'Use libdiscore as the source of truth'
            }
        ];
    }
    constructor(e, t) {
        (super(e), o(this, 'storeName', void 0), (this.storeName = t));
    }
}
let d = new u('2025-05_libdiscore_notestore_v2', 'NoteStore'),
    f = new u('2025-07_libdiscore_guildstore_v2', 'GuildStore');
