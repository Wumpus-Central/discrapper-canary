n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(809206),
    o = n(695346),
    s = n(388032);
function l(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        l = o.R_.useSetting(),
        c = void 0 !== n ? n : l;
    return (0, r.jsx)(i.rsf, {
        label: s.intl.string(s.t["3cWDuO"]),
        description: c ? null : s.intl.formatToPlainString(s.t.aYhclf, { username: t }),
        checked: !c,
        onChange: (e) => {
            !e === l ? (0, a.iR)() : (0, a.e1)(!e);
        },
    });
}
