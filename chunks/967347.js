n.d(t, { w: () => A });
var i = n(17928),
    r = n(228366),
    a = n(736056),
    s = n(954571),
    _ = n(723702),
    l = n(19575),
    o = n(652215);
let E = { hashes: {} };
async function d() {
    if (!_.isPlatformEmbedded || !(0, _.isWindows)()) return [];
    await l.Ay.ensureModule("discord_media");
    let e = l.Ay.requireModule("discord_media");
    return (await e.getSystemAnalyticsBlob()) ?? [];
}
async function c() {
    try {
        let e = (await d()).filter((e) => E.hashes[e.name] !== e.hash);
        for (let { name: t, hash: n, data: i } of e) {
            let e = { ...i, gpus: i.gpus?.map((e) => JSON.stringify(e)) };
            s.default.track(o.HAw.HARDWARE_DETECTED, e), ((E = { hashes: { ...E.hashes } }).hashes[t] = n);
        }
        e.length > 0 && I.emitChange();
    } catch (e) {}
}
class u extends i.Ay.PersistedStore {
    static displayName = "SystemAnalyticsStore";
    static persistKey = "SystemAnalyticsStore";
    initialize(e) {
        (E = null != e && "object" == typeof e.hashes ? e : { hashes: {} }), this.waitFor(a.A);
    }
    getState() {
        return E;
    }
    async info() {
        try {
            let e = (await d()).find((e) => "hardware_detected" === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
let I = new u(r.h, {
    START_SESSION: function () {
        return c(), !1;
    },
});
function A() {
    return I.info();
}
