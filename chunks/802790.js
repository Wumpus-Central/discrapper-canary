n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(775602),
    a = n(235986),
    o = n(899343),
    d = n(796012),
    c = n(72483);
function u(e) {
    let { purchaseState: t, currentStep: n, onClose: u } = e,
        [m, g] = (0, o.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: d.V1.Scenes.ENTRY,
            purchaseScene: d.V1.Scenes.STARS,
            errorScene: d.V1.Scenes.ERROR,
            successScene: d.V1.Scenes.SUCCESS,
        }),
        _ = (0, s.bG)([r.A], () => r.A.useReducedMotion);
    return (0, i.jsxs)(l.rQ0, {
        "data-migration-pending": !0,
        align: a.A.Align.START,
        className: c.wx,
        separator: !1,
        children: [
            (0, i.jsx)(d.V1, {
                className: c.lY,
                nextScene: m,
                onScenePlay: (e) => g(d.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: _,
            }),
            (0, i.jsx)("div", { className: c.qd }),
            (0, i.jsx)(l.s_y, { "data-migration-pending": !0, onClick: u, className: c.b }),
        ],
    });
}
