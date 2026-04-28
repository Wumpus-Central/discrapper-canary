e.d(l, { QA: () => g, Rq: () => w, cy: () => T });
var s = e(627968);
e(64700);
var n = e(339350),
    a = e(687966),
    r = e(323384),
    i = e(432017),
    u = e(526181),
    o = e(661531),
    d = e(177953),
    p = e(306788),
    c = e(765379),
    h = e(471107),
    v = e(506326),
    A = e(85451),
    x = e(583846),
    f = e(53257),
    m = e(652215);
let I = function (t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return l
        ? n.Q
        : (0, c.A)(t)
          ? e
              ? a._
              : r.k
          : t.type === m.$pd.LISTENING
            ? i.T
            : t.type === m.$pd.WATCHING
              ? u.U
              : a._;
};
function g(t) {
    let { activity: l } = t,
        e = l.timestamps?.start ?? l.created_at,
        { now: n } = (0, h.G)();
    if (null == e || (0, f.A)(l)) return null;
    let a = l.timestamps?.end,
        r = l.timestamps?.isCountDown ?? !1,
        i = I(l, r && null != a && a > n);
    return (0, s.jsxs)(v.er, {
        children: [
            (0, s.jsx)(i, { size: "xxs", color: o.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, s.jsx)(A.z, {
                entry: { start: e, end: a, isCountDown: r },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function T(t) {
    let { activity: l } = t;
    if ((0, c.A)(l) || null == l.party) return null;
    let e = (0, x.gF)(l.state, l.party);
    return null == e ? null : (0, s.jsx)(v.fM, { Icon: d.n, text: e });
}
function w(t) {
    let { activity: l } = t,
        e = (0, x.kR)(l.assets?.large_text);
    return null == e ? null : (0, s.jsx)(v.fM, { Icon: p.K, text: e });
}
