i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    r = i(458294),
    a = i(567035),
    d = i(985018);
function c(e, t) {
    let i = e.id,
        c = (0, l.bG)([r.default], () => r.default.getGuildHasUnreadIgnoreMuted(i), [i]);
    return (0, n.jsx)(s.Drp, {
        id: "mark-guild-read",
        label: d.intl.string(d.t.e6RscS),
        icon: void 0,
        action: () => (0, a.A)([i], t.section),
        disabled: !c,
    });
}
