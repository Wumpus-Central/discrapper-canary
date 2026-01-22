n.d(t, {
    QA: () => p,
    Rq: () => h,
    cy: () => _,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(765379),
    s = n(471107),
    o = n(506326),
    l = n(693879),
    c = n(583846),
    u = n(53257),
    d = n(652215);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return t
        ? i.Qfk
        : (0, a.A)(e)
          ? n
              ? i._xR
              : i.k9F
          : e.type === d.$pd.LISTENING
            ? i.T7G
            : e.type === d.$pd.WATCHING
              ? i.Uk3
              : i._xR;
};

function p(e) {
    var t, n, a, c, d;
    let { activity: p } = e,
        _ = null != (t = null == (a = p.timestamps) ? void 0 : a.start) ? t : p.created_at,
        { now: h } = (0, s.G)();
    if (null == _ || (0, u.A)(p)) return null;
    let m = null == (c = p.timestamps) ? void 0 : c.end,
        g = null != (n = null == (d = p.timestamps) ? void 0 : d.isCountDown) && n,
        E = f(p, g && null != m && m > h);
    return (0, r.jsxs)(o.er, {
        children: [
            (0, r.jsx)(E, {
                size: "xxs",
                color: i.LU0.colors.TEXT_FEEDBACK_POSITIVE,
            }),
            (0, r.jsx)(l.z, {
                entry: {
                    start: _,
                    end: m,
                    isCountDown: g,
                },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}

function _(e) {
    let { activity: t } = e;
    if ((0, a.A)(t) || null == t.party) return null;
    let n = (0, c.gF)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(o.fM, {
              Icon: i.nFg,
              text: n,
          });
}

function h(e) {
    var t;
    let { activity: n } = e,
        a = (0, c.kR)(null == (t = n.assets) ? void 0 : t.large_text);
    return null == a
        ? null
        : (0, r.jsx)(o.fM, {
              Icon: i.Kck,
              text: a,
          });
}
