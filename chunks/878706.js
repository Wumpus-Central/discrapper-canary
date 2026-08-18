n.d(t, { A: () => t_ });
var l,
    a = n(477900),
    s = n(582128),
    i = n(672929),
    r = n(948230),
    o = n(998939),
    c = n(289873),
    d = n(821609),
    u = n(323384),
    h = n(834730),
    m = n(580954),
    p = n(297264),
    f = n(812901),
    g = n(317608),
    x = n(17928),
    v = n(956518),
    k = n(627363),
    b = n(869146),
    j = n(625180),
    y = n(91242),
    _ = n(207371),
    N = n(165610),
    E = n(652215),
    w =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    S = n(503698),
    A = n.n(S),
    C = n(612749);
function I(e) {
    let { title: t, body: n, wide: l = !1, children: s } = e;
    return (0, a.jsxs)("div", {
        className: A()(C.Bf, l && C.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: C.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            s,
        ],
    });
}
var T = n(818085),
    R = n(375708),
    P = n(616694);
function O(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: i } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: i,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = s.useMemo(() => (0, N.VA)(t, n), [t, n]),
                        a = s.useMemo(() => n, [l]),
                        i = (0, x.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, x.bG)(
                            [b.A, y.A],
                            () => b.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, k.YY)(t),
                        d = (0, _.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, m] = s.useState(null),
                        p = h === l;
                    return {
                        surface: a,
                        setFailed: s.useCallback(() => m(l), [l]),
                        lifecycle: (0, N.x1)(i)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: i }
                            : p
                              ? { state: "error" }
                              : i?.state === "loading"
                                ? { state: "loading", frame: i }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && u
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: r } = i;
            return (
                s.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                i
            );
        })({ applicationId: t, surface: n }),
        r = s.useMemo(() => (0, N.VA)(t, n), [t, n]);
    switch (
        (s.useEffect(() => {
            if ((0, N.Yf)(n) === N.sV.MAIN) return () => (0, m.A)().leaveFrame(r);
        }, [r, n]),
        i)
    ) {
        case w.Launched:
            return (0, a.jsx)(g.A, { frameId: l.id, level: f.A.WithinAppContent, className: P.Z7 });
        case w.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(I, {
                    title: R.intl.string(T.default["4f6Vkr"]),
                    body: R.intl.string(T.default.LJ2q1H),
                }),
            });
        case w.NoApplication:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["6xTawd"]),
                    }),
                ],
            });
        case w.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(I, {
                    title: R.intl.string(T.default.FHOJiH),
                    body: R.intl.string(T.default["1yLQoV"]),
                }),
            });
        case w.Error:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: R.intl.string(T.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: P.tj,
                        children: R.intl.string(T.default["1RCbQT"]),
                    }),
                ],
            });
        case w.AwaitingLaunch:
        case w.Loading:
            return (0, a.jsx)("div", { className: P.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var M = n(668917);
function L(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: r } = e,
        o = (0, i.A)(t, n);
    return (s.useEffect(() => {
        r?.type === "permissions" && null != o && (0, m.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: M.q, children: (0, a.jsx)(c.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: M.q,
                children: (0, a.jsx)(I, {
                    wide: !0,
                    title: R.intl.string(T.default.DYwf2n),
                    body: R.intl.string(T.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: R.intl.string(T.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : l
            ? null != t
                ? (0, a.jsx)(O, { applicationId: t, surface: n })
                : null
            : (0, a.jsxs)("div", {
                  className: M.q,
                  children: [
                      (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: R.intl.string(T.default["6xTawd"]),
                      }),
                  ],
              });
}
var G = n(689175),
    D = n(783791);
n(323874), n(14289), n(35956), n(321073);
var H = n(866665),
    B = n(588975),
    U = n(428610),
    V = n(826745),
    F = n(29080),
    W = n(559647),
    z = n(285796),
    $ = n(673724),
    X = n(514042),
    K = n(939249),
    q = n(195219);
function Y(e) {
    return A()(q._B, { [q.ND]: e });
}
function Z(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: s, children: i, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: q.gJ, onError: r })
                : (0, a.jsx)(X.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: q.Wd,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", className: q.Rr, children: t }),
                    s,
                ],
            }),
            i,
        ],
    });
}
function J(e) {
    return (0, a.jsx)("div", { className: Y(e.compact ?? !1), children: Z(e) });
}
function Q(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: s, onThumbError: i } = e;
    return (0, a.jsx)(K.D, {
        className: A()(Y(!0), q.w8),
        onClick: s,
        "aria-label": l,
        children: Z({ name: t, thumbSrc: n, compact: !0, onThumbError: i }),
    });
}
var ee = n(17117);
let et = 0;
function en(e) {
    let {
            canSend: t,
            running: n,
            onSend: l,
            onInterrupt: i,
            onUploadFile: r,
            onDeleteFile: o,
            onApprove: d,
            onRegionCapture: u,
        } = e,
        [h, m] = s.useState(""),
        [p, f] = s.useState([]),
        [g, x] = s.useState(!1),
        [v, k] = s.useState(!1),
        [b, j] = s.useState(!1);
    s.useEffect(() => {
        n || j(!1);
    }, [n]);
    let y = s.useRef(null),
        _ = s.useRef([]),
        N = s.useRef(new Set()),
        E = s.useRef(o);
    E.current = o;
    let w = s.useCallback((e) => {
            (_.current = e), f(e);
        }, []),
        S = s.useCallback((e) => {
            E.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    s.useEffect(() => {
        let e = N.current;
        return () => {
            for (let t of _.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && S(t.ref);
        };
    }, [S]);
    let A = s.useCallback(
            (e, t) => {
                if (N.current.has(e)) return;
                let n = _.current;
                n.some((t) => t.localId === e) && w(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [w],
        ),
        C = s.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [..._.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++et,
                        s = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, $.x5)(l.size, e)) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.cI7t94, { size: (0, $.ZJ)((0, $.yr)(e)) }),
                        });
                        continue;
                    }
                    let i = $.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...s, previewUrl: i }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (w(t), n))
                    r(e).then(
                        (e) => {
                            N.current.has(l) ? S(e) : A(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            N.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                A(l, { status: "error", errorText: R.intl.string(T.default.GwEHvn) }));
                        },
                    );
            },
            [S, r, A, w],
        ),
        I = s.useCallback(async () => {
            if (null != u && !v) {
                k(!0);
                try {
                    let e = await u();
                    null != e && C([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        w([
                            ..._.current,
                            {
                                localId: ++et,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: R.intl.string(T.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    k(!1);
                }
            }
        }, [u, v, C, w]),
        P = s.useCallback(
            (e) => {
                let t = _.current,
                    n = t.find((t) => t.localId === e);
                N.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && S(n.ref),
                    w(t.filter((t) => t.localId !== e));
            },
            [S, w],
        ),
        O = p.every((e) => "ready" === e.status),
        M = "" !== h.trim() || p.length > 0,
        L = t && M && O,
        G = s.useCallback(() => {
            if (!L) return;
            let e = _.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (l(h, e.length > 0 ? e : void 0), _.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            m(""), w([]);
        }, [L, h, l, w]),
        D = s.useCallback(
            (e) => {
                e.preventDefault(), G();
            },
            [G],
        ),
        z = s.useCallback(() => {
            null == i || b || (j(!0), i());
        }, [i, b]),
        X = s.useCallback(
            (e) => {
                if ("Escape" === e.key && n && null != i && !b) {
                    e.preventDefault(), e.stopPropagation(), z();
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, n, i, b, z],
        ),
        K = s.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), C(n));
            },
            [t, C],
        ),
        q = s.useCallback(
            (e) => {
                e.preventDefault(), x(!1), t && C(Array.from(e.dataTransfer.files));
            },
            [t, C],
        ),
        Y = s.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), x(!0));
        }, []),
        Z = s.useCallback(
            (e) => {
                C(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [C],
        );
    return (0, a.jsxs)("form", {
        onSubmit: D,
        onDrop: q,
        onDragOver: Y,
        onDragLeave: () => x(!1),
        className: g ? `${ee.DA} ${ee.pV}` : ee.DA,
        children: [
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: ee.lN,
                      children: p.map((e) => (0, a.jsx)(el, { draft: e, onRemove: P }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ee.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: y,
                        type: "file",
                        multiple: !0,
                        onChange: Z,
                        className: ee.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(H.m, {
                        text: R.intl.string(T.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: ee.Y0,
                            disabled: !t,
                            onClick: () => y.current?.click(),
                            "aria-label": R.intl.string(T.default.gUn10I),
                            children: (0, a.jsx)(B.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(H.m, {
                        text: R.intl.string(T.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: ee.Y0,
                            disabled: null == u || !t || v,
                            onClick: I,
                            "aria-label": R.intl.string(T.default.B5gWPk),
                            children: v
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ee.Rk })
                                : (0, a.jsx)(U.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(V.y, {
                        value: h,
                        onChange: (e) => m(e.currentTarget.value),
                        onKeyDown: X,
                        onPaste: K,
                        placeholder: t
                            ? R.intl.string(n ? T.default["67PpcP"] : T.default.ahRdoJ)
                            : R.intl.string(T.default.nm4w9P),
                        disabled: !t,
                        "aria-label": R.intl.string(T.default.OPr66w),
                        rows: 1,
                        className: ee.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: ee.fF,
                        children: [
                            (0, a.jsx)("div", { className: ee.MT }),
                            n && null != i
                                ? (0, a.jsx)(H.m, {
                                      text: R.intl.string(T.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: ee.AW,
                                          disabled: b,
                                          onClick: z,
                                          "aria-label": R.intl.string(T.default.KdgI4k),
                                          children: (0, a.jsx)(F.w, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: ee.Mx,
                                          }),
                                      }),
                                  })
                                : null,
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: ee.rt,
                                disabled: !L,
                                "aria-label": R.intl.string(T.default["22GHMt"]),
                                children: (0, a.jsx)(W.SendMessageIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: ee.Mx,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function el(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(J, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ee.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ee.o1,
                onClick: () => n(t.localId),
                "aria-label": R.intl.string(T.default["3HWvgk"]),
                children: (0, a.jsx)(z.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
n(134528), n(947204);
var ea = n(320448),
    es = n(847374),
    ei = n(46054),
    er = n(443865),
    eo = n(843614);
function ec(e) {
    let { idea: t, onPick: n } = e,
        l = s.useId(),
        i = null == n;
    return (0, a.jsxs)(K.D, {
        className: i ? `${eo.Nr} ${eo.xe}` : eo.Nr,
        onClick: i ? void 0 : () => n(t),
        "aria-label": R.intl.formatToPlainString(T.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": i,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: eo.JJ,
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
function ed(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: eo.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eo.wx,
                children: [
                    (0, a.jsx)(er.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: R.intl.string(T.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(ec, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function eu(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: eo.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: eo.I1,
                children: R.intl.string(T.default.tG5PBo),
            }),
            (0, a.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: R.intl.string(T.default.cwTe5o),
            }),
        ],
    });
}
var eh = n(256905),
    em = n(289149);
function ep(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(ef);
    return (0, a.jsx)("div", {
        className: em.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eg, { name: e.name }, n)
                : ef(e)
                  ? (0, a.jsx)(ev, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(ex, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function ef(e) {
    return null != e.id && $.Wb.has(e.content_type);
}
function eg(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? R.intl.formatToPlainString(T.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(J, { name: l, compact: !0 });
}
function ex(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
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
    let c = s.useCallback(() => {
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
    return i
        ? (0, a.jsx)(eg, { name: l, unavailable: !0 })
        : (0, a.jsx)(Q, {
              name: l,
              thumbSrc: null,
              ariaLabel: R.intl.formatToPlainString(T.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function ev(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l } = e,
        { id: i, name: r } = n[l],
        [c, d] = s.useState(null),
        [u, h] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, i), (0, o.PK)(t, i)]).then(
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
    }, [t, i]);
    let m = s.useCallback(() => {
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
                  (0, eh.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(eg, { name: r, unavailable: !0 })
        : (0, a.jsx)(Q, {
              name: r,
              thumbSrc: c,
              ariaLabel: R.intl.formatToPlainString(T.default.QUFLUq, { name: r }),
              onClick: m,
              onThumbError: () => {
                  d(null),
                      (0, o.n6)(t, i).then(
                          (e) => {
                              e || h(!0);
                          },
                          () => {},
                      );
              },
          });
}
var ek = n(84206);
function eb(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ek.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: ek.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ek.uR,
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
function ej(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: ek.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: ek.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: R.intl.string(T.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: ek.dr,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: R.intl.string(R.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: ek.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: ek.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ek.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: ek.UZ,
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
                      className: ek.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(R.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: ek.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ek.Xs,
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
            (0, a.jsx)(eb, { label: R.intl.string(T.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(eb, { label: R.intl.string(T.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: ek.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: R.intl.string(T.default.GYoWRk),
                          }),
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: ek.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ey = n(700766);
function e_(e) {
    var t;
    let { projectId: n, group: l } = e,
        [i, r] = s.useState(!1),
        o = s.useId(),
        c = s.useCallback(() => r((e) => !e), []),
        d =
            "error" === (t = l.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default",
        u = null != n ? l.screenshots : [];
    if (0 === l.technical.length && 0 === u.length)
        return (0, a.jsx)("li", {
            "data-step-kind": l.step.kind,
            className: ey.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: ey.iq,
                children: l.summary,
            }),
        });
    let m = i ? es.a : ea._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: ey.Dx,
        children: [
            (0, a.jsxs)(K.D, {
                tag: "div",
                className: ey.kG,
                "aria-expanded": i,
                "aria-controls": o,
                "aria-label": R.intl.formatToPlainString(T.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: ey.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: ey.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !i,
                className: ey.yJ,
                children: [
                    l.technical.map((e, t) =>
                        (0, a.jsx)(
                            h.E,
                            { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                            t,
                        ),
                    ),
                    null != n && u.length > 0
                        ? (0, a.jsx)("div", {
                              className: ey.y8,
                              children: u.map((e) => (0, a.jsx)(eE, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eN() {}
function eE(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, i] = s.useState(null),
        [r, c] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            (0, o.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
    let d = R.intl.string(T.default["3Hq9pQ"]),
        u = s.useCallback(() => {
            (0, o.aF)(t, n).then((e) => {
                (0, eh.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eN);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(Q, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var ew = n(820081),
    eS = n(590223);
function eA(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: eS.Vn,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return R.intl.string(T.default.TkPGOH);
                case "in_progress":
                    return R.intl.string(T.default["oK+fmd"]);
                default:
                    return R.intl.string(T.default.d7lieu);
            }
        })(t),
        children: "completed" === t ? (0, a.jsx)(ew.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function eC(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function eI(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: eS.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: eS.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(eA, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: eS.ku,
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
                      className: eS.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(eA, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: eS.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eT(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: s, total: i } = eC(t);
    return 0 === i
        ? null
        : (0, a.jsxs)("article", {
              className: eS.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: eS.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: eS.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], {
                                            completed: s,
                                            total: i,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: R.intl.formatToPlainString(T.default.bQvqly, { completed: s, total: i }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eI, { todos: t, provisional: n }),
              ],
          });
}
let eR = new Set([
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
function eP(e) {
    return "running" === e;
}
function eO(e) {
    let t = [],
        n = [],
        l = null;
    for (let a of e) {
        let e;
        if ("preview_screenshot" === a.kind) {
            let e =
                "preview_screenshot" === a.kind && null != a.screenshot_id && "" !== a.screenshot_id
                    ? [a.screenshot_id]
                    : [];
            null != l ? l.screenshots.push(...e) : n.push(...e);
            continue;
        }
        "healthchecking" === a.kind && ((n = []), (l = null)), "healthcheck_failed" === a.kind && (n = []);
        let s = (function (e) {
                let t = [];
                return (
                    null != e.name && "" !== e.name && t.push(e.name),
                    null != e.detail && "" !== e.detail && t.push(e.detail),
                    null != e.message && "" !== e.message && t.push(e.message),
                    null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                    t
                );
            })(a),
            i = t[t.length - 1];
        if ("writing_command" === a.kind && (null == a.friendly || "" === a.friendly) && null != i) {
            i.technical.push(...s);
            continue;
        }
        let r = (function (e) {
                switch (e.kind) {
                    case "thinking":
                        return R.intl.string(T.default.K7TkAL);
                    case "writing_command":
                        return e.friendly ?? e.name ?? R.intl.string(T.default.nv6pUM);
                    case "assembling":
                        return R.intl.string(T.default["9G3ZmA"]);
                    case "installing_deps":
                        return R.intl.string(T.default.VZuRug);
                    case "building":
                        return R.intl.string(T.default["s+ylXP"]);
                    case "bundling":
                        return R.intl.string(T.default.rEQlMx);
                    case "committing":
                        return R.intl.string(T.default.Yvyw1H);
                    case "built":
                        return R.intl.string(T.default.hOcVAj);
                    case "build_error":
                        return R.intl.string(T.default["6L9Vwt"]);
                    case "healthchecking":
                    case "preview_connecting":
                        return R.intl.string(T.default.sz8yAj);
                    case "awaiting_auth":
                        return R.intl.string(T.default["orD+xo"]);
                    case "healthcheck_passed":
                        return R.intl.string(T.default["x+sqTG"]);
                    case "healthcheck_failed":
                        return R.intl.string(T.default.FUWbq1);
                    case "deploying":
                        return R.intl.string(T.default.wcXX8Z);
                    case "preview_ready":
                        return R.intl.string(T.default["78YNh7"]);
                    case "error":
                    case "terminal_error":
                        return R.intl.string(T.default.j3hBoA);
                    default:
                        return R.intl.string(T.default.nv6pUM);
                }
            })(a),
            o = s.filter((e) => e !== r);
        null != i && i.summary === r
            ? (i.technical.push(...o), (e = i))
            : ((e = { step: a, summary: r, technical: o, screenshots: [] }), t.push(e)),
            "healthcheck_passed" === a.kind && (e.screenshots.push(...n.splice(0)), (l = e));
    }
    return t;
}
var eM = n(282878);
function eL(e) {
    let { task: t } = e,
        [n, l] = s.useState(null),
        i = s.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = s.useCallback(() => l(!o), [o]),
        d = eP(t.state),
        u = (function (e) {
            switch (e) {
                case "running":
                    return R.intl.string(T.default["fW7T+d"]);
                case "succeeded":
                    return R.intl.string(T.default.X3c4hc);
                case "failed":
                    return R.intl.string(T.default.LK4Wsd);
                case "cancelled":
                    return R.intl.string(T.default.msWvKA);
                case "incomplete":
                    return R.intl.string(T.default.esfcU6);
            }
        })(t.state),
        m = o ? es.a : ea._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: eM.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: eM.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eM.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: eM.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eM.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(K.D, {
                      tag: "div",
                      className: A()(eM.qI, eM.EZ),
                      "aria-expanded": o,
                      "aria-controls": i,
                      "aria-label": R.intl.formatToPlainString(T.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: eM.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: i,
                      hidden: !o,
                      className: eM.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eM.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(e_, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: eM.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var eG = n(692228),
    eD = n(742715);
function eH(e) {
    let { projectId: t, item: n, attachments: l } = e,
        [i, r] = s.useState(!1),
        o = s.useId(),
        c = s.useCallback(() => r((e) => !e), []),
        d = null != n.label && "" !== n.label,
        u = i ? ea._ : es.a,
        m = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: ey.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(e_, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: ey.On, children: e.tasks.map((e) => (0, a.jsx)(eL, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return d
        ? (0, a.jsxs)("li", {
              className: A()(ey.ky, eG.XR, ey.rn),
              children: [
                  (0, a.jsxs)(K.D, {
                      tag: "div",
                      className: ey.rN,
                      "aria-expanded": !i,
                      "aria-controls": o,
                      "aria-label": R.intl.formatToPlainString(T.default.s1wx5H, { activity: n.label }),
                      onClick: c,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: ey.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(u, { size: "xs", color: "currentColor", className: ey.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: o, hidden: i, className: ey.MZ, children: m }),
                  l,
              ],
          })
        : (0, a.jsxs)("li", { className: A()(ey.ky, eG.XR, ey.rn), children: [m, l] });
}
function eB(e) {
    let {
            projectId: t,
            steps: n,
            announcement: l,
            content: i,
            proposal: r,
            interrupted: o = !1,
            provisionalTodo: c,
            active: d = !1,
            todos: u,
            onApprove: m,
            ideas: p,
            attachments: f,
            onPickIdea: g,
            offerIdeas: x,
            onAskForIdeas: v,
        } = e,
        { items: k } = s.useMemo(
            () =>
                (function (e) {
                    let { turnActive: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = [],
                        l = new Map(),
                        a = [],
                        s = null,
                        i = null,
                        r = null,
                        o = [],
                        c = null;
                    function d() {
                        null != r && (r.groups = eO(o)), (r = null), (o = []);
                    }
                    function u() {
                        d(), (c = null), (i = null);
                    }
                    function h(e) {
                        return (
                            null == i && ((i = { type: "activity", key: `activity-${e}`, blocks: [] }), n.push(i)), i
                        );
                    }
                    for (let [t, m] of e.entries()) {
                        if (null != m.task_id && "" !== m.task_id) {
                            let e = (function (e, t) {
                                let n = e.task_id,
                                    r = l.get(n);
                                if (null != r)
                                    return (
                                        "task_started" === e.kind &&
                                            null != e.task_title &&
                                            "" !== e.task_title &&
                                            (r.title = e.task_title),
                                        null != i &&
                                            null == i.label &&
                                            null != e.task_group_label &&
                                            (i.label = e.task_group_label),
                                        r
                                    );
                                let o =
                                    null != e.task_group_label && "" !== e.task_group_label
                                        ? e.task_group_label
                                        : void 0;
                                null != c &&
                                    c.groupId !== e.task_group_id &&
                                    ((c = null), null != o && null != i && null != i.label && i.label !== o && u());
                                let m = h(t);
                                null == m.label && null != o && (m.label = o), d(), (s = null);
                                let p = {
                                    taskId: n,
                                    title:
                                        null != e.task_title && "" !== e.task_title
                                            ? e.task_title
                                            : R.intl.string(T.default.MdXWEK),
                                    state: "running",
                                    groups: [],
                                    rawSteps: [],
                                };
                                return (
                                    l.set(n, p),
                                    a.push(p),
                                    null == c &&
                                        ((c = {
                                            type: "workstreams",
                                            key: `workstreams-${t}`,
                                            ...(null != e.task_group_id ? { groupId: e.task_group_id } : {}),
                                            tasks: [],
                                        }),
                                        m.blocks.push(c)),
                                    c.tasks.push(p),
                                    p
                                );
                            })(m, t);
                            if ("task_finished" === m.kind) {
                                null != m.task_state && (e.state = m.task_state),
                                    null != m.detail && "" !== m.detail && (e.detail = m.detail);
                                continue;
                            }
                            if (eR.has(m.kind)) continue;
                            e.rawSteps.push(m);
                            continue;
                        }
                        if ("thinking" === m.kind) {
                            s = null;
                            continue;
                        }
                        if ("assistant_delta" === m.kind) {
                            let e = m.message ?? "";
                            "" !== e &&
                                (null == s
                                    ? (u(), (s = { type: "message", key: `message-${t}`, content: e }), n.push(s))
                                    : (s.content = e)),
                                !0 === m.message_finished && (s = null);
                            continue;
                        }
                        if (eR.has(m.kind)) continue;
                        let e = h(t);
                        (s = null),
                            (c = null),
                            o.push(m),
                            null == r && ((r = { type: "rows", key: `rows-${t}`, groups: [] }), e.blocks.push(r));
                    }
                    for (let e of (d(), a)) {
                        e.groups = eO(e.rawSteps);
                        let n = e.groups[e.groups.length - 1]?.summary;
                        null != n && (e.latestActivity = n), !t && eP(e.state) && (e.state = "incomplete");
                    }
                    return { items: n, tasks: a };
                })(n, { turnActive: d }),
            [n, d],
        ),
        b = k.at(-1),
        j = b?.type === "message" && b.content.trim() === i.trim(),
        y = null == r && "" !== i && !j,
        _ = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, lastItemType: l } = e;
            return t
                ? n
                    ? "closing"
                    : "message" === l
                      ? "streamed"
                      : "activity" === l
                        ? "activity"
                        : "standalone"
                : "none";
        })({ hasAttachments: null != f && f.length > 0, showsClosingMessage: y, lastItemType: b?.type }),
        N = null == f ? null : (0, a.jsx)(ep, { projectId: t, attachments: f }),
        E = null == N ? null : (0, a.jsx)("div", { className: ey.MT, children: N });
    return (0, a.jsxs)("div", {
        className: ey.ue,
        children: [
            null != l && "" !== l
                ? (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: A()(ey.ky, ey.Xt, eG.XR),
                      children: l,
                  })
                : null,
            null != u && u.length > 0
                ? (0, a.jsx)("div", {
                      className: A()(ey.ky, eG.XR),
                      children: (0, a.jsx)(eT, { todos: u, provisional: c }),
                  })
                : null,
            k.length > 0
                ? (0, a.jsx)("ol", {
                      className: ey.dO,
                      children: k.map((e) =>
                          "message" === e.type
                              ? (0, a.jsxs)(
                                    "li",
                                    {
                                        className: A()(ey.ky, eG.XR),
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: A()(eD.PT, ey.cW),
                                                children: ei.A.parse(e.content, !0, {
                                                    allowList: !0,
                                                    allowHeading: !0,
                                                    allowLinks: !0,
                                                }),
                                            }),
                                            "streamed" === _ && e.key === b?.key ? E : null,
                                        ],
                                    },
                                    e.key,
                                )
                              : (0, a.jsx)(
                                    eH,
                                    {
                                        projectId: t,
                                        item: e,
                                        attachments: "activity" === _ && e.key === b?.key ? N : null,
                                    },
                                    e.key,
                                ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: A()(ey.ky, eG.XR),
                      children: (0, a.jsx)(ej, { proposal: r, onApprove: m }),
                  })
                : y
                  ? (0, a.jsxs)("div", {
                        className: A()(ey.ky, eG.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: A()(eD.PT, ey.cW),
                                children: ei.A.parse(i, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === _ ? E : null,
                            !0 === x
                                ? (0, a.jsx)("div", { className: ey.IN, children: (0, a.jsx)(eu, { onAsk: v }) })
                                : null,
                        ],
                    })
                  : null,
            "standalone" === _ ? (0, a.jsx)("div", { className: A()(ey.ky, eG.XR), children: E }) : null,
            null != p && p.length > 0
                ? (0, a.jsx)("div", { className: A()(ey.ky, eG.XR), children: (0, a.jsx)(ed, { ideas: p, onPick: g }) })
                : null,
            !0 !== x || y
                ? null
                : (0, a.jsx)("div", { className: A()(ey.ky, eG.XR), children: (0, a.jsx)(eu, { onAsk: v }) }),
            o
                ? (0, a.jsx)("div", {
                      className: A()(ey.ky, eG.XR),
                      children: (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          selectable: !0,
                          children: R.intl.string(T.default["5T7DSm"]),
                      }),
                  })
                : null,
        ],
    });
}
let eU = { steered: T.default.I9TkzD, queued: T.default.gbjY6o, restarting: T.default["1Q4Cs2"] };
function eV(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAskForIdeas: i } = e,
        r = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: em.x7,
        children: n.map((e) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eF,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: A()(em.B2, eG.XR),
                            children: [
                                "" !== e.content
                                    ? (0, a.jsx)(h.E, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          selectable: !0,
                                          children: e.content,
                                      })
                                    : null,
                                null != e.attachments && e.attachments.length > 0
                                    ? (0, a.jsx)(ep, { projectId: t, attachments: e.attachments })
                                    : null,
                                null != e.disposition
                                    ? (0, a.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: R.intl.string(eU[e.disposition]),
                                      })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let n = e.steps.filter((e) => !eR.has(e.kind)).length > 0,
                o = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                c = "plan_implemented" === e.kind && e === r;
            return "" !== e.content ||
                null != e.proposal ||
                null != e.ideas ||
                c ||
                n ||
                o ||
                null != e.announcement ||
                null != e.todos ||
                !0 === e.interrupted ||
                (e.attachments?.length ?? 0) !== 0
                ? (0, a.jsx)(
                      eF,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(eB, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              interrupted: !0 === e.interrupted,
                              provisionalTodo: e.provisionalTodo,
                              active: !(0, D.B)(e),
                              todos: e.todos,
                              onApprove: e === r ? l : void 0,
                              ideas: e.ideas,
                              attachments: e.attachments,
                              onPickIdea: s,
                              offerIdeas: c,
                              onAskForIdeas: i,
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function eF(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: em.xk, children: n });
}
var eW = n(379307),
    ez = n(922016),
    e$ = n(863610),
    eX = n(446892);
function eK(e) {
    let { activity: t, id: n } = e,
        l = t?.text ?? "",
        i = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            i.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: eX.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(G.Ch, {
                ref: i,
                className: eX.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: A()(eD.PT, eX.bb),
                    children: ei.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var eq = n(249680);
function eY(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = s.useRef(null),
        i = s.useId(),
        [r, o] = s.useState(null),
        c = null != t && "end" !== t.phase,
        d = n ? T.default["0vH/5G"] : c ? T.default.Ly7F7x : T.default.QDGuNS,
        u = null != t && "" !== t.text,
        m = t?.session ?? null,
        p = u && null != m && r === m,
        f = s.useCallback(() => {
            u && null != m && o((e) => (e === m ? null : m));
        }, [u, m]),
        g = s.useCallback(() => o(null), []);
    return (0, a.jsx)(ez.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(eK, { id: i, activity: t }),
        children: () =>
            (0, a.jsxs)(K.D, {
                innerRef: l,
                className: A()(eq.h, u && eq.X),
                "aria-label": R.intl.string(T.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? i : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: f,
                children: [
                    (0, a.jsx)(e$.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: R.intl.string(d),
                    }),
                ],
            }),
    });
}
var eZ = n(662546),
    eJ = n(173016);
function eQ(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: eJ.B,
        role: "dialog",
        "aria-label": R.intl.string(T.default.qCRC6c),
        children: (0, a.jsx)(eT, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function e0(e) {
    let { todos: t, provisional: n } = e,
        l = s.useRef(null),
        { completed: i, total: r } = eC(t);
    return 0 === r
        ? null
        : (0, a.jsx)(ez.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(eQ, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(K.D, {
                      innerRef: l,
                      className: eJ.T,
                      "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], { completed: i, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(eZ.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: R.intl.formatToPlainString(T.default["6zuiBa"], { completed: i, total: r }),
                          }),
                      ],
                  }),
          });
}
var e1 = n(885574),
    e2 = n(677175);
function e6(e) {
    return e.toLocaleString();
}
function e5(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: e2.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: e2.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [e6((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    e6(n.input_tokens),
                    " in \xb7 ",
                    e6(n.output_tokens),
                    " out \xb7 ",
                    e6(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    e6(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function e8(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: e2.si,
        role: "dialog",
        "aria-label": R.intl.string(T.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: e2.Q$,
                children: (0, a.jsxs)("div", {
                    className: e2.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [e6((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(e5, { label: R.intl.string(T.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(e5, { label: R.intl.string(T.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: e2.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, $.sj)(n) ? "\u2014" : `${Math.round(100 * (0, $.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, a.jsx)(ez.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(e8, { project: t }),
        children: (e) =>
            (0, a.jsx)(K.D, {
                innerRef: n,
                className: e2.Y$,
                "aria-label": R.intl.string(T.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(e1.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var e3 = n(154861);
function e4(e) {
    switch (e) {
        case "connecting":
            return R.intl.string(T.default.W7oyuf);
        case "failed":
            return R.intl.string(T.default.eE60xI);
        case "closed":
            return R.intl.string(T.default["yBmS+I"]);
    }
}
function e9(e) {
    let {
        thinking: t,
        thinkingActivity: n,
        compacting: l,
        todos: s,
        provisionalTodo: i,
        projectUsage: r,
        connState: o,
        modelSettings: c,
        onModelSettingsChange: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: e3.jf,
        children: [
            (0, a.jsx)("div", {
                className: e3.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(eY, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(eW.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == s || 0 === s.length ? null : (0, a.jsx)(e0, { todos: s, provisional: i }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: e3.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": R.intl.formatToPlainString(T.default["7SZZvj"], {
                                  runes: (0, $.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: R.intl.formatToPlainString(T.default["4PFO2p"], {
                                  runes: (0, $.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(e7, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": R.intl.formatToPlainString(T.default.eDDdhB, { status: e4(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: e3.XF,
                      children: e4(o),
                  }),
        ],
    });
}
var te = n(506774),
    tt = n(192308),
    tn = n(651649),
    tl = n(670455);
let ta = "shownVibegrationsFeedbackProjectIds";
var ts = n(104071);
function ti(e) {
    let { projectId: t, onRegionCapture: l } = e,
        i = (0, x.bG)([D.A], () => D.A.getMessages(t), [t]),
        r = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([D.A], () => D.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([D.A], () => D.A.getThinkingActivity(t), [t]),
        u = (0, x.bG)([D.A], () => D.A.isCompacting(t), [t]),
        h = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        m = s.useRef(null),
        p = s.useRef(null),
        f = s.useRef(!0);
    s.useEffect(() => {
        f.current && p.current?.scrollToBottom();
    }, [i]);
    let g = s.useCallback(() => {
        let e = p.current;
        null != e && (f.current = 32 > e.getDistanceFromBottom());
    }, []);
    s.useLayoutEffect(() => {
        let e = m.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    s = a?.contentRect.width ?? e.getBoundingClientRect().width;
                s === t ||
                    ((t = s),
                    f.current &&
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
        s.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        s.useEffect(
            () => () =>
                (function (e) {
                    let t = D.A.getMessages(e).filter((e) => "assistant" === e.role && (0, D.B)(e)).length;
                    !(t < 3) &&
                        ((te.w.get(ta) ?? []).includes(e) ||
                            tn.A.possiblyShowFeedbackModal(tl.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = te.w.get(ta) ?? []).includes(e) || te.w.set(ta, [...l, e]),
                                    (0, tt.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("104079"),
                                            n.e("222255"),
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
    let v = s.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        k = s.useCallback(() => (0, o.fu)(t), [t]),
        b = s.useCallback((e) => v(e.implementation_prompt), [v]),
        j = s.useCallback(() => v(R.intl.string(T.default["3sTTBu"])), [v]),
        y = s.useCallback((e) => (0, o.XZ)(t, e), [t]),
        _ = s.useCallback((e) => (0, o.vX)(t, e), [t]),
        N = s.useCallback((e) => (0, o.Vm)(t, e), [t]),
        E = s.useCallback(() => v(R.intl.string(T.default.Jj8Ftb)), [v]),
        w = "open" === r,
        S = i[i.length - 1],
        A = null != S && "assistant" === S.role && null != S.proposal,
        C = null != S && "assistant" === S.role && !(0, D.B)(S),
        I = A && w ? E : void 0,
        P = C && S?.role === "assistant" ? S.todos : void 0,
        O = C && S?.role === "assistant" ? S.provisionalTodo : void 0;
    return (0, a.jsxs)("section", {
        ref: m,
        "data-vibegrations-chat": !0,
        className: ts.T,
        children: [
            (0, a.jsx)(G.Ch, {
                ref: p,
                onScroll: g,
                "data-vibegrations-chat-log": !0,
                className: ts.N,
                children: (0, a.jsx)(eV, {
                    projectId: t,
                    messages: i,
                    onApprove: I,
                    onPickIdea: w ? b : void 0,
                    onAskForIdeas: w ? j : void 0,
                }),
            }),
            (0, a.jsx)(e9, {
                thinking: C,
                thinkingActivity: d,
                compacting: u,
                todos: P,
                provisionalTodo: O,
                projectUsage: c,
                connState: r,
                modelSettings: h,
                onModelSettingsChange: y,
            }),
            (0, a.jsx)(en, {
                canSend: w,
                running: C,
                onSend: v,
                onInterrupt: w ? k : void 0,
                onUploadFile: _,
                onDeleteFile: N,
                onApprove: I,
                onRegionCapture: l,
            }),
        ],
    });
}
var tr = n(435558),
    to = n(661531),
    tc = n(602853),
    td = n(517461),
    tu = n(761929),
    th = n(552067);
function tm(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: i } = e,
        r = (0, tc.r)(to.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [c, d] = (0, td.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = s.useState(c ?? 460),
        m = (0, tr.clamp)(u, 360, n);
    s.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, tu.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: tu.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, a.jsxs)("div", {
        className: th.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: th.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: th.kL, style: { width: m }, children: i }),
        ],
    });
}
var tp = n(333007),
    tf = n(638015);
function tg(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tx(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [i, r] = s.useState(null);
    s.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = s.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        c = s.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                r({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        d = s.useCallback(
            (e) => {
                let t = o(e);
                r((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        u = s.useCallback(
            (e) => {
                if (null == i) return;
                let t = o(e),
                    a = tg({ ...i, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [i, o, n, l],
        ),
        m = null == i ? null : tg(i);
    return (0, tp.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: tf.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: tf.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": R.intl.string(T.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == m
                            ? (0, a.jsx)("div", {
                                  className: tf.F7,
                                  children: (0, a.jsx)("div", {
                                      className: tf.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: R.intl.string(T.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: tf.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function tv(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([D.A], () => D.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: eG.MP, "data-active": n, "aria-hidden": !0 });
}
var tk = n(280218),
    tb = n(171936),
    tj = n(291815);
function ty(e) {
    let { projectId: t, applicationId: n, surface: l, previewReady: r, content: o, sidebar: c } = e,
        [d, u] = s.useState(null),
        h = (0, i.A)(n, l),
        m = h?.id ?? null,
        [p, f] = s.useState(null);
    s.useEffect(() => {
        if (null != t) return (0, tb.mn)(t, () => (0, tk.F1)(d, m));
    }, [t, d, m]);
    let g = s.useCallback(() => {
            let e = (0, tk.F1)(d, m),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      f({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [d, m]),
        x = s.useCallback(
            (e) => {
                f(null), null != p && (0, tk.su)(p.iframe, e).then(p.resolve, p.reject);
            },
            [p],
        ),
        v = s.useCallback(() => {
            f(null), p?.resolve(null);
        }, [p]),
        k = r && null != n && l.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: u, className: tj.fm, children: o }),
            c(k ? g : void 0),
            null != p ? (0, a.jsx)(tx, { targetRect: p.targetRect, onSelect: x, onCancel: v }) : null,
        ],
    });
}
function t_(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: i, previewReady: c, previewGate: d } = e,
        u = s.useRef(null),
        [h, m] = s.useState(0);
    s.useLayoutEffect(() => {
        if (l.type === N.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
    }, [n, l.type]),
        s.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        s.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && m(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        s.useEffect(() => () => (0, r.Zq)(0), []);
    let p = Math.max(360, h - 320),
        f = i || l.type === N.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: u,
        className: tj.LB,
        children: (0, a.jsx)(ty, {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(L, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(tm, {
                          open: i,
                          maxWidth: p,
                          onWidthChange: r.Zq,
                          children: (0, a.jsxs)("div", {
                              className: tj.cO,
                              children: [
                                  (0, a.jsx)(tv, { projectId: t }),
                                  (0, a.jsx)(ti, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
