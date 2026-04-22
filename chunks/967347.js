"use strict";
n.d(t, { w: () => h });
var r = n(311907),
    i = n(73153),
    s = n(49463),
    a = n(954571),
    o = n(723702),
    l = n(837921),
    u = n(652215);
let d = { hashes: {} };
async function c() {
    if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return [];
    await l.Ay.ensureModule("discord_media");
    let e = l.Ay.requireModule("discord_media");
    return (await e.getSystemAnalyticsBlob()) ?? [];
}
async function _() {
    try {
        let e = (await c()).filter((e) => d.hashes[e.name] !== e.hash);
        for (let { name: t, hash: n, data: r } of e) {
            let e = { ...r, gpus: r.gpus?.map((e) => JSON.stringify(e)) };
            a.default.track(u.HAw.HARDWARE_DETECTED, e), ((d = { hashes: { ...d.hashes } }).hashes[t] = n);
        }
        e.length > 0 && E.emitChange();
    } catch (e) {}
}
class f extends r.Ay.PersistedStore {
    static displayName = "SystemAnalyticsStore";
    static persistKey = "SystemAnalyticsStore";
    initialize(e) {
        (d = null != e && "object" == typeof e.hashes ? e : { hashes: {} }), this.waitFor(s.A);
    }
    getState() {
        return d;
    }
    async info() {
        try {
            let e = (await c()).find((e) => "hardware_detected" === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
let E = new f(i.h, {
    START_SESSION: function () {
        return _(), !1;
    },
});
function h() {
    return E.info();
}
