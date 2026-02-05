"use strict";
n.d(t, { A: () => L, M: () => b }), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    c = n(311907),
    d = n(397927),
    u = n(444316),
    h = n(854378),
    _ = n(573435),
    p = n(769015),
    g = n(714991),
    m = n(24215),
    f = n(897288),
    A = n(611010),
    E = n(95701),
    x = n(427157),
    v = n(287809),
    I = n(860689),
    N = n(427262),
    S = n(652215),
    j = n(330936),
    C = n(172799),
    y = n(985018),
    T = n(132852);
let b = () =>
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(h.eu, { src: null, size: d._3J.DEPRECATED_SIZE_100, className: T.my }),
                (0, i.jsx)(h.tK, { children: y.intl.string(y.t["3rE1P8"]) }),
                (0, i.jsx)(h.hE, { className: T.RG, children: y.intl.string(y.t.ZTNur7) }),
            ],
        }),
    R = (e) => {
        let { guild: t, user: n, application: s, compact: r } = e;
        return null != s
            ? (0, i.jsx)(p.A, { className: T.Z2, game: s, size: T.q6 })
            : null != n
              ? (0, i.jsx)(h.eu, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: d._3J.SIZE_80,
                    className: r ? void 0 : T.my,
                })
              : null != t
                ? (0, i.jsx)(_.Ay, {
                      mask: _.Ay.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: T.$f,
                      children: (0, i.jsx)(h.$v, { guild: t, size: h.$v.Sizes.LARGER, animate: !0 }),
                  })
                : null;
    },
    O = (e) =>
        (0, i.jsx)(d.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    L = (e) => {
        let t,
            n,
            s,
            {
                invite: r,
                disableUser: _ = !1,
                error: p,
                flatActivityCount: b = !1,
                isRegister: L = !1,
                inUnclaimedFlow: w = !1,
                friendMemberIds: k = [],
                showInvitedByHeader: D = !0,
                className: B,
            } = e,
            { currentUser: P } = (0, c.cf)([v.default], () => ({ currentUser: v.default.getCurrentUser() }));
        if (null == r) return null;
        let U = null != k && k.length > 0,
            G = null != r.guild ? (I.fh(r.guild) ? r.guild : I.DY(r.guild)) : null,
            M = null != r.channel ? (0, E.OY)(r.channel) : null,
            F = null != r.target_application ? new A.Ay(r.target_application) : null,
            V = _ || null == r.inviter ? null : new x.A(r.inviter),
            W =
                !(
                    (null != r.approximate_member_count && r.approximate_member_count > 100) ||
                    (null != G && G.features.has(S.GuildFeatures.COMMUNITY))
                ) && null != V,
            H = null,
            K = (0, o.Lt)(r.flags ?? 0, a.Q.IS_GUEST_INVITE),
            z = !1;
        if (null != G)
            D &&
                ((H =
                    null == V
                        ? y.intl.string(y.t["3rE1P8"])
                        : y.intl.formatToPlainString(y.t["5u47va"], { username: N.Ay.getFormattedName(V) })),
                r.target_type === C.yV.STREAM &&
                    null != r.target_user &&
                    (H = y.intl.formatToPlainString(y.t.x2L32Q, { username: N.Ay.getFormattedName(r.target_user) })),
                r.target_type === C.yV.EMBEDDED_APPLICATION &&
                    null != r.target_application &&
                    (H =
                        null != V
                            ? y.intl.formatToPlainString(y.t.UW1Cav, { username: N.Ay.getFormattedName(V) })
                            : y.intl.string(y.t.ENSuN3))),
                W && null == F && (t = (0, i.jsx)(h.$v, { className: T.Kk, guild: G, size: h.$v.Sizes.SMALL })),
                (n = G.name),
                null != F &&
                    ((n = F.name),
                    (s = (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(h.tK, { className: T.R9, children: y.intl.string(y.t["3gg9fF"]) }),
                            (0, i.jsxs)("div", {
                                className: T.bo,
                                children: [
                                    (0, i.jsx)(h.$v, { guild: G, size: h.$v.Sizes.SMALL }),
                                    (0, i.jsx)(d.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: T.Al,
                                        children: G.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != M) {
            if (null == V) throw Error("no inviter in group DM invite");
            let e = N.Ay.getFormattedName(V);
            null != M.name && "" !== M.name
                ? ((H = y.intl.formatToPlainString(y.t["5u47va"], { username: e })),
                  (n = M.name),
                  null != M.icon && (t = (0, i.jsx)(h.F4, { channel: M, size: d._3J.SIZE_32 })))
                : ((H = y.intl.string(y.t.OsdY8B)), (n = e));
        } else if (null != V) {
            let e = N.Ay.getFormattedName(V, !0);
            (n = y.intl.formatToPlainString(y.t["4aF92R"], { username: e })),
                (z = !0),
                (s =
                    null != p
                        ? null
                        : (0, i.jsx)(h.tK, {
                              className: T.b$,
                              children: L
                                  ? y.intl.format(y.t["6r4JiR"], { username: e })
                                  : y.intl.format(y.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, i.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 8,
            className: l()(T.kL, B),
            justify: "center",
            align: "center",
            children: [
                (0, i.jsx)(R, { application: F, guild: G, user: W ? V : null, compact: z }),
                null != p
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.tK, { children: y.intl.string(y.t.mDFGFj) }),
                              (0, i.jsx)(h.hE, { children: p }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != H ? (0, i.jsx)(h.tK, { children: H }) : null,
                              (0, i.jsxs)(h.hE, {
                                  className: T.DD,
                                  children: [
                                      null != G
                                          ? (0, i.jsx)(g.A, { guild: G, className: T.n2, tooltipPosition: "left" })
                                          : null,
                                      t,
                                      n,
                                  ],
                              }),
                          ],
                      }),
                s,
                (0, i.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, i.jsxs)(d.BJc, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                null != F || z || r?.guild?.id === j.TA
                                    ? null
                                    : (0, i.jsx)(h.R1, {
                                          online: r.approximate_presence_count,
                                          total: r.approximate_member_count,
                                          flat: b,
                                          renderText: U ? O : void 0,
                                      }),
                                U && (0, i.jsx)(u.A, { friendMemberIds: k }),
                            ],
                        }),
                        (0, i.jsx)(f.A, { guild: G, roles: r.roles, className: T.Ei }),
                        w || K || null == P ? (0, i.jsx)(h.xt, { user: P }) : (0, i.jsx)(m.L, {}),
                    ],
                }),
            ],
        });
    };
