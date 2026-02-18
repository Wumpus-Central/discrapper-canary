r.d(t, { A: () => g });
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(892227),
    i = r(311907),
    d = r(827734),
    u = r(732955),
    o = r(613566),
    c = r(895944),
    m = r(649032),
    p = r(837902);
let h = {
        churning: { start: d.A.unsafe_rawColors.OPACITY_RED_80.css, end: d.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: d.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: d.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    g = (e) => {
        let { className: t } = e,
            {
                passesProgressBarInvariant: r,
                programReward: a,
                totalDays: d,
            } = (0, i.cf)([c.A], () => ({
                passesProgressBarInvariant: c.A.passesProgressBarInvariant(m.W.NITRO),
                programReward: c.A.getRewardForProgram(m.W.NITRO),
                totalDays: c.A.getTotalDaysInDuration(m.W.NITRO),
            }));
        if (!r || null == a || null == d) return null;
        let g = (0, s.default)(new Date(a.next_reward_date), new Date()),
            x = a.program_current_state === m.L.PREMIUM_CHURNING,
            b = x ? h.churning.start : h.active.start,
            f = x ? h.churning.end : h.active.end;
        return (0, n.jsxs)("div", {
            className: l()(p.k, t),
            children: [
                (0, n.jsx)(o.Ay, {
                    variant: o.qP.UNSET,
                    progress: d - g,
                    maximum: d,
                    override: { default: { gradientStart: b, gradientEnd: f } },
                }),
                x
                    ? (0, n.jsx)(u.tvc, { size: "sm", color: "currentColor", className: p.K })
                    : (0, n.jsx)(u.Cp8, { size: "sm", color: "currentColor", className: p.K }),
            ],
        });
    };
