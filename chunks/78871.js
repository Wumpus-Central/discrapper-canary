e.d(l, { QA: () => I, Rq: () => T, cy: () => x });
var n = e(477900);
e(582128);
var r = e(339350),
    a = e(687966),
    s = e(323384),
    i = e(432017),
    u = e(748562),
    o = e(661531),
    c = e(177953),
    p = e(306788),
    d = e(765379),
    f = e(471107),
    A = e(506326),
    h = e(693879),
    v = e(583846),
    g = e(53257),
    m = e(652215);
function I(t) {
    let { activity: l } = t,
        e = l.timestamps?.start ?? l.created_at,
        { now: c } = (0, f.G)();
    if (null == e || (0, g.A)(l)) return null;
    let p = l.timestamps?.end,
        v = l.timestamps?.isCountDown ?? !1,
        I = (function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return l
                ? r.Q
                : (0, d.A)(t)
                  ? e
                      ? a.GameControllerIcon
                      : s.k
                  : t.type === m.$pd.LISTENING
                    ? i.T
                    : t.type === m.$pd.WATCHING
                      ? u.U
                      : a.GameControllerIcon;
        })(l, v && null != p && p > c);
    return (0, n.jsxs)(A.er, {
        children: [
            (0, n.jsx)(I, { size: "xxs", color: o.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, n.jsx)(h.z, { entry: { start: e, end: p, isCountDown: v }, textColor: "text-feedback-positive" }),
        ],
    });
}
function x(t) {
    let { activity: l } = t;
    if ((0, d.A)(l) || null == l.party) return null;
    let e = (0, v.gF)(l.state, l.party);
    return null == e ? null : (0, n.jsx)(A.fM, { Icon: c.n, text: e });
}
function T(t) {
    let { activity: l } = t,
        e = (0, v.kR)(l.assets?.large_text);
    return null == e ? null : (0, n.jsx)(A.fM, { Icon: p.K, text: e });
}
