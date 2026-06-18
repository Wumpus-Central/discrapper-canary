"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(935462),
    a = n(775602),
    o = n(235986),
    l = n(899343),
    u = n(997330),
    c = n(72483);
function d(e) {
    let { purchaseState: t, currentStep: n, onClose: d } = e,
        [_, h] = (0, l.f)({
            purchaseState: t,
            currentStep: n,
            initialScene: u.V1.Scenes.ENTRY,
            purchaseScene: u.V1.Scenes.STARS,
            errorScene: u.V1.Scenes.ERROR,
            successScene: u.V1.Scenes.SUCCESS,
        }),
        f = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion);
    return (0, i.jsxs)(s.rQ, {
        "data-migration-pending": !0,
        align: o.A.Align.START,
        className: c.wx,
        separator: !1,
        children: [
            (0, i.jsx)(u.V1, {
                className: c.lY,
                nextScene: _,
                onScenePlay: (e) => h(u.V1.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: f,
            }),
            (0, i.jsx)("div", { className: c.qd }),
            (0, i.jsx)(s.s_, { "data-migration-pending": !0, onClick: d, className: c.b }),
        ],
    });
}
