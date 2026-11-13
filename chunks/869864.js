(t.d(l, { default: () => eL }), t(321073));
var n = t(477900),
    a = t(582128),
    r = t(855986),
    i = t(314116),
    s = t(224640),
    u = t(20742),
    d = t(430993),
    c = t(761508),
    o = t(331322),
    f = t(834730),
    g = t(289873),
    p = t(696208),
    m = t(540665),
    h = t(260498),
    x = t(360047),
    j = t(191850),
    b = t(792996);
let v = [],
    y = [],
    S = { live: !1, hasPreview: !0 };
var C = t(265872),
    k = t(165862),
    P = t(477782),
    A = t(866665),
    E = t(408278),
    w = t(365199),
    T = t(691885),
    I = t(821609),
    N = t(762026),
    _ = t(700915),
    B = t(985965),
    R = t(843313);
function L(e) {
    let { linkedApps: l, onOpenSettings: t } = e,
        { callers: a, targets: r, projects: s, names: u, failed: d, saved: c, setBuild: g, remove: p } = l;
    return (0, n.jsx)("div", {
        className: R.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 24,
            children: [
                a.length > 0
                    ? (0, n.jsxs)(o.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: R.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: b.intl.formatToPlainString(j.default.uLPdNT, { name: l.name }),
                                  }),
                              }),
                              a.map((e) =>
                                  (0, n.jsx)(
                                      z,
                                      {
                                          caller: e,
                                          sides: (0, N.cL)(l, e),
                                          project: s[e.project_id],
                                          targetProject: l.project,
                                          onBuildChange: (l) => g(e.project_id, l),
                                          onRemove: () => {
                                              var l, t;
                                              return (
                                                  (l = e.project_id),
                                                  (t = u[e.project_id]),
                                                  void (0, i.A)({
                                                      title: b.intl.formatToPlainString(j.default.zSfIvv, { name: t }),
                                                      subtitle: b.intl.formatToPlainString(j.default["7TX+mR"], {
                                                          name: t,
                                                      }),
                                                      confirmText: b.intl.string(j.default.vDZEGQ),
                                                      variant: "critical",
                                                      onConfirm: () => p(l),
                                                  })
                                              );
                                          },
                                      },
                                      e.project_id,
                                  ),
                              ),
                          ],
                      })
                    : null,
                r.length > 0
                    ? (0, n.jsxs)(o.B, {
                          gap: 8,
                          children: [
                              (0, n.jsx)("h3", {
                                  className: R.Gf,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: b.intl.formatToPlainString(j.default.L3Bf1s, { name: l.name }),
                                  }),
                              }),
                              r.map((e) =>
                                  (0, n.jsx)(
                                      H,
                                      {
                                          target: e,
                                          sides: (0, N.cs)(l, e),
                                          project: s[e.project_id],
                                          callerProject: l.project,
                                          onOpen: () => t(e.project_id),
                                      },
                                      e.project_id,
                                  ),
                              ),
                          ],
                      })
                    : null,
                (0, n.jsx)("div", {
                    role: "status",
                    children: d
                        ? (0, n.jsx)(f.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: b.intl.string(j.default.dIEOrl),
                          })
                        : c
                          ? (0, n.jsx)(f.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: b.intl.string(j.default["/d6saK"]),
                            })
                          : null,
                }),
            ],
        }),
    });
}
function z(e) {
    let { caller: l, sides: t, project: r, targetProject: i, onBuildChange: s, onRemove: u } = e,
        d = a.useRef(null),
        c = b.intl.formatToPlainString(j.default.bzMlmh, { name: t.caller }),
        o = (0, N.Sj)(t, l.build),
        g = (0, N.xP)(l.purpose);
    return (0, n.jsxs)("div", {
        className: R.nf,
        children: [
            (0, n.jsxs)("div", {
                className: R.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: R.UU,
                        children: (0, n.jsx)(_.A, {
                            caller: t.caller,
                            target: t.target,
                            callerProject: r,
                            targetProject: i,
                            flow: l.flow ?? null,
                        }),
                    }),
                    (0, n.jsx)(C.Y, {
                        targetElementRef: d,
                        position: "bottom",
                        align: "right",
                        animation: C.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, n.jsx)(k.W, {
                                "data-menu-migrated": !0,
                                navId: `conjure-linked-app-${l.project_id}`,
                                "aria-label": c,
                                onClose: t,
                                onSelect: t,
                                children: (0, n.jsx)(P.rX, {
                                    children: (0, n.jsx)(P.Dr, {
                                        id: "remove",
                                        color: "danger",
                                        label: b.intl.string(j.default.bN1S9T),
                                        action: u,
                                    }),
                                }),
                            });
                        },
                        children: (e, l) => {
                            let { onClick: t } = e,
                                { isShown: a } = l;
                            return (0, n.jsx)("div", {
                                ref: d,
                                className: R.hZ,
                                children: (0, n.jsx)(A.m, {
                                    text: c,
                                    children: (0, n.jsx)(E.K, {
                                        icon: w.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": c,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": a,
                                        onClick: t,
                                    }),
                                }),
                            });
                        },
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: R.zH,
                children: [
                    null != g ? (0, n.jsx)(B.A, { purpose: g }) : null,
                    null != o
                        ? (0, n.jsxs)("div", {
                              className: R.W0,
                              children: [
                                  null != o.preview ? (0, n.jsx)(F, { setting: o.preview, onBuildChange: s }) : null,
                                  (0, n.jsx)(F, { setting: o.live, onBuildChange: s }),
                              ],
                          })
                        : null,
                    o?.note != null
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-muted", children: o.note })
                        : null,
                ],
            }),
        ],
    });
}
function F(e) {
    let { setting: l, onBuildChange: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-default", className: R.px, children: l.label }),
            (0, n.jsx)("div", {
                className: R.Lt,
                children: (0, n.jsx)(T.l, {
                    label: l.label,
                    hideLabel: !0,
                    options: l.options.map((e) => ({
                        id: e.data,
                        value: e.data,
                        label: e.label,
                        description: e.description,
                        disabled: e.disabled,
                    })),
                    value: l.value,
                    selectionMode: "single",
                    fullWidth: !0,
                    disabled: l.locked,
                    onSelectionChange: (e) => {
                        e !== l.value && t(l.buildFor(e));
                    },
                }),
            }),
        ],
    });
}
function H(e) {
    let { target: l, sides: t, project: a, callerProject: r, onOpen: i } = e,
        s = (0, N.xP)(l.purpose),
        u = (0, N.ft)(t, l.build),
        d = null != a && (0, h.jf)(a);
    return (0, n.jsxs)("div", {
        className: R.nf,
        children: [
            (0, n.jsxs)("div", {
                className: R.nM,
                children: [
                    (0, n.jsx)("div", {
                        className: R.UU,
                        children: (0, n.jsx)(_.A, {
                            caller: t.caller,
                            target: t.target,
                            callerProject: r,
                            targetProject: a,
                            flow: l.flow ?? null,
                        }),
                    }),
                    d
                        ? (0, n.jsx)(I.$, {
                              size: "sm",
                              variant: "secondary",
                              text: b.intl.formatToPlainString(j.default.DfBXSF, { target: t.target }),
                              onClick: i,
                          })
                        : null,
                ],
            }),
            (0, n.jsxs)("div", {
                className: R.zH,
                children: [
                    null != s ? (0, n.jsx)(B.A, { purpose: s }) : null,
                    null != u
                        ? (0, n.jsx)(f.E, { variant: "body-sm/normal", color: "text-subtle", children: u })
                        : null,
                ],
            }),
        ],
    });
}
var M = t(557744),
    G = t(223347),
    U = t(822313),
    D = t(359589),
    O = t(722701),
    Z = t(811587),
    V = t(826058),
    J = t(534514),
    q = t(44255),
    Q = t(303345),
    W = t(416473);
function K(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, r.bG)([m.Ay], () => "open" === m.Ay.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, m.ensureConnection)(e);
            }, [e, l]);
            let [n, i] = a.useState(null),
                [s, u] = a.useState(!0),
                [d, c] = a.useState(!1),
                [o, f] = a.useState(!1),
                [g, p] = a.useState(null),
                [h, x] = a.useState(null),
                [v, y] = a.useState(0),
                S = a.useRef(!1),
                C = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = C.current,
                    a = ++n.value;
                return (
                    (0, W.fi)(e)
                        .then((e) => {
                            C.current.value === a && (i(e), c(!0), u(!1));
                        })
                        .catch(() => {
                            C.current.value === a && (p(b.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, v]);
            let k = a.useCallback(() => {
                    (u(!0), p(null), y((e) => e + 1));
                }, []),
                P = a.useCallback(async () => {
                    if (!l || !d || S.current) return;
                    S.current = !0;
                    let t = ++C.current.value;
                    (f(!0), p(null), x(null));
                    try {
                        let l = await (0, W.MN)(e);
                        if (C.current.value !== t) return;
                        (i(l), x(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        C.current.value === t && p(e instanceof Q.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), C.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: o, error: g, status: h, retry: k, remove: P };
        })(l, t),
        u = a.useId();
    return !t || (s.loaded && null == s.saved && null == s.error && null == s.status)
        ? null
        : (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(J.D, { id: u, variant: "heading-sm/semibold", children: b.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            role: "status",
                            children: b.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded && null != s.saved
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(f.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: b.intl.string(j.default.ubcNP7),
                                }),
                                (0, n.jsxs)(o.B, {
                                    gap: 8,
                                    children: [
                                        (0, q.Dt)(s.saved).map((e, l) =>
                                            (0, n.jsx)(f.E, { variant: "body-sm/normal", children: e }, l),
                                        ),
                                        (0, n.jsx)(I.$, {
                                            type: "button",
                                            variant: "secondary",
                                            text: b.intl.string(j.default.J7ZMMf),
                                            disabled: s.deleting,
                                            onClick: function () {
                                                (0, i.A)({
                                                    title: b.intl.string(j.default["Tw/KaB"]),
                                                    subtitle: b.intl.string(j.default.qr1iIe),
                                                    confirmText: b.intl.string(j.default.J7ZMMf),
                                                    variant: "critical",
                                                    onConfirm: s.remove,
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : null,
                  null != s.error
                      ? (0, n.jsx)(f.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "body-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(I.$, {
                            type: "button",
                            variant: "secondary",
                            text: b.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          });
}
var X = t(290713),
    $ = t(616334),
    Y = t(143129),
    ee = t(890497),
    el = t(904363),
    et = t(540338),
    en = t(503698),
    ea = t.n(en),
    er = t(750943),
    ei = t(22231),
    es = t(95477),
    eu = t(103557),
    ed = t(946274),
    ec = t(951178),
    eo = t(535466),
    ef = t(154600);
function eg(e) {
    let { iconURL: l, disabled: t, onChange: r, onError: i } = e,
        s = a.useRef(null),
        u = null == l;
    return (0, n.jsxs)("div", {
        className: ef.iA,
        children: [
            (0, n.jsx)("button", {
                type: "button",
                className: ea()(ef.Vs, { [ef.A6]: u }),
                "aria-label": b.intl.string(u ? b.t["MsUY/S"] : b.t["6yrpFR"]),
                disabled: t,
                onClick: () => s.current?.activateUploadDialogue(),
                children: u
                    ? (0, n.jsx)(er.ImagePlusIcon, { size: "md", color: "currentColor" })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: ef.uP, src: l, alt: "" }),
                              (0, n.jsx)("span", {
                                  className: ef.Jx,
                                  children: (0, n.jsx)(ei.PencilIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                  }),
                              }),
                          ],
                      }),
            }),
            (0, n.jsx)(ed.Ay, {
                ref: s,
                className: ef.Fg,
                multiple: !1,
                filters: [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: eo.En }],
                maxFileSizeBytes: eo.Q0,
                onChange: (e) => {
                    (i(null), r(e));
                },
                onFileSizeError: () => i(b.intl.string(j.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function ep(e, l, t) {
    e.style.setProperty(
        "--custom-app-icon-size",
        `${(function (e, l) {
            let t = l.offsetHeight;
            for (let n = l; null != n && n !== e; n = n.offsetParent) t += n.offsetTop;
            return t;
        })(l, t)}px`,
    );
}
function em(e) {
    let l,
        t,
        {
            iconURL: r,
            onIconChange: i,
            name: s,
            nameError: u,
            onNameChange: d,
            description: c,
            onDescriptionChange: g,
            disabled: p = !1,
        } = e,
        [m, h] = a.useState(null),
        { rowRef: x, fieldRef: v } =
            ((l = a.useRef(null)),
            (t = a.useRef(null)),
            a.useLayoutEffect(() => {
                let e = l.current,
                    n = t.current,
                    a = n?.querySelector("input")?.parentElement;
                if (null == e || null == n || null == a) return;
                ep(e, n, a);
                let r = new ResizeObserver(() => ep(e, n, a));
                return (r.observe(n), r.observe(a), () => r.disconnect());
            }, []),
            { rowRef: l, fieldRef: t });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, n.jsxs)("div", {
                        ref: x,
                        className: ef.S7,
                        children: [
                            (0, n.jsx)(eg, { iconURL: r, disabled: p, onChange: i, onError: h }),
                            (0, n.jsx)("div", {
                                ref: v,
                                className: ef.yD,
                                children: (0, n.jsx)(es.k, {
                                    label: b.intl.string(j.default.GWBCF9),
                                    value: s,
                                    onChange: d,
                                    error: u,
                                    maxLength: 128,
                                    disabled: p,
                                    fullWidth: !0,
                                }),
                            }),
                        ],
                    }),
                    null != m
                        ? (0, n.jsx)(f.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              "aria-live": "polite",
                              children: m,
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(eu.f, {
                label: b.intl.string(j.default.ynaGa1),
                placeholder: b.intl.string(j.default["I+3UTL"]),
                value: c,
                onChange: g,
                maxLength: 400,
                disabled: p,
            }),
        ],
    });
}
var eh = t(60498),
    ex = t(420036),
    ej = t(5377);
function eb(e) {
    let { projectId: l } = e,
        t = (0, eh.Ay)(l),
        a = (0, eh.cg)(l);
    if (null == t) return null;
    let r = t.updatesPaused;
    return (0, n.jsxs)(o.B, {
        gap: 4,
        children: [
            (0, n.jsx)(f.E, {
                variant: "body-md/medium",
                color: "text-default",
                children: b.intl.string(j.default["+QBNDE"]),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (function (e, l) {
                    let { sourceName: t } = e;
                    return null == t
                        ? b.intl.string(l ? j.default["5wuDGB"] : j.default.rxvuqx)
                        : b.intl.formatToPlainString(l ? j.default.HHthpS : j.default.qpGg7d, { name: t });
                })(t, r),
            }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: r || a?.status !== "failed" ? "text-muted" : "text-feedback-critical",
                children: (function (e, l) {
                    if (l) return b.intl.string(j.default["uV/luq"]);
                    if (null == e || null == e.atMs) return b.intl.string(j.default.gHndTq);
                    let t = (0, ej.i$)(new Date(e.atMs), "LLL");
                    switch (e.status) {
                        case "updated":
                            return b.intl.formatToPlainString(j.default["6rQ8So"], { time: t });
                        case "failed":
                            return b.intl.formatToPlainString(j.default.HZnsMq, { time: t });
                        case "held":
                            return b.intl.string(j.default.AwPHix);
                        case "current":
                        case "paused":
                            return b.intl.formatToPlainString(j.default.yc0AaP, { time: t });
                    }
                })(a, r),
            }),
        ],
    });
}
var ev = t(733791),
    ey = t(167483);
function eS(e) {
    let { projectId: l } = e,
        t = (0, ev.rU)(l);
    if (0 === t.length) return null;
    let a = b.intl.string(j.default.yAZWTm);
    return (0, n.jsxs)(o.B, {
        gap: 8,
        role: "group",
        "aria-label": a,
        children: [
            (0, n.jsx)(f.E, { variant: "body-md/medium", color: "text-strong", children: a }),
            (0, n.jsx)(f.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: b.intl.string(j.default.HlSg2P),
            }),
            t.map((e) => {
                let { guildId: t, guildName: a, isTestServer: r, removeTarget: i } = e;
                return (0, n.jsxs)(
                    o.B,
                    {
                        direction: "horizontal",
                        justify: "space-between",
                        align: "center",
                        role: "group",
                        "aria-label": a,
                        children: [
                            (0, n.jsxs)(o.B, {
                                gap: 0,
                                children: [
                                    (0, n.jsx)(f.E, {
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        lineClamp: 1,
                                        children: a,
                                    }),
                                    r
                                        ? (0, n.jsx)(f.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              children: b.intl.string(j.default.QyYJ4O),
                                          })
                                        : null,
                                ],
                            }),
                            null != i
                                ? (0, n.jsx)(I.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: b.intl.string(j.default.BGF8VT),
                                      onClick: () => {
                                          let e = h.Ay.getProject(l);
                                          null != e && (0, ey.A)({ project: e, target: i, action: "remove" });
                                      },
                                  })
                                : null,
                        ],
                    },
                    t,
                );
            }),
        ],
    });
}
t(938796);
var eC = t(862026),
    ek = t(709753),
    eP = t(961553),
    eA = t(944142),
    eE = t(788493),
    ew = t(532247),
    eT = t(233470),
    eI = t(426035),
    eN = t(246338),
    e_ = t(277085),
    eB = t(453430);
let eR = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function eL(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: C,
            scopeKeys: k,
            note: P,
            notifyAgent: A,
            isPreview: E,
            publishOptions: w,
            transitionState: T,
            onClose: I,
        } = e,
        N = (0, r.bG)([h.Ay], () => h.Ay.getProject(l), [l]),
        _ = (0, r.bG)([M.A], () => M.A.getModelSettings(l), [l]),
        B = (0, r.bG)([m.Ay], () => "open" === m.Ay.getConnState(l), [l]),
        R = null != N && (0, h.PV)(N),
        z = null != N && (0, h.jf)(N),
        F = (function (e, l) {
            let { readOnly: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = (0, el.A)(l),
                s = a.useId(),
                {
                    iconURL: u,
                    description: d,
                    liveReload: c,
                    smartContext: g,
                    hostApproval: p,
                    name: m,
                    nameError: x,
                    nameChanged: v,
                    isPublic: y,
                    isGuildCollaboration: S,
                    usesPreviewApp: C,
                    canChangePreviewApp: k,
                    selectedRoleIds: P,
                    supportsVisibility: A,
                    supportsCollaboration: E,
                    supportsCollaboratorRoles: w,
                    checkingAppInGuild: T,
                    saving: I,
                    selectionError: N,
                    saveError: _,
                    experimentalError: B,
                    canSave: R,
                    handleIconChange: L,
                    handleNameChange: z,
                    handleDescriptionChange: F,
                    handleFlagChange: H,
                    handleUsesPreviewAppChange: M,
                    handleLiveReloadChange: G,
                    handleRoleSelectionChange: U,
                    handleSmartContextChange: D,
                    handleRequireHostApprovalChange: O,
                    submit: Z,
                } = (function (e, l) {
                    var t;
                    let n,
                        i = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                        s = (function (e) {
                            let l = (0, r.bG)([eA.A], () => eA.A.getLiveReload(e), [e]),
                                [t, n] = a.useState(null),
                                [i, s] = a.useState(null);
                            null != i && l !== i.before && s(null);
                            let u = null != i && l === i.before ? i.enabled : l?.enabled;
                            null != t && t === u && n(null);
                            let d = null != l && null != t && t !== u,
                                c = a.useCallback(
                                    () =>
                                        !d ||
                                        null == t ||
                                        (!!(0, eE.c)(e, t) && (s({ enabled: t, before: l }), n(null), !0)),
                                    [d, t, l, e],
                                );
                            return {
                                available: null != l,
                                checked: t ?? u ?? !1,
                                description: null == l ? "" : (0, ew.oV)(l),
                                changed: d,
                                setChecked: n,
                                save: c,
                            };
                        })(e),
                        u = s.save,
                        d = (0, eP.A)(e),
                        { changes: c, commit: o } = d,
                        f = (0, eC.Q)(e),
                        g = f.save,
                        p = (0, ek._t)(e),
                        m = p.save,
                        x = i?.collaborator_role_ids ?? [],
                        [v, y] = a.useState(i?.name ?? ""),
                        [S, C] = a.useState(null),
                        [k, P] = a.useState(v),
                        [A, E] = a.useState(i?.flags ?? 0),
                        [w, T] = a.useState(() => [...x]),
                        I = i?.install_scope === "guild" ? (i.guild_id ?? null) : null,
                        [N, _] = a.useState(I);
                    I !== N && (_(I), E(i?.flags ?? 0), T([...x]), C(null));
                    let B = i?.uses_preview_app,
                        [R, L] = a.useState(null);
                    null != R && R === B && L(null);
                    let [z, F] = a.useState(!1),
                        [H, M] = a.useState(null),
                        [G, U] = a.useState(null),
                        [D, O] = a.useState(null),
                        [Z, J] = a.useState(null),
                        [q, Q] = a.useState(!1),
                        W = a.useRef(null),
                        K = a.useRef(!1),
                        X = k.trim(),
                        $ = null != i && (0, ec.IU)(i),
                        Y = null != i && "guild" === i.install_scope,
                        ee = Y && null != l && (0, ec.RX)(i),
                        { isPublic: el, isGuildCollaboration: et } = (0, eN.n5)(A),
                        en = null != i && X !== v,
                        ea = $ && A !== (S?.flags ?? i?.flags ?? 0),
                        er =
                            ee &&
                            ((t = S?.roleIds ?? x), !((n = new Set(w)).size === t.length && t.every((e) => n.has(e)))),
                        ei = null != B,
                        es = R ?? B ?? !1,
                        eu = ei && null != R,
                        ed = en || ea || er || eu || d.changed,
                        eo = ed || s.changed || f.changed || p.changed,
                        { setIcon: ef, setDescription: eg } = d,
                        ep = s.setChecked,
                        em = f.setChecked,
                        eh = p.setChecked,
                        ex = a.useCallback(
                            (e) => {
                                (ef(e), O(null));
                            },
                            [ef],
                        ),
                        ej = a.useCallback(
                            (e) => {
                                (eg(e), O(null));
                            },
                            [eg],
                        ),
                        eb = a.useCallback((e) => {
                            (P(e), M(null), O(null));
                        }, []),
                        ev = a.useCallback((e, l) => {
                            (E((t) => (l ? t | e : t & ~e)), U(null), O(null));
                        }, []),
                        ey = a.useCallback((e) => {
                            (L(e), O(null));
                        }, []),
                        eS = a.useCallback(
                            (e) => {
                                (ep(e), O(null));
                            },
                            [ep],
                        ),
                        eB = a.useCallback(async () => {
                            if (null == i || null == l || null == i.preview_application_id || W.current === l)
                                return !0;
                            if (K.current) return !1;
                            ((K.current = !0), Q(!0));
                            try {
                                let e = await (0, eI.cC)(i, l);
                                if (!1 !== e) return (!0 === e && (W.current = l), !0);
                                await (0, V.vL)(i.id, l);
                                let t = (await (0, eI.cC)(i, l)) === !0;
                                return (t && (W.current = l), t);
                            } finally {
                                ((K.current = !1), Q(!1));
                            }
                        }, [l, i]),
                        eR = a.useCallback(
                            async (e) => {
                                if (e.length > 25)
                                    return void U(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: 25 }));
                                let l = () => {
                                    (T(e), U(null), O(null));
                                };
                                if (!e.some((e) => !w.includes(e))) return void l();
                                try {
                                    (await eB()) && l();
                                } catch {}
                            },
                            [eB, w],
                        ),
                        eL = a.useCallback(
                            (e) => {
                                (em(e), J(null));
                            },
                            [em],
                        ),
                        ez = a.useCallback(
                            (e) => {
                                (eh(e), J(null));
                            },
                            [eh],
                        ),
                        eF = a.useCallback(async () => {
                            if (null == i || !eo || z) return null;
                            let t = en ? (0, e_.p)(X) : null;
                            if (null != t) return (M(t), "project");
                            let n = { ...c };
                            (en && (n.name = X),
                                ea && (n.flags = A),
                                er && (n.collaborator_role_ids = [...w].sort()),
                                eu && (n.uses_preview_app = es),
                                null == i.guild_id && null != l && (er || (ea && et)) && (n.guild_id = l),
                                F(!0),
                                O(null),
                                J(null));
                            try {
                                if ((ed && (await (0, eT.CW)(e, n), y(X), C({ flags: A, roleIds: [...w] }), o()), !u()))
                                    return (O(b.intl.string(j.default.XzkNBw)), "project");
                                if (!g() || !m()) return (J(b.intl.string(j.default["9JPr8h"])), "experimental");
                                return null;
                            } catch {
                                return (O(b.intl.string(j.default["9JPr8h"])), "project");
                            } finally {
                                F(!1);
                            }
                        }, [o, A, ea, l, eo, c, et, en, eu, es, i, e, ed, er, m, u, g, z, w, X]);
                    return {
                        iconURL: d.iconURL,
                        description: d.description,
                        liveReload: s,
                        smartContext: f,
                        hostApproval: p,
                        name: k,
                        nameError: H,
                        nameChanged: en,
                        isPublic: el,
                        isGuildCollaboration: et,
                        usesPreviewApp: es,
                        canChangePreviewApp: ei,
                        selectedRoleIds: w,
                        supportsVisibility: $,
                        supportsCollaboration: Y,
                        supportsCollaboratorRoles: ee,
                        checkingAppInGuild: q,
                        saving: z,
                        selectionError: G,
                        saveError: D,
                        experimentalError: Z,
                        canSave: eo && "" !== X,
                        handleIconChange: ex,
                        handleNameChange: eb,
                        handleDescriptionChange: ej,
                        handleFlagChange: ev,
                        handleUsesPreviewAppChange: ey,
                        handleLiveReloadChange: eS,
                        handleRoleSelectionChange: eR,
                        ensureAppInGuild: eB,
                        handleSmartContextChange: eL,
                        handleRequireHostApprovalChange: ez,
                        submit: eF,
                    };
                })(e, l),
                J = I || t,
                q = (0, eh.AJ)(e);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        t
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: b.intl.string(j.default.s7VnVF),
                              })
                            : null,
                        q
                            ? (0, n.jsx)(eb, { projectId: e })
                            : (0, n.jsx)(em, {
                                  iconURL: u,
                                  onIconChange: L,
                                  name: m,
                                  nameError: x,
                                  onNameChange: z,
                                  description: d,
                                  onDescriptionChange: F,
                                  disabled: J,
                              }),
                        A && !q
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.ujIxRm),
                                  description: b.intl.string(j.default.gT8zk1),
                                  checked: y,
                                  disabled: J,
                                  onChange: (e) => H(ec.Zh.PUBLIC, e),
                              })
                            : null,
                        t ? null : (0, n.jsx)(ex.A, { projectId: e }),
                        A && E
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.lVvR4E),
                                  description: b.intl.string(j.default.SQZGoV),
                                  checked: S,
                                  disabled: J,
                                  onChange: (e) => H(ec.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        k
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.DV2hcV),
                                  description: b.intl.string(j.default.yjWIzb),
                                  checked: C,
                                  disabled: J,
                                  onChange: M,
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(Y.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: J,
                                  onChange: G,
                              })
                            : null,
                        w
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(ee.Z, {
                                          selectionMode: "multiple",
                                          label: b.intl.string(j.default["pO3+p5"]),
                                          placeholder: b.intl.string(j.default.gvL7QS),
                                          value: P,
                                          options: i,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: J || !S || T,
                                          "aria-invalid": null != N,
                                          "aria-errormessage": null != N ? s : void 0,
                                          onSelectionChange: U,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          children: b.intl.formatToPlainString(j.default.g5I05P, {
                                              count: P.length,
                                              max: 25,
                                          }),
                                      }),
                                      S
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                children: b.intl.string(j.default.nZw5r9),
                                            }),
                                      null != N
                                          ? (0, n.jsx)(f.E, {
                                                id: s,
                                                variant: "body-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: N,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        t ? null : (0, n.jsx)(eS, { projectId: e }),
                        null != _
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: _,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(Y.d, {
                            label: b.intl.string(j.default["4liZ45"]),
                            description: b.intl.string(j.default.I5cl7p),
                            checked: g.checked,
                            disabled: I,
                            onChange: D,
                        }),
                        (0, n.jsx)(Y.d, {
                            label: b.intl.string(j.default.mpjaVm),
                            description: b.intl.string(j.default["2PxChh"]),
                            checked: p.checked,
                            disabled: I,
                            onChange: O,
                        }),
                        (0, n.jsx)(et.u, { projectId: e }),
                        null != B
                            ? (0, n.jsx)(f.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: B,
                              })
                            : null,
                    ],
                }),
                canSave: R,
                saving: I,
                nameChanged: v,
                submit: Z,
            };
        })(l, N?.guild_id ?? t ?? void 0, { readOnly: !R }),
        H = (function (e, l) {
            let [t, n] = a.useState(e),
                [i, s] = a.useState(v),
                [u, d] = a.useState(y),
                [c, o] = a.useState(S),
                [f, g] = a.useState(!1),
                [p, m] = a.useState(!1);
            t !== e && (n(e), s(v), d(y), o(S), g(!1), m(!1));
            let C = a.useRef(e);
            a.useEffect(() => {
                C.current = e;
            }, [e]);
            let k = (0, r.yK)(
                [h.Ay],
                () =>
                    [
                        ...new Set(
                            [
                                ...h.Ay.getOwnedProjects(),
                                ...h.Ay.getSharedWithMeProjects(),
                                ...h.Ay.getRailProjects(),
                            ].map((e) => e.id),
                        ),
                    ]
                        .filter((l) => l !== e)
                        .sort(),
                [e],
            );
            (a.useEffect(() => {
                if (!l) return;
                let t = !0;
                return (
                    !(async function () {
                        try {
                            let l = await (0, x.k_)(e);
                            if (!t) return;
                            (s(l.callers), o({ live: !0 === l.live, hasPreview: !1 !== l.has_preview }));
                        } catch {}
                    })(),
                    () => {
                        t = !1;
                    }
                );
            }, [e, l]),
                a.useEffect(() => {
                    if (!l || 0 === k.length) return;
                    let t = !0;
                    return (
                        !(async function () {
                            try {
                                let l = await (0, x.n9)(e, k);
                                t && d(l.targets);
                            } catch {}
                        })(),
                        () => {
                            t = !1;
                        }
                    );
                }, [e, l, k]));
            let P = (0, r.bG)([h.Ay], () => h.Ay.getProject(e), [e]),
                A = (0, r.cf)(
                    [h.Ay],
                    () =>
                        Object.fromEntries(
                            [...i, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [l, h.Ay.getProject(l)];
                            }),
                        ),
                    [i, u],
                ),
                E = a.useMemo(
                    () =>
                        Object.fromEntries(
                            [...i, ...u].map((e) => {
                                let { project_id: l } = e;
                                return [
                                    l,
                                    A[l]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: l }),
                                ];
                            }),
                        ),
                    [i, A, u],
                ),
                w = a.useCallback(
                    async (l, t) => {
                        (g(!1), m(!1));
                        try {
                            await (0, x.Ol)(e, l, { build: t });
                        } catch {
                            C.current === e && g(!0);
                            return;
                        }
                        C.current === e &&
                            (m(!0), s((e) => e.map((e) => (e.project_id === l ? { ...e, build: t } : e))));
                    },
                    [e],
                ),
                T = a.useCallback(
                    async (l) => {
                        (g(!1), m(!1));
                        try {
                            await (0, x.pc)(e, l);
                        } catch {
                            C.current === e && g(!0);
                            return;
                        }
                        C.current === e && (m(!0), s((e) => e.filter((e) => e.project_id !== l)));
                    },
                    [e],
                );
            return {
                name: P?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: e }),
                project: P ?? null,
                live: c.live,
                hasPreview: c.hasPreview,
                callers: i,
                targets: u,
                projects: A,
                names: E,
                failed: f,
                saved: p,
                setBuild: w,
                remove: T,
            };
        })(l, z),
        [G, U] = a.useState(null);
    return (0, n.jsx)(X.A, {
        projectId: l,
        scopeKeys: k,
        note: P,
        notifyAgent: A,
        isPreview: E,
        children: (e) => {
            let t = [];
            ((R || z) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                _?.tierSettings != null && t.push("model"),
                (H.callers.length > 0 || H.targets.length > 0) && t.push("linked"),
                R && t.push("experimental"));
            let a = [G, C].find((e) => null != e && t.includes(e)) ?? t[0],
                r = e.isScoped,
                m = !R && !r && !t.includes("app") && !t.includes("secrets"),
                x = (R && F.saving) || e.saving,
                v = (function (e) {
                    let { appCanSave: l, appInvalid: t, projectCanSave: n } = e;
                    return !t && (l || n);
                })({ appCanSave: e.canSave, appInvalid: e.invalid, projectCanSave: !r && R && F.canSave }),
                y = b.intl.string(r ? j.default["jZjP+I"] : j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: async function (n) {
                    if ((n.preventDefault(), !v || x)) {
                        e.invalid && t.includes("app") && U("app");
                        return;
                    }
                    let s = !r && R && F.nameChanged,
                        u = await (async function (e) {
                            let { appInvalid: l, submitApp: t, submitProject: n } = e;
                            if (l) return { saved: !1, failedTab: "app" };
                            let [a, r] = await Promise.all([n?.() ?? null, t()]);
                            return null == a && r ? { saved: !0 } : { saved: !1, failedTab: a ?? "app" };
                        })({ appInvalid: e.invalid, submitApp: e.submit, submitProject: r || !R ? null : F.submit });
                    if (u.saved) {
                        (await I(),
                            s &&
                                null != w &&
                                (function (e, l) {
                                    let t = h.Ay.getProject(e);
                                    if (null == t || !(0, V.qF)(t)) return;
                                    let n = O.A.getPublishStatus(e);
                                    null != n &&
                                        (0, Z.lE)(n.publishState) &&
                                        (0, i.A)({
                                            title: b.intl.string(j.default["48pvCR"]),
                                            subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                            confirmText: b.intl.string(j.default.guoHDk),
                                            cancelText: b.intl.string(j.default.HSyPrY),
                                            variant: "primary",
                                            onConfirm: () => {
                                                (0, V.FZ)(e, "name_prompt", l).catch(() => {});
                                            },
                                        });
                                })(l, w));
                        return;
                    }
                    "app" !== u.failedTab
                        ? U(u.failedTab)
                        : "secrets" !== a && U(t.includes("app") ? "app" : "secrets");
                },
                children: (0, n.jsxs)(s.d, {
                    transitionState: T,
                    onClose: I,
                    "aria-label": y,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: y }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                r || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => U(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: b.intl.string(eR[e]) }, e),
                                          ),
                                      }),
                            children: [
                                r || "app" === a ? e.fields : null,
                                r || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eB.f,
                                          children: [F.fields, (0, n.jsx)(K, { projectId: l, canEdit: z }, l)],
                                      }),
                                r || "linked" !== a
                                    ? null
                                    : (0, n.jsx)(L, {
                                          linkedApps: H,
                                          onOpenSettings: (e) => {
                                              (I(), (0, $.A)(e, { initialTab: "linked" }));
                                          },
                                      }),
                                r || "experimental" !== a ? null : F.experimentalFields,
                                r || "secrets" !== a ? null : e.secretFields,
                                r || "model" !== a || _?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(ez, { projectId: l, modelSettings: _, tierSettings: _.tierSettings }),
                                r || null != a
                                    ? null
                                    : B
                                      ? (0, n.jsx)(f.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eB.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions:
                                m || ("linked" === a && !v)
                                    ? [{ text: b.intl.string(b.t.cpT0Cq), variant: "secondary", onClick: I }]
                                    : [
                                          {
                                              text: b.intl.string(b.t["ETE/oC"]),
                                              variant: "secondary",
                                              onClick: I,
                                              disabled: x,
                                          },
                                          {
                                              text: b.intl.string(r ? j.default.A7dQd9 : b.t["R3BPH+"]),
                                              variant: "primary",
                                              type: "submit",
                                              loading: x,
                                              disabled: !v,
                                          },
                                      ],
                        }),
                    ],
                }),
            });
        },
    });
}
function ez(e) {
    let { projectId: l, modelSettings: t, tierSettings: i } = e,
        s = (0, r.bG)([m.Ay], () => "open" === m.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, G.X)(l, e), [l]),
        [d, c] = (0, U.A)(i, u);
    return (0, n.jsx)(D.A, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: c });
}
