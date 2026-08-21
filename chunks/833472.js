n.d(t, { A: () => n$ });
var l,
    a = n(477900),
    i = n(582128),
    s = n(672929),
    r = n(948230),
    o = n(998939),
    c = n(289873),
    d = n(821609),
    u = n(323384),
    h = n(834730),
    m = n(627363),
    f = n(207371),
    p = n(580954),
    g = n(297264),
    x = n(625180),
    v = n(91242),
    b = n(812901),
    j = n(317608),
    k = n(17928),
    y = n(956518),
    w = n(869146),
    _ = n(165610),
    N = n(652215),
    E =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    A = n(742023),
    S = n(503698),
    I = n.n(S),
    C = n(328284);
function T(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: I()(C.Bf, l && C.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: C.Ux,
                children: [
                    (0, a.jsx)(g.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var R = n(459864),
    P = n(375708),
    M = n(963691);
function L(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, _.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, k.bG)([v.A], () => v.A.getFrame(l), [l]),
                        r = (0, k.bG)(
                            [w.A, v.A],
                            () => w.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT) && v.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, m.YY)(t),
                        d = (0, f.x)(o),
                        u = null != (0, y.Ay)(t),
                        [h, p] = i.useState(null),
                        g = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => p(l), [l]),
                        lifecycle: (0, _.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : g
                              ? { state: "error" }
                              : s?.state === "loading"
                                ? { state: "loading", frame: s }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && u
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
                            await x.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                s
            );
        })({ applicationId: t, surface: n }),
        r = (0, _.VA)(t, n);
    switch (
        (i.useEffect(() => {
            let e;
            return (
                null == (e = v.A.getFrame(r)) ||
                    v.A.getMainFrame()?.id !== r ||
                    w.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === _.sV.MAIN ? x.A.resetFrameLayoutModes(r) : x.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = v.A.getFrame(r)) &&
                        ((0, _.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === _.sV.INLINE && x.A.promoteFrame(r),
                              x.A.updateFrameLayoutMode({ frameId: r, layoutMode: _.y0.PIP }))
                            : e.intent === _.sV.MAIN && (0, p.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case E.Launched:
            return (0, a.jsx)(j.A, { frameId: l.id, level: b.A.WithinAppContent, className: M.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: M.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
            return (0, a.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: M.tj,
                        children: P.intl.string(R.default.jTuX7C),
                    }),
                ],
            });
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: M.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case E.Error:
            return (0, a.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, a.jsx)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: M.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: M.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var O = n(308528),
    D = n(334738),
    F = n(373204),
    H = n(355622),
    G = n(734057),
    $ = n(531685),
    B = n(365971),
    U = n(362417);
function V(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: U.f,
        children: [
            (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function q() {
    return (0, a.jsx)("div", { className: U.f, children: (0, a.jsx)(c.y, {}) });
}
function z(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, m.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, k.bG)([G.A], () => {
            if (null == o) return null;
            let e = G.A.getDMFromUserId(o);
            return null != e ? G.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && O.A.preload(N.ME, t);
        }, [t]),
        (n = (0, k.bG)([$.A], () => $.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, B.Xg)();
            return (
                (0, D.yl)(t, e),
                () => {
                    (0, D.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, u] = i.useState(null),
        h = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != c) return;
        let e = !1;
        return (
            O.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || u(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, c]),
    r)
        ? (0, a.jsx)(q, {})
        : null == o || h
          ? (0, a.jsx)(V, { message: P.intl.string(R.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(q, {})
            : (0, a.jsx)("div", {
                  className: U.g,
                  children: (0, a.jsx)(F.A, { channel: c, guild: null, chatInputType: H.oU.SIDEBAR }, c.id),
              });
}
var W = n(976102);
function K(e) {
    let { applicationId: t, previewApplicationId: n, surface: l, previewReady: r, previewGate: o } = e,
        g = (0, s.A)(t, l),
        { data: x, isLoading: v } = (0, m.YY)(t ?? void 0);
    return (i.useEffect(() => {
        o?.type === "permissions" && null != g && (0, p.A)().leaveFrame(g.id);
    }, [g, o?.type]),
    o?.type === "checking")
        ? (0, a.jsx)("div", { className: W.q, children: (0, a.jsx)(c.y, {}) })
        : o?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: W.q,
                children: (0, a.jsx)(T, {
                    wide: !0,
                    title: P.intl.string(R.default.DYwf2n),
                    body: P.intl.string(R.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: P.intl.string(R.default["CRfE/E"]),
                        onClick: o.onReviewPermissions,
                        loading: o.loading,
                    }),
                }),
            })
          : r
            ? null == t
                ? null
                : v
                  ? (0, a.jsx)("div", { className: W.q, children: (0, a.jsx)(c.y, {}) })
                  : null == x || (0, f.x)(x) || null == n
                    ? (0, a.jsx)(L, { applicationId: t, surface: l })
                    : (0, a.jsx)(z, { previewApplicationId: n })
            : (0, a.jsxs)("div", {
                  className: W.q,
                  children: [
                      (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: W.t,
                          children: P.intl.string(R.default.jTuX7C),
                      }),
                  ],
              });
}
var X = n(789645),
    Y = n(738876),
    Z = n(47167),
    J = n(58736),
    Q = n(31717),
    ee = n(372054);
function et(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, Z.Ay)(t),
        s = (0, a.jsx)(J.Ay.Icon, { icon: X.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ee.Wx,
        children: [
            (0, a.jsx)(Y.A, { channel: t, draftType: Q.C.ChannelMessage }),
            (0, a.jsx)(J.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: (0, a.jsx)(J.Ay.Title, { children: i }),
            }),
            (0, a.jsx)("div", {
                className: ee.GZ,
                children: (0, a.jsx)(F.A, { channel: t, guild: n, chatInputType: H.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var en = n(689175),
    el = n(783791);
n(323874), n(14289), n(35956), n(321073);
var ea = n(475358),
    ei = n(826745),
    es = n(866665),
    er = n(588975),
    eo = n(428610),
    ec = n(29080),
    ed = n(559647),
    eu = n(285796),
    eh = n(775602),
    em = n(673724),
    ef = n(514042),
    ep = n(939249),
    eg = n(298668);
function ex(e) {
    return I()(eg._B, { [eg.ND]: e });
}
function ev(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eg.gJ, onError: r })
                : (0, a.jsx)(ef.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eg.Wd,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eg.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eb(e) {
    return (0, a.jsx)("div", { className: ex(e.compact ?? !1), children: ev(e) });
}
function ej(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(ep.D, {
        className: I()(ex(!0), eg.w8),
        onClick: i,
        "aria-label": l,
        children: ev({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var ek = n(789438);
function ey(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [s, r] = i.useState("enterStart"),
        [o, c] = i.useState("");
    t !== o && (c(t), t !== n && ("" === n ? (l(t), r("enterStart")) : "idle" === s && r("exit"))),
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
    let d = "exit" === s ? ek.t0 : "enterStart" === s ? ek.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${ek.xM} ${ek.nT} ${d}`, children: n }),
            (0, a.jsx)(ea.e, { shortcut: "tab", className: `${ek.xT} ${ek.nT} ${d}`, keyClassName: ek.IS }),
        ],
    });
}
let ew = 0;
function e_(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            onSend: s,
            onInterrupt: r,
            onUploadFile: o,
            onDeleteFile: d,
            onApprove: u,
            onRegionCapture: h,
            suggestion: m,
        } = e,
        [f, p] = i.useState(""),
        g = (0, k.bG)([eh.Ay], () => eh.Ay.isSubmitButtonEnabled),
        [x, v] = i.useState([]),
        [b, j] = i.useState(!1),
        [y, w] = i.useState(!1),
        [_, N] = i.useState(!1);
    i.useEffect(() => {
        l || N(!1);
    }, [l]);
    let E = i.useRef(null),
        A = i.useRef([]),
        S = i.useRef(new Set()),
        I = i.useRef(d);
    I.current = d;
    let C = i.useCallback((e) => {
            (A.current = e), v(e);
        }, []),
        T = i.useCallback((e) => {
            I.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = S.current;
        return () => {
            for (let t of A.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && T(t.ref);
        };
    }, [T]);
    let M = i.useCallback(
            (e, t) => {
                if (S.current.has(e)) return;
                let n = A.current;
                n.some((t) => t.localId === e) && C(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [C],
        ),
        L = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...A.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++ew,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, em.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, em.ZJ)((0, em.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = em.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (C(t), n))
                    o(e).then(
                        (e) => {
                            S.current.has(l) ? T(e) : M(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            S.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                M(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [T, o, M, C],
        ),
        O = i.useCallback(async () => {
            if (null != h && !y) {
                w(!0);
                try {
                    let e = await h();
                    null != e && L([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        C([
                            ...A.current,
                            {
                                localId: ++ew,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: P.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    w(!1);
                }
            }
        }, [h, y, L, C]),
        D = i.useCallback(
            (e) => {
                let t = A.current,
                    n = t.find((t) => t.localId === e);
                S.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && T(n.ref),
                    C(t.filter((t) => t.localId !== e));
            },
            [T, C],
        ),
        F = x.every((e) => "ready" === e.status),
        H = "" !== f.trim() || x.length > 0,
        G = t && H && F,
        $ = i.useCallback(() => {
            if (!G) return;
            let e = A.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (s(f, e.length > 0 ? e : void 0), A.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            p(""), C([]);
        }, [G, f, s, C]),
        B = i.useCallback(
            (e) => {
                e.preventDefault(), $();
            },
            [$],
        ),
        U = i.useCallback(() => {
            null == r || _ || (N(!0), r());
        }, [r, _]),
        V = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != r && !_) {
                    e.preventDefault(), e.stopPropagation(), U();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != m && "" === f) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), p(m);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != u && (e.preventDefault(), u());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), $());
            },
            [$, u, l, r, _, U, m, f],
        ),
        q = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), L(n));
            },
            [t, L],
        ),
        z = i.useCallback(
            (e) => {
                e.preventDefault(), j(!1), t && L(Array.from(e.dataTransfer.files));
            },
            [t, L],
        ),
        W = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), j(!0));
        }, []),
        K = i.useCallback(
            (e) => {
                L(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [L],
        ),
        X = i.useRef(null),
        [Y, Z] = i.useState(0),
        [J, Q] = i.useState(!1);
    i.useEffect(() => {
        if (0 === f.length) return void Q(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = eE(e);
            null != t && Z(t);
        }
        Q(!0);
        let t = setTimeout(() => Q(!1), eN);
        return () => clearTimeout(t);
    }, [f]);
    let ee = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
        et = J ? ` ${ek.EB}` : "",
        en = null != m && "" === f;
    return (0, a.jsxs)("form", {
        onSubmit: B,
        onDrop: z,
        onDragOver: W,
        onDragLeave: () => j(!1),
        className: b ? `${ek.DA} ${ek.pV}` : ek.DA,
        children: [
            x.length > 0
                ? (0, a.jsx)("div", {
                      className: ek.lN,
                      children: x.map((e) => (0, a.jsx)(eA, { draft: e, onRemove: D }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ek.VA,
                ref: X,
                children: [
                    (0, a.jsx)("span", { className: `${ek.wg} ${ek.LP}${et}`, style: ee, "aria-hidden": !0 }),
                    (0, a.jsx)("span", { className: `${ek.wg} ${ek.L3}${et}`, style: ee, "aria-hidden": !0 }),
                    (0, a.jsx)("input", {
                        ref: E,
                        type: "file",
                        multiple: !0,
                        onChange: K,
                        className: ek.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    en
                        ? (0, a.jsx)("div", {
                              className: ek.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(ey, { text: m }),
                          })
                        : null,
                    (0, a.jsx)(ei.y, {
                        value: f,
                        onChange: (e) => p(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: q,
                        placeholder: n
                            ? P.intl.string(R.default.JeM47J)
                            : t
                              ? en
                                  ? ""
                                  : P.intl.string(l ? R.default["67PpcP"] : R.default.ahRdoJ)
                              : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: ek.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: ek.Sz,
                        children: [
                            (0, a.jsx)(es.m, {
                                text: P.intl.string(R.default.gUn10I),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: ek.Y0,
                                    disabled: !t,
                                    onClick: () => E.current?.click(),
                                    "aria-label": P.intl.string(R.default.gUn10I),
                                    children: (0, a.jsx)(er.P, { size: "sm", color: "currentColor" }),
                                }),
                            }),
                            (0, a.jsx)(es.m, {
                                text: P.intl.string(R.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: ek.Y0,
                                    disabled: null == h || !t || y,
                                    onClick: O,
                                    "aria-label": P.intl.string(R.default.B5gWPk),
                                    children: y
                                        ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ek.Rk })
                                        : (0, a.jsx)(eo.K, { size: "sm", color: "currentColor" }),
                                }),
                            }),
                            l && null != r
                                ? (0, a.jsx)(es.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: ek.AW,
                                          disabled: _,
                                          onClick: U,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(ec.w, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: ek.Mx,
                                          }),
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    g
                        ? (0, a.jsxs)("div", {
                              className: ek.fF,
                              children: [
                                  (0, a.jsx)("div", { className: ek.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: ek.rt,
                                      disabled: !G,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(ed.SendMessageIcon, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: ek.Mx,
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
let eN = 1500;
function eE(e) {
    let t = (eE.canvas ?? (eE.canvas = document.createElement("canvas"))).getContext("2d");
    if (null == t) return null;
    let n = window.getComputedStyle(e);
    t.font = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;
    let l = e.value.slice(0, e.selectionStart ?? e.value.length),
        a = l.slice(l.lastIndexOf("\n") + 1),
        i = parseFloat("" !== n.paddingInlineStart ? n.paddingInlineStart : "" !== n.paddingLeft ? n.paddingLeft : "0");
    return e.offsetLeft + i + t.measureText(a).width - e.scrollLeft;
}
function eA(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eb, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ek.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ek.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(eu.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
eE.canvas = null;
var eS = n(287809);
let eI = new Set([
    "thinking",
    "assistant_delta",
    "reply",
    "plan_proposed",
    "announcement",
    "task_started",
    "task_finished",
    "todos",
    "thinking_lifecycle",
    "compaction",
]);
function eC(e) {
    return "running" === e;
}
let eT = new Set([
    "assembling",
    "installing_deps",
    "building",
    "bundling",
    "committing",
    "built",
    "build_error",
    "healthchecking",
    "preview_connecting",
    "healthcheck_passed",
    "healthcheck_failed",
    "deploying",
    "preview_ready",
    "awaiting_auth",
]);
function eR(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function eP(e) {
    let { inheritedSummary: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = [],
        l = [],
        a = null;
    for (let i of e) {
        let e;
        if ("preview_screenshot" === i.kind) {
            let e =
                "preview_screenshot" === i.kind && null != i.screenshot_id && "" !== i.screenshot_id
                    ? [i.screenshot_id]
                    : [];
            null != a ? a.screenshots.push(...e) : l.push(...e);
            continue;
        }
        "healthchecking" === i.kind && ((l = []), (a = null)), "healthcheck_failed" === i.kind && (l = []);
        let s = (function (e) {
                let t = [];
                return (
                    null != e.name && "" !== e.name && t.push(e.name),
                    null != e.detail && "" !== e.detail && t.push(e.detail),
                    null != e.message && "" !== e.message && t.push(e.message),
                    null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                    t
                );
            })(i),
            r = n[n.length - 1];
        if (eR(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eR(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eL(i),
            c = s.filter((e) => e !== o);
        if (null != r && r.summary === o) r.technical.push(...c), (e = r);
        else if (n.length > 0 && eT.has(i.kind) && eT.has(n[n.length - 1].step.kind)) {
            let t = n[n.length - 1];
            t.technical.push(t.summary, ...c), (t.summary = o), (t.step = i), (e = t);
        } else (e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e);
        "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eM(e) {
    let t,
        { turnActive: n = !0, inheritedSummary: l } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = [],
        i = new Map(),
        s = [],
        r = new Map(),
        o = null,
        c = null,
        d = null,
        u = null,
        h = [],
        m = null,
        f = l,
        p = !1;
    function g() {
        null != u && (u.groups = eP(h, { inheritedSummary: t })), (u = null), (h = []);
    }
    function x() {
        g(), (m = null), (d = null), (p = !1);
    }
    function v(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == d && ((d = { type: "activity", key: `activity-${e}`, blocks: [] }), (p = t), a.push(d)), d;
    }
    for (let [n, l] of e.entries()) {
        if (null != l.task_id && "" !== l.task_id) {
            let e = (function (e, t) {
                let n = e.task_id,
                    l = i.get(n);
                if (null != l) {
                    "task_started" === e.kind &&
                        null != e.task_title &&
                        "" !== e.task_title &&
                        (l.title = e.task_title);
                    let t = r.get(n);
                    return (
                        null != t &&
                            null == t.label &&
                            null != e.task_group_label &&
                            "" !== e.task_group_label &&
                            (t.label = e.task_group_label),
                        l
                    );
                }
                let a = null != e.task_group_label && "" !== e.task_group_label ? e.task_group_label : void 0;
                null != m &&
                    m.groupId !== e.task_group_id &&
                    ((m = null), null != a && null != d && null != d.label && d.label !== a && x()),
                    p && x();
                let c = v(t);
                null == c.label && null != a && (c.label = a), g(), (o = null);
                let u = {
                    taskId: n,
                    title: null != e.task_title && "" !== e.task_title ? e.task_title : P.intl.string(R.default.MdXWEK),
                    state: "running",
                    groups: [],
                    rawSteps: [],
                };
                return (
                    i.set(n, u),
                    r.set(n, c),
                    s.push(u),
                    null == m &&
                        ((m = {
                            type: "workstreams",
                            key: `workstreams-${t}`,
                            ...(null != e.task_group_id ? { groupId: e.task_group_id } : {}),
                            tasks: [],
                        }),
                        c.blocks.push(m)),
                    m.tasks.push(u),
                    u
                );
            })(l, n);
            if ("task_finished" === l.kind) {
                null != l.task_state && (e.state = l.task_state),
                    null != l.detail && "" !== l.detail && (e.detail = l.detail);
                continue;
            }
            if (eI.has(l.kind)) continue;
            e.rawSteps.push(l);
            continue;
        }
        if ("thinking" === l.kind) {
            o = null;
            continue;
        }
        if ("assistant_delta" === l.kind) {
            let e = l.message ?? "";
            "" !== e &&
                (null == o
                    ? (x(), (o = { type: "message", key: `message-${n}`, content: e }), a.push(o))
                    : (o.content = e)),
                !0 === l.message_finished && (o = null);
            continue;
        }
        if ("announcement" === l.kind) {
            let e = l.message ?? "";
            "" !== e && (x(), (o = null), a.push({ type: "note", key: `note-${n}`, content: e }));
            continue;
        }
        if ("todos" === l.kind) {
            let e = l.items ?? [];
            e.length > 0 &&
                (null != c
                    ? (c.todos = e)
                    : (x(), (o = null), (c = { type: "todos", key: `todos-${n}`, todos: e }), a.push(c)));
            continue;
        }
        if (eI.has(l.kind)) continue;
        let e = eR(l);
        !e && p && x();
        let b = v(n, e && null != f);
        (o = null),
            (m = null),
            null == u && ((u = { type: "rows", key: `rows-${n}`, groups: [] }), (t = f), b.blocks.push(u)),
            h.push(l),
            e || (f = eL(l));
    }
    for (let e of (g(), s)) {
        e.groups = eP(e.rawSteps);
        let t = e.groups[e.groups.length - 1]?.summary;
        null != t && (e.latestActivity = t), !n && eC(e.state) && (e.state = "incomplete");
    }
    for (let e of a)
        "activity" === e.type &&
            (function (e) {
                let { label: t } = e;
                if (null == t || "" === t) return;
                let [n, ...l] = e.blocks;
                l.length > 0 ||
                    null == n ||
                    "workstreams" !== n.type ||
                    (n.tasks.every((e) => e.groups.length > 0 && e.groups.every((e) => e.summary === t)) &&
                        delete e.label);
            })(e);
    return { items: a, tasks: s };
}
function eL(e) {
    switch (e.kind) {
        case "thinking":
            return P.intl.string(R.default.K7TkAL);
        case "writing_command":
            return e.friendly ?? P.intl.string(R.default.nv6pUM);
        case "assembling":
            return P.intl.string(R.default["9G3ZmA"]);
        case "installing_deps":
            return P.intl.string(R.default.VZuRug);
        case "building":
            return P.intl.string(R.default["s+ylXP"]);
        case "bundling":
            return P.intl.string(R.default.rEQlMx);
        case "committing":
            return P.intl.string(R.default.Yvyw1H);
        case "built":
            return P.intl.string(R.default.hOcVAj);
        case "build_error":
            return P.intl.string(R.default["6L9Vwt"]);
        case "healthchecking":
        case "preview_connecting":
            return P.intl.string(R.default.sz8yAj);
        case "awaiting_auth":
            return P.intl.string(R.default["orD+xo"]);
        case "healthcheck_passed":
            return P.intl.string(R.default["x+sqTG"]);
        case "healthcheck_failed":
            return P.intl.string(R.default.FUWbq1);
        case "deploying":
            return P.intl.string(R.default.wcXX8Z);
        case "preview_ready":
            return P.intl.string(R.default["78YNh7"]);
        case "error":
        case "terminal_error":
            return P.intl.string(R.default.j3hBoA);
        default:
            return P.intl.string(R.default.nv6pUM);
    }
}
n(134528), n(947204);
var eO = n(46054),
    eD = n(13699);
function eF(e) {
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
                className: I()(eD.Z$, eD.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: I()(eD.Z$, eD.Q_),
            }),
        ],
    });
}
var eH = n(847374),
    eG = n(320448);
let e$ = i.createContext(0);
function eB(e) {
    let { glyph: t, line: n, live: l, settled: s, tint: r, detail: o, connected: c = !1, connectsDown: d = !1 } = e,
        [u, m] = i.useState(!1),
        f = i.useContext(e$),
        p = i.useId(),
        g = i.useCallback(() => m((e) => !e), []),
        { line: x, phase: v } = (function (e) {
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
                { line: t, phase: l }
            );
        })(n),
        b = u ? eH.a : eG._,
        j = null != o,
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eD.hd, children: t }),
                (0, a.jsx)(h.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: I()(eD.qo, { [eD._q]: "exit" === v, [eD.GD]: "enter" === v }),
                    children: x,
                }),
                j ? (0, a.jsx)(b, { size: "xs", color: "currentColor", className: eD.nD }) : null,
            ],
        }),
        y = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eD.$m, children: k }, `face-${f}`),
                l
                    ? (0, a.jsx)("span", { className: I()(eD.$m, eD.pw), "aria-hidden": !0, children: k }, `shine-${f}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eD.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": c,
        "data-connects-down": d,
        style: null != r ? { "--custom-vibegrations-shimmer-tint": r } : void 0,
        children: [
            j
                ? (0, a.jsx)(ep.D, {
                      tag: "div",
                      className: I()(eD.ep, eD.EK),
                      "aria-expanded": u,
                      "aria-controls": p,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: x }),
                      onClick: g,
                      children: y,
                  })
                : (0, a.jsx)("div", { className: eD.ep, children: y }),
            (0, a.jsx)("div", { id: p, hidden: !u, className: eD.BA, children: o }),
        ],
    });
}
let eU = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    eV = /^(.*?)\s*\((\d+ lines|\d+ matches|no matches)\)$/;
function eq(e) {
    let { text: t } = e,
        n = eU.exec(t),
        l = n?.[2],
        i = n?.[3];
    if (null != n && (null != l || null != i))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                n[1],
                null == l ? null : (0, a.jsxs)("span", { className: eD.MM, children: [" ", l] }),
                null == i ? null : (0, a.jsxs)("span", { className: eD.ie, children: [" ", i] }),
            ],
        });
    let s = eV.exec(t);
    if (null == s) return t;
    let r = "no matches" === s[2];
    return (0, a.jsxs)(a.Fragment, {
        children: [s[1], (0, a.jsxs)("span", { className: r ? eD.Hi : eD.qZ, children: [" ", s[2]] })],
    });
}
var ez = n(256905),
    eW = n(229775);
function eK(e) {
    var t;
    let n,
        { projectId: l, group: s, presentation: r = "row", active: o = !1 } = e,
        [c, d] = i.useState(!1),
        u = i.useId(),
        m = i.useCallback(() => d((e) => !e), []),
        f =
            ((t = s.step.kind),
            (n =
                "error" === t || "terminal_error" === t || "build_error" === t
                    ? "text-feedback-critical"
                    : "text-default"),
            "detail" === r && "text-default" === n ? "text-muted" : n),
        p = "text-muted" === f,
        g = o && p ? "none" : c && p ? "currentColor" : f,
        x = I()(eD.iq, { [eW.Hz]: o && p }),
        v = "detail" === r ? "text-md/normal" : "text-sm/normal",
        b = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        j = null != l ? s.screenshots : [];
    if (0 === s.technical.length && 0 === j.length)
        return (0, a.jsx)("li", {
            "data-step-kind": s.step.kind,
            className: eD.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: v,
                color: g,
                selectable: !0,
                className: x,
                children: (0, a.jsx)(eq, { text: s.summary }),
            }),
        });
    let k = c ? eH.a : eG._;
    return (0, a.jsxs)("li", {
        "data-step-kind": s.step.kind,
        className: eD.Dx,
        children: [
            (0, a.jsxs)(ep.D, {
                tag: "div",
                className: eD.kG,
                "aria-expanded": c,
                "aria-controls": u,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: s.summary }),
                onClick: m,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: v,
                        color: g,
                        className: x,
                        children: (0, a.jsx)(eq, { text: s.summary }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eD.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: u,
                hidden: !c,
                className: eD.yJ,
                children: [
                    s.technical.map((e, t) =>
                        (0, a.jsx)(
                            h.E,
                            {
                                tag: "div",
                                variant: b,
                                color: o && p ? "none" : "text-muted",
                                selectable: !0,
                                className: I()({ [eW.Hz]: o && p }),
                                children: (0, a.jsx)(eq, { text: e }),
                            },
                            t,
                        ),
                    ),
                    null != l && j.length > 0
                        ? (0, a.jsx)("div", {
                              className: eD.y8,
                              children: j.map((e) => (0, a.jsx)(eY, { projectId: l, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eX() {}
function eY(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, s] = i.useState(null),
        [r, c] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, o.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || c(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let d = P.intl.string(R.default["3Hq9pQ"]),
        u = i.useCallback(() => {
            (0, o.aF)(t, n).then((e) => {
                (0, ez.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eX);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(ej, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
function eZ(e) {
    let { group: t, live: n } = e;
    return 0 === t.technical.length
        ? null
        : (0, a.jsx)("li", {
              "data-step-kind": t.step.kind,
              className: eD.Dx,
              children: t.technical.map((e, t) =>
                  (0, a.jsx)(
                      h.E,
                      {
                          tag: "div",
                          variant: "text-md/normal",
                          color: n ? "none" : "text-muted",
                          selectable: !0,
                          className: I()(eD.iq, { [eW.Hz]: n }),
                          children: (0, a.jsx)(eq, { text: e }),
                      },
                      t,
                  ),
              ),
          });
}
function eJ(e) {
    let { projectId: t, item: n, live: l, durationMs: i, connectsDown: s = !1 } = e,
        r = n.blocks.flatMap((e) => ("rows" === e.type ? e.groups : [])),
        o = r.at(-1),
        c =
            null != i
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return P.intl.formatToPlainString(R.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? P.intl.formatToPlainString(R.default.NkZO2t, { count: n })
                          : P.intl.formatToPlainString(R.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(i)
                : (o?.summary ?? (null != n.label && "" !== n.label ? n.label : P.intl.string(R.default.nv6pUM))),
        d = r.some((e) => e !== o || e.technical.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eB, {
        glyph: (0, a.jsx)(eF, {}),
        line: c,
        live: l,
        settled: null != i,
        connectsDown: s,
        detail: d
            ? (0, a.jsx)("ol", {
                  className: eD.dO,
                  children: r.map((e, n) =>
                      e === o && 0 === e.screenshots.length
                          ? (0, a.jsx)(eZ, { group: e, live: l }, n)
                          : (0, a.jsx)(eK, { projectId: t, group: e, presentation: "detail", active: l && e === o }, n),
                  ),
              })
            : void 0,
    });
}
var eQ = n(424110);
function e0(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        r = !0 === t.recommended,
        o = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ep.D, {
        className: I()(eQ.uK, { [eQ.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(r ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": o ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": r ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: eQ.l8,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: eQ.ed,
                        children: t.label,
                    }),
                    r
                        ? (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: eQ.rM,
                              children: P.intl.string(R.default.OXRWyV),
                          })
                        : null,
                ],
            }),
            o
                ? (0, a.jsx)(h.E, {
                      tag: "span",
                      id: s,
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: t.detail,
                  })
                : null,
        ],
    });
}
function e1(e) {
    let { clarification: t, onSubmit: n } = e,
        [l, s] = i.useState({}),
        [r, o] = i.useState({}),
        [c, d] = i.useState(0),
        u = null == n,
        m = t.questions.length,
        f = Math.min(c, m - 1),
        p = t.questions[f],
        g = i.useCallback(
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
        x = i.useCallback(
            (e) => {
                if (u) return;
                let n = { ...l, [p.id]: e };
                s(n);
                let a = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, f);
                null == a ? g(n) : d(a);
            },
            [l, t, u, f, p.id, g],
        ),
        v = i.useCallback(() => {
            if (u || 0 === f) return;
            let e = t.questions[f - 1];
            s((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                o((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                d(f - 1);
        }, [t, u, f]),
        b = f > 0 && !u,
        j = r[p.id] ?? "",
        k = i.useCallback(() => {
            let e = j.trim();
            "" !== e && x({ kind: "custom", text: e });
        }, [j, x]);
    return (0, a.jsxs)("section", {
        className: eQ.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": u ? "inert" : "open",
        "data-step": f,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: eQ.qB,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: eQ.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: f + 1, total: m }),
                          }),
                          (0, a.jsx)(ep.D, {
                              className: I()(eQ.aX, { [eQ.uh]: !b }),
                              onClick: b ? v : void 0,
                              tabIndex: b ? 0 : -1,
                              "aria-hidden": !b,
                              "aria-disabled": u,
                              "aria-label": P.intl.string(R.default.KYpgvZ),
                              "data-vibegrations-clarification-back": !0,
                              "data-hidden": b ? void 0 : "true",
                              children: (0, a.jsx)(h.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "none",
                                  children: P.intl.string(R.default.yKdgqw),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(h.E, {
                tag: "div",
                id: `${p.id}-label`,
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: p.question,
            }),
            (0, a.jsx)("div", {
                className: eQ.fF,
                role: "group",
                "aria-labelledby": `${p.id}-label`,
                children: p.options.map((e) =>
                    (0, a.jsx)(
                        e0,
                        { option: e, disabled: u, onPick: (e) => x({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: eQ.F,
                children: (0, a.jsx)(ei.y, {
                    value: j,
                    onChange: (e) => {
                        let { value: t } = e.currentTarget;
                        o((e) => ({ ...e, [p.id]: t }));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), k());
                    },
                    placeholder: P.intl.string(R.default.qifsdL),
                    "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: p.question }),
                    disabled: u,
                    rows: 1,
                    className: eQ.Pu,
                    "data-vibegrations-clarification-other": p.id,
                }),
            }),
        ],
    });
}
var e2 = n(443865),
    e6 = n(113757);
function e5(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        s = null == n;
    return (0, a.jsxs)(ep.D, {
        className: s ? `${e6.Nr} ${e6.xe}` : e6.Nr,
        onClick: s ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": s,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: e6.JJ,
                children: t.title,
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      id: l,
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: t.value,
                  }),
        ],
    });
}
function e3(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: e6.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: e6.wx,
                children: [
                    (0, a.jsx)(e2.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: P.intl.string(R.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(e5, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function e4(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: e6.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: e6.I1,
                children: P.intl.string(R.default.tG5PBo),
            }),
            (0, a.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: P.intl.string(R.default.cwTe5o),
            }),
        ],
    });
}
var e7 = n(375068);
function e8(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(e9);
    return (0, a.jsx)("div", {
        className: e7.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(te, { name: e.name }, n)
                : e9(e)
                  ? (0, a.jsx)(tn, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(tt, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function e9(e) {
    return null != e.id && em.Wb.has(e.content_type);
}
function te(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eb, { name: l, compact: !0 });
}
function tt(e) {
    let { projectId: t, id: n, name: l } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, o.n6)(t, n).then(
                (t) => {
                    e || t || r(!0);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let c = i.useCallback(() => {
        Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n, { download: !0 })]).then(
            (e) => {
                let [t, n] = e;
                if (!t) return void r(!0);
                let l = document.createElement("a");
                (l.href = n), (l.target = "_blank"), (l.rel = "noopener noreferrer"), l.click();
            },
            () => {},
        );
    }, [t, n]);
    return s
        ? (0, a.jsx)(te, { name: l, unavailable: !0 })
        : (0, a.jsx)(ej, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function tn(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l } = e,
        { id: s, name: r } = n[l],
        [c, d] = i.useState(null),
        [u, h] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, s), (0, o.PK)(t, s)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? d(l) : h(!0));
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, s]);
    let m = i.useCallback(() => {
        Promise.all(
            n.map((e) =>
                Promise.all([(0, o.n6)(t, e.id), (0, o.PK)(t, e.id)]).then(
                    (t) => {
                        let [n, l] = t;
                        return n ? { type: "IMAGE", url: l, alt: e.name } : "unavailable";
                    },
                    () => "error",
                ),
            ),
        ).then((e) => {
            let t = e[l];
            "unavailable" === t
                ? h(!0)
                : "error" !== t &&
                  (0, ez.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(te, { name: r, unavailable: !0 })
        : (0, a.jsx)(ej, {
              name: r,
              thumbSrc: c,
              ariaLabel: P.intl.formatToPlainString(R.default.QUFLUq, { name: r }),
              onClick: m,
              onThumbError: () => {
                  d(null),
                      (0, o.n6)(t, s).then(
                          (e) => {
                              e || h(!0);
                          },
                          () => {},
                      );
              },
          });
}
var tl = n(824757);
function ta(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: tl.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: tl.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tl.uR,
                                  children: (0, a.jsx)(h.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
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
              ],
          });
}
function ti(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: tl.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: tl.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: P.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: tl.dr,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: P.intl.string(P.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: tl.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: tl.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: tl.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: tl.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            t.commands.length > 0
                ? (0, a.jsxs)("section", {
                      className: tl.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(P.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: tl.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: tl.Xs,
                                          children: [
                                              (0, a.jsxs)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
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
                      ],
                  })
                : null,
            (0, a.jsx)(ta, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(ta, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: tl.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: P.intl.string(R.default.GYoWRk),
                          }),
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: tl.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ts = n(192308),
    tr = n(479191);
function to(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, ts.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: tr.Lo,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(h.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsxs)("div", {
                className: tr.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: tr.$H,
                                children: (0, a.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    tag: "span",
                                    children: e.label,
                                }),
                            },
                            e.name,
                        ),
                    ),
                    null != l.connection
                        ? (0, a.jsx)("span", {
                              className: tr.$H,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: P.intl.formatToPlainString(R.default["/64HKW"], {
                                      platform: l.connection.label,
                                  }),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("div", {
                className: tr.sq,
                children: (0, a.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
function tc(e) {
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
function td(e) {
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
function tu(e) {
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
function th(e) {
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
function tm(e) {
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
function tf(e) {
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
function tp(e) {
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
function tg(e) {
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
function tx(e) {
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
function tv(e) {
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
function tb(e) {
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
function tj(e) {
    return P.intl.string(e);
}
function tk(e) {
    let { task: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = eC(t.state),
        o = t.groups.at(-1),
        c = r
            ? (t.latestActivity ?? t.title)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(e.title);
                  switch (e.state) {
                      case "failed":
                          return P.intl.formatToPlainString(R.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(R.default["oEzDO/"], { task: t });
                      default:
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                  }
              })(t),
        d =
            0 === t.groups.length && (null == t.detail || "" === t.detail)
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eD.dO,
                                    children: t.groups.map((e, t) =>
                                        (0, a.jsx)(eK, { group: e, presentation: "detail", active: r && e === o }, t),
                                    ),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)("div", { className: eD.iq, children: t.detail })
                              : null,
                      ],
                  });
    return (0, a.jsx)(eB, {
        glyph: (0, a.jsx)(es.m, {
            text: i,
            position: "left",
            children: (0, a.jsx)("span", {
                className: eD.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: r,
        settled: !r,
        tint: l,
        detail: d,
        connected: !0,
        connectsDown: s,
    });
}
var ty = n(165648);
function tw(e) {
    let { projectId: t, steps: n, active: l = !1, inheritedActivity: s, durationMs: r, interrupted: o = !1 } = e,
        c = i.useMemo(() => eM(n, { turnActive: l, inheritedSummary: s }), [n, l, s]);
    if (o)
        return (0, a.jsx)("ol", {
            className: eD.pj,
            "data-live": !1,
            children: (0, a.jsx)(eB, {
                glyph: (0, a.jsx)(ec.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let d = c.items.flatMap((e) => ("activity" === e.type ? [e] : []));
    if (0 === d.length) return null;
    let u = {
            type: "activity",
            key: d[0].key,
            ...(d.find((e) => null != e.label)?.label != null ? { label: d.find((e) => null != e.label)?.label } : {}),
            blocks: d.flatMap((e) => e.blocks),
        },
        h = u.blocks.flatMap((e) => ("workstreams" === e.type ? e.tasks : [])),
        m = (function (e) {
            let t = [
                    { Illocon: tc, tint: "var(--illo-yellow-40)", name: tj(R.default["2l3AEQ"]) },
                    { Illocon: td, tint: "var(--illo-orange-40)", name: tj(R.default["+FPL+I"]) },
                    { Illocon: tu, tint: "var(--illo-green-40)", name: tj(R.default.w4GOfR) },
                    { Illocon: th, tint: "var(--illo-pink-40)", name: tj(R.default.XmZT9M) },
                    { Illocon: tm, tint: "var(--illo-pink-40)", name: tj(R.default.NnydwQ) },
                    { Illocon: tf, tint: "var(--illo-green-40)", name: tj(R.default["4iXcNT"]) },
                    { Illocon: tp, tint: "var(--illo-purple-40)", name: tj(R.default.DoTGt5) },
                    { Illocon: tg, tint: "var(--illo-yellow-40)", name: tj(R.default["9zxqmP"]) },
                    { Illocon: tx, tint: "var(--illo-orange-40)", name: tj(R.default.HF0T3L) },
                    { Illocon: tv, tint: "var(--illo-yellow-40)", name: tj(R.default.XTzDga) },
                    { Illocon: tb, tint: "var(--illo-purple-40)", name: tj(R.default.abtC2b) },
                ],
                n = 0;
            for (let l of e) for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
            let l = new Map();
            return (
                e.forEach((e, a) => {
                    l.set(e, t[(n + a) % t.length]);
                }),
                l
            );
        })(h.map((e) => e.taskId)),
        f = l || h.some((e) => eC(e.state));
    return (0, a.jsx)(e$.Provider, {
        value: h.length,
        children: (0, a.jsxs)("ol", {
            className: eD.pj,
            "data-live": f,
            children: [
                (0, a.jsx)(eJ, { projectId: t, item: u, live: l, durationMs: r, connectsDown: h.length > 0 }),
                h.map((e, t) => {
                    let n = m.get(e.taskId);
                    return null == n
                        ? null
                        : (0, a.jsx)(
                              tk,
                              {
                                  task: e,
                                  Illocon: n.Illocon,
                                  tint: n.tint,
                                  name: n.name,
                                  connectsDown: t < h.length - 1,
                              },
                              e.taskId,
                          );
                }),
            ],
        }),
    });
}
function t_(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: s,
            active: r = !1,
            onApprove: o,
            ideas: c,
            clarification: d,
            onAnswerClarification: u,
            attachments: m,
            secretRequest: f,
            onPickIdea: p,
            offerIdeas: g,
            onAskForIdeas: x,
            inheritedActivity: v,
            sideReply: b = !1,
        } = e,
        { items: j } = i.useMemo(() => eM(n, { turnActive: r, inheritedSummary: v }), [n, r, v]),
        k = j.at(-1),
        y = j.flatMap((e) => ("message" === e.type ? [e] : [])),
        w = k?.type === "message" && k.content.trim() === l.trim(),
        _ = null != d && d.questions.length > 0,
        N = null == s && "" !== l && !w && !_,
        E = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, lastItemType: l } = e;
            return t ? (n ? "closing" : "message" === l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != m && m.length > 0, showsClosingMessage: N, lastItemType: k?.type }),
        A = null == m ? null : (0, a.jsx)(e8, { projectId: t, attachments: m }),
        S = null == A ? null : (0, a.jsx)("div", { className: eD.MT, children: A }),
        C = b
            ? (0, a.jsx)(h.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eD.ue,
        children: [
            y.length > 0
                ? (0, a.jsx)("ol", {
                      className: eD.dO,
                      children: y.map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: I()(eD.ky, eW.XR),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: I()(ty.PT, eD.cW),
                                          children: eO.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === E && e.key === k?.key ? S : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, a.jsx)("div", {
                      className: I()(eD.ky, eW.XR),
                      children: (0, a.jsx)(ti, { proposal: s, onApprove: o }),
                  })
                : N
                  ? (0, a.jsxs)("div", {
                        className: I()(eD.ky, eW.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: I()(ty.PT, eD.cW),
                                children: eO.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === E ? S : null,
                            C,
                            !0 === g
                                ? (0, a.jsx)("div", { className: eD.IN, children: (0, a.jsx)(e4, { onAsk: x }) })
                                : null,
                        ],
                    })
                  : null,
            null != f
                ? (0, a.jsx)("div", {
                      className: I()(eD.ky, eW.XR),
                      children: (0, a.jsx)(to, { projectId: t, request: f }),
                  })
                : null,
            "standalone" === E ? (0, a.jsx)("div", { className: I()(eD.ky, eW.XR), children: S }) : null,
            _
                ? (0, a.jsx)("div", {
                      className: I()(eD.ky, eW.XR),
                      children: (0, a.jsx)(e1, { clarification: d, onSubmit: u }),
                  })
                : null,
            null != c && c.length > 0
                ? (0, a.jsx)("div", { className: I()(eD.ky, eW.XR), children: (0, a.jsx)(e3, { ideas: c, onPick: p }) })
                : null,
            !0 !== g || N
                ? null
                : (0, a.jsx)("div", { className: I()(eD.ky, eW.XR), children: (0, a.jsx)(e4, { onAsk: x }) }),
            N ? null : C,
        ],
    });
}
var tN = n(320095),
    tE = n(963852),
    tA = n(763754),
    tS = n(491182),
    tI = n(20851),
    tC = n(375199),
    tT = n(715628),
    tR = n(752636),
    tP = n(95701),
    tM = n(441136);
let tL = (0, tP.createChannelRecord)({ id: "vibegrations-builder", type: N.rbe.DM }),
    tO = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function tD(e, t) {
    return null != e && t ? (0, a.jsx)("div", { className: tM.Yq, children: e }) : e;
}
function tF(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function tH(e) {
    let { content: t, createdAt: n, userId: l, accessories: s } = e,
        r = (0, k.bG)([eS.default], () => (null != l ? eS.default.getUser(l) : null) ?? eS.default.getCurrentUser(), [
            l,
        ]),
        o = i.useMemo(() => (0, tA.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, tE.Ay)({ channelId: tL.id, content: t, author: r });
            return (0, tN.rh)({ ...e, timestamp: tF(n, e.timestamp), state: N.cmJ.SENT });
        }, [t, r, n]);
    return null == c
        ? null
        : null == s
          ? (0, a.jsx)(tI.A, { message: c, author: o, channel: tL, isGroupStart: !0, disableInteraction: !0 })
          : (0, a.jsx)(tS.A, {
                className: tM.yE,
                author: o,
                childrenHeader: (0, tR.A)({ message: c, channel: tL, author: o, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? void 0 : null,
                childrenAccessories: tD(s, "" !== t),
                disableInteraction: !0,
            });
}
function tG(e) {
    let { content: t, createdAt: n, accessories: l } = e,
        s = i.useMemo(() => (0, tA.FT)(null, null), []),
        r = i.useMemo(() => ({ ...s, nick: "Conjure", colorString: "var(--text-brand)" }), [s]),
        o = i.useMemo(() => {
            let e = (0, tE.Ay)({ channelId: tL.id, content: t, author: tO });
            return (0, tN.rh)({ ...e, timestamp: tF(n, e.timestamp), state: N.cmJ.SENT });
        }, [t, n]),
        { content: c } = (0, tC.A)(o, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        d = i.useMemo(() => ({ message: o, channel: tL, compact: !1, groupId: o.id }), [o]);
    return (0, a.jsxs)("div", {
        className: tM.$4,
        children: [
            (0, a.jsx)(tS.A, {
                className: tM.yE,
                author: r,
                childrenHeader: (0, tR.A)({ message: o, channel: tL, author: r, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? (0, tT.A)(d, c) : null,
                childrenAccessories: tD(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: tM.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(u.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
function t$(e, t) {
    let n = e[t]?.turn_id;
    if (null != n)
        for (let l = t - 1; l >= 0; l--) {
            let t = e[l];
            if (null != t && "assistant" === t.role && "side_reply" !== t.kind)
                return !0 === t.continued && t.turn_id === n
                    ? (function (e) {
                          for (let t = e.length - 1; t >= 0; t--) {
                              let n = e[t];
                              if (null != n && (null == n.task_id || "" === n.task_id) && !(eI.has(n.kind) || eR(n)))
                                  return eL(n);
                          }
                      })(t.steps)
                    : void 0;
        }
}
let tB = {
    steered: R.default.I9TkzD,
    queued: R.default.gbjY6o,
    restarting: R.default["1Q4Cs2"],
    answered: R.default["J6WZ+x"],
};
function tU(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAskForIdeas: r, onAnswerClarification: o } = e,
        c = (0, k.bG)([eS.default], () => eS.default.getCurrentUser()),
        d = n[n.length - 1];
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              className: e7.x7,
              children: (0, a.jsx)(tV, {
                  role: "assistant",
                  children: (0, a.jsx)(tG, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              className: e7.x7,
              children: n.map((e, u) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          tV,
                          {
                              role: "user",
                              children: (0, a.jsx)(tH, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? c?.id,
                                  accessories:
                                      null != n || null != e.disposition
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    null != n ? (0, a.jsx)(e8, { projectId: t, attachments: n }) : null,
                                                    null != e.disposition
                                                        ? (0, a.jsx)(h.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: P.intl.string(tB[e.disposition]),
                                                          })
                                                        : null,
                                                ],
                                            })
                                          : void 0,
                              }),
                          },
                          e.render_id,
                      );
                  }
                  let m = e.steps.filter((e) => !eI.has(e.kind)).length > 0,
                      f = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                      p = "plan_implemented" === e.kind && e === d,
                      g = null != e.clarification && e === d,
                      x =
                          "" !== e.content ||
                          null != e.proposal ||
                          null != e.ideas ||
                          null != e.clarification ||
                          null != e.secretRequest ||
                          p ||
                          f ||
                          (e.attachments?.length ?? 0) > 0,
                      v = !0 === e.interrupted;
                  return m || x || v
                      ? (0, a.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    m || v
                                        ? (0, a.jsx)(tV, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tw, {
                                                  projectId: t,
                                                  interrupted: v,
                                                  steps: e.steps,
                                                  active: !(0, el.BL)(e),
                                                  inheritedActivity: t$(n, u),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                              }),
                                          })
                                        : null,
                                    x
                                        ? (0, a.jsx)(tV, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tG, {
                                                  content: e.content,
                                                  createdAt: e.created_at,
                                                  accessories: (0, a.jsx)(t_, {
                                                      projectId: t,
                                                      steps: e.steps,
                                                      announcement: e.announcement,
                                                      content: "",
                                                      proposal: e.proposal,
                                                      interrupted: !0 === e.interrupted,
                                                      provisionalTodo: e.provisionalTodo,
                                                      active: !(0, el.BL)(e),
                                                      todos: e.todos,
                                                      onApprove: e === d ? l : void 0,
                                                      ideas: e.ideas,
                                                      clarification: g ? e.clarification : void 0,
                                                      onAnswerClarification: o,
                                                      attachments: e.attachments,
                                                      secretRequest: e.secretRequest,
                                                      onPickIdea: s,
                                                      offerIdeas: p,
                                                      onAskForIdeas: r,
                                                      inheritedActivity: t$(n, u),
                                                      sideReply: "side_reply" === e.kind,
                                                  }),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            e.render_id,
                        )
                      : null;
              }),
          });
}
function tV(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: e7.xk, children: n });
}
var tq = n(311656),
    tz = n(922016),
    tW = n(863610),
    tK = n(495557);
function tX(e) {
    let { activity: t, id: n } = e,
        l = t?.text ?? "",
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: tK.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(en.Ch, {
                ref: s,
                className: tK.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: I()(ty.PT, tK.bb),
                    children: eO.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var tY = n(921461);
function tZ(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = i.useRef(null),
        s = i.useId(),
        [r, o] = i.useState(null),
        c = null != t && "end" !== t.phase,
        d = n ? R.default["0vH/5G"] : c ? R.default.Ly7F7x : R.default.QDGuNS,
        u = null != t && "" !== t.text,
        m = t?.session ?? null,
        f = u && null != m && r === m,
        p = i.useCallback(() => {
            u && null != m && o((e) => (e === m ? null : m));
        }, [u, m]),
        g = i.useCallback(() => o(null), []);
    return (0, a.jsx)(tz.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: f,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(tX, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(ep.D, {
                innerRef: l,
                className: I()(tY.h, u && tY.X),
                "aria-label": P.intl.string(R.default.SzdX35),
                "aria-expanded": f,
                "aria-describedby": f ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)(tW.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: P.intl.string(d),
                    }),
                ],
            }),
    });
}
var tJ = n(662546),
    tQ = n(820081),
    t0 = n(329456);
function t1(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: t0.Vn,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(R.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(R.default["oK+fmd"]);
                default:
                    return P.intl.string(R.default.d7lieu);
            }
        })(t),
        children: "completed" === t ? (0, a.jsx)(tQ.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function t2(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function t6(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: t0.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: t0.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(t1, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: t0.ku,
                                selectable: !0,
                                children: e.text,
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: t0.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t1, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: t0.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function t5(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = t2(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: t0.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: t0.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: t0.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], {
                                            completed: i,
                                            total: s,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(t6, { todos: t, provisional: n }),
              ],
          });
}
var t3 = n(233263);
function t4(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: t3.B,
        role: "dialog",
        "aria-label": P.intl.string(R.default.qCRC6c),
        children: (0, a.jsx)(t5, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function t7(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = t2(t);
    return 0 === r
        ? null
        : (0, a.jsx)(tz.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(t4, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(ep.D, {
                      innerRef: l,
                      className: t3.T,
                      "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(tJ.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: P.intl.formatToPlainString(R.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var t8 = n(885574),
    t9 = n(280894);
function ne(e) {
    return e.toLocaleString();
}
function nt(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: t9.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: t9.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ne((0, em.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ne(n.input_tokens),
                    " in \xb7 ",
                    ne(n.output_tokens),
                    " out \xb7 ",
                    ne(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    ne(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nn(e) {
    let { project: t } = e,
        n = (0, em.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: t9.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: t9.Q$,
                children: (0, a.jsxs)("div", {
                    className: t9.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ne((0, em.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nt, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nt, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: t9.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, em.sj)(n) ? "\u2014" : `${Math.round(100 * (0, em.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nl(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tz.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nn, { project: t }),
        children: (e) =>
            (0, a.jsx)(ep.D, {
                innerRef: n,
                className: t9.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(t8.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var na = n(258216);
function ni(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function ns(e) {
    let {
        thinking: t,
        thinkingActivity: n,
        compacting: l,
        todos: i,
        provisionalTodo: s,
        projectUsage: r,
        connState: o,
        modelSettings: c,
        onModelSettingsChange: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: na.jf,
        children: [
            (0, a.jsx)("div", {
                className: na.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(tZ, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(tq.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == i || 0 === i.length ? null : (0, a.jsx)(t7, { todos: i, provisional: s }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: na.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, em.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, em.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nl, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: ni(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: na.XF,
                      children: ni(o),
                  }),
        ],
    });
}
var nr = n(506774),
    no = n(651649),
    nc = n(670455);
let nd = "shownVibegrationsFeedbackProjectIds";
var nu = n(348800);
let nh = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["7MCiK9"])];
function nm(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, k.bG)([el.Ay], () => el.Ay.getMessages(t), [t]),
        r = (0, k.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, k.bG)([o.Ay], () => o.Ay.isChatStopped(t), [t]),
        d = (0, k.bG)([el.Ay], () => el.Ay.getProjectUsage(t), [t]),
        u = (0, k.bG)([el.Ay], () => el.Ay.getThinkingActivity(t), [t]),
        h = (0, k.bG)([el.Ay], () => el.Ay.isCompacting(t), [t]),
        m = (0, k.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        p = i.useRef(null),
        g = i.useRef(!0);
    i.useEffect(() => {
        g.current && p.current?.scrollToBottom();
    }, [s]);
    let x = i.useCallback(() => {
        let e = p.current;
        null != e && (g.current = 32 > e.getDistanceFromBottom());
    }, []);
    i.useLayoutEffect(() => {
        let e = f.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    i = a?.contentRect.width ?? e.getBoundingClientRect().width;
                i === t ||
                    ((t = i),
                    g.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => p.current?.scrollToBottom()))));
            });
        return (
            l.observe(e),
            () => {
                l.disconnect(), null != n && cancelAnimationFrame(n);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = el.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, el.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((nr.w.get(nd) ?? []).includes(e) ||
                            no.A.possiblyShowFeedbackModal(nc.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = nr.w.get(nd) ?? []).includes(e) || nr.w.set(nd, [...l, e]),
                                    (0, ts.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("743596"),
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
    let v = i.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        b = i.useCallback(() => (0, o.fu)(t), [t]),
        j = i.useCallback((e) => v(e.implementation_prompt), [v]),
        y = i.useCallback((e) => v(e), [v]),
        w = i.useCallback(() => v(P.intl.string(R.default["3sTTBu"])), [v]),
        _ = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        N = i.useCallback((e) => (0, o.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, o.Vm)(t, e), [t]),
        A = i.useCallback(() => v(P.intl.string(R.default.Jj8Ftb)), [v]),
        S = "open" === r && !c,
        I = s[s.length - 1],
        C = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return nh[e % nh.length];
        }, [t]),
        T = null != I && "assistant" === I.role && null != I.proposal,
        M = i.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, el.BL)(t)) return t;
            }
        }, [s]),
        L = null != M,
        O = T && S ? A : void 0,
        D = M?.todos,
        F = M?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: nu.T,
        children: [
            (0, a.jsx)(en.Ch, {
                ref: p,
                onScroll: x,
                "data-vibegrations-chat-log": !0,
                className: nu.N,
                children: (0, a.jsx)(tU, {
                    projectId: t,
                    messages: s,
                    onApprove: O,
                    onPickIdea: S ? j : void 0,
                    onAskForIdeas: S ? w : void 0,
                    onAnswerClarification: S ? y : void 0,
                }),
            }),
            (0, a.jsx)(ns, {
                thinking: L,
                thinkingActivity: u,
                compacting: h,
                todos: D,
                provisionalTodo: F,
                projectUsage: d,
                connState: r,
                modelSettings: m,
                onModelSettingsChange: _,
            }),
            (0, a.jsx)(e_, {
                canSend: S,
                stopped: c,
                running: L,
                onSend: v,
                onInterrupt: S ? b : void 0,
                onUploadFile: N,
                onDeleteFile: E,
                onApprove: O,
                onRegionCapture: l,
                suggestion: 0 === s.length ? C : null,
            }),
        ],
    });
}
var nf = n(435558),
    np = n(661531),
    ng = n(602853),
    nx = n(517461),
    nv = n(761929),
    nb = n(927506);
function nj(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, ng.r)(np.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, nx.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, nf.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, nv.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: nv.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: nb.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nb.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: nb.kL, style: { width: m }, children: s }),
        ],
    });
}
var nk = n(145615);
let ny = [6, 8, 10, 12],
    nw = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function n_(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let nN = i.memo(function (e) {
    let { state: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        s = i.useRef(t);
    i.useEffect(() => {
        s.current = t;
    }, [t]),
        i.useEffect(() => {
            let e = l.current,
                t = n.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let a = e.getContext("2d", { alpha: !0 });
            if (null == a) return;
            let i =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                r = 0,
                o = 0,
                c = [],
                d = 0,
                u = (function () {
                    let e = [];
                    for (let t = 0; t < 3; t++)
                        e.push({
                            x: Math.random(),
                            y: 0.4 + 0.6 * Math.random(),
                            vx: (Math.random() - 0.5) * 2e-4,
                            vy: (Math.random() - 0.5) * 15e-5,
                            radius: 0.16 + 0.18 * Math.random(),
                            strength: 0.7 + 0.5 * Math.random(),
                        });
                    return e;
                })(),
                h = nw.home.blob,
                m = nw.home.twink,
                f = nw.home.alpha,
                p = 0,
                g = ny[0],
                x = [],
                v = 0,
                b = 0,
                j = Array(8).fill("");
            function k() {
                let {
                        r: e,
                        g: n,
                        b: l,
                    } = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-fill").trim();
                        if ("" === e) return { r: 225, g: 240, b: 255 };
                        let n = e.split(",").map((e) => parseInt(e.trim(), 10));
                        return 3 !== n.length || n.some((e) => !Number.isFinite(e))
                            ? { r: 225, g: 240, b: 255 }
                            : { r: n[0], g: n[1], b: n[2] };
                    })(),
                    a = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-opacity").trim();
                        if ("" === e) return 0.1;
                        let n = parseFloat(e);
                        return Number.isFinite(n) ? n : 0.1;
                    })();
                for (let t = 0; t < 8; t++) {
                    let i = ((t + 0.5) / 8) * a;
                    j[t] = `rgba(${e}, ${n}, ${l}, ${i})`;
                }
            }
            k();
            let y = [];
            for (let e = 0; e < 8; e++) y.push([]);
            let w = new MutationObserver(k);
            w.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let _ = -1;
            function N() {
                let e = Math.max(r, d);
                (e === d && _ === g && c.length > 0) ||
                    ((d = e),
                    (_ = g),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * n_(t, e, 1),
                                    phase: n_(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * n_(t, e, 3),
                                });
                        return n;
                    })(e, g)));
            }
            function E() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    l = t.height;
                (0.5 > Math.abs(n - r) && 0.5 > Math.abs(l - o)) ||
                    ((r = n),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(r * i))),
                    (e.height = Math.max(1, Math.floor(o * i))),
                    null != a && (a.setTransform(i, 0, 0, i, 0, 0), (a.imageSmoothingEnabled = !1)),
                    N(),
                    C(0.001 * performance.now()));
            }
            E();
            let A = new ResizeObserver(E);
            A.observe(t), window.addEventListener("resize", E);
            let S = performance.now(),
                I = 0;
            function C(e) {
                a.clearRect(0, 0, r, o), (a.globalAlpha = f);
                let t = g,
                    n = r <= 1e3 ? 1.2 : (1e3 / r) * 1.2;
                for (let e = 0; e < 8; e++) y[e].length = 0;
                for (let l = 0; l < c.length; l++) {
                    let a,
                        i = c[l],
                        s = (i.i * t) / r,
                        d = (i.j * t) / o,
                        h =
                            0.55 *
                            (function (e, t, n) {
                                let l = (e - 0.5) * n,
                                    a = 1 - t,
                                    i = 1 - Math.sqrt(l * l + a * a * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(s, d, n);
                    for (let e = 0; e < u.length; e++) {
                        let t = u[e],
                            n = s - t.x,
                            l = d - t.y,
                            a = (n * n + l * l) / (t.radius * t.radius);
                        h += t.strength * Math.exp(-a) * 0.7;
                    }
                    let f = 0.1 * Math.sin(e * i.freq * 1.85 * m + i.phase),
                        p = h - (i.threshold + f);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) a = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            a = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        y[a].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = y[e];
                    if (0 !== n.length) {
                        (a.fillStyle = j[e]), a.beginPath();
                        for (let e = 0; e < n.length; e++) {
                            var l, i;
                            let s = n[e];
                            (l = s.i * t),
                                (i = s.j * t),
                                "function" == typeof a.roundRect
                                    ? a.roundRect(l, i, 4, 4, 1)
                                    : (a.moveTo(l + 1, i),
                                      a.arcTo(l + 4, i, l + 4, i + 4, 1),
                                      a.arcTo(l + 4, i + 4, l, i + 4, 1),
                                      a.arcTo(l, i + 4, l, i, 1),
                                      a.arcTo(l, i, l + 4, i, 1));
                        }
                        a.fill();
                    }
                }
            }
            return (
                (I = requestAnimationFrame(function e(t) {
                    let n = t - S,
                        l = Math.min(64, n);
                    (S = t),
                        !(function (e) {
                            if (
                                (v++,
                                b++,
                                v < 30 ||
                                    e > 100 ||
                                    (x.push(e),
                                    x.length > 60 && x.shift(),
                                    x.length < 60 || b < 180 || p >= ny.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = ny[++p]),
                                (b = 0),
                                (_ = -1),
                                N(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    g,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = nw[s.current] ?? nw.home,
                        i = 1 - Math.exp(-l / 80);
                    (h += (a.blob - h) * i), (m += (a.twink - m) * i), (f += (a.alpha - f) * i);
                    let r = 1.5 * h;
                    for (let e = 0; e < u.length; e++) {
                        let t = u[e];
                        (t.x += t.vx * l * r),
                            (t.y += t.vy * l * r),
                            (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                            (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                            (t.vx += (Math.random() - 0.5) * 2e-7 * l),
                            (t.vy += (Math.random() - 0.5) * 2e-7 * l);
                    }
                    C(0.001 * t), (I = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(I), A.disconnect(), w.disconnect(), window.removeEventListener("resize", E);
                }
            );
        }, []);
    let r = nk.P5;
    return (
        (r = "conversation" === t ? `${r} ${nk.wY}` : "home" === t ? `${r} ${nk.Qy}` : `${r} ${nk.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: nk.DX }),
        })
    );
});
var nE = n(408694);
function nA(e) {
    let { projectId: t } = e,
        n = (0, k.bG)([el.Ay], () => (el.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: nE.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: nE.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: nE.Fc }), (0, a.jsx)("div", { className: nE.dW })],
            }),
            (0, a.jsx)(nN, { state: n }),
        ],
    });
}
var nS = n(333007),
    nI = n(439108);
function nC(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function nT(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [s, r] = i.useState(null);
    i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = i.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        c = i.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                r({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        d = i.useCallback(
            (e) => {
                let t = o(e);
                r((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        u = i.useCallback(
            (e) => {
                if (null == s) return;
                let t = o(e),
                    a = nC({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        m = null == s ? null : nC(s);
    return (0, nS.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: nI.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: nI.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": P.intl.string(R.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == m
                            ? (0, a.jsx)("div", {
                                  className: nI.F7,
                                  children: (0, a.jsx)("div", {
                                      className: nI.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: nI.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var nR = n(120426),
    nP = n(873727),
    nM = n(147248),
    nL = n(418842),
    nO = n(363195),
    nD = n(885386),
    nF = n(940107),
    nH = n(171936);
function nG(e) {
    let { projectId: t, applicationId: n, surface: l, previewReady: r, content: o, sidebar: c } = e,
        [d, u] = i.useState(null),
        h = (0, s.A)(n, l),
        m = h?.id ?? null;
    !(function (e, t) {
        let n = (0, k.bG)([nO.A], () => (0, nP.x4)(nO.A.theme)),
            l = (0, k.bG)([nM.A], () => nM.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, k.cf)([eh.Ay], () => ({
                reducedMotion: eh.Ay.useReducedMotion,
                fontScale: (0, nP.U0)(),
                highContrast: eh.Ay.isHighContrastModeEnabled,
                forcedColors: eh.Ay.useForcedColors,
                underlineLinks: eh.Ay.alwaysShowLinkDecorations,
            })),
            d = nD.hH.useSetting(),
            u = (0, nL.C)(),
            h = i.useRef(null),
            m = i.useRef(0),
            f = i.useCallback(() => {
                let l = (0, nR.F1)(e, t);
                if (null == l) return;
                let i = {
                    revision: ++m.current,
                    baseTheme: n,
                    customTheme: (0, nP.Lq)(),
                    uiDensity: u,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, nF.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, s, t, r, d, e, a, u, c]),
            p = i.useCallback(() => {
                null == h.current &&
                    (h.current = window.requestAnimationFrame(() => {
                        (h.current = null), f();
                    }));
            }, [f]);
        i.useEffect(() => {
            p();
        }, [l, p]),
            i.useLayoutEffect(
                () => (
                    f(),
                    p(),
                    () => {
                        null != h.current && (window.cancelAnimationFrame(h.current), (h.current = null));
                    }
                ),
                [p, f],
            ),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, nR.F1)(e, t) && f();
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, f]),
            i.useEffect(() => {
                let e = new MutationObserver(p);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [p]);
    })(d, m);
    let [f, p] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, nH.mn)(t, () => (0, nR.F1)(d, m));
    }, [t, d, m]);
    let g = i.useCallback(() => {
            let e = (0, nR.F1)(d, m),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      p({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [d, m]),
        x = i.useCallback(
            (e) => {
                p(null), null != f && (0, nR.su)(f.iframe, e).then(f.resolve, f.reject);
            },
            [f],
        ),
        v = i.useCallback(() => {
            p(null), f?.resolve(null);
        }, [f]),
        b = r && null != n && l.type === _.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: u, className: ee.fm, children: o }),
            c(b ? g : void 0),
            null != f ? (0, a.jsx)(nT, { targetRect: f.targetRect, onSelect: x, onCancel: v }) : null,
        ],
    });
}
function n$(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            chatOpen: c,
            previewReady: d,
            previewGate: u,
            channelMessages: h,
        } = e,
        m = i.useRef(null),
        [f, p] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === _.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = m.current;
            if (null == e) return;
            function t() {
                null != e && p(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, r.Zq)(0), []);
    let g = Math.max(360, f - 320),
        x = c || s.type === _.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: m,
        className: ee.LB,
        children: (0, a.jsx)(nG, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: d,
            content: (0, a.jsx)(K, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: d,
                previewGate: u,
            }),
            sidebar: (e) =>
                null != h
                    ? (0, a.jsx)(nj, {
                          open: h.open,
                          maxWidth: g,
                          onWidthChange: r.Zq,
                          children: h.open
                              ? (0, a.jsx)(et, { channel: h.channel, guild: h.guild, onClose: h.onClose })
                              : null,
                      })
                    : null != t && x
                      ? (0, a.jsx)(nj, {
                            open: c,
                            maxWidth: g,
                            onWidthChange: r.Zq,
                            children: (0, a.jsxs)("div", {
                                className: ee.cO,
                                children: [
                                    (0, a.jsx)(nA, { projectId: t }),
                                    (0, a.jsx)(nm, { projectId: t, onRegionCapture: e }, t),
                                ],
                            }),
                        })
                      : null,
        }),
    });
}
