l.d(t, { c: () => j, q: () => _ });
var i = l(477900);
l(582128);
var n = l(503698),
    a = l.n(n),
    s = l(140735),
    r = l(661531),
    c = l(663417),
    d = l(834730),
    u = l(369606),
    o = l(80682),
    f = l(475968),
    h = l(251812),
    g = l(518782),
    m = l(705355),
    x = l(671859),
    E = l(684989),
    A = l(796966),
    p = l(61567),
    v = l(375708),
    I = l(764359);
let j = 20;
function S(e) {
    let { guildId: t, data: l } = e,
        { entries: n, stat: u } = l,
        f = n.slice(0, j),
        m = (0, h.K)(u),
        x = (0, h.K)(g.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED).valueLabel;
    return (
        (0, o.Eq)({ [t]: f.map((e) => e.user_id) }, "leaderboard"),
        (0, i.jsxs)("div", {
            className: I.Up,
            children: [
                (0, i.jsx)("div", {
                    className: I.CZ,
                    children: (0, i.jsxs)("table", {
                        className: I.tp,
                        children: [
                            (0, i.jsx)("thead", {
                                children: (0, i.jsxs)("tr", {
                                    className: I.U1,
                                    children: [
                                        (0, i.jsx)("th", {
                                            className: a()(I.e4, I.Jt),
                                            children: (0, i.jsx)(s.A, { children: A.l.columnRank }),
                                        }),
                                        (0, i.jsx)("th", {
                                            className: I.e4,
                                            children: (0, i.jsx)(s.A, { children: A.l.columnMember }),
                                        }),
                                        (0, i.jsx)("th", {
                                            className: I.e4,
                                            children: (0, i.jsx)(s.A, { children: m.valueLabel }),
                                        }),
                                        (0, i.jsx)("th", {
                                            className: I.e4,
                                            children: (0, i.jsx)(s.A, { children: x }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)("tbody", {
                                children: f.map((e) => (0, i.jsx)(E.k, { guildId: t, entry: e }, e.user_id)),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: I.qr,
                    children: [
                        (0, i.jsx)(c.RefreshIcon, { size: "xxs", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                        (0, i.jsx)(d.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: v.intl.string(p.default["/nma+a"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
let _ = {
    View: function (e) {
        let { hydration: t, guildId: l } = e;
        return null == t || "idle" === t.status || "loading" === t.status
            ? (0, i.jsx)(m.eU, {})
            : "error" === t.status
              ? (0, i.jsx)(m.MO, {})
              : 0 === t.data.entries.length
                ? (0, i.jsx)(x.y, {})
                : (0, i.jsx)(S, { guildId: l, data: t.data });
    },
    useTitle: function (e, t) {
        return t?.status === "success" ? (0, h.K)(t.data.stat).name : (e.default_title ?? "");
    },
    TitleIcon: function () {
        return (0, i.jsx)(u.TrophyIcon, { size: "sm", color: r.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
    },
    HeaderAccessory: function (e) {
        let { hydration: t } = e;
        return t?.status !== "success"
            ? null
            : (0, i.jsx)("div", {
                  className: I.f$,
                  children: (0, i.jsx)(d.E, {
                      variant: "text-xs/semibold",
                      color: "text-brand",
                      children: (0, f.d)(t.data.week_start_ts),
                  }),
              });
    },
};
