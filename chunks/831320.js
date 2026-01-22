n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(171316),
    o = n(115063),
    l = n(253932),
    c = n(871930),
    u = n(578746),
    d = n(531525),
    f = n(652215),
    p = n(985018),
    _ = n(842130);
function h() {
    let e = l.FA.useSetting(),
        t = i.useMemo(() => (0, o.Lx)(e), [e]),
        n = (0, s.uM)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.h, {
                setting: d.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.Ay, {
                    title: p.intl.string(p.t["7x9dyE"]),
                    value: t.all,
                    onChange: (e) => l.FA.updateSetting(e ? f.yKI : f.yKI & ~f.dzt.NO_RELATION),
                    disabled: n,
                    tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, r.jsx)(c.h, {
                setting: d.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.Ay, {
                    title: p.intl.string(p.t.NfeuZ3),
                    value: t.all || t.mutualFriends,
                    onChange: (t) =>
                        l.FA.updateSetting(
                            t ? a.UI(e, f.dzt.MUTUAL_FRIENDS) : a.iE(e, f.dzt.MUTUAL_FRIENDS, f.dzt.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, r.jsx)(c.h, {
                setting: d.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.Ay, {
                    title: p.intl.string(p.t.qsMfsH),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) =>
                        l.FA.updateSetting(
                            t ? a.UI(e, f.dzt.MUTUAL_GUILDS) : a.iE(e, f.dzt.MUTUAL_GUILDS, f.dzt.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : void 0,
                }),
            }),
        ],
    });
}
