l.d(e, { QA: () => g, Rq: () => T, cy: () => w });
var n = l(627968);
l(64700);
var a = l(339350),
    i = l(687966),
    r = l(323384),
    s = l(432017),
    o = l(526181),
    c = l(827734),
    u = l(177953),
    d = l(306788),
    p = l(765379),
    A = l(471107),
    h = l(506326),
    f = l(693879),
    v = l(583846),
    y = l(53257),
    b = l(652215);
let m = function (t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e
        ? a.Q
        : (0, p.A)(t)
          ? l
              ? i._
              : r.k
          : t.type === b.$pd.LISTENING
            ? s.T
            : t.type === b.$pd.WATCHING
              ? o.U
              : i._;
};
function g(t) {
    let { activity: e } = t,
        l = e.timestamps?.start ?? e.created_at,
        { now: a } = (0, A.G)();
    if (null == l || (0, y.A)(e)) return null;
    let i = e.timestamps?.end,
        r = e.timestamps?.isCountDown ?? !1,
        s = m(e, r && null != i && i > a);
    return (0, n.jsxs)(h.er, {
        children: [
            (0, n.jsx)(s, { size: "xxs", color: c.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, n.jsx)(f.z, {
                entry: { start: l, end: i, isCountDown: r },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function w(t) {
    let { activity: e } = t;
    if ((0, p.A)(e) || null == e.party) return null;
    let l = (0, v.gF)(e.state, e.party);
    return null == l ? null : (0, n.jsx)(h.fM, { Icon: u.n, text: l });
}
function T(t) {
    let { activity: e } = t,
        l = (0, v.kR)(e.assets?.large_text);
    return null == l ? null : (0, n.jsx)(h.fM, { Icon: d.K, text: l });
}
