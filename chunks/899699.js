"use strict";
let i;
n.d(t, { R: () => u, m: () => c });
var r = n(626584),
    s = n(206885),
    a = n(19575);
let o = new r.A("OverlayModuleUtils"),
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
                (i = (function (e) {
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
    return null != i ? Promise.resolve(i) : (null == l && (l = e()), l);
}
function c() {
    if (null == i)
        try {
            i = a.Ay.requireModule("discord_overlay2");
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    return i;
}
