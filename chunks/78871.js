l.d(t, { QA: () => N, Rq: () => E, cy: () => T });
var n = l(627968);
l(64700);
var a = l(339350),
    s = l(687966),
    i = l(323384),
    r = l(432017),
    u = l(748562),
    o = l(661531),
    c = l(177953),
    m = l(306788),
    d = l(765379),
    p = l(471107),
    v = l(506326),
    x = l(693879),
    f = l(583846),
    _ = l(53257),
    h = l(652215);
function N(e) {
    let { activity: t } = e,
        l = t.timestamps?.start ?? t.created_at,
        { now: c } = (0, p.G)();
    if (null == l || (0, _.A)(t)) return null;
    let m = t.timestamps?.end,
        f = t.timestamps?.isCountDown ?? !1,
        N = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return t
                ? a.Q
                : (0, d.A)(e)
                  ? l
                      ? s._
                      : i.k
                  : e.type === h.$pd.LISTENING
                    ? r.T
                    : e.type === h.$pd.WATCHING
                      ? u.U
                      : s._;
        })(t, f && null != m && m > c);
    return (0, n.jsxs)(v.er, {
        children: [
            (0, n.jsx)(N, { size: "xxs", color: o.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, n.jsx)(x.z, { entry: { start: l, end: m, isCountDown: f }, textColor: "text-feedback-positive" }),
        ],
    });
}
function T(e) {
    let { activity: t } = e;
    if ((0, d.A)(t) || null == t.party) return null;
    let l = (0, f.gF)(t.state, t.party);
    return null == l ? null : (0, n.jsx)(v.fM, { Icon: c.n, text: l });
}
function E(e) {
    let { activity: t } = e,
        l = (0, f.kR)(t.assets?.large_text);
    return null == l ? null : (0, n.jsx)(v.fM, { Icon: m.K, text: l });
}
