"use strict";
n.d(t, { A: () => _, f: () => d });
var r = n(627968);
n(64700);
var i = n(934551),
    s = n(765379),
    a = n(82149),
    o = n(566903),
    l = n(864436),
    u = n(200041),
    c = n(652215);
let d = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.Cy)(e)
        ? i.StageIcon
        : (0, s.A)(e)
          ? t
              ? i.GameControllerIcon
              : i.AppsIcon
          : e.type === c.$pd.PLAYING
            ? i.GameControllerIcon
            : e.type === c.$pd.LISTENING
              ? i.MusicIcon
              : e.type === c.$pd.WATCHING || e.type === c.$pd.STREAMING
                ? i.TvIcon
                : e.type === c.$pd.COMPETING
                  ? i.GameControllerIcon
                  : null;
};
function _(e) {
    let {
            activity: t,
            textVariant: n,
            textClassName: i,
            iconClassName: s,
            hideIcon: a = !1,
            hideText: c = !1,
            hideTooltip: _ = !1,
            canTruncate: f = !0,
        } = e,
        { text: p, tooltip: h } = (0, o.A)(t, !0),
        m = d(t),
        E = null != m && !a;
    return (0, r.jsx)(u.A, {
        icon: E ? (0, r.jsx)(l.A, { icon: m, className: s }) : void 0,
        text: p ?? "",
        textVariant: n,
        textClassName: i,
        hideTooltip: _,
        canTruncate: f,
        "aria-label": h ?? "",
        hideText: c,
    });
}
