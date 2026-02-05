"use strict";
n.d(t, { B_: () => v, FC: () => A, Fk: () => S, IK: () => y, PX: () => I, TZ: () => b, ji: () => T, zN: () => C });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(854378),
    c = n(769015),
    d = n(714991),
    u = n(486020),
    h = n(427262),
    _ = n(172799),
    p = n(652215),
    g = n(330936),
    m = n(985018),
    f = n(779715);
let A = 100,
    E = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount && 0 === t.memberCount ? null : t;
    },
    x = (e) => e.target_type === _.yV.STREAM && null != e.target_user,
    v = (e) => e.channel?.type === p.rbe.GROUP_DM,
    I = (e) => null == e.channel && null == e.guild && null != e.inviter,
    N = (e) => e.state === p.elq.ACCEPTED,
    S = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    j = (e) => {
        let t;
        return !S(e) && (!!I(e) || (null != e.inviter && !N(e) && ((t = E(e)), !((t?.memberCount ?? 0) > A))));
    },
    C = (e) => {
        let { guild: t, user: n, application: s } = e;
        return null != s
            ? (0, i.jsx)(c.A, { className: f.Z2, game: s, size: f.q6 })
            : null != n
              ? (0, i.jsx)(o.eu, { src: n.getAvatarURL(void 0, 100), size: a._3J.DEPRECATED_SIZE_100, className: f.my })
              : null != t
                ? (0, i.jsx)(o.$v, { guild: t, size: o.$v.Sizes.LARGER, className: f.$f, animate: !0 })
                : null;
    };
function y(e) {
    let { invite: t, textClassName: n, className: s } = e,
        r = E(t);
    return null == r || j(t) || t?.guild?.id === g.TA
        ? null
        : (0, i.jsx)(o.R1, {
              className: l()(f.He, s),
              online: r.onlineCount,
              total: r.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function T(e) {
    let { invite: t, showBigUserIcon: n } = e,
        r = s.useMemo(
            () =>
                n
                    ? null
                    : x(t) && null != t.target_user
                      ? u.Ay.getUserAvatarURL(t.target_user)
                      : j(t) && null != t.inviter
                        ? u.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = m.intl.string(m.t["3rE1P8"]);
    return (
        v(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? m.intl.format(m.t.Lu4h18, { username: t.inviter.username })
                      : m.intl.string(m.t.OsdY8B))
            : x(t) && null != t.target_user
              ? (l = m.intl.formatToPlainString(m.t.x2L32Q, { username: t.target_user.username }))
              : N(t)
                ? (l = m.intl.string(m.t["FDsl+J"]))
                : j(t) &&
                  null != t.inviter &&
                  (l = m.intl.format(m.t.spU2mI, { username: h.Ay.getFormattedName(t.inviter) })),
        (0, i.jsxs)("div", {
            className: f.JB,
            children: [
                null != r &&
                    (0, i.jsx)("div", { className: f._t, children: (0, i.jsx)(o.eu, { src: r, size: a._3J.SIZE_24 }) }),
                (0, i.jsx)(o.tK, { className: f.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function b(e) {
    let t,
        n,
        s,
        { user: r, guild: l, channel: c, application: u, showBigUserIcon: _ } = e;
    if (null != l)
        _ && null == u && (t = (0, i.jsx)(o.$v, { guild: l, size: o.$v.Sizes.SMALL })),
            (n = l.name),
            null != u &&
                ((n = u.name),
                (s = (0, i.jsxs)("div", {
                    className: f.JB,
                    children: [
                        (0, i.jsx)(o.tK, { className: f.R9, children: m.intl.string(m.t["3gg9fF"]) }),
                        (0, i.jsxs)("div", {
                            className: f.bo,
                            children: [
                                (0, i.jsx)(o.$v, { guild: l, size: o.$v.Sizes.SMALL }),
                                (0, i.jsx)(a.Heading, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: l.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != c) {
        if (null == r) throw Error("no inviter in group DM invite");
        let e = h.Ay.getFormattedName(r);
        null != c.name && "" !== c.name
            ? ((n = c.name), null != c.icon && (t = (0, i.jsx)(o.F4, { channel: c, size: a._3J.SIZE_32 })))
            : (n = e);
    } else if (null != r) {
        let e = h.Ay.getFormattedName(r);
        (n = m.intl.formatToPlainString(m.t["4aF92R"], { username: e })),
            (s = (0, i.jsx)(o.tK, { className: f.b$, children: m.intl.format(m.t.Quj7HX, { username: e }) }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.hE, {
                className: f.DD,
                children: [
                    null != l ? (0, i.jsx)(d.A, { guild: l, className: f.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            s,
        ],
    });
}
