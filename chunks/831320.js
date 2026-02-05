n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(665260),
    a = n(171316),
    l = n(115063),
    o = n(253932),
    c = n(871930),
    d = n(578746),
    u = n(531525),
    _ = n(652215),
    m = n(985018),
    A = n(842130);
function g() {
    let e = o.FA.useSetting(),
        t = s.useMemo(() => (0, l.Lx)(e), [e]),
        n = (0, a.uM)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.h, {
                setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Ay, {
                    title: m.intl.string(m.t["7x9dyE"]),
                    value: t.all,
                    onChange: (e) => o.FA.updateSetting(e ? _.yKI : _.yKI & ~_.dzt.NO_RELATION),
                    disabled: n,
                    tooltipText: n ? m.intl.string(A.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, i.jsx)(c.h, {
                setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Ay, {
                    title: m.intl.string(m.t.NfeuZ3),
                    value: t.all || t.mutualFriends,
                    onChange: (t) =>
                        o.FA.updateSetting(
                            t ? r.UI(e, _.dzt.MUTUAL_FRIENDS) : r.iE(e, _.dzt.MUTUAL_FRIENDS, _.dzt.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? m.intl.string(A.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, i.jsx)(c.h, {
                setting: u.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Ay, {
                    title: m.intl.string(m.t.qsMfsH),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) =>
                        o.FA.updateSetting(
                            t ? r.UI(e, _.dzt.MUTUAL_GUILDS) : r.iE(e, _.dzt.MUTUAL_GUILDS, _.dzt.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? m.intl.string(A.default["6Af/cw"]) : void 0,
                }),
            }),
        ],
    });
}
