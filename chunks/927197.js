n.d(e, { A: () => u });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    l = n(610411),
    c = n(894010),
    o = n(495756),
    s = n(985018);
function u(t, e) {
    let n = (0, r.bG)([o.A], () => o.A.getMute(t)),
        u = !n;
    return (0, i.jsx)(a.sLh, {
        id: "mute-game",
        label: s.intl.string(s.t["6EwEwp"]),
        checked: n,
        action: () => {
            (0, l.i1)({
                gameName: e,
                applicationId: t,
                label: u ? l.VD.MUTED : l.VD.UNMUTED,
                source: l.eh.GAME_CONTEXT_MENU,
            }),
                (0, c.b)(t, u);
        },
    });
}
