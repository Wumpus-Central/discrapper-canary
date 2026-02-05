"use strict";
n.d(t, { t: () => d, u: () => f });
var r = n(574381),
    i = n(954571),
    a = n(728458),
    s = n(837921),
    o = n(156186),
    l = n(602450),
    u = n(587093),
    c = n(652215);
let d = async () => {
        if (!(0, r.xl)()) return l.Lk.UNKNOWN;
        try {
            switch ((await _()).account.type.toLowerCase()) {
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
                (e instanceof Error && p(e.message))
            )
                return l.Lk.NOT_INSTALLED;
            if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return l.Lk.WAITING_FOR_TERMS;
            return (
                i.default.track(c.HAw.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: o.q.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS,
                }),
                a.A.captureException(e instanceof Error ? e : Error(JSON.stringify(e)), {
                    tags: { source: o.q.PRIVATE_BROWSING_PERK_INSTALLATION_STATUS },
                }),
                l.Lk.ERROR
            );
        }
    },
    _ = () =>
        new Promise(async (e, t) => {
            try {
                let n = await s.Ay?.getDiscordUtils?.()?.runWarpCommand?.("registration", "show");
                if (null != n.error) return void t(n);
                e(n);
            } catch (e) {
                t(e);
            }
        }),
    f = async () => {
        await (0, u.K)(!0), await s.Ay.getDiscordUtils().installWarp();
    },
    p = (e) =>
        e.includes("Unexpected token") ||
        e.includes("Cannot read properties of undefined") ||
        e.includes("Unexpected end of JSON input");
