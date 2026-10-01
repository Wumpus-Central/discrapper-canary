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
let C = {
        churning: { start: r.A.unsafe_rawColors.OPACITY_RED_80.css, end: r.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: r.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: r.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: l, programReward: n, totalDays: r } = (0, d.F)();
        if (!l || null == n || null == r) return null;
        let E = (0, i.default)(new Date(n.next_reward_date), new Date()),
            _ = n.program_current_state === u.L.PREMIUM_CHURNING,
            g = _ ? C.churning.start : C.active.start,
            A = _ ? C.churning.end : C.active.end;
        return (0, a.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, a.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: r - E,
                    maximum: r,
                    override: { default: { gradientStart: g, gradientEnd: A } },
                }),
                _
                    ? (0, a.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, a.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
