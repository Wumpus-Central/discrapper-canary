n.d(e, { QA: () => N, Rq: () => T, cy: () => E });
var l = n(477900);
n(582128);
var i = n(350835),
    a = n(339350),
    r = n(687966),
    s = n(323384),
    o = n(432017),
    c = n(748562),
    u = n(661531),
    d = n(177953),
    A = n(306788),
    f = n(765379),
    g = n(189117),
    m = n(471107),
    x = n(506326),
    p = n(693879),
    _ = n(583846),
    I = n(53257);
function N(t) {
    let { activity: e } = t,
        n = e.timestamps?.start ?? e.created_at,
        { now: d } = (0, m.G)();
    if (null == n || (0, I.A)(e)) return null;
    let A = e.timestamps?.end,
        _ = e.timestamps?.isCountDown ?? !1,
        N = (function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return e
                ? a.Q
                : (0, f.A)(t) || (0, g.$_)(t)
                  ? n
                      ? r.GameControllerIcon
                      : s.k
                  : t.type === i.$.LISTENING
                    ? o.T
                    : t.type === i.$.WATCHING
                      ? c.U
                      : r.GameControllerIcon;
        })(e, _ && null != A && A > d);
    return (0, l.jsxs)(x.er, {
        children: [
            (0, l.jsx)(N, { size: "xxs", color: u.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, l.jsx)(p.z, { entry: { start: n, end: A, isCountDown: _ }, textColor: "text-feedback-positive" }),
        ],
    });
}
function E(t) {
    let { activity: e } = t;
    if ((0, f.A)(e) || null == e.party) return null;
    let n = (0, _.gF)(e.state, e.party);
    return null == n ? null : (0, l.jsx)(x.fM, { Icon: d.n, text: n });
}
function T(t) {
    let { activity: e } = t,
        n = (0, _.kR)(e.assets?.large_text);
    return null == n ? null : (0, l.jsx)(x.fM, { Icon: A.K, text: n });
}
