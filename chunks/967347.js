"use strict";
n.d(t, { w: () => h });
var r = n(311907),
    i = n(73153),
    s = n(49463),
    a = n(954571),
    o = n(723702),
    l = n(837921),
    u = n(652215);
let c = { hashes: {} };
async function d() {
    if (!o.isPlatformEmbedded || !(0, o.isWindows)()) return [];
    await l.Ay.ensureModule("discord_media");
    let e = l.Ay.requireModule("discord_media");
    return (await e.getSystemAnalyticsBlob()) ?? [];
}
async function _() {
    try {
        let e = (await d()).filter((e) => c.hashes[e.name] !== e.hash);
        for (let { name: t, hash: n, data: r } of e) {
            let e = { ...r, gpus: r.gpus?.map((e) => JSON.stringify(e)) };
            a.default.track(u.HAw.HARDWARE_DETECTED, e), ((c = { hashes: { ...c.hashes } }).hashes[t] = n);
        }
        e.length > 0 && p.emitChange();
    } catch (e) {}
}
class f extends r.Ay.PersistedStore {
    static displayName = "SystemAnalyticsStore";
    static persistKey = "SystemAnalyticsStore";
    initialize(e) {
        (c = null != e && "object" == typeof e.hashes ? e : { hashes: {} }), this.waitFor(s.A);
    }
    getState() {
        return c;
    }
    async info() {
        try {
            let e = (await d()).find((e) => "hardware_detected" === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
let p = new f(i.h, {
    START_SESSION: function () {
        return _(), !1;
    },
});
function h() {
    return p.info();
}
