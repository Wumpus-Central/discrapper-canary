e.d(l, { QA: () => I, Rq: () => N, cy: () => T });
var n = e(627968);
e(64700);
var r = e(339350),
    a = e(687966),
    s = e(323384),
    i = e(432017),
    u = e(748562),
    c = e(661531),
    o = e(177953),
    p = e(306788),
    d = e(765379),
    f = e(471107),
    A = e(506326),
    h = e(693879),
    v = e(751765),
    g = e(53257),
    m = e(652215);
let x = function (t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return l
        ? r.Q
        : (0, d.A)(t)
          ? e
              ? a._
              : s.k
          : t.type === m.$pd.LISTENING
            ? i.T
            : t.type === m.$pd.WATCHING
              ? u.U
              : a._;
};
function I(t) {
    let { activity: l } = t,
        e = l.timestamps?.start ?? l.created_at,
        { now: r } = (0, f.G)();
    if (null == e || (0, g.A)(l)) return null;
    let a = l.timestamps?.end,
        s = l.timestamps?.isCountDown ?? !1,
        i = x(l, s && null != a && a > r);
    return (0, n.jsxs)(A.er, {
        children: [
            (0, n.jsx)(i, { size: "xxs", color: c.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, n.jsx)(h.z, { entry: { start: e, end: a, isCountDown: s }, textColor: "text-feedback-positive" }),
        ],
    });
}
function T(t) {
    let { activity: l } = t;
    if ((0, d.A)(l) || null == l.party) return null;
    let e = (0, v.gF)(l.state, l.party);
    return null == e ? null : (0, n.jsx)(A.fM, { Icon: o.n, text: e });
}
function N(t) {
    let { activity: l } = t,
        e = (0, v.kR)(l.assets?.large_text);
    return null == e ? null : (0, n.jsx)(A.fM, { Icon: p.K, text: e });
}
d.K, text;
:n})}
