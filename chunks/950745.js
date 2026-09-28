l.d(t, { A: () => ix });
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
    S = l(697744),
    E = l(50617),
    C = l(375708),
    I = l(296167);
function T(e) {
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
var M = l(328284);
function R(e) {
    let { title: t, body: l, wide: a = !1, children: r } = e;
    return (0, n.jsxs)("div", {
        className: i()(M.Bf, a && M.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: M.Ux,
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
            return (0, n.jsx)(T, { className: L.qs });
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
    q = l(334738),
    z = l(688438),
    U = l(355622),
    B = l(734057),
    G = l(531685),
    W = l(365971),
    V = l(362417);
function H(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: V.f,
        children: [
            (0, n.jsx)($.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function K() {
    return (0, n.jsx)("div", { className: V.f, children: (0, n.jsx)(m.y, {}) });
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
            let e = (0, W.Xg)();
            return (
                (0, q.yl)(t, e),
                () => {
                    (0, q.dm)(t, e);
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
                  className: V.g,
                  children: (0, n.jsx)(z.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
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
        f = (0, u.A)(t, r),
        { data: p, isLoading: v } = (0, h.YY)(t ?? void 0);
    if (
        (a.useEffect(() => {
            s?.type === "permissions" && null != f && (0, g.A)().leaveFrame(f.id);
        }, [f, s?.type]),
        s?.type === "checking")
    )
        return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    if (s?.type === "permissions")
        return (0, n.jsx)("div", {
            className: eh.q,
            children: null == s.authorizeProps ? (0, n.jsx)(m.y, {}) : (0, n.jsx)(ee, { ...s.authorizeProps }),
        });
    if (!i) return (0, n.jsx)(T, { className: eh.q });
    if (null == t) return null;
    if (v && null == p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    let b = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
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
                children: (0, n.jsx)(z.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
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
    eT = l(839214),
    eM = l(673724);
let eR = [],
    eP = 1,
    e_ = (0, eT.D)(() => ({ draftsByProject: {} }));
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
function eq(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eO(e, t.ref.id));
}
function ez(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = e_.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? eR) l ? eq(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: r, ...i } = n;
    e_.setState({ draftsByProject: i });
}
function eU(e, t) {
    let l = eF(e, t);
    if (0 !== l.length) {
        for (let t of l) eq(e, t);
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
    for (let e of Object.keys(e_.getState().draftsByProject)) ez(e, { deleteFromWorker: !0 });
}),
    eI.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ez(t, { deleteFromWorker: !1 });
    }));
var eW = l(66708),
    eV = l(74029),
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
var tu = l(530557),
    td = l(872162),
    tc = l(192308),
    tf = l(479191);
function tm(e) {
    let { projectId: t, request: r, awaiting: i } = e,
        s = a.useCallback(() => {
            (0, tc.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: r });
            });
        }, [t, r]),
        o = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: tu.R })), [r.fields]);
    return (0, n.jsxs)("article", {
        className: tf.L,
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
            (0, n.jsx)(td.C, { label: C.intl.string(E.default["/e28TK"]), size: "xs", items: o }),
            (0, n.jsx)("div", {
                className: tf.s,
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
var th = l(408278),
    tg = l(349735),
    tx = l(973e3);
function tp(e) {
    let { projectId: t, request: l, onDismiss: a } = e;
    return (0, n.jsx)(tg.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: r, saving: i, submit: s } = e;
            return (0, n.jsxs)("form", {
                className: tx.Mk,
                onSubmit: (e) => {
                    (e.preventDefault(), s());
                },
                children: [
                    (0, n.jsxs)("div", {
                        className: tx.TS,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                tag: "span",
                                children: C.intl.string(E.default.wgDhiQ),
                            }),
                            null == a
                                ? null
                                : (0, n.jsx)(th.K, {
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
                        className: tx.p0,
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
var tv = l(196582);
let tb = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    tj = {
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
    ty = {
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
function tk(e) {
    return { ...ty[e], name: C.intl.string(tj[e]()) };
}
function tN(e) {
    return tb.includes(e) ? tk(e) : void 0;
}
function tw(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tb.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tb[(t + l) % tb.length]);
            }),
            n
        );
    })(e))
        t.set(l, tk(n));
    return t;
}
var tA = l(683063),
    tS = l(705754),
    tE = l(883455),
    tC = l(13699);
function tI(e) {
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
                                    className: tC.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            tE.A,
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
                                      className: tC.iq,
                                      children: (0, n.jsx)(tS.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tv.A, {
        glyph: (0, n.jsx)(tA.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: eQ(o),
            position: "left",
            children: (0, n.jsx)("span", {
                className: tC.nC,
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
var tT = l(847374),
    tM = l(320448),
    tR = l(140735),
    tP = l(329456);
let t_ = [];
function tL(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: i()(tP.xL, {
            [tP.Vb]: "in_progress" === t,
            [tP.cT]: "completed" === t,
            [tP.GZ]: "unfinished" === t,
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
                className: tP.Qd,
                itemClassName: tP.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: tP.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: tP.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function tF(e) {
    let { agents: t, active: l } = e,
        r = a.useMemo(() => (l ? t : t_), [l, t]),
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
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, n.jsxs)("span", {
        className: tP.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: r } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    tA.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: r,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: tP.MA,
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
                      className: tP.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tD(e) {
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
            ((t = (s ?? t_).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? t_) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: tP.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: i()(tP.AS, { [tP.J1]: "completed" === l }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(tL, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: tP.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: tP.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(tF, { agents: d.get(e.id) ?? t_, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != r
                ? (0, n.jsxs)("li", {
                      className: tP.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(tL, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tP.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: tP.Qq, children: r }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function t$(e) {
    let { todos: t, provisional: l, agents: r, announceProgress: i = !0, live: s = !0, superseded: o = !1 } = e,
        u = a.useId(),
        [d, c] = a.useState(!o),
        [f, m] = a.useState(o);
    f !== o && (m(o), c(!o));
    let h = a.useCallback(() => c((e) => !e), []),
        { completed: g, total: x } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === x) return null;
    let p = C.intl.formatToPlainString(E.default.bQvqly, { completed: g, total: x }),
        b = C.intl.formatToPlainString(E.default["QG/EiF"], { completed: g, total: x }),
        j = d ? tT.a : tM._;
    return (0, n.jsxs)(e2, {
        title: C.intl.string(E.default.qCRC6c),
        trailing: (0, n.jsxs)("span", {
            className: tP.ZY,
            children: [
                (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: p }),
                o
                    ? (0, n.jsx)(eJ.D, {
                          className: tP.L$,
                          onClick: h,
                          "aria-expanded": d,
                          "aria-controls": u,
                          "aria-label": C.intl.string(d ? E.default.fIBJas : E.default.SVhXLT),
                          children: (0, n.jsx)(j, { size: "xs", color: "currentColor" }),
                      })
                    : null,
            ],
        }),
        className: tP.Nr,
        headerClassName: d ? void 0 : tP.RG,
        "data-vibegrations-todo-card": !0,
        "data-superseded": o ? "true" : void 0,
        children: [
            i && !o ? (0, n.jsx)(tR.A, { role: "status", "aria-live": "polite", children: b }) : null,
            (0, n.jsx)("div", {
                id: u,
                className: tP.rf,
                hidden: !d,
                children: (0, n.jsx)(tD, { todos: t, provisional: l, agents: r, live: s }),
            }),
        ],
    });
}
var tO = l(744239),
    tq = l(229775),
    tz = l(165648);
function tU(e) {
    let t = tw(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tN(e.task.helperMark) : void 0,
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
function tB(e) {
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
            closed: g = !1,
            segmentDurationMs: x,
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
            className: tC.pj,
            "data-live": !1,
            children: (0, n.jsx)(tv.A, {
                glyph: (0, n.jsx)(eK.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(E.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = r ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, eA.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = tw(k.map((e) => e.taskId)),
        w = !g && (r || k.some((e) => "running" === e.task.status)),
        A = tU(k);
    return (0, n.jsx)(tv.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: tC.pj,
            "data-live": w,
            children: [
                (0, n.jsx)(eH.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: r,
                    closed: g,
                    durationMs: b,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let a = null != e.task.helperMark ? tN(e.task.helperMark) : void 0,
                        r = a ?? N.get(e.taskId);
                    return null == r
                        ? null
                        : (0, n.jsx)(
                              tI,
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
                          className: tC.YO,
                          children: (0, n.jsx)(t$, { todos: j, provisional: c, agents: A, live: i, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function tG(e) {
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
            onApprovePlan: g,
            sideReply: x = !1,
            hoistedProse: p = !1,
            hoistedAttachmentsHost: b,
        } = e,
        j = a.useMemo(
            () => eZ({ steps: l, content: r, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [l, r, s, u],
        ),
        { streamed: y, lastStreamedMessage: k, showsClosingMessage: N, closingContent: w } = j,
        A = (p ? b : void 0) ?? j.attachmentsHost,
        S = N && !p,
        I = null == u ? null : (0, n.jsx)(e3.A, { projectId: t, attachments: u }),
        T = null == I ? null : (0, n.jsx)("div", { className: tC.MT, children: I }),
        M = x
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: tC.ue,
        children: [
            y.length > 0 && !p
                ? (0, n.jsx)("ol", {
                      className: tC.dO,
                      children: y
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tC.DV,
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: tz.PT,
                                              children: eY.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === A && e === k ? T : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(to, { projectId: t, proposal: s, onApprove: g })
                : S
                  ? (0, n.jsxs)("div", {
                        className: i()(tC.ky, tq.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: i()(tz.PT, tC.cW),
                                children: eY.A.parse(w, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === A ? T : null,
                            M,
                        ],
                    })
                  : null,
            null != d
                ? (0, n.jsx)("div", {
                      className: i()(tC.ky, tq.XR, { [tO.O]: null != c }),
                      children: (0, n.jsx)(tm, { projectId: t, request: d, awaiting: c }),
                  })
                : null,
            null != f
                ? (0, n.jsx)("div", {
                      className: i()(tC.ky, tq.XR),
                      children: (0, n.jsx)(tp, { projectId: t, request: f }),
                  })
                : null,
            "standalone" !== A && ("closing" !== A || S) ? null : I,
            null != o && o.length > 0 ? (0, n.jsx)(e4, { ideas: o, pickedIdeaIds: h, onPick: m }) : null,
            S ? null : M,
        ],
    });
}
var tW = l(864970),
    tV = l(146806),
    tH = l(475358),
    tK = l(81369),
    tY = l(922016),
    tX = l(980707),
    tQ = l(477782),
    tZ = l(717400),
    tJ = l(663341),
    t0 = l(826745),
    t1 = l(783977),
    t2 = l(559647),
    t7 = l(775602),
    t5 = l(435558),
    t4 = l.n(t5),
    t3 = l(506774);
let t6 = "VibegrationsComposerDrafts";
function t8() {
    return t3.w.get(t6) ?? {};
}
let t9 = new Map(),
    le = t4().throttle(() => {
        if (0 === t9.size) return;
        let e = t8();
        for (let [t, l] of t9) "" === l ? delete e[t] : (e[t] = l);
        (t9.clear(), t3.w.set(t6, e));
    }, 1e3);
class lt extends D.Ay.Store {
    getDraft(e) {
        let t = t9.get(e);
        return null != t ? t : (t8()[e] ?? "");
    }
}
let ll = new lt(eI.h, {
    LOGOUT: function () {
        return (t9.clear(), le.cancel(), t3.w.remove(t6), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (t9.set(t, l), le(), "" === l && le.flush(), !1);
    },
});
var ln = l(43105),
    la = l(252510);
let lr = [E.default.ZK2O25, E.default["122Ir6"], E.default["9KCASa"]];
function li(e) {
    let { targetElementRef: t, onDismiss: l } = e,
        r = a.useMemo(() => [{ text: C.intl.string(E.default.sZCqrE), onClick: l }], [l]);
    return (0, n.jsx)(ln.A, {
        targetElementRef: t,
        title: C.intl.string(E.default.n8wtkv),
        body: C.intl.format(E.default.Oaq2Cc, {
            content: (0, n.jsxs)("div", {
                className: la.r,
                children: [
                    C.intl.string(E.default.cK0dk1),
                    (0, n.jsx)("ul", {
                        className: la.e,
                        children: lr.map((e, t) => (0, n.jsx)("li", { children: C.intl.string(e) }, t)),
                    }),
                ],
            }),
        }),
        position: "top",
        actions: r,
        onRequestClose: l,
    });
}
var ls = l(379307),
    lo = l(285796),
    lu = l(590380),
    ld = l(298668);
let lc = eM.Is;
function lf(e, t, l, n) {
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
                                eM.$f - 3e5,
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
            if (a++ >= lc)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.DlX57a, { count: lc }),
                    },
                };
            if (!(0, eM.x5)(e.size, t))
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: C.intl.formatToPlainString(E.default.cI7t94, { size: (0, eM.ZJ)((0, eM.yr)(t)) }),
                    },
                };
            let r = eM.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: r }, upload: () => n(e) };
        }),
    );
}
function lm(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        r = e_.useState((e) => eL(e, t, l)),
        i = a.useCallback((e) => lf(t, l, e, n), [t, l, n]),
        s = a.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = eF(t, l)).find((t) => t.localId === e)) &&
                    (eq(t, a),
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
function lh(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(lu.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: ld.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: ld.o1,
                onClick: () => l(t.localId),
                "aria-label": C.intl.string(E.default["3HWvgk"]),
                children: (0, n.jsx)(lo.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lg = l(789438);
let lx = "text-md/normal",
    lp = null;
function lv(e) {
    let { text: t, offering: l, typed: r } = e,
        [s, o] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [f, m] = a.useState(0),
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
            (g(i + r), m(s));
            let o = s + i,
                c = Math.max(l, n.offsetWidth) + r + i,
                f = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : o / c;
            p({
                frontFrom: 1e3 * (0, tV._R)(f),
                frontTo: 1e3 * (0, tV._R)(h),
                backFrom: 1e3 * (0, tV.T)(f),
                backTo: 1e3 * (0, tV.T)(h),
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
        S = "out" === y ? x.frontTo : x.backTo,
        I = (0, D.bG)([t7.Ay], () => t7.Ay.useReducedMotion),
        T = t === C.intl.string(E.default.Jj8Ftb),
        M = s === t && T;
    function R(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: i()(lg.VT, { [lg.qk]: a }),
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
            children: (0, n.jsx)(tH.e, { shortcut: "tab", className: lg.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tW.o, {
                text: t,
                variant: lx,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: i()(lg.xM, { [lg.s2]: r }),
                onStart: w,
                onComplete: () => o(t),
            }),
            R(lg.IS, l || (!I && "out" === y), u),
            (0, n.jsx)("span", {
                ref: d,
                className: lg.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lx, tag: "span", children: t }),
            }),
            M
                ? (0, n.jsxs)("span", {
                      className: lg.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lx, tag: "span", className: lg.xM, children: t }),
                          R(lg.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lb(e) {
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
            questionOpen: g = !1,
            tipOpen: x = !1,
            onDismissTip: p,
            hasPendingContext: v = !1,
            modelSettings: b,
            onModelSettingsChange: j,
        } = e,
        [y, k] = a.useState(() => ll.getDraft(t)),
        N = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), k(e));
            },
            [t],
        ),
        [w, A] = a.useState(t);
    w !== t && (A(t), k(ll.getDraft(t)));
    let S = (0, D.bG)([t7.Ay], () => t7.Ay.isSubmitButtonEnabled),
        [I, T] = a.useState(!1);
    a.useEffect(() => {
        i || T(!1);
    }, [i]);
    let M = a.useRef(null),
        {
            drafts: R,
            addFiles: P,
            removeDraft: _,
            settled: L,
            takeRefs: F,
        } = lm({ projectId: t, surface: "chat", onUploadFile: d }),
        $ = "" !== y.trim() || R.length > 0 || v,
        O = l && $ && L,
        [q, z] = a.useState(null);
    a.useEffect(() => {
        if (null == q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => z(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]);
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
                null == lp && (lp = document.createElement("canvas").getContext("2d"));
                let i = lp;
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
            ("" !== t && z(t), N(""));
        }, [O, y, o, F, N, p]),
        B = a.useCallback(
            (e) => {
                (e.preventDefault(), U());
            },
            [U],
        ),
        G = a.useCallback(() => {
            null == u || I || (T(!0), u());
        }, [u, I]),
        W = null == h || "" !== y || !l || r || s || v ? null : h,
        V = a.useCallback(
            (e) => {
                if ("Escape" === e.key && i && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), G());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != W) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), N(W));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
            },
            [U, f, i, u, I, G, W, N],
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
            let t = lk(e);
            null != t && Z(t);
        }
        ee(!0);
        let t = setTimeout(() => ee(!1), lj);
        return () => clearTimeout(t);
    }, [y]);
    let et = a.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        el = J ? ` ${lg.EB}` : "",
        en = s
            ? C.intl.string(E.default.pGFXZ0)
            : r
              ? C.intl.string(E.default.JeM47J)
              : l
                ? v
                    ? C.intl.string(E.default.Bs7bUv)
                    : g
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
        eo = null != W,
        eu = q ?? W ?? en,
        ed = "" === y && "" !== eu;
    return (0, n.jsxs)("form", {
        onSubmit: B,
        className: lg.DA,
        children: [
            R.length > 0
                ? (0, n.jsx)("div", {
                      className: lg.lN,
                      children: R.map((e) => (0, n.jsx)(lh, { draft: e, onRemove: _ }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${lg.wg} ${lg.LP}${el}`, style: et, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${lg.wg} ${lg.L3}${el}`, style: et, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lg.VA,
                ref: Y,
                children: [
                    (0, n.jsx)("input", {
                        ref: M,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: lg.nY,
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
                                  className: `${lg.Y0} ${lg.nu}`,
                                  disabled: !l,
                                  onClick: () => M.current?.click(),
                                  "aria-label": C.intl.string(E.default.d6Rqlu),
                                  children: (0, n.jsx)(tK.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: lg.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(tY.Y, {
                              targetElementRef: X,
                              position: "top",
                              align: "left",
                              animation: tY.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(tX.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(tQ.rX, {
                                          children: [
                                              (0, n.jsx)(tQ.Dr, {
                                                  id: "upload-file",
                                                  label: C.intl.string(C.t["d3+iYs"]),
                                                  iconLeft: tK.H,
                                                  leadingAccessory: { type: "icon", icon: tK.H },
                                                  action: () => M.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(tQ.Dr, {
                                                        id: "import-project",
                                                        label: C.intl.string(E.default.edKajy),
                                                        iconLeft: tZ.q,
                                                        leadingAccessory: { type: "icon", icon: tZ.q },
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
                                      className: `${lg.Y0} ${lg.nu}`,
                                      disabled: !l,
                                      "aria-label": C.intl.string(C.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(tJ.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: lg.Qu,
                                      }),
                                  });
                              },
                          }),
                    ed
                        ? (0, n.jsx)("div", {
                              ref: ei,
                              className: lg.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lv, { text: eu, offering: eo && null == q, typed: null != q }),
                          })
                        : null,
                    (0, n.jsx)(t0.y, {
                        value: y,
                        onChange: (e) => N(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: H,
                        placeholder: ed ? "" : en,
                        disabled: !l,
                        "aria-label": C.intl.string(E.default.OPr66w),
                        "aria-describedby": ed ? es : void 0,
                        rows: 1,
                        className: lg.jp,
                    }),
                    ed ? (0, n.jsx)(tR.A, { id: es, children: en }) : null,
                    (0, n.jsx)("div", {
                        className: lg.Sz,
                        children:
                            i && null != u
                                ? (0, n.jsx)(e6.m, {
                                      text: C.intl.string(E.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${lg.Y0} ${lg.$E}`,
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
                                  ? (0, n.jsx)(ls.A, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !l,
                                        onChange: j,
                                        className: `${lg.Y0} ${lg.$E}`,
                                        icon: (0, n.jsx)(t1.R, {
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
                              className: lg.fF,
                              children: [
                                  (0, n.jsx)("div", { className: lg.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: lg.rt,
                                      disabled: !O,
                                      "aria-label": C.intl.string(E.default["22GHMt"]),
                                      children: (0, n.jsx)(t2.SendMessageIcon, {
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
            x && null != p ? (0, n.jsx)(li, { targetElementRef: Y, onDismiss: p }) : null,
        ],
    });
}
let lj = 1500,
    ly = [
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
function lk(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lk.mirror;
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
                (lk.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of ly) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lk.mirror = null;
var lN = l(320095),
    lw = l(963852),
    lA = l(521981),
    lS = l(763754),
    lE = l(491182),
    lC = l(438729),
    lI = l(622868),
    lT = l(448368),
    lM = l(837528),
    lR = l(439762),
    lP = l(715628),
    l_ = l(752636),
    lL = l(9842),
    lF = l(589022),
    lD = l(95701),
    l$ = l(994500),
    lO = l(967198);
let lq = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lz(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lU(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lB(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lU(e, t),
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
    if (lz(a) && lz(r)) {
        let l = 0,
            n = t;
        for (; l < 32 && lz(lU(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function lG(e, t) {
    let { streaming: l } = t,
        n = (0, D.bG)([t7.Ay], () => t7.Ay.useReducedMotion),
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
                      for (; r > 0 && lB(t, r);) r--;
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
                                    for (; n > t + 1 && l - n < 12 && lq.has(e.charAt(n - 1));) n--;
                                    return lq.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lB(t, o);) o++;
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
var lW = l(725592),
    lV = l(73432),
    lH = l(365199),
    lK = l(194085),
    lY = l(734495),
    lX = l(441136);
function lQ(e) {
    let { message: t, onClose: l } = e,
        a = (0, lY.A)(t);
    return (0, n.jsx)(tX.W, {
        navId: "vibegrations-message-actions",
        "aria-label": C.intl.string(C.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(tQ.rX, { children: a }),
    });
}
function lZ(e) {
    let { message: t, groupStart: l } = e,
        [r, s] = a.useState(!1),
        o = a.useRef(null),
        u = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return null == (0, lY.A)(t)
        ? null
        : (0, n.jsx)("div", {
              className: i()(lX.QE, { [lX.Rn]: l, [lX.vg]: r }),
              children: (0, n.jsx)(lK.Ay, {
                  children: (0, n.jsx)(tY.Y, {
                      targetElementRef: o,
                      renderPopout: (e) => {
                          let { closePopout: l } = e;
                          return (0, n.jsx)(lQ, { message: t, onClose: l });
                      },
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      align: "top",
                      animation: tY.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: l, ...a } = e,
                              { isShown: r } = t;
                          return (0, n.jsx)(lK.qv, {
                              ref: o,
                              label: C.intl.string(C.t["UKOtz+"]),
                              icon: lH.MoreHorizontalIcon,
                              selected: r,
                              onClick: u,
                              ...a,
                          });
                      },
                  }),
              }),
          });
}
let lJ = (0, lD.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    l0 = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function l1(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: i()(lX.Yq, { [lX.x1]: t }), children: e });
}
function l2(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function l7(e, t, l) {
    let { content: r } = (0, lR.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        i = a.useMemo(() => ({ message: e, channel: lJ, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(lC.Ay, { className: l, message: e, content: r, compact: !1 })
          : (0, lP.A)(i, r);
}
function l5(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        r = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        i = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lM.m)(e, lJ, t.usernameProfile, r),
        o = (0, lM.Jo)(t.avatarProfile, r),
        u = (0, D.bG)([lO.A], () => lO.A.getGuildId()),
        d = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eu.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(lF.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function l4(e) {
    let { baseMessage: t, referenced: l, selected: r, onJumpToReplied: i } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lA.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == r
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: lX.GV,
                              children: [
                                  (0, n.jsx)(lV.A, { className: lX.Rj, size: "custom", width: 14, height: 14 }),
                                  r,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, r]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, D.cf)(
            [l$.A],
            () => ({
                isReplyAuthorBlocked: l$.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: l$.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lS.X4)(l),
        c = (0, lS.X4)(t),
        f = l5(l);
    return (0, n.jsx)(lT.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: lJ,
        referencedMessage: { state: lL.a.LOADED, message: l },
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
function l3(e) {
    let { message: t, author: l } = e,
        a = l5(t);
    return (0, n.jsx)(lI.Ay, {
        message: t,
        channel: lJ,
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
function l6(e) {
    let { content: t, createdAt: l, userId: r, accessories: i, groupStart: s } = e;
    a.useEffect(() => (0, lW.Y)(r), [r]);
    let o = (0, D.bG)(
            [eu.default],
            () => (0, lW.T)(r, null != r ? eu.default.getUser(r) : null, eu.default.getCurrentUser()),
            [r],
        ),
        u = a.useMemo(() => (0, lS.FT)(o, null), [o]),
        d = a.useMemo(() => (0, ew.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, lw.Ay)({ channelId: lJ.id, content: c, author: o });
            return (0, lN.rh)({ ...e, timestamp: l2(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, o, l]);
    return null == f
        ? null
        : (0, n.jsx)(l8, { message: f, author: u, content: c, selected: d?.label, accessories: i, groupStart: s });
}
function l8(e) {
    let { message: t, author: l, content: a, selected: r, accessories: i, groupStart: s = !0 } = e,
        o = l7(t, a);
    return (0, n.jsx)(lE.A, {
        className: lX.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(l3, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, n.jsxs)("div", {
                      className: lX.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: lX.GV,
                              children: [
                                  (0, n.jsx)(lV.A, { className: lX.Rj, size: "custom", width: 16, height: 16 }),
                                  r,
                              ],
                          }),
                          (0, n.jsx)("span", { className: lX.WO, children: o }),
                      ],
                  }),
        childrenAccessories: l1(i, "" !== a),
        childrenButtons: (0, n.jsx)(lZ, { message: t, groupStart: s }),
    });
}
function l9(e) {
    let {
            content: t,
            createdAt: l,
            accessories: r,
            replyTo: i,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lG(t, { streaming: u }),
        f = a.useMemo(() => (0, lS.FT)(null, null), []),
        m = a.useMemo(() => ({ ...f, nick: "Conjure", colorString: "var(--text-brand)" }), [f]),
        h = i?.userId,
        g = (0, D.bG)(
            [eu.default],
            () => (0, lW.T)(h, null != h ? eu.default.getUser(h) : null, eu.default.getCurrentUser()),
            [h],
        ),
        x = a.useMemo(() => (null == i ? null : (0, ew.LL)(i.content)), [i]),
        p = a.useMemo(() => {
            if (null == i || null == g) return null;
            let e = (0, lw.Ay)({ channelId: lJ.id, content: x?.body ?? i.content, author: g });
            return (0, lN.rh)({ ...e, id: i.id, timestamp: l2(i.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [i, x, g]),
        v = a.useMemo(() => (null == i ? void 0 : { channel_id: lJ.id, message_id: i.id }), [i]),
        b = a.useMemo(() => {
            let e = (0, lw.Ay)({ channelId: lJ.id, content: d, author: l0 });
            return (0, lN.rh)({
                ...e,
                timestamp: l2(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != v ? { type: P.lAJ.REPLY, message_reference: v } : {}),
            });
        }, [d, l, v]),
        j = l7(b, d, lX.OS);
    return (0, n.jsxs)("div", {
        className: lX.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, n.jsx)(lE.A, {
                className: lX.yE,
                author: m,
                childrenRepliedMessage:
                    null == p
                        ? null
                        : (0, n.jsx)(l4, { baseMessage: b, referenced: p, selected: x?.label, onJumpToReplied: s }),
                childrenHeader: (0, l_.A)({ message: b, channel: lJ, author: m, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: l1(r, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, n.jsx)("span", {
                      className: lX.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)($.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let ne = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
var nt = l(375068);
function nl(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: r,
            ref: s,
            onPickIdea: o,
            onApprovePlan: u,
            floatingSettingsMessageId: d,
        } = e,
        c = a.useRef(null),
        f = a.useCallback(
            (e) => {
                ((c.current = e), "function" == typeof s ? s(e) : null != s && (s.current = e));
            },
            [s],
        ),
        [h, g] = a.useState(null),
        x = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(x.current), []);
    let p = a.useCallback((e) => {
            let t = c.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                g(e),
                window.clearTimeout(x.current),
                (x.current = window.setTimeout(() => g(null), 1600)));
        }, []),
        b = a.useMemo(
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
                            if (null != c.prose && ne.test(c.prose.content)) d = !0;
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
                        let c = ne.test(t.content ?? "");
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
                })(l),
            [l],
        ),
        j = l.at(-1),
        y =
            (j?.role !== "assistant" || null == j.awaitingUser || null == j.secretRequest
                ? null
                : (0, eS.BL)(j)
                  ? j.awaitingUser
                  : null) ?? void 0;
    if (0 === l.length) {
        if ("loading" === r)
            return (0, n.jsx)("ol", {
                ref: s,
                className: i()(nt.x7, nt.jH),
                "aria-busy": !0,
                children: (0, n.jsx)("li", { className: nt.Ub, children: (0, n.jsx)(m.y, {}) }),
            });
        let e = "unavailable" === r ? E.default.s4oxNv : E.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: s,
            className: nt.x7,
            children: (0, n.jsx)(nn, { role: "assistant", children: (0, n.jsx)(l9, { content: C.intl.string(e) }) }),
        });
    }
    return (0, n.jsxs)("ol", {
        ref: f,
        className: nt.x7,
        children: [
            b.map((e) => {
                let a = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                        return (0, n.jsx)(
                            nn,
                            {
                                role: "user",
                                anchorId: a.id,
                                highlighted: h === a.id,
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(l6, {
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
                            nn,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(l9, {
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
                            nn,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(tB, {
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
                            nn,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(tB, { projectId: t, interrupted: !0, steps: a.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, n.jsx)(
                            nn,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(tB, {
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
                    case "closing":
                        return (0, n.jsx)(
                            nn,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(l9, {
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
                                    })(l, a.in_reply_to),
                                    onJumpToReplied: null != a.in_reply_to ? () => p(a.in_reply_to) : void 0,
                                    accessories: (0, n.jsx)(tG, {
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
                                                  })(l, a, a.ideas),
                                        attachments: a.attachments,
                                        secretRequest: a.secretRequest,
                                        secretRequestAwaiting: a === j ? y : void 0,
                                        settingsRequest: a.id === d ? void 0 : a.settingsRequest,
                                        onPickIdea: o,
                                        onApprovePlan: a === j ? u : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                }
            }),
            null != y
                ? (0, n.jsx)(nn, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, n.jsx)(l9, {
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
function nn(e) {
    let { role: t, children: l, anchorId: a, highlighted: r = !1, continuation: s = !1 } = e;
    return (0, n.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": a,
        className: i()(nt.xk, { [nt.Qo]: r, [nt.q3]: s }),
        children: l,
    });
}
let na = [E.default.krnkPq, E.default["8oUm/J"], E.default["6Ea4dF"], E.default.fQx5qC, E.default["phXeK/"]];
function nr(e) {
    return na.some((t) => C.intl.string(t) === e);
}
function ni(e) {
    switch (e) {
        case "connecting":
            return C.intl.string(E.default.W7oyuf);
        case "closed":
            return C.intl.string(E.default["yBmS+I"]);
        case "failed":
            return C.intl.string(E.default.eE60xI);
    }
}
var ns = l(559676),
    no = l(823376),
    nu = l(495557);
function nd(e) {
    let { activity: t, id: l } = e,
        { text: r, revealing: s } = lG(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nu.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: o,
                className: nu.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: i()(tz.PT, nu.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: eY.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nc = l(921461);
function nf(e) {
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
        g = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, recalling: a = !1, controlling: r = !1 } = e,
                i = null != t && "end" !== t.phase;
            return r
                ? E.default.ivvYHP
                : n
                  ? E.default.aFffp2
                  : a
                    ? na[0]
                    : l
                      ? E.default["0vH/5G"]
                      : i
                        ? E.default.Ly7F7x
                        : E.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: r, recalling: s, controlling: o }),
        x = C.intl.string(g),
        p = g === na["0"],
        [v, b] = a.useState(u ?? x),
        j = a.useRef(x);
    (a.useEffect(() => {
        j.current = x;
    }, [x]),
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
        ((N.current = p), !p && nr(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = nr(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), C.intl.string(na[e % na.length]))));
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
        T = a.useCallback(() => {
            A && null != S && h((e) => (e === S ? null : S));
        }, [A, S]),
        M = a.useCallback(() => h(null), []);
    return (0, n.jsx)(tY.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: M,
        renderPopout: () => (0, n.jsx)(nd, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(eJ.D, {
                innerRef: c,
                className: i()(nc.hF, A && nc.Xd),
                "aria-label": C.intl.string(r ? E.default.pGFXZ0 : p ? na["0"] : E.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": C.intl.string(g),
                onClick: T,
                children: [
                    (0, n.jsx)("span", {
                        className: nc.bl,
                        children: (0, n.jsx)(no.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nc.xu,
                        "aria-hidden": !!o || !!p || void 0,
                        children: (0, n.jsx)(tW.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nc.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nm = { second: 1e3, minute: 6e4 };
function nh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nm[t];
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
var ng = l(979148);
function nx(e) {
    let { startedAt: t } = e,
        l = nh(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: ng.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, eX.C7)(l),
    });
}
function np(e) {
    let { startedAt: t } = e,
        l = nh(t, "minute");
    return (0, n.jsx)(tR.A, { role: "timer", children: (0, eX.Us)(l) });
}
var nv = l(280894);
function nb(e) {
    return e.toLocaleString();
}
function nj(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nv.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nv.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nb((0, eM.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nb(l.input_tokens),
                    " in \xb7 ",
                    nb(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${nb(l.cache_creation_input_tokens)} cache write \xb7 ${nb(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ny(e) {
    let { project: t } = e,
        l = (0, eM.wU)(t.compaction),
        a = (0, eM.wU)(t.classifier),
        r = (0, eM.wV)(t.orchestrator, t.codegen),
        i = (0, eM.wV)(r, l);
    return (0, n.jsxs)("div", {
        className: nv.si,
        role: "dialog",
        "aria-label": C.intl.string(E.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nv.Q$,
                children: (0, n.jsxs)("div", {
                    className: nv.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nb((0, eM.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(nj, { label: C.intl.string(E.default.R9aduM), usage: r }),
            (0, n.jsx)(nj, { label: C.intl.string(E.default.Tj6b30), usage: l }),
            (0, n.jsx)(nj, { label: C.intl.string(E.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nv.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(E.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eM.sj)(i) ? "\u2014" : `${Math.round(100 * (0, eM.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nk(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(tY.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(ny, { project: t }),
        children: (e) =>
            (0, n.jsx)(eJ.D, {
                innerRef: l,
                className: nv.Y$,
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
var nN = l(258216);
function nw(e) {
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
        m = (0, ns.o4)(l),
        [h, g] = a.useState(null),
        x = a.useCallback((e) => g(nr(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, eM.a7)(c.cost_usd)),
                  {
                      text: C.intl.formatToPlainString(E.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: C.intl.formatToPlainString(E.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = r && null != i;
    return (0, n.jsxs)("div", {
        className: nN.jf,
        children: [
            (0, n.jsxs)("div", {
                className: nN.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    r || s || o || m
                        ? (0, n.jsx)(nf, {
                              activity: u,
                              compacting: d,
                              restoring: s,
                              recalling: o,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, n.jsx)(nx, { startedAt: i }) : null,
                ],
            }),
            b ? (0, n.jsx)(np, { startedAt: i }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: nN.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(nk, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(E.default.eDDdhB, { status: ni(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: nN.XF,
                      children: ni(f),
                  }),
        ],
    });
}
var nA = l(22231),
    nS = l(900797),
    nE = l(477155),
    nC = l(935286),
    nI = l(856795),
    nT = l(424110);
function nM(e) {
    let { option: t, position: l, disabled: r, onPick: s, reachable: o = !0 } = e,
        u = a.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(eJ.D, {
        className: i()(nT.uK, { [nT.ue]: r }),
        onClick: r ? void 0 : () => s(t),
        "aria-label": C.intl.formatToPlainString(d ? E.default.aL1BKQ : E.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": r,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, n.jsx)("span", { className: nT.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: nT.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: nT.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nT.ed,
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
                      className: nT.rM,
                      children: C.intl.string(E.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nR(e) {
    let { question: t, draft: l, direction: a, disabled: r } = e,
        s = "" === l.trim() ? null : l;
    return (0, n.jsxs)("div", {
        className: i()(nT.Ge, nT.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, n.jsx)(nM, { option: e, position: t + 1, disabled: r, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, n.jsxs)("div", {
                className: nT.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: nT.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(nA.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == s ? null : (0, n.jsx)("span", { className: i()(nT.Pu, nT.es), children: s }),
                ],
            }),
        ],
    });
}
function nP(e) {
    let { clarification: t, onSubmit: l, onDismiss: r } = e,
        [s, u] = a.useState({}),
        [d, c] = a.useState({}),
        [f, m] = a.useState(0),
        [h, g] = a.useState(null),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        N = a.useRef(null),
        [w, A] = a.useState(null),
        S = a.useRef(null),
        I = a.useRef(0),
        T = null == l,
        M = t.questions.length,
        R = Math.min(f, M - 1),
        P = t.questions[R],
        [_, L] = a.useState({ id: P.id, expanded: !1 }),
        F = _.id === P.id && _.expanded,
        [D, $] = a.useState(null),
        O = d[P.id] ?? "",
        { text: q, phase: z } = (0, nI.Q)(P.question),
        U = q === P.question,
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
        W = a.useCallback(
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
        V = a.useCallback(
            (e, t) => {
                I.current += 1;
                let l = I.current;
                (g({ direction: t, moves: l }), p({ question: P, draft: O, direction: t, moves: l }), k(!0), m(e));
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
                if (T) return;
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
                null == n ? W(l) : V(n, n < R ? "back" : "forward");
            },
            [s, t, T, R, P.id, W, V],
        ),
        X = a.useCallback(() => {
            if (T || 0 === R) return;
            let e = t.questions[R - 1];
            (u((t) => {
                let l = { ...t };
                return (delete l[e.id], l);
            }),
                c((t) => {
                    let l = { ...t };
                    return (delete l[e.id], l);
                }),
                V(R - 1, "back"));
        }, [t, T, R, V]),
        Q = R > 0 && !T,
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
            T || R >= M - 1 || V(R + 1, "forward");
        }, [T, R, M, V]),
        er = R < M - 1 && !T;
    return (0, n.jsxs)("section", {
        className: i()(nT.$O, { [nT.fI]: J && !et, [nT.Oh]: et }),
        role: "dialog",
        "aria-label": P.question,
        "data-vibegrations-clarification": t.id,
        "data-state": T ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": R,
        children: [
            (0, n.jsxs)("div", {
                className: nT.rf,
                style: null == b ? void 0 : { height: b.heading + b.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: N,
                        className: nT.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: A,
                                tag: "span",
                                id: `${P.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: i()(nT.TK, nT.R_, { [nT.TB]: "exit" === z, [nT.JU]: "enter" === z }),
                                children: q,
                            }),
                            B || F
                                ? (0, n.jsx)("div", {
                                      className: nT.Q7,
                                      children: (0, n.jsx)(e6.m, {
                                          text: G,
                                          children: (0, n.jsx)(th.K, {
                                              icon: F ? nS.t : tT.a,
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
                                      className: i()(nT.gb, nT.Q7),
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
                        className: nT.Cg,
                        style: null == b ? void 0 : { insetBlockStart: b.heading },
                        children: (0, n.jsxs)("div", {
                            className: nT.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: S,
                                    className: nT.Ge,
                                    role: "group",
                                    "aria-labelledby": `${P.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        P.options.map((e, t) =>
                                            (0, n.jsx)(
                                                nM,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: T,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: nT.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: nT.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(nA.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(t0.y, {
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
                                                    disabled: T,
                                                    rows: 1,
                                                    className: nT.Pu,
                                                    "data-vibegrations-clarification-other": P.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, n.jsx)(
                                          nR,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: T },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            M > 1
                ? (0, n.jsxs)("div", {
                      className: nT.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: C.intl.formatToPlainString(E.default["7bypa+"], { index: R + 1, total: M }),
                          }),
                          (0, n.jsxs)("div", {
                              className: nT.Np,
                              children: [
                                  (0, n.jsx)(eJ.D, {
                                      className: i()(nT.gb, { [nT.yI]: !Q }),
                                      onClick: Q ? X : void 0,
                                      tabIndex: Q ? 0 : -1,
                                      "aria-hidden": !Q,
                                      "aria-disabled": T,
                                      "aria-label": C.intl.string(E.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": Q ? void 0 : "true",
                                      children: (0, n.jsx)(nE.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, n.jsx)(eJ.D, {
                                      className: i()(nT.gb, { [nT.yI]: !er }),
                                      onClick: er ? ea : void 0,
                                      tabIndex: er ? 0 : -1,
                                      "aria-hidden": !er,
                                      "aria-disabled": T,
                                      "aria-label": C.intl.string(E.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": er ? void 0 : "true",
                                      children: (0, n.jsx)(nC.E, {
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
var n_ = l(643278),
    nL = l(191521),
    nF = l(405189);
function nD(e) {
    let { line: t, placement: l, todos: r, todosLive: s = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != l,
        [f, m] = a.useState(l ?? "top"),
        [h, g] = a.useState(c),
        [x, p] = a.useState(!1),
        [v, b] = a.useState(!1),
        [j, y] = a.useState(c);
    (j !== c && (y(c), null != l ? (m(l), g(!0)) : (p(!1), b(!1))),
        a.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => g(!1), 150);
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
    let T = null != r && r.length > 0,
        M = a.useCallback(() => b((e) => !e), []);
    return h
        ? (0, n.jsxs)("div", {
              className: nF.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: i()(nF.vK, { [nF.ho]: x && c, [nF.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: i()(nF.Rk, tC.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tv.A, {
                                        glyph: (0, n.jsx)(nL.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(eJ.D, {
                                    className: nF.pZ,
                                    onClick: d,
                                    "aria-label": C.intl.string(E.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: i()(nF.Rk, tC.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tv.A, {
                                            glyph: (0, n.jsx)(nL.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, n.jsx)(e6.m, {
                                    text: C.intl.string(E.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(eJ.D, {
                                        className: nF.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": C.intl.string(E.default.qCRC6c),
                                        children: (0, n.jsx)(n_.ClipboardListIcon, {
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
                  k && T
                      ? (0, n.jsx)("div", {
                            className: i()(nF.vB, { [nF.pg]: v && w, [nF.ui]: !v }),
                            children: (0, n.jsx)(t$, {
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
var n$ = l(651649),
    nO = l(522250),
    nq = l(670455),
    nz = l(698638),
    nU = l(348800);
let nB = [C.intl.string(E.default["E+Q26x"]), C.intl.string(E.default["06/jqP"]), C.intl.string(E.default["3gSfUa"])];
function nG(e) {
    var t;
    let { projectId: r, restoreState: i } = e,
        s = (0, D.bG)([eS.Ay], () => eS.Ay.getMessages(r), [r]),
        o = (0, D.bG)([f.Ay], () => f.Ay.getConnState(r), [r]),
        u = (0, D.bG)([f.Ay], () => f.Ay.isChatStopped(r), [r]),
        d = (0, D.bG)([eS.Ay], () => eS.Ay.getProjectUsage(r), [r]),
        c = (0, D.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(r), [r]),
        m = (0, D.bG)([eS.Ay], () => eS.Ay.isCompacting(r), [r]),
        h = (0, D.bG)([f.Ay], () => f.Ay.getModelSettings(r), [r]),
        g = a.useRef(null),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(!0),
        [j, y] = a.useState(!0);
    a.useEffect(() => {
        b.current && x.current?.scrollToBottom();
    }, [s]);
    let k = a.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        N = a.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            b.current = t < 32;
            let l = t > 1;
            y((e) => (!l === e ? e : !l));
        }, []);
    (a.useLayoutEffect(() => {
        let e = g.current,
            t = p.current;
        if (null == e) return;
        let l = x.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            r = l?.getBoundingClientRect().height,
            i = null;
        function s() {
            b.current &&
                (null != i && cancelAnimationFrame(i), (i = requestAnimationFrame(() => x.current?.scrollToBottom())));
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
                (e = (0, nO.hl)(r)) < nO.qu ||
                    (!(0, nO.Xi)(r) &&
                        n$.A.possiblyShowFeedbackModal(nq.MW.VIBEGRATIONS, () => {
                            ((0, nO.AH)(r),
                                (0, tc.openModalLazy)(async () => {
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
    let w = (0, eV.Q_)(r),
        A = a.useCallback(
            (e, t) => {
                (0, f.dv)(r, e, t);
            },
            [r],
        ),
        S = a.useCallback(
            (e, t) => {
                0 === w.annotations.length
                    ? A(e, t)
                    : (A((0, ew.Mx)({ annotations: w.annotations, metaComment: e, context: w.context }), t),
                      (0, eV.PS)(r));
            },
            [w, A, r],
        ),
        I = a.useCallback(() => (0, f.fu)(r), [r]),
        T = a.useCallback((e) => eG(r, e.implementation_prompt), [r]),
        M = a.useCallback((e) => eG(r, e), [r]),
        R = a.useCallback((e) => (0, f.XZ)(r, e), [r]),
        P = a.useCallback((e) => (0, f.vX)(r, e), [r]),
        _ = a.useCallback((e) => lf(r, "chat", Array.from(e), P), [r, P]),
        L = a.useCallback(() => eG(r, C.intl.string(E.default.Jj8Ftb)), [r]),
        F = i?.status === "restoring",
        $ = "open" === o && !u && !F,
        O = s[s.length - 1],
        q = null != O && "assistant" === O.role && null != O.proposal,
        [z, U] = a.useState(null),
        B = O?.clarification != null && O.clarification.id !== z ? O.clarification : null,
        G = a.useCallback(() => {
            null != B && U(B.id);
        }, [B]),
        [W, V] = a.useState(!1);
    a.useEffect(() => {
        if (!(0, eW.Fy)(r)) return;
        let e = setTimeout(() => {
            ((0, eW.fA)(), V(!0));
        }, 0);
        return () => clearTimeout(e);
    }, [r]);
    let H = a.useCallback(() => V(!1), []),
        K = (0, D.bG)([f.Ay], () => f.Ay.getSettings(r), [r]),
        [Y, Q] = a.useState(null),
        Z =
            !W &&
            null != O &&
            "assistant" === O.role &&
            null != O.settingsRequest &&
            O.id !== Y &&
            ((t = O.settingsRequest),
            null != K &&
                (t.keys ?? []).some((e) => {
                    let t = K.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return K.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = K.values[e];
                    return null == l || "" === l;
                }))
                ? O
                : null,
        J = Z?.settingsRequest ?? null,
        ee = a.useCallback(() => {
            null != Z && Q(Z.id);
        }, [Z]),
        et = W || null != J,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, D.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, D.bG)([eS.Ay], () => eS.Ay.isHistoryUnavailable(r), [r]),
            connState: o,
        }),
        en = "loading" === el && 0 === s.length,
        ea = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return nB[e % nB.length];
        }, [r]),
        er = q
            ? C.intl.string(E.default.Jj8Ftb)
            : O?.kind === "plan_implemented"
              ? C.intl.string(E.default["3sTTBu"])
              : "greeting" === el && 0 === s.length
                ? ea
                : null,
        ei = a.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, eS.BL)(t)) return t;
            }
        }, [s]),
        es = null != ei,
        eo =
            null != ei
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = eC.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(ei)
                : void 0,
        eu = q && $ ? L : void 0,
        ed = a.useCallback(() => eG(r, C.intl.string(E.default.ga8too)), [r]),
        ec = q && $,
        [ef, em] = a.useState(null),
        [eh, eg] = a.useState(es);
    (eh !== es && (eg(es), es || em(null)),
        a.useEffect(() => {
            if (!es) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? em(null)
                        : em(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (l.observe(t), () => l.disconnect());
        }, [es, ei?.steps]));
    let ex = a.useMemo(() => (null != ei ? (0, eH.b)(ei.steps) : ""), [ei]),
        ep = a.useMemo(() => (null != ei ? ((0, eA.lt)(ei.steps) ?? ei.todos) : void 0), [ei]),
        ev = ei?.provisionalTodo,
        eb = null != ei && eE(ei),
        ej = a.useMemo(() => {
            var e;
            return null != ei ? ((e = ei.steps), tU((0, eA.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [ei]);
    return (0, n.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nU.TE,
        children: [
            $
                ? (0, n.jsx)(eN.A, {
                      title: C.intl.string(E.default.UazRD1),
                      description: C.intl.string(E.default["O4r42+"]),
                      icons: nz.ir,
                      onDrop: _,
                  })
                : null,
            (0, n.jsx)(nD, {
                onJumpToActivity: k,
                line: ex,
                placement: es && "top" === ef ? "top" : null,
                todos: ep,
                todosLive: eb,
                provisionalTodo: ev,
                agents: ej,
            }),
            (0, n.jsxs)("div", {
                className: nU.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: x,
                        onScroll: N,
                        scrollbarGutter: en ? "both-edges" : "stable",
                        className: [nU.N$, j ? null : nU.hB, et ? nU.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(nl, {
                            ref: p,
                            projectId: r,
                            messages: s,
                            emptyState: el,
                            floatingSettingsMessageId: Z?.id,
                            onPickIdea: $ ? T : void 0,
                            onApprovePlan: ec ? ed : void 0,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: nU.NJ,
                        children: (0, n.jsx)(nw, {
                            projectId: r,
                            thinking: es,
                            turnStartedAt: eo,
                            restoring: F,
                            recalling: en,
                            thinkingActivity: c,
                            compacting: m,
                            projectUsage: d,
                            connState: o,
                        }),
                    }),
                    null == B
                        ? null
                        : (0, n.jsx)("div", {
                              className: et ? `${nU.B5} ${nU.J9}` : nU.B5,
                              children: (0, n.jsx)(
                                  nP,
                                  { clarification: B, onSubmit: $ ? M : void 0, onDismiss: G },
                                  B.id,
                              ),
                          }),
                    null == J
                        ? null
                        : (0, n.jsx)("div", {
                              className: nU.B5,
                              children: (0, n.jsx)("div", {
                                  className: nU.ws,
                                  children: (0, n.jsx)(tp, { projectId: r, request: J, onDismiss: ee }, Z?.id),
                              }),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: nU.Jx,
                children: [
                    (0, n.jsx)(nD, {
                        onJumpToActivity: k,
                        line: ex,
                        placement: es && "bottom" === ef ? "bottom" : null,
                        todos: ep,
                        todosLive: eb,
                        provisionalTodo: ev,
                        agents: ej,
                    }),
                    0 === w.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: nU.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(E.default.Lkx0Kk, {
                                          count: w.annotations.length,
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
                                      onClick: () => (0, eV.PS)(r),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lb, {
                        projectId: r,
                        canSend: $,
                        stopped: u,
                        running: es,
                        restoring: F,
                        onSend: S,
                        hasPendingContext: w.annotations.length > 0,
                        onInterrupt: $ ? I : void 0,
                        onUploadFile: P,
                        onApprove: eu,
                        suggestion: er,
                        questionOpen: null != B || null != J,
                        tipOpen: W,
                        onDismissTip: H,
                        modelSettings: h,
                        onModelSettingsChange: R,
                    }),
                ],
            }),
        ],
    });
}
var nW = l(661531),
    nV = l(602853),
    nH = l(517461),
    nK = l(761929),
    nY = l(927506);
function nX(e) {
    let { open: t, maxWidth: l, onWidthChange: r, children: i } = e,
        s = (0, nV.r)(nW.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = a.useRef(null),
        [u, d] = (0, nH.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(u ?? 460),
        m = (0, t5.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        r(t ? m + s : 0);
    }, [m, t, s, r]);
    let h = (0, nK.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: nK.R.HORIZONTAL_LEFT,
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
        className: nY.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: nY.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: o, className: nY.kL, style: { width: m }, children: i }),
        ],
    });
}
var nQ = l(691540),
    nZ = l(857250),
    nJ = l(97483),
    n0 = l(624479),
    n1 = l(92446),
    n2 = l(761508),
    n7 = l(540999),
    n5 = l(957565);
let n4 = [],
    n3 = new Map(),
    n6 = new Map(),
    n8 = new Map(),
    n9 = new Map(),
    ae = new Map(),
    at = new Map(),
    al = new Map();
class an extends D.Ay.Store {
    getStatus(e) {
        return n3.get(e) ?? null;
    }
    getFetchState(e) {
        return n6.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return n9.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return at.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return ae.get(e) ?? null;
    }
    getModelCalls(e) {
        return al.get(e) ?? n4;
    }
    getForceCompactionState(e) {
        return n8.get(e) ?? "idle";
    }
}
let aa = new an(eI.h, {
    LOGOUT: function () {
        if (
            0 === n3.size &&
            0 === n6.size &&
            0 === n8.size &&
            0 === n9.size &&
            0 === ae.size &&
            0 === at.size &&
            0 === al.size
        )
            return !1;
        (n3.clear(), n6.clear(), n8.clear(), n9.clear(), ae.clear(), at.clear(), al.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        n6.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === n8.get(t);
        n &&
            n8.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === n6.get(t);
        if ((a && n6.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? n6.set(t, "failed") : (n3.set(t, l), n6.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        n9.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        ae.set(e.projectId, {
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
        n8.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        n8.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = al.get(e.projectId);
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
        al.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, eM.aM)(l.total)) return !1;
        at.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (n3.delete(t), n6.delete(t), n8.delete(t), n9.delete(t), ae.delete(t), at.delete(t), al.delete(t));
    },
});
var ar = l(972786);
function ai(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function as(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function ao(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function au(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function ad(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function ac(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function af(e) {
    return C.intl.string("preview" === e ? E.default["+m8XM6"] : E.default.kiOVnt);
}
let am = ["all", "preview", "stable", "web"],
    ah = new Set(["error", "aborted", "length"]);
function ag(e) {
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
function ax(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(E.default.SBkDIZ, {
              p50: ai(e.memory_p50_bytes ?? 0),
              p999: ai(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ap = {
    db: () => E.default.r6cciE,
    db_preview: () => E.default.JmIyL8,
    runtime: () => E.default.bzNyv8,
    runtime_preview: () => E.default["LONZ/8"],
    bot: () => E.default.jdpw3A,
    bot_preview: () => E.default["/g6wUz"],
};
var av = l(69985);
function ab(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: av.KE,
        children: [
            (0, n.jsx)("div", {
                className: av.IQ,
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
                                  children: C.intl.formatToPlainString(E.default["4NpaEk"], { time: ad(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(X.$, { variant: "secondary", size: "sm", text: C.intl.string(E.default.aw0IJm), onClick: a }),
        ],
    });
}
function aj(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: av.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: av.Gf, children: t }),
            l,
        ],
    });
}
function ay(e) {
    let { label: t, value: l, hint: a, critical: r = !1 } = e;
    return (0, n.jsxs)("div", {
        className: av.N8,
        children: [
            (0, n.jsxs)("div", {
                className: av.x7,
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
function ak(e) {
    let { label: t, used: l, max: a, formatValue: r } = e,
        i = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = i >= 0.9;
    return (0, n.jsxs)("div", {
        className: av.N8,
        children: [
            (0, n.jsxs)("div", {
                className: av.x7,
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
                className: av.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${r(l)} of ${r(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? av.aV : av.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(i) },
                }),
            }),
        ],
    });
}
function aN(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(ay, {
            label: C.intl.string(E.default.H6PMwW),
            value: C.intl.string(E.default.TLOZ8J),
            hint: ag(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(ay, {
            label: C.intl.string(E.default.H6PMwW),
            value: "\u2014",
            hint: C.intl.string(E.default.uAzxdh),
        });
    let a = ax(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ay, { label: C.intl.string(E.default.awAqRi), value: as(l.cpu_ms) }),
            null != a && (0, n.jsx)(ay, { label: C.intl.string(E.default.WdGviA), value: a }),
        ],
    });
}
function aw(e) {
    let { analytics: t } = e,
        l = C.intl.string(E.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(aj, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: ag(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? ap[t] : null) ? C.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(aj, {
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
                          ay,
                          {
                              label: l,
                              value: C.intl.formatToPlainString(E.default.AnRynJ, { cpu: as(t.cpu_ms) }),
                              hint: ax(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var aA = l(522652);
let aS = [];
function aE(e) {
    let t,
        { call: l } = e,
        { text: a, bad: r } =
            ((t = null != l.stopReason && ah.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? as(l.durationMs) : null,
                    `${ao(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${ao(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: aA.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aA.Q5,
                children: au(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: aA.qN,
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
function aC(e, t) {
    return (0, n.jsx)(ay, {
        label: e,
        value: C.intl.formatToPlainString(E.default.U98VaN, { count: ao((0, eM.aM)(t)) }),
        hint: `${ao(t.input_tokens)} in \xb7 ${ao(t.output_tokens)} out \xb7 ${ao(t.cache_read_input_tokens)} cache read`,
    });
}
function aI(e) {
    let { projectId: t, status: l, fetchState: r, onRefresh: i, traceVisible: s = !1 } = e,
        o = (0, D.bG)([aa], () => aa.getLastTurnUsage(t), [t]),
        u = (0, D.bG)([aa], () => aa.getLastCompaction(t), [t]),
        d = (0, D.bG)([aa], () => aa.getLastCompactionDecline(t), [t]),
        c = (0, D.bG)([aa], () => aa.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        g = (0, D.bG)([aa], () => (s ? aS : aa.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = u?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: aA.Mf,
        children: [
            (0, n.jsx)(ab, { generatedAt: l?.generated_at ?? null, fetchState: r, onRefresh: i }),
            (0, n.jsx)(aj, {
                title: C.intl.string(E.default.IYpHtT),
                children:
                    null == x
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ay, {
                                      label: C.intl.string(E.default["8MSJDH"]),
                                      value: ao((0, eM.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(E.default["6Z2KhK"], { count: ao(x.turns) }),
                                  }),
                                  aC(C.intl.string(E.default.hk4jJr), x.orchestrator),
                                  aC(C.intl.string(E.default.R9aduM), x.codegen),
                                  aC(C.intl.string(E.default.Tj6b30), (0, eM.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(ay, {
                                          label: C.intl.string(E.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${ao(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(aj, {
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
                                  aC(C.intl.string(E.default["VwF+oY"]), o.total),
                                  (0, n.jsx)(ay, {
                                      label: C.intl.string(E.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, eM.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(aj, {
                title: C.intl.string(E.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(ak, {
                                      label: C.intl.string(E.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: ao,
                                  }),
                                  (0, n.jsx)(ay, {
                                      label: C.intl.string(E.default.ntZb8d),
                                      value: `${ao(u.tokensBefore)} \u{2192} ${ao(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(E.default.jA05ru, {
                                          count: ao(u.retainedMessages),
                                          time: ad(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? C.intl.formatToPlainString(E.default.LKGmsP, { ceiling: ao(j) })
                                      : C.intl.string(E.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(ay, {
                            label: C.intl.string(E.default["se+2ls"]),
                            value: `${ao(d.projected)} / ${ao(d.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(E.default.KHK44U, { time: ad(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: aA.Lj,
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
                                    let t = ad(e.observedAt);
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
                (0, n.jsx)(aj, {
                    title: C.intl.string(E.default.F5eP7e),
                    children:
                        0 === g.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: C.intl.string(E.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(aE, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: C.intl.formatToPlainString(E.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(aj, {
                    title: C.intl.string(E.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(ay, {
                                        label: C.intl.string(E.default["wt5X/o"]),
                                        value: ad(b.instance_since),
                                        hint: C.intl.string(E.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(ay, { label: C.intl.string(E.default["4lgurx"]), value: ao(b.sockets) }),
                                    (0, n.jsx)(ay, {
                                        label: C.intl.string(E.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? C.intl.string(E.default["9KlveJ"])
                                            : C.intl.string(E.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(ay, {
                                            label: C.intl.string(E.default["/hOBkc"]),
                                            value: ao(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(aN, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(aj, {
                    title: C.intl.string(E.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(ay, {
                            label: C.intl.string(E.default.Rb6m3E),
                            value: ao(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(ay, {
                            label: C.intl.string(E.default.WQ9pMe),
                            value: C.intl.formatToPlainString(E.default.U98VaN, { count: ao(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(ay, {
                            label: C.intl.string(E.default.iEAvzu),
                            value: C.intl.formatToPlainString(E.default.U98VaN, {
                                count: ao(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(ay, {
                            label: C.intl.string(E.default["jbhs+f"]),
                            value: ao(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(ay, { label: C.intl.string(E.default.TOQnq4), value: ao(p.max_build_attempts) }),
                        (0, n.jsx)(ay, { label: C.intl.string(E.default.RIDc6D), value: ao(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var aT = l(629584),
    aM = l(683438),
    aR = l(849363);
function aP(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: aR.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(E.default.TV42NS),
              }),
          });
}
function a_(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: aR.qf,
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
              className: aR.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function aL(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: aR.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(E.default["U/qDX9"]),
              }),
          })
        : null;
}
var aF = l(417397);
let aD = a.memo(function (e) {
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
        className: aF.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: aF.Mt,
                selectable: !0,
                children: au(l.ts),
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
                className: aF.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: aF.t4,
                children: [
                    r &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: aF.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: aF.Cq,
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
                                      className: aF.Pq,
                                      "aria-expanded": i,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(E.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          i
                                              ? (0, n.jsx)(tT.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(tM._, {
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
                                          className: aF.dF,
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
function a$(e) {
    let { projectId: t } = e,
        l = (0, D.bG)([ar.Ay], () => ar.Ay.getLogs(t), [t]),
        r = (0, D.bG)([ar.Ay], () => ar.Ay.getHistoryState(t, "logs")),
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
                am.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return af(e);
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
        className: aF.$F,
        children: [
            (0, n.jsxs)("div", {
                className: aF.y4,
                children: [
                    (0, n.jsx)(aT.I, {
                        look: "pill",
                        "aria-label": C.intl.string(E.default.fhnXnM),
                        options: h,
                        value: i,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: aF.KT,
                        children: (0, n.jsx)(aM.I, {
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
            l.length > 0 && (0, n.jsx)(aP, { state: r }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: aF.sx,
                children: [
                    (0, n.jsx)(aL, { state: r }),
                    0 === l.length
                        ? (0, n.jsx)(a_, {
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
                          : d.map((e) => (0, n.jsx)(aD, { entry: e.log, showSource: "all" === i }, e.key)),
                ],
            }),
        ],
    });
}
function aO(e) {
    let { title: t, preview: l, stable: r, renderEnv: i } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: i("preview", l) }, "preview")),
        null != r && s.push((0, n.jsx)(a.Fragment, { children: i("stable", r) }, "stable")),
        (0, n.jsx)(aj, {
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
function aq(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(ay, {
                      label: C.intl.formatToPlainString(E.default.f8ix3w, { env: af(l) }),
                      value: ((t = a.connected), C.intl.string(t ? E.default["9KlveJ"] : E.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(ay, {
                      label: C.intl.string(E.default["0AB7l3"]),
                      value: ao(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${ad(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(ay, { label: C.intl.string(E.default.ElaQ0A), value: ao(a.guild_count) }),
                  (0, n.jsx)(ay, {
                      label: C.intl.string(E.default.SJtBTN),
                      value: ao(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? C.intl.formatToPlainString(E.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: ad(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(ay, {
                          label: C.intl.string(E.default.N4l504),
                          value: ao(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(ay, { label: af(l), value: C.intl.string(E.default.C6xjtD) });
}
function az(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(ay, {
        label: af(t),
        value: C.intl.formatToPlainString(E.default.Yur5Zm, { requests: ao(l.requests), failures: ao(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? C.intl.formatToPlainString(E.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: ad(l.last_failure.at),
                  })
                : C.intl.formatToPlainString(E.default["1PdrB1"], { time: ad(l.since) }),
    });
}
function aU(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ay, {
                label: C.intl.formatToPlainString(E.default.BVORfc, { env: af(t) }),
                value: ao(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    ay,
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
                                  ? C.intl.formatToPlainString(E.default["7ecbr3"], { time: ad(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function aB(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(ay, {
        label: af(t),
        value: C.intl.formatToPlainString(E.default.voXL2a, { calls: ao(l.calls), errors: ao(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function aG(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(aj, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(E.default["v/fbnv"]),
            }),
        });
    let r = l.cpu_ms_total / l.requests,
        i = l.cpu_ms_total > 0;
    return (0, n.jsxs)(aj, {
        title: t,
        children: [
            (0, n.jsx)(ay, {
                label: C.intl.string(E.default.KOnL3g),
                value: ao(l.requests),
                hint: C.intl.formatToPlainString(E.default["1PdrB1"], { time: ad(l.since) }),
            }),
            (0, n.jsx)(ay, { label: C.intl.string(E.default.CjPhyY), value: ao(l.errors), critical: l.errors > 0 }),
            i
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(ak, {
                              label: C.intl.string(E.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: as,
                          }),
                          (0, n.jsx)(ay, {
                              label: C.intl.string(E.default["+rYPHD"]),
                              value: as(r),
                              hint: C.intl.formatToPlainString(E.default["+LxC7W"], {
                                  total: as(l.cpu_ms_total),
                                  wall: as(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(ay, {
                      label: C.intl.string(E.default["V/nNbs"]),
                      value: C.intl.string(E.default.YKWIxp),
                      hint: C.intl.string(E.default["8GAiDk"]),
                  }),
            !i &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(ay, { label: C.intl.string(E.default.ueEMPa), value: as(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(ay, { label: C.intl.string(E.default.vM2krr), value: ao(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(ay, {
                label: C.intl.string(E.default.g1O88C),
                value: ao(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(E.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(ay, { label: C.intl.string(E.default.JUZs7g), value: ac(l.build) }),
        ],
    });
}
function aW(e) {
    let { status: t } = e,
        { stable: l, preview: r, shared_data: i } = t.storage,
        s = t.worker.limits,
        o = i
            ? [{ key: "shared", label: C.intl.string(E.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: C.intl.string(E.default["+m8XM6"]), metrics: r },
                  { key: "stable", label: C.intl.string(E.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(aj, {
        title: C.intl.string(E.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: r } = e;
            return null == r
                ? (0, n.jsx)(ay, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(ay, {
                                  label: C.intl.formatToPlainString(E.default["9TpIQg"], { env: l }),
                                  value: ai(r.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      r.r2_truncated ? E.default.o45MMA : E.default.S7o3vV,
                                      { count: ao(r.r2_objects) },
                                  ),
                              }),
                              null != r.db_bytes &&
                                  (0, n.jsx)(ak, {
                                      label: C.intl.formatToPlainString(E.default["0OIswI"], { env: l }),
                                      used: r.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: ai,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function aV(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: aA.Mf,
        children: [
            (0, n.jsx)(ab, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(aG, {
                            title: C.intl.string(E.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aG, {
                            title: C.intl.string(E.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(aW, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(aO, {
                                title: C.intl.string(E.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aq, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(aO, {
                                title: C.intl.string(E.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(az, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(aO, {
                                title: C.intl.string(E.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aU, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(aO, {
                                title: C.intl.string(E.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(aB, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(aw, { analytics: t.analytics }),
                        (0, n.jsxs)(aj, {
                            title: C.intl.string(E.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(ay, {
                                    label: C.intl.string(E.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? ac(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(ay, {
                                    label: C.intl.string(E.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? ac(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function aH(e, t) {
    return String(e).padStart(t, "0");
}
function aK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${aH(n.getHours(), 2)}:${aH(n.getMinutes(), 2)}:${aH(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${aH(n.getMilliseconds(), 3)}` : a;
}
var aY = l(977129);
let aX = new Map(),
    aQ = new Map(),
    aZ = 0,
    aJ = 0;
async function a0(e, t, l) {
    let n = aZ,
        a = aX.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < aJ) return { status: "forbidden" };
    let r = aQ.get(t);
    if (null != r) return r;
    let i = (async () => {
        try {
            let a,
                { ticket: r, baseUrl: i } = await (0, aY.d)(e),
                s = await fetch(
                    ((a = new URL(`${i}/agent/trace-detail`)).searchParams.set("ticket", r),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((aJ = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let o = await s.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (n !== aZ) return { status: "failed" };
            var l = o.rich;
            for (aX.set(t, l); aX.size > 100;) {
                let e = aX.keys().next();
                if (!0 === e.done) break;
                aX.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    aQ.set(t, i);
    let s = await i;
    return (aQ.get(t) === i && aQ.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function a1() {
    ((aZ += 1), aX.clear(), aQ.clear(), (aJ = 0));
}
function a2(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function a7(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function a5(e) {
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
function a4(e) {
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
let a3 = ["model", "tool", "subagent", "delegated", "context"];
function a6(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(a4(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function a8(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let a9 = ["arguments", "result", "usage", "diagnostics"];
var re = l(40715);
let rt = { started: re.Vf, ok: re.mo, error: re.Sr };
function rl(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${re.Om} ${rt[t] ?? re.Vf}`,
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
let rn = { model: re.WI, subagent: re.uM, context: re.eH, tool: re.pw, delegated: re.C8 };
function ra(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: re.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: re.D6, children: t }),
            (0, n.jsx)("div", { className: re.zL, children: l }),
        ],
    });
}
function rr(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(ra, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function ri(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: re.WA, children: t });
}
function rs(e) {
    let { title: t, children: l } = e,
        r = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": r,
        className: re.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: r,
                className: re.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function ro(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: re.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: re.p8,
                children: [
                    (0, n.jsx)(tM._, { className: re.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: re.bG, children: l }),
        ],
    });
}
function ru(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(ra, {
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
    return (0, n.jsx)(ra, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: re.Kv,
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
function rd(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: re.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: re.uh,
                          children: C.intl.string(E.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          ra,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: re.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: re.Px,
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
function rc(e) {
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
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: re.E7, children: l });
}
function rf(e) {
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
                a9.filter((e) => n.has(e))
            );
        })(l, { childCount: o, hasParent: null != i }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != aX.get(t)) return;
                    let l = new AbortController();
                    return (
                        a0(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let r = aX.get(t);
            return null != r ? { status: "loaded", rich: r } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = aK(l.startedAt, "millis"),
        m = a4(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r());
            },
            [r],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: re._0,
        onKeyDown: h,
        role: "region",
        "aria-label": C.intl.formatToPlainString(E.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: re.sy,
                children: (0, n.jsxs)("div", {
                    className: re.HI,
                    children: [
                        (0, n.jsx)(rl, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${re.PY} ${rn[m]}`,
                            children: a5(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: re.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: re.l5,
                            children: null == l.durationMs ? C.intl.string(E.default.HpKDyl) : a2(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: re.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            u.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(rs, {
                      title: C.intl.string(E.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(ru, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(rd, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(rc, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(rs, {
                      title: C.intl.string(E.default.KXrf5F),
                      children: [
                          (0, n.jsx)(rr, {
                              label: C.intl.string(E.default["2Aii2k"]),
                              value: C.intl.formatToPlainString(E.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(rr, {
                                    label: C.intl.string(E.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(ra, {
                                    label: C.intl.string(E.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: C.intl.string(E.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(rd, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(rs, {
                      title: C.intl.string(E.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(ri, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(rr, {
                                            label: C.intl.string(E.default.Ran4BY),
                                            value: C.intl.formatToPlainString(E.default["PYO+Jv"], {
                                                tokens: a7(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(rr, {
                                            label: C.intl.string(E.default.vPIcyv),
                                            value: C.intl.formatToPlainString(E.default.Qy2iTq, {
                                                system: a7(l.systemTokens),
                                                tools: a7(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: a7(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(rr, {
                                            label: C.intl.string(E.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(rr, {
                                            label: C.intl.string(E.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(rr, {
                                            label: C.intl.string(E.default.VyAl6j),
                                            value: C.intl.formatToPlainString(E.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(rr, {
                                            label: C.intl.string(E.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: re.E7,
                              children: C.intl.string(E.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: re.E7,
                      children: C.intl.string(E.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, n.jsx)(ro, {
                      title: C.intl.string(E.default.T7SFyZ),
                      children: (0, n.jsxs)(ri, {
                          children: [
                              null == i
                                  ? null
                                  : (0, n.jsx)(ra, {
                                        label: C.intl.string(E.default.NnBqcd),
                                        value: (0, n.jsx)(eJ.D, {
                                            tag: "div",
                                            className: re.mi,
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
                                  : (0, n.jsx)(rr, {
                                        label: C.intl.string(E.default.fI6mzD),
                                        value: C.intl.formatToPlainString(E.default.hO8FYp, { count: o }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(rr, { label: C.intl.string(E.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(rr, { label: C.intl.string(E.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(rr, { label: C.intl.string(E.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(rr, { label: C.intl.string(E.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: re.Hm,
                                                children: C.intl.string(E.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    rr,
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
                className: re.E7,
                children: C.intl.string(E.default.khAjR0),
            }),
        ],
    });
}
let rm = { model: re.WI, subagent: re.uM, context: re.eH, tool: re.pw, delegated: re.C8 };
function rh(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = a4(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return a3.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        r = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: re.M0,
        children: [
            (0, n.jsx)("div", {
                className: re.pZ,
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
                                            className: `${re.dL} ${rm[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: re.z4,
                role: "group",
                "aria-label": C.intl.string(E.default.UZ1OlR),
                children: a3.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        i = t?.calls ?? 0,
                        s = 0 === r ? 0 : Math.round((a / r) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: re.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${re.A9} ${rm[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a5(e) }),
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
                                          children: a2(a),
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
let rg = { model: re.WI, subagent: re.uM, context: re.eH, tool: re.pw, delegated: re.C8 };
function rx(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: r, onKeyDown: i, nested: s } = e,
        o = a4(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? C.intl.formatToPlainString(E.default["PYO+Jv"], { tokens: a7(t.promptTokens) })
                : null != t.durationMs
                  ? a2(t.durationMs)
                  : null;
    return (0, n.jsxs)(eJ.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${re.nM} ${s ? re.A5 : ""} ${"error" === t.status ? re.Cr : ""} ${l ? re.CZ : ""}`,
        onKeyDown: i,
        onClick: () => r(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: re.sU,
                children: [
                    (0, n.jsx)(rl, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${re.PY} ${rg[o]}`,
                        children: a5(o),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: re.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: re.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: re.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: re.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rp(e) {
    var t;
    let { projectId: l, query: r } = e,
        i = (0, D.yK)([ar.Ay], () => ar.Ay.getTrace(l), [l]),
        s = (0, D.bG)([ar.Ay], () => ar.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => a1, [l]);
    let [o, u] = a.useState(null),
        [d, c] = a.useState(40),
        [f, m] = a.useState(!1),
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
            return 0 === t ? 40 : (0, t5.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, t5.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, nK.A)({
            resizableDomNodeRef: g,
            orientation: nK.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, t5.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (u(null), j(o));
        }, [o, j]),
        T = a.useMemo(() => a6(i, r), [i, r]),
        M = a.useMemo(
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
                    .map((e, t) => ({ ...e, index: t, entries: a6(e.entries, r) }))
                    .filter((e) => e.entries.length > 0),
            [i, r],
        ),
        R = a8(T, o),
        P = R?.kind === "tool" ? a8(i, R.parentId ?? null) : null,
        _ = null == R ? 0 : ((t = R.id), i.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = T[T.length - 1];
    a.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, o]);
    let F = a.useCallback(
        (e) => {
            if (0 === T.length) return;
            let t = T.findIndex((e) => e.id === o);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(T.length - 1, t));
                (u(T[l].id), document.getElementById(`trace-${T[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? T.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(T.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), j(o));
        },
        [T, o, j],
    );
    return 0 === i.length
        ? (0, n.jsx)("div", {
              className: re.uP,
              ref: h,
              children: (0, n.jsx)(a_, {
                  state: s,
                  emptyTitle: C.intl.string(E.default.Iyt8OJ),
                  emptyBody: C.intl.string(E.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${re.uP} ${f ? re.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: re.DK,
                      children: [
                          (0, n.jsx)(rh, { entries: i }),
                          (0, n.jsx)(aP, { state: s }),
                          0 === T.length
                              ? (0, n.jsx)("div", {
                                    className: re.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: C.intl.string(E.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: re.Ns,
                                    children: [
                                        (0, n.jsx)(aL, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": C.intl.string(E.default["QATZ+A"]),
                                            className: re.p_,
                                            children: M.map((e) => {
                                                let t = aK(e.startedAt),
                                                    l = C.intl.formatToPlainString(E.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: re.mf,
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
                                                                              children: a2(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: re.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        rx,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? T[0]?.id),
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
                                    className: re.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: re.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(rf, {
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
var rv = l(402879);
function rb(e) {
    let { projectId: t, query: l, onQueryChange: r } = e,
        i = (0, D.yK)([ar.Ay], () => ar.Ay.getTrace(t), [t]),
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
            (0, rv.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [i, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: re.ED,
                children: (0, n.jsx)(aM.I, {
                    query: l,
                    onChange: r,
                    onClear: () => r(""),
                    size: "sm",
                    placeholder: C.intl.string(E.default.NfncNw),
                    "aria-label": C.intl.string(E.default.NfncNw),
                }),
            }),
            (0, n.jsx)(tY.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: tY.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(tX.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": C.intl.string(C.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(tQ.rX, {
                            children: (0, n.jsx)(tQ.Dr, {
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
                    return (0, n.jsx)(th.K, {
                        ...e,
                        buttonRef: s,
                        icon: lH.MoreHorizontalIcon,
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
var rj = l(497243);
function ry(e) {
    let { projectId: t, onClose: l } = e,
        [r, i] = a.useState("logs"),
        [s, u] = a.useState(""),
        c = (0, D.bG)([n7.A], () => n7.A.isDeveloper),
        m = (0, D.bG)([aa], () => aa.getStatus(t), [t]),
        h = (0, D.bG)([aa], () => aa.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, f.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, n5.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: aa.getStatus(t),
                        last_turn_usage: aa.getLastTurnUsage(t),
                        last_compaction: aa.getLastCompaction(t),
                        last_compaction_decline: aa.getLastCompactionDecline(t),
                        model_calls: aa.getModelCalls(t),
                        logs: ar.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, nQ.P0)((0, nZ.o)(C.intl.string(E.default.sDSDiO), nJ.Ck.SUCCESS)),
            );
        }, [t]),
        p = C.intl.string(E.default.KampIf);
    return (0, n.jsxs)("section", {
        className: rj.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: n0.CopyIcon,
                            tooltip: C.intl.string(E.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: n1.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: rj.rf,
                children: [
                    (0, n.jsxs)(n2.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => i(e),
                        "aria-label": C.intl.string(E.default.uNyR86),
                        className: rj.vR,
                        children: [
                            (0, n.jsx)(n2.V.Item, { id: "logs", children: C.intl.string(E.default["1mpzdJ"]) }),
                            (0, n.jsx)(n2.V.Item, { id: "worker", children: C.intl.string(E.default.whGHLD) }),
                            (0, n.jsx)(n2.V.Item, { id: "agent", children: C.intl.string(E.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(n2.V.Item, { id: "trace", children: C.intl.string(E.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, n.jsx)(a$, { projectId: t })
                        : "worker" === r
                          ? (0, n.jsx)(aV, { status: m, fetchState: h, onRefresh: g })
                          : "trace" === r && c
                            ? (0, n.jsxs)("div", {
                                  className: rj.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rj.XH,
                                          children: (0, n.jsx)(rb, { projectId: t, query: s, onQueryChange: u }),
                                      }),
                                      (0, n.jsx)(rp, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(aI, { projectId: t, status: m, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var rk = l(333007),
    rN = l(621466),
    rw = l(103557),
    rA = l(97808),
    rS = l(778712),
    rE = l(365912),
    rC = l(775121),
    rI = l(486020),
    rT = l(277437);
function rM(e) {
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
            drafts: g,
            addFiles: x,
            removeDraft: p,
            settled: v,
            takeRefs: b,
        } = lm({ projectId: t, surface: "design", onUploadFile: h }),
        j = a.useRef(null),
        y = (f || g.length > 0) && v && !m,
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
    let T = S?.height ?? 44,
        M = r.left + 8,
        R = r.top + 8,
        P = Math.max(l.x, M),
        _ = Math.min(Math.max(l.y + 32 + 4, R), Math.max(R, r.top + r.height - T - 8));
    return (0, n.jsxs)("div", {
        ref: A,
        className: i()(rT.M0, { [rT.ho]: N && !m, [rT.ET]: m }),
        style: { left: P, top: _ },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: j,
                type: "file",
                multiple: !0,
                className: rT.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(e6.m, {
                position: "bottom",
                text: C.intl.string(E.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: rT.tY,
                    onClick: () => j.current?.click(),
                    "aria-label": C.intl.string(E.default.d6Rqlu),
                    children: (0, n.jsx)(tK.H, { size: "custom", color: "currentColor", className: rT.WW }),
                }),
            }),
            (0, n.jsx)(t0.y, {
                autoFocus: !0,
                rows: 1,
                className: rT.hF,
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
            g.length > 0
                ? (0, n.jsx)("div", {
                      className: rT.ZO,
                      children: g.map((e) => (0, n.jsx)(lh, { draft: e, onRemove: p }, e.localId)),
                  })
                : null,
        ],
    });
}
var rR = l(320510);
function rP(e) {
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
function r_(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rP(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rL = l(940107),
    rF = l(42843);
let rD = { x: 25, y: 21 };
function r$(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rO(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rq(e, t, l, n) {
    let a = rO(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rz(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rU(e) {
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
function rB(e) {
    let { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: i, toggleRef: s } = e,
        o = null != l && l === r ? t : null,
        { active: u, annotations: d } = (0, eV.Q_)(o),
        c = (0, ns.o4)(o),
        m = (0, tc.useHasAnyModalOpen)(),
        h = (0, D.bG)([eu.default], () => eu.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, S] = a.useState(null),
        [I, T] = a.useState(!1),
        M = a.useRef(null),
        R = a.useRef(null),
        P = a.useRef(null),
        [_, L] = a.useState(null),
        [F, $] = a.useState(!1),
        [O, q] = a.useState(null),
        [z, U] = a.useState(null),
        B = a.useRef(!1),
        [G, W] = a.useState(!1),
        [V, H] = a.useState(null),
        K = u && !c && !m;
    null == O || (K && O.projectId === o) || q(null);
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
                p((t) => (r$(t, e) ? t : e));
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
                (0, rR.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rU(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, eV._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
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
        if (!K || null == x || null == o) return;
        if (null == b) {
            Q.current = x;
            return;
        }
        if (r$(Q.current, x)) return;
        let e = window.setTimeout(() => {
            let e = i();
            if (null == e) return;
            Q.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rR.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = rU(e.response);
                        null != l && (j(l), (0, eV._w)(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let r = rP(e.element);
                            null != r && n.set(a.id, r);
                        }),
                            (0, eV.fA)(o, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, o, i]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), q(null), H(null), j(null));
                };
        }, [K]));
    let Z = a.useRef(null),
        J = a.useRef(null),
        ee = a.useRef(!1),
        et = a.useRef(!1);
    a.useEffect(() => {
        ((et.current = K), K || ((Z.current = null), (J.current = null), (P.current = null), T(!1)));
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
                    (0, rL.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(r_, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || rY(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && $(!0);
                                else {
                                    let e = (0, ew.ts)(t.target);
                                    (L((t) => (rK(t, e) ? t : e)),
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
            (U({ at: O.at, label: O.label, draft: O.draft, instant: e }), W(e), q(null));
        }, [O]);
    (a.useEffect(() => {
        if (!G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => W(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]),
        a.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => U(null), rV);
            return () => clearTimeout(e);
        }, [z]));
    let ea = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        er = null != b || N,
        ei = a.useMemo(() => b?.elements ?? [], [b]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: x, scale: ea };
    }, [x, ea]);
    let eo = a.useCallback(
            (e, t, l) => {
                null != o &&
                    (eU(o, "design"),
                    H(null),
                    (B.current = !1),
                    q({ projectId: o, target: e, anchor: t, draft: "", at: l, label: (0, ew.ts)(e) }));
            },
            [o],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ec = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = R.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ec);
    let ef = a.useCallback(
            (e) => {
                if (null == x || null != V) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), T(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > rH || Math.abs(e.clientY - O.at.y) > rH) && (B.current = !0);
                    return;
                }
                if (!er) return void S(null);
                let t = ed(e, x);
                if (F) {
                    let e = (0, ew.jo)(ei, t.x, t.y),
                        l = null != e && rY(e, x, ea) ? null : e;
                    if (null != l) {
                        let e = (0, ew.ts)(l);
                        L((t) => (rK(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [x, ea, er, ed, F, ei, O, V, ec, el],
        ),
        em = a.useCallback(() => {
            (T(!1), S(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !er || F || null != O || null != V) return;
        let e = P.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, er, F, O, V, el]);
    let eh = a.useCallback(
            (e) => {
                if (null != O || null != V) {
                    (en(), H(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = ed(e, x);
                eo(A, (0, ew.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, ed, O, V, eo, en],
        ),
        eg = a.useCallback(() => {
            null != o && (S(null), (0, eV.PS)(o));
        }, [o]),
        ex = a.useCallback(() => {
            null != o &&
                (null != O
                    ? en()
                    : V?.confirmingRemove === !0
                      ? H({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? H(null)
                        : eg());
        }, [o, O, V, en, eg]),
        ep = a.useRef(ex),
        ev = a.useRef(eg);
    a.useLayoutEffect(() => {
        ((ep.current = ex), (ev.current = eg));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rC.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rC.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, rN.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rE.J$)(e), !0);
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
                    (e.preventDefault(), e.stopPropagation(), ex());
                    return;
                }
                if (null != O || null != V || 0 === ei.length) return;
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
                    eo(A, ew.F6, { x: (x?.left ?? 0) + A.rect.x * ea, y: (x?.top ?? 0) + A.rect.y * ea }));
            },
            [o, O, V, ei, A, eo, ex, x, ea],
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
                null == V ||
                null == g ||
                ((0, ew.to)(V.draft) && ((0, eV.dy)(o, g, V.id, V.draft.trim()), H({ ...V, editing: !1 })));
        }, [o, V, g]),
        eA = a.useCallback(() => {
            null != o && null != V && null != g && ((0, eV.PR)(o, g, V.id), H(null));
        }, [o, V, g]),
        eS = u
            ? y
                ? C.intl.string(E.default.jQQ8i2)
                : N
                  ? C.intl.string(E.default.zvU2QH)
                  : C.intl.formatToPlainString(E.default.A4HDMU, { count: d.length })
            : "",
        eE = K && null != x,
        eC = I && null == V,
        eI = null == V ? null : d.find((e) => e.id === V.id),
        eT = O?.target ?? eI?.target ?? null,
        eM = O ?? z,
        eR = O ?? (z?.instant === !0 ? null : z),
        eP =
            null != eI && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = rz(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rq(eI.target, eI.anchor, x, ea), x)
                : null;
    return (0, rk.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rF.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rF.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eE
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rF.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
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
                              null != A && null == O && null == V ? (0, n.jsx)(rX, { box: rO(A, x, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: M,
                                  className: rF.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rF.xz,
                                      "data-shown": null != A && null == V && null == O ? "" : void 0,
                                      "data-instant": G ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rF.Ux,
                                          children: [
                                              null == _
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rF.Tl, children: _.kind }),
                                              null == _ || "" === _.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rF.kh, children: [" ", _.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: R,
                                  className: rF.Y,
                                  children: eC
                                      ? (0, n.jsx)(lV.A, { className: rF.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eR
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rF.aZ,
                                        style: { transform: `translate3d(${eR.at.x + 12}px, ${eR.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rF.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rF.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rF.Tl, children: eR.label.kind }),
                                                    "" === eR.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rF.kh,
                                                              children: [" ", eR.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: rF.D0, style: rO(eT, x, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rq(e.target, e.anchor, x, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rF.xL,
                                          style: { ...rz(l, x), width: 24, height: 24 },
                                          "aria-label": C.intl.formatToPlainString(E.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ew.iw)(e.target),
                                          }),
                                          "aria-expanded": V?.id === e.id,
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
                                          children: (0, n.jsx)(rG, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eM || null == o
                                  ? null
                                  : (0, n.jsx)(rM, {
                                        projectId: o,
                                        at: { x: eM.at.x + 12, y: eM.at.y + 12 },
                                        bounds: x,
                                        kind: eM.label.kind,
                                        value: eM.draft,
                                        canSubmit: null != O && (0, ew.to)(eM.draft),
                                        onChange: (e) => {
                                            null != O && q({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        closing: null == O,
                                    }),
                              null != eI && null != V && null != eP
                                  ? (0, n.jsxs)(rW, {
                                        point: eP,
                                        frame: x,
                                        authorId: eI.authorId,
                                        title: (0, ew.iw)(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            V.confirmingRemove ? H({ ...V, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            V.editing || V.confirmingRemove || H(null);
                                        },
                                        children: [
                                            V.editing
                                                ? (0, n.jsx)(rw.f, {
                                                      autoFocus: !0,
                                                      label: C.intl.string(E.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: V.draft,
                                                      maxLength: ew.gq,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...V, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rF.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, eV.zz)(eI, g)
                                                ? (0, n.jsx)("div", {
                                                      className: rF.eB,
                                                      children: V.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rF.nv,
                                                                        children: C.intl.string(E.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(X.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: C.intl.string(E.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...V, confirmingRemove: !1 }),
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
                                                                                ...V,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    V.editing
                                                                        ? (0, n.jsx)(X.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ew.to)(V.draft),
                                                                              text: C.intl.string(E.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, n.jsx)(X.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: C.intl.string(E.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...V,
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
function rG(e) {
    let { authorId: t } = e,
        l = (0, D.bG)([eu.default], () => eu.default.getUser(t), [t]);
    return (0, n.jsx)(rA.eu, {
        src: null == l ? null : rI.Ay.getUserAvatarURL(l),
        size: rS._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rW(e) {
    let t,
        l,
        r,
        i,
        s,
        o,
        { point: u, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rD);
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
        className: rF.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rF.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rF.ip, children: (0, n.jsx)(rG, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rF.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rF.zI, children: x }),
        ],
    });
}
let rV = 300,
    rH = 2;
function rK(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rY(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rX(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rF.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rQ = l(11055),
    rZ = l(175841),
    rJ = l(533140),
    r0 = l(342667);
function r1(e) {
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
        className: r0.M0,
        "data-phase": t,
        "data-testid": "vibegrations-control-notice",
        children: [
            (0, n.jsxs)("div", {
                className: r0.sp,
                children: [
                    (0, n.jsx)(rZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                    o ? (0, n.jsx)(no.i, { size: 12, color: "currentColor" }) : null,
                    (0, n.jsxs)("div", {
                        className: r0.f4,
                        children: [
                            (0, n.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "none",
                                className: r0.w9,
                                children: C.intl.string(o ? E.default.ydhvN1 : E.default["7U6tIB"]),
                            }),
                            o
                                ? (0, n.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "none",
                                      className: r0.Rb,
                                      children: C.intl.string(E.default.NldIIG),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            o
                ? (0, n.jsxs)("div", {
                      className: r0.lC,
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
function r2(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: r,
            resolveIframe: i,
            frameId: s,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, ns.o4)(null != l && l === r ? t : null),
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
        c = (0, tc.useHasAnyModalOpen)(),
        f = (0, rJ.V0)(s);
    a.useEffect(() => {
        u && f && null != s && (0, rJ.c2)(s);
    }, [u, f, s]);
    let [m, h] = a.useState(null),
        g = "idle" !== d;
    a.useEffect(() => {
        if (!g) return;
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
    }, [g, i]);
    let x = "idle" !== d && null != m && !c,
        p = x && "controlling" === d,
        v = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height };
    return (0, rk.createPortal)(
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: r0.y4,
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
                          className: r0.om,
                          style: v,
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
                x
                    ? (0, n.jsx)("div", {
                          className: r0.D,
                          style: v,
                          children: (0, n.jsx)(r1, { phase: d, projectId: t, onOpenPublishedApp: o }),
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var r7 = l(314116),
    r5 = l(364522),
    r4 = l(237528),
    r3 = l(664121),
    r6 = l(95477),
    r8 = l(381849),
    r9 = l(724401);
function ie(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function it(e) {
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
        S = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${u}`;
        return (
            Promise.all([(0, f.DM)(l, u), (0, f.ms)(l, u)])
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
        T = a.useCallback(
            (e, t) => {
                (0, r7.A)({
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
        M = a.useCallback(() => {
            (k({ phase: "busy", environment: u, kind: "create" }),
                (0, f._m)(l, u, x)
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
        }, [l, u, x, S]),
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
                ? (0, n.jsx)("div", { className: r9.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: r9.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: r9.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(r5.Ip, {
                          className: r9.p_,
                          children: (0, n.jsx)("div", {
                              className: r9.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, r8.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: r8._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      r = (0, n.jsxs)("div", {
                                          className: r9.KW,
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
                                                  (0, n.jsx)(r4.v, {
                                                      text: C.intl.string(E.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: r9.AD,
                                                title: C.intl.formatToPlainString(E.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: r9.Pf,
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
                                                className: r9.f_,
                                                "aria-disabled": N,
                                                onClick: N
                                                    ? void 0
                                                    : () =>
                                                          T(`${e.label} (${a.absolute ?? e.createdAt})`, () =>
                                                              (0, f.$D)(l, e.id),
                                                          ),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: r9.Pf,
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
            className: r9.nd,
            "aria-label": C.intl.string(E.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: r3.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: r9.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: r9.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(n2.V, {
                                        selectedItem: u,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": C.intl.string(E.default.CNvRyJ),
                                        className: r9.vR,
                                        children: [
                                            (0, n.jsx)(n2.V.Item, {
                                                id: "preview",
                                                children: C.intl.string(E.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(n2.V.Item, {
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
                                          className: r9.lm,
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
                                            className: r9.lm,
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
                            className: r9.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: r9.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r9.Fv,
                                            children: (0, n.jsx)(r6.k, {
                                                label: C.intl.string(E.default.hJb78b),
                                                value: x,
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
                                            onClick: M,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: r9._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r9.kv,
                                            children: (0, n.jsx)(r6.k, {
                                                label: C.intl.string(E.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: ie(_),
                                                max: ie(P),
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
                                                null != L && T(new Date(L).toLocaleString(), () => (0, f.dz)(l, u, L));
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
var il = l(406810),
    ia = l(977628);
function ir(e) {
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
                ? (0, n.jsx)("div", { className: ia.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: ia.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: C.intl.string(E.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: ia.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: C.intl.string(E.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(r5.Ip, {
                          className: ia.p_,
                          children: (0, n.jsx)("div", {
                              className: ia.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, r8.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: r8._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, n.jsxs)(
                                      eJ.D,
                                      {
                                          className: ia.f_,
                                          onClick: () =>
                                              (0, r7.A)({
                                                  title: C.intl.string(E.default.qOUOPE),
                                                  subtitle: C.intl.string(E.default.k2JBj5),
                                                  confirmText: C.intl.string(E.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      (r(), i(e));
                                                  },
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: ia.bc,
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
            className: ia.nd,
            "aria-label": C.intl.string(E.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": C.intl.string(E.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: o.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: il.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: C.intl.string(E.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: ia.rf, children: t }),
            ],
        })
    );
}
var ii = l(120426),
    is = l(873727),
    io = l(147248),
    iu = l(418842),
    id = l(363195),
    ic = l(885386),
    im = l(171936),
    ih = l(796036);
function ig(e) {
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
        [g, x] = a.useState(null),
        p = (0, u.A)(r, o),
        v = p?.id ?? null;
    (!(function (e, t) {
        let l = (0, D.bG)([id.A], () => (0, is.x4)(id.A.theme)),
            n = (0, D.bG)([io.A], () => io.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, D.cf)([t7.Ay], () => ({
                reducedMotion: t7.Ay.useReducedMotion,
                fontScale: (0, is.U0)(),
                highContrast: t7.Ay.isHighContrastModeEnabled,
                forcedColors: t7.Ay.useForcedColors,
                underlineLinks: t7.Ay.alwaysShowLinkDecorations,
            })),
            d = ic.hH.useSetting(),
            c = (0, iu.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, ii.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, is.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rL.W)(n, "set-env", a, {
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
                (x(), v());
            }, [v, x]),
            a.useLayoutEffect(() => {
                let l = (0, ii.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, ii.F)(e, t) && ((g.current = null), v());
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
    })(g, v),
        a.useEffect(() => {
            if (null != t) return (0, im.mn)(t, () => (0, ii.F)(g, v));
        }, [t, g, v]));
    let b = a.useCallback(() => (0, ii.F)(g, v), [g, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()(ej.Mh, c),
                children: [d, (0, n.jsx)("div", { ref: x, className: ej.fm, children: f })],
            }),
            m,
            (0, n.jsx)(r2, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                frameId: v,
                onOpenPublishedApp: h,
            }),
            (0, n.jsx)(rB, {
                projectId: t ?? null,
                applicationId: r,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function ix(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
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
            restoreState: S,
            previewReady: I,
            previewGate: T,
            channelMessages: M,
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
            null != t && ((0, f.Hc)(t), (0, ih.s)());
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
        q = null != M ? M.open : g,
        z = g || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: F,
        className: ej.LB,
        children: (0, n.jsx)(ig, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: u,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : i()(ej.ez, { [ej.zt]: q }),
            content: (0, n.jsx)(eg, {
                applicationId: r,
                previewApplicationId: u,
                surface: m,
                previewReady: I,
                previewGate: T,
                availability: R,
                activeMode: P,
                widgetApplicationId: _,
            }),
            sidebar:
                null != M
                    ? (0, n.jsx)(nX, {
                          open: M.open,
                          maxWidth: O,
                          onWidthChange: c.Zq,
                          children: M.open
                              ? (0, n.jsx)(ey, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && z
                      ? (0, n.jsx)(nX, {
                            open: g,
                            maxWidth: O,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(ry, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            ir,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(it, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rQ.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": C.intl.string(C.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: o.P,
                                                                        tooltip: C.intl.string(E.default.YdgE0j),
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
                                                      children: (0, n.jsx)(nG, { projectId: t, restoreState: S }, t),
                                                  }),
                                              ],
                                          }),
                            }),
                        })
                      : null,
        }),
    });
}
