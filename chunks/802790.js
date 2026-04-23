r.d(n, { A: () => p });
var t = r(627968);
r(64700);
var _ = r(17928),
    o = r(935462),
    a = r(775602),
    i = r(235986),
    l = r(899343),
    s = r(796012),
    c = r(72483);
function p(e) {
    let { purchaseState: n, currentStep: r, onClose: p } = e,
        [b, d] = (0, l.f)({
            purchaseState: n,
            currentStep: r,
            initialScene: s.V1.Scenes.ENTRY,
            purchaseScene: s.V1.Scenes.STARS,
            errorScene: s.V1.Scenes.ERROR,
            successScene: s.V1.Scenes.SUCCESS,
        }),
        u = (0, _.bG)([a.A], () => a.A.useReducedMotion);
    return (0, t.jsxs)(o.rQ, {
        "data-migration-pending": !0,
        align: i.A.Align.START,
        className: c.wx,
        separator: !1,
        children: [
            (0, t.jsx)(s.V1, {
                className: c.lY,
                nextScene: b,
                onScenePlay: (e) => d(s.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: u,
            }),
            (0, t.jsx)("div", { className: c.qd }),
            (0, t.jsx)(o.s_, { "data-migration-pending": !0, onClick: p, className: c.b }),
        ],
    });
}
