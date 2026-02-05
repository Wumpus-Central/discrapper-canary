n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    a = n(775602),
    l = n(235986),
    o = n(899343),
    c = n(796012),
    d = n(752472);
function u(e) {
    let { purchaseState: t, currentStep: n, onClose: u } = e,
        [_, m] = (0, o.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: c.V1.Scenes.ENTRY,
            purchaseScene: c.V1.Scenes.STARS,
            errorScene: c.V1.Scenes.ERROR,
            successScene: c.V1.Scenes.SUCCESS,
        }),
        A = (0, s.bG)([a.A], () => a.A.useReducedMotion);
    return (0, i.jsxs)(r.rQ0, {
        "data-migration-pending": !0,
        align: l.A.Align.START,
        className: d.wx,
        separator: !1,
        children: [
            (0, i.jsx)(c.V1, {
                className: d.lY,
                nextScene: _,
                onScenePlay: (e) => m(c.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: A,
            }),
            (0, i.jsx)("div", { className: d.qd }),
            (0, i.jsx)(r.s_y, { "data-migration-pending": !0, onClick: u, className: d.b }),
        ],
    });
}
