"use strict";
let r;
n.d(t, { R: () => u, m: () => d });
var i = n(626584),
    s = n(206885),
    a = n(837921);
let o = new i.A("OverlayModuleUtils"),
    l = null;
function u() {
    async function e() {
        if (!s.O)
            throw (
                (o.error("Attempted to load overlay on an unsupported platform."),
                Error("Overlay is not supported on this platform."))
            );
        try {
            return (
                await a.Ay.ensureModule("discord_overlay2"),
                (r = (function (e) {
                    for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"])
                        null == e[t] &&
                            (o.info(`polyfilling OverlayModule.${t}(); Overlay module is probably out of date.`),
                            (e[t] = () => void 0));
                    return e;
                })(a.Ay.requireModule("discord_overlay2")))
            );
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    }
    return null != r ? Promise.resolve(r) : (null == l && (l = e()), l);
}
function d() {
    if (null == r)
        try {
            r = a.Ay.requireModule("discord_overlay2");
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    return r;
}
