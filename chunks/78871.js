"use strict";
n.d(t, { QA: () => I, Rq: () => S, cy: () => T });
var i = n(627968);
n(64700);
var r = n(339350),
    s = n(687966),
    a = n(323384),
    o = n(432017),
    l = n(748562),
    u = n(661531),
    c = n(177953),
    d = n(306788),
    _ = n(765379),
    f = n(471107),
    h = n(506326),
    p = n(85451),
    E = n(832384),
    m = n(53257),
    g = n(652215);
let A = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return t
        ? r.Q
        : (0, _.A)(e)
          ? n
              ? s._
              : a.k
          : e.type === g.$pd.LISTENING
            ? o.T
            : e.type === g.$pd.WATCHING
              ? l.U
              : s._;
};
function I(e) {
    let { activity: t } = e,
        n = t.timestamps?.start ?? t.created_at,
        { now: r } = (0, f.G)();
    if (null == n || (0, m.A)(t)) return null;
    let s = t.timestamps?.end,
        a = t.timestamps?.isCountDown ?? !1,
        o = A(t, a && null != s && s > r);
    return (0, i.jsxs)(h.er, {
        children: [
            (0, i.jsx)(o, { size: "xxs", color: u.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, i.jsx)(p.z, {
                entry: { start: n, end: s, isCountDown: a },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function T(e) {
    let { activity: t } = e;
    if ((0, _.A)(t) || null == t.party) return null;
    let n = (0, E.gF)(t.state, t.party);
    return null == n ? null : (0, i.jsx)(h.fM, { Icon: c.n, text: n });
}
function S(e) {
    let { activity: t } = e,
        n = (0, E.kR)(t.assets?.large_text);
    return null == n ? null : (0, i.jsx)(h.fM, { Icon: d.K, text: n });
}
