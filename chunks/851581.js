"use strict";
n.d(t, { w: () => h });
var r = n(311907),
    i = n(73153),
    a = n(49463),
    s = n(954571),
    o = n(723702),
    l = n(837921);
let u = { hashes: {} };
async function c() {
    if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return [];
    await l.Ay.ensureModule("discord_media");
    let e = l.Ay.requireModule("discord_media");
    return (await e.getSystemAnalyticsBlob()) || [];
}
async function d() {
    try {
        let e = (await c()).filter((e) => u.hashes[e.name] !== e.hash);
        for (let { name: t, hash: n, data: r } of e) {
            let e = { ...r, gpus: r.gpus?.map((e) => JSON.stringify(e)) };
            s.default.track(t, e), ((u = { hashes: { ...u.hashes } }).hashes[t] = n);
        }
        e.length > 0 && p.emitChange();
    } catch (e) {}
}
function _() {
    return d(), !1;
}
class f extends r.Ay.PersistedStore {
    static displayName = "SystemAnalyticsStore";
    static persistKey = "SystemAnalyticsStore";
    initialize(e) {
        (u = null != e && "object" == typeof e.hashes ? e : { hashes: {} }), this.waitFor(a.A);
    }
    getState() {
        return u;
    }
    async info() {
        try {
            let e = (await c()).find((e) => "hardware_detected" === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
let p = new f(i.h, { START_SESSION: _ });
function h() {
    return p.info();
}
