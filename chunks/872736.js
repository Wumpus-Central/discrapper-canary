n.d(t, { Z: () => o });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(809206),
    a = n(695346),
    l = n(388032);
function o(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        o = a.R_.useSetting(),
        c = void 0 !== n ? n : o;
    return (0, i.jsx)(r.j7V, {
        hideBorder: !0,
        value: !c,
        onChange: (e) => {
            !e === o ? (0, s.iR)() : (0, s.e1)(!e);
        },
        note: c ? null : l.intl.formatToPlainString(l.t.aYhclZ, { username: t }),
        children: l.intl.string(l.t['3cWDuL'])
    });
}
