n.d(t, { A: () => f, u: () => m });
var r = n(477900),
    l = n(17928),
    a = n(876230),
    i = n(366010),
    u = n(834730),
    s = n(363195),
    o = n(711127),
    c = n(375708),
    d = n(862649);
function m(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === a.Q6.PAUSED && r === a.KB.VISIBILITY
            ? c.intl.string(o.default["9St/zK"])
            : n === a.Q6.PAUSED && r === a.KB.FOCUS
              ? c.intl.string(o.default.c7IRfm)
              : null
        : c.intl.string(o.default["kX3+aM"]);
}
let f = function (e) {
    let { message: t, showOverlay: n = !1 } = e,
        a = (0, l.bG)([s.A], () => s.A.getState().theme);
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  n && (0, r.jsx)("div", { className: d.MM }),
                  (0, r.jsx)("div", {
                      className: d.zG,
                      style: { background: (0, i.M)(a) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", children: t }),
                  }),
              ],
          });
};
