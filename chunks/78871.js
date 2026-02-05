"use strict";
n.d(t, { QA: () => f, Rq: () => h, cy: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(765379),
    s = n(471107),
    o = n(506326),
    l = n(693879),
    u = n(583846),
    c = n(53257),
    d = n(652215);
let _ = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return t
        ? i.Qfk
        : (0, a.A)(e)
          ? n
              ? i._xR
              : i.k9F
          : e.type === d.$pd.LISTENING
            ? i.T7G
            : e.type === d.$pd.WATCHING
              ? i.Uk3
              : i._xR;
};
function f(e) {
    let { activity: t } = e,
        n = t.timestamps?.start ?? t.created_at,
        { now: a } = (0, s.G)();
    if (null == n || (0, c.A)(t)) return null;
    let u = t.timestamps?.end,
        d = t.timestamps?.isCountDown ?? !1,
        f = _(t, d && null != u && u > a);
    return (0, r.jsxs)(o.er, {
        children: [
            (0, r.jsx)(f, { size: "xxs", color: i.LU0.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, r.jsx)(l.z, {
                entry: { start: n, end: u, isCountDown: d },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function p(e) {
    let { activity: t } = e;
    if ((0, a.A)(t) || null == t.party) return null;
    let n = (0, u.gF)(t.state, t.party);
    return null == n ? null : (0, r.jsx)(o.fM, { Icon: i.nFg, text: n });
}
function h(e) {
    let { activity: t } = e,
        n = (0, u.kR)(t.assets?.large_text);
    return null == n ? null : (0, r.jsx)(o.fM, { Icon: i.Kck, text: n });
}
