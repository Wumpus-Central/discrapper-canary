l.d(t, { A: () => C });
var n = l(477900);
l(582128);
var a = l(503698),
    s = l.n(a),
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
    C = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: l, programReward: a, totalDays: r } = (0, d.F)();
        if (!l || null == a || null == r) return null;
        let C = (0, i.default)(new Date(a.next_reward_date), new Date()),
            E = a.program_current_state === u.L.PREMIUM_CHURNING,
            A = E ? _.churning.start : _.active.start,
            g = E ? _.churning.end : _.active.end;
        return (0, n.jsxs)("div", {
            className: s()(m.k, t),
            children: [
                (0, n.jsx)(h.Ay, {
                    variant: h.qP.UNSET,
                    progress: r - C,
                    maximum: r,
                    override: { default: { gradientStart: A, gradientEnd: g } },
                }),
                E
                    ? (0, n.jsx)(c.t, { size: "sm", color: "currentColor", className: m.K })
                    : (0, n.jsx)(o.C, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
