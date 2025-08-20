n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(809206),
    o = n(695346),
    s = n(388032);
function l(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        l = o.R_.useSetting(),
        c = void 0 !== n ? n : l;
    return (0, r.jsx)(i.j7V, {
        hideBorder: !0,
        value: !c,
        onChange: (e) => {
            !e === l ? (0, a.iR)() : (0, a.e1)(!e);
        },
        note: c ? null : s.intl.formatToPlainString(s.t.aYhclZ, { username: t }),
        children: s.intl.string(s.t["3cWDuL"]),
    });
}
