s.d(t, { A: () => C });
var a = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    i = s(892227),
    n = s(661531),
    d = s(403581),
    o = s(318254),
    c = s(914410),
    u = s(636592),
    m = s(366505),
    h = s(992501);
let x = {
        churning: { start: n.A.unsafe_rawColors.OPACITY_RED_80.css, end: n.A.unsafe_rawColors.RED_NEW_30.css },
        active: { start: n.A.unsafe_rawColors.OPACITY_GREEN_80.css, end: n.A.unsafe_rawColors.GREEN_NEW_30.css },
    },
    C = (e) => {
        let { className: t } = e,
            { passesProgressBarInvariant: s, programReward: r, totalDays: n } = (0, m.F)();
        if (!s || null == r || null == n) return null;
        let C = (0, i.default)(new Date(r.next_reward_date), new Date()),
            _ = r.program_current_state === u.L.PREMIUM_CHURNING,
            p = _ ? x.churning.start : x.active.start,
            g = _ ? x.churning.end : x.active.end;
        return (0, a.jsxs)("div", {
            className: l()(h.k, t),
            children: [
                (0, a.jsx)(c.Ay, {
                    variant: c.qP.UNSET,
                    progress: n - C,
                    maximum: n,
                    override: { default: { gradientStart: p, gradientEnd: g } },
                }),
                _
                    ? (0, a.jsx)(d.t, { size: "sm", color: "currentColor", className: h.K })
                    : (0, a.jsx)(o.C, { size: "sm", color: "currentColor", className: h.K }),
            ],
        });
    };
