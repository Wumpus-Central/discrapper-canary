n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(458294),
    a = n(567035),
    o = n(985018);
function c(e, t) {
    let n = e.id,
        c = (0, r.bG)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
    return (0, i.jsx)(s.Drp, {
        id: "mark-guild-read",
        label: o.intl.string(o.t.e6RscS),
        icon: void 0,
        action: () => (0, a.A)([n], t.section),
        disabled: !c,
    });
}
