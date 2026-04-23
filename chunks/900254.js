n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(243721),
    l = n(631670),
    a = n(84540),
    r = n(253932),
    o = n(985018);
function d(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        d = r.m$.useSetting(),
        u = void 0 !== n ? n : d;
    return (0, i.jsx)(s.d, {
        label: o.intl.string(o.t["3cWDuO"]),
        description: u ? null : o.intl.formatToPlainString(o.t.aYhclf, { username: t }),
        checked: !u,
        onChange: (e) => {
            !e === d ? (0, l._e)() : (0, a.p)({ legacyUsernameDisabled: !e });
        },
    });
}
