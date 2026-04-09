"use strict";
n.d(t, { B_: () => N, FC: () => E, Fk: () => C, IK: () => y, PX: () => v, TZ: () => R, ji: () => b, zN: () => S });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(854378),
    c = n(47167),
    d = n(769015),
    u = n(714991),
    h = n(486020),
    _ = n(427262),
    p = n(172799),
    g = n(652215),
    m = n(330936),
    A = n(985018),
    f = n(742557);
let E = 100,
    x = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount && 0 === t.memberCount ? null : t;
    },
    I = (e) => e.target_type === p.yV.STREAM && null != e.target_user,
    N = (e) => e.channel?.type === g.rbe.GROUP_DM,
    v = (e) => null == e.channel && null == e.guild && null != e.inviter,
    T = (e) => e.state === g.elq.ACCEPTED,
    C = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    j = (e) => {
        let t;
        return !C(e) && (!!v(e) || (null != e.inviter && !T(e) && ((t = x(e)), !((t?.memberCount ?? 0) > E))));
    },
    S = (e) => {
        let { guild: t, user: n, application: s } = e;
        return null != s
            ? (0, i.jsx)(d.A, { className: f.Z2, game: s, size: f.q6 })
            : null != n
              ? (0, i.jsx)(o.eu, { src: n.getAvatarURL(void 0, 100), size: a._3J.DEPRECATED_SIZE_100, className: f.my })
              : null != t
                ? (0, i.jsx)(o.$v, { guild: t, size: o.$v.Sizes.LARGER, className: f.$f, animate: !0 })
                : null;
    };
function y(e) {
    let { invite: t, textClassName: n, className: s } = e,
        r = x(t);
    return null == r || j(t) || t?.guild?.id === m.TA
        ? null
        : (0, i.jsx)(o.R1, {
              className: l()(f.He, s),
              online: r.onlineCount,
              total: r.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function b(e) {
    let { invite: t, showBigUserIcon: n } = e,
        r = s.useMemo(
            () =>
                n
                    ? null
                    : I(t) && null != t.target_user
                      ? h.Ay.getUserAvatarURL(t.target_user)
                      : j(t) && null != t.inviter
                        ? h.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = A.intl.string(A.t["3rE1P8"]);
    return (
        N(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? A.intl.format(A.t.Lu4h18, { username: t.inviter.username })
                      : A.intl.string(A.t.OsdY8B))
            : I(t) && null != t.target_user
              ? (l = A.intl.formatToPlainString(A.t.x2L32Q, { username: t.target_user.username }))
              : T(t)
                ? (l = A.intl.string(A.t["FDsl+J"]))
                : j(t) &&
                  null != t.inviter &&
                  (l = A.intl.format(A.t.spU2mI, { username: _.Ay.getFormattedName(t.inviter) })),
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
function R(e) {
    let t,
        n,
        s,
        { user: r, guild: l, channel: d, application: h, showBigUserIcon: p } = e,
        g = (0, c.Ay)(d);
    if (null != l)
        p && null == h && (t = (0, i.jsx)(o.$v, { guild: l, size: o.$v.Sizes.SMALL })),
            (n = l.name),
            null != h &&
                ((n = h.name),
                (s = (0, i.jsxs)("div", {
                    className: f.JB,
                    children: [
                        (0, i.jsx)(o.tK, { className: f.R9, children: A.intl.string(A.t["3gg9fF"]) }),
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
    else if (null != d) {
        if (null == r) throw Error("no inviter in group DM invite");
        let e = _.Ay.getFormattedName(r);
        null != g && "" !== g
            ? ((n = g), null != d.icon && (t = (0, i.jsx)(o.F4, { channel: d, size: a._3J.SIZE_32 })))
            : (n = e);
    } else if (null != r) {
        let e = _.Ay.getFormattedName(r);
        (n = A.intl.formatToPlainString(A.t["4aF92R"], { username: e })),
            (s = (0, i.jsx)(o.tK, { className: f.b$, children: A.intl.format(A.t.Quj7HX, { username: e }) }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.hE, {
                className: f.DD,
                children: [
                    null != l ? (0, i.jsx)(u.A, { guild: l, className: f.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            s,
        ],
    });
}
