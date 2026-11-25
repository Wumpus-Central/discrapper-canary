var l = n(477900);
n(582128);
var i = n(350835),
    a = n(339350),
    r = n(687966),
    s = n(323384),
    o = n(432017),
    u = n(748562),
    c = n(646514),
    d = n(177953),
    m = n(306788),
    A = n(765379),
    p = n(189117),
    h = n(471107),
    f = n(506326),
    g = n(693879),
    x = n(583846),
    I = n(53257);
n.d(
    t,
    {},
    {
        QA: function (e) {
            let { activity: t } = e,
                n = t.timestamps?.start ?? t.created_at,
                { now: d } = (0, h.G)();
            if (null == n || (0, I.A)(t)) return null;
            let m = t.timestamps?.end,
                x = t.timestamps?.isCountDown ?? !1,
                v = (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return t
                        ? a.HourglassIcon
                        : (0, A.A)(e) || (0, p.$_)(e)
                          ? n
                              ? r.GameControllerIcon
                              : s.AppsIcon
                          : e.type === i.$.LISTENING
                            ? o.MusicIcon
                            : e.type === i.$.WATCHING
                              ? u.TvIcon
                              : r.GameControllerIcon;
                })(t, x && null != m && m > d);
            return (0, l.jsxs)(f.er, {
                children: [
                    (0, l.jsx)(v, { size: "xxs", color: c.A.colors.TEXT_FEEDBACK_POSITIVE }),
                    (0, l.jsx)(g.z, {
                        entry: { start: n, end: m, isCountDown: x },
                        textColor: "text-feedback-positive",
                    }),
                ],
            });
        },
        Rq: function (e) {
            let { activity: t } = e,
                n = (0, x.kR)(t.assets?.large_text);
            return null == n ? null : (0, l.jsx)(f.fM, { Icon: m.TopicsIcon, text: n });
        },
        cy: function (e) {
            let { activity: t } = e;
            if ((0, A.A)(t) || null == t.party) return null;
            let n = (0, x.gF)(t.state, t.party);
            return null == n ? null : (0, l.jsx)(f.fM, { Icon: d.GroupIcon, text: n });
        },
    },
);
