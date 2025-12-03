n.d(t, {
    Y: () => l,
    f: () => u,
}),
    n(415506);
var r = n(818710),
    i = n(960048),
    a = n(998502),
    o = n(5900),
    s = n(60995);
let l = async () => {
        if (!(0, r.nI)()) return o._n.UNKNOWN;
        try {
            switch ((await c()).account.type.toLowerCase()) {
                case "unlimited":
                case "discord":
                    return o._n.INSTALLED;
                case "team":
                    return o._n.ZERO_TRUST;
                default:
                    return o._n.EXISTING_INSTALLATION;
            }
        } catch (e) {
            if (e instanceof Error) {
                if ("Failed to locate warp-cli" === e.message) return o._n.NOT_INSTALLED;
                i.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_INSTALLATION_STATUS" } });
            }
            if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return o._n.WAITING_FOR_TERMS;
            return o._n.ERROR;
        }
    },
    c = () =>
        new Promise(async (e, t) => {
            try {
                var n, r, i;
                let o = await (null === a.ZP ||
                void 0 === a.ZP ||
                null == (i = a.ZP.getDiscordUtils) ||
                null == (r = i.call(a.ZP)) ||
                null == (n = r.runWarpCommand)
                    ? void 0
                    : n.call(r, "registration", "show"));
                if (null != o.error) return void t(o);
                e(o);
            } catch (e) {
                t(e);
            }
        }),
    u = async () => {
        await (0, s._)(!0), await a.ZP.getDiscordUtils().installWarp();
    };
