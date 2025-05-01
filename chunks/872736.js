n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(809206),
    l = n(695346),
    a = n(388032);
function o(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        o = l.R_.useSetting(),
        c = void 0 !== n ? n : o;
    return (0, i.jsx)(r.j7V, {
        hideBorder: !0,
        value: !c,
        onChange: (e) => {
            !e === o ? (0, s.iR)() : (0, s.e1)(!e);
        },
        note: c ? null : a.intl.formatToPlainString(a.t.aYhclZ, { username: t }),
        children: a.intl.string(a.t['3cWDuL'])
    });
}
