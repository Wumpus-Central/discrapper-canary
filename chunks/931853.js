n.d(t, { A: () => d, u: () => c });
var r = n(627968),
    l = n(349941),
    a = n(158954),
    i = n(311907),
    s = n(876230),
    o = n(544028),
    u = n(256181);
function c(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === s.Q6.PAUSED && r === s.KB.VISIBILITY
            ? "Video paused because the window is not visible"
            : n === s.Q6.PAUSED && r === s.KB.FOCUS
              ? "Video paused because the window lost focus"
              : null
        : "Loading video...";
}
let d = function (e) {
    let { message: t, showOverlay: n = !1 } = e,
        s = (0, i.bG)([o.A], () => o.A.getState().theme);
    return null == t
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  n && (0, r.jsx)("div", { className: u.MM }),
                  (0, r.jsx)("div", {
                      className: u.zG,
                      style: { background: (0, l.Mw)(s) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-default", children: t }),
                  }),
              ],
          });
};
