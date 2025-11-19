n.d(t, {
    Y: () => s,
    f: () => c,
}),
    n(415506);
var r = n(960048),
    i = n(998502),
    a = n(5900),
    o = n(60995);
let s = async () => {
        try {
            switch ((await l()).account.type.toLowerCase()) {
                case "unlimited":
                case "discord":
                    return a._n.INSTALLED;
                case "team":
                    return a._n.ZERO_TRUST;
                default:
                    return a._n.EXISTING_INSTALLATION;
            }
        } catch (e) {
            if (e instanceof Error) {
                if ("Failed to locate warp-cli" === e.message) return a._n.NOT_INSTALLED;
                r.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_INSTALLATION_STATUS" } });
            }
            if (e instanceof Object && "code" in e && "MissingRegistration" === e.code) return a._n.INSTALLING;
            return a._n.ERROR;
        }
    },
    l = () =>
        new Promise(async (e, t) => {
            try {
                var n, r, a;
                let o = await (null === i.ZP ||
                void 0 === i.ZP ||
                null == (a = i.ZP.getDiscordUtils) ||
                null == (r = a.call(i.ZP)) ||
                null == (n = r.runWarpCommand)
                    ? void 0
                    : n.call(r, "registration", "show"));
                if (null != o.error) return void t(o);
                e(o);
            } catch (e) {
                t(e);
            }
        }),
    c = async () => {
        await (0, o._)(!0), await i.ZP.getDiscordUtils().installWarp();
    };
