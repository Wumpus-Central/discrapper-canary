"use strict";
n.d(t, { QA: () => A, Rq: () => T, cy: () => I });
var i = n(627968);
n(64700);
var r = n(339350),
    s = n(687966),
    a = n(323384),
    o = n(432017),
    l = n(748562),
    u = n(661531),
    c = n(177953),
    d = n(306788),
    _ = n(765379),
    h = n(471107),
    f = n(506326),
    p = n(693879),
    E = n(751765),
    m = n(53257),
    g = n(652215);
function A(e) {
    let { activity: t } = e,
        n = t.timestamps?.start ?? t.created_at,
        { now: c } = (0, h.G)();
    if (null == n || (0, m.A)(t)) return null;
    let d = t.timestamps?.end,
        E = t.timestamps?.isCountDown ?? !1,
        A = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return t
                ? r.Q
                : (0, _.A)(e)
                  ? n
                      ? s._
                      : a.k
                  : e.type === g.$pd.LISTENING
                    ? o.T
                    : e.type === g.$pd.WATCHING
                      ? l.U
                      : s._;
        })(t, E && null != d && d > c);
    return (0, i.jsxs)(f.er, {
        children: [
            (0, i.jsx)(A, { size: "xxs", color: u.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, i.jsx)(p.z, { entry: { start: n, end: d, isCountDown: E }, textColor: "text-feedback-positive" }),
        ],
    });
}
function I(e) {
    let { activity: t } = e;
    if ((0, _.A)(t) || null == t.party) return null;
    let n = (0, E.gF)(t.state, t.party);
    return null == n ? null : (0, i.jsx)(f.fM, { Icon: c.n, text: n });
}
function T(e) {
    let { activity: t } = e,
        n = (0, E.kR)(t.assets?.large_text);
    return null == n ? null : (0, i.jsx)(f.fM, { Icon: d.K, text: n });
}
