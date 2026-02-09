"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(892227),
    o = n(311907),
    l = n(827734),
    u = n(732955),
    c = n(613566),
    d = n(895944),
    _ = n(649032),
    f = n(837902);
let p = {
        churning: { start: l.A.unsafe_rawColors.OPACITY_RED_80.css, end: l.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: l.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: l.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    h = (e) => {
        let { className: t } = e,
            {
                passesProgressBarInvariant: n,
                programReward: i,
                totalDays: l,
            } = (0, o.cf)([d.A], () => ({
                passesProgressBarInvariant: d.A.passesProgressBarInvariant(_.W.NITRO),
                programReward: d.A.getRewardForProgram(_.W.NITRO),
                totalDays: d.A.getTotalDaysInDuration(_.W.NITRO),
            }));
        if (!n || null == i || null == l) return null;
        let h = (0, s.default)(new Date(i.next_reward_date), new Date()),
            m = i.program_current_state === _.L.PREMIUM_CHURNING,
            g = m ? p.churning.start : p.active.start,
            E = m ? p.churning.end : p.active.end;
        return (0, r.jsxs)("div", {
            className: a()(f.k, t),
            children: [
                (0, r.jsx)(c.Ay, {
                    variant: c.qP.UNSET,
                    progress: l - h,
                    maximum: l,
                    override: { default: { gradientStart: g, gradientEnd: E } },
                }),
                m
                    ? (0, r.jsx)(u.tvc, { size: "sm", color: "currentColor", className: f.K })
                    : (0, r.jsx)(u.Cp8, { size: "sm", color: "currentColor", className: f.K }),
            ],
        });
    };
