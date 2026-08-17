e.d(n, { QA: () => h, Rq: () => v, cy: () => x });
var l = e(477900);
e(582128);
var r = e(339350),
    s = e(687966),
    u = e(323384),
    i = e(432017),
    a = e(748562),
    o = e(661531),
    p = e(177953),
    c = e(306788),
    d = e(765379),
    f = e(471107),
    A = e(506326),
    I = e(693879),
    m = e(583846),
    T = e(53257),
    g = e(652215);
function h(t) {
    let { activity: n } = t,
        e = n.timestamps?.start ?? n.created_at,
        { now: p } = (0, f.G)();
    if (null == e || (0, T.A)(n)) return null;
    let c = n.timestamps?.end,
        m = n.timestamps?.isCountDown ?? !1,
        h = (function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n
                ? r.Q
                : (0, d.A)(t)
                  ? e
                      ? s.GameControllerIcon
                      : u.k
                  : t.type === g.$pd.LISTENING
                    ? i.T
                    : t.type === g.$pd.WATCHING
                      ? a.U
                      : s.GameControllerIcon;
        })(n, m && null != c && c > p);
    return (0, l.jsxs)(A.er, {
        children: [
            (0, l.jsx)(h, { size: "xxs", color: o.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, l.jsx)(I.z, { entry: { start: e, end: c, isCountDown: m }, textColor: "text-feedback-positive" }),
        ],
    });
}
function x(t) {
    let { activity: n } = t;
    if ((0, d.A)(n) || null == n.party) return null;
    let e = (0, m.gF)(n.state, n.party);
    return null == e ? null : (0, l.jsx)(A.fM, { Icon: p.n, text: e });
}
function v(t) {
    let { activity: n } = t,
        e = (0, m.kR)(n.assets?.large_text);
    return null == e ? null : (0, l.jsx)(A.fM, { Icon: c.K, text: e });
}
