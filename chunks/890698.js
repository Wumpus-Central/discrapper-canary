l.d(t, { A: () => R, M: () => L }), l(938796);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(821418),
    c = l(665260),
    u = l(311907),
    d = l(397927),
    o = l(854378),
    m = l(573435),
    g = l(769015),
    x = l(714991),
    h = l(24215),
    j = l(897288),
    A = l(611010),
    p = l(95701),
    _ = l(427157),
    E = l(287809),
    N = l(860689),
    v = l(427262),
    f = l(652215),
    S = l(330936),
    C = l(172799),
    I = l(985018),
    T = l(4370);
let L = () =>
        (0, n.jsxs)(i.Fragment, {
            children: [
                (0, n.jsx)(o.eu, { src: null, size: d._3J.DEPRECATED_SIZE_100, className: T.my }),
                (0, n.jsx)(o.tK, { children: I.intl.string(I.t["3rE1P8"]) }),
                (0, n.jsx)(o.hE, { className: T.RG, children: I.intl.string(I.t.ZTNur7) }),
            ],
        }),
    y = (e) => {
        let { guild: t, user: l, application: i, compact: a } = e;
        return null != i
            ? (0, n.jsx)(g.A, { className: T.Z2, game: i, size: T.q6 })
            : null != l
              ? (0, n.jsx)(o.eu, {
                    src: null != l ? l.getAvatarURL(void 0, 80) : null,
                    size: d._3J.SIZE_80,
                    className: a ? void 0 : T.my,
                })
              : null != t
                ? (0, n.jsx)(m.Ay, {
                      mask: m.Ay.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: T.$f,
                      children: (0, n.jsx)(o.$v, { guild: t, size: o.$v.Sizes.LARGER, animate: !0 }),
                  })
                : null;
    },
    R = (e) => {
        let t,
            l,
            i,
            {
                invite: a,
                disableUser: m = !1,
                error: g,
                flatActivityCount: L = !1,
                isRegister: R = !1,
                inUnclaimedFlow: O = !1,
                showInvitedByHeader: b = !0,
                className: M,
            } = e,
            { currentUser: F } = (0, u.cf)([E.default], () => ({ currentUser: E.default.getCurrentUser() }));
        if (null == a) return null;
        let D = null != a.guild ? (N.fh(a.guild) ? a.guild : N.DY(a.guild)) : null,
            P = null != a.channel ? (0, p.OY)(a.channel) : null,
            k = null != a.target_application ? new A.Ay(a.target_application) : null,
            z = m || null == a.inviter ? null : new _.A(a.inviter),
            H =
                !(
                    (null != a.approximate_member_count && a.approximate_member_count > 100) ||
                    (null != D && D.features.has(f.GuildFeatures.COMMUNITY))
                ) && null != z,
            U = null,
            G = (0, c.Lt)(a.flags ?? 0, r.Q.IS_GUEST_INVITE),
            w = !1;
        if (null != D)
            b &&
                ((U =
                    null == z
                        ? I.intl.string(I.t["3rE1P8"])
                        : I.intl.formatToPlainString(I.t["5u47va"], { username: v.Ay.getFormattedName(z) })),
                a.target_type === C.yV.STREAM &&
                    null != a.target_user &&
                    (U = I.intl.formatToPlainString(I.t.x2L32Q, { username: v.Ay.getFormattedName(a.target_user) })),
                a.target_type === C.yV.EMBEDDED_APPLICATION &&
                    null != a.target_application &&
                    (U =
                        null != z
                            ? I.intl.formatToPlainString(I.t.UW1Cav, { username: v.Ay.getFormattedName(z) })
                            : I.intl.string(I.t.ENSuN3))),
                H && null == k && (t = (0, n.jsx)(o.$v, { className: T.Kk, guild: D, size: o.$v.Sizes.SMALL })),
                (l = D.name),
                null != k &&
                    ((l = k.name),
                    (i = (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(o.tK, { className: T.R9, children: I.intl.string(I.t["3gg9fF"]) }),
                            (0, n.jsxs)("div", {
                                className: T.bo,
                                children: [
                                    (0, n.jsx)(o.$v, { guild: D, size: o.$v.Sizes.SMALL }),
                                    (0, n.jsx)(d.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: T.Al,
                                        children: D.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != P) {
            if (null == z) throw Error("no inviter in group DM invite");
            let e = v.Ay.getFormattedName(z);
            null != P.name && "" !== P.name
                ? ((U = I.intl.formatToPlainString(I.t["5u47va"], { username: e })),
                  (l = P.name),
                  null != P.icon && (t = (0, n.jsx)(o.F4, { channel: P, size: d._3J.SIZE_32 })))
                : ((U = I.intl.string(I.t.OsdY8B)), (l = e));
        } else if (null != z) {
            let e = v.Ay.getFormattedName(z, !0);
            (l = I.intl.formatToPlainString(I.t["4aF92R"], { username: e })),
                (w = !0),
                (i =
                    null != g
                        ? null
                        : (0, n.jsx)(o.tK, {
                              className: T.b$,
                              children: R
                                  ? I.intl.format(I.t["6r4JiR"], { username: e })
                                  : I.intl.format(I.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, n.jsxs)(d.BJc, {
            direction: "vertical",
            gap: 8,
            className: s()(T.kL, M),
            justify: "center",
            align: "center",
            children: [
                (0, n.jsx)(y, { application: k, guild: D, user: H ? z : null, compact: w }),
                null != g
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.tK, { children: I.intl.string(I.t.mDFGFj) }),
                              (0, n.jsx)(o.hE, { children: g }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              null != U ? (0, n.jsx)(o.tK, { children: U }) : null,
                              (0, n.jsxs)(o.hE, {
                                  className: T.DD,
                                  children: [
                                      null != D
                                          ? (0, n.jsx)(x.A, { guild: D, className: T.n2, tooltipPosition: "left" })
                                          : null,
                                      t,
                                      l,
                                  ],
                              }),
                          ],
                      }),
                i,
                (0, n.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, n.jsx)(d.BJc, {
                            direction: "vertical",
                            gap: 4,
                            children:
                                null != k || w || a?.guild?.id === S.TA
                                    ? null
                                    : (0, n.jsx)(o.R1, {
                                          online: a.approximate_presence_count,
                                          total: a.approximate_member_count,
                                          flat: L,
                                      }),
                        }),
                        (0, n.jsx)(j.A, { guild: D, roles: a.roles, className: T.Ei }),
                        O || G || null == F ? (0, n.jsx)(o.xt, { user: F }) : (0, n.jsx)(h.L, {}),
                    ],
                }),
            ],
        });
    };
