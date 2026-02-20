i.d(e, { O: () => _ });
var n = i(627968),
    l = i(311907),
    s = i(743790),
    r = i(419954),
    a = i(933297),
    u = i(71393),
    o = i(711014),
    d = i(253932),
    A = i(780964),
    T = i(985018);
function S() {
    let t = d.JG.useSetting();
    return (0, l.bG)([o.Ay, u.A], () => {
        let e = new Set(t);
        return o.Ay.getFlattenedGuildIds().filter((t) => null != u.A.getGuild(t) && !e.has(t));
    }, [t]);
}
let E = {
        type: a.wF.STACKED_ICONS,
        useIcons: function () {
            let t = S(),
                e = (0, l.bG)(
                    [u.A],
                    () =>
                        t
                            .slice(0, 2)
                            .map((t) => u.A.getGuild(t))
                            .filter((t) => null != t),
                    [t],
                );
            return 0 === e.length
                ? null
                : e.length >= 2
                  ? {
                        frontIcon: { icon: (0, n.jsx)(s.$, { guild: e[0], size: 48 }), shape: a.NF.SQUIRCLE },
                        backIcon: { icon: (0, n.jsx)(s.$, { guild: e[1], size: 48 }), shape: a.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, n.jsx)(s.$, { guild: e[0], size: 48 }), shape: a.NF.SQUIRCLE } };
        },
    },
    g = (0, r.AK)(A.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let t = S();
            if (0 === t.length) return T.intl.format(T.t.QJIJ5p, {});
            let e = u.A.getGuild(t[0]),
                i = e?.name ?? "",
                n = t.length - 1;
            return 0 === n
                ? T.intl.format(T.t["T+8J4A"], { guildName: i })
                : T.intl.format(T.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return E;
        },
        destinationKey: A.X.ACTIVITY_PRIVACY_PANEL,
    }),
    _ = (0, r.gN)(A.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [g] });
