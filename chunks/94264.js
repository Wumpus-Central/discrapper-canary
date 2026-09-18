a.d(t, { A: () => C });
var n = a(477900);
a(582128);
var l = a(503698),
    s = a.n(l),
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
    C = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: a, programReward: l, totalDays: r } = (0, d.F)();
        if (!a || null == l || null == r) return null;
        let C = (0, i.default)(new Date(l.next_reward_date), new Date()),
            E = l.program_current_state === u.L.PREMIUM_CHURNING,
            g = E ? _.churning.start : _.active.start,
            A = E ? _.churning.end : _.active.end;
        return (0, n.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, n.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: r - C,
                    maximum: r,
                    override: { default: { gradientStart: g, gradientEnd: A } },
                }),
                E
                    ? (0, n.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, n.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
