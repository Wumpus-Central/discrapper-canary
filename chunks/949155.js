n.d(t, {
    B_: () => b,
    FC: () => x,
    Fk: () => y,
    IK: () => O,
    PX: () => v,
    TZ: () => T,
    ji: () => I,
    zN: () => N,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    o = n(854378),
    c = n(769015),
    u = n(714991),
    d = n(486020),
    h = n(427262),
    f = n(172799),
    p = n(652215),
    g = n(330936),
    m = n(985018),
    A = n(779715);
let x = 100,
    _ = (e) => {
        var t, n;
        let r = {
            onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
            memberCount: null != (n = e.approximate_member_count) ? n : 0,
        };
        return 0 === r.memberCount && 0 === r.memberCount ? null : r;
    },
    E = (e) => e.target_type === f.yV.STREAM && null != e.target_user,
    b = (e) => {
        var t;
        return (null == (t = e.channel) ? void 0 : t.type) === p.rbe.GROUP_DM;
    },
    v = (e) => null == e.channel && null == e.guild && null != e.inviter,
    j = (e) => e.state === p.elq.ACCEPTED,
    y = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    S = (e) => {
        var t;
        let n;
        return (
            !y(e) &&
            (!!v(e) ||
                (null != e.inviter &&
                    !j(e) &&
                    !((null != (t = null == (n = _(e)) ? void 0 : n.memberCount) ? t : 0) > x)))
        );
    },
    N = (e) => {
        let { guild: t, user: n, application: i } = e;
        return null != i
            ? (0, r.jsx)(c.A, {
                  className: A.Z2,
                  game: i,
                  size: A.q6,
              })
            : null != n
              ? (0, r.jsx)(o.eu, {
                    src: n.getAvatarURL(void 0, 100),
                    size: a._3J.DEPRECATED_SIZE_100,
                    className: A.my,
                })
              : null != t
                ? (0, r.jsx)(o.$v, {
                      guild: t,
                      size: o.$v.Sizes.LARGER,
                      className: A.$f,
                      animate: !0,
                  })
                : null;
    };
function O(e) {
    var t;
    let { invite: n, textClassName: i, className: s } = e,
        a = _(n);
    return null == a || S(n) || (null == n || null == (t = n.guild) ? void 0 : t.id) === g.TA
        ? null
        : (0, r.jsx)(o.R1, {
              className: l()(A.He, s),
              online: a.onlineCount,
              total: a.memberCount,
              textClassName: i,
              flat: !0,
          });
}
function I(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = i.useMemo(
            () =>
                n
                    ? null
                    : E(t) && null != t.target_user
                      ? d.Ay.getUserAvatarURL(t.target_user)
                      : S(t) && null != t.inviter
                        ? d.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = m.intl.string(m.t["3rE1P8"]);
    if (b(t)) {
        var c, u;
        l =
            (null == (c = t.channel) ? void 0 : c.name) != null &&
            (null == (u = t.inviter) ? void 0 : u.username) != null
                ? m.intl.format(m.t.Lu4h18, { username: t.inviter.username })
                : m.intl.string(m.t.OsdY8B);
    } else
        E(t) && null != t.target_user
            ? (l = m.intl.formatToPlainString(m.t.x2L32Q, { username: t.target_user.username }))
            : j(t)
              ? (l = m.intl.string(m.t["FDsl+J"]))
              : S(t) &&
                null != t.inviter &&
                (l = m.intl.format(m.t.spU2mI, { username: h.Ay.getFormattedName(t.inviter) }));
    return (0, r.jsxs)("div", {
        className: A.JB,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: A._t,
                    children: (0, r.jsx)(o.eu, {
                        src: s,
                        size: a._3J.SIZE_24,
                    }),
                }),
            (0, r.jsx)(o.tK, {
                className: A.__invalid_inviteJoinSubTitle,
                children: l,
            }),
        ],
    });
}
function T(e) {
    let t,
        n,
        i,
        { user: s, guild: l, channel: c, application: d, showBigUserIcon: f } = e;
    if (null != l)
        f &&
            null == d &&
            (t = (0, r.jsx)(o.$v, {
                guild: l,
                size: o.$v.Sizes.SMALL,
            })),
            (n = l.name),
            null != d &&
                ((n = d.name),
                (i = (0, r.jsxs)("div", {
                    className: A.JB,
                    children: [
                        (0, r.jsx)(o.tK, {
                            className: A.R9,
                            children: m.intl.string(m.t["3gg9fF"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: A.bo,
                            children: [
                                (0, r.jsx)(o.$v, {
                                    guild: l,
                                    size: o.$v.Sizes.SMALL,
                                }),
                                (0, r.jsx)(a.Heading, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: l.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != c) {
        if (null == s) throw Error("no inviter in group DM invite");
        let e = h.Ay.getFormattedName(s);
        null != c.name && "" !== c.name
            ? ((n = c.name),
              null != c.icon &&
                  (t = (0, r.jsx)(o.F4, {
                      channel: c,
                      size: a._3J.SIZE_32,
                  })))
            : (n = e);
    } else if (null != s) {
        let e = h.Ay.getFormattedName(s);
        (n = m.intl.formatToPlainString(m.t["4aF92R"], { username: e })),
            (i = (0, r.jsx)(o.tK, {
                className: A.b$,
                children: m.intl.format(m.t.Quj7HX, { username: e }),
            }));
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.hE, {
                className: A.DD,
                children: [
                    null != l
                        ? (0, r.jsx)(u.A, {
                              guild: l,
                              className: A.n2,
                              tooltipPosition: "left",
                          })
                        : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
