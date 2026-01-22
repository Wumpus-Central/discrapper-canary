n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(631670),
    s = n(253932),
    o = n(985018);

function l(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: n } = e,
        l = s.m$.useSetting(),
        c = void 0 !== n ? n : l;
    return (0, r.jsx)(i.dOG, {
        label: o.intl.string(o.t["3cWDuO"]),
        description: c
            ? null
            : o.intl.formatToPlainString(o.t.aYhclf, {
                  username: t,
              }),
        checked: !c,
        onChange: (e) => {
            !e === l ? (0, a._e)() : (0, a.VG)(!e);
        },
    });
}
