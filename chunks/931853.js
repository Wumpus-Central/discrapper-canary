"use strict";
n.d(t, { A: () => f, u: () => _ });
var r = n(627968),
    i = n(349941),
    s = n(158954),
    a = n(311907),
    o = n(876230),
    l = n(544028),
    u = n(354361),
    c = n(985018),
    d = n(246878);
function _(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === o.Q6.PAUSED && r === o.KB.VISIBILITY
            ? c.intl.string(u.default["9St/zK"])
            : n === o.Q6.PAUSED && r === o.KB.FOCUS
              ? c.intl.string(u.default.c7IRfm)
              : null
        : c.intl.string(u.default["kX3+aM"]);
}
let f = function (e) {
    let { message: t, showOverlay: n = !1 } = e,
        o = (0, a.bG)([l.A], () => l.A.getState().theme);
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  n && (0, r.jsx)("div", { className: d.MM }),
                  (0, r.jsx)("div", {
                      className: d.zG,
                      style: { background: (0, i.Mw)(o) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-default", children: t }),
                  }),
              ],
          });
};
