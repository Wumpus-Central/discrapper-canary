n.d(t, { A: () => f, u: () => m });
var r = n(627968),
    l = n(366010),
    a = n(834730),
    i = n(17928),
    s = n(876230),
    u = n(363195),
    o = n(445563),
    c = n(985018),
    d = n(834926);
function m(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === s.Q6.PAUSED && r === s.KB.VISIBILITY
            ? c.intl.string(o.default["9St/zK"])
            : n === s.Q6.PAUSED && r === s.KB.FOCUS
              ? c.intl.string(o.default.c7IRfm)
              : null
        : c.intl.string(o.default["kX3+aM"]);
}
let f = function (e) {
    let { message: t, showOverlay: n = !1 } = e,
        s = (0, i.bG)([u.A], () => u.A.getState().theme);
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  n && (0, r.jsx)("div", { className: d.MM }),
                  (0, r.jsx)("div", {
                      className: d.zG,
                      style: { background: (0, l.M)(s) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: t }),
                  }),
              ],
          });
};
