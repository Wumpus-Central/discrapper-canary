l.d(t, { A: () => F, M: () => O }), l(938796);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(821418),
    u = l(665260),
    c = l(311907),
    d = l(778712),
    o = l(834730),
    m = l(331322),
    g = l(854378),
    h = l(47167),
    x = l(573435),
    j = l(769015),
    A = l(714991),
    E = l(24215),
    _ = l(897288),
    p = l(611010),
    N = l(95701),
    v = l(427157),
    f = l(287809),
    S = l(860689),
    C = l(427262),
    I = l(652215),
    L = l(330936),
    y = l(172799),
    T = l(985018),
    R = l(493263);
let O = () =>
        (0, n.jsxs)(i.Fragment, {
            children: [
                (0, n.jsx)(g.eu, { src: null, size: d._3.DEPRECATED_SIZE_100, className: R.my }),
                (0, n.jsx)(g.tK, { children: T.intl.string(T.t["3rE1P8"]) }),
                (0, n.jsx)(g.hE, { className: R.RG, children: T.intl.string(T.t.ZTNur7) }),
            ],
        }),
    b = (e) => {
        let { guild: t, user: l, application: i, compact: a } = e;
        return null != i
            ? (0, n.jsx)(j.A, { className: R.Z2, game: i, size: R.q6 })
            : null != l
              ? (0, n.jsx)(g.eu, {
                    src: null != l ? l.getAvatarURL(void 0, 80) : null,
                    size: d._3.SIZE_80,
                    className: a ? void 0 : R.my,
                })
              : null != t
                ? (0, n.jsx)(x.Ay, {
                      mask: x.Ay.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: R.$f,
                      children: (0, n.jsx)(g.$v, { guild: t, size: g.$v.Sizes.LARGER, animate: !0 }),
                  })
                : null;
    },
    F = (e) => {
        let t,
            l,
            i,
            {
                invite: a,
                disableUser: x = !1,
                error: j,
                flatActivityCount: O = !1,
                isRegister: F = !1,
                inUnclaimedFlow: M = !1,
                showInvitedByHeader: P = !0,
                className: D,
            } = e,
            { currentUser: k } = (0, c.cf)([f.default], () => ({ currentUser: f.default.getCurrentUser() })),
            U = null != a && null != a.channel ? (0, N.OY)(a.channel) : null,
            z = (0, h.Ay)(U);
        if (null == a) return null;
        let G = null != a.guild ? (S.fh(a.guild) ? a.guild : S.DY(a.guild)) : null,
            H = null != a.target_application ? new p.Ay(a.target_application) : null,
            w = x || null == a.inviter ? null : new v.A(a.inviter),
            V =
                !(
                    (null != a.approximate_member_count && a.approximate_member_count > 100) ||
                    (null != G && G.features.has(I.GuildFeatures.COMMUNITY))
                ) && null != w,
            Y = null,
            Q = (0, u.Lt)(a.flags ?? 0, r.Q.IS_GUEST_INVITE),
            B = !1;
        if (null != G)
            P &&
                ((Y =
                    null == w
                        ? T.intl.string(T.t["3rE1P8"])
                        : T.intl.formatToPlainString(T.t["5u47va"], { username: C.Ay.getFormattedName(w) })),
                a.target_type === y.yV.STREAM &&
                    null != a.target_user &&
                    (Y = T.intl.formatToPlainString(T.t.x2L32Q, { username: C.Ay.getFormattedName(a.target_user) })),
                a.target_type === y.yV.EMBEDDED_APPLICATION &&
                    null != a.target_application &&
                    (Y =
                        null != w
                            ? T.intl.formatToPlainString(T.t.UW1Cav, { username: C.Ay.getFormattedName(w) })
                            : T.intl.string(T.t.ENSuN3))),
                V && null == H && (t = (0, n.jsx)(g.$v, { className: R.Kk, guild: G, size: g.$v.Sizes.SMALL })),
                (l = G.name),
                null != H &&
                    ((l = H.name),
                    (i = (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(g.tK, { className: R.R9, children: T.intl.string(T.t["3gg9fF"]) }),
                            (0, n.jsxs)("div", {
                                className: R.bo,
                                children: [
                                    (0, n.jsx)(g.$v, { guild: G, size: g.$v.Sizes.SMALL }),
                                    (0, n.jsx)(o.E, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: R.Al,
                                        children: G.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != U) {
            if (null == w) throw Error("no inviter in group DM invite");
            let e = C.Ay.getFormattedName(w);
            null != z && "" !== z
                ? ((Y = T.intl.formatToPlainString(T.t["5u47va"], { username: e })),
                  (l = z),
                  null != U.icon && (t = (0, n.jsx)(g.F4, { channel: U, size: d._3.SIZE_32 })))
                : ((Y = T.intl.string(T.t.OsdY8B)), (l = e));
        } else if (null != w) {
            let e = C.Ay.getFormattedName(w, !0);
            (l = T.intl.formatToPlainString(T.t["4aF92R"], { username: e })),
                (B = !0),
                (i =
                    null != j
                        ? null
                        : (0, n.jsx)(g.tK, {
                              className: R.b$,
                              children: F
                                  ? T.intl.format(T.t["6r4JiR"], { username: e })
                                  : T.intl.format(T.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, n.jsxs)(m.B, {
            direction: "vertical",
            gap: 8,
            className: s()(R.kL, D),
            justify: "center",
            align: "center",
            children: [
                (0, n.jsx)(b, { application: H, guild: G, user: V ? w : null, compact: B }),
                null != j
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(g.tK, { children: T.intl.string(T.t.mDFGFj) }),
                              (0, n.jsx)(g.hE, { children: j }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              null != Y ? (0, n.jsx)(g.tK, { children: Y }) : null,
                              (0, n.jsxs)(g.hE, {
                                  className: R.DD,
                                  children: [
                                      null != G
                                          ? (0, n.jsx)(A.A, { guild: G, className: R.n2, tooltipPosition: "left" })
                                          : null,
                                      t,
                                      l,
                                  ],
                              }),
                          ],
                      }),
                i,
                (0, n.jsxs)(m.B, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, n.jsx)(m.B, {
                            direction: "vertical",
                            gap: 4,
                            children:
                                null != H || B || a?.guild?.id === L.TA
                                    ? null
                                    : (0, n.jsx)(g.R1, {
                                          online: a.approximate_presence_count,
                                          total: a.approximate_member_count,
                                          flat: O,
                                      }),
                        }),
                        (0, n.jsx)(_.A, { guild: G, roles: a.roles, className: R.Ei }),
                        M || Q || null == k ? (0, n.jsx)(g.xt, { user: k }) : (0, n.jsx)(E.L, {}),
                    ],
                }),
            ],
        });
    };
