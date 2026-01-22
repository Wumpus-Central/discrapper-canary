n.d(t, {
    A: () => w,
    M: () => T,
}),
    n(938796),
    n(65821);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(821418),
    o = n(665260),
    c = n(311907),
    u = n(397927),
    d = n(444316),
    h = n(854378),
    f = n(573435),
    p = n(769015),
    g = n(714991),
    m = n(24215),
    A = n(897288),
    x = n(611010),
    _ = n(95701),
    E = n(427157),
    b = n(287809),
    v = n(860689),
    j = n(427262),
    y = n(652215),
    S = n(330936),
    N = n(172799),
    O = n(985018),
    I = n(132852);
let T = () =>
        (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(h.eu, {
                    src: null,
                    size: u._3J.DEPRECATED_SIZE_100,
                    className: I.my,
                }),
                (0, r.jsx)(h.tK, {
                    children: O.intl.string(O.t["3rE1P8"]),
                }),
                (0, r.jsx)(h.hE, {
                    className: I.RG,
                    children: O.intl.string(O.t.ZTNur7),
                }),
            ],
        }),
    C = (e) => {
        let { guild: t, user: n, application: i, compact: s } = e;
        return null != i
            ? (0, r.jsx)(p.A, {
                  className: I.Z2,
                  game: i,
                  size: I.q6,
              })
            : null != n
              ? (0, r.jsx)(h.eu, {
                    src: null != n ? n.getAvatarURL(void 0, 80) : null,
                    size: u._3J.SIZE_80,
                    className: s ? void 0 : I.my,
                })
              : null != t
                ? (0, r.jsx)(f.Ay, {
                      mask: f.Ay.Masks.SQUIRCLE,
                      width: 64,
                      height: 64,
                      className: I.$f,
                      children: (0, r.jsx)(h.$v, {
                          guild: t,
                          size: h.$v.Sizes.LARGER,
                          animate: !0,
                      }),
                  })
                : null;
    },
    R = (e) =>
        (0, r.jsx)(u.Text, {
            tag: "span",
            className: e.className,
            variant: "text-sm/medium",
            color: "text-subtle",
            children: e.children,
        }),
    w = (e) => {
        var t, n;
        let i,
            s,
            f,
            {
                invite: p,
                disableUser: T = !1,
                error: w,
                flatActivityCount: P = !1,
                isRegister: L = !1,
                inUnclaimedFlow: k = !1,
                friendMemberIds: D = [],
                showInvitedByHeader: B = !0,
                className: U,
            } = e,
            { currentUser: G } = (0, c.cf)([b.default], () => ({
                currentUser: b.default.getCurrentUser(),
            }));
        if (null == p) return null;
        let M = null != D && D.length > 0,
            F = null != p.guild ? (v.fh(p.guild) ? p.guild : v.DY(p.guild)) : null,
            V = null != p.channel ? (0, _.OY)(p.channel) : null,
            W = null != p.target_application ? new x.Ay(p.target_application) : null,
            H = T || null == p.inviter ? null : new E.A(p.inviter),
            K =
                !(
                    (null != p.approximate_member_count && p.approximate_member_count > 100) ||
                    (null != F && F.features.has(y.GuildFeatures.COMMUNITY))
                ) && null != H,
            Q = null,
            z = (0, o.Lt)(null != (t = p.flags) ? t : 0, a.Q.IS_GUEST_INVITE),
            q = !1;
        if (null != F)
            B &&
                ((Q =
                    null == H
                        ? O.intl.string(O.t["3rE1P8"])
                        : O.intl.formatToPlainString(O.t["5u47va"], {
                              username: j.Ay.getFormattedName(H),
                          })),
                p.target_type === N.yV.STREAM &&
                    null != p.target_user &&
                    (Q = O.intl.formatToPlainString(O.t.x2L32Q, {
                        username: j.Ay.getFormattedName(p.target_user),
                    })),
                p.target_type === N.yV.EMBEDDED_APPLICATION &&
                    null != p.target_application &&
                    (Q =
                        null != H
                            ? O.intl.formatToPlainString(O.t.UW1Cav, {
                                  username: j.Ay.getFormattedName(H),
                              })
                            : O.intl.string(O.t.ENSuN3))),
                K &&
                    null == W &&
                    (i = (0, r.jsx)(h.$v, {
                        className: I.Kk,
                        guild: F,
                        size: h.$v.Sizes.SMALL,
                    })),
                (s = F.name),
                null != W &&
                    ((s = W.name),
                    (f = (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(h.tK, {
                                className: I.R9,
                                children: O.intl.string(O.t["3gg9fF"]),
                            }),
                            (0, r.jsxs)("div", {
                                className: I.bo,
                                children: [
                                    (0, r.jsx)(h.$v, {
                                        guild: F,
                                        size: h.$v.Sizes.SMALL,
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        tag: "span",
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        className: I.Al,
                                        children: F.name,
                                    }),
                                ],
                            }),
                        ],
                    })));
        else if (null != V) {
            if (null == H) throw Error("no inviter in group DM invite");
            let e = j.Ay.getFormattedName(H);
            null != V.name && "" !== V.name
                ? ((Q = O.intl.formatToPlainString(O.t["5u47va"], {
                      username: e,
                  })),
                  (s = V.name),
                  null != V.icon &&
                      (i = (0, r.jsx)(h.F4, {
                          channel: V,
                          size: u._3J.SIZE_32,
                      })))
                : ((Q = O.intl.string(O.t.OsdY8B)), (s = e));
        } else if (null != H) {
            let e = j.Ay.getFormattedName(H, !0);
            (s = O.intl.formatToPlainString(O.t["4aF92R"], {
                username: e,
            })),
                (q = !0),
                (f =
                    null != w
                        ? null
                        : (0, r.jsx)(h.tK, {
                              className: I.b$,
                              children: L
                                  ? O.intl.format(O.t["6r4JiR"], {
                                        username: e,
                                    })
                                  : O.intl.format(O.t.Quj7HX, {
                                        username: e,
                                    }),
                          }));
        }
        return (0, r.jsxs)(u.BJc, {
            direction: "vertical",
            gap: 8,
            className: l()(I.kL, U),
            justify: "center",
            align: "center",
            children: [
                (0, r.jsx)(C, {
                    application: W,
                    guild: F,
                    user: K ? H : null,
                    compact: q,
                }),
                null != w
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.tK, {
                                  children: O.intl.string(O.t.mDFGFj),
                              }),
                              (0, r.jsx)(h.hE, {
                                  children: w,
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != Q
                                  ? (0, r.jsx)(h.tK, {
                                        children: Q,
                                    })
                                  : null,
                              (0, r.jsxs)(h.hE, {
                                  className: I.DD,
                                  children: [
                                      null != F
                                          ? (0, r.jsx)(g.A, {
                                                guild: F,
                                                className: I.n2,
                                                tooltipPosition: "left",
                                            })
                                          : null,
                                      i,
                                      s,
                                  ],
                              }),
                          ],
                      }),
                f,
                (0, r.jsxs)(u.BJc, {
                    direction: "vertical",
                    gap: 24,
                    children: [
                        (0, r.jsxs)(u.BJc, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                null != W || q || (null == p || null == (n = p.guild) ? void 0 : n.id) === S.TA
                                    ? null
                                    : (0, r.jsx)(h.R1, {
                                          online: p.approximate_presence_count,
                                          total: p.approximate_member_count,
                                          flat: P,
                                          renderText: M ? R : void 0,
                                      }),
                                M &&
                                    (0, r.jsx)(d.A, {
                                        friendMemberIds: D,
                                    }),
                            ],
                        }),
                        (0, r.jsx)(A.A, {
                            guild: F,
                            roles: p.roles,
                            className: I.Ei,
                        }),
                        k || z || null == G
                            ? (0, r.jsx)(h.xt, {
                                  user: G,
                              })
                            : (0, r.jsx)(m.L, {}),
                    ],
                }),
            ],
        });
    };
