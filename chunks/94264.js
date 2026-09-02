n.d(t, { A: () => E });
var a = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(892227),
    i = n(661531),
    c = n(403581),
    o = n(318254),
    h = n(914410),
    u = n(440005),
    d = n(366505),
    m = n(903080);
let C = {
        churning: { start: i.A.unsafe_rawColors.OPACITY_RED_80.css, end: i.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: i.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: i.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    E = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: n, programReward: l, totalDays: i } = (0, d.F)();
        if (!n || null == l || null == i) return null;
        let E = (0, r.default)(new Date(l.next_reward_date), new Date()),
            g = l.program_current_state === u.L.PREMIUM_CHURNING,
            f = g ? C.churning.start : C.active.start,
            x = g ? C.churning.end : C.active.end;
        return (0, a.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, a.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: i - E,
                    maximum: i,
                    override: { default: { gradientStart: f, gradientEnd: x } },
                }),
                g
                    ? (0, a.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, a.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
