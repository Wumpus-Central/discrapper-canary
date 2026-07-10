n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(935462),
    a = n(775602),
    s = n(235986),
    o = n(899343),
    u = n(796012),
    c = n(72483);
function d(e) {
    let { purchaseState: t, currentStep: n, onClose: d } = e,
        [p, m] = (0, o.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: u.V1.Scenes.ENTRY,
            purchaseScene: u.V1.Scenes.STARS,
            errorScene: u.V1.Scenes.ERROR,
            successScene: u.V1.Scenes.SUCCESS,
        }),
        C = (0, i.bG)([a.Ay], () => a.Ay.useReducedMotion);
    return (0, l.jsxs)(r.rQ, {
        "data-migration-pending": !0,
        align: s.A.Align.START,
        className: c.wx,
        separator: !1,
        children: [
            (0, l.jsx)(u.V1, {
                className: c.lY,
                nextScene: p,
                onScenePlay: (e) => m(u.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: C,
            }),
            (0, l.jsx)("div", { className: c.qd }),
            (0, l.jsx)(r.s_, { "data-migration-pending": !0, onClick: d, className: c.b }),
        ],
    });
}
