let r;
n.d(t, {
    R: () => c,
    m: () => u,
}),
    n(896048),
    n(65821);
var i = n(626584),
    a = n(837921),
    s = n(672396);
let o = new i.A("OverlayModuleUtils"),
    l = null;
function c() {
    function e(e) {
        for (let t of ["createHostProcess", "connectProcess", "disconnectProcess", "destroyHostProcess"])
            null == e[t] &&
                (o.info("polyfilling OverlayModule.".concat(t, "(); Overlay module is probably out of date.")),
                (e[t] = () => void 0));
        return e;
    }
    async function t() {
        if (!s.OX)
            throw (
                (o.error("Attempted to load overlay on an unsupported platform."),
                Error("Overlay is not supported on this platform."))
            );
        try {
            return await a.Ay.ensureModule("discord_overlay2"), (r = e(a.Ay.requireModule("discord_overlay2")));
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    }
    return null != r ? Promise.resolve(r) : (null == l && (l = t()), l);
}
function u() {
    if (null == r)
        try {
            r = a.Ay.requireModule("discord_overlay2");
        } catch (e) {
            o.error("failed ensuring discord_overlay2", e);
            return;
        }
    return r;
}
