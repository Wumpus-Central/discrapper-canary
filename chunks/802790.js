n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(935462),
    a = n(775602),
    r = n(235986),
    o = n(899343),
    d = n(796012),
    u = n(72483);
function c(e) {
    let { purchaseState: t, currentStep: n, onClose: c } = e,
        [g, m] = (0, o.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: d.V1.Scenes.ENTRY,
            purchaseScene: d.V1.Scenes.STARS,
            errorScene: d.V1.Scenes.ERROR,
            successScene: d.V1.Scenes.SUCCESS,
        }),
        _ = (0, s.bG)([a.A], () => a.A.useReducedMotion);
    return (0, i.jsxs)(l.rQ, {
        "data-migration-pending": !0,
        align: r.A.Align.START,
        className: u.wx,
        separator: !1,
        children: [
            (0, i.jsx)(d.V1, {
                className: u.lY,
                nextScene: g,
                onScenePlay: (e) => m(d.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: _,
            }),
            (0, i.jsx)("div", { className: u.qd }),
            (0, i.jsx)(l.s_, { "data-migration-pending": !0, onClick: c, className: u.b }),
        ],
    });
}
