n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(665260),
    a = n(171316),
    r = n(115063),
    o = n(253932),
    d = n(106148),
    c = n(650832),
    u = n(652215),
    _ = n(985018),
    m = n(842130);
function g() {
    let e = o.FA.useSetting(),
        t = s.useMemo(() => (0, r.Lx)(e), [e]),
        n = (0, a.uM)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.h, {
                children: (0, i.jsx)(c.Ay, {
                    title: _.intl.string(_.t["7x9dyE"]),
                    value: t.all,
                    onChange: (e) => o.FA.updateSetting(e ? u.yKI : u.yKI & ~u.dzt.NO_RELATION),
                    disabled: n,
                    tooltipText: n ? _.intl.string(m.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, i.jsx)(d.h, {
                children: (0, i.jsx)(c.Ay, {
                    title: _.intl.string(_.t.NfeuZ3),
                    value: t.all || t.mutualFriends,
                    onChange: (t) =>
                        o.FA.updateSetting(
                            t ? l.UI(e, u.dzt.MUTUAL_FRIENDS) : l.iE(e, u.dzt.MUTUAL_FRIENDS, u.dzt.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? _.intl.string(m.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, i.jsx)(d.h, {
                children: (0, i.jsx)(c.Ay, {
                    title: _.intl.string(_.t.qsMfsH),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) =>
                        o.FA.updateSetting(
                            t ? l.UI(e, u.dzt.MUTUAL_GUILDS) : l.iE(e, u.dzt.MUTUAL_GUILDS, u.dzt.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? _.intl.string(m.default["6Af/cw"]) : void 0,
                }),
            }),
        ],
    });
}
