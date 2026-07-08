a.d(r, { A: () => E });
var t = a(627968);
a(64700);
var s = a(503698),
    n = a.n(s),
    o = a(892227),
    c = a(661531),
    _ = a(403581),
    l = a(318254),
    u = a(914410),
    i = a(440005),
    d = a(366505),
    p = a(992501);
let A = {
        churning: { start: c.A.unsafe_rawColors.OPACITY_RED_80.css, end: c.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: c.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: c.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = function (e) {
        let { className: r } = e,
            { passesProgressBarInvariant: a, programReward: s, totalDays: c } = (0, d.F)();
        if (!a || null == s || null == c) return null;
        let E = (0, o.default)(new Date(s.next_reward_date), new Date()),
            R = s.program_current_state === i.L.PREMIUM_CHURNING,
            v = R ? A.churning.start : A.active.start,
            C = R ? A.churning.end : A.active.end;
        return (0, t.jsxs)("div", {
            className: n()(p.k, r),
            children: [
                (0, t.jsx)(u.Ay, {
                    variant: u.qP.UNSET,
                    progress: c - E,
                    maximum: c,
                    override: { default: { gradientStart: v, gradientEnd: C } },
                }),
                R
                    ? (0, t.jsx)(_.t, { size: "sm", color: "currentColor", className: p.K })
                    : (0, t.jsx)(l.C, { size: "sm", color: "currentColor", className: p.K }),
            ],
        });
    };
ame: E.K;
})]})}
