"use strict";
n.d(t, { B_: () => N, FC: () => E, Fk: () => T, IK: () => S, PX: () => j, TZ: () => w, ji: () => R, zN: () => y });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(778712),
    o = n(534514),
    c = n(854378),
    d = n(47167),
    u = n(769015),
    _ = n(714991),
    h = n(486020),
    m = n(427262),
    g = n(172799),
    p = n(652215),
    A = n(330936),
    f = n(985018),
    x = n(269218);
let E = 100,
    I = (e) => {
        let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
        return 0 === t.memberCount && 0 === t.memberCount ? null : t;
    },
    v = (e) => e.target_type === g.yV.STREAM && null != e.target_user,
    N = (e) => e.channel?.type === p.rbe.GROUP_DM,
    j = (e) => null == e.channel && null == e.guild && null != e.inviter,
    C = (e) => e.state === p.elq.ACCEPTED,
    T = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t;
    },
    b = (e) => {
        let t;
        return !T(e) && (!!j(e) || (null != e.inviter && !C(e) && ((t = I(e)), !((t?.memberCount ?? 0) > E))));
    },
    y = (e) => {
        let { guild: t, user: n, application: s } = e;
        return null != s
            ? (0, i.jsx)(u.A, { className: x.Z2, game: s, size: x.q6 })
            : null != n
              ? (0, i.jsx)(c.eu, { src: n.getAvatarURL(void 0, 100), size: a._3.DEPRECATED_SIZE_100, className: x.my })
              : null != t
                ? (0, i.jsx)(c.$v, { guild: t, size: c.$v.Sizes.LARGER, className: x.$f, animate: !0 })
                : null;
    };
function S(e) {
    let { invite: t, textClassName: n, className: s } = e,
        r = I(t);
    return null == r || b(t) || t?.guild?.id === A.TA
        ? null
        : (0, i.jsx)(c.R1, {
              className: l()(x.He, s),
              online: r.onlineCount,
              total: r.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function R(e) {
    let { invite: t, showBigUserIcon: n } = e,
        r = s.useMemo(
            () =>
                n
                    ? null
                    : v(t) && null != t.target_user
                      ? h.Ay.getUserAvatarURL(t.target_user)
                      : b(t) && null != t.inviter
                        ? h.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = f.intl.string(f.t["3rE1P8"]);
    return (
        N(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? f.intl.format(f.t.Lu4h18, { username: t.inviter.username })
                      : f.intl.string(f.t.OsdY8B))
            : v(t) && null != t.target_user
              ? (l = f.intl.formatToPlainString(f.t.x2L32Q, { username: t.target_user.username }))
              : C(t)
                ? (l = f.intl.string(f.t["FDsl+J"]))
                : b(t) &&
                  null != t.inviter &&
                  (l = f.intl.format(f.t.spU2mI, { username: m.Ay.getFormattedName(t.inviter) })),
        (0, i.jsxs)("div", {
            className: x.JB,
            children: [
                null != r &&
                    (0, i.jsx)("div", { className: x._t, children: (0, i.jsx)(c.eu, { src: r, size: a._3.SIZE_24 }) }),
                (0, i.jsx)(c.tK, { className: x.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function w(e) {
    let t,
        n,
        s,
        { user: r, guild: l, channel: u, application: h, showBigUserIcon: g } = e,
        p = (0, d.Ay)(u);
    if (null != l)
        g && null == h && (t = (0, i.jsx)(c.$v, { guild: l, size: c.$v.Sizes.SMALL })),
            (n = l.name),
            null != h &&
                ((n = h.name),
                (s = (0, i.jsxs)("div", {
                    className: x.JB,
                    children: [
                        (0, i.jsx)(c.tK, { className: x.R9, children: f.intl.string(f.t["3gg9fF"]) }),
                        (0, i.jsxs)("div", {
                            className: x.bo,
                            children: [
                                (0, i.jsx)(c.$v, { guild: l, size: c.$v.Sizes.SMALL }),
                                (0, i.jsx)(o.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: l.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != u) {
        if (null == r) throw Error("no inviter in group DM invite");
        let e = m.Ay.getFormattedName(r);
        null != p && "" !== p
            ? ((n = p), null != u.icon && (t = (0, i.jsx)(c.F4, { channel: u, size: a._3.SIZE_32 })))
            : (n = e);
    } else if (null != r) {
        let e = m.Ay.getFormattedName(r);
        (n = f.intl.formatToPlainString(f.t["4aF92R"], { username: e })),
            (s = (0, i.jsx)(c.tK, { className: x.b$, children: f.intl.format(f.t.Quj7HX, { username: e }) }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.hE, {
                className: x.DD,
                children: [
                    null != l ? (0, i.jsx)(_.A, { guild: l, className: x.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            s,
        ],
    });
}
