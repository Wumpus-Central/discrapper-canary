s.d(t, { A: () => C });
var n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(892227),
    i = s(827734),
    d = s(403581),
    o = s(318254),
    c = s(914410),
    u = s(649032),
    m = s(320118),
    h = s(992501);
let x = {
        churning: { start: i.A.unsafe_rawColors.OPACITY_RED_80.css, end: i.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: i.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: i.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    C = (e) => {
        let { className: t } = e,
            { passesProgressBarInvariant: s, programReward: a, totalDays: i } = (0, m.F)();
        if (!s || null == a || null == i) return null;
        let C = (0, l.default)(new Date(a.next_reward_date), new Date()),
            _ = a.program_current_state === u.L.PREMIUM_CHURNING,
            p = _ ? x.churning.start : x.active.start,
            g = _ ? x.churning.end : x.active.end;
        return (0, n.jsxs)("div", {
            className: r()(h.k, t),
            children: [
                (0, n.jsx)(c.Ay, {
                    variant: c.qP.UNSET,
                    progress: i - C,
                    maximum: i,
                    override: { default: { gradientStart: p, gradientEnd: g } },
                }),
                _
                    ? (0, n.jsx)(d.t, { size: "sm", color: "currentColor", className: h.K })
                    : (0, n.jsx)(o.C, { size: "sm", color: "currentColor", className: h.K }),
            ],
        });
    };
