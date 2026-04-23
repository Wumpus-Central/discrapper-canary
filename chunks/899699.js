let i;
n.d(t, { R: () => o, m: () => E });
var r = n(626584),
    a = n(206885),
    s = n(19575);
let _ = new r.A("OverlayModuleUtils"),
    l = null;
function o() {
    async function e() {
        if (!a.O)
            throw (
                (_.error("Attempted to load overlay on an unsupported platform."),
                Error("Overlay is not supported on this platform."))
            );
        try {
            return (
                await s.Ay.ensureModule("discord_overlay2"),
                (i = (function (e) {
                    for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"])
                        null == e[t] &&
                            (_.info(`polyfilling OverlayModule.${t}(); Overlay module is probably out of date.`),
                            (e[t] = () => void 0));
                    return e;
                })(s.Ay.requireModule("discord_overlay2")))
            );
        } catch (e) {
            _.error("failed ensuring discord_overlay2", e);
            return;
        }
    }
    return null != i ? Promise.resolve(i) : (null == l && (l = e()), l);
}
function E() {
    if (null == i)
        try {
            i = s.Ay.requireModule("discord_overlay2");
        } catch (e) {
            _.error("failed ensuring discord_overlay2", e);
            return;
        }
    return i;
}
