e.d(n, { QA: () => N, Rq: () => T, cy: () => E });
var l = e(477900);
e(582128);
var i = e(350835),
    a = e(339350),
    r = e(687966),
    s = e(323384),
    o = e(432017),
    c = e(748562),
    u = e(661531),
    d = e(177953),
    A = e(306788),
    f = e(765379),
    g = e(189117),
    m = e(471107),
    p = e(506326),
    x = e(693879),
    _ = e(583846),
    I = e(53257);
function N(t) {
    let { activity: n } = t,
        e = n.timestamps?.start ?? n.created_at,
        { now: d } = (0, m.G)();
    if (null == e || (0, I.A)(n)) return null;
    let A = n.timestamps?.end,
        _ = n.timestamps?.isCountDown ?? !1,
        N = (function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n
                ? a.Q
                : (0, f.A)(t) || (0, g.$_)(t)
                  ? e
                      ? r.GameControllerIcon
                      : s.k
                  : t.type === i.$.LISTENING
                    ? o.T
                    : t.type === i.$.WATCHING
                      ? c.U
                      : r.GameControllerIcon;
        })(n, _ && null != A && A > d);
    return (0, l.jsxs)(p.er, {
        children: [
            (0, l.jsx)(N, { size: "xxs", color: u.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, l.jsx)(x.z, { entry: { start: e, end: A, isCountDown: _ }, textColor: "text-feedback-positive" }),
        ],
    });
}
function E(t) {
    let { activity: n } = t;
    if ((0, f.A)(n) || null == n.party) return null;
    let e = (0, _.gF)(n.state, n.party);
    return null == e ? null : (0, l.jsx)(p.fM, { Icon: d.n, text: e });
}
function T(t) {
    let { activity: n } = t,
        e = (0, _.kR)(n.assets?.large_text);
    return null == e ? null : (0, l.jsx)(p.fM, { Icon: A.K, text: e });
}
