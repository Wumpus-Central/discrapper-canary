"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(892227),
    o = n(661531),
    l = n(403581),
    u = n(318254),
    c = n(914410),
    d = n(636592),
    _ = n(366505),
    f = n(992501);
let h = {
        churning: { start: o.A.unsafe_rawColors.OPACITY_RED_80.css, end: o.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: o.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: o.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    p = (e) => {
        let { className: t } = e,
            { passesProgressBarInvariant: n, programReward: r, totalDays: o } = (0, _.F)();
        if (!n || null == r || null == o) return null;
        let p = (0, a.default)(new Date(r.next_reward_date), new Date()),
            E = r.program_current_state === d.L.PREMIUM_CHURNING,
            m = E ? h.churning.start : h.active.start,
            g = E ? h.churning.end : h.active.end;
        return (0, i.jsxs)("div", {
            className: s()(f.k, t),
            children: [
                (0, i.jsx)(c.Ay, {
                    variant: c.qP.UNSET,
                    progress: o - p,
                    maximum: o,
                    override: { default: { gradientStart: m, gradientEnd: g } },
                }),
                E
                    ? (0, i.jsx)(l.t, { size: "sm", color: "currentColor", className: f.K })
                    : (0, i.jsx)(u.C, { size: "sm", color: "currentColor", className: f.K }),
            ],
        });
    };
