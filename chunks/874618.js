l.d(t, { A: () => iy });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(991690),
    o = l(789645),
    u = l(672929),
    d = l(58736),
    c = l(948230),
    f = l(277977),
    m = l(289873),
    h = l(627363),
    x = l(580954),
    g = l(753514),
    p = l(297264),
    v = l(834730),
    b = l(625180),
    j = l(91242),
    y = l(812901),
    k = l(317608),
    N = l(206600),
    w = l(869146),
    A = l(742023),
    S = l(697744),
    E = l(50617),
    C = l(375708),
    I = l(296167);
function M(e) {
    let { className: t } = e,
        { Component: l, events: r, getDuration: i } = (0, S.c)();
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
                    children: C.intl.string(E.default.jTuX7C),
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
                    title: C.intl.string(E.default["4f6Vkr"]),
                    body: C.intl.string(E.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(M, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(R, {
                    title: C.intl.string(E.default.FHOJiH),
                    body: C.intl.string(E.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
            return (0, n.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: C.intl.string(E.default.MeLWCr),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: C.intl.string(E.default["1RCbQT"]),
                    }),
                ],
            });
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(m.y, {}) });
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
    return (0, n.jsx)("div", { className: W.f, children: (0, n.jsx)(m.y, {}) });
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
        f = null != o && d === o;
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
        : null == o || f
          ? (0, n.jsx)(H, { message: C.intl.string(E.default.bl4eBc) })
          : null == u
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: W.g,
                  children: (0, n.jsx)(q.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var X = l(821609),
    Q = l(887909),
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
        noPadding: f,
        obscured: m,
    } = (0, Q.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, n.jsxs)("section", {
        className: J.Nr,
        "aria-label": t,
        children: [
            (0, n.jsx)("div", {
                className: J.rf,
                children: (0, n.jsx)(Z.A, {
                    obscured: !0 === m,
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
                                className: i()(J.Qs, c ? J.cw : null, f ? J.pN : null),
                                children: [s, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, n.jsx)("div", {
                      className: J.o1,
                      children: o.map((e, t) => (0, n.jsx)(X.$, { size: "md", ...e }, t)),
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
function ef(e) {
    let { applicationId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(em, { applicationId: t, user: l });
}
function em(e) {
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
function ex(e) {
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
        f = (0, u.A)(t, r),
        { data: p, isLoading: v } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != f && (0, x.A)().leaveFrame(f.id);
        }, [f, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eh.q,
            children: null == s.authorizeProps ? (0, n.jsx)(m.y, {}) : (0, n.jsx)(ee, { ...s.authorizeProps }),
        });
    if (!i) return (0, n.jsx)(M, { className: eh.q });
    if (null == t) return null;
    if (v && null == p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    let b = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, g.z3)(d), "aria-label": (0, g.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...b,
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
                              title: C.intl.string(E.default.SGHO9K),
                              body: C.intl.string(E.default["pV/rS2"]),
                          }),
                      })
                    : (0, n.jsx)(ef, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, n.jsx)(Y, { previewApplicationId: l }) : null,
        ],
    });
}
var eg = l(534890),
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
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: eg.ChatIcon, "aria-label": C.intl.string(C.t["/VQax8"]) }),
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
    eN = l(65593),
    ew = l(29692),
    eA = l(903586),
    eS = l(783791);
function eE(e) {
    return !(0, eS.BL)(e) && !0 !== e.stopRequested;
}
var eC = l(935208);
(l(323874), l(14289), l(35956));
var eI = l(228366),
    eM = l(839214),
    eT = l(673724);
let eR = [],
    eP = 1,
    e_ = (0, eM.D)(() => ({ draftsByProject: {} }));
function eL(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? eR;
}
function eF(e, t) {
    return eL(e_.getState(), e, t);
}
function eD(e, t, l) {
    let { draftsByProject: n } = e_.getState();
    e_.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function e$(e, t, l, n) {
    let a = eF(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (eD(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function eO(e, t) {
    (0, f.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ez(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eO(e, t.ref.id));
}
function eq(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = e_.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? eR) l ? ez(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    e_.setState({ draftsByProject: i });
}
function eU(e, t) {
    let l = eF(e, t);
    if (0 !== l.length) {
        for (let t of l) ez(e, t);
        eD(e, t, eR);
    }
}
function eB(e, t) {
    let l = eF(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (eD(e, t, eR), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function eG(e, t) {
    let l = eF(e, "chat"),
        n = l.length > 0 && l.every((e) => "ready" === e.status) ? eB(e, "chat") : [];
    (0, f.dv)(e, t, n);
}
(eI.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(e_.getState().draftsByProject)) eq(e, { deleteFromWorker: !0 });
}),
    eI.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        eq(t, { deleteFromWorker: !1 });
    }));
var eV = l(66708),
    eW = l(74029),
    eH = l(717447),
    eK = l(29080),
    eY = l(46054),
    eX = l(76275);
function eQ(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : C.intl.string(E.default.MdXWEK);
}
function eZ(e) {
    var t;
    let l,
        n,
        { steps: a, content: r, hasProposal: i, hasAttachments: s } = e,
        o = (0, eA.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != u &&
            ((t = u.content),
            (l = t.trim()),
            (n = r.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? u
                : null,
        c = o.filter((e) => e !== d),
        f = c.filter((e) => "message" === e.type).at(-1),
        m = !i && "" !== r.trim();
    return {
        streamed: c,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: m,
        closingContent: m ? r.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, eA.Lf)(a) }),
    };
}
(l(134528), l(947204));
var eJ = l(939249),
    e0 = l(478016),
    e1 = l(34136);
function e2(e) {
    let { title: t, trailing: l, children: a, className: r, headerClassName: s, ...o } = e;
    return (0, n.jsxs)("section", {
        className: i()(e1.Nr, r),
        ...o,
        children: [
            (0, n.jsxs)("header", {
                className: i()(e1.wx, null != l && e1.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var e7 = l(113757);
function e5(e) {
    let { idea: t, selected: l, onPick: r } = e,
        s = a.useId(),
        o = null == r;
    return (0, n.jsxs)(eJ.D, {
        className: i()(e7.nM, { [e7.f1]: o, [e7.CZ]: l }),
        onClick: o ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(E.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: e7.jo,
                children: [
                    l
                        ? (0, n.jsx)(e0.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: e7.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: e7.G9,
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
function e4(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: r } = e,
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), r?.(e));
            },
            [r],
        );
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                e5,
                { idea: e, selected: i.has(e.id) || l?.has(e.id) === !0, onPick: null == r ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var e3 = l(435619),
    e6 = l(866665),
    e8 = l(885574),
    e9 = l(430392),
    te = l(632015),
    tt = l(256905),
    tl = l(824757);
function tn(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: tl.uW,
        children: [
            (0, n.jsxs)("span", {
                className: tl.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function ta() {
    return (0, n.jsx)(e6.m, {
        text: C.intl.string(E.default.DXe2dP),
        children: (0, n.jsx)(eJ.D, {
            className: tl.bk,
            "aria-label": C.intl.string(E.default.Y6y4nQ),
            children: (0, n.jsx)(e8.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function tr(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(tn, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: tl.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: tl.jw,
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
function ti(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? $.k : e9.RobotIcon;
    return (0, n.jsxs)("span", {
        className: tl.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: tl.L6,
                      children: [
                          (0, n.jsx)(te.f, {
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
                              children: C.intl.string(E.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: tl.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: C.intl.string(t ? C.t.IC5Ann : E.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function ts(e) {
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
                        (0, f.PK)(e, t).then(
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
                            (0, f.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? o(1) : i(!0);
                                },
                                () => i(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, r),
        u = C.intl.string(E.default.FW8UcU),
        d = a.useCallback(() => {
            (0, f.PK)(t, r).then(
                (e) => {
                    (0, tt.R)({
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
        : (0, n.jsx)(tn, {
              label: C.intl.string(E.default["9W8SbY"]),
              info: (0, n.jsx)(ta, {}),
              children: (0, n.jsx)(eJ.D, {
                  className: tl.xX,
                  onClick: d,
                  "aria-label": C.intl.string(E.default.CBrpNv),
                  children: null != i ? (0, n.jsx)("img", { src: i, alt: u, className: tl.sN, onError: o }) : null,
              }),
          });
}
function to(e) {
    let { projectId: t, proposal: l, onApprove: a } = e;
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default["60htw+"]),
        trailing: (0, n.jsx)(ti, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, n.jsxs)("div", {
            className: tl.rf,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, n.jsx)(ts, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, n.jsx)(tn, {
                          label: C.intl.string(E.default.KLyB8Y),
                          children: (0, n.jsx)("ul", {
                              className: tl.p_,
                              children: l.changes.map((e, t) =>
                                  (0, n.jsx)(
                                      "li",
                                      {
                                          className: tl.Aw,
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
                    ? (0, n.jsx)(tn, {
                          label: C.intl.string(C.t["0hKkS+"]),
                          children: (0, n.jsx)("ul", {
                              className: tl.p_,
                              children: l.commands.map((e, t) =>
                                  (0, n.jsxs)(
                                      "li",
                                      {
                                          className: tl.uX,
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
                (0, n.jsx)(tr, { label: C.intl.string(E.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, n.jsx)(tr, { label: C.intl.string(E.default.Cn9qix), names: l.privileged_intents ?? [] }),
                null != a
                    ? (0, n.jsx)("div", {
                          className: tl.o1,
                          children: (0, n.jsx)(X.$, {
                              variant: "primary",
                              size: "sm",
                              text: C.intl.string(E.default["hG0Y0+"]),
                              onClick: a,
                          }),
                      })
                    : null,
            ],
        }),
    });
}
var tu = l(314116),
    td = l(364522),
    tc = l(406810),
    tf = l(381849),
    tm = l(977628);
function th(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, tf.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: tf._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function tx(e) {
    return (0, tu.A)({
        title: C.intl.string(E.default.qOUOPE),
        subtitle: C.intl.string(E.default.k2JBj5),
        confirmText: C.intl.string(E.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function tg(e) {
    let t,
        { projectId: l, onClose: r, onRestore: i } = e,
        [s, u] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, f.ST)(l)
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
                ? (0, n.jsx)("div", { className: tm.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: tm.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: tm.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(td.Ip, {
                          className: tm.p_,
                          children: (0, n.jsx)("div", {
                              className: tm.jO,
                              children: s.entries.map((e) => {
                                  let t = th(e.authoredAt);
                                  return (0, n.jsxs)(
                                      eJ.D,
                                      {
                                          className: tm.f_,
                                          onClick: () =>
                                              tx(() => {
                                                  (r(), i(e));
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: tm.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != t.relative &&
                                                  (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: t.absolute ?? void 0,
                                                      children: t.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: tm.nd,
            "aria-label": C.intl.string(E.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: tc.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: tm.rf, children: t }),
            ],
        })
    );
}
var tp = l(584698);
function tv(e) {
    let { proposal: t, onRestore: l } = e,
        a = th(t.authored_at);
    return (0, n.jsx)(e2, {
        title: C.intl.string(E.default.khdMoL),
        children: (0, n.jsxs)("div", {
            className: tp.r,
            children: [
                (0, n.jsxs)("div", {
                    className: tp.z,
                    children: [
                        (0, n.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != a.relative
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: a.absolute ?? void 0,
                                  children: a.relative,
                              })
                            : null,
                    ],
                }),
                null != l
                    ? (0, n.jsx)(X.$, {
                          variant: "secondary",
                          size: "sm",
                          text: C.intl.string(E.default.eSDVDt),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var tb = l(530557),
    tj = l(872162),
    ty = l(192308),
    tk = l(479191);
function tN(e) {
    let { projectId: t, request: r, awaiting: i } = e,
        s = a.useCallback(() => {
            (0, ty.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        o = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: tb.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: tk.L,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: null != i ? "text-brand" : "text-muted",
                tag: "span",
                children: C.intl.string(null != i ? E.default.sKNh1M : E.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != r.note && "" !== r.note ? r.note : C.intl.string(E.default.jxvtin),
            }),
            (0, n.jsx)(tj.C, { label: C.intl.string(E.default["/e28TK"]), size: "xs", items: o }),
            (0, n.jsx)("div", {
                className: tk.s,
                children: (0, n.jsx)(X.$, {
                    variant: "primary",
                    size: "sm",
                    onClick: s,
                    text: C.intl.string(E.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tw = l(408278),
    tA = l(349735),
    tS = l(973e3);
function tE(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(tA.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i, submit: s } = e;
            return (0, n.jsxs)("form", {
                className: tS.Mk,
                onSubmit: (e) => {
                    (e.preventDefault(), s());
                },
                children: [
                    (0, n.jsxs)("div", {
                        className: tS.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(E.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(tw.K, {
                                      icon: o.P,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: a,
                                      "aria-label": C.intl.string(E.default["6UTDHm"]),
                                  }),
                        ],
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: null != l.note && "" !== l.note ? l.note : C.intl.string(E.default["V+DBhs"]),
                    }),
                    t,
                    (0, n.jsx)("div", {
                        className: tS.p0,
                        children: (0, n.jsx)(X.$, {
                            variant: "primary",
                            size: "sm",
                            type: "submit",
                            loading: i,
                            disabled: !r,
                            text: C.intl.string(E.default.Tuz9vw),
                        }),
                    }),
                ],
            });
        },
    });
}
var tC = l(196582);
let tI = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    tM = {
        snail: () => E.default["2l3AEQ"],
        goat: () => E.default["+FPL+I"],
        frog: () => E.default.w4GOfR,
        bunny: () => E.default.XmZT9M,
        cat: () => E.default.NnydwQ,
        caterpillar: () => E.default["4iXcNT"],
        butterfly: () => E.default.DoTGt5,
        dog: () => E.default["9zxqmP"],
        spider: () => E.default.HF0T3L,
        bee: () => E.default.XTzDga,
        bot: () => E.default.abtC2b,
    },
    tT = {
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
function tR(e) {
    return { ...tT[e], name: C.intl.string(tM[e]()) };
}
function tP(e) {
    return tI.includes(e) ? tR(e) : void 0;
}
function t_(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tI.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tI[(t + l) % tI.length]);
            }),
            n
        );
    })(e))
        t.set(l, tR(n));
    return t;
}
var tL = l(683063),
    tF = l(705754),
    tD = l(883455),
    t$ = l(13699);
function tO(e) {
    let { projectId: t, lane: l, Illocon: a, tint: r, name: i, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, eA.SY)(l.steps),
        c = u
            ? null != d
                ? (0, eA.WQ)(d)
                : eQ(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(eQ(e));
                  switch (e.status) {
                      case "failed":
                          return C.intl.formatToPlainString(E.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return C.intl.formatToPlainString(E.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return C.intl.formatToPlainString(E.default.vuv9bT, {
                                  task: t,
                                  duration: (0, eX.MB)(e.durationMs),
                              });
                          return C.intl.formatToPlainString(E.default.KS49RN, { task: t });
                      default:
                          return C.intl.formatToPlainString(E.default.KS49RN, { task: t });
                  }
              })(o),
        f = u ? d : void 0,
        m =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: t$.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tD.A,
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
                                      className: t$.iq,
                                      children: (0, n.jsx)(tF.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tC.A, {
        glyph: (0, n.jsx)(tL.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eQ(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: t$.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var tz = l(847374),
    tq = l(320448),
    tU = l(140735),
    tB = l(329456);
let tG = [];
function tV(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tB.xL, {
            [tB.Vb]: "in_progress" === t,
            [tB.cT]: "completed" === t,
            [tB.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return C.intl.string(E.default.TkPGOH);
                case "in_progress":
                    return C.intl.string(E.default["oK+fmd"]);
                case "unfinished":
                    return C.intl.string(E.default["1ley3g"]);
                default:
                    return C.intl.string(E.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: tB.Qd,
                itemClassName: tB.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tB.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tB.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tW(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : tG), [l, t]),
        i = a.useMemo(() => new Set(r.map((e) => e.key)), [r]),
        s = r.map((e) => e.key).join("\0"),
        [o, u] = a.useState(r),
        [d, c] = a.useState(s),
        [f, m] = a.useState(!1);
    d !== s && (c(s), u([...r, ...o.filter((e) => !i.has(e.key))]), 0 === r.length && m(!1));
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
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let x = o.slice(0, 3),
        g = o.length - x.length;
    return (0, n.jsxs)("span", {
        className: tB.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            x.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tL.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tB.MA,
                            "data-leaving": i.has(t) ? void 0 : "true",
                            children: (0, n.jsx)(s, { size: 16, alt: a, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tB.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function tH(e) {
    let t,
        { todos: l, provisional: r, agents: s, live: o = !0 } = e,
        u = (function (e) {
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
        d =
            ((t = (s ?? tG).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tG) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tB.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tB.AS, { [tB.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tV, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: tB.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: tB.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(tW, { agents: d.get(e.id) ?? tG, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tB.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tV, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tB.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tB.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tK(e) {
    let { todos: t, provisional: l, agents: r, announceProgress: i = !0, live: s = !0, superseded: o = !1 } = e,
        u = a.useId(),
        [d, c] = a.useState(!o),
        [f, m] = a.useState(o);
    f !== o && (m(o), c(!o));
    let h = a.useCallback(() => c((e) => !e), []),
        { completed: x, total: g } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === g) return null;
    let p = C.intl.formatToPlainString(E.default.bQvqly, { completed: x, total: g }),
        b = C.intl.formatToPlainString(E.default["QG/EiF"], { completed: x, total: g }),
        j = d ? tz.a : tq._;
    return (0, n.jsxs)(e2, {
        title: C.intl.string(E.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: tB.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                o
                    ? (0, n.jsx)(eJ.D, {
                          className: tB.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": u,
                          "aria-label": C.intl.string(d ? E.default.fIBJas : E.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: tB.Nr,
        headerClassName: d ? void 0 : tB.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": o ? "true" : void 0,
        children: [
            i && !o ? (0, n.jsx)(tU.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: u,
                className: tB.rf,
                hidden: !d,
                children: (0, n.jsx)(tH, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var tY = l(744239),
    tX = l(229775),
    tQ = l(165648);
function tZ(e) {
    let t = t_(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tP(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: eQ(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tJ(e) {
    let {
            projectId: t,
            steps: l,
            active: r = !1,
            turnActive: i = r,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: d,
            provisionalTodo: c,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: x = !1,
            segmentDurationMs: g,
        } = e,
        p = a.useMemo(() => (0, eA.GO)(l, { turnActive: r }), [l, r]),
        v = a.useMemo(
            () =>
                null == f
                    ? p
                    : {
                          ...p,
                          steps: p.steps.filter((e) => e.segment === f),
                          tasks: p.tasks.filter((e) => e.task.segment === f),
                      },
            [p, f],
        );
    if (u)
        return (0, n.jsx)("ol", {
            className: t$.pj,
            "data-live": !1,
            children: (0, n.jsx)(tC.A, {
                glyph: (0, n.jsx)(eK.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(E.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = r ? void 0 : (g ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, eA.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = t_(k.map((e) => e.taskId)),
        w = !x && (r || k.some((e) => "running" === e.task.status)),
        A = tZ(k);
    return (0, n.jsx)(tC.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: t$.pj,
            "data-live": w,
            children: [
                (0, n.jsx)(eH.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: x,
                    durationMs: b,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let a = null != e.task.helperMark ? tP(e.task.helperMark) : void 0,
                        r = a ?? N.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tO,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: r.Illocon,
                                  tint: r.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : r.name,
                                  connectsDown: l < k.length - 1,
                              },
                              e.taskId,
                          );
                }),
                y
                    ? (0, n.jsx)("li", {
                          className: t$.YO,
                          children: (0, n.jsx)(tK, { todos: j, provisional: c, agents: A, live: i, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function t0(e) {
    let {
            projectId: t,
            steps: l,
            content: r,
            proposal: s,
            ideas: o,
            attachments: u,
            secretRequest: d,
            secretRequestAwaiting: c,
            settingsRequest: f,
            onPickIdea: m,
            pickedIdeaIds: h,
            onApprovePlan: x,
            sideReply: g = !1,
            hoistedProse: p = !1,
            hoistedAttachmentsHost: b,
            restoreProposal: j,
            onRestoreProposal: y,
        } = e,
        k = a.useMemo(
            () => eZ({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        { streamed: N, lastStreamedMessage: w, showsClosingMessage: A, closingContent: S } = k,
        I = (p ? b : void 0) ?? k.attachmentsHost,
        M = A && !p,
        T = null == u ? null : (0, n.jsx)(e3.A, { projectId: t, attachments: u }),
        R = null == T ? null : (0, n.jsx)("div", { className: t$.MT, children: T }),
        P = g
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: t$.ue,
        children: [
            N.length > 0 && !p
                ? (0, n.jsx)("ol", {
                      className: t$.dO,
                      children: N.filter((e) => "todos" !== e.type).map((e) =>
                          (0, n.jsxs)(
                              "li",
                              {
                                  className: t$.DV,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: tQ.PT,
                                          children: eY.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === I && e === w ? R : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(to, { projectId: t, proposal: s, onApprove: x })
                : M
                  ? (0, n.jsxs)("div", {
                        className: i()(t$.ky, tX.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tQ.PT, t$.cW),
                                children: eY.A.parse(S, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === I ? R : null,
                            P,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(t$.ky, tX.XR, { [tY.O]: null != c }),
                      children: (0, n.jsx)(tN, { projectId: t, request: d, awaiting: c }),
                  })
                : null,
            null != f
                ? (0, n.jsx)("div", {
                      className: i()(t$.ky, tX.XR),
                      children: (0, n.jsx)(tE, { projectId: t, request: f }),
                  })
                : null,
            "standalone" !== I && ("closing" !== I || M) ? null : T,
            null != o && o.length > 0 ? (0, n.jsx)(e4, { ideas: o, pickedIdeaIds: h, onPick: m }) : null,
            null != j ? (0, n.jsx)(tv, { proposal: j, onRestore: y }) : null,
            M ? null : P,
        ],
    });
}
var t1 = l(864970),
    t2 = l(146806),
    t7 = l(475358),
    t5 = l(81369),
    t4 = l(922016),
    t3 = l(980707),
    t6 = l(477782),
    t8 = l(717400),
    t9 = l(663341),
    le = l(826745),
    lt = l(783977),
    ll = l(559647),
    ln = l(775602),
    la = l(435558),
    lr = l.n(la),
    li = l(506774);
let ls = "VibegrationsComposerDrafts";
function lo() {
    return li.w.get(ls) ?? {};
}
let lu = new Map(),
    ld = lr().throttle(() => {
        if (0 === lu.size) return;
        let e = lo();
        for (let [t, l] of lu) "" === l ? delete e[t] : (e[t] = l);
        (lu.clear(), li.w.set(ls, e));
    }, 1e3);
class lc extends D.Ay.Store {
    getDraft(e) {
        let t = lu.get(e);
        return null != t ? t : (lo()[e] ?? "");
    }
}
let lf = new lc(eI.h, {
    LOGOUT: function () {
        return (lu.clear(), ld.cancel(), li.w.remove(ls), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (lu.set(t, l), ld(), "" === l && ld.flush(), !1);
    },
});
var lm = l(43105),
    lh = l(252510);
let lx = [E.default.ZK2O25, E.default["122Ir6"], E.default["9KCASa"]];
function lg(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(E.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(lm.A, {
        targetElementRef: t,
        title: C.intl.string(E.default.n8wtkv),
        body: C.intl.format(E.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: lh.r,
                children: [
                    C.intl.string(E.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: lh.e,
                        children: lx.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var lp = l(379307),
    lv = l(285796),
    lb = l(590380),
    lj = l(298668);
let ly = eT.Is;
function lk(e, t, l, n) {
    let a = eF(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: eP++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (eD(e, t, [
            ...eF(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    "errorText" in n
                        ? e$(e, t, l.localId, { status: "error", errorText: n.errorText })
                        : e$(e, t, l.localId, { status: "ready", ref: n })
                          ? setTimeout(
                                () =>
                                    e$(e, t, l.localId, {
                                        status: "error",
                                        errorText: C.intl.string(E.default.HL9CT6),
                                    }),
                                eT.$f - 3e5,
                            )
                          : eO(e, n.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        e$(e, t, l.localId, { status: "error", errorText: C.intl.string(E.default.GwEHvn) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= ly)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.DlX57a, { count: ly }),
                    },
                };
            if (!(0, eT.x5)(e.size, t))
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.cI7t94, { size: (0, eT.ZJ)((0, eT.yr)(t)) }),
                    },
                };
            let r = eT.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function lN(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = e_.useState((e) => eL(e, t, l)),
        i = a.useCallback((e) => lk(t, l, e, n), [t, l, n]),
        s = a.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = eF(t, l)).find((t) => t.localId === e)) &&
                    (ez(t, a),
                    eD(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = a.useCallback(() => eB(t, l), [t, l]);
    return { drafts: r, addFiles: i, removeDraft: s, settled: r.every((e) => "ready" === e.status), takeRefs: o };
}
function lw(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(lb.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: lj.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: lj.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(E.default["3HWvgk"]),
                children: (0, n.jsx)(lv.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lA = l(789438);
let lS = "text-md/normal",
    lE = null;
function lC(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [f, m] = a.useState(0),
        [h, x] = a.useState(0),
        [g, p] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (x(i + r), m(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            p({
                frontFrom: 1e3 * (0, t2._R)(f),
                frontTo: 1e3 * (0, t2._R)(h),
                backFrom: 1e3 * (0, t2.T)(f),
                backTo: 1e3 * (0, t2.T)(h),
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
    let A = "in" === y ? g.backFrom : g.frontFrom,
        S = "out" === y ? g.frontTo : g.backTo,
        I = (0, D.bG)([ln.Ay], () => ln.Ay.useReducedMotion),
        M = t === C.intl.string(E.default.Jj8Ftb),
        T = s === t && M;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(lA.VT, { [lA.qk]: a }),
            style: a
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": a && b > 0 && null != y ? b % 2 : void 0,
            "data-wipe-kind": a ? (y ?? void 0) : void 0,
            children: (0, n.jsx)(t7.e, { shortcut: "tab", className: lA.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(t1.o, {
                text: t,
                variant: lS,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(lA.xM, { [lA.s2]: r }),
                onStart: w,
                onComplete: () => o(t),
            }),
            R(lA.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: lA.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lS, tag: "span", children: t }),
            }),
            T
                ? (0, n.jsxs)("span", {
                      className: lA.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lS, tag: "span", className: lA.xM, children: t }),
                          R(lA.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lI(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: r,
            running: i,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onApprove: f,
            onImport: m,
            suggestion: h,
            questionOpen: x = !1,
            tipOpen: g = !1,
            onDismissTip: p,
            hasPendingContext: v = !1,
            modelSettings: b,
            onModelSettingsChange: j,
        } = e,
        [y, k] = a.useState(() => lf.getDraft(t)),
        N = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), k(e));
            },
            [t],
        ),
        [w, A] = a.useState(t);
    w !== t && (A(t), k(lf.getDraft(t)));
    let S = (0, D.bG)([ln.Ay], () => ln.Ay.isSubmitButtonEnabled),
        [I, M] = a.useState(!1);
    a.useEffect(() => {
        i || M(!1);
    }, [i]);
    let T = a.useRef(null),
        {
            drafts: R,
            addFiles: P,
            removeDraft: _,
            settled: L,
            takeRefs: F,
        } = lN({ projectId: t, surface: "chat", onUploadFile: d }),
        $ = "" !== y.trim() || R.length > 0 || v,
        O = l && $ && L,
        [z, q] = a.useState(null);
    a.useEffect(() => {
        if (null == z) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => q(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [z]);
    let U = a.useCallback(() => {
            if (!O) return;
            p?.();
            let e = F();
            o(y, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    r = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === r) return r;
                null == lE && (lE = document.createElement("canvas").getContext("2d"));
                let i = lE;
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
                    f = c.lastIndexOf(" ");
                return (f > 0 ? c.slice(0, f) : c).trimEnd();
            })(Y.current?.querySelector("textarea") ?? null, ea.current, y);
            ("" !== t && q(t), N(""));
        }, [O, y, o, F, N, p]),
        B = a.useCallback(
            (e) => {
                (e.preventDefault(), U());
            },
            [U],
        ),
        G = a.useCallback(() => {
            null == u || I || (M(!0), u());
        }, [u, I]),
        V = null == h || "" !== y || !l || r || s || v ? null : h,
        W = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), G());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != V) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N(V));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
            },
            [U, f, i, u, I, G, V, N],
        ),
        H = a.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), P(t));
            },
            [l, P],
        ),
        K = a.useCallback(
            (e) => {
                (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [P],
        ),
        Y = a.useRef(null),
        X = a.useRef(null),
        [Q, Z] = a.useState(0),
        [J, ee] = a.useState(!1);
    a.useEffect(() => {
        if (0 === y.length) return void ee(!1);
        let e = Y.current?.querySelector("textarea");
        if (null != e) {
            let t = lR(e);
            null != t && Z(t);
        }
        ee(!0);
        let t = setTimeout(() => ee(!1), lM);
        return () => clearTimeout(t);
    }, [y]);
    let et = a.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        el = J ? ` ${lA.EB}` : "",
        en = s
            ? C.intl.string(E.default.pGFXZ0)
            : r
              ? C.intl.string(E.default.JeM47J)
              : l
                ? v
                    ? C.intl.string(E.default.Bs7bUv)
                    : x
                      ? C.intl.string(E.default.M3ovXY)
                      : C.intl.string(i ? E.default["67PpcP"] : E.default.ahRdoJ)
                : C.intl.string(E.default.nm4w9P),
        ea = a.useRef(0),
        er = a.useRef(null),
        ei = a.useCallback((e) => {
            if ((er.current?.disconnect(), null == e)) return;
            ea.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                ea.current = e.clientWidth;
            });
            (t.observe(e), (er.current = t));
        }, []),
        es = a.useId(),
        eo = null != V,
        eu = z ?? V ?? en,
        ed = "" === y && "" !== eu;
    return (0, n.jsxs)("form", {
        onSubmit: B,
        className: lA.DA,
        children: [
            R.length > 0
                ? (0, n.jsx)("div", {
                      className: lA.lN,
                      children: R.map((e) => (0, n.jsx)(lw, { draft: e, onRemove: _ }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${lA.wg} ${lA.LP}${el}`, style: et, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${lA.wg} ${lA.L3}${el}`, style: et, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lA.VA,
                ref: Y,
                children: [
                    (0, n.jsx)("input", {
                        ref: T,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: lA.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == m
                        ? (0, n.jsx)(e6.m, {
                              text: C.intl.string(E.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: X,
                                  type: "button",
                                  className: `${lA.Y0} ${lA.nu}`,
                                  disabled: !l,
                                  onClick: () => T.current?.click(),
                                  "aria-label": C.intl.string(E.default.d6Rqlu),
                                  children: (0, n.jsx)(t5.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: lA.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(t4.Y, {
                              targetElementRef: X,
                              position: "top",
                              align: "left",
                              animation: t4.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(t3.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(t6.rX, {
                                          children: [
                                              (0, n.jsx)(t6.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: t5.H,
                                                  leadingAccessory: { type: "icon", icon: t5.H },
                                                  action: () => T.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(t6.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(E.default.edKajy),
                                                        iconLeft: t8.q,
                                                        leadingAccessory: { type: "icon", icon: t8.q },
                                                        action: m,
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
                                      ref: X,
                                      type: "button",
                                      className: `${lA.Y0} ${lA.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(t9.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: lA.Qu,
                                      }),
                                  });
                              },
                          }),
                    ed
                        ? (0, n.jsx)("div", {
                              ref: ei,
                              className: lA.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lC, { text: eu, offering: eo && null == z, typed: null != z }),
                          })
                        : null,
                    (0, n.jsx)(le.y, {
                        value: y,
                        onChange: (e) => N(e.currentTarget.value),
                        onKeyDown: W,
                        onPaste: H,
                        placeholder: ed ? "" : en,
                        disabled: !l,
                        "aria-label": C.intl.string(E.default.OPr66w),
                        "aria-describedby": ed ? es : void 0,
                        rows: 1,
                        className: lA.jp,
                    }),
                    ed ? (0, n.jsx)(tU.A, { id: es, children: en }) : null,
                    (0, n.jsx)("div", {
                        className: lA.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(e6.m, {
                                      text: C.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${lA.Y0} ${lA.$E}`,
                                          disabled: I,
                                          onClick: G,
                                          "aria-label": C.intl.string(E.default.KdgI4k),
                                          children: (0, n.jsx)(eK.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != j
                                  ? (0, n.jsx)(lp.A, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${lA.Y0} ${lA.$E}`,
                                        icon: (0, n.jsx)(lt.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    S
                        ? (0, n.jsxs)("div", {
                              className: lA.fF,
                              children: [
                                  (0, n.jsx)("div", { className: lA.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: lA.rt,
                                      disabled: !O,
                                      "aria-label": C.intl.string(E.default["22GHMt"]),
                                      children: (0, n.jsx)(ll.SendMessageIcon, {
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
            g && null != p ? (0, n.jsx)(lg, { targetElementRef: Y, onDismiss: p }) : null,
        ],
    });
}
let lM = 1500,
    lT = [
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
function lR(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lR.mirror;
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
                (lR.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lT) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lR.mirror = null;
var lP = l(442433),
    l_ = l(320095),
    lL = l(963852),
    lF = l(521981),
    lD = l(763754),
    l$ = l(491182),
    lO = l(438729),
    lz = l(622868),
    lq = l(448368),
    lU = l(837528),
    lB = l(439762),
    lG = l(715628),
    lV = l(752636),
    lW = l(9842),
    lH = l(589022),
    lK = l(95701),
    lY = l(994500),
    lX = l(967198);
let lQ = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lZ(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lJ(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function l0(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lJ(e, t),
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
    if (lZ(a) && lZ(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lZ(lJ(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function l1(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([ln.Ay], () => ln.Ay.useReducedMotion),
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
                      for (; r > 0 && l0(t, r);) r--;
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
        f = a.useRef(0);
    (a.useEffect(() => {
        if (u)
            return (
                (f.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let l = 0 === f.current ? 32 : t - f.current;
                    if (l >= 32) {
                        f.current = t;
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
                                    for (; n > t + 1 && l - n < 12 && lQ.has(e.charAt(n - 1));) n--;
                                    return lQ.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && l0(t, o);) o++;
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
    let m = Math.min(o.length, e.length);
    return { text: m >= e.length ? e : e.slice(0, m), revealing: r && m < e.length };
}
var l2 = l(725592),
    l7 = l(73432),
    l5 = l(365199),
    l4 = l(194085),
    l3 = l(734495),
    l6 = l(441136);
function l8(e) {
    let { message: t, onClose: l } = e,
        a = (0, l3.A)(t);
    return (0, n.jsx)(t3.W, {
        navId: "vibegrations-message-actions",
        "aria-label": C.intl.string(C.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(t6.rX, { children: a }),
    });
}
function l9(e) {
    let { message: t, groupStart: l } = e,
        [r, s] = a.useState(!1),
        o = a.useRef(null),
        u = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return null == (0, l3.A)(t)
        ? null
        : (0, n.jsx)("div", {
              className: i()(l6.QE, { [l6.Rn]: l, [l6.vg]: r }),
              children: (0, n.jsx)(l4.Ay, {
                  children: (0, n.jsx)(t4.Y, {
                      targetElementRef: o,
                      renderPopout: (e) => {
                          let { closePopout: l } = e;
                          return (0, n.jsx)(l8, { message: t, onClose: l });
                      },
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      align: "top",
                      animation: t4.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: l, ...a } = e,
                              { isShown: r } = t;
                          return (0, n.jsx)(l4.qv, {
                              ref: o,
                              label: C.intl.string(C.t["UKOtz+"]),
                              icon: l5.MoreHorizontalIcon,
                              selected: r,
                              onClick: u,
                              ...a,
                          });
                      },
                  }),
              }),
          });
}
let ne = (0, lK.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    nt = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nl(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(l6.Yq, { [l6.x1]: t }), children: e });
}
function nn(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function na(e, t, l) {
    let { content: r } = (0, lB.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: ne, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lO.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lG.A)(i, r);
}
function nr(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lU.m)(e, ne, t.usernameProfile, r),
        o = (0, lU.Jo)(t.avatarProfile, r),
        u = (0, D.bG)([lX.A], () => lX.A.getGuildId()),
        d = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eu.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lH.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function ni(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lF.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: l6.GV,
                              children: [
                                  (0, n.jsx)(l7.A, { className: l6.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, D.cf)(
            [lY.A],
            () => ({
                isReplyAuthorBlocked: lY.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lY.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lD.X4)(l),
        c = (0, lD.X4)(t),
        f = nr(l);
    return (0, n.jsx)(lq.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: ne,
        referencedMessage: { state: lW.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != i,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: i,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function ns(e) {
    let { message: t, author: l } = e,
        a = nr(t);
    return (0, n.jsx)(lz.Ay, {
        message: t,
        channel: ne,
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
function no(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(() => (0, l2.Y)(r), [r]);
    let o = (0, D.bG)(
            [eu.default],
            () => (0, l2.T)(r, null != r ? eu.default.getUser(r) : null, eu.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, lD.FT)(o, null), [o]),
        d = a.useMemo(() => (0, ew.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, lL.Ay)({ channelId: ne.id, content: c, author: o });
            return (0, l_.rh)({ ...e, timestamp: nn(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, o, l]);
    return null == f
        ? null
        : (0, n.jsx)(nu, { message: f, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function nu(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = na(t, a);
    return (0, n.jsx)(l$.A, {
        className: l6.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(ns, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: l6.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: l6.GV,
                              children: [
                                  (0, n.jsx)(l7.A, { className: l6.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: l6.WO, children: o }),
                      ],
                  }),
        childrenAccessories: nl(i, "" !== a),
        childrenButtons: (0, n.jsx)(l9, { message: t, groupStart: s }),
    });
}
function nd(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = l1(t, { streaming: u }),
        f = a.useMemo(() => (0, lD.FT)(null, null), []),
        m = a.useMemo(() => ({ ...f, nick: "Conjure", colorString: "var(--text-brand)" }), [f]),
        h = i?.userId,
        x = (0, D.bG)(
            [eu.default],
            () => (0, l2.T)(h, null != h ? eu.default.getUser(h) : null, eu.default.getCurrentUser()),
            [h],
        ),
        g = a.useMemo(() => (null == i ? null : (0, ew.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == x) return null;
            let e = (0, lL.Ay)({ channelId: ne.id, content: g?.body ?? i.content, author: x });
            return (0, l_.rh)({ ...e, id: i.id, timestamp: nn(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, g, x]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: ne.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, lL.Ay)({ channelId: ne.id, content: d, author: nt });
            return (0, l_.rh)({
                ...e,
                timestamp: nn(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = na(b, d, l6.OS);
    return (0, n.jsxs)("div", {
        className: l6.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(l$.A, {
                className: l6.yE,
                author: m,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(ni, { baseMessage: b, referenced: p, selected: g?.label, onJumpToReplied: s }),
                childrenHeader: (0, lV.A)({ message: b, channel: ne, author: m, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: nl(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: l6.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let nc = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var nf = l(375068);
function nm(e) {
    let {
            projectId: t,
            messages: r,
            emptyState: s,
            ref: o,
            onPickIdea: u,
            onApprovePlan: d,
            floatingSettingsMessageId: c,
            onRestoreVersion: f,
        } = e,
        h = a.useRef(null),
        x = a.useCallback(
            (e) => {
                ((h.current = e), "function" == typeof o ? o(e) : null != o && (o.current = e));
            },
            [o],
        ),
        [g, p] = a.useState(null),
        b = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(b.current), []);
    let j = a.useCallback((e) => {
            let t = h.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                p(e),
                window.clearTimeout(b.current),
                (b.current = window.setTimeout(() => p(null), 1600)));
        }, []),
        y = a.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = (function (e) {
                            let t = new Set(),
                                l = !1;
                            for (let n = e.length - 1; n >= 0; n--) {
                                let a = e[n];
                                null != a &&
                                    null !=
                                        (function (e) {
                                            if ("assistant" !== e.role) return null;
                                            let t = (0, eA.lt)(e.steps);
                                            return null != t
                                                ? t
                                                : null != e.todos && e.todos.length > 0
                                                  ? e.todos
                                                  : null;
                                        })(a) &&
                                    (l && t.add(a.render_id), (l = !0));
                            }
                            return t;
                        })(e);
                    function n(e, l) {
                        t.push({ row: e, groupable: { key: e.key, ...l } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            n(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, eS.BL)(t),
                            a = eZ({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            r = a.lastStreamedMessage?.key,
                            i = (0, eA.C6)(t.steps, { turnActive: e }),
                            { lastWork: s, open: o } = (0, eA.CT)(i, { turnActive: e }),
                            u = i.at(-1)?.index,
                            d = !1;
                        for (let c of i) {
                            if (null != c.prose && nc.test(c.prose.content)) d = !0;
                            else if (null != c.prose && c.prose.key !== a.replyKey) {
                                let l = `${t.render_id}:${c.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: l,
                                        message: t,
                                        groupStart: !1,
                                        content: c.prose.content,
                                        hostsAttachments:
                                            "streamed" === a.attachmentsHost &&
                                            c.prose.key === r &&
                                            null != t.attachments,
                                        streaming: e && c.index === u && !c.hasWork,
                                    },
                                    { actor: "assistant", boundary: l },
                                );
                            }
                            (c.hasWork || c.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${c.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: c.index,
                                        active: c.index === o,
                                        closed: c.index !== o,
                                        ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                        reportsDuration: c.index === s,
                                        hostsChecklist: c.hasTodos,
                                        turnActive: eE(t),
                                        checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let c = nc.test(t.content ?? "");
                        if (
                            (!0 === t.interrupted || d || c
                                ? n(
                                      {
                                          kind: "interrupted",
                                          key: `${t.render_id}:interrupted`,
                                          message: t,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : i.every((e) => !e.hasTodos) &&
                                  (t.todos?.length ?? 0) > 0 &&
                                  n(
                                      {
                                          kind: "legacyTodos",
                                          key: `${t.render_id}:todos`,
                                          message: t,
                                          groupStart: !1,
                                          checklistSuperseded: l.has(t.render_id),
                                      },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (a.showsClosingMessage && !c) ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.restoreProposal ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === a.attachmentsHost)
                        ) {
                            let l = `${t.render_id}:closing`;
                            n(
                                {
                                    kind: "closing",
                                    key: l,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: a.attachmentsHost,
                                    content: a.closingContent,
                                    sideReply: "side_reply" === t.kind,
                                },
                                {
                                    actor: "assistant",
                                    boundary: l,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let a = (function (e) {
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
                    return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
                })(r),
            [r],
        ),
        k = r.at(-1),
        N =
            (k?.role !== "assistant" || null == k.awaitingUser || null == k.secretRequest
                ? null
                : (0, eS.BL)(k)
                  ? k.awaitingUser
                  : null) ?? void 0;
    if (0 === r.length) {
        if ("loading" === s)
            return (0, n.jsx)("ol", {
                ref: o,
                className: i()(nf.x7, nf.jH),
                "aria-busy": !0,
                children: (0, n.jsx)("li", { className: nf.Ub, children: (0, n.jsx)(m.y, {}) }),
            });
        let e = "unavailable" === s ? E.default.s4oxNv : E.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: o,
            className: nf.x7,
            children: (0, n.jsx)(nh, { role: "assistant", children: (0, n.jsx)(nd, { content: C.intl.string(e) }) }),
        });
    }
    return (0, n.jsxs)("ol", {
        ref: x,
        className: nf.x7,
        children: [
            y.map((e) => {
                let a = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                        return (0, n.jsx)(
                            nh,
                            {
                                role: "user",
                                anchorId: a.id,
                                highlighted: g === a.id,
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(no, {
                                    groupStart: e.groupStart,
                                    content: a.content,
                                    createdAt: a.created_at,
                                    userId: a.user_id,
                                    accessories:
                                        null != l ? (0, n.jsx)(e3.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, n.jsx)(
                            nh,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nd, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: a.created_at,
                                    accessories:
                                        e.hostsAttachments && null != a.attachments
                                            ? (0, n.jsx)(e3.A, { projectId: t, attachments: a.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, n.jsx)(
                            nh,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(tJ, {
                                    projectId: t,
                                    steps: a.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != a.finished_at ? a.finished_at - a.created_at : void 0,
                                    todos: a.todos,
                                    provisionalTodo: a.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, n.jsx)(
                            nh,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(tJ, { projectId: t, interrupted: !0, steps: a.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, n.jsx)(
                            nh,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(tJ, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: a.todos,
                                    provisionalTodo: a.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let i =
                                null != f
                                    ? "assistant" !== a.role || null == a.sourceSha
                                        ? null
                                        : {
                                              sha: a.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(a.created_at).toISOString(),
                                              subject: a.content,
                                          }
                                    : null,
                            s = a.restoreProposal;
                        return (0, n.jsx)(
                            nh,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != i && null != f
                                        ? (e) => {
                                              var t;
                                              return (
                                                  (t = () => {
                                                      tx(() => f(i));
                                                  }),
                                                  void (0, lP.L3)(e, async () => {
                                                      let { default: e } = await l.e("218024").then(l.bind(l, 88347));
                                                      return (l) => (0, n.jsx)(e, { ...l, onRestoreVersion: t });
                                                  })
                                              );
                                          }
                                        : void 0,
                                children: (0, n.jsx)(nd, {
                                    groupStart: e.groupStart,
                                    content: e.content,
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
                                    })(r, a.in_reply_to),
                                    onJumpToReplied: null != a.in_reply_to ? () => j(a.in_reply_to) : void 0,
                                    accessories: (0, n.jsx)(t0, {
                                        projectId: t,
                                        steps: a.steps,
                                        content: "",
                                        proposal: a.proposal,
                                        interrupted: !0 === a.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
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
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      n.add(e.id);
                                                      }
                                                      return n;
                                                  })(r, a, a.ideas),
                                        attachments: a.attachments,
                                        secretRequest: a.secretRequest,
                                        secretRequestAwaiting: a === k ? N : void 0,
                                        settingsRequest: a.id === c ? void 0 : a.settingsRequest,
                                        onPickIdea: u,
                                        onApprovePlan: a === k ? d : void 0,
                                        restoreProposal: s,
                                        onRestoreProposal:
                                            null != s && null != f && a === k
                                                ? () => {
                                                      var e;
                                                      return (
                                                          (e = {
                                                              sha: s.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: s.authored_at,
                                                              subject: s.subject,
                                                          }),
                                                          void tx(() => f(e))
                                                      );
                                                  }
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != N
                ? (0, n.jsx)(nh, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, n.jsx)(nd, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["1LEnd8"]),
                          }),
                      }),
                  })
                : null,
        ],
    });
}
function nh(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1, onContextMenu: o } = e;
    return (0, n.jsx)("li", {
        onContextMenu: o,
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(nf.xk, { [nf.Qo]: r, [nf.q3]: s }),
        children: l,
    });
}
let nx = [E.default.krnkPq, E.default["8oUm/J"], E.default["6Ea4dF"], E.default.fQx5qC, E.default["phXeK/"]];
function ng(e) {
    return nx.some((t) => C.intl.string(t) === e);
}
function np(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(E.default.W7oyuf);
        case "closed":
            return C.intl.string(E.default["yBmS+I"]);
        case "failed":
            return C.intl.string(E.default.eE60xI);
    }
}
var nv = l(559676),
    nb = l(823376),
    nj = l(495557);
function ny(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = l1(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nj.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: o,
                className: nj.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tQ.PT, nj.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eY.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nk = l(921461);
function nN(e) {
    let {
            activity: t,
            compacting: l = !1,
            restoring: r = !1,
            recalling: s = !1,
            controlling: o = !1,
            spoken: u,
            onSpokenChange: d,
        } = e,
        c = a.useRef(null),
        f = a.useId(),
        [m, h] = a.useState(null),
        x = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, recalling: a = !1, controlling: r = !1 } = e,
                i = null != t && "end" !== t.phase;
            return r
                ? E.default.ivvYHP
                : n
                  ? E.default.aFffp2
                  : a
                    ? nx[0]
                    : l
                      ? E.default["0vH/5G"]
                      : i
                        ? E.default.Ly7F7x
                        : E.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, recalling: s, controlling: o }),
        g = C.intl.string(x),
        p = x === nx["0"],
        [v, b] = a.useState(u ?? g),
        j = a.useRef(g);
    (a.useEffect(() => {
        j.current = g;
    }, [g]),
        a.useEffect(() => {
            d?.(v);
        }, [v, d]));
    let y = a.useRef(null),
        k = a.useRef(v);
    a.useEffect(() => {
        k.current = v;
    }, [v]);
    let N = a.useRef(p),
        w = a.useRef(0);
    (a.useEffect(() => {
        ((N.current = p), !p && ng(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = ng(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), C.intl.string(nx[e % nx.length]))));
                } else j.current !== k.current ? b(j.current) : y.current?.play();
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
                (y.current?.stop(), a());
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
    let A = null != t && "" !== t.text,
        S = t?.session ?? null,
        I = A && null != S && m === S,
        M = a.useCallback(() => {
            A && null != S && h((e) => (e === S ? null : S));
        }, [A, S]),
        T = a.useCallback(() => h(null), []);
    return (0, n.jsx)(t4.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: T,
        renderPopout: () => (0, n.jsx)(ny, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(eJ.D, {
                innerRef: c,
                className: i()(nk.hF, A && nk.Xd),
                "aria-label": C.intl.string(r ? E.default.pGFXZ0 : p ? nx["0"] : E.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(x),
                onClick: M,
                children: [
                    (0, n.jsx)("span", {
                        className: nk.bl,
                        children: (0, n.jsx)(nb.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nk.xu,
                        "aria-hidden": !!o || !!p || void 0,
                        children: (0, n.jsx)(t1.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nk.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nw = { second: 1e3, minute: 6e4 };
function nA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nw[t];
            return (
                !(function t() {
                    let r = Date.now();
                    (n(r), (l = setTimeout(t, a - ((((r - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var nS = l(979148);
function nE(e) {
    let { startedAt: t } = e,
        l = nA(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: nS.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, eX.C7)(l),
    });
}
function nC(e) {
    let { startedAt: t } = e,
        l = nA(t, "minute");
    return (0, n.jsx)(tU.A, { role: "timer", children: (0, eX.Us)(l) });
}
var nI = l(280894);
function nM(e) {
    return e.toLocaleString();
}
function nT(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nI.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nI.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nM((0, eT.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nM(l.input_tokens),
                    " in \xb7 ",
                    nM(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nM(l.cache_creation_input_tokens)} cache write \xb7 ${nM(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function nR(e) {
    let { project: t } = e,
        l = (0, eT.wU)(t.compaction),
        a = (0, eT.wU)(t.classifier),
        r = (0, eT.wV)(t.orchestrator, t.codegen),
        i = (0, eT.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nI.si,
        role: "dialog",
        "aria-label": C.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nI.Q$,
                children: (0, n.jsxs)("div", {
                    className: nI.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nM((0, eT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(nT, { label: C.intl.string(E.default.R9aduM), usage: r }),
            (0, n.jsx)(nT, { label: C.intl.string(E.default.Tj6b30), usage: l }),
            (0, n.jsx)(nT, { label: C.intl.string(E.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nI.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(E.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eT.sj)(i) ? "\u2014" : `${Math.round(100 * (0, eT.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nP(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(t4.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(nR, { project: t }),
        children: (e) =>
            (0, n.jsx)(eJ.D, {
                innerRef: l,
                className: nI.Y$,
                "aria-label": C.intl.string(E.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(e8.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var n_ = l(258216);
function nL(e) {
    let t,
        {
            projectId: l,
            thinking: r,
            turnStartedAt: i,
            restoring: s = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: d,
            projectUsage: c,
            connState: f,
        } = e,
        m = (0, nv.o4)(l),
        [h, x] = a.useState(null),
        g = a.useCallback((e) => x(ng(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, eT.a7)(c.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(E.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(E.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = r && null != i;
    return (0, n.jsxs)("div", {
        className: n_.jf,
        children: [
            (0, n.jsxs)("div", {
                className: n_.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || o || m
                        ? (0, n.jsx)(nN, {
                              activity: u,
                              compacting: d,
                              restoring: s,
                              recalling: o,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, n.jsx)(nE, { startedAt: i }) : null,
                ],
            }),
            b ? (0, n.jsx)(nC, { startedAt: i }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: n_.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(nP, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(E.default.eDDdhB, { status: np(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: n_.XF,
                      children: np(f),
                  }),
        ],
    });
}
var nF = l(22231),
    nD = l(900797),
    n$ = l(477155),
    nO = l(935286),
    nz = l(856795),
    nq = l(424110);
function nU(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eJ.D, {
        className: i()(nq.uK, { [nq.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? E.default.aL1BKQ : E.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: nq.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: nq.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: nq.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nq.ed,
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
                      className: nq.rM,
                      children: C.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nB(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(nq.Ge, nq.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(nU, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: nq.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: nq.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(nF.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(nq.Pu, nq.es), children: s }),
                ],
            }),
        ],
    });
}
function nG(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, u] = a.useState({}),
        [d, c] = a.useState({}),
        [f, m] = a.useState(0),
        [h, x] = a.useState(null),
        [g, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [w, A] = a.useState(null),
        S = a.useRef(null),
        I = a.useRef(0),
        M = null == l,
        T = t.questions.length,
        R = Math.min(f, T - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: z, phase: q } = (0, nz.Q)(P.question),
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
                (x({ direction: t, moves: l }), p({ question: P, draft: O, direction: t, moves: l }), k(!0), m(e));
            },
            [O, P],
        ),
        H = a.useCallback(() => {
            let e = N.current,
                t = S.current;
            null != e && null != t && j({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = N.current,
            t = S.current;
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
        X = a.useCallback(() => {
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
        Q = R > 0 && !M,
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
        className: i()(nq.$O, { [nq.fI]: J && !et, [nq.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: nq.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: nq.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(nq.TK, nq.R_, { [nq.TB]: "exit" === q, [nq.JU]: "enter" === q }),
                                children: z,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: nq.Q7,
                                      children: (0, n.jsx)(e6.m, {
                                          text: G,
                                          children: (0, n.jsx)(tw.K, {
                                              icon: F ? nD.t : tz.a,
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
                                : (0, n.jsx)(eJ.D, {
                                      className: i()(nq.gb, nq.Q7),
                                      onClick: en,
                                      "aria-label": C.intl.string(E.default.fMdUNR),
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
                        className: nq.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: nq.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: S,
                                    className: nq.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nU,
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
                                            className: nq.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: nq.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(nF.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(le.y, {
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
                                                    placeholder: C.intl.string(E.default.qifsdL),
                                                    "aria-label": C.intl.formatToPlainString(E.default.XHESTL, {
                                                        question: P.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: nq.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == g
                                    ? null
                                    : (0, n.jsx)(
                                          nB,
                                          { question: g.question, draft: g.draft, direction: g.direction, disabled: M },
                                          g.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            T > 1
                ? (0, n.jsxs)("div", {
                      className: nq.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: C.intl.formatToPlainString(E.default["7bypa+"], { index: R + 1, total: T }),
                          }),
                          (0, n.jsxs)("div", {
                              className: nq.Np,
                              children: [
                                  (0, n.jsx)(eJ.D, {
                                      className: i()(nq.gb, { [nq.yI]: !Q }),
                                      onClick: Q ? X : void 0,
                                      tabIndex: Q ? 0 : -1,
                                      "aria-hidden": !Q,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(E.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": Q ? void 0 : "true",
                                      children: (0, n.jsx)(n$.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eJ.D, {
                                      className: i()(nq.gb, { [nq.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": M,
                                      "aria-label": C.intl.string(E.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(nO.E, {
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
var nV = l(643278),
    nW = l(191521),
    nH = l(405189);
function nK(e) {
    let { line: t, placement: l, todos: r, todosLive: s = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != l,
        [f, m] = a.useState(l ?? "top"),
        [h, x] = a.useState(c),
        [g, p] = a.useState(!1),
        [v, b] = a.useState(!1),
        [j, y] = a.useState(c);
    (j !== c && (y(c), null != l ? (m(l), x(!0)) : (p(!1), b(!1))),
        a.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => x(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        a.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [k, N] = a.useState(!1),
        [w, A] = a.useState(!1),
        [S, I] = a.useState(v);
    (S !== v && (I(v), v ? N(!0) : A(!1)),
        a.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => N(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        a.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let M = null != r && r.length > 0,
        T = a.useCallback(() => b((e) => !e), []);
    return h
        ? (0, n.jsxs)("div", {
              className: nH.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(nH.vK, { [nH.ho]: g && c, [nH.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(nH.Rk, t$.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tC.A, {
                                        glyph: (0, n.jsx)(nW.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eJ.D, {
                                    className: nH.pZ,
                                    onClick: d,
                                    "aria-label": C.intl.string(E.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(nH.Rk, t$.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tC.A, {
                                            glyph: (0, n.jsx)(nW.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          M
                              ? (0, n.jsx)(e6.m, {
                                    text: C.intl.string(E.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eJ.D, {
                                        className: nH.BO,
                                        onClick: T,
                                        "aria-expanded": v,
                                        "aria-label": C.intl.string(E.default.qCRC6c),
                                        children: (0, n.jsx)(nV.ClipboardListIcon, {
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
                  k && M
                      ? (0, n.jsx)("div", {
                            className: i()(nH.vB, { [nH.pg]: v && w, [nH.ui]: !v }),
                            children: (0, n.jsx)(tK, {
                                todos: r,
                                provisional: o,
                                agents: u,
                                live: s,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var nY = l(651649),
    nX = l(522250),
    nQ = l(670455),
    nZ = l(698638),
    nJ = l(348800);
let n0 = [C.intl.string(E.default["E+Q26x"]), C.intl.string(E.default["06/jqP"]), C.intl.string(E.default["3gSfUa"])];
function n1(e) {
    var t;
    let { projectId: r, restoreState: i, onRestoreVersion: s } = e,
        o = (0, D.bG)([eS.Ay], () => eS.Ay.getMessages(r), [r]),
        u = (0, D.bG)([f.Ay], () => f.Ay.getConnState(r), [r]),
        d = (0, D.bG)([f.Ay], () => f.Ay.isChatStopped(r), [r]),
        c = (0, D.bG)([eS.Ay], () => eS.Ay.getProjectUsage(r), [r]),
        m = (0, D.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(r), [r]),
        h = (0, D.bG)([eS.Ay], () => eS.Ay.isCompacting(r), [r]),
        x = (0, D.bG)([f.Ay], () => f.Ay.getModelSettings(r), [r]),
        g = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(!0),
        [y, k] = a.useState(!0);
    a.useEffect(() => {
        j.current && p.current?.scrollToBottom();
    }, [o]);
    let N = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        w = a.useCallback(() => {
            let e = p.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            j.current = t < 32;
            let l = t > 1;
            k((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = g.current,
            t = b.current;
        if (null == e) return;
        let l = p.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            j.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => p.current?.scrollToBottom())));
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
            (0, f.Hc)(r);
        }, [r]),
        a.useEffect(
            () => () => {
                let e;
                (e = (0, nX.hl)(r)) < nX.qu ||
                    (!(0, nX.Xi)(r) &&
                        nY.A.possiblyShowFeedbackModal(nQ.MW.VIBEGRATIONS, () => {
                            ((0, nX.AH)(r),
                                (0, ty.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([
                                        l.e("312513"),
                                        l.e("218413"),
                                        l.e("137381"),
                                        l.e("847004"),
                                        l.e("341676"),
                                    ]).then(l.bind(l, 580711));
                                    return (l) => (0, n.jsx)(t, { ...l, projectId: r, promptCount: e });
                                }));
                        }));
            },
            [r],
        ));
    let A = (0, eW.Q_)(r),
        S = a.useCallback(
            (e, t) => {
                (0, f.dv)(r, e, t);
            },
            [r],
        ),
        I = a.useCallback(
            (e, t) => {
                0 === A.annotations.length
                    ? S(e, t)
                    : (S((0, ew.Mx)({ annotations: A.annotations, metaComment: e, context: A.context }), t),
                      (0, eW.PS)(r));
            },
            [A, S, r],
        ),
        M = a.useCallback(() => (0, f.fu)(r), [r]),
        T = a.useCallback((e) => eG(r, e.implementation_prompt), [r]),
        R = a.useCallback((e) => eG(r, e), [r]),
        P = a.useCallback((e) => (0, f.XZ)(r, e), [r]),
        _ = a.useCallback((e) => (0, f.vX)(r, e), [r]),
        L = a.useCallback((e) => lk(r, "chat", Array.from(e), _), [r, _]),
        F = a.useCallback(() => eG(r, C.intl.string(E.default.Jj8Ftb)), [r]),
        $ = i?.status === "restoring",
        O = "open" === u && !d && !$,
        z = o[o.length - 1],
        q = null != z && "assistant" === z.role && null != z.proposal,
        [U, B] = a.useState(null),
        G = z?.clarification != null && z.clarification.id !== U ? z.clarification : null,
        V = a.useCallback(() => {
            null != G && B(G.id);
        }, [G]),
        [W, H] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eV.Fy)(r)) return;
        let e = setTimeout(() => {
            ((0, eV.fA)(), H(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [r]);
    let K = a.useCallback(() => H(!1), []),
        Y = (0, D.bG)([f.Ay], () => f.Ay.getSettings(r), [r]),
        [Q, Z] = a.useState(null),
        J =
            !W &&
            null != z &&
            "assistant" === z.role &&
            null != z.settingsRequest &&
            z.id !== Q &&
            ((t = z.settingsRequest),
            null != Y &&
                (t.keys ?? []).some((e) => {
                    let t = Y.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return Y.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = Y.values[e];
                    return null == l || "" === l;
                }))
                ? z
                : null,
        ee = J?.settingsRequest ?? null,
        et = a.useCallback(() => {
            null != J && Z(J.id);
        }, [J]),
        el = W || null != ee,
        en = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, D.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, D.bG)([eS.Ay], () => eS.Ay.isHistoryUnavailable(r), [r]),
            connState: u,
        }),
        ea = "loading" === en && 0 === o.length,
        er = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return n0[e % n0.length];
        }, [r]),
        ei = q
            ? C.intl.string(E.default.Jj8Ftb)
            : z?.kind === "plan_implemented"
              ? C.intl.string(E.default["3sTTBu"])
              : "greeting" === en && 0 === o.length
                ? er
                : null,
        es = a.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, eS.BL)(t)) return t;
            }
        }, [o]),
        eo = null != es,
        eu =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = eC.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        ed = q && O ? F : void 0,
        ec = a.useCallback(() => eG(r, C.intl.string(E.default.ga8too)), [r]),
        ef = q && O,
        [em, eh] = a.useState(null),
        [ex, eg] = a.useState(eo);
    (ex !== eo && (eg(eo), eo || eh(null)),
        a.useEffect(() => {
            if (!eo) return;
            let e = p.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eh(null)
                        : eh(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [eo, es?.steps]));
    let ep = a.useMemo(() => (null != es ? (0, eH.b)(es.steps) : ""), [es]),
        ev = a.useMemo(() => (null != es ? ((0, eA.lt)(es.steps) ?? es.todos) : void 0), [es]),
        eb = es?.provisionalTodo,
        ej = null != es && eE(es),
        ey = a.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), tZ((0, eA.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nJ.TE,
        children: [
            O
                ? (0, n.jsx)(eN.A, {
                      title: C.intl.string(E.default.UazRD1),
                      description: C.intl.string(E.default["O4r42+"]),
                      icons: nZ.ir,
                      onDrop: L,
                  })
                : null,
            (0, n.jsx)(nK, {
                onJumpToActivity: N,
                line: ep,
                placement: eo && "top" === em ? "top" : null,
                todos: ev,
                todosLive: ej,
                provisionalTodo: eb,
                agents: ey,
            }),
            (0, n.jsxs)("div", {
                className: nJ.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: p,
                        onScroll: w,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [nJ.N$, y ? null : nJ.hB, el ? nJ.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(nm, {
                            ref: b,
                            projectId: r,
                            messages: o,
                            emptyState: en,
                            floatingSettingsMessageId: J?.id,
                            onPickIdea: O ? T : void 0,
                            onApprovePlan: ef ? ec : void 0,
                            onRestoreVersion: $ || eo ? void 0 : s,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: nJ.NJ,
                        children: (0, n.jsx)(nL, {
                            projectId: r,
                            thinking: eo,
                            turnStartedAt: eu,
                            restoring: $,
                            recalling: ea,
                            thinkingActivity: m,
                            compacting: h,
                            projectUsage: c,
                            connState: u,
                        }),
                    }),
                    null == G
                        ? null
                        : (0, n.jsx)("div", {
                              className: el ? `${nJ.B5} ${nJ.J9}` : nJ.B5,
                              children: (0, n.jsx)(
                                  nG,
                                  { clarification: G, onSubmit: O ? R : void 0, onDismiss: V },
                                  G.id,
                              ),
                          }),
                    null == ee
                        ? null
                        : (0, n.jsx)("div", {
                              className: nJ.B5,
                              children: (0, n.jsx)("div", {
                                  className: nJ.ws,
                                  children: (0, n.jsx)(tE, { projectId: r, request: ee, onDismiss: et }, J?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nJ.Jx,
                children: [
                    (0, n.jsx)(nK, {
                        onJumpToActivity: N,
                        line: ep,
                        placement: eo && "bottom" === em ? "bottom" : null,
                        todos: ev,
                        todosLive: ej,
                        provisionalTodo: eb,
                        agents: ey,
                    }),
                    0 === A.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nJ.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(E.default.Lkx0Kk, {
                                          count: A.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: C.intl.string(E.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(X.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(E.default.B0YARo),
                                      onClick: () => (0, eW.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lI, {
                        projectId: r,
                        canSend: O,
                        stopped: d,
                        running: eo,
                        restoring: $,
                        onSend: I,
                        hasPendingContext: A.annotations.length > 0,
                        onInterrupt: O ? M : void 0,
                        onUploadFile: _,
                        onApprove: ed,
                        suggestion: ei,
                        questionOpen: null != G || null != ee,
                        tipOpen: W,
                        onDismissTip: K,
                        modelSettings: x,
                        onModelSettingsChange: P,
                    }),
                ],
            }),
        ],
    });
}
var n2 = l(661531),
    n7 = l(602853),
    n5 = l(517461),
    n4 = l(761929),
    n3 = l(927506);
function n6(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, n7.r)(n2.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, n5.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(u ?? 460),
        m = (0, la.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, n4.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: n4.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        x = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, n.jsxs)("div", {
        className: n3.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: n3.Di, onPointerDown: x }),
            (0, n.jsx)("div", { ref: o, className: n3.kL, style: { width: m }, children: i }),
        ],
    });
}
var n8 = l(691540),
    n9 = l(857250),
    ae = l(97483),
    at = l(624479),
    al = l(92446),
    an = l(761508),
    aa = l(540999),
    ar = l(957565);
let ai = [],
    as = new Map(),
    ao = new Map(),
    au = new Map(),
    ad = new Map(),
    ac = new Map(),
    af = new Map(),
    am = new Map();
class ah extends D.Ay.Store {
    getStatus(e) {
        return as.get(e) ?? null;
    }
    getFetchState(e) {
        return ao.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return ad.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return af.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return ac.get(e) ?? null;
    }
    getModelCalls(e) {
        return am.get(e) ?? ai;
    }
    getForceCompactionState(e) {
        return au.get(e) ?? "idle";
    }
}
let ax = new ah(eI.h, {
    LOGOUT: function () {
        if (
            0 === as.size &&
            0 === ao.size &&
            0 === au.size &&
            0 === ad.size &&
            0 === ac.size &&
            0 === af.size &&
            0 === am.size
        )
            return !1;
        (as.clear(), ao.clear(), au.clear(), ad.clear(), ac.clear(), af.clear(), am.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        ao.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === au.get(t);
        n &&
            au.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === ao.get(t);
        if ((a && ao.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? ao.set(t, "failed") : (as.set(t, l), ao.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        ad.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        ac.set(e.projectId, {
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
        au.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        au.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = am.get(e.projectId);
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
        am.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, eT.aM)(l.total)) return !1;
        af.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (as.delete(t), ao.delete(t), au.delete(t), ad.delete(t), ac.delete(t), af.delete(t), am.delete(t));
    },
});
var ag = l(972786);
function ap(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function av(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function ab(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function aj(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function ay(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function ak(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function aN(e) {
    return C.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
let aw = ["all", "preview", "stable", "web"],
    aA = new Set(["error", "aborted", "length"]);
function aS(e) {
    switch (e.reason) {
        case "local":
            return C.intl.string(E.default.M7Vn6y);
        case "unconfigured":
            return C.intl.string(E.default.QirpMl);
        case "unauthorized":
            return C.intl.string(E.default.QZ1e4l);
        default:
            return null != e.detail
                ? C.intl.formatToPlainString(E.default.zUTHf7, { detail: e.detail })
                : C.intl.string(E.default.WIAQes);
    }
}
function aE(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: ap(e.memory_p50_bytes ?? 0),
              p999: ap(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let aC = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
var aI = l(69985);
function aM(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aI.KE,
        children: [
            (0, n.jsx)("div", {
                className: aI.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: C.intl.string(E.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: C.intl.formatToPlainString(E.default["4NpaEk"], { time: ay(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(X.$, { variant: "secondary", size: "sm", text: C.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function aT(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: aI.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: aI.Gf, children: t }),
            l,
        ],
    });
}
function aR(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: aI.N8,
        children: [
            (0, n.jsxs)("div", {
                className: aI.x7,
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
function aP(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: aI.N8,
        children: [
            (0, n.jsxs)("div", {
                className: aI.x7,
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
                className: aI.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? aI.aV : aI.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function a_(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(aR, {
            label: C.intl.string(E.default.H6PMwW),
            value: C.intl.string(E.default.TLOZ8J),
            hint: aS(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(aR, {
            label: C.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(E.default.uAzxdh),
        });
    let a = aE(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aR, { label: C.intl.string(E.default.awAqRi), value: av(l.cpu_ms) }),
            null != a && (0, n.jsx)(aR, { label: C.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function aL(e) {
    let { analytics: t } = e,
        l = C.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(aT, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: aS(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? aC[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(aT, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(E.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          aR,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(E.default.AnRynJ, { cpu: av(t.cpu_ms) }),
                              hint: aE(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aF = l(522652);
let aD = [];
function a$(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && aA.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? av(l.durationMs) : null,
                    `${ab(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${ab(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aF.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aF.Q5,
                children: aj(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aF.qN,
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
function aO(e, t) {
    return (0, n.jsx)(aR, {
        label: e,
        value: C.intl.formatToPlainString(E.default.U98VaN, { count: ab((0, eT.aM)(t)) }),
        hint: `${ab(t.input_tokens)} in \xb7 ${ab(t.output_tokens)} out \xb7 ${ab(t.cache_read_input_tokens)} cache read`,
    });
}
function az(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, D.bG)([ax], () => ax.getLastTurnUsage(t), [t]),
        u = (0, D.bG)([ax], () => ax.getLastCompaction(t), [t]),
        d = (0, D.bG)([ax], () => ax.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([ax], () => ax.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        x = (0, D.bG)([ax], () => (s ? aD : ax.getModelCalls(t)), [t, s]),
        g = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aF.Mf,
        children: [
            (0, n.jsx)(aM, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(aT, {
                title: C.intl.string(E.default.IYpHtT),
                children:
                    null == g
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(aR, {
                                      label: C.intl.string(E.default["8MSJDH"]),
                                      value: ab((0, eT.a7)(g.cost_usd)),
                                      hint: C.intl.formatToPlainString(E.default["6Z2KhK"], { count: ab(g.turns) }),
                                  }),
                                  aO(C.intl.string(E.default.hk4jJr), g.orchestrator),
                                  aO(C.intl.string(E.default.R9aduM), g.codegen),
                                  aO(C.intl.string(E.default.Tj6b30), (0, eT.wU)(g.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(aR, {
                                          label: C.intl.string(E.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${ab(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(aT, {
                title: C.intl.string(E.default.lo4mY6),
                children:
                    null == o
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  aO(C.intl.string(E.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(aR, {
                                      label: C.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, eT.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(aT, {
                title: C.intl.string(E.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(aP, {
                                      label: C.intl.string(E.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: ab,
                                  }),
                                  (0, n.jsx)(aR, {
                                      label: C.intl.string(E.default.ntZb8d),
                                      value: `${ab(u.tokensBefore)} \u{2192} ${ab(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(E.default.jA05ru, {
                                          count: ab(u.retainedMessages),
                                          time: ay(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(E.default.LKGmsP, { ceiling: ab(j) })
                                      : C.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(aR, {
                            label: C.intl.string(E.default["se+2ls"]),
                            value: `${ab(d.projected)} / ${ab(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(E.default.KHK44U, { time: ay(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aF.Lj,
                        children: [
                            (0, n.jsx)(X.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(E.default.B0KV7p),
                                disabled: "pending" === c,
                                onClick: m,
                            }),
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof c && "compacted" !== c.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return C.intl.string(E.default.wBng42);
                                    if ("pending" === e) return C.intl.string(E.default["0tgo31"]);
                                    let t = ay(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return C.intl.formatToPlainString(E.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? E.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? E.default.GV4sdd
                                              : E.default["Y+0nUb"];
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
                                        (0, n.jsx)(X.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: C.intl.string(E.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: C.intl.string(E.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(aT, {
                    title: C.intl.string(E.default.F5eP7e),
                    children:
                        0 === x.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: C.intl.string(E.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(a$, { call: e }, e.id)),
                                      x.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: C.intl.formatToPlainString(E.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: x.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(aT, {
                    title: C.intl.string(E.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(aR, {
                                        label: C.intl.string(E.default["wt5X/o"]),
                                        value: ay(b.instance_since),
                                        hint: C.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(aR, { label: C.intl.string(E.default["4lgurx"]), value: ab(b.sockets) }),
                                    (0, n.jsx)(aR, {
                                        label: C.intl.string(E.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(E.default["9KlveJ"])
                                            : C.intl.string(E.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(aR, {
                                            label: C.intl.string(E.default["/hOBkc"]),
                                            value: ab(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(a_, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(aT, {
                    title: C.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(aR, {
                            label: C.intl.string(E.default.Rb6m3E),
                            value: ab(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(aR, {
                            label: C.intl.string(E.default.WQ9pMe),
                            value: C.intl.formatToPlainString(E.default.U98VaN, { count: ab(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(aR, {
                            label: C.intl.string(E.default.iEAvzu),
                            value: C.intl.formatToPlainString(E.default.U98VaN, {
                                count: ab(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(aR, {
                            label: C.intl.string(E.default["jbhs+f"]),
                            value: ab(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(aR, { label: C.intl.string(E.default.TOQnq4), value: ab(p.max_build_attempts) }),
                        (0, n.jsx)(aR, { label: C.intl.string(E.default.RIDc6D), value: ab(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var aq = l(629584),
    aU = l(683438),
    aB = l(849363);
function aG(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: aB.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(E.default.TV42NS),
              }),
          });
}
function aV(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: aB.qf,
              children: [
                  (0, n.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: C.intl.string(E.default.TV42NS),
                  }),
                  (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: C.intl.string(E.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: aB.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function aW(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: aB.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var aH = l(417397);
let aK = a.memo(function (e) {
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
        className: aH.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aH.Mt,
                selectable: !0,
                children: aj(l.ts),
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
                className: aH.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: aH.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: aH.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: aH.Cq,
                            title: l.build ?? void 0,
                            children: C.intl.string(E.default.GO6JcR),
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
                                  (0, n.jsxs)(eJ.D, {
                                      className: aH.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(E.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(tz.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(tq._, {
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
                                                      "[\u2026]" === u.marker ? E.default.lXkB6Z : E.default.wkbYxG,
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
                                          className: aH.dF,
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
function aY(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([ag.Ay], () => ag.Ay.getLogs(t), [t]),
        r = (0, D.bG)([ag.Ay], () => ag.Ay.getHistoryState(t, "logs")),
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
        f = a.useRef(!0);
    a.useEffect(() => {
        f.current && c.current?.scrollToBottom();
    }, [d]);
    let m = a.useCallback(() => {
            let e = c.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = a.useMemo(
            () =>
                aw.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return aN(e);
                            case "web":
                                return C.intl.string(E.default.J2TPCe);
                            default:
                                return C.intl.string(E.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: aH.$F,
        children: [
            (0, n.jsxs)("div", {
                className: aH.y4,
                children: [
                    (0, n.jsx)(aq.I, {
                        look: "pill",
                        "aria-label": C.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: aH.KT,
                        children: (0, n.jsx)(aU.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: C.intl.string(E.default["MX4vr/"]),
                            "aria-label": C.intl.string(E.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(aG, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: aH.sx,
                children: [
                    (0, n.jsx)(aW, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(aV, {
                              state: r,
                              emptyTitle: C.intl.string(E.default.mcFyYc),
                              emptyBody: C.intl.string(E.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(E.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(aK, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function aX(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(aT, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(E.default.W4hcKL),
                      }),
        })
    );
}
function aQ(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(aR, {
                      label: C.intl.formatToPlainString(E.default.f8ix3w, { env: aN(l) }),
                      value: ((t = a.connected), C.intl.string(t ? E.default["9KlveJ"] : E.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(aR, {
                      label: C.intl.string(E.default["0AB7l3"]),
                      value: ab(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${ay(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(aR, { label: C.intl.string(E.default.ElaQ0A), value: ab(a.guild_count) }),
                  (0, n.jsx)(aR, {
                      label: C.intl.string(E.default.SJtBTN),
                      value: ab(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(E.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: ay(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(aR, {
                          label: C.intl.string(E.default.N4l504),
                          value: ab(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(aR, { label: aN(l), value: C.intl.string(E.default.C6xjtD) });
}
function aZ(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(aR, {
        label: aN(t),
        value: C.intl.formatToPlainString(E.default.Yur5Zm, { requests: ab(l.requests), failures: ab(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: ay(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(E.default["1PdrB1"], { time: ay(l.since) }),
    });
}
function aJ(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(aR, {
                label: C.intl.formatToPlainString(E.default.BVORfc, { env: aN(t) }),
                value: ab(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    aR,
                    {
                        label: C.intl.formatToPlainString(E.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? C.intl.formatToPlainString(E.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? C.intl.formatToPlainString(E.default["7ecbr3"], { time: ay(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function a0(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(aR, {
        label: aN(t),
        value: C.intl.formatToPlainString(E.default.voXL2a, { calls: ab(l.calls), errors: ab(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function a1(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(aT, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(aT, {
        title: t,
        children: [
            (0, n.jsx)(aR, {
                label: C.intl.string(E.default.KOnL3g),
                value: ab(l.requests),
                hint: C.intl.formatToPlainString(E.default["1PdrB1"], { time: ay(l.since) }),
            }),
            (0, n.jsx)(aR, { label: C.intl.string(E.default.CjPhyY), value: ab(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(aP, {
                              label: C.intl.string(E.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: av,
                          }),
                          (0, n.jsx)(aR, {
                              label: C.intl.string(E.default["+rYPHD"]),
                              value: av(r),
                              hint: C.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: av(l.cpu_ms_total),
                                  wall: av(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(aR, {
                      label: C.intl.string(E.default["V/nNbs"]),
                      value: C.intl.string(E.default.YKWIxp),
                      hint: C.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(aR, { label: C.intl.string(E.default.ueEMPa), value: av(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(aR, { label: C.intl.string(E.default.vM2krr), value: ab(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(aR, {
                label: C.intl.string(E.default.g1O88C),
                value: ab(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(aR, { label: C.intl.string(E.default.JUZs7g), value: ak(l.build) }),
        ],
    });
}
function a2(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: C.intl.string(E.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(E.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(aT, {
        title: C.intl.string(E.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(aR, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(aR, {
                                  label: C.intl.formatToPlainString(E.default["9TpIQg"], { env: l }),
                                  value: ap(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: ab(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(aP, {
                                      label: C.intl.formatToPlainString(E.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: ap,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function a7(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aF.Mf,
        children: [
            (0, n.jsx)(aM, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(a1, {
                            title: C.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(a1, {
                            title: C.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(a2, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(aX, {
                                title: C.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aQ, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(aX, {
                                title: C.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aZ, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(aX, {
                                title: C.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aJ, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(aX, {
                                title: C.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(a0, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(aL, { analytics: t.analytics }),
                        (0, n.jsxs)(aT, {
                            title: C.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(aR, {
                                    label: C.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? ak(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(aR, {
                                    label: C.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? ak(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function a5(e, t) {
    return String(e).padStart(t, "0");
}
function a4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${a5(n.getHours(), 2)}:${a5(n.getMinutes(), 2)}:${a5(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${a5(n.getMilliseconds(), 3)}` : a;
}
var a3 = l(977129);
let a6 = new Map(),
    a8 = new Map(),
    a9 = 0,
    re = 0;
async function rt(e, t, l) {
    let n = a9,
        a = a6.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < re) return { status: "forbidden" };
    let r = a8.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, a3.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((re = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== a9) return { status: "failed" };
            var l = o.rich;
            for (a6.set(t, l); a6.size > 100;) {
                let e = a6.keys().next();
                if (!0 === e.done) break;
                a6.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    a8.set(t, i);
    let s = await i;
    return (a8.get(t) === i && a8.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function rl() {
    ((a9 += 1), a6.clear(), a8.clear(), (re = 0));
}
function rn(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ra(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function rr(e) {
    switch (e) {
        case "subagent":
            return C.intl.string(E.default["EoY7D+"]);
        case "context":
            return C.intl.string(E.default.KVFrD3);
        case "tool":
            return C.intl.string(E.default["/N6ZU9"]);
        case "delegated":
            return C.intl.string(E.default.HcEbf2);
        default:
            return C.intl.string(E.default.AhOqQs);
    }
}
function ri(e) {
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
let rs = ["model", "tool", "subagent", "delegated", "context"];
function ro(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(ri(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function ru(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let rd = ["arguments", "result", "usage", "diagnostics"];
var rc = l(40715);
let rf = { started: rc.Vf, ok: rc.mo, error: rc.Sr };
function rm(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${rc.Om} ${rf[t] ?? rc.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return C.intl.string(E.default.HpKDyl);
                case "error":
                    return C.intl.string(E.default["5T4Dd0"]);
                default:
                    return C.intl.string(E.default.VbEmf0);
            }
        })(t),
    });
}
let rh = { model: rc.WI, subagent: rc.uM, context: rc.eH, tool: rc.pw, delegated: rc.C8 };
function rx(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: rc.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: rc.D6, children: t }),
            (0, n.jsx)("div", { className: rc.zL, children: l }),
        ],
    });
}
function rg(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(rx, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function rp(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: rc.WA, children: t });
}
function rv(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: rc.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: rc.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function rb(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: rc.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: rc.p8,
                children: [
                    (0, n.jsx)(tq._, { className: rc.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: rc.bG, children: l }),
        ],
    });
}
function rj(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(rx, {
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
            ? C.intl.formatToPlainString(E.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? C.intl.formatToPlainString(E.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(rx, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: rc.Kv,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return C.intl.string(E.default.xO6bcQ);
                            case "content":
                                return C.intl.string(E.default.gpBZRr);
                            default:
                                return C.intl.string(E.default.OZvPXt);
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
function ry(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: rc.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: rc.uh,
                          children: C.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          rx,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: rc.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: rc.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: C.intl.string(E.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? C.intl.string(E.default["1kBG9Z"])
                                                        : C.intl.formatToPlainString(E.default.VGSwo4, {
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
function rk(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : C.intl.string(
                      "loading" === t.status
                          ? E.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? E.default.jEQTot
                            : E.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: rc.E7, children: l });
}
function rN(e) {
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
                rd.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != a6.get(t)) return;
                    let l = new AbortController();
                    return (
                        rt(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = a6.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = a4(l.startedAt, "millis"),
        m = ri(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: rc._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: rc.sy,
                children: (0, n.jsxs)("div", {
                    className: rc.HI,
                    children: [
                        (0, n.jsx)(rm, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${rc.PY} ${rh[m]}`,
                            children: rr(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: rc.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: rc.l5,
                            children: null == l.durationMs ? C.intl.string(E.default.HpKDyl) : rn(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rc.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(rv, {
                      title: C.intl.string(E.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(rj, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(ry, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rk, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(rv, {
                      title: C.intl.string(E.default.KXrf5F),
                      children: [
                          (0, n.jsx)(rg, {
                              label: C.intl.string(E.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(E.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(rg, {
                                    label: C.intl.string(E.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(rx, {
                                    label: C.intl.string(E.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(ry, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(rv, {
                      title: C.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(rp, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(rg, {
                                            label: C.intl.string(E.default.Ran4BY),
                                            value: C.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: ra(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(rg, {
                                            label: C.intl.string(E.default.vPIcyv),
                                            value: C.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: ra(l.systemTokens),
                                                tools: ra(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: ra(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(rg, {
                                            label: C.intl.string(E.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(rg, {
                                            label: C.intl.string(E.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(rg, {
                                            label: C.intl.string(E.default.VyAl6j),
                                            value: C.intl.formatToPlainString(E.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(rg, {
                                            label: C.intl.string(E.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: rc.E7,
                              children: C.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: rc.E7,
                      children: C.intl.string(E.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(rb, {
                      title: C.intl.string(E.default.T7SFyZ),
                      children: (0, n.jsxs)(rp, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(rx, {
                                        label: C.intl.string(E.default.NnBqcd),
                                        value: (0, n.jsx)(eJ.D, {
                                            tag: "div",
                                            className: rc.mi,
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
                                  : (0, n.jsx)(rg, {
                                        label: C.intl.string(E.default.fI6mzD),
                                        value: C.intl.formatToPlainString(E.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(rg, { label: C.intl.string(E.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(rg, { label: C.intl.string(E.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(rg, { label: C.intl.string(E.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(rg, { label: C.intl.string(E.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: rc.Hm,
                                                children: C.intl.string(E.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    rg,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? C.intl.formatToPlainString(E.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : C.intl.formatToPlainString(E.default["/L6GFe"], {
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
                className: rc.E7,
                children: C.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let rw = { model: rc.WI, subagent: rc.uM, context: rc.eH, tool: rc.pw, delegated: rc.C8 };
function rA(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = ri(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return rs.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: rc.M0,
        children: [
            (0, n.jsx)("div", {
                className: rc.pZ,
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
                                            className: `${rc.dL} ${rw[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: rc.z4,
                role: "group",
                "aria-label": C.intl.string(E.default.UZ1OlR),
                children: rs.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: rc.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${rc.A9} ${rw[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: rr(e) }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(E.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: C.intl.formatToPlainString(E.default.w8vPbe, { count: i }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: rn(a),
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
let rS = { model: rc.WI, subagent: rc.uM, context: rc.eH, tool: rc.pw, delegated: rc.C8 };
function rE(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = ri(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: ra(t.promptTokens) })
                : null != t.durationMs
                  ? rn(t.durationMs)
                  : null;
    return (0, n.jsxs)(eJ.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${rc.nM} ${s ? rc.A5 : ""} ${"error" === t.status ? rc.Cr : ""} ${l ? rc.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: rc.sU,
                children: [
                    (0, n.jsx)(rm, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${rc.PY} ${rS[o]}`,
                        children: rr(o),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: rc.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: rc.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: rc.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rc.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rC(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([ag.Ay], () => ag.Ay.getTrace(l), [l]),
        s = (0, D.bG)([ag.Ay], () => ag.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => rl, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [f, m] = a.useState(!1),
        h = a.useRef(null),
        x = a.useRef(null),
        g = a.useRef(null),
        p = a.useRef(null),
        b = a.useId(),
        j = a.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        y = a.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, la.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, la.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, n4.A)({
            resizableDomNodeRef: x,
            orientation: n4.R.VERTICAL_TOP,
            getClampedValue: N,
            onElementResize: (e) => c(k(e)),
            onElementResizeStart: () => m(!0),
            onElementResizeEnd: () => m(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        A = a.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), w(e));
            },
            [w],
        ),
        S = a.useCallback((e) => {
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
            null != t && (e.preventDefault(), c((e) => (0, la.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        M = a.useMemo(() => ro(i, r), [i, r]),
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
                    .map((e, t) => ({ ...e, index: t, entries: ro(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = ru(M, o),
        P = R?.kind === "tool" ? ru(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = M[M.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = g.current?.getScrollerNode();
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
              className: rc.uP,
              ref: h,
              children: (0, n.jsx)(aV, {
                  state: s,
                  emptyTitle: C.intl.string(E.default.Iyt8OJ),
                  emptyBody: C.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${rc.uP} ${f ? rc.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: rc.DK,
                      children: [
                          (0, n.jsx)(rA, { entries: i }),
                          (0, n.jsx)(aG, { state: s }),
                          0 === M.length
                              ? (0, n.jsx)("div", {
                                    className: rc.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: g,
                                    className: rc.Ns,
                                    children: [
                                        (0, n.jsx)(aW, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(E.default["QATZ+A"]),
                                            className: rc.p_,
                                            children: T.map((e) => {
                                                let t = a4(e.startedAt),
                                                    l = C.intl.formatToPlainString(E.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: rc.mf,
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
                                                                              children: rn(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: rc.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rE,
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
                                    "aria-label": C.intl.string(E.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: rc.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: x,
                                    className: rc.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rN, {
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
var rI = l(402879);
function rM(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([ag.Ay], () => ag.Ay.getTrace(t), [t]),
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
            (0, rI.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: rc.ED,
                children: (0, n.jsx)(aU.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(E.default.NfncNw),
                    "aria-label": C.intl.string(E.default.NfncNw),
                }),
            }),
            (0, n.jsx)(t4.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: t4.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(t3.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(t6.rX, {
                            children: (0, n.jsx)(t6.Dr, {
                                id: "export",
                                label: C.intl.string(E.default.A3Z3ar),
                                disabled: 0 === i.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(tw.K, {
                        ...e,
                        buttonRef: s,
                        icon: l5.MoreHorizontalIcon,
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
var rT = l(497243);
function rR(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, u] = a.useState(""),
        c = (0, D.bG)([aa.A], () => aa.A.isDeveloper),
        m = (0, D.bG)([ax], () => ax.getStatus(t), [t]),
        h = (0, D.bG)([ax], () => ax.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let x = a.useCallback(() => (0, f.R7)(t), [t]),
        g = a.useCallback(() => {
            (0, ar.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ax.getStatus(t),
                        last_turn_usage: ax.getLastTurnUsage(t),
                        last_compaction: ax.getLastCompaction(t),
                        last_compaction_decline: ax.getLastCompactionDecline(t),
                        model_calls: ax.getModelCalls(t),
                        logs: ag.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, n8.P0)((0, n9.o)(C.intl.string(E.default.sDSDiO), ae.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(E.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rT.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: at.CopyIcon,
                            tooltip: C.intl.string(E.default["21ipY1"]),
                            onClick: g,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: al.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rT.rf,
                children: [
                    (0, n.jsxs)(an.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(E.default.uNyR86),
                        className: rT.vR,
                        children: [
                            (0, n.jsx)(an.V.Item, { id: "logs", children: C.intl.string(E.default["1mpzdJ"]) }),
                            (0, n.jsx)(an.V.Item, { id: "worker", children: C.intl.string(E.default.whGHLD) }),
                            (0, n.jsx)(an.V.Item, { id: "agent", children: C.intl.string(E.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(an.V.Item, { id: "trace", children: C.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(aY, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(a7, { status: m, fetchState: h, onRefresh: x })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rT.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rT.XH,
                                          children: (0, n.jsx)(rM, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, n.jsx)(rC, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(az, { projectId: t, status: m, fetchState: h, onRefresh: x, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rP = l(333007),
    r_ = l(621466),
    rL = l(103557),
    rF = l(97808),
    rD = l(778712),
    r$ = l(365912),
    rO = l(775121),
    rz = l(486020),
    rq = l(277437);
function rU(e) {
    let {
            projectId: t,
            at: l,
            bounds: r,
            kind: s,
            value: o,
            onChange: u,
            onSubmit: d,
            onDismiss: c,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
        } = e,
        {
            drafts: x,
            addFiles: g,
            removeDraft: p,
            settled: v,
            takeRefs: b,
        } = lN({ projectId: t, surface: "design", onUploadFile: h }),
        j = a.useRef(null),
        y = (f || x.length > 0) && v && !m,
        k = a.useCallback(() => {
            if (!y) return;
            let e = b();
            d(e.length > 0 ? e : void 0);
        }, [y, b, d]),
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
        [S, I] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = A.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = S?.height ?? 44,
        T = r.left + 8,
        R = r.top + 8,
        P = Math.max(l.x, T),
        _ = Math.min(Math.max(l.y + 32 + 4, R), Math.max(R, r.top + r.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rq.M0, { [rq.ho]: N && !m, [rq.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rq.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(e6.m, {
                position: "bottom",
                text: C.intl.string(E.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rq.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(E.default.d6Rqlu),
                    children: (0, n.jsx)(t5.H, { size: "custom", color: "currentColor", className: rq.WW }),
                }),
            }),
            (0, n.jsx)(le.y, {
                autoFocus: !0,
                rows: 1,
                className: rq.hF,
                value: o,
                placeholder: "" === s ? C.intl.string(E.default.FK09JH) : `Edit ${s}`,
                "aria-label": C.intl.string(E.default["qR+sGX"]),
                onChange: (e) => u(e.target.value),
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            x.length > 0
                ? (0, n.jsx)("div", {
                      className: rq.ZO,
                      children: x.map((e) => (0, n.jsx)(lw, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rB = l(320510);
function rG(e) {
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
function rV(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rG(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rW = l(940107),
    rH = l(42843);
let rK = { x: 25, y: 21 };
function rY(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rX(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rQ(e, t, l, n) {
    let a = rX(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rZ(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rJ(e) {
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
function r0(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, eW.Q_)(o),
        c = (0, nv.o4)(o),
        m = (0, ty.useHasAnyModalOpen)(),
        h = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        x = h?.id ?? null,
        [g, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, S] = a.useState(null),
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
        K = u && !c && !m;
    null == O || (K && O.projectId === o) || z(null);
    let Y = O?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => eU(Y, "design");
    }, [Y]),
        a.useEffect(() => {
            if (!K) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(i());
                p((t) => (rY(t, e) ? t : e));
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
                (0, rB.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rJ(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, eW._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
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
    let Q = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == g || null == o) return;
        if (null == b) {
            Q.current = g;
            return;
        }
        if (rY(Q.current, g)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Q.current = g;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rB.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = rJ(e.response);
                        null != l && (j(l), (0, eW._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rG(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eW.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, g, b, d, o, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), z(null), H(null), j(null));
                };
        }, [K]));
    let Z = a.useRef(null),
        J = a.useRef(null),
        ee = a.useRef(!1),
        et = a.useRef(!1);
    a.useEffect(() => {
        ((et.current = K), K || ((Z.current = null), (J.current = null), (P.current = null), M(!1)));
    }, [K]);
    let el = a.useCallback(
            function e() {
                if (ee.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let l = i();
                null != l &&
                    ((ee.current = !0),
                    (0, rW.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rV, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || r3(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && $(!0);
                                else {
                                    let e = (0, ew.ts)(t.target);
                                    (L((t) => (r4(t, e) ? t : e)),
                                        S((e) => {
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
        en = a.useCallback(() => {
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
            let e = setTimeout(() => U(null), r7);
            return () => clearTimeout(e);
        }, [q]));
    let ea = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        er = null != b || N,
        ei = a.useMemo(() => b?.elements ?? [], [b]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: g, scale: ea };
    }, [g, ea]);
    let eo = a.useCallback(
            (e, t, l) => {
                null != o &&
                    (eU(o, "design"),
                    H(null),
                    (B.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: l, label: (0, ew.ts)(e) }));
            },
            [o],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ec = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = R.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ec);
    let ef = a.useCallback(
            (e) => {
                if (null == g || null != W) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), M(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > r5 || Math.abs(e.clientY - O.at.y) > r5) && (B.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, g);
                if (F) {
                    let e = (0, ew.jo)(ei, t.x, t.y),
                        l = null != e && r3(e, g, ea) ? null : e;
                    if (null != l) {
                        let e = (0, ew.ts)(l);
                        L((t) => (r4(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [g, ea, er, ed, F, ei, O, W, ec, el],
        ),
        em = a.useCallback(() => {
            (M(!1), S(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !er || F || null != O || null != W) return;
        let e = P.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, er, F, O, W, el]);
    let eh = a.useCallback(
            (e) => {
                if (null != O || null != W) {
                    (en(), H(null));
                    return;
                }
                if (null == A || null == g) return;
                let t = ed(e, g);
                eo(A, (0, ew.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, g, ed, O, W, eo, en],
        ),
        ex = a.useCallback(() => {
            null != o && (S(null), (0, eW.PS)(o));
        }, [o]),
        eg = a.useCallback(() => {
            null != o &&
                (null != O
                    ? en()
                    : W?.confirmingRemove === !0
                      ? H({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? H(null)
                        : ex());
        }, [o, O, W, en, ex]),
        ep = a.useRef(eg),
        ev = a.useRef(ex);
    a.useLayoutEffect(() => {
        ((ep.current = eg), (ev.current = ex));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rO.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rO.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, r_.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, r$.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ev.current();
        }
    }, [K, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != W || 0 === ei.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : ei.findIndex((e) => e.ref === A.ref);
                    S(ei[(l + (t ? 1 : -1) + ei.length) % ei.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    eo(A, ew.F6, { x: (g?.left ?? 0) + A.rect.x * ea, y: (g?.top ?? 0) + A.rect.y * ea }));
            },
            [o, O, W, ei, A, eo, eg, g, ea],
        ),
        ey = a.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    (((0, ew.to)(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, f.dv)(o, (0, ew.v_)(O.target, O.draft), e), en(), S(null)));
            },
            [o, O, en],
        ),
        ek = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, f.vX)(o, e)), [o]),
        eN = a.useCallback(() => {
            null == o ||
                null == W ||
                null == x ||
                ((0, ew.to)(W.draft) && ((0, eW.dy)(o, x, W.id, W.draft.trim()), H({ ...W, editing: !1 })));
        }, [o, W, x]),
        eA = a.useCallback(() => {
            null != o && null != W && null != x && ((0, eW.PR)(o, x, W.id), H(null));
        }, [o, W, x]),
        eS = u
            ? y
                ? C.intl.string(E.default.jQQ8i2)
                : N
                  ? C.intl.string(E.default.zvU2QH)
                  : C.intl.formatToPlainString(E.default.A4HDMU, { count: d.length })
            : "",
        eE = K && null != g,
        eC = I && null == W,
        eI = null == W ? null : d.find((e) => e.id === W.id),
        eM = O?.target ?? eI?.target ?? null,
        eT = O ?? q,
        eR = O ?? (q?.instant === !0 ? null : q),
        eP =
            null != eI && null != g
                ? (function (e, t) {
                      let { left: l, top: n } = rZ(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rQ(eI.target, eI.anchor, g, ea), g)
                : null;
    return (0, rP.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rH.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rH.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eE
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rH.MT,
                                  style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                  "data-plain-cursor": eC ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": C.intl.string(E.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ef,
                                  onMouseLeave: em,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != A && null == O && null == W ? (0, n.jsx)(r6, { box: rX(A, g, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: T,
                                  className: rH.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rH.xz,
                                      "data-shown": null != A && null == W && null == O ? "" : void 0,
                                      "data-instant": G ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rH.Ux,
                                          children: [
                                              null == _
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rH.Tl, children: _.kind }),
                                              null == _ || "" === _.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rH.kh, children: [" ", _.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rH.Y,
                                  children: eC
                                      ? (0, n.jsx)(l7.A, { className: rH.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rH.aZ,
                                        style: { transform: `translate3d(${eR.at.x + 12}px, ${eR.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rH.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rH.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rH.Tl, children: eR.label.kind }),
                                                    "" === eR.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rH.kh,
                                                              children: [" ", eR.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eM
                                  ? (0, n.jsx)("div", { className: rH.D0, style: rX(eM, g, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rQ(e.target, e.anchor, g, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rH.xL,
                                          style: { ...rZ(l, g), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(E.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ew.iw)(e.target),
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
                                              (e.stopPropagation(), en(), H(a));
                                          },
                                          children: (0, n.jsx)(r1, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eT || null == o
                                  ? null
                                  : (0, n.jsx)(rU, {
                                        projectId: o,
                                        at: { x: eT.at.x + 12, y: eT.at.y + 12 },
                                        bounds: g,
                                        kind: eT.label.kind,
                                        value: eT.draft,
                                        canSubmit: null != O && (0, ew.to)(eT.draft),
                                        onChange: (e) => {
                                            null != O && z({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        closing: null == O,
                                    }),
                              null != eI && null != W && null != eP
                                  ? (0, n.jsxs)(r2, {
                                        point: eP,
                                        frame: g,
                                        authorId: eI.authorId,
                                        title: (0, ew.iw)(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            W.confirmingRemove ? H({ ...W, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            W.editing || W.confirmingRemove || H(null);
                                        },
                                        children: [
                                            W.editing
                                                ? (0, n.jsx)(rL.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(E.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: W.draft,
                                                      maxLength: ew.gq,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...W, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rH.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, eW.zz)(eI, x)
                                                ? (0, n.jsx)("div", {
                                                      className: rH.eB,
                                                      children: W.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rH.nv,
                                                                        children: C.intl.string(E.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...W, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eA,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.ncz32j),
                                                                        onClick: () =>
                                                                            H({
                                                                                ...W,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    W.editing
                                                                        ? (0, n.jsx)(X.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ew.to)(W.draft),
                                                                              text: C.intl.string(E.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, n.jsx)(X.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(E.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...W,
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
function r1(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getUser(t), [t]);
    return (0, n.jsx)(rF.eu, {
        src: null == l ? null : rz.Ay.getUserAvatarURL(l),
        size: rD._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function r2(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: x, children: g } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rK);
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
        S = {
            left: k,
            top: N,
            "--custom-vibegrations-card-origin-x": `${w}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: rH.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: x,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rH.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rH.ip, children: (0, n.jsx)(r1, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rH.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rH.zI, children: g }),
        ],
    });
}
let r7 = 300,
    r5 = 2;
function r4(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function r3(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function r6(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rH.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var r8 = l(11055),
    r9 = l(175841),
    ie = l(533140),
    it = l(342667);
function il(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: r } = e,
        { stop: i, stopping: s } = (function (e) {
            let t = (0, D.bG)([eS.Ay], () => null != e && eS.Ay.isThinking(e)),
                [l, n] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || n(!1)),
                a.useEffect(() => {
                    if (!l) return;
                    let e = setTimeout(() => n(!1), 5e3);
                    return () => clearTimeout(e);
                }, [l]));
            let s = a.useCallback(() => {
                null != e && (n(!0), (0, f.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: l };
        })(l),
        o = "controlling" === t;
    return (0, n.jsxs)("div", {
        className: it.M0,
        "data-phase": t,
        "data-testid": "vibegrations-control-notice",
        children: [
            (0, n.jsxs)("div", {
                className: it.sp,
                children: [
                    (0, n.jsx)(r9.SparklesIcon, { size: "sm", color: "currentColor" }),
                    o ? (0, n.jsx)(nb.i, { size: 12, color: "currentColor" }) : null,
                    (0, n.jsxs)("div", {
                        className: it.f4,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: it.w9,
                                children: C.intl.string(o ? E.default.ydhvN1 : E.default["7U6tIB"]),
                            }),
                            o
                                ? (0, n.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "none",
                                      className: it.Rb,
                                      children: C.intl.string(E.default.NldIIG),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            o
                ? (0, n.jsxs)("div", {
                      className: it.lC,
                      children: [
                          null != r
                              ? (0, n.jsx)(X.$, {
                                    variant: "overlay-secondary",
                                    size: "sm",
                                    text: C.intl.string(E.default.kj5epw),
                                    onClick: r,
                                })
                              : null,
                          null != i
                              ? (0, n.jsx)(X.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: C.intl.string(E.default["2HalWx"]),
                                    loading: s,
                                    onClick: i,
                                    "data-testid": "vibegrations-control-stop",
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function ia(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, nv.o4)(null != l && l === r ? t : null),
        d = (function (e) {
            let [t, l] = a.useState(e),
                [n, r] = a.useState(!1);
            return (e !== t && (l(e), r(!e)),
            a.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(u),
        c = (0, ty.useHasAnyModalOpen)(),
        f = (0, ie.V0)(s);
    a.useEffect(() => {
        u && f && null != s && (0, ie.c2)(s);
    }, [u, f, s]);
    let [m, h] = a.useState(null),
        x = "idle" !== d;
    a.useEffect(() => {
        if (!x) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(i());
            h((t) =>
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
    }, [x, i]);
    let g = "idle" !== d && null != m && !c,
        p = g && "controlling" === d,
        v = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height };
    return (0, rP.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: it.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children:
                        "controlling" === d
                            ? C.intl.string(E.default.dIE9zO)
                            : "handoff" === d
                              ? C.intl.string(E.default["7U6tIB"])
                              : "",
                }),
                p
                    ? (0, n.jsx)("div", {
                          className: it.om,
                          style: v,
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
                g
                    ? (0, n.jsx)("div", {
                          className: it.D,
                          style: v,
                          children: (0, n.jsx)(il, { phase: d, projectId: t, onOpenPublishedApp: o }),
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var ir = l(237528),
    ii = l(664121),
    is = l(95477),
    io = l(724401);
function iu(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function id(e) {
    let t,
        { projectId: l, installScope: r, onClose: i } = e,
        s = "user" === r ? ["stable"] : ["preview", "stable"],
        [u, c] = a.useState(s[0] ?? "stable"),
        [h, x] = a.useState({ status: "loading" }),
        [g, p] = a.useState(""),
        [b, j] = a.useState(""),
        [y, k] = a.useState({ phase: "idle" }),
        N = "busy" === y.phase,
        [w, A] = a.useState(0),
        S = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${u}`;
        return (
            Promise.all([(0, f.DM)(l, u), (0, f.ms)(l, u)])
                .then((l) => {
                    let [n, a] = l;
                    e || x({ status: "loaded", key: t, points: n, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || x({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [l, u, w]);
    let I = "loading" !== h.status && h.key === `${l}|${u}` ? h : { status: "loading" },
        M = a.useCallback(
            (e, t) => {
                (0, tu.A)({
                    title: C.intl.string(E.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? C.intl.formatToPlainString(E.default["0lt6bH"], { target: e })
                            : C.intl.formatToPlainString(E.default.zVcDfj, {
                                  environment: C.intl.string(
                                      "preview" === u ? E.default["/kYdZe"] : E.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: C.intl.string(E.default.ZlKerR),
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
                                              text: C.intl.string(E.default.kIWqXR),
                                          }),
                                          S())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: u,
                                                tone: "danger",
                                                text: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                            }),
                                            S())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(E.default["2xSPXh"]),
                                              }),
                                              S())
                                            : k({
                                                  phase: "settled",
                                                  environment: u,
                                                  tone: "danger",
                                                  text: C.intl.string(E.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: u,
                                        tone: "danger",
                                        text: C.intl.string(E.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [u, s, S],
        ),
        T = a.useCallback(() => {
            (k({ phase: "busy", environment: u, kind: "create" }),
                (0, f._m)(l, u, g)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: u,
                                tone: "positive",
                                text: C.intl.string(E.default.mfAoFT),
                            }),
                            S());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: u, tone: "danger", text: C.intl.string(E.default.uhhqP3) });
                    }));
        }, [l, u, g, S]),
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
                ? (0, n.jsx)("div", { className: io.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: io.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: io.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(td.Ip, {
                          className: io.p_,
                          children: (0, n.jsx)("div", {
                              className: io.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, tf.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: tf._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: io.KW,
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return C.intl.string(E.default.h4zhWL);
                                                          case "undo":
                                                              return C.intl.string(E.default["c/tNny"]);
                                                          default:
                                                              return C.intl.string(E.default["jViU+0"]);
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
                                                  (0, n.jsx)(ir.v, {
                                                      text: C.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: io.AD,
                                                title: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: io.Pf,
                                                        children: e.label,
                                                    }),
                                                    r,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            eJ.D,
                                            {
                                                className: io.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          M(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, f.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: io.Pf,
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
            className: io.nd,
            "aria-label": C.intl.string(E.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: ii.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: io.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: io.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(an.V, {
                                        selectedItem: u,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(E.default.CNvRyJ),
                                        className: io.vR,
                                        children: [
                                            (0, n.jsx)(an.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(an.V.Item, {
                                                id: "stable",
                                                children: C.intl.string(E.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        C.intl.formatToPlainString(E.default.l07ism, { days: 30 }),
                                        null != R
                                            ? ` ${new Date(R.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === D.kind
                                    ? (0, n.jsxs)("div", {
                                          className: io.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: C.intl.string(E.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === D.kind
                                      ? (0, n.jsx)("div", {
                                            className: io.lm,
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
                            className: io.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: io.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: io.Fv,
                                            children: (0, n.jsx)(is.k, {
                                                label: C.intl.string(E.default.hJb78b),
                                                value: g,
                                                onChange: p,
                                                maxLength: 200,
                                                disabled: N,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(X.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: C.intl.string(E.default["14UarN"]),
                                            onClick: T,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: io._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: io.kv,
                                            children: (0, n.jsx)(is.k, {
                                                label: C.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: iu(_),
                                                max: iu(P),
                                                disabled: N || null == R,
                                                onChange: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(X.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: C.intl.string(E.default["3D/vYN"]),
                                            disabled: N || !F,
                                            onClick: () => {
                                                null != L && M(new Date(L).toLocaleString(), () => (0, f.dz)(l, u, L));
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
var ic = l(120426),
    im = l(873727),
    ih = l(147248),
    ix = l(418842),
    ig = l(363195),
    ip = l(885386),
    iv = l(171936),
    ib = l(796036);
function ij(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            header: d,
            mainClassName: c,
            content: f,
            sidebar: m,
            onOpenPublishedApp: h,
        } = e,
        [x, g] = a.useState(null),
        p = (0, u.A)(r, o),
        v = p?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([ig.A], () => (0, im.x4)(ig.A.theme)),
            n = (0, D.bG)([ih.A], () => ih.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([ln.Ay], () => ({
                reducedMotion: ln.Ay.useReducedMotion,
                fontScale: (0, im.U0)(),
                highContrast: ln.Ay.isHighContrastModeEnabled,
                forcedColors: ln.Ay.useForcedColors,
                underlineLinks: ln.Ay.alwaysShowLinkDecorations,
            })),
            d = ip.hH.useSetting(),
            c = (0, ix.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            x = a.useRef(null),
            g = a.useCallback(() => {
                let n = (0, ic.F)(e, t);
                if (null == n) return;
                x.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, im.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rW.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, i, t, s, d, e, r, c, u]),
            p = a.useRef(g);
        a.useLayoutEffect(() => {
            p.current = g;
        });
        let v = a.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), m.current || p.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (m.current = !1),
                () => {
                    m.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                v();
            }, [n, v]),
            a.useLayoutEffect(() => {
                (g(), v());
            }, [v, g]),
            a.useLayoutEffect(() => {
                let l = (0, ic.F)(e, t);
                null != l && l !== x.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, ic.F)(e, t) && ((x.current = null), v());
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
    })(x, v),
        a.useEffect(() => {
            if (null != t) return (0, iv.mn)(t, () => (0, ic.F)(x, v));
        }, [t, x, v]));
    let b = a.useCallback(() => (0, ic.F)(x, v), [x, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: g, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(ia, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(r0, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function iy(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
            header: h,
            chatOpen: x,
            onCloseChat: g,
            chatHeaderAction: p,
            versionHistoryOpen: v = !1,
            restorePointsOpen: b = !1,
            onCloseRestorePoints: j,
            installScope: y = null,
            onCloseVersionHistory: k,
            onRestoreVersion: N,
            debugOpen: w = !1,
            onCloseDebug: A,
            restoreState: S,
            previewReady: I,
            previewGate: M,
            channelMessages: T,
            availability: R,
            activeMode: P,
            widgetApplicationId: _,
            onOpenPublishedApp: L = null,
        } = e,
        F = a.useRef(null),
        [D, $] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === s.U.MAIN) return ((0, c.HV)(r), () => (0, c.HV)(null));
    }, [r, m.type]),
        a.useEffect(() => {
            null != t && ((0, f.Hc)(t), (0, ib.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = F.current;
            if (null == e) return;
            function t() {
                null != e && $(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useLayoutEffect(() => () => (0, c.Zq)(0), []));
    let O = Math.max(360, D - 320),
        z = null != T ? T.open : x,
        q = x || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: F,
        className: ej.LB,
        children: (0, n.jsx)(ij, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: z }),
            content: (0, n.jsx)(ex, {
                applicationId: r,
                previewApplicationId: u,
                surface: m,
                previewReady: I,
                previewGate: M,
                availability: R,
                activeMode: P,
                widgetApplicationId: _,
            }),
            sidebar:
                null != T
                    ? (0, n.jsx)(n6, {
                          open: T.open,
                          maxWidth: O,
                          onWidthChange: c.Zq,
                          children: T.open
                              ? (0, n.jsx)(ey, { channel: T.channel, guild: T.guild, onClose: T.onClose })
                              : null,
                      })
                    : null != t && q
                      ? (0, n.jsx)(n6, {
                            open: x,
                            maxWidth: O,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(rR, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            tg,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(id, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(r8.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == g
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: o.P,
                                                                        tooltip: C.intl.string(E.default.YdgE0j),
                                                                        onClick: g,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: C.intl.string(C.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ej.cb,
                                                      children: (0, n.jsx)(
                                                          n1,
                                                          { projectId: t, restoreState: S, onRestoreVersion: N },
                                                          t,
                                                      ),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
