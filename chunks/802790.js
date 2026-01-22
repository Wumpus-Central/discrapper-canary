n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(775602),
    o = n(235986),
    l = n(899343),
    c = n(796012),
    u = n(752472);

function d(e) {
    let { purchaseState: t, currentStep: n, onClose: d } = e,
        [f, p] = (0, l.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: c.V1.Scenes.ENTRY,
            purchaseScene: c.V1.Scenes.STARS,
            errorScene: c.V1.Scenes.ERROR,
            successScene: c.V1.Scenes.SUCCESS,
        }),
        _ = (0, i.bG)([s.A], () => s.A.useReducedMotion);
    return (0, r.jsxs)(a.rQ0, {
        "data-migration-pending": !0,
        align: o.A.Align.START,
        className: u.wx,
        separator: !1,
        children: [
            (0, r.jsx)(c.V1, {
                className: u.lY,
                nextScene: f,
                onScenePlay: (e) => p(c.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: _,
            }),
            (0, r.jsx)("div", {
                className: u.qd,
            }),
            (0, r.jsx)(a.s_y, {
                "data-migration-pending": !0,
                onClick: d,
                className: u.b,
            }),
        ],
    });
}
