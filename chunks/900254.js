n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(631670),
    a = n(253932),
    l = n(985018);
function o(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        o = a.m$.useSetting(),
        c = void 0 !== n ? n : o;
    return (0, i.jsx)(s.dOG, {
        label: l.intl.string(l.t["3cWDuO"]),
        description: c ? null : l.intl.formatToPlainString(l.t.aYhclf, { username: t }),
        checked: !c,
        onChange: (e) => {
            !e === o ? (0, r._e)() : (0, r.VG)(!e);
        },
    });
}
