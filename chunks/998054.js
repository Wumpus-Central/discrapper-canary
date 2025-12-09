n.d(t, {
    Y: () => d,
    f: () => p,
}),
    n(415506),
    n(49124);
var r = n(818710),
    i = n(626135),
    a = n(960048),
    o = n(998502),
    s = n(323183),
    l = n(5900),
    c = n(60995),
    u = n(981631);
let d = async () => {
        if (!(0, r.nI)()) return l._n.UNKNOWN;
        try {
            switch ((await f()).account.type.toLowerCase()) {
                case "unlimited":
                case "discord":
                    return l._n.INSTALLED;
                case "team":
                    return l._n.ZERO_TRUST;
                default:
                    return l._n.EXISTING_INSTALLATION;
            }
        } catch (e) {
            if (
                (e instanceof Error && "Failed to locate warp-cli" === e.message) ||
                (e instanceof Error && _(e.message))
            )
                return l._n.NOT_INSTALLED;
            if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return l._n.WAITING_FOR_TERMS;
            return (
                i.default.track(u.rMx.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: s.D.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS,
                }),
                a.Z.captureException(e instanceof Error ? e : Error(JSON.stringify(e)), {
                    tags: { source: s.D.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS },
                }),
                l._n.ERROR
            );
        }
    },
    f = () =>
        new Promise(async (e, t) => {
            try {
                var n, r, i;
                let a = await (null === o.ZP ||
                void 0 === o.ZP ||
                null == (i = o.ZP.getDiscordUtils) ||
                null == (r = i.call(o.ZP)) ||
                null == (n = r.runWarpCommand)
                    ? void 0
                    : n.call(r, "registration", "show"));
                if (null != a.error) return void t(a);
                e(a);
            } catch (e) {
                t(e);
            }
        }),
    p = async () => {
        await (0, c._)(!0), await o.ZP.getDiscordUtils().installWarp();
    },
    _ = (e) =>
        e.includes("Unexpected token") ||
        e.includes("Cannot read properties of undefined") ||
        e.includes("Unexpected end of JSON input");
