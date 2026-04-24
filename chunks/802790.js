"use strict";
i.d(t, { A: () => d });
var r = i(627968);
i(64700);
var n = i(17928),
    s = i(935462),
    l = i(775602),
    a = i(235986),
    o = i(899343),
    c = i(997330),
    u = i(72483);
function d(e) {
    let { purchaseState: t, currentStep: i, onClose: d } = e,
        [p, h] = (0, o.f)({
            purchaseState: t,
            currentStep: i,
            initialScene: c.V1.Scenes.ENTRY,
            purchaseScene: c.V1.Scenes.STARS,
            errorScene: c.V1.Scenes.ERROR,
            successScene: c.V1.Scenes.SUCCESS,
        }),
        _ = (0, n.bG)([l.A], () => l.A.useReducedMotion);
    return (0, r.jsxs)(s.rQ, {
        "data-migration-pending": !0,
        align: a.A.Align.START,
        className: u.wx,
        separator: !1,
        children: [
            (0, r.jsx)(c.V1, {
                className: u.lY,
                nextScene: p,
                onScenePlay: (e) => h(c.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: _,
            }),
            (0, r.jsx)("div", { className: u.qd }),
            (0, r.jsx)(s.s_, { "data-migration-pending": !0, onClick: d, className: u.b }),
        ],
    });
}
