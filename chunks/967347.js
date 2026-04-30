"use strict";
n.d(t, { w: () => p });
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(174459),
    o = n(723702),
    l = n(19575),
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
        for (let { name: t, hash: n, data: i } of e) {
            let e = { ...i, gpus: i.gpus?.map((e) => JSON.stringify(e)) };
            a.default.track(u.HAw.HARDWARE_DETECTED, e), ((c = { hashes: { ...c.hashes } }).hashes[t] = n);
        }
        e.length > 0 && h.emitChange();
    } catch (e) {}
}
class f extends i.Ay.PersistedStore {
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
let h = new f(r.h, {
    START_SESSION: function () {
        return _(), !1;
    },
});
function p() {
    return h.info();
}
