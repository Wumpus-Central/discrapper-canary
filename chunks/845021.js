l.d(t, { R: () => v, q: () => j });
var i,
    n = l(477900);
l(582128);
var a = l(503698),
    s = l.n(a),
    r = l(140735),
    d = l(17928),
    c = l(297264),
    u = l(866665),
    o = l(834730),
    f = l(97808),
    h = l(778712),
    g = l(80682),
    m = l(696451),
    E = l(287809),
    x = l(927813),
    A = l(562153),
    p = l(851612),
    _ = l(764359),
    v =
        (((i = {})[(i.GAMING_LEADERBOARD_STAT_UNSPECIFIED = 0)] = "GAMING_LEADERBOARD_STAT_UNSPECIFIED"),
        (i[(i.GAMING_LEADERBOARD_STAT_HOURS_PLAYED = 1)] = "GAMING_LEADERBOARD_STAT_HOURS_PLAYED"),
        (i[(i.GAMING_LEADERBOARD_STAT_DAYS_PLAYED = 2)] = "GAMING_LEADERBOARD_STAT_DAYS_PLAYED"),
        (i[(i.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED = 3)] = "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED"),
        i);
function S(e) {
    let { guildId: t, data: l } = e,
        { entries: i, stat: a, week_start_ts: d } = l;
    (0, g.Eq)({ [t]: i.map((e) => e.user_id) }, "leaderboard");
    let f = new Date(),
        h = d + x.A.Millis.WEEK / 1e3 - f.getTime() / 1e3;
    return (0, n.jsxs)("div", {
        className: _.Up,
        children: [
            (0, n.jsxs)("div", {
                className: _.wx,
                children: [
                    (0, n.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: (function (e) {
                            switch (e) {
                                case 1:
                                    return "Time spent gaming";
                                case 2:
                                    return "Number of days gaming";
                                case 3:
                                    return "Unique games played";
                                default:
                                    return "Gaming Leaderboard";
                            }
                        })(a),
                    }),
                    (0, n.jsx)(u.m, {
                        text: "Data updates every day.",
                        children: (0, n.jsx)("div", {
                            className: _.f$,
                            children: (0, n.jsxs)(o.E, {
                                variant: "text-xs/semibold",
                                color: "text-brand",
                                children: [Math.max(0, Math.floor(h / 3600)), " hours left"],
                            }),
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: _.CZ,
                children: (0, n.jsxs)("table", {
                    className: _.tp,
                    children: [
                        (0, n.jsx)("thead", {
                            children: (0, n.jsxs)("tr", {
                                className: _.U1,
                                children: [
                                    (0, n.jsx)("th", {
                                        className: s()(_.e4, _.Jt),
                                        children: (0, n.jsx)(r.A, { children: "Rank" }),
                                    }),
                                    (0, n.jsx)("th", {
                                        className: _.e4,
                                        children: (0, n.jsx)(r.A, { children: "Member" }),
                                    }),
                                    (0, n.jsx)("th", {
                                        className: _.e4,
                                        children: (0, n.jsx)(r.A, {
                                            children: (function (e) {
                                                switch (e) {
                                                    case 1:
                                                        return "Hours played";
                                                    case 2:
                                                        return "Days played";
                                                    case 3:
                                                        return "Unique games played";
                                                    default:
                                                        return "Unknown stat";
                                                }
                                            })(a),
                                        }),
                                    }),
                                    (0, n.jsx)("th", {
                                        className: _.e4,
                                        children: (0, n.jsx)(r.A, { children: "Unique games played" }),
                                    }),
                                ],
                            }),
                        }),
                        (0, n.jsx)("tbody", {
                            children: i.map((e) => (0, n.jsx)(I, { guildId: t, entry: e }, e.user_id)),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function I(e) {
    let { guildId: t, entry: l } = e,
        i = l.user_id,
        a = (0, d.bG)([E.default], () => E.default.getUser(i)),
        s = (0, d.bG)([m.Ay], () => m.Ay.getMember(t, i)),
        r = A.Ay.useName(t, void 0, a);
    return null == a || null == s
        ? null
        : (0, n.jsxs)("tr", {
              className: _.nM,
              children: [
                  (0, n.jsx)("td", {
                      className: _.Jt,
                      children: (0, n.jsx)(o.E, { variant: "text-sm/semibold", color: "text-muted", children: l.rank }),
                  }),
                  (0, n.jsx)("td", {
                      className: _.Hn,
                      children: (0, n.jsxs)("div", {
                          className: _.kQ,
                          children: [
                              (0, n.jsx)(f.eu, {
                                  size: h._3.SIZE_32,
                                  src: a.getAvatarURL(t, 32) ?? void 0,
                                  "aria-hidden": !0,
                              }),
                              (0, n.jsx)(o.E, {
                                  variant: "text-md/semibold",
                                  color: "text-default",
                                  className: _.UU,
                                  children: r,
                              }),
                          ],
                      }),
                  }),
                  (0, n.jsx)("td", {
                      className: _.Hn,
                      children: (0, n.jsx)(o.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          children: l.value,
                      }),
                  }),
                  (0, n.jsx)("td", {
                      className: _.Hn,
                      children: (0, n.jsx)(o.E, {
                          variant: "text-md/semibold",
                          color: "text-default",
                          children: l.application_ids.length,
                      }),
                  }),
              ],
          });
}
let j = {
    View: function (e) {
        let { hydration: t, guildId: l } = e;
        return null == t || "idle" === t.status || "loading" === t.status
            ? (0, n.jsx)(p.e, {})
            : "error" === t.status
              ? (0, n.jsx)(p.M, {})
              : (0, n.jsx)(S, { guildId: l, data: t.data });
    },
};
