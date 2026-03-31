"use strict";
n.d(t, { A: () => R, M: () => y }), n(938796);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821418),
    o = n(665260),
    d = n(311907),
    c = n(397927),
    u = n(854378),
    h = n(573435),
    _ = n(769015),
    p = n(714991),
    g = n(24215),
    m = n(897288),
    A = n(611010),
    f = n(95701),
    E = n(427157),
    x = n(287809),
    I = n(860689),
    N = n(427262),
    v = n(652215),
    j = n(330936),
    S = n(172799),
    T = n(985018),
    C = n(4370);
let y = () =>
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(u.eu, { src: null, size: c._3J.DEPRECATED_SIZE_100, className: C.my }),
                (0, i.jsx)(u.tK, { children: T.intl.string(T.t["3rE1P8"]) }),
                (0, i.jsx)(u.hE, { className: C.RG, children: T.intl.string(T.t.ZTNur7) }),
            ],
        }),
    b = (e) => {
        let { guild: t, user: n, application: s, compact: r } = e;
        return null != s
            ? (0, i.jsx)(_.A, { className: C.Z2, game: s, size: C.q6 })
            : null != n
              ? (0, i.jsx)(u.eu, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: c._3J.SIZE_80,
                    className: r ? void 0 : C.my,
                })
              : null != t
                ? (0, i.jsx)(h.Ay, {
                      mask: h.Ay.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: C.$f,
                      children: (0, i.jsx)(u.$v, { guild: t, size: u.$v.Sizes.LARGER, animate: !0 }),
                  })
                : null;
    },
    R = (e) => {
        let t,
            n,
            s,
            {
                invite: r,
                disableUser: h = !1,
                error: _,
                flatActivityCount: y = !1,
                isRegister: R = !1,
                inUnclaimedFlow: O = !1,
                showInvitedByHeader: L = !0,
                className: w,
            } = e,
            { currentUser: k } = (0, d.cf)([x.default], () => ({ currentUser: x.default.getCurrentUser() }));
        if (null == r) return null;
        let D = null != r.guild ? (I.fh(r.guild) ? r.guild : I.DY(r.guild)) : null,
            U = null != r.channel ? (0, f.OY)(r.channel) : null,
            P = null != r.target_application ? new A.Ay(r.target_application) : null,
            B = h || null == r.inviter ? null : new E.A(r.inviter),
            G =
                !(
                    (null != r.approximate_member_count && r.approximate_member_count > 100) ||
                    (null != D && D.features.has(v.GuildFeatures.COMMUNITY))
                ) && null != B,
            F = null,
            M = (0, o.Lt)(r.flags ?? 0, a.Q.IS_GUEST_INVITE),
            V = !1;
        if (null != D)
            L &&
                ((F =
                    null == B
                        ? T.intl.string(T.t["3rE1P8"])
                        : T.intl.formatToPlainString(T.t["5u47va"], { username: N.Ay.getFormattedName(B) })),
                r.target_type === S.yV.STREAM &&
                    null != r.target_user &&
                    (F = T.intl.formatToPlainString(T.t.x2L32Q, { username: N.Ay.getFormattedName(r.target_user) })),
                r.target_type === S.yV.EMBEDDED_APPLICATION &&
                    null != r.target_application &&
                    (F =
                        null != B
                            ? T.intl.formatToPlainString(T.t.UW1Cav, { username: N.Ay.getFormattedName(B) })
                            : T.intl.string(T.t.ENSuN3))),
                G && null == P && (t = (0, i.jsx)(u.$v, { className: C.Kk, guild: D, size: u.$v.Sizes.SMALL })),
                (n = D.name),
                null != P &&
                    ((n = P.name),
                    (s = (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(u.tK, { className: C.R9, children: T.intl.string(T.t["3gg9fF"]) }),
                            (0, i.jsxs)("div", {
                                className: C.bo,
                                children: [
                                    (0, i.jsx)(u.$v, { guild: D, size: u.$v.Sizes.SMALL }),
                                    (0, i.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: C.Al,
                                        children: D.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != U) {
            if (null == B) throw Error("no inviter in group DM invite");
            let e = N.Ay.getFormattedName(B);
            null != U.name && "" !== U.name
                ? ((F = T.intl.formatToPlainString(T.t["5u47va"], { username: e })),
                  (n = U.name),
                  null != U.icon && (t = (0, i.jsx)(u.F4, { channel: U, size: c._3J.SIZE_32 })))
                : ((F = T.intl.string(T.t.OsdY8B)), (n = e));
        } else if (null != B) {
            let e = N.Ay.getFormattedName(B, !0);
            (n = T.intl.formatToPlainString(T.t["4aF92R"], { username: e })),
                (V = !0),
                (s =
                    null != _
                        ? null
                        : (0, i.jsx)(u.tK, {
                              className: C.b$,
                              children: R
                                  ? T.intl.format(T.t["6r4JiR"], { username: e })
                                  : T.intl.format(T.t.Quj7HX, { username: e }),
                          }));
        }
        return (0, i.jsxs)(c.BJc, {
            direction: "vertical",
            gap: 8,
            className: l()(C.kL, w),
            justify: "center",
            align: "center",
            children: [
                (0, i.jsx)(b, { application: P, guild: D, user: G ? B : null, compact: V }),
                null != _
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.tK, { children: T.intl.string(T.t.mDFGFj) }),
                              (0, i.jsx)(u.hE, { children: _ }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != F ? (0, i.jsx)(u.tK, { children: F }) : null,
                              (0, i.jsxs)(u.hE, {
                                  className: C.DD,
                                  children: [
                                      null != D
                                          ? (0, i.jsx)(p.A, { guild: D, className: C.n2, tooltipPosition: "left" })
                                          : null,
                                      t,
                                      n,
                                  ],
                              }),
                          ],
                      }),
                s,
                (0, i.jsxs)(c.BJc, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, i.jsx)(c.BJc, {
                            direction: "vertical",
                            gap: 4,
                            children:
                                null != P || V || r?.guild?.id === j.TA
                                    ? null
                                    : (0, i.jsx)(u.R1, {
                                          online: r.approximate_presence_count,
                                          total: r.approximate_member_count,
                                          flat: y,
                                      }),
                        }),
                        (0, i.jsx)(m.A, { guild: D, roles: r.roles, className: C.Ei }),
                        O || M || null == k ? (0, i.jsx)(u.xt, { user: k }) : (0, i.jsx)(g.L, {}),
                    ],
                }),
            ],
        });
    };
