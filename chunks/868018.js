i.d(e, { O: () => A });
var n = i(311907),
    l = i(419954),
    s = i(71393),
    r = i(711014),
    a = i(253932),
    u = i(780964),
    o = i(985018);
let d = (0, l.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let t = a.JG.useSetting(),
                e = (0, n.bG)([r.Ay, s.A], () => {
                    let e = new Set(t);
                    return r.Ay.getFlattenedGuildIds().filter((t) => null != s.A.getGuild(t) && !e.has(t));
                }, [t]);
            if (0 === e.length) return o.intl.format(o.t.QJIJ5p, {});
            let i = s.A.getGuild(e[0]),
                l = i?.name ?? "",
                u = e.length - 1;
            return 0 === u
                ? o.intl.format(o.t["T+8J4A"], { guildName: l })
                : o.intl.format(o.t["3JyODQ"], { guildName: l, count: u });
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    A = (0, l.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [d] });
