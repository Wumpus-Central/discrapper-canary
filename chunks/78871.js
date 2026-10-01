n.d(e, { QA: () => I, Rq: () => E, cy: () => N });
var l = n(477900);
n(582128);
var i = n(339350),
    a = n(687966),
    r = n(323384),
    s = n(432017),
    o = n(748562),
    c = n(661531),
    u = n(177953),
    d = n(306788),
    A = n(765379),
    f = n(471107),
    p = n(506326),
    g = n(693879),
    m = n(583846),
    x = n(53257),
    _ = n(652215);
function I(t) {
    let { activity: e } = t,
        n = e.timestamps?.start ?? e.created_at,
        { now: u } = (0, f.G)();
    if (null == n || (0, x.A)(e)) return null;
    let d = e.timestamps?.end,
        m = e.timestamps?.isCountDown ?? !1,
        I = (function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return e
                ? i.Q
                : (0, A.A)(t)
                  ? n
                      ? a.GameControllerIcon
                      : r.k
                  : t.type === _.$pd.LISTENING
                    ? s.T
                    : t.type === _.$pd.WATCHING
                      ? o.U
                      : a.GameControllerIcon;
        })(e, m && null != d && d > u);
    return (0, l.jsxs)(p.er, {
        children: [
            (0, l.jsx)(I, { size: "xxs", color: c.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, l.jsx)(g.z, { entry: { start: n, end: d, isCountDown: m }, textColor: "text-feedback-positive" }),
        ],
    });
}
function N(t) {
    let { activity: e } = t;
    if ((0, A.A)(e) || null == e.party) return null;
    let n = (0, m.gF)(e.state, e.party);
    return null == n ? null : (0, l.jsx)(p.fM, { Icon: u.n, text: n });
}
function E(t) {
    let { activity: e } = t,
        n = (0, m.kR)(e.assets?.large_text);
    return null == n ? null : (0, l.jsx)(p.fM, { Icon: d.K, text: n });
}
