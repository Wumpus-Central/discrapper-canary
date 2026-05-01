n.d(t, { w: () => I });
var i = n(17928),
    a = n(228366),
    r = n(736056),
    s = n(954571),
    l = n(723702),
    o = n(19575),
    d = n(652215);
let c = { hashes: {} };
async function _() {
    if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return [];
    await o.Ay.ensureModule("discord_media");
    let e = o.Ay.requireModule("discord_media");
    return (await e.getSystemAnalyticsBlob()) ?? [];
}
async function E() {
    try {
        let e = (await _()).filter((e) => c.hashes[e.name] !== e.hash);
        for (let { name: t, hash: n, data: i } of e) {
            let e = { ...i, gpus: i.gpus?.map((e) => JSON.stringify(e)) };
            s.default.track(d.HAw.HARDWARE_DETECTED, e), ((c = { hashes: { ...c.hashes } }).hashes[t] = n);
        }
        e.length > 0 && A.emitChange();
    } catch (e) {}
}
class u extends i.Ay.PersistedStore {
    static displayName = "SystemAnalyticsStore";
    static persistKey = "SystemAnalyticsStore";
    initialize(e) {
        (c = null != e && "object" == typeof e.hashes ? e : { hashes: {} }), this.waitFor(r.A);
    }
    getState() {
        return c;
    }
    async info() {
        try {
            let e = (await _()).find((e) => "hardware_detected" === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
let A = new u(a.h, {
    START_SESSION: function () {
        return E(), !1;
    },
});
function I() {
    return A.info();
}
