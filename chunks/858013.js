n.d(t, {
    t: () => d,
    u: () => p,
}),
    n(65821),
    n(457529);
var r = n(574381),
    i = n(954571),
    a = n(728458),
    s = n(837921),
    o = n(156186),
    l = n(602450),
    c = n(587093),
    u = n(652215);
let d = async () => {
        if (!(0, r.xl)()) return l.Lk.UNKNOWN;
        try {
            switch ((await f()).account.type.toLowerCase()) {
                case "unlimited":
                case "discord":
                    return l.Lk.INSTALLED;
                case "team":
                    return l.Lk.ZERO_TRUST;
                default:
                    return l.Lk.EXISTING_INSTALLATION;
            }
        } catch (e) {
            if (
                (e instanceof Error && "Failed to locate warp-cli" === e.message) ||
                (e instanceof Error && _(e.message))
            )
                return l.Lk.NOT_INSTALLED;
            if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return l.Lk.WAITING_FOR_TERMS;
            return (
                i.default.track(u.HAw.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: o.q.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS,
                }),
                a.A.captureException(e instanceof Error ? e : Error(JSON.stringify(e)), {
                    tags: {
                        source: o.q.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS,
                    },
                }),
                l.Lk.ERROR
            );
        }
    },
    f = () =>
        new Promise(async (e, t) => {
            try {
                var n, r, i;
                let a = await (null === s.Ay ||
                void 0 === s.Ay ||
                null == (i = s.Ay.getDiscordUtils) ||
                null == (r = i.call(s.Ay)) ||
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
        await (0, c.K)(!0), await s.Ay.getDiscordUtils().installWarp();
    },
    _ = (e) =>
        e.includes("Unexpected token") ||
        e.includes("Cannot read properties of undefined") ||
        e.includes("Unexpected end of JSON input");
