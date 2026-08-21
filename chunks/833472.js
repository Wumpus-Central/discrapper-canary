n.d(t, { A: () => nB });
var l,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(789645),
    c = n(672929),
    d = n(58736),
    u = n(948230),
    h = n(998939),
    m = n(289873),
    f = n(821609),
    p = n(323384),
    g = n(834730),
    x = n(627363),
    v = n(207371),
    b = n(580954),
    j = n(297264),
    y = n(625180),
    k = n(91242),
    w = n(812901),
    N = n(317608),
    _ = n(17928),
    E = n(956518),
    A = n(869146),
    S = n(165610),
    I = n(652215),
    C =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    T = n(742023),
    R = n(328284);
function P(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(R.Bf, l && R.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: R.Ux,
                children: [
                    (0, a.jsx)(j.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(g.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var M = n(459864),
    L = n(375708),
    O = n(963691);
function D(e) {
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
                        s = (0, _.bG)([k.A], () => k.A.getFrame(l), [l]),
                        r = (0, _.bG)(
                            [A.A, k.A],
                            () => A.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && k.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, x.YY)(t),
                        d = (0, v.x)(o),
                        u = null != (0, E.Ay)(t),
                        [h, m] = i.useState(null),
                        f = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => m(l), [l]),
                        lifecycle: (0, S.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : f
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
                            await y.A.launchFrame({ applicationId: t, surface: l });
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
        (i.useEffect(() => {
            let e;
            return (
                null == (e = k.A.getFrame(r)) ||
                    k.A.getMainFrame()?.id !== r ||
                    A.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === S.sV.MAIN ? y.A.resetFrameLayoutModes(r) : y.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = k.A.getFrame(r)) &&
                        ((0, S.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === S.sV.INLINE && y.A.promoteFrame(r),
                              y.A.updateFrameLayoutMode({ frameId: r, layoutMode: S.y0.PIP }))
                            : e.intent === S.sV.MAIN && (0, b.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case C.Launched:
            return (0, a.jsx)(N.A, { frameId: l.id, level: w.A.WithinAppContent, className: O.Z7 });
        case C.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(P, {
                    title: L.intl.string(M.default["4f6Vkr"]),
                    body: L.intl.string(M.default.LJ2q1H),
                }),
            });
        case C.NoApplication:
            return (0, a.jsxs)("div", {
                className: O.qs,
                children: [
                    (0, a.jsx)(p.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: O.tj,
                        children: L.intl.string(M.default.jTuX7C),
                    }),
                ],
            });
        case C.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(P, {
                    title: L.intl.string(M.default.FHOJiH),
                    body: L.intl.string(M.default["1yLQoV"]),
                }),
            });
        case C.Error:
            return (0, a.jsxs)("div", {
                className: O.qs,
                children: [
                    (0, a.jsx)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: L.intl.string(M.default.MeLWCr),
                    }),
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: O.tj,
                        children: L.intl.string(M.default["1RCbQT"]),
                    }),
                ],
            });
        case C.AwaitingLaunch:
        case C.Loading:
            return (0, a.jsx)("div", { className: O.qs, children: (0, a.jsx)(m.y, {}) });
    }
}
var F = n(308528),
    H = n(334738),
    G = n(373204),
    $ = n(355622),
    B = n(734057),
    U = n(531685),
    V = n(365971),
    q = n(362417);
function z(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: q.f,
        children: [
            (0, a.jsx)(p.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function W() {
    return (0, a.jsx)("div", { className: q.f, children: (0, a.jsx)(m.y, {}) });
}
function K(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, x.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, _.bG)([B.A], () => {
            if (null == o) return null;
            let e = B.A.getDMFromUserId(o);
            return null != e ? B.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && F.A.preload(I.ME, t);
        }, [t]),
        (n = (0, _.bG)([U.A], () => U.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, V.Xg)();
            return (
                (0, H.yl)(t, e),
                () => {
                    (0, H.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, u] = i.useState(null),
        h = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != c) return;
        let e = !1;
        return (
            F.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || u(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, c]),
    r)
        ? (0, a.jsx)(W, {})
        : null == o || h
          ? (0, a.jsx)(z, { message: L.intl.string(M.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(W, {})
            : (0, a.jsx)("div", {
                  className: q.g,
                  children: (0, a.jsx)(G.A, { channel: c, guild: null, chatInputType: $.oU.SIDEBAR }, c.id),
              });
}
var X = n(976102);
function Y(e) {
    let { applicationId: t, previewApplicationId: n, surface: l, previewReady: s, previewGate: r } = e,
        o = (0, c.A)(t, l),
        { data: d, isLoading: u } = (0, x.YY)(t ?? void 0);
    return (i.useEffect(() => {
        r?.type === "permissions" && null != o && (0, b.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: X.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: X.q,
                children: (0, a.jsx)(P, {
                    wide: !0,
                    title: L.intl.string(M.default.DYwf2n),
                    body: L.intl.string(M.default.WWj3pN),
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "md",
                        text: L.intl.string(M.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null == t
                ? null
                : u
                  ? (0, a.jsx)("div", { className: X.q, children: (0, a.jsx)(m.y, {}) })
                  : null == d || (0, v.x)(d) || null == n
                    ? (0, a.jsx)(D, { applicationId: t, surface: l })
                    : (0, a.jsx)(K, { previewApplicationId: n })
            : (0, a.jsxs)("div", {
                  className: X.q,
                  children: [
                      (0, a.jsx)(p.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(g.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: X.t,
                          children: L.intl.string(M.default.jTuX7C),
                      }),
                  ],
              });
}
var Z = n(534890),
    J = n(738876),
    Q = n(47167),
    ee = n(31717),
    et = n(372054);
function en(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, Q.Ay)(t),
        s = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: L.intl.string(L.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: et.Wx,
        children: [
            (0, a.jsx)(J.A, { channel: t, draftType: ee.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: s,
                "aria-label": L.intl.string(L.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: Z.ChatIcon, "aria-label": L.intl.string(L.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.GZ,
                children: (0, a.jsx)(G.A, { channel: t, guild: n, chatInputType: $.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var el = n(689175),
    ea = n(783791);
n(323874), n(14289), n(35956), n(321073);
var ei = n(475358),
    es = n(826745),
    er = n(866665),
    eo = n(588975),
    ec = n(428610),
    ed = n(29080),
    eu = n(559647),
    eh = n(285796),
    em = n(775602),
    ef = n(673724),
    ep = n(514042),
    eg = n(939249),
    ex = n(298668);
function ev(e) {
    return r()(ex._B, { [ex.ND]: e });
}
function eb(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: ex.gJ, onError: r })
                : (0, a.jsx)(ep.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: ex.Wd,
                children: [
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ex.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function ej(e) {
    return (0, a.jsx)("div", { className: ev(e.compact ?? !1), children: eb(e) });
}
function ey(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(eg.D, {
        className: r()(ev(!0), ex.w8),
        onClick: i,
        "aria-label": l,
        children: eb({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var ek = n(789438);
function ew(e) {
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
            (0, a.jsx)(ei.e, { shortcut: "tab", className: `${ek.xT} ${ek.nT} ${d}`, keyClassName: ek.IS }),
        ],
    });
}
let eN = 0;
function e_(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            onSend: s,
            onInterrupt: r,
            onUploadFile: o,
            onDeleteFile: c,
            onApprove: d,
            onRegionCapture: u,
            suggestion: h,
        } = e,
        [f, p] = i.useState(""),
        g = (0, _.bG)([em.Ay], () => em.Ay.isSubmitButtonEnabled),
        [x, v] = i.useState([]),
        [b, j] = i.useState(!1),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(!1);
    i.useEffect(() => {
        l || N(!1);
    }, [l]);
    let E = i.useRef(null),
        A = i.useRef([]),
        S = i.useRef(new Set()),
        I = i.useRef(c);
    I.current = c;
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
    let R = i.useCallback(
            (e, t) => {
                if (S.current.has(e)) return;
                let n = A.current;
                n.some((t) => t.localId === e) && C(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [C],
        ),
        P = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...A.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++eN,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: L.intl.formatToPlainString(M.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, ef.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: L.intl.formatToPlainString(M.default.cI7t94, {
                                size: (0, ef.ZJ)((0, ef.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = ef.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (C(t), n))
                    o(e).then(
                        (e) => {
                            S.current.has(l) ? T(e) : R(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            S.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                R(l, { status: "error", errorText: L.intl.string(M.default.GwEHvn) }));
                        },
                    );
            },
            [T, o, R, C],
        ),
        O = i.useCallback(async () => {
            if (null != u && !y) {
                k(!0);
                try {
                    let e = await u();
                    null != e && P([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        C([
                            ...A.current,
                            {
                                localId: ++eN,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: L.intl.string(M.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    k(!1);
                }
            }
        }, [u, y, P, C]),
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
            null == r || w || (N(!0), r());
        }, [r, w]),
        V = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != r && !w) {
                    e.preventDefault(), e.stopPropagation(), U();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != h && "" === f) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), p(h);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), $());
            },
            [$, d, l, r, w, U, h, f],
        ),
        q = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), P(n));
            },
            [t, P],
        ),
        z = i.useCallback(
            (e) => {
                e.preventDefault(), j(!1), t && P(Array.from(e.dataTransfer.files));
            },
            [t, P],
        ),
        W = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), j(!0));
        }, []),
        K = i.useCallback(
            (e) => {
                P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [P],
        ),
        X = i.useRef(null),
        [Y, Z] = i.useState(0),
        [J, Q] = i.useState(!1);
    i.useEffect(() => {
        if (0 === f.length) return void Q(!1);
        let e = X.current?.querySelector("textarea");
        if (null != e) {
            let t = eA(e);
            null != t && Z(t);
        }
        Q(!0);
        let t = setTimeout(() => Q(!1), eE);
        return () => clearTimeout(t);
    }, [f]);
    let ee = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
        et = J ? ` ${ek.EB}` : "",
        en = null != h && "" === f;
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
                      children: x.map((e) => (0, a.jsx)(eS, { draft: e, onRemove: D }, e.localId)),
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
                              children: (0, a.jsx)(ew, { text: h }),
                          })
                        : null,
                    (0, a.jsx)(es.y, {
                        value: f,
                        onChange: (e) => p(e.currentTarget.value),
                        onKeyDown: V,
                        onPaste: q,
                        placeholder: n
                            ? L.intl.string(M.default.JeM47J)
                            : t
                              ? en
                                  ? ""
                                  : L.intl.string(l ? M.default["67PpcP"] : M.default.ahRdoJ)
                              : L.intl.string(M.default.nm4w9P),
                        disabled: !t,
                        "aria-label": L.intl.string(M.default.OPr66w),
                        rows: 1,
                        className: ek.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: ek.Sz,
                        children: [
                            (0, a.jsx)(er.m, {
                                text: L.intl.string(M.default.gUn10I),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: ek.Y0,
                                    disabled: !t,
                                    onClick: () => E.current?.click(),
                                    "aria-label": L.intl.string(M.default.gUn10I),
                                    children: (0, a.jsx)(eo.P, { size: "sm", color: "currentColor" }),
                                }),
                            }),
                            (0, a.jsx)(er.m, {
                                text: L.intl.string(M.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: ek.Y0,
                                    disabled: null == u || !t || y,
                                    onClick: O,
                                    "aria-label": L.intl.string(M.default.B5gWPk),
                                    children: y
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: ek.Rk })
                                        : (0, a.jsx)(ec.K, { size: "sm", color: "currentColor" }),
                                }),
                            }),
                            l && null != r
                                ? (0, a.jsx)(er.m, {
                                      text: L.intl.string(M.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: ek.AW,
                                          disabled: w,
                                          onClick: U,
                                          "aria-label": L.intl.string(M.default.KdgI4k),
                                          children: (0, a.jsx)(ed.w, {
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
                                      "aria-label": L.intl.string(M.default["22GHMt"]),
                                      children: (0, a.jsx)(eu.SendMessageIcon, {
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
let eE = 1500;
function eA(e) {
    let t = (eA.canvas ?? (eA.canvas = document.createElement("canvas"))).getContext("2d");
    if (null == t) return null;
    let n = window.getComputedStyle(e);
    t.font = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;
    let l = e.value.slice(0, e.selectionStart ?? e.value.length),
        a = l.slice(l.lastIndexOf("\n") + 1),
        i = parseFloat("" !== n.paddingInlineStart ? n.paddingInlineStart : "" !== n.paddingLeft ? n.paddingLeft : "0");
    return e.offsetLeft + i + t.measureText(a).width - e.scrollLeft;
}
function eS(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(ej, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(g.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: ek.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ek.o1,
                onClick: () => n(t.localId),
                "aria-label": L.intl.string(M.default["3HWvgk"]),
                children: (0, a.jsx)(eh.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
eA.canvas = null;
var eI = n(287809);
let eC = new Set([
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
function eT(e) {
    return "running" === e;
}
let eR = new Set([
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
function eP(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function eM(e) {
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
        if (eP(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eP(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eO(i),
            c = s.filter((e) => e !== o);
        if (null != r && r.summary === o) r.technical.push(...c), (e = r);
        else if (n.length > 0 && eR.has(i.kind) && eR.has(n[n.length - 1].step.kind)) {
            let t = n[n.length - 1];
            t.technical.push(t.summary, ...c), (t.summary = o), (t.step = i), (e = t);
        } else (e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e);
        "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eL(e) {
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
        null != u && (u.groups = eM(h, { inheritedSummary: t })), (u = null), (h = []);
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
                    title: null != e.task_title && "" !== e.task_title ? e.task_title : L.intl.string(M.default.MdXWEK),
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
            if (eC.has(l.kind)) continue;
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
        if (eC.has(l.kind)) continue;
        let e = eP(l);
        !e && p && x();
        let b = v(n, e && null != f);
        (o = null),
            (m = null),
            null == u && ((u = { type: "rows", key: `rows-${n}`, groups: [] }), (t = f), b.blocks.push(u)),
            h.push(l),
            e || (f = eO(l));
    }
    for (let e of (g(), s)) {
        e.groups = eM(e.rawSteps);
        let t = e.groups[e.groups.length - 1]?.summary;
        null != t && (e.latestActivity = t), !n && eT(e.state) && (e.state = "incomplete");
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
function eO(e) {
    switch (e.kind) {
        case "thinking":
            return L.intl.string(M.default.K7TkAL);
        case "writing_command":
            return e.friendly ?? L.intl.string(M.default.nv6pUM);
        case "assembling":
            return L.intl.string(M.default["9G3ZmA"]);
        case "installing_deps":
            return L.intl.string(M.default.VZuRug);
        case "building":
            return L.intl.string(M.default["s+ylXP"]);
        case "bundling":
            return L.intl.string(M.default.rEQlMx);
        case "committing":
            return L.intl.string(M.default.Yvyw1H);
        case "built":
            return L.intl.string(M.default.hOcVAj);
        case "build_error":
            return L.intl.string(M.default["6L9Vwt"]);
        case "healthchecking":
        case "preview_connecting":
            return L.intl.string(M.default.sz8yAj);
        case "awaiting_auth":
            return L.intl.string(M.default["orD+xo"]);
        case "healthcheck_passed":
            return L.intl.string(M.default["x+sqTG"]);
        case "healthcheck_failed":
            return L.intl.string(M.default.FUWbq1);
        case "deploying":
            return L.intl.string(M.default.wcXX8Z);
        case "preview_ready":
            return L.intl.string(M.default["78YNh7"]);
        case "error":
        case "terminal_error":
            return L.intl.string(M.default.j3hBoA);
        default:
            return L.intl.string(M.default.nv6pUM);
    }
}
n(134528), n(947204);
var eD = n(46054),
    eF = n(13699);
function eH(e) {
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
                className: r()(eF.Z$, eF.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(eF.Z$, eF.Q_),
            }),
        ],
    });
}
var eG = n(847374),
    e$ = n(320448);
let eB = i.createContext(0);
function eU(e) {
    let { glyph: t, line: n, live: l, settled: s, tint: o, detail: c, connected: d = !1, connectsDown: u = !1 } = e,
        [h, m] = i.useState(!1),
        f = i.useContext(eB),
        p = i.useId(),
        x = i.useCallback(() => m((e) => !e), []),
        { line: v, phase: b } = (function (e) {
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
        j = h ? eG.a : e$._,
        y = null != c,
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eF.hd, children: t }),
                (0, a.jsx)(g.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eF.qo, { [eF._q]: "exit" === b, [eF.GD]: "enter" === b }),
                    children: v,
                }),
                y ? (0, a.jsx)(j, { size: "xs", color: "currentColor", className: eF.nD }) : null,
            ],
        }),
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eF.$m, children: k }, `face-${f}`),
                l
                    ? (0, a.jsx)("span", { className: r()(eF.$m, eF.pw), "aria-hidden": !0, children: k }, `shine-${f}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eF.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": d,
        "data-connects-down": u,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            y
                ? (0, a.jsx)(eg.D, {
                      tag: "div",
                      className: r()(eF.ep, eF.EK),
                      "aria-expanded": h,
                      "aria-controls": p,
                      "aria-label": L.intl.formatToPlainString(M.default.s1wx5H, { activity: v }),
                      onClick: x,
                      children: w,
                  })
                : (0, a.jsx)("div", { className: eF.ep, children: w }),
            (0, a.jsx)("div", { id: p, hidden: !h, className: eF.BA, children: c }),
        ],
    });
}
let eV = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    eq = /^(.*?)\s*\((\d+ lines|\d+ matches|no matches)\)$/;
function ez(e) {
    let { text: t } = e,
        n = eV.exec(t),
        l = n?.[2],
        i = n?.[3];
    if (null != n && (null != l || null != i))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                n[1],
                null == l ? null : (0, a.jsxs)("span", { className: eF.MM, children: [" ", l] }),
                null == i ? null : (0, a.jsxs)("span", { className: eF.ie, children: [" ", i] }),
            ],
        });
    let s = eq.exec(t);
    if (null == s) return t;
    let r = "no matches" === s[2];
    return (0, a.jsxs)(a.Fragment, {
        children: [s[1], (0, a.jsxs)("span", { className: r ? eF.Hi : eF.qZ, children: [" ", s[2]] })],
    });
}
var eW = n(256905),
    eK = n(229775);
function eX(e) {
    var t;
    let n,
        { projectId: l, group: s, presentation: o = "row", active: c = !1 } = e,
        [d, u] = i.useState(!1),
        h = i.useId(),
        m = i.useCallback(() => u((e) => !e), []),
        f =
            ((t = s.step.kind),
            (n =
                "error" === t || "terminal_error" === t || "build_error" === t
                    ? "text-feedback-critical"
                    : "text-default"),
            "detail" === o && "text-default" === n ? "text-muted" : n),
        p = "text-muted" === f,
        x = c && p ? "none" : d && p ? "currentColor" : f,
        v = r()(eF.iq, { [eK.Hz]: c && p }),
        b = "detail" === o ? "text-md/normal" : "text-sm/normal",
        j = "detail" === o ? "text-sm/normal" : "text-xs/normal",
        y = null != l ? s.screenshots : [];
    if (0 === s.technical.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": s.step.kind,
            className: eF.Dx,
            children: (0, a.jsx)(g.E, {
                tag: "div",
                variant: b,
                color: x,
                selectable: !0,
                className: v,
                children: (0, a.jsx)(ez, { text: s.summary }),
            }),
        });
    let k = d ? eG.a : e$._;
    return (0, a.jsxs)("li", {
        "data-step-kind": s.step.kind,
        className: eF.Dx,
        children: [
            (0, a.jsxs)(eg.D, {
                tag: "div",
                className: eF.kG,
                "aria-expanded": d,
                "aria-controls": h,
                "aria-label": L.intl.formatToPlainString(M.default.z4KWsN, { step: s.summary }),
                onClick: m,
                children: [
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: b,
                        color: x,
                        className: v,
                        children: (0, a.jsx)(ez, { text: s.summary }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eF.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: h,
                hidden: !d,
                className: eF.yJ,
                children: [
                    s.technical.map((e, t) =>
                        (0, a.jsx)(
                            g.E,
                            {
                                tag: "div",
                                variant: j,
                                color: c && p ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [eK.Hz]: c && p }),
                                children: (0, a.jsx)(ez, { text: e }),
                            },
                            t,
                        ),
                    ),
                    null != l && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: eF.y8,
                              children: y.map((e) => (0, a.jsx)(eZ, { projectId: l, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eY() {}
function eZ(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, s] = i.useState(null),
        [r, o] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
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
    let c = L.intl.string(M.default["3Hq9pQ"]),
        d = i.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, eW.R)({
                    items: [{ type: "IMAGE", url: e, alt: c }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eY);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(ey, { name: c, thumbSrc: l, ariaLabel: c, onClick: d, onThumbError: () => o(!0) });
}
function eJ(e) {
    let { group: t, live: n } = e;
    return 0 === t.technical.length
        ? null
        : (0, a.jsx)("li", {
              "data-step-kind": t.step.kind,
              className: eF.Dx,
              children: t.technical.map((e, t) =>
                  (0, a.jsx)(
                      g.E,
                      {
                          tag: "div",
                          variant: "text-md/normal",
                          color: n ? "none" : "text-muted",
                          selectable: !0,
                          className: r()(eF.iq, { [eK.Hz]: n }),
                          children: (0, a.jsx)(ez, { text: e }),
                      },
                      t,
                  ),
              ),
          });
}
function eQ(e) {
    let { projectId: t, item: n, live: l, durationMs: i, connectsDown: s = !1 } = e,
        r = n.blocks.flatMap((e) => ("rows" === e.type ? e.groups : [])),
        o = r.at(-1),
        c =
            null != i
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return L.intl.formatToPlainString(M.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? L.intl.formatToPlainString(M.default.NkZO2t, { count: n })
                          : L.intl.formatToPlainString(M.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(i)
                : (o?.summary ?? (null != n.label && "" !== n.label ? n.label : L.intl.string(M.default.nv6pUM))),
        d = r.some((e) => e !== o || e.technical.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eU, {
        glyph: (0, a.jsx)(eH, {}),
        line: c,
        live: l,
        settled: null != i,
        connectsDown: s,
        detail: d
            ? (0, a.jsx)("ol", {
                  className: eF.dO,
                  children: r.map((e, n) =>
                      e === o && 0 === e.screenshots.length
                          ? (0, a.jsx)(eJ, { group: e, live: l }, n)
                          : (0, a.jsx)(eX, { projectId: t, group: e, presentation: "detail", active: l && e === o }, n),
                  ),
              })
            : void 0,
    });
}
var e0 = n(424110);
function e1(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        o = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eg.D, {
        className: r()(e0.uK, { [e0.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": L.intl.formatToPlainString(o ? M.default.aL1BKQ : M.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": o ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: e0.l8,
                children: [
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: e0.ed,
                        children: t.label,
                    }),
                    o
                        ? (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: e0.rM,
                              children: L.intl.string(M.default.OXRWyV),
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(g.E, {
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
function e2(e) {
    let { clarification: t, onSubmit: n } = e,
        [l, s] = i.useState({}),
        [o, c] = i.useState({}),
        [d, u] = i.useState(0),
        h = null == n,
        m = t.questions.length,
        f = Math.min(d, m - 1),
        p = t.questions[f],
        x = i.useCallback(
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
        v = i.useCallback(
            (e) => {
                if (h) return;
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
                null == a ? x(n) : u(a);
            },
            [l, t, h, f, p.id, x],
        ),
        b = i.useCallback(() => {
            if (h || 0 === f) return;
            let e = t.questions[f - 1];
            s((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                c((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                u(f - 1);
        }, [t, h, f]),
        j = f > 0 && !h,
        y = o[p.id] ?? "",
        k = i.useCallback(() => {
            let e = y.trim();
            "" !== e && v({ kind: "custom", text: e });
        }, [y, v]);
    return (0, a.jsxs)("section", {
        className: e0.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": h ? "inert" : "open",
        "data-step": f,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: e0.qB,
                      children: [
                          (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: e0.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: L.intl.formatToPlainString(M.default["7bypa+"], { index: f + 1, total: m }),
                          }),
                          (0, a.jsx)(eg.D, {
                              className: r()(e0.aX, { [e0.uh]: !j }),
                              onClick: j ? b : void 0,
                              tabIndex: j ? 0 : -1,
                              "aria-hidden": !j,
                              "aria-disabled": h,
                              "aria-label": L.intl.string(M.default.KYpgvZ),
                              "data-vibegrations-clarification-back": !0,
                              "data-hidden": j ? void 0 : "true",
                              children: (0, a.jsx)(g.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "none",
                                  children: L.intl.string(M.default.yKdgqw),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(g.E, {
                tag: "div",
                id: `${p.id}-label`,
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: p.question,
            }),
            (0, a.jsx)("div", {
                className: e0.fF,
                role: "group",
                "aria-labelledby": `${p.id}-label`,
                children: p.options.map((e) =>
                    (0, a.jsx)(
                        e1,
                        { option: e, disabled: h, onPick: (e) => v({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: e0.F,
                children: (0, a.jsx)(es.y, {
                    value: y,
                    onChange: (e) => {
                        let { value: t } = e.currentTarget;
                        c((e) => ({ ...e, [p.id]: t }));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), k());
                    },
                    placeholder: L.intl.string(M.default.qifsdL),
                    "aria-label": L.intl.formatToPlainString(M.default.XHESTL, { question: p.question }),
                    disabled: h,
                    rows: 1,
                    className: e0.Pu,
                    "data-vibegrations-clarification-other": p.id,
                }),
            }),
        ],
    });
}
var e6 = n(443865),
    e5 = n(113757);
function e3(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        s = null == n;
    return (0, a.jsxs)(eg.D, {
        className: s ? `${e5.Nr} ${e5.xe}` : e5.Nr,
        onClick: s ? void 0 : () => n(t),
        "aria-label": L.intl.formatToPlainString(M.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": s,
        children: [
            (0, a.jsx)(g.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: e5.JJ,
                children: t.title,
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(g.E, {
                      tag: "div",
                      id: l,
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: t.value,
                  }),
        ],
    });
}
function e4(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: e5.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: e5.wx,
                children: [
                    (0, a.jsx)(e6.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: L.intl.string(M.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(e3, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function e7(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: e5.x,
        children: [
            (0, a.jsx)(g.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: e5.I1,
                children: L.intl.string(M.default.tG5PBo),
            }),
            (0, a.jsx)(f.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: L.intl.string(M.default.cwTe5o),
            }),
        ],
    });
}
var e8 = n(375068);
function e9(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(te);
    return (0, a.jsx)("div", {
        className: e8.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(tt, { name: e.name }, n)
                : te(e)
                  ? (0, a.jsx)(tl, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(tn, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function te(e) {
    return null != e.id && ef.Wb.has(e.content_type);
}
function tt(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? L.intl.formatToPlainString(M.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(ej, { name: l, compact: !0 });
}
function tn(e) {
    let { projectId: t, id: n, name: l } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, h.n6)(t, n).then(
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
    let o = i.useCallback(() => {
        Promise.all([(0, h.n6)(t, n), (0, h.PK)(t, n, { download: !0 })]).then(
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
        ? (0, a.jsx)(tt, { name: l, unavailable: !0 })
        : (0, a.jsx)(ey, {
              name: l,
              thumbSrc: null,
              ariaLabel: L.intl.formatToPlainString(M.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function tl(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l } = e,
        { id: s, name: r } = n[l],
        [o, c] = i.useState(null),
        [d, u] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, h.n6)(t, s), (0, h.PK)(t, s)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? c(l) : u(!0));
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
                Promise.all([(0, h.n6)(t, e.id), (0, h.PK)(t, e.id)]).then(
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
                ? u(!0)
                : "error" !== t &&
                  (0, eW.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return d
        ? (0, a.jsx)(tt, { name: r, unavailable: !0 })
        : (0, a.jsx)(ey, {
              name: r,
              thumbSrc: o,
              ariaLabel: L.intl.formatToPlainString(M.default.QUFLUq, { name: r }),
              onClick: m,
              onThumbError: () => {
                  c(null),
                      (0, h.n6)(t, s).then(
                          (e) => {
                              e || u(!0);
                          },
                          () => {},
                      );
              },
          });
}
var ta = n(824757);
function ti(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ta.hb,
              children: [
                  (0, a.jsx)(g.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: ta.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ta.uR,
                                  children: (0, a.jsx)(g.E, {
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
function ts(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: ta.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: ta.pu,
                children: [
                    (0, a.jsx)(g.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: L.intl.string(M.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: ta.dr,
                              children: (0, a.jsx)(g.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: L.intl.string(L.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(g.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: ta.hb,
                      children: [
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: L.intl.string(M.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: ta.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ta.H6,
                                          children: [
                                              (0, a.jsx)(g.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: ta.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, a.jsx)(g.E, {
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
                      className: ta.hb,
                      children: [
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: L.intl.string(L.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: ta.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ta.Xs,
                                          children: [
                                              (0, a.jsxs)(g.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(g.E, {
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
            (0, a.jsx)(ti, { label: L.intl.string(M.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(ti, { label: L.intl.string(M.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: ta.nc,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: L.intl.string(M.default.GYoWRk),
                          }),
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: ta.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var tr = n(192308),
    to = n(479191);
function tc(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, tr.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: to.Lo,
        children: [
            (0, a.jsx)(g.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: L.intl.string(M.default["/e28TK"]),
            }),
            (0, a.jsx)(g.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : L.intl.string(M.default.jxvtin),
            }),
            (0, a.jsxs)("div", {
                className: to.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: to.$H,
                                children: (0, a.jsx)(g.E, {
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
                              className: to.$H,
                              children: (0, a.jsx)(g.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: L.intl.formatToPlainString(M.default["/64HKW"], {
                                      platform: l.connection.label,
                                  }),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("div", {
                className: to.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: L.intl.string(M.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
function td(e) {
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
function tu(e) {
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
function th(e) {
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
function tm(e) {
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
function tf(e) {
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
function tp(e) {
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
function tg(e) {
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
function tx(e) {
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
function tv(e) {
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
function tb(e) {
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
function tj(e) {
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
function ty(e) {
    return L.intl.string(e);
}
function tk(e) {
    let { task: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = eT(t.state),
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
                          return L.intl.formatToPlainString(M.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return L.intl.formatToPlainString(M.default["oEzDO/"], { task: t });
                      default:
                          return L.intl.formatToPlainString(M.default.KS49RN, { task: t });
                  }
              })(t),
        d =
            0 === t.groups.length && (null == t.detail || "" === t.detail)
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eF.dO,
                                    children: t.groups.map((e, t) =>
                                        (0, a.jsx)(eX, { group: e, presentation: "detail", active: r && e === o }, t),
                                    ),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)("div", { className: eF.iq, children: t.detail })
                              : null,
                      ],
                  });
    return (0, a.jsx)(eU, {
        glyph: (0, a.jsx)(er.m, {
            text: i,
            position: "left",
            children: (0, a.jsx)("span", {
                className: eF.nC,
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
var tw = n(165648);
function tN(e) {
    let { projectId: t, steps: n, active: l = !1, inheritedActivity: s, durationMs: r, interrupted: o = !1 } = e,
        c = i.useMemo(() => eL(n, { turnActive: l, inheritedSummary: s }), [n, l, s]);
    if (o)
        return (0, a.jsx)("ol", {
            className: eF.pj,
            "data-live": !1,
            children: (0, a.jsx)(eU, {
                glyph: (0, a.jsx)(ed.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: L.intl.string(M.default["5T7DSm"]),
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
                    { Illocon: td, tint: "var(--illo-yellow-40)", name: ty(M.default["2l3AEQ"]) },
                    { Illocon: tu, tint: "var(--illo-orange-40)", name: ty(M.default["+FPL+I"]) },
                    { Illocon: th, tint: "var(--illo-green-40)", name: ty(M.default.w4GOfR) },
                    { Illocon: tm, tint: "var(--illo-pink-40)", name: ty(M.default.XmZT9M) },
                    { Illocon: tf, tint: "var(--illo-pink-40)", name: ty(M.default.NnydwQ) },
                    { Illocon: tp, tint: "var(--illo-green-40)", name: ty(M.default["4iXcNT"]) },
                    { Illocon: tg, tint: "var(--illo-purple-40)", name: ty(M.default.DoTGt5) },
                    { Illocon: tx, tint: "var(--illo-yellow-40)", name: ty(M.default["9zxqmP"]) },
                    { Illocon: tv, tint: "var(--illo-orange-40)", name: ty(M.default.HF0T3L) },
                    { Illocon: tb, tint: "var(--illo-yellow-40)", name: ty(M.default.XTzDga) },
                    { Illocon: tj, tint: "var(--illo-purple-40)", name: ty(M.default.abtC2b) },
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
        f = l || h.some((e) => eT(e.state));
    return (0, a.jsx)(eB.Provider, {
        value: h.length,
        children: (0, a.jsxs)("ol", {
            className: eF.pj,
            "data-live": f,
            children: [
                (0, a.jsx)(eQ, { projectId: t, item: u, live: l, durationMs: r, connectsDown: h.length > 0 }),
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
            active: o = !1,
            onApprove: c,
            ideas: d,
            clarification: u,
            onAnswerClarification: h,
            attachments: m,
            secretRequest: f,
            onPickIdea: p,
            offerIdeas: x,
            onAskForIdeas: v,
            inheritedActivity: b,
            sideReply: j = !1,
        } = e,
        { items: y } = i.useMemo(() => eL(n, { turnActive: o, inheritedSummary: b }), [n, o, b]),
        k = y.at(-1),
        w = y.flatMap((e) => ("message" === e.type ? [e] : [])),
        N = k?.type === "message" && k.content.trim() === l.trim(),
        _ = null != u && u.questions.length > 0,
        E = null == s && "" !== l && !N && !_,
        A = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, lastItemType: l } = e;
            return t ? (n ? "closing" : "message" === l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != m && m.length > 0, showsClosingMessage: E, lastItemType: k?.type }),
        S = null == m ? null : (0, a.jsx)(e9, { projectId: t, attachments: m }),
        I = null == S ? null : (0, a.jsx)("div", { className: eF.MT, children: S }),
        C = j
            ? (0, a.jsx)(g.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: L.intl.string(M.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eF.ue,
        children: [
            w.length > 0
                ? (0, a.jsx)("ol", {
                      className: eF.dO,
                      children: w.map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: r()(eF.ky, eK.XR),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: r()(tw.PT, eF.cW),
                                          children: eD.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === A && e.key === k?.key ? I : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, a.jsx)("div", {
                      className: r()(eF.ky, eK.XR),
                      children: (0, a.jsx)(ts, { proposal: s, onApprove: c }),
                  })
                : E
                  ? (0, a.jsxs)("div", {
                        className: r()(eF.ky, eK.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tw.PT, eF.cW),
                                children: eD.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === A ? I : null,
                            C,
                            !0 === x
                                ? (0, a.jsx)("div", { className: eF.IN, children: (0, a.jsx)(e7, { onAsk: v }) })
                                : null,
                        ],
                    })
                  : null,
            null != f
                ? (0, a.jsx)("div", {
                      className: r()(eF.ky, eK.XR),
                      children: (0, a.jsx)(tc, { projectId: t, request: f }),
                  })
                : null,
            "standalone" === A ? (0, a.jsx)("div", { className: r()(eF.ky, eK.XR), children: I }) : null,
            _
                ? (0, a.jsx)("div", {
                      className: r()(eF.ky, eK.XR),
                      children: (0, a.jsx)(e2, { clarification: u, onSubmit: h }),
                  })
                : null,
            null != d && d.length > 0
                ? (0, a.jsx)("div", { className: r()(eF.ky, eK.XR), children: (0, a.jsx)(e4, { ideas: d, onPick: p }) })
                : null,
            !0 !== x || E
                ? null
                : (0, a.jsx)("div", { className: r()(eF.ky, eK.XR), children: (0, a.jsx)(e7, { onAsk: v }) }),
            E ? null : C,
        ],
    });
}
var tE = n(320095),
    tA = n(963852),
    tS = n(763754),
    tI = n(491182),
    tC = n(20851),
    tT = n(375199),
    tR = n(715628),
    tP = n(752636),
    tM = n(95701),
    tL = n(441136);
let tO = (0, tM.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    tD = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function tF(e, t) {
    return null != e && t ? (0, a.jsx)("div", { className: tL.Yq, children: e }) : e;
}
function tH(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function tG(e) {
    let { content: t, createdAt: n, userId: l, accessories: s } = e,
        r = (0, _.bG)([eI.default], () => (null != l ? eI.default.getUser(l) : null) ?? eI.default.getCurrentUser(), [
            l,
        ]),
        o = i.useMemo(() => (0, tS.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, tA.Ay)({ channelId: tO.id, content: t, author: r });
            return (0, tE.rh)({ ...e, timestamp: tH(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, r, n]);
    return null == c
        ? null
        : null == s
          ? (0, a.jsx)(tC.A, { message: c, author: o, channel: tO, isGroupStart: !0, disableInteraction: !0 })
          : (0, a.jsx)(tI.A, {
                className: tL.yE,
                author: o,
                childrenHeader: (0, tP.A)({ message: c, channel: tO, author: o, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? void 0 : null,
                childrenAccessories: tF(s, "" !== t),
                disableInteraction: !0,
            });
}
function t$(e) {
    let { content: t, createdAt: n, accessories: l } = e,
        s = i.useMemo(() => (0, tS.FT)(null, null), []),
        r = i.useMemo(() => ({ ...s, nick: "Conjure", colorString: "var(--text-brand)" }), [s]),
        o = i.useMemo(() => {
            let e = (0, tA.Ay)({ channelId: tO.id, content: t, author: tD });
            return (0, tE.rh)({ ...e, timestamp: tH(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, n]),
        { content: c } = (0, tT.A)(o, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        d = i.useMemo(() => ({ message: o, channel: tO, compact: !1, groupId: o.id }), [o]);
    return (0, a.jsxs)("div", {
        className: tL.$4,
        children: [
            (0, a.jsx)(tI.A, {
                className: tL.yE,
                author: r,
                childrenHeader: (0, tP.A)({ message: o, channel: tO, author: r, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? (0, tR.A)(d, c) : null,
                childrenAccessories: tF(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: tL.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(p.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
function tB(e, t) {
    let n = e[t]?.turn_id;
    if (null != n)
        for (let l = t - 1; l >= 0; l--) {
            let t = e[l];
            if (null != t && "assistant" === t.role && "side_reply" !== t.kind)
                return !0 === t.continued && t.turn_id === n
                    ? (function (e) {
                          for (let t = e.length - 1; t >= 0; t--) {
                              let n = e[t];
                              if (null != n && (null == n.task_id || "" === n.task_id) && !(eC.has(n.kind) || eP(n)))
                                  return eO(n);
                          }
                      })(t.steps)
                    : void 0;
        }
}
let tU = {
    steered: M.default.I9TkzD,
    queued: M.default.gbjY6o,
    restarting: M.default["1Q4Cs2"],
    answered: M.default["J6WZ+x"],
};
function tV(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAskForIdeas: r, onAnswerClarification: o } = e,
        c = (0, _.bG)([eI.default], () => eI.default.getCurrentUser()),
        d = n[n.length - 1];
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              className: e8.x7,
              children: (0, a.jsx)(tq, {
                  role: "assistant",
                  children: (0, a.jsx)(t$, { content: L.intl.string(M.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              className: e8.x7,
              children: n.map((e, u) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          tq,
                          {
                              role: "user",
                              children: (0, a.jsx)(tG, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? c?.id,
                                  accessories:
                                      null != n || null != e.disposition
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    null != n ? (0, a.jsx)(e9, { projectId: t, attachments: n }) : null,
                                                    null != e.disposition
                                                        ? (0, a.jsx)(g.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: L.intl.string(tU[e.disposition]),
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
                  let h = e.steps.filter((e) => !eC.has(e.kind)).length > 0,
                      m = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                      f = "plan_implemented" === e.kind && e === d,
                      p = null != e.clarification && e === d,
                      x =
                          "" !== e.content ||
                          null != e.proposal ||
                          null != e.ideas ||
                          null != e.clarification ||
                          null != e.secretRequest ||
                          f ||
                          m ||
                          (e.attachments?.length ?? 0) > 0,
                      v = !0 === e.interrupted;
                  return h || x || v
                      ? (0, a.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    h || v
                                        ? (0, a.jsx)(tq, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tN, {
                                                  projectId: t,
                                                  interrupted: v,
                                                  steps: e.steps,
                                                  active: !(0, ea.BL)(e),
                                                  inheritedActivity: tB(n, u),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                              }),
                                          })
                                        : null,
                                    x
                                        ? (0, a.jsx)(tq, {
                                              role: "assistant",
                                              children: (0, a.jsx)(t$, {
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
                                                      active: !(0, ea.BL)(e),
                                                      todos: e.todos,
                                                      onApprove: e === d ? l : void 0,
                                                      ideas: e.ideas,
                                                      clarification: p ? e.clarification : void 0,
                                                      onAnswerClarification: o,
                                                      attachments: e.attachments,
                                                      secretRequest: e.secretRequest,
                                                      onPickIdea: s,
                                                      offerIdeas: f,
                                                      onAskForIdeas: r,
                                                      inheritedActivity: tB(n, u),
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
function tq(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: e8.xk, children: n });
}
var tz = n(311656),
    tW = n(922016),
    tK = n(863610),
    tX = n(495557);
function tY(e) {
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
            className: tX.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(el.Ch, {
                ref: s,
                className: tX.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tw.PT, tX.bb),
                    children: eD.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var tZ = n(921461);
function tJ(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = i.useRef(null),
        s = i.useId(),
        [o, c] = i.useState(null),
        d = null != t && "end" !== t.phase,
        u = n ? M.default["0vH/5G"] : d ? M.default.Ly7F7x : M.default.QDGuNS,
        h = null != t && "" !== t.text,
        m = t?.session ?? null,
        f = h && null != m && o === m,
        p = i.useCallback(() => {
            h && null != m && c((e) => (e === m ? null : m));
        }, [h, m]),
        x = i.useCallback(() => c(null), []);
    return (0, a.jsx)(tW.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: f,
        onRequestClose: x,
        renderPopout: () => (0, a.jsx)(tY, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(eg.D, {
                innerRef: l,
                className: r()(tZ.h, h && tZ.X),
                "aria-label": L.intl.string(M.default.SzdX35),
                "aria-expanded": f,
                "aria-describedby": f ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)(tK.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: L.intl.string(u),
                    }),
                ],
            }),
    });
}
var tQ = n(662546),
    t0 = n(820081),
    t1 = n(329456);
function t2(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: t1.Vn,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return L.intl.string(M.default.TkPGOH);
                case "in_progress":
                    return L.intl.string(M.default["oK+fmd"]);
                default:
                    return L.intl.string(M.default.d7lieu);
            }
        })(t),
        children: "completed" === t ? (0, a.jsx)(t0.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function t6(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function t5(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: t1.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: t1.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(t2, { status: e.status }),
                            (0, a.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: t1.ku,
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
                      className: t1.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t2, { status: "pending" }),
                          (0, a.jsx)(g.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: t1.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function t3(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = t6(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: t1.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: t1.Ye,
                      children: [
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: L.intl.string(M.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: t1.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": L.intl.formatToPlainString(M.default["QG/EiF"], {
                                            completed: i,
                                            total: s,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(g.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: L.intl.formatToPlainString(M.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(t5, { todos: t, provisional: n }),
              ],
          });
}
var t4 = n(233263);
function t7(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: t4.B,
        role: "dialog",
        "aria-label": L.intl.string(M.default.qCRC6c),
        children: (0, a.jsx)(t3, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function t8(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = t6(t);
    return 0 === r
        ? null
        : (0, a.jsx)(tW.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(t7, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(eg.D, {
                      innerRef: l,
                      className: t4.T,
                      "aria-label": L.intl.formatToPlainString(M.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(tQ.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: L.intl.formatToPlainString(M.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var t9 = n(885574),
    ne = n(280894);
function nt(e) {
    return e.toLocaleString();
}
function nn(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: ne.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ne.mf,
                children: [
                    (0, a.jsx)(g.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nt((0, ef.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(g.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nt(n.input_tokens),
                    " in \xb7 ",
                    nt(n.output_tokens),
                    " out \xb7 ",
                    nt(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nt(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nl(e) {
    let { project: t } = e,
        n = (0, ef.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: ne.si,
        role: "dialog",
        "aria-label": L.intl.string(M.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: ne.Q$,
                children: (0, a.jsxs)("div", {
                    className: ne.mf,
                    children: [
                        (0, a.jsxs)(g.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nt((0, ef.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nn, { label: L.intl.string(M.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nn, { label: L.intl.string(M.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: ne.mf,
                children: [
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: L.intl.string(M.default["kILb+R"]),
                    }),
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ef.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ef.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function na(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tW.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nl, { project: t }),
        children: (e) =>
            (0, a.jsx)(eg.D, {
                innerRef: n,
                className: ne.Y$,
                "aria-label": L.intl.string(M.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(t9.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ni = n(258216);
function ns(e) {
    switch (e) {
        case "connecting":
            return L.intl.string(M.default.W7oyuf);
        case "failed":
            return L.intl.string(M.default.eE60xI);
        case "closed":
            return L.intl.string(M.default["yBmS+I"]);
    }
}
function nr(e) {
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
        className: ni.jf,
        children: [
            (0, a.jsx)("div", {
                className: ni.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(tJ, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(tz.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == i || 0 === i.length ? null : (0, a.jsx)(t8, { todos: i, provisional: s }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: ni.BP,
                      children: [
                          (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": L.intl.formatToPlainString(M.default["7SZZvj"], {
                                  runes: (0, ef.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: L.intl.formatToPlainString(M.default["4PFO2p"], {
                                  runes: (0, ef.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(na, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(g.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": L.intl.formatToPlainString(M.default.eDDdhB, { status: ns(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: ni.XF,
                      children: ns(o),
                  }),
        ],
    });
}
var no = n(506774),
    nc = n(651649),
    nd = n(670455);
let nu = "shownVibegrationsFeedbackProjectIds";
var nh = n(348800);
let nm = [L.intl.string(M.default["E+Q26x"]), L.intl.string(M.default["06/jqP"]), L.intl.string(M.default["7MCiK9"])];
function nf(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, _.bG)([ea.Ay], () => ea.Ay.getMessages(t), [t]),
        r = (0, _.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        o = (0, _.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        c = (0, _.bG)([ea.Ay], () => ea.Ay.getProjectUsage(t), [t]),
        d = (0, _.bG)([ea.Ay], () => ea.Ay.getThinkingActivity(t), [t]),
        u = (0, _.bG)([ea.Ay], () => ea.Ay.isCompacting(t), [t]),
        m = (0, _.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
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
            (0, h.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = ea.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ea.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((no.w.get(nu) ?? []).includes(e) ||
                            nc.A.possiblyShowFeedbackModal(nd.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = no.w.get(nu) ?? []).includes(e) || no.w.set(nu, [...l, e]),
                                    (0, tr.openModalLazy)(async () => {
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
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        b = i.useCallback(() => (0, h.fu)(t), [t]),
        j = i.useCallback((e) => v(e.implementation_prompt), [v]),
        y = i.useCallback((e) => v(e), [v]),
        k = i.useCallback(() => v(L.intl.string(M.default["3sTTBu"])), [v]),
        w = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        N = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        A = i.useCallback(() => v(L.intl.string(M.default.Jj8Ftb)), [v]),
        S = "open" === r && !o,
        I = s[s.length - 1],
        C = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return nm[e % nm.length];
        }, [t]),
        T = null != I && "assistant" === I.role && null != I.proposal,
        R = i.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, ea.BL)(t)) return t;
            }
        }, [s]),
        P = null != R,
        O = T && S ? A : void 0,
        D = R?.todos,
        F = R?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: nh.TE,
        children: [
            (0, a.jsx)(el.Ch, {
                ref: p,
                onScroll: x,
                "data-vibegrations-chat-log": !0,
                className: nh.N$,
                children: (0, a.jsx)(tV, {
                    projectId: t,
                    messages: s,
                    onApprove: O,
                    onPickIdea: S ? j : void 0,
                    onAskForIdeas: S ? k : void 0,
                    onAnswerClarification: S ? y : void 0,
                }),
            }),
            (0, a.jsxs)("div", {
                className: nh.im,
                children: [
                    (0, a.jsx)(nr, {
                        thinking: P,
                        thinkingActivity: d,
                        compacting: u,
                        todos: D,
                        provisionalTodo: F,
                        projectUsage: c,
                        connState: r,
                        modelSettings: m,
                        onModelSettingsChange: w,
                    }),
                    (0, a.jsx)(e_, {
                        canSend: S,
                        stopped: o,
                        running: P,
                        onSend: v,
                        onInterrupt: S ? b : void 0,
                        onUploadFile: N,
                        onDeleteFile: E,
                        onApprove: O,
                        onRegionCapture: l,
                        suggestion: 0 === s.length ? C : null,
                    }),
                ],
            }),
        ],
    });
}
var np = n(435558),
    ng = n(661531),
    nx = n(602853),
    nv = n(517461),
    nb = n(761929),
    nj = n(927506);
function ny(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, nx.r)(ng.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, nv.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, np.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, nb.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: nb.R.HORIZONTAL_LEFT,
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
        className: nj.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nj.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: nj.kL, style: { width: m }, children: s }),
        ],
    });
}
var nk = n(145615);
let nw = [6, 8, 10, 12],
    nN = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function n_(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let nE = i.memo(function (e) {
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
                h = nN.home.blob,
                m = nN.home.twink,
                f = nN.home.alpha,
                p = 0,
                g = nw[0],
                x = [],
                v = 0,
                b = 0,
                j = Array(8).fill("");
            function y() {
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
            y();
            let k = [];
            for (let e = 0; e < 8; e++) k.push([]);
            let w = new MutationObserver(y);
            w.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let N = -1;
            function _() {
                let e = Math.max(r, d);
                (e === d && N === g && c.length > 0) ||
                    ((d = e),
                    (N = g),
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
                    _(),
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
                for (let e = 0; e < 8; e++) k[e].length = 0;
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
                        k[a].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = k[e];
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
                                    x.length < 60 || b < 180 || p >= nw.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = nw[++p]),
                                (b = 0),
                                (N = -1),
                                _(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    g,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = nN[s.current] ?? nN.home,
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
var nA = n(408694);
function nS(e) {
    let { projectId: t } = e,
        n = (0, _.bG)([ea.Ay], () => (ea.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: nA.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: nA.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: nA.Fc }), (0, a.jsx)("div", { className: nA.dW })],
            }),
            (0, a.jsx)(nE, { state: n }),
        ],
    });
}
var nI = n(333007),
    nC = n(439108);
function nT(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function nR(e) {
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
                    a = nT({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        h = null == s ? null : nT(s);
    return (0, nI.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: nC.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: nC.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": L.intl.string(M.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: nC.F7,
                                  children: (0, a.jsx)("div", {
                                      className: nC.aK,
                                      children: (0, a.jsx)(g.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: L.intl.string(M.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: nC.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var nP = n(120426),
    nM = n(873727),
    nL = n(147248),
    nO = n(418842),
    nD = n(363195),
    nF = n(885386),
    nH = n(940107),
    nG = n(171936);
function n$(e) {
    let {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: s,
            header: o,
            mainClassName: d,
            content: u,
            sidebar: h,
        } = e,
        [m, f] = i.useState(null),
        p = (0, c.A)(n, l),
        g = p?.id ?? null;
    !(function (e, t) {
        let n = (0, _.bG)([nD.A], () => (0, nM.x4)(nD.A.theme)),
            l = (0, _.bG)([nL.A], () => nL.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, _.cf)([em.Ay], () => ({
                reducedMotion: em.Ay.useReducedMotion,
                fontScale: (0, nM.U0)(),
                highContrast: em.Ay.isHighContrastModeEnabled,
                forcedColors: em.Ay.useForcedColors,
                underlineLinks: em.Ay.alwaysShowLinkDecorations,
            })),
            d = nF.hH.useSetting(),
            u = (0, nO.C)(),
            h = i.useRef(null),
            m = i.useRef(0),
            f = i.useCallback(() => {
                let l = (0, nP.F1)(e, t);
                if (null == l) return;
                let i = {
                    revision: ++m.current,
                    baseTheme: n,
                    customTheme: (0, nM.Lq)(),
                    uiDensity: u,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, nH.W)(l, "set-env", i, {
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
                    n.target === (0, nP.F1)(e, t) && f();
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
    })(m, g);
    let [x, v] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, nG.mn)(t, () => (0, nP.F1)(m, g));
    }, [t, m, g]);
    let b = i.useCallback(() => {
            let e = (0, nP.F1)(m, g),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      v({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [m, g]),
        j = i.useCallback(
            (e) => {
                v(null), null != x && (0, nP.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        y = i.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = s && null != n && l.type === S.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(et.Mh, d),
                children: [o, (0, a.jsx)("div", { ref: f, className: et.fm, children: u })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(nR, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
        ],
    });
}
function nB(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            header: c,
            chatOpen: m,
            onCloseChat: f,
            previewReady: p,
            previewGate: g,
            channelMessages: x,
        } = e,
        v = i.useRef(null),
        [b, j] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === S.U4.MAIN) return (0, u.HV)(n), () => (0, u.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = v.current;
            if (null == e) return;
            function t() {
                null != e && j(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, u.Zq)(0), []);
    let y = Math.max(360, b - 320),
        k = null != x ? x.open : m,
        w = m || s.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: v,
        className: et.LB,
        children: (0, a.jsx)(n$, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: p,
            header: c,
            mainClassName: null == c ? void 0 : r()(et.ez, { [et.zt]: k }),
            content: (0, a.jsx)(Y, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: p,
                previewGate: g,
            }),
            sidebar: (e) =>
                null != x
                    ? (0, a.jsx)(ny, {
                          open: x.open,
                          maxWidth: y,
                          onWidthChange: u.Zq,
                          children: x.open
                              ? (0, a.jsx)(en, { channel: x.channel, guild: x.guild, onClose: x.onClose })
                              : null,
                      })
                    : null != t && w
                      ? (0, a.jsx)(ny, {
                            open: m,
                            maxWidth: y,
                            onWidthChange: u.Zq,
                            children: (0, a.jsxs)("div", {
                                className: et.cO,
                                children: [
                                    (0, a.jsx)(nS, { projectId: t }),
                                    (0, a.jsx)(d.Ay, {
                                        "aria-label": L.intl.string(L.t["/VQax8"]),
                                        toolbar:
                                            null == f
                                                ? null
                                                : (0, a.jsx)(d.Ay.Icon, {
                                                      icon: o.P,
                                                      tooltip: L.intl.string(M.default.YdgE0j),
                                                      onClick: f,
                                                  }),
                                        children: (0, a.jsx)(d.Ay.Title, { children: L.intl.string(L.t["/VQax8"]) }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: et.cb,
                                        children: (0, a.jsx)(nf, { projectId: t, onRegionCapture: e }, t),
                                    }),
                                ],
                            }),
                        })
                      : null,
        }),
    });
}
