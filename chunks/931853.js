n.d(t, { A: () => p, u: () => m });
var r = n(627968),
    l = n(349941),
    a = n(158954),
    i = n(311907),
    s = n(876230),
    o = n(544028),
    u = n(961432),
    c = n(985018),
    d = n(246878);
function m(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === s.Q6.PAUSED && r === s.KB.VISIBILITY
            ? c.intl.string(u.default["9St/zK"])
            : n === s.Q6.PAUSED && r === s.KB.FOCUS
              ? c.intl.string(u.default.c7IRfm)
              : null
        : c.intl.string(u.default["kX3+aM"]);
}
let p = function (e) {
    let { message: t, showOverlay: n = !1 } = e,
        s = (0, i.bG)([o.A], () => o.A.getState().theme);
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  n && (0, r.jsx)("div", { className: d.MM }),
                  (0, r.jsx)("div", {
                      className: d.zG,
                      style: { background: (0, l.Mw)(s) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-default", children: t }),
                  }),
              ],
          });
};
