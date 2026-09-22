l.d(t, { A: () => it });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(991690),
    o = l(789645),
    u = l(672929),
    d = l(58736),
    c = l(948230),
    m = l(277977),
    f = l(289873),
    h = l(627363),
    g = l(580954),
    x = l(753514),
    p = l(297264),
    v = l(834730),
    b = l(625180),
    j = l(91242),
    y = l(812901),
    k = l(317608),
    N = l(206600),
    w = l(869146),
    A = l(742023),
    E = l(697744),
    S = l(50617),
    C = l(375708),
    I = l(296167);
function M(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, E.c)();
    return (
        a.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != i()) ? r.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
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
        (0, n.jsxs)("div", {
            className: t,
            onMouseEnter: r.onMouseEnter,
            onMouseLeave: r.onMouseLeave,
            children: [
                (0, n.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, n.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: I.o,
                    children: C.intl.string(S.default.jTuX7C),
                }),
            ],
        })
    );
}
var T = l(328284);
function R(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(T.Bf, a && T.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: T.Ux,
                children: [
                    (0, n.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var P = l(652215),
    _ = l(165610),
    L = l(963691);
function F(e) {
    let { applicationId: t, surface: l } = e,
        { frame: r, state: i } = (0, N.A)({ applicationId: t, surface: l }),
        s = (0, _.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = j.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)) return;
                    let l = j.A.getMainFrame()?.id === e;
                    t.intent === _.sV.MAIN
                        ? (l || b.A.promoteFrame(e), b.A.resetFrameLayoutModes(e))
                        : l && b.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = j.A.getFrame(s)) &&
                        ((0, _.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === _.sV.INLINE && b.A.promoteFrame(s),
                              b.A.updateFrameLayoutMode({ frameId: s, layoutMode: _.y0.PIP }))
                            : e.intent === _.sV.MAIN && b.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        i)
    ) {
        case N.n.Launched:
            return (0, n.jsx)(k.A, { frameId: r.id, level: y.A.WithinAppContent, className: L.Z7 });
        case N.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(S.default["4f6Vkr"]),
                    body: C.intl.string(S.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(M, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(S.default.FHOJiH),
                    body: C.intl.string(S.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
            return (0, n.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: C.intl.string(S.default.MeLWCr),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: C.intl.string(S.default["1RCbQT"]),
                    }),
                ],
            });
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(f.y, {}) });
    }
}
var D = l(17928),
    $ = l(323384),
    O = l(308528),
    z = l(334738),
    q = l(688438),
    U = l(355622),
    B = l(734057),
    G = l(531685),
    V = l(365971),
    W = l(362417);
function H(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: W.f,
        children: [
            (0, n.jsx)($.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function K() {
    return (0, n.jsx)("div", { className: W.f, children: (0, n.jsx)(f.y, {}) });
}
function Y(e) {
    let t,
        l,
        { previewApplicationId: r } = e,
        { data: i, isLoading: s } = (0, h.YY)(r),
        o = i?.bot?.id ?? null,
        u = (0, D.bG)([B.A], () => {
            if (null == o) return null;
            let e = B.A.getDMFromUserId(o);
            return null != e ? B.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        a.useEffect(() => {
            null != t && O.A.preload(P.ME, t);
        }, [t]),
        (l = (0, D.bG)([G.A], () => G.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, V.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = a.useState(null),
        m = null != o && d === o;
    return (a.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            O.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, n.jsx)(K, {})
        : null == o || m
          ? (0, n.jsx)(H, { message: C.intl.string(S.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: W.g,
                  children: (0, n.jsx)(q.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var Q = l(821609),
    X = l(887909),
    Z = l(570962),
    J = l(590744);
function ee(e) {
    let {
        label: t,
        title: l,
        subtitle: a,
        header: r,
        body: s,
        actions: o,
        nextStep: u,
        appDetails: d,
        hasContentBackground: c,
        noPadding: m,
        obscured: f,
    } = (0, X.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, n.jsxs)("section", {
        className: J.Nr,
        "aria-label": t,
        children: [
            (0, n.jsx)("div", {
                className: J.rf,
                children: (0, n.jsx)(Z.A, {
                    obscured: !0 === f,
                    children: (0, n.jsxs)("div", {
                        className: J.Gq,
                        children: [
                            null != l
                                ? (0, n.jsxs)("div", {
                                      className: J.z3,
                                      children: [
                                          (0, n.jsx)(p.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: l,
                                          }),
                                          null != a
                                              ? (0, n.jsx)(v.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: a,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            r,
                            (0, n.jsxs)("div", {
                                className: i()(J.Qs, c ? J.cw : null, m ? J.pN : null),
                                children: [s, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, n.jsx)("div", {
                      className: J.o1,
                      children: o.map((e, t) => (0, n.jsx)(Q.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var et = l(598748),
    el = l(486610),
    en = l(531913),
    ea = l(587895),
    er = l(633075),
    ei = l(946356),
    es = l(139730),
    eo = l(479299),
    eu = l(287809),
    ed = l(58551),
    ec = l(71495);
function em(e) {
    let { applicationId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(ef, { applicationId: t, user: l });
}
function ef(e) {
    let { applicationId: t, user: l } = e,
        r = (0, D.bG)([ea.A], () => ea.A.getApplication(t)),
        i = a.useMemo(() => new er.R({ applicationId: t }), [t]),
        s = (0, en.A)(l.id, t),
        o = s.surfaceConfigs,
        u = (0, ed.yZ)({
            widgetTop: null != o[et.m.WIDGET_TOP],
            widgetBottom: null != o[et.m.WIDGET_BOTTOM],
            miniProfile: null != o[et.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, n.jsx)("div", {
              className: ec.$C,
              children: (0, n.jsxs)("div", {
                  className: ec.PV,
                  children: [
                      u.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: ec.a9,
                                children: (0, n.jsx)(ei.A.Overlay, {
                                    className: ec.Qb,
                                    children: (0, n.jsx)(eo.A, {
                                        user: l,
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
                          ? (0, n.jsx)("div", {
                                className: ec.ql,
                                children: (0, n.jsx)(es.A, { application: r, rendererProps: s, renderText: el.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var eh = l(976102);
function eg(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: r,
            previewReady: i,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, r),
        { isLoading: p } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != m && (0, g.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(f.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eh.q,
            children: null == s.authorizeProps ? (0, n.jsx)(f.y, {}) : (0, n.jsx)(ee, { ...s.authorizeProps }),
        });
    if (!i) return (0, n.jsx)(M, { className: eh.q });
    if (null == t) return null;
    if (p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(f.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, n.jsx)(F, { applicationId: t, surface: r })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, n.jsx)("div", {
                          className: eh.q,
                          children: (0, n.jsx)(R, {
                              wide: !0,
                              title: C.intl.string(S.default.SGHO9K),
                              body: C.intl.string(S.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(em, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Y, { previewApplicationId: l }) : null,
        ],
    });
}
var ex = l(534890),
    ep = l(738876),
    ev = l(47167),
    eb = l(31717),
    ej = l(372054);
function ey(e) {
    let { channel: t, guild: l, onClose: a } = e,
        r = (0, ev.Ay)(t),
        i = (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: ej.Wx,
        children: [
            (0, n.jsx)(ep.A, { channel: t, draftType: eb.C.ChannelMessage }),
            (0, n.jsxs)(d.Ay, {
                toolbar: i,
                "aria-label": C.intl.string(C.t.BIYAqa),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: ex.ChatIcon, "aria-label": C.intl.string(C.t["/VQax8"]) }),
                    (0, n.jsx)(d.Ay.Title, { children: r }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ej.GZ,
                children: (0, n.jsx)(q.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ek = l(689175),
    eN = l(29692),
    ew = l(903586),
    eA = l(66708),
    eE = l(74029),
    eS = l(783791),
    eC = l(717447),
    eI = l(29080),
    eM = l(46054),
    eT = l(76275);
function eR(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(S.default.MdXWEK);
}
function eP(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, ew.B4)(t),
        i = r.filter((e) => "message" === e.type).at(-1),
        s = (0, ew.Lf)(t),
        o = s && null != i && i.content.trim() === l.trim(),
        u = !n && "" !== l && !o;
    return {
        streamed: r,
        lastStreamedMessage: i,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
(l(134528), l(947204));
var e_ = l(939249),
    eL = l(478016),
    eF = l(34136);
function eD(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(eF.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(eF.wx, null != l && eF.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var e$ = l(113757);
function eO(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(e_.D, {
        className: i()(e$.nM, { [e$.f1]: o, [e$.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(S.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: e$.jo,
                children: [
                    l
                        ? (0, n.jsx)(eL.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: e$.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: e$.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ez(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(eD, {
        title: C.intl.string(S.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                eO,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eq = l(435619),
    eU = l(866665),
    eB = l(885574),
    eG = l(430392),
    eV = l(632015),
    eW = l(256905),
    eH = l(824757);
function eK(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: eH.uW,
        children: [
            (0, n.jsxs)("span", {
                className: eH.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function eY() {
    return (0, n.jsx)(eU.m, {
        text: C.intl.string(S.default.DXe2dP),
        children: (0, n.jsx)(e_.D, {
            className: eH.bk,
            "aria-label": C.intl.string(S.default.Y6y4nQ),
            children: (0, n.jsx)(eB.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eQ(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(eK, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: eH.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: eH.jw,
                              children: (0, n.jsx)(v.E, {
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
function eX(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? $.k : eG.RobotIcon;
    return (0, n.jsxs)("span", {
        className: eH.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: eH.L6,
                      children: [
                          (0, n.jsx)(eV.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: C.intl.string(S.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: eH.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: C.intl.string(t ? C.t.IC5Ann : S.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { projectId: t, design: l } = e,
        { id: r } = l,
        {
            src: i,
            gone: s,
            handleError: o,
        } = (function (e, t) {
            let [l, n] = a.useState(null),
                [r, i] = a.useState(!1),
                [s, o] = a.useState(0);
            return (
                a.useEffect(() => {
                    let l = !1;
                    return (
                        (0, m.PK)(e, t).then(
                            (e) => {
                                l || n(e);
                            },
                            () => {
                                l || (0 === s ? o(1) : i(!0));
                            },
                        ),
                        () => {
                            l = !0;
                        }
                    );
                }, [e, t, s]),
                {
                    src: l,
                    gone: r,
                    handleError: a.useCallback(() => {
                        (n(null),
                            (0, m.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? o(1) : i(!0);
                                },
                                () => i(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, r),
        u = C.intl.string(S.default.FW8UcU),
        d = a.useCallback(() => {
            (0, m.PK)(t, r).then(
                (e) => {
                    (0, eW.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, r, u]);
    return s
        ? null
        : (0, n.jsx)(eK, {
              label: C.intl.string(S.default["9W8SbY"]),
              info: (0, n.jsx)(eY, {}),
              children: (0, n.jsx)(e_.D, {
                  className: eH.xX,
                  onClick: d,
                  "aria-label": C.intl.string(S.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: eH.sN, onError: o }) : null,
              }),
          });
}
function eJ(e) {
    let { projectId: t, proposal: l } = e;
    return (0, n.jsx)(eD, {
        title: C.intl.string(S.default["60htw+"]),
        trailing: (0, n.jsx)(eX, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: eH.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(eZ, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(eK, {
                          label: C.intl.string(S.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: eH.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: eH.Aw,
                                          children: (0, n.jsx)(v.E, {
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
                l.commands.length > 0
                    ? (0, n.jsx)(eK, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: eH.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: eH.uX,
                                          children: [
                                              (0, n.jsxs)(v.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, n.jsx)(v.E, {
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
                (0, n.jsx)(eQ, { label: C.intl.string(S.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(eQ, { label: C.intl.string(S.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var e0 = l(192308),
    e1 = l(479191);
function e2(e) {
    let { projectId: t, request: r } = e,
        i = a.useCallback(() => {
            (0, e0.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]);
    return (0, n.jsxs)("article", {
        className: e1.Lo,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: C.intl.string(S.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : C.intl.string(S.default.jxvtin),
            }),
            (0, n.jsx)("div", {
                className: e1.cS,
                children: r.fields.map((e) =>
                    (0, n.jsx)(
                        "span",
                        {
                            className: e1.$H,
                            children: (0, n.jsx)(v.E, {
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
            (0, n.jsx)("div", {
                className: e1.sq,
                children: (0, n.jsx)(Q.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: C.intl.string(S.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var e7 = l(976814),
    e6 = l(973e3);
function e5(e) {
    let { projectId: t, request: l } = e,
        r = (0, D.bG)([m.Ay], () => m.Ay.getSettings(t)),
        i = (l.keys ?? []).map((e) => r?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = a.useCallback(() => {
            (0, e7.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0, isPreview: !0 });
        }, [t, l]);
    return (0, n.jsxs)("article", {
        className: e6.Mk,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: C.intl.string(S.default.wgDhiQ),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : C.intl.string(S.default["V+DBhs"]),
            }),
            i.length > 0
                ? (0, n.jsx)("div", {
                      className: e6.R6,
                      children: i.map((e) =>
                          (0, n.jsx)(
                              "span",
                              {
                                  className: e6.K4,
                                  children: (0, n.jsx)(v.E, {
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
            (0, n.jsx)("div", {
                className: e6.p0,
                children: (0, n.jsx)(Q.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: C.intl.string(S.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var e4 = l(196582);
let e3 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    e9 = {
        snail: () => S.default["2l3AEQ"],
        goat: () => S.default["+FPL+I"],
        frog: () => S.default.w4GOfR,
        bunny: () => S.default.XmZT9M,
        cat: () => S.default.NnydwQ,
        caterpillar: () => S.default["4iXcNT"],
        butterfly: () => S.default.DoTGt5,
        dog: () => S.default["9zxqmP"],
        spider: () => S.default.HF0T3L,
        bee: () => S.default.XTzDga,
        bot: () => S.default.abtC2b,
    },
    e8 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: r, size: i = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: i, height: i },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function te(e) {
    return { ...e8[e], name: C.intl.string(e9[e]()) };
}
function tt(e) {
    return e3.includes(e) ? te(e) : void 0;
}
function tl(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % e3.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, e3[(t + l) % e3.length]);
            }),
            n
        );
    })(e))
        t.set(l, te(n));
    return t;
}
var tn = l(683063),
    ta = l(705754),
    tr = l(883455),
    ti = l(13699);
function ts(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ew.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ew.WQ)(d)
                : eR(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(eR(e));
                  switch (e.status) {
                      case "failed":
                          return C.intl.formatToPlainString(S.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(S.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(S.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eT.M)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(S.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: ti.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tr.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: ti.iq,
                                      children: (0, n.jsx)(ta.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(e4.A, {
        glyph: (0, n.jsx)(tn.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eR(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: ti.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
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
l(321073);
var to = l(140735),
    tu = l(329456);
let td = [];
function tc(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tu.xL, { [tu.Vb]: "in_progress" === t, [tu.cT]: "completed" === t }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return C.intl.string(S.default.TkPGOH);
                case "in_progress":
                    return C.intl.string(S.default["oK+fmd"]);
                default:
                    return C.intl.string(S.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(f.y, {
                type: f.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tu.Qd,
                itemClassName: tu.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tu.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tu.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tm(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : td), [l, t]),
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
            let e = setTimeout(() => u(r), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, r, l]),
        a.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, n.jsxs)("span", {
        className: tu.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tn.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tu.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tu.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tf(e) {
    let t,
        { todos: l, provisional: r, agents: s } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, o] = a.useState(() => new Set());
            return (
                r !== t && (i(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
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
        })(a.useMemo(() => l.map((e) => e.id), [l])),
        u =
            ((t = (s ?? td).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? td) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tu.p_,
        children: [
            l.map((e) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tu.AS, { [tu.J1]: "completed" === e.status }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tc, { status: e.status }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tu.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", { className: tu.Qq, children: e.text }),
                            }),
                            (0, n.jsx)(tm, { agents: u.get(e.id) ?? td, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tu.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tc, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tu.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tu.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function th(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: r = !0 } = e,
        { completed: i, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, n.jsxs)(eD, {
              title: C.intl.string(S.default.qCRC6c),
              trailing: (0, n.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: C.intl.formatToPlainString(S.default.bQvqly, { completed: i, total: s }),
              }),
              className: tu.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, n.jsx)(to.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: C.intl.formatToPlainString(S.default["QG/EiF"], { completed: i, total: s }),
                        })
                      : null,
                  (0, n.jsx)("div", {
                      className: tu.rf,
                      children: (0, n.jsx)(tf, { todos: t, provisional: l, agents: a }),
                  }),
              ],
          });
}
var tg = l(229775),
    tx = l(165648);
function tp(e) {
    let t = tl(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tt(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: eR(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tv(e) {
    let {
            projectId: t,
            steps: l,
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
        g = a.useMemo(() => (0, ew.GO)(l, { turnActive: r }), [l, r]),
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
        return (0, n.jsx)("ol", {
            className: ti.pj,
            "data-live": !1,
            children: (0, n.jsx)(e4.A, {
                glyph: (0, n.jsx)(eI.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(S.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = r ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? i) : void 0)),
        v = c ? ((0, ew.lt)(l) ?? o ?? null) : null,
        b = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !b) return null;
    let j = x.tasks,
        y = tl(j.map((e) => e.taskId)),
        k = !f && (r || j.some((e) => "running" === e.task.status)),
        N = tp(j);
    return (0, n.jsx)(e4.l.Provider, {
        value: j.length,
        children: (0, n.jsxs)("ol", {
            className: ti.pj,
            "data-live": k,
            children: [
                (0, n.jsx)(eC.A, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: j.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: f,
                    durationMs: p,
                    connectsDown: j.length > 0,
                    tier: g.turn?.tier,
                }),
                j.map((e, l) => {
                    let a = null != e.task.helperMark ? tt(e.task.helperMark) : void 0,
                        r = a ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              ts,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < j.length - 1,
                              },
                              e.taskId,
                          );
                }),
                b
                    ? (0, n.jsx)("li", {
                          className: ti.YO,
                          children: (0, n.jsx)(th, { todos: v, provisional: u, agents: N }),
                      })
                    : null,
            ],
        }),
    });
}
function tb(e) {
    let {
            projectId: t,
            steps: l,
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
            lastStreamedMessage: p,
            showsClosingMessage: b,
            attachmentsHost: j,
        } = a.useMemo(
            () => eP({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        y = null == u ? null : (0, n.jsx)(eq.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, n.jsx)("div", { className: ti.MT, children: y }),
        N = h
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: ti.ue,
        children: [
            x.length > 0 && !g
                ? (0, n.jsx)("ol", {
                      className: ti.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: ti.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tx.PT,
                                              children: eM.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === j && e === p ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(eJ, { projectId: t, proposal: s })
                : b
                  ? (0, n.jsxs)("div", {
                        className: i()(ti.ky, tg.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tx.PT, ti.cW),
                                children: eM.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === j ? k : null,
                            N,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(ti.ky, tg.XR),
                      children: (0, n.jsx)(e2, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: i()(ti.ky, tg.XR),
                      children: (0, n.jsx)(e5, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === j ? y : null,
            null != o && o.length > 0 ? (0, n.jsx)(ez, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            b ? null : N,
        ],
    });
}
var tj = l(864970),
    ty = l(146806),
    tk = l(475358),
    tN = l(81369),
    tw = l(922016),
    tA = l(980707),
    tE = l(477782),
    tS = l(717400),
    tC = l(663341),
    tI = l(826745),
    tM = l(783977),
    tT = l(559647),
    tR = l(775602),
    tP = l(435558),
    t_ = l.n(tP),
    tL = l(506774),
    tF = l(228366);
let tD = "VibegrationsComposerDrafts";
function t$() {
    return tL.w.get(tD) ?? {};
}
let tO = new Map(),
    tz = t_().throttle(() => {
        if (0 === tO.size) return;
        let e = t$();
        for (let [t, l] of tO) "" === l ? delete e[t] : (e[t] = l);
        (tO.clear(), tL.w.set(tD, e));
    }, 1e3);
class tq extends D.Ay.Store {
    getDraft(e) {
        let t = tO.get(e);
        return null != t ? t : (t$()[e] ?? "");
    }
}
let tU = new tq(tF.h, {
    LOGOUT: function () {
        return (tO.clear(), tz.cancel(), tL.w.remove(tD), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (tO.set(t, l), tz(), "" === l && tz.flush(), !1);
    },
});
var tB = l(43105),
    tG = l(252510);
let tV = [S.default.ZK2O25, S.default["122Ir6"], S.default["9KCASa"]];
function tW(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(S.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(tB.A, {
        targetElementRef: t,
        title: C.intl.string(S.default.n8wtkv),
        body: C.intl.format(S.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: tG.r,
                children: [
                    C.intl.string(S.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: tG.e,
                        children: tV.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var tH = l(113491);
(l(323874), l(14289), l(35956));
var tK = l(285796),
    tY = l(673724),
    tQ = l(590380),
    tX = l(298668);
let tZ = tY.Is,
    tJ = 0;
function t0(e) {
    let { onUploadFile: t, onDeleteFile: l } = e,
        [n, r] = a.useState([]),
        i = a.useRef([]),
        s = a.useRef(new Set()),
        o = a.useRef(t);
    o.current = t;
    let u = a.useRef(l);
    u.current = l;
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
                let l = i.current;
                l.some((t) => t.localId === e) && d(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [d],
        ),
        f = a.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...i.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tJ,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tZ) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: C.intl.formatToPlainString(S.default.DlX57a, { count: tZ }),
                        });
                        continue;
                    }
                    if (!(0, tY.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: C.intl.formatToPlainString(S.default.cI7t94, {
                                size: (0, tY.ZJ)((0, tY.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let i = tY.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    (t.push({ ...r, previewUrl: i }), l.push({ file: n, localId: a }));
                }
                for (let { file: e, localId: n } of (d(t), l))
                    o.current(e).then(
                        (e) => {
                            s.current.has(n) ? c(e) : m(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            s.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                m(n, { status: "error", errorText: C.intl.string(S.default.GwEHvn) }));
                        },
                    );
            },
            [c, m, d],
        ),
        h = a.useCallback(
            (e) => {
                let t = i.current,
                    l = t.find((t) => t.localId === e);
                (s.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && c(l.ref),
                    d(t.filter((t) => t.localId !== e)));
            },
            [c, d],
        ),
        g = a.useCallback(() => {
            let e = i.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let e of i.current) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
            return (d([]), e);
        }, [d]);
    return { drafts: n, addFiles: f, removeDraft: h, settled: n.every((e) => "ready" === e.status), takeRefs: g };
}
function t1(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(tQ.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: tX.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: tX.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(S.default["3HWvgk"]),
                children: (0, n.jsx)(tK.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t2 = l(789438);
let t7 = "text-md/normal",
    t6 = null;
function t5(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [m, f] = a.useState(0),
        [h, g] = a.useState(0),
        [x, p] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                r = Number.isNaN(a) ? 0 : a,
                i = e.offsetWidth,
                s = n.offsetWidth + r;
            (g(i + r), f(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                m = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            p({
                frontFrom: 1e3 * (0, ty._R)(m),
                frontTo: 1e3 * (0, ty._R)(h),
                backFrom: 1e3 * (0, ty.T)(m),
                backTo: 1e3 * (0, ty.T)(h),
            });
        }
        let a = new ResizeObserver(n);
        return (n(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        a.useEffect(() => {
            c.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, j] = a.useState(0),
        [y, k] = a.useState(null),
        N = a.useRef(!1),
        w = a.useCallback(() => {
            (k(N.current ? (l ? "through" : "out") : l ? "in" : null), j((e) => e + 1));
        }, [l]);
    a.useEffect(() => {
        N.current = l;
    }, [l, t]);
    let A = "in" === y ? x.backFrom : x.frontFrom,
        E = "out" === y ? x.frontTo : x.backTo,
        I = (0, D.bG)([tR.Ay], () => tR.Ay.useReducedMotion),
        M = t === C.intl.string(S.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(t2.VT, { [t2.qk]: a }),
            style: a
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, E - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(tk.e, { shortcut: "tab", className: t2.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tj.o, {
                text: t,
                variant: t7,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(t2.xM, { [t2.s2]: r }),
                onStart: w,
                onComplete: () => o(t),
            }),
            R(t2.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: t2.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: t7, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: t2.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: t7, tag: "span", className: t2.xM, children: t }),
                          R(t2.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function t4(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            tipOpen: p = !1,
            onDismissTip: v,
            hasPendingContext: b = !1,
            modelSettings: j,
            onModelSettingsChange: y,
        } = e,
        [k, N] = a.useState(() => tU.getDraft(t)),
        w = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), N(e));
            },
            [t],
        ),
        [A, E] = a.useState(t);
    A !== t && (E(t), N(tU.getDraft(t)));
    let I = (0, D.bG)([tR.Ay], () => tR.Ay.isSubmitButtonEnabled),
        [M, T] = a.useState(!1),
        [R, P] = a.useState(!1);
    a.useEffect(() => {
        i || P(!1);
    }, [i]);
    let _ = a.useRef(null),
        { drafts: L, addFiles: F, removeDraft: $, settled: O, takeRefs: z } = t0({ onUploadFile: d, onDeleteFile: m }),
        q = "" !== k.trim() || L.length > 0 || b,
        U = l && q && O,
        [B, G] = a.useState(null);
    a.useEffect(() => {
        if (null == B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]);
    let V = a.useCallback(() => {
            if (!U) return;
            v?.();
            let e = z();
            o(k, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == t6 && (t6 = document.createElement("canvas").getContext("2d"));
                let i = t6;
                if (null == i) return r;
                let s = getComputedStyle(e);
                i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
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
            })(ee.current?.querySelector("textarea") ?? null, eu.current, k);
            ("" !== t && G(t), w(""));
        }, [U, k, o, z, w, v]),
        W = a.useCallback(
            (e) => {
                (e.preventDefault(), V());
            },
            [V],
        ),
        H = a.useCallback(() => {
            null == u || R || (P(!0), u());
        }, [u, R]),
        K = null == g || "" !== k || !l || r || s || b ? null : g,
        Y = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !R) {
                    (e.preventDefault(), e.stopPropagation(), H());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != K) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), w(K));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), V());
            },
            [V, f, i, u, R, H, K, w],
        ),
        Q = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), F(t));
            },
            [l, F],
        ),
        X = a.useCallback(
            (e) => {
                (e.preventDefault(), T(!1), l && F(Array.from(e.dataTransfer.files)));
            },
            [l, F],
        ),
        Z = a.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), T(!0));
        }, []),
        J = a.useCallback(
            (e) => {
                (F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [F],
        ),
        ee = a.useRef(null),
        et = a.useRef(null),
        [el, en] = a.useState(0),
        [ea, er] = a.useState(!1);
    a.useEffect(() => {
        if (0 === k.length) return void er(!1);
        let e = ee.current?.querySelector("textarea");
        if (null != e) {
            let t = t8(e);
            null != t && en(t);
        }
        er(!0);
        let t = setTimeout(() => er(!1), t3);
        return () => clearTimeout(t);
    }, [k]);
    let ei = a.useMemo(() => ({ "--custom-glow-x": `${el}px` }), [el]),
        es = ea ? ` ${t2.EB}` : "",
        eo = s
            ? C.intl.string(S.default.pGFXZ0)
            : r
              ? C.intl.string(S.default.JeM47J)
              : l
                ? b
                    ? C.intl.string(S.default.Bs7bUv)
                    : x
                      ? C.intl.string(S.default.M3ovXY)
                      : C.intl.string(i ? S.default["67PpcP"] : S.default.ahRdoJ)
                : C.intl.string(S.default.nm4w9P),
        eu = a.useRef(0),
        ed = a.useRef(null),
        ec = a.useCallback((e) => {
            if ((ed.current?.disconnect(), null == e)) return;
            eu.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                eu.current = e.clientWidth;
            });
            (t.observe(e), (ed.current = t));
        }, []),
        em = a.useId(),
        ef = null != K,
        eh = B ?? K ?? eo,
        eg = "" === k && "" !== eh;
    return (0, n.jsxs)("form", {
        onSubmit: W,
        onDrop: X,
        onDragOver: Z,
        onDragLeave: () => T(!1),
        className: M ? `${t2.DA} ${t2.pV}` : t2.DA,
        children: [
            L.length > 0
                ? (0, n.jsx)("div", {
                      className: t2.lN,
                      children: L.map((e) => (0, n.jsx)(t1, { draft: e, onRemove: $ }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${t2.wg} ${t2.LP}${es}`, style: ei, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${t2.wg} ${t2.L3}${es}`, style: ei, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: t2.VA,
                ref: ee,
                children: [
                    (0, n.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: J,
                        className: t2.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == h
                        ? (0, n.jsx)(eU.m, {
                              text: C.intl.string(S.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: et,
                                  type: "button",
                                  className: `${t2.Y0} ${t2.nu}`,
                                  disabled: !l,
                                  onClick: () => _.current?.click(),
                                  "aria-label": C.intl.string(S.default.d6Rqlu),
                                  children: (0, n.jsx)(tN.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: t2.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tw.Y, {
                              targetElementRef: et,
                              position: "top",
                              align: "left",
                              animation: tw.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tA.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tE.rX, {
                                          children: [
                                              (0, n.jsx)(tE.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: tN.H,
                                                  leadingAccessory: { type: "icon", icon: tN.H },
                                                  action: () => _.current?.click(),
                                              }),
                                              null != h
                                                  ? (0, n.jsx)(tE.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(S.default.edKajy),
                                                        iconLeft: tS.q,
                                                        leadingAccessory: { type: "icon", icon: tS.q },
                                                        action: h,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: a } = t;
                                  return (0, n.jsx)("button", {
                                      ...e,
                                      ref: et,
                                      type: "button",
                                      className: `${t2.Y0} ${t2.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tC.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: t2.Qu,
                                      }),
                                  });
                              },
                          }),
                    eg
                        ? (0, n.jsx)("div", {
                              ref: ec,
                              className: t2.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(t5, { text: eh, offering: ef && null == B, typed: null != B }),
                          })
                        : null,
                    (0, n.jsx)(tI.y, {
                        value: k,
                        onChange: (e) => w(e.currentTarget.value),
                        onKeyDown: Y,
                        onPaste: Q,
                        placeholder: eg ? "" : eo,
                        disabled: !l,
                        "aria-label": C.intl.string(S.default.OPr66w),
                        "aria-describedby": eg ? em : void 0,
                        rows: 1,
                        className: t2.jp,
                    }),
                    eg ? (0, n.jsx)(to.A, { id: em, children: eo }) : null,
                    (0, n.jsx)("div", {
                        className: t2.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(eU.m, {
                                      text: C.intl.string(S.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${t2.Y0} ${t2.$E}`,
                                          disabled: R,
                                          onClick: H,
                                          "aria-label": C.intl.string(S.default.KdgI4k),
                                          children: (0, n.jsx)(eI.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != j && null != y
                                  ? (0, n.jsx)(tH.A, {
                                        settings: j.settings,
                                        choices: j.choices,
                                        disabled: !l,
                                        onChange: y,
                                        className: `${t2.Y0} ${t2.$E}`,
                                        icon: (0, n.jsx)(tM.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    I
                        ? (0, n.jsxs)("div", {
                              className: t2.fF,
                              children: [
                                  (0, n.jsx)("div", { className: t2.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: t2.rt,
                                      disabled: !U,
                                      "aria-label": C.intl.string(S.default["22GHMt"]),
                                      children: (0, n.jsx)(tT.SendMessageIcon, {
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
            p && null != v ? (0, n.jsx)(tW, { targetElementRef: ee, onDismiss: v }) : null,
        ],
    });
}
let t3 = 1500,
    t9 = [
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
function t8(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t8.mirror;
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
                (t8.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of t9) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
t8.mirror = null;
var le = l(320095),
    lt = l(963852),
    ll = l(521981),
    ln = l(763754),
    la = l(491182),
    lr = l(438729),
    li = l(622868),
    ls = l(448368),
    lo = l(837528),
    lu = l(190457),
    ld = l(715628),
    lc = l(752636),
    lm = l(9842),
    lf = l(589022),
    lh = l(95701),
    lg = l(994500),
    lx = l(967198);
let lp = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lv(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lb(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lj(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lb(e, t),
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
    if (lv(a) && lv(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lv(lb(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function ly(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([tR.Ay], () => tR.Ay.useReducedMotion),
        r = l && !n,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r);) r++;
                      for (; r > 0 && lj(t, r);) r--;
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
                    let l = 0 === m.current ? 32 : t - m.current;
                    if (l >= 32) {
                        m.current = t;
                        let e = d.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    r = t.length - a;
                                if (r <= 0) return a;
                                if (r > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && lp.has(e.charAt(n - 1));) n--;
                                    return lp.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lj(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
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
var lk = l(803306);
let lN = new Set(),
    lw = new Map();
function lA(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
var lE = l(73432),
    lS = l(441136);
let lC = (0, lh.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    lI = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lM(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lS.Yq, { [lS.x1]: t }), children: e });
}
function lT(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lR(e, t, l) {
    let { content: r } = (0, lu.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lC, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lr.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, ld.A)(i, r);
}
function lP(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lo.m)(e, lC, t.usernameProfile, r),
        o = (0, lo.Jo)(t.avatarProfile, r),
        u = (0, D.bG)([lx.A], () => lx.A.getGuildId()),
        d = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eu.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lf.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function l_(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, ll.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lS.GV,
                              children: [
                                  (0, n.jsx)(lE.A, { className: lS.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, D.cf)(
            [lg.A],
            () => ({
                isReplyAuthorBlocked: lg.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lg.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, ln.X4)(l),
        c = (0, ln.X4)(t),
        m = lP(l);
    return (0, n.jsx)(ls.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lC,
        referencedMessage: { state: lm.a.LOADED, message: l },
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
function lL(e) {
    let { message: t, author: l } = e,
        a = lP(t);
    return (0, n.jsx)(li.Ay, {
        message: t,
        channel: lC,
        author: l,
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
function lF(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(
        () =>
            (function (e) {
                if (null == e || lN.has(e) || null != eu.default.getUser(e)) return;
                let t = lw.get(e) ?? 0;
                t >= 3 ||
                    (lw.set(e, t + 1),
                    lN.add(e),
                    lk
                        .wz(e)
                        .finally(() => lN.delete(e))
                        .catch(() => {}));
            })(r),
        [r],
    );
    let o = (0, D.bG)(
            [eu.default],
            () => lA(r, null != r ? eu.default.getUser(r) : null, eu.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, ln.FT)(o, null), [o]),
        d = a.useMemo(() => (0, eN.LL)(t), [t]),
        c = d?.body ?? t,
        m = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, lt.Ay)({ channelId: lC.id, content: c, author: o });
            return (0, le.rh)({ ...e, timestamp: lT(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, o, l]);
    return null == m
        ? null
        : (0, n.jsx)(lD, { message: m, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function lD(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = lR(t, a);
    return (0, n.jsx)(la.A, {
        className: lS.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(lL, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lS.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lS.GV,
                              children: [
                                  (0, n.jsx)(lE.A, { className: lS.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lS.WO, children: o }),
                      ],
                  }),
        childrenAccessories: lM(i, "" !== a),
        disableInteraction: !0,
    });
}
function l$(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = ly(t, { streaming: u }),
        m = a.useMemo(() => (0, ln.FT)(null, null), []),
        f = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = i?.userId,
        g = (0, D.bG)(
            [eu.default],
            () => lA(h, null != h ? eu.default.getUser(h) : null, eu.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, eN.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, lt.Ay)({ channelId: lC.id, content: x?.body ?? i.content, author: g });
            return (0, le.rh)({ ...e, id: i.id, timestamp: lT(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lC.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, lt.Ay)({ channelId: lC.id, content: d, author: lI });
            return (0, le.rh)({
                ...e,
                timestamp: lT(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = lR(b, d, lS.OS);
    return (0, n.jsxs)("div", {
        className: lS.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(la.A, {
                className: lS.yE,
                author: f,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(l_, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, lc.A)({ message: b, channel: lC, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lM(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lS.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let lO = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var lz = l(375068);
function lq(e) {
    let { projectId: t, messages: l, ref: r, onPickIdea: i } = e,
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
                    function l(e, l) {
                        t.push({ row: e, groupable: { key: e.key, ...l } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            l(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, eS.BL)(t),
                            n = eP({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, ew.C6)(t.steps, { turnActive: e }),
                            { lastWork: i, open: s } = (0, ew.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index,
                            u = !1;
                        for (let d of r) {
                            if (null != d.prose && lO.test(d.prose.content)) u = !0;
                            else if (null != d.prose) {
                                let r = `${t.render_id}:${d.key}`;
                                l(
                                    {
                                        kind: "prose",
                                        key: r,
                                        message: t,
                                        groupStart: !1,
                                        content: d.prose.content,
                                        hostsAttachments:
                                            "streamed" === n.attachmentsHost &&
                                            d.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && d.index === o && !d.hasWork,
                                    },
                                    { actor: "assistant", boundary: r },
                                );
                            }
                            (d.hasWork || d.hasTodos) &&
                                l(
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
                        let d = lO.test(t.content ?? "");
                        if (
                            (!0 === t.interrupted || u || d
                                ? l(
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
                                  l(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (n.showsClosingMessage && !d) ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === n.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            l(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: n.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let n = (function (e) {
                        let t,
                            l,
                            n = [],
                            a = null,
                            r = !1,
                            i = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                (n.push(!1), (a = null), (t = void 0), (r = !1), (i = !1), (l = void 0));
                                continue;
                            }
                            let e =
                                !r || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || i;
                            (e &&
                                ((a = s.actor), (t = s.authorId), (r = !0), (i = !0 === s.separate), (l = s.boundary)),
                                n.push(e));
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(l),
            [l],
        );
    return 0 === l.length
        ? (0, n.jsx)("ol", {
              ref: r,
              className: lz.x7,
              children: (0, n.jsx)(lU, {
                  role: "assistant",
                  children: (0, n.jsx)(l$, { content: C.intl.string(S.default.khZEUv) }),
              }),
          })
        : (0, n.jsx)("ol", {
              ref: o,
              className: lz.x7,
              children: f.map((e) => {
                  let a = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                          return (0, n.jsx)(
                              lU,
                              {
                                  role: "user",
                                  anchorId: a.id,
                                  highlighted: u === a.id,
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(lF, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      userId: a.user_id,
                                      accessories:
                                          null != l ? (0, n.jsx)(eq.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, n.jsx)(
                              lU,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(l$, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: a.created_at,
                                      accessories:
                                          e.hostsAttachments && null != a.attachments
                                              ? (0, n.jsx)(eq.A, { projectId: t, attachments: a.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, n.jsx)(
                              lU,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tv, {
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
                          return (0, n.jsx)(
                              lU,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tv, { projectId: t, interrupted: !0, steps: a.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, n.jsx)(
                              lU,
                              {
                                  role: "assistant",
                                  children: (0, n.jsx)(tv, {
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
                          return (0, n.jsx)(
                              lU,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, n.jsx)(l$, {
                                      groupStart: e.groupStart,
                                      content: a.content,
                                      createdAt: a.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let l = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != l)
                                              return {
                                                  id: l.id,
                                                  content: l.content,
                                                  ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                  createdAt: l.created_at,
                                              };
                                      })(l, a.in_reply_to),
                                      onJumpToReplied: null != a.in_reply_to ? () => m(a.in_reply_to) : void 0,
                                      accessories: (0, n.jsx)(tb, {
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
                                                  : (function (e, t, l) {
                                                        let n = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of l)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && n.add(e.id);
                                                        }
                                                        return n;
                                                    })(l, a, a.ideas),
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
function lU(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(lz.xk, { [lz.Qo]: r, [lz.q3]: s }),
        children: l,
    });
}
function lB(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(S.default.W7oyuf);
        case "closed":
            return C.intl.string(S.default["yBmS+I"]);
        case "failed":
            return C.intl.string(S.default.eE60xI);
    }
}
var lG = l(559676),
    lV = l(625903),
    lW = l(964675);
function lH(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        r = a.useCallback(() => {
            (0, e7.A)(t, { isPreview: !0 });
        }, [t]);
    return l
        ? (0, n.jsx)(e_.D, {
              className: lW.h,
              "aria-label": C.intl.string(S.default.gTMvzD),
              onClick: r,
              children: (0, n.jsx)(lV.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lK = l(823376),
    lY = l(495557);
function lQ(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = ly(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lY.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: o,
                className: lY.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tx.PT, lY.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eM.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lX = l(921461);
function lZ(e) {
    let { activity: t, compacting: l = !1, restoring: r = !1, controlling: s = !1, spoken: o, onSpokenChange: u } = e,
        d = a.useRef(null),
        c = a.useId(),
        [m, f] = a.useState(null),
        h = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, controlling: a = !1 } = e,
                r = null != t && "end" !== t.phase;
            return a
                ? S.default.ivvYHP
                : n
                  ? S.default.aFffp2
                  : l
                    ? S.default["0vH/5G"]
                    : r
                      ? S.default.Ly7F7x
                      : S.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, controlling: s }),
        g = C.intl.string(h),
        [x, p] = a.useState(o ?? g),
        v = a.useRef(g);
    (a.useEffect(() => {
        v.current = g;
    }, [g]),
        a.useEffect(() => {
            u?.(x);
        }, [x, u]));
    let b = a.useRef(null),
        j = a.useRef(x);
    (a.useEffect(() => {
        j.current = x;
    }, [x]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                v.current !== j.current ? p(v.current) : b.current?.play();
            }
            function n() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (n(),
                    (e = window.setTimeout(() => {
                        (l(), (t = window.setInterval(l, 2400)));
                    }, 1800)));
            }
            function r() {
                (b.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", r),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", r), window.removeEventListener("blur", n));
                }
            );
        }, []));
    let y = null != t && "" !== t.text,
        k = t?.session ?? null,
        N = y && null != k && m === k,
        w = a.useCallback(() => {
            y && null != k && f((e) => (e === k ? null : k));
        }, [y, k]),
        A = a.useCallback(() => f(null), []);
    return (0, n.jsx)(tw.Y, {
        targetElementRef: d,
        position: "top",
        align: "left",
        shouldShow: N,
        onRequestClose: A,
        renderPopout: () => (0, n.jsx)(lQ, { id: c, activity: t }),
        children: () =>
            (0, n.jsxs)(e_.D, {
                innerRef: d,
                className: i()(lX.hF, y && lX.Xd),
                "aria-label": C.intl.string(r ? S.default.pGFXZ0 : S.default.SzdX35),
                "aria-expanded": N,
                "aria-describedby": N ? c : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(h),
                onClick: w,
                children: [
                    (0, n.jsx)("span", {
                        className: lX.bl,
                        children: (0, n.jsx)(lK.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: lX.xu,
                        "aria-hidden": !!s || void 0,
                        children: (0, n.jsx)(tj.o, {
                            ref: b,
                            text: x,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: lX.yE,
                        }),
                    }),
                ],
            }),
    });
}
var lJ = l(280894);
function l0(e) {
    return e.toLocaleString();
}
function l1(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: lJ.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: lJ.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [l0((0, tY.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    l0(l.input_tokens),
                    " in \xb7 ",
                    l0(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${l0(l.cache_creation_input_tokens)} cache write \xb7 ${l0(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function l2(e) {
    let { project: t } = e,
        l = (0, tY.wU)(t.compaction),
        a = (0, tY.wU)(t.classifier),
        r = (0, tY.wV)(t.orchestrator, t.codegen),
        i = (0, tY.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: lJ.si,
        role: "dialog",
        "aria-label": C.intl.string(S.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: lJ.Q$,
                children: (0, n.jsxs)("div", {
                    className: lJ.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [l0((0, tY.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(l1, { label: C.intl.string(S.default.R9aduM), usage: r }),
            (0, n.jsx)(l1, { label: C.intl.string(S.default.Tj6b30), usage: l }),
            (0, n.jsx)(l1, { label: C.intl.string(S.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: lJ.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(S.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tY.sj)(i) ? "\u2014" : `${Math.round(100 * (0, tY.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function l7(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tw.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(l2, { project: t }),
        children: (e) =>
            (0, n.jsx)(e_.D, {
                innerRef: l,
                className: lJ.Y$,
                "aria-label": C.intl.string(S.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(eB.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var l6 = l(258216);
function l5(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            restoring: i = !1,
            thinkingActivity: s,
            compacting: o,
            projectUsage: u,
            connState: d,
        } = e,
        c = (0, lG.o4)(l),
        [m, f] = a.useState(null),
        h =
            null == u
                ? null
                : ((t = (0, tY.a7)(u.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(S.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(S.default["7SZZvj"], { runes: t, turns: u.turns }),
                  });
    return (0, n.jsxs)("div", {
        className: l6.jf,
        children: [
            (0, n.jsx)("div", {
                className: l6.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    r || i || c
                        ? (0, n.jsx)(lZ, {
                              activity: s,
                              compacting: o,
                              restoring: i,
                              controlling: c,
                              spoken: m,
                              onSpokenChange: f,
                          })
                        : null,
            }),
            (0, n.jsx)(lH, { projectId: l }),
            null == u || null == h
                ? null
                : (0, n.jsxs)("span", {
                      className: l6.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": h.aria,
                              children: h.text,
                          }),
                          (0, n.jsx)(l7, { project: u }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(S.default.eDDdhB, { status: lB(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: l6.XF,
                      children: lB(d),
                  }),
        ],
    });
}
var l4 = l(22231),
    l3 = l(408278),
    l9 = l(900797),
    l8 = l(847374),
    ne = l(477155),
    nt = l(935286),
    nl = l(856795),
    nn = l(424110);
function na(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(e_.D, {
        className: i()(nn.uK, { [nn.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? S.default.aL1BKQ : S.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: nn.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: nn.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: nn.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nn.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, n.jsx)(v.E, {
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
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nn.rM,
                      children: C.intl.string(S.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nr(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(nn.Ge, nn.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(na, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: nn.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: nn.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(l4.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(nn.Pu, nn.es), children: s }),
                ],
            }),
        ],
    });
}
function ni(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, u] = a.useState({}),
        [d, c] = a.useState({}),
        [m, f] = a.useState(0),
        [h, g] = a.useState(null),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [w, A] = a.useState(null),
        E = a.useRef(null),
        I = a.useRef(0),
        M = null == l,
        T = t.questions.length,
        R = Math.min(m, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: z, phase: q } = (0, nl.Q)(P.question),
        U = z === P.question,
        B = U && D?.id === P.id && D.truncated;
    a.useLayoutEffect(() => {
        if (null == w || F || !U) return;
        function e() {
            if (null == w) return;
            let e = w.scrollHeight > w.clientHeight + 1;
            $((t) => (t?.id === P.id && t.truncated === e ? t : { id: P.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(w), () => t.disconnect());
    }, [U, w, P.id, F]);
    let G = C.intl.string(F ? C.t.iTcuma : C.t.dcl9MQ),
        V = a.useCallback(
            (e) => {
                if (null == l) return;
                let n = t.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                "" !== n && l(n);
            },
            [t, l],
        ),
        W = a.useCallback(
            (e, t) => {
                I.current += 1;
                let l = I.current;
                (g({ direction: t, moves: l }), p({ question: P, draft: O, direction: t, moves: l }), k(!0), f(e));
            },
            [O, P],
        ),
        H = a.useCallback(() => {
            let e = N.current,
                t = E.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = N.current,
            t = E.current;
        if (null == e || null == t) return;
        H();
        let l = new ResizeObserver(H);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [H]);
    let K = h?.moves;
    a.useEffect(() => {
        if (null == K) return;
        let e = setTimeout(() => p(null), 400),
            t = setTimeout(() => k(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [K]);
    let Y = a.useCallback(
            (e) => {
                if (M) return;
                let l = { ...s, [P.id]: e };
                u(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            r = t[n[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, l, R);
                null == n ? V(l) : W(n, n < R ? "back" : "forward");
            },
            [s, t, M, R, P.id, V, W],
        ),
        Q = a.useCallback(() => {
            if (M || 0 === R) return;
            let e = t.questions[R - 1];
            (u((t) => {
                let l = { ...t };
                return (delete l[e.id], l);
            }),
                c((t) => {
                    let l = { ...t };
                    return (delete l[e.id], l);
                }),
                W(R - 1, "back"));
        }, [t, M, R, W]),
        X = R > 0 && !M,
        Z = a.useCallback(() => {
            let e = O.trim();
            "" !== e && Y({ kind: "custom", text: e });
        }, [O, Y]),
        [J, ee] = a.useState(!1),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let en = a.useCallback(() => {
            null != r && (el(!0), setTimeout(r, 150));
        }, [r]),
        ea = a.useCallback(() => {
            M || R >= T - 1 || W(R + 1, "forward");
        }, [M, R, T, W]),
        er = R < T - 1 && !M;
    return (0, n.jsxs)("section", {
        className: i()(nn.$O, { [nn.fI]: J && !et, [nn.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: nn.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: nn.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(nn.TK, nn.R_, { [nn.TB]: "exit" === q, [nn.JU]: "enter" === q }),
                                children: z,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: nn.Q7,
                                      children: (0, n.jsx)(eU.m, {
                                          text: G,
                                          children: (0, n.jsx)(l3.K, {
                                              icon: F ? l9.t : l8.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: P.id, expanded: !F }),
                                              "aria-label": G,
                                              "aria-controls": `${P.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == r
                                ? null
                                : (0, n.jsx)(e_.D, {
                                      className: i()(nn.gb, nn.Q7),
                                      onClick: en,
                                      "aria-label": C.intl.string(S.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, n.jsx)(o.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: nn.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: nn.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: E,
                                    className: nn.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                na,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: M,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: nn.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: nn.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(l4.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(tI.y, {
                                                    value: O,
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
                                                    placeholder: C.intl.string(S.default.qifsdL),
                                                    "aria-label": C.intl.formatToPlainString(S.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: nn.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          nr,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: M },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            T > 1
                ? (0, n.jsxs)("div", {
                      className: nn.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: C.intl.formatToPlainString(S.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, n.jsxs)("div", {
                              className: nn.Np,
                              children: [
                                  (0, n.jsx)(e_.D, {
                                      className: i()(nn.gb, { [nn.yI]: !X }),
                                      onClick: X ? Q : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(S.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, n.jsx)(ne.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(e_.D, {
                                      className: i()(nn.gb, { [nn.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(S.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(nt.E, {
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
var ns = l(643278),
    no = l(191521),
    nu = l(405189);
function nd(e) {
    let { line: t, placement: l, todos: r, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = a.useState(l ?? "top"),
        [f, h] = a.useState(d),
        [g, x] = a.useState(!1),
        [p, v] = a.useState(!1),
        [b, j] = a.useState(d);
    (b !== d && (j(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
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
        [N, w] = a.useState(!1),
        [A, E] = a.useState(p);
    (A !== p && (E(p), p ? k(!0) : w(!1)),
        a.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        a.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, p]));
    let I = null != r && r.length > 0,
        M = a.useCallback(() => v((e) => !e), []);
    return f
        ? (0, n.jsxs)("div", {
              className: nu.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(nu.vK, { [nu.ho]: g && d, [nu.ET]: !d }),
                      children: [
                          null == u
                              ? (0, n.jsx)("ol", {
                                    className: i()(nu.Rk, ti.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(e4.A, {
                                        glyph: (0, n.jsx)(no.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(e_.D, {
                                    className: nu.pZ,
                                    onClick: u,
                                    "aria-label": C.intl.string(S.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(nu.Rk, ti.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(e4.A, {
                                            glyph: (0, n.jsx)(no.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, n.jsx)(eU.m, {
                                    text: C.intl.string(S.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(e_.D, {
                                        className: nu.BO,
                                        onClick: M,
                                        "aria-expanded": p,
                                        "aria-label": C.intl.string(S.default.qCRC6c),
                                        children: (0, n.jsx)(ns.ClipboardListIcon, {
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
                      ? (0, n.jsx)("div", {
                            className: i()(nu.vB, { [nu.pg]: p && N, [nu.ui]: !p }),
                            children: (0, n.jsx)(th, { todos: r, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nc = l(366010),
    nm = l(825484),
    nf = l(859703),
    nh = l(738822),
    ng = l(291749),
    nx = l(590202),
    np = l(792620),
    nv = l(201805),
    nb = l(617986),
    nj = l(363195),
    ny = l(971276),
    nk = l(710969);
let nN = !1;
function nw() {
    return nN;
}
var nA = l(749414);
function nE(e) {
    let t,
        l,
        r,
        { open: i } = e,
        s =
            ((t = (0, nv.dN)()),
            (l = (0, D.bG)([nf.A], () => nf.A.isQuestAccessSuspended || null != nf.A.questEnrollmentBlockedUntil, [])),
            (r = (0, D.bG)([nf.A], () => null != nf.A.getQuestPreviewOverride(nh.uF.QUEST_BAR_V2), [])),
            null != t && (0, np.vv)(t)
                ? (function (e, t) {
                      let { overridden: l, gatesClosed: n } = t;
                      return null != e && (0, ny.s)()
                          ? l
                              ? e.userStatus?.claimedAt != null
                                  ? null
                                  : e
                              : n || (0, nk.Ic)(e) || e.userStatus?.completedAt != null
                                ? null
                                : e
                          : null;
                  })(t, { overridden: r, gatesClosed: l })
                : null),
        [o, u] = a.useState(nw),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = a.useState(e),
                [n, r] = a.useState(!1),
                i = a.useRef(null);
            return (
                e && (!t || n) ? (l(!0), r(!1)) : e || !t || n || r(!0),
                a.useEffect(() => {
                    if (!e && t)
                        return (
                            (i.current = setTimeout(() => {
                                ((i.current = null), r(!1), l(!1));
                            }, 150)),
                            () => {
                                null != i.current && (clearTimeout(i.current), (i.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(i && !o && null != s),
        [m, f] = a.useState(s);
    null != s && s !== m && f(s);
    let h = s ?? m,
        g = (0, D.bG)([nj.A], () => nj.A.getState().theme),
        x = (0, nc.M)(g) ? P.NJ8.DARK : P.NJ8.LIGHT,
        p = null != h ? (0, ng.tW)(h, ng.fY.GAME_TILE, x).url : null,
        b = null != p && "" !== p ? p : null,
        j = a.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: nh.uF.QUEST_BAR_V2,
                sourceQuestContent: nh.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: nx.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nb.d5)({ quest: s, ...e })
                : await (0, nb.e0)(s, { ...e, questContentCTA: nx.Cy.ACCEPT_QUEST });
        }, [s]),
        y = a.useCallback(() => {
            ((nN = !0), u(!0));
        }, []);
    return d && null != h
        ? (0, n.jsxs)("aside", {
              className: nA.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, n.jsxs)("div", {
                            className: nA.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("img", { className: nA.Rx, src: b, alt: "" }),
                                (0, n.jsx)("div", { className: nA._e }),
                            ],
                        })
                      : null,
                  (0, n.jsxs)("div", {
                      className: nA.iB,
                      children: [
                          null != b ? (0, n.jsx)("img", { className: nA.w1, src: b, alt: "" }) : null,
                          (0, n.jsxs)("div", {
                              className: nA.Ug,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: C.intl.string(S.default["09LJ+I"]),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: C.intl.format(C.t.EQa7os, { questName: h.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(nm.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, n.jsx)(Q.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: C.intl.string(S.default.egO5fO),
                          }),
                          (0, n.jsx)(Q.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: j,
                              text: C.intl.string(C.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nS = l(651649),
    nC = l(522250),
    nI = l(670455),
    nM = l(348800);
let nT = [C.intl.string(S.default["E+Q26x"]), C.intl.string(S.default["06/jqP"]), C.intl.string(S.default["3gSfUa"])];
function nR(e) {
    let { projectId: t, restoreState: r } = e,
        i = (0, D.bG)([eS.Ay], () => eS.Ay.getMessages(t), [t]),
        s = (0, D.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, D.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, D.bG)([eS.Ay], () => eS.Ay.getProjectUsage(t), [t]),
        d = (0, D.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(t), [t]),
        c = (0, D.bG)([eS.Ay], () => eS.Ay.isCompacting(t), [t]),
        f = (0, D.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        h = a.useRef(null),
        g = a.useRef(null),
        [x, p] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eA.Fy)(t)) return;
        let e = setTimeout(() => {
            ((0, eA.fA)(), p(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [t]);
    let b = a.useCallback(() => p(!1), []),
        j = a.useRef(null),
        y = a.useRef(!0),
        [k, N] = a.useState(!0);
    a.useEffect(() => {
        y.current && g.current?.scrollToBottom();
    }, [i]);
    let w = a.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        A = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            y.current = t < 32;
            let l = t > 1;
            N((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = h.current,
            t = j.current;
        if (null == e) return;
        let l = g.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            y.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let i of t)
                if (i.target === e) {
                    let e = i.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (i.target === l) {
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
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != i && cancelAnimationFrame(i));
            }
        );
    }, []),
        a.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        a.useEffect(
            () => () => {
                let e;
                (e = (0, nC.hl)(t)) < nC.qu ||
                    (!(0, nC.Xi)(t) &&
                        nS.A.possiblyShowFeedbackModal(nI.MW.VIBEGRATIONS, () => {
                            ((0, nC.AH)(t),
                                (0, e0.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([
                                        l.e("312513"),
                                        l.e("218413"),
                                        l.e("137381"),
                                        l.e("847004"),
                                        l.e("341676"),
                                    ]).then(l.bind(l, 580711));
                                    return (l) => (0, n.jsx)(a, { ...l, projectId: t, promptCount: e });
                                }));
                        }));
            },
            [t],
        ));
    let E = (0, eE.Q_)(t),
        I = a.useCallback(
            (e, l) => {
                (0, m.dv)(t, e, l);
            },
            [t],
        ),
        M = a.useCallback(
            (e, l) => {
                0 === E.annotations.length
                    ? I(e, l)
                    : (I((0, eN.Mx)({ annotations: E.annotations, metaComment: e, context: E.context }), l),
                      (0, eE.PS)(t));
            },
            [E, I, t],
        ),
        T = a.useCallback(() => (0, m.fu)(t), [t]),
        R = a.useCallback((e) => I(e.implementation_prompt), [I]),
        P = a.useCallback((e) => I(e), [I]),
        _ = a.useCallback((e) => (0, m.XZ)(t, e), [t]),
        L = a.useCallback((e) => (0, m.vX)(t, e), [t]),
        F = a.useCallback((e) => (0, m.Vm)(t, e), [t]),
        $ = a.useCallback(() => I(C.intl.string(S.default.Jj8Ftb)), [I]),
        O = r?.status === "restoring",
        z = "open" === s && !o && !O,
        q = i[i.length - 1],
        U = null != q && "assistant" === q.role && null != q.proposal,
        [B, G] = a.useState(null),
        V = q?.clarification != null && q.clarification.id !== B ? q.clarification : null,
        W = a.useCallback(() => {
            null != V && G(V.id);
        }, [V]),
        H = (0, D.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(t), [t]),
        K = a.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nT[e % nT.length];
        }, [t]),
        Y = U
            ? C.intl.string(S.default.Jj8Ftb)
            : q?.kind === "plan_implemented"
              ? C.intl.string(S.default["3sTTBu"])
              : H && 0 === i.length
                ? K
                : null,
        X = a.useMemo(() => {
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e];
                if ("assistant" === t.role && !(0, eS.BL)(t)) return t;
            }
        }, [i]),
        Z = null != X,
        J = U && z ? $ : void 0,
        [ee, et] = a.useState(null),
        [el, en] = a.useState(Z);
    (el !== Z && (en(Z), Z || et(null)),
        a.useEffect(() => {
            if (!Z) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? et(null)
                        : et(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [Z, X?.steps]));
    let ea = a.useMemo(() => (null != X ? (0, eC.b)(X.steps) : ""), [X]),
        er = a.useMemo(() => (null != X ? ((0, ew.lt)(X.steps) ?? X.todos) : void 0), [X]),
        ei = X?.provisionalTodo,
        es = a.useMemo(() => {
            var e;
            return null != X ? ((e = X.steps), tp((0, ew.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [X]);
    return (0, n.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: nM.TE,
        children: [
            (0, n.jsx)(nE, { open: null != X }),
            (0, n.jsx)(nd, {
                onJumpToActivity: w,
                line: ea,
                placement: Z && "top" === ee ? "top" : null,
                todos: er,
                provisionalTodo: ei,
                agents: es,
            }),
            (0, n.jsxs)("div", {
                className: nM.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: g,
                        onScroll: A,
                        className: [nM.N$, k ? null : nM.hB, x ? nM.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(lq, { ref: j, projectId: t, messages: i, onPickIdea: z ? R : void 0 }),
                    }),
                    (0, n.jsx)("div", {
                        className: nM.NJ,
                        children: (0, n.jsx)(l5, {
                            projectId: t,
                            thinking: Z,
                            restoring: O,
                            thinkingActivity: d,
                            compacting: c,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == V
                        ? null
                        : (0, n.jsx)("div", {
                              className: x ? `${nM.B5} ${nM.J9}` : nM.B5,
                              children: (0, n.jsx)(
                                  ni,
                                  { clarification: V, onSubmit: z ? P : void 0, onDismiss: W },
                                  V.id,
                              ),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nM.Jx,
                children: [
                    (0, n.jsx)(nd, {
                        onJumpToActivity: w,
                        line: ea,
                        placement: Z && "bottom" === ee ? "bottom" : null,
                        todos: er,
                        provisionalTodo: ei,
                        agents: es,
                    }),
                    0 === E.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nM.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(S.default.Lkx0Kk, {
                                          count: E.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: C.intl.string(S.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(Q.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(S.default.B0YARo),
                                      onClick: () => (0, eE.PS)(t),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(t4, {
                        projectId: t,
                        canSend: z,
                        stopped: o,
                        running: Z,
                        restoring: O,
                        onSend: M,
                        hasPendingContext: E.annotations.length > 0,
                        onInterrupt: z ? T : void 0,
                        onUploadFile: L,
                        onDeleteFile: F,
                        onApprove: J,
                        suggestion: Y,
                        questionOpen: null != V,
                        tipOpen: x,
                        onDismissTip: b,
                        modelSettings: f,
                        onModelSettingsChange: _,
                    }),
                ],
            }),
        ],
    });
}
var nP = l(661531),
    n_ = l(602853),
    nL = l(517461),
    nF = l(761929),
    nD = l(927506);
function n$(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, n_.r)(nP.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nL.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = a.useState(u ?? 460),
        f = (0, tP.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? f + s : 0);
    }, [f, t, s, r]);
    let h = (0, nF.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nF.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, n.jsxs)("div", {
        className: nD.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nD.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nD.kL, style: { width: f }, children: i }),
        ],
    });
}
var nO = l(691540),
    nz = l(857250),
    nq = l(97483),
    nU = l(624479),
    nB = l(92446),
    nG = l(761508),
    nV = l(540999),
    nW = l(957565);
let nH = [],
    nK = new Map(),
    nY = new Map(),
    nQ = new Map(),
    nX = new Map(),
    nZ = new Map(),
    nJ = new Map(),
    n0 = new Map();
class n1 extends D.Ay.Store {
    getStatus(e) {
        return nK.get(e) ?? null;
    }
    getFetchState(e) {
        return nY.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nX.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nJ.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nZ.get(e) ?? null;
    }
    getModelCalls(e) {
        return n0.get(e) ?? nH;
    }
    getForceCompactionState(e) {
        return nQ.get(e) ?? "idle";
    }
}
let n2 = new n1(tF.h, {
    LOGOUT: function () {
        if (
            0 === nK.size &&
            0 === nY.size &&
            0 === nQ.size &&
            0 === nX.size &&
            0 === nZ.size &&
            0 === nJ.size &&
            0 === n0.size
        )
            return !1;
        (nK.clear(), nY.clear(), nQ.clear(), nX.clear(), nZ.clear(), nJ.clear(), n0.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nY.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === nQ.get(t);
        n &&
            nQ.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === nY.get(t);
        if ((a && nY.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nY.set(t, "failed") : (nK.set(t, l), nY.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nX.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nZ.set(e.projectId, {
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
        nQ.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        nQ.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = n0.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let l = {
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
            n = null == t ? [l] : t.concat(l);
        n0.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tY.aM)(l.total)) return !1;
        nJ.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (nK.delete(t), nY.delete(t), nQ.delete(t), nX.delete(t), nZ.delete(t), nJ.delete(t), n0.delete(t));
    },
});
var n7 = l(972786);
function n6(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function n5(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function n4(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function n3(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function n9(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function n8(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function ae(e) {
    return C.intl.string("preview" === e ? S.default["+m8XM6"] : S.default.kiOVnt);
}
let at = ["all", "preview", "stable", "web"],
    al = new Set(["error", "aborted", "length"]);
function an(e) {
    switch (e.reason) {
        case "local":
            return C.intl.string(S.default.M7Vn6y);
        case "unconfigured":
            return C.intl.string(S.default.QirpMl);
        case "unauthorized":
            return C.intl.string(S.default.QZ1e4l);
        default:
            return null != e.detail
                ? C.intl.formatToPlainString(S.default.zUTHf7, { detail: e.detail })
                : C.intl.string(S.default.WIAQes);
    }
}
function aa(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(S.default.SBkDIZ, {
              p50: n6(e.memory_p50_bytes ?? 0),
              p999: n6(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ar = {
    db: () => S.default.r6cciE,
    db_preview: () => S.default.JmIyL8,
    runtime: () => S.default.bzNyv8,
    runtime_preview: () => S.default["LONZ/8"],
    bot: () => S.default.jdpw3A,
    bot_preview: () => S.default["/g6wUz"],
};
var ai = l(69985);
function as(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: ai.KE,
        children: [
            (0, n.jsx)("div", {
                className: ai.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: C.intl.string(S.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: C.intl.formatToPlainString(S.default["4NpaEk"], { time: n9(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(Q.$, { variant: "secondary", size: "sm", text: C.intl.string(S.default.aw0IJm), onClick: a }),
        ],
    });
}
function ao(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: ai.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: ai.Gf, children: t }),
            l,
        ],
    });
}
function au(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: ai.N8,
        children: [
            (0, n.jsxs)("div", {
                className: ai.x7,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != a && (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function ad(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: ai.N8,
        children: [
            (0, n.jsxs)("div", {
                className: ai.x7,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(l)} / ${r(a)}`,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ai.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? ai.aV : ai.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function ac(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(au, {
            label: C.intl.string(S.default.H6PMwW),
            value: C.intl.string(S.default.TLOZ8J),
            hint: an(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(au, {
            label: C.intl.string(S.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(S.default.uAzxdh),
        });
    let a = aa(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(au, { label: C.intl.string(S.default.awAqRi), value: n5(l.cpu_ms) }),
            null != a && (0, n.jsx)(au, { label: C.intl.string(S.default.WdGviA), value: a }),
        ],
    });
}
function am(e) {
    let { analytics: t } = e,
        l = C.intl.string(S.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(ao, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: an(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? ar[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(ao, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(S.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          au,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(S.default.AnRynJ, { cpu: n5(t.cpu_ms) }),
                              hint: aa(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var af = l(522652);
let ah = [];
function ag(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && al.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? n5(l.durationMs) : null,
                    `${n4(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${n4(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: af.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: af.Q5,
                children: n3(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: af.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: r ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function ax(e, t) {
    return (0, n.jsx)(au, {
        label: e,
        value: C.intl.formatToPlainString(S.default.U98VaN, { count: n4((0, tY.aM)(t)) }),
        hint: `${n4(t.input_tokens)} in \xb7 ${n4(t.output_tokens)} out \xb7 ${n4(t.cache_read_input_tokens)} cache read`,
    });
}
function ap(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, D.bG)([n2], () => n2.getLastTurnUsage(t), [t]),
        u = (0, D.bG)([n2], () => n2.getLastCompaction(t), [t]),
        d = (0, D.bG)([n2], () => n2.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([n2], () => n2.getForceCompactionState(t), [t]),
        f = a.useCallback(() => (0, m.Lj)(t), [t]),
        h = a.useCallback(() => (0, m.Lj)(t, !0), [t]),
        g = (0, D.bG)([n2], () => (s ? ah : n2.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: af.Mf,
        children: [
            (0, n.jsx)(as, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(ao, {
                title: C.intl.string(S.default.IYpHtT),
                children:
                    null == x
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(au, {
                                      label: C.intl.string(S.default["8MSJDH"]),
                                      value: n4((0, tY.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(S.default["6Z2KhK"], { count: n4(x.turns) }),
                                  }),
                                  ax(C.intl.string(S.default.hk4jJr), x.orchestrator),
                                  ax(C.intl.string(S.default.R9aduM), x.codegen),
                                  ax(C.intl.string(S.default.Tj6b30), (0, tY.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(au, {
                                          label: C.intl.string(S.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${n4(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(ao, {
                title: C.intl.string(S.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  ax(C.intl.string(S.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(au, {
                                      label: C.intl.string(S.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, tY.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(ao, {
                title: C.intl.string(S.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ad, {
                                      label: C.intl.string(S.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: n4,
                                  }),
                                  (0, n.jsx)(au, {
                                      label: C.intl.string(S.default.ntZb8d),
                                      value: `${n4(u.tokensBefore)} \u{2192} ${n4(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(S.default.jA05ru, {
                                          count: n4(u.retainedMessages),
                                          time: n9(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(S.default.LKGmsP, { ceiling: n4(j) })
                                      : C.intl.string(S.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(au, {
                            label: C.intl.string(S.default["se+2ls"]),
                            value: `${n4(d.projected)} / ${n4(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(S.default.KHK44U, { time: n9(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: af.Lj,
                        children: [
                            (0, n.jsx)(Q.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(S.default.B0KV7p),
                                disabled: "pending" === c,
                                onClick: f,
                            }),
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return C.intl.string(S.default.wBng42);
                                    if ("pending" === e) return C.intl.string(S.default["0tgo31"]);
                                    let t = n9(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return C.intl.formatToPlainString(S.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? S.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? S.default.GV4sdd
                                              : S.default["Y+0nUb"];
                                    return C.intl.formatToPlainString(l, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(c),
                            }),
                            "object" == typeof c &&
                                !0 === c.pendingTurn &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: C.intl.string(S.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: C.intl.string(S.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(ao, {
                    title: C.intl.string(S.default.F5eP7e),
                    children:
                        0 === g.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: C.intl.string(S.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(ag, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: C.intl.formatToPlainString(S.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(ao, {
                    title: C.intl.string(S.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(au, {
                                        label: C.intl.string(S.default["wt5X/o"]),
                                        value: n9(b.instance_since),
                                        hint: C.intl.string(S.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(au, { label: C.intl.string(S.default["4lgurx"]), value: n4(b.sockets) }),
                                    (0, n.jsx)(au, {
                                        label: C.intl.string(S.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(S.default["9KlveJ"])
                                            : C.intl.string(S.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(au, {
                                            label: C.intl.string(S.default["/hOBkc"]),
                                            value: n4(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(ac, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(ao, {
                    title: C.intl.string(S.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(au, { label: C.intl.string(S.default["5iHZLk"]), value: n4(p.max_iterations) }),
                        (0, n.jsx)(au, {
                            label: C.intl.string(S.default.Rb6m3E),
                            value: n4(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(au, {
                            label: C.intl.string(S.default.WQ9pMe),
                            value: C.intl.formatToPlainString(S.default.U98VaN, { count: n4(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(au, {
                            label: C.intl.string(S.default.iEAvzu),
                            value: C.intl.formatToPlainString(S.default.U98VaN, {
                                count: n4(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(au, {
                            label: C.intl.string(S.default["jbhs+f"]),
                            value: n4(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(au, { label: C.intl.string(S.default.TOQnq4), value: n4(p.max_build_attempts) }),
                        (0, n.jsx)(au, { label: C.intl.string(S.default.RIDc6D), value: n4(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var av = l(320448),
    ab = l(629584),
    aj = l(683438),
    ay = l(849363);
function ak(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: ay.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(S.default.TV42NS),
              }),
          });
}
function aN(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: ay.qf,
              children: [
                  (0, n.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: C.intl.string(S.default.TV42NS),
                  }),
                  (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: C.intl.string(S.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: ay.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function aw(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: ay.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(S.default["U/qDX9"]),
              }),
          })
        : null;
}
var aA = l(417397);
let aE = a.memo(function (e) {
    var t;
    let { entry: l, showSource: r } = e,
        [i, s] = a.useState(!1),
        o = a.useId(),
        u = a.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
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
                })(l.message),
            [l.message],
        ),
        d = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, n.jsxs)("div", {
        className: aA.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aA.Mt,
                selectable: !0,
                children: n3(l.ts),
            }),
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = l.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: aA.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: aA.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: aA.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: aA.Cq,
                            title: l.build ?? void 0,
                            children: C.intl.string(S.default.GO6JcR),
                        }),
                    null != u
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, n.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, n.jsxs)(e_.D, {
                                      className: aA.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(S.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(l8.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(av._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, n.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  C.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? S.default.lXkB6Z : S.default.wkbYxG,
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  i &&
                                      (0, n.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: aA.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: l.message,
                          }),
                ],
            }),
        ],
    });
});
function aS(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([n7.Ay], () => n7.Ay.getLogs(t), [t]),
        r = (0, D.bG)([n7.Ay], () => n7.Ay.getHistoryState(t, "logs")),
        [i, s] = a.useState("all"),
        [o, u] = a.useState(""),
        d = a.useMemo(() => {
            let e = o.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === i ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === i) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, i, o]),
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
                at.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return ae(e);
                            case "web":
                                return C.intl.string(S.default.J2TPCe);
                            default:
                                return C.intl.string(S.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: aA.$F,
        children: [
            (0, n.jsxs)("div", {
                className: aA.y4,
                children: [
                    (0, n.jsx)(ab.I, {
                        look: "pill",
                        "aria-label": C.intl.string(S.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: aA.KT,
                        children: (0, n.jsx)(aj.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: C.intl.string(S.default["MX4vr/"]),
                            "aria-label": C.intl.string(S.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(ak, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: aA.sx,
                children: [
                    (0, n.jsx)(aw, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(aN, {
                              state: r,
                              emptyTitle: C.intl.string(S.default.mcFyYc),
                              emptyBody: C.intl.string(S.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(S.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(aE, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function aC(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(ao, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(S.default.W4hcKL),
                      }),
        })
    );
}
function aI(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(au, {
                      label: C.intl.formatToPlainString(S.default.f8ix3w, { env: ae(l) }),
                      value: ((t = a.connected), C.intl.string(t ? S.default["9KlveJ"] : S.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(au, {
                      label: C.intl.string(S.default["0AB7l3"]),
                      value: n4(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${n9(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(au, { label: C.intl.string(S.default.ElaQ0A), value: n4(a.guild_count) }),
                  (0, n.jsx)(au, {
                      label: C.intl.string(S.default.SJtBTN),
                      value: n4(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(S.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: n9(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(au, {
                          label: C.intl.string(S.default.N4l504),
                          value: n4(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(au, { label: ae(l), value: C.intl.string(S.default.C6xjtD) });
}
function aM(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(au, {
        label: ae(t),
        value: C.intl.formatToPlainString(S.default.Yur5Zm, { requests: n4(l.requests), failures: n4(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(S.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: n9(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(S.default["1PdrB1"], { time: n9(l.since) }),
    });
}
function aT(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(au, {
                label: C.intl.formatToPlainString(S.default.BVORfc, { env: ae(t) }),
                value: n4(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    au,
                    {
                        label: C.intl.formatToPlainString(S.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? C.intl.formatToPlainString(S.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? C.intl.formatToPlainString(S.default["7ecbr3"], { time: n9(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aR(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(au, {
        label: ae(t),
        value: C.intl.formatToPlainString(S.default.voXL2a, { calls: n4(l.calls), errors: n4(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aP(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(ao, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(S.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(ao, {
        title: t,
        children: [
            (0, n.jsx)(au, {
                label: C.intl.string(S.default.KOnL3g),
                value: n4(l.requests),
                hint: C.intl.formatToPlainString(S.default["1PdrB1"], { time: n9(l.since) }),
            }),
            (0, n.jsx)(au, { label: C.intl.string(S.default.CjPhyY), value: n4(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ad, {
                              label: C.intl.string(S.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: n5,
                          }),
                          (0, n.jsx)(au, {
                              label: C.intl.string(S.default["+rYPHD"]),
                              value: n5(r),
                              hint: C.intl.formatToPlainString(S.default["+LxC7W"], {
                                  total: n5(l.cpu_ms_total),
                                  wall: n5(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(au, {
                      label: C.intl.string(S.default["V/nNbs"]),
                      value: C.intl.string(S.default.YKWIxp),
                      hint: C.intl.string(S.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(au, { label: C.intl.string(S.default.ueEMPa), value: n5(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(au, { label: C.intl.string(S.default.vM2krr), value: n4(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(au, {
                label: C.intl.string(S.default.g1O88C),
                value: n4(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(S.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(au, { label: C.intl.string(S.default.JUZs7g), value: n8(l.build) }),
        ],
    });
}
function a_(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: C.intl.string(S.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(S.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(S.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(ao, {
        title: C.intl.string(S.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(au, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(au, {
                                  label: C.intl.formatToPlainString(S.default["9TpIQg"], { env: l }),
                                  value: n6(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? S.default.o45MMA : S.default.S7o3vV,
                                      { count: n4(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(ad, {
                                      label: C.intl.formatToPlainString(S.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: n6,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aL(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: af.Mf,
        children: [
            (0, n.jsx)(as, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aP, {
                            title: C.intl.string(S.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aP, {
                            title: C.intl.string(S.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(a_, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(aC, {
                                title: C.intl.string(S.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aI, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(aC, {
                                title: C.intl.string(S.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aM, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(aC, {
                                title: C.intl.string(S.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aT, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(aC, {
                                title: C.intl.string(S.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aR, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(am, { analytics: t.analytics }),
                        (0, n.jsxs)(ao, {
                            title: C.intl.string(S.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(au, {
                                    label: C.intl.string(S.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? n8(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(au, {
                                    label: C.intl.string(S.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? n8(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aF(e, t) {
    return String(e).padStart(t, "0");
}
function aD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aF(n.getHours(), 2)}:${aF(n.getMinutes(), 2)}:${aF(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aF(n.getMilliseconds(), 3)}` : a;
}
var a$ = l(977129);
let aO = new Map(),
    az = new Map(),
    aq = 0,
    aU = 0;
async function aB(e, t, l) {
    let n = aq,
        a = aO.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aU) return { status: "forbidden" };
    let r = az.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, a$.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aU = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aq) return { status: "failed" };
            var l = o.rich;
            for (aO.set(t, l); aO.size > 100;) {
                let e = aO.keys().next();
                if (!0 === e.done) break;
                aO.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    az.set(t, i);
    let s = await i;
    return (az.get(t) === i && az.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function aG() {
    ((aq += 1), aO.clear(), az.clear(), (aU = 0));
}
function aV(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function aW(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function aH(e) {
    switch (e) {
        case "subagent":
            return C.intl.string(S.default["EoY7D+"]);
        case "context":
            return C.intl.string(S.default.KVFrD3);
        case "tool":
            return C.intl.string(S.default["/N6ZU9"]);
        case "delegated":
            return C.intl.string(S.default.HcEbf2);
        default:
            return C.intl.string(S.default.AhOqQs);
    }
}
function aK(e) {
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
let aY = ["model", "tool", "subagent", "delegated", "context"];
function aQ(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(aK(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function aX(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let aZ = ["arguments", "result", "usage", "diagnostics"];
var aJ = l(40715);
let a0 = { started: aJ.Vf, ok: aJ.mo, error: aJ.Sr };
function a1(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${aJ.Om} ${a0[t] ?? aJ.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return C.intl.string(S.default.HpKDyl);
                case "error":
                    return C.intl.string(S.default["5T4Dd0"]);
                default:
                    return C.intl.string(S.default.VbEmf0);
            }
        })(t),
    });
}
let a2 = { model: aJ.WI, subagent: aJ.uM, context: aJ.eH, tool: aJ.pw, delegated: aJ.C8 };
function a7(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: aJ.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: aJ.D6, children: t }),
            (0, n.jsx)("div", { className: aJ.zL, children: l }),
        ],
    });
}
function a6(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(a7, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function a5(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: aJ.WA, children: t });
}
function a4(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: aJ.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: aJ.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function a3(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: aJ.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: aJ.p8,
                children: [
                    (0, n.jsx)(av._, { className: aJ.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: aJ.bG, children: l }),
        ],
    });
}
function a9(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(a7, {
            label: t.key,
            value: (0, n.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? C.intl.formatToPlainString(S.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? C.intl.formatToPlainString(S.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(a7, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: aJ.Kv,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return C.intl.string(S.default.xO6bcQ);
                            case "content":
                                return C.intl.string(S.default.gpBZRr);
                            default:
                                return C.intl.string(S.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, n.jsx)(v.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function a8(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: aJ.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: aJ.uh,
                          children: C.intl.string(S.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          a7,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: aJ.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: aJ.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: C.intl.string(S.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? C.intl.string(S.default["1kBG9Z"])
                                                        : C.intl.formatToPlainString(S.default.VGSwo4, {
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
function re(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : C.intl.string(
                      "loading" === t.status
                          ? S.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? S.default.jEQTot
                            : S.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: aJ.E7, children: l });
}
function rt(e) {
    let { projectId: t, entry: l, onClose: r, parent: i, onSelect: s, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    n.add("usage");
            return (
                (l || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && n.add("diagnostics"),
                aZ.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aO.get(t)) return;
                    let l = new AbortController();
                    return (
                        aB(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aO.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = aD(l.startedAt, "millis"),
        f = aK(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: aJ._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(S.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: aJ.sy,
                children: (0, n.jsxs)("div", {
                    className: aJ.HI,
                    children: [
                        (0, n.jsx)(a1, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${aJ.PY} ${a2[f]}`,
                            children: aH(f),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: aJ.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: aJ.l5,
                            children: null == l.durationMs ? C.intl.string(S.default.HpKDyl) : aV(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aJ.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(a4, {
                      title: C.intl.string(S.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(a9, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(a8, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(re, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(a4, {
                      title: C.intl.string(S.default.KXrf5F),
                      children: [
                          (0, n.jsx)(a6, {
                              label: C.intl.string(S.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(S.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(a6, {
                                    label: C.intl.string(S.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(a7, {
                                    label: C.intl.string(S.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(S.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(a8, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(a4, {
                      title: C.intl.string(S.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(a5, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(a6, {
                                            label: C.intl.string(S.default.Ran4BY),
                                            value: C.intl.formatToPlainString(S.default["PYO+Jv"], {
                                                tokens: aW(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(a6, {
                                            label: C.intl.string(S.default.vPIcyv),
                                            value: C.intl.formatToPlainString(S.default.Qy2iTq, {
                                                system: aW(l.systemTokens),
                                                tools: aW(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: aW(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(a6, {
                                            label: C.intl.string(S.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(a6, {
                                            label: C.intl.string(S.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(a6, {
                                            label: C.intl.string(S.default.VyAl6j),
                                            value: C.intl.formatToPlainString(S.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(a6, {
                                            label: C.intl.string(S.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: aJ.E7,
                              children: C.intl.string(S.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: aJ.E7,
                      children: C.intl.string(S.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(a3, {
                      title: C.intl.string(S.default.T7SFyZ),
                      children: (0, n.jsxs)(a5, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(a7, {
                                        label: C.intl.string(S.default.NnBqcd),
                                        value: (0, n.jsx)(e_.D, {
                                            tag: "div",
                                            className: aJ.mi,
                                            onClick: () => s(i.id),
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === i.kind ? i.model : i.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, n.jsx)(a6, {
                                        label: C.intl.string(S.default.fI6mzD),
                                        value: C.intl.formatToPlainString(S.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(a6, { label: C.intl.string(S.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(a6, { label: C.intl.string(S.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, n.jsx)(a6, { label: C.intl.string(S.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(a6, { label: C.intl.string(S.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: aJ.Hm,
                                                children: C.intl.string(S.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    a6,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? C.intl.formatToPlainString(S.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : C.intl.formatToPlainString(S.default["/L6GFe"], {
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
            (0, n.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aJ.E7,
                children: C.intl.string(S.default.khAjR0),
            }),
        ],
    });
}
let rl = { model: aJ.WI, subagent: aJ.uM, context: aJ.eH, tool: aJ.pw, delegated: aJ.C8 };
function rn(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = aK(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return aY.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: aJ.M0,
        children: [
            (0, n.jsx)("div", {
                className: aJ.pZ,
                "aria-hidden": !0,
                children:
                    0 === r
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, n.jsx)(
                                        "div",
                                        {
                                            className: `${aJ.dL} ${rl[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: aJ.z4,
                role: "group",
                "aria-label": C.intl.string(S.default.UZ1OlR),
                children: aY.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: aJ.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${aJ.A9} ${rl[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: aH(e) }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(S.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(S.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: aV(a),
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
let ra = { model: aJ.WI, subagent: aJ.uM, context: aJ.eH, tool: aJ.pw, delegated: aJ.C8 };
function rr(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = aK(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(S.default["PYO+Jv"], { tokens: aW(t.promptTokens) })
                : null != t.durationMs
                  ? aV(t.durationMs)
                  : null;
    return (0, n.jsxs)(e_.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${aJ.nM} ${s ? aJ.A5 : ""} ${"error" === t.status ? aJ.Cr : ""} ${l ? aJ.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: aJ.sU,
                children: [
                    (0, n.jsx)(a1, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${aJ.PY} ${ra[o]}`,
                        children: aH(o),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: aJ.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: aJ.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aJ.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: aJ.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function ri(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([n7.Ay], () => n7.Ay.getTrace(l), [l]),
        s = (0, D.bG)([n7.Ay], () => n7.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => aG, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [m, f] = a.useState(!1),
        h = a.useRef(null),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, tP.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, tP.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, nF.A)({
            resizableDomNodeRef: g,
            orientation: nF.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), w(e));
            },
            [w],
        ),
        E = a.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, tP.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        M = a.useMemo(() => aQ(i, r), [i, r]),
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        ((null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                l = -1 / 0;
                            for (let n of e) {
                                let e = Date.parse(n.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != n.durationMs && (l = Math.max(l, e + n.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(l) ? Math.max(0, l - t) : null;
                        })(e.entries),
                    }));
                })(i)
                    .map((e, t) => ({ ...e, index: t, entries: aQ(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = aX(M, o),
        P = R?.kind === "tool" ? aX(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let F = a.useCallback(
        (e) => {
            if (0 === M.length) return;
            let t = M.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(M.length - 1, t));
                (u(M[l].id), document.getElementById(`trace-${M[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? M.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(M.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [M, o, j],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: aJ.uP,
              ref: h,
              children: (0, n.jsx)(aN, {
                  state: s,
                  emptyTitle: C.intl.string(S.default.Iyt8OJ),
                  emptyBody: C.intl.string(S.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${aJ.uP} ${m ? aJ.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: aJ.DK,
                      children: [
                          (0, n.jsx)(rn, { entries: i }),
                          (0, n.jsx)(ak, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: aJ.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(S.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: aJ.Ns,
                                    children: [
                                        (0, n.jsx)(aw, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(S.default["QATZ+A"]),
                                            className: aJ.p_,
                                            children: T.map((e) => {
                                                let t = aD(e.startedAt),
                                                    l = C.intl.formatToPlainString(S.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: aJ.mf,
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, n.jsx)(v.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: aV(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: aJ.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rr,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? M[0]?.id),
                                                                            onSelect: y,
                                                                            onKeyDown: F,
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
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": C.intl.string(S.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: aJ.b1,
                                    onPointerDown: A,
                                    onKeyDown: E,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: aJ.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rt, {
                                        projectId: l,
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
var rs = l(365199),
    ro = l(402879);
function ru(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([n7.Ay], () => n7.Ay.getTrace(t), [t]),
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
            (0, ro.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: aJ.ED,
                children: (0, n.jsx)(aj.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(S.default.NfncNw),
                    "aria-label": C.intl.string(S.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tw.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tw.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tA.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tE.rX, {
                            children: (0, n.jsx)(tE.Dr, {
                                id: "export",
                                label: C.intl.string(S.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(l3.K, {
                        ...e,
                        buttonRef: s,
                        icon: rs.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": C.intl.string(C.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var rd = l(497243);
function rc(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, u] = a.useState(""),
        c = (0, D.bG)([nV.A], () => nV.A.isDeveloper),
        f = (0, D.bG)([n2], () => n2.getStatus(t), [t]),
        h = (0, D.bG)([n2], () => n2.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, m.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, m.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, nW.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: n2.getStatus(t),
                        last_turn_usage: n2.getLastTurnUsage(t),
                        last_compaction: n2.getLastCompaction(t),
                        last_compaction_decline: n2.getLastCompactionDecline(t),
                        model_calls: n2.getModelCalls(t),
                        logs: n7.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nO.P0)((0, nz.o)(C.intl.string(S.default.sDSDiO), nq.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(S.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rd.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: nU.CopyIcon,
                            tooltip: C.intl.string(S.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: nB.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rd.rf,
                children: [
                    (0, n.jsxs)(nG.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(S.default.uNyR86),
                        className: rd.vR,
                        children: [
                            (0, n.jsx)(nG.V.Item, { id: "logs", children: C.intl.string(S.default["1mpzdJ"]) }),
                            (0, n.jsx)(nG.V.Item, { id: "worker", children: C.intl.string(S.default.whGHLD) }),
                            (0, n.jsx)(nG.V.Item, { id: "agent", children: C.intl.string(S.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(nG.V.Item, { id: "trace", children: C.intl.string(S.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(aS, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aL, { status: f, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rd.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rd.XH,
                                          children: (0, n.jsx)(ru, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, n.jsx)(ri, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(ap, { projectId: t, status: f, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rm = l(333007),
    rf = l(621466),
    rh = l(103557),
    rg = l(97808),
    rx = l(778712),
    rp = l(365912),
    rv = l(775121),
    rb = l(486020),
    rj = l(277437);
function ry(e) {
    let {
            at: t,
            bounds: l,
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
        { drafts: g, addFiles: x, removeDraft: p, settled: v, takeRefs: b } = t0({ onUploadFile: f, onDeleteFile: h }),
        j = a.useRef(null),
        y = (c || g.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            u(e.length > 0 ? e : void 0);
        }, [y, b, u]),
        [N, w] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => w(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let A = a.useRef(null),
        [E, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        T = l.left + 8,
        R = l.top + 8,
        P = Math.max(t.x, T),
        _ = Math.min(Math.max(t.y + 32 + 4, R), Math.max(R, l.top + l.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rj.M0, { [rj.ho]: N && !m, [rj.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rj.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(eU.m, {
                position: "bottom",
                text: C.intl.string(S.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rj.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(S.default.d6Rqlu),
                    children: (0, n.jsx)(tN.H, { size: "custom", color: "currentColor", className: rj.WW }),
                }),
            }),
            (0, n.jsx)(tI.y, {
                autoFocus: !0,
                rows: 1,
                className: rj.hF,
                value: s,
                placeholder: "" === r ? C.intl.string(S.default.FK09JH) : `Edit ${r}`,
                "aria-label": C.intl.string(S.default["qR+sGX"]),
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
                ? (0, n.jsx)("div", {
                      className: rj.ZO,
                      children: g.map((e) => (0, n.jsx)(t1, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rk = l(320510);
function rN(e) {
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
    let l = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (l.value = e.value),
        "string" == typeof e.path && "" !== e.path && (l.path = e.path),
        l
    );
}
function rw(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rN(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rA = l(940107),
    rE = l(42843);
let rS = { x: 25, y: 21 };
function rC(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rI(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rM(e, t, l, n) {
    let a = rI(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rT(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rR(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let l = t.viewport?.width,
        n = t.viewport?.height;
    return "number" != typeof l || "number" != typeof n || l < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: l, height: n },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function rP(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, eE.Q_)(o),
        c = (0, lG.o4)(o),
        f = (0, e0.useHasAnyModalOpen)(),
        h = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, E] = a.useState(null),
        [I, M] = a.useState(!1),
        T = a.useRef(null),
        R = a.useRef(null),
        P = a.useRef(null),
        [_, L] = a.useState(null),
        [F, $] = a.useState(!1),
        [O, z] = a.useState(null),
        [q, U] = a.useState(null),
        B = a.useRef(!1),
        [G, V] = a.useState(!1),
        [W, H] = a.useState(null),
        K = u && !c && !f;
    (a.useEffect(() => {
        if (!K) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            p((t) => (rC(t, e) ? t : e));
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [K, i]),
        a.useEffect(() => {
            if (!K || null == o) return;
            let e = !0,
                t = i();
            if (null == t) return void w(!0);
            (k(!0), w(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rk.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rR(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, eE._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), w(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, i, o]));
    let Y = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == x || null == o) return;
        if (null == b) {
            Y.current = x;
            return;
        }
        if (rC(Y.current, x)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Y.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rk.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !ee.current) return;
                        let l = rR(e.response);
                        null != l && (j(l), (0, eE._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rN(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eE.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, o, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (E(null), z(null), H(null), j(null));
                };
        }, [K]));
    let X = a.useRef(null),
        Z = a.useRef(null),
        J = a.useRef(!1),
        ee = a.useRef(!1);
    a.useEffect(() => {
        ((ee.current = K), K || ((X.current = null), (Z.current = null), (P.current = null), M(!1)));
    }, [K]);
    let et = a.useCallback(
            function e() {
                if (J.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let l = i();
                null != l &&
                    ((J.current = !0),
                    (0, rA.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rw, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((J.current = !1), ee.current)) {
                                if ("picked" !== t.status || rO(t.target, ei.current.rect, ei.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? E(null)
                                        : "unsupported" === t.status && $(!0);
                                else {
                                    let e = (0, eN.ts)(t.target);
                                    (L((t) => (r$(t, e) ? t : e)),
                                        E((e) => {
                                            var l;
                                            return ((l = t.target),
                                            null == e || null == l
                                                ? e === l
                                                : e.ref === l.ref &&
                                                  e.rect.x === l.rect.x &&
                                                  e.rect.y === l.rect.y &&
                                                  e.rect.width === l.rect.width &&
                                                  e.rect.height === l.rect.height)
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
        el = a.useCallback(() => {
            if (null == O) return;
            let e = !B.current;
            (U({ at: O.at, label: O.label, draft: O.draft, instant: e }), V(e), z(null));
        }, [O]);
    (a.useEffect(() => {
        if (!G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]),
        a.useEffect(() => {
            if (null == q) return;
            let e = setTimeout(() => U(null), rF);
            return () => clearTimeout(e);
        }, [q]));
    let en = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        ea = null != b || N,
        er = a.useMemo(() => b?.elements ?? [], [b]),
        ei = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ei.current = { rect: x, scale: en };
    }, [x, en]);
    let es = a.useCallback((e, t, l) => {
            (H(null), (B.current = !1), z({ target: e, anchor: t, draft: "", at: l, label: (0, eN.ts)(e) }));
        }, []),
        eo = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / en, y: (e.clientY - t.top) / en }), [en]),
        ed = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = R.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ed);
    let ec = a.useCallback(
            (e) => {
                if (null == x || null != W) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), M(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > rD || Math.abs(e.clientY - O.at.y) > rD) && (B.current = !0);
                    return;
                }
                if (!ea) return void E(null);
                let t = eo(e, x);
                if (F) {
                    let e = (0, eN.jo)(er, t.x, t.y),
                        l = null != e && rO(e, x, en) ? null : e;
                    if (null != l) {
                        let e = (0, eN.ts)(l);
                        L((t) => (r$(t, e) ? t : e));
                    }
                    E((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = Z.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((Z.current = l), (X.current = l), et());
            },
            [x, en, ea, eo, F, er, O, W, ed, et],
        ),
        em = a.useCallback(() => {
            (M(!1), E(null), (Z.current = null), (X.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !ea || F || null != O || null != W) return;
        let e = P.current,
            { rect: t, scale: l } = ei.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((Z.current = n), (X.current = n), et());
    }, [K, I, ea, F, O, W, et]);
    let ef = a.useCallback(
            (e) => {
                if (null != O || null != W) {
                    (el(), H(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = eo(e, x);
                es(A, (0, eN.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, eo, O, W, es, el],
        ),
        eh = a.useCallback(() => {
            null != o && (E(null), (0, eE.PS)(o));
        }, [o]),
        eg = a.useCallback(() => {
            null != o &&
                (null != O
                    ? el()
                    : W?.confirmingRemove === !0
                      ? H({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? H(null)
                        : eh());
        }, [o, O, W, el, eh]),
        ex = a.useRef(eg),
        ep = a.useRef(eh);
    a.useLayoutEffect(() => {
        ((ex.current = eg), (ep.current = eh));
    });
    let ev = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rv.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rv.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, rf.vq)(t) &&
                ev.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rp.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ep.current();
        }
    }, [K, s]);
    let eb = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != W || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : er.findIndex((e) => e.ref === A.ref);
                    E(er[(l + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    es(A, eN.F6, { x: (x?.left ?? 0) + A.rect.x * en, y: (x?.top ?? 0) + A.rect.y * en }));
            },
            [o, O, W, er, A, es, eg, x, en],
        ),
        ej = a.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    (((0, eN.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, m.dv)(o, (0, eN.v_)(O.target, O.draft), e), el(), E(null)));
            },
            [o, O, el],
        ),
        ey = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, m.vX)(o, e)), [o]),
        ek = a.useCallback((e) => (null == o ? Promise.resolve() : (0, m.Vm)(o, e)), [o]),
        ew = a.useCallback(() => {
            null == o ||
                null == W ||
                null == g ||
                ((0, eN.to)(W.draft) && ((0, eE.dy)(o, g, W.id, W.draft.trim()), H({ ...W, editing: !1 })));
        }, [o, W, g]),
        eA = a.useCallback(() => {
            null != o && null != W && null != g && ((0, eE.PR)(o, g, W.id), H(null));
        }, [o, W, g]),
        eS = u
            ? y
                ? C.intl.string(S.default.jQQ8i2)
                : N
                  ? C.intl.string(S.default.zvU2QH)
                  : C.intl.formatToPlainString(S.default.A4HDMU, { count: d.length })
            : "",
        eC = K && null != x,
        eI = I && null == W,
        eM = null == W ? null : d.find((e) => e.id === W.id),
        eT = O?.target ?? eM?.target ?? null,
        eR = O ?? q,
        eP = O ?? (q?.instant === !0 ? null : q),
        e_ =
            null != eM && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = rT(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rM(eM.target, eM.anchor, x, en), x)
                : null;
    return (0, rm.createPortal)(
        (0, n.jsxs)("div", {
            ref: ev,
            className: rE.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rE.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eC
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rE.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                  "data-plain-cursor": eI ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": C.intl.string(S.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ec,
                                  onMouseLeave: em,
                                  onClick: ef,
                                  onKeyDown: eb,
                              }),
                              null != A && null == O && null == W ? (0, n.jsx)(rz, { box: rI(A, x, en) }) : null,
                              (0, n.jsx)("div", {
                                  ref: T,
                                  className: rE.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rE.xz,
                                      "data-shown": null != A && null == W && null == O ? "" : void 0,
                                      "data-instant": G ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rE.Ux,
                                          children: [
                                              null == _
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rE.Tl, children: _.kind }),
                                              null == _ || "" === _.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rE.kh, children: [" ", _.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rE.Y,
                                  children: eI
                                      ? (0, n.jsx)(lE.A, { className: rE.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eP
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rE.aZ,
                                        style: { transform: `translate3d(${eP.at.x + 12}px, ${eP.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rE.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rE.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rE.Tl, children: eP.label.kind }),
                                                    "" === eP.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rE.kh,
                                                              children: [" ", eP.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: rE.D0, style: rI(eT, x, en), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rM(e.target, e.anchor, x, en),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rE.xL,
                                          style: { ...rT(l, x), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(S.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, eN.iw)(e.target),
                                          }),
                                          "aria-expanded": W?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == O && H(a);
                                          },
                                          onFocus: () => {
                                              null == O && H(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), el(), H(a));
                                          },
                                          children: (0, n.jsx)(r_, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)(ry, {
                                        at: { x: eR.at.x + 12, y: eR.at.y + 12 },
                                        bounds: x,
                                        kind: eR.label.kind,
                                        value: eR.draft,
                                        canSubmit: null != O && (0, eN.to)(eR.draft),
                                        onChange: (e) => {
                                            null != O && z({ ...O, draft: e });
                                        },
                                        onSubmit: ej,
                                        onDismiss: el,
                                        onUploadFile: ey,
                                        onDeleteFile: ek,
                                        closing: null == O,
                                    }),
                              null != eM && null != W && null != e_
                                  ? (0, n.jsxs)(rL, {
                                        point: e_,
                                        frame: x,
                                        authorId: eM.authorId,
                                        title: (0, eN.iw)(eM.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            W.confirmingRemove ? H({ ...W, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            W.editing || W.confirmingRemove || H(null);
                                        },
                                        children: [
                                            W.editing
                                                ? (0, n.jsx)(rh.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(S.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: W.draft,
                                                      maxLength: eN.gq,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...W, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ew());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rE.aC,
                                                      children: eM.comment,
                                                  }),
                                            (0, eE.zz)(eM, g)
                                                ? (0, n.jsx)("div", {
                                                      className: rE.eB,
                                                      children: W.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rE.nv,
                                                                        children: C.intl.string(S.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...W, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(S.default.ncz32j),
                                                                        onClick: () =>
                                                                            H({
                                                                                ...W,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    W.editing
                                                                        ? (0, n.jsx)(Q.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, eN.to)(W.draft),
                                                                              text: C.intl.string(S.default.wIeFN0),
                                                                              onClick: ew,
                                                                          })
                                                                        : (0, n.jsx)(Q.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(S.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...W,
                                                                                      editing: !0,
                                                                                      draft: eM.comment,
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
function r_(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getUser(t), [t]);
    return (0, n.jsx)(rg.eu, {
        src: null == l ? null : rb.Ay.getUserAvatarURL(l),
        size: rx._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rL(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rS);
    a.useLayoutEffect(() => {
        let e = p.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let l = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - l.x) && 0.5 > Math.abs(e.y - l.y) ? e : l));
    }, []);
    let {
            left: k,
            top: N,
            originX: w,
            originY: A,
        } = ((l = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (i = Math.max((r = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), l)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, r), i)), originX: u.x - s, originY: u.y - o }),
        E = {
            left: k,
            top: N,
            "--custom-vibegrations-card-origin-x": `${w}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: rE.Nr,
        style: E,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rE.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rE.ip, children: (0, n.jsx)(r_, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rE.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rE.zI, children: x }),
        ],
    });
}
let rF = 300,
    rD = 2;
function r$(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rO(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rz(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rE.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rq = l(11055),
    rU = l(533140),
    rB = l(342667);
function rG(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, frameId: s } = e,
        o = (0, lG.o4)(null != l && l === r ? t : null),
        u = (0, e0.useHasAnyModalOpen)(),
        d = (0, rU.V0)(s);
    a.useEffect(() => {
        o && d && null != s && (0, rU.c2)(s);
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
    return (0, rm.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: rB.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: o ? C.intl.string(S.default.dIE9zO) : "",
                }),
                f
                    ? (0, n.jsx)("div", {
                          className: rB.o,
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
var rV = l(314116),
    rW = l(364522),
    rH = l(237528),
    rK = l(664121),
    rY = l(95477),
    rQ = l(381849),
    rX = l(724401);
function rZ(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function rJ(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        s = "user" === r ? ["stable"] : ["preview", "stable"],
        [u, c] = a.useState(s[0] ?? "stable"),
        [h, g] = a.useState({ status: "loading" }),
        [x, p] = a.useState(""),
        [b, j] = a.useState(""),
        [y, k] = a.useState({ phase: "idle" }),
        N = "busy" === y.phase,
        [w, A] = a.useState(0),
        E = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${u}`;
        return (
            Promise.all([(0, m.DM)(l, u), (0, m.ms)(l, u)])
                .then((l) => {
                    let [n, a] = l;
                    e || g({ status: "loaded", key: t, points: n, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || g({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [l, u, w]);
    let I = "loading" !== h.status && h.key === `${l}|${u}` ? h : { status: "loading" },
        M = a.useCallback(
            (e, t) => {
                (0, rV.A)({
                    title: C.intl.string(S.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? C.intl.formatToPlainString(S.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(S.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === u ? S.default["/kYdZe"] : S.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(S.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (k({ phase: "busy", environment: u, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (k({
                                              phase: "settled",
                                              environment: u,
                                              tone: "positive",
                                              text: C.intl.string(S.default.kIWqXR),
                                          }),
                                          E())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: u,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                            }),
                                            E())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default["2xSPXh"]),
                                              }),
                                              E())
                                            : k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(S.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: u,
                                        tone: "danger",
                                        text: C.intl.string(S.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [u, s, E],
        ),
        T = a.useCallback(() => {
            (k({ phase: "busy", environment: u, kind: "create" }),
                (0, m._m)(l, u, x)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: u,
                                tone: "positive",
                                text: C.intl.string(S.default.mfAoFT),
                            }),
                            E());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: u, tone: "danger", text: C.intl.string(S.default.uhhqP3) });
                    }));
        }, [l, u, x, E]),
        R = "loaded" === I.status ? I.window : null,
        P = "loaded" === I.status ? I.nowMs : 0,
        _ = R?.earliestRestoreTimestampMs ?? P - 2592e6,
        L = "" === b ? null : new Date(b).getTime(),
        F = null != L && !Number.isNaN(L) && L >= _ && L <= P,
        D =
            "busy" === y.phase
                ? "restore" === y.kind && y.environment === u
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === y.phase && y.environment === u
                  ? { kind: "notice", tone: y.tone, text: y.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === I.status
                ? (0, n.jsx)("div", { className: rX.E8, children: (0, n.jsx)(f.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: rX.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(S.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: rX.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(rW.Ip, {
                          className: rX.p_,
                          children: (0, n.jsx)("div", {
                              className: rX.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rQ.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rQ._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: rX.KW,
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return C.intl.string(S.default.h4zhWL);
                                                          case "undo":
                                                              return C.intl.string(S.default["c/tNny"]);
                                                          default:
                                                              return C.intl.string(S.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != a.relative &&
                                                  (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: a.absolute ?? void 0,
                                                      children: a.relative,
                                                  }),
                                              e.expired &&
                                                  (0, n.jsx)(rH.v, {
                                                      text: C.intl.string(S.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rX.AD,
                                                title: C.intl.formatToPlainString(S.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rX.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            e_.D,
                                            {
                                                className: rX.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          M(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, m.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: rX.Pf,
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
        (0, n.jsxs)("section", {
            className: rX.nd,
            "aria-label": C.intl.string(S.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(S.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: rK.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(S.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rX.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rX.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(nG.V, {
                                        selectedItem: u,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(S.default.CNvRyJ),
                                        className: rX.vR,
                                        children: [
                                            (0, n.jsx)(nG.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(S.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(nG.V.Item, {
                                                id: "stable",
                                                children: C.intl.string(S.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        C.intl.formatToPlainString(S.default.l07ism, { days: 30 }),
                                        null != R
                                            ? ` ${new Date(R.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === D.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rX.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: C.intl.string(S.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === D.kind
                                      ? (0, n.jsx)("div", {
                                            className: rX.lm,
                                            role: "danger" === D.tone ? "alert" : "status",
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === D.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: D.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, n.jsxs)("div", {
                            className: rX.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rX.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rX.Fv,
                                            children: (0, n.jsx)(rY.k, {
                                                label: C.intl.string(S.default.hJb78b),
                                                value: x,
                                                onChange: p,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(Q.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: C.intl.string(S.default["14UarN"]),
                                            onClick: T,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rX._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rX.kv,
                                            children: (0, n.jsx)(rY.k, {
                                                label: C.intl.string(S.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: rZ(_),
                                                max: rZ(P),
                                                disabled: N || null == R,
                                                onChange: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: C.intl.string(S.default["3D/vYN"]),
                                            disabled: N || !F,
                                            onClick: () => {
                                                null != L && M(new Date(L).toLocaleString(), () => (0, m.dz)(l, u, L));
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
var r0 = l(406810),
    r1 = l(977628);
function r2(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [s, u] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(l)
                    .then((t) => {
                        e || u({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || u({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [l]),
        (t =
            "loading" === s.status
                ? (0, n.jsx)("div", { className: r1.E8, children: (0, n.jsx)(f.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: r1.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(S.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: r1.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(S.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(rW.Ip, {
                          className: r1.p_,
                          children: (0, n.jsx)("div", {
                              className: r1.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, rQ.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: rQ._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      e_.D,
                                      {
                                          className: r1.f_,
                                          onClick: () =>
                                              (0, rV.A)({
                                                  title: C.intl.string(S.default.qOUOPE),
                                                  subtitle: C.intl.string(S.default.k2JBj5),
                                                  confirmText: C.intl.string(S.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: r1.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: l.absolute ?? void 0,
                                                      children: l.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: r1.nd,
            "aria-label": C.intl.string(S.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(S.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: r0.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(S.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: r1.rf, children: t }),
            ],
        })
    );
}
var r7 = l(120426),
    r6 = l(873727),
    r5 = l(147248),
    r4 = l(418842),
    r3 = l(885386),
    r9 = l(171936),
    r8 = l(796036);
function ie(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            header: d,
            mainClassName: c,
            content: m,
            sidebar: f,
        } = e,
        [h, g] = a.useState(null),
        x = (0, u.A)(r, o),
        p = x?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([nj.A], () => (0, r6.x4)(nj.A.theme)),
            n = (0, D.bG)([r5.A], () => r5.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([tR.Ay], () => ({
                reducedMotion: tR.Ay.useReducedMotion,
                fontScale: (0, r6.U0)(),
                highContrast: tR.Ay.isHighContrastModeEnabled,
                forcedColors: tR.Ay.useForcedColors,
                underlineLinks: tR.Ay.alwaysShowLinkDecorations,
            })),
            d = r3.hH.useSetting(),
            c = (0, r4.C)(),
            m = a.useRef(!1),
            f = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, r7.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, r6.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rA.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, i, t, s, d, e, r, c, u]),
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
            }, [n, v]),
            a.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            a.useLayoutEffect(() => {
                let l = (0, r7.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, r7.F)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0));
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
            if (null != t) return (0, r9.mn)(t, () => (0, r7.F)(h, p));
        }, [t, h, p]));
    let v = a.useCallback(() => (0, r7.F)(h, p), [h, p]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: ej.fm, children: m })],
            }),
            f,
            (0, n.jsx)(rG, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                frameId: p,
            }),
            (0, n.jsx)(rP, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: l,
            }),
        ],
    });
}
function it(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: f,
            header: h,
            chatOpen: g,
            onCloseChat: x,
            chatHeaderAction: p,
            versionHistoryOpen: v = !1,
            restorePointsOpen: b = !1,
            onCloseRestorePoints: j,
            installScope: y = null,
            onCloseVersionHistory: k,
            onRestoreVersion: N,
            debugOpen: w = !1,
            onCloseDebug: A,
            restoreState: E,
            previewReady: I,
            previewGate: M,
            channelMessages: T,
            availability: R,
            activeMode: P,
            widgetApplicationId: _,
        } = e,
        L = a.useRef(null),
        [F, D] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (f.type === s.U.MAIN) return ((0, c.HV)(r), () => (0, c.HV)(null));
    }, [r, f.type]),
        a.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, r8.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = L.current;
            if (null == e) return;
            function t() {
                null != e && D(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useEffect(() => () => (0, c.Zq)(0), []));
    let $ = Math.max(360, F - 320),
        O = null != T ? T.open : g,
        z = g || f.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: L,
        className: ej.LB,
        children: (0, n.jsx)(ie, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: f,
            header: h,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: O }),
            content: (0, n.jsx)(eg, {
                applicationId: r,
                previewApplicationId: u,
                surface: f,
                previewReady: I,
                previewGate: M,
                availability: R,
                activeMode: P,
                widgetApplicationId: _,
            }),
            sidebar:
                null != T
                    ? (0, n.jsx)(n$, {
                          open: T.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: T.open
                              ? (0, n.jsx)(ey, { channel: T.channel, guild: T.guild, onClose: T.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(n$, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rc, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            r2,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(rJ, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rq.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: o.P,
                                                                        tooltip: C.intl.string(S.default.YdgE0j),
                                                                        onClick: x,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: C.intl.string(C.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ej.cb,
                                                      children: (0, n.jsx)(nR, { projectId: t, restoreState: E }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
