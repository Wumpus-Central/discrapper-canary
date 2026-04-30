let i;
n.d(t, { R: () => d, m: () => c });
var a = n(626584),
    r = n(206885),
    s = n(19575);
let l = new a.A("OverlayModuleUtils"),
    o = null;
function d() {
    async function e() {
        if (!r.O)
            throw (
                (l.error("Attempted to load overlay on an unsupported platform."),
                Error("Overlay is not supported on this platform."))
            );
        try {
            return (
                await s.Ay.ensureModule("discord_overlay2"),
                (i = (function (e) {
                    for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"])
                        null == e[t] &&
                            (l.info(`polyfilling OverlayModule.${t}(); Overlay module is probably out of date.`),
                            (e[t] = () => void 0));
                    return e;
                })(s.Ay.requireModule("discord_overlay2")))
            );
        } catch (e) {
            l.error("failed ensuring discord_overlay2", e);
            return;
        }
    }
    return null != i ? Promise.resolve(i) : (null == o && (o = e()), o);
}
function c() {
    if (null == i)
        try {
            i = s.Ay.requireModule("discord_overlay2");
        } catch (e) {
            l.error("failed ensuring discord_overlay2", e);
            return;
        }
    return i;
}
