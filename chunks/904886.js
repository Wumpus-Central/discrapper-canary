n.d(t, { A: () => as });
var l,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(789645),
    u = n(672929),
    d = n(58736),
    c = n(948230),
    m = n(18739),
    h = n(289873),
    f = n(821609),
    g = n(627363),
    x = n(580954),
    p = n(297264),
    v = n(834730),
    j = n(625180),
    b = n(91242),
    k = n(812901),
    y = n(317608),
    A = n(17928),
    w = n(956518),
    N = n(869146),
    C = n(207371),
    S = n(165610),
    I = n(652215),
    E =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    M = n(742023),
    T = n(697744),
    R = n(295813),
    _ = n(375708),
    P = n(296167);
function L(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: s } = (0, T.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != s()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, s]),
        i.useEffect(() => {
            let e = setInterval(l.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [l]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: l.onMouseEnter,
            onMouseLeave: l.onMouseLeave,
            children: [
                (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: P.o,
                    children: _.intl.string(R.default.jTuX7C),
                }),
            ],
        })
    );
}
var D = n(328284);
function F(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(D.Bf, l && D.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: D.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var q = n(963691);
function z(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, S.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, A.bG)([b.A], () => b.A.getFrame(l), [l]),
                        r = (0, A.bG)(
                            [N.A, b.A],
                            () => N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        d = (0, C.x)(o),
                        c = null != (0, w.Ay)(t),
                        [m, h] = i.useState(null),
                        f = m === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => h(l), [l]),
                        lifecycle: (0, S.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : f
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
                })({ applicationId: t, surface: n }),
                { state: r } = s;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                s
            );
        })({ applicationId: t, surface: n }),
        r = (0, S.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT)) return;
                    let n = b.A.getMainFrame()?.id === e;
                    t.intent === S.sV.MAIN
                        ? (n || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : n && j.A.clearMainFrameSlot();
                })(r),
                () => {
                    let e;
                    null != (e = b.A.getFrame(r)) &&
                        ((0, S.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        M.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === S.sV.INLINE && j.A.promoteFrame(r),
                              j.A.updateFrameLayoutMode({ frameId: r, layoutMode: S.y0.PIP }))
                            : e.intent === S.sV.MAIN && j.A.demoteMainFrame(r));
                }
            ),
            [r],
        ),
        s)
    ) {
        case E.Launched:
            return (0, a.jsx)(y.A, { frameId: l.id, level: k.A.WithinAppContent, className: q.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: q.qs,
                children: (0, a.jsx)(F, {
                    title: _.intl.string(R.default["4f6Vkr"]),
                    body: _.intl.string(R.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
            return (0, a.jsx)(L, { className: q.qs });
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: q.qs,
                children: (0, a.jsx)(F, {
                    title: _.intl.string(R.default.FHOJiH),
                    body: _.intl.string(R.default["1yLQoV"]),
                }),
            });
        case E.Error:
            return (0, a.jsxs)("div", {
                className: q.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: _.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: q.tj,
                        children: _.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: q.qs, children: (0, a.jsx)(h.y, {}) });
    }
}
var O = n(323384),
    $ = n(308528),
    U = n(334738),
    G = n(373204),
    B = n(355622),
    W = n(734057),
    H = n(531685),
    V = n(365971),
    K = n(362417);
function Y(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: K.f,
        children: [
            (0, a.jsx)(O.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function Q() {
    return (0, a.jsx)("div", { className: K.f, children: (0, a.jsx)(h.y, {}) });
}
function Z(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, g.YY)(l),
        o = s?.bot?.id ?? null,
        u = (0, A.bG)([W.A], () => {
            if (null == o) return null;
            let e = W.A.getDMFromUserId(o);
            return null != e ? W.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        i.useEffect(() => {
            null != t && $.A.preload(I.ME, t);
        }, [t]),
        (n = (0, A.bG)([H.A], () => H.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, V.Xg)();
            return (
                (0, U.yl)(t, e),
                () => {
                    (0, U.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, c] = i.useState(null),
        m = null != o && d === o;
    return (i.useEffect(() => {
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
    r)
        ? (0, a.jsx)(Q, {})
        : null == o || m
          ? (0, a.jsx)(Y, { message: _.intl.string(R.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(Q, {})
            : (0, a.jsx)("div", {
                  className: K.g,
                  children: (0, a.jsx)(G.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
              });
}
var X = n(148853),
    J = n(598748),
    ee = n(486610),
    et = n(531913),
    en = n(587895),
    el = n(633075),
    ea = n(946356),
    ei = n(139730),
    es = n(520082),
    er = n(287809),
    eo = n(675210),
    eu = n(71495);
function ed(e) {
    let { applicationId: t } = e,
        n = (0, A.bG)([er.default], () => er.default.getCurrentUser());
    return null == n ? null : (0, a.jsx)(ec, { applicationId: t, user: n });
}
function ec(e) {
    let { applicationId: t, user: n } = e,
        l = (0, A.bG)([en.A], () => en.A.getApplication(t)),
        s = i.useMemo(() => new el.R({ applicationId: t }), [t]),
        r = (0, et.A)(n.id, t),
        o = r.surfaceConfigs,
        u = (0, eo.yZ)({
            widgetTop: null != o[J.m.WIDGET_TOP],
            widgetBottom: null != o[J.m.WIDGET_BOTTOM],
            miniProfile: null != o[J.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: eu.$C,
              children: (0, a.jsxs)("div", {
                  className: eu.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: eu.a9,
                                children: (0, a.jsx)(ea.A.Overlay, {
                                    className: eu.Qb,
                                    children: (0, a.jsx)(es.A, {
                                        user: n,
                                        widget: s,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != l
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(ei.A, { application: l, rendererProps: r, renderText: ee.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var em = n(976102);
function eh(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: s,
            previewGate: r,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, l),
        { isLoading: p } = (0, g.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            r?.type === "permissions" && null != m && (0, x.A)().leaveFrame(m.id);
        }, [m, r?.type]),
        r?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    if (r?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(F, {
                wide: !0,
                title: _.intl.string(R.default.DYwf2n),
                body: _.intl.string(R.default.WWj3pN),
                children: (0, a.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: _.intl.string(R.default["CRfE/E"]),
                    onClick: r.onReviewPermissions,
                    loading: r.loading,
                }),
            }),
        });
    if (!s) return (0, a.jsx)(L, { className: em.q });
    if (null == t) return null;
    if (p) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, X.z3)(d), "aria-label": (0, X.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(z, { applicationId: t, surface: l })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(F, {
                              wide: !0,
                              title: _.intl.string(R.default.SGHO9K),
                              body: _.intl.string(R.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ed, { applicationId: c })
                : null,
            "bot" === d && null != n ? (0, a.jsx)(Z, { previewApplicationId: n }) : null,
        ],
    });
}
var ef = n(534890),
    eg = n(738876),
    ex = n(47167),
    ep = n(31717),
    ev = n(372054);
function ej(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, ex.Ay)(t),
        s = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: _.intl.string(_.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ep.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: s,
                "aria-label": _.intl.string(_.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: ef.ChatIcon, "aria-label": _.intl.string(_.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)(G.A, { channel: t, guild: n, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = n(689175);
n(321073), n(134528), n(947204);
let ek = {
    assembling: R.default["9G3ZmA"],
    installing_deps: R.default.VZuRug,
    building: R.default["s+ylXP"],
    bundling: R.default.rEQlMx,
    committing: R.default.Yvyw1H,
    built: R.default.hOcVAj,
    build_error: R.default["6L9Vwt"],
    healthchecking: R.default.sz8yAj,
    awaiting_auth: R.default["orD+xo"],
    healthcheck_passed: R.default["x+sqTG"],
    healthcheck_failed: R.default.FUWbq1,
    deploying: R.default.wcXX8Z,
    preview_ready: R.default["78YNh7"],
    working: R.default.nv6pUM,
    error: R.default.j3hBoA,
};
function ey(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? ek[e.labelKey] : void 0;
    return _.intl.string(t ?? R.default.nv6pUM);
}
function eA(e) {
    let t,
        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = [],
        a = new Map(),
        i = new Map(),
        s = 0,
        { segmentOf: r } = eC(e);
    function o(e, t, n) {
        return {
            id: e,
            kind: t,
            detail: [],
            detailDrivenBy: [],
            status: "running",
            screenshots: [],
            attachments: [],
            touched: 0,
            segment: n,
        };
    }
    function u(e, t) {
        let n = a.get(e);
        if (null != n) return n;
        let l = { taskId: e, task: o("task", "task", t), steps: [] };
        return a.set(e, l), l;
    }
    function d(e, n, a, s) {
        if ("task" === a || "task" === n) return null != e ? u(e, s).task : (t = t ?? o("task", "task", s));
        let r = `${e ?? ""} ${n}`,
            d = i.get(r);
        if (null != d) return d;
        let c = o(n, "step", s);
        return i.set(r, c), null != e ? u(e, s).steps.push(c) : l.push(c), c;
    }
    let c = (function (e) {
        let t = new Set();
        for (let n of e) {
            if ("node" !== n.kind || null == n.node) continue;
            let e = n.task_id;
            null != e &&
                "" !== e &&
                ("task" === n.node.node_kind || "task" === n.node.id) &&
                "cancelled" === n.node.status &&
                t.add(e);
        }
        return t;
    })(e);
    for (let [t, n] of e.entries()) {
        if (
            0 !== c.size &&
            "error" !== n.kind &&
            "terminal_error" !== n.kind &&
            null != n.task_id &&
            "" !== n.task_id &&
            c.has(n.task_id)
        )
            continue;
        let e = r[t] ?? 0;
        if ("node" === n.kind && null != n.node) {
            let t = n.node,
                l = d(n.task_id, t.id, t.node_kind ?? "step", e);
            if (
                ((l.touched = ++s),
                null != t.label_key && (l.labelKey = t.label_key),
                null != t.label_text && (l.labelText = t.label_text),
                null != t.group_label && (l.groupLabel = t.group_label),
                null != t.helper_name && (l.helperName = t.helper_name),
                null != t.helper_mark && (l.helperMark = t.helper_mark),
                null != t.todo_id && (l.todoId = t.todo_id),
                null != t.detail && ((l.detail = t.detail), (l.detailDrivenBy = t.detail.map(() => null))),
                null != t.append_detail)
            ) {
                let e = t.driven_by ?? null;
                (l.detail = [...l.detail, ...t.append_detail]),
                    (l.detailDrivenBy = [...l.detailDrivenBy, ...t.append_detail.map(() => e)]);
            }
            null != t.status && (l.status = t.status),
                null != t.duration && (l.durationMs = t.duration),
                null != t.screenshots && (l.screenshots = t.screenshots),
                null != t.attachments && (l.attachments = t.attachments);
            continue;
        }
        if ("error" === n.kind || "terminal_error" === n.kind) {
            let l = d(void 0, `${n.kind}-${t}`, "step", e);
            (l.touched = ++s),
                (l.labelKey = "error"),
                (l.status = "failed"),
                null != n.message && "" !== n.message && (l.detail = [n.message]);
        }
    }
    let m = [...a.values()];
    for (let e of m) n || "running" !== e.task.status || (e.task.status = "incomplete");
    return { steps: l, tasks: m, ...(null != t ? { turn: t } : {}) };
}
function ew(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function eN(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
function eC(e) {
    let t = [],
        n = [],
        l = null,
        a = null,
        i = 0;
    for (let [r, o] of e.entries()) {
        var s;
        let e = o.segment;
        if (
            (n.push(e ?? i),
            "thinking" === o.kind ||
                ((null == (s = o).task_id || "" === s.task_id) &&
                    ("error" === s.kind ||
                        "terminal_error" === s.kind ||
                        ("node" === s.kind && null != s.node && !eN(s)))))
        ) {
            l = null;
            continue;
        }
        if ("todos" === o.kind) {
            if (null != o.task_id && "" !== o.task_id) continue;
            let n = o.items ?? [];
            if (0 === n.length) continue;
            null != a
                ? (a.todos = n)
                : ((a = { type: "todos", key: `todos-${r}`, segment: e ?? i, todos: n }), t.push(a));
            continue;
        }
        if ("assistant_delta" !== o.kind || (null != o.task_id && "" !== o.task_id)) continue;
        let u = o.message ?? "";
        if ("" !== u)
            if (null == l) {
                i++;
                let a = e ?? i;
                (n[r] = a), (l = { type: "message", key: `message-${r}`, segment: a, content: u }), t.push(l);
            } else l.content = u;
        !0 === o.message_finished && (l = null);
    }
    return { items: t, segmentOf: n };
}
function eS(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n?.kind === "todos" && (null == n.task_id || "" === n.task_id) && null != n.items && n.items.length > 0)
            return n.items;
    }
    return null;
}
var eI = n(783791),
    eE = n(13699);
function eM(e) {
    let { className: t, size: n = 20 } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: n,
        height: n,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M12.37 9.04c.25-.26.73-.2 1.06.13L15 10.7c.33.33.39.8.13 1.06L4.92 21.84c-.27.26-.74.2-1.07-.13l-1.56-1.54c-.33-.32-.39-.8-.13-1.05l10.2-10.08ZM16.09 5.16c.25-.26.73-.2 1.06.13l1.56 1.54c.33.32.39.8.13 1.05l-2.1 2.08c-.26.25-.74.2-1.07-.13l-1.56-1.54c-.33-.33-.38-.8-.13-1.05l2.1-2.08Z",
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M7.6 2.32a.5.5 0 0 1 .94 0L9.17 4l1.66.62a.5.5 0 0 1 0 .93l-1.66.63-.63 1.66a.5.5 0 0 1-.93 0l-.63-1.66-1.66-.63a.5.5 0 0 1 0-.93l1.66-.62.63-1.67Z",
                className: r()(eE.Z$, eE.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(eE.Z$, eE.Q_),
            }),
        ],
    });
}
var eT = n(847374),
    eR = n(320448),
    e_ = n(939249);
let eP = i.createContext(0);
function eL(e) {
    let {
            glyph: t,
            line: n,
            live: l,
            settled: s,
            tint: o,
            detail: u,
            connected: d = !1,
            connectsDown: c = !1,
            anchor: m = !1,
        } = e,
        [h, f] = i.useState(!1),
        g = i.useContext(eP),
        x = i.useId(),
        p = i.useCallback(() => f((e) => !e), []),
        { text: j, phase: b } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState("idle"),
                [s, r] = i.useState(e);
            return (
                s !== e && (r(e), a(e === t ? "idle" : "exit")),
                i.useEffect(() => {
                    if ("exit" !== l) return;
                    let e = setTimeout(() => {
                        n(s), a("enter");
                    }, 150);
                    return () => clearTimeout(e);
                }, [l, s]),
                i.useEffect(() => {
                    if ("enter" !== l) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => a("idle"));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [l]),
                { text: t, phase: l }
            );
        })(n),
        k = h ? eT.a : eR._,
        y = null != u,
        A = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eE.hd, children: t }),
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eE.qo, { [eE._q]: "exit" === b, [eE.GD]: "enter" === b }),
                    children: j,
                }),
                y ? (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eE.nD }) : null,
            ],
        }),
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eE.$m, children: A }, `face-${g}`),
                l
                    ? (0, a.jsx)("span", { className: r()(eE.$m, eE.pw), "aria-hidden": !0, children: A }, `shine-${g}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eE.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": d,
        "data-connects-down": c,
        "data-vibegrations-turn-status": m ? "true" : void 0,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            y
                ? (0, a.jsx)(e_.D, {
                      tag: "div",
                      className: r()(eE.ep, eE.EK),
                      "aria-expanded": h,
                      "aria-controls": x,
                      "aria-label": _.intl.formatToPlainString(R.default.s1wx5H, { activity: j }),
                      onClick: p,
                      children: w,
                  })
                : (0, a.jsx)("div", { className: eE.ep, children: w }),
            (0, a.jsx)("div", { id: x, hidden: !h, className: eE.BA, children: u }),
        ],
    });
}
var eD = n(256905),
    eF = n(514042),
    eq = n(298668);
function ez(e) {
    return r()(eq._B, { [eq.ND]: e });
}
function eO(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eq.gJ, onError: r })
                : (0, a.jsx)(eF.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eq.Wd,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eq.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function e$(e) {
    return (0, a.jsx)("div", { className: ez(e.compact ?? !1), children: eO(e) });
}
function eU(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(e_.D, {
        className: r()(ez(!0), eq.w8),
        onClick: i,
        "aria-label": l,
        children: eO({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var eG = n(673724),
    eB = n(375068);
function eW(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eH),
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback((e) => {
            r((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, a.jsx)("div", {
        className: eB.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eV, { name: e.name }, n)
                : eH(e)
                  ? (0, a.jsx)(
                        eY,
                        {
                            projectId: t,
                            viewableImages: l,
                            viewerIndex: l.indexOf(e),
                            unavailableIds: s,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, a.jsx)(eK, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eH(e) {
    return null != e.id && eG.Wb.has(e.content_type);
}
function eV(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? _.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(e$, { name: l, compact: !0 });
}
function eK(e) {
    let { projectId: t, id: n, name: l } = e,
        [s, r] = i.useState(!1),
        o = i.useCallback(() => {
            (0, m.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void r(!0);
                    let l = document.createElement("a");
                    (l.href = await (0, m.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click();
                })
                .catch(() => {});
        }, [t, n]);
    return s
        ? (0, a.jsx)(eV, { name: l, unavailable: !0 })
        : (0, a.jsx)(eU, {
              name: l,
              thumbSrc: null,
              ariaLabel: _.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function eY(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l, unavailableIds: s, markUnavailable: r } = e,
        { id: o, name: u } = n[l],
        [d, c] = i.useState(null),
        h = s.has(o),
        [f, g] = i.useState(0);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, m.PK)(t, o).then(
                (t) => {
                    e || c(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, o, f]);
    let x = i.useCallback(() => {
        Promise.all(
            n.map(async (e) => (s.has(e.id) ? null : { type: "IMAGE", url: await (0, m.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[l] &&
                    (0, eD.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, l).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, l, s]);
    return h
        ? (0, a.jsx)(eV, { name: u, unavailable: !0 })
        : (0, a.jsx)(eU, {
              name: u,
              thumbSrc: d,
              ariaLabel: _.intl.formatToPlainString(R.default.QUFLUq, { name: u }),
              onClick: x,
              onThumbError: () => {
                  c(null),
                      (0, m.n6)(t, o).then(
                          (e) => {
                              e ? 0 === f && g(1) : r(o);
                          },
                          () => {},
                      );
              },
          });
}
var eQ = n(866665),
    eZ = n(778712),
    eX = n(730134),
    eJ = n(427262);
function e0(e) {
    let { userId: t } = e,
        n = (0, A.bG)([er.default], () => er.default.getUser(t), [t]),
        l = (0, eJ.tx)(n);
    if (null == n || null == l) return null;
    let i = _.intl.formatToPlainString(R.default["8s30Te"], { name: l });
    return (0, a.jsx)(eQ.m, {
        text: i,
        ariaHidden: !0,
        children: (0, a.jsx)("span", {
            className: eE.jz,
            role: "img",
            "aria-label": i,
            children: (0, a.jsx)(eX.A, { user: n, size: eZ._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
let e1 = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e2 =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB|\d+ steps?|\d+\xd7\d+(?: @\d+(?:\.\d+)?x| narrow)?|(?:low|medium|high), (?:\d+x\d+|auto)(?:, transparent)?(?:, from \d+ source images?)?)\)$/,
    e6 =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Generating|Viewing|Loaded|Updating|Registering|Collecting|Clicking|Right-clicking|Double-clicking|Dragging|Typing|Pressing|Hovering|Scrolling|Selecting|Waiting|Navigating|Going|Reloading|Capturing|Checking|Setting|Answering|Delegating|Driving|Working)(?= )/,
    e3 = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function e7(e, t) {
    let n = e6.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(v.E, { tag: "span", variant: e3[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function e5(e) {
    let { text: t, variant: n, prose: l } = e;
    if (!0 === l) return t;
    let i = e1.exec(t),
        s = i?.[2],
        r = i?.[3];
    if (null != i && (null != s || null != r))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                e7(i[1], n),
                null == s ? null : (0, a.jsxs)("span", { className: eE.MM, children: [" ", s] }),
                null == r ? null : (0, a.jsxs)("span", { className: eE.ie, children: [" ", r] }),
            ],
        });
    let o = e2.exec(t);
    return null == o
        ? e7(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [e7(o[1], n), (0, a.jsxs)("span", { className: eE.qZ, children: [" ", o[2]] })],
          });
}
var e4 = n(229775);
function e8(e) {
    let { projectId: t, node: n, presentation: l = "row", active: s = !1 } = e,
        [o, u] = i.useState(!1),
        d = i.useId(),
        c = i.useCallback(() => u((e) => !e), []),
        m = ey(n),
        h = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        g = "text-muted" === f,
        x = s && g ? "none" : o && g ? "currentColor" : f,
        p = r()(eE.iq, { [e4.Hz]: s && g }),
        j = "detail" === l ? "text-md/normal" : "text-sm/normal",
        b = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        k = null != t ? n.screenshots : [],
        y = null != t ? n.attachments : [];
    if (0 === h.length && 0 === k.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: eE.Dx,
            children: (0, a.jsx)(v.E, {
                tag: "div",
                variant: j,
                color: x,
                selectable: !0,
                className: p,
                children: (0, a.jsx)(e5, { text: m, variant: j, prose: !0 }),
            }),
        });
    let A = o ? eT.a : eR._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: eE.Dx,
        children: [
            (0, a.jsxs)(e_.D, {
                tag: "div",
                className: eE.kG,
                "aria-expanded": o,
                "aria-controls": d,
                "aria-label": _.intl.formatToPlainString(R.default.z4KWsN, { step: m }),
                onClick: c,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: j,
                        color: x,
                        className: p,
                        children: (0, a.jsx)(e5, { text: m, variant: j, prose: !0 }),
                    }),
                    (0, a.jsx)(A, { size: "xs", color: "currentColor", className: eE.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: d,
                hidden: !o,
                className: eE.yJ,
                children: [
                    h.map((e, t) => {
                        let l = n.detailDrivenBy[t];
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: eE.l6,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        tag: "div",
                                        variant: b,
                                        color: s && g ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [e4.Hz]: s && g }),
                                        children: (0, a.jsx)(e5, { text: e, variant: b }),
                                    }),
                                    null != l ? (0, a.jsx)(e0, { userId: l }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && k.length > 0
                        ? (0, a.jsx)("div", {
                              className: eE.y8,
                              children: k.map((e) => (0, a.jsx)(te, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && y.length > 0 ? (0, a.jsx)(eW, { projectId: t, attachments: y }) : null,
                ],
            }),
        ],
    });
}
function e9() {}
function te(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, s] = i.useState(null),
        [r, o] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, m.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || o(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let u = _.intl.string(R.default["3Hq9pQ"]),
        d = i.useCallback(() => {
            (0, m.aF)(t, n).then((e) => {
                (0, eD.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, e9);
        }, [t, n, u]);
    return r ? null : (0, a.jsx)(eU, { name: u, thumbSrc: l, ariaLabel: u, onClick: d, onThumbError: () => o(!0) });
}
function tt(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: s, connectsDown: r = !1, closed: o = !1 } = e,
        u = ew(n),
        d = i ? void 0 : s,
        c =
            null != d
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return _.intl.formatToPlainString(R.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? _.intl.formatToPlainString(R.default.NkZO2t, { count: n })
                          : _.intl.formatToPlainString(R.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(d)
                : null != u
                  ? ey(u)
                  : (l ?? _.intl.string(R.default.nv6pUM)),
        m = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, a.jsx)(eL, {
        glyph: (0, a.jsx)(eM, {}),
        line: c,
        anchor: !0,
        live: i,
        settled: null != d || (!i && o),
        connectsDown: r,
        detail: m
            ? (0, a.jsx)("ol", {
                  className: eE.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(e8, { projectId: t, node: e, presentation: "detail", active: i && e === u }, e.id),
                  ),
              })
            : void 0,
    });
}
var tn = n(29080),
    tl = n(46054);
function ta(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        i = eC(t).items,
        s = i.filter((e) => "message" === e.type).at(-1),
        r = (function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (!eN(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(t),
        o = r && null != s && s.content.trim() === n.trim(),
        u = !l && "" !== n && !o;
    return {
        streamed: i,
        lastStreamedMessage: s,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: r }),
    };
}
var ti = n(478016),
    ts = n(34136);
function tr(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(ts.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(ts.wx, null != n && ts.o5, s),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var to = n(113757);
function tu(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(e_.D, {
        className: r()(to.nM, { [to.f1]: o, [to.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": _.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: to.jo,
                children: [
                    n
                        ? (0, a.jsx)(ti.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: to.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: to.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function td(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                r((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(tr, {
        title: _.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                tu,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var tc = n(430392),
    tm = n(632015),
    th = n(824757);
function tf(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: th.uW,
        children: [(0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function tg(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(tf, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: th.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: th.jw,
                              children: (0, a.jsx)(v.E, {
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
function tx(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? O.k : tc.RobotIcon;
    return (0, a.jsxs)("span", {
        className: th.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: th.L6,
                      children: [
                          (0, a.jsx)(tm.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: _.intl.string(R.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: th.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: _.intl.string(t ? _.t.IC5Ann : R.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function tp(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(tr, {
        title: _.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(tx, { isActivity: !0 === t.is_activity, hasWidget: null != t.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: th.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(tf, {
                          label: _.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: th.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: th.Aw,
                                          children: (0, a.jsx)(v.E, {
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
                    ? (0, a.jsx)(tf, {
                          label: _.intl.string(_.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: th.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: th.uX,
                                          children: [
                                              (0, a.jsxs)(v.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(v.E, {
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
                (0, a.jsx)(tg, { label: _.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(tg, { label: _.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var tv = n(192308),
    tj = n(479191);
function tb(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: tj.Lo,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: _.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : _.intl.string(R.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: tj.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: tj.$H,
                            children: (0, a.jsx)(v.E, {
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
                className: tj.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: _.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tk = n(976814),
    ty = n(973e3);
function tA(e) {
    let { projectId: t, request: n } = e,
        l = (0, A.bG)([m.Ay], () => m.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, tk.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: ty.Mk,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: _.intl.string(R.default.wgDhiQ),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : _.intl.string(R.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: ty.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ty.K4,
                                  children: (0, a.jsx)(v.E, {
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
                className: ty.p0,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: _.intl.string(R.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
function tw(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tI(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tE(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tT(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function t_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tP(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tL() {
    return [
        { key: "snail", Illocon: tw, tint: "var(--illo-yellow-40)", name: tF(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: tN, tint: "var(--illo-orange-40)", name: tF(R.default["+FPL+I"]) },
        { key: "frog", Illocon: tC, tint: "var(--illo-green-40)", name: tF(R.default.w4GOfR) },
        { key: "bunny", Illocon: tS, tint: "var(--illo-pink-40)", name: tF(R.default.XmZT9M) },
        { key: "cat", Illocon: tI, tint: "var(--illo-pink-40)", name: tF(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: tE, tint: "var(--illo-green-40)", name: tF(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: tM, tint: "var(--illo-purple-40)", name: tF(R.default.DoTGt5) },
        { key: "dog", Illocon: tT, tint: "var(--illo-yellow-40)", name: tF(R.default["9zxqmP"]) },
        { key: "spider", Illocon: tR, tint: "var(--illo-orange-40)", name: tF(R.default.HF0T3L) },
        { key: "bee", Illocon: t_, tint: "var(--illo-yellow-40)", name: tF(R.default.XTzDga) },
        { key: "bot", Illocon: tP, tint: "var(--illo-purple-40)", name: tF(R.default.abtC2b) },
    ];
}
function tD(e) {
    return tL().find((t) => t.key === e);
}
function tF(e) {
    return _.intl.string(e);
}
function tq(e) {
    let t = tL(),
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
var tz = n(683063);
function tO(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : _.intl.string(R.default.MdXWEK);
}
function t$(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: s, connectsDown: r } = e,
        o = n.task,
        u = "running" === o.status,
        d = ew(n.steps),
        c = u
            ? null != d
                ? ey(d)
                : tO(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tO(e));
                  switch (e.status) {
                      case "failed":
                          return _.intl.formatToPlainString(R.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return _.intl.formatToPlainString(R.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return _.intl.formatToPlainString(R.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return _.intl.formatToPlainString(R.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? _.intl.formatToPlainString(R.default["z+U4YX"], { count: n })
                                          : _.intl.formatToPlainString(R.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return _.intl.formatToPlainString(R.default.KS49RN, { task: t });
                      default:
                          return _.intl.formatToPlainString(R.default.KS49RN, { task: t });
                  }
              })(o),
        m =
            0 === n.steps.length && 0 === o.detail.length
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eE.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            e8,
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
                                      className: eE.iq,
                                      children: (0, a.jsx)(e5, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  });
    return (0, a.jsx)(eL, {
        glyph: (0, a.jsx)(tz.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: s,
            body: tO(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: eE.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: m,
        connected: !0,
        connectsDown: r,
    });
}
var tU = n(140735),
    tG = n(329456);
let tB = [];
function tW(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tG.xL,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return _.intl.string(R.default.TkPGOH);
                case "in_progress":
                    return _.intl.string(R.default["oK+fmd"]);
                default:
                    return _.intl.string(R.default.d7lieu);
            }
        })(t),
        children: (0, a.jsx)("svg", {
            className: tG.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function tH(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : tB), [n, t]),
        s = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        r = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [d, c] = i.useState(r),
        [m, h] = i.useState(!1);
    d !== r && (c(r), u([...l, ...o.filter((e) => !s.has(e.key))]), 0 === l.length && h(!1));
    let f = o.some((e) => !s.has(e.key));
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [f, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: tG.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: r } = n;
                return (0, a.jsx)(
                    tz.u,
                    {
                        asset: (0, a.jsx)(r, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: tG.MA,
                            "data-leaving": s.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(r, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tG.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tV(e) {
    let t,
        { todos: n, provisional: l, agents: s } = e,
        r = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, s] = i.useState(t),
                [r, o] = i.useState(() => new Set());
            return (
                a !== t && (s(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === r.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [r]),
                r
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        o =
            ((t = (s ?? tB).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of s ?? tB) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: tG.p_,
        children: [
            n.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tG.AS,
                        "data-status": e.status,
                        "data-arriving": r.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tW, { status: e.status }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tG.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: tG.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(tH, { agents: o.get(e.id) ?? tB, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != l
                ? (0, a.jsxs)("li", {
                      className: tG.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tW, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tG.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: tG.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tK(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0 } = e,
        { completed: s, total: r } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === r
        ? null
        : (0, a.jsxs)(tr, {
              title: _.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: _.intl.formatToPlainString(R.default.bQvqly, { completed: s, total: r }),
              }),
              className: tG.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tU.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: _.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tG.rf,
                      children: (0, a.jsx)(tV, { todos: t, provisional: n, agents: l }),
                  }),
              ],
          });
}
var tY = n(165648);
function tQ(e) {
    let t = tq(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? tD(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: tO(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tZ(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            durationMs: s,
            interrupted: r = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: h = !1,
            segmentDurationMs: f,
        } = e,
        g = i.useMemo(() => eA(n, { turnActive: l }), [n, l]),
        x = i.useMemo(
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
    if (r)
        return (0, a.jsx)("ol", {
            className: eE.pj,
            "data-live": !1,
            children: (0, a.jsx)(eL, {
                glyph: (0, a.jsx)(tn.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: _.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = l ? void 0 : (f ?? (m ? (g.turn?.durationMs ?? s) : void 0)),
        v = c ? (eS(n) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        k = tq(b.map((e) => e.taskId)),
        y = !h && (l || b.some((e) => "running" === e.task.status)),
        A = tQ(b);
    return (0, a.jsx)(eP.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: eE.pj,
            "data-live": y,
            children: [
                (0, a.jsx)(tt, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: h,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, n) => {
                    let l = null != e.task.helperMark ? tD(e.task.helperMark) : void 0,
                        i = l ?? k.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              t$,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: eE.YO,
                          children: (0, a.jsx)(tK, { todos: v, provisional: u, agents: A }),
                      })
                    : null,
            ],
        }),
    });
}
function tX(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: s,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: h,
            sideReply: f = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: x,
            lastStreamedMessage: p,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = i.useMemo(
            () => ta({ steps: n, content: l, hasProposal: null != s, hasAttachments: null != u && u.length > 0 }),
            [n, l, s, u],
        ),
        k = null == u ? null : (0, a.jsx)(eW, { projectId: t, attachments: u }),
        y = null == k ? null : (0, a.jsx)("div", { className: eE.MT, children: k }),
        A = f
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: _.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eE.ue,
        children: [
            x.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: eE.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: eE.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tY.PT,
                                              children: tl.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === p ? y : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(tp, { proposal: s })
                : j
                  ? (0, a.jsxs)("div", {
                        className: r()(eE.ky, e4.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tY.PT, eE.cW),
                                children: tl.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? y : null,
                            A,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: r()(eE.ky, e4.XR),
                      children: (0, a.jsx)(tb, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: r()(eE.ky, e4.XR),
                      children: (0, a.jsx)(tA, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? k : null,
            null != o && o.length > 0 ? (0, a.jsx)(td, { ideas: o, pickedIdeaIds: h, onPick: m }) : null,
            j ? null : A,
        ],
    });
}
n(323874), n(14289), n(35956);
var tJ = n(475358),
    t0 = n(922016),
    t1 = n(980707),
    t2 = n(477782),
    t6 = n(81369),
    t3 = n(717400),
    t7 = n(663341),
    t5 = n(826745),
    t4 = n(783977),
    t8 = n(559647),
    t9 = n(285796),
    ne = n(775602),
    nt = n(435558),
    nn = n.n(nt),
    nl = n(506774),
    na = n(228366);
let ni = "VibegrationsComposerDrafts";
function ns() {
    return nl.w.get(ni) ?? {};
}
let nr = new Map(),
    no = nn().throttle(() => {
        if (0 === nr.size) return;
        let e = ns();
        for (let [t, n] of nr) "" === n ? delete e[t] : (e[t] = n);
        nr.clear(), nl.w.set(ni, e);
    }, 1e3);
class nu extends A.Ay.Store {
    getDraft(e) {
        let t = nr.get(e);
        return null != t ? t : (ns()[e] ?? "");
    }
}
let nd = new nu(na.h, {
    LOGOUT: function () {
        return nr.clear(), no.cancel(), nl.w.remove(ni), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return nr.set(t, n), no(), "" === n && no.flush(), !1;
    },
});
var nc = n(311656),
    nm = n(789438);
let nh = eG.Is;
function nf(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [s, r] = i.useState("enterStart"),
        [o, u] = i.useState("");
    t !== o && (u(t), t !== n && ("" === n ? (l(t), r("enterStart")) : "idle" === s && r("exit"))),
        i.useEffect(() => {
            if ("exit" === s) {
                let e = window.setTimeout(() => {
                    l(t), r("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === s) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => r("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [s, t]);
    let d = "exit" === s ? nm.t0 : "enterStart" === s ? nm.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${nm.xM} ${nm.nT} ${d}`, children: n }),
            (0, a.jsx)(tJ.e, { shortcut: "tab", className: `${nm.xT} ${nm.nT} ${d}`, keyClassName: nm.IS }),
        ],
    });
}
let ng = 0;
function nx(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: s,
            restoring: r = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: h,
            onImport: f,
            suggestion: g,
            questionOpen: x = !1,
            modelSettings: p,
            onModelSettingsChange: v,
        } = e,
        [j, b] = i.useState(() => nd.getDraft(t)),
        k = i.useCallback(
            (e) => {
                (0, c.I$)(t, e), b(e);
            },
            [t],
        ),
        [y, w] = i.useState(t);
    y !== t && (w(t), b(nd.getDraft(t)));
    let N = (0, A.bG)([ne.Ay], () => ne.Ay.isSubmitButtonEnabled),
        [C, S] = i.useState([]),
        [I, E] = i.useState(!1),
        [M, T] = i.useState(!1);
    i.useEffect(() => {
        s || T(!1);
    }, [s]);
    let P = i.useRef(null),
        L = i.useRef([]),
        D = i.useRef(new Set()),
        F = i.useRef(m);
    F.current = m;
    let q = i.useCallback((e) => {
            (L.current = e), S(e);
        }, []),
        z = i.useCallback((e) => {
            F.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = D.current;
        return () => {
            for (let t of L.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && z(t.ref);
        };
    }, [z]);
    let O = i.useCallback(
            (e, t) => {
                if (D.current.has(e)) return;
                let n = L.current;
                n.some((t) => t.localId === e) && q(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [q],
        ),
        $ = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...L.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++ng,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= nh) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: _.intl.formatToPlainString(R.default.DlX57a, { count: nh }),
                        });
                        continue;
                    }
                    if (!(0, eG.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: _.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, eG.ZJ)((0, eG.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = eG.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (q(t), n))
                    d(e).then(
                        (e) => {
                            D.current.has(l) ? z(e) : O(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            D.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                O(l, { status: "error", errorText: _.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [z, d, O, q],
        ),
        U = i.useCallback(
            (e) => {
                let t = L.current,
                    n = t.find((t) => t.localId === e);
                D.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && z(n.ref),
                    q(t.filter((t) => t.localId !== e));
            },
            [z, q],
        ),
        G = C.every((e) => "ready" === e.status),
        B = "" !== j.trim() || C.length > 0,
        W = n && B && G,
        H = i.useCallback(() => {
            if (!W) return;
            let e = L.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), L.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            k(""), q([]);
        }, [W, j, o, q, k]),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), H();
            },
            [H],
        ),
        K = i.useCallback(() => {
            null == u || M || (T(!0), u());
        }, [u, M]),
        Y = null == g || "" !== j || !n || l || r ? null : g,
        Q = i.useCallback(
            (e) => {
                if ("Escape" === e.key && s && null != u && !M) {
                    e.preventDefault(), e.stopPropagation(), K();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != Y) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(Y);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != h && (e.preventDefault(), h());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), H());
            },
            [H, h, s, u, M, K, Y, k],
        ),
        Z = i.useCallback(
            (e) => {
                if (!n) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), $(t));
            },
            [n, $],
        ),
        X = i.useCallback(
            (e) => {
                e.preventDefault(), E(!1), n && $(Array.from(e.dataTransfer.files));
            },
            [n, $],
        ),
        J = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), E(!0));
        }, []),
        ee = i.useCallback(
            (e) => {
                $(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [$],
        ),
        et = i.useRef(null),
        en = i.useRef(null),
        [el, ea] = i.useState(0),
        [ei, es] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void es(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = nj(e);
            null != t && ea(t);
        }
        es(!0);
        let t = setTimeout(() => es(!1), np);
        return () => clearTimeout(t);
    }, [j]);
    let er = i.useMemo(() => ({ "--custom-glow-x": `${el}px` }), [el]),
        eo = ei ? ` ${nm.EB}` : "",
        eu = null != Y;
    return (0, a.jsxs)("form", {
        onSubmit: V,
        onDrop: X,
        onDragOver: J,
        onDragLeave: () => E(!1),
        className: I ? `${nm.DA} ${nm.pV}` : nm.DA,
        children: [
            C.length > 0
                ? (0, a.jsx)("div", {
                      className: nm.lN,
                      children: C.map((e) => (0, a.jsx)(nb, { draft: e, onRemove: U }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${nm.wg} ${nm.LP}${eo}`, style: er, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${nm.wg} ${nm.L3}${eo}`, style: er, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: nm.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: nm.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(t0.Y, {
                        targetElementRef: en,
                        position: "top",
                        align: "left",
                        animation: t0.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(t1.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": _.intl.string(_.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(t2.rX, {
                                    children: [
                                        (0, a.jsx)(t2.Dr, {
                                            id: "upload-file",
                                            label: _.intl.string(_.t["d3+iYs"]),
                                            iconLeft: t6.H,
                                            leadingAccessory: { type: "icon", icon: t6.H },
                                            action: () => P.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(t2.Dr, {
                                                  id: "import-project",
                                                  label: _.intl.string(R.default.edKajy),
                                                  iconLeft: t3.q,
                                                  leadingAccessory: { type: "icon", icon: t3.q },
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: l } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: en,
                                type: "button",
                                className: `${nm.Y0} ${nm.nu}`,
                                disabled: !n,
                                "aria-label": _.intl.string(_.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(t7.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: nm.Qu,
                                }),
                            });
                        },
                    }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: nm.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(nf, { text: Y }),
                          }),
                    (0, a.jsx)(t5.y, {
                        value: j,
                        onChange: (e) => k(e.currentTarget.value),
                        onKeyDown: Q,
                        onPaste: Z,
                        placeholder: r
                            ? _.intl.string(R.default.pGFXZ0)
                            : l
                              ? _.intl.string(R.default.JeM47J)
                              : n
                                ? eu
                                    ? ""
                                    : x
                                      ? _.intl.string(R.default.M3ovXY)
                                      : _.intl.string(s ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : _.intl.string(R.default.nm4w9P),
                        disabled: !n,
                        "aria-label": _.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: nm.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: nm.Sz,
                        children:
                            s && null != u
                                ? (0, a.jsx)(eQ.m, {
                                      text: _.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${nm.Y0} ${nm.$E}`,
                                          disabled: M,
                                          onClick: K,
                                          "aria-label": _.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(tn.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != v
                                  ? (0, a.jsx)(nc.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${nm.Y0} ${nm.$E}`,
                                        icon: (0, a.jsx)(t4.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    N
                        ? (0, a.jsxs)("div", {
                              className: nm.fF,
                              children: [
                                  (0, a.jsx)("div", { className: nm.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: nm.rt,
                                      disabled: !W,
                                      "aria-label": _.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(t8.SendMessageIcon, {
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
let np = 1500,
    nv = [
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
function nj(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = nj.mirror;
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
                (nj.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of nv) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function nb(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(e$, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: nm.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: nm.o1,
                onClick: () => n(t.localId),
                "aria-label": _.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(t9.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
nj.mirror = null;
var nk = n(320095),
    ny = n(963852),
    nA = n(521981),
    nw = n(763754),
    nN = n(491182),
    nC = n(438729),
    nS = n(622868),
    nI = n(308334),
    nE = n(837528),
    nM = n(375199),
    nT = n(715628),
    nR = n(752636),
    n_ = n(9842),
    nP = n(589022),
    nL = n(95701),
    nD = n(994500),
    nF = n(967198),
    nq = n(803306);
let nz = new Set(),
    nO = new Map();
function n$(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
let nU = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function nG(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function nB(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function nW(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = nB(e, t),
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
    if (nG(a) && nG(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && nG(nB(e, l)); ) n++, (l -= 2);
        return n % 2 == 1;
    }
    return !1;
}
function nH(e, t) {
    let { streaming: n } = t,
        l = (0, A.bG)([ne.Ay], () => ne.Ay.useReducedMotion),
        a = n && !l,
        [s, r] = i.useState(() => ({ target: e, length: e.length })),
        o = s;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
                      for (; i > 0 && nW(t, i); ) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== s && r(o);
    let u = a && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let c = i.useRef(0),
        m = i.useRef(0);
    i.useEffect(() => {
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
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let s = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var r = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && nU.has(e.charAt(l - 1)); ) l--;
                                    return nU.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + s));
                                let o = r;
                                for (; o < t.length && o - r < 32 && nW(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && r({ target: e.target, length: l });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                r({ target: e, length: e.length });
            }
        }, [u]);
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var nV = n(441136);
let nK = (0, nL.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    nY = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nQ(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(nV.Yq, { [nV.x1]: t }), children: e });
}
function nZ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nX(e, t, n) {
    let { content: l } = (0, nM.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        s = i.useMemo(() => ({ message: e, channel: nK, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(nC.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, nT.A)(s, l);
}
function nJ(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, nE.m)(e, nK, t.usernameProfile, l),
        o = (0, nE.Jo)(t.avatarProfile, l),
        u = (0, A.bG)([nF.A], () => nF.A.getGuildId()),
        d = (0, A.bG)([er.default], () => er.default.getCurrentUser()),
        c = i.useCallback(
            (t) => {
                let n = er.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(nP.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: r,
        onPopoutRequestClose: s,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function n0(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        s = i.useMemo(
            () => ("" !== n.content ? (0, nA.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, A.cf)(
            [nD.A],
            () => ({
                isReplyAuthorBlocked: nD.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nD.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        u = (0, nw.X4)(n),
        d = (0, nw.X4)(t),
        c = nJ(n);
    return (0, a.jsx)(nI.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: nK,
        referencedMessage: { state: n_.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: r,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != l,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: l,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function n1(e) {
    let { message: t, author: n } = e,
        l = nJ(t);
    return (0, a.jsx)(nS.Ay, {
        message: t,
        channel: nK,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function n2(e) {
    let { content: t, createdAt: n, userId: l, accessories: s, groupStart: r } = e;
    i.useEffect(
        () =>
            (function (e) {
                if (null == e || nz.has(e) || null != er.default.getUser(e)) return;
                let t = nO.get(e) ?? 0;
                t >= 3 ||
                    (nO.set(e, t + 1),
                    nz.add(e),
                    nq
                        .getUser(e)
                        .finally(() => nz.delete(e))
                        .catch(() => {}));
            })(l),
        [l],
    );
    let o = (0, A.bG)(
            [er.default],
            () => n$(l, null != l ? er.default.getUser(l) : null, er.default.getCurrentUser()),
            [l],
        ),
        u = i.useMemo(() => (0, nw.FT)(o, null), [o]),
        d = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, ny.Ay)({ channelId: nK.id, content: t, author: o });
            return (0, nk.rh)({ ...e, timestamp: nZ(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, o, n]);
    return null == d ? null : (0, a.jsx)(n6, { message: d, author: u, content: t, accessories: s, groupStart: r });
}
function n6(e) {
    let { message: t, author: n, content: l, accessories: i, groupStart: s = !0 } = e,
        r = nX(t, l);
    return (0, a.jsx)(nN.A, {
        className: nV.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(n1, { message: t, author: n }) : void 0,
        childrenMessageContent: r,
        childrenAccessories: nQ(i, "" !== l),
        disableInteraction: !0,
    });
}
function n3(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: s,
            onJumpToReplied: r,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = nH(t, { streaming: u }),
        m = i.useMemo(() => (0, nw.FT)(null, null), []),
        h = i.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        f = s?.userId,
        g = (0, A.bG)(
            [er.default],
            () => n$(f, null != f ? er.default.getUser(f) : null, er.default.getCurrentUser()),
            [f],
        ),
        x = i.useMemo(() => {
            if (null == s || null == g) return null;
            let e = (0, ny.Ay)({ channelId: nK.id, content: s.content, author: g });
            return (0, nk.rh)({ ...e, id: s.id, timestamp: nZ(s.createdAt, e.timestamp), state: I.cmJ.SENT });
        }, [s, g]),
        p = i.useMemo(() => (null == s ? void 0 : { channel_id: nK.id, message_id: s.id }), [s]),
        v = i.useMemo(() => {
            let e = (0, ny.Ay)({ channelId: nK.id, content: d, author: nY });
            return (0, nk.rh)({
                ...e,
                timestamp: nZ(n, e.timestamp),
                state: I.cmJ.SENT,
                ...(null != p ? { type: I.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, n, p]),
        j = nX(v, d, nV.OS);
    return (0, a.jsxs)("div", {
        className: nV.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(nN.A, {
                className: nV.yE,
                author: h,
                childrenRepliedMessage:
                    null == x ? null : (0, a.jsx)(n0, { baseMessage: v, referenced: x, onJumpToReplied: r }),
                childrenHeader: (0, nR.A)({ message: v, channel: nK, author: h, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: nQ(l, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: nV.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function n7(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: s } = e,
        r = i.useRef(null),
        o = i.useCallback(
            (e) => {
                (r.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [u, d] = i.useState(null),
        c = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = i.useCallback((e) => {
            let t = r.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600));
        }, []),
        h = i.useMemo(
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
                        let e = !(0, eI.BL)(t),
                            l = ta({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = l.lastStreamedMessage?.key,
                            i = (function (e) {
                                let { turnActive: t = !0 } =
                                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    { items: n } = eC(e),
                                    l = eA(e, { turnActive: t }),
                                    a = (function (e) {
                                        let t = new Map();
                                        for (let n of e)
                                            "segment_settled" === n.kind &&
                                                (null == n.task_id || "" === n.task_id) &&
                                                null != n.segment &&
                                                null != n.duration &&
                                                t.set(n.segment, n.duration);
                                        return t;
                                    })(e),
                                    i = new Map();
                                for (let e of n) "message" === e.type && i.set(e.segment, e);
                                let s = new Set();
                                for (let e of l.steps) s.add(e.segment);
                                for (let e of l.tasks) s.add(e.task.segment);
                                let r = n.find((e) => "todos" === e.type)?.segment,
                                    o = Math.max(0, ...i.keys(), ...s, ...(null != r ? [r] : [])),
                                    u = [];
                                for (let e = 0; e <= o; e++) {
                                    let t = i.get(e),
                                        n = s.has(e),
                                        l = r === e;
                                    (null != t || n || l) &&
                                        u.push({
                                            key: t?.key ?? `work-${e}`,
                                            index: e,
                                            ...(null != t ? { prose: t } : {}),
                                            hasWork: n,
                                            hasTodos: l,
                                            ...(a.has(e) ? { durationMs: a.get(e) } : {}),
                                        });
                                }
                                return u;
                            })(t.steps, { turnActive: e }),
                            { lastWork: s, open: r } = (function (e, t) {
                                let { turnActive: n } = t,
                                    l = e.filter((e) => e.hasWork || e.hasTodos).at(-1)?.index,
                                    a = e.at(-1)?.index,
                                    i = n && null != l && l === a ? l : void 0;
                                return { ...(null != l ? { lastWork: l } : {}), ...(null != i ? { open: i } : {}) };
                            })(i, { turnActive: e }),
                            o = i.at(-1)?.index;
                        for (let u of i) {
                            if (null != u.prose) {
                                let i = `${t.render_id}:${u.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: i,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: i },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${u.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: u.index,
                                        active: u.index === r,
                                        closed: u.index !== r,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === s,
                                        hostsChecklist: u.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        if (
                            (!0 === t.interrupted
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
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            l.showsClosingMessage ||
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
                            i = !1,
                            s = !1;
                        for (let r of e) {
                            if (null == r.actor) {
                                l.push(!1), (a = null), (t = void 0), (i = !1), (s = !1), (n = void 0);
                                continue;
                            }
                            let e =
                                !i || a !== r.actor || t !== r.authorId || r.boundary !== n || !0 === r.separate || s;
                            e && ((a = r.actor), (t = r.authorId), (i = !0), (s = !0 === r.separate), (n = r.boundary)),
                                l.push(e);
                        }
                        return l;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(n),
            [n],
        );
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: eB.x7,
              children: (0, a.jsx)(n5, {
                  role: "assistant",
                  children: (0, a.jsx)(n3, { content: _.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: eB.x7,
              children: h.map((e) => {
                  let l = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                          return (0, a.jsx)(
                              n5,
                              {
                                  role: "user",
                                  anchorId: l.id,
                                  highlighted: u === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(n2, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      userId: l.user_id,
                                      accessories:
                                          null != n ? (0, a.jsx)(eW, { projectId: t, attachments: n }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              n5,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(n3, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: l.created_at,
                                      accessories:
                                          e.hostsAttachments && null != l.attachments
                                              ? (0, a.jsx)(eW, { projectId: t, attachments: l.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              n5,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tZ, {
                                      projectId: t,
                                      steps: l.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              n5,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tZ, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              n5,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tZ, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              n5,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(n3, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
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
                                      })(n, l.in_reply_to),
                                      onJumpToReplied: null != l.in_reply_to ? () => m(l.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tX, {
                                          projectId: t,
                                          steps: l.steps,
                                          announcement: l.announcement,
                                          content: "",
                                          proposal: l.proposal,
                                          interrupted: !0 === l.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: l.ideas,
                                          pickedIdeaIds:
                                              null == l.ideas
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
                                                    })(n, l, l.ideas),
                                          attachments: l.attachments,
                                          secretRequest: l.secretRequest,
                                          settingsRequest: l.settingsRequest,
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
function n5(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: s = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(eB.xk, { [eB.Qo]: i, [eB.q3]: s }),
        children: n,
    });
}
var n4 = n(625903),
    n8 = n(964675);
function n9(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, tk.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(e_.D, {
              className: n8.h,
              "aria-label": _.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(n4.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var le = n(863610),
    lt = n(495557);
function ln(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: s } = nH(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: lt.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: lt.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tY.PT, lt.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: tl.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ll = n(921461);
function la(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1, controlling: s = !1 } = e,
        o = i.useRef(null),
        u = i.useId(),
        [d, c] = i.useState(null),
        m = null != t && "end" !== t.phase,
        h = s
            ? R.default.ivvYHP
            : l
              ? R.default.aFffp2
              : n
                ? R.default["0vH/5G"]
                : m
                  ? R.default.Ly7F7x
                  : R.default.QDGuNS,
        f = null != t && "" !== t.text,
        g = t?.session ?? null,
        x = f && null != g && d === g,
        p = i.useCallback(() => {
            f && null != g && c((e) => (e === g ? null : g));
        }, [f, g]),
        j = i.useCallback(() => c(null), []);
    return (0, a.jsx)(t0.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: x,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(ln, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(e_.D, {
                innerRef: o,
                className: r()(ll.hF, f && ll.Xd),
                "aria-label": _.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": x,
                "aria-describedby": x ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)("span", {
                        className: ll.bl,
                        children: (0, a.jsx)(le.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!s || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: _.intl.string(h),
                    }),
                ],
            }),
    });
}
var li = n(885574),
    ls = n(280894);
function lr(e) {
    return e.toLocaleString();
}
function lo(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: ls.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ls.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lr((0, eG.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lr(n.input_tokens),
                    " in \xb7 ",
                    lr(n.output_tokens),
                    " out \xb7 ",
                    lr(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lr(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lu(e) {
    let { project: t } = e,
        n = (0, eG.wU)(t.compaction),
        l = (0, eG.wV)((0, eG.wV)(t.orchestrator, t.codegen), n);
    return (0, a.jsxs)("div", {
        className: ls.si,
        role: "dialog",
        "aria-label": _.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: ls.Q$,
                children: (0, a.jsxs)("div", {
                    className: ls.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lr((0, eG.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(lo, { label: _.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(lo, { label: _.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(lo, { label: _.intl.string(R.default.Tj6b30), usage: n }),
            (0, a.jsxs)("div", {
                className: ls.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eG.sj)(l) ? "\u2014" : `${Math.round(100 * (0, eG.CA)(l))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ld(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(t0.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(lu, { project: t }),
        children: (e) =>
            (0, a.jsx)(e_.D, {
                innerRef: n,
                className: ls.Y$,
                "aria-label": _.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(li.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lc = n(985451),
    lm = n(258216);
function lh(e) {
    switch (e) {
        case "connecting":
            return _.intl.string(R.default.W7oyuf);
        case "failed":
            return _.intl.string(R.default.eE60xI);
        case "closed":
            return _.intl.string(R.default["yBmS+I"]);
    }
}
function lf(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: l = !1,
            thinkingActivity: i,
            compacting: s,
            projectUsage: r,
            connState: o,
        } = e,
        u = (0, lc.o4)(t);
    return (0, a.jsxs)("div", {
        className: lm.jf,
        children: [
            (0, a.jsx)("div", {
                className: lm.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || l || u ? (0, a.jsx)(la, { activity: i, compacting: s, restoring: l, controlling: u }) : null,
            }),
            (0, a.jsx)(n9, { projectId: t }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: lm.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": _.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, eG.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: _.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, eG.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(ld, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": _.intl.formatToPlainString(R.default.eDDdhB, { status: lh(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: lm.XF,
                      children: lh(o),
                  }),
        ],
    });
}
var lg = n(22231),
    lx = n(477155),
    lp = n(935286),
    lv = n(424110);
function lj(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        u = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(e_.D, {
        className: r()(lv.uK, { [lv.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": _.intl.formatToPlainString(u ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": d ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": u ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: lv.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lv.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lv.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lv.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: o,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            u
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lv.rM,
                      children: _.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function lb(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [s, u] = i.useState({}),
        [d, c] = i.useState({}),
        [m, h] = i.useState(0),
        f = null == n,
        g = t.questions.length,
        x = Math.min(m, g - 1),
        p = t.questions[x],
        j = i.useCallback(
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
        b = i.useCallback(
            (e) => {
                if (f) return;
                let n = { ...s, [p.id]: e };
                u(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, x);
                null == l ? j(n) : h(l);
            },
            [s, t, f, x, p.id, j],
        ),
        k = i.useCallback(() => {
            if (f || 0 === x) return;
            let e = t.questions[x - 1];
            u((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                c((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                h(x - 1);
        }, [t, f, x]),
        y = x > 0 && !f,
        A = d[p.id] ?? "",
        w = i.useCallback(() => {
            let e = A.trim();
            "" !== e && b({ kind: "custom", text: e });
        }, [A, b]),
        [N, C] = i.useState(!1),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let E = i.useCallback(() => {
            null != l && (I(!0), setTimeout(l, 150));
        }, [l]),
        M = i.useCallback(() => {
            f || x >= g - 1 || h(x + 1);
        }, [f, x, g]),
        T = x < g - 1 && !f;
    return (0, a.jsxs)("section", {
        className: r()(lv.$O, { [lv.fI]: N && !S, [lv.Oh]: S }),
        role: "dialog",
        "aria-label": p.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": x,
        children: [
            (0, a.jsxs)("div", {
                className: lv.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: `${p.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: lv.TK,
                        children: p.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(e_.D, {
                              className: r()(lv.gb, lv.Q7),
                              onClick: E,
                              "aria-label": _.intl.string(R.default.fMdUNR),
                              "data-vibegrations-clarification-close": !0,
                              children: (0, a.jsx)(o.P, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: lv.Ge,
                role: "group",
                "aria-labelledby": `${p.id}-label`,
                children: [
                    p.options.map((e, t) =>
                        (0, a.jsx)(
                            lj,
                            {
                                option: e,
                                position: t + 1,
                                disabled: f,
                                onPick: (e) => b({ kind: "option", optionId: e.id, text: e.label }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsxs)("div", {
                        className: lv.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: lv.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(lg.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(t5.y, {
                                value: A,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    c((e) => ({ ...e, [p.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), w());
                                },
                                placeholder: _.intl.string(R.default.qifsdL),
                                "aria-label": _.intl.formatToPlainString(R.default.XHESTL, { question: p.question }),
                                disabled: f,
                                rows: 1,
                                className: lv.Pu,
                                "data-vibegrations-clarification-other": p.id,
                            }),
                        ],
                    }),
                ],
            }),
            g > 1
                ? (0, a.jsxs)("div", {
                      className: lv.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: _.intl.formatToPlainString(R.default["7bypa+"], { index: x + 1, total: g }),
                          }),
                          (0, a.jsxs)("div", {
                              className: lv.Np,
                              children: [
                                  (0, a.jsx)(e_.D, {
                                      className: r()(lv.gb, { [lv.yI]: !y }),
                                      onClick: y ? k : void 0,
                                      tabIndex: y ? 0 : -1,
                                      "aria-hidden": !y,
                                      "aria-disabled": f,
                                      "aria-label": _.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": y ? void 0 : "true",
                                      children: (0, a.jsx)(lx.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(e_.D, {
                                      className: r()(lv.gb, { [lv.yI]: !T }),
                                      onClick: T ? M : void 0,
                                      tabIndex: T ? 0 : -1,
                                      "aria-hidden": !T,
                                      "aria-disabled": f,
                                      "aria-label": _.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": T ? void 0 : "true",
                                      children: (0, a.jsx)(lp.E, {
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
var lk = n(643278),
    ly = n(405189);
function lA(e) {
    let { line: t, placement: n, todos: l, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        d = null != n,
        [c, m] = i.useState(n ?? "top"),
        [h, f] = i.useState(d),
        [g, x] = i.useState(!1),
        [p, v] = i.useState(!1),
        [j, b] = i.useState(d);
    j !== d && (b(d), null != n ? (m(n), f(!0)) : (x(!1), v(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => f(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [h, d]);
    let [k, y] = i.useState(!1),
        [A, w] = i.useState(!1),
        [N, C] = i.useState(p);
    N !== p && (C(p), p ? y(!0) : w(!1)),
        i.useEffect(() => {
            if (p || !k) return;
            let e = setTimeout(() => y(!1), 150);
            return () => clearTimeout(e);
        }, [p, k]),
        i.useEffect(() => {
            if (!k || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [k, p]);
    let S = null != l && l.length > 0,
        I = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: ly.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(ly.vK, { [ly.ho]: g && d, [ly.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: r()(ly.Rk, eE.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eL, {
                                        glyph: (0, a.jsx)(eM, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(e_.D, {
                                    className: ly.pZ,
                                    onClick: u,
                                    "aria-label": _.intl.string(R.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: r()(ly.Rk, eE.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eL, {
                                            glyph: (0, a.jsx)(eM, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          S
                              ? (0, a.jsx)(eQ.m, {
                                    text: _.intl.string(R.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(e_.D, {
                                        className: ly.BO,
                                        onClick: I,
                                        "aria-expanded": p,
                                        "aria-label": _.intl.string(R.default.qCRC6c),
                                        children: (0, a.jsx)(lk.ClipboardListIcon, {
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
                  k && S
                      ? (0, a.jsx)("div", {
                            className: r()(ly.vB, { [ly.pg]: p && A, [ly.ui]: !p }),
                            children: (0, a.jsx)(tK, { todos: l, provisional: s, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var lw = n(366010),
    lN = n(825484),
    lC = n(859703),
    lS = n(24001),
    lI = n(291749),
    lE = n(971276),
    lM = n(590202),
    lT = n(710969),
    lR = n(792620),
    l_ = n(201805),
    lP = n(617986),
    lL = n(363195),
    lD = n(749414);
let lF = !1;
function lq(e) {
    let t,
        n,
        l,
        { open: s } = e,
        r =
            ((t = (0, l_.dN)()),
            (n = (0, A.bG)([lC.A], () => lC.A.isQuestAccessSuspended || null != lC.A.questEnrollmentBlockedUntil, [])),
            (l = (0, A.bG)([lC.A], () => null != lC.A.getQuestPreviewOverride(lS.uF.QUEST_BAR_V2), [])),
            null != t && (0, lR.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, lE.s)() || n || (0, lT.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = i.useState(() => lF),
        { mounted: d, closing: c } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1),
                s = i.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (s.current = setTimeout(() => {
                                (s.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != s.current && (clearTimeout(s.current), (s.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(s && !o && null != r),
        [m, h] = i.useState(r);
    null != r && r !== m && h(r);
    let g = r ?? m,
        x = (0, A.bG)([lL.A], () => lL.A.getState().theme),
        p = (0, lw.M)(x) ? I.NJ8.DARK : I.NJ8.LIGHT,
        j = null != g ? (0, lI.tW)(g, lI.fY.GAME_TILE, p).url : null,
        b = null != j && "" !== j ? j : null,
        k = i.useCallback(async () => {
            if (null == r) return;
            let e = {
                questContent: lS.uF.QUEST_BAR_V2,
                sourceQuestContent: lS.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: lM.Cy.WATCH_VIDEO,
            };
            r.userStatus?.enrolledAt != null
                ? (0, lP.d5)({ quest: r, ...e })
                : await (0, lP.e0)(r, { ...e, questContentCTA: lM.Cy.ACCEPT_QUEST });
        }, [r]),
        y = i.useCallback(() => {
            (lF = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: lD.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: lD.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: lD.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: lD._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: lD.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: lD.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: lD.Ug,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: _.intl.string(R.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: _.intl.format(_.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(lN.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: _.intl.string(R.default.egO5fO),
                          }),
                          (0, a.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: _.intl.string(_.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var lz = n(651649),
    lO = n(670455);
let l$ = "shownVibegrationsFeedbackProjectIds";
var lU = n(348800);
let lG = [_.intl.string(R.default["E+Q26x"]), _.intl.string(R.default["06/jqP"]), _.intl.string(R.default["3gSfUa"])];
function lB(e) {
    let { projectId: t, restoreState: l } = e,
        s = (0, A.bG)([eI.Ay], () => eI.Ay.getMessages(t), [t]),
        r = (0, A.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, A.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, A.bG)([eI.Ay], () => eI.Ay.getProjectUsage(t), [t]),
        d = (0, A.bG)([eI.Ay], () => eI.Ay.getThinkingActivity(t), [t]),
        c = (0, A.bG)([eI.Ay], () => eI.Ay.isCompacting(t), [t]),
        h = (0, A.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(!0),
        [v, j] = i.useState(!0);
    i.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [s]);
    let b = i.useCallback(() => {
            let e = f.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        k = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            p.current = t < 32;
            let n = t > 1;
            j((e) => (!n === e ? e : !n));
        }, []);
    i.useLayoutEffect(() => {
        let e = f.current,
            t = x.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            p.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let s = new ResizeObserver((t) => {
            for (let a of t)
                if (a.target === e) {
                    let e = a.contentRect.width;
                    if (e === n) continue;
                    (n = e), i();
                } else {
                    let e = a.contentRect.height;
                    if (e === l) continue;
                    (l = e), i();
                }
        });
        return (
            s.observe(e),
            null != t && s.observe(t),
            () => {
                s.disconnect(), null != a && cancelAnimationFrame(a);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = eI.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eI.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((nl.w.get(l$) ?? []).includes(e) ||
                            lz.A.possiblyShowFeedbackModal(lO.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = nl.w.get(l$) ?? []).includes(e) || nl.w.set(l$, [...l, e]),
                                    (0, tv.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("104143"),
                                            n.e("155925"),
                                            n.e("218413"),
                                            n.e("137381"),
                                            n.e("847004"),
                                            n.e("341676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let y = i.useCallback(
            (e, n) => {
                (0, m.dv)(t, e, n);
            },
            [t],
        ),
        w = i.useCallback(() => (0, m.fu)(t), [t]),
        N = i.useCallback((e) => y(e.implementation_prompt), [y]),
        C = i.useCallback((e) => y(e), [y]),
        S = i.useCallback((e) => (0, m.XZ)(t, e), [t]),
        I = i.useCallback((e) => (0, m.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, m.Vm)(t, e), [t]),
        M = i.useCallback(() => y(_.intl.string(R.default.Jj8Ftb)), [y]),
        T = l?.status === "restoring",
        P = "open" === r && !o && !T,
        L = s[s.length - 1],
        D = null != L && "assistant" === L.role && null != L.proposal,
        [F, q] = i.useState(null),
        z = L?.clarification != null && L.clarification.id !== F ? L.clarification : null,
        O = i.useCallback(() => {
            null != z && q(z.id);
        }, [z]),
        $ = (0, A.bG)([eI.Ay], () => eI.Ay.hasLoadedHistory(t), [t]),
        U = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lG[e % lG.length];
        }, [t]),
        G = D
            ? _.intl.string(R.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? _.intl.string(R.default["3sTTBu"])
              : $ && 0 === s.length
                ? U
                : null,
        B = i.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, eI.BL)(t)) return t;
            }
        }, [s]),
        W = null != B,
        H = D && P ? M : void 0,
        [V, K] = i.useState(null),
        [Y, Q] = i.useState(W);
    Y !== W && (Q(W), W || K(null)),
        i.useEffect(() => {
            if (!W) return;
            let e = f.current?.querySelector("[data-vibegrations-chat-log]"),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? K(null)
                        : K(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return n.observe(t), () => n.disconnect();
        }, [W, B?.steps]);
    let Z = i.useMemo(() => {
            let e, t;
            return null != B
                ? null != (t = ew((e = eA(B.steps, { turnActive: !0 })).steps))
                    ? ey(t)
                    : (e.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ??
                      _.intl.string(R.default.nv6pUM))
                : "";
        }, [B]),
        X = i.useMemo(() => (null != B ? (eS(B.steps) ?? B.todos) : void 0), [B]),
        J = B?.provisionalTodo,
        ee = i.useMemo(() => (null != B ? tQ(eA(B.steps, { turnActive: !0 }).tasks) : void 0), [B]);
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: lU.TE,
        children: [
            (0, a.jsx)(lq, { open: null != B }),
            (0, a.jsx)(lA, {
                onJumpToActivity: b,
                line: Z,
                placement: W && "top" === V ? "top" : null,
                todos: X,
                provisionalTodo: J,
                agents: ee,
            }),
            (0, a.jsx)(eb.Ch, {
                ref: g,
                onScroll: k,
                "data-vibegrations-chat-log": !0,
                className: v ? lU.N$ : `${lU.N$} ${lU.hB}`,
                children: (0, a.jsx)(n7, { ref: x, projectId: t, messages: s, onPickIdea: P ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: lU.im,
                children: [
                    (0, a.jsx)(lf, {
                        projectId: t,
                        thinking: W,
                        restoring: T,
                        thinkingActivity: d,
                        compacting: c,
                        projectUsage: u,
                        connState: r,
                    }),
                    (0, a.jsxs)("div", {
                        className: lU.Jx,
                        children: [
                            (0, a.jsx)(lA, {
                                onJumpToActivity: b,
                                line: Z,
                                placement: W && "bottom" === V ? "bottom" : null,
                                todos: X,
                                provisionalTodo: J,
                                agents: ee,
                            }),
                            null == z
                                ? null
                                : (0, a.jsx)("div", {
                                      className: lU.B5,
                                      children: (0, a.jsx)(
                                          lb,
                                          { clarification: z, onSubmit: P ? C : void 0, onDismiss: O },
                                          z.id,
                                      ),
                                  }),
                            (0, a.jsx)(nx, {
                                projectId: t,
                                canSend: P,
                                stopped: o,
                                running: W,
                                restoring: T,
                                onSend: y,
                                onInterrupt: P ? w : void 0,
                                onUploadFile: I,
                                onDeleteFile: E,
                                onApprove: H,
                                suggestion: G,
                                questionOpen: null != z,
                                modelSettings: h,
                                onModelSettingsChange: S,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lW = n(661531),
    lH = n(602853),
    lV = n(517461),
    lK = n(761929),
    lY = n(927506);
function lQ(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, lH.r)(lW.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, lV.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        h = (0, nt.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? h + r : 0);
    }, [h, t, r, l]);
    let f = (0, lK.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: lK.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: lY.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lY.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: lY.kL, style: { width: h }, children: s }),
        ],
    });
}
var lZ = n(11055),
    lX = n(333007),
    lJ = n(342667);
function l0(e) {
    let { projectId: t, resolveIframe: n } = e,
        l = (0, lc.o4)(t),
        s = (0, tv.useHasAnyModalOpen)(),
        [r, o] = i.useState(null);
    i.useEffect(() => {
        if (!l) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(n());
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
    }, [l, n]);
    let u = l && null != r && !s;
    return (0, lX.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: lJ.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: l ? _.intl.string(R.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: lJ.o,
                          style: { left: r.left, top: r.top, width: r.width, height: r.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var l1 = n(314116),
    l2 = n(364522),
    l6 = n(406810),
    l3 = n(381849),
    l7 = n(977628);
function l5(e) {
    let t,
        { projectId: n, onClose: l, onRestore: s } = e,
        [r, u] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(n)
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
        }, [n]),
        (t =
            "loading" === r.status
                ? (0, a.jsx)("div", { className: l7.E8, children: (0, a.jsx)(h.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: l7.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: _.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: l7.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: _.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(l2.Ip, {
                          className: l7.p_,
                          children: (0, a.jsx)("div", {
                              className: l7.jO,
                              children: r.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, l3.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: l3._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: l7.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, l1.A)({
                                                  title: _.intl.string(R.default.qOUOPE),
                                                  subtitle: _.intl.string(R.default.k2JBj5),
                                                  confirmText: _.intl.string(R.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), s(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: l7.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != n.relative &&
                                                  (0, a.jsx)(v.E, {
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
        (0, a.jsxs)("section", {
            className: l7.nd,
            "aria-label": _.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": _.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: _.intl.string(_.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: l6.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: _.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: l7.rf, children: t }),
            ],
        })
    );
}
var l4 = n(120426),
    l8 = n(873727),
    l9 = n(147248),
    ae = n(418842),
    at = n(885386),
    an = n(940107),
    al = n(171936),
    aa = n(796036);
function ai(e) {
    let { projectId: t, applicationId: n, surface: l, header: s, mainClassName: o, content: d, sidebar: c } = e,
        [m, h] = i.useState(null),
        f = (0, u.A)(n, l),
        g = f?.id ?? null;
    !(function (e, t) {
        let n = (0, A.bG)([lL.A], () => (0, l8.x4)(lL.A.theme)),
            l = (0, A.bG)([l9.A], () => l9.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: u,
            } = (0, A.cf)([ne.Ay], () => ({
                reducedMotion: ne.Ay.useReducedMotion,
                fontScale: (0, l8.U0)(),
                highContrast: ne.Ay.isHighContrastModeEnabled,
                forcedColors: ne.Ay.useForcedColors,
                underlineLinks: ne.Ay.alwaysShowLinkDecorations,
            })),
            d = at.hH.useSetting(),
            c = (0, ae.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            f = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, l4.F)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, l8.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, an.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, s, t, r, d, e, a, c, u]),
            p = i.useRef(x);
        i.useLayoutEffect(() => {
            p.current = x;
        });
        let v = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), h.current || p.current();
                }));
        }, []);
        i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                x(), v();
            }, [v, x]),
            i.useLayoutEffect(() => {
                let n = (0, l4.F)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, l4.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(m, g),
        i.useEffect(() => {
            if (null != t) return (0, al.mn)(t, () => (0, l4.F)(m, g));
        }, [t, m, g]);
    let x = i.useCallback(() => (0, l4.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(ev.Mh, o),
                children: [s, (0, a.jsx)("div", { ref: h, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(l0, { projectId: t ?? null, resolveIframe: x }),
        ],
    });
}
function as(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            header: u,
            chatOpen: h,
            onCloseChat: f,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: x,
            onRestoreVersion: p,
            restoreState: v,
            previewReady: j,
            previewGate: b,
            channelMessages: k,
            availability: y,
            activeMode: A,
            widgetApplicationId: w,
        } = e,
        N = i.useRef(null),
        [C, I] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === S.U4.MAIN) return (0, c.HV)(n), () => (0, c.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, aa.s)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, c.Zq)(0), []);
    let E = Math.max(360, C - 320),
        M = null != k ? k.open : h,
        T = h || s.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: N,
        className: ev.LB,
        children: (0, a.jsx)(ai, {
            projectId: t,
            applicationId: n,
            surface: s,
            header: u,
            mainClassName: null == u ? void 0 : r()(ev.ez, { [ev.zt]: M }),
            content: (0, a.jsx)(eh, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: j,
                previewGate: b,
                availability: y,
                activeMode: A,
                widgetApplicationId: w,
            }),
            sidebar:
                null != k
                    ? (0, a.jsx)(lQ, {
                          open: k.open,
                          maxWidth: E,
                          onWidthChange: c.Zq,
                          children: k.open
                              ? (0, a.jsx)(ej, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && T
                      ? (0, a.jsx)(lQ, {
                            open: h,
                            maxWidth: E,
                            onWidthChange: c.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: g
                                    ? (0, a.jsx)(
                                          l5,
                                          { projectId: t, onClose: x ?? (() => {}), onRestore: p ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lZ.A, { projectId: t }),
                                              (0, a.jsx)(d.Ay, {
                                                  "aria-label": _.intl.string(_.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(d.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: _.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(d.Ay.Title, {
                                                      children: _.intl.string(_.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ev.cb,
                                                  children: (0, a.jsx)(lB, { projectId: t, restoreState: v }, t),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
