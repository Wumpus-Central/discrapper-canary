l.d(t, { A: () => E });
var a = l(477900);
l(582128);
var n = l(503698),
    s = l.n(n),
    i = l(892227),
    r = l(661531),
    c = l(403581),
    o = l(318254),
    h = l(914410),
    u = l(440005),
    d = l(366505),
    m = l(903080);
let _ = {
        churning: { start: r.A.unsafe_rawColors.OPACITY_RED_80.css, end: r.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: r.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: r.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: l, programReward: n, totalDays: r } = (0, d.F)();
        if (!l || null == n || null == r) return null;
        let E = (0, i.default)(new Date(n.next_reward_date), new Date()),
            C = n.program_current_state === u.L.PREMIUM_CHURNING,
            A = C ? _.churning.start : _.active.start,
            g = C ? _.churning.end : _.active.end;
        return (0, a.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, a.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: r - E,
                    maximum: r,
                    override: { default: { gradientStart: A, gradientEnd: g } },
                }),
                C
                    ? (0, a.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, a.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
