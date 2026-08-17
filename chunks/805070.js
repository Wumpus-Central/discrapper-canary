n.d(t, { A: () => tk });
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
    b = n(627363),
    k = n(869146),
    j = n(625180),
    y = n(91242),
    _ = n(207371),
    N = n(165610),
    w = n(652215),
    E =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    S = n(503698),
    C = n.n(S),
    A = n(612749);
function I(e) {
    let { title: t, body: n, wide: l = !1, children: s } = e;
    return (0, a.jsxs)("div", {
        className: C()(A.Bf, l && A.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: A.Ux,
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
function M(e) {
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
                            [k.A, y.A],
                            () => k.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, b.YY)(t),
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
        case E.Launched:
            return (0, a.jsx)(g.A, { frameId: l.id, level: f.A.WithinAppContent, className: P.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(I, {
                    title: R.intl.string(T.default["4f6Vkr"]),
                    body: R.intl.string(T.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
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
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(I, {
                    title: R.intl.string(T.default.FHOJiH),
                    body: R.intl.string(T.default["1yLQoV"]),
                }),
            });
        case E.Error:
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
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: P.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var L = n(668917);
function O(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: r } = e,
        o = (0, i.A)(t, n);
    return (s.useEffect(() => {
        r?.type === "permissions" && null != o && (0, m.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: L.q, children: (0, a.jsx)(c.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: L.q,
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
                ? (0, a.jsx)(M, { applicationId: t, surface: n })
                : null
            : (0, a.jsxs)("div", {
                  className: L.q,
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
var D = n(689175),
    G = n(783791);
n(323874), n(14289), n(35956), n(321073);
var U = n(866665),
    H = n(588975),
    B = n(428610),
    F = n(826745),
    V = n(559647),
    W = n(285796),
    z = n(673724),
    $ = n(514042),
    q = n(939249),
    X = n(195219);
function K(e) {
    return C()(X._B, { [X.ND]: e });
}
function Y(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: s, children: i, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: X.gJ, onError: r })
                : (0, a.jsx)($.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: X.Wd,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", className: X.Rr, children: t }),
                    s,
                ],
            }),
            i,
        ],
    });
}
function Z(e) {
    return (0, a.jsx)("div", { className: K(e.compact ?? !1), children: Y(e) });
}
function J(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: s, onThumbError: i } = e;
    return (0, a.jsx)(q.D, {
        className: C()(K(!0), X.w8),
        onClick: s,
        "aria-label": l,
        children: Y({ name: t, thumbSrc: n, compact: !0, onThumbError: i }),
    });
}
var Q = n(17117);
let ee = 0;
function et(e) {
    let { canSend: t, onSend: n, onUploadFile: l, onDeleteFile: i, onApprove: r, onRegionCapture: o } = e,
        [d, u] = s.useState(""),
        [h, m] = s.useState([]),
        [p, f] = s.useState(!1),
        [g, x] = s.useState(!1),
        v = s.useRef(null),
        b = s.useRef([]),
        k = s.useRef(new Set()),
        j = s.useRef(i);
    j.current = i;
    let y = s.useCallback((e) => {
            (b.current = e), m(e);
        }, []),
        _ = s.useCallback((e) => {
            j.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    s.useEffect(() => {
        let e = k.current;
        return () => {
            for (let t of b.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && _(t.ref);
        };
    }, [_]);
    let N = s.useCallback(
            (e, t) => {
                if (k.current.has(e)) return;
                let n = b.current;
                n.some((t) => t.localId === e) && y(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [y],
        ),
        w = s.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...b.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++ee,
                        s = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 5) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.DlX57a, { count: 5 }),
                        });
                        continue;
                    }
                    if (l.size > (z.Wb.has(e) ? 5242880 : 0xa00000)) {
                        t.push({ ...s, status: "error", errorText: R.intl.string(T.default.cI7t94) });
                        continue;
                    }
                    let i = z.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...s, previewUrl: i }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: a } of (y(t), n))
                    l(e).then(
                        (e) => {
                            k.current.has(a) ? _(e) : N(a, { status: "ready", ref: e });
                        },
                        (e) => {
                            k.current.has(a) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                N(a, { status: "error", errorText: R.intl.string(T.default.GwEHvn) }));
                        },
                    );
            },
            [_, l, N, y],
        ),
        E = s.useCallback(async () => {
            if (null != o && !g) {
                x(!0);
                try {
                    let e = await o();
                    null != e && w([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        y([
                            ...b.current,
                            {
                                localId: ++ee,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: R.intl.string(T.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    x(!1);
                }
            }
        }, [o, g, w, y]),
        S = s.useCallback(
            (e) => {
                let t = b.current,
                    n = t.find((t) => t.localId === e);
                k.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && _(n.ref),
                    y(t.filter((t) => t.localId !== e));
            },
            [_, y],
        ),
        C = h.every((e) => "ready" === e.status),
        A = "" !== d.trim() || h.length > 0,
        I = t && A && C,
        P = s.useCallback(() => {
            if (!I) return;
            let e = b.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (n(d, e.length > 0 ? e : void 0), b.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            u(""), y([]);
        }, [I, d, n, y]),
        M = s.useCallback(
            (e) => {
                e.preventDefault(), P();
            },
            [P],
        ),
        L = s.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != r && (e.preventDefault(), r());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), P());
            },
            [P, r],
        ),
        O = s.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), w(n));
            },
            [t, w],
        ),
        D = s.useCallback(
            (e) => {
                e.preventDefault(), f(!1), t && w(Array.from(e.dataTransfer.files));
            },
            [t, w],
        ),
        G = s.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), f(!0));
        }, []),
        W = s.useCallback(
            (e) => {
                w(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [w],
        );
    return (0, a.jsxs)("form", {
        onSubmit: M,
        onDrop: D,
        onDragOver: G,
        onDragLeave: () => f(!1),
        className: p ? `${Q.DA} ${Q.pV}` : Q.DA,
        children: [
            h.length > 0
                ? (0, a.jsx)("div", {
                      className: Q.lN,
                      children: h.map((e) => (0, a.jsx)(en, { draft: e, onRemove: S }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: Q.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: v,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: Q.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(U.m, {
                        text: R.intl.string(T.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: Q.Y0,
                            disabled: !t,
                            onClick: () => v.current?.click(),
                            "aria-label": R.intl.string(T.default.gUn10I),
                            children: (0, a.jsx)(H.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(U.m, {
                        text: R.intl.string(T.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: Q.Y0,
                            disabled: null == o || !t || g,
                            onClick: E,
                            "aria-label": R.intl.string(T.default.B5gWPk),
                            children: g
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: Q.Rk })
                                : (0, a.jsx)(B.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(F.y, {
                        value: d,
                        onChange: (e) => u(e.currentTarget.value),
                        onKeyDown: L,
                        onPaste: O,
                        placeholder: t ? R.intl.string(T.default.ahRdoJ) : R.intl.string(T.default.nm4w9P),
                        disabled: !t,
                        "aria-label": R.intl.string(T.default.OPr66w),
                        rows: 1,
                        className: Q.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: Q.fF,
                        children: [
                            (0, a.jsx)("div", { className: Q.MT }),
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: Q.rt,
                                disabled: !I,
                                "aria-label": R.intl.string(T.default["22GHMt"]),
                                children: (0, a.jsx)(V.SendMessageIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: Q.Mx,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(Z, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: Q.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: Q.o1,
                onClick: () => n(t.localId),
                "aria-label": R.intl.string(T.default["3HWvgk"]),
                children: (0, a.jsx)(W.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var el = n(256905);
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
    return (0, a.jsxs)(q.D, {
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
var eh = n(84206);
function em(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: eh.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: eh.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eh.uR,
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
function ep(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: eh.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: eh.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: R.intl.string(T.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: eh.dr,
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
                      className: eh.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: eh.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eh.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: eh.UZ,
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
                      className: eh.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(R.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: eh.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eh.Xs,
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
            (0, a.jsx)(em, { label: R.intl.string(T.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(em, { label: R.intl.string(T.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: eh.nc,
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
                              className: eh.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ef = n(700766);
function eg(e) {
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
            className: ef.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: ef.iq,
                children: l.summary,
            }),
        });
    let m = i ? es.a : ea._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: ef.Dx,
        children: [
            (0, a.jsxs)(q.D, {
                tag: "div",
                className: ef.kG,
                "aria-expanded": i,
                "aria-controls": o,
                "aria-label": R.intl.formatToPlainString(T.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: ef.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: ef.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !i,
                className: ef.yJ,
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
                              className: ef.y8,
                              children: u.map((e) => (0, a.jsx)(ev, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ex() {}
function ev(e) {
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
                (0, el.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, ex);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(J, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var eb = n(820081),
    ek = n(590223);
function ej(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: ek.Vn,
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
        children: "completed" === t ? (0, a.jsx)(eb.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function ey(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function e_(e) {
    let { todos: t } = e;
    return (0, a.jsx)("ul", {
        className: ek.zR,
        children: t.map((e) =>
            (0, a.jsxs)(
                "li",
                {
                    className: ek.qN,
                    "data-status": e.status,
                    children: [
                        (0, a.jsx)(ej, { status: e.status }),
                        (0, a.jsx)(h.E, {
                            variant: "text-sm/normal",
                            color: "completed" === e.status ? "text-muted" : "text-default",
                            tag: "span",
                            className: ek.ku,
                            selectable: !0,
                            children: e.text,
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function eN(e) {
    let { todos: t, announceProgress: n = !0 } = e,
        { completed: l, total: s } = ey(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: ek.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: ek.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: ek.mA,
                              ...(n
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], {
                                            completed: l,
                                            total: s,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: R.intl.formatToPlainString(T.default.bQvqly, { completed: l, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(e_, { todos: t }),
              ],
          });
}
let ew = new Set([
    "thinking",
    "assistant_delta",
    "reply",
    "plan_proposed",
    "announcement",
    "task_started",
    "task_finished",
    "todos",
    "thinking_lifecycle",
]);
function eE(e) {
    return "running" === e;
}
function eS(e) {
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
var eC = n(282878);
function eA(e) {
    let { task: t } = e,
        [n, l] = s.useState(null),
        i = s.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = s.useCallback(() => l(!o), [o]),
        d = eE(t.state),
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
                    className: eC.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: eC.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eC.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: eC.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eC.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(q.D, {
                      tag: "div",
                      className: C()(eC.qI, eC.EZ),
                      "aria-expanded": o,
                      "aria-controls": i,
                      "aria-label": R.intl.formatToPlainString(T.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: eC.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: i,
                      hidden: !o,
                      className: eC.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eC.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(eg, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: eC.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var eI = n(692228),
    eT = n(742715);
function eR(e) {
    let { projectId: t, item: n } = e,
        [l, i] = s.useState(!1),
        r = s.useId(),
        o = s.useCallback(() => i((e) => !e), []),
        c = null != n.label && "" !== n.label,
        d = l ? ea._ : es.a,
        u = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: ef.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(eg, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: ef.On, children: e.tasks.map((e) => (0, a.jsx)(eA, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return c
        ? (0, a.jsxs)("li", {
              className: C()(ef.ky, eI.XR, ef.rn),
              children: [
                  (0, a.jsxs)(q.D, {
                      tag: "div",
                      className: ef.rN,
                      "aria-expanded": !l,
                      "aria-controls": r,
                      "aria-label": R.intl.formatToPlainString(T.default.s1wx5H, { activity: n.label }),
                      onClick: o,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: ef.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(d, { size: "xs", color: "currentColor", className: ef.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: r, hidden: l, className: ef.MZ, children: u }),
              ],
          })
        : (0, a.jsx)("li", { className: C()(ef.ky, eI.XR, ef.rn), children: u });
}
function eP(e) {
    let {
            projectId: t,
            steps: n,
            announcement: l,
            content: i,
            proposal: r,
            active: o = !1,
            todos: c,
            onApprove: d,
            ideas: u,
            onPickIdea: m,
            offerIdeas: p,
            onAskForIdeas: f,
        } = e,
        { items: g } = s.useMemo(
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
                        null != r && (r.groups = eS(o)), (r = null), (o = []);
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
                            if (ew.has(m.kind)) continue;
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
                        if (ew.has(m.kind)) continue;
                        let e = h(t);
                        (s = null),
                            (c = null),
                            o.push(m),
                            null == r && ((r = { type: "rows", key: `rows-${t}`, groups: [] }), e.blocks.push(r));
                    }
                    for (let e of (d(), a)) {
                        e.groups = eS(e.rawSteps);
                        let n = e.groups[e.groups.length - 1]?.summary;
                        null != n && (e.latestActivity = n), !t && eE(e.state) && (e.state = "incomplete");
                    }
                    return { items: n, tasks: a };
                })(n, { turnActive: o }),
            [n, o],
        ),
        x = g.at(-1),
        v = x?.type === "message" && x.content.trim() === i.trim(),
        b = null == r && "" !== i && !v;
    return (0, a.jsxs)("div", {
        className: ef.ue,
        children: [
            null != l && "" !== l
                ? (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: C()(ef.ky, ef.Xt, eI.XR),
                      children: l,
                  })
                : null,
            null != c && c.length > 0
                ? (0, a.jsx)("div", { className: C()(ef.ky, eI.XR), children: (0, a.jsx)(eN, { todos: c }) })
                : null,
            g.length > 0
                ? (0, a.jsx)("ol", {
                      className: ef.dO,
                      children: g.map((e) =>
                          "message" === e.type
                              ? (0, a.jsx)(
                                    "li",
                                    {
                                        className: C()(ef.ky, eI.XR),
                                        children: (0, a.jsx)("div", {
                                            className: C()(eT.PT, ef.cW),
                                            children: ei.A.parse(e.content, !0, {
                                                allowList: !0,
                                                allowHeading: !0,
                                                allowLinks: !0,
                                            }),
                                        }),
                                    },
                                    e.key,
                                )
                              : (0, a.jsx)(eR, { projectId: t, item: e }, e.key),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: C()(ef.ky, eI.XR),
                      children: (0, a.jsx)(ep, { proposal: r, onApprove: d }),
                  })
                : b
                  ? (0, a.jsxs)("div", {
                        className: C()(ef.ky, eI.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: C()(eT.PT, ef.cW),
                                children: ei.A.parse(i, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            !0 === p
                                ? (0, a.jsx)("div", { className: ef.IN, children: (0, a.jsx)(eu, { onAsk: f }) })
                                : null,
                        ],
                    })
                  : null,
            null != u && u.length > 0
                ? (0, a.jsx)("div", { className: C()(ef.ky, eI.XR), children: (0, a.jsx)(ed, { ideas: u, onPick: m }) })
                : null,
            !0 !== p || b
                ? null
                : (0, a.jsx)("div", { className: C()(ef.ky, eI.XR), children: (0, a.jsx)(eu, { onAsk: f }) }),
        ],
    });
}
var eM = n(289149);
function eL(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAskForIdeas: i } = e,
        r = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: eM.x7,
        children: n.map((e) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eH,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: C()(eM.B2, eI.XR),
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
                                    ? (0, a.jsx)(eO, { projectId: t, attachments: e.attachments })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let n = e.steps.filter((e) => !ew.has(e.kind)).length > 0,
                o = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                c = "plan_implemented" === e.kind && e === r;
            return "" !== e.content ||
                null != e.proposal ||
                null != e.ideas ||
                c ||
                n ||
                o ||
                null != e.announcement ||
                null != e.todos
                ? (0, a.jsx)(
                      eH,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(eP, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              active: !(0, G.B)(e),
                              todos: e.todos,
                              onApprove: e === r ? l : void 0,
                              ideas: e.ideas,
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
function eO(e) {
    let { projectId: t, attachments: n } = e;
    return (0, a.jsx)("div", {
        className: eM.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eD, { name: e.name }, n)
                : z.Wb.has(e.content_type)
                  ? (0, a.jsx)(eU, { projectId: t, id: e.id, name: e.name }, n)
                  : (0, a.jsx)(eG, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eD(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? R.intl.formatToPlainString(T.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(Z, { name: l, compact: !0 });
}
function eG(e) {
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
        ? (0, a.jsx)(eD, { name: l, unavailable: !0 })
        : (0, a.jsx)(J, {
              name: l,
              thumbSrc: null,
              ariaLabel: R.intl.formatToPlainString(T.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function eU(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, r] = s.useState(null),
        [c, d] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? r(l) : d(!0));
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let u = s.useCallback(() => {
        Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n)]).then(
            (e) => {
                let [t, n] = e;
                t
                    ? (0, el.R)({
                          items: [{ type: "IMAGE", url: n, alt: l }],
                          startingIndex: 0,
                          shouldHideMediaOptions: !0,
                          location: "VibegrationsChat",
                      })
                    : d(!0);
            },
            () => {},
        );
    }, [t, n, l]);
    return c
        ? (0, a.jsx)(eD, { name: l, unavailable: !0 })
        : (0, a.jsx)(J, {
              name: l,
              thumbSrc: i,
              ariaLabel: R.intl.formatToPlainString(T.default.QUFLUq, { name: l }),
              onClick: u,
              onThumbError: () => {
                  r(null),
                      (0, o.n6)(t, n).then(
                          (e) => {
                              e || d(!0);
                          },
                          () => {},
                      );
              },
          });
}
function eH(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: eM.xk, children: n });
}
var eB = n(379307),
    eF = n(922016),
    eV = n(863610),
    eW = n(446892);
function ez(e) {
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
            className: eW.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(D.Ch, {
                ref: i,
                className: eW.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: C()(eT.PT, eW.bb),
                    children: ei.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var e$ = n(249680);
function eq(e) {
    let { activity: t } = e,
        n = s.useRef(null),
        l = s.useId(),
        [i, r] = s.useState(null),
        o = null != t && "end" !== t.phase,
        c = null != t && "" !== t.text,
        d = t?.session ?? null,
        u = c && null != d && i === d,
        m = s.useCallback(() => {
            c && null != d && r((e) => (e === d ? null : d));
        }, [c, d]),
        p = s.useCallback(() => r(null), []);
    return (0, a.jsx)(eF.Y, {
        targetElementRef: n,
        position: "top",
        align: "left",
        shouldShow: u,
        onRequestClose: p,
        renderPopout: () => (0, a.jsx)(ez, { id: l, activity: t }),
        children: () =>
            (0, a.jsxs)(q.D, {
                innerRef: n,
                className: C()(e$.h, c && e$.X),
                "aria-label": R.intl.string(T.default.SzdX35),
                "aria-expanded": u,
                "aria-describedby": u ? l : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: m,
                children: [
                    (0, a.jsx)(eV.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: R.intl.string(o ? T.default.Ly7F7x : T.default.QDGuNS),
                    }),
                ],
            }),
    });
}
var eX = n(662546),
    eK = n(173016);
function eY(e) {
    let { todos: t } = e;
    return (0, a.jsx)("div", {
        className: eK.B,
        role: "dialog",
        "aria-label": R.intl.string(T.default.qCRC6c),
        children: (0, a.jsx)(eN, { todos: t, announceProgress: !1 }),
    });
}
function eZ(e) {
    let { todos: t } = e,
        n = s.useRef(null),
        { completed: l, total: i } = ey(t);
    return 0 === i
        ? null
        : (0, a.jsx)(eF.Y, {
              targetElementRef: n,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(eY, { todos: t }),
              children: (e) =>
                  (0, a.jsxs)(q.D, {
                      innerRef: n,
                      className: eK.T,
                      "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], { completed: l, total: i }),
                      ...e,
                      children: [
                          (0, a.jsx)(eX.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: R.intl.formatToPlainString(T.default["6zuiBa"], { completed: l, total: i }),
                          }),
                      ],
                  }),
          });
}
var eJ = n(885574),
    eQ = n(677175);
function e0(e) {
    return e.toLocaleString();
}
function e1(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: eQ.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: eQ.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [e0((0, z.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    e0(n.input_tokens),
                    " in \xb7 ",
                    e0(n.output_tokens),
                    " out \xb7 ",
                    e0(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    e0(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function e2(e) {
    let { project: t } = e,
        n = (0, z.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: eQ.si,
        role: "dialog",
        "aria-label": R.intl.string(T.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: eQ.Q$,
                children: (0, a.jsxs)("div", {
                    className: eQ.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [e0((0, z.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(e1, { label: R.intl.string(T.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(e1, { label: R.intl.string(T.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: eQ.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, z.sj)(n) ? "\u2014" : `${Math.round(100 * (0, z.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function e6(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, a.jsx)(eF.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(e2, { project: t }),
        children: (e) =>
            (0, a.jsx)(q.D, {
                innerRef: n,
                className: eQ.Y$,
                "aria-label": R.intl.string(T.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(eJ.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var e5 = n(154861);
function e7(e) {
    switch (e) {
        case "open":
            return R.intl.string(T.default.cLhFMi);
        case "connecting":
            return R.intl.string(T.default.W7oyuf);
        case "failed":
            return R.intl.string(T.default.eE60xI);
        case "closed":
            return R.intl.string(T.default["yBmS+I"]);
    }
}
function e8(e) {
    let {
        thinking: t,
        thinkingActivity: n,
        todos: l,
        projectUsage: s,
        connState: i,
        modelSettings: r,
        onModelSettingsChange: o,
    } = e;
    return (0, a.jsxs)("div", {
        className: e5.jf,
        children: [
            (0, a.jsx)("div", {
                className: e5.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(eq, { activity: n }) : null,
            }),
            null == r
                ? null
                : (0, a.jsx)(eB.A, { settings: r.settings, choices: r.choices, disabled: "open" !== i, onChange: o }),
            null == l || 0 === l.length ? null : (0, a.jsx)(eZ, { todos: l }),
            null == s
                ? null
                : (0, a.jsxs)("span", {
                      className: e5.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": R.intl.formatToPlainString(T.default["7SZZvj"], {
                                  runes: (0, z.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: R.intl.formatToPlainString(T.default["4PFO2p"], {
                                  runes: (0, z.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(e6, { project: s }),
                      ],
                  }),
            (0, a.jsx)(h.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === i ? "text-feedback-positive" : "failed" === i ? "text-feedback-critical" : "text-muted",
                "aria-label": R.intl.formatToPlainString(T.default.eDDdhB, { status: e7(i) }),
                "data-vibegrations-conn": !0,
                "data-state": i,
                className: e5.XF,
                children: e7(i),
            }),
        ],
    });
}
var e3 = n(506774),
    e4 = n(192308),
    e9 = n(651649),
    te = n(670455);
let tt = "shownVibegrationsFeedbackProjectIds";
var tn = n(104071);
function tl(e) {
    let { projectId: t, onRegionCapture: l } = e,
        i = (0, x.bG)([G.A], () => G.A.getMessages(t), [t]),
        r = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([G.A], () => G.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([G.A], () => G.A.getThinkingActivity(t), [t]),
        u = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        h = s.useRef(null),
        m = s.useRef(null),
        p = s.useRef(!0);
    s.useEffect(() => {
        p.current && m.current?.scrollToBottom();
    }, [i]);
    let f = s.useCallback(() => {
        let e = m.current;
        null != e && (p.current = 32 > e.getDistanceFromBottom());
    }, []);
    s.useLayoutEffect(() => {
        let e = h.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    s = a?.contentRect.width ?? e.getBoundingClientRect().width;
                s === t ||
                    ((t = s),
                    p.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => m.current?.scrollToBottom()))));
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
                    let t = G.A.getMessages(e).filter((e) => "assistant" === e.role && (0, G.B)(e)).length;
                    !(t < 3) &&
                        ((e3.w.get(tt) ?? []).includes(e) ||
                            e9.A.possiblyShowFeedbackModal(te.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = e3.w.get(tt) ?? []).includes(e) || e3.w.set(tt, [...l, e]),
                                    (0, e4.openModalLazy)(async () => {
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
    let g = s.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        v = s.useCallback((e) => g(e.implementation_prompt), [g]),
        b = s.useCallback(() => g(R.intl.string(T.default["3sTTBu"])), [g]),
        k = s.useCallback((e) => (0, o.XZ)(t, e), [t]),
        j = s.useCallback((e) => (0, o.vX)(t, e), [t]),
        y = s.useCallback((e) => (0, o.Vm)(t, e), [t]),
        _ = s.useCallback(() => g(R.intl.string(T.default.Jj8Ftb)), [g]),
        N = "open" === r,
        w = i[i.length - 1],
        E = null != w && "assistant" === w.role && null != w.proposal,
        S = null != w && "assistant" === w.role && !(0, G.B)(w),
        C = E && N ? _ : void 0,
        A = S && w?.role === "assistant" ? w.todos : void 0;
    return (0, a.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: tn.T,
        children: [
            (0, a.jsx)(D.Ch, {
                ref: m,
                onScroll: f,
                "data-vibegrations-chat-log": !0,
                className: tn.N,
                children: (0, a.jsx)(eL, {
                    projectId: t,
                    messages: i,
                    onApprove: C,
                    onPickIdea: N ? v : void 0,
                    onAskForIdeas: N ? b : void 0,
                }),
            }),
            (0, a.jsx)(e8, {
                thinking: S,
                thinkingActivity: d,
                todos: A,
                projectUsage: c,
                connState: r,
                modelSettings: u,
                onModelSettingsChange: k,
            }),
            (0, a.jsx)(et, {
                canSend: N,
                onSend: g,
                onUploadFile: j,
                onDeleteFile: y,
                onApprove: C,
                onRegionCapture: l,
            }),
        ],
    });
}
var ta = n(435558),
    ts = n(661531),
    ti = n(602853),
    tr = n(517461),
    to = n(761929),
    tc = n(552067);
function td(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: i } = e,
        r = (0, ti.r)(ts.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [c, d] = (0, tr.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = s.useState(c ?? 460),
        m = (0, ta.clamp)(u, 360, n);
    s.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, to.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: to.R.HORIZONTAL_LEFT,
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
        className: tc.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: tc.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: tc.kL, style: { width: m }, children: i }),
        ],
    });
}
var tu = n(333007),
    th = n(638015);
function tm(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tp(e) {
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
                    a = tm({ ...i, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [i, o, n, l],
        ),
        m = null == i ? null : tm(i);
    return (0, tu.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: th.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: th.aC,
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
                                  className: th.F7,
                                  children: (0, a.jsx)("div", {
                                      className: th.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: R.intl.string(T.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: th.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function tf(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([G.A], () => G.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: eI.MP, "data-active": n, "aria-hidden": !0 });
}
var tg = n(280218),
    tx = n(171936),
    tv = n(291815);
function tb(e) {
    let { projectId: t, applicationId: n, surface: l, previewReady: r, content: o, sidebar: c } = e,
        [d, u] = s.useState(null),
        h = (0, i.A)(n, l),
        m = h?.id ?? null,
        [p, f] = s.useState(null);
    s.useEffect(() => {
        if (null != t) return (0, tx.mn)(t, () => (0, tg.F1)(d, m));
    }, [t, d, m]);
    let g = s.useCallback(() => {
            let e = (0, tg.F1)(d, m),
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
                f(null), null != p && (0, tg.su)(p.iframe, e).then(p.resolve, p.reject);
            },
            [p],
        ),
        v = s.useCallback(() => {
            f(null), p?.resolve(null);
        }, [p]),
        b = r && null != n && l.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: u, className: tv.fm, children: o }),
            c(b ? g : void 0),
            null != p ? (0, a.jsx)(tp, { targetRect: p.targetRect, onSelect: x, onCancel: v }) : null,
        ],
    });
}
function tk(e) {
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
        className: tv.LB,
        children: (0, a.jsx)(tb, {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(O, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(td, {
                          open: i,
                          maxWidth: p,
                          onWidthChange: r.Zq,
                          children: (0, a.jsxs)("div", {
                              className: tv.cO,
                              children: [
                                  (0, a.jsx)(tf, { projectId: t }),
                                  (0, a.jsx)(tl, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
