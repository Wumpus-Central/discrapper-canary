n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(17928),
    a = n(935462),
    r = n(775602),
    l = n(235986),
    c = n(899343),
    o = n(997330),
    d = n(72483);
function u(e) {
    let { purchaseState: t, currentStep: n, onClose: u } = e,
        [m, p] = (0, c.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: o.V1.Scenes.ENTRY,
            purchaseScene: o.V1.Scenes.STARS,
            errorScene: o.V1.Scenes.ERROR,
            successScene: o.V1.Scenes.SUCCESS,
        }),
        h = (0, s.bG)([r.A], () => r.A.useReducedMotion);
    return (0, i.jsxs)(a.rQ, {
        "data-migration-pending": !0,
        align: l.A.Align.START,
        className: d.wx,
        separator: !1,
        children: [
            (0, i.jsx)(o.V1, {
                className: d.lY,
                nextScene: m,
                onScenePlay: (e) => p(o.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: h,
            }),
            (0, i.jsx)("div", { className: d.qd }),
            (0, i.jsx)(a.s_, { "data-migration-pending": !0, onClick: u, className: d.b }),
        ],
    });
}
