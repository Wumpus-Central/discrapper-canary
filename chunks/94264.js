a.d(r, { A: () => E });
var s = a(627968);
a(64700);
var t = a(503698),
    n = a.n(t),
    l = a(892227),
    _ = a(661531),
    o = a(403581),
    c = a(318254),
    i = a(914410),
    u = a(440005),
    d = a(366505),
    p = a(992501);
let A = {
        churning: { start: _.A.unsafe_rawColors.OPACITY_RED_80.css, end: _.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: _.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: _.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = (e) => {
        let { className: r } = e,
            { passesProgressBarInvariant: a, programReward: t, totalDays: _ } = (0, d.F)();
        if (!a || null == t || null == _) return null;
        let E = (0, l.default)(new Date(t.next_reward_date), new Date()),
            R = t.program_current_state === u.L.PREMIUM_CHURNING,
            v = R ? A.churning.start : A.active.start,
            C = R ? A.churning.end : A.active.end;
        return (0, s.jsxs)("div", {
            className: n()(p.k, r),
            children: [
                (0, s.jsx)(i.Ay, {
                    variant: i.qP.UNSET,
                    progress: _ - E,
                    maximum: _,
                    override: { default: { gradientStart: v, gradientEnd: C } },
                }),
                R
                    ? (0, s.jsx)(o.t, { size: "sm", color: "currentColor", className: p.K })
                    : (0, s.jsx)(c.C, { size: "sm", color: "currentColor", className: p.K }),
            ],
        });
    };
