n.d(t, { A: () => r8 });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(789645),
    o = n(672929),
    u = n(58736),
    d = n(948230),
    c = n(277977),
    m = n(289873),
    f = n(821609),
    h = n(627363),
    g = n(580954),
    x = n(297264),
    p = n(834730),
    v = n(625180),
    b = n(91242),
    j = n(812901),
    y = n(317608),
    k = n(206600),
    w = n(869146),
    N = n(742023),
    A = n(697744),
    E = n(50617),
    S = n(375708),
    C = n(296167);
function I(e) {
    let { className: t } = e,
        { Component: n, events: r, getDuration: i } = (0, A.c)();
    return (
        a.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != i()) ? r.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [r, i]),
        a.useEffect(() => {
            let e = setInterval(r.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [r]),
        (0, l.jsxs)("div", {
            className: t,
            onMouseEnter: r.onMouseEnter,
            onMouseLeave: r.onMouseLeave,
            children: [
                (0, l.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, l.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: C.o,
                    children: S.intl.string(E.default.jTuX7C),
                }),
            ],
        })
    );
}
var M = n(328284);
function T(e) {
    let { title: t, body: n, wide: a = !1, children: r } = e;
    return (0, l.jsxs)("div", {
        className: i()(M.Bf, a && M.Qx),
        children: [
            (0, l.jsxs)("div", {
                className: M.Ux,
                children: [
                    (0, l.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, l.jsx)(p.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            r,
        ],
    });
}
var R = n(652215),
    P = n(165610),
    _ = n(963691);
function L(e) {
    let { applicationId: t, surface: n } = e,
        { frame: r, state: i } = (0, k.A)({ applicationId: t, surface: n }),
        s = (0, P.VA)(t, n);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(R.MLl.ACTIVITY_POPOUT)) return;
                    let n = b.A.getMainFrame()?.id === e;
                    t.intent === P.sV.MAIN
                        ? (n || v.A.promoteFrame(e), v.A.resetFrameLayoutModes(e))
                        : n && v.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, P.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        N.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === P.sV.INLINE && v.A.promoteFrame(s),
                              v.A.updateFrameLayoutMode({ frameId: s, layoutMode: P.y0.PIP }))
                            : e.intent === P.sV.MAIN && v.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case k.n.Launched:
            return (0, l.jsx)(y.A, { frameId: r.id, level: j.A.WithinAppContent, className: _.Z7 });
        case k.n.RenderingElsewhere:
            return (0, l.jsx)("div", {
                className: _.qs,
                children: (0, l.jsx)(T, {
                    title: S.intl.string(E.default["4f6Vkr"]),
                    body: S.intl.string(E.default.LJ2q1H),
                }),
            });
        case k.n.NoApplication:
            return (0, l.jsx)(I, { className: _.qs });
        case k.n.DoesNotSupportSurface:
            return (0, l.jsx)("div", {
                className: _.qs,
                children: (0, l.jsx)(T, {
                    title: S.intl.string(E.default.FHOJiH),
                    body: S.intl.string(E.default["1yLQoV"]),
                }),
            });
        case k.n.Error:
            return (0, l.jsxs)("div", {
                className: _.qs,
                children: [
                    (0, l.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: S.intl.string(E.default.MeLWCr),
                    }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: _.tj,
                        children: S.intl.string(E.default["1RCbQT"]),
                    }),
                ],
            });
        case k.n.AwaitingLaunch:
        case k.n.Loading:
            return (0, l.jsx)("div", { className: _.qs, children: (0, l.jsx)(m.y, {}) });
    }
}
var F = n(17928),
    D = n(323384),
    $ = n(308528),
    z = n(334738),
    O = n(688438),
    q = n(355622),
    G = n(734057),
    U = n(531685),
    B = n(365971),
    V = n(362417);
function W(e) {
    let { message: t } = e;
    return (0, l.jsxs)("div", {
        className: V.f,
        children: [
            (0, l.jsx)(D.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, l.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function H() {
    return (0, l.jsx)("div", { className: V.f, children: (0, l.jsx)(m.y, {}) });
}
function Q(e) {
    let t,
        n,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, F.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(R.ME, t);
        }, [t]),
        (n = (0, F.bG)([U.A], () => U.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, B.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, c] = a.useState(null),
        m = null != o && d === o;
    return (a.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, l.jsx)(H, {})
        : null == o || m
          ? (0, l.jsx)(W, { message: S.intl.string(E.default.bl4eBc) })
          : null == u
            ? (0, l.jsx)(H, {})
            : (0, l.jsx)("div", {
                  className: V.g,
                  children: (0, l.jsx)(O.A, { channel: u, guild: null, chatInputType: q.oU.SIDEBAR }, u.id),
              });
}
var Y = n(148853),
    K = n(598748),
    X = n(486610),
    Z = n(531913),
    J = n(587895),
    ee = n(633075),
    et = n(946356),
    en = n(139730),
    el = n(520082),
    ea = n(287809),
    er = n(675210),
    ei = n(71495);
function es(e) {
    let { applicationId: t } = e,
        n = (0, F.bG)([ea.default], () => ea.default.getCurrentUser());
    return null == n ? null : (0, l.jsx)(eo, { applicationId: t, user: n });
}
function eo(e) {
    let { applicationId: t, user: n } = e,
        r = (0, F.bG)([J.A], () => J.A.getApplication(t)),
        i = a.useMemo(() => new ee.R({ applicationId: t }), [t]),
        s = (0, Z.A)(n.id, t),
        o = s.surfaceConfigs,
        u = (0, er.yZ)({
            widgetTop: null != o[K.m.WIDGET_TOP],
            widgetBottom: null != o[K.m.WIDGET_BOTTOM],
            miniProfile: null != o[K.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, l.jsx)("div", {
              className: ei.$C,
              children: (0, l.jsxs)("div", {
                  className: ei.PV,
                  children: [
                      u.hasMainCard
                          ? (0, l.jsx)("div", {
                                className: ei.a9,
                                children: (0, l.jsx)(et.A.Overlay, {
                                    className: ei.Qb,
                                    children: (0, l.jsx)(el.A, {
                                        user: n,
                                        widget: i,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != r
                          ? (0, l.jsx)("div", {
                                className: ei.ql,
                                children: (0, l.jsx)(en.A, { application: r, rendererProps: s, renderText: X.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var eu = n(976102);
function ed(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        x = (0, o.A)(t, r),
        { isLoading: p } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != x && (0, g.A)().leaveFrame(x.id);
        }, [x, s?.type]),
        s?.type === "checking")
    )
        return (0, l.jsx)("div", { className: eu.q, children: (0, l.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, l.jsx)("div", {
            className: eu.q,
            children: (0, l.jsx)(T, {
                wide: !0,
                title: S.intl.string(E.default.DYwf2n),
                body: S.intl.string(E.default.WWj3pN),
                children: (0, l.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: S.intl.string(E.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!i) return (0, l.jsx)(I, { className: eu.q });
    if (null == t) return null;
    if (p) return (0, l.jsx)("div", { className: eu.q, children: (0, l.jsx)(m.y, {}) });
    let v = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, Y.z3)(d), "aria-label": (0, Y.kZ)(d) } : {};
    return (0, l.jsxs)("div", {
        className: eu.R,
        ...v,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, l.jsx)(L, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, l.jsx)("div", {
                          className: eu.q,
                          children: (0, l.jsx)(T, {
                              wide: !0,
                              title: S.intl.string(E.default.SGHO9K),
                              body: S.intl.string(E.default["pV/rS2"]),
                          }),
                      })
                    : (0, l.jsx)(es, { applicationId: c })
                : null,
            "bot" === d && null != n ? (0, l.jsx)(Q, { previewApplicationId: n }) : null,
        ],
    });
}
var ec = n(534890),
    em = n(738876),
    ef = n(47167),
    eh = n(31717),
    eg = n(372054);
function ex(e) {
    let { channel: t, guild: n, onClose: a } = e,
        r = (0, ef.Ay)(t),
        i = (0, l.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: a });
    return (0, l.jsxs)("div", {
        className: eg.Wx,
        children: [
            (0, l.jsx)(em.A, { channel: t, draftType: eh.C.ChannelMessage }),
            (0, l.jsxs)(u.Ay, {
                toolbar: i,
                "aria-label": S.intl.string(S.t.BIYAqa),
                children: [
                    (0, l.jsx)(u.Ay.ChannelIcon, { icon: ec.ChatIcon, "aria-label": S.intl.string(S.t["/VQax8"]) }),
                    (0, l.jsx)(u.Ay.Title, { children: r }),
                ],
            }),
            (0, l.jsx)("div", {
                className: eg.GZ,
                children: (0, l.jsx)(O.A, { channel: t, guild: n, chatInputType: q.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ep = n(689175),
    ev = n(29692),
    eb = n(903586),
    ej = n(783791),
    ey = n(717447),
    ek = n(29080),
    ew = n(46054);
function eN(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        r = (0, eb.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, eb.Lf)(t),
        o = s && null != i && i.content.trim() === n.trim(),
        u = !l && "" !== n && !o;
    return {
        streamed: r,
        lastStreamedMessage: i,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
(n(134528), n(947204));
var eA = n(939249),
    eE = n(478016),
    eS = n(34136);
function eC(e) {
    let { title: t, trailing: n, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, l.jsxs)("section", {
        className: i()(eS.Nr, r),
        ...o,
        children: [
            (0, l.jsxs)("header", {
                className: i()(eS.wx, null != n && eS.o5, s),
                children: [
                    (0, l.jsx)(p.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
var eI = n(113757);
function eM(e) {
    let { idea: t, selected: n, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, l.jsxs)(eA.D, {
        className: i()(eI.nM, { [eI.f1]: o, [eI.CZ]: n }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": S.intl.formatToPlainString(E.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, l.jsxs)("div", {
                className: eI.jo,
                children: [
                    n
                        ? (0, l.jsx)(eE.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eI.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, l.jsx)(p.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eI.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, l.jsx)(p.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eT(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, l.jsx)(eC, {
        title: S.intl.string(E.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, l.jsx)(
                eM,
                { idea: e, selected: i.has(e.id) || n?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eR = n(435619),
    eP = n(866665),
    e_ = n(885574),
    eL = n(430392),
    eF = n(632015),
    eD = n(256905),
    e$ = n(824757);
function ez(e) {
    let { label: t, info: n, children: a } = e;
    return (0, l.jsxs)("section", {
        className: e$.uW,
        children: [
            (0, l.jsxs)("span", {
                className: e$.a9,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            a,
        ],
    });
}
function eO() {
    return (0, l.jsx)(eP.m, {
        text: S.intl.string(E.default.DXe2dP),
        children: (0, l.jsx)(eA.D, {
            className: e$.bk,
            "aria-label": S.intl.string(E.default.Y6y4nQ),
            children: (0, l.jsx)(e_.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eq(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, l.jsx)(ez, {
              label: t,
              children: (0, l.jsx)("div", {
                  className: e$.Ip,
                  children: n.map((e) =>
                      (0, l.jsx)(
                          "span",
                          {
                              className: e$.jw,
                              children: (0, l.jsx)(p.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function eG(e) {
    let { isActivity: t, hasWidget: n } = e,
        a = t ? D.k : eL.RobotIcon;
    return (0, l.jsxs)("span", {
        className: e$.K2,
        children: [
            n
                ? (0, l.jsxs)("span", {
                      className: e$.L6,
                      children: [
                          (0, l.jsx)(eF.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, l.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: S.intl.string(E.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, l.jsxs)("span", {
                className: e$.L6,
                children: [
                    (0, l.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: S.intl.string(t ? S.t.IC5Ann : E.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { projectId: t, design: n } = e,
        [r, i] = a.useState(null),
        [s, o] = a.useState(!1),
        { id: u } = n,
        [d, m] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, c.PK)(t, u).then(
                (t) => {
                    e || i(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, u, d]);
    let f = S.intl.string(E.default.FW8UcU),
        h = a.useCallback(() => {
            (0, c.PK)(t, u).then(
                (e) => {
                    (0, eD.R)({
                        items: [{ type: "IMAGE", url: e, alt: f }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, u, f]),
        g = a.useCallback(() => {
            (i(null),
                (0, c.n6)(t, u).then(
                    (e) => {
                        e ? 0 === d && m(1) : o(!0);
                    },
                    () => {},
                ));
        }, [t, u, d]);
    return s
        ? null
        : (0, l.jsx)(ez, {
              label: S.intl.string(E.default["9W8SbY"]),
              info: (0, l.jsx)(eO, {}),
              children: (0, l.jsx)(eA.D, {
                  className: e$.xX,
                  onClick: h,
                  "aria-label": S.intl.string(E.default.CBrpNv),
                  children: null != r ? (0, l.jsx)("img", { src: r, alt: f, className: e$.sN, onError: g }) : null,
              }),
          });
}
function eB(e) {
    let { projectId: t, proposal: n } = e;
    return (0, l.jsx)(eC, {
        title: S.intl.string(E.default["60htw+"]),
        trailing: (0, l.jsx)(eG, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, l.jsxs)("div", {
            className: e$.rf,
            children: [
                (0, l.jsx)(p.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: n.summary,
                }),
                null != n.design_image ? (0, l.jsx)(eU, { projectId: t, design: n.design_image }) : null,
                n.changes.length > 0
                    ? (0, l.jsx)(ez, {
                          label: S.intl.string(E.default.KLyB8Y),
                          children: (0, l.jsx)("ul", {
                              className: e$.p_,
                              children: n.changes.map((e, t) =>
                                  (0, l.jsx)(
                                      "li",
                                      {
                                          className: e$.Aw,
                                          children: (0, l.jsx)(p.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                n.commands.length > 0
                    ? (0, l.jsx)(ez, {
                          label: S.intl.string(S.t["0hKkS+"]),
                          children: (0, l.jsx)("ul", {
                              className: e$.p_,
                              children: n.commands.map((e, t) =>
                                  (0, l.jsxs)(
                                      "li",
                                      {
                                          className: e$.uX,
                                          children: [
                                              (0, l.jsxs)(p.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, l.jsx)(p.E, {
                                                  variant: "experimental/body-md/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(eq, { label: S.intl.string(E.default.ieqTtP), names: n.bot_permissions ?? [] }),
                (0, l.jsx)(eq, { label: S.intl.string(E.default.Cn9qix), names: n.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eV = n(192308),
    eW = n(479191);
function eH(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, eV.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, l.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, l.jsxs)("article", {
        className: eW.Lo,
        children: [
            (0, l.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: S.intl.string(E.default["/e28TK"]),
            }),
            (0, l.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : S.intl.string(E.default.jxvtin),
            }),
            (0, l.jsx)("div", {
                className: eW.cS,
                children: r.fields.map((e) =>
                    (0, l.jsx)(
                        "span",
                        {
                            className: eW.$H,
                            children: (0, l.jsx)(p.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tag: "span",
                                children: e.label,
                            }),
                        },
                        e.name,
                    ),
                ),
            }),
            (0, l.jsx)("div", {
                className: eW.sq,
                children: (0, l.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: S.intl.string(E.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eQ = n(976814),
    eY = n(973e3);
function eK(e) {
    let { projectId: t, request: n } = e,
        r = (0, F.bG)([c.Ay], () => c.Ay.getSettings(t)),
        i = (n.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, eQ.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0, isPreview: !0 });
        }, [t, n]);
    return (0, l.jsxs)("article", {
        className: eY.Mk,
        children: [
            (0, l.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: S.intl.string(E.default.wgDhiQ),
            }),
            (0, l.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : S.intl.string(E.default["V+DBhs"]),
            }),
            i.length > 0
                ? (0, l.jsx)("div", {
                      className: eY.R6,
                      children: i.map((e) =>
                          (0, l.jsx)(
                              "span",
                              {
                                  className: eY.K4,
                                  children: (0, l.jsx)(p.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e.label,
                                  }),
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            (0, l.jsx)("div", {
                className: eY.p0,
                children: (0, l.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: S.intl.string(E.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eX = n(196582);
function eZ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function eJ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e0(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e4(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e5(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e8(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: r, size: i = 64 } = e;
    return (0, l.jsx)("img", {
        style: { width: i, height: i },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: r ?? "img",
    });
}
function e9() {
    return [
        { key: "snail", Illocon: eZ, tint: "var(--illo-yellow-40)", name: tt(E.default["2l3AEQ"]) },
        { key: "goat", Illocon: eJ, tint: "var(--illo-orange-40)", name: tt(E.default["+FPL+I"]) },
        { key: "frog", Illocon: e0, tint: "var(--illo-green-40)", name: tt(E.default.w4GOfR) },
        { key: "bunny", Illocon: e1, tint: "var(--illo-pink-40)", name: tt(E.default.XmZT9M) },
        { key: "cat", Illocon: e2, tint: "var(--illo-pink-40)", name: tt(E.default.NnydwQ) },
        { key: "caterpillar", Illocon: e3, tint: "var(--illo-green-40)", name: tt(E.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e7, tint: "var(--illo-purple-40)", name: tt(E.default.DoTGt5) },
        { key: "dog", Illocon: e4, tint: "var(--illo-yellow-40)", name: tt(E.default["9zxqmP"]) },
        { key: "spider", Illocon: e6, tint: "var(--illo-orange-40)", name: tt(E.default.HF0T3L) },
        { key: "bee", Illocon: e5, tint: "var(--illo-yellow-40)", name: tt(E.default.XTzDga) },
        { key: "bot", Illocon: e8, tint: "var(--illo-purple-40)", name: tt(E.default.abtC2b) },
    ];
}
function te(e) {
    return e9().find((t) => t.key === e);
}
function tt(e) {
    return S.intl.string(e);
}
function tn(e) {
    let t = e9(),
        n = 0,
        l = e[0] ?? "";
    for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, l) => {
            a.set(e, t[(n + l) % t.length]);
        }),
        a
    );
}
var tl = n(683063),
    ta = n(76275),
    tr = n(705754),
    ti = n(883455),
    ts = n(13699);
function to(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : S.intl.string(E.default.MdXWEK);
}
function tu(e) {
    let { projectId: t, lane: n, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, eb.SY)(n.steps),
        c = u
            ? null != d
                ? (0, eb.WQ)(d)
                : to(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(to(e));
                  switch (e.status) {
                      case "failed":
                          return S.intl.formatToPlainString(E.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return S.intl.formatToPlainString(E.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return S.intl.formatToPlainString(E.default.vuv9bT, {
                                  task: t,
                                  duration: (0, ta.M)(e.durationMs),
                              });
                          return S.intl.formatToPlainString(E.default.KS49RN, { task: t });
                      default:
                          return S.intl.formatToPlainString(E.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, l.jsx)("ol", {
                                    className: ts.dO,
                                    children: n.steps.map((e) =>
                                        (0, l.jsx)(
                                            ti.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, l.jsx)(
                                  "div",
                                  {
                                      className: ts.iq,
                                      children: (0, l.jsx)(tr.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, l.jsx)(eX.A, {
        glyph: (0, l.jsx)(tl.u, {
            asset: (0, l.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: to(o),
            position: "left",
            children: (0, l.jsx)("span", {
                className: ts.nC,
                children: (0, l.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
n(321073);
var td = n(140735),
    tc = n(329456);
let tm = [];
function tf(e) {
    let { status: t } = e;
    return (0, l.jsxs)("span", {
        className: i()(tc.xL, { [tc.Vb]: "in_progress" === t, [tc.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return S.intl.string(E.default.TkPGOH);
                case "in_progress":
                    return S.intl.string(E.default["oK+fmd"]);
                default:
                    return S.intl.string(E.default.d7lieu);
            }
        })(t),
        children: [
            (0, l.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tc.Qd,
                itemClassName: tc.xB,
                "aria-hidden": !0,
            }),
            (0, l.jsx)("svg", {
                className: tc.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, l.jsx)("path", { className: tc.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function th(e) {
    let { agents: t, active: n } = e,
        r = a.useMemo(() => (n ? t : tm), [n, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [o, u] = a.useState(r),
        [d, c] = a.useState(s),
        [m, f] = a.useState(!1);
    d !== s && (c(s), u([...r, ...o.filter((e) => !i.has(e.key))]), 0 === r.length && f(!1));
    let h = o.some((e) => !i.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(r), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, r, n]),
        a.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, l.jsxs)("span", {
        className: tc.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: a, task: r } = e,
                    { Illocon: s } = n;
                return (0, l.jsx)(
                    tl.u,
                    {
                        asset: (0, l.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, l.jsx)("span", {
                            className: tc.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, l.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, l.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tc.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tg(e) {
    let t,
        { todos: n, provisional: r, agents: s } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, o] = a.useState(() => new Set());
            return (
                r !== t && (i(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                a.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => n.map((e) => e.id), [n])),
        u =
            ((t = (s ?? tm).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tm) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, l.jsxs)("ul", {
        className: tc.p_,
        children: [
            n.map((e) =>
                (0, l.jsxs)(
                    "li",
                    {
                        className: i()(tc.AS, { [tc.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, l.jsx)(tf, { status: e.status }),
                            (0, l.jsx)(p.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tc.iV,
                                selectable: !0,
                                children: (0, l.jsx)("span", { className: tc.Qq, children: e.text }),
                            }),
                            (0, l.jsx)(th, { agents: u.get(e.id) ?? tm, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, l.jsxs)("li", {
                      className: tc.AS,
                      "data-provisional": !0,
                      children: [
                          (0, l.jsx)(tf, { status: "pending" }),
                          (0, l.jsx)(p.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tc.iV,
                              selectable: !0,
                              children: (0, l.jsx)("span", { className: tc.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tx(e) {
    let { todos: t, provisional: n, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, l.jsxs)(eC, {
              title: S.intl.string(E.default.qCRC6c),
              trailing: (0, l.jsx)(p.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: S.intl.formatToPlainString(E.default.bQvqly, { completed: i, total: s }),
              }),
              className: tc.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, l.jsx)(td.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: S.intl.formatToPlainString(E.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, l.jsx)("div", {
                      className: tc.rf,
                      children: (0, l.jsx)(tg, { todos: t, provisional: n, agents: a }),
                  }),
              ],
          });
}
var tp = n(229775),
    tv = n(165648);
function tb(e) {
    let t = tn(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? te(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: to(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tj(e) {
    let {
            projectId: t,
            steps: n,
            active: r = !1,
            durationMs: i,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = a.useMemo(() => (0, eb.GO)(n, { turnActive: r }), [n, r]),
        x = a.useMemo(
            () =>
                null == d
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === d),
                          tasks: g.tasks.filter((e) => e.task.segment === d),
                      },
            [g, d],
        );
    if (s)
        return (0, l.jsx)("ol", {
            className: ts.pj,
            "data-live": !1,
            children: (0, l.jsx)(eX.A, {
                glyph: (0, l.jsx)(ek.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: S.intl.string(E.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, eb.lt)(n) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = tn(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        w = tb(j);
    return (0, l.jsx)(eX.l.Provider, {
        value: j.length,
        children: (0, l.jsxs)("ol", {
            className: ts.pj,
            "data-live": k,
            children: [
                (0, l.jsx)(ey.A, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: j.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: f,
                    durationMs: p,
                    connectsDown: j.length > 0,
                }),
                j.map((e, n) => {
                    let a = null != e.task.helperMark ? te(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, l.jsx)(
                              tu,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: n < j.length - 1,
                              },
                              e.taskId,
                          );
                }),
                b
                    ? (0, l.jsx)("li", {
                          className: ts.YO,
                          children: (0, l.jsx)(tx, { todos: v, provisional: u, agents: w }),
                      })
                    : null,
            ],
        }),
    });
}
function ty(e) {
    let {
            projectId: t,
            steps: n,
            content: r,
            proposal: s,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: f,
            sideReply: h = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: x,
            lastStreamedMessage: v,
            showsClosingMessage: b,
            attachmentsHost: j,
        } = a.useMemo(
            () => eN({ steps: n, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [n, r, s, u],
        ),
        y = null == u ? null : (0, l.jsx)(eR.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, l.jsx)("div", { className: ts.MT, children: y }),
        w = h
            ? (0, l.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: S.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, l.jsxs)("div", {
        className: ts.ue,
        children: [
            x.length > 0 && !g
                ? (0, l.jsx)("ol", {
                      className: ts.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, l.jsxs)(
                                  "li",
                                  {
                                      className: ts.DV,
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: tv.PT,
                                              children: ew.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === j && e === v ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, l.jsx)(eB, { projectId: t, proposal: s })
                : b
                  ? (0, l.jsxs)("div", {
                        className: i()(ts.ky, tp.XR),
                        children: [
                            (0, l.jsx)("div", {
                                className: i()(tv.PT, ts.cW),
                                children: ew.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            w,
                        ],
                    })
                  : null,
            null != d
                ? (0, l.jsx)("div", {
                      className: i()(ts.ky, tp.XR),
                      children: (0, l.jsx)(eH, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, l.jsx)("div", {
                      className: i()(ts.ky, tp.XR),
                      children: (0, l.jsx)(eK, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, l.jsx)(eT, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            b ? null : w,
        ],
    });
}
var tk = n(678949),
    tw = n(504290),
    tN = n(475358),
    tA = n(81369),
    tE = n(922016),
    tS = n(980707),
    tC = n(477782),
    tI = n(717400),
    tM = n(663341),
    tT = n(826745),
    tR = n(783977),
    tP = n(559647),
    t_ = n(775602),
    tL = n(435558),
    tF = n.n(tL),
    tD = n(506774),
    t$ = n(228366);
let tz = "VibegrationsComposerDrafts";
function tO() {
    return tD.w.get(tz) ?? {};
}
let tq = new Map(),
    tG = tF().throttle(() => {
        if (0 === tq.size) return;
        let e = tO();
        for (let [t, n] of tq) "" === n ? delete e[t] : (e[t] = n);
        (tq.clear(), tD.w.set(tz, e));
    }, 1e3);
class tU extends F.Ay.Store {
    getDraft(e) {
        let t = tq.get(e);
        return null != t ? t : (tO()[e] ?? "");
    }
}
let tB = new tU(t$.h, {
    LOGOUT: function () {
        return (tq.clear(), tG.cancel(), tD.w.remove(tz), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (tq.set(t, n), tG(), "" === n && tG.flush(), !1);
    },
});
var tV = n(113491);
(n(323874), n(14289), n(35956));
var tW = n(285796),
    tH = n(673724),
    tQ = n(590380),
    tY = n(298668);
let tK = tH.Is,
    tX = 0;
function tZ(e) {
    let { onUploadFile: t, onDeleteFile: n } = e,
        [l, r] = a.useState([]),
        i = a.useRef([]),
        s = a.useRef(new Set()),
        o = a.useRef(t);
    o.current = t;
    let u = a.useRef(n);
    u.current = n;
    let d = a.useCallback((e) => {
            ((i.current = e), r(e));
        }, []),
        c = a.useCallback((e) => {
            u.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    a.useEffect(() => {
        let e = s.current;
        return () => {
            for (let t of i.current)
                (e.add(t.localId),
                    null != t.previewUrl && URL.revokeObjectURL(t.previewUrl),
                    null != t.ref && c(t.ref));
        };
    }, [c]);
    let m = a.useCallback(
            (e, t) => {
                if (s.current.has(e)) return;
                let n = i.current;
                n.some((t) => t.localId === e) && d(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [d],
        ),
        f = a.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...i.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tX,
                        r = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tK) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: S.intl.formatToPlainString(E.default.DlX57a, { count: tK }),
                        });
                        continue;
                    }
                    if (!(0, tH.x5)(l.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: S.intl.formatToPlainString(E.default.cI7t94, {
                                size: (0, tH.ZJ)((0, tH.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tH.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    (t.push({ ...r, previewUrl: i }), n.push({ file: l, localId: a }));
                }
                for (let { file: e, localId: l } of (d(t), n))
                    o.current(e).then(
                        (e) => {
                            s.current.has(l) ? c(e) : m(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            s.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                m(l, { status: "error", errorText: S.intl.string(E.default.GwEHvn) }));
                        },
                    );
            },
            [c, m, d],
        ),
        h = a.useCallback(
            (e) => {
                let t = i.current,
                    n = t.find((t) => t.localId === e);
                (s.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && c(n.ref),
                    d(t.filter((t) => t.localId !== e)));
            },
            [c, d],
        ),
        g = a.useCallback(() => {
            let e = i.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let e of i.current) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
            return (d([]), e);
        }, [d]);
    return { drafts: l, addFiles: f, removeDraft: h, settled: l.every((e) => "ready" === e.status), takeRefs: g };
}
function tJ(e) {
    let { draft: t, onRemove: n } = e;
    return (0, l.jsxs)(tQ.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, l.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: tY.Rk }) : null,
            (0, l.jsx)("button", {
                type: "button",
                className: tY.o1,
                onClick: () => n(t.localId),
                "aria-label": S.intl.string(E.default["3HWvgk"]),
                children: (0, l.jsx)(tW.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t0 = n(789438);
let t1 = "text-md/normal",
    t2 = null;
function t3(e) {
    let { text: t, offering: n, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [m, f] = a.useState(0),
        [h, g] = a.useState(0),
        [x, v] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = c.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = l.offsetWidth + r;
            (g(i + r), f(s));
            let o = s + i,
                c = Math.max(n, l.offsetWidth) + r + i,
                m = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            v({
                frontFrom: 1e3 * (0, tw._R)(m),
                frontTo: 1e3 * (0, tw._R)(h),
                backFrom: 1e3 * (0, tw.T)(m),
                backTo: 1e3 * (0, tw.T)(h),
            });
        }
        let a = new ResizeObserver(l);
        return (l(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        a.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, j] = a.useState(0),
        [y, k] = a.useState(null),
        w = a.useRef(!1),
        N = a.useCallback(() => {
            (k(w.current ? (n ? "through" : "out") : n ? "in" : null), j((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        w.current = n;
    }, [n, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        C = "out" === y ? x.frontTo : x.backTo,
        I = (0, F.bG)([t_.Ay], () => t_.Ay.useReducedMotion),
        M = t === S.intl.string(E.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, n) {
        let a = null != n;
        return (0, l.jsx)("span", {
            ref: n,
            className: i()(t0.VT, { [t0.qk]: a }),
            style: a
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, l.jsx)(tN.e, { shortcut: "tab", className: t0.xT, keyClassName: e }),
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tk.o, {
                text: t,
                variant: t1,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(t0.xM, { [t0.s2]: r }),
                onStart: N,
                onComplete: () => o(t),
            }),
            R(t0.IS, n || (!I && "out" === y), u),
            (0, l.jsx)("span", {
                ref: d,
                className: t0.QI,
                "aria-hidden": !0,
                children: (0, l.jsx)(p.E, { variant: t1, tag: "span", children: t }),
            }),
            T
                ? (0, l.jsxs)("span", {
                      className: t0.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, l.jsx)(p.E, { variant: t1, tag: "span", className: t0.xM, children: t }),
                          R(t0.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function t7(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: c,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            hasPendingContext: p = !1,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = a.useState(() => tB.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, d.I$)(t, e), y(e));
            },
            [t],
        ),
        [w, N] = a.useState(t);
    w !== t && (N(t), y(tB.getDraft(t)));
    let A = (0, F.bG)([t_.Ay], () => t_.Ay.isSubmitButtonEnabled),
        [C, I] = a.useState(!1),
        [M, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let R = a.useRef(null),
        { drafts: P, addFiles: _, removeDraft: L, settled: D, takeRefs: $ } = tZ({ onUploadFile: c, onDeleteFile: m }),
        z = "" !== j.trim() || P.length > 0 || p,
        O = n && z && D,
        [q, G] = a.useState(null);
    a.useEffect(() => {
        if (null == q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]);
    let U = a.useCallback(() => {
            if (!O) return;
            let e = $();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, n) {
                let l,
                    a,
                    r = n.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == t2 && (t2 = document.createElement("canvas").getContext("2d"));
                let i = t2;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((l = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || i.measureText(r).width <= o) return r;
                let u = 0,
                    d = r.length;
                for (; u < d;) {
                    let e = Math.ceil((u + d) / 2);
                    i.measureText(r.slice(0, e)).width <= o ? (u = e) : (d = e - 1);
                }
                let c = r.slice(0, u),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(Z.current?.querySelector("textarea") ?? null, es.current, j);
            ("" !== t && G(t), k(""));
        }, [O, j, o, $, k]),
        B = a.useCallback(
            (e) => {
                (e.preventDefault(), U());
            },
            [U],
        ),
        V = a.useCallback(() => {
            null == u || M || (T(!0), u());
        }, [u, M]),
        W = null == g || "" !== j || !n || r || s || p ? null : g,
        H = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !M) {
                    (e.preventDefault(), e.stopPropagation(), V());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != W) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(W));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
            },
            [U, f, i, u, M, V, W, k],
        ),
        Q = a.useCallback(
            (e) => {
                if (!n) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), _(t));
            },
            [n, _],
        ),
        Y = a.useCallback(
            (e) => {
                (e.preventDefault(), I(!1), n && _(Array.from(e.dataTransfer.files)));
            },
            [n, _],
        ),
        K = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
        }, []),
        X = a.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        Z = a.useRef(null),
        J = a.useRef(null),
        [ee, et] = a.useState(0),
        [en, el] = a.useState(!1);
    a.useEffect(() => {
        if (0 === j.length) return void el(!1);
        let e = Z.current?.querySelector("textarea");
        if (null != e) {
            let t = t5(e);
            null != t && et(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), t4);
        return () => clearTimeout(t);
    }, [j]);
    let ea = a.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
        er = en ? ` ${t0.EB}` : "",
        ei = s
            ? S.intl.string(E.default.pGFXZ0)
            : r
              ? S.intl.string(E.default.JeM47J)
              : n
                ? p
                    ? S.intl.string(E.default.Bs7bUv)
                    : x
                      ? S.intl.string(E.default.M3ovXY)
                      : S.intl.string(i ? E.default["67PpcP"] : E.default.ahRdoJ)
                : S.intl.string(E.default.nm4w9P),
        es = a.useRef(0),
        eo = a.useRef(null),
        eu = a.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            es.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                es.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        ed = a.useId(),
        ec = null != W,
        em = q ?? W ?? ei,
        ef = "" === j && "" !== em;
    return (0, l.jsxs)("form", {
        onSubmit: B,
        onDrop: Y,
        onDragOver: K,
        onDragLeave: () => I(!1),
        className: C ? `${t0.DA} ${t0.pV}` : t0.DA,
        children: [
            P.length > 0
                ? (0, l.jsx)("div", {
                      className: t0.lN,
                      children: P.map((e) => (0, l.jsx)(tJ, { draft: e, onRemove: L }, e.localId)),
                  })
                : null,
            (0, l.jsx)("span", { className: `${t0.wg} ${t0.LP}${er}`, style: ea, "aria-hidden": !0 }),
            (0, l.jsx)("span", { className: `${t0.wg} ${t0.L3}${er}`, style: ea, "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: t0.VA,
                ref: Z,
                children: [
                    (0, l.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: X,
                        className: t0.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, l.jsx)(eP.m, {
                              text: S.intl.string(E.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, l.jsx)("button", {
                                  ref: J,
                                  type: "button",
                                  className: `${t0.Y0} ${t0.nu}`,
                                  disabled: !n,
                                  onClick: () => R.current?.click(),
                                  "aria-label": S.intl.string(E.default.d6Rqlu),
                                  children: (0, l.jsx)(tA.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: t0.Qu,
                                  }),
                              }),
                          })
                        : (0, l.jsx)(tE.Y, {
                              targetElementRef: J,
                              position: "top",
                              align: "left",
                              animation: tE.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, l.jsx)(tS.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": S.intl.string(S.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, l.jsxs)(tC.rX, {
                                          children: [
                                              (0, l.jsx)(tC.Dr, {
                                                  id: "upload-file",
                                                  label: S.intl.string(S.t["d3+iYs"]),
                                                  iconLeft: tA.H,
                                                  leadingAccessory: { type: "icon", icon: tA.H },
                                                  action: () => R.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, l.jsx)(tC.Dr, {
                                                        id: "import-project",
                                                        label: S.intl.string(E.default.edKajy),
                                                        iconLeft: tI.q,
                                                        leadingAccessory: { type: "icon", icon: tI.q },
                                                        action: h,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: a } = t;
                                  return (0, l.jsx)("button", {
                                      ...e,
                                      ref: J,
                                      type: "button",
                                      className: `${t0.Y0} ${t0.nu}`,
                                      disabled: !n,
                                      "aria-label": S.intl.string(S.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, l.jsx)(tM.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: t0.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, l.jsx)("div", {
                              ref: eu,
                              className: t0.ar,
                              "aria-hidden": "true",
                              children: (0, l.jsx)(t3, { text: em, offering: ec && null == q, typed: null != q }),
                          })
                        : null,
                    (0, l.jsx)(tT.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: Q,
                        placeholder: ef ? "" : ei,
                        disabled: !n,
                        "aria-label": S.intl.string(E.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: t0.jp,
                    }),
                    ef ? (0, l.jsx)(td.A, { id: ed, children: ei }) : null,
                    (0, l.jsx)("div", {
                        className: t0.Sz,
                        children:
                            i && null != u
                                ? (0, l.jsx)(eP.m, {
                                      text: S.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, l.jsx)("button", {
                                          type: "button",
                                          className: `${t0.Y0} ${t0.$E}`,
                                          disabled: M,
                                          onClick: V,
                                          "aria-label": S.intl.string(E.default.KdgI4k),
                                          children: (0, l.jsx)(ek.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != v && null != b
                                  ? (0, l.jsx)(tV.A, {
                                        settings: v.settings,
                                        choices: v.choices,
                                        disabled: !n,
                                        onChange: b,
                                        className: `${t0.Y0} ${t0.$E}`,
                                        icon: (0, l.jsx)(tR.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    A
                        ? (0, l.jsxs)("div", {
                              className: t0.fF,
                              children: [
                                  (0, l.jsx)("div", { className: t0.MT }),
                                  (0, l.jsx)("button", {
                                      type: "submit",
                                      className: t0.rt,
                                      disabled: !O,
                                      "aria-label": S.intl.string(E.default["22GHMt"]),
                                      children: (0, l.jsx)(tP.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let t4 = 1500,
    t6 = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function t5(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t5.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (t5.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of t6) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
t5.mirror = null;
var t8 = n(320095),
    t9 = n(963852),
    ne = n(521981),
    nt = n(763754),
    nn = n(491182),
    nl = n(438729),
    na = n(622868),
    nr = n(308334),
    ni = n(837528),
    ns = n(432433),
    no = n(715628),
    nu = n(752636),
    nd = n(9842),
    nc = n(589022),
    nm = n(95701),
    nf = n(994500),
    nh = n(967198),
    ng = n(803306);
let nx = new Set(),
    np = new Map();
function nv(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
var nb = n(73432);
let nj = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ny(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function nk(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function nw(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = nk(e, t),
        r = e.codePointAt(t);
    if (
        (null != r &&
            (8205 === r ||
                (r >= 65024 && r <= 65039) ||
                (r >= 127995 && r <= 127999) ||
                (r >= 768 && r <= 879) ||
                (r >= 8400 && r <= 8447) ||
                (r >= 65056 && r <= 65071) ||
                (r >= 917536 && r <= 917631))) ||
        8205 === a
    )
        return !0;
    if (ny(a) && ny(r)) {
        let n = 0,
            l = t;
        for (; n < 32 && ny(nk(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function nN(e, t) {
    let { streaming: n } = t,
        l = (0, F.bG)([t_.Ay], () => t_.Ay.useReducedMotion),
        r = n && !l,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && nw(t, r);) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o));
    let u = r && o.length < e.length,
        d = a.useRef(o);
    a.useLayoutEffect(() => {
        d.current = o;
    });
    let c = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && nj.has(e.charAt(l - 1));) l--;
                                    return nj.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && nw(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        a.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]));
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: r && f < e.length };
}
var nA = n(441136);
let nE = (0, nm.createChannelRecord)({ id: "vibegrations-builder", type: R.rbe.DM }),
    nS = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nC(e, t) {
    return null == e ? e : (0, l.jsx)("div", { className: i()(nA.Yq, { [nA.x1]: t }), children: e });
}
function nI(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nM(e, t, n) {
    let { content: r } = (0, ns.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: nE, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, l.jsx)(nl.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, no.A)(i, r);
}
function nT(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, ni.m)(e, nE, t.usernameProfile, r),
        o = (0, ni.Jo)(t.avatarProfile, r),
        u = (0, F.bG)([nh.A], () => nh.A.getGuildId()),
        d = (0, F.bG)([ea.default], () => ea.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let n = ea.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, l.jsx)(nc.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: i,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function nR(e) {
    let { baseMessage: t, referenced: n, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== n.content ? (0, ne.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("span", {
                              className: nA.GV,
                              children: [
                                  (0, l.jsx)(nb.A, { className: nA.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, F.cf)(
            [nf.A],
            () => ({
                isReplyAuthorBlocked: nf.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nf.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, nt.X4)(n),
        c = (0, nt.X4)(t),
        m = nT(n);
    return (0, l.jsx)(nr.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: nE,
        referencedMessage: { state: nd.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != i,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: i,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function nP(e) {
    let { message: t, author: n } = e,
        a = nT(t);
    return (0, l.jsx)(na.Ay, {
        message: t,
        channel: nE,
        author: n,
        guildId: a.guildId,
        subscribeToGroupId: t.id,
        renderPopout: a.renderPopout,
        showAvatarPopout: a.showAvatarPopout,
        showUsernamePopout: a.showUsernamePopout,
        onClickAvatar: a.onClickAvatar,
        onClickUsername: a.onClickUsername,
        onPopoutRequestClose: a.onPopoutRequestClose,
    });
}
function n_(e) {
    let { content: t, createdAt: n, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || nx.has(e) || null != ea.default.getUser(e)) return;
                let t = np.get(e) ?? 0;
                t >= 3 ||
                    (np.set(e, t + 1),
                    nx.add(e),
                    ng
                        .getUser(e)
                        .finally(() => nx.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, F.bG)(
            [ea.default],
            () => nv(r, null != r ? ea.default.getUser(r) : null, ea.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, nt.FT)(o, null), [o]),
        d = a.useMemo(() => (0, ev.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, t9.Ay)({ channelId: nE.id, content: c, author: o });
            return (0, t8.rh)({ ...e, timestamp: nI(n, e.timestamp), state: R.cmJ.SENT });
        }, [c, o, n]);
    return null == m
        ? null
        : (0, l.jsx)(nL, { message: m, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function nL(e) {
    let { message: t, author: n, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = nM(t, a);
    return (0, l.jsx)(nn.A, {
        className: nA.yE,
        author: n,
        childrenHeader: s ? (0, l.jsx)(nP, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, l.jsxs)("div", {
                      className: nA.zq,
                      children: [
                          (0, l.jsxs)("span", {
                              className: nA.GV,
                              children: [
                                  (0, l.jsx)(nb.A, { className: nA.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, l.jsx)("span", { className: nA.WO, children: o }),
                      ],
                  }),
        childrenAccessories: nC(i, "" !== a),
        disableInteraction: !0,
    });
}
function nF(e) {
    let {
            content: t,
            createdAt: n,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = nN(t, { streaming: u }),
        m = a.useMemo(() => (0, nt.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, F.bG)(
            [ea.default],
            () => nv(h, null != h ? ea.default.getUser(h) : null, ea.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ev.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, t9.Ay)({ channelId: nE.id, content: x?.body ?? i.content, author: g });
            return (0, t8.rh)({ ...e, id: i.id, timestamp: nI(i.createdAt, e.timestamp), state: R.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: nE.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, t9.Ay)({ channelId: nE.id, content: d, author: nS });
            return (0, t8.rh)({
                ...e,
                timestamp: nI(n, e.timestamp),
                state: R.cmJ.SENT,
                ...(null != v ? { type: R.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, n, v]),
        j = nM(b, d, nA.OS);
    return (0, l.jsxs)("div", {
        className: nA.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, l.jsx)(nn.A, {
                className: nA.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, l.jsx)(nR, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, nu.A)({ message: b, channel: nE, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: nC(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, l.jsx)("span", {
                      className: nA.st,
                      "aria-hidden": "true",
                      children: (0, l.jsx)(D.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let nD = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var n$ = n(375068);
function nz(e) {
    let { projectId: t, messages: n, ref: r, onPickIdea: i } = e,
        s = a.useRef(null),
        o = a.useCallback(
            (e) => {
                ((s.current = e), "function" == typeof r ? r(e) : null != r && (r.current = e));
            },
            [r],
        ),
        [u, d] = a.useState(null),
        c = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = a.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600)));
        }, []),
        f = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function n(e, n) {
                        t.push({ row: e, groupable: { key: e.key, ...n } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            n(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, ej.BL)(t),
                            l = eN({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = l.lastStreamedMessage?.key,
                            r = (0, eb.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, eb.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index,
                            u = !1;
                        for (let d of r) {
                            if (null != d.prose && nD.test(d.prose.content)) u = !0;
                            else if (null != d.prose) {
                                let r = `${t.render_id}:${d.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: r,
                                        message: t,
                                        groupStart: !1,
                                        content: d.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            d.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && d.index === o && !d.hasWork,
                                    },
                                    { actor: "assistant", boundary: r },
                                );
                            }
                            (d.hasWork || d.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${d.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: d.index,
                                        active: d.index === s,
                                        closed: d.index !== s,
                                        ...(null != d.durationMs ? { segmentDurationMs: d.durationMs } : {}),
                                        reportsDuration: d.index === i,
                                        hostsChecklist: d.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let d = nD.test(t.content ?? "");
                        if (
                            (!0 === t.interrupted || u || d
                                ? n(
                                      {
                                          kind: "interrupted",
                                          key: `${t.render_id}:interrupted`,
                                          message: t,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : r.every((e) => !e.hasTodos) &&
                                  (t.todos?.length ?? 0) > 0 &&
                                  n(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (l.showsClosingMessage && !d) ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === l.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            n(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: l.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let l = (function (e) {
                        let t,
                            n,
                            l = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (l.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (n = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (n = s.boundary)),
                                l.push(e));
                        }
                        return l;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(n),
            [n],
        );
    return 0 === n.length
        ? (0, l.jsx)("ol", {
              ref: r,
              className: n$.x7,
              children: (0, l.jsx)(nO, {
                  role: "assistant",
                  children: (0, l.jsx)(nF, { content: S.intl.string(E.default.khZEUv) }),
              }),
          })
        : (0, l.jsx)("ol", {
              ref: o,
              className: n$.x7,
              children: f.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, l.jsx)(
                              nO,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: u === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, l.jsx)(n_, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != n ? (0, l.jsx)(eR.A, { projectId: t, attachments: n }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, l.jsx)(
                              nO,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, l.jsx)(nF, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, l.jsx)(eR.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, l.jsx)(
                              nO,
                              {
                                  role: "assistant",
                                  children: (0, l.jsx)(tj, {
                                      projectId: t,
                                      steps: a.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != a.finished_at ? a.finished_at - a.created_at : void 0,
                                      todos: a.todos,
                                      provisionalTodo: a.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, l.jsx)(
                              nO,
                              {
                                  role: "assistant",
                                  children: (0, l.jsx)(tj, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, l.jsx)(
                              nO,
                              {
                                  role: "assistant",
                                  children: (0, l.jsx)(tj, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: a.todos,
                                      provisionalTodo: a.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, l.jsx)(
                              nO,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, l.jsx)(nF, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let n = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != n)
                                              return {
                                                  id: n.id,
                                                  content: n.content,
                                                  ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                  createdAt: n.created_at,
                                              };
                                      })(n, a.in_reply_to),
                                      onJumpToReplied: null != a.in_reply_to ? () => m(a.in_reply_to) : void 0,
                                      accessories: (0, l.jsx)(ty, {
                                          projectId: t,
                                          steps: a.steps,
                                          announcement: a.announcement,
                                          content: "",
                                          proposal: a.proposal,
                                          interrupted: !0 === a.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: a.ideas,
                                          pickedIdeaIds:
                                              null == a.ideas
                                                  ? void 0
                                                  : (function (e, t, n) {
                                                        let l = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of n)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && l.add(e.id);
                                                        }
                                                        return l;
                                                    })(n, a, a.ideas),
                                          attachments: a.attachments,
                                          secretRequest: a.secretRequest,
                                          settingsRequest: a.settingsRequest,
                                          onPickIdea: i,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function nO(e) {
    let { role: t, children: n, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, l.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(n$.xk, { [n$.Qo]: r, [n$.q3]: s }),
        children: n,
    });
}
var nq = n(625903),
    nG = n(964675);
function nU(e) {
    let { projectId: t } = e,
        n = (0, F.bG)([c.Ay], () => null != c.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, eQ.A)(t, { isPreview: !0 });
        }, [t]);
    return n
        ? (0, l.jsx)(eA.D, {
              className: nG.h,
              "aria-label": S.intl.string(E.default.gTMvzD),
              onClick: r,
              children: (0, l.jsx)(nq.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nB = n(823376),
    nV = n(495557);
function nW(e) {
    let { activity: t, id: n } = e,
        { text: r, revealing: s } = nN(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, l.jsx)("div", {
            id: n,
            role: "tooltip",
            className: nV.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, l.jsx)(ep.Ch, {
                ref: o,
                className: nV.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, l.jsx)("div", {
                    className: i()(tv.PT, nV.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: ew.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nH = n(921461);
function nQ(e) {
    let { activity: t, compacting: n = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [m, f] = a.useState(null),
        h = null != t && "end" !== t.phase,
        g = s
            ? E.default.ivvYHP
            : r
              ? E.default.aFffp2
              : n
                ? E.default["0vH/5G"]
                : h
                  ? E.default.Ly7F7x
                  : E.default.QDGuNS,
        x = `${S.intl.string(E.default.Xmvb23)} ${S.intl.string(g)}`,
        [p, v] = a.useState(o ?? x),
        b = a.useRef(x);
    (a.useEffect(() => {
        b.current = x;
    }, [x]),
        a.useEffect(() => {
            u?.(p);
        }, [p, u]));
    let j = a.useRef(null),
        y = a.useRef(p);
    (a.useEffect(() => {
        y.current = p;
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                b.current !== y.current ? v(b.current) : j.current?.play();
            }
            function l() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (l(),
                    (e = window.setTimeout(() => {
                        (n(), (t = window.setInterval(n, 2400)));
                    }, 1800)));
            }
            function r() {
                (j.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", l),
                () => {
                    (l(), window.removeEventListener("focus", r), window.removeEventListener("blur", l));
                }
            );
        }, []));
    let k = null != t && "" !== t.text,
        w = t?.session ?? null,
        N = k && null != w && m === w,
        A = a.useCallback(() => {
            k && null != w && f((e) => (e === w ? null : w));
        }, [k, w]),
        C = a.useCallback(() => f(null), []);
    return (0, l.jsx)(tE.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: N,
        onRequestClose: C,
        renderPopout: () => (0, l.jsx)(nW, { id: c, activity: t }),
        children: () =>
            (0, l.jsxs)(eA.D, {
                innerRef: d,
                className: i()(nH.hF, k && nH.Xd),
                "aria-label": S.intl.string(r ? E.default.pGFXZ0 : E.default.SzdX35),
                "aria-expanded": N,
                "aria-describedby": N ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": S.intl.string(g),
                onClick: A,
                children: [
                    (0, l.jsx)("span", {
                        className: nH.bl,
                        children: (0, l.jsx)(nB.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, l.jsx)("span", {
                        className: nH.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, l.jsx)(tk.o, {
                            ref: j,
                            text: p,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nH.yE,
                        }),
                    }),
                ],
            }),
    });
}
var nY = n(280894);
function nK(e) {
    return e.toLocaleString();
}
function nX(e) {
    let { label: t, usage: n } = e;
    return (0, l.jsxs)("div", {
        className: nY.Q$,
        children: [
            (0, l.jsxs)("div", {
                className: nY.mf,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, l.jsxs)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nK((0, tH.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, l.jsxs)(p.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nK(n.input_tokens),
                    " in \xb7 ",
                    nK(n.output_tokens),
                    " out \xb7 ",
                    nK(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nK(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nZ(e) {
    let { project: t } = e,
        n = (0, tH.wU)(t.compaction),
        a = (0, tH.wV)(t.orchestrator, t.codegen),
        r = (0, tH.wV)(a, n);
    return (0, l.jsxs)("div", {
        className: nY.si,
        role: "dialog",
        "aria-label": S.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, l.jsx)("div", {
                className: nY.Q$,
                children: (0, l.jsxs)("div", {
                    className: nY.mf,
                    children: [
                        (0, l.jsxs)(p.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nK((0, tH.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, l.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(nX, { label: S.intl.string(E.default.R9aduM), usage: a }),
            (0, l.jsx)(nX, { label: S.intl.string(E.default.Tj6b30), usage: n }),
            (0, l.jsxs)("div", {
                className: nY.mf,
                children: [
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: S.intl.string(E.default["kILb+R"]),
                    }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tH.sj)(r) ? "\u2014" : `${Math.round(100 * (0, tH.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nJ(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, l.jsx)(tE.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, l.jsx)(nZ, { project: t }),
        children: (e) =>
            (0, l.jsx)(eA.D, {
                innerRef: n,
                className: nY.Y$,
                "aria-label": S.intl.string(E.default.AWQ2ZV),
                ...e,
                children: (0, l.jsx)(e_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var n0 = n(985451),
    n1 = n(258216);
function n2(e) {
    switch (e) {
        case "connecting":
            return S.intl.string(E.default.W7oyuf);
        case "failed":
            return S.intl.string(E.default.eE60xI);
        case "closed":
            return S.intl.string(E.default["yBmS+I"]);
    }
}
function n3(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: r = !1,
            thinkingActivity: i,
            compacting: s,
            projectUsage: o,
            connState: u,
        } = e,
        d = (0, n0.o4)(t),
        [c, m] = a.useState(null);
    return (0, l.jsxs)("div", {
        className: n1.jf,
        children: [
            (0, l.jsx)("div", {
                className: n1.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || r || d
                        ? (0, l.jsx)(nQ, {
                              activity: i,
                              compacting: s,
                              restoring: r,
                              controlling: d,
                              spoken: c,
                              onSpokenChange: m,
                          })
                        : null,
            }),
            (0, l.jsx)(nU, { projectId: t }),
            null == o
                ? null
                : (0, l.jsxs)("span", {
                      className: n1.BP,
                      children: [
                          (0, l.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": S.intl.formatToPlainString(E.default["7SZZvj"], {
                                  runes: (0, tH.a7)(o.cost_usd),
                                  turns: o.turns,
                              }),
                              children: S.intl.formatToPlainString(E.default["4PFO2p"], {
                                  runes: (0, tH.a7)(o.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, l.jsx)(nJ, { project: o }),
                      ],
                  }),
            "open" === u
                ? null
                : (0, l.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === u ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": S.intl.formatToPlainString(E.default.eDDdhB, { status: n2(u) }),
                      "data-vibegrations-conn": !0,
                      "data-state": u,
                      className: n1.XF,
                      children: n2(u),
                  }),
        ],
    });
}
var n7 = n(22231),
    n4 = n(408278),
    n6 = n(900797),
    n5 = n(847374),
    n8 = n(477155),
    n9 = n(935286),
    le = n(856795),
    lt = n(424110);
function ln(e) {
    let { option: t, position: n, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, l.jsxs)(eA.D, {
        className: i()(lt.uK, { [lt.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": S.intl.formatToPlainString(d ? E.default.aL1BKQ : E.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, l.jsx)("span", { className: lt.Gy, "aria-hidden": !0, children: n }),
            (0, l.jsxs)("span", {
                className: lt.qO,
                children: [
                    (0, l.jsx)("span", {
                        className: lt.l8,
                        children: (0, l.jsx)(p.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lt.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, l.jsx)(p.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, l.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lt.rM,
                      children: S.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function ll(e) {
    let { question: t, draft: n, direction: a, disabled: r } = e,
        s = "" === n.trim() ? null : n;
    return (0, l.jsxs)("div", {
        className: i()(lt.Ge, lt.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, l.jsx)(ln, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, l.jsxs)("div", {
                className: lt.Xy,
                children: [
                    (0, l.jsx)("span", {
                        className: lt.Gy,
                        "aria-hidden": !0,
                        children: (0, l.jsx)(n7.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, l.jsx)("span", { className: i()(lt.Pu, lt.es), children: s }),
                ],
            }),
        ],
    });
}
function la(e) {
    let { clarification: t, onSubmit: n, onDismiss: r } = e,
        [o, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, v] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        w = a.useRef(null),
        [N, A] = a.useState(null),
        C = a.useRef(null),
        I = a.useRef(0),
        M = null == n,
        T = t.questions.length,
        R = Math.min(m, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        z = d[P.id] ?? "",
        { text: O, phase: q } = (0, le.Q)(P.question),
        G = O === P.question,
        U = G && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == N || F || !G) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(N), () => t.disconnect());
    }, [G, N, P.id, F]);
    let B = S.intl.string(F ? S.t.iTcuma : S.t.dcl9MQ),
        V = a.useCallback(
            (e) => {
                if (null == n) return;
                let l = t.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                "" !== l && n(l);
            },
            [t, n],
        ),
        W = a.useCallback(
            (e, t) => {
                I.current += 1;
                let n = I.current;
                (g({ direction: t, moves: n }), v({ question: P, draft: z, direction: t, moves: n }), k(!0), f(e));
            },
            [z, P],
        ),
        H = a.useCallback(() => {
            let e = w.current,
                t = C.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = w.current,
            t = C.current;
        if (null == e || null == t) return;
        H();
        let n = new ResizeObserver(H);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [H]);
    let Q = h?.moves;
    a.useEffect(() => {
        if (null == Q) return;
        let e = setTimeout(() => v(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [Q]);
    let Y = a.useCallback(
            (e) => {
                if (M) return;
                let n = { ...o, [P.id]: e };
                u(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            r = t[l[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, n, R);
                null == l ? V(n) : W(l, l < R ? "back" : "forward");
            },
            [o, t, M, R, P.id, V, W],
        ),
        K = a.useCallback(() => {
            if (M || 0 === R) return;
            let e = t.questions[R - 1];
            (u((t) => {
                let n = { ...t };
                return (delete n[e.id], n);
            }),
                c((t) => {
                    let n = { ...t };
                    return (delete n[e.id], n);
                }),
                W(R - 1, "back"));
        }, [t, M, R, W]),
        X = R > 0 && !M,
        Z = a.useCallback(() => {
            let e = z.trim();
            "" !== e && Y({ kind: "custom", text: e });
        }, [z, Y]),
        [J, ee] = a.useState(!1),
        [et, en] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let el = a.useCallback(() => {
            null != r && (en(!0), setTimeout(r, 150));
        }, [r]),
        ea = a.useCallback(() => {
            M || R >= T - 1 || W(R + 1, "forward");
        }, [M, R, T, W]),
        er = R < T - 1 && !M;
    return (0, l.jsxs)("section", {
        className: i()(lt.$O, { [lt.fI]: J && !et, [lt.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, l.jsxs)("div", {
                className: lt.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, l.jsxs)("div", {
                        ref: w,
                        className: lt.wx,
                        children: [
                            (0, l.jsx)(p.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(lt.TK, lt.R_, { [lt.TB]: "exit" === q, [lt.JU]: "enter" === q }),
                                children: O,
                            }),
                            U || F
                                ? (0, l.jsx)("div", {
                                      className: lt.Q7,
                                      children: (0, l.jsx)(eP.m, {
                                          text: B,
                                          children: (0, l.jsx)(n4.K, {
                                              icon: F ? n6.t : n5.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: P.id, expanded: !F }),
                                              "aria-label": B,
                                              "aria-controls": `${P.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, l.jsx)(eA.D, {
                                      className: i()(lt.gb, lt.Q7),
                                      onClick: el,
                                      "aria-label": S.intl.string(E.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, l.jsx)(s.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: lt.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, l.jsxs)("div", {
                            className: lt.I,
                            children: [
                                (0, l.jsxs)("div", {
                                    ref: C,
                                    className: lt.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, l.jsx)(
                                                ln,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: M,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, l.jsxs)("div", {
                                            className: lt.Xy,
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: lt.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, l.jsx)(n7.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, l.jsx)(tT.y, {
                                                    value: z,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [P.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), Z());
                                                    },
                                                    placeholder: S.intl.string(E.default.qifsdL),
                                                    "aria-label": S.intl.formatToPlainString(E.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: lt.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, l.jsx)(
                                          ll,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: M },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            T > 1
                ? (0, l.jsxs)("div", {
                      className: lt.qr,
                      children: [
                          (0, l.jsx)(p.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: S.intl.formatToPlainString(E.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, l.jsxs)("div", {
                              className: lt.Np,
                              children: [
                                  (0, l.jsx)(eA.D, {
                                      className: i()(lt.gb, { [lt.yI]: !X }),
                                      onClick: X ? K : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": S.intl.string(E.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, l.jsx)(n8.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, l.jsx)(eA.D, {
                                      className: i()(lt.gb, { [lt.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": S.intl.string(E.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, l.jsx)(n9.E, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lr = n(643278),
    li = n(191521),
    ls = n(405189);
function lo(e) {
    let { line: t, placement: n, todos: r, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != n,
        [c, m] = a.useState(n ?? "top"),
        [f, h] = a.useState(d),
        [g, x] = a.useState(!1),
        [p, v] = a.useState(!1),
        [b, j] = a.useState(d);
    (b !== d && (j(d), null != n ? (m(n), h(!0)) : (x(!1), v(!1))),
        a.useEffect(() => {
            if (d || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [d, f]),
        a.useEffect(() => {
            if (!f || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, d]));
    let [y, k] = a.useState(!1),
        [w, N] = a.useState(!1),
        [A, C] = a.useState(p);
    (A !== p && (C(p), p ? k(!0) : N(!1)),
        a.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        a.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, p]));
    let I = null != r && r.length > 0,
        M = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, l.jsxs)("div", {
              className: ls.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, l.jsxs)("div", {
                      className: i()(ls.vK, { [ls.ho]: g && d, [ls.ET]: !d }),
                      children: [
                          null == u
                              ? (0, l.jsx)("ol", {
                                    className: i()(ls.Rk, ts.pj),
                                    "data-live": "true",
                                    children: (0, l.jsx)(eX.A, {
                                        glyph: (0, l.jsx)(li.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, l.jsx)(eA.D, {
                                    className: ls.pZ,
                                    onClick: u,
                                    "aria-label": S.intl.string(E.default.tYjQFG),
                                    children: (0, l.jsx)("ol", {
                                        className: i()(ls.Rk, ts.pj),
                                        "data-live": "true",
                                        children: (0, l.jsx)(eX.A, {
                                            glyph: (0, l.jsx)(li.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, l.jsx)(eP.m, {
                                    text: S.intl.string(E.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, l.jsx)(eA.D, {
                                        className: ls.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": S.intl.string(E.default.qCRC6c),
                                        children: (0, l.jsx)(lr.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  y && I
                      ? (0, l.jsx)("div", {
                            className: i()(ls.vB, { [ls.pg]: p && w, [ls.ui]: !p }),
                            children: (0, l.jsx)(tx, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var lu = n(366010),
    ld = n(825484),
    lc = n(859703),
    lm = n(738822),
    lf = n(291749),
    lh = n(971276),
    lg = n(590202),
    lx = n(710969),
    lp = n(792620),
    lv = n(130490),
    lb = n(617986),
    lj = n(363195),
    ly = n(749414);
let lk = !1;
function lw(e) {
    let t,
        n,
        r,
        { open: i } = e,
        s =
            ((t = (0, lv.dN)()),
            (n = (0, F.bG)([lc.A], () => lc.A.isQuestAccessSuspended || null != lc.A.questEnrollmentBlockedUntil, [])),
            (r = (0, F.bG)([lc.A], () => null != lc.A.getQuestPreviewOverride(lm.uF.QUEST_BAR_V2), [])),
            null != t && (0, lp.vv)(t)
                ? r
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, lh.s)() || n || (0, lx.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = a.useState(() => lk),
        { mounted: d, closing: c } = (function (e) {
            let [t, n] = a.useState(e),
                [l, r] = a.useState(!1),
                i = a.useRef(null);
            return (
                e && (!t || l) ? (n(!0), r(!1)) : e || !t || l || r(!0),
                a.useEffect(() => {
                    if (!e && t)
                        return (
                            (i.current = setTimeout(() => {
                                ((i.current = null), r(!1), n(!1));
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(i && !o && null != s),
        [m, h] = a.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        x = (0, F.bG)([lj.A], () => lj.A.getState().theme),
        v = (0, lu.M)(x) ? R.NJ8.DARK : R.NJ8.LIGHT,
        b = null != g ? (0, lf.tW)(g, lf.fY.GAME_TILE, v).url : null,
        j = null != b && "" !== b ? b : null,
        y = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: lm.uF.QUEST_BAR_V2,
                sourceQuestContent: lm.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: lg.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, lb.d5)({ quest: s, ...e })
                : await (0, lb.e0)(s, { ...e, questContentCTA: lg.Cy.ACCEPT_QUEST });
        }, [s]),
        k = a.useCallback(() => {
            ((lk = !0), u(!0));
        }, []);
    return d && null != g
        ? (0, l.jsxs)("aside", {
              className: ly.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != j
                      ? (0, l.jsxs)("div", {
                            className: ly.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, l.jsx)("img", { className: ly.Rx, src: j, alt: "" }),
                                (0, l.jsx)("div", { className: ly._e }),
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: ly.iB,
                      children: [
                          null != j ? (0, l.jsx)("img", { className: ly.w1, src: j, alt: "" }) : null,
                          (0, l.jsxs)("div", {
                              className: ly.Ug,
                              children: [
                                  (0, l.jsx)(p.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: S.intl.string(E.default["09LJ+I"]),
                                  }),
                                  (0, l.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: S.intl.format(S.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, l.jsxs)(ld.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, l.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: S.intl.string(E.default.egO5fO),
                          }),
                          (0, l.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: S.intl.string(S.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var lN = n(651649),
    lA = n(670455);
let lE = "shownVibegrationsFeedbackProjectIds";
var lS = n(783134),
    lC = n(348800);
let lI = [S.intl.string(E.default["E+Q26x"]), S.intl.string(E.default["06/jqP"]), S.intl.string(E.default["3gSfUa"])];
function lM(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, F.bG)([ej.Ay], () => ej.Ay.getMessages(t), [t]),
        s = (0, F.bG)([c.Ay], () => c.Ay.getConnState(t), [t]),
        o = (0, F.bG)([c.Ay], () => c.Ay.isChatStopped(t), [t]),
        u = (0, F.bG)([ej.Ay], () => ej.Ay.getProjectUsage(t), [t]),
        d = (0, F.bG)([ej.Ay], () => ej.Ay.getThinkingActivity(t), [t]),
        m = (0, F.bG)([ej.Ay], () => ej.Ay.isCompacting(t), [t]),
        h = (0, F.bG)([c.Ay], () => c.Ay.getModelSettings(t), [t]),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        b.current && x.current?.scrollToBottom();
    }, [i]);
    let k = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        w = a.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let n = t > 1;
            y((e) => (!n === e ? e : !n));
        }, []);
    (a.useLayoutEffect(() => {
        let e = g.current,
            t = v.current;
        if (null == e) return;
        let n = x.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = n?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => x.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === l) continue;
                    ((l = e), s());
                } else if (i.target === n) {
                    let e = i.contentRect.height;
                    if (e === r) continue;
                    ((r = e), s());
                } else {
                    let e = i.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            o.observe(e),
            null != n && o.observe(n),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        a.useEffect(() => {
            (0, c.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () =>
                (function (e) {
                    let t = ej.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ej.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tD.w.get(lE) ?? []).includes(e) ||
                            lN.A.possiblyShowFeedbackModal(lA.MW.VIBEGRATIONS, () => {
                                let a;
                                ((a = tD.w.get(lE) ?? []).includes(e) || tD.w.set(lE, [...a, e]),
                                    (0, eV.openModalLazy)(async () => {
                                        let { default: a } = await Promise.all([
                                            n.e("312513"),
                                            n.e("36395"),
                                            n.e("155925"),
                                            n.e("218413"),
                                            n.e("137381"),
                                            n.e("847004"),
                                            n.e("341676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, l.jsx)(a, { ...n, projectId: e, promptCount: t });
                                    }));
                            }));
                })(t),
            [t],
        ));
    let N = (0, lS.Q_)(t),
        A = a.useCallback(
            (e, n) => {
                (0, c.dv)(t, e, n);
            },
            [t],
        ),
        C = a.useCallback(
            (e, n) => {
                0 === N.annotations.length
                    ? A(e, n)
                    : (A((0, ev.Mx)({ annotations: N.annotations, metaComment: e, context: N.context }), n),
                      (0, lS.PS)(t));
            },
            [N, A, t],
        ),
        I = a.useCallback(() => (0, c.fu)(t), [t]),
        M = a.useCallback((e) => A(e.implementation_prompt), [A]),
        T = a.useCallback((e) => A(e), [A]),
        R = a.useCallback((e) => (0, c.XZ)(t, e), [t]),
        P = a.useCallback((e) => (0, c.vX)(t, e), [t]),
        _ = a.useCallback((e) => (0, c.Vm)(t, e), [t]),
        L = a.useCallback(() => A(S.intl.string(E.default.Jj8Ftb)), [A]),
        D = r?.status === "restoring",
        $ = "open" === s && !o && !D,
        z = i[i.length - 1],
        O = null != z && "assistant" === z.role && null != z.proposal,
        [q, G] = a.useState(null),
        U = z?.clarification != null && z.clarification.id !== q ? z.clarification : null,
        B = a.useCallback(() => {
            null != U && G(U.id);
        }, [U]),
        V = (0, F.bG)([ej.Ay], () => ej.Ay.hasLoadedHistory(t), [t]),
        W = a.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lI[e % lI.length];
        }, [t]),
        H = O
            ? S.intl.string(E.default.Jj8Ftb)
            : z?.kind === "plan_implemented"
              ? S.intl.string(E.default["3sTTBu"])
              : V && 0 === i.length
                ? W
                : null,
        Q = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, ej.BL)(t)) return t;
            }
        }, [i]),
        Y = null != Q,
        K = O && $ ? L : void 0,
        [X, Z] = a.useState(null),
        [J, ee] = a.useState(Y);
    (J !== Y && (ee(Y), Y || Z(null)),
        a.useEffect(() => {
            if (!Y) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Z(null)
                        : Z(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [Y, Q?.steps]));
    let et = a.useMemo(() => (null != Q ? (0, ey.b)(Q.steps) : ""), [Q]),
        en = a.useMemo(() => (null != Q ? ((0, eb.lt)(Q.steps) ?? Q.todos) : void 0), [Q]),
        el = Q?.provisionalTodo,
        ea = a.useMemo(() => {
            var e;
            return null != Q ? ((e = Q.steps), tb((0, eb.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [Q]);
    return (0, l.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: lC.TE,
        children: [
            (0, l.jsx)(lw, { open: null != Q }),
            (0, l.jsx)(lo, {
                onJumpToActivity: k,
                line: et,
                placement: Y && "top" === X ? "top" : null,
                todos: en,
                provisionalTodo: el,
                agents: ea,
            }),
            (0, l.jsxs)("div", {
                className: lC.JX,
                children: [
                    (0, l.jsx)(ep.Ch, {
                        ref: x,
                        onScroll: w,
                        className: j ? lC.N$ : `${lC.N$} ${lC.hB}`,
                        children: (0, l.jsx)(nz, { ref: v, projectId: t, messages: i, onPickIdea: $ ? M : void 0 }),
                    }),
                    (0, l.jsx)("div", {
                        className: lC.NJ,
                        children: (0, l.jsx)(n3, {
                            projectId: t,
                            thinking: Y,
                            restoring: D,
                            thinkingActivity: d,
                            compacting: m,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == U
                        ? null
                        : (0, l.jsx)("div", {
                              className: lC.B5,
                              children: (0, l.jsx)(
                                  la,
                                  { clarification: U, onSubmit: $ ? T : void 0, onDismiss: B },
                                  U.id,
                              ),
                          }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: lC.Jx,
                children: [
                    (0, l.jsx)(lo, {
                        onJumpToActivity: k,
                        line: et,
                        placement: Y && "bottom" === X ? "bottom" : null,
                        todos: en,
                        provisionalTodo: el,
                        agents: ea,
                    }),
                    0 === N.annotations.length
                        ? null
                        : (0, l.jsxs)("div", {
                              className: lC.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, l.jsx)(p.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: S.intl.formatToPlainString(E.default.Lkx0Kk, {
                                          count: N.annotations.length,
                                      }),
                                  }),
                                  (0, l.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: S.intl.string(E.default.fh6kQv),
                                  }),
                                  (0, l.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(E.default.B0YARo),
                                      onClick: () => (0, lS.PS)(t),
                                  }),
                              ],
                          }),
                    (0, l.jsx)(t7, {
                        projectId: t,
                        canSend: $,
                        stopped: o,
                        running: Y,
                        restoring: D,
                        onSend: C,
                        hasPendingContext: N.annotations.length > 0,
                        onInterrupt: $ ? I : void 0,
                        onUploadFile: P,
                        onDeleteFile: _,
                        onApprove: K,
                        suggestion: H,
                        questionOpen: null != U,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var lT = n(661531),
    lR = n(602853),
    lP = n(517461),
    l_ = n(761929),
    lL = n(927506);
function lF(e) {
    let { open: t, maxWidth: n, onWidthChange: r, children: i } = e,
        s = (0, lR.r)(lT.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, lP.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, tL.clamp)(c, 360, n);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, l_.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: l_.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, l.jsxs)("div", {
        className: lL.pz,
        hidden: !t,
        children: [
            (0, l.jsx)("div", { className: lL.Di, onPointerDown: g }),
            (0, l.jsx)("div", { ref: o, className: lL.kL, style: { width: f }, children: i }),
        ],
    });
}
var lD = n(691540),
    l$ = n(857250),
    lz = n(97483),
    lO = n(624479),
    lq = n(92446),
    lG = n(761508),
    lU = n(540999),
    lB = n(957565);
let lV = [],
    lW = new Map(),
    lH = new Map(),
    lQ = new Map(),
    lY = new Map(),
    lK = new Map(),
    lX = new Map(),
    lZ = new Map();
class lJ extends F.Ay.Store {
    getStatus(e) {
        return lW.get(e) ?? null;
    }
    getFetchState(e) {
        return lH.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return lY.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return lX.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return lK.get(e) ?? null;
    }
    getModelCalls(e) {
        return lZ.get(e) ?? lV;
    }
    getForceCompactionState(e) {
        return lQ.get(e) ?? "idle";
    }
}
let l0 = new lJ(t$.h, {
    LOGOUT: function () {
        if (
            0 === lW.size &&
            0 === lH.size &&
            0 === lQ.size &&
            0 === lY.size &&
            0 === lK.size &&
            0 === lX.size &&
            0 === lZ.size
        )
            return !1;
        (lW.clear(), lH.clear(), lQ.clear(), lY.clear(), lK.clear(), lX.clear(), lZ.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        lH.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === lQ.get(t);
        l &&
            lQ.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === lH.get(t);
        if ((a && lH.set(t, "failed"), !l && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? lH.set(t, "failed") : (lW.set(t, n), lH.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        lY.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        lK.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        lQ.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        lQ.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = lZ.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let n = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            l = null == t ? [n] : t.concat(n);
        lZ.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, tH.aM)(n.total)) return !1;
        lX.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (lW.delete(t), lH.delete(t), lQ.delete(t), lY.delete(t), lK.delete(t), lX.delete(t), lZ.delete(t));
    },
});
var l1 = n(972786);
function l2(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function l3(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function l7(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function l4(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function l6(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function l5(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
var l8 = n(69985);
function l9(e) {
    let { generatedAt: t, fetchState: n, onRefresh: a } = e;
    return (0, l.jsxs)("div", {
        className: l8.KE,
        children: [
            (0, l.jsx)("div", {
                className: l8.IQ,
                children:
                    "loading" === n
                        ? (0, l.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: S.intl.string(E.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, l.jsx)(p.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: S.intl.formatToPlainString(E.default["4NpaEk"], { time: l6(t) }),
                              })
                            : null,
            }),
            (0, l.jsx)(f.$, { variant: "secondary", size: "sm", text: S.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function ae(e) {
    let { title: t, children: n } = e;
    return (0, l.jsxs)("section", {
        className: l8.uW,
        "aria-label": t,
        children: [
            (0, l.jsx)(p.E, { variant: "text-xs/semibold", color: "text-muted", className: l8.Gf, children: t }),
            n,
        ],
    });
}
function at(e) {
    let { label: t, value: n, hint: a, critical: r = !1 } = e;
    return (0, l.jsxs)("div", {
        className: l8.N8,
        children: [
            (0, l.jsxs)("div", {
                className: l8.x7,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != a && (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function an(e) {
    let { label: t, used: n, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, n / a)) : 0,
        s = i >= 0.9;
    return (0, l.jsxs)("div", {
        className: l8.N8,
        children: [
            (0, l.jsxs)("div", {
                className: l8.x7,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(a)}`,
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: l8.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(n, a),
                "aria-valuetext": `${r(n)} of ${r(a)}`,
                children: (0, l.jsx)("div", {
                    className: s ? l8.aV : l8.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function al(e) {
    switch (e.reason) {
        case "local":
            return S.intl.string(E.default.M7Vn6y);
        case "unconfigured":
            return S.intl.string(E.default.QirpMl);
        case "unauthorized":
            return S.intl.string(E.default.QZ1e4l);
        default:
            return null != e.detail
                ? S.intl.formatToPlainString(E.default.zUTHf7, { detail: e.detail })
                : S.intl.string(E.default.WIAQes);
    }
}
function aa(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : S.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: l2(e.memory_p50_bytes ?? 0),
              p999: l2(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ar = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
function ai(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, l.jsx)(at, {
            label: S.intl.string(E.default.H6PMwW),
            value: S.intl.string(E.default.TLOZ8J),
            hint: al(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, l.jsx)(at, {
            label: S.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: S.intl.string(E.default.uAzxdh),
        });
    let a = aa(n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(at, { label: S.intl.string(E.default.awAqRi), value: l3(n.cpu_ms) }),
            null != a && (0, l.jsx)(at, { label: S.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function as(e) {
    let { analytics: t } = e,
        n = S.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, l.jsx)(ae, {
            title: n,
            children: (0, l.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: al(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? ar[t] : null) ? S.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, l.jsx)(ae, {
        title: n,
        children:
            0 === a.length
                ? (0, l.jsx)(p.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: S.intl.string(E.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, l.jsx)(
                          at,
                          {
                              label: n,
                              value: S.intl.formatToPlainString(E.default.AnRynJ, { cpu: l3(t.cpu_ms) }),
                              hint: aa(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var ao = n(522652);
let au = new Set(["error", "aborted", "length"]),
    ad = [];
function ac(e) {
    let { call: t } = e,
        n = null != t.stopReason && au.has(t.stopReason),
        a = [
            null != t.durationMs ? l3(t.durationMs) : null,
            `${l7(t.inputTokens + t.cacheReadTokens + t.cacheWriteTokens)} \u{2192} ${l7(t.outputTokens)}`,
            n ? t.stopReason : null,
        ]
            .filter((e) => null != e)
            .join(" \xb7 ");
    return (0, l.jsxs)("div", {
        className: ao.p5,
        children: [
            (0, l.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ao.Q5,
                children: l4(t.observedAt),
            }),
            (0, l.jsxs)(p.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: ao.qN,
                children: [t.role, " \xb7 ", t.model],
            }),
            (0, l.jsx)(p.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: n ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function am(e, t) {
    return (0, l.jsx)(at, {
        label: e,
        value: S.intl.formatToPlainString(E.default.U98VaN, { count: l7((0, tH.aM)(t)) }),
        hint: `${l7(t.input_tokens)} in \xb7 ${l7(t.output_tokens)} out \xb7 ${l7(t.cache_read_input_tokens)} cache read`,
    });
}
function af(e) {
    let { projectId: t, status: n, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, F.bG)([l0], () => l0.getLastTurnUsage(t), [t]),
        u = (0, F.bG)([l0], () => l0.getLastCompaction(t), [t]),
        d = (0, F.bG)([l0], () => l0.getLastCompactionDecline(t), [t]),
        m = (0, F.bG)([l0], () => l0.getForceCompactionState(t), [t]),
        h = a.useCallback(() => (0, c.Lj)(t), [t]),
        g = a.useCallback(() => (0, c.Lj)(t, !0), [t]),
        x = (0, F.bG)([l0], () => (s ? ad : l0.getModelCalls(t)), [t, s]),
        v = n?.agent?.lifetime ?? null,
        b = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? b?.context_window_tokens ?? null;
    return (0, l.jsxs)("div", {
        className: ao.Mf,
        children: [
            (0, l.jsx)(l9, { generatedAt: n?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, l.jsx)(ae, {
                title: S.intl.string(E.default.IYpHtT),
                children:
                    null == v
                        ? (0, l.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default.gPabB9),
                          })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(at, {
                                      label: S.intl.string(E.default["8MSJDH"]),
                                      value: l7((0, tH.a7)(v.cost_usd)),
                                      hint: S.intl.formatToPlainString(E.default["6Z2KhK"], { count: l7(v.turns) }),
                                  }),
                                  am(S.intl.string(E.default.hk4jJr), v.orchestrator),
                                  am(S.intl.string(E.default.R9aduM), v.codegen),
                                  am(S.intl.string(E.default.Tj6b30), (0, tH.wU)(v.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, l.jsx)(at, {
                                          label: S.intl.string(E.default.Q2OlgI),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${l7(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, l.jsx)(ae, {
                title: S.intl.string(E.default.lo4mY6),
                children:
                    null == o
                        ? (0, l.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default.uyPveL),
                          })
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  am(S.intl.string(E.default["VwF+oY"]), o.total),
                                  (0, l.jsx)(at, {
                                      label: S.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, tH.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, l.jsxs)(ae, {
                title: S.intl.string(E.default.mn8279),
                children: [
                    null != u && null != y
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(an, {
                                      label: S.intl.string(E.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: l7,
                                  }),
                                  (0, l.jsx)(at, {
                                      label: S.intl.string(E.default.ntZb8d),
                                      value: `${l7(u.tokensBefore)} \u{2192} ${l7(u.tokensAfter)}`,
                                      hint: S.intl.formatToPlainString(E.default.jA05ru, {
                                          count: l7(u.retainedMessages),
                                          time: l6(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? S.intl.formatToPlainString(E.default.LKGmsP, { ceiling: l7(y) })
                                      : S.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, l.jsx)(at, {
                            label: S.intl.string(E.default["se+2ls"]),
                            value: `${l7(d.projected)} / ${l7(d.threshold)}`,
                            critical: !0,
                            hint: S.intl.formatToPlainString(E.default.KHK44U, { time: l6(d.observedAt) }),
                        }),
                    (0, l.jsxs)("div", {
                        className: ao.Lj,
                        children: [
                            (0, l.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: S.intl.string(E.default.B0KV7p),
                                disabled: "pending" === m,
                                onClick: h,
                            }),
                            (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return S.intl.string(E.default.wBng42);
                                    if ("pending" === e) return S.intl.string(E.default["0tgo31"]);
                                    let t = l6(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return S.intl.formatToPlainString(E.default["eL8+rZ"], { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? E.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? E.default.GV4sdd
                                              : E.default["Y+0nUb"];
                                    return S.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: S.intl.string(E.default["044+ju"]),
                                            onClick: g,
                                        }),
                                        (0, l.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: S.intl.string(E.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, l.jsx)(ae, {
                    title: S.intl.string(E.default.F5eP7e),
                    children:
                        0 === x.length
                            ? (0, l.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: S.intl.string(E.default.j8NMgl),
                              })
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      x
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, l.jsx)(ac, { call: e }, e.id)),
                                      x.length > 30 &&
                                          (0, l.jsx)(p.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: S.intl.formatToPlainString(E.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: x.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != j || n?.analytics != null) &&
                (0, l.jsxs)(ae, {
                    title: S.intl.string(E.default.ZRxAPD),
                    children: [
                        null != j &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(at, {
                                        label: S.intl.string(E.default["wt5X/o"]),
                                        value: l6(j.instance_since),
                                        hint: S.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, l.jsx)(at, { label: S.intl.string(E.default["4lgurx"]), value: l7(j.sockets) }),
                                    (0, l.jsx)(at, {
                                        label: S.intl.string(E.default["a/LXBt"]),
                                        value: j.turn_inflight
                                            ? S.intl.string(E.default["9KlveJ"])
                                            : S.intl.string(E.default["4tYZVa"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, l.jsx)(at, {
                                            label: S.intl.string(E.default["/hOBkc"]),
                                            value: l7(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, l.jsx)(ai, { analytics: n.analytics }),
                    ],
                }),
            null != b &&
                (0, l.jsxs)(ae, {
                    title: S.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, l.jsx)(at, { label: S.intl.string(E.default["5iHZLk"]), value: l7(b.max_iterations) }),
                        (0, l.jsx)(at, {
                            label: S.intl.string(E.default.Rb6m3E),
                            value: l7(b.max_subagent_iterations),
                        }),
                        (0, l.jsx)(at, {
                            label: S.intl.string(E.default.WQ9pMe),
                            value: S.intl.formatToPlainString(E.default.U98VaN, { count: l7(b.context_window_tokens) }),
                        }),
                        (0, l.jsx)(at, {
                            label: S.intl.string(E.default.iEAvzu),
                            value: S.intl.formatToPlainString(E.default.U98VaN, {
                                count: l7(b.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, l.jsx)(at, {
                            label: S.intl.string(E.default["jbhs+f"]),
                            value: l7(b.max_user_message_chars),
                        }),
                        (0, l.jsx)(at, { label: S.intl.string(E.default.TOQnq4), value: l7(b.max_build_attempts) }),
                        (0, l.jsx)(at, { label: S.intl.string(E.default.RIDc6D), value: l7(b.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var ah = n(320448),
    ag = n(629584),
    ax = n(683438),
    ap = n(849363);
function av(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, l.jsx)("div", {
              className: ap.ut,
              children: (0, l.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: S.intl.string(E.default.TV42NS),
              }),
          });
}
function ab(e) {
    let { state: t, emptyTitle: n, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, l.jsxs)("div", {
              className: ap.qf,
              children: [
                  (0, l.jsx)(p.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: S.intl.string(E.default.TV42NS),
                  }),
                  (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: S.intl.string(E.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: ap.qf,
              children: [
                  (0, l.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function aj(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, l.jsx)("div", {
              className: ap.ps,
              children: (0, l.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: S.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var ay = n(417397);
let ak = ["all", "preview", "stable", "web"],
    aw = a.memo(function (e) {
        var t;
        let { entry: n, showSource: r } = e,
            [i, s] = a.useState(!1),
            o = a.useId(),
            u = a.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (e.length > 16e3) return null;
                        let n = e.indexOf("{"),
                            l = e.indexOf("["),
                            a = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                        if (-1 === a) return null;
                        let r = e.slice(a).trim();
                        if (r.length < 2) return null;
                        try {
                            t = JSON.parse(r);
                        } catch {
                            return null;
                        }
                        if ("object" != typeof t || null == t) return null;
                        let i = e.slice(0, a).trim(),
                            s = JSON.stringify(t, null, 2);
                        return Array.isArray(t)
                            ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                            : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                    })(n.message),
                [n.message],
            ),
            d = "error" === n.level ? "text-feedback-critical" : "text-default";
        return (0, l.jsxs)("div", {
            className: ay.vK,
            children: [
                (0, l.jsx)(p.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    className: ay.Mt,
                    selectable: !0,
                    children: l4(n.ts),
                }),
                (0, l.jsx)(p.E, {
                    tag: "span",
                    variant: "text-xxs/semibold",
                    color:
                        "error" === (t = n.level)
                            ? "text-feedback-critical"
                            : "warn" === t
                              ? "text-feedback-warning"
                              : "text-muted",
                    className: ay.dm,
                    children: n.level,
                }),
                (0, l.jsxs)("span", {
                    className: ay.t4,
                    children: [
                        r &&
                            null != n.source &&
                            (0, l.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-subtle",
                                className: ay.Cq,
                                children: n.source,
                            }),
                        null != n.kind &&
                            (0, l.jsx)(p.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-feedback-critical",
                                className: ay.Cq,
                                title: n.build ?? void 0,
                                children: S.intl.string(E.default.GO6JcR),
                            }),
                        null != u
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      "" !== u.prefix &&
                                          (0, l.jsxs)(p.E, {
                                              tag: "span",
                                              variant: "text-xs/normal",
                                              color: d,
                                              selectable: !0,
                                              children: [u.prefix, " "],
                                          }),
                                      (0, l.jsxs)(eA.D, {
                                          className: ay.Pq,
                                          "aria-expanded": i,
                                          "aria-controls": o,
                                          "aria-label": S.intl.string(E.default.ehmgbH),
                                          onClick: () => s((e) => !e),
                                          children: [
                                              i
                                                  ? (0, l.jsx)(n5.a, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, l.jsx)(ah._, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    }),
                                              (0, l.jsxs)(p.E, {
                                                  tag: "span",
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  children: [
                                                      u.marker,
                                                      " ",
                                                      S.intl.formatToPlainString(
                                                          "[\u2026]" === u.marker ? E.default.lXkB6Z : E.default.wkbYxG,
                                                          { count: u.size },
                                                      ),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      i &&
                                          (0, l.jsx)(p.E, {
                                              tag: "div",
                                              variant: "text-xs/normal",
                                              color: d,
                                              className: ay.dF,
                                              selectable: !0,
                                              id: o,
                                              children: u.pretty,
                                          }),
                                  ],
                              })
                            : (0, l.jsx)(p.E, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: d,
                                  selectable: !0,
                                  children: n.message,
                              }),
                    ],
                }),
            ],
        });
    });
function aN(e) {
    let { projectId: t } = e,
        n = (0, F.bG)([l1.Ay], () => l1.Ay.getLogs(t), [t]),
        r = (0, F.bG)([l1.Ay], () => l1.Ay.getHistoryState(t, "logs")),
        [i, s] = a.useState("all"),
        [o, u] = a.useState(""),
        d = a.useMemo(() => {
            let e = o.trim().toLowerCase();
            return n.filter((t) => {
                var n, l;
                return (
                    "string" == typeof (n = t.log).message &&
                    "string" == typeof n.level &&
                    "string" == typeof n.ts &&
                    ("all" === i ||
                        ("preview" === (l = t.log.source) || "stable" === l || "web" === l ? l : "other") === i) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [n, i, o]),
        c = a.useRef(null),
        m = a.useRef(!0);
    a.useEffect(() => {
        m.current && c.current?.scrollToBottom();
    }, [d]);
    let f = a.useCallback(() => {
            let e = c.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = a.useMemo(
            () =>
                ak.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                                return S.intl.string(E.default["+m8XM6"]);
                            case "stable":
                                return S.intl.string(E.default.kiOVnt);
                            case "web":
                                return S.intl.string(E.default.J2TPCe);
                            default:
                                return S.intl.string(E.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, l.jsxs)("div", {
        className: ay.$F,
        children: [
            (0, l.jsxs)("div", {
                className: ay.y4,
                children: [
                    (0, l.jsx)(ag.I, {
                        look: "pill",
                        "aria-label": S.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, l.jsx)("div", {
                        className: ay.KT,
                        children: (0, l.jsx)(ax.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: S.intl.string(E.default["MX4vr/"]),
                            "aria-label": S.intl.string(E.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, l.jsx)(av, { state: r }),
            (0, l.jsxs)(ep.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: ay.sx,
                children: [
                    (0, l.jsx)(aj, { state: r }),
                    0 === n.length
                        ? (0, l.jsx)(ab, {
                              state: r,
                              emptyTitle: S.intl.string(E.default.mcFyYc),
                              emptyBody: S.intl.string(E.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, l.jsx)(p.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: S.intl.string(E.default.oIJbFa),
                            })
                          : d.map((e) => (0, l.jsx)(aw, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function aA(e) {
    return S.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
function aE(e) {
    let { title: t, preview: n, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != n && s.push((0, l.jsx)(a.Fragment, { children: i("preview", n) }, "preview")),
        null != r && s.push((0, l.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, l.jsx)(ae, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, l.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: S.intl.string(E.default.W4hcKL),
                      }),
        })
    );
}
function aS(e) {
    let { env: t, bot: n } = e;
    return n.ever_started
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(at, {
                      label: S.intl.formatToPlainString(E.default.f8ix3w, { env: aA(t) }),
                      value: n.connected ? S.intl.string(E.default["9KlveJ"]) : S.intl.string(E.default["4tYZVa"]),
                      critical: !n.connected && null != n.fatal_reason,
                      hint: n.fatal_reason ?? (n.connected ? void 0 : (n.last_start_reason ?? void 0)),
                  }),
                  (0, l.jsx)(at, {
                      label: S.intl.string(E.default["0AB7l3"]),
                      value: l7(n.events_received),
                      hint:
                          null != n.last_event_type && null != n.last_event_at
                              ? `${n.last_event_type} \xb7 ${l6(n.last_event_at)}`
                              : void 0,
                  }),
                  (0, l.jsx)(at, { label: S.intl.string(E.default.ElaQ0A), value: l7(n.guild_count) }),
                  (0, l.jsx)(at, {
                      label: S.intl.string(E.default.SJtBTN),
                      value: l7(n.reconnects),
                      hint:
                          null != n.last_close_code && null != n.last_close_at
                              ? S.intl.formatToPlainString(E.default.bSzLue, {
                                    code: n.last_close_code,
                                    time: l6(n.last_close_at),
                                })
                              : void 0,
                  }),
                  n.dispatch_errors > 0 &&
                      (0, l.jsx)(at, {
                          label: S.intl.string(E.default.N4l504),
                          value: l7(n.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, l.jsx)(at, { label: aA(t), value: S.intl.string(E.default.C6xjtD) });
}
function aC(e) {
    let { env: t, metrics: n } = e,
        a = n.status_4xx + n.status_5xx;
    return (0, l.jsx)(at, {
        label: aA(t),
        value: S.intl.formatToPlainString(E.default.Yur5Zm, { requests: l7(n.requests), failures: l7(a + n.errors) }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? S.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: l6(n.last_failure.at),
                  })
                : S.intl.formatToPlainString(E.default["1PdrB1"], { time: l6(n.since) }),
    });
}
function aI(e) {
    let { env: t, runtime: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(at, {
                label: S.intl.formatToPlainString(E.default.BVORfc, { env: aA(t) }),
                value: l7(n.connections),
            }),
            n.schedules.map((e) =>
                (0, l.jsx)(
                    at,
                    {
                        label: S.intl.formatToPlainString(E.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? S.intl.formatToPlainString(E.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? S.intl.formatToPlainString(E.default["7ecbr3"], { time: l6(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aM(e) {
    let { env: t, metrics: n } = e;
    return (0, l.jsx)(at, {
        label: aA(t),
        value: S.intl.formatToPlainString(E.default.voXL2a, { calls: l7(n.calls), errors: l7(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function aT(e) {
    let { title: t, metrics: n, limits: a } = e;
    if (null == n || 0 === n.requests)
        return (0, l.jsx)(ae, {
            title: t,
            children: (0, l.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: S.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, l.jsxs)(ae, {
        title: t,
        children: [
            (0, l.jsx)(at, {
                label: S.intl.string(E.default.KOnL3g),
                value: l7(n.requests),
                hint: S.intl.formatToPlainString(E.default["1PdrB1"], { time: l6(n.since) }),
            }),
            (0, l.jsx)(at, { label: S.intl.string(E.default.CjPhyY), value: l7(n.errors), critical: n.errors > 0 }),
            i
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(an, {
                              label: S.intl.string(E.default["V/nNbs"]),
                              used: n.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: l3,
                          }),
                          (0, l.jsx)(at, {
                              label: S.intl.string(E.default["+rYPHD"]),
                              value: l3(r),
                              hint: S.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: l3(n.cpu_ms_total),
                                  wall: l3(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, l.jsx)(at, {
                      label: S.intl.string(E.default["V/nNbs"]),
                      value: S.intl.string(E.default.YKWIxp),
                      hint: S.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, l.jsx)(at, { label: S.intl.string(E.default.ueEMPa), value: l3(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, l.jsx)(at, { label: S.intl.string(E.default.vM2krr), value: l7(n.exceeded_cpu), critical: !0 }),
            (0, l.jsx)(at, {
                label: S.intl.string(E.default.g1O88C),
                value: l7(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: S.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != n.build && (0, l.jsx)(at, { label: S.intl.string(E.default.JUZs7g), value: l5(n.build) }),
        ],
    });
}
function aR(e) {
    let { status: t } = e,
        { stable: n, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: S.intl.string(E.default.Vrh0rD), metrics: n }]
            : [
                  { key: "preview", label: S.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: S.intl.string(E.default.kiOVnt), metrics: n },
              ];
    return (0, l.jsx)(ae, {
        title: S.intl.string(E.default.i91625),
        children: o.map((e) => {
            let { key: t, label: n, metrics: r } = e;
            return null == r
                ? (0, l.jsx)(at, { label: n, value: "\u2014" }, t)
                : (0, l.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, l.jsx)(at, {
                                  label: S.intl.formatToPlainString(E.default["9TpIQg"], { env: n }),
                                  value: l2(r.r2_bytes),
                                  hint: S.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: l7(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, l.jsx)(an, {
                                      label: S.intl.formatToPlainString(E.default["0OIswI"], { env: n }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: l2,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aP(e) {
    let { status: t, fetchState: n, onRefresh: a } = e;
    return (0, l.jsxs)("div", {
        className: ao.Mf,
        children: [
            (0, l.jsx)(l9, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: a }),
            null != t &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(aT, {
                            title: S.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, l.jsx)(aT, {
                            title: S.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, l.jsx)(aR, { status: t }),
                        null != t.bot &&
                            (0, l.jsx)(aE, {
                                title: S.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, l.jsx)(aS, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, l.jsx)(aE, {
                                title: S.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, l.jsx)(aC, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, l.jsx)(aE, {
                                title: S.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, l.jsx)(aI, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, l.jsx)(aE, {
                                title: S.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, l.jsx)(aM, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, l.jsx)(as, { analytics: t.analytics }),
                        (0, l.jsxs)(ae, {
                            title: S.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, l.jsx)(at, {
                                    label: S.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? l5(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, l.jsx)(at, {
                                    label: S.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? l5(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function a_(e, t) {
    return String(e).padStart(t, "0");
}
function aL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${a_(l.getHours(), 2)}:${a_(l.getMinutes(), 2)}:${a_(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${a_(l.getMilliseconds(), 3)}` : a;
}
var aF = n(977129);
let aD = new Map(),
    a$ = new Map(),
    az = 0,
    aO = 0;
async function aq(e, t, n) {
    let l = az,
        a = aD.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aO) return { status: "forbidden" };
    let r = a$.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aF.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aO = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== az) return { status: "failed" };
            var n = o.rich;
            for (aD.set(t, n); aD.size > 100;) {
                let e = aD.keys().next();
                if (!0 === e.done) break;
                aD.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    a$.set(t, i);
    let s = await i;
    return (a$.get(t) === i && a$.delete(t), n?.aborted === !0 ? { status: "failed" } : s);
}
function aG() {
    ((az += 1), aD.clear(), a$.clear(), (aO = 0));
}
function aU(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let aB = ["model", "tool", "subagent", "delegated", "context"];
function aV(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aU(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function aW(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aH = ["arguments", "result", "usage", "diagnostics"];
function aQ(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aY(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function aK(e) {
    switch (e) {
        case "subagent":
            return S.intl.string(E.default["EoY7D+"]);
        case "context":
            return S.intl.string(E.default.KVFrD3);
        case "tool":
            return S.intl.string(E.default["/N6ZU9"]);
        case "delegated":
            return S.intl.string(E.default.HcEbf2);
        default:
            return S.intl.string(E.default.AhOqQs);
    }
}
var aX = n(40715);
let aZ = { started: aX.Vf, ok: aX.mo, error: aX.Sr };
function aJ(e) {
    let { status: t } = e;
    return (0, l.jsx)("span", {
        className: `${aX.Om} ${aZ[t] ?? aX.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return S.intl.string(E.default.HpKDyl);
                case "error":
                    return S.intl.string(E.default["5T4Dd0"]);
                default:
                    return S.intl.string(E.default.VbEmf0);
            }
        })(t),
    });
}
let a0 = { model: aX.WI, subagent: aX.uM, context: aX.eH, tool: aX.pw, delegated: aX.C8 };
function a1(e) {
    let { label: t, value: n } = e;
    return (0, l.jsxs)("div", {
        className: aX.wV,
        children: [
            (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", className: aX.D6, children: t }),
            (0, l.jsx)("div", { className: aX.zL, children: n }),
        ],
    });
}
function a2(e) {
    let { label: t, value: n } = e;
    return (0, l.jsx)(a1, {
        label: t,
        value: (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function a3(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: aX.WA, children: t });
}
function a7(e) {
    let { title: t, children: n } = e,
        r = a.useId();
    return (0, l.jsxs)("section", {
        "aria-labelledby": r,
        className: aX.xd,
        children: [
            (0, l.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: aX.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function a4(e) {
    let { title: t, children: n } = e;
    return (0, l.jsxs)("details", {
        className: aX.XK,
        children: [
            (0, l.jsxs)("summary", {
                className: aX.p8,
                children: [
                    (0, l.jsx)(ah._, { className: aX.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, l.jsx)(p.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, l.jsx)("div", { className: aX.bG, children: n }),
        ],
    });
}
function a6(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, l.jsx)(a1, {
            label: t.key,
            value: (0, l.jsx)(p.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let n =
        null != t.chars
            ? S.intl.formatToPlainString(E.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? S.intl.formatToPlainString(E.default.OB8Qvn, { count: t.items })
              : null;
    return (0, l.jsx)(a1, {
        label: t.key,
        value: (0, l.jsxs)("div", {
            className: aX.Kv,
            children: [
                (0, l.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return S.intl.string(E.default.xO6bcQ);
                            case "content":
                                return S.intl.string(E.default.gpBZRr);
                            default:
                                return S.intl.string(E.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == n
                    ? null
                    : (0, l.jsx)(p.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: n,
                      }),
            ],
        }),
    });
}
function a5(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", {
                      className: aX.QR,
                      children: (0, l.jsx)(p.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aX.uh,
                          children: S.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, l.jsx)(
                          a1,
                          {
                              label: e.key,
                              value: (0, l.jsxs)("div", {
                                  className: aX.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, l.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aX.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, l.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: S.intl.string(E.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, l.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? S.intl.string(E.default["1kBG9Z"])
                                                        : S.intl.formatToPlainString(E.default.VGSwo4, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function a8(e) {
    let { detail: t } = e;
    if (null == t || "loaded" === t.status || "forbidden" === t.status) return null;
    let n =
        "loading" === t.status ? E.default["vBF/0G"] : "unavailable" === t.status ? E.default.jEQTot : E.default.fj5wM8;
    return (0, l.jsx)(p.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: aX.E7,
        children: S.intl.string(n),
    });
}
function a9(e) {
    let { projectId: t, entry: n, onClose: r, parent: i, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && l.add("arguments"),
                    "started" !== e.status && l.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    l.add("usage");
            return (
                (n || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && l.add("diagnostics"),
                aH.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [n, l] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aD.get(t)) return;
                    let n = new AbortController();
                    return (
                        aq(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aD.get(t);
            return null != r ? { status: "loaded", rich: r } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = aL(n.startedAt, "millis"),
        f = aU(n),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, l.jsxs)(ep.Ch, {
        className: aX._0,
        onKeyDown: h,
        role: "region",
        "aria-label": S.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, l.jsx)("div", {
                className: aX.sy,
                children: (0, l.jsxs)("div", {
                    className: aX.HI,
                    children: [
                        (0, l.jsx)(aJ, { status: n.status }),
                        (0, l.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aX.PY} ${a0[f]}`,
                            children: aK(f),
                        }),
                        (0, l.jsx)(p.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aX.kc,
                            children: c,
                        }),
                        (0, l.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aX.l5,
                            children: null == n.durationMs ? S.intl.string(E.default.HpKDyl) : aQ(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aX.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, l.jsxs)(a7, {
                      title: S.intl.string(E.default.jXY3mm),
                      children: [
                          (n.fields ?? []).map((e) => (0, l.jsx)(a6, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, l.jsx)(a5, { entries: d.rich.args })
                              : null,
                          (0, l.jsx)(a8, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, l.jsxs)(a7, {
                      title: S.intl.string(E.default.KXrf5F),
                      children: [
                          (0, l.jsx)(a2, {
                              label: S.intl.string(E.default["2Aii2k"]),
                              value: S.intl.formatToPlainString(E.default.DdXP0P, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, l.jsx)(a2, {
                                    label: S.intl.string(E.default.hpGFzS),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, l.jsx)(a1, {
                                    label: S.intl.string(E.default["UV2R1/"]),
                                    value: (0, l.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: S.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, l.jsx)(a5, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, l.jsxs)(a7, {
                      title: S.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, l.jsxs)(a3, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, l.jsx)(a2, {
                                            label: S.intl.string(E.default.Ran4BY),
                                            value: S.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: aY(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, l.jsx)(a2, {
                                            label: S.intl.string(E.default.vPIcyv),
                                            value: S.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: aY(n.systemTokens),
                                                tools: aY(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: aY(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, l.jsx)(a2, {
                                            label: S.intl.string(E.default["/703Yk"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, l.jsx)(a2, {
                                            label: S.intl.string(E.default["6+W0dJ"]),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, l.jsx)(a2, {
                                            label: S.intl.string(E.default.VyAl6j),
                                            value: S.intl.formatToPlainString(E.default.lkMc23, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, l.jsx)(a2, {
                                            label: S.intl.string(E.default.l9YFEQ),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, l.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aX.E7,
                              children: S.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aX.E7,
                      children: S.intl.string(E.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, l.jsx)(a4, {
                      title: S.intl.string(E.default.T7SFyZ),
                      children: (0, l.jsxs)(a3, {
                          children: [
                              null == i
                                  ? null
                                  : (0, l.jsx)(a1, {
                                        label: S.intl.string(E.default.NnBqcd),
                                        value: (0, l.jsx)(eA.D, {
                                            tag: "div",
                                            className: aX.mi,
                                            onClick: () => s(i.id),
                                            children: (0, l.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, l.jsx)(a2, {
                                        label: S.intl.string(E.default.fI6mzD),
                                        value: S.intl.formatToPlainString(E.default.hO8FYp, { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, l.jsx)(a2, { label: S.intl.string(E.default.I7cJP0), value: n.turnId }),
                              (0, l.jsx)(a2, { label: S.intl.string(E.default["XVTP/S"]), value: n.id }),
                              null == m ? null : (0, l.jsx)(a2, { label: S.intl.string(E.default.rD7bm0), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, l.jsx)(a2, { label: S.intl.string(E.default.rxmzYT), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aX.Hm,
                                                children: S.intl.string(E.default["6oILKx"]),
                                            }),
                                            n.schema.map((e) =>
                                                (0, l.jsx)(
                                                    a2,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? S.intl.formatToPlainString(E.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : S.intl.formatToPlainString(E.default["/L6GFe"], {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, l.jsx)(p.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aX.E7,
                children: S.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let re = { model: aX.WI, subagent: aX.uM, context: aX.eH, tool: aX.pw, delegated: aX.C8 };
function rt(e) {
    let { entries: t } = e,
        n = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = aU(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return aB.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        r = n.reduce((e, t) => e + t.ms, 0);
    return (0, l.jsxs)("div", {
        className: aX.M0,
        children: [
            (0, l.jsx)("div", {
                className: aX.pZ,
                "aria-hidden": !0,
                children:
                    0 === r
                        ? null
                        : n.map((e) => {
                              let { category: t, ms: n } = e;
                              return 0 === n
                                  ? null
                                  : (0, l.jsx)(
                                        "div",
                                        {
                                            className: `${aX.dL} ${re[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, l.jsx)("div", {
                className: aX.z4,
                role: "group",
                "aria-label": S.intl.string(E.default.UZ1OlR),
                children: aB.map((e) => {
                    let t = n.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, l.jsxs)(
                        "div",
                        {
                            className: aX.fI,
                            children: [
                                (0, l.jsx)("span", { className: `${aX.A9} ${re[e]}`, "aria-hidden": !0 }),
                                (0, l.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: aK(e) }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: S.intl.formatToPlainString(E.default.UffawN, { percent: s }),
                                }),
                                (0, l.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: S.intl.formatToPlainString(E.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, l.jsx)(p.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: aQ(a),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
let rn = { model: aX.WI, subagent: aX.uM, context: aX.eH, tool: aX.pw, delegated: aX.C8 };
function rl(e) {
    let { entry: t, selected: n, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = aU(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? S.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: aY(t.promptTokens) })
                : null != t.durationMs
                  ? aQ(t.durationMs)
                  : null;
    return (0, l.jsxs)(eA.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aX.nM} ${s ? aX.A5 : ""} ${"error" === t.status ? aX.Cr : ""} ${n ? aX.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, l.jsxs)("div", {
                className: aX.sU,
                children: [
                    (0, l.jsx)(aJ, { status: t.status }),
                    (0, l.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aX.PY} ${rn[o]}`,
                        children: aK(o),
                    }),
                    (0, l.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aX.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, l.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aX.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aX.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, l.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aX.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function ra(e) {
    var t;
    let { projectId: n, query: r } = e,
        i = (0, F.yK)([l1.Ay], () => l1.Ay.getTrace(n), [n]),
        s = (0, F.bG)([l1.Ay], () => l1.Ay.getHistoryState(n, "trace"));
    a.useEffect(() => aG, [n]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tL.clamp)((e / t) * 100, 25, 75);
        }, []),
        w = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tL.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, l_.A)({
            resizableDomNodeRef: g,
            orientation: l_.R.VERTICAL_TOP,
            getClampedValue: w,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), N(e));
            },
            [N],
        ),
        C = a.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), c((e) => (0, tL.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        M = a.useMemo(() => aV(i, r), [i, r]),
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null;
                    for (let l of e) {
                        let e = l.turnId ?? null;
                        ((null == n || n.turnId !== e) &&
                            ((n = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: n.entries, startedAt: l.startedAt, spanMs: null })),
                            n.entries.push(l));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                n = -1 / 0;
                            for (let l of e) {
                                let e = Date.parse(l.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != l.durationMs && (n = Math.max(n, e + l.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(n) ? Math.max(0, n - t) : null;
                        })(e.entries),
                    }));
                })(i)
                    .map((e, t) => ({ ...e, index: t, entries: aV(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aW(M, o),
        P = R?.kind === "tool" ? aW(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let D = a.useCallback(
        (e) => {
            if (0 === M.length) return;
            let t = M.findIndex((e) => e.id === o);
            function n(t) {
                e.preventDefault();
                let n = Math.max(0, Math.min(M.length - 1, t));
                (u(M[n].id), document.getElementById(`trace-${M[n].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? n(t + 1)
                : "ArrowUp" === e.key
                  ? n(-1 === t ? M.length - 1 : t - 1)
                  : "Home" === e.key
                    ? n(0)
                    : "End" === e.key
                      ? n(M.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [M, o, j],
    );
    return 0 === i.length
        ? (0, l.jsx)("div", {
              className: aX.uP,
              ref: h,
              children: (0, l.jsx)(ab, {
                  state: s,
                  emptyTitle: S.intl.string(E.default.Iyt8OJ),
                  emptyBody: S.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, l.jsxs)("div", {
              className: `${aX.uP} ${m ? aX.F4 : ""}`,
              ref: h,
              children: [
                  (0, l.jsxs)("div", {
                      className: aX.DK,
                      children: [
                          (0, l.jsx)(rt, { entries: i }),
                          (0, l.jsx)(av, { state: s }),
                          0 === M.length
                              ? (0, l.jsx)("div", {
                                    className: aX.Ie,
                                    children: (0, l.jsx)(p.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: S.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, l.jsxs)(ep.Ch, {
                                    ref: x,
                                    className: aX.Ns,
                                    children: [
                                        (0, l.jsx)(aj, { state: s }),
                                        (0, l.jsx)("div", {
                                            ref: v,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": S.intl.string(E.default["QATZ+A"]),
                                            className: aX.p_,
                                            children: T.map((e) => {
                                                let t = aL(e.startedAt),
                                                    n = S.intl.formatToPlainString(E.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, l.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: aX.mf,
                                                                children: [
                                                                    (0, l.jsx)(p.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: n,
                                                                    }),
                                                                    (0, l.jsx)(p.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, l.jsx)(p.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: aQ(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: aX.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, l.jsx)(
                                                                        rl,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? M[0]?.id),
                                                                            onSelect: y,
                                                                            onKeyDown: D,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == R
                      ? null
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": S.intl.string(E.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aX.b1,
                                    onPointerDown: A,
                                    onKeyDown: C,
                                }),
                                (0, l.jsx)("div", {
                                    ref: g,
                                    className: aX.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, l.jsx)(a9, {
                                        projectId: n,
                                        entry: R,
                                        parent: P,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var rr = n(365199),
    ri = n(402879);
function rs(e) {
    let { projectId: t, query: n, onQueryChange: r } = e,
        i = (0, F.yK)([l1.Ay], () => l1.Ay.getTrace(t), [t]),
        s = a.useRef(null),
        o = a.useCallback(() => {
            let e = JSON.stringify(
                {
                    kind: "vibegrations.trace",
                    version: 1,
                    project_id: t,
                    exported_at: new Date().toISOString(),
                    note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                    entries: i,
                },
                null,
                2,
            );
            (0, ri.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: aX.ED,
                children: (0, l.jsx)(ax.I, {
                    query: n,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: S.intl.string(E.default.NfncNw),
                    "aria-label": S.intl.string(E.default.NfncNw),
                }),
            }),
            (0, l.jsx)(tE.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tE.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, l.jsx)(tS.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": S.intl.string(S.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, l.jsx)(tC.rX, {
                            children: (0, l.jsx)(tC.Dr, {
                                id: "export",
                                label: S.intl.string(E.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, l.jsx)(n4.K, {
                        ...e,
                        buttonRef: s,
                        icon: rr.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": S.intl.string(S.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var ro = n(497243);
function ru(e) {
    let { projectId: t, onClose: n } = e,
        [r, i] = a.useState("logs"),
        [o, d] = a.useState(""),
        m = (0, F.bG)([lU.A], () => lU.A.isDeveloper),
        f = (0, F.bG)([l0], () => l0.getStatus(t), [t]),
        h = (0, F.bG)([l0], () => l0.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, c.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, c.R7)(t), [t]),
        x = a.useCallback(() => {
            let e = {
                captured_at: new Date().toISOString(),
                project_id: t,
                status: l0.getStatus(t),
                last_turn_usage: l0.getLastTurnUsage(t),
                last_compaction: l0.getLastCompaction(t),
                last_compaction_decline: l0.getLastCompactionDecline(t),
                model_calls: l0.getModelCalls(t),
                logs: l1.Ay.getLogs(t),
            };
            (0, lB.C)(JSON.stringify(e, null, 2), () =>
                (0, lD.P0)((0, l$.o)(S.intl.string(E.default.sDSDiO), lz.Ck.SUCCESS)),
            );
        }, [t]),
        p = S.intl.string(E.default.KampIf);
    return (0, l.jsxs)("section", {
        className: ro.nd,
        "aria-label": p,
        children: [
            (0, l.jsxs)(u.Ay, {
                "aria-label": p,
                toolbar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.Ay.Icon, {
                            icon: lO.CopyIcon,
                            tooltip: S.intl.string(E.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, l.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, l.jsx)(u.Ay.ChannelIcon, { icon: lq.BugIcon, "aria-hidden": !0 }),
                    (0, l.jsx)(u.Ay.Title, { children: p }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: ro.rf,
                children: [
                    (0, l.jsxs)(lG.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": S.intl.string(E.default.uNyR86),
                        className: ro.vR,
                        children: [
                            (0, l.jsx)(lG.V.Item, { id: "logs", children: S.intl.string(E.default["1mpzdJ"]) }),
                            (0, l.jsx)(lG.V.Item, { id: "worker", children: S.intl.string(E.default.whGHLD) }),
                            (0, l.jsx)(lG.V.Item, { id: "agent", children: S.intl.string(E.default.cK3AvL) }),
                            m
                                ? (0, l.jsx)(lG.V.Item, { id: "trace", children: S.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, l.jsx)(aN, { projectId: t })
                        : "worker" === r
                          ? (0, l.jsx)(aP, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && m
                            ? (0, l.jsxs)("div", {
                                  className: ro.uP,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: ro.XH,
                                          children: (0, l.jsx)(rs, { projectId: t, query: o, onQueryChange: d }),
                                      }),
                                      (0, l.jsx)(ra, { projectId: t, query: o }),
                                  ],
                              })
                            : (0, l.jsx)(af, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: m }),
                ],
            }),
        ],
    });
}
var rd = n(333007),
    rc = n(621466),
    rm = n(103557),
    rf = n(97808),
    rh = n(778712),
    rg = n(365912),
    rx = n(775121),
    rp = n(486020),
    rv = n(277437);
function rb(e) {
    let {
            at: t,
            bounds: n,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: u,
            onDismiss: d,
            canSubmit: c,
            closing: m,
            onUploadFile: f,
            onDeleteFile: h,
        } = e,
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = tZ({ onUploadFile: f, onDeleteFile: h }),
        j = a.useRef(null),
        y = (c || g.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            u(e.length > 0 ? e : void 0);
        }, [y, b, u]),
        [w, N] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let A = a.useRef(null),
        [C, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = C?.height ?? 44,
        T = n.left + 8,
        R = n.top + 8,
        P = Math.max(t.x, T),
        _ = Math.min(Math.max(t.y + 32 + 4, R), Math.max(R, n.top + n.height - M - 8));
    return (0, l.jsxs)("div", {
        ref: A,
        className: i()(rv.M0, { [rv.ho]: w && !m, [rv.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, l.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rv.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, l.jsx)(eP.m, {
                position: "bottom",
                text: S.intl.string(E.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, l.jsx)("button", {
                    type: "button",
                    className: rv.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": S.intl.string(E.default.d6Rqlu),
                    children: (0, l.jsx)(tA.H, { size: "custom", color: "currentColor", className: rv.WW }),
                }),
            }),
            (0, l.jsx)(tT.y, {
                autoFocus: !0,
                rows: 1,
                className: rv.hF,
                value: s,
                placeholder: "" === r ? S.intl.string(E.default.FK09JH) : `Edit ${r}`,
                "aria-label": S.intl.string(E.default["qR+sGX"]),
                onChange: (e) => o(e.target.value),
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            g.length > 0
                ? (0, l.jsx)("div", {
                      className: rv.ZO,
                      children: g.map((e) => (0, l.jsx)(tJ, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rj = n(320510),
    ry = n(940107);
function rk(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        n
    );
}
var rw = n(42843);
let rN = { x: 25, y: 21 };
function rA(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rE(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function rS(e, t, n, l) {
    let a = rE(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rC(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rI(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function rM(e) {
    let { projectId: t, applicationId: n, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != n && n === r ? t : null,
        { active: u, annotations: d } = (0, lS.Q_)(o),
        m = (0, n0.o4)(o),
        h = (0, eV.useHasAnyModalOpen)(),
        g = (0, F.bG)([ea.default], () => ea.default.getCurrentUser()),
        x = g?.id ?? null,
        [v, b] = a.useState(null),
        [j, y] = a.useState(null),
        [k, w] = a.useState(!1),
        [N, A] = a.useState(!1),
        [C, I] = a.useState(null),
        [M, T] = a.useState(!1),
        R = a.useRef(null),
        P = a.useRef(null),
        _ = a.useRef(null),
        [L, D] = a.useState(null),
        [$, z] = a.useState(!1),
        [O, q] = a.useState(null),
        [G, U] = a.useState(null),
        B = a.useRef(!1),
        [V, W] = a.useState(!1),
        [H, Q] = a.useState(null),
        Y = u && !m && !h;
    (a.useEffect(() => {
        if (!Y) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            b((t) => (rA(t, e) ? t : e));
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [Y, i]),
        a.useEffect(() => {
            if (!Y || null == o) return;
            let e = !0,
                t = i();
            if (null == t) return void A(!0);
            (w(!0), A(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rj.S)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? rI(t.response) : null;
                        null == n ? A(!0) : (y(n), (0, lS._w)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [Y, i, o]));
    let K = a.useRef(null);
    (a.useEffect(() => {
        if (!Y || null == v || null == o) return;
        if (null == j) {
            K.current = v;
            return;
        }
        if (rA(K.current, v)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            K.current = v;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rj.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !ee.current) return;
                        let n = rI(e.response);
                        null != n && (y(n), (0, lS._w)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let a = t[n];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rk(e.element);
                            null != r && l.set(a.id, r);
                        }),
                            (0, lS.fA)(o, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Y, v, j, d, o, i]),
        a.useEffect(() => {
            if (!Y)
                return () => {
                    (I(null), q(null), Q(null), y(null));
                };
        }, [Y]));
    let X = a.useRef(null),
        Z = a.useRef(null),
        J = a.useRef(!1),
        ee = a.useRef(!1);
    a.useEffect(() => {
        ((ee.current = Y), Y || ((X.current = null), (Z.current = null), (_.current = null), T(!1)));
    }, [Y]);
    let et = a.useCallback(
            function e() {
                if (J.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let n = i();
                null != n &&
                    ((J.current = !0),
                    (0, ry.W)(
                        n,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(
                            (e) => {
                                let t = Array.isArray(e?.results) ? e.results[0] : void 0;
                                if (null == t) return { status: "failed" };
                                if (t.ok) {
                                    let e = rk(t.element);
                                    return null == e ? { status: "failed" } : { status: "picked", target: e };
                                }
                                return "not_found" === t.code
                                    ? { status: "none" }
                                    : "invalid_command" === t.code
                                      ? { status: "unsupported" }
                                      : { status: "failed" };
                            },
                            () => ({ status: "failed" }),
                        )
                        .then((t) => {
                            if (((J.current = !1), ee.current)) {
                                if ("picked" !== t.status || rF(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? I(null)
                                        : "unsupported" === t.status && z(!0);
                                else {
                                    let e = (0, ev.ts)(t.target);
                                    (D((t) => (rL(t, e) ? t : e)),
                                        I((e) => {
                                            var n;
                                            return ((n = t.target),
                                            null == e || null == n
                                                ? e === n
                                                : e.ref === n.ref &&
                                                  e.rect.x === n.rect.x &&
                                                  e.rect.y === n.rect.y &&
                                                  e.rect.width === n.rect.width &&
                                                  e.rect.height === n.rect.height)
                                                ? e
                                                : t.target;
                                        }));
                                }
                                e();
                            }
                        }));
            },
            [i],
        ),
        en = a.useCallback(() => {
            if (null == O) return;
            let e = !B.current;
            (U({ at: O.at, label: O.label, draft: O.draft, instant: e }), W(e), q(null));
        }, [O]);
    (a.useEffect(() => {
        if (!V) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => W(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [V]),
        a.useEffect(() => {
            if (null == G) return;
            let e = setTimeout(() => U(null), rP);
            return () => clearTimeout(e);
        }, [G]));
    let el = null == j || null == v || j.viewport.width < 1 ? 1 : v.width / j.viewport.width,
        er = null != j || N,
        ei = a.useMemo(() => j?.elements ?? [], [j]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: v, scale: el };
    }, [v, el]);
    let eo = a.useCallback((e, t, n) => {
            (Q(null), (B.current = !1), q({ target: e, anchor: t, draft: "", at: n, label: (0, ev.ts)(e) }));
        }, []),
        eu = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        ed = a.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = R.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let n = P.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ed);
    let ec = a.useCallback(
            (e) => {
                if (null == v || null != H) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ed(), T(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > r_ || Math.abs(e.clientY - O.at.y) > r_) && (B.current = !0);
                    return;
                }
                if (!er) return void I(null);
                let t = eu(e, v);
                if ($) {
                    let e = (0, ev.jo)(ei, t.x, t.y),
                        n = null != e && rF(e, v, el) ? null : e;
                    if (null != n) {
                        let e = (0, ev.ts)(n);
                        D((t) => (rL(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Z.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Z.current = n), (X.current = n), et());
            },
            [v, el, er, eu, $, ei, O, H, ed, et],
        ),
        em = a.useCallback(() => {
            (T(!1), I(null), (Z.current = null), (X.current = null));
        }, []);
    a.useEffect(() => {
        if (!Y || !M || !er || $ || null != O || null != H) return;
        let e = _.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Z.current = l), (X.current = l), et());
    }, [Y, M, er, $, O, H, et]);
    let ef = a.useCallback(
            (e) => {
                if (null != O || null != H) {
                    (en(), Q(null));
                    return;
                }
                if (null == C || null == v) return;
                let t = eu(e, v);
                eo(C, (0, ev.ec)(C, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [C, v, eu, O, H, eo, en],
        ),
        eh = a.useCallback(() => {
            null != o && (I(null), (0, lS.PS)(o));
        }, [o]),
        eg = a.useCallback(() => {
            null != o &&
                (null != O
                    ? en()
                    : H?.confirmingRemove === !0
                      ? Q({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? Q(null)
                        : eh());
        }, [o, O, H, en, eh]),
        ex = a.useRef(eg),
        ep = a.useRef(eh);
    a.useLayoutEffect(() => {
        ((ex.current = eg), (ep.current = eh));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (Y)
            return (
                rx.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rx.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, rc.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rg.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ep.current();
        }
    }, [Y, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != H || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : ei.findIndex((e) => e.ref === C.ref);
                    I(ei[(n + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    eo(C, ev.F6, { x: (v?.left ?? 0) + C.rect.x * el, y: (v?.top ?? 0) + C.rect.y * el }));
            },
            [o, O, H, ei, C, eo, eg, v, el],
        ),
        ey = a.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    (((0, ev.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, c.dv)(o, (0, ev.v_)(O.target, O.draft), e), en(), I(null)));
            },
            [o, O, en],
        ),
        ek = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, c.vX)(o, e)), [o]),
        ew = a.useCallback((e) => (null == o ? Promise.resolve() : (0, c.Vm)(o, e)), [o]),
        eN = a.useCallback(() => {
            null == o ||
                null == H ||
                null == x ||
                ((0, ev.to)(H.draft) && ((0, lS.dy)(o, x, H.id, H.draft.trim()), Q({ ...H, editing: !1 })));
        }, [o, H, x]),
        eA = a.useCallback(() => {
            null != o && null != H && null != x && ((0, lS.PR)(o, x, H.id), Q(null));
        }, [o, H, x]),
        eE = u
            ? k
                ? S.intl.string(E.default.jQQ8i2)
                : N
                  ? S.intl.string(E.default.zvU2QH)
                  : S.intl.formatToPlainString(E.default.A4HDMU, { count: d.length })
            : "",
        eS = Y && null != v,
        eC = M && null == H,
        eI = null == H ? null : d.find((e) => e.id === H.id),
        eM = O?.target ?? eI?.target ?? null,
        eT = O ?? G,
        eR = O ?? (G?.instant === !0 ? null : G),
        eP =
            null != eI && null != v
                ? (function (e, t) {
                      let { left: n, top: l } = rC(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(rS(eI.target, eI.anchor, v, el), v)
                : null;
    return (0, rd.createPortal)(
        (0, l.jsxs)("div", {
            ref: eb,
            className: rw.Li,
            children: [
                (0, l.jsx)("div", {
                    className: rw.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eE,
                }),
                eS
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: rw.MT,
                                  style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                  "data-plain-cursor": eC ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": S.intl.string(E.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ec,
                                  onMouseLeave: em,
                                  onClick: ef,
                                  onKeyDown: ej,
                              }),
                              null != C && null == O && null == H ? (0, l.jsx)(rD, { box: rE(C, v, el) }) : null,
                              (0, l.jsx)("div", {
                                  ref: R,
                                  className: rw.aZ,
                                  children: (0, l.jsx)("div", {
                                      className: rw.xz,
                                      "data-shown": null != C && null == H && null == O ? "" : void 0,
                                      "data-instant": V ? "" : void 0,
                                      children: (0, l.jsxs)(p.E, {
                                          variant: "text-xs/medium",
                                          className: rw.Ux,
                                          children: [
                                              null == L
                                                  ? null
                                                  : (0, l.jsx)("span", { className: rw.Tl, children: L.kind }),
                                              null == L || "" === L.name
                                                  ? null
                                                  : (0, l.jsxs)("span", { className: rw.kh, children: [" ", L.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  ref: P,
                                  className: rw.Y,
                                  children: eC
                                      ? (0, l.jsx)(nb.A, { className: rw.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eR
                                  ? null
                                  : (0, l.jsx)("div", {
                                        className: rw.aZ,
                                        style: { transform: `translate3d(${eR.at.x + 12}px, ${eR.at.y + 12}px, 0)` },
                                        children: (0, l.jsx)("div", {
                                            className: rw.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, l.jsxs)(p.E, {
                                                variant: "text-xs/medium",
                                                className: rw.Ux,
                                                children: [
                                                    (0, l.jsx)("span", { className: rw.Tl, children: eR.label.kind }),
                                                    "" === eR.label.name
                                                        ? null
                                                        : (0, l.jsxs)("span", {
                                                              className: rw.kh,
                                                              children: [" ", eR.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eM
                                  ? (0, l.jsx)("div", { className: rw.D0, style: rE(eM, v, el), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let n = rS(e.target, e.anchor, v, el),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, l.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rw.xL,
                                          style: { ...rC(n, v), width: 24, height: 24 },
                                          "aria-label": S.intl.formatToPlainString(E.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ev.iw)(e.target),
                                          }),
                                          "aria-expanded": H?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == O && Q(a);
                                          },
                                          onFocus: () => {
                                              null == O && Q(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), en(), Q(a));
                                          },
                                          children: (0, l.jsx)(rT, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eT
                                  ? null
                                  : (0, l.jsx)(rb, {
                                        at: { x: eT.at.x + 12, y: eT.at.y + 12 },
                                        bounds: v,
                                        kind: eT.label.kind,
                                        value: eT.draft,
                                        canSubmit: null != O && (0, ev.to)(eT.draft),
                                        onChange: (e) => {
                                            null != O && q({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        onDeleteFile: ew,
                                        closing: null == O,
                                    }),
                              null != eI && null != H && null != eP
                                  ? (0, l.jsxs)(rR, {
                                        point: eP,
                                        frame: v,
                                        authorId: eI.authorId,
                                        title: (0, ev.iw)(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            H.confirmingRemove ? Q({ ...H, confirmingRemove: !1 }) : Q(null);
                                        },
                                        onMouseLeave: () => {
                                            H.editing || H.confirmingRemove || Q(null);
                                        },
                                        children: [
                                            H.editing
                                                ? (0, l.jsx)(rm.f, {
                                                      autoFocus: !0,
                                                      label: S.intl.string(E.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: H.draft,
                                                      maxLength: ev.gq,
                                                      rows: 3,
                                                      onChange: (e) => Q({ ...H, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                                                      },
                                                  })
                                                : (0, l.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rw.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, lS.zz)(eI, x)
                                                ? (0, l.jsx)("div", {
                                                      className: rw.eB,
                                                      children: H.confirmingRemove
                                                          ? (0, l.jsxs)(l.Fragment, {
                                                                children: [
                                                                    (0, l.jsx)(p.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rw.nv,
                                                                        children: S.intl.string(E.default["IMrOF/"]),
                                                                    }),
                                                                    (0, l.jsx)(f.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: S.intl.string(E.default.cLsnYH),
                                                                        onClick: () =>
                                                                            Q({ ...H, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, l.jsx)(f.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: S.intl.string(E.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, l.jsxs)(l.Fragment, {
                                                                children: [
                                                                    (0, l.jsx)(f.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: S.intl.string(E.default.ncz32j),
                                                                        onClick: () =>
                                                                            Q({
                                                                                ...H,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    H.editing
                                                                        ? (0, l.jsx)(f.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ev.to)(H.draft),
                                                                              text: S.intl.string(E.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, l.jsx)(f.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: S.intl.string(E.default.DKZggU),
                                                                              onClick: () =>
                                                                                  Q({
                                                                                      ...H,
                                                                                      editing: !0,
                                                                                      draft: eI.comment,
                                                                                  }),
                                                                          }),
                                                                ],
                                                            }),
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                          ],
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
function rT(e) {
    let { authorId: t } = e,
        n = (0, F.bG)([ea.default], () => ea.default.getUser(t), [t]);
    return (0, l.jsx)(rf.eu, {
        src: null == n ? null : rp.Ay.getUserAvatarURL(n),
        size: rh._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rR(e) {
    let t,
        n,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rN);
    a.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: A,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (i = Math.max((r = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, r), i)), originX: u.x - s, originY: u.y - o }),
        E = {
            left: k,
            top: w,
            "--custom-vibegrations-card-origin-x": `${N}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, l.jsxs)("div", {
        ref: v,
        className: rw.Nr,
        style: E,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, l.jsxs)("div", {
                className: rw.MY,
                children: [
                    (0, l.jsx)("span", { ref: b, className: rw.ip, children: (0, l.jsx)(rT, { authorId: c }) }),
                    (0, l.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rw.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: rw.zI, children: x }),
        ],
    });
}
let rP = 300,
    r_ = 2;
function rL(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rF(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function rD(e) {
    let { box: t } = e;
    return (0, l.jsx)("div", { className: rw.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var r$ = n(11055),
    rz = n(533140),
    rO = n(342667);
function rq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        o = (0, n0.o4)(null != n && n === r ? t : null),
        u = (0, eV.useHasAnyModalOpen)(),
        d = (0, rz.V0)(s);
    a.useEffect(() => {
        o && d && null != s && (0, rz.c2)(s);
    }, [o, d, s]);
    let [c, m] = a.useState(null);
    a.useEffect(() => {
        if (!o) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            m((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [o, i]);
    let f = o && null != c && !u;
    return (0, rd.createPortal)(
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: rO.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: o ? S.intl.string(E.default.dIE9zO) : "",
                }),
                f
                    ? (0, l.jsx)("div", {
                          className: rO.o,
                          style: { left: c.left, top: c.top, width: c.width, height: c.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var rG = n(314116),
    rU = n(364522),
    rB = n(237528),
    rV = n(664121),
    rW = n(95477),
    rH = n(381849),
    rQ = n(724401);
function rY(e) {
    let t = new Date(e);
    function n(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`;
}
function rK(e) {
    let t,
        { projectId: n, installScope: r, onClose: i } = e,
        o = "user" === r ? ["stable"] : ["preview", "stable"],
        [d, h] = a.useState(o[0] ?? "stable"),
        [g, x] = a.useState({ status: "loading" }),
        [v, b] = a.useState(""),
        [j, y] = a.useState(""),
        [k, w] = a.useState({ phase: "idle" }),
        N = "busy" === k.phase,
        [A, C] = a.useState(0),
        I = a.useCallback(() => C((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${n}|${d}`;
        return (
            Promise.all([(0, c.DM)(n, d), (0, c.ms)(n, d)])
                .then((n) => {
                    let [l, a] = n;
                    e || x({ status: "loaded", key: t, points: l, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || x({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [n, d, A]);
    let M = "loading" !== g.status && g.key === `${n}|${d}` ? g : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, rG.A)({
                    title: S.intl.string(E.default.S3WHxG),
                    subtitle:
                        1 === o.length
                            ? S.intl.formatToPlainString(E.default["0lt6bH"], { target: e })
                            : S.intl.formatToPlainString(E.default.zVcDfj, {
                                  environment: S.intl.string(
                                      "preview" === d ? E.default["/kYdZe"] : E.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: S.intl.string(E.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (w({ phase: "busy", environment: d, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (w({
                                              phase: "settled",
                                              environment: d,
                                              tone: "positive",
                                              text: S.intl.string(E.default.kIWqXR),
                                          }),
                                          I())
                                        : "expired" === e.code
                                          ? (w({
                                                phase: "settled",
                                                environment: d,
                                                tone: "danger",
                                                text: S.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                            }),
                                            I())
                                          : "unconfirmed" === e.code
                                            ? (w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: S.intl.string(E.default["2xSPXh"]),
                                              }),
                                              I())
                                            : w({
                                                  phase: "settled",
                                                  environment: d,
                                                  tone: "danger",
                                                  text: S.intl.string(E.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    w({
                                        phase: "settled",
                                        environment: d,
                                        tone: "danger",
                                        text: S.intl.string(E.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [d, o, I],
        ),
        R = a.useCallback(() => {
            (w({ phase: "busy", environment: d, kind: "create" }),
                (0, c._m)(n, d, v)
                    .then(() => {
                        (b(""),
                            w({
                                phase: "settled",
                                environment: d,
                                tone: "positive",
                                text: S.intl.string(E.default.mfAoFT),
                            }),
                            I());
                    })
                    .catch(() => {
                        w({ phase: "settled", environment: d, tone: "danger", text: S.intl.string(E.default.uhhqP3) });
                    }));
        }, [n, d, v, I]),
        P = "loaded" === M.status ? M.window : null,
        _ = "loaded" === M.status ? M.nowMs : 0,
        L = P?.earliestRestoreTimestampMs ?? _ - 2592e6,
        F = "" === j ? null : new Date(j).getTime(),
        D = null != F && !Number.isNaN(F) && F >= L && F <= _,
        $ =
            "busy" === k.phase
                ? "restore" === k.kind && k.environment === d
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === k.phase && k.environment === d
                  ? { kind: "notice", tone: k.tone, text: k.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === M.status
                ? (0, l.jsx)("div", { className: rQ.E8, children: (0, l.jsx)(m.y, {}) })
                : "failed" === M.status
                  ? (0, l.jsx)("div", {
                        className: rQ.E8,
                        role: "alert",
                        children: (0, l.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: S.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === M.points.length
                    ? (0, l.jsx)("div", {
                          className: rQ.E8,
                          children: (0, l.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, l.jsx)(rU.Ip, {
                          className: rQ.p_,
                          children: (0, l.jsx)("div", {
                              className: rQ.jO,
                              children: M.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rH.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rH._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, l.jsxs)("div", {
                                          className: rQ.KW,
                                          children: [
                                              (0, l.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return S.intl.string(E.default.h4zhWL);
                                                          case "undo":
                                                              return S.intl.string(E.default["c/tNny"]);
                                                          default:
                                                              return S.intl.string(E.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != a.relative &&
                                                  (0, l.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: a.absolute ?? void 0,
                                                      children: a.relative,
                                                  }),
                                              e.expired &&
                                                  (0, l.jsx)(rB.v, {
                                                      text: S.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, l.jsxs)(
                                            "div",
                                            {
                                                className: rQ.AD,
                                                title: S.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, l.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rQ.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, l.jsxs)(
                                            eA.D,
                                            {
                                                className: rQ.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, c.$D)(n, e.id),
                                                          ),
                                                children: [
                                                    (0, l.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        className: rQ.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        );
                              }),
                          }),
                      })),
        (0, l.jsxs)("section", {
            className: rQ.nd,
            "aria-label": S.intl.string(E.default.FRjicO),
            children: [
                (0, l.jsxs)(u.Ay, {
                    "aria-label": S.intl.string(E.default.FRjicO),
                    toolbar: (0, l.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, l.jsx)(u.Ay.ChannelIcon, { icon: rV.R, "aria-hidden": !0 }),
                        (0, l.jsx)(u.Ay.Title, { children: S.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: rQ.rf,
                    children: [
                        (0, l.jsxs)("div", {
                            className: rQ.ne,
                            children: [
                                o.length > 1 &&
                                    (0, l.jsxs)(lG.V, {
                                        selectedItem: d,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (h(e), C(0));
                                        },
                                        "aria-label": S.intl.string(E.default.CNvRyJ),
                                        className: rQ.vR,
                                        children: [
                                            (0, l.jsx)(lG.V.Item, {
                                                id: "preview",
                                                children: S.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, l.jsx)(lG.V.Item, {
                                                id: "stable",
                                                children: S.intl.string(E.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, l.jsxs)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        S.intl.formatToPlainString(E.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === $.kind
                                    ? (0, l.jsxs)("div", {
                                          className: rQ.lm,
                                          role: "status",
                                          children: [
                                              (0, l.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, l.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  children: S.intl.string(E.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === $.kind
                                      ? (0, l.jsx)("div", {
                                            className: rQ.lm,
                                            role: "danger" === $.tone ? "alert" : "status",
                                            children: (0, l.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === $.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: $.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, l.jsxs)("div", {
                            className: rQ.qr,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: rQ.Rv,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: rQ.Fv,
                                            children: (0, l.jsx)(rW.k, {
                                                label: S.intl.string(E.default.hJb78b),
                                                value: v,
                                                onChange: b,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, l.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: S.intl.string(E.default["14UarN"]),
                                            onClick: R,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: rQ._A,
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: rQ.kv,
                                            children: (0, l.jsx)(rW.k, {
                                                label: S.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: j,
                                                min: rY(L),
                                                max: rY(_),
                                                disabled: N || null == P,
                                                onChange: y,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, l.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: S.intl.string(E.default["3D/vYN"]),
                                            disabled: N || !D,
                                            onClick: () => {
                                                null != F && T(new Date(F).toLocaleString(), () => (0, c.dz)(n, d, F));
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var rX = n(406810),
    rZ = n(977628);
function rJ(e) {
    let t,
        { projectId: n, onClose: r, onRestore: i } = e,
        [o, d] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, c.ST)(n)
                    .then((t) => {
                        e || d({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || d({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n]),
        (t =
            "loading" === o.status
                ? (0, l.jsx)("div", { className: rZ.E8, children: (0, l.jsx)(m.y, {}) })
                : "failed" === o.status
                  ? (0, l.jsx)("div", {
                        className: rZ.E8,
                        role: "alert",
                        children: (0, l.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: S.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === o.entries.length
                    ? (0, l.jsx)("div", {
                          className: rZ.E8,
                          children: (0, l.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: S.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, l.jsx)(rU.Ip, {
                          className: rZ.p_,
                          children: (0, l.jsx)("div", {
                              className: rZ.jO,
                              children: o.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rH.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rH._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, l.jsxs)(
                                      eA.D,
                                      {
                                          className: rZ.f_,
                                          onClick: () =>
                                              (0, rG.A)({
                                                  title: S.intl.string(E.default.qOUOPE),
                                                  subtitle: S.intl.string(E.default.k2JBj5),
                                                  confirmText: S.intl.string(E.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, l.jsx)(p.E, {
                                                  variant: "text-md/medium",
                                                  className: rZ.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != n.relative &&
                                                  (0, l.jsx)(p.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: n.absolute ?? void 0,
                                                      children: n.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, l.jsxs)("section", {
            className: rZ.nd,
            "aria-label": S.intl.string(E.default.jAWwzi),
            children: [
                (0, l.jsxs)(u.Ay, {
                    "aria-label": S.intl.string(E.default.jAWwzi),
                    toolbar: (0, l.jsx)(u.Ay.Icon, { icon: s.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, l.jsx)(u.Ay.ChannelIcon, { icon: rX.ClockIcon, "aria-hidden": !0 }),
                        (0, l.jsx)(u.Ay.Title, { children: S.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, l.jsx)("div", { className: rZ.rf, children: t }),
            ],
        })
    );
}
var r0 = n(120426),
    r1 = n(873727),
    r2 = n(147248),
    r3 = n(418842),
    r7 = n(885386),
    r4 = n(171936),
    r6 = n(796036);
function r5(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: d,
            mainClassName: c,
            content: m,
            sidebar: f,
        } = e,
        [h, g] = a.useState(null),
        x = (0, o.A)(r, u),
        p = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, F.bG)([lj.A], () => (0, r1.x4)(lj.A.theme)),
            l = (0, F.bG)([r2.A], () => r2.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, F.cf)([t_.Ay], () => ({
                reducedMotion: t_.Ay.useReducedMotion,
                fontScale: (0, r1.U0)(),
                highContrast: t_.Ay.isHighContrastModeEnabled,
                forcedColors: t_.Ay.useForcedColors,
                underlineLinks: t_.Ay.alwaysShowLinkDecorations,
            })),
            d = r7.hH.useSetting(),
            c = (0, r3.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let l = (0, r0.F)(e, t);
                if (null == l) return;
                g.current = l;
                let a = {
                    revision: ++h.current,
                    baseTheme: n,
                    customTheme: (0, r1.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, ry.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, i, t, s, d, e, r, c, u]),
            p = a.useRef(x);
        a.useLayoutEffect(() => {
            p.current = x;
        });
        let v = a.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    ((m.current = !1), f.current || p.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (f.current = !1),
                () => {
                    f.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                v();
            }, [l, v]),
            a.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            a.useLayoutEffect(() => {
                let n = (0, r0.F)(e, t);
                null != n && n !== g.current && v();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, r0.F)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, v]),
            a.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(h, p),
        a.useEffect(() => {
            if (null != t) return (0, r4.mn)(t, () => (0, r0.F)(h, p));
        }, [t, h, p]));
    let v = a.useCallback(() => (0, r0.F)(h, p), [h, p]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: i()(eg.Mh, c),
                children: [d, (0, l.jsx)("div", { ref: g, className: eg.fm, children: m })],
            }),
            f,
            (0, l.jsx)(rq, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                frameId: p,
            }),
            (0, l.jsx)(rM, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function r8(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: f,
            chatOpen: h,
            onCloseChat: g,
            chatHeaderAction: x,
            versionHistoryOpen: p = !1,
            restorePointsOpen: v = !1,
            onCloseRestorePoints: b,
            installScope: j = null,
            onCloseVersionHistory: y,
            onRestoreVersion: k,
            debugOpen: w = !1,
            onCloseDebug: N,
            restoreState: A,
            previewReady: C,
            previewGate: I,
            channelMessages: M,
            availability: T,
            activeMode: R,
            widgetApplicationId: _,
        } = e,
        L = a.useRef(null),
        [F, D] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === P.U4.MAIN) return ((0, d.HV)(r), () => (0, d.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, c.Hc)(t), (0, r6.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = L.current;
            if (null == e) return;
            function t() {
                null != e && D(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        a.useEffect(() => () => (0, d.Zq)(0), []));
    let $ = Math.max(360, F - 320),
        z = null != M ? M.open : h,
        O = h || m.type === P.U4.MAIN;
    return (0, l.jsx)("div", {
        ref: L,
        className: eg.LB,
        children: (0, l.jsx)(r5, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: r,
            previewApplicationId: o,
            surface: m,
            header: f,
            mainClassName: null == f ? void 0 : i()(eg.ez, { [eg.zt]: z }),
            content: (0, l.jsx)(ed, {
                applicationId: r,
                previewApplicationId: o,
                surface: m,
                previewReady: C,
                previewGate: I,
                availability: T,
                activeMode: R,
                widgetApplicationId: _,
            }),
            sidebar:
                null != M
                    ? (0, l.jsx)(lF, {
                          open: M.open,
                          maxWidth: $,
                          onWidthChange: d.Zq,
                          children: M.open
                              ? (0, l.jsx)(ex, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && O
                      ? (0, l.jsx)(lF, {
                            open: h,
                            maxWidth: $,
                            onWidthChange: d.Zq,
                            children: (0, l.jsx)("div", {
                                className: eg.cO,
                                children: w
                                    ? (0, l.jsx)(ru, { projectId: t, onClose: N ?? (() => {}) }, t)
                                    : p
                                      ? (0, l.jsx)(
                                            rJ,
                                            { projectId: t, onClose: y ?? (() => {}), onRestore: k ?? (() => {}) },
                                            t,
                                        )
                                      : v
                                        ? (0, l.jsx)(rK, { projectId: t, installScope: j, onClose: b ?? (() => {}) }, t)
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(r$.A, { projectId: t }),
                                                  (0, l.jsx)(u.Ay, {
                                                      "aria-label": S.intl.string(S.t["/VQax8"]),
                                                      toolbar: (0, l.jsxs)(l.Fragment, {
                                                          children: [
                                                              x,
                                                              null == g
                                                                  ? null
                                                                  : (0, l.jsx)(u.Ay.Icon, {
                                                                        icon: s.P,
                                                                        tooltip: S.intl.string(E.default.YdgE0j),
                                                                        onClick: g,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, l.jsx)(u.Ay.Title, {
                                                          children: S.intl.string(S.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: eg.cb,
                                                      children: (0, l.jsx)(lM, { projectId: t, restoreState: A }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
