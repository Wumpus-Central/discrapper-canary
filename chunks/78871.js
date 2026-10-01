e.d(n, { QA: () => E, Rq: () => N, cy: () => g });
var l = e(477900);
e(582128);
var i = e(339350),
    r = e(687966),
    a = e(323384),
    s = e(432017),
    o = e(748562),
    c = e(661531),
    u = e(177953),
    d = e(306788),
    A = e(765379),
    x = e(471107),
    p = e(506326),
    f = e(693879),
    m = e(583846),
    _ = e(53257),
    T = e(652215);
function E(t) {
    let { activity: n } = t,
        e = n.timestamps?.start ?? n.created_at,
        { now: u } = (0, x.G)();
    if (null == e || (0, _.A)(n)) return null;
    let d = n.timestamps?.end,
        m = n.timestamps?.isCountDown ?? !1,
        E = (function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n
                ? i.Q
                : (0, A.A)(t)
                  ? e
                      ? r.GameControllerIcon
                      : a.k
                  : t.type === T.$pd.LISTENING
                    ? s.T
                    : t.type === T.$pd.WATCHING
                      ? o.U
                      : r.GameControllerIcon;
        })(n, m && null != d && d > u);
    return (0, l.jsxs)(p.er, {
        children: [
            (0, l.jsx)(E, { size: "xxs", color: c.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, l.jsx)(f.z, { entry: { start: e, end: d, isCountDown: m }, textColor: "text-feedback-positive" }),
        ],
    });
}
function g(t) {
    let { activity: n } = t;
    if ((0, A.A)(n) || null == n.party) return null;
    let e = (0, m.gF)(n.state, n.party);
    return null == e ? null : (0, l.jsx)(p.fM, { Icon: u.n, text: e });
}
function N(t) {
    let { activity: n } = t,
        e = (0, m.kR)(n.assets?.large_text);
    return null == e ? null : (0, l.jsx)(p.fM, { Icon: d.K, text: e });
}
