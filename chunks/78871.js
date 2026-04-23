n.d(t, { QA: () => b, Rq: () => E, cy: () => v });
var i = n(627968);
n(64700);
var a = n(339350),
    l = n(687966),
    o = n(323384),
    r = n(432017),
    s = n(526181),
    d = n(827734),
    c = n(177953),
    u = n(306788),
    h = n(765379),
    f = n(471107),
    _ = n(506326),
    p = n(693879),
    A = n(583846),
    g = n(53257),
    m = n(652215);
let y = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return t
        ? a.Q
        : (0, h.A)(e)
          ? n
              ? l._
              : o.k
          : e.type === m.$pd.LISTENING
            ? r.T
            : e.type === m.$pd.WATCHING
              ? s.U
              : l._;
};
function b(e) {
    let { activity: t } = e,
        n = t.timestamps?.start ?? t.created_at,
        { now: a } = (0, f.G)();
    if (null == n || (0, g.A)(t)) return null;
    let l = t.timestamps?.end,
        o = t.timestamps?.isCountDown ?? !1,
        r = y(t, o && null != l && l > a);
    return (0, i.jsxs)(_.er, {
        children: [
            (0, i.jsx)(r, { size: "xxs", color: d.A.colors.TEXT_FEEDBACK_POSITIVE }),
            (0, i.jsx)(p.z, {
                entry: { start: n, end: l, isCountDown: o },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function v(e) {
    let { activity: t } = e;
    if ((0, h.A)(t) || null == t.party) return null;
    let n = (0, A.gF)(t.state, t.party);
    return null == n ? null : (0, i.jsx)(_.fM, { Icon: c.n, text: n });
}
function E(e) {
    let { activity: t } = e,
        n = (0, A.kR)(t.assets?.large_text);
    return null == n ? null : (0, i.jsx)(_.fM, { Icon: u.K, text: n });
}
