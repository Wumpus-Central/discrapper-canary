a.d(t, { A: () => E });
var l = a(477900);
a(582128);
var n = a(503698),
    s = a.n(n),
    i = a(892227),
    r = a(661531),
    c = a(403581),
    o = a(318254),
    h = a(914410),
    u = a(440005),
    d = a(366505),
    m = a(903080);
let _ = {
        churning: { start: r.A.unsafe_rawColors.OPACITY_RED_80.css, end: r.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: r.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: r.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: a, programReward: n, totalDays: r } = (0, d.F)();
        if (!a || null == n || null == r) return null;
        let E = (0, i.default)(new Date(n.next_reward_date), new Date()),
            C = n.program_current_state === u.L.PREMIUM_CHURNING,
            g = C ? _.churning.start : _.active.start,
            A = C ? _.churning.end : _.active.end;
        return (0, l.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, l.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: r - E,
                    maximum: r,
                    override: { default: { gradientStart: g, gradientEnd: A } },
                }),
                C
                    ? (0, l.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, l.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
