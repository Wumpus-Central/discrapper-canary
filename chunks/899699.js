"use strict";
let r;
n.d(t, { R: () => u, m: () => c });
var i = n(626584),
    a = n(206885),
    s = n(837921);
let o = new i.A("OverlayModuleUtils"),
    l = null;
function u() {
    function e(e) {
        for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"])
            null == e[t] &&
                (o.info(`polyfilling OverlayModule.${t}(); Overlay module is probably out of date.`),
                (e[t] = () => void 0));
        return e;
    }
    async function t() {
        if (!a.O)
            throw (
                (o.error("Attempted to load overlay on an unsupported platform."),
                Error("Overlay is not supported on this platform."))
            );
        try {
            return await s.Ay.ensureModule("discord_overlay2"), (r = e(s.Ay.requireModule("discord_overlay2")));
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    }
    return null != r ? Promise.resolve(r) : (null == l && (l = t()), l);
}
function c() {
    if (null == r)
        try {
            r = s.Ay.requireModule("discord_overlay2");
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    return r;
}
