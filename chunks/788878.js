l.d(t, { A: () => rQ });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(991690),
    u = l(789645),
    o = l(672929),
    d = l(58736),
    c = l(948230),
    f = l(277977),
    m = l(289873),
    h = l(627363),
    g = l(580954),
    x = l(753514),
    p = l(297264),
    v = l(834730),
    b = l(343030),
    j = l(625180),
    y = l(91242),
    k = l(317608),
    N = l(206600),
    w = l(869146),
    A = l(742023),
    S = l(697744),
    C = l(50617),
    E = l(375708),
    I = l(296167);
function T(e) {
    let { className: t } = e,
        { Component: l, events: i, getDuration: r } = (0, S.c)();
    return (
        a.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != r()) ? i.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [i, r]),
        a.useEffect(() => {
            let e = setInterval(i.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [i]),
        (0, n.jsxs)("div", {
            className: t,
            onMouseEnter: i.onMouseEnter,
            onMouseLeave: i.onMouseLeave,
            children: [
                (0, n.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, n.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: I.o,
                    children: E.intl.string(C.default.jTuX7C),
                }),
            ],
        })
    );
}
var M = l(328284);
function _(e) {
    let { title: t, body: l, wide: a = !1, children: i } = e;
    return (0, n.jsxs)("div", {
        className: r()(M.Bf, a && M.Qx),
        children: [
            (0, n.jsxs)("div", {
                className: M.Ux,
                children: [
                    (0, n.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, n.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            i,
        ],
    });
}
var P = l(652215),
    R = l(165610),
    L = l(963691);
function D(e) {
    let { applicationId: t, surface: l } = e,
        { frame: i, state: r } = (0, N.A)({ applicationId: t, surface: l }),
        s = (0, R.VA)(t, l);
    switch (
        (a.useEffect(
            () => (
                !(function (e) {
                    let t = y.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT)) return;
                    let l = y.A.getMainFrame()?.id === e;
                    t.intent === R.sV.MAIN
                        ? (l || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : l && j.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = y.A.getFrame(s)) &&
                        ((0, R.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === R.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: R.y0.PIP }))
                            : e.intent === R.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        r)
    ) {
        case N.n.Launched:
            return (0, n.jsx)(k.A, { frameId: i.id, level: b.A.WithinAppContent, className: L.Z7 });
        case N.n.RenderingElsewhere:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(_, {
                    title: E.intl.string(C.default["4f6Vkr"]),
                    body: E.intl.string(C.default.LJ2q1H),
                }),
            });
        case N.n.NoApplication:
            return (0, n.jsx)(T, { className: L.qs });
        case N.n.DoesNotSupportSurface:
            return (0, n.jsx)("div", {
                className: L.qs,
                children: (0, n.jsx)(_, {
                    title: E.intl.string(C.default.FHOJiH),
                    body: E.intl.string(C.default["1yLQoV"]),
                }),
            });
        case N.n.Error:
            return (0, n.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(C.default.MeLWCr),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: E.intl.string(C.default["1RCbQT"]),
                    }),
                ],
            });
        case N.n.AwaitingLaunch:
        case N.n.Loading:
            return (0, n.jsx)("div", { className: L.qs, children: (0, n.jsx)(m.y, {}) });
    }
}
var F = l(17928),
    O = l(323384),
    $ = l(308528),
    z = l(334738),
    q = l(688438),
    B = l(355622),
    U = l(734057),
    G = l(531685),
    H = l(365971),
    V = l(362417);
function W(e) {
    let { message: t } = e;
    return (0, n.jsxs)("div", {
        className: V.f,
        children: [
            (0, n.jsx)(O.k, { size: "lg", color: "var(--icon-muted)" }),
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
        { previewApplicationId: i } = e,
        { data: r, isLoading: s } = (0, h.YY)(i),
        u = r?.bot?.id ?? null,
        o = (0, F.bG)([U.A], () => {
            if (null == u) return null;
            let e = U.A.getDMFromUserId(u);
            return null != e ? U.A.getChannel(e) : null;
        });
    ((t = o?.id ?? null),
        a.useEffect(() => {
            null != t && $.A.preload(P.ME, t);
        }, [t]),
        (l = (0, F.bG)([G.A], () => G.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, H.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
                }
            );
        }, [t, l]));
    let [d, c] = a.useState(null),
        f = null != u && d === u;
    return (a.useEffect(() => {
        if (null == u || null != o) return;
        let e = !1;
        return (
            $.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || c(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, o]),
    s)
        ? (0, n.jsx)(K, {})
        : null == u || f
          ? (0, n.jsx)(W, { message: E.intl.string(C.default.bl4eBc) })
          : null == o
            ? (0, n.jsx)(K, {})
            : (0, n.jsx)("div", {
                  className: V.g,
                  children: (0, n.jsx)(q.A, { channel: o, guild: null, chatInputType: B.oU.SIDEBAR }, o.id),
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
        header: i,
        body: s,
        actions: u,
        nextStep: o,
        appDetails: d,
        hasContentBackground: c,
        noPadding: f,
        obscured: m,
    } = (0, X.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
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
                            i,
                            (0, n.jsxs)("div", {
                                className: r()(J.Qs, c ? J.cw : null, f ? J.pN : null),
                                children: [s, null == o ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != u && u.length > 0
                ? (0, n.jsx)("div", {
                      className: J.o1,
                      children: u.map((e, t) => (0, n.jsx)(Q.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var et = l(598748),
    el = l(486610),
    en = l(531913),
    ea = l(587895),
    ei = l(633075),
    er = l(946356),
    es = l(139730),
    eu = l(58216),
    eo = l(287809),
    ed = l(58551),
    ec = l(71495);
function ef(e) {
    let { applicationId: t } = e,
        l = (0, F.bG)([eo.default], () => eo.default.getCurrentUser());
    return null == l ? null : (0, n.jsx)(em, { applicationId: t, user: l });
}
function em(e) {
    let { applicationId: t, user: l } = e,
        i = (0, F.bG)([ea.A], () => ea.A.getApplication(t)),
        r = a.useMemo(() => new ei.R({ applicationId: t }), [t]),
        s = (0, en.A)(l.id, t),
        u = s.surfaceConfigs,
        o = (0, ed.yZ)({
            widgetTop: null != u[et.m.WIDGET_TOP],
            widgetBottom: null != u[et.m.WIDGET_BOTTOM],
            miniProfile: null != u[et.m.MINI_PROFILE],
        });
    return o.hasAny
        ? (0, n.jsx)("div", {
              className: ec.$C,
              children: (0, n.jsxs)("div", {
                  className: ec.PV,
                  children: [
                      o.hasMainCard
                          ? (0, n.jsx)("div", {
                                className: ec.a9,
                                children: (0, n.jsx)(er.A.Overlay, {
                                    className: ec.Qb,
                                    children: (0, n.jsx)(eu.A, {
                                        user: l,
                                        widget: r,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      o.hasPopoutCard && null != i
                          ? (0, n.jsx)("div", {
                                className: ec.ql,
                                children: (0, n.jsx)(es.A, { application: i, rendererProps: s, renderText: el.hO }),
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
            surface: i,
            previewReady: r,
            previewGate: s,
            availability: u,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        f = (0, o.A)(t, i),
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
    if (!r) return (0, n.jsx)(T, { className: eh.q });
    if (null == t) return null;
    if (v && null == p) return (0, n.jsx)("div", { className: eh.q, children: (0, n.jsx)(m.y, {}) });
    let b = u.showModeSwitch && null != d ? { role: "tabpanel", id: (0, x.z3)(d), "aria-label": (0, x.kZ)(d) } : {};
    return (0, n.jsxs)("div", {
        className: eh.R,
        ...b,
        children: [
            ("frame" === d && u.modes.includes("frame")) || 0 === u.modes.length
                ? (0, n.jsx)(D, { applicationId: t, surface: i })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === u.profileState
                    ? (0, n.jsx)("div", {
                          className: eh.q,
                          children: (0, n.jsx)(_, {
                              wide: !0,
                              title: E.intl.string(C.default.SGHO9K),
                              body: E.intl.string(C.default["pV/rS2"]),
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
        i = (0, ev.Ay)(t),
        r = (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: a });
    return (0, n.jsxs)("div", {
        className: ej.Wx,
        children: [
            (0, n.jsx)(ep.A, { channel: t, draftType: eb.C.ChannelMessage }),
            (0, n.jsxs)(d.Ay, {
                toolbar: r,
                "aria-label": E.intl.string(E.t.BIYAqa),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: ex.ChatIcon, "aria-label": E.intl.string(E.t["/VQax8"]) }),
                    (0, n.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ej.GZ,
                children: (0, n.jsx)(q.A, { channel: t, guild: l, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var ek = l(689175),
    eN = l(65593),
    ew = l(29692),
    eA = l(903586),
    eS = l(783791);
function eC(e) {
    return !(0, eS.BL)(e) && !0 !== e.stopRequested;
}
var eE = l(935208),
    eI = l(435558),
    eT = l.n(eI),
    eM = l(506774),
    e_ = l(73153);
let eP = "VibegrationsComposerDrafts";
function eR() {
    return eM.w.get(eP) ?? {};
}
let eL = new Map(),
    eD = eT().throttle(() => {
        if (0 === eL.size) return;
        let e = eR();
        for (let [t, l] of eL) "" === l ? delete e[t] : (e[t] = l);
        (eL.clear(), eM.w.set(eP, e));
    }, 1e3);
class eF extends F.Ay.Store {
    getDraft(e) {
        let t = eL.get(e);
        return null != t ? t : (eR()[e] ?? "");
    }
}
let eO = new eF(e_.h, {
    LOGOUT: function () {
        return (eL.clear(), eD.cancel(), eM.w.remove(eP), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return (eL.set(t, l), eD(), "" === l && eD.flush(), !1);
    },
});
function e$(e) {
    return "" !== eO.getDraft(e).trim();
}
(l(323874), l(14289), l(35956));
var ez = l(839214),
    eq = l(673724);
let eB = [],
    eU = 1,
    eG = (0, ez.D)(() => ({ draftsByProject: {} }));
function eH(e, t, l) {
    return e.draftsByProject[t]?.[l] ?? eB;
}
function eV(e, t) {
    return eH(eG.getState(), e, t);
}
function eW(e, t, l) {
    let { draftsByProject: n } = eG.getState();
    eG.setState({ draftsByProject: { ...n, [e]: { ...n[e], [t]: l } } });
}
function eK(e, t, l, n) {
    let a = eV(e, t);
    return (
        !!a.some((e) => e.localId === l) &&
        (eW(
            e,
            t,
            a.map((e) => (e.localId === l ? { ...e, ...n } : e)),
        ),
        !0)
    );
}
function eY(e, t) {
    (0, f.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function eQ(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && eY(e, t.ref.id));
}
function eX(e, t) {
    let { deleteFromWorker: l } = t,
        { draftsByProject: n } = eG.getState(),
        a = n[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let n of t ?? eB) l ? eQ(e, n) : null != n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    let { [e]: i, ...r } = n;
    eG.setState({ draftsByProject: r });
}
function eZ(e, t) {
    let l = eV(e, t);
    if (0 !== l.length) {
        for (let t of l) eQ(e, t);
        eW(e, t, eB);
    }
}
function eJ(e, t) {
    let l = eV(e, t);
    if (0 === l.length) return [];
    for (let e of l) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (eW(e, t, eB), l.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function e0(e, t) {
    let { clarificationAnswers: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = eV(e, "chat"),
        a = n.length > 0 && n.every((e) => "ready" === e.status) ? eJ(e, "chat") : [];
    (0, f.dv)(e, t, a, { clarificationAnswers: l });
}
(e_.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(eG.getState().draftsByProject)) eX(e, { deleteFromWorker: !0 });
}),
    e_.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        eX(t, { deleteFromWorker: !1 });
    }));
var e1 = l(74029),
    e2 = l(84442),
    e5 = l(717447),
    e7 = l(29080),
    e4 = l(46054),
    e3 = l(76275);
function e6(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(C.default.MdXWEK);
}
function e8(e) {
    var t;
    let l,
        n,
        { steps: a, content: i, hasProposal: r, hasAttachments: s } = e,
        u = (0, eA.B4)(a),
        o = u.filter((e) => "message" === e.type).at(-1),
        d =
            !r &&
            null != o &&
            ((t = o.content),
            (l = t.trim()),
            (n = i.trim()),
            "" !== l && "" !== n && (l === n || (t.length >= 16e3 && n.startsWith(l))))
                ? o
                : null,
        c = u.filter((e) => e !== d),
        f = c.filter((e) => "message" === e.type).at(-1),
        m = !r && "" !== i.trim();
    return {
        streamed: c,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: m,
        closingContent: m ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: s, showsClosingMessage: m, endsOnStreamedMessage: (0, eA.Lf)(a) }),
    };
}
(l(134528), l(947204));
var e9 = l(939249),
    te = l(478016),
    tt = l(331322),
    tl = l(34136);
function tn(e) {
    let { title: t, trailing: l, children: a, className: i, headerClassName: s, ...u } = e;
    return (0, n.jsxs)("section", {
        className: r()(tl.Nr, i),
        ...u,
        children: [
            (0, n.jsxs)("header", {
                className: r()(tl.wx, null != l && tl.o5, s),
                children: [
                    (0, n.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
var ta = l(113757);
function ti(e) {
    let { idea: t, selected: l, onPick: i } = e,
        s = a.useId(),
        u = null == i;
    return (0, n.jsxs)(e9.D, {
        className: r()(ta.nM, { [ta.f1]: u, [ta.CZ]: l }),
        onClick: u ? void 0 : () => i(t),
        "aria-label": E.intl.formatToPlainString(C.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": u,
        "aria-pressed": l,
        children: [
            (0, n.jsxs)("div", {
                className: ta.jo,
                children: [
                    l
                        ? (0, n.jsx)(te.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ta.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ta.G9,
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
function tr(e) {
    let { ideas: t, pickedIdeaIds: l, onPick: i } = e,
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), i?.(e));
            },
            [i],
        );
    return (0, n.jsx)(tn, {
        title: E.intl.string(C.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, n.jsx)(
                ti,
                { idea: e, selected: r.has(e.id) || l?.has(e.id) === !0, onPick: null == i ? void 0 : u },
                e.id,
            ),
        ),
    });
}
function ts(e) {
    let { onAsk: t } = e;
    return (0, n.jsx)(tt.B, {
        align: "start",
        "data-vibegrations-ideas-offer": !0,
        children: (0, n.jsx)(Q.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: E.intl.string(C.default.cwTe5o),
        }),
    });
}
var tu = l(435619),
    to = l(866665),
    td = l(885574),
    tc = l(430392),
    tf = l(632015),
    tm = l(256905),
    th = l(847374),
    tg = l(320448),
    tx = l(289906);
function tp(e) {
    let { children: t } = e;
    return (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function tv(e) {
    let {
            title: t,
            meta: l,
            superseded: i = !1,
            showLabel: s,
            hideLabel: u,
            bodyClassName: o,
            beforeBody: d,
            children: c,
            ...f
        } = e,
        m = a.useId(),
        [h, g] = a.useState(!i),
        [x, p] = a.useState(i);
    x !== i && (p(i), g(!i));
    let v = a.useCallback(() => g((e) => !e), []),
        b = h ? th.a : tg._,
        j = null != l || i;
    return (0, n.jsxs)(tn, {
        ...f,
        title: t,
        trailing: j
            ? (0, n.jsxs)("span", {
                  className: tx.ZY,
                  children: [
                      l,
                      i
                          ? (0, n.jsx)(e9.D, {
                                className: tx.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? u : s,
                                children: (0, n.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : tx.RG,
        "data-superseded": i ? "true" : void 0,
        children: [d, (0, n.jsx)("div", { id: m, className: r()(tx.rf, o), hidden: !h, children: c })],
    });
}
var tb = l(824757);
function tj(e) {
    let { label: t, info: l, children: a } = e;
    return (0, n.jsxs)("section", {
        className: tb.uW,
        children: [
            (0, n.jsxs)("span", {
                className: tb.a9,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            a,
        ],
    });
}
function ty() {
    return (0, n.jsx)(to.m, {
        text: E.intl.string(C.default.DXe2dP),
        children: (0, n.jsx)(e9.D, {
            className: tb.bk,
            "aria-label": E.intl.string(C.default.Y6y4nQ),
            children: (0, n.jsx)(td.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function tk(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, n.jsx)(tj, {
              label: t,
              children: (0, n.jsx)("div", {
                  className: tb.Ip,
                  children: l.map((e) =>
                      (0, n.jsx)(
                          "span",
                          {
                              className: tb.jw,
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
function tN(e) {
    let { isActivity: t, hasWidget: l } = e,
        a = t ? O.k : tc.RobotIcon;
    return (0, n.jsxs)("span", {
        className: tb.K2,
        children: [
            l
                ? (0, n.jsxs)("span", {
                      className: tb.L6,
                      children: [
                          (0, n.jsx)(tf.f, {
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
                              children: E.intl.string(C.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, n.jsxs)("span", {
                className: tb.L6,
                children: [
                    (0, n.jsx)(a, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: E.intl.string(t ? E.t.IC5Ann : C.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function tw(e) {
    let { projectId: t, design: l } = e,
        { id: i } = l,
        {
            src: r,
            gone: s,
            handleError: u,
        } = (function (e, t) {
            let [l, n] = a.useState(null),
                [i, r] = a.useState(!1),
                [s, u] = a.useState(0);
            return (
                a.useEffect(() => {
                    let l = !1;
                    return (
                        (0, f.PK)(e, t).then(
                            (e) => {
                                l || n(e);
                            },
                            () => {
                                l || (0 === s ? u(1) : r(!0));
                            },
                        ),
                        () => {
                            l = !0;
                        }
                    );
                }, [e, t, s]),
                {
                    src: l,
                    gone: i,
                    handleError: a.useCallback(() => {
                        (n(null),
                            (0, f.n6)(e, t).then(
                                (e) => {
                                    e && 0 === s ? u(1) : r(!0);
                                },
                                () => r(!0),
                            ));
                    }, [e, t, s]),
                }
            );
        })(t, i),
        o = E.intl.string(C.default.FW8UcU),
        d = a.useCallback(() => {
            (0, f.PK)(t, i).then(
                (e) => {
                    (0, tm.R)({
                        items: [{ type: "IMAGE", url: e, alt: o }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, i, o]);
    return s
        ? null
        : (0, n.jsx)(tj, {
              label: E.intl.string(C.default["9W8SbY"]),
              info: (0, n.jsx)(ty, {}),
              children: (0, n.jsx)(e9.D, {
                  className: tb.xX,
                  onClick: d,
                  "aria-label": E.intl.string(C.default.CBrpNv),
                  children: null != r ? (0, n.jsx)("img", { src: r, alt: o, className: tb.sN, onError: u }) : null,
              }),
          });
}
function tA(e) {
    let { projectId: t, proposal: l, version: a, onApprove: i } = e,
        r = a?.superseded === !0,
        s = l.what_changed?.trim() ?? "";
    return (0, n.jsxs)(tv, {
        title:
            r && null != a
                ? E.intl.formatToPlainString(C.default.KdZinO, { version: a.version })
                : E.intl.string(C.default["60htw+"]),
        meta: r
            ? (0, n.jsx)(tp, { children: E.intl.string(C.default.o2zmBB) })
            : (0, n.jsx)(tN, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        superseded: r,
        showLabel: E.intl.string(C.default["1AKkZ2"]),
        hideLabel: E.intl.string(C.default.dm6fQ8),
        bodyClassName: tb.rf,
        "data-vibegrations-plan-card": !0,
        children: [
            "" !== s
                ? (0, n.jsx)(tj, {
                      label: E.intl.string(C.default.ucdH2a),
                      children: (0, n.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: s,
                      }),
                  })
                : null,
            (0, n.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: l.summary,
            }),
            null != l.design_image ? (0, n.jsx)(tw, { projectId: t, design: l.design_image }) : null,
            l.changes.length > 0
                ? (0, n.jsx)(tj, {
                      label: E.intl.string(C.default.KLyB8Y),
                      children: (0, n.jsx)("ul", {
                          className: tb.p_,
                          children: l.changes.map((e, t) =>
                              (0, n.jsx)(
                                  "li",
                                  {
                                      className: tb.Aw,
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
                ? (0, n.jsx)(tj, {
                      label: E.intl.string(E.t["0hKkS+"]),
                      children: (0, n.jsx)("ul", {
                          className: tb.p_,
                          children: l.commands.map((e, t) =>
                              (0, n.jsxs)(
                                  "li",
                                  {
                                      className: tb.uX,
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
            (0, n.jsx)(tk, { label: E.intl.string(C.default.ieqTtP), names: l.bot_permissions ?? [] }),
            (0, n.jsx)(tk, { label: E.intl.string(C.default.Cn9qix), names: l.privileged_intents ?? [] }),
            null == i || r
                ? null
                : (0, n.jsxs)("div", {
                      className: tb.o1,
                      children: [
                          (0, n.jsx)(Q.$, {
                              variant: "primary",
                              size: "sm",
                              text: E.intl.string(C.default["hG0Y0+"]),
                              onClick: i,
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(C.default.Vl3IL0),
                          }),
                      ],
                  }),
        ],
    });
}
var tS = l(548118),
    tC = l(71393),
    tE = l(455435);
function tI(e) {
    return null != e && e.status?.state === "unpublished";
}
function tT(e) {
    let { publish: t } = e,
        l = t.guildId,
        a = (0, F.bG)([tC.A], () => (null == l ? null : tC.A.getGuild(l)));
    return (0, n.jsx)(tt.B, {
        gap: 8,
        align: "start",
        children: (0, n.jsxs)(tt.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, n.jsx)(to.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, n.jsx)(Q.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != a
                    ? (0, n.jsxs)(tt.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(C.default.FLbAwN),
                              }),
                              (0, n.jsx)(tS.Ay, { guild: a, size: tS.Ay.Sizes.SMOL }),
                              (0, n.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let l = t.slice(0, 23).join("");
                                      return `${l.trimEnd()}\u{2026}`;
                                  })(a.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function tM(e) {
    let { projectId: t } = e,
        l = (0, tE.Ay)(t);
    return null != l && tI(l) ? (0, n.jsx)(tT, { publish: l }) : null;
}
var t_ = l(314116),
    tP = l(364522),
    tR = l(406810),
    tL = l(381849),
    tD = l(977628);
function tF(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, tL.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: tL._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function tO(e) {
    return (0, t_.A)({
        title: E.intl.string(C.default.qOUOPE),
        subtitle: E.intl.string(C.default.k2JBj5),
        confirmText: E.intl.string(C.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function t$(e) {
    let t,
        { projectId: l, onClose: i, onRestore: r } = e,
        [s, o] = a.useState({ status: "loading" });
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                (0, f.ST)(l)
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
            "loading" === s.status
                ? (0, n.jsx)("div", { className: tD.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === s.status
                  ? (0, n.jsx)("div", {
                        className: tD.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(C.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, n.jsx)("div", {
                          className: tD.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default.TOmYPT),
                          }),
                      })
                    : (0, n.jsx)(tP.Ip, {
                          className: tD.p_,
                          children: (0, n.jsx)("div", {
                              className: tD.jO,
                              children: s.entries.map((e) => {
                                  let t = tF(e.authoredAt);
                                  return (0, n.jsxs)(
                                      e9.D,
                                      {
                                          className: tD.f_,
                                          onClick: () =>
                                              tO(() => {
                                                  (i(), r(e));
                                              }),
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: tD.bc,
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
            className: tD.nd,
            "aria-label": E.intl.string(C.default.jAWwzi),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": E.intl.string(C.default.jAWwzi),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: i }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: tR.ClockIcon, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: E.intl.string(C.default.jAWwzi) }),
                    ],
                }),
                (0, n.jsx)("div", { className: tD.rf, children: t }),
            ],
        })
    );
}
var tz = l(584698);
function tq(e) {
    let { proposal: t, onRestore: l } = e,
        a = tF(t.authored_at);
    return (0, n.jsx)(tn, {
        title: E.intl.string(C.default.khdMoL),
        children: (0, n.jsxs)("div", {
            className: tz.r,
            children: [
                (0, n.jsxs)("div", {
                    className: tz.z,
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
                    ? (0, n.jsx)(Q.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(C.default.eSDVDt),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
var tB = l(530557),
    tU = l(872162),
    tG = l(192308),
    tH = l(479191);
function tV(e) {
    let { projectId: t, request: i, awaiting: r } = e,
        s = a.useCallback(() => {
            (0, tG.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, n.jsx)(e, { ...l, projectId: t, request: i });
            });
        }, [t, i]),
        u = a.useMemo(() => i.fields.map((e) => ({ id: e.name, label: e.label, icon: tB.R })), [i.fields]);
    return (0, n.jsxs)("article", {
        className: tH.L,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: null != r ? "text-brand" : "text-muted",
                tag: "span",
                children: E.intl.string(null != r ? C.default.sKNh1M : C.default["/e28TK"]),
            }),
            (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != i.note && "" !== i.note ? i.note : E.intl.string(C.default.jxvtin),
            }),
            (0, n.jsx)(tU.C, { label: E.intl.string(C.default["/e28TK"]), size: "xs", items: u }),
            (0, n.jsx)("div", {
                className: tH.s,
                children: (0, n.jsx)(Q.$, {
                    variant: "primary",
                    size: "sm",
                    onClick: s,
                    text: E.intl.string(C.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tW = l(349735),
    tK = l(450112),
    tY = l(973e3);
function tQ(e) {
    let { projectId: t, request: l, onDismiss: a } = e,
        i = null != l.note && "" !== l.note ? l.note : E.intl.string(C.default["V+DBhs"]);
    return (0, n.jsx)(tW.A, {
        projectId: t,
        scopeKeys: l.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: l, saving: s, submit: o } = e;
            function d(e) {
                (e.preventDefault(), o());
            }
            let c = (0, n.jsx)(Q.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: s,
                disabled: !l,
                text: E.intl.string(C.default.Tuz9vw),
            });
            return null == a
                ? (0, n.jsxs)("form", {
                      className: tY.Mk,
                      onSubmit: d,
                      children: [
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(C.default.wgDhiQ),
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, n.jsx)("div", { className: tY.p0, children: c }),
                      ],
                  })
                : (0, n.jsxs)("form", {
                      className: r()(tK.nd, tK.jx),
                      "aria-label": E.intl.string(C.default.wgDhiQ),
                      onSubmit: d,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tK.wx,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: tK.TK,
                                      children: E.intl.string(C.default.wgDhiQ),
                                  }),
                                  (0, n.jsx)(e9.D, {
                                      className: r()(tK.gb, tK.Q7),
                                      onClick: a,
                                      "aria-label": E.intl.string(C.default["6UTDHm"]),
                                      children: (0, n.jsx)(u.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: tY.DQ,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: tK.qr,
                              children: (0, n.jsx)("div", { className: tK.zt, children: c }),
                          }),
                      ],
                  });
        },
    });
}
var tX = l(196582);
let tZ = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    tJ = {
        snail: () => C.default["2l3AEQ"],
        goat: () => C.default["+FPL+I"],
        frog: () => C.default.w4GOfR,
        bunny: () => C.default.XmZT9M,
        cat: () => C.default.NnydwQ,
        caterpillar: () => C.default["4iXcNT"],
        butterfly: () => C.default.DoTGt5,
        dog: () => C.default["9zxqmP"],
        spider: () => C.default.HF0T3L,
        bee: () => C.default.XTzDga,
        bot: () => C.default.abtC2b,
    },
    t0 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: a, role: i, size: r = 64 } = e;
                return (0, n.jsx)("img", {
                    style: { width: r, height: r },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": a,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function t1(e) {
    return { ...t0[e], name: E.intl.string(tJ[e]()) };
}
function t2(e) {
    return tZ.includes(e) ? t1(e) : void 0;
}
function t5(e) {
    let t = new Map();
    for (let [l, n] of (function (e) {
        let t = 0,
            l = e[0] ?? "";
        for (let e = 0; e < l.length; e++) t = (31 * t + l.charCodeAt(e)) % tZ.length;
        let n = new Map();
        return (
            e.forEach((e, l) => {
                n.set(e, tZ[(t + l) % tZ.length]);
            }),
            n
        );
    })(e))
        t.set(l, t1(n));
    return t;
}
var t7 = l(683063),
    t4 = l(705754),
    t3 = l(883455),
    t6 = l(13699);
function t8(e) {
    let { projectId: t, lane: l, Illocon: a, tint: i, name: r, connectsDown: s } = e,
        u = l.task,
        o = "running" === u.status,
        d = (0, eA.SY)(l.steps),
        c = o
            ? null != d
                ? (0, eA.WQ)(d)
                : e6(u)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(e6(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(C.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(C.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(C.default.vuv9bT, {
                                  task: t,
                                  duration: (0, e3.MB)(e.durationMs),
                              });
                          return E.intl.formatToPlainString(C.default.KS49RN, { task: t });
                      default:
                          return E.intl.formatToPlainString(C.default.KS49RN, { task: t });
                  }
              })(u),
        f = o ? d : void 0,
        m =
            u.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, n.jsx)("ol", {
                                    className: t6.dO,
                                    children: l.steps.map((e) =>
                                        (0, n.jsx)(
                                            t3.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: t6.iq,
                                      children: (0, n.jsx)(t4.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, n.jsx)(tX.A, {
        glyph: (0, n.jsx)(t7.u, {
            asset: (0, n.jsx)(a, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: e6(u),
            position: "left",
            children: (0, n.jsx)("span", {
                className: t6.nC,
                children: (0, n.jsx)(a, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: o,
        settled: !o,
        tint: i,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var t9 = l(140735),
    le = l(329456);
let lt = [];
function ll(e) {
    let { status: t } = e;
    return (0, n.jsxs)("span", {
        className: r()(le.xL, {
            [le.Vb]: "in_progress" === t,
            [le.cT]: "completed" === t,
            [le.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(C.default.TkPGOH);
                case "in_progress":
                    return E.intl.string(C.default["oK+fmd"]);
                case "unfinished":
                    return E.intl.string(C.default["1ley3g"]);
                default:
                    return E.intl.string(C.default.d7lieu);
            }
        })(t),
        children: [
            (0, n.jsx)(m.y, {
                type: m.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: le.Qd,
                itemClassName: le.xB,
                "aria-hidden": !0,
            }),
            (0, n.jsx)("svg", {
                className: le.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, n.jsx)("path", { className: le.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ln(e) {
    let { agents: t, active: l } = e,
        i = a.useMemo(() => (l ? t : lt), [l, t]),
        r = a.useMemo(() => new Set(i.map((e) => e.key)), [i]),
        s = i.map((e) => e.key).join("\0"),
        [u, o] = a.useState(i),
        [d, c] = a.useState(s),
        [f, m] = a.useState(!1);
    d !== s && (c(s), o([...i, ...u.filter((e) => !r.has(e.key))]), 0 === i.length && m(!1));
    let h = u.some((e) => !r.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(i), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, i, l]),
        a.useEffect(() => {
            if (!l || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [l, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        x = u.length - g.length;
    return (0, n.jsxs)("span", {
        className: le.X6,
        "data-shown": l && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: a, task: i } = e,
                    { Illocon: s } = l;
                return (0, n.jsx)(
                    t7.u,
                    {
                        asset: (0, n.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: a,
                        body: i,
                        position: "top",
                        children: (0, n.jsx)("span", {
                            className: le.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
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
                      className: le.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function la(e) {
    let t,
        { todos: l, provisional: i, agents: s, live: u = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [l, n] = a.useState(() => new Set(e)),
                [i, r] = a.useState(t),
                [s, u] = a.useState(() => new Set());
            return (
                i !== t && (r(t), n(new Set(e)), u(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
                a.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => l.map((e) => e.id), [l])),
        d =
            ((t = (s ?? lt).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(() => {
                let e = new Map();
                for (let t of s ?? lt) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, n.jsxs)("ul", {
        className: le.p_,
        children: [
            l.map((e) => {
                var t;
                let l = ((t = e.status), "completed" === t || u ? t : "unfinished");
                return (0, n.jsxs)(
                    "li",
                    {
                        className: r()(le.AS, { [le.J1]: "completed" === l }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, n.jsx)(ll, { status: l }),
                            (0, n.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === l || "pending" === l ? "text-default" : "text-subtle",
                                tag: "span",
                                className: le.iV,
                                selectable: !0,
                                children: (0, n.jsx)("span", {
                                    className: le.Qq,
                                    children:
                                        "in_progress" === l && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, n.jsx)(ln, { agents: d.get(e.id) ?? lt, active: "completed" !== l }),
                        ],
                    },
                    e.id,
                );
            }),
            null != i
                ? (0, n.jsxs)("li", {
                      className: le.AS,
                      "data-provisional": !0,
                      children: [
                          (0, n.jsx)(ll, { status: "pending" }),
                          (0, n.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: le.iV,
                              selectable: !0,
                              children: (0, n.jsx)("span", { className: le.Qq, children: i }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function li(e) {
    let { todos: t, provisional: l, agents: a, announceProgress: i = !0, live: r = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let d = E.intl.formatToPlainString(C.default.bQvqly, { completed: u, total: o }),
        c = E.intl.formatToPlainString(C.default["QG/EiF"], { completed: u, total: o });
    return (0, n.jsx)(tv, {
        title: E.intl.string(C.default.qCRC6c),
        meta: (0, n.jsx)(tp, { children: d }),
        superseded: s,
        showLabel: E.intl.string(C.default.SVhXLT),
        hideLabel: E.intl.string(C.default.fIBJas),
        className: le.Nr,
        bodyClassName: le.rf,
        beforeBody: i && !s ? (0, n.jsx)(t9.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-vibegrations-todo-card": !0,
        children: (0, n.jsx)(la, { todos: t, provisional: l, agents: a, live: r }),
    });
}
var lr = l(744239),
    ls = l(229775),
    lu = l(165648);
function lo(e) {
    let t = t5(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? t2(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: e6(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ld(e) {
    let {
            projectId: t,
            steps: l,
            active: i = !1,
            turnActive: r = i,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: d,
            provisionalTodo: c,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: x,
        } = e,
        p = a.useMemo(() => (0, eA.GO)(l, { turnActive: i }), [l, i]),
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
    if (o)
        return (0, n.jsx)("ol", {
            className: t6.pj,
            "data-live": !1,
            children: (0, n.jsx)(tX.A, {
                glyph: (0, n.jsx)(e7.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(C.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let b = i ? void 0 : (x ?? (h ? (p.turn?.durationMs ?? u) : void 0)),
        j = m ? ((0, eA.lt)(l) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        N = t5(k.map((e) => e.taskId)),
        w = !g && (i || k.some((e) => "running" === e.task.status)),
        A = lo(k);
    return (0, n.jsx)(tX.l.Provider, {
        value: k.length,
        children: (0, n.jsxs)("ol", {
            className: t6.pj,
            "data-live": w,
            children: [
                (0, n.jsx)(e5.A, {
                    projectId: t,
                    steps: v.steps,
                    fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: i,
                    closed: g,
                    durationMs: b,
                    connectsDown: k.length > 0,
                    tier: p.turn?.tier,
                }),
                k.map((e, l) => {
                    let a = null != e.task.helperMark ? t2(e.task.helperMark) : void 0,
                        i = a ?? N.get(e.taskId);
                    return null == i
                        ? null
                        : (0, n.jsx)(
                              t8,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != a && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: l < k.length - 1,
                              },
                              e.taskId,
                          );
                }),
                y
                    ? (0, n.jsx)("li", {
                          className: t6.YO,
                          children: (0, n.jsx)(li, { todos: j, provisional: c, agents: A, live: r, superseded: s }),
                      })
                    : null,
            ],
        }),
    });
}
function lc(e) {
    let {
            projectId: t,
            steps: l,
            content: i,
            proposal: s,
            planVersion: u,
            ideas: o,
            attachments: d,
            secretRequest: c,
            secretRequestAwaiting: f,
            settingsRequest: m,
            publishCta: h,
            onPickIdea: g,
            pickedIdeaIds: x,
            onApprovePlan: p,
            sideReply: b = !1,
            hoistedProse: j = !1,
            hoistedAttachmentsHost: y,
            restoreProposal: k,
            onRestoreProposal: N,
        } = e,
        w = a.useMemo(
            () => e8({ steps: l, content: i, hasProposal: null != s, hasAttachments: null != d && d.length > 0 }),
            [l, i, s, d],
        ),
        { streamed: A, lastStreamedMessage: S, showsClosingMessage: I, closingContent: T } = w,
        M = (j ? y : void 0) ?? w.attachmentsHost,
        _ = I && !j,
        P = null == d ? null : (0, n.jsx)(tu.A, { projectId: t, attachments: d }),
        R = null == P ? null : (0, n.jsx)("div", { className: t6.MT, children: P }),
        L = b
            ? (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(C.default.OAjkIT),
              })
            : null;
    return (0, n.jsxs)("div", {
        className: t6.ue,
        children: [
            A.length > 0 && !j
                ? (0, n.jsx)("ol", {
                      className: t6.dO,
                      children: A.filter((e) => "todos" !== e.type).map((e) =>
                          (0, n.jsxs)(
                              "li",
                              {
                                  className: t6.DV,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: lu.PT,
                                          children: e4.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === M && e === S ? R : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, n.jsx)(tA, { projectId: t, proposal: s, version: u, onApprove: p })
                : _
                  ? (0, n.jsxs)("div", {
                        className: r()(t6.ky, ls.XR),
                        children: [
                            (0, n.jsx)("div", {
                                className: r()(lu.PT, t6.cW),
                                children: e4.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? R : null,
                            L,
                        ],
                    })
                  : null,
            null != c
                ? (0, n.jsx)("div", {
                      className: r()(t6.ky, ls.XR, { [lr.O]: null != f }),
                      children: (0, n.jsx)(tV, { projectId: t, request: c, awaiting: f }),
                  })
                : null,
            null != m
                ? (0, n.jsx)("div", {
                      className: r()(t6.ky, ls.XR),
                      children: (0, n.jsx)(tQ, { projectId: t, request: m }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : P,
            null != h ? (0, n.jsx)(tM, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, n.jsx)(tr, { ideas: o, pickedIdeaIds: x, onPick: g }) : null,
            null != k ? (0, n.jsx)(tq, { proposal: k, onRestore: N }) : null,
            _ ? null : L,
        ],
    });
}
var lf = l(864970),
    lm = l(146806),
    lh = l(475358),
    lg = l(81369),
    lx = l(922016),
    lp = l(980707),
    lv = l(477782),
    lb = l(717400),
    lj = l(663341),
    ly = l(826745),
    lk = l(783977),
    lN = l(559647),
    lw = l(775602),
    lA = l(234320),
    lS = l(379307),
    lC = l(285796),
    lE = l(590380),
    lI = l(298668);
let lT = eq.Is;
function lM(e, t, l, n) {
    let a = eV(e, t).length;
    !(function (e, t, l) {
        if (0 === l.length) return;
        let n = l.map((e) => {
            let { draft: t, upload: l } = e;
            return { draft: { ...t, localId: eU++ }, upload: l };
        });
        for (let { draft: l, upload: a } of (eW(e, t, [
            ...eV(e, t),
            ...n.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        n))
            a?.().then(
                (n) => {
                    "errorText" in n
                        ? eK(e, t, l.localId, { status: "error", errorText: n.errorText })
                        : eK(e, t, l.localId, { status: "ready", ref: n })
                          ? setTimeout(
                                () =>
                                    eK(e, t, l.localId, {
                                        status: "error",
                                        errorText: E.intl.string(C.default.HL9CT6),
                                    }),
                                eq.$f - 3e5,
                            )
                          : eY(e, n.id);
                },
                (n) => {
                    (console.error("[vibegrations] attachment upload failed", n),
                        eK(e, t, l.localId, { status: "error", errorText: E.intl.string(C.default.GwEHvn) }));
                },
            );
    })(
        e,
        t,
        l.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                l = { name: e.name, contentType: t };
            if (a++ >= lT)
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: E.intl.formatToPlainString(C.default.DlX57a, { count: lT }),
                    },
                };
            if (!(0, eq.x5)(e.size, t))
                return {
                    draft: {
                        ...l,
                        status: "error",
                        errorText: E.intl.formatToPlainString(C.default.cI7t94, { size: (0, eq.ZJ)((0, eq.yr)(t)) }),
                    },
                };
            let i = eq.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...l, status: "uploading", previewUrl: i }, upload: () => n(e) };
        }),
    );
}
function l_(e) {
    let { projectId: t, surface: l, onUploadFile: n } = e,
        i = eG.useState((e) => eH(e, t, l)),
        r = a.useCallback((e) => lM(t, l, e, n), [t, l, n]),
        s = a.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        u = a.useCallback(
            (e) => {
                let n, a;
                null != (a = (n = eV(t, l)).find((t) => t.localId === e)) &&
                    (eQ(t, a),
                    eW(
                        t,
                        l,
                        n.filter((t) => t.localId !== e),
                    ));
            },
            [t, l],
        ),
        o = a.useCallback(() => eJ(t, l), [t, l]);
    return {
        drafts: i,
        addFiles: r,
        pasteFiles: s,
        removeDraft: u,
        settled: i.every((e) => "ready" === e.status),
        takeRefs: o,
    };
}
function lP(e) {
    let { draft: t, onRemove: l } = e;
    return (0, n.jsxs)(lE.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: lI.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: lI.o1,
                onClick: () => l(t.localId),
                "aria-label": E.intl.string(C.default["3HWvgk"]),
                children: (0, n.jsx)(lC.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lR = l(789438);
let lL = "text-md/normal",
    lD = null;
function lF(e) {
    let { text: t, offering: l, typed: i } = e,
        [s, u] = a.useState(t),
        o = a.useRef(null),
        d = a.useRef(null),
        c = a.useRef(0),
        [f, m] = a.useState(0),
        [h, g] = a.useState(0),
        [x, p] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let l = c.current;
        function n() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let n = d.current;
            if (null == n) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(a) ? 0 : a,
                r = e.offsetWidth,
                s = n.offsetWidth + i;
            (g(r + i), m(s));
            let u = s + r,
                c = Math.max(l, n.offsetWidth) + i + r,
                f = 0 === c ? 1 : s / c,
                h = 0 === c ? 1 : u / c;
            p({
                frontFrom: 1e3 * (0, lm._R)(f),
                frontTo: 1e3 * (0, lm._R)(h),
                backFrom: 1e3 * (0, lm.T)(f),
                backTo: 1e3 * (0, lm.T)(h),
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
        I = (0, F.bG)([lw.Ay], () => lw.Ay.useReducedMotion),
        T = t === E.intl.string(C.default.Jj8Ftb),
        M = s === t && T;
    function _(e, t, l) {
        let a = null != l;
        return (0, n.jsx)("span", {
            ref: l,
            className: r()(lR.VT, { [lR.qk]: a }),
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
            children: (0, n.jsx)(lh.e, { shortcut: "tab", className: lR.xT, keyClassName: e }),
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(lf.o, {
                text: t,
                variant: lL,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: r()(lR.xM, { [lR.s2]: i }),
                onStart: w,
                onComplete: () => u(t),
            }),
            _(lR.IS, l || (!I && "out" === y), o),
            (0, n.jsx)("span", {
                ref: d,
                className: lR.QI,
                "aria-hidden": !0,
                children: (0, n.jsx)(v.E, { variant: lL, tag: "span", children: t }),
            }),
            M
                ? (0, n.jsxs)("span", {
                      className: lR.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, n.jsx)(v.E, { variant: lL, tag: "span", className: lR.xM, children: t }),
                          _(lR.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function lO(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: i,
            running: r,
            restoring: s = !1,
            onSend: u,
            onInterrupt: o,
            onUploadFile: d,
            onApprove: f,
            onImport: m,
            suggestion: h,
            questionOpen: g = !1,
            hasPendingContext: x = !1,
            onDraftHasTextChange: p,
            modelSettings: v,
            onModelSettingsChange: b,
        } = e,
        [j, y] = a.useState(() => eO.getDraft(t)),
        k = a.useCallback(
            (e) => {
                ((0, c.I$)(t, e), y(e));
            },
            [t],
        ),
        N = "" !== j.trim();
    a.useEffect(() => p?.(N), [N, p]);
    let [w, A] = a.useState(t);
    w !== t && (A(t), y(eO.getDraft(t)));
    let S = (0, F.bG)([lw.Ay], () => lw.Ay.isSubmitButtonEnabled),
        [I, T] = a.useState(!1);
    a.useEffect(() => {
        r || T(!1);
    }, [r]);
    let M = a.useRef(null),
        {
            drafts: _,
            addFiles: R,
            pasteFiles: L,
            removeDraft: D,
            settled: O,
            takeRefs: $,
        } = l_({ projectId: t, surface: "chat", onUploadFile: d }),
        z = "" !== j.trim() || _.length > 0 || x,
        q = l && z && O,
        [B, U] = a.useState(null);
    a.useEffect(() => {
        if (null == B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]);
    let G = a.useCallback(() => {
            if (!q) return;
            let e = $();
            u(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, l) {
                let n,
                    a,
                    i = l.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == lD && (lD = document.createElement("canvas").getContext("2d"));
                let r = lD;
                if (null == r) return i;
                let s = getComputedStyle(e);
                r.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                let u =
                    t > 0
                        ? t
                        : ((n = parseFloat(s.paddingInlineStart)),
                          (a = parseFloat(s.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(a) ? 0 : a));
                if (u <= 0 || r.measureText(i).width <= u) return i;
                let o = 0,
                    d = i.length;
                for (; o < d;) {
                    let e = Math.ceil((o + d) / 2);
                    r.measureText(i.slice(0, e)).width <= u ? (o = e) : (d = e - 1);
                }
                let c = i.slice(0, o),
                    f = c.lastIndexOf(" ");
                return (f > 0 ? c.slice(0, f) : c).trimEnd();
            })(X.current?.querySelector("textarea") ?? null, er.current, j);
            ("" !== t && U(t), k(""));
        }, [q, j, u, $, k]),
        H = a.useCallback(
            (e) => {
                (e.preventDefault(), G());
            },
            [G],
        ),
        V = a.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        W = null == h || "" !== j || !l || i || s || x ? null : h,
        K = a.useCallback(
            (e) => {
                if ("Escape" === e.key && r && null != o && !I) {
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
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, f, r, o, I, V, W, k],
        ),
        Y = a.useCallback(
            (e) => {
                l && L(e);
            },
            [l, L],
        );
    (0, lA.Vo)({
        event: P.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return Y(t);
        },
    });
    let Q = a.useCallback(
            (e) => {
                (R(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [R],
        ),
        X = a.useRef(null),
        Z = a.useRef(null),
        [J, ee] = a.useState(0),
        [et, el] = a.useState(!1);
    a.useEffect(() => {
        if (0 === j.length) return void el(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = lq(e);
            null != t && ee(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), l$);
        return () => clearTimeout(t);
    }, [j]);
    let en = a.useMemo(() => ({ "--custom-glow-x": `${J}px` }), [J]),
        ea = et ? ` ${lR.EB}` : "",
        ei = s
            ? E.intl.string(C.default.pGFXZ0)
            : i
              ? E.intl.string(C.default.JeM47J)
              : l
                ? x
                    ? E.intl.string(C.default.Bs7bUv)
                    : g
                      ? E.intl.string(C.default.M3ovXY)
                      : E.intl.string(r ? C.default["67PpcP"] : C.default.ahRdoJ)
                : E.intl.string(C.default.nm4w9P),
        er = a.useRef(0),
        es = a.useRef(null),
        eu = a.useCallback((e) => {
            if ((es.current?.disconnect(), null == e)) return;
            er.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                er.current = e.clientWidth;
            });
            (t.observe(e), (es.current = t));
        }, []),
        eo = a.useId(),
        ed = null != W,
        ec = B ?? W ?? ei,
        ef = "" === j && "" !== ec;
    return (0, n.jsxs)("form", {
        onSubmit: H,
        className: lR.DA,
        children: [
            _.length > 0
                ? (0, n.jsx)("div", {
                      className: lR.lN,
                      children: _.map((e) => (0, n.jsx)(lP, { draft: e, onRemove: D }, e.localId)),
                  })
                : null,
            (0, n.jsx)("span", { className: `${lR.wg} ${lR.LP}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsx)("span", { className: `${lR.wg} ${lR.L3}${ea}`, style: en, "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lR.VA,
                ref: X,
                children: [
                    (0, n.jsx)("input", {
                        ref: M,
                        type: "file",
                        multiple: !0,
                        onChange: Q,
                        className: lR.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == m
                        ? (0, n.jsx)(to.m, {
                              text: E.intl.string(C.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, n.jsx)("button", {
                                  ref: Z,
                                  type: "button",
                                  className: `${lR.Y0} ${lR.nu}`,
                                  disabled: !l,
                                  onClick: () => M.current?.click(),
                                  "aria-label": E.intl.string(C.default.d6Rqlu),
                                  children: (0, n.jsx)(lg.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: lR.Qu,
                                  }),
                              }),
                          })
                        : (0, n.jsx)(lx.Y, {
                              targetElementRef: Z,
                              position: "top",
                              align: "left",
                              animation: lx.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, n.jsx)(lp.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": E.intl.string(E.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, n.jsxs)(lv.rX, {
                                          children: [
                                              (0, n.jsx)(lv.Dr, {
                                                  id: "upload-file",
                                                  label: E.intl.string(E.t["d3+iYs"]),
                                                  iconLeft: lg.H,
                                                  leadingAccessory: { type: "icon", icon: lg.H },
                                                  action: () => M.current?.click(),
                                              }),
                                              null != m
                                                  ? (0, n.jsx)(lv.Dr, {
                                                        id: "import-project",
                                                        label: E.intl.string(C.default.edKajy),
                                                        iconLeft: lb.q,
                                                        leadingAccessory: { type: "icon", icon: lb.q },
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
                                      ref: Z,
                                      type: "button",
                                      className: `${lR.Y0} ${lR.nu}`,
                                      disabled: !l,
                                      "aria-label": E.intl.string(E.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": a,
                                      children: (0, n.jsx)(lj.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: lR.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, n.jsx)("div", {
                              ref: eu,
                              className: lR.ar,
                              "aria-hidden": "true",
                              children: (0, n.jsx)(lF, { text: ec, offering: ed && null == B, typed: null != B }),
                          })
                        : null,
                    (0, n.jsx)(ly.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: Y,
                        placeholder: ef ? "" : ei,
                        disabled: !l,
                        "aria-label": E.intl.string(C.default.OPr66w),
                        "aria-describedby": ef ? eo : void 0,
                        rows: 1,
                        className: lR.jp,
                    }),
                    ef ? (0, n.jsx)(t9.A, { id: eo, children: ei }) : null,
                    (0, n.jsx)("div", {
                        className: lR.Sz,
                        children:
                            r && null != o
                                ? (0, n.jsx)(to.m, {
                                      text: E.intl.string(C.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, n.jsx)("button", {
                                          type: "button",
                                          className: `${lR.Y0} ${lR.$E}`,
                                          disabled: I,
                                          onClick: V,
                                          "aria-label": E.intl.string(C.default.KdgI4k),
                                          children: (0, n.jsx)(e7.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : v?.tierSettings != null && null != b
                                  ? (0, n.jsx)(lS.A, {
                                        settings: v.tierSettings,
                                        tiers: v.tiers,
                                        choices: v.choices,
                                        disabled: !l,
                                        onChange: b,
                                        className: `${lR.Y0} ${lR.$E}`,
                                        icon: (0, n.jsx)(lk.R, {
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
                              className: lR.fF,
                              children: [
                                  (0, n.jsx)("div", { className: lR.MT }),
                                  (0, n.jsx)("button", {
                                      type: "submit",
                                      className: lR.rt,
                                      disabled: !q,
                                      "aria-label": E.intl.string(C.default["22GHMt"]),
                                      children: (0, n.jsx)(lN.SendMessageIcon, {
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
let l$ = 1500,
    lz = [
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
function lq(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = lq.mirror;
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
                (lq.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of lz) t.style.setProperty(e, l.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let n = document.createElement("span");
    ((n.textContent = "\u200B"), t.appendChild(n));
    let a = n.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
lq.mirror = null;
var lB = l(442433),
    lU = l(335385);
let lG = [6e4, 18e4, 6e5],
    lH = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: lG,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: l, draftTyped: n } = e;
                return !n && null != (t = l) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: l, publish: n, draftHasText: a } = e;
                return (
                    !a &&
                    n?.publishing !== !0 &&
                    "plan_implemented" === (t = l).kind &&
                    (0, eS.BL)(t) &&
                    !(null != l.publishCta && tI(n))
                );
            },
        },
    ];
function lV(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
    };
}
let lW = new Map();
var lK = l(972786),
    lY = l(320095),
    lQ = l(963852),
    lX = l(521981),
    lZ = l(763754),
    lJ = l(491182),
    l0 = l(438729),
    l1 = l(622868),
    l2 = l(448368),
    l5 = l(837528),
    l7 = l(439762),
    l4 = l(715628),
    l3 = l(752636),
    l6 = l(9842),
    l8 = l(589022),
    l9 = l(95701),
    ne = l(994500),
    nt = l(967198);
let nl = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function nn(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function na(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function ni(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = na(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (nn(a) && nn(i)) {
        let l = 0,
            n = t;
        for (; l < 32 && nn(na(e, n));) (l++, (n -= 2));
        return l % 2 == 1;
    }
    return !1;
}
function nr(e, t) {
    let { streaming: l } = t,
        n = (0, F.bG)([lw.Ay], () => lw.Ay.useReducedMotion),
        i = l && !n,
        [r, s] = a.useState(() => ({ target: e, length: e.length })),
        u = r;
    (u.target !== e &&
        (u = {
            target: e,
            length: i
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && ni(t, i);) i--;
                      return i;
                  })(u.target, e, u.length)
                : e.length,
        }),
        i || u.length === e.length || (u = { target: e, length: e.length }),
        u !== r && s(u));
    let o = i && u.length < e.length,
        d = a.useRef(u);
    a.useLayoutEffect(() => {
        d.current = u;
    });
    let c = a.useRef(0),
        f = a.useRef(0);
    (a.useEffect(() => {
        if (o)
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
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && nl.has(e.charAt(n - 1));) n--;
                                    return nl.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + r));
                                let u = s;
                                for (; u < t.length && u - s < 32 && ni(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [o]),
        a.useEffect(() => {
            if (o)
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
        }, [o]));
    let m = Math.min(u.length, e.length);
    return { text: m >= e.length ? e : e.slice(0, m), revealing: i && m < e.length };
}
var ns = l(725592),
    nu = l(73432),
    no = l(365199),
    nd = l(194085),
    nc = l(734495),
    nf = l(441136);
function nm(e) {
    let { message: t, onClose: l } = e,
        a = (0, nc.A)(t);
    return (0, n.jsx)(lp.W, {
        navId: "vibegrations-message-actions",
        "aria-label": E.intl.string(E.t.Lv7LxN),
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(lv.rX, { children: a }),
    });
}
function nh(e) {
    let { groupStart: t, renderMenu: l } = e,
        [i, s] = a.useState(!1),
        u = a.useRef(null),
        o = a.useCallback(() => s((e) => !e), []),
        d = a.useCallback(() => s(!1), []);
    return (0, n.jsx)("div", {
        className: r()(nf.QE, { [nf.Rn]: t, [nf.vg]: i }),
        children: (0, n.jsx)(nd.Ay, {
            children: (0, n.jsx)(lx.Y, {
                targetElementRef: u,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return l(t);
                },
                shouldShow: i,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: lx.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: l, ...a } = e,
                        { isShown: i } = t;
                    return (0, n.jsx)(nd.qv, {
                        ref: u,
                        label: E.intl.string(E.t["UKOtz+"]),
                        icon: no.MoreHorizontalIcon,
                        selected: i,
                        onClick: o,
                        ...a,
                    });
                },
            }),
        }),
    });
}
function ng(e) {
    let { message: t, groupStart: l } = e,
        i = a.useCallback((e) => (0, n.jsx)(nm, { message: t, onClose: e }), [t]);
    return null == (0, nc.A)(t) ? null : (0, n.jsx)(nh, { groupStart: l, renderMenu: i });
}
let nx = (0, l9.createChannelRecord)({ id: "vibegrations-builder", type: P.rbe.DM }),
    np = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nv(e, t) {
    return null == e ? e : (0, n.jsx)("div", { className: r()(nf.Yq, { [nf.x1]: t }), children: e });
}
function nb(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nj(e, t, l) {
    let { content: i } = (0, l7.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = a.useMemo(() => ({ message: e, channel: nx, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, n.jsx)(l0.Ay, { className: l, message: e, content: i, compact: !1 })
          : (0, l4.A)(r, i);
}
function ny(e) {
    let [t, l] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        i = a.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, l5.m)(e, nx, t.usernameProfile, i),
        u = (0, l5.Jo)(t.avatarProfile, i),
        o = (0, F.bG)([nt.A], () => nt.A.getGuildId()),
        d = (0, F.bG)([eo.default], () => eo.default.getCurrentUser()),
        c = a.useCallback(
            (t) => {
                let l = eo.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, n.jsx)(l8.A, { ...t, user: l, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: c,
        guildId: o ?? void 0,
    };
}
function nk(e) {
    let { baseMessage: t, referenced: l, selected: i, onJumpToReplied: r } = e,
        s = a.useMemo(() => {
            let e = "" !== l.content ? (0, lX.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == i
                ? e
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("span", {
                              className: nf.GV,
                              children: [
                                  (0, n.jsx)(nu.A, { className: nf.Rj, size: "custom", width: 14, height: 14 }),
                                  i,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [l, i]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, F.cf)(
            [ne.A],
            () => ({
                isReplyAuthorBlocked: ne.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: ne.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        d = (0, lZ.X4)(l),
        c = (0, lZ.X4)(t),
        f = ny(l);
    return (0, n.jsx)(l2.A, {
        repliedAuthor: d,
        baseAuthor: c,
        baseMessage: t,
        channel: nx,
        referencedMessage: { state: l6.a.LOADED, message: l },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function nN(e) {
    let { message: t, author: l } = e,
        a = ny(t);
    return (0, n.jsx)(l1.Ay, {
        message: t,
        channel: nx,
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
function nw(e) {
    let { content: t, createdAt: l, userId: i, accessories: r, groupStart: s } = e;
    a.useEffect(() => (0, ns.Y)(i), [i]);
    let u = (0, F.bG)(
            [eo.default],
            () => (0, ns.T)(i, null != i ? eo.default.getUser(i) : null, eo.default.getCurrentUser()),
            [i],
        ),
        o = a.useMemo(() => (0, lZ.FT)(u, null), [u]),
        d = a.useMemo(() => (0, ew.LL)(t), [t]),
        c = d?.body ?? t,
        f = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, lQ.Ay)({ channelId: nx.id, content: c, author: u });
            return (0, lY.rh)({ ...e, timestamp: nb(l, e.timestamp), state: P.cmJ.SENT });
        }, [c, u, l]);
    return null == f
        ? null
        : (0, n.jsx)(nA, { message: f, author: o, content: c, selected: d?.label, accessories: r, groupStart: s });
}
function nA(e) {
    let { message: t, author: l, content: a, selected: i, accessories: r, groupStart: s = !0 } = e,
        u = nj(t, a);
    return (0, n.jsx)(lJ.A, {
        className: nf.yE,
        author: l,
        childrenHeader: s ? (0, n.jsx)(nN, { message: t, author: l }) : void 0,
        childrenMessageContent:
            null == i
                ? u
                : (0, n.jsxs)("div", {
                      className: nf.zq,
                      children: [
                          (0, n.jsxs)("span", {
                              className: nf.GV,
                              children: [
                                  (0, n.jsx)(nu.A, { className: nf.Rj, size: "custom", width: 16, height: 16 }),
                                  i,
                              ],
                          }),
                          (0, n.jsx)("span", { className: nf.WO, children: u }),
                      ],
                  }),
        childrenAccessories: nv(r, "" !== a),
        childrenButtons: (0, n.jsx)(ng, { message: t, groupStart: s }),
    });
}
function nS(e) {
    let {
            content: t,
            createdAt: l,
            accessories: i,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: d,
        } = e,
        { text: c, revealing: f } = nr(t, { streaming: o }),
        m = a.useMemo(() => (0, lZ.FT)(null, null), []),
        h = a.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        g = r?.userId,
        x = (0, F.bG)(
            [eo.default],
            () => (0, ns.T)(g, null != g ? eo.default.getUser(g) : null, eo.default.getCurrentUser()),
            [g],
        ),
        p = a.useMemo(() => (null == r ? null : (0, ew.LL)(r.content)), [r]),
        v = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, lQ.Ay)({ channelId: nx.id, content: p?.body ?? r.content, author: x });
            return (0, lY.rh)({ ...e, id: r.id, timestamp: nb(r.createdAt, e.timestamp), state: P.cmJ.SENT });
        }, [r, p, x]),
        b = a.useMemo(() => (null == r ? void 0 : { channel_id: nx.id, message_id: r.id }), [r]),
        j = a.useMemo(() => {
            let e = (0, lQ.Ay)({ channelId: nx.id, content: c, author: np });
            return (0, lY.rh)({
                ...e,
                timestamp: nb(l, e.timestamp),
                state: P.cmJ.SENT,
                ...(null != b ? { type: P.lAJ.REPLY, message_reference: b } : {}),
            });
        }, [c, l, b]),
        y = nj(j, c, nf.OS);
    return (0, n.jsxs)("div", {
        className: nf.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-vibegrations-revealing": f ? "true" : void 0,
        children: [
            (0, n.jsx)(lJ.A, {
                className: nf.yE,
                author: h,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, n.jsx)(nk, { baseMessage: j, referenced: v, selected: p?.label, onJumpToReplied: s }),
                childrenHeader: (0, l3.A)({ message: j, channel: nx, author: h, guildId: void 0, isGroupStart: u }),
                childrenMessageContent: y,
                childrenAccessories: nv(i, "" !== c),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, n.jsx)("span", {
                      className: nf.st,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let nC = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function nE(e) {
    let { projectId: t, notice: l } = e;
    return "outdated" === l ? (0, n.jsx)(nT, { projectId: t }) : (0, n.jsx)(nI, { projectId: t, notice: l });
}
function nI(e) {
    let { projectId: t, notice: l } = e,
        i = a.useContext(tE.Qc),
        r = (0, F.bG)([lK.Ay, ea.A], () => {
            let e = lK.Ay.getProject(t);
            return null == e ? "" : (ea.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        s = a.useCallback(() => {
            null != i && (0, tE.v0)(t, i);
        }, [i, t]);
    return (0, n.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: E.intl.format(
            (function (e) {
                if (!e.update) return C.default.ogEl54;
                switch (e.surface) {
                    case "bot":
                        return C.default.ncJb2S;
                    case "widget":
                        return C.default.gSpqdm;
                    case "automod":
                        return C.default.M3cBMT;
                    case "activity":
                    case null:
                        return C.default.tg9fgb;
                }
            })(l),
            { name: r, onOpen: s },
        ),
    });
}
function nT(e) {
    let { projectId: t } = e,
        l = (0, tE.Ay)(t);
    return null == l
        ? null
        : (0, n.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: E.intl.format(C.default.AcWS6c, {
                  action: l.label,
                  onUpdate: () => {
                      (lW.get(t)?.forEach((e) => e()), l.run("outdated_notice"));
                  },
              }),
          });
}
var nM = l(556616);
function n_(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function nP(e) {
    let { reminder: t, renderReminder: l } = e,
        i = (function (e) {
            let t,
                [l, n] = a.useState([]);
            (l.find((e) => !e.leaving)?.key ?? null) !== e &&
                n(
                    ((t = l.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let i = l.some((e) => e.leaving);
            return (
                a.useEffect(() => {
                    if (!i) return;
                    let e = setTimeout(() => n((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [i, l]),
                l
            );
        })(t),
        s = i.find((e) => !e.leaving)?.key ?? null,
        u = null == s && i.length > 0,
        o = a.useRef(null),
        d = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = o.current;
            if (null == e || u) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            n_(e, t);
            let l = new ResizeObserver(() => n_(e, t));
            return (l.observe(t), () => l.disconnect());
        }, [s, u]),
        (0, n.jsx)("div", {
            ref: o,
            className: r()(nM.NI, { [nM.Jg]: null == s }),
            "aria-live": "polite",
            children: (0, n.jsx)("div", {
                className: nM.t$,
                children: i.map((e) =>
                    (0, n.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: r()(nM.qd, e.leaving ? nM.cu : nM.We),
                            children: l(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var nR = l(744898);
function nL(e) {
    let { onSelect: t, onClose: l = lB.Z_, onRestoreVersion: a } = e;
    return (0, n.jsx)(lp.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-turn-context",
        onClose: l,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, n.jsx)(lv.rX, {
            children: (0, n.jsx)(lv.Dr, {
                id: "restore-version",
                label: E.intl.string(C.default.eSDVDt),
                icon: nR.e,
                action: a,
            }),
        }),
    });
}
var nD = l(375068);
function nF(e) {
    let {
            projectId: t,
            messages: l,
            emptyState: i,
            ref: s,
            onPickIdea: u,
            onAskForIdeas: o,
            draftHasText: d,
            onApprovePlan: c,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        g = a.useRef(null),
        x = a.useCallback(
            (e) => {
                ((g.current = e), "function" == typeof s ? s(e) : null != s && (s.current = e));
            },
            [s],
        ),
        [p, b] = a.useState(null),
        j = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(j.current), []);
    let y = a.useCallback((e) => {
            let t = g.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        k = (0, F.bG)([lK.Ay], () => lK.Ay.getPublishStatus(t)?.state ?? null),
        N = a.useMemo(() => {
            let e;
            return (function (e) {
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
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
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
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        n(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, eS.BL)(t),
                        a = e8({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        r = (0, eA.C6)(t.steps, { turnActive: e }),
                        { lastWork: s, open: u } = (0, eA.CT)(r, { turnActive: e }),
                        o = r.at(-1)?.index,
                        d = !1;
                    for (let c of r) {
                        if (null != c.prose && nC.test(c.prose.content)) d = !0;
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
                                        "streamed" === a.attachmentsHost && c.prose.key === i && null != t.attachments,
                                    streaming: e && c.index === o && !c.hasWork,
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
                                    active: c.index === u,
                                    closed: c.index !== u,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === s,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: eC(t),
                                    checklistSuperseded: c.hasTodos && l.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = nC.test(t.content ?? "");
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
                            : r.every((e) => !e.hasTodos) &&
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
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
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
                        i = !1,
                        r = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (n.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (l = void 0));
                            continue;
                        }
                        let e = !i || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || r;
                        (e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (l = s.boundary)),
                            n.push(e));
                    }
                    return n;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(l, k)),
                l.every((t) => null == t.publishCta || t.id === e)
                    ? l
                    : l.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [l, k]),
        w = l.at(-1),
        A = (function (e, t, l) {
            var n;
            let i = (0, tE.Ay)(e),
                r = (0, lU.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("publish_notice" !== l.kind) {
                            if ("user" === l.role) return null;
                            if ((0, eS.BL)(l)) return l;
                            if (!(0, eS.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                u = t.at(-1),
                o = {
                    projectId: e,
                    draftHasText: l,
                    publishing: i?.publishing === !0,
                    drift: i?.status?.state === "changes",
                    messageAt: null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                    visible: r,
                },
                [d, c] = a.useState(() => lV(o, Date.now())),
                f = (function (e, t, l) {
                    if (e.projectId !== t.projectId) return lV(t, l());
                    if (
                        e.draftHasText === t.draftHasText &&
                        e.publishing === t.publishing &&
                        e.drift === t.drift &&
                        e.messageAt === t.messageAt &&
                        e.visible === t.visible
                    )
                        return e;
                    let n = l(),
                        a = { ...e, now: n };
                    if (
                        (e.draftHasText !== t.draftHasText &&
                            (a = { ...a, draftHasText: t.draftHasText, draftTyped: t.draftHasText, lastActivityAt: n }),
                        e.publishing !== t.publishing &&
                            (a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: n,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                            }),
                        e.drift !== t.drift &&
                            ((a = { ...a, drift: t.drift }),
                            t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                        e.messageAt !== t.messageAt)
                    ) {
                        let l = null == t.messageAt ? null : Math.min(t.messageAt, n);
                        ((a = (function (e) {
                            if (!e.outdatedShown || e.publishing) return e;
                            let t = Math.min(e.outdatedBackoff + 1, lG.length - 1);
                            return { ...e, outdatedShown: !1, outdatedBackoff: t };
                        })({ ...a, messageAt: t.messageAt, lastMessageAt: l })),
                            t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                    }
                    return (
                        e.visible !== t.visible &&
                            ((a = { ...a, visible: t.visible }),
                            t.visible
                                ? (n - (e.hiddenAt ?? n) >= 6e5
                                      ? (a = { ...a, visitStartedAt: n })
                                      : a.unseen && (a = { ...a, seenAt: n }),
                                  (a = { ...a, hiddenAt: null, unseen: !1 }))
                                : (a = { ...a, hiddenAt: n, unseen: !1 })),
                        a
                    );
                })(d, o, Date.now),
                m =
                    null == s ||
                    null != (n = s).awaitingUser ||
                    null != n.secretRequest ||
                    null != n.settingsRequest ||
                    (n.intake?.questions.length ?? 0) > 0
                        ? null
                        : { turn: s, publish: i, draftHasText: l, draftTyped: f.draftTyped && l },
                { shown: h, nextDueAt: g } = (function (e, t) {
                    var l;
                    let n;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == a) return { shown: null, nextDueAt: null };
                    let i =
                        ((n = Math.max(
                            0,
                            t.now -
                                ((l = a.clock),
                                Math.max(
                                    t.lastMessageAt ?? -1 / 0,
                                    t.lastActivityAt ?? -1 / 0,
                                    t.seenAt ?? -1 / 0,
                                    "visit" === l ? t.visitStartedAt : -1 / 0,
                                )),
                        )),
                        t.now + Math.max(0, a.idleDelayMs - n));
                    return i <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: i };
                })(
                    lH.map((e) => ({
                        ...e,
                        idleDelayMs: e.backoffDelaysMs?.[f.outdatedBackoff] ?? e.idleDelayMs,
                        eligible: null != m && e.eligible(m),
                    })),
                    f,
                );
            return (
                "outdated" !== h || f.outdatedShown ? f !== d && c(f) : c({ ...f, outdatedShown: !0 }),
                a.useEffect(() => {
                    function t() {
                        let e = Date.now();
                        c((t) => ({ ...t, now: e, lastActivityAt: e }));
                    }
                    let l = lW.get(e) ?? new Set();
                    return (
                        lW.set(e, l),
                        l.add(t),
                        () => {
                            (l.delete(t), 0 === l.size && lW.delete(e));
                        }
                    );
                }, [e]),
                a.useEffect(() => {
                    if (null == g) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                    return () => clearTimeout(e);
                }, [g, f.now]),
                h
            );
        })(t, l, !0 === d),
        S = a.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, n.jsx)(nS, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, n.jsx)(nE, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, n.jsx)("div", {
                            className: nD.u$,
                            children: (0, n.jsx)(nS, {
                                content: E.intl.string(C.default.tG5PBo),
                                accessories: (0, n.jsx)(ts, { onAsk: o }),
                            }),
                        });
                }
            },
            [t, o],
        ),
        I = a.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let l = e[t];
                        if ("assistant" === l.role) {
                            if (!(0, eS.BL)(l) || "plan_implemented" === l.kind) return null;
                            if (null != l.proposal) return l.render_id;
                        }
                    }
                    return null;
                })(l),
            [l],
        ),
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        l = null,
                        n = 0;
                    for (let a of e)
                        if ("assistant" === a.role) {
                            if ("plan_implemented" === a.kind) {
                                ((l = null), (n = 0));
                                continue;
                            }
                            null != a.proposal &&
                                (null != l && t.set(l, { version: n, superseded: !0 }),
                                (n += 1),
                                t.set(a.render_id, { version: n, superseded: !1 }),
                                (l = a.render_id));
                        }
                    return t;
                })(l),
            [l],
        ),
        M =
            (w?.role !== "assistant" || null == w.awaitingUser || null == w.secretRequest
                ? null
                : (0, eS.BL)(w)
                  ? w.awaitingUser
                  : null) ?? void 0;
    if (0 === l.length) {
        if ("loading" === i)
            return (0, n.jsx)("ol", {
                ref: s,
                className: r()(nD.x7, nD.jH),
                "aria-busy": !0,
                children: (0, n.jsx)("li", { className: nD.Ub, children: (0, n.jsx)(m.y, {}) }),
            });
        let e = "unavailable" === i ? C.default.s4oxNv : C.default.khZEUv;
        return (0, n.jsx)("ol", {
            ref: s,
            className: nD.x7,
            children: (0, n.jsx)(nO, { role: "assistant", children: (0, n.jsx)(nS, { content: E.intl.string(e) }) }),
        });
    }
    return (0, n.jsxs)("ol", {
        ref: x,
        className: nD.x7,
        children: [
            N.map((e) => {
                let a = e.message;
                switch (e.kind) {
                    case "user": {
                        let l = null != a.attachments && a.attachments.length > 0 ? a.attachments : null;
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "user",
                                anchorId: a.id,
                                highlighted: p === a.id,
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nw, {
                                    groupStart: e.groupStart,
                                    content: a.content,
                                    createdAt: a.created_at,
                                    userId: a.user_id,
                                    accessories:
                                        null != l ? (0, n.jsx)(tu.A, { projectId: t, attachments: l }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nS, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: a.created_at,
                                    accessories:
                                        e.hostsAttachments && null != a.attachments
                                            ? (0, n.jsx)(tu.A, { projectId: t, attachments: a.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(ld, {
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
                    case "publishNotice":
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, n.jsx)(nS, {
                                    groupStart: e.groupStart,
                                    content: null == a.publishNotice ? a.content : "",
                                    createdAt: a.created_at,
                                    accessories:
                                        null == a.publishNotice
                                            ? void 0
                                            : (0, n.jsx)(nE, { projectId: t, notice: a.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(ld, { projectId: t, interrupted: !0, steps: a.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "assistant",
                                children: (0, n.jsx)(ld, {
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
                                null != h
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
                            r =
                                null != i && null != h
                                    ? () => {
                                          tO(() => h(i));
                                      }
                                    : void 0,
                            s = a.restoreProposal;
                        return (0, n.jsx)(
                            nO,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != r
                                        ? (e) => {
                                              (0, lB.jA)(e, (e) => (0, n.jsx)(nL, { ...e, onRestoreVersion: r }));
                                          }
                                        : void 0,
                                children: (0, n.jsx)(nS, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != r
                                            ? (0, n.jsx)(nh, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, n.jsx)(nL, { onClose: e, onSelect: e, onRestoreVersion: r }),
                                              })
                                            : void 0,
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
                                    onJumpToReplied: null != a.in_reply_to ? () => y(a.in_reply_to) : void 0,
                                    accessories: (0, n.jsx)(lc, {
                                        projectId: t,
                                        steps: a.steps,
                                        content: "",
                                        proposal: a.proposal,
                                        planVersion: T.get(a.render_id),
                                        interrupted: !0 === a.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        active: e.active,
                                        ideas: e.active ? void 0 : a.ideas,
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
                                        secretRequest: e.active ? void 0 : a.secretRequest,
                                        secretRequestAwaiting: a === w ? M : void 0,
                                        settingsRequest: e.active || a.id === f ? void 0 : a.settingsRequest,
                                        publishCta: e.active ? null : a.publishCta,
                                        onPickIdea: u,
                                        onApprovePlan: a.render_id === I ? c : void 0,
                                        restoreProposal: s,
                                        onRestoreProposal:
                                            null != s && null != h && a === w
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
                                                          void tO(() => h(e))
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
            null != M
                ? (0, n.jsx)(nO, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, n.jsx)(nS, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default["1LEnd8"]),
                          }),
                      }),
                  })
                : null,
            (0, n.jsx)("li", {
                role: "none",
                className: nD.q3,
                children: (0, n.jsx)(nP, { reminder: A, renderReminder: S }),
            }),
        ],
    });
}
function nO(e) {
    let { role: t, children: l, anchorId: a, highlighted: i = !1, continuation: s = !1, onContextMenu: u } = e;
    return (0, n.jsx)("li", {
        onContextMenu: u,
        "data-role": t,
        "data-vibegrations-message": a,
        className: r()(nD.xk, { [nD.Qo]: i, [nD.q3]: s }),
        children: l,
    });
}
let n$ = [C.default.krnkPq, C.default["8oUm/J"], C.default["6Ea4dF"], C.default.fQx5qC, C.default["phXeK/"]];
function nz(e) {
    return n$.some((t) => E.intl.string(t) === e);
}
function nq(e) {
    switch (e) {
        case "connecting":
            return E.intl.string(C.default.W7oyuf);
        case "closed":
            return E.intl.string(C.default["yBmS+I"]);
        case "failed":
            return E.intl.string(C.default.eE60xI);
    }
}
var nB = l(559676),
    nU = l(823376),
    nG = l(495557);
function nH(e) {
    let { activity: t, id: l } = e,
        { text: i, revealing: s } = nr(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        u = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [i]),
        (0, n.jsx)("div", {
            id: l,
            role: "tooltip",
            className: nG.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, n.jsx)(ek.Ch, {
                ref: u,
                className: nG.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, n.jsx)("div", {
                    className: r()(lu.PT, nG.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: e4.A.parse(i, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nV = l(921461);
function nW(e) {
    let {
            activity: t,
            compacting: l = !1,
            restoring: i = !1,
            recalling: s = !1,
            controlling: u = !1,
            spoken: o,
            onSpokenChange: d,
        } = e,
        c = a.useRef(null),
        f = a.useId(),
        [m, h] = a.useState(null),
        g = (function (e) {
            let { activity: t, compacting: l = !1, restoring: n = !1, recalling: a = !1, controlling: i = !1 } = e,
                r = null != t && "end" !== t.phase;
            return i
                ? C.default.ivvYHP
                : n
                  ? C.default.aFffp2
                  : a
                    ? n$[0]
                    : l
                      ? C.default["0vH/5G"]
                      : r
                        ? C.default.Ly7F7x
                        : C.default.QDGuNS;
        })({ activity: t, compacting: l, restoring: i, recalling: s, controlling: u }),
        x = E.intl.string(g),
        p = g === n$["0"],
        [v, b] = a.useState(o ?? x),
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
        ((N.current = p), !p && nz(k.current) && b(j.current));
    }, [p]),
        a.useEffect(() => {
            let e = 0,
                t = 0;
            function l() {
                if (N.current) {
                    var e;
                    ((w.current = nz(k.current) ? w.current + 1 : 0),
                        b(((e = w.current), E.intl.string(n$[e % n$.length]))));
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
            function i() {
                (y.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", i),
                window.addEventListener("blur", n),
                () => {
                    (n(), window.removeEventListener("focus", i), window.removeEventListener("blur", n));
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
    return (0, n.jsx)(lx.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: I,
        onRequestClose: M,
        renderPopout: () => (0, n.jsx)(nH, { id: f, activity: t }),
        children: () =>
            (0, n.jsxs)(e9.D, {
                innerRef: c,
                className: r()(nV.hF, A && nV.Xd),
                "aria-label": E.intl.string(i ? C.default.pGFXZ0 : p ? n$["0"] : C.default.SzdX35),
                "aria-expanded": I,
                "aria-describedby": I ? f : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": E.intl.string(g),
                onClick: T,
                children: [
                    (0, n.jsx)("span", {
                        className: nV.bl,
                        children: (0, n.jsx)(nU.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, n.jsx)("span", {
                        className: nV.xu,
                        "aria-hidden": !!u || !!p || void 0,
                        children: (0, n.jsx)(lf.o, {
                            ref: y,
                            text: v,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: nV.yE,
                        }),
                    }),
                ],
            }),
    });
}
let nK = { second: 1e3, minute: 6e4 };
function nY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [l, n] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let l;
            if (null == e) return;
            let a = nK[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (n(i), (l = setTimeout(t, a - ((((i - e) % a) + a) % a))));
                })(),
                () => clearTimeout(l)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, l - e)
    );
}
var nQ = l(979148);
function nX(e) {
    let { startedAt: t } = e,
        l = nY(t);
    return (0, n.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: nQ.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, e3.C7)(l),
    });
}
function nZ(e) {
    let { startedAt: t } = e,
        l = nY(t, "minute");
    return (0, n.jsx)(t9.A, { role: "timer", children: (0, e3.Us)(l) });
}
var nJ = l(280894);
function n0(e) {
    return e.toLocaleString();
}
function n1(e) {
    let { label: t, usage: l, cached: a = !0 } = e;
    return (0, n.jsxs)("div", {
        className: nJ.Q$,
        children: [
            (0, n.jsxs)("div", {
                className: nJ.mf,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, n.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [n0((0, eq.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, n.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    n0(l.input_tokens),
                    " in \xb7 ",
                    n0(l.output_tokens),
                    " out",
                    a
                        ? ` \xb7 ${n0(l.cache_creation_input_tokens)} cache write \xb7 ${n0(l.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function n2(e) {
    let { project: t } = e,
        l = (0, eq.wU)(t.compaction),
        a = (0, eq.wU)(t.classifier),
        i = (0, eq.wV)(t.orchestrator, t.codegen),
        r = (0, eq.wV)(i, l);
    return (0, n.jsxs)("div", {
        className: nJ.si,
        role: "dialog",
        "aria-label": E.intl.string(C.default["9yoLWZ"]),
        children: [
            (0, n.jsx)("div", {
                className: nJ.Q$,
                children: (0, n.jsxs)("div", {
                    className: nJ.mf,
                    children: [
                        (0, n.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [n0((0, eq.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, n.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(n1, { label: E.intl.string(C.default.R9aduM), usage: i }),
            (0, n.jsx)(n1, { label: E.intl.string(C.default.Tj6b30), usage: l }),
            (0, n.jsx)(n1, { label: E.intl.string(C.default.vVUMwj), usage: a, cached: !1 }),
            (0, n.jsxs)("div", {
                className: nJ.mf,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(C.default["kILb+R"]),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eq.sj)(r) ? "\u2014" : `${Math.round(100 * (0, eq.CA)(r))}%`,
                    }),
                ],
            }),
        ],
    });
}
function n5(e) {
    let { project: t } = e,
        l = a.useRef(null);
    return (0, n.jsx)(lx.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, n.jsx)(n2, { project: t }),
        children: (e) =>
            (0, n.jsx)(e9.D, {
                innerRef: l,
                className: nJ.Y$,
                "aria-label": E.intl.string(C.default.AWQ2ZV),
                ...e,
                children: (0, n.jsx)(td.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var n7 = l(258216);
function n4(e) {
    let t,
        {
            projectId: l,
            thinking: i,
            turnStartedAt: r,
            restoring: s = !1,
            recalling: u = !1,
            thinkingActivity: o,
            compacting: d,
            projectUsage: c,
            connState: f,
        } = e,
        m = (0, nB.o4)(l),
        [h, g] = a.useState(null),
        x = a.useCallback((e) => g(nz(e) ? null : e), []),
        p =
            null == c
                ? null
                : ((t = (0, eq.a7)(c.cost_usd)),
                  {
                      text: E.intl.formatToPlainString(C.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: E.intl.formatToPlainString(C.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = i && null != r;
    return (0, n.jsxs)("div", {
        className: n7.jf,
        children: [
            (0, n.jsxs)("div", {
                className: n7.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    i || s || u || m
                        ? (0, n.jsx)(nW, {
                              activity: o,
                              compacting: d,
                              restoring: s,
                              recalling: u,
                              controlling: m,
                              spoken: h,
                              onSpokenChange: x,
                          })
                        : null,
                    b ? (0, n.jsx)(nX, { startedAt: r }) : null,
                ],
            }),
            b ? (0, n.jsx)(nZ, { startedAt: r }) : null,
            null == c || null == p
                ? null
                : (0, n.jsxs)("span", {
                      className: n7.BP,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": p.aria,
                              children: p.text,
                          }),
                          (0, n.jsx)(n5, { project: c }),
                      ],
                  }),
            "open" === f
                ? null
                : (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === f ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(C.default.eDDdhB, { status: nq(f) }),
                      "data-vibegrations-conn": !0,
                      "data-state": f,
                      className: n7.XF,
                      children: nq(f),
                  }),
        ],
    });
}
var n3 = l(621466),
    n6 = l(658675),
    n8 = l(22231),
    n9 = l(408278),
    ae = l(900797),
    at = l(123292);
function al(e, t, l) {
    return l < e.questions.length - 1
        ? l + 1
        : (function (e, t, l) {
              let { questions: n } = e;
              for (let e = 1; e <= n.length; e++) {
                  let a = (l + e) % n.length,
                      i = t[n[a].id];
                  if (null == i || "" === i.text.trim()) return a;
              }
              return null;
          })(e, t, l);
}
var an = l(856795),
    aa = l(424110);
function ai(e) {
    let { option: t, position: l, disabled: i, onPick: s, reachable: u = !0, selected: o } = e,
        d = a.useId(),
        c = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, n.jsxs)(e9.D, {
        className: r()(aa.uK, { [aa.ue]: i, [aa.h4]: !0 === o }),
        onClick: i ? void 0 : () => s(t),
        "aria-label": E.intl.formatToPlainString(c ? C.default.aL1BKQ : C.default.k7lEgj, { answer: t.label }),
        "aria-describedby": f ? d : void 0,
        "aria-disabled": i,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: u ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, n.jsx)("span", { className: aa.dy, children: (0, n.jsx)(n6.P, { checked: o, disabled: i }) })
                : (0, n.jsx)("span", { className: aa.Gy, "aria-hidden": !0, children: l }),
            (0, n.jsxs)("span", {
                className: aa.qO,
                children: [
                    (0, n.jsx)("span", {
                        className: aa.l8,
                        children: (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aa.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, n.jsx)(v.E, {
                              tag: "span",
                              id: d,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, n.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: aa.rM,
                      children: E.intl.string(C.default.OXRWyV),
                  })
                : null,
        ],
    });
}
let ar = [];
function as(e) {
    let { question: t, draft: l, selected: a, direction: i, disabled: s } = e,
        u = "" === l.trim() ? null : l,
        o = !0 === t.multi_select;
    return (0, n.jsxs)("div", {
        className: r()(aa.Ge, aa.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            o
                ? (0, n.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aa.aK,
                      children: E.intl.string(C.default.jt5JBA),
                  })
                : null,
            t.options.map((e, t) =>
                (0, n.jsx)(
                    ai,
                    {
                        option: e,
                        position: t + 1,
                        disabled: s,
                        selected: o ? a.includes(e.id) : void 0,
                        onPick: () => void 0,
                        reachable: !1,
                    },
                    e.id,
                ),
            ),
            (0, n.jsxs)("div", {
                className: aa.Xy,
                children: [
                    (0, n.jsx)("span", {
                        className: aa.Gy,
                        "aria-hidden": !0,
                        children: (0, n.jsx)(n8.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == u ? null : (0, n.jsx)("span", { className: r()(aa.Pu, aa.es), children: u }),
                ],
            }),
        ],
    });
}
function au(e) {
    let { clarification: t, onSubmit: l, onDismiss: i } = e,
        [s, o] = a.useState({}),
        [d, c] = a.useState({}),
        [f, m] = a.useState({}),
        [h, g] = a.useState(0),
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(null),
        [N, w] = a.useState(!1),
        A = a.useRef(null),
        [S, I] = a.useState(null),
        T = a.useRef(null),
        M = a.useRef(0),
        _ = null == l,
        P = t.questions.length,
        R = Math.min(h, P - 1),
        L = t.questions[R],
        [D, F] = a.useState({ id: L.id, expanded: !1 }),
        O = D.id === L.id && D.expanded,
        [$, z] = a.useState(null),
        q = d[L.id] ?? "",
        B = !0 === L.multi_select,
        U = f[L.id] ?? ar,
        { text: G, phase: H } = (0, an.Q)(L.question),
        V = G === L.question,
        W = V && $?.id === L.id && $.truncated;
    a.useLayoutEffect(() => {
        if (null == S || O || !V) return;
        function e() {
            if (null == S) return;
            let e = S.scrollHeight > S.clientHeight + 1;
            z((t) => (t?.id === L.id && t.truncated === e ? t : { id: L.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(S), () => t.disconnect());
    }, [V, S, L.id, O]);
    let K = E.intl.string(O ? E.t.iTcuma : E.t.dcl9MQ),
        Y = a.useCallback(
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
                if ("" !== n) {
                    let a;
                    l(
                        n,
                        (a = t.questions.flatMap((t) => {
                            let l = e[t.id];
                            if (null == l || "" === l.text.trim()) return [];
                            let n = "option" === l.kind ? [l.optionId] : "multi" === l.kind ? l.optionIds : [],
                                a = "custom" === l.kind ? l.text.trim() : "multi" === l.kind ? l.custom : void 0;
                            return [
                                { question_id: t.id, option_ids: n, ...(null != a && "" !== a ? { custom: a } : {}) },
                            ];
                        })).length > 0
                            ? { clarification_id: t.id, answers: a }
                            : null,
                    );
                }
            },
            [t, l],
        ),
        X = a.useCallback(
            (e, t) => {
                M.current += 1;
                let l = M.current;
                (p({ direction: t, moves: l }),
                    j({ question: L, draft: q, selected: U, direction: t, moves: l }),
                    w(!0),
                    g(e));
            },
            [q, L, U],
        ),
        Z = a.useCallback(() => {
            let e = A.current,
                t = T.current;
            null != e && null != t && k({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = A.current,
            t = T.current;
        if (null == e || null == t) return;
        Z();
        let l = new ResizeObserver(Z);
        return (l.observe(e), l.observe(t), () => l.disconnect());
    }, [Z]);
    let J = x?.moves;
    a.useEffect(() => {
        if (null == J) return;
        let e = setTimeout(() => j(null), 400),
            t = setTimeout(() => w(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [J]);
    let ee = a.useCallback(
            (e) => {
                if (_) return;
                let l = { ...s, [L.id]: e };
                o(l);
                let n = al(t, l, R);
                null == n ? Y(l) : X(n, n < R ? "back" : "forward");
            },
            [s, t, _, R, L.id, Y, X],
        ),
        et = a.useCallback(() => {
            _ || 0 === R || X(R - 1, "back");
        }, [_, R, X]),
        el = R > 0 && !_,
        en = a.useCallback(
            (e) => {
                (c((e) => ({ ...e, [L.id]: "" })), ee({ kind: "option", optionId: e.id, text: e.label }));
            },
            [L.id, ee],
        ),
        ea = a.useMemo(() => {
            let e, t;
            return B
                ? ((e = q.trim()),
                  (t = L.options.filter((e) => U.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: U,
                      ...("" === e ? {} : { custom: e }),
                      text: [...t, ...("" === e ? [] : [e])].join(", "),
                  })
                : null;
        }, [q, B, L, U]),
        ei = a.useCallback(() => {
            if (null != ea) {
                "" !== ea.text && ee(ea);
                return;
            }
            let e = q.trim();
            "" !== e && ee({ kind: "custom", text: e });
        }, [q, ea, ee]),
        [er, es] = a.useState(!1),
        [eu, eo] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => es(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let ed = a.useCallback(() => {
            null != i && (eo(!0), setTimeout(i, 150));
        }, [i]),
        ec = a.useMemo(
            () =>
                null != ea
                    ? "" !== ea.text
                        ? ea
                        : null
                    : "" !== q.trim()
                      ? { kind: "custom", text: q.trim() }
                      : (s[L.id] ?? null),
            [s, q, ea, L.id],
        ),
        ef = null != ec && !_,
        em = null == al(t, null != ec ? { ...s, [L.id]: ec } : s, R),
        eh = a.useCallback(() => {
            null == ec || _ || ee(ec);
        }, [_, ec, ee]),
        eg = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (!((0, n3.vq)(e.target, HTMLTextAreaElement) || (0, n3.vq)(e.target, HTMLInputElement)) &&
                        ("ArrowLeft" === e.key && el
                            ? (e.preventDefault(), et())
                            : "ArrowRight" === e.key && ef && (e.preventDefault(), eh())));
            },
            [el, ef, et, eh],
        );
    return (0, n.jsxs)("section", {
        className: r()(aa.$O, { [aa.fI]: er && !eu, [aa.Oh]: eu }),
        role: "dialog",
        "aria-label": L.question,
        "data-vibegrations-clarification": t.id,
        "data-state": _ ? "inert" : "open",
        "data-question-expanded": O ? "true" : void 0,
        "data-step": R,
        tabIndex: -1,
        onKeyDown: eg,
        children: [
            (0, n.jsxs)("div", {
                className: aa.rf,
                style: null == y ? void 0 : { height: y.heading + y.rows },
                "data-moving": N ? "" : void 0,
                children: [
                    (0, n.jsxs)("div", {
                        ref: A,
                        className: aa.wx,
                        children: [
                            (0, n.jsx)(v.E, {
                                ref: I,
                                tag: "span",
                                id: `${L.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: O ? void 0 : 5,
                                className: r()(tK.TK, aa.R_, { [aa.TB]: "exit" === H, [aa.JU]: "enter" === H }),
                                children: G,
                            }),
                            W || O
                                ? (0, n.jsx)("div", {
                                      className: tK.Q7,
                                      children: (0, n.jsx)(to.m, {
                                          text: K,
                                          children: (0, n.jsx)(n9.K, {
                                              icon: O ? ae.t : th.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => F({ id: L.id, expanded: !O }),
                                              "aria-label": K,
                                              "aria-controls": `${L.id}-label`,
                                              "aria-expanded": O,
                                          }),
                                      }),
                                  })
                                : null,
                            null == i
                                ? null
                                : (0, n.jsx)(e9.D, {
                                      className: r()(tK.gb, tK.Q7),
                                      onClick: ed,
                                      "aria-label": E.intl.string(C.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, n.jsx)(u.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: aa.Cg,
                        style: null == y ? void 0 : { insetBlockStart: y.heading },
                        children: (0, n.jsxs)("div", {
                            className: aa.I,
                            children: [
                                (0, n.jsxs)("div", {
                                    ref: T,
                                    className: aa.Ge,
                                    role: "group",
                                    "aria-labelledby": `${L.id}-label`,
                                    "data-direction": x?.direction,
                                    "data-parity": null == x ? void 0 : x.moves % 2,
                                    children: [
                                        B
                                            ? (0, n.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aa.aK,
                                                  children: E.intl.string(C.default.jt5JBA),
                                              })
                                            : null,
                                        L.options.map((e, t) =>
                                            (0, n.jsx)(
                                                ai,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: _,
                                                    selected: B ? U.includes(e.id) : void 0,
                                                    onPick: (e) =>
                                                        B
                                                            ? m((t) => {
                                                                  var l, n;
                                                                  let a;
                                                                  return {
                                                                      ...t,
                                                                      [L.id]:
                                                                          ((l = t[L.id] ?? ar),
                                                                          (n = e.id),
                                                                          (a = l.includes(n)
                                                                              ? l.filter((e) => e !== n)
                                                                              : [...l, n]),
                                                                          L.options
                                                                              .filter((e) => a.includes(e.id))
                                                                              .map((e) => e.id)),
                                                                  };
                                                              })
                                                            : en(e),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, n.jsxs)("div", {
                                            className: aa.Xy,
                                            children: [
                                                (0, n.jsx)("span", {
                                                    className: aa.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, n.jsx)(n8.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, n.jsx)(ly.y, {
                                                    value: q,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [L.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), ei());
                                                    },
                                                    placeholder: E.intl.string(C.default.qifsdL),
                                                    "aria-label": E.intl.formatToPlainString(C.default.XHESTL, {
                                                        question: L.question,
                                                    }),
                                                    disabled: _,
                                                    rows: 1,
                                                    className: aa.Pu,
                                                    "data-vibegrations-clarification-other": L.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == b
                                    ? null
                                    : (0, n.jsx)(
                                          as,
                                          {
                                              question: b.question,
                                              draft: b.draft,
                                              selected: b.selected,
                                              direction: b.direction,
                                              disabled: _,
                                          },
                                          b.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            P > 1 || B
                ? (0, n.jsxs)("div", {
                      className: tK.qr,
                      children: [
                          (0, n.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children:
                                  P > 1
                                      ? E.intl.formatToPlainString(C.default["7bypa+"], { index: R + 1, total: P })
                                      : null,
                          }),
                          (0, n.jsxs)("div", {
                              className: tK.zt,
                              children: [
                                  el
                                      ? (0, n.jsx)(at.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(C.default.yKdgqw),
                                            onClick: et,
                                            "data-vibegrations-clarification-back": !0,
                                        })
                                      : null,
                                  (0, n.jsx)(Q.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(em ? E.t.geKm7t : C.default.S7Sa6j),
                                      disabled: !ef,
                                      onClick: eh,
                                      "data-vibegrations-clarification-next": !0,
                                      "data-submits": em ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ao = l(643278),
    ad = l(191521),
    ac = l(405189);
function af(e) {
    let { line: t, placement: l, todos: i, todosLive: s = !0, provisionalTodo: u, agents: o, onJumpToActivity: d } = e,
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
    let T = null != i && i.length > 0,
        M = a.useCallback(() => b((e) => !e), []);
    return h
        ? (0, n.jsxs)("div", {
              className: ac.qd,
              "data-placement": f,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, n.jsxs)("div", {
                      className: r()(ac.vK, { [ac.ho]: x && c, [ac.ET]: !c }),
                      children: [
                          null == d
                              ? (0, n.jsx)("ol", {
                                    className: r()(ac.Rk, t6.pj),
                                    "data-live": "true",
                                    children: (0, n.jsx)(tX.A, {
                                        glyph: (0, n.jsx)(ad.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, n.jsx)(e9.D, {
                                    className: ac.pZ,
                                    onClick: d,
                                    "aria-label": E.intl.string(C.default.tYjQFG),
                                    children: (0, n.jsx)("ol", {
                                        className: r()(ac.Rk, t6.pj),
                                        "data-live": "true",
                                        children: (0, n.jsx)(tX.A, {
                                            glyph: (0, n.jsx)(ad.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, n.jsx)(to.m, {
                                    text: E.intl.string(C.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(e9.D, {
                                        className: ac.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(C.default.qCRC6c),
                                        children: (0, n.jsx)(ao.ClipboardListIcon, {
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
                            className: r()(ac.vB, { [ac.pg]: v && w, [ac.ui]: !v }),
                            children: (0, n.jsx)(li, {
                                todos: i,
                                provisional: u,
                                agents: o,
                                live: s,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var am = l(106430),
    ah = l(522250),
    ag = l(670455),
    ax = l(698638),
    ap = l(348800);
let av = [E.intl.string(C.default["E+Q26x"]), E.intl.string(C.default["06/jqP"]), E.intl.string(C.default["3gSfUa"])];
function ab(e) {
    var t;
    let { projectId: i, restoreState: r, onRestoreVersion: s } = e,
        u = (0, F.bG)([eS.Ay], () => eS.Ay.getMessages(i), [i]),
        o = (0, F.bG)([f.Ay], () => f.Ay.getConnState(i), [i]),
        d = (0, F.bG)([f.Ay], () => f.Ay.isChatStopped(i), [i]),
        c = (0, F.bG)([eS.Ay], () => eS.Ay.getProjectUsage(i), [i]),
        m = (0, F.bG)([eS.Ay], () => eS.Ay.getThinkingActivity(i), [i]),
        h = (0, F.bG)([eS.Ay], () => eS.Ay.isCompacting(i), [i]),
        g = (0, F.bG)([f.Ay], () => f.Ay.getModelSettings(i), [i]),
        x = a.useRef(null),
        p = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(!0),
        [y, k] = a.useState(!0);
    a.useEffect(() => {
        j.current && p.current?.scrollToBottom();
    }, [u]);
    let N = a.useCallback(() => {
            let e = x.current;
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
        let e = x.current,
            t = b.current;
        if (null == e) return;
        let l = p.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = l?.getBoundingClientRect().height,
            r = null;
        function s() {
            j.current &&
                (null != r && cancelAnimationFrame(r), (r = requestAnimationFrame(() => p.current?.scrollToBottom())));
        }
        let u = new ResizeObserver((t) => {
            for (let r of t)
                if (r.target === e) {
                    let e = r.contentRect.width;
                    if (e === n) continue;
                    ((n = e), s());
                } else if (r.target === l) {
                    let e = r.contentRect.height;
                    if (e === i) continue;
                    ((i = e), s());
                } else {
                    let e = r.contentRect.height;
                    if (e === a) continue;
                    ((a = e), s());
                }
        });
        return (
            u.observe(e),
            null != l && u.observe(l),
            null != t && u.observe(t),
            () => {
                (u.disconnect(), null != r && cancelAnimationFrame(r));
            }
        );
    }, []),
        a.useEffect(() => {
            (0, f.Hc)(i);
        }, [i]),
        (0, e2.v6)(i),
        a.useEffect(
            () => () =>
                (function (e) {
                    if ((0, ah.jb)(e)) return;
                    let t = (0, ah.hl)(e);
                    t < ah.qu ||
                        (0, ah.Xi)(e) ||
                        am.A.possiblyShowFeedbackModal(ag.MW.VIBEGRATIONS, () => {
                            ((0, ah.AH)(e),
                                (0, tG.openModalLazy)(async () => {
                                    let { default: a } = await Promise.all([
                                        l.e("312513"),
                                        l.e("218413"),
                                        l.e("137381"),
                                        l.e("847004"),
                                        l.e("341676"),
                                    ]).then(l.bind(l, 580711));
                                    return (l) => (0, n.jsx)(a, { ...l, projectId: e, promptCount: t });
                                }));
                        });
                })(i),
            [i],
        ));
    let A = (0, e1.Q_)(i),
        S = a.useCallback(
            (e, t) => {
                (0, f.dv)(i, e, t);
            },
            [i],
        ),
        I = a.useCallback(
            (e, t) => {
                0 === A.annotations.length
                    ? S(e, t)
                    : (S((0, ew.Mx)({ annotations: A.annotations, metaComment: e, context: A.context }), t),
                      (0, e1.PS)(i));
            },
            [A, S, i],
        ),
        T = a.useCallback(() => (0, f.fu)(i), [i]),
        M = a.useCallback((e) => e0(i, e.implementation_prompt), [i]),
        [_, P] = (function (e) {
            let [t, l] = a.useState(() => e$(e)),
                [n, i] = a.useState(e),
                r = n !== e,
                s = r ? e$(e) : t;
            return (r && (i(e), l(s)), [s, l]);
        })(i),
        R = a.useCallback(() => S(E.intl.string(C.default["3sTTBu"])), [S]),
        L = a.useCallback((e, t) => e0(i, e, { clarificationAnswers: t }), [i]),
        D = a.useCallback((e) => (0, f.XZ)(i, e), [i]),
        O = a.useCallback((e) => (0, f.vX)(i, e), [i]),
        $ = a.useCallback((e) => lM(i, "chat", Array.from(e), O), [i, O]),
        z = a.useCallback(() => e0(i, E.intl.string(C.default.Jj8Ftb)), [i]),
        q = r?.status === "restoring",
        B = "open" === o && !d && !q,
        U = u[u.length - 1],
        G = null != U && "assistant" === U.role && null != U.proposal,
        [H, V] = a.useState(null),
        W = U?.clarification != null && U.clarification.id !== H ? U.clarification : null,
        K = a.useCallback(() => {
            null != W && V(W.id);
        }, [W]),
        Y = (0, F.bG)([f.Ay], () => f.Ay.getSettings(i), [i]),
        [X, Z] = a.useState(null),
        J =
            null != U &&
            "assistant" === U.role &&
            null != U.settingsRequest &&
            (0, eS.BL)(U) &&
            U.id !== X &&
            ((t = U.settingsRequest),
            null != Y &&
                (t.keys ?? []).some((e) => {
                    let t = Y.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return Y.secrets.find((t) => t.name === e)?.set !== !0;
                    let l = Y.values[e];
                    return null == l || "" === l;
                }))
                ? U
                : null,
        ee = J?.settingsRequest ?? null,
        et = a.useCallback(() => {
            null != J && Z(J.id);
        }, [J]),
        el = null != ee,
        en = (function (e) {
            let { historyLoaded: t, historyUnavailable: l, connState: n } = e;
            return l ? "unavailable" : t ? "greeting" : "failed" === n || "closed" === n ? "unavailable" : "loading";
        })({
            historyLoaded: (0, F.bG)([eS.Ay], () => eS.Ay.hasLoadedHistory(i), [i]),
            historyUnavailable: (0, F.bG)([eS.Ay], () => eS.Ay.isHistoryUnavailable(i), [i]),
            connState: o,
        }),
        ea = "loading" === en && 0 === u.length,
        ei = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < i.length; t++) e = (31 * e + i.charCodeAt(t)) % 0x7fffffff;
            return av[e % av.length];
        }, [i]),
        er = G ? E.intl.string(C.default.Jj8Ftb) : "greeting" === en && 0 === u.length ? ei : null,
        es = a.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, eS.BL)(t)) return t;
            }
        }, [u]),
        eu = null != es,
        eo =
            null != es
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = eE.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(es)
                : void 0,
        ed = G && B ? z : void 0,
        ec = a.useCallback(() => e0(i, E.intl.string(C.default.ga8too)), [i]),
        [ef, em] = a.useState(null),
        [eh, eg] = a.useState(eu);
    (eh !== eu && (eg(eu), eu || em(null)),
        a.useEffect(() => {
            if (!eu) return;
            let e = p.current?.getScrollerNode(),
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
        }, [eu, es?.steps]));
    let ex = a.useMemo(() => (null != es ? (0, e5.b)(es.steps) : ""), [es]),
        ep = a.useMemo(() => (null != es ? ((0, eA.lt)(es.steps) ?? es.todos) : void 0), [es]),
        ev = es?.provisionalTodo,
        eb = null != es && eC(es),
        ej = a.useMemo(() => {
            var e;
            return null != es ? ((e = es.steps), lo((0, eA.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [es]);
    return (0, n.jsxs)("section", {
        ref: x,
        "data-vibegrations-chat": !0,
        className: ap.TE,
        children: [
            B
                ? (0, n.jsx)(eN.A, {
                      title: E.intl.string(C.default.UazRD1),
                      description: E.intl.string(C.default["O4r42+"]),
                      icons: ax.ir,
                      onDrop: $,
                  })
                : null,
            (0, n.jsx)(af, {
                onJumpToActivity: N,
                line: ex,
                placement: eu && "top" === ef ? "top" : null,
                todos: ep,
                todosLive: eb,
                provisionalTodo: ev,
                agents: ej,
            }),
            (0, n.jsxs)("div", {
                className: ap.JX,
                children: [
                    (0, n.jsx)(ek.Ch, {
                        ref: p,
                        onScroll: w,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [ap.N$, y ? null : ap.hB, el ? ap.J9 : null].filter(Boolean).join(" "),
                        children: (0, n.jsx)(nF, {
                            ref: b,
                            projectId: i,
                            messages: u,
                            emptyState: en,
                            floatingSettingsMessageId: J?.id,
                            onPickIdea: B ? M : void 0,
                            onAskForIdeas: B ? R : void 0,
                            draftHasText: _,
                            onApprovePlan: B ? ec : void 0,
                            onRestoreVersion: q || eu ? void 0 : s,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: ap.NJ,
                        children: (0, n.jsx)(n4, {
                            projectId: i,
                            thinking: eu,
                            turnStartedAt: eo,
                            restoring: q,
                            recalling: ea,
                            thinkingActivity: m,
                            compacting: h,
                            projectUsage: c,
                            connState: o,
                        }),
                    }),
                    null == W
                        ? null
                        : (0, n.jsx)("div", {
                              className: el ? `${ap.B5} ${ap.J9}` : ap.B5,
                              children: (0, n.jsx)(
                                  au,
                                  { clarification: W, onSubmit: B ? L : void 0, onDismiss: K },
                                  W.id,
                              ),
                          }),
                    null == ee
                        ? null
                        : (0, n.jsx)("div", {
                              className: ap.B5,
                              children: (0, n.jsx)(tQ, { projectId: i, request: ee, onDismiss: et }, J?.id),
                          }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ap.Jx,
                children: [
                    (0, n.jsx)(af, {
                        onJumpToActivity: N,
                        line: ex,
                        placement: eu && "bottom" === ef ? "bottom" : null,
                        todos: ep,
                        todosLive: eb,
                        provisionalTodo: ev,
                        agents: ej,
                    }),
                    0 === A.annotations.length
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ap.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(C.default.Lkx0Kk, {
                                          count: A.annotations.length,
                                      }),
                                  }),
                                  (0, n.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(C.default.fh6kQv),
                                  }),
                                  (0, n.jsx)(Q.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(C.default.B0YARo),
                                      onClick: () => (0, e1.PS)(i),
                                  }),
                              ],
                          }),
                    (0, n.jsx)(lO, {
                        projectId: i,
                        canSend: B,
                        stopped: d,
                        running: eu,
                        restoring: q,
                        onSend: I,
                        hasPendingContext: A.annotations.length > 0,
                        onInterrupt: B ? T : void 0,
                        onUploadFile: O,
                        onApprove: ed,
                        suggestion: er,
                        questionOpen: null != W || null != ee,
                        modelSettings: g,
                        onModelSettingsChange: D,
                        onDraftHasTextChange: P,
                    }),
                ],
            }),
        ],
    });
}
var aj = l(661531),
    ay = l(602853),
    ak = l(517461),
    aN = l(761929),
    aw = l(927506);
function aA(e) {
    let { open: t, maxWidth: l, onWidthChange: i, children: r } = e,
        s = (0, ay.r)(aj.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = a.useRef(null),
        [o, d] = (0, ak.V)("VibegrationsChatSidebarWidth", 460),
        [c, f] = a.useState(o ?? 460),
        m = (0, eI.clamp)(c, 360, l);
    a.useLayoutEffect(() => {
        i(t ? m + s : 0);
    }, [m, t, s, i]);
    let h = (0, aN.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: aN.R.HORIZONTAL_LEFT,
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
        className: aw.pz,
        hidden: !t,
        children: [
            (0, n.jsx)("div", { className: aw.Di, onPointerDown: g }),
            (0, n.jsx)("div", { ref: u, className: aw.kL, style: { width: m }, children: r }),
        ],
    });
}
var aS = l(376357),
    aC = l(857250),
    aE = l(97483),
    aI = l(624479),
    aT = l(92446),
    aM = l(761508),
    a_ = l(540999),
    aP = l(957565);
let aR = [],
    aL = new Map(),
    aD = new Map(),
    aF = new Map(),
    aO = new Map(),
    a$ = new Map(),
    az = new Map(),
    aq = new Map();
class aB extends F.Ay.Store {
    getStatus(e) {
        return aL.get(e) ?? null;
    }
    getFetchState(e) {
        return aD.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return aO.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return az.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return a$.get(e) ?? null;
    }
    getModelCalls(e) {
        return aq.get(e) ?? aR;
    }
    getForceCompactionState(e) {
        return aF.get(e) ?? "idle";
    }
}
let aU = new aB(e_.h, {
    LOGOUT: function () {
        if (
            0 === aL.size &&
            0 === aD.size &&
            0 === aF.size &&
            0 === aO.size &&
            0 === a$.size &&
            0 === az.size &&
            0 === aq.size
        )
            return !1;
        (aL.clear(), aD.clear(), aF.clear(), aO.clear(), a$.clear(), az.clear(), aq.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        aD.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l) return !1;
        let n = "pending" === aF.get(t);
        n &&
            aF.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === aD.get(t);
        if ((a && aD.set(t, "failed"), !n && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? aD.set(t, "failed") : (aL.set(t, l), aD.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        aO.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        a$.set(e.projectId, {
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
        aF.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        aF.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = aq.get(e.projectId);
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
        aq.set(e.projectId, n.length > 200 ? n.slice(-200) : n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, eq.aM)(l.total)) return !1;
        az.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (aL.delete(t), aD.delete(t), aF.delete(t), aO.delete(t), a$.delete(t), az.delete(t), aq.delete(t));
    },
});
function aG(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function aH(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function aV(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function aW(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = String(t.getHours()).padStart(2, "0"),
        n = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${l}:${n}:${a}`;
}
function aK(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function aY(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
function aQ(e) {
    return E.intl.string("preview" === e ? C.default["+m8XM6"] : C.default.kiOVnt);
}
let aX = ["all", "preview", "stable", "web"],
    aZ = new Set(["error", "aborted", "length"]);
function aJ(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(C.default.M7Vn6y);
        case "unconfigured":
            return E.intl.string(C.default.QirpMl);
        case "unauthorized":
            return E.intl.string(C.default.QZ1e4l);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(C.default.zUTHf7, { detail: e.detail })
                : E.intl.string(C.default.WIAQes);
    }
}
function a0(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(C.default.SBkDIZ, {
              p50: aG(e.memory_p50_bytes ?? 0),
              p999: aG(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let a1 = {
    db: () => C.default.r6cciE,
    db_preview: () => C.default.JmIyL8,
    runtime: () => C.default.bzNyv8,
    runtime_preview: () => C.default["LONZ/8"],
    bot: () => C.default.jdpw3A,
    bot_preview: () => C.default["/g6wUz"],
};
var a2 = l(69985);
function a5(e) {
    let { generatedAt: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: a2.KE,
        children: [
            (0, n.jsx)("div", {
                className: a2.IQ,
                children:
                    "loading" === l
                        ? (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(C.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(C.default["4NpaEk"], { time: aK(t) }),
                              })
                            : null,
            }),
            (0, n.jsx)(Q.$, { variant: "secondary", size: "sm", text: E.intl.string(C.default.aw0IJm), onClick: a }),
        ],
    });
}
function a7(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("section", {
        className: a2.uW,
        "aria-label": t,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: a2.Gf, children: t }),
            l,
        ],
    });
}
function a4(e) {
    let { label: t, value: l, hint: a, critical: i = !1 } = e;
    return (0, n.jsxs)("div", {
        className: a2.N8,
        children: [
            (0, n.jsxs)("div", {
                className: a2.x7,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != a && (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
        ],
    });
}
function a3(e) {
    let { label: t, used: l, max: a, formatValue: i } = e,
        r = a > 0 ? Math.min(1, Math.max(0, l / a)) : 0,
        s = r >= 0.9;
    return (0, n.jsxs)("div", {
        className: a2.N8,
        children: [
            (0, n.jsxs)("div", {
                className: a2.x7,
                children: [
                    (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${i(l)} / ${i(a)}`,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: a2.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.min(l, a),
                "aria-valuetext": `${i(l)} of ${i(a)}`,
                children: (0, n.jsx)("div", {
                    className: s ? a2.aV : a2.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(r) },
                }),
            }),
        ],
    });
}
function a6(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, n.jsx)(a4, {
            label: E.intl.string(C.default.H6PMwW),
            value: E.intl.string(C.default.TLOZ8J),
            hint: aJ(t),
        });
    let l = t.objects?.find((e) => "agent" === e.role);
    if (null == l)
        return (0, n.jsx)(a4, {
            label: E.intl.string(C.default.H6PMwW),
            value: "\u2014",
            hint: E.intl.string(C.default.uAzxdh),
        });
    let a = a0(l);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(a4, { label: E.intl.string(C.default.awAqRi), value: aH(l.cpu_ms) }),
            null != a && (0, n.jsx)(a4, { label: E.intl.string(C.default.WdGviA), value: a }),
        ],
    });
}
function a8(e) {
    let { analytics: t } = e,
        l = E.intl.string(C.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, n.jsx)(a7, {
            title: l,
            children: (0, n.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: aJ(t) }),
        });
    let a = (t.objects ?? [])
        .map((e) => {
            var t;
            let l;
            return {
                object: e,
                label: null != (l = "agent" !== (t = e.role) ? a1[t] : null) ? E.intl.string(l()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, n.jsx)(a7, {
        title: l,
        children:
            0 === a.length
                ? (0, n.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(C.default.uAzxdh),
                  })
                : a.map((e) => {
                      let { object: t, label: l } = e;
                      return (0, n.jsx)(
                          a4,
                          {
                              label: l,
                              value: E.intl.formatToPlainString(C.default.AnRynJ, { cpu: aH(t.cpu_ms) }),
                              hint: a0(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var a9 = l(522652);
let ie = [];
function it(e) {
    let t,
        { call: l } = e,
        { text: a, bad: i } =
            ((t = null != l.stopReason && aZ.has(l.stopReason)),
            {
                text: [
                    null != l.durationMs ? aH(l.durationMs) : null,
                    `${aV(l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens)} \u{2192} ${aV(l.outputTokens)}`,
                    t ? l.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, n.jsxs)("div", {
        className: a9.p5,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: a9.Q5,
                children: aW(l.observedAt),
            }),
            (0, n.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: a9.qN,
                children: [l.role, " \xb7 ", l.model],
            }),
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: i ? "text-feedback-critical" : "text-muted",
                children: a,
            }),
        ],
    });
}
function il(e, t) {
    return (0, n.jsx)(a4, {
        label: e,
        value: E.intl.formatToPlainString(C.default.U98VaN, { count: aV((0, eq.aM)(t)) }),
        hint: `${aV(t.input_tokens)} in \xb7 ${aV(t.output_tokens)} out \xb7 ${aV(t.cache_read_input_tokens)} cache read`,
    });
}
function ia(e) {
    let { projectId: t, status: l, fetchState: i, onRefresh: r, traceVisible: s = !1 } = e,
        u = (0, F.bG)([aU], () => aU.getLastTurnUsage(t), [t]),
        o = (0, F.bG)([aU], () => aU.getLastCompaction(t), [t]),
        d = (0, F.bG)([aU], () => aU.getLastCompactionDecline(t), [t]),
        c = (0, F.bG)([aU], () => aU.getForceCompactionState(t), [t]),
        m = a.useCallback(() => (0, f.Lj)(t), [t]),
        h = a.useCallback(() => (0, f.Lj)(t, !0), [t]),
        g = (0, F.bG)([aU], () => (s ? ie : aU.getModelCalls(t)), [t, s]),
        x = l?.agent?.lifetime ?? null,
        p = l?.agent?.limits ?? null,
        b = l?.agent?.session ?? null,
        j = o?.promptCeiling ?? p?.context_window_tokens ?? null;
    return (0, n.jsxs)("div", {
        className: a9.Mf,
        children: [
            (0, n.jsx)(a5, { generatedAt: l?.generated_at ?? null, fetchState: i, onRefresh: r }),
            (0, n.jsx)(a7, {
                title: E.intl.string(C.default.IYpHtT),
                children:
                    null == x
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default.gPabB9),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(a4, {
                                      label: E.intl.string(C.default["8MSJDH"]),
                                      value: aV((0, eq.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(C.default["6Z2KhK"], { count: aV(x.turns) }),
                                  }),
                                  il(E.intl.string(C.default.hk4jJr), x.orchestrator),
                                  il(E.intl.string(C.default.R9aduM), x.codegen),
                                  il(E.intl.string(C.default.Tj6b30), (0, eq.wU)(x.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, n.jsx)(a4, {
                                          label: E.intl.string(C.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${aV(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, n.jsx)(a7, {
                title: E.intl.string(C.default.lo4mY6),
                children:
                    null == u
                        ? (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default.uyPveL),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  il(E.intl.string(C.default["VwF+oY"]), u.total),
                                  (0, n.jsx)(a4, {
                                      label: E.intl.string(C.default["kILb+R"]),
                                      value: `${Math.round((u.cache_hit_rate ?? (0, eq.CA)(u.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsxs)(a7, {
                title: E.intl.string(C.default.mn8279),
                children: [
                    null != o && null != j
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(a3, {
                                      label: E.intl.string(C.default.dKFhCg),
                                      used: o.tokensAfter,
                                      max: j,
                                      formatValue: aV,
                                  }),
                                  (0, n.jsx)(a4, {
                                      label: E.intl.string(C.default.ntZb8d),
                                      value: `${aV(o.tokensBefore)} \u{2192} ${aV(o.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(C.default.jA05ru, {
                                          count: aV(o.retainedMessages),
                                          time: aK(o.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, n.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? E.intl.formatToPlainString(C.default.LKGmsP, { ceiling: aV(j) })
                                      : E.intl.string(C.default.gPabB9),
                          }),
                    null != d &&
                        (0, n.jsx)(a4, {
                            label: E.intl.string(C.default["se+2ls"]),
                            value: `${aV(d.projected)} / ${aV(d.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(C.default.KHK44U, { time: aK(d.observedAt) }),
                        }),
                    (0, n.jsxs)("div", {
                        className: a9.Lj,
                        children: [
                            (0, n.jsx)(Q.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(C.default.B0KV7p),
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
                                    if ("idle" === e) return E.intl.string(C.default.wBng42);
                                    if ("pending" === e) return E.intl.string(C.default["0tgo31"]);
                                    let t = aK(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(C.default["eL8+rZ"], { time: t });
                                    let l =
                                        "declined" === e.outcome
                                            ? C.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? C.default.GV4sdd
                                              : C.default["Y+0nUb"];
                                    return E.intl.formatToPlainString(l, {
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
                                            text: E.intl.string(C.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, n.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(C.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !s &&
                (0, n.jsx)(a7, {
                    title: E.intl.string(C.default.F5eP7e),
                    children:
                        0 === g.length
                            ? (0, n.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(C.default.j8NMgl),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      g
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, n.jsx)(it, { call: e }, e.id)),
                                      g.length > 30 &&
                                          (0, n.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: E.intl.formatToPlainString(C.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: g.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || l?.analytics != null) &&
                (0, n.jsxs)(a7, {
                    title: E.intl.string(C.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(a4, {
                                        label: E.intl.string(C.default["wt5X/o"]),
                                        value: aK(b.instance_since),
                                        hint: E.intl.string(C.default.QX2UQC),
                                    }),
                                    (0, n.jsx)(a4, { label: E.intl.string(C.default["4lgurx"]), value: aV(b.sockets) }),
                                    (0, n.jsx)(a4, {
                                        label: E.intl.string(C.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(C.default["9KlveJ"])
                                            : E.intl.string(C.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, n.jsx)(a4, {
                                            label: E.intl.string(C.default["/hOBkc"]),
                                            value: aV(b.queued_messages),
                                        }),
                                ],
                            }),
                        l?.analytics != null && (0, n.jsx)(a6, { analytics: l.analytics }),
                    ],
                }),
            null != p &&
                (0, n.jsxs)(a7, {
                    title: E.intl.string(C.default["EmSF+A"]),
                    children: [
                        (0, n.jsx)(a4, {
                            label: E.intl.string(C.default.Rb6m3E),
                            value: aV(p.max_subagent_iterations),
                        }),
                        (0, n.jsx)(a4, {
                            label: E.intl.string(C.default.WQ9pMe),
                            value: E.intl.formatToPlainString(C.default.U98VaN, { count: aV(p.context_window_tokens) }),
                        }),
                        (0, n.jsx)(a4, {
                            label: E.intl.string(C.default.iEAvzu),
                            value: E.intl.formatToPlainString(C.default.U98VaN, {
                                count: aV(p.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, n.jsx)(a4, {
                            label: E.intl.string(C.default["jbhs+f"]),
                            value: aV(p.max_user_message_chars),
                        }),
                        (0, n.jsx)(a4, { label: E.intl.string(C.default.TOQnq4), value: aV(p.max_build_attempts) }),
                        (0, n.jsx)(a4, { label: E.intl.string(C.default.RIDc6D), value: aV(p.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var ii = l(629584),
    ir = l(683438),
    is = l(849363);
function iu(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, n.jsx)("div", {
              className: is.ut,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(C.default.TV42NS),
              }),
          });
}
function io(e) {
    let { state: t, emptyTitle: l, emptyBody: a } = e;
    return "failed" === t.status
        ? (0, n.jsxs)("div", {
              className: is.qf,
              children: [
                  (0, n.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(C.default.TV42NS),
                  }),
                  (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(C.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: is.qf,
              children: [
                  (0, n.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: a }),
              ],
          });
}
function id(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, n.jsx)("div", {
              className: is.ps,
              children: (0, n.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(C.default["U/qDX9"]),
              }),
          })
        : null;
}
var ic = l(417397);
let im = a.memo(function (e) {
    var t;
    let { entry: l, showSource: i } = e,
        [r, s] = a.useState(!1),
        u = a.useId(),
        o = a.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let l = e.indexOf("{"),
                        n = e.indexOf("["),
                        a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                    if (-1 === a) return null;
                    let i = e.slice(a).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let r = e.slice(0, a).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: r, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: r, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(l.message),
            [l.message],
        ),
        d = "error" === l.level ? "text-feedback-critical" : "text-default";
    return (0, n.jsxs)("div", {
        className: ic.vK,
        children: [
            (0, n.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ic.Mt,
                selectable: !0,
                children: aW(l.ts),
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
                className: ic.dm,
                children: l.level,
            }),
            (0, n.jsxs)("span", {
                className: ic.t4,
                children: [
                    i &&
                        null != l.source &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: ic.Cq,
                            children: l.source,
                        }),
                    null != l.kind &&
                        (0, n.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: ic.Cq,
                            title: l.build ?? void 0,
                            children: E.intl.string(C.default.GO6JcR),
                        }),
                    null != o
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, n.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, n.jsxs)(e9.D, {
                                      className: ic.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": E.intl.string(C.default.ehmgbH),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, n.jsx)(th.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, n.jsx)(tg._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, n.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  E.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? C.default.lXkB6Z : C.default.wkbYxG,
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, n.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: ic.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
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
function ih(e) {
    let { projectId: t } = e,
        l = (0, F.bG)([lK.Ay], () => lK.Ay.getLogs(t), [t]),
        i = (0, F.bG)([lK.Ay], () => lK.Ay.getHistoryState(t, "logs")),
        [r, s] = a.useState("all"),
        [u, o] = a.useState(""),
        d = a.useMemo(() => {
            let e = u.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === r ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === r) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, r, u]),
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
                aX.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return aQ(e);
                            case "web":
                                return E.intl.string(C.default.J2TPCe);
                            default:
                                return E.intl.string(C.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, n.jsxs)("div", {
        className: ic.$F,
        children: [
            (0, n.jsxs)("div", {
                className: ic.y4,
                children: [
                    (0, n.jsx)(ii.I, {
                        look: "pill",
                        "aria-label": E.intl.string(C.default.fhnXnM),
                        options: h,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, n.jsx)("div", {
                        className: ic.KT,
                        children: (0, n.jsx)(ir.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: E.intl.string(C.default["MX4vr/"]),
                            "aria-label": E.intl.string(C.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, n.jsx)(iu, { state: i }),
            (0, n.jsxs)(ek.Ch, {
                ref: c,
                onScroll: m,
                overflow: "auto",
                className: ic.sx,
                children: [
                    (0, n.jsx)(id, { state: i }),
                    0 === l.length
                        ? (0, n.jsx)(io, {
                              state: i,
                              emptyTitle: E.intl.string(C.default.mcFyYc),
                              emptyBody: E.intl.string(C.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, n.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(C.default.oIJbFa),
                            })
                          : d.map((e) => (0, n.jsx)(im, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function ig(e) {
    let { title: t, preview: l, stable: i, renderEnv: r } = e,
        s = [];
    return (
        null != l && s.push((0, n.jsx)(a.Fragment, { children: r("preview", l) }, "preview")),
        null != i && s.push((0, n.jsx)(a.Fragment, { children: r("stable", i) }, "stable")),
        (0, n.jsx)(a7, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, n.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(C.default.W4hcKL),
                      }),
        })
    );
}
function ix(e) {
    var t;
    let { env: l, bot: a } = e;
    return a.ever_started
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(a4, {
                      label: E.intl.formatToPlainString(C.default.f8ix3w, { env: aQ(l) }),
                      value: ((t = a.connected), E.intl.string(t ? C.default["9KlveJ"] : C.default["4tYZVa"])),
                      critical: !a.connected && null != a.fatal_reason,
                      hint: a.fatal_reason ?? (a.connected ? void 0 : (a.last_start_reason ?? void 0)),
                  }),
                  (0, n.jsx)(a4, {
                      label: E.intl.string(C.default["0AB7l3"]),
                      value: aV(a.events_received),
                      hint:
                          null != a.last_event_type && null != a.last_event_at
                              ? `${a.last_event_type} \xb7 ${aK(a.last_event_at)}`
                              : void 0,
                  }),
                  (0, n.jsx)(a4, { label: E.intl.string(C.default.ElaQ0A), value: aV(a.guild_count) }),
                  (0, n.jsx)(a4, {
                      label: E.intl.string(C.default.SJtBTN),
                      value: aV(a.reconnects),
                      hint:
                          null != a.last_close_code && null != a.last_close_at
                              ? E.intl.formatToPlainString(C.default.bSzLue, {
                                    code: a.last_close_code,
                                    time: aK(a.last_close_at),
                                })
                              : void 0,
                  }),
                  a.dispatch_errors > 0 &&
                      (0, n.jsx)(a4, {
                          label: E.intl.string(C.default.N4l504),
                          value: aV(a.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, n.jsx)(a4, { label: aQ(l), value: E.intl.string(C.default.C6xjtD) });
}
function ip(e) {
    let { env: t, metrics: l } = e,
        a = l.status_4xx + l.status_5xx;
    return (0, n.jsx)(a4, {
        label: aQ(t),
        value: E.intl.formatToPlainString(C.default.Yur5Zm, { requests: aV(l.requests), failures: aV(a + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? E.intl.formatToPlainString(C.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: aK(l.last_failure.at),
                  })
                : E.intl.formatToPlainString(C.default["1PdrB1"], { time: aK(l.since) }),
    });
}
function iv(e) {
    let { env: t, runtime: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(a4, {
                label: E.intl.formatToPlainString(C.default.BVORfc, { env: aQ(t) }),
                value: aV(l.connections),
            }),
            l.schedules.map((e) =>
                (0, n.jsx)(
                    a4,
                    {
                        label: E.intl.formatToPlainString(C.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(C.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(C.default["7ecbr3"], { time: aK(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ib(e) {
    let { env: t, metrics: l } = e;
    return (0, n.jsx)(a4, {
        label: aQ(t),
        value: E.intl.formatToPlainString(C.default.voXL2a, { calls: aV(l.calls), errors: aV(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function ij(e) {
    let { title: t, metrics: l, limits: a } = e;
    if (null == l || 0 === l.requests)
        return (0, n.jsx)(a7, {
            title: t,
            children: (0, n.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(C.default["v/fbnv"]),
            }),
        });
    let i = l.cpu_ms_total / l.requests,
        r = l.cpu_ms_total > 0;
    return (0, n.jsxs)(a7, {
        title: t,
        children: [
            (0, n.jsx)(a4, {
                label: E.intl.string(C.default.KOnL3g),
                value: aV(l.requests),
                hint: E.intl.formatToPlainString(C.default["1PdrB1"], { time: aK(l.since) }),
            }),
            (0, n.jsx)(a4, { label: E.intl.string(C.default.CjPhyY), value: aV(l.errors), critical: l.errors > 0 }),
            r
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(a3, {
                              label: E.intl.string(C.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: a.cpu_ms_per_request,
                              formatValue: aH,
                          }),
                          (0, n.jsx)(a4, {
                              label: E.intl.string(C.default["+rYPHD"]),
                              value: aH(i),
                              hint: E.intl.formatToPlainString(C.default["+LxC7W"], {
                                  total: aH(l.cpu_ms_total),
                                  wall: aH(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, n.jsx)(a4, {
                      label: E.intl.string(C.default["V/nNbs"]),
                      value: E.intl.string(C.default.YKWIxp),
                      hint: E.intl.string(C.default["8GAiDk"]),
                  }),
            !r &&
                l.wall_ms_total > 0 &&
                (0, n.jsx)(a4, { label: E.intl.string(C.default.ueEMPa), value: aH(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, n.jsx)(a4, { label: E.intl.string(C.default.vM2krr), value: aV(l.exceeded_cpu), critical: !0 }),
            (0, n.jsx)(a4, {
                label: E.intl.string(C.default.g1O88C),
                value: aV(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(C.default["5iALNP"], { limit: `${a.memory_mb} MB` }),
            }),
            null != l.build && (0, n.jsx)(a4, { label: E.intl.string(C.default.JUZs7g), value: aY(l.build) }),
        ],
    });
}
function iy(e) {
    let { status: t } = e,
        { stable: l, preview: i, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: E.intl.string(C.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: E.intl.string(C.default["+m8XM6"]), metrics: i },
                  { key: "stable", label: E.intl.string(C.default.kiOVnt), metrics: l },
              ];
    return (0, n.jsx)(a7, {
        title: E.intl.string(C.default.i91625),
        children: u.map((e) => {
            let { key: t, label: l, metrics: i } = e;
            return null == i
                ? (0, n.jsx)(a4, { label: l, value: "\u2014" }, t)
                : (0, n.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, n.jsx)(a4, {
                                  label: E.intl.formatToPlainString(C.default["9TpIQg"], { env: l }),
                                  value: aG(i.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      i.r2_truncated ? C.default.o45MMA : C.default.S7o3vV,
                                      { count: aV(i.r2_objects) },
                                  ),
                              }),
                              null != i.db_bytes &&
                                  (0, n.jsx)(a3, {
                                      label: E.intl.formatToPlainString(C.default["0OIswI"], { env: l }),
                                      used: i.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: aG,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function ik(e) {
    let { status: t, fetchState: l, onRefresh: a } = e;
    return (0, n.jsxs)("div", {
        className: a9.Mf,
        children: [
            (0, n.jsx)(a5, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: a }),
            null != t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(ij, {
                            title: E.intl.string(C.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(ij, {
                            title: E.intl.string(C.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, n.jsx)(iy, { status: t }),
                        null != t.bot &&
                            (0, n.jsx)(ig, {
                                title: E.intl.string(C.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ix, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, n.jsx)(ig, {
                                title: E.intl.string(C.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ip, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, n.jsx)(ig, {
                                title: E.intl.string(C.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, n.jsx)(iv, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, n.jsx)(ig, {
                                title: E.intl.string(C.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, n.jsx)(ib, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, n.jsx)(a8, { analytics: t.analytics }),
                        (0, n.jsxs)(a7, {
                            title: E.intl.string(C.default["HHe+8E"]),
                            children: [
                                (0, n.jsx)(a4, {
                                    label: E.intl.string(C.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? aY(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, n.jsx)(a4, {
                                    label: E.intl.string(C.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? aY(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function iN(e, t) {
    return String(e).padStart(t, "0");
}
function iw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let l = Date.parse(e);
    if (Number.isNaN(l)) return null;
    let n = new Date(l),
        a = `${iN(n.getHours(), 2)}:${iN(n.getMinutes(), 2)}:${iN(n.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${iN(n.getMilliseconds(), 3)}` : a;
}
var iA = l(977129);
let iS = new Map(),
    iC = new Map(),
    iE = 0,
    iI = 0;
async function iT(e, t, l) {
    let n = iE,
        a = iS.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < iI) return { status: "forbidden" };
    let i = iC.get(t);
    if (null != i) return i;
    let r = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: r } = await (0, iA.d)(e),
                s = await fetch(
                    ((a = new URL(`${r}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === s.status) return ((iI = Date.now() + 6e4), { status: "forbidden" });
            if (!s.ok) return { status: "failed" };
            let u = await s.json();
            if (!0 !== u.available || null == u.rich) return { status: "unavailable" };
            if (n !== iE) return { status: "failed" };
            var l = u.rich;
            for (iS.set(t, l); iS.size > 100;) {
                let e = iS.keys().next();
                if (!0 === e.done) break;
                iS.delete(e.value);
            }
            return { status: "loaded", rich: u.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    iC.set(t, r);
    let s = await r;
    return (iC.get(t) === r && iC.delete(t), l?.aborted === !0 ? { status: "failed" } : s);
}
function iM() {
    ((iE += 1), iS.clear(), iC.clear(), (iI = 0));
}
function i_(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function iP(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function iR(e) {
    switch (e) {
        case "subagent":
            return E.intl.string(C.default["EoY7D+"]);
        case "context":
            return E.intl.string(C.default.KVFrD3);
        case "tool":
            return E.intl.string(C.default["/N6ZU9"]);
        case "delegated":
            return E.intl.string(C.default.HcEbf2);
        default:
            return E.intl.string(C.default.AhOqQs);
    }
}
function iL(e) {
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
let iD = ["model", "tool", "subagent", "delegated", "context"];
function iF(e, t) {
    let l = t.trim().toLowerCase();
    return "" === l
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(iL(e)),
              t.join(" ").toLowerCase()).includes(l);
          });
}
function iO(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let i$ = ["arguments", "result", "usage", "diagnostics"];
var iz = l(40715);
let iq = { started: iz.Vf, ok: iz.mo, error: iz.Sr };
function iB(e) {
    let { status: t } = e;
    return (0, n.jsx)("span", {
        className: `${iz.Om} ${iq[t] ?? iz.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return E.intl.string(C.default.HpKDyl);
                case "error":
                    return E.intl.string(C.default["5T4Dd0"]);
                default:
                    return E.intl.string(C.default.VbEmf0);
            }
        })(t),
    });
}
let iU = { model: iz.WI, subagent: iz.uM, context: iz.eH, tool: iz.pw, delegated: iz.C8 };
function iG(e) {
    let { label: t, value: l } = e;
    return (0, n.jsxs)("div", {
        className: iz.wV,
        children: [
            (0, n.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: iz.D6, children: t }),
            (0, n.jsx)("div", { className: iz.zL, children: l }),
        ],
    });
}
function iH(e) {
    let { label: t, value: l } = e;
    return (0, n.jsx)(iG, {
        label: t,
        value: (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: l }),
    });
}
function iV(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: iz.WA, children: t });
}
function iW(e) {
    let { title: t, children: l } = e,
        i = a.useId();
    return (0, n.jsxs)("section", {
        "aria-labelledby": i,
        className: iz.xd,
        children: [
            (0, n.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: i,
                className: iz.Hm,
                children: t,
            }),
            l,
        ],
    });
}
function iK(e) {
    let { title: t, children: l } = e;
    return (0, n.jsxs)("details", {
        className: iz.XK,
        children: [
            (0, n.jsxs)("summary", {
                className: iz.p8,
                children: [
                    (0, n.jsx)(tg._, { className: iz.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, n.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, n.jsx)("div", { className: iz.bG, children: l }),
        ],
    });
}
function iY(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, n.jsx)(iG, {
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
            ? E.intl.formatToPlainString(C.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? E.intl.formatToPlainString(C.default.OB8Qvn, { count: t.items })
              : null;
    return (0, n.jsx)(iG, {
        label: t.key,
        value: (0, n.jsxs)("div", {
            className: iz.Kv,
            children: [
                (0, n.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return E.intl.string(C.default.xO6bcQ);
                            case "content":
                                return E.intl.string(C.default.gpBZRr);
                            default:
                                return E.intl.string(C.default.OZvPXt);
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
function iQ(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: iz.QR,
                      children: (0, n.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: iz.uh,
                          children: E.intl.string(C.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, n.jsx)(
                          iG,
                          {
                              label: e.key,
                              value: (0, n.jsxs)("div", {
                                  className: iz.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: iz.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: E.intl.string(C.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? E.intl.string(C.default["1kBG9Z"])
                                                        : E.intl.formatToPlainString(C.default.VGSwo4, {
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
function iX(e) {
    let { detail: t } = e,
        l =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : E.intl.string(
                      "loading" === t.status
                          ? C.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? C.default.jEQTot
                            : C.default.fj5wM8,
                  );
    return null == l
        ? null
        : (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: iz.E7, children: l });
}
function iZ(e) {
    let { projectId: t, entry: l, onClose: i, parent: r, onSelect: s, childCount: u } = e,
        o = (function (e) {
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
                i$.filter((e) => n.has(e))
            );
        })(l, { childCount: u, hasParent: null != r }),
        d = (function (e, t) {
            let [l, n] = a.useState(null);
            if (
                (a.useEffect(() => {
                    if (null == t || null != iS.get(t)) return;
                    let l = new AbortController();
                    return (
                        iT(e, t, l.signal).then((e) => {
                            l.signal.aborted || n({ detailId: t, detail: e });
                        }),
                        () => l.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let i = iS.get(t);
            return null != i ? { status: "loaded", rich: i } : l?.detailId === t ? l.detail : { status: "loading" };
        })(t, "tool" === l.kind ? l.detailId : void 0),
        c = "model" === l.kind ? l.model : l.tool,
        f = iw(l.startedAt, "millis"),
        m = iL(l),
        h = a.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), i());
            },
            [i],
        );
    return (0, n.jsxs)(ek.Ch, {
        className: iz._0,
        onKeyDown: h,
        role: "region",
        "aria-label": E.intl.formatToPlainString(C.default.TlpZKP, { name: c }),
        children: [
            (0, n.jsx)("div", {
                className: iz.sy,
                children: (0, n.jsxs)("div", {
                    className: iz.HI,
                    children: [
                        (0, n.jsx)(iB, { status: l.status }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${iz.PY} ${iU[m]}`,
                            children: iR(m),
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: iz.kc,
                            children: c,
                        }),
                        (0, n.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: iz.l5,
                            children: null == l.durationMs ? E.intl.string(C.default.HpKDyl) : i_(l.durationMs),
                        }),
                    ],
                }),
            }),
            null == l.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: iz.Um,
                      selectable: !0,
                      children: l.error,
                  }),
            o.includes("arguments") && "tool" === l.kind
                ? (0, n.jsxs)(iW, {
                      title: E.intl.string(C.default.jXY3mm),
                      children: [
                          (l.fields ?? []).map((e) => (0, n.jsx)(iY, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, n.jsx)(iQ, { entries: d.rich.args })
                              : null,
                          (0, n.jsx)(iX, { detail: d }),
                      ],
                  })
                : null,
            o.includes("result") && "tool" === l.kind
                ? (0, n.jsxs)(iW, {
                      title: E.intl.string(C.default.KXrf5F),
                      children: [
                          (0, n.jsx)(iH, {
                              label: E.intl.string(C.default["2Aii2k"]),
                              value: E.intl.formatToPlainString(C.default.DdXP0P, { count: l.resultChars ?? 0 }),
                          }),
                          null == l.resultAdded
                              ? null
                              : (0, n.jsx)(iH, {
                                    label: E.intl.string(C.default.hpGFzS),
                                    value: `+${l.resultAdded} \u{2212}${l.resultRemoved ?? 0}`,
                                }),
                          !0 !== l.resultTruncated
                              ? null
                              : (0, n.jsx)(iG, {
                                    label: E.intl.string(C.default["UV2R1/"]),
                                    value: (0, n.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: E.intl.string(C.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, n.jsx)(iQ, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            o.includes("usage") && "model" === l.kind
                ? (0, n.jsxs)(iW, {
                      title: E.intl.string(C.default["W+4BVk"]),
                      children: [
                          (0, n.jsxs)(iV, {
                              children: [
                                  null == l.promptTokens
                                      ? null
                                      : (0, n.jsx)(iH, {
                                            label: E.intl.string(C.default.Ran4BY),
                                            value: E.intl.formatToPlainString(C.default["PYO+Jv"], {
                                                tokens: iP(l.promptTokens),
                                            }),
                                        }),
                                  null == l.systemTokens
                                      ? null
                                      : (0, n.jsx)(iH, {
                                            label: E.intl.string(C.default.vPIcyv),
                                            value: E.intl.formatToPlainString(C.default.Qy2iTq, {
                                                system: iP(l.systemTokens),
                                                tools: iP(l.toolsTokens ?? 0),
                                                toolCount: l.tools ?? 0,
                                                messages: iP(l.messagesTokens ?? 0),
                                                messageCount: l.messages ?? 0,
                                            }),
                                        }),
                                  null == l.inputTokens
                                      ? null
                                      : (0, n.jsx)(iH, {
                                            label: E.intl.string(C.default["/703Yk"]),
                                            value: String(l.inputTokens),
                                        }),
                                  null == l.outputTokens
                                      ? null
                                      : (0, n.jsx)(iH, {
                                            label: E.intl.string(C.default["6+W0dJ"]),
                                            value: String(l.outputTokens),
                                        }),
                                  null == l.cacheReadTokens
                                      ? null
                                      : (0, n.jsx)(iH, {
                                            label: E.intl.string(C.default.VyAl6j),
                                            value: E.intl.formatToPlainString(C.default.lkMc23, {
                                                read: l.cacheReadTokens,
                                                write: l.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == l.costUsd
                                      ? null
                                      : (0, n.jsx)(iH, {
                                            label: E.intl.string(C.default.l9YFEQ),
                                            value: `$${l.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: iz.E7,
                              children: E.intl.string(C.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            o.includes("arguments") || o.includes("result")
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: iz.E7,
                      children: E.intl.string(C.default["ppv+97"]),
                  })
                : null,
            o.includes("diagnostics")
                ? (0, n.jsx)(iK, {
                      title: E.intl.string(C.default.T7SFyZ),
                      children: (0, n.jsxs)(iV, {
                          children: [
                              null == r
                                  ? null
                                  : (0, n.jsx)(iG, {
                                        label: E.intl.string(C.default.NnBqcd),
                                        value: (0, n.jsx)(e9.D, {
                                            tag: "div",
                                            className: iz.mi,
                                            onClick: () => s(r.id),
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === r.kind ? r.model : r.tool,
                                            }),
                                        }),
                                    }),
                              0 === u
                                  ? null
                                  : (0, n.jsx)(iH, {
                                        label: E.intl.string(C.default.fI6mzD),
                                        value: E.intl.formatToPlainString(C.default.hO8FYp, { count: u }),
                                    }),
                              null == l.turnId
                                  ? null
                                  : (0, n.jsx)(iH, { label: E.intl.string(C.default.I7cJP0), value: l.turnId }),
                              (0, n.jsx)(iH, { label: E.intl.string(C.default["XVTP/S"]), value: l.id }),
                              null == f ? null : (0, n.jsx)(iH, { label: E.intl.string(C.default.rD7bm0), value: f }),
                              "model" !== l.kind || null == l.stopReason
                                  ? null
                                  : (0, n.jsx)(iH, { label: E.intl.string(C.default.rxmzYT), value: l.stopReason }),
                              "tool" !== l.kind || null == l.schema || 0 === l.schema.length
                                  ? null
                                  : (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: iz.Hm,
                                                children: E.intl.string(C.default["6oILKx"]),
                                            }),
                                            l.schema.map((e) =>
                                                (0, n.jsx)(
                                                    iH,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? E.intl.formatToPlainString(C.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : E.intl.formatToPlainString(C.default["/L6GFe"], {
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
                className: iz.E7,
                children: E.intl.string(C.default.khAjR0),
            }),
        ],
    });
}
let iJ = { model: iz.WI, subagent: iz.uM, context: iz.eH, tool: iz.pw, delegated: iz.C8 };
function i0(e) {
    let { entries: t } = e,
        l = a.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        l = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let n of e) {
                        let e = iL(n);
                        ((t[e] += n.durationMs ?? 0), (l[e] += 1));
                    }
                    return iD.map((e) => ({ category: e, ms: t[e], calls: l[e] }));
                })(t),
            [t],
        ),
        i = l.reduce((e, t) => e + t.ms, 0);
    return (0, n.jsxs)("div", {
        className: iz.M0,
        children: [
            (0, n.jsx)("div", {
                className: iz.pZ,
                "aria-hidden": !0,
                children:
                    0 === i
                        ? null
                        : l.map((e) => {
                              let { category: t, ms: l } = e;
                              return 0 === l
                                  ? null
                                  : (0, n.jsx)(
                                        "div",
                                        {
                                            className: `${iz.dL} ${iJ[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(l) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, n.jsx)("div", {
                className: iz.z4,
                role: "group",
                "aria-label": E.intl.string(C.default.UZ1OlR),
                children: iD.map((e) => {
                    let t = l.find((t) => t.category === e),
                        a = t?.ms ?? 0,
                        r = t?.calls ?? 0,
                        s = 0 === i ? 0 : Math.round((a / i) * 100);
                    return (0, n.jsxs)(
                        "div",
                        {
                            className: iz.fI,
                            children: [
                                (0, n.jsx)("span", { className: `${iz.A9} ${iJ[e]}`, "aria-hidden": !0 }),
                                (0, n.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: iR(e) }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(C.default.UffawN, { percent: s }),
                                }),
                                (0, n.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: E.intl.formatToPlainString(C.default.w8vPbe, { count: r }),
                                }),
                                0 === a
                                    ? null
                                    : (0, n.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: i_(a),
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
let i1 = { model: iz.WI, subagent: iz.uM, context: iz.eH, tool: iz.pw, delegated: iz.C8 };
function i2(e) {
    let { entry: t, selected: l, tabbable: a, onSelect: i, onKeyDown: r, nested: s } = e,
        u = iL(t),
        o = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? E.intl.formatToPlainString(C.default["PYO+Jv"], { tokens: iP(t.promptTokens) })
                : null != t.durationMs
                  ? i_(t.durationMs)
                  : null;
    return (0, n.jsxs)(e9.D, {
        tag: "div",
        role: "option",
        "aria-selected": l,
        tabIndex: a ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${iz.nM} ${s ? iz.A5 : ""} ${"error" === t.status ? iz.Cr : ""} ${l ? iz.CZ : ""}`,
        onKeyDown: r,
        onClick: () => i(t.id),
        children: [
            (0, n.jsxs)("div", {
                className: iz.sU,
                children: [
                    (0, n.jsx)(iB, { status: t.status }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${iz.PY} ${i1[u]}`,
                        children: iR(u),
                    }),
                    (0, n.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: iz.G9,
                        children: o,
                    }),
                    null == d
                        ? null
                        : (0, n.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: iz.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: iz.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, n.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: iz.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function i5(e) {
    var t;
    let { projectId: l, query: i } = e,
        r = (0, F.yK)([lK.Ay], () => lK.Ay.getTrace(l), [l]),
        s = (0, F.bG)([lK.Ay], () => lK.Ay.getHistoryState(l, "trace"));
    a.useEffect(() => iM, [l]);
    let [u, o] = a.useState(null),
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
        y = a.useCallback((e) => o((t) => (t === e ? null : e)), []),
        k = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, eI.clamp)((e / t) * 100, 25, 75);
        }, []),
        N = a.useCallback((e) => {
            let t = h.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, eI.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        w = (0, aN.A)({
            resizableDomNodeRef: g,
            orientation: aN.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), c((e) => (0, eI.clamp)(e + t, 25, 75)));
        }, []),
        I = a.useCallback(() => {
            (o(null), j(u));
        }, [u, j]),
        T = a.useMemo(() => iF(r, i), [r, i]),
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
                })(r)
                    .map((e, t) => ({ ...e, index: t, entries: iF(e.entries, i) }))
                    .filter((e) => e.entries.length > 0),
            [r, i],
        ),
        _ = iO(T, u),
        P = _?.kind === "tool" ? iO(r, _.parentId ?? null) : null,
        R = null == _ ? 0 : ((t = _.id), r.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        L = T[T.length - 1];
    a.useLayoutEffect(() => {
        if (null != u) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [L, u]);
    let D = a.useCallback(
        (e) => {
            if (0 === T.length) return;
            let t = T.findIndex((e) => e.id === u);
            function l(t) {
                e.preventDefault();
                let l = Math.max(0, Math.min(T.length - 1, t));
                (o(T[l].id), document.getElementById(`trace-${T[l].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? l(t + 1)
                : "ArrowUp" === e.key
                  ? l(-1 === t ? T.length - 1 : t - 1)
                  : "Home" === e.key
                    ? l(0)
                    : "End" === e.key
                      ? l(T.length - 1)
                      : "Escape" === e.key && null != u && (e.preventDefault(), o(null), j(u));
        },
        [T, u, j],
    );
    return 0 === r.length
        ? (0, n.jsx)("div", {
              className: iz.uP,
              ref: h,
              children: (0, n.jsx)(io, {
                  state: s,
                  emptyTitle: E.intl.string(C.default.Iyt8OJ),
                  emptyBody: E.intl.string(C.default["8pdPx5"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: `${iz.uP} ${f ? iz.F4 : ""}`,
              ref: h,
              children: [
                  (0, n.jsxs)("div", {
                      className: iz.DK,
                      children: [
                          (0, n.jsx)(i0, { entries: r }),
                          (0, n.jsx)(iu, { state: s }),
                          0 === T.length
                              ? (0, n.jsx)("div", {
                                    className: iz.Ie,
                                    children: (0, n.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: E.intl.string(C.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, n.jsxs)(ek.Ch, {
                                    ref: x,
                                    className: iz.Ns,
                                    children: [
                                        (0, n.jsx)(id, { state: s }),
                                        (0, n.jsx)("div", {
                                            ref: p,
                                            id: b,
                                            role: "listbox",
                                            "aria-label": E.intl.string(C.default["QATZ+A"]),
                                            className: iz.p_,
                                            children: M.map((e) => {
                                                let t = iw(e.startedAt),
                                                    l = E.intl.formatToPlainString(C.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, n.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, n.jsxs)("div", {
                                                                className: iz.mf,
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
                                                                              children: i_(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, n.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": l,
                                                                className: iz.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, n.jsx)(
                                                                        i2,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === u,
                                                                            tabbable: e.id === (u ?? T[0]?.id),
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
                  null == _
                      ? null
                      : (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": E.intl.string(C.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: iz.b1,
                                    onPointerDown: A,
                                    onKeyDown: S,
                                }),
                                (0, n.jsx)("div", {
                                    ref: g,
                                    className: iz.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, n.jsx)(iZ, {
                                        projectId: l,
                                        entry: _,
                                        parent: P,
                                        childCount: R,
                                        onSelect: o,
                                        onClose: I,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var i7 = l(402879);
function i4(e) {
    let { projectId: t, query: l, onQueryChange: i } = e,
        r = (0, F.yK)([lK.Ay], () => lK.Ay.getTrace(t), [t]),
        s = a.useRef(null),
        u = a.useCallback(() => {
            let e = JSON.stringify(
                {
                    kind: "vibegrations.trace",
                    version: 1,
                    project_id: t,
                    exported_at: new Date().toISOString(),
                    note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                    entries: r,
                },
                null,
                2,
            );
            (0, i7.F)(new Blob([e], { type: "application/json" }), `vibegrations-trace-${t}.json`).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [r, t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: iz.ED,
                children: (0, n.jsx)(ir.I, {
                    query: l,
                    onChange: i,
                    onClear: () => i(""),
                    size: "sm",
                    placeholder: E.intl.string(C.default.NfncNw),
                    "aria-label": E.intl.string(C.default.NfncNw),
                }),
            }),
            (0, n.jsx)(lx.Y, {
                targetElementRef: s,
                position: "bottom",
                align: "right",
                animation: lx.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(lp.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": E.intl.string(E.t.ogxXGq),
                        onClose: l,
                        onSelect: l,
                        children: (0, n.jsx)(lv.rX, {
                            children: (0, n.jsx)(lv.Dr, {
                                id: "export",
                                label: E.intl.string(C.default.A3Z3ar),
                                disabled: 0 === r.length,
                                action: u,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: l } = t;
                    return (0, n.jsx)(n9.K, {
                        ...e,
                        buttonRef: s,
                        icon: no.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": E.intl.string(E.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
        ],
    });
}
var i3 = l(497243);
function i6(e) {
    let { projectId: t, onClose: l } = e,
        [i, r] = a.useState("logs"),
        [s, o] = a.useState(""),
        c = (0, F.bG)([a_.A], () => a_.A.isDeveloper),
        m = (0, F.bG)([aU], () => aU.getStatus(t), [t]),
        h = (0, F.bG)([aU], () => aU.getFetchState(t), [t]);
    a.useEffect(() => {
        (0, f.R7)(t);
    }, [t]);
    let g = a.useCallback(() => (0, f.R7)(t), [t]),
        x = a.useCallback(() => {
            (0, aP.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: aU.getStatus(t),
                        last_turn_usage: aU.getLastTurnUsage(t),
                        last_compaction: aU.getLastCompaction(t),
                        last_compaction_decline: aU.getLastCompactionDecline(t),
                        model_calls: aU.getModelCalls(t),
                        logs: lK.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, aS.P)((0, aC.o)(E.intl.string(C.default.sDSDiO), aE.Ck.SUCCESS)),
            );
        }, [t]),
        p = E.intl.string(C.default.KampIf);
    return (0, n.jsxs)("section", {
        className: i3.nd,
        "aria-label": p,
        children: [
            (0, n.jsxs)(d.Ay, {
                "aria-label": p,
                toolbar: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.Ay.Icon, {
                            icon: aI.CopyIcon,
                            tooltip: E.intl.string(C.default["21ipY1"]),
                            onClick: x,
                        }),
                        (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, n.jsx)(d.Ay.ChannelIcon, { icon: aT.BugIcon, "aria-hidden": !0 }),
                    (0, n.jsx)(d.Ay.Title, { children: p }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: i3.rf,
                children: [
                    (0, n.jsxs)(aM.V, {
                        selectedItem: i,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": E.intl.string(C.default.uNyR86),
                        className: i3.vR,
                        children: [
                            (0, n.jsx)(aM.V.Item, { id: "logs", children: E.intl.string(C.default["1mpzdJ"]) }),
                            (0, n.jsx)(aM.V.Item, { id: "worker", children: E.intl.string(C.default.whGHLD) }),
                            (0, n.jsx)(aM.V.Item, { id: "agent", children: E.intl.string(C.default.cK3AvL) }),
                            c
                                ? (0, n.jsx)(aM.V.Item, { id: "trace", children: E.intl.string(C.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === i
                        ? (0, n.jsx)(ih, { projectId: t })
                        : "worker" === i
                          ? (0, n.jsx)(ik, { status: m, fetchState: h, onRefresh: g })
                          : "trace" === i && c
                            ? (0, n.jsxs)("div", {
                                  className: i3.uP,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: i3.XH,
                                          children: (0, n.jsx)(i4, { projectId: t, query: s, onQueryChange: o }),
                                      }),
                                      (0, n.jsx)(i5, { projectId: t, query: s }),
                                  ],
                              })
                            : (0, n.jsx)(ia, { projectId: t, status: m, fetchState: h, onRefresh: g, traceVisible: c }),
                ],
            }),
        ],
    });
}
var i8 = l(333007),
    i9 = l(103557),
    re = l(97808),
    rt = l(778712),
    rl = l(365912),
    rn = l(775121),
    ra = l(486020),
    ri = l(277437);
function rr(e) {
    let {
            projectId: t,
            at: l,
            bounds: i,
            kind: s,
            value: u,
            onChange: o,
            onSubmit: d,
            onDismiss: c,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
        } = e,
        {
            drafts: g,
            addFiles: x,
            pasteFiles: p,
            removeDraft: v,
            settled: b,
            takeRefs: j,
        } = l_({ projectId: t, surface: "design", onUploadFile: h }),
        y = a.useRef(null),
        k = (f || g.length > 0) && b && !m,
        N = a.useCallback(() => {
            if (!k) return;
            let e = j();
            d(e.length > 0 ? e : void 0);
        }, [k, j, d]),
        [w, A] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => A(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = a.useRef(null),
        [I, T] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = I?.height ?? 44,
        _ = i.left + 8,
        P = i.top + 8,
        R = Math.max(l.x, _),
        L = Math.min(Math.max(l.y + 32 + 4, P), Math.max(P, i.top + i.height - M - 8));
    return (0, n.jsxs)("div", {
        ref: S,
        className: r()(ri.M0, { [ri.ho]: w && !m, [ri.ET]: m }),
        style: { left: R, top: L },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, n.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: ri.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (x(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, n.jsx)(to.m, {
                position: "bottom",
                text: E.intl.string(C.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: ri.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": E.intl.string(C.default.d6Rqlu),
                    children: (0, n.jsx)(lg.H, { size: "custom", color: "currentColor", className: ri.WW }),
                }),
            }),
            (0, n.jsx)(ly.y, {
                autoFocus: !0,
                rows: 1,
                className: ri.hF,
                value: u,
                placeholder: "" === s ? E.intl.string(C.default.FK09JH) : `Edit ${s}`,
                "aria-label": E.intl.string(C.default["qR+sGX"]),
                onChange: (e) => o(e.target.value),
                onPaste: m ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            g.length > 0
                ? (0, n.jsx)("div", {
                      className: ri.ZO,
                      children: g.map((e) => (0, n.jsx)(lP, { draft: e, onRemove: v }, e.localId)),
                  })
                : null,
        ],
    });
}
var rs = l(320510);
function ru(e) {
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
function ro(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = ru(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
l(762399);
var rd = l(940107),
    rc = l(42843);
let rf = { x: 25, y: 21 };
function rm(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rh(e, t, l) {
    return {
        left: t.left + e.rect.x * l,
        top: t.top + e.rect.y * l,
        width: Math.max(e.rect.width * l, 1),
        height: Math.max(e.rect.height * l, 1),
    };
}
function rg(e, t, l, n) {
    let a = rh(e, l, n);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rx(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function rp(e) {
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
function rv(e) {
    let { projectId: t, applicationId: l, previewApplicationId: i, resolveIframe: r, toggleRef: s } = e,
        u = null != l && l === i ? t : null,
        { active: o, annotations: d } = (0, e1.Q_)(u),
        c = (0, nB.o4)(u),
        m = (0, tG.useHasAnyModalOpen)(),
        h = (0, F.bG)([eo.default], () => eo.default.getCurrentUser()),
        g = h?.id ?? null,
        [x, p] = a.useState(null),
        [b, j] = a.useState(null),
        [y, k] = a.useState(!1),
        [N, w] = a.useState(!1),
        [A, S] = a.useState(null),
        [I, T] = a.useState(!1),
        M = a.useRef(null),
        _ = a.useRef(null),
        P = a.useRef(null),
        [R, L] = a.useState(null),
        [D, O] = a.useState(!1),
        [$, z] = a.useState(null),
        [q, B] = a.useState(null),
        U = a.useRef(!1),
        [G, H] = a.useState(!1),
        [V, W] = a.useState(null),
        K = o && !c && !m;
    null == $ || (K && $.projectId === u) || z(null);
    let Y = $?.projectId ?? null;
    (a.useEffect(() => {
        if (null != Y) return () => eZ(Y, "design");
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
                })(r());
                p((t) => (rm(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, r]),
        a.useEffect(() => {
            if (!K || null == u) return;
            let e = !0,
                t = r();
            if (null == t) return void w(!0);
            (k(!0), w(!1));
            let l = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rs.S)(t, l, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let l = "completed" === t.status ? rp(t.response) : null;
                        null == l ? w(!0) : (j(l), (0, e1._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                    },
                    () => {
                        e && (k(!1), w(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, r, u]));
    let X = a.useRef(null);
    (a.useEffect(() => {
        if (!K || null == x || null == u) return;
        if (null == b) {
            X.current = x;
            return;
        }
        if (rm(X.current, x)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = x;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, l) => {
                    let n = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rs.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: n.length > 0 ? n : [{ action: "snapshot" }],
                        snapshot: 0 === l && n.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !et.current) return;
                        let l = rp(e.response);
                        null != l && (j(l), (0, e1._w)(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let n = new Map();
                        (e.response.results.forEach((e, l) => {
                            let a = t[l];
                            if (null == a || "locate" !== e.action || !e.ok) return;
                            let i = ru(e.element);
                            null != i && n.set(a.id, i);
                        }),
                            (0, e1.fA)(u, n));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, x, b, d, u, r]),
        a.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), z(null), W(null), j(null));
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
                let l = r();
                null != l &&
                    ((ee.current = !0),
                    (0, rd.W)(
                        l,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(ro, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((ee.current = !1), et.current)) {
                                if ("picked" !== t.status || rw(t.target, es.current.rect, es.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && O(!0);
                                else {
                                    let e = (0, ew.ts)(t.target);
                                    (L((t) => (rN(t, e) ? t : e)),
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
            [r],
        ),
        en = a.useCallback(() => {
            if (null == $) return;
            let e = !U.current;
            (B({ at: $.at, label: $.label, draft: $.draft, instant: e }), H(e), z(null));
        }, [$]);
    (a.useEffect(() => {
        if (!G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => H(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]),
        a.useEffect(() => {
            if (null == q) return;
            let e = setTimeout(() => B(null), ry);
            return () => clearTimeout(e);
        }, [q]));
    let ea = null == b || null == x || b.viewport.width < 1 ? 1 : x.width / b.viewport.width,
        ei = null != b || N,
        er = a.useMemo(() => b?.elements ?? [], [b]),
        es = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        es.current = { rect: x, scale: ea };
    }, [x, ea]);
    let eu = a.useCallback(
            (e, t, l) => {
                null != u &&
                    (eZ(u, "design"),
                    W(null),
                    (U.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: l, label: (0, ew.ts)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ec = a.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let l = _.current;
            null != l && (l.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ec);
    let ef = a.useCallback(
            (e) => {
                if (null == x || null != V) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), T(!0), null != $)) {
                    (Math.abs(e.clientX - $.at.x) > rk || Math.abs(e.clientY - $.at.y) > rk) && (U.current = !0);
                    return;
                }
                if (!ei) return void S(null);
                let t = ed(e, x);
                if (D) {
                    let e = (0, ew.jo)(er, t.x, t.y),
                        l = null != e && rw(e, x, ea) ? null : e;
                    if (null != l) {
                        let e = (0, ew.ts)(l);
                        L((t) => (rN(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === l?.ref ? e : l));
                    return;
                }
                let l = { x: Math.round(t.x), y: Math.round(t.y) },
                    n = J.current;
                (null == n || n.x !== l.x || n.y !== l.y) && ((J.current = l), (Z.current = l), el());
            },
            [x, ea, ei, ed, D, er, $, V, ec, el],
        ),
        em = a.useCallback(() => {
            (T(!1), S(null), (J.current = null), (Z.current = null));
        }, []);
    a.useEffect(() => {
        if (!K || !I || !ei || D || null != $ || null != V) return;
        let e = P.current,
            { rect: t, scale: l } = es.current;
        if (null == e || null == t) return;
        let n = { x: Math.round((e.x - t.left) / l), y: Math.round((e.y - t.top) / l) };
        ((J.current = n), (Z.current = n), el());
    }, [K, I, ei, D, $, V, el]);
    let eh = a.useCallback(
            (e) => {
                if (null != $ || null != V) {
                    (en(), W(null));
                    return;
                }
                if (null == A || null == x) return;
                let t = ed(e, x);
                eu(A, (0, ew.ec)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, x, ed, $, V, eu, en],
        ),
        eg = a.useCallback(() => {
            null != u && (S(null), (0, e1.PS)(u));
        }, [u]),
        ex = a.useCallback(() => {
            null != u &&
                (null != $
                    ? en()
                    : V?.confirmingRemove === !0
                      ? W({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? W(null)
                        : eg());
        }, [u, $, V, en, eg]),
        ep = a.useRef(ex),
        ev = a.useRef(eg);
    a.useLayoutEffect(() => {
        ((ep.current = ex), (ev.current = eg));
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        if (K)
            return (
                rn.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rn.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ep.current());
        }
        function t(e) {
            let t = e.target;
            (0, n3.vq)(t) &&
                eb.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rl.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ev.current();
        }
    }, [K, s]);
    let ej = a.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ex());
                    return;
                }
                if (null != $ || null != V || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    l = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || l) {
                    e.preventDefault();
                    let l = null == A ? -1 : er.findIndex((e) => e.ref === A.ref);
                    S(er[(l + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    eu(A, ew.F6, { x: (x?.left ?? 0) + A.rect.x * ea, y: (x?.top ?? 0) + A.rect.y * ea }));
            },
            [u, $, V, er, A, eu, ex, x, ea],
        ),
        ey = a.useCallback(
            (e) => {
                null == u ||
                    null == $ ||
                    (((0, ew.to)($.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, f.dv)(u, (0, ew.v_)($.target, $.draft), e), en(), S(null)));
            },
            [u, $, en],
        ),
        ek = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, f.vX)(u, e)), [u]),
        eN = a.useCallback(() => {
            null == u ||
                null == V ||
                null == g ||
                ((0, ew.to)(V.draft) && ((0, e1.dy)(u, g, V.id, V.draft.trim()), W({ ...V, editing: !1 })));
        }, [u, V, g]),
        eA = a.useCallback(() => {
            null != u && null != V && null != g && ((0, e1.PR)(u, g, V.id), W(null));
        }, [u, V, g]),
        eS = o
            ? y
                ? E.intl.string(C.default.jQQ8i2)
                : N
                  ? E.intl.string(C.default.zvU2QH)
                  : E.intl.formatToPlainString(C.default.A4HDMU, { count: d.length })
            : "",
        eC = K && null != x,
        eE = I && null == V,
        eI = null == V ? null : d.find((e) => e.id === V.id),
        eT = $?.target ?? eI?.target ?? null,
        eM = $ ?? q,
        e_ = $ ?? (q?.instant === !0 ? null : q),
        eP =
            null != eI && null != x
                ? (function (e, t) {
                      let { left: l, top: n } = rx(e, t);
                      return { x: l + 12, y: n + 12 };
                  })(rg(eI.target, eI.anchor, x, ea), x)
                : null;
    return (0, i8.createPortal)(
        (0, n.jsxs)("div", {
            ref: eb,
            className: rc.Li,
            children: [
                (0, n.jsx)("div", {
                    className: rc.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eS,
                }),
                eC
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", {
                                  className: rc.MT,
                                  style: { left: x.left, top: x.top, width: x.width, height: x.height },
                                  "data-plain-cursor": eE ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": E.intl.string(C.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: ef,
                                  onMouseLeave: em,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != A && null == $ && null == V ? (0, n.jsx)(rA, { box: rh(A, x, ea) }) : null,
                              (0, n.jsx)("div", {
                                  ref: M,
                                  className: rc.aZ,
                                  children: (0, n.jsx)("div", {
                                      className: rc.xz,
                                      "data-shown": null != A && null == V && null == $ ? "" : void 0,
                                      "data-instant": G ? "" : void 0,
                                      children: (0, n.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rc.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, n.jsx)("span", { className: rc.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, n.jsxs)("span", { className: rc.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  ref: _,
                                  className: rc.Y,
                                  children: eE
                                      ? (0, n.jsx)(nu.A, { className: rc.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == e_
                                  ? null
                                  : (0, n.jsx)("div", {
                                        className: rc.aZ,
                                        style: { transform: `translate3d(${e_.at.x + 12}px, ${e_.at.y + 12}px, 0)` },
                                        children: (0, n.jsx)("div", {
                                            className: rc.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == $ ? "" : void 0,
                                            children: (0, n.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rc.Ux,
                                                children: [
                                                    (0, n.jsx)("span", { className: rc.Tl, children: e_.label.kind }),
                                                    "" === e_.label.name
                                                        ? null
                                                        : (0, n.jsxs)("span", {
                                                              className: rc.kh,
                                                              children: [" ", e_.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, n.jsx)("div", { className: rc.D0, style: rh(eT, x, ea), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let l = rg(e.target, e.anchor, x, ea),
                                      a = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, n.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rc.xL,
                                          style: { ...rx(l, x), width: 24, height: 24 },
                                          "aria-label": E.intl.formatToPlainString(C.default.zicHlU, {
                                              index: t + 1,
                                              target: (0, ew.iw)(e.target),
                                          }),
                                          "aria-expanded": V?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == $ && W(a);
                                          },
                                          onFocus: () => {
                                              null == $ && W(a);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), en(), W(a));
                                          },
                                          children: (0, n.jsx)(rb, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eM || null == u
                                  ? null
                                  : (0, n.jsx)(rr, {
                                        projectId: u,
                                        at: { x: eM.at.x + 12, y: eM.at.y + 12 },
                                        bounds: x,
                                        kind: eM.label.kind,
                                        value: eM.draft,
                                        canSubmit: null != $ && (0, ew.to)(eM.draft),
                                        onChange: (e) => {
                                            null != $ && z({ ...$, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: en,
                                        onUploadFile: ek,
                                        closing: null == $,
                                    }),
                              null != eI && null != V && null != eP
                                  ? (0, n.jsxs)(rj, {
                                        point: eP,
                                        frame: x,
                                        authorId: eI.authorId,
                                        title: (0, ew.iw)(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            V.confirmingRemove ? W({ ...V, confirmingRemove: !1 }) : W(null);
                                        },
                                        onMouseLeave: () => {
                                            V.editing || V.confirmingRemove || W(null);
                                        },
                                        children: [
                                            V.editing
                                                ? (0, n.jsx)(i9.f, {
                                                      autoFocus: !0,
                                                      label: E.intl.string(C.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: V.draft,
                                                      maxLength: ew.gq,
                                                      rows: 3,
                                                      onChange: (e) => W({ ...V, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                                                      },
                                                  })
                                                : (0, n.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: rc.aC,
                                                      children: eI.comment,
                                                  }),
                                            (0, e1.zz)(eI, g)
                                                ? (0, n.jsx)("div", {
                                                      className: rc.eB,
                                                      children: V.confirmingRemove
                                                          ? (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rc.nv,
                                                                        children: E.intl.string(C.default["IMrOF/"]),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: E.intl.string(C.default.cLsnYH),
                                                                        onClick: () =>
                                                                            W({ ...V, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, n.jsx)(Q.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: E.intl.string(C.default.ncz32j),
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
                                                                        text: E.intl.string(C.default.ncz32j),
                                                                        onClick: () =>
                                                                            W({
                                                                                ...V,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    V.editing
                                                                        ? (0, n.jsx)(Q.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !(0, ew.to)(V.draft),
                                                                              text: E.intl.string(C.default.wIeFN0),
                                                                              onClick: eN,
                                                                          })
                                                                        : (0, n.jsx)(Q.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: E.intl.string(C.default.DKZggU),
                                                                              onClick: () =>
                                                                                  W({
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
function rb(e) {
    let { authorId: t } = e,
        l = (0, F.bG)([eo.default], () => eo.default.getUser(t), [t]);
    return (0, n.jsx)(re.eu, {
        src: null == l ? null : ra.Ay.getUserAvatarURL(l),
        size: rt._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rj(e) {
    let t,
        l,
        i,
        r,
        s,
        u,
        { point: o, frame: d, authorId: c, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        p = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(rf);
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
        (r = Math.max((i = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - j.x, t), l)),
        { left: s, top: (u = Math.min(Math.max(o.y - j.y, i), r)), originX: o.x - s, originY: o.y - u }),
        S = {
            left: k,
            top: N,
            "--custom-vibegrations-card-origin-x": `${w}px`,
            "--custom-vibegrations-card-origin-y": `${A}px`,
        };
    return (0, n.jsxs)("div", {
        ref: p,
        className: rc.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, n.jsxs)("div", {
                className: rc.MY,
                children: [
                    (0, n.jsx)("span", { ref: b, className: rc.ip, children: (0, n.jsx)(rb, { authorId: c }) }),
                    (0, n.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rc.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: rc.zI, children: x }),
        ],
    });
}
let ry = 300,
    rk = 2;
function rN(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rw(e, t, l) {
    if (null == t || l <= 0) return !1;
    let n = t.width / l,
        a = t.height / l;
    return !(n < 1) && !(a < 1) && e.rect.width >= 0.98 * n && e.rect.height >= 0.98 * a;
}
function rA(e) {
    let { box: t } = e;
    return (0, n.jsx)("div", { className: rc.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rS = l(11055),
    rC = l(175841),
    rE = l(872768),
    rI = l(533140),
    rT = l(342667);
function rM(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function r_(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rP(e) {
    let { phase: t, projectId: l, onOpenPublishedApp: i, compact: s } = e,
        { stop: u, stopping: o } = (function (e) {
            let t = (0, F.bG)([eS.Ay], () => null != e && eS.Ay.isThinking(e)),
                [l, n] = a.useState(!1),
                [i, r] = a.useState(t);
            (t !== i && (r(t), t || n(!1)),
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
        d = "controlling" === t,
        c = E.intl.string(d ? C.default.ydhvN1 : C.default["7U6tIB"]),
        m =
            null != i
                ? (0, n.jsx)(Q.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: E.intl.string(C.default.kj5epw),
                      onClick: i,
                  })
                : null,
        h =
            null != u
                ? (0, n.jsx)(Q.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: E.intl.string(C.default["2HalWx"]),
                      loading: o,
                      onClick: u,
                      "data-testid": "vibegrations-control-stop",
                  })
                : null;
    return s
        ? (0, n.jsxs)("div", {
              className: r()(rT.M0, rT.oE),
              "data-phase": t,
              "data-testid": "vibegrations-control-notice",
              children: [
                  d
                      ? (0, n.jsx)(nU.i, { size: 12, color: "currentColor" })
                      : (0, n.jsx)(rC.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, n.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: rT.ID, children: c }),
                  d ? (0, n.jsx)(t9.A, { children: E.intl.string(C.default.NldIIG) }) : null,
                  d ? (0, n.jsxs)("div", { className: rT.lC, children: [m, h] }) : null,
              ],
          })
        : (0, n.jsxs)("div", {
              className: rT.M0,
              "data-phase": t,
              "data-testid": "vibegrations-control-notice",
              children: [
                  (0, n.jsxs)("div", {
                      className: rT.sp,
                      children: [
                          (0, n.jsx)(rC.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, n.jsx)(nU.i, { size: 12, color: "currentColor" }) : null,
                          (0, n.jsxs)("div", {
                              className: rT.f4,
                              children: [
                                  (0, n.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: rT.w9,
                                      children: c,
                                  }),
                                  d
                                      ? (0, n.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: rT.Rb,
                                            children: E.intl.string(C.default.NldIIG),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, n.jsxs)("div", { className: rT.lC, children: [m, h] }) : null,
              ],
          });
}
function rR(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: i,
            resolveIframe: r,
            frameId: s,
            onOpenPublishedApp: u = null,
        } = e,
        o = (0, nB.o4)(null != l && l === i ? t : null),
        d = (function (e) {
            let [t, l] = a.useState(e),
                [n, i] = a.useState(!1);
            return (e !== t && (l(e), i(!e)),
            a.useEffect(() => {
                if (!n) return;
                let e = setTimeout(() => i(!1), 2400);
                return () => clearTimeout(e);
            }, [n]),
            e)
                ? "controlling"
                : n
                  ? "handoff"
                  : "idle";
        })(o),
        c = (0, tG.useHasAnyModalOpen)(),
        f = (0, rI.V0)(s);
    a.useEffect(() => {
        o && f && null != s && (0, rI.c2)(s);
    }, [o, f, s]);
    let [m, h] = a.useState(null),
        [g, x] = a.useState(null),
        [p, v] = a.useState(null),
        b = "idle" !== d;
    a.useEffect(() => {
        if (!b) return;
        function e() {
            let e = rM(r());
            h((t) => (r_(t, e) ? t : e));
            let t = null == g ? null : rM(g);
            (v((e) => (r_(e, t) ? e : t)), null != g && (0, rE.t)(g.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let l = null == g ? null : new ResizeObserver(e);
        return (
            null != g && l?.observe(g),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    l?.disconnect(),
                    null != g && (0, rE.t)(0));
            }
        );
    }, [b, r, g]);
    let j = "idle" !== d && null != m,
        y = j && "controlling" === d && !c,
        k = null != m && m.width < 420,
        N = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        w =
            null == m
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let l = Math.min(e.left, t.left),
                          n = Math.min(e.top, t.top);
                      return {
                          left: l,
                          top: n,
                          width: Math.max(e.left + e.width, t.left + t.width) - l,
                          height: Math.max(e.top + e.height, t.top + t.height) - n,
                      };
                  })(m, p);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            j
                ? (0, n.jsx)("div", {
                      ref: x,
                      className: rT.D,
                      "data-phase": d,
                      children: (0, n.jsx)("div", {
                          className: rT.QF,
                          children: (0, n.jsx)(rP, { phase: d, projectId: t, onOpenPublishedApp: u, compact: k }),
                      }),
                  })
                : null,
            (0, i8.createPortal)(
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("div", {
                            className: rT.y4,
                            role: "status",
                            "aria-live": "polite",
                            "data-testid": "vibegrations-control-announcer",
                            children:
                                "controlling" === d
                                    ? E.intl.string(C.default.dIE9zO)
                                    : "handoff" === d
                                      ? E.intl.string(C.default["7U6tIB"])
                                      : "",
                        }),
                        y
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: rT.ys,
                                          style: w,
                                          "data-testid": "vibegrations-control-glow",
                                          "aria-hidden": !0,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: rT.om,
                                          style: N,
                                          "data-testid": "vibegrations-control-block",
                                          "aria-hidden": !0,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                document.body,
            ),
        ],
    });
}
var rL = l(237528),
    rD = l(664121),
    rF = l(95477),
    rO = l(724401);
function r$(e) {
    let t = new Date(e);
    function l(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${l(t.getMonth() + 1)}-${l(t.getDate())}T${l(t.getHours())}:${l(t.getMinutes())}`;
}
function rz(e) {
    let t,
        { projectId: l, installScope: i, onClose: r } = e,
        s = "user" === i ? ["stable"] : ["preview", "stable"],
        [o, c] = a.useState(s[0] ?? "stable"),
        [h, g] = a.useState({ status: "loading" }),
        [x, p] = a.useState(""),
        [b, j] = a.useState(""),
        [y, k] = a.useState({ phase: "idle" }),
        N = "busy" === y.phase,
        [w, A] = a.useState(0),
        S = a.useCallback(() => A((e) => e + 1), []);
    a.useEffect(() => {
        let e = !1,
            t = `${l}|${o}`;
        return (
            Promise.all([(0, f.DM)(l, o), (0, f.ms)(l, o)])
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
    }, [l, o, w]);
    let I = "loading" !== h.status && h.key === `${l}|${o}` ? h : { status: "loading" },
        T = a.useCallback(
            (e, t) => {
                (0, t_.A)({
                    title: E.intl.string(C.default.S3WHxG),
                    subtitle:
                        1 === s.length
                            ? E.intl.formatToPlainString(C.default["0lt6bH"], { target: e })
                            : E.intl.formatToPlainString(C.default.zVcDfj, {
                                  environment: E.intl.string(
                                      "preview" === o ? C.default["/kYdZe"] : C.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: E.intl.string(C.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (k({ phase: "busy", environment: o, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (k({
                                              phase: "settled",
                                              environment: o,
                                              tone: "positive",
                                              text: E.intl.string(C.default.kIWqXR),
                                          }),
                                          S())
                                        : "expired" === e.code
                                          ? (k({
                                                phase: "settled",
                                                environment: o,
                                                tone: "danger",
                                                text: E.intl.formatToPlainString(C.default.PeVYaC, { days: 30 }),
                                            }),
                                            S())
                                          : "unconfirmed" === e.code
                                            ? (k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: E.intl.string(C.default["2xSPXh"]),
                                              }),
                                              S())
                                            : k({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: E.intl.string(C.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    k({
                                        phase: "settled",
                                        environment: o,
                                        tone: "danger",
                                        text: E.intl.string(C.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [o, s, S],
        ),
        M = a.useCallback(() => {
            (k({ phase: "busy", environment: o, kind: "create" }),
                (0, f._m)(l, o, x)
                    .then(() => {
                        (p(""),
                            k({
                                phase: "settled",
                                environment: o,
                                tone: "positive",
                                text: E.intl.string(C.default.mfAoFT),
                            }),
                            S());
                    })
                    .catch(() => {
                        k({ phase: "settled", environment: o, tone: "danger", text: E.intl.string(C.default.uhhqP3) });
                    }));
        }, [l, o, x, S]),
        _ = "loaded" === I.status ? I.window : null,
        P = "loaded" === I.status ? I.nowMs : 0,
        R = _?.earliestRestoreTimestampMs ?? P - 2592e6,
        L = "" === b ? null : new Date(b).getTime(),
        D = null != L && !Number.isNaN(L) && L >= R && L <= P,
        F =
            "busy" === y.phase
                ? "restore" === y.kind && y.environment === o
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === y.phase && y.environment === o
                  ? { kind: "notice", tone: y.tone, text: y.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === I.status
                ? (0, n.jsx)("div", { className: rO.E8, children: (0, n.jsx)(m.y, {}) })
                : "failed" === I.status
                  ? (0, n.jsx)("div", {
                        className: rO.E8,
                        role: "alert",
                        children: (0, n.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: E.intl.string(C.default.pwFaXc),
                        }),
                    })
                  : 0 === I.points.length
                    ? (0, n.jsx)("div", {
                          className: rO.E8,
                          children: (0, n.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: E.intl.string(C.default["7hBXn4"]),
                          }),
                      })
                    : (0, n.jsx)(tP.Ip, {
                          className: rO.p_,
                          children: (0, n.jsx)("div", {
                              className: rO.jO,
                              children: I.points.map((e) => {
                                  let t,
                                      a = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, tL.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: tL._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      i = (0, n.jsxs)("div", {
                                          className: rO.KW,
                                          children: [
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return E.intl.string(C.default.h4zhWL);
                                                          case "undo":
                                                              return E.intl.string(C.default["c/tNny"]);
                                                          default:
                                                              return E.intl.string(C.default["jViU+0"]);
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
                                                  (0, n.jsx)(rL.v, {
                                                      text: E.intl.string(C.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, n.jsxs)(
                                            "div",
                                            {
                                                className: rO.AD,
                                                title: E.intl.formatToPlainString(C.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, n.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: rO.Pf,
                                                        children: e.label,
                                                    }),
                                                    i,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, n.jsxs)(
                                            e9.D,
                                            {
                                                className: rO.f_,
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
                                                        className: rO.Pf,
                                                        children: e.label,
                                                    }),
                                                    i,
                                                ],
                                            },
                                            e.id,
                                        );
                              }),
                          }),
                      })),
        (0, n.jsxs)("section", {
            className: rO.nd,
            "aria-label": E.intl.string(C.default.FRjicO),
            children: [
                (0, n.jsxs)(d.Ay, {
                    "aria-label": E.intl.string(C.default.FRjicO),
                    toolbar: (0, n.jsx)(d.Ay.Icon, { icon: u.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: r }),
                    children: [
                        (0, n.jsx)(d.Ay.ChannelIcon, { icon: rD.R, "aria-hidden": !0 }),
                        (0, n.jsx)(d.Ay.Title, { children: E.intl.string(C.default.FRjicO) }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: rO.rf,
                    children: [
                        (0, n.jsxs)("div", {
                            className: rO.ne,
                            children: [
                                s.length > 1 &&
                                    (0, n.jsxs)(aM.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (c(e), A(0));
                                        },
                                        "aria-label": E.intl.string(C.default.CNvRyJ),
                                        className: rO.vR,
                                        children: [
                                            (0, n.jsx)(aM.V.Item, {
                                                id: "preview",
                                                children: E.intl.string(C.default["/kYdZe"]),
                                            }),
                                            (0, n.jsx)(aM.V.Item, {
                                                id: "stable",
                                                children: E.intl.string(C.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, n.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        E.intl.formatToPlainString(C.default.l07ism, { days: 30 }),
                                        null != _
                                            ? ` ${new Date(_.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === F.kind
                                    ? (0, n.jsxs)("div", {
                                          className: rO.lm,
                                          role: "status",
                                          children: [
                                              (0, n.jsx)(m.y, { type: m.t.PULSING_ELLIPSIS }),
                                              (0, n.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: E.intl.string(C.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === F.kind
                                      ? (0, n.jsx)("div", {
                                            className: rO.lm,
                                            role: "danger" === F.tone ? "alert" : "status",
                                            children: (0, n.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === F.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: F.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, n.jsxs)("div", {
                            className: rO.qr,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: rO.Rv,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rO.Fv,
                                            children: (0, n.jsx)(rF.k, {
                                                label: E.intl.string(C.default.hJb78b),
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
                                            text: E.intl.string(C.default["14UarN"]),
                                            onClick: M,
                                            disabled: N,
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: rO._A,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: rO.kv,
                                            children: (0, n.jsx)(rF.k, {
                                                label: E.intl.string(C.default.rI7mpv),
                                                type: "datetime-local",
                                                value: b,
                                                min: r$(R),
                                                max: r$(P),
                                                disabled: N || null == _,
                                                onChange: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)(Q.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: E.intl.string(C.default["3D/vYN"]),
                                            disabled: N || !D,
                                            onClick: () => {
                                                null != L && T(new Date(L).toLocaleString(), () => (0, f.dz)(l, o, L));
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
var rq = l(120426),
    rB = l(873727),
    rU = l(147248),
    rG = l(418842),
    rH = l(363195),
    rV = l(885386),
    rW = l(171936),
    rK = l(796036);
function rY(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: i,
            previewApplicationId: s,
            surface: u,
            header: d,
            mainClassName: c,
            content: f,
            sidebar: m,
            onOpenPublishedApp: h,
        } = e,
        [g, x] = a.useState(null),
        p = (0, o.A)(i, u),
        v = p?.id ?? null;
    (!(function (e, t) {
        let l = (0, F.bG)([rH.A], () => (0, rB.x4)(rH.A.theme)),
            n = (0, F.bG)([rU.A], () => rU.A.gradientPreset),
            {
                reducedMotion: i,
                fontScale: r,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, F.cf)([lw.Ay], () => ({
                reducedMotion: lw.Ay.useReducedMotion,
                fontScale: (0, rB.U0)(),
                highContrast: lw.Ay.isHighContrastModeEnabled,
                forcedColors: lw.Ay.useForcedColors,
                underlineLinks: lw.Ay.alwaysShowLinkDecorations,
            })),
            d = rV.hH.useSetting(),
            c = (0, rG.C)(),
            f = a.useRef(!1),
            m = a.useRef(!1),
            h = a.useRef(0),
            g = a.useRef(null),
            x = a.useCallback(() => {
                let n = (0, rq.F)(e, t);
                if (null == n) return;
                g.current = n;
                let a = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, rB.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: i,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                };
                (0, rd.W)(n, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, u, r, t, s, d, e, i, c, o]),
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
                let l = (0, rq.F)(e, t);
                null != l && l !== g.current && v();
            }),
            a.useEffect(() => {
                function l(l) {
                    l.target === (0, rq.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, rW.mn)(t, () => (0, rq.F)(g, v));
        }, [t, g, v]));
    let b = a.useCallback(() => (0, rq.F)(g, v), [g, v]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: r()(ej.Mh, c),
                children: [
                    d,
                    (0, n.jsx)(rR, {
                        projectId: t ?? null,
                        applicationId: i,
                        previewApplicationId: s,
                        resolveIframe: b,
                        frameId: v,
                        onOpenPublishedApp: h,
                    }),
                    (0, n.jsx)("div", { ref: x, className: ej.fm, children: f }),
                ],
            }),
            m,
            (0, n.jsx)(rv, {
                projectId: t ?? null,
                applicationId: i,
                previewApplicationId: s,
                resolveIframe: b,
                toggleRef: l,
            }),
        ],
    });
}
function rQ(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: i,
            previewApplicationId: o,
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
            availability: _,
            activeMode: P,
            widgetApplicationId: R,
            onOpenPublishedApp: L = null,
        } = e,
        D = a.useRef(null),
        [F, O] = a.useState(0);
    (a.useLayoutEffect(() => {
        if (m.type === s.U.MAIN) return ((0, c.HV)(i), () => (0, c.HV)(null));
    }, [i, m.type]),
        a.useEffect(() => {
            null != t && ((0, f.Hc)(t), (0, rK.s)());
        }, [t]),
        a.useLayoutEffect(() => {
            let e = D.current;
            if (null == e) return;
            function t() {
                null != e && O(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return (l.observe(e), () => l.disconnect());
        }, []),
        a.useLayoutEffect(() => () => (0, c.Zq)(0), []));
    let $ = Math.max(360, F - 320),
        z = null != M ? M.open : g,
        q = g || m.type === s.U.MAIN;
    return (0, n.jsx)("div", {
        ref: D,
        className: ej.LB,
        children: (0, n.jsx)(rY, {
            projectId: t,
            designFeedbackToggleRef: l,
            applicationId: i,
            previewApplicationId: o,
            surface: m,
            header: h,
            onOpenPublishedApp: L,
            mainClassName: null == h ? void 0 : r()(ej.ez, { [ej.zt]: z }),
            content: (0, n.jsx)(eg, {
                applicationId: i,
                previewApplicationId: o,
                surface: m,
                previewReady: I,
                previewGate: T,
                availability: _,
                activeMode: P,
                widgetApplicationId: R,
            }),
            sidebar:
                null != M
                    ? (0, n.jsx)(aA, {
                          open: M.open,
                          maxWidth: $,
                          onWidthChange: c.Zq,
                          children: M.open
                              ? (0, n.jsx)(ey, { channel: M.channel, guild: M.guild, onClose: M.onClose })
                              : null,
                      })
                    : null != t && q
                      ? (0, n.jsx)(aA, {
                            open: g,
                            maxWidth: $,
                            onWidthChange: c.Zq,
                            children: (0, n.jsx)("div", {
                                className: ej.cO,
                                children: w
                                    ? (0, n.jsx)(i6, { projectId: t, onClose: A ?? (() => {}) }, t)
                                    : v
                                      ? (0, n.jsx)(
                                            t$,
                                            { projectId: t, onClose: k ?? (() => {}), onRestore: N ?? (() => {}) },
                                            t,
                                        )
                                      : b
                                        ? (0, n.jsx)(rz, { projectId: t, installScope: y, onClose: j ?? (() => {}) }, t)
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(rS.A, { projectId: t }),
                                                  (0, n.jsx)(d.Ay, {
                                                      "aria-label": E.intl.string(E.t["/VQax8"]),
                                                      toolbar: (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              p,
                                                              null == x
                                                                  ? null
                                                                  : (0, n.jsx)(d.Ay.Icon, {
                                                                        icon: u.P,
                                                                        tooltip: E.intl.string(C.default.YdgE0j),
                                                                        onClick: x,
                                                                    }),
                                                          ],
                                                      }),
                                                      children: (0, n.jsx)(d.Ay.Title, {
                                                          children: E.intl.string(E.t["/VQax8"]),
                                                      }),
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ej.cb,
                                                      children: (0, n.jsx)(
                                                          ab,
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
