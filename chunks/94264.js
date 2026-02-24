r.d(t, { A: () => p });
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(892227),
    i = r(827734),
    d = r(732955),
    u = r(613566),
    o = r(649032),
    c = r(320118),
    m = r(837902);
let h = {
        churning: { start: i.A.unsafe_rawColors.OPACITY_RED_80.css, end: i.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: i.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: i.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    p = (e) => {
        let { className: t } = e,
            { passesProgressBarInvariant: r, programReward: a, totalDays: i } = (0, c.F)();
        if (!r || null == a || null == i) return null;
        let p = (0, s.default)(new Date(a.next_reward_date), new Date()),
            x = a.program_current_state === o.L.PREMIUM_CHURNING,
            f = x ? h.churning.start : h.active.start,
            g = x ? h.churning.end : h.active.end;
        return (0, n.jsxs)("div", {
            className: l()(m.k, t),
            children: [
                (0, n.jsx)(u.Ay, {
                    variant: u.qP.UNSET,
                    progress: i - p,
                    maximum: i,
                    override: { default: { gradientStart: f, gradientEnd: g } },
                }),
                x
                    ? (0, n.jsx)(d.tvc, { size: "sm", color: "currentColor", className: m.K })
                    : (0, n.jsx)(d.Cp8, { size: "sm", color: "currentColor", className: m.K }),
            ],
        });
    };
