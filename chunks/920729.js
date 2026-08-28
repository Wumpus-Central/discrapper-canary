l.d(t, { A: () => aL });
var n,
    a = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    o = l(672929),
    u = l(948230),
    d = l(18739),
    c = l(289873),
    m = l(821609),
    f = l(627363),
    h = l(580954),
    g = l(297264),
    x = l(834730),
    p = l(625180),
    v = l(91242),
    j = l(812901),
    b = l(317608),
    y = l(17928),
    k = l(956518),
    N = l(869146),
    A = l(207371),
    w = l(165610),
    C = l(652215),
    E =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n),
    S = l(742023),
    I = l(697744),
    T = l(295813),
    M = l(375708),
    R = l(296167);
function P(e) {
    let { className: t } = e,
        { Component: l, events: n, getDuration: s } = (0, I.c)();
    return (
        r.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != s()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, s]),
        r.useEffect(() => {
            let e = setInterval(n.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [n]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: n.onMouseEnter,
            onMouseLeave: n.onMouseLeave,
            children: [
                (0, a.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(x.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: R.o,
                    children: M.intl.string(T.default.jTuX7C),
                }),
            ],
        })
    );
}
var L = l(328284);
function D(e) {
    let { title: t, body: l, wide: n = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: i()(L.Bf, n && L.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: L.Ux,
                children: [
                    (0, a.jsx)(g.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(x.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            r,
        ],
    });
}
var q = l(963691);
function F(e) {
    let { applicationId: t, surface: l } = e,
        { frame: n, state: s } = (function (e) {
            let { applicationId: t, surface: l } = e,
                {
                    surface: n,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: l } = e,
                        n = r.useMemo(() => (0, w.VA)(t, l), [t, l]),
                        a = r.useMemo(() => l, [n]),
                        s = (0, y.bG)([v.A], () => v.A.getFrame(n), [n]),
                        i = (0, y.bG)(
                            [N.A, v.A],
                            () => N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) && v.A.getMainFrame()?.id === n,
                            [n],
                        ),
                        { data: o, isLoading: u } = (0, f.YY)(t),
                        d = (0, A.x)(o),
                        c = null != (0, k.Ay)(t),
                        [m, h] = r.useState(null),
                        g = m === n;
                    return {
                        surface: a,
                        setFailed: r.useCallback(() => h(n), [n]),
                        lifecycle: (0, w.x1)(s)
                            ? i
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : g
                              ? { state: "error" }
                              : s?.state === "loading"
                                ? { state: "loading", frame: s }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && c
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: l }),
                { state: i } = s;
            return (
                r.useEffect(() => {
                    "awaiting-launch" === i && e();
                    async function e() {
                        try {
                            await p.A.launchFrame({ applicationId: t, surface: n });
                        } catch {
                            a();
                        }
                    }
                }, [i, t, n, a]),
                s
            );
        })({ applicationId: t, surface: l }),
        i = (0, w.VA)(t, l);
    switch (
        (r.useEffect(
            () => (
                !(function (e) {
                    let t = v.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT)) return;
                    let l = v.A.getMainFrame()?.id === e;
                    t.intent === w.sV.MAIN
                        ? (l || p.A.promoteFrame(e), p.A.resetFrameLayoutModes(e))
                        : l && p.A.clearMainFrameSlot();
                })(i),
                () => {
                    let e;
                    null != (e = v.A.getFrame(i)) &&
                        ((0, w.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        S.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === w.sV.INLINE && p.A.promoteFrame(i),
                              p.A.updateFrameLayoutMode({ frameId: i, layoutMode: w.y0.PIP }))
                            : e.intent === w.sV.MAIN && p.A.demoteMainFrame(i));
                }
            ),
            [i],
        ),
        s)
    ) {
        case E.Launched:
            return (0, a.jsx)(b.A, { frameId: n.id, level: j.A.WithinAppContent, className: q.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: q.qs,
                children: (0, a.jsx)(D, {
                    title: M.intl.string(T.default["4f6Vkr"]),
                    body: M.intl.string(T.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
            return (0, a.jsx)(P, { className: q.qs });
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: q.qs,
                children: (0, a.jsx)(D, {
                    title: M.intl.string(T.default.FHOJiH),
                    body: M.intl.string(T.default["1yLQoV"]),
                }),
            });
        case E.Error:
            return (0, a.jsxs)("div", {
                className: q.qs,
                children: [
                    (0, a.jsx)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: M.intl.string(T.default.MeLWCr),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: q.tj,
                        children: M.intl.string(T.default["1RCbQT"]),
                    }),
                ],
            });
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: q.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var $ = l(323384),
    O = l(308528),
    z = l(334738),
    _ = l(802426),
    U = l(355622),
    G = l(734057),
    H = l(531685),
    B = l(365971),
    W = l(362417);
function Y(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: W.f,
        children: [
            (0, a.jsx)($.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function V() {
    return (0, a.jsx)("div", { className: W.f, children: (0, a.jsx)(c.y, {}) });
}
function K(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: s, isLoading: i } = (0, f.YY)(n),
        o = s?.bot?.id ?? null,
        u = (0, y.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        r.useEffect(() => {
            null != t && O.A.preload(C.ME, t);
        }, [t]),
        (l = (0, y.bG)([H.A], () => H.A.isFocused())),
        r.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, B.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
                }
            );
        }, [t, l]);
    let [d, c] = r.useState(null),
        m = null != o && d === o;
    return (r.useEffect(() => {
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
    i)
        ? (0, a.jsx)(V, {})
        : null == o || m
          ? (0, a.jsx)(Y, { message: M.intl.string(T.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(V, {})
            : (0, a.jsx)("div", {
                  className: W.g,
                  children: (0, a.jsx)(_.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var Q = l(148853),
    X = l(598748),
    Z = l(486610),
    J = l(531913),
    ee = l(587895),
    et = l(633075),
    el = l(946356),
    en = l(139730),
    ea = l(520082),
    er = l(287809),
    es = l(675210),
    ei = l(71495);
function eo(e) {
    let { applicationId: t } = e,
        l = (0, y.bG)([er.default], () => er.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(eu, { applicationId: t, user: l });
}
function eu(e) {
    let { applicationId: t, user: l } = e,
        n = (0, y.bG)([ee.A], () => ee.A.getApplication(t)),
        s = r.useMemo(() => new et.R({ applicationId: t }), [t]),
        i = (0, J.A)(l.id, t),
        o = i.surfaceConfigs,
        u = (0, es.yZ)({
            widgetTop: null != o[X.m.WIDGET_TOP],
            widgetBottom: null != o[X.m.WIDGET_BOTTOM],
            miniProfile: null != o[X.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: ei.$C,
              children: (0, a.jsxs)("div", {
                  className: ei.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: ei.a9,
                                children: (0, a.jsx)(el.A.Overlay, {
                                    className: ei.Qb,
                                    children: (0, a.jsx)(ea.A, {
                                        user: l,
                                        widget: s,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != n
                          ? (0, a.jsx)("div", {
                                className: ei.ql,
                                children: (0, a.jsx)(en.A, { application: n, rendererProps: i, renderText: Z.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var ed = l(976102);
function ec(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: n,
            previewReady: s,
            previewGate: i,
            availability: u,
            activeMode: d,
            widgetApplicationId: g,
        } = e,
        x = (0, o.A)(t, n),
        { isLoading: p } = (0, f.YY)(t ?? void 0);
    if (
        (r.useEffect(() => {
            i?.type === "permissions" && null != x && (0, h.A)().leaveFrame(x.id);
        }, [x, i?.type]),
        i?.type === "checking")
    )
        return (0, a.jsx)("div", { className: ed.q, children: (0, a.jsx)(c.y, {}) });
    if (i?.type === "permissions")
        return (0, a.jsx)("div", {
            className: ed.q,
            children: (0, a.jsx)(D, {
                wide: !0,
                title: M.intl.string(T.default.DYwf2n),
                body: M.intl.string(T.default.WWj3pN),
                children: (0, a.jsx)(m.$, {
                    variant: "primary",
                    size: "md",
                    text: M.intl.string(T.default["CRfE/E"]),
                    onClick: i.onReviewPermissions,
                    loading: i.loading,
                }),
            }),
        });
    if (!s) return (0, a.jsx)(P, { className: ed.q });
    if (null == t) return null;
    if (p) return (0, a.jsx)("div", { className: ed.q, children: (0, a.jsx)(c.y, {}) });
    let v = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, Q.z3)(d), "aria-label": (0, Q.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: ed.R,
        ...v,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, a.jsx)(F, { applicationId: t, surface: n })
                : null,
            "widget" === d && null != g
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, a.jsx)("div", {
                          className: ed.q,
                          children: (0, a.jsx)(D, {
                              wide: !0,
                              title: M.intl.string(T.default.SGHO9K),
                              body: M.intl.string(T.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(eo, { applicationId: g })
                : null,
            "bot" === d && null != l ? (0, a.jsx)(K, { previewApplicationId: l }) : null,
        ],
    });
}
var em = l(789645),
    ef = l(534890),
    eh = l(738876),
    eg = l(47167),
    ex = l(58736),
    ep = l(31717),
    ev = l(372054);
function ej(e) {
    let { channel: t, guild: l, onClose: n } = e,
        r = (0, eg.Ay)(t),
        s = (0, a.jsx)(ex.Ay.Icon, { icon: em.P, tooltip: M.intl.string(M.t.cpT0Cq), onClick: n });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eh.A, { channel: t, draftType: ep.C.ChannelMessage }),
            (0, a.jsxs)(ex.Ay, {
                toolbar: s,
                "aria-label": M.intl.string(M.t.BIYAqa),
                children: [
                    (0, a.jsx)(ex.Ay.ChannelIcon, { icon: ef.ChatIcon, "aria-label": M.intl.string(M.t["/VQax8"]) }),
                    (0, a.jsx)(ex.Ay.Title, { children: r }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)(_.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = l(435558),
    ey = l.n(eb),
    ek = l(661531),
    eN = l(602853),
    eA = l(517461),
    ew = l(761929),
    eC = l(927506);
function eE(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: s } = e,
        i = (0, eN.r)(ek.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = r.useRef(null),
        [u, d] = (0, eA.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = r.useState(u ?? 460),
        f = (0, eb.clamp)(c, 360, l);
    r.useLayoutEffect(() => {
        n(t ? f + i : 0);
    }, [f, t, i, n]);
    let h = (0, ew.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: ew.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = r.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: eC.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: eC.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: eC.kL, style: { width: f }, children: s }),
        ],
    });
}
var eS = l(11055),
    eI = l(333007),
    eT = l(192308),
    eM = l(985451),
    eR = l(342667);
function eP(e) {
    let { projectId: t, resolveIframe: l } = e,
        n = (0, eM.o4)(t),
        s = (0, eT.useHasAnyModalOpen)(),
        [i, o] = r.useState(null);
    r.useEffect(() => {
        if (!n) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(l());
            o((t) =>
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
                window.clearInterval(t), window.removeEventListener("resize", e);
            }
        );
    }, [n, l]);
    let u = n && null != i && !s;
    return (0, eI.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: eR.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: n ? M.intl.string(T.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: eR.o,
                          style: { left: i.left, top: i.top, width: i.width, height: i.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var eL = l(972786),
    eD = l(689175),
    eq = l(903586),
    eF = l(783791),
    e$ = l(717447),
    eO = l(29080),
    ez = l(46054);
function e_(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        r = (0, eq.B4)(t),
        s = r.filter((e) => "message" === e.type).at(-1),
        i = (0, eq.Lf)(t),
        o = i && null != s && s.content.trim() === l.trim(),
        u = !n && "" !== l && !o;
    return {
        streamed: r,
        lastStreamedMessage: s,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: i }),
    };
}
l(134528), l(947204);
var eU = l(939249),
    eG = l(478016),
    eH = l(34136);
function eB(e) {
    let { title: t, trailing: l, children: n, className: r, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: i()(eH.Nr, r),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: i()(eH.wx, null != l && eH.o5, s),
                children: [
                    (0, a.jsx)(x.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var eW = l(113757);
function eY(e) {
    let { idea: t, selected: l, onPick: n } = e,
        s = r.useId(),
        o = null == n;
    return (0, a.jsxs)(eU.D, {
        className: i()(eW.nM, { [eW.f1]: o, [eW.CZ]: l }),
        onClick: o ? void 0 : () => n(t),
        "aria-label": M.intl.formatToPlainString(T.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, a.jsxs)("div", {
                className: eW.jo,
                children: [
                    l
                        ? (0, a.jsx)(eG.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eW.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(x.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eW.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eV(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [s, i] = r.useState(() => new Set()),
        o = r.useCallback(
            (e) => {
                i((t) => new Set(t).add(e.id)), n?.(e);
            },
            [n],
        );
    return (0, a.jsx)(eB, {
        title: M.intl.string(T.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                eY,
                { idea: e, selected: s.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eK = l(435619),
    eQ = l(430392),
    eX = l(632015),
    eZ = l(824757);
function eJ(e) {
    let { label: t, children: l } = e;
    return (0, a.jsxs)("section", {
        className: eZ.uW,
        children: [(0, a.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), l],
    });
}
function e0(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)(eJ, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: eZ.Ip,
                  children: l.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: eZ.jw,
                              children: (0, a.jsx)(x.E, {
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
function e1(e) {
    let { isActivity: t, hasWidget: l } = e,
        n = t ? $.k : eQ.RobotIcon;
    return (0, a.jsxs)("span", {
        className: eZ.K2,
        children: [
            l
                ? (0, a.jsxs)("span", {
                      className: eZ.L6,
                      children: [
                          (0, a.jsx)(eX.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(x.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: M.intl.string(T.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: eZ.L6,
                children: [
                    (0, a.jsx)(n, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: M.intl.string(t ? M.t.IC5Ann : T.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function e2(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(eB, {
        title: M.intl.string(T.default["60htw+"]),
        trailing: (0, a.jsx)(e1, { isActivity: !0 === t.is_activity, hasWidget: null != t.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: eZ.rf,
            children: [
                (0, a.jsx)(x.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(eJ, {
                          label: M.intl.string(T.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: eZ.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: eZ.Aw,
                                          children: (0, a.jsx)(x.E, {
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
                t.commands.length > 0
                    ? (0, a.jsx)(eJ, {
                          label: M.intl.string(M.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: eZ.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eZ.uX,
                                          children: [
                                              (0, a.jsxs)(x.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(x.E, {
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
                (0, a.jsx)(e0, { label: M.intl.string(T.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(e0, { label: M.intl.string(T.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var e7 = l(479191);
function e6(e) {
    let { projectId: t, request: n } = e,
        s = r.useCallback(() => {
            (0, eT.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, a.jsx)(e, { ...l, projectId: t, request: n });
            });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: e7.Lo,
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: M.intl.string(T.default["/e28TK"]),
            }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : M.intl.string(T.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: e7.cS,
                children: n.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: e7.$H,
                            children: (0, a.jsx)(x.E, {
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
            (0, a.jsx)("div", {
                className: e7.sq,
                children: (0, a.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: M.intl.string(T.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var e3 = l(976814),
    e5 = l(973e3);
function e8(e) {
    let { projectId: t, request: l } = e,
        n = (0, y.bG)([d.Ay], () => d.Ay.getSettings(t)),
        s = (l.keys ?? []).map((e) => n?.schema.find((t) => t.key === e)).filter((e) => null != e),
        i = r.useCallback(() => {
            (0, e3.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0 });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: e5.Mk,
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: M.intl.string(T.default.wgDhiQ),
            }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : M.intl.string(T.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: e5.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: e5.K4,
                                  children: (0, a.jsx)(x.E, {
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
            (0, a.jsx)("div", {
                className: e5.p0,
                children: (0, a.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: M.intl.string(T.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var e4 = l(196582);
function e9(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function te(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function tt(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function tl(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function tn(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function ta(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function tr(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function ts(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function ti(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function to(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function tu(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: r, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: r ?? "img",
    });
}
function td() {
    return [
        { key: "snail", Illocon: e9, tint: "var(--illo-yellow-40)", name: tm(T.default["2l3AEQ"]) },
        { key: "goat", Illocon: te, tint: "var(--illo-orange-40)", name: tm(T.default["+FPL+I"]) },
        { key: "frog", Illocon: tt, tint: "var(--illo-green-40)", name: tm(T.default.w4GOfR) },
        { key: "bunny", Illocon: tl, tint: "var(--illo-pink-40)", name: tm(T.default.XmZT9M) },
        { key: "cat", Illocon: tn, tint: "var(--illo-pink-40)", name: tm(T.default.NnydwQ) },
        { key: "caterpillar", Illocon: ta, tint: "var(--illo-green-40)", name: tm(T.default["4iXcNT"]) },
        { key: "butterfly", Illocon: tr, tint: "var(--illo-purple-40)", name: tm(T.default.DoTGt5) },
        { key: "dog", Illocon: ts, tint: "var(--illo-yellow-40)", name: tm(T.default["9zxqmP"]) },
        { key: "spider", Illocon: ti, tint: "var(--illo-orange-40)", name: tm(T.default.HF0T3L) },
        { key: "bee", Illocon: to, tint: "var(--illo-yellow-40)", name: tm(T.default.XTzDga) },
        { key: "bot", Illocon: tu, tint: "var(--illo-purple-40)", name: tm(T.default.abtC2b) },
    ];
}
function tc(e) {
    return td().find((t) => t.key === e);
}
function tm(e) {
    return M.intl.string(e);
}
function tf(e) {
    let t = td(),
        l = 0,
        n = e[0] ?? "";
    for (let e = 0; e < n.length; e++) l = (31 * l + n.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, n) => {
            a.set(e, t[(l + n) % t.length]);
        }),
        a
    );
}
var th = l(683063),
    tg = l(705754),
    tx = l(883455),
    tp = l(13699);
function tv(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : M.intl.string(T.default.MdXWEK);
}
function tj(e) {
    let { projectId: t, lane: l, Illocon: n, tint: r, name: s, connectsDown: i } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, eq.SY)(l.steps),
        c = u
            ? null != d
                ? (0, eq.WQ)(d)
                : tv(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tv(e));
                  switch (e.status) {
                      case "failed":
                          return M.intl.formatToPlainString(T.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return M.intl.formatToPlainString(T.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return M.intl.formatToPlainString(T.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return M.intl.formatToPlainString(T.default.RsOwXc, { count: t });
                                      let l = Math.round(t / 60);
                                      return l < 60
                                          ? M.intl.formatToPlainString(T.default["z+U4YX"], { count: l })
                                          : M.intl.formatToPlainString(T.default["7Q/vz0"], {
                                                hours: Math.floor(l / 60),
                                                minutes: l % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return M.intl.formatToPlainString(T.default.KS49RN, { task: t });
                      default:
                          return M.intl.formatToPlainString(T.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: tp.dO,
                                    children: l.steps.map((e) =>
                                        (0, a.jsx)(
                                            tx.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: tp.iq,
                                      children: (0, a.jsx)(tg.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(e4.A, {
        glyph: (0, a.jsx)(th.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: s,
            body: tv(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: tp.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: i,
    });
}
l(321073);
var tb = l(140735),
    ty = l(329456);
let tk = [];
function tN(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: ty.xL,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return M.intl.string(T.default.TkPGOH);
                case "in_progress":
                    return M.intl.string(T.default["oK+fmd"]);
                default:
                    return M.intl.string(T.default.d7lieu);
            }
        })(t),
        children: (0, a.jsx)("svg", {
            className: ty.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function tA(e) {
    let { agents: t, active: l } = e,
        n = r.useMemo(() => (l ? t : tk), [l, t]),
        s = r.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        i = n.map((e) => e.key).join("\0"),
        [o, u] = r.useState(n),
        [d, c] = r.useState(i),
        [m, f] = r.useState(!1);
    d !== i && (c(i), u([...n, ...o.filter((e) => !s.has(e.key))]), 0 === n.length && f(!1));
    let h = o.some((e) => !s.has(e.key));
    if (
        (r.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        r.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: ty.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: r } = e,
                    { Illocon: i } = l;
                return (0, a.jsx)(
                    th.u,
                    {
                        asset: (0, a.jsx)(i, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: r,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ty.MA,
                            "data-leaving": s.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(i, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ty.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function tw(e) {
    let t,
        { todos: l, provisional: n, agents: s } = e,
        i = (function (e) {
            let t = e.join("\0"),
                [l, n] = r.useState(() => new Set(e)),
                [a, s] = r.useState(t),
                [i, o] = r.useState(() => new Set());
            return (
                a !== t && (s(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                r.useEffect(() => {
                    if (0 === i.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [i]),
                i
            );
        })(r.useMemo(() => l.map((e) => e.id), [l])),
        o =
            ((t = (s ?? tk).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            r.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tk) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: ty.p_,
        children: [
            l.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: ty.AS,
                        "data-status": e.status,
                        "data-arriving": i.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tN, { status: e.status }),
                            (0, a.jsx)(x.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: ty.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: ty.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(tA, { agents: o.get(e.id) ?? tk, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: ty.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tN, { status: "pending" }),
                          (0, a.jsx)(x.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ty.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ty.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tC(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: r = !0 } = e,
        { completed: s, total: i } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === i
        ? null
        : (0, a.jsxs)(eB, {
              title: M.intl.string(T.default.qCRC6c),
              trailing: (0, a.jsx)(x.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: M.intl.formatToPlainString(T.default.bQvqly, { completed: s, total: i }),
              }),
              className: ty.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  r
                      ? (0, a.jsx)(tb.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: M.intl.formatToPlainString(T.default["QG/EiF"], { completed: s, total: i }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: ty.rf,
                      children: (0, a.jsx)(tw, { todos: t, provisional: l, agents: n }),
                  }),
              ],
          });
}
var tE = l(229775),
    tS = l(165648);
function tI(e) {
    let t = tf(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tc(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: tv(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tT(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            durationMs: s,
            interrupted: i = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = r.useMemo(() => (0, eq.GO)(l, { turnActive: n }), [l, n]),
        x = r.useMemo(
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
    if (i)
        return (0, a.jsx)("ol", {
            className: tp.pj,
            "data-live": !1,
            children: (0, a.jsx)(e4.A, {
                glyph: (0, a.jsx)(eO.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: M.intl.string(T.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = n ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? s) : void 0)),
        v = c ? ((0, eq.lt)(l) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        y = tf(b.map((e) => e.taskId)),
        k = !f && (n || b.some((e) => "running" === e.task.status)),
        N = tI(b);
    return (0, a.jsx)(e4.l.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: tp.pj,
            "data-live": k,
            children: [
                (0, a.jsx)(e$.Ay, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: n,
                    closed: f,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, l) => {
                    let n = null != e.task.helperMark ? tc(e.task.helperMark) : void 0,
                        r = n ?? y.get(e.taskId);
                    return null == r
                        ? null
                        : (0, a.jsx)(
                              tj,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: tp.YO,
                          children: (0, a.jsx)(tC, { todos: v, provisional: u, agents: N }),
                      })
                    : null,
            ],
        }),
    });
}
function tM(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
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
            streamed: p,
            lastStreamedMessage: v,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = r.useMemo(
            () => e_({ steps: l, content: n, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, n, s, u],
        ),
        y = null == u ? null : (0, a.jsx)(eK.A, { projectId: t, attachments: u }),
        k = null == y ? null : (0, a.jsx)("div", { className: tp.MT, children: y }),
        N = h
            ? (0, a.jsx)(x.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: M.intl.string(T.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: tp.ue,
        children: [
            p.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: tp.dO,
                      children: p
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: tp.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tS.PT,
                                              children: ez.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === v ? k : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(e2, { proposal: s })
                : j
                  ? (0, a.jsxs)("div", {
                        className: i()(tp.ky, tE.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: i()(tS.PT, tp.cW),
                                children: ez.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? k : null,
                            N,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: i()(tp.ky, tE.XR),
                      children: (0, a.jsx)(e6, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: i()(tp.ky, tE.XR),
                      children: (0, a.jsx)(e8, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eV, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            j ? null : N,
        ],
    });
}
l(323874), l(14289), l(35956);
var tR = l(475358),
    tP = l(922016),
    tL = l(980707),
    tD = l(477782),
    tq = l(81369),
    tF = l(717400),
    t$ = l(663341),
    tO = l(826745),
    tz = l(866665),
    t_ = l(783977),
    tU = l(559647),
    tG = l(285796),
    tH = l(775602),
    tB = l(673724),
    tW = l(506774),
    tY = l(228366);
let tV = "VibegrationsComposerDrafts";
function tK() {
    return tW.w.get(tV) ?? {};
}
let tQ = new Map(),
    tX = ey().throttle(() => {
        if (0 === tQ.size) return;
        let e = tK();
        for (let [t, l] of tQ) "" === l ? delete e[t] : (e[t] = l);
        tQ.clear(), tW.w.set(tV, e);
    }, 1e3);
class tZ extends y.Ay.Store {
    getDraft(e) {
        let t = tQ.get(e);
        return null != t ? t : (tK()[e] ?? "");
    }
}
let tJ = new tZ(tY.h, {
    LOGOUT: function () {
        return tQ.clear(), tX.cancel(), tW.w.remove(tV), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return tQ.set(t, l), tX(), "" === l && tX.flush(), !1;
    },
});
var t0 = l(590380),
    t1 = l(311656),
    t2 = l(789438);
let t7 = tB.Is;
function t6(e) {
    let { text: t } = e,
        [l, n] = r.useState(""),
        [s, i] = r.useState("enterStart"),
        [o, u] = r.useState("");
    t !== o && (u(t), t !== l && ("" === l ? (n(t), i("enterStart")) : "idle" === s && i("exit"))),
        r.useEffect(() => {
            if ("exit" === s) {
                let e = window.setTimeout(() => {
                    n(t), i("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === s) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => i("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [s, t]);
    let d = "exit" === s ? t2.t0 : "enterStart" === s ? t2.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${t2.xM} ${t2.nT} ${d}`, children: l }),
            (0, a.jsx)(tR.e, { shortcut: "tab", className: `${t2.xT} ${t2.nT} ${d}`, keyClassName: t2.IS }),
        ],
    });
}
let t3 = 0;
function t5(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: s,
            restoring: i = !1,
            onSend: o,
            onInterrupt: d,
            onUploadFile: c,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            modelSettings: p,
            onModelSettingsChange: v,
        } = e,
        [j, b] = r.useState(() => tJ.getDraft(t)),
        k = r.useCallback(
            (e) => {
                (0, u.I$)(t, e), b(e);
            },
            [t],
        ),
        [N, A] = r.useState(t);
    N !== t && (A(t), b(tJ.getDraft(t)));
    let w = (0, y.bG)([tH.Ay], () => tH.Ay.isSubmitButtonEnabled),
        [C, E] = r.useState([]),
        [S, I] = r.useState(!1),
        [R, P] = r.useState(!1);
    r.useEffect(() => {
        s || P(!1);
    }, [s]);
    let L = r.useRef(null),
        D = r.useRef([]),
        q = r.useRef(new Set()),
        F = r.useRef(m);
    F.current = m;
    let $ = r.useCallback((e) => {
            (D.current = e), E(e);
        }, []),
        O = r.useCallback((e) => {
            F.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    r.useEffect(() => {
        let e = q.current;
        return () => {
            for (let t of D.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && O(t.ref);
        };
    }, [O]);
    let z = r.useCallback(
            (e, t) => {
                if (q.current.has(e)) return;
                let l = D.current;
                l.some((t) => t.localId === e) && $(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [$],
        ),
        _ = r.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...D.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++t3,
                        r = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= t7) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: M.intl.formatToPlainString(T.default.DlX57a, { count: t7 }),
                        });
                        continue;
                    }
                    if (!(0, tB.x5)(n.size, e)) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: M.intl.formatToPlainString(T.default.cI7t94, {
                                size: (0, tB.ZJ)((0, tB.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = tB.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    t.push({ ...r, previewUrl: s }), l.push({ file: n, localId: a });
                }
                for (let { file: e, localId: n } of ($(t), l))
                    c(e).then(
                        (e) => {
                            q.current.has(n) ? O(e) : z(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            q.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                z(n, { status: "error", errorText: M.intl.string(T.default.GwEHvn) }));
                        },
                    );
            },
            [O, c, z, $],
        ),
        U = r.useCallback(
            (e) => {
                let t = D.current,
                    l = t.find((t) => t.localId === e);
                q.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && O(l.ref),
                    $(t.filter((t) => t.localId !== e));
            },
            [O, $],
        ),
        G = C.every((e) => "ready" === e.status),
        H = "" !== j.trim() || C.length > 0,
        B = l && H && G,
        W = r.useCallback(() => {
            if (!B) return;
            let e = D.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), D.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            k(""), $([]);
        }, [B, j, o, $, k]),
        Y = r.useCallback(
            (e) => {
                e.preventDefault(), W();
            },
            [W],
        ),
        V = r.useCallback(() => {
            null == d || R || (P(!0), d());
        }, [d, R]),
        K = null == g || "" !== j || !l || n || i ? null : g,
        Q = r.useCallback(
            (e) => {
                if ("Escape" === e.key && s && null != d && !R) {
                    e.preventDefault(), e.stopPropagation(), V();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != K) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(K);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), W());
            },
            [W, f, s, d, R, V, K, k],
        ),
        X = r.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), _(t));
            },
            [l, _],
        ),
        Z = r.useCallback(
            (e) => {
                e.preventDefault(), I(!1), l && _(Array.from(e.dataTransfer.files));
            },
            [l, _],
        ),
        J = r.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
        }, []),
        ee = r.useCallback(
            (e) => {
                _(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [_],
        ),
        et = r.useRef(null),
        el = r.useRef(null),
        [en, ea] = r.useState(0),
        [er, es] = r.useState(!1);
    r.useEffect(() => {
        if (0 === j.length) return void es(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = t9(e);
            null != t && ea(t);
        }
        es(!0);
        let t = setTimeout(() => es(!1), t8);
        return () => clearTimeout(t);
    }, [j]);
    let ei = r.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        eo = er ? ` ${t2.EB}` : "",
        eu = null != K;
    return (0, a.jsxs)("form", {
        onSubmit: Y,
        onDrop: Z,
        onDragOver: J,
        onDragLeave: () => I(!1),
        className: S ? `${t2.DA} ${t2.pV}` : t2.DA,
        children: [
            C.length > 0
                ? (0, a.jsx)("div", {
                      className: t2.lN,
                      children: C.map((e) => (0, a.jsx)(le, { draft: e, onRemove: U }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${t2.wg} ${t2.LP}${eo}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${t2.wg} ${t2.L3}${eo}`, style: ei, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: t2.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: L,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: t2.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tP.Y, {
                        targetElementRef: el,
                        position: "top",
                        align: "left",
                        animation: tP.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tL.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": M.intl.string(M.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(tD.rX, {
                                    children: [
                                        (0, a.jsx)(tD.Dr, {
                                            id: "upload-file",
                                            label: M.intl.string(M.t["d3+iYs"]),
                                            iconLeft: tq.H,
                                            leadingAccessory: { type: "icon", icon: tq.H },
                                            action: () => L.current?.click(),
                                        }),
                                        null != h
                                            ? (0, a.jsx)(tD.Dr, {
                                                  id: "import-project",
                                                  label: M.intl.string(T.default.edKajy),
                                                  iconLeft: tF.q,
                                                  leadingAccessory: { type: "icon", icon: tF.q },
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: el,
                                type: "button",
                                className: `${t2.Y0} ${t2.nu}`,
                                disabled: !l,
                                "aria-label": M.intl.string(M.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, a.jsx)(t$.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: t2.Qu,
                                }),
                            });
                        },
                    }),
                    null == K
                        ? null
                        : (0, a.jsx)("div", {
                              className: t2.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(t6, { text: K }),
                          }),
                    (0, a.jsx)(tO.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: Q,
                        onPaste: X,
                        placeholder: i
                            ? M.intl.string(T.default.pGFXZ0)
                            : n
                              ? M.intl.string(T.default.JeM47J)
                              : l
                                ? eu
                                    ? ""
                                    : x
                                      ? M.intl.string(T.default.M3ovXY)
                                      : M.intl.string(s ? T.default["67PpcP"] : T.default.ahRdoJ)
                                : M.intl.string(T.default.nm4w9P),
                        disabled: !l,
                        "aria-label": M.intl.string(T.default.OPr66w),
                        rows: 1,
                        className: t2.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: t2.Sz,
                        children:
                            s && null != d
                                ? (0, a.jsx)(tz.m, {
                                      text: M.intl.string(T.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${t2.Y0} ${t2.$E}`,
                                          disabled: R,
                                          onClick: V,
                                          "aria-label": M.intl.string(T.default.KdgI4k),
                                          children: (0, a.jsx)(eO.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != v
                                  ? (0, a.jsx)(t1.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !l,
                                        onChange: v,
                                        className: `${t2.Y0} ${t2.$E}`,
                                        icon: (0, a.jsx)(t_.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    w
                        ? (0, a.jsxs)("div", {
                              className: t2.fF,
                              children: [
                                  (0, a.jsx)("div", { className: t2.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: t2.rt,
                                      disabled: !B,
                                      "aria-label": M.intl.string(T.default["22GHMt"]),
                                      children: (0, a.jsx)(tU.SendMessageIcon, {
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
let t8 = 1500,
    t4 = [
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
function t9(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t9.mirror;
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
                (t9.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of t4) t.style.setProperty(e, l.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let n = document.createElement("span");
    (n.textContent = "\u200B"), t.appendChild(n);
    let a = n.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function le(e) {
    let { draft: t, onRemove: l } = e;
    return (0, a.jsxs)(t0.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: t2.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: t2.o1,
                onClick: () => l(t.localId),
                "aria-label": M.intl.string(T.default["3HWvgk"]),
                children: (0, a.jsx)(tG.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t9.mirror = null;
var lt = l(320095),
    ll = l(963852),
    ln = l(521981),
    la = l(763754),
    lr = l(491182),
    ls = l(438729),
    li = l(622868),
    lo = l(308334),
    lu = l(837528),
    ld = l(375199),
    lc = l(715628),
    lm = l(752636),
    lf = l(9842),
    lh = l(589022),
    lg = l(95701),
    lx = l(994500),
    lp = l(967198),
    lv = l(803306);
let lj = new Set(),
    lb = new Map();
function ly(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
let lk = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lN(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lA(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lw(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lA(e, t),
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
    if (lN(a) && lN(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lN(lA(e, n)); ) l++, (n -= 2);
        return l % 2 == 1;
    }
    return !1;
}
function lC(e, t) {
    let { streaming: l } = t,
        n = (0, y.bG)([tH.Ay], () => tH.Ay.useReducedMotion),
        a = l && !n,
        [s, i] = r.useState(() => ({ target: e, length: e.length })),
        o = s;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          r = 0;
                      for (; r < a && e.charCodeAt(r) === t.charCodeAt(r); ) r++;
                      for (; r > 0 && lw(t, r); ) r--;
                      return r;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== s && i(o);
    let u = a && o.length < e.length,
        d = r.useRef(o);
    r.useLayoutEffect(() => {
        d.current = o;
    });
    let c = r.useRef(0),
        m = r.useRef(0);
    r.useEffect(() => {
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
                                let s = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, r / 280) * Math.max(n, 0))),
                                );
                                var i = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && lk.has(e.charAt(n - 1)); ) n--;
                                    return lk.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + s));
                                let o = i;
                                for (; o < t.length && o - i < 32 && lw(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && i({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        r.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                i({ target: e, length: e.length });
            }
        }, [u]);
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: a && f < e.length };
}
var lE = l(441136);
let lS = (0, lg.createChannelRecord)({ id: "vibegrations-builder", type: C.rbe.DM }),
    lI = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lT(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: i()(lE.Yq, { [lE.x1]: t }), children: e });
}
function lM(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lR(e, t, l) {
    let { content: n } = (0, ld.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        s = r.useMemo(() => ({ message: e, channel: lS, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, a.jsx)(ls.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, lc.A)(s, n);
}
function lP(e) {
    let [t, l] = r.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = r.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        s = r.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        i = (0, lu.m)(e, lS, t.usernameProfile, n),
        o = (0, lu.Jo)(t.avatarProfile, n),
        u = (0, y.bG)([lp.A], () => lp.A.getGuildId()),
        d = (0, y.bG)([er.default], () => er.default.getCurrentUser()),
        c = r.useCallback(
            (t) => {
                let l = er.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(lh.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: i,
        onPopoutRequestClose: s,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function lL(e) {
    let { baseMessage: t, referenced: l, onJumpToReplied: n } = e,
        s = r.useMemo(
            () => ("" !== l.content ? (0, ln.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [l],
        ),
        { isReplyAuthorBlocked: i, isReplyAuthorIgnored: o } = (0, y.cf)(
            [lx.A],
            () => ({
                isReplyAuthorBlocked: lx.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lx.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        u = (0, la.X4)(l),
        d = (0, la.X4)(t),
        c = lP(l);
    return (0, a.jsx)(lo.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: lS,
        referencedMessage: { state: lf.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: i,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != n,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: n,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function lD(e) {
    let { message: t, author: l } = e,
        n = lP(t);
    return (0, a.jsx)(li.Ay, {
        message: t,
        channel: lS,
        author: l,
        guildId: n.guildId,
        subscribeToGroupId: t.id,
        renderPopout: n.renderPopout,
        showAvatarPopout: n.showAvatarPopout,
        showUsernamePopout: n.showUsernamePopout,
        onClickAvatar: n.onClickAvatar,
        onClickUsername: n.onClickUsername,
        onPopoutRequestClose: n.onPopoutRequestClose,
    });
}
function lq(e) {
    let { content: t, createdAt: l, userId: n, accessories: s, groupStart: i } = e;
    r.useEffect(
        () =>
            (function (e) {
                if (null == e || lj.has(e) || null != er.default.getUser(e)) return;
                let t = lb.get(e) ?? 0;
                t >= 3 ||
                    (lb.set(e, t + 1),
                    lj.add(e),
                    lv
                        .getUser(e)
                        .finally(() => lj.delete(e))
                        .catch(() => {}));
            })(n),
        [n],
    );
    let o = (0, y.bG)(
            [er.default],
            () => ly(n, null != n ? er.default.getUser(n) : null, er.default.getCurrentUser()),
            [n],
        ),
        u = r.useMemo(() => (0, la.FT)(o, null), [o]),
        d = r.useMemo(() => {
            if (null == o) return null;
            let e = (0, ll.Ay)({ channelId: lS.id, content: t, author: o });
            return (0, lt.rh)({ ...e, timestamp: lM(l, e.timestamp), state: C.cmJ.SENT });
        }, [t, o, l]);
    return null == d ? null : (0, a.jsx)(lF, { message: d, author: u, content: t, accessories: s, groupStart: i });
}
function lF(e) {
    let { message: t, author: l, content: n, accessories: r, groupStart: s = !0 } = e,
        i = lR(t, n);
    return (0, a.jsx)(lr.A, {
        className: lE.yE,
        author: l,
        childrenHeader: s ? (0, a.jsx)(lD, { message: t, author: l }) : void 0,
        childrenMessageContent: i,
        childrenAccessories: lT(r, "" !== n),
        disableInteraction: !0,
    });
}
function l$(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: s,
            onJumpToReplied: i,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lC(t, { streaming: u }),
        m = r.useMemo(() => (0, la.FT)(null, null), []),
        f = r.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = s?.userId,
        g = (0, y.bG)(
            [er.default],
            () => ly(h, null != h ? er.default.getUser(h) : null, er.default.getCurrentUser()),
            [h],
        ),
        x = r.useMemo(() => {
            if (null == s || null == g) return null;
            let e = (0, ll.Ay)({ channelId: lS.id, content: s.content, author: g });
            return (0, lt.rh)({ ...e, id: s.id, timestamp: lM(s.createdAt, e.timestamp), state: C.cmJ.SENT });
        }, [s, g]),
        p = r.useMemo(() => (null == s ? void 0 : { channel_id: lS.id, message_id: s.id }), [s]),
        v = r.useMemo(() => {
            let e = (0, ll.Ay)({ channelId: lS.id, content: d, author: lI });
            return (0, lt.rh)({
                ...e,
                timestamp: lM(l, e.timestamp),
                state: C.cmJ.SENT,
                ...(null != p ? { type: C.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, l, p]),
        j = lR(v, d, lE.OS);
    return (0, a.jsxs)("div", {
        className: lE.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(lr.A, {
                className: lE.yE,
                author: f,
                childrenRepliedMessage:
                    null == x ? null : (0, a.jsx)(lL, { baseMessage: v, referenced: x, onJumpToReplied: i }),
                childrenHeader: (0, lm.A)({ message: v, channel: lS, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lT(n, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: lE.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var lO = l(375068);
function lz(e) {
    let { projectId: t, messages: l, ref: n, onPickIdea: s } = e,
        i = r.useRef(null),
        o = r.useCallback(
            (e) => {
                (i.current = e), "function" == typeof n ? n(e) : null != n && (n.current = e);
            },
            [n],
        ),
        [u, d] = r.useState(null),
        c = r.useRef(0);
    r.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = r.useCallback((e) => {
            let t = i.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600));
        }, []),
        f = r.useMemo(
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
                        let e = !(0, eF.BL)(t),
                            n = e_({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            r = (0, eq.C6)(t.steps, { turnActive: e }),
                            { lastWork: s, open: i } = (0, eq.CT)(r, { turnActive: e }),
                            o = r.at(-1)?.index;
                        for (let u of r) {
                            if (null != u.prose) {
                                let r = `${t.render_id}:${u.key}`;
                                l(
                                    {
                                        kind: "prose",
                                        key: r,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === n.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: r },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                l(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${u.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: u.index,
                                        active: u.index === i,
                                        closed: u.index !== i,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === s,
                                        hostsChecklist: u.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        if (
                            (!0 === t.interrupted
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
                            n.showsClosingMessage ||
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
                            s = !1;
                        for (let i of e) {
                            if (null == i.actor) {
                                n.push(!1), (a = null), (t = void 0), (r = !1), (s = !1), (l = void 0);
                                continue;
                            }
                            let e =
                                !r || a !== i.actor || t !== i.authorId || i.boundary !== l || !0 === i.separate || s;
                            e && ((a = i.actor), (t = i.authorId), (r = !0), (s = !0 === i.separate), (l = i.boundary)),
                                n.push(e);
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(l),
            [l],
        );
    return 0 === l.length
        ? (0, a.jsx)("ol", {
              ref: n,
              className: lO.x7,
              children: (0, a.jsx)(l_, {
                  role: "assistant",
                  children: (0, a.jsx)(l$, { content: M.intl.string(T.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: lO.x7,
              children: f.map((e) => {
                  let n = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                          return (0, a.jsx)(
                              l_,
                              {
                                  role: "user",
                                  anchorId: n.id,
                                  highlighted: u === n.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lq, {
                                      groupStart: e.groupStart,
                                      content: n.content,
                                      createdAt: n.created_at,
                                      userId: n.user_id,
                                      accessories:
                                          null != l ? (0, a.jsx)(eK.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              l_,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(l$, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: n.created_at,
                                      accessories:
                                          e.hostsAttachments && null != n.attachments
                                              ? (0, a.jsx)(eK.A, { projectId: t, attachments: n.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              l_,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tT, {
                                      projectId: t,
                                      steps: n.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != n.finished_at ? n.finished_at - n.created_at : void 0,
                                      todos: n.todos,
                                      provisionalTodo: n.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              l_,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tT, { projectId: t, interrupted: !0, steps: n.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              l_,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tT, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: n.todos,
                                      provisionalTodo: n.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              l_,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(l$, {
                                      groupStart: e.groupStart,
                                      content: n.content,
                                      createdAt: n.created_at,
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
                                      })(l, n.in_reply_to),
                                      onJumpToReplied: null != n.in_reply_to ? () => m(n.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tM, {
                                          projectId: t,
                                          steps: n.steps,
                                          announcement: n.announcement,
                                          content: "",
                                          proposal: n.proposal,
                                          interrupted: !0 === n.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: n.ideas,
                                          pickedIdeaIds:
                                              null == n.ideas
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
                                                    })(l, n, n.ideas),
                                          attachments: n.attachments,
                                          secretRequest: n.secretRequest,
                                          settingsRequest: n.settingsRequest,
                                          onPickIdea: s,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function l_(e) {
    let { role: t, children: l, anchorId: n, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": n,
        className: i()(lO.xk, { [lO.Qo]: r, [lO.q3]: s }),
        children: l,
    });
}
var lU = l(625903),
    lG = l(964675);
function lH(e) {
    let { projectId: t } = e,
        l = (0, y.bG)([d.Ay], () => null != d.Ay.getSettings(t), [t]),
        n = r.useCallback(() => {
            (0, e3.A)(t);
        }, [t]);
    return l
        ? (0, a.jsx)(eU.D, {
              className: lG.h,
              "aria-label": M.intl.string(T.default.gTMvzD),
              onClick: n,
              children: (0, a.jsx)(lU.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lB = l(863610),
    lW = l(495557);
function lY(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: s } = lC(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [n]),
        (0, a.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lW.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eD.Ch, {
                ref: o,
                className: lW.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: i()(tS.PT, lW.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: ez.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lV = l(921461);
function lK(e) {
    let { activity: t, compacting: l = !1, restoring: n = !1, controlling: s = !1 } = e,
        o = r.useRef(null),
        u = r.useId(),
        [d, c] = r.useState(null),
        m = null != t && "end" !== t.phase,
        f = s
            ? T.default.ivvYHP
            : n
              ? T.default.aFffp2
              : l
                ? T.default["0vH/5G"]
                : m
                  ? T.default.Ly7F7x
                  : T.default.QDGuNS,
        h = null != t && "" !== t.text,
        g = t?.session ?? null,
        p = h && null != g && d === g,
        v = r.useCallback(() => {
            h && null != g && c((e) => (e === g ? null : g));
        }, [h, g]),
        j = r.useCallback(() => c(null), []);
    return (0, a.jsx)(tP.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(lY, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eU.D, {
                innerRef: o,
                className: i()(lV.hF, h && lV.Xd),
                "aria-label": M.intl.string(n ? T.default.pGFXZ0 : T.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: v,
                children: [
                    (0, a.jsx)("span", {
                        className: lV.bl,
                        children: (0, a.jsx)(lB.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!s || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: M.intl.string(f),
                    }),
                ],
            }),
    });
}
var lQ = l(885574),
    lX = l(280894);
function lZ(e) {
    return e.toLocaleString();
}
function lJ(e) {
    let { label: t, usage: l } = e;
    return (0, a.jsxs)("div", {
        className: lX.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: lX.mf,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lZ((0, tB.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(x.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lZ(l.input_tokens),
                    " in \xb7 ",
                    lZ(l.output_tokens),
                    " out \xb7 ",
                    lZ(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lZ(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function l0(e) {
    let { project: t } = e,
        l = (0, tB.wU)(t.compaction),
        n = (0, tB.wV)((0, tB.wV)(t.orchestrator, t.codegen), l);
    return (0, a.jsxs)("div", {
        className: lX.si,
        role: "dialog",
        "aria-label": M.intl.string(T.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: lX.Q$,
                children: (0, a.jsxs)("div", {
                    className: lX.mf,
                    children: [
                        (0, a.jsxs)(x.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lZ((0, tB.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(lJ, { label: M.intl.string(T.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(lJ, { label: M.intl.string(T.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(lJ, { label: M.intl.string(T.default.Tj6b30), usage: l }),
            (0, a.jsxs)("div", {
                className: lX.mf,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: M.intl.string(T.default["kILb+R"]),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tB.sj)(n) ? "\u2014" : `${Math.round(100 * (0, tB.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function l1(e) {
    let { project: t } = e,
        l = r.useRef(null);
    return (0, a.jsx)(tP.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(l0, { project: t }),
        children: (e) =>
            (0, a.jsx)(eU.D, {
                innerRef: l,
                className: lX.Y$,
                "aria-label": M.intl.string(T.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(lQ.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var l2 = l(258216);
function l7(e) {
    switch (e) {
        case "connecting":
            return M.intl.string(T.default.W7oyuf);
        case "failed":
            return M.intl.string(T.default.eE60xI);
        case "closed":
            return M.intl.string(T.default["yBmS+I"]);
    }
}
function l6(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: n = !1,
            thinkingActivity: r,
            compacting: s,
            projectUsage: i,
            connState: o,
        } = e,
        u = (0, eM.o4)(t);
    return (0, a.jsxs)("div", {
        className: l2.jf,
        children: [
            (0, a.jsx)("div", {
                className: l2.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || n || u ? (0, a.jsx)(lK, { activity: r, compacting: s, restoring: n, controlling: u }) : null,
            }),
            (0, a.jsx)(lH, { projectId: t }),
            null == i
                ? null
                : (0, a.jsxs)("span", {
                      className: l2.BP,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": M.intl.formatToPlainString(T.default["7SZZvj"], {
                                  runes: (0, tB.a7)(i.cost_usd),
                                  turns: i.turns,
                              }),
                              children: M.intl.formatToPlainString(T.default["4PFO2p"], {
                                  runes: (0, tB.a7)(i.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(l1, { project: i }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": M.intl.formatToPlainString(T.default.eDDdhB, { status: l7(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: l2.XF,
                      children: l7(o),
                  }),
        ],
    });
}
var l3 = l(22231),
    l5 = l(408278),
    l8 = l(900797),
    l4 = l(847374),
    l9 = l(477155),
    ne = l(935286),
    nt = l(856795),
    nl = l(424110);
function nn(e) {
    let { option: t, position: l, disabled: n, onPick: s, reachable: o = !0 } = e,
        u = r.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eU.D, {
        className: i()(nl.uK, { [nl.ue]: n }),
        onClick: n ? void 0 : () => s(t),
        "aria-label": M.intl.formatToPlainString(d ? T.default.aL1BKQ : T.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": n,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nl.Gy, "aria-hidden": !0, children: l }),
            (0, a.jsxs)("span", {
                className: nl.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nl.l8,
                        children: (0, a.jsx)(x.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nl.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, a.jsx)(x.E, {
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
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nl.rM,
                      children: M.intl.string(T.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function na(e) {
    let { question: t, draft: l, direction: n, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, a.jsxs)("div", {
        className: i()(nl.Ge, nl.x1),
        "data-direction": n,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, a.jsx)(nn, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, a.jsxs)("div", {
                className: nl.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: nl.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(l3.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, a.jsx)("span", { className: i()(nl.Pu, nl.es), children: s }),
                ],
            }),
        ],
    });
}
function nr(e) {
    let { clarification: t, onSubmit: l, onDismiss: n } = e,
        [s, o] = r.useState({}),
        [u, d] = r.useState({}),
        [c, m] = r.useState(0),
        [f, h] = r.useState(null),
        [g, p] = r.useState(null),
        [v, j] = r.useState(null),
        [b, y] = r.useState(!1),
        k = r.useRef(null),
        [N, A] = r.useState(null),
        w = r.useRef(null),
        C = r.useRef(0),
        E = null == l,
        S = t.questions.length,
        I = Math.min(c, S - 1),
        R = t.questions[I],
        [P, L] = r.useState({ id: R.id, expanded: !1 }),
        D = P.id === R.id && P.expanded,
        [q, F] = r.useState(null),
        $ = u[R.id] ?? "",
        { text: O, phase: z } = (0, nt.Q)(R.question),
        _ = O === R.question,
        U = _ && q?.id === R.id && q.truncated;
    r.useLayoutEffect(() => {
        if (null == N || D || !_) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            F((t) => (t?.id === R.id && t.truncated === e ? t : { id: R.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return t.observe(N), () => t.disconnect();
    }, [_, N, R.id, D]);
    let G = M.intl.string(D ? M.t.iTcuma : M.t.dcl9MQ),
        H = r.useCallback(
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
        B = r.useCallback(
            (e, t) => {
                C.current += 1;
                let l = C.current;
                h({ direction: t, moves: l }), p({ question: R, draft: $, direction: t, moves: l }), y(!0), m(e);
            },
            [$, R],
        ),
        W = r.useCallback(() => {
            let e = k.current,
                t = w.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    r.useLayoutEffect(() => {
        let e = k.current,
            t = w.current;
        if (null == e || null == t) return;
        W();
        let l = new ResizeObserver(W);
        return l.observe(e), l.observe(t), () => l.disconnect();
    }, [W]);
    let Y = f?.moves;
    r.useEffect(() => {
        if (null == Y) return;
        let e = setTimeout(() => p(null), 400),
            t = setTimeout(() => y(!1), 500);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [Y]);
    let V = r.useCallback(
            (e) => {
                if (E) return;
                let l = { ...s, [R.id]: e };
                o(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            r = t[n[a].id];
                        if (null == r || "" === r.text.trim()) return a;
                    }
                    return null;
                })(t, l, I);
                null == n ? H(l) : B(n, n < I ? "back" : "forward");
            },
            [s, t, E, I, R.id, H, B],
        ),
        K = r.useCallback(() => {
            if (E || 0 === I) return;
            let e = t.questions[I - 1];
            o((t) => {
                let l = { ...t };
                return delete l[e.id], l;
            }),
                d((t) => {
                    let l = { ...t };
                    return delete l[e.id], l;
                }),
                B(I - 1, "back");
        }, [t, E, I, B]),
        Q = I > 0 && !E,
        X = r.useCallback(() => {
            let e = $.trim();
            "" !== e && V({ kind: "custom", text: e });
        }, [$, V]),
        [Z, J] = r.useState(!1),
        [ee, et] = r.useState(!1);
    r.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => J(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let el = r.useCallback(() => {
            null != n && (et(!0), setTimeout(n, 150));
        }, [n]),
        en = r.useCallback(() => {
            E || I >= S - 1 || B(I + 1, "forward");
        }, [E, I, S, B]),
        ea = I < S - 1 && !E;
    return (0, a.jsxs)("section", {
        className: i()(nl.$O, { [nl.fI]: Z && !ee, [nl.Oh]: ee }),
        role: "dialog",
        "aria-label": R.question,
        "data-vibegrations-clarification": t.id,
        "data-state": E ? "inert" : "open",
        "data-question-expanded": D ? "true" : void 0,
        "data-step": I,
        children: [
            (0, a.jsxs)("div", {
                className: nl.rf,
                style: null == v ? void 0 : { height: v.heading + v.rows },
                "data-moving": b ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: k,
                        className: nl.wx,
                        children: [
                            (0, a.jsx)(x.E, {
                                ref: A,
                                tag: "span",
                                id: `${R.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: D ? void 0 : 5,
                                className: i()(nl.TK, nl.R_, { [nl.TB]: "exit" === z, [nl.JU]: "enter" === z }),
                                children: O,
                            }),
                            U || D
                                ? (0, a.jsx)("div", {
                                      className: nl.Q7,
                                      children: (0, a.jsx)(tz.m, {
                                          text: G,
                                          children: (0, a.jsx)(l5.K, {
                                              icon: D ? l8.t : l4.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: R.id, expanded: !D }),
                                              "aria-label": G,
                                              "aria-controls": `${R.id}-label`,
                                              "aria-expanded": D,
                                          }),
                                      }),
                                  })
                                : null,
                            null == n
                                ? null
                                : (0, a.jsx)(eU.D, {
                                      className: i()(nl.gb, nl.Q7),
                                      onClick: el,
                                      "aria-label": M.intl.string(T.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, a.jsx)(em.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: nl.Cg,
                        style: null == v ? void 0 : { insetBlockStart: v.heading },
                        children: (0, a.jsxs)("div", {
                            className: nl.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: w,
                                    className: nl.Ge,
                                    role: "group",
                                    "aria-labelledby": `${R.id}-label`,
                                    "data-direction": f?.direction,
                                    "data-parity": null == f ? void 0 : f.moves % 2,
                                    children: [
                                        R.options.map((e, t) =>
                                            (0, a.jsx)(
                                                nn,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: E,
                                                    onPick: (e) => V({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsxs)("div", {
                                            className: nl.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: nl.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(l3.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(tO.y, {
                                                    value: $,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        d((e) => ({ ...e, [R.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), X());
                                                    },
                                                    placeholder: M.intl.string(T.default.qifsdL),
                                                    "aria-label": M.intl.formatToPlainString(T.default.XHESTL, {
                                                        question: R.question,
                                                    }),
                                                    disabled: E,
                                                    rows: 1,
                                                    className: nl.Pu,
                                                    "data-vibegrations-clarification-other": R.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == g
                                    ? null
                                    : (0, a.jsx)(
                                          na,
                                          { question: g.question, draft: g.draft, direction: g.direction, disabled: E },
                                          g.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            S > 1
                ? (0, a.jsxs)("div", {
                      className: nl.qr,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: M.intl.formatToPlainString(T.default["7bypa+"], { index: I + 1, total: S }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nl.Np,
                              children: [
                                  (0, a.jsx)(eU.D, {
                                      className: i()(nl.gb, { [nl.yI]: !Q }),
                                      onClick: Q ? K : void 0,
                                      tabIndex: Q ? 0 : -1,
                                      "aria-hidden": !Q,
                                      "aria-disabled": E,
                                      "aria-label": M.intl.string(T.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": Q ? void 0 : "true",
                                      children: (0, a.jsx)(l9.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eU.D, {
                                      className: i()(nl.gb, { [nl.yI]: !ea }),
                                      onClick: ea ? en : void 0,
                                      tabIndex: ea ? 0 : -1,
                                      "aria-hidden": !ea,
                                      "aria-disabled": E,
                                      "aria-label": M.intl.string(T.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": ea ? void 0 : "true",
                                      children: (0, a.jsx)(ne.E, {
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
    ni = l(191521),
    no = l(405189);
function nu(e) {
    let { line: t, placement: l, todos: n, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = r.useState(l ?? "top"),
        [f, h] = r.useState(d),
        [g, x] = r.useState(!1),
        [p, v] = r.useState(!1),
        [j, b] = r.useState(d);
    j !== d && (b(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
        r.useEffect(() => {
            if (d || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [d, f]),
        r.useEffect(() => {
            if (!f || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [f, d]);
    let [y, k] = r.useState(!1),
        [N, A] = r.useState(!1),
        [w, C] = r.useState(p);
    w !== p && (C(p), p ? k(!0) : A(!1)),
        r.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        r.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, p]);
    let E = null != n && n.length > 0,
        S = r.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: no.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: i()(no.vK, { [no.ho]: g && d, [no.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: i()(no.Rk, tp.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(e4.A, {
                                        glyph: (0, a.jsx)(ni.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eU.D, {
                                    className: no.pZ,
                                    onClick: u,
                                    "aria-label": M.intl.string(T.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: i()(no.Rk, tp.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(e4.A, {
                                            glyph: (0, a.jsx)(ni.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          E
                              ? (0, a.jsx)(tz.m, {
                                    text: M.intl.string(T.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eU.D, {
                                        className: no.BO,
                                        onClick: S,
                                        "aria-expanded": p,
                                        "aria-label": M.intl.string(T.default.qCRC6c),
                                        children: (0, a.jsx)(ns.ClipboardListIcon, {
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
                  y && E
                      ? (0, a.jsx)("div", {
                            className: i()(no.vB, { [no.pg]: p && N, [no.ui]: !p }),
                            children: (0, a.jsx)(tC, { todos: n, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nd = l(366010),
    nc = l(825484),
    nm = l(859703),
    nf = l(738822),
    nh = l(291749),
    ng = l(971276),
    nx = l(590202),
    np = l(710969),
    nv = l(792620),
    nj = l(201805),
    nb = l(617986),
    ny = l(363195),
    nk = l(749414);
let nN = !1;
function nA(e) {
    let t,
        l,
        n,
        { open: s } = e,
        i =
            ((t = (0, nj.dN)()),
            (l = (0, y.bG)([nm.A], () => nm.A.isQuestAccessSuspended || null != nm.A.questEnrollmentBlockedUntil, [])),
            (n = (0, y.bG)([nm.A], () => null != nm.A.getQuestPreviewOverride(nf.uF.QUEST_BAR_V2), [])),
            null != t && (0, nv.vv)(t)
                ? n
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, ng.s)() || l || (0, np.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = r.useState(() => nN),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = r.useState(e),
                [n, a] = r.useState(!1),
                s = r.useRef(null);
            return (
                e && (!t || n) ? (l(!0), a(!1)) : e || !t || n || a(!0),
                r.useEffect(() => {
                    if (!e && t)
                        return (
                            (s.current = setTimeout(() => {
                                (s.current = null), a(!1), l(!1);
                            }, 150)),
                            () => {
                                null != s.current && (clearTimeout(s.current), (s.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(s && !o && null != i),
        [f, h] = r.useState(i);
    null != i && i !== f && h(i);
    let g = i ?? f,
        p = (0, y.bG)([ny.A], () => ny.A.getState().theme),
        v = (0, nd.M)(p) ? C.NJ8.DARK : C.NJ8.LIGHT,
        j = null != g ? (0, nh.tW)(g, nh.fY.GAME_TILE, v).url : null,
        b = null != j && "" !== j ? j : null,
        k = r.useCallback(async () => {
            if (null == i) return;
            let e = {
                questContent: nf.uF.QUEST_BAR_V2,
                sourceQuestContent: nf.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: nx.Cy.WATCH_VIDEO,
            };
            i.userStatus?.enrolledAt != null
                ? (0, nb.d5)({ quest: i, ...e })
                : await (0, nb.e0)(i, { ...e, questContentCTA: nx.Cy.ACCEPT_QUEST });
        }, [i]),
        N = r.useCallback(() => {
            (nN = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: nk.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: nk.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: nk.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: nk._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: nk.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: nk.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: nk.Ug,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: M.intl.string(T.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: M.intl.format(M.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(nc.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(m.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: N,
                              text: M.intl.string(T.default.egO5fO),
                          }),
                          (0, a.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: M.intl.string(M.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var nw = l(651649),
    nC = l(670455);
let nE = "shownVibegrationsFeedbackProjectIds";
var nS = l(348800);
let nI = [M.intl.string(T.default["E+Q26x"]), M.intl.string(T.default["06/jqP"]), M.intl.string(T.default["3gSfUa"])];
function nT(e) {
    let { projectId: t, restoreState: n } = e,
        s = (0, y.bG)([eF.Ay], () => eF.Ay.getMessages(t), [t]),
        i = (0, y.bG)([d.Ay], () => d.Ay.getConnState(t), [t]),
        o = (0, y.bG)([d.Ay], () => d.Ay.isChatStopped(t), [t]),
        u = (0, y.bG)([eF.Ay], () => eF.Ay.getProjectUsage(t), [t]),
        c = (0, y.bG)([eF.Ay], () => eF.Ay.getThinkingActivity(t), [t]),
        m = (0, y.bG)([eF.Ay], () => eF.Ay.isCompacting(t), [t]),
        f = (0, y.bG)([d.Ay], () => d.Ay.getModelSettings(t), [t]),
        h = r.useRef(null),
        g = r.useRef(null),
        x = r.useRef(null),
        p = r.useRef(!0),
        [v, j] = r.useState(!0);
    r.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [s]);
    let b = r.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        k = r.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            p.current = t < 32;
            let l = t > 1;
            j((e) => (!l === e ? e : !l));
        }, []);
    r.useLayoutEffect(() => {
        let e = h.current,
            t = x.current;
        if (null == e) return;
        let l = g.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            s = null;
        function i() {
            p.current &&
                (null != s && cancelAnimationFrame(s), (s = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let s of t)
                if (s.target === e) {
                    let e = s.contentRect.width;
                    if (e === n) continue;
                    (n = e), i();
                } else if (s.target === l) {
                    let e = s.contentRect.height;
                    if (e === r) continue;
                    (r = e), i();
                } else {
                    let e = s.contentRect.height;
                    if (e === a) continue;
                    (a = e), i();
                }
        });
        return (
            o.observe(e),
            null != l && o.observe(l),
            null != t && o.observe(t),
            () => {
                o.disconnect(), null != s && cancelAnimationFrame(s);
            }
        );
    }, []),
        r.useEffect(() => {
            (0, d.Hc)(t);
        }, [t]),
        r.useEffect(
            () => () =>
                (function (e) {
                    let t = eF.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eF.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tW.w.get(nE) ?? []).includes(e) ||
                            nw.A.possiblyShowFeedbackModal(nC.MW.VIBEGRATIONS, () => {
                                let n;
                                (n = tW.w.get(nE) ?? []).includes(e) || tW.w.set(nE, [...n, e]),
                                    (0, eT.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            l.e("312513"),
                                            l.e("104143"),
                                            l.e("155925"),
                                            l.e("218413"),
                                            l.e("137381"),
                                            l.e("847004"),
                                            l.e("341676"),
                                        ]).then(l.bind(l, 580711));
                                        return (l) => (0, a.jsx)(n, { ...l, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let N = r.useCallback(
            (e, l) => {
                (0, d.wS)(t, e, l);
            },
            [t],
        ),
        A = r.useCallback(() => (0, d.fu)(t), [t]),
        w = r.useCallback((e) => N(e.implementation_prompt), [N]),
        C = r.useCallback((e) => N(e), [N]),
        E = r.useCallback((e) => (0, d.XZ)(t, e), [t]),
        S = r.useCallback((e) => (0, d.vX)(t, e), [t]),
        I = r.useCallback((e) => (0, d.Vm)(t, e), [t]),
        R = r.useCallback(() => N(M.intl.string(T.default.Jj8Ftb)), [N]),
        P = n?.status === "restoring",
        L = "open" === i && !o && !P,
        D = s[s.length - 1],
        q = null != D && "assistant" === D.role && null != D.proposal,
        [F, $] = r.useState(null),
        O = D?.clarification != null && D.clarification.id !== F ? D.clarification : null,
        z = r.useCallback(() => {
            null != O && $(O.id);
        }, [O]),
        _ = (0, y.bG)([eF.Ay], () => eF.Ay.hasLoadedHistory(t), [t]),
        U = r.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return nI[e % nI.length];
        }, [t]),
        G = q
            ? M.intl.string(T.default.Jj8Ftb)
            : D?.kind === "plan_implemented"
              ? M.intl.string(T.default["3sTTBu"])
              : _ && 0 === s.length
                ? U
                : null,
        H = r.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, eF.BL)(t)) return t;
            }
        }, [s]),
        B = null != H,
        W = q && L ? R : void 0,
        [Y, V] = r.useState(null),
        [K, Q] = r.useState(B);
    K !== B && (Q(B), B || V(null)),
        r.useEffect(() => {
            if (!B) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? V(null)
                        : V(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return l.observe(t), () => l.disconnect();
        }, [B, H?.steps]);
    let X = r.useMemo(() => (null != H ? (0, e$.b9)(H.steps) : ""), [H]),
        Z = r.useMemo(() => (null != H ? ((0, eq.lt)(H.steps) ?? H.todos) : void 0), [H]),
        J = H?.provisionalTodo,
        ee = r.useMemo(() => {
            var e;
            return null != H ? ((e = H.steps), tI((0, eq.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [H]);
    return (0, a.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: nS.TE,
        children: [
            (0, a.jsx)(nA, { open: null != H }),
            (0, a.jsx)(nu, {
                onJumpToActivity: b,
                line: X,
                placement: B && "top" === Y ? "top" : null,
                todos: Z,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, a.jsxs)("div", {
                className: nS.JX,
                children: [
                    (0, a.jsx)(eD.Ch, {
                        ref: g,
                        onScroll: k,
                        className: v ? nS.N$ : `${nS.N$} ${nS.hB}`,
                        children: (0, a.jsx)(lz, { ref: x, projectId: t, messages: s, onPickIdea: L ? w : void 0 }),
                    }),
                    (0, a.jsx)("div", {
                        className: nS.NJ,
                        children: (0, a.jsx)(l6, {
                            projectId: t,
                            thinking: B,
                            restoring: P,
                            thinkingActivity: c,
                            compacting: m,
                            projectUsage: u,
                            connState: i,
                        }),
                    }),
                    null == O
                        ? null
                        : (0, a.jsx)("div", {
                              className: nS.B5,
                              children: (0, a.jsx)(
                                  nr,
                                  { clarification: O, onSubmit: L ? C : void 0, onDismiss: z },
                                  O.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nS.Jx,
                children: [
                    (0, a.jsx)(nu, {
                        onJumpToActivity: b,
                        line: X,
                        placement: B && "bottom" === Y ? "bottom" : null,
                        todos: Z,
                        provisionalTodo: J,
                        agents: ee,
                    }),
                    (0, a.jsx)(t5, {
                        projectId: t,
                        canSend: L,
                        stopped: o,
                        running: B,
                        restoring: P,
                        onSend: N,
                        onInterrupt: L ? A : void 0,
                        onUploadFile: S,
                        onDeleteFile: I,
                        onApprove: W,
                        suggestion: G,
                        questionOpen: null != O,
                        modelSettings: f,
                        onModelSettingsChange: E,
                    }),
                ],
            }),
        ],
    });
}
function nM(e, t) {
    return String(e).padStart(t, "0");
}
function nR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${nM(n.getHours(), 2)}:${nM(n.getMinutes(), 2)}:${nM(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${nM(n.getMilliseconds(), 3)}` : a;
}
var nP = l(849363);
function nL(e) {
    let { projectId: t, scope: l, state: n } = e;
    return "failed" !== n.status
        ? null
        : (0, a.jsxs)("div", {
              className: nP.ut,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: M.intl.string(T.default.TV42NS),
                  }),
                  (0, a.jsx)(m.$, {
                      size: "sm",
                      variant: "secondary",
                      onClick: () => {
                          (0, d.m4)(t, l);
                      },
                      text: M.intl.string(T.default.inZDNR),
                  }),
              ],
          });
}
function nD(e) {
    let { projectId: t, scope: l, state: n, emptyTitle: r, emptyBody: s } = e;
    return "failed" === n.status
        ? (0, a.jsxs)("div", {
              className: nP.qf,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: M.intl.string(T.default.TV42NS),
                  }),
                  (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: M.intl.string(T.default["+2AMt1"]),
                  }),
                  (0, a.jsx)(m.$, {
                      size: "sm",
                      variant: "secondary",
                      onClick: () => {
                          (0, d.m4)(t, l);
                      },
                      text: M.intl.string(T.default.inZDNR),
                  }),
              ],
          })
        : "loading" === n.status || "idle" === n.status
          ? (0, a.jsxs)("div", {
                className: nP.qf,
                children: [
                    (0, a.jsx)(c.y, {}),
                    (0, a.jsx)(x.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: M.intl.string(T.default["0eZV5k"]),
                    }),
                ],
            })
          : (0, a.jsxs)("div", {
                className: nP.qf,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: r }),
                    (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: s }),
                ],
            });
}
function nq(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: nP.ps,
              children: (0, a.jsx)(x.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: M.intl.string(T.default["U/qDX9"]),
              }),
          })
        : null;
}
var nF = l(582563);
let n$ = {
    error: { label: () => M.intl.string(T.default["Z/uxIH"]), tag: nF.TM, row: nF.Xu, message: "text-default" },
    warn: { label: () => M.intl.string(T.default.oqnmJF), tag: nF.d5, row: nF.NF, message: "text-default" },
    info: { label: () => M.intl.string(T.default.TE0vZe), tag: nF.Ho, row: "", message: "text-default" },
    debug: { label: () => M.intl.string(T.default["zpHUo+"]), tag: nF.k_, row: "", message: "text-muted" },
};
function nO(e) {
    let { log: t } = e,
        l = n$[t.level] ?? n$.info,
        n = nR(t.ts, "millis");
    return (0, a.jsxs)("li", {
        className: `${nF.nM} ${l.row}`,
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: `${nF.Tc} ${l.tag}`,
                children: l.label(),
            }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: nF.gG,
                children: n ?? t.ts,
            }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/medium",
                color: "text-subtle",
                className: nF.Kz,
                children: t.source ?? "",
            }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/normal",
                color: l.message,
                className: nF.eR,
                selectable: !0,
                children: t.message,
            }),
        ],
    });
}
function nz(e) {
    let { projectId: t, filter: l, query: n } = e,
        s = (0, y.yK)([eL.A], () => eL.A.getLogs(t), [t]),
        i = (0, y.bG)([eL.A], () => eL.A.getHistoryState(t, "logs")),
        o = r.useRef(null),
        d = r.useRef(!0);
    r.useEffect(() => {
        (0, u.Qb)(t);
    }, [t, s]);
    let c = r.useMemo(() => {
            let e;
            return (
                (e = n.trim().toLowerCase()),
                "all" === l && "" === e
                    ? s
                    : s.filter((t) => {
                          var n, a;
                          return (
                              (n = t.log.level),
                              ("all" === l || "error" === n || "warn" === n) &&
                                  ("" === e ||
                                      ((a = t.log), `${a.message} ${a.source ?? ""}`.toLowerCase()).includes(e))
                          );
                      })
            );
        }, [s, l, n]),
        m = c[c.length - 1],
        f = r.useCallback(() => {
            let e = o.current?.getScrollerNode();
            null == e || (d.current = e.scrollHeight - e.scrollTop - e.clientHeight <= 8);
        }, []);
    return (r.useLayoutEffect(() => {
        let e = o.current?.getScrollerNode();
        null != e && d.current && (e.scrollTop = e.scrollHeight);
    }, [m]),
    0 === s.length)
        ? (0, a.jsx)("div", {
              className: nF.nd,
              children: (0, a.jsx)(nD, {
                  projectId: t,
                  scope: "logs",
                  state: i,
                  emptyTitle: M.intl.string(T.default["ULGTr+"]),
                  emptyBody: M.intl.string(T.default["5XxVIu"]),
              }),
          })
        : (0, a.jsxs)("div", {
              className: nF.nd,
              children: [
                  (0, a.jsx)(nL, { projectId: t, scope: "logs", state: i }),
                  0 === c.length
                      ? (0, a.jsx)("div", {
                            className: nF.Ie,
                            children: (0, a.jsx)(x.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: M.intl.string(T.default.kR95Ct),
                            }),
                        })
                      : (0, a.jsxs)(eD.Ch, {
                            ref: o,
                            className: nF.rf,
                            onScroll: f,
                            role: "region",
                            "aria-label": M.intl.string(T.default.IZAYJl),
                            tabIndex: 0,
                            children: [
                                (0, a.jsx)(nq, { state: i }),
                                (0, a.jsx)("ol", {
                                    className: nF.p_,
                                    children: c.map((e) => (0, a.jsx)(nO, { log: e.log }, e.key)),
                                }),
                            ],
                        }),
              ],
          });
}
var n_ = l(683438),
    nU = l(629584),
    nG = l(804827);
let nH = ["all", "problems"];
function nB(e) {
    let { filter: t, counts: l, onChange: n, query: s, onQueryChange: i } = e,
        o = r.useCallback((e) => n(e.value), [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: nG.ED,
                children: (0, a.jsx)(n_.I, {
                    query: s,
                    onChange: i,
                    onClear: () => i(""),
                    size: "sm",
                    placeholder: M.intl.string(T.default.TN3Xlu),
                    "aria-label": M.intl.string(T.default.TN3Xlu),
                }),
            }),
            (0, a.jsx)(nU.I, {
                look: "pill",
                value: t,
                onChange: o,
                className: nG.G$,
                optionClassName: nG.Yg,
                options: nH.map((e) => ({
                    value: e,
                    name: "problems" === e ? M.intl.string(T.default.t5cOGo) : M.intl.string(T.default["SA/gJO"]),
                })),
            }),
            0 === l.problems
                ? null
                : (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      tabularNumbers: !0,
                      className: nG.I_,
                      children: M.intl.formatToPlainString(T.default["3IZssz"], {
                          errors: l.errors,
                          warnings: l.warnings,
                      }),
                  }),
        ],
    });
}
let nW = new Map(),
    nY = new Map(),
    nV = 0;
async function nK(e, t, l) {
    let n = nV,
        a = nW.get(t);
    if (null != a) return { status: "loaded", rich: a };
    let r = nY.get(t);
    if (null != r) return r;
    let s = (async () => {
        try {
            let l,
                { ticket: a, baseUrl: r } = await (0, d.dv)(e),
                s = await fetch(
                    ((l = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", a),
                    l.searchParams.set("id", t),
                    l.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return { status: "forbidden" };
            if (!s.ok) return { status: "failed" };
            let i = await s.json();
            if (!0 !== i.available || null == i.rich) return { status: "unavailable" };
            if (n !== nV) return { status: "failed" };
            return nW.set(t, i.rich), { status: "loaded", rich: i.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    nY.set(t, s);
    let i = await s;
    return nY.get(t) === s && nY.delete(t), l?.aborted === !0 ? { status: "failed" } : i;
}
function nQ() {
    (nV += 1), nW.clear(), nY.clear();
}
function nX(e) {
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
let nZ = ["model", "tool", "subagent", "delegated", "context"];
function nJ(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(nX(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function n0(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
var n1 = l(320448);
let n2 = ["arguments", "result", "usage", "diagnostics"];
function n7(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function n6(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function n3(e) {
    switch (e) {
        case "subagent":
            return M.intl.string(T.default["EoY7D+"]);
        case "context":
            return M.intl.string(T.default.KVFrD3);
        case "tool":
            return M.intl.string(T.default["/N6ZU9"]);
        case "delegated":
            return M.intl.string(T.default.HcEbf2);
        default:
            return M.intl.string(T.default.AhOqQs);
    }
}
var n5 = l(40715);
let n8 = { started: n5.Vf, ok: n5.mo, error: n5.Sr };
function n4(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${n5.Om} ${n8[t] ?? n5.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return M.intl.string(T.default.HpKDyl);
                case "error":
                    return M.intl.string(T.default["5T4Dd0"]);
                default:
                    return M.intl.string(T.default.VbEmf0);
            }
        })(t),
    });
}
let n9 = { model: n5.WI, subagent: n5.uM, context: n5.eH, tool: n5.pw, delegated: n5.C8 };
function ae(e) {
    let { label: t, value: l } = e;
    return (0, a.jsxs)("div", {
        className: n5.wV,
        children: [
            (0, a.jsx)(x.E, { variant: "text-xs/medium", color: "text-muted", className: n5.D6, children: t }),
            (0, a.jsx)("div", { className: n5.zL, children: l }),
        ],
    });
}
function at(e) {
    let { label: t, value: l } = e;
    return (0, a.jsx)(ae, {
        label: t,
        value: (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function al(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: n5.WA, children: t });
}
function an(e) {
    let { title: t, children: l } = e,
        n = r.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": n,
        className: n5.xd,
        children: [
            (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: n,
                className: n5.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function aa(e) {
    let { title: t, children: l } = e;
    return (0, a.jsxs)("details", {
        className: n5.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: n5.p8,
                children: [
                    (0, a.jsx)(n1._, { className: n5.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(x.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: n5.bG, children: l }),
        ],
    });
}
function ar(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(ae, {
            label: t.key,
            value: (0, a.jsx)(x.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let l =
        null != t.chars
            ? M.intl.formatToPlainString(T.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? M.intl.formatToPlainString(T.default.OB8Qvn, { count: t.items })
              : null;
    return (0, a.jsx)(ae, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: n5.Kv,
            children: [
                (0, a.jsx)(x.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return M.intl.string(T.default.xO6bcQ);
                            case "content":
                                return M.intl.string(T.default.gpBZRr);
                            default:
                                return M.intl.string(T.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == l
                    ? null
                    : (0, a.jsx)(x.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: l,
                      }),
            ],
        }),
    });
}
function as(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: n5.QR,
                      children: (0, a.jsx)(x.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: n5.uh,
                          children: M.intl.string(T.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          ae,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: n5.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(x.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: n5.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(x.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: M.intl.string(T.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(x.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? M.intl.string(T.default["1kBG9Z"])
                                                        : M.intl.formatToPlainString(T.default.VGSwo4, {
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
function ai(e) {
    let { detail: t } = e;
    if (null == t || "loaded" === t.status || "forbidden" === t.status) return null;
    let l =
        "loading" === t.status ? T.default["vBF/0G"] : "unavailable" === t.status ? T.default.jEQTot : T.default.fj5wM8;
    return (0, a.jsx)(x.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: n5.E7,
        children: M.intl.string(l),
    });
}
function ao(e) {
    let { projectId: t, entry: l, onClose: n, parent: s, onSelect: i, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: l = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = new Set();
            if ("tool" === e.kind)
                ((null != e.fields && e.fields.length > 0) || null != e.detailId) && n.add("arguments"),
                    "started" !== e.status && n.add("result");
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
                n2.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != s }),
        d = (function (e, t) {
            let [l, n] = r.useState(null);
            if (
                (r.useEffect(() => {
                    if (null == t || null != nW.get(t)) return;
                    let l = new AbortController();
                    return (
                        nK(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = nW.get(t);
            return null != a ? { status: "loaded", rich: a } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        m = nR(l.startedAt, "millis"),
        f = nX(l),
        h = r.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        );
    return (0, a.jsxs)(eD.Ch, {
        className: n5._0,
        onKeyDown: h,
        role: "region",
        "aria-label": M.intl.formatToPlainString(T.default.TlpZKP, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: n5.sy,
                children: (0, a.jsxs)("div", {
                    className: n5.HI,
                    children: [
                        (0, a.jsx)(n4, { status: l.status }),
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${n5.PY} ${n9[f]}`,
                            children: n3(f),
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: n5.kc,
                            children: c,
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: n5.l5,
                            children: null == l.durationMs ? M.intl.string(T.default.HpKDyl) : n7(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: n5.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, a.jsxs)(an, {
                      title: M.intl.string(T.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, a.jsx)(ar, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(as, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(ai, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, a.jsxs)(an, {
                      title: M.intl.string(T.default.KXrf5F),
                      children: [
                          (0, a.jsx)(at, {
                              label: M.intl.string(T.default["2Aii2k"]),
                              value: M.intl.formatToPlainString(T.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, a.jsx)(at, {
                                    label: M.intl.string(T.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, a.jsx)(ae, {
                                    label: M.intl.string(T.default["UV2R1/"]),
                                    value: (0, a.jsx)(x.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: M.intl.string(T.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(as, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, a.jsxs)(an, {
                      title: M.intl.string(T.default["W+4BVk"]),
                      children: [
                          (0, a.jsxs)(al, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, a.jsx)(at, {
                                            label: M.intl.string(T.default.Ran4BY),
                                            value: M.intl.formatToPlainString(T.default["PYO+Jv"], {
                                                tokens: n6(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, a.jsx)(at, {
                                            label: M.intl.string(T.default.vPIcyv),
                                            value: M.intl.formatToPlainString(T.default.Qy2iTq, {
                                                system: n6(l.systemTokens),
                                                tools: n6(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: n6(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, a.jsx)(at, {
                                            label: M.intl.string(T.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, a.jsx)(at, {
                                            label: M.intl.string(T.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(at, {
                                            label: M.intl.string(T.default.VyAl6j),
                                            value: M.intl.formatToPlainString(T.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, a.jsx)(at, {
                                            label: M.intl.string(T.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(x.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: n5.E7,
                              children: M.intl.string(T.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: n5.E7,
                      children: M.intl.string(T.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(aa, {
                      title: M.intl.string(T.default.T7SFyZ),
                      children: (0, a.jsxs)(al, {
                          children: [
                              null == s
                                  ? null
                                  : (0, a.jsx)(ae, {
                                        label: M.intl.string(T.default.NnBqcd),
                                        value: (0, a.jsx)(eU.D, {
                                            tag: "div",
                                            className: n5.mi,
                                            onClick: () => i(s.id),
                                            children: (0, a.jsx)(x.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === s.kind ? s.model : s.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, a.jsx)(at, {
                                        label: M.intl.string(T.default.fI6mzD),
                                        value: M.intl.formatToPlainString(T.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, a.jsx)(at, { label: M.intl.string(T.default.I7cJP0), value: l.turnId }),
                              (0, a.jsx)(at, { label: M.intl.string(T.default["XVTP/S"]), value: l.id }),
                              null == m ? null : (0, a.jsx)(at, { label: M.intl.string(T.default.rD7bm0), value: m }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, a.jsx)(at, { label: M.intl.string(T.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(x.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: n5.Hm,
                                                children: M.intl.string(T.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, a.jsx)(
                                                    at,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? M.intl.formatToPlainString(T.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : M.intl.formatToPlainString(T.default["/L6GFe"], {
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
            (0, a.jsx)(x.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: n5.E7,
                children: M.intl.string(T.default.khAjR0),
            }),
        ],
    });
}
let au = { model: n5.WI, subagent: n5.uM, context: n5.eH, tool: n5.pw, delegated: n5.C8 };
function ad(e) {
    let { entries: t } = e,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = nX(n);
                        (t[e] += n.durationMs ?? 0), (l[e] += 1);
                    }
                    return nZ.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        n = l.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: n5.M0,
        children: [
            (0, a.jsx)("div", {
                className: n5.pZ,
                "aria-hidden": !0,
                children:
                    0 === n
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, a.jsx)("div", { className: `${n5.dL} ${au[t]}`, style: { flexGrow: l } }, t);
                          }),
            }),
            (0, a.jsx)("div", {
                className: n5.z4,
                role: "group",
                "aria-label": M.intl.string(T.default.UZ1OlR),
                children: nZ.map((e) => {
                    let t = l.find((t) => t.category === e),
                        r = t?.ms ?? 0,
                        s = t?.calls ?? 0,
                        i = 0 === n ? 0 : Math.round((r / n) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: n5.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${n5.A9} ${au[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: n3(e) }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: M.intl.formatToPlainString(T.default.UffawN, { percent: i }),
                                }),
                                (0, a.jsx)(x.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: M.intl.formatToPlainString(T.default.w8vPbe, { count: s }),
                                }),
                                0 === r
                                    ? null
                                    : (0, a.jsx)(x.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: n7(r),
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
let ac = { model: n5.WI, subagent: n5.uM, context: n5.eH, tool: n5.pw, delegated: n5.C8 };
function am(e) {
    let { entry: t, selected: l, tabbable: n, onSelect: r, onKeyDown: s, nested: i } = e,
        o = nX(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? M.intl.formatToPlainString(T.default["PYO+Jv"], { tokens: n6(t.promptTokens) })
                : null != t.durationMs
                  ? n7(t.durationMs)
                  : null;
    return (0, a.jsxs)(eU.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: n ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${n5.nM} ${i ? n5.A5 : ""} ${"error" === t.status ? n5.Cr : ""} ${l ? n5.CZ : ""}`,
        onKeyDown: s,
        onClick: () => r(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: n5.sU,
                children: [
                    (0, a.jsx)(n4, { status: t.status }),
                    (0, a.jsx)(x.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${n5.PY} ${ac[o]}`,
                        children: n3(o),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: n5.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(x.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: n5.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: n5.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: n5.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function af(e) {
    var t;
    let { projectId: l, query: n } = e,
        s = (0, y.yK)([eL.A], () => eL.A.getTrace(l), [l]),
        i = (0, y.bG)([eL.A], () => eL.A.getHistoryState(l, "trace"));
    r.useEffect(() => nQ, [l]);
    let [o, u] = r.useState(null),
        [d, c] = r.useState(40),
        [m, f] = r.useState(!1),
        h = r.useRef(null),
        g = r.useRef(null),
        p = r.useRef(null),
        v = r.useRef(null),
        j = r.useId(),
        b = r.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        k = r.useCallback((e) => u((t) => (t === e ? null : e)), []),
        N = r.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, eb.clamp)((e / t) * 100, 25, 75);
        }, []),
        A = r.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, eb.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, ew.A)({
            resizableDomNodeRef: g,
            orientation: ew.R.VERTICAL_TOP,
            getClampedValue: A,
            onElementResize: (e) => c(N(e)),
            onElementResizeStart: () => f(!0),
            onElementResizeEnd: () => f(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        C = r.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), w(e));
            },
            [w],
        ),
        E = r.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, eb.clamp)(e + t, 25, 75)));
        }, []),
        S = r.useCallback(() => {
            u(null), b(o);
        }, [o, b]),
        I = r.useMemo(() => nJ(s, n), [s, n]),
        R = r.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = null;
                    for (let n of e) {
                        let e = n.turnId ?? null;
                        (null == l || l.turnId !== e) &&
                            ((l = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: l.entries, startedAt: n.startedAt, spanMs: null })),
                            l.entries.push(n);
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
                })(s)
                    .map((e, t) => ({ ...e, index: t, entries: nJ(e.entries, n) }))
                    .filter((e) => e.entries.length > 0),
            [s, n],
        ),
        P = n0(I, o),
        L = P?.kind === "tool" ? n0(s, P.parentId ?? null) : null,
        D = null == P ? 0 : ((t = P.id), s.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        q = I[I.length - 1];
    r.useLayoutEffect(() => {
        if (null != o) return;
        let e = p.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [q, o]);
    let F = r.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(I.length - 1, t));
                u(I[l].id), document.getElementById(`trace-${I[l].id}`)?.scrollIntoView({ block: "nearest" });
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), b(o));
        },
        [I, o, b],
    );
    return 0 === s.length
        ? (0, a.jsx)("div", {
              className: n5.uP,
              ref: h,
              children: (0, a.jsx)(nD, {
                  projectId: l,
                  scope: "trace",
                  state: i,
                  emptyTitle: M.intl.string(T.default.Iyt8OJ),
                  emptyBody: M.intl.string(T.default["8pdPx5"]),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${n5.uP} ${m ? n5.F4 : ""}`,
              ref: h,
              children: [
                  (0, a.jsxs)("div", {
                      className: n5.DK,
                      children: [
                          (0, a.jsx)(ad, { entries: s }),
                          (0, a.jsx)(nL, { projectId: l, scope: "trace", state: i }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: n5.Ie,
                                    children: (0, a.jsx)(x.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: M.intl.string(T.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, a.jsxs)(eD.Ch, {
                                    ref: p,
                                    className: n5.Ns,
                                    children: [
                                        (0, a.jsx)(nq, { state: i }),
                                        (0, a.jsx)("div", {
                                            ref: v,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": M.intl.string(T.default["QATZ+A"]),
                                            className: n5.p_,
                                            children: R.map((e) => {
                                                let t = nR(e.startedAt),
                                                    l = M.intl.formatToPlainString(T.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: n5.mf,
                                                                children: [
                                                                    (0, a.jsx)(x.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: l,
                                                                    }),
                                                                    (0, a.jsx)(x.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, a.jsx)(x.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: n7(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: n5.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        am,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: k,
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
                  null == P
                      ? null
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": M.intl.string(T.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: n5.b1,
                                    onPointerDown: C,
                                    onKeyDown: E,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: n5.Or,
                                    style: { height: `${d}%` },
                                    children: (0, a.jsx)(ao, {
                                        projectId: l,
                                        entry: P,
                                        parent: L,
                                        childCount: D,
                                        onSelect: u,
                                        onClose: S,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var ah = l(365199);
function ag(e) {
    let { projectId: t, query: l, onQueryChange: n } = e,
        s = (0, y.yK)([eL.A], () => eL.A.getTrace(t), [t]),
        i = r.useRef(null),
        o = r.useCallback(() => {
            let e = JSON.stringify(
                    {
                        kind: "vibegrations.trace",
                        version: 1,
                        project_id: t,
                        exported_at: new Date().toISOString(),
                        note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                        entries: s,
                    },
                    null,
                    2,
                ),
                l = URL.createObjectURL(new Blob([e], { type: "application/json" })),
                n = document.createElement("a");
            (n.href = l), (n.download = `vibegrations-trace-${t}.json`), n.click(), URL.revokeObjectURL(l);
        }, [s, t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: nG.ED,
                children: (0, a.jsx)(n_.I, {
                    query: l,
                    onChange: n,
                    onClear: () => n(""),
                    size: "sm",
                    placeholder: M.intl.string(T.default.NfncNw),
                    "aria-label": M.intl.string(T.default.NfncNw),
                }),
            }),
            (0, a.jsx)(tP.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: tP.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, a.jsx)(tL.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": M.intl.string(M.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, a.jsx)(tD.rX, {
                            children: (0, a.jsx)(tD.Dr, {
                                id: "export",
                                label: M.intl.string(T.default.A3Z3ar),
                                disabled: 0 === s.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, a.jsx)(l5.K, {
                        ...e,
                        buttonRef: i,
                        icon: ah.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": M.intl.string(M.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var ax = l(307869);
let ap = [];
function av(e) {
    let { projectId: t, view: l, restoreState: n } = e,
        [s, i] = r.useState("all"),
        [o, u] = r.useState(""),
        [d, c] = r.useState(""),
        m = (0, ax.Ph)(t, l),
        f = (0, y.yK)([eL.A], () => ("logs" === l ? eL.A.getLogs(t) : ap), [t, l]),
        h = r.useMemo(
            () =>
                (function (e) {
                    let t = 0,
                        l = 0;
                    for (let n of e) "error" === n.log.level ? (t += 1) : "warn" === n.log.level && (l += 1);
                    return { total: e.length, errors: t, warnings: l, problems: t + l };
                })(f),
            [f],
        ),
        g =
            "logs" === l && h.total > 0
                ? (0, a.jsx)(nB, { filter: s, counts: h, onChange: i, query: o, onQueryChange: u })
                : "trace" === l
                  ? (0, a.jsx)(ag, { projectId: t, query: d, onQueryChange: c })
                  : null;
    return (0, a.jsxs)("div", {
        className: nG.UH,
        children: [
            null == g
                ? null
                : (0, a.jsx)("div", {
                      className: nG.$P,
                      role: "toolbar",
                      "aria-label": M.intl.formatToPlainString(T.default.arPnKK, { view: (0, ax.Ox)(l) }),
                      "aria-controls": m,
                      children: g,
                  }),
            (0, a.jsx)("div", {
                id: (0, ax.Ph)(t, "chat"),
                role: "tabpanel",
                "aria-label": (0, ax.Ox)("chat"),
                className: `${nG.rT} ${nG.U}`,
                hidden: "chat" !== l,
                children: (0, a.jsx)(nT, { projectId: t, restoreState: n }, t),
            }),
            "chat" === l
                ? null
                : (0, a.jsx)("div", {
                      id: m,
                      role: "tabpanel",
                      "aria-label": (0, ax.Ox)(l),
                      className: nG.rT,
                      children:
                          "logs" === l
                              ? (0, a.jsx)(nz, { projectId: t, filter: s, query: o })
                              : (0, a.jsx)(af, { projectId: t, query: d }),
                  }),
        ],
    });
}
var aj = l(314116),
    ab = l(364522),
    ay = l(406810),
    ak = l(381849),
    aN = l(977628);
function aA(e) {
    let t,
        { projectId: l, onClose: n, onRestore: s } = e,
        [i, o] = r.useState({ status: "loading" });
    return (
        r.useEffect(() => {
            let e = !1;
            return (
                (0, d.ST)(l)
                    .then((t) => {
                        e || o({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || o({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [l]),
        (t =
            "loading" === i.status
                ? (0, a.jsx)("div", { className: aN.E8, children: (0, a.jsx)(c.y, {}) })
                : "failed" === i.status
                  ? (0, a.jsx)("div", {
                        className: aN.E8,
                        role: "alert",
                        children: (0, a.jsx)(x.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: M.intl.string(T.default["mSJn+K"]),
                        }),
                    })
                  : 0 === i.entries.length
                    ? (0, a.jsx)("div", {
                          className: aN.E8,
                          children: (0, a.jsx)(x.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: M.intl.string(T.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(ab.Ip, {
                          className: aN.p_,
                          children: (0, a.jsx)("div", {
                              className: aN.jO,
                              children: i.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, ak.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: ak._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: aN.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, aj.A)({
                                                  title: M.intl.string(T.default.qOUOPE),
                                                  subtitle: M.intl.string(T.default.k2JBj5),
                                                  confirmText: M.intl.string(T.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      n(), s(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(x.E, {
                                                  variant: "text-md/medium",
                                                  className: aN.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, a.jsx)(x.E, {
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
        (0, a.jsxs)("section", {
            className: aN.nd,
            "aria-label": M.intl.string(T.default.jAWwzi),
            children: [
                (0, a.jsxs)(ex.Ay, {
                    "aria-label": M.intl.string(T.default.jAWwzi),
                    toolbar: (0, a.jsx)(ex.Ay.Icon, { icon: em.P, tooltip: M.intl.string(M.t.cpT0Cq), onClick: n }),
                    children: [
                        (0, a.jsx)(ex.Ay.ChannelIcon, { icon: ay.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(ex.Ay.Title, { children: M.intl.string(T.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: aN.rf, children: t }),
            ],
        })
    );
}
var aw = l(120426),
    aC = l(873727),
    aE = l(147248),
    aS = l(418842),
    aI = l(885386),
    aT = l(940107),
    aM = l(171936),
    aR = l(796036);
function aP(e) {
    let { projectId: t, applicationId: l, surface: n, header: s, mainClassName: u, content: d, sidebar: c } = e,
        [m, f] = r.useState(null),
        h = (0, o.A)(l, n),
        g = h?.id ?? null;
    !(function (e, t) {
        let l = (0, y.bG)([ny.A], () => (0, aC.x4)(ny.A.theme)),
            n = (0, y.bG)([aE.A], () => aE.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: i,
                forcedColors: o,
                underlineLinks: u,
            } = (0, y.cf)([tH.Ay], () => ({
                reducedMotion: tH.Ay.useReducedMotion,
                fontScale: (0, aC.U0)(),
                highContrast: tH.Ay.isHighContrastModeEnabled,
                forcedColors: tH.Ay.useForcedColors,
                underlineLinks: tH.Ay.alwaysShowLinkDecorations,
            })),
            d = aI.hH.useSetting(),
            c = (0, aS.C)(),
            m = r.useRef(!1),
            f = r.useRef(!1),
            h = r.useRef(0),
            g = r.useRef(null),
            x = r.useCallback(() => {
                let n = (0, aw.F)(e, t);
                if (null == n) return;
                g.current = n;
                let r = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, aC.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: i,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, aT.W)(n, "set-env", r, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, s, t, i, d, e, a, c, u]),
            p = r.useRef(x);
        r.useLayoutEffect(() => {
            p.current = x;
        });
        let v = r.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), f.current || p.current();
                }));
        }, []);
        r.useEffect(
            () => (
                (f.current = !1),
                () => {
                    f.current = !0;
                }
            ),
            [],
        ),
            r.useEffect(() => {
                v();
            }, [n, v]),
            r.useLayoutEffect(() => {
                x(), v();
            }, [v, x]),
            r.useLayoutEffect(() => {
                let l = (0, aw.F)(e, t);
                null != l && l !== g.current && v();
            }),
            r.useEffect(() => {
                function l(l) {
                    l.target === (0, aw.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0);
            }, [t, e, v]),
            r.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(m, g),
        r.useEffect(() => {
            if (null != t) return (0, aM.mn)(t, () => (0, aw.F)(m, g));
        }, [t, m, g]);
    let x = r.useCallback(() => (0, aw.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: i()(ev.Mh, u),
                children: [s, (0, a.jsx)("div", { ref: f, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(eP, { projectId: t ?? null, resolveIframe: x }),
        ],
    });
}
function aL(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            surface: s,
            header: o,
            chatOpen: c,
            panelView: m = "chat",
            versionHistoryOpen: f = !1,
            onCloseVersionHistory: h,
            onRestoreVersion: g,
            restoreState: x,
            previewReady: p,
            previewGate: v,
            channelMessages: j,
            availability: b,
            activeMode: y,
            widgetApplicationId: k,
        } = e,
        N = r.useRef(null),
        [A, C] = r.useState(0);
    r.useLayoutEffect(() => {
        if (s.type === w.U4.MAIN) return (0, u.HV)(l), () => (0, u.HV)(null);
    }, [l, s.type]),
        r.useEffect(() => {
            null != t && ((0, d.Hc)(t), (0, aR.s)());
        }, [t]),
        r.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            function t() {
                null != e && C(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return l.observe(e), () => l.disconnect();
        }, []),
        r.useEffect(() => () => (0, u.Zq)(0), []);
    let E = Math.max(360, A - 320),
        S = null != j ? j.open : c,
        I = c || s.type === w.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: N,
        className: ev.LB,
        children: (0, a.jsx)(aP, {
            projectId: t,
            applicationId: l,
            surface: s,
            header: o,
            mainClassName: null == o ? void 0 : i()(ev.ez, { [ev.zt]: S }),
            content: (0, a.jsx)(ec, {
                applicationId: l,
                previewApplicationId: n,
                surface: s,
                previewReady: p,
                previewGate: v,
                availability: b,
                activeMode: y,
                widgetApplicationId: k,
            }),
            sidebar:
                null != j
                    ? (0, a.jsx)(eE, {
                          open: j.open,
                          maxWidth: E,
                          onWidthChange: u.Zq,
                          children: j.open
                              ? (0, a.jsx)(ej, { channel: j.channel, guild: j.guild, onClose: j.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(eE, {
                            open: c,
                            maxWidth: E,
                            onWidthChange: u.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: f
                                    ? (0, a.jsx)(
                                          aA,
                                          { projectId: t, onClose: h ?? (() => {}), onRestore: g ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(eS.A, { projectId: t }),
                                              (0, a.jsx)(av, { projectId: t, view: m, restoreState: x }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
