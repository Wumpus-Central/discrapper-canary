a.d(n, { A: () => o });
var i = a(627968);
a(64700);
var s = a(17928),
    t = a(935462),
    l = a(775602),
    r = a(235986),
    d = a(899343),
    u = a(997330),
    c = a(676771);
function o(e) {
    let { purchaseState: n, currentStep: a, onClose: o } = e,
        [p, S] = (0, d.f)({
            purchaseState: n,
            currentStep: a,
            initialScene: u.V1.Scenes.ENTRY,
            purchaseScene: u.V1.Scenes.STARS,
            errorScene: u.V1.Scenes.ERROR,
            successScene: u.V1.Scenes.SUCCESS,
        }),
        m = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return (0, i.jsxs)(t.rQ, {
        "data-migration-pending": !0,
        align: r.A.Align.START,
        className: c.wx,
        separator: !1,
        children: [
            (0, i.jsx)(u.V1, {
                className: c.lY,
                nextScene: p,
                onScenePlay: (e) => S(u.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: m,
            }),
            (0, i.jsx)("div", { className: c.qd }),
            (0, i.jsx)(t.s_, { "data-migration-pending": !0, onClick: o, className: c.b }),
        ],
    });
}
