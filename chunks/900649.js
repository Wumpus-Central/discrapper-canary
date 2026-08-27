t.r(l), t.d(l, { default: () => lu });
var s,
    n = t(477900),
    i = t(582128),
    r = t(503698),
    a = t.n(r),
    d = t(17928),
    c = t(177953),
    o = t(689175),
    u = t(793574),
    x = t(688810),
    m = t(726249),
    j = t(985925),
    h = t(624458),
    A = t(513461),
    E = t(496767),
    g = t(663997),
    f = t(844944);
function S(e) {
    let { guildId: l } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedSortOrder(l), [l]);
}
function v(e) {
    let { guildId: l, applicationStatus: t, sortOrder: s } = e,
        n = (0, d.bG)([f.A], () => f.A.getRequests(l, t), [t, l]);
    return { guildJoinRequests: i.useMemo(() => (s === A._e.TIMESTAMP_DESC ? [...n].reverse() : n), [s, n]) };
}
var N = t(786180),
    I = t(742589),
    b = t(976860),
    T = t(761640),
    R = t(808728),
    C = t(71393),
    M =
        (((s = {}).ALL_MEMBERS = "ALL_MEMBERS"),
        (s[(s.PENDING = A.B5.SUBMITTED)] = "PENDING"),
        (s[(s.REJECTED = A.B5.REJECTED)] = "REJECTED"),
        (s[(s.APPROVED = A.B5.APPROVED)] = "APPROVED"),
        s),
    p = t(134413),
    _ = t(939249),
    D = t(834730),
    G = t(97808),
    y = t(778712),
    L = t(789645),
    P = t(628284),
    B = t(285796),
    k = t(534890),
    U = t(821609),
    w = t(339350),
    q = t(661531),
    O = t(364522),
    F = t(821124);
function V(e) {
    let { guildId: l } = e;
    return (0, d.bG)([f.A], () => f.A.getSelectedGuildJoinRequest(l), [l]);
}
var z = t(231483),
    W = t(287809),
    X = t(31457),
    H = t(414626),
    J = t(601047),
    $ = t(273926),
    K = t(453016),
    Y = t(375708);
let Q = function (e) {
    let { guildId: l, formFields: t, user: s, showRequirements: i = !0 } = e;
    return null == (0, d.bG)([W.default], () => s ?? W.default.getCurrentUser())
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  i && (0, n.jsx)(X.fu, { icon: z.ShieldIcon, text: Y.intl.string(Y.t.v2z4c1), meetsRequirement: !0 }),
                  t.map((e, l) =>
                      (function (e, l) {
                          switch (e.field_type) {
                              case A.rX.TERMS:
                                  return (0, n.jsx)($.LK, { formField: e }, l);
                              case A.rX.TEXT_INPUT:
                                  return (0, n.jsx)(K.aS, { formField: e }, l);
                              case A.rX.PARAGRAPH:
                                  return (0, n.jsx)(J.P1, { formField: e }, l);
                              case A.rX.MULTIPLE_CHOICE:
                                  return (0, n.jsx)(H.CI, { formField: e }, l);
                          }
                      })(e, l),
                  ),
              ],
          });
};
var Z = t(123393),
    ee = t(534400),
    el = t(975732),
    et = t(889227),
    es = t(734057),
    en = t(58703),
    ei = t(935208),
    er = t(427262),
    ea = t(652215),
    ed = t(743981),
    ec = t(12803),
    eo = t(584449);
function eu(e) {
    let { icon: l, label: t, onClick: s, disabled: i } = e;
    return (0, n.jsxs)(_.D, {
        className: a()(ec.hP, { [ec.r9]: i }),
        onClick: i ? ea.tEg : s,
        "aria-label": t,
        children: [
            (0, n.jsx)(l, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            (0, n.jsx)(D.E, { variant: "text-sm/normal", color: "none", children: t }),
        ],
    });
}
function ex(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { analyticsLocations: i } = (0, x.Ay)();
    function r() {
        (0, el.openUserProfileModal)({ userId: l.id, joinRequestId: s.joinRequestId, sourceAnalyticsLocations: i });
    }
    return (0, n.jsxs)("div", {
        className: ec.op,
        children: [
            (0, n.jsxs)("div", {
                className: eo.FD,
                children: [
                    (0, n.jsx)(_.D, {
                        onClick: r,
                        className: a()(ec.vk, eo.Wn),
                        children: (0, n.jsx)(G.eu, {
                            src: l.getAvatarURL(t, 48),
                            "aria-label": l.username,
                            size: y._3.SIZE_48,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: eo.oS,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eo.K$,
                                children: [
                                    (0, n.jsx)(_.D, {
                                        onClick: r,
                                        className: ec.vk,
                                        children: (0, n.jsx)(D.E, {
                                            variant: "text-lg/medium",
                                            children: l?.globalName,
                                        }),
                                    }),
                                    (0, n.jsx)(ee.Ay, {
                                        primaryGuild: l?.primaryGuild,
                                        userId: l?.id,
                                        contextGuildId: t,
                                        badgeSize: ed.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: eo.Dz,
                                        containerClassName: eo.UL,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(_.D, {
                                onClick: r,
                                className: ec.vk,
                                children: (0, n.jsx)(D.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    children: er.Ay.getUserTag(l),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(_.D, {
                className: eo.d4,
                onClick: () => h.A.setSelectedGuildJoinRequest(t, null),
                children: (0, n.jsx)(L.P, { size: "md", color: "currentColor" }),
            }),
        ],
    });
}
function em(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        {
            approveRequest: i,
            rejectRequest: r,
            handleOpenInterview: a,
            submitting: d,
        } = (0, Z.W)(t, l.id, s.joinRequestId, s.interviewChannelId);
    return (0, n.jsxs)("div", {
        className: ec.$l,
        children: [
            (0, n.jsx)(eu, { icon: P.y, label: Y.intl.string(Y.t.BzjDQJ), onClick: i, disabled: d }),
            (0, n.jsx)(eu, { icon: B.a, label: Y.intl.string(Y.t.hDtbsz), onClick: r, disabled: d }),
            null == s.interviewChannelId &&
                (0, n.jsx)(eu, { icon: k.ChatIcon, label: Y.intl.string(Y.t.KQeYoC), onClick: a, disabled: d }),
        ],
    });
}
function ej(e) {
    let { user: l, guildId: t, joinRequest: s, label: i } = e,
        { interviewChannelId: r, applicationStatus: a } = s,
        c = (0, d.bG)([es.A], () => null != r && null != es.A.getChannel(r), [r]),
        { handleOpenInterview: o, submitting: u } = (0, Z.W)(t, l.id, s.joinRequestId, r);
    return (0, F.mf)(a) && !c
        ? null
        : (0, n.jsx)("div", {
              className: ec.a6,
              children: (0, n.jsx)(U.$, {
                  variant: "secondary",
                  size: "sm",
                  icon: k.ChatIcon,
                  text: i ?? Y.intl.string(Y.t["2simqN"]),
                  onClick: o,
                  disabled: u,
                  fullWidth: !0,
              }),
          });
}
function eh(e) {
    let { user: l, guildId: t, joinRequest: s } = e;
    return (0, n.jsxs)("div", {
        className: ec.Ik,
        children: [
            (0, n.jsx)(w.Q, { size: "lg", color: q.A.colors.STATUS_WARNING }),
            (0, n.jsx)("div", {
                className: ec.$I,
                children: (0, n.jsx)(D.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: Y.intl.string(Y.t["Vr+7eO"]),
                }),
            }),
            (0, n.jsx)(ej, { user: l, guildId: t, joinRequest: s, label: Y.intl.string(Y.t.rcqdhN) }),
        ],
    });
}
function eA(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { actionedAt: i, actionedByUser: r, rejectionReason: a } = s;
    return (0, n.jsxs)("div", {
        className: ec.Ik,
        children: [
            (0, n.jsx)(B.a, {
                size: "lg",
                color: q.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: q.A.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, n.jsxs)("div", {
                className: ec.$I,
                children: [
                    (0, n.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.bSZkla),
                    }),
                    null != r && null != i
                        ? (0, n.jsxs)("div", {
                              className: ec.Ay,
                              children: [
                                  (0, n.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.formatToPlainString(Y.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: ec.Om }),
                                  (0, n.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: (0, en.i$)(new Date(ei.default.extractTimestamp(i)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                    null != a &&
                        (0, n.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: Y.intl.formatToPlainString(Y.t.fU5PPM, { rejectionReason: a }),
                        }),
                ],
            }),
            (0, n.jsx)(ej, { user: l, guildId: t, joinRequest: s }),
        ],
    });
}
function eE(e) {
    let { user: l, guildId: t, joinRequest: s } = e,
        { actionedAt: i, actionedByUser: r } = s;
    return (0, n.jsxs)("div", {
        className: ec.Ik,
        children: [
            (0, n.jsx)(P.y, {
                size: "lg",
                color: q.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: q.A.colors.STATUS_POSITIVE_TEXT,
            }),
            (0, n.jsxs)("div", {
                className: ec.$I,
                children: [
                    (0, n.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: Y.intl.string(Y.t.aURgY2),
                    }),
                    null != r && null != i
                        ? (0, n.jsxs)("div", {
                              className: ec.Ay,
                              children: [
                                  (0, n.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.formatToPlainString(Y.t.qnimbL, {
                                          username: r.global_name ?? r.username,
                                      }),
                                  }),
                                  (0, n.jsx)("div", { className: ec.Om }),
                                  (0, n.jsx)(D.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: (0, en.i$)(new Date(ei.default.extractTimestamp(i)), "LL"),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(ej, { user: l, guildId: t, joinRequest: s }),
        ],
    });
}
function eg(e) {
    let { status: l } = e;
    switch (l) {
        case A.B5.APPROVED:
            return (0, n.jsx)(P.y, {
                size: "sm",
                color: q.A.colors.STATUS_POSITIVE_BACKGROUND,
                secondaryColor: q.A.colors.STATUS_POSITIVE_TEXT,
            });
        case A.B5.REJECTED:
            return (0, n.jsx)(B.a, {
                size: "sm",
                color: q.A.colors.BACKGROUND_BASE_LOWER,
                secondaryColor: q.A.colors.INTERACTIVE_TEXT_DEFAULT,
            });
        default:
            return null;
    }
}
function ef(e) {
    let { guildId: l, userId: t, selectedJoinRequestId: s } = e,
        r = (function (e) {
            let { guildId: l, userId: t, selectedJoinRequestId: s } = e,
                n = (0, d.bG)([f.A], () => f.A.getRequestsForUser(l, t), [l, t]);
            return (
                i.useEffect(() => {
                    null == n && h.A.fetchGuildJoinRequestsForUser(l, t);
                }, [l, t, n]),
                i.useMemo(
                    () =>
                        (n ?? [])
                            .filter((e) => e.joinRequestId !== s)
                            .slice()
                            .sort((e, l) => new Date(l.createdAt).getTime() - new Date(e.createdAt).getTime()),
                    [n, s],
                )
            );
        })({ guildId: l, userId: t, selectedJoinRequestId: s });
    return 0 === r.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(D.E, {
                      className: ec._3,
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: Y.intl.string(Y.t["hxa+G3"]),
                  }),
                  (0, n.jsx)("div", {
                      className: ec.TT,
                      children: r.map((e) =>
                          (0, n.jsxs)(
                              _.D,
                              {
                                  className: a()(ec.lj, ec.vk),
                                  onClick: () => h.A.setSelectedGuildJoinRequest(l, e),
                                  children: [
                                      (0, n.jsx)(D.E, {
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          children: (0, en.i$)(new Date(e.createdAt), "LL"),
                                      }),
                                      (0, n.jsx)(eg, { status: e.applicationStatus }),
                                  ],
                              },
                              e.joinRequestId,
                          ),
                      ),
                  }),
              ],
          });
}
function eS(e) {
    let { user: l, joinRequest: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(D.E, {
                className: ec._3,
                variant: "text-sm/medium",
                color: "text-muted",
                children: Y.intl.string(Y.t["ldCE/p"]),
            }),
            (0, n.jsxs)("div", {
                className: ec.TT,
                children: [
                    (0, n.jsxs)("div", {
                        className: ec.lj,
                        children: [
                            (0, n.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Y.intl.string(Y.t.SaDIpL),
                            }),
                            (0, n.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: (0, en.i$)(new Date(ei.default.extractTimestamp(l.id)), "LL"),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ec.lj,
                        children: [
                            (0, n.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: Y.intl.string(Y.t["Vt4cn+"]),
                            }),
                            (0, n.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: (0, en.i$)(new Date(t.createdAt), "LL"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { guildId: l } = e,
        t = V({ guildId: l }),
        { user: s } = t ?? {},
        r = i.useMemo(() => t?.formResponses ?? [], [t?.formResponses]),
        c = i.useMemo(() => (null != s ? new et.A(s) : null), [s]),
        o = (0, d.bG)([C.A], () => C.A.getGuild(l), [l]);
    return ((0, m.HU)({ subsection: Y.intl.string(Y.t.nqrK8X), location: o?.name }),
    null == t || null == o || null == c || null == s)
        ? null
        : (0, n.jsx)("section", {
              className: ec.pz,
              children: (0, n.jsx)(O.Ip, {
                  children: (0, n.jsxs)("div", {
                      className: ec.WH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: ec.Ui,
                              children: [
                                  (0, n.jsx)(ex, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.SUBMITTED &&
                                      null != t.interviewChannelId &&
                                      (0, n.jsx)(eh, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.SUBMITTED &&
                                      (0, n.jsx)(em, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.REJECTED &&
                                      (0, n.jsx)(eA, { user: c, guildId: l, joinRequest: t }),
                                  t.applicationStatus === A.B5.APPROVED &&
                                      (0, n.jsx)(eE, { user: c, guildId: l, joinRequest: t }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: a()(ec.Ui, ec.gi),
                              children: [
                                  (0, n.jsx)("div", {
                                      children: (0, n.jsx)(Q, {
                                          guildId: o.id,
                                          formFields: r,
                                          user: c,
                                          showRequirements: !1,
                                      }),
                                  }),
                                  (0, n.jsx)(eS, { guildId: l, user: c, joinRequest: t }),
                                  (0, n.jsx)(ef, { guildId: l, userId: s.id, selectedJoinRequestId: t.joinRequestId }),
                              ],
                          }),
                      ],
                  }),
              }),
          });
}
var eN = t(536637),
    eI = t.n(eN),
    eb = t(933832),
    eT = t(297264),
    eR = t(866665),
    eC = t(530005),
    eM = t(442433),
    ep = t(966327),
    e_ = t(532197),
    eD = t(800311),
    eG = t(999192),
    ey = t(307877),
    eL = t(917089);
function eP(e) {
    let l,
        t,
        { status: s } = e;
    switch (s) {
        case A.B5.REJECTED:
            (l = Y.t["7YSJ6f"]), (t = Y.t.i05OUR);
            break;
        case A.B5.APPROVED:
            (l = Y.t.bv82GS), (t = Y.t.D4OUHT);
            break;
        default:
            (l = Y.t["/wqiSv"]), (t = Y.t.o47YZs);
    }
    return (0, n.jsxs)("div", {
        className: eD.do,
        children: [
            (0, n.jsx)(eb.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: eD.AI }),
            (0, n.jsx)(eT.D, { variant: "heading-md/medium", children: Y.intl.string(l) }),
            (0, n.jsx)(D.E, { color: "text-muted", variant: "text-sm/medium", children: Y.intl.string(t) }),
        ],
    });
}
function eB(e) {
    let { sortOrder: l, currentTab: t, onSortChange: s } = e,
        i = (0, F.mf)(t) ? Y.t.Z2L8V2 : Y.t.EZ5QWL;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: ey.Yk,
            children: [
                (0, n.jsx)("th", {
                    className: eD.e4,
                    children: (0, n.jsx)(D.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Y.intl.string(Y.t.Es7n9c),
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(eD.e4, eL.QB),
                    children: (0, n.jsxs)(_.D, {
                        className: eD.KF,
                        onClick: s,
                        children: [
                            (0, n.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: Y.intl.string(i),
                            }),
                            l === A._e.TIMESTAMP_ASC
                                ? (0, n.jsx)(e_.A, { className: eD.GM, direction: e_.A.Directions.UP })
                                : (0, n.jsx)(e_.A, { className: eD.GM, direction: e_.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(eD.e4, eD.UX),
                    children: (0, n.jsx)(D.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: Y.intl.string(Y.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let ek = i.memo(function (e) {
        let { joinRequest: l, user: t } = e,
            { joinRequestId: s, guildId: r } = l,
            { analyticsLocations: a } = (0, x.Ay)(),
            d = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, el.openUserProfileModal)({ userId: t.id, joinRequestId: s, sourceAnalyticsLocations: a });
                },
                [t, s, a],
            );
        return (0, n.jsxs)("div", {
            className: eL.FD,
            children: [
                (0, n.jsx)(_.D, { className: eL.Wn, onClick: d, children: (0, n.jsx)(ep.A, { user: t }) }),
                (0, n.jsx)("div", {
                    className: eL.eg,
                    children: (0, n.jsx)(D.E, {
                        variant: "text-sm/medium",
                        children: (0, n.jsxs)(_.D, {
                            onClick: d,
                            className: eL.VW,
                            children: [
                                t.globalName,
                                (0, n.jsx)(ee.Ay, {
                                    primaryGuild: t?.primaryGuild,
                                    userId: t?.id,
                                    contextGuildId: r,
                                    containerClassName: eL.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: eL.Br,
                    children: (0, n.jsx)(D.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, n.jsx)(_.D, { onClick: d, tag: "span", children: er.Ay.getUserTag(t) }),
                    }),
                }),
            ],
        });
    }),
    eU = i.memo(function (e) {
        let { joinRequest: l, onSelect: s } = e,
            { guildId: r, createdAt: c, actionedAt: o, applicationStatus: u } = l,
            x = i.useMemo(() => new et.A(l.user), [l.user]),
            m = (0, F.mf)(u) && null != o ? new Date(ei.default.extractTimestamp(o)) : c,
            j = V({ guildId: r }),
            h = (0, d.bG)([T.Ay], () => T.Ay.getGuildSidebarState(r), [r]),
            E = h?.details.userId === x.id,
            g = (0, d.bG)([C.A], () => C.A.getGuild(r)),
            f = u === A.B5.SUBMITTED;
        return null == x
            ? null
            : (0, n.jsxs)("tr", {
                  onClick: s,
                  className: a()(eL.yF, eL.iA, { [eL.wH]: j?.joinRequestId === l.joinRequestId, [eL.qb]: E }),
                  children: [
                      (0, n.jsx)("td", { children: (0, n.jsx)(ek, { joinRequest: l, user: x }) }),
                      (0, n.jsx)("td", {
                          className: eL.QB,
                          children: (0, n.jsx)(D.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: eI()(m).format("lll"),
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: eD.UX,
                          children:
                              f &&
                              (0, n.jsx)(eR.m, {
                                  text: Y.intl.string(Y.t.x8Nn4M),
                                  children: (0, n.jsx)(_.D, {
                                      onClick: function (e) {
                                          (0, eM.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await Promise.all([
                                                      t.e("404524"),
                                                      t.e("332660"),
                                                  ]).then(t.bind(t, 772063));
                                                  return (l) => (0, n.jsx)(e, { ...l, guild: g, user: x });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: eL.x6,
                                      children: (0, n.jsx)(eC.F, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 18,
                                          height: 18,
                                      }),
                                  }),
                              }),
                      }),
                  ],
              });
    }),
    ew = () => {
        let e = `${Math.floor(50 * Math.random()) + 100}px`,
            l = `${Math.floor(50 * Math.random()) + 100}px`,
            t = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, n.jsxs)("tr", {
            className: a()(eL.yF, eL.iA),
            children: [
                (0, n.jsx)("td", {
                    children: (0, n.jsxs)("div", {
                        className: eL.FD,
                        children: [
                            (0, n.jsx)("div", { className: a()(eD.RH, eL.Wn) }),
                            (0, n.jsx)("div", {
                                className: eL.eg,
                                children: (0, n.jsx)("div", { className: eD.RC, style: { width: e } }),
                            }),
                            (0, n.jsx)("div", {
                                className: eL.Br,
                                children: (0, n.jsx)("div", { className: eD.w7, style: { width: l } }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("td", {
                    className: eL.QB,
                    children: (0, n.jsx)("div", { className: eD.RC, style: { width: t } }),
                }),
                (0, n.jsx)("td", { className: eD.UX }),
            ],
        });
    };
function eq(e) {
    let { guildId: l, currentTab: t } = e,
        s = i.useRef(null),
        r = (0, d.bG)([C.A], () => C.A.getGuild(l)),
        a = S({ guildId: l }),
        c = (0, d.bG)([f.A], () => f.A.isFetching()),
        { guildJoinRequests: u } = v({ guildId: l, applicationStatus: t, sortOrder: a }),
        { fetchNextPage: x } = (0, g.K)({ guildId: l, guildJoinRequests: u }),
        m = i.useCallback(async () => {
            let e = a === A._e.TIMESTAMP_ASC ? A._e.TIMESTAMP_DESC : A._e.TIMESTAMP_ASC;
            h.A.setSelectedSortOrder(l, e, t), await x(e, t);
        }, [a, l, x, t]);
    return null == r
        ? null
        : (0, n.jsx)("div", {
              className: eG.FV,
              children: (0, n.jsx)(o.Ch, {
                  className: eG.Hk,
                  ref: s,
                  orientation: "horizontal",
                  children: (0, n.jsxs)("table", {
                      className: eD.tp,
                      children: [
                          (0, n.jsx)(eB, { sortOrder: a, currentTab: t, onSortChange: m }),
                          (0, n.jsx)("tbody", {
                              children:
                                  0 === u.length
                                      ? c
                                          ? [, , , , ,].fill(0).map((e, l) => (0, n.jsx)(ew, {}, `placeholder-${l}`))
                                          : (0, n.jsx)("tr", {
                                                children: (0, n.jsx)("td", {
                                                    colSpan: 3,
                                                    children: (0, n.jsx)(eP, { status: t }),
                                                }),
                                            })
                                      : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                u.map((e) =>
                                                    (0, n.jsx)(
                                                        eU,
                                                        {
                                                            joinRequest: e,
                                                            onSelect: () => h.A.setSelectedGuildJoinRequest(l, e),
                                                        },
                                                        e.joinRequestId,
                                                    ),
                                                ),
                                                c &&
                                                    [, , , , ,]
                                                        .fill(0)
                                                        .map((e, l) => (0, n.jsx)(ew, {}, `placeholder-${l}`)),
                                            ],
                                        }),
                          }),
                      ],
                  }),
              }),
          });
}
var eO = t(465917),
    eF = t(3666),
    eV = t(462887),
    ez = t(980707),
    eW = t(477782),
    eX = t(922016),
    eH = t(761508),
    eJ = t(900797),
    e$ = t(847374),
    eK = t(770178),
    eY = t(765548),
    eQ = t(736653),
    eZ = t(791046);
function e0(e) {
    let { tabs: l, selectedTab: t, onTabSelect: s, onClose: i } = e;
    return (0, n.jsx)(ez.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": Y.intl.string(Y.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            eW.rX,
            {
                children: l.map((e) => {
                    let { id: l, label: i } = e;
                    return (0, n.jsx)(
                        eW.Dr,
                        {
                            id: l,
                            label: i,
                            icon: l === t ? P.y : void 0,
                            leadingAccessory: l === t ? { type: "icon", icon: P.y } : void 0,
                            action: () => s(l),
                        },
                        l,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
}
function e7(e) {
    let { onTabSelect: l, tabs: t, selectedTab: s } = e,
        r = i.useRef(null),
        d = (0, eQ.Ay)(),
        c = (0, eV.M)(d),
        o = i.useMemo(
            () =>
                null !=
                t.find((e) => {
                    let { id: l } = e;
                    return l === s;
                }),
            [s, t],
        ),
        u = o ? "text-strong" : c ? "text-muted" : "text-strong",
        x = o ? q.A.colors.TEXT_STRONG : c ? q.A.colors.TEXT_MUTED : q.A.colors.TEXT_STRONG;
    return (0, n.jsx)(eX.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(e0, { selectedTab: s, onClose: i, tabs: t, onTabSelect: l });
        },
        position: "bottom",
        align: "left",
        children: (e, l) => {
            let { isShown: t } = l;
            return (0, n.jsxs)(eH.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(eZ.OS, { [eZ.wH]: o }),
                "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                children: [
                    (0, n.jsx)(D.E, { variant: "text-md/medium", color: u, children: Y.intl.string(Y.t["UKOtz+"]) }),
                    t ? (0, n.jsx)(eJ.t, { size: "sm", color: x }) : (0, n.jsx)(e$.a, { size: "sm", color: x }),
                ],
            });
        },
    });
}
function e4(e) {
    var l;
    let { guildId: t, currentTab: s, onTabSelect: r } = e,
        [a, c] = i.useState(0),
        o = i.useRef(null),
        u = i.useRef(a),
        x =
            ((l = (0, N.H)({ guildId: t }) ?? 0),
            [
                { id: M.ALL_MEMBERS, label: Y.intl.string(Y.t.NOOm1Z) },
                {
                    id: M.PENDING,
                    label:
                        l > 0 ? Y.intl.formatToPlainString(Y.t["Wo+zL0"], { count: l }) : Y.intl.string(Y.t["4eQVBO"]),
                },
                { id: M.REJECTED, label: Y.intl.string(Y.t.bSZkla) },
                { id: M.APPROVED, label: Y.intl.string(Y.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: m,
            onItemLayout: j,
            overflowItemsRef: h,
        } = (0, eF.Wv)({ items: x, itemGapPx: 16, maxLines: 1, containerWidth: a - 200 }),
        A = (0, d.bG)([T.Ay], () => null != T.Ay.getGuildSidebarState(t), [t]),
        E = V({ guildId: t }),
        g = i.useMemo(() => !!A || (s !== M.ALL_MEMBERS && null != E && null != E.user), [s, A, E]),
        f = i.useMemo(() => x.slice(0, m + 1), [m, x]),
        S = i.useMemo(() => x.slice(m + 1), [m, x]),
        v = (0, eY.A)((e) => {
            let l = e.contentRect.width;
            null != l && u.current !== l && (c(l), (u.current = l));
        });
    return (
        (0, eK.g)(o, v, [g]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(I.A.Divider, { className: eZ.yF }),
                (0, n.jsxs)("div", {
                    className: eZ.oB,
                    ref: o,
                    children: [
                        (0, n.jsxs)("div", {
                            className: eZ.Kk,
                            children: [
                                x.map((e, l) =>
                                    (0, n.jsx)(
                                        eF.Ae,
                                        {
                                            index: l,
                                            onItemLayout: j,
                                            children: (0, n.jsx)(eH.V.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, n.jsx)("div", {
                                    ref: h,
                                    children: (0, n.jsx)(e7, { tabs: S, onTabSelect: r, selectedTab: s }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(eH.V, {
                            "aria-label": Y.intl.string(Y.t.tcvVXM),
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: r,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(eH.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== S.length ? (0, n.jsx)(e7, { tabs: S, onTabSelect: r, selectedTab: s }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var e5 = t(754744),
    e8 = t(138298);
function e2(e) {
    let { guildId: l } = e,
        t = (0, d.bG)([C.A], () => C.A.getGuild(l)),
        { analyticsLocations: s } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        r = (0, d.bG)([T.Ay], () => T.Ay.getGuildSidebarState(l), [l]),
        a = i.useCallback(() => {
            e8.A.closeGuildSidebar(l);
        }, [l]),
        c = null != r;
    return null != t && c && null != r
        ? (0, n.jsx)(x.f5, {
              value: s,
              children: (0, n.jsx)("div", {
                  className: eZ.__invalid_sidebarContainer,
                  style: { width: ea.da6 },
                  children: (0, n.jsx)(e5.default, {
                      userId: r.details.userId,
                      guildId: r.details.guildId,
                      onClose: a,
                  }),
              }),
          })
        : null;
}
var e3 = t(856768),
    e9 = t(221877),
    e6 = t(702841),
    e1 = t(717421),
    le = t(144073),
    ll = t(151781),
    lt = t(189552),
    ls = t(872238),
    ln = t(749060),
    li = t(779545);
function lr(e) {
    let { guild: l } = e,
        t = (0, le.Ms)(l.id),
        s = (0, e1.z)({ height: 3 * !!t, config: e9.config.stiff });
    return (0, n.jsx)("div", {
        className: eG.NQ,
        children: (0, n.jsx)(e9.animated.div, { className: eG.b0, style: s }),
    });
}
function la(e) {
    let { guild: l, className: t, onPageChange: s, onMemberSelect: r } = e,
        d = l.id,
        c = (0, e6.bG)([ll.A], () => ll.A.getEstimatedMemberSearchCountByGuildId(d), [d]),
        u = (0, le.Ms)(d),
        x = (0, le.Wl)(d),
        m = i.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        j = (0, lt.ii)(x, u, c),
        h = i.useRef(null),
        A = i.useRef(null),
        E = i.useCallback(() => {
            h.current?.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: a()(eG.FV, t),
        children: (0, n.jsxs)(o.Ch, {
            className: eG.Hk,
            ref: A,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(li.A, { guild: l, ref: h }),
                (0, n.jsx)(lr, { guild: l }),
                (0, n.jsx)(ls.A, { guild: l, onSelectRow: m, searchState: j, onResetForNewMembers: E }),
                j !== lt.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(ln.A, { guildId: l.id, onPageChange: s }),
            ],
        }),
    });
}
var ld = t(746080),
    lc = t(999900);
function lo(e) {
    let { guild: l, currentTab: t, onTabSelect: s } = e,
        i = (0, E.W)(l.id),
        r = Y.intl.string(Y.t.oclz3Z),
        a = Y.intl.string(Y.t.oclz3Z);
    return (
        (0, m.HU)({ location: l.name, subsection: r }),
        (0, n.jsxs)(I.A, {
            className: eZ.wx,
            innerClassname: eZ.__invalid_innerHeader,
            channelId: ld.VV.MEMBER_SAFETY,
            guildId: l.id,
            hideSearch: !0,
            children: [
                (0, n.jsx)(I.A.Icon, { icon: c.n, "aria-hidden": !0 }),
                (0, n.jsx)(I.A.Title, { children: a }),
                i && (0, n.jsx)(e4, { guildId: l.id, currentTab: t, onTabSelect: s }),
            ],
        })
    );
}
function lu(e) {
    let { guildId: l } = e,
        t = (0, N.H)({ guildId: l }) ?? 0,
        [s, r] = i.useState(t > 0 ? M.PENDING : M.ALL_MEMBERS),
        c = (0, d.bG)([C.A], () => C.A.getGuild(l)),
        { analyticsLocations: m } = (0, x.Ay)(u.A.MEMBER_SAFETY_PAGE),
        E = S({ guildId: l }),
        { guildJoinRequests: f } = v({
            guildId: l,
            applicationStatus: "ALL_MEMBERS" === s ? A.B5.SUBMITTED : s,
            sortOrder: E,
        });
    i.useEffect(() => {
        c?.features.has(ea.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) || r(M.ALL_MEMBERS);
    }, [c]);
    let I = (0, p.fw)(l),
        _ = (0, j.q)(l),
        D = i.useRef(null),
        { fetchNextPage: G } = (0, g.K)({ guildId: l, guildJoinRequests: f }),
        y = i.useCallback(async () => {
            if (s === M.ALL_MEMBERS) return;
            let e = D.current?.getScrollerState();
            null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 200 && (await G(E, s)));
        }, [s, s, E, G]),
        L = i.useCallback(
            async (e) => {
                s === e || (r(e), h.A.setSelectedGuildJoinRequest(l, null), "ALL_MEMBERS" !== e && (await G(E, e)));
            },
            [s, l, G, E],
        );
    i.useEffect(() => {
        if (!I && null != c) {
            let e = R.Ay.getDefaultChannel(c.id)?.id;
            (0, b.uh)(c.id, e);
        }
    }, [c, I]);
    let P = (0, d.bG)([T.Ay], () => null != T.Ay.getGuildSidebarState(l), [l]);
    return null != c && I
        ? (0, n.jsxs)(x.f5, {
              value: m,
              children: [
                  (0, n.jsxs)("div", {
                      className: a()(lc.TE, eZ.MY, { [lc.js]: P }),
                      children: [
                          (0, n.jsx)(lo, { guild: c, currentTab: s, onTabSelect: L }),
                          (0, n.jsx)(o.Ch, {
                              onScroll: y,
                              ref: D,
                              orientation: "vertical",
                              children: (0, n.jsx)("div", {
                                  className: a()(lc.Qs, eZ.kL),
                                  children:
                                      null == c
                                          ? null
                                          : s === M.ALL_MEMBERS
                                            ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(eO.A, { guild: c }),
                                                      (0, n.jsx)(la, { guild: c }),
                                                  ],
                                              })
                                            : (0, n.jsx)(eq, { guildId: c.id, currentTab: s }),
                              }),
                          }),
                          (0, n.jsx)(e3.A, { guildId: c.id }),
                      ],
                  }),
                  _ &&
                      (null == c
                          ? null
                          : P
                            ? (0, n.jsx)(e2, { guildId: c.id })
                            : s === M.ALL_MEMBERS
                              ? null
                              : (0, n.jsx)(ev, { guildId: c.id })),
              ],
          })
        : null;
}
