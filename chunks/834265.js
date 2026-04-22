i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(477782),
    a = i(458294),
    r = i(567035),
    d = i(985018);
function o(e, t) {
    let i = e.id,
        o = (0, s.bG)([a.default], () => a.default.getGuildHasUnreadIgnoreMuted(i), [i]);
    return (0, n.jsx)(l.Dr, {
        id: "mark-guild-read",
        label: d.intl.string(d.t.e6RscS),
        icon: void 0,
        action: () => (0, r.A)([i], t.section),
        disabled: !o,
    });
}
