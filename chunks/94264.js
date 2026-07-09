"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(892227),
    l = n(661531),
    o = n(403581),
    d = n(318254),
    c = n(914410),
    u = n(440005),
    _ = n(366505),
    E = n(735989);
let A = {
        churning: { start: l.A.unsafe_rawColors.OPACITY_RED_80.css, end: l.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: l.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: l.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    h = function (e) {
        let { className: t } = e,
            { passesProgressBarInvariant: n, programReward: r, totalDays: l } = (0, _.F)();
        if (!n || null == r || null == l) return null;
        let h = (0, s.default)(new Date(r.next_reward_date), new Date()),
            I = r.program_current_state === u.L.PREMIUM_CHURNING,
            f = I ? A.churning.start : A.active.start,
            p = I ? A.churning.end : A.active.end;
        return (0, i.jsxs)("div", {
            className: a()(E.k, t),
            children: [
                (0, i.jsx)(c.Ay, {
                    variant: c.qP.UNSET,
                    progress: l - h,
                    maximum: l,
                    override: { default: { gradientStart: f, gradientEnd: p } },
                }),
                I
                    ? (0, i.jsx)(o.t, { size: "sm", color: "currentColor", className: E.K })
                    : (0, i.jsx)(d.C, { size: "sm", color: "currentColor", className: E.K }),
            ],
        });
    };
