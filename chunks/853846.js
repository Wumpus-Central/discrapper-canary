l.r(e), l.d(e, { default: () => tj });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    d = l(989349),
    c = l.n(d),
    o = l(17928),
    u = l(314116),
    m = l(534890),
    x = l(939249),
    g = l(834730),
    p = l(691540),
    f = l(857250),
    h = l(97483),
    j = l(866665),
    v = l(408278),
    N = l(821609),
    b = l(297264),
    C = l(364522),
    E = l(260598),
    y = l(81369),
    k = l(289873),
    A = l(152367),
    I = l(661531),
    w = l(627363),
    S = l(976860),
    _ = l(673724),
    V = l(948230),
    R = l(148555),
    z = l(683180),
    P = l(208137),
    T = l(783791),
    D = l(998939),
    H = l(972786),
    F = l(20386),
    O = l(878706),
    X = l(379307),
    B = l(922016),
    K = l(980707),
    L = l(477782),
    M = l(365199),
    G = l(818085),
    U = l(375708),
    Y = l(192308);
function W(t) {
    let { projectId: e, projectName: i, onExport: s, onImport: r } = t,
        d = a.useRef(null);
    return (0, n.jsx)(B.Y, {
        targetElementRef: d,
        position: "bottom",
        align: "right",
        animation: B.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, n.jsxs)(K.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": U.intl.string(U.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: [
                    null != s || null != r
                        ? (0, n.jsxs)(L.rX, {
                              children: [
                                  null != s
                                      ? (0, n.jsx)(L.Dr, {
                                            id: "export",
                                            label: U.intl.string(G.default["7iamDC"]),
                                            action: s,
                                        })
                                      : null,
                                  null != r
                                      ? (0, n.jsx)(L.Dr, {
                                            id: "import",
                                            label: U.intl.string(G.default.lf8HqE),
                                            action: r,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    (0, n.jsxs)(L.rX, {
                        children: [
                            (0, n.jsx)(L.Dr, {
                                id: "rename",
                                label: U.intl.string(G.default.fHTQgk),
                                action: () => {
                                    (0, Y.openModalLazy)(async () => {
                                        let { default: t } = await l.e("153463").then(l.bind(l, 809898));
                                        return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                    });
                                },
                            }),
                            (0, n.jsx)(L.Dr, {
                                id: "delete",
                                label: U.intl.string(U.t.oyYWHE),
                                color: "danger",
                                action: () => {
                                    (0, u.A)({
                                        title: U.intl.formatToPlainString(G.default.ZokHVz, { name: i }),
                                        subtitle: U.intl.string(G.default.NmF939),
                                        confirmText: U.intl.string(U.t.oyYWHE),
                                        variant: "critical",
                                        onConfirm: async () => {
                                            if (!(await (0, V.xx)(e)).ok) throw Error(U.intl.string(G.default.tqKZCi));
                                        },
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        children: (t, e) => {
            let { isShown: l } = e;
            return (0, n.jsx)(v.K, {
                ...t,
                buttonRef: d,
                icon: M.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": U.intl.string(U.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var $ = l(742589),
    q = l(833576);
function Z(t) {
    let { title: e, actions: l, breadcrumb: i } = t;
    return (0, n.jsx)($.A, {
        hideSearch: !0,
        toolbar: l,
        className: q.wx,
        "aria-label": e,
        children: (0, n.jsxs)("div", {
            className: q.QF,
            children: [
                (0, n.jsx)(A.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: I.A.colors.TEXT_STRONG,
                    className: q.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)($.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)($.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)($.A.Title, { className: q.Qw, wrapperClassName: q.DD, children: e }),
            ],
        }),
    });
}
var Q = l(189213),
    J = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function tt(t) {
    let { reason: e, transitionState: l, onClose: i } = t,
        a = "permissions" === e;
    return (0, n.jsx)(Q.Modal, {
        transitionState: l,
        onClose: i,
        title: U.intl.string(a ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: U.intl.string(a ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: U.intl.string(a ? U.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function te(t) {
    (0, Y.openModal)((e) => (0, n.jsx)(tt, { ...e, reason: t }));
}
var tl = l(224640),
    ti = l(815021),
    tn = l(652215),
    ta = l(283382),
    ts = l(264997);
function tr(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: s, onClose: r } = t,
        d = U.intl.string(G.default.yzxKsU),
        c = U.intl.formatToPlainString(G.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let t = (0, z.SH)(l, e);
            (0, S.pX)(null == t ? tn.BVt.CHANNEL(l) : tn.BVt.CHANNEL(l, t)), r();
        }, [e, l, r]);
    return (0, n.jsx)(tl.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: ta.zr,
            children: [
                (0, n.jsx)("div", { className: ta.b, children: (0, n.jsx)(ti.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: ta.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: ta.bm,
                            children: (0, n.jsx)("img", { className: ta.yW, src: ts, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: ta.R_,
                            children: [
                                (0, n.jsx)(b.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(g.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ta.o1,
                    children: [
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: U.intl.string(U.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: U.intl.string(U.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function td(t, e, l) {
    (0, D.Hc)(t);
    let i = await (0, D.vX)(t, e);
    (0, D.dv)(t, l, [i]);
}
function tc(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, _.x5)(t.size, e)
        ? null
        : U.intl.formatToPlainString(G.default.AzziHF, { size: (0, _.ZJ)((0, _.yr)(e)) });
}
function to(t) {
    let e = a.useRef(null),
        l = a.useCallback(
            (e) => {
                let l = e.target.files?.[0] ?? null;
                (e.target.value = ""), null != l && t(l);
            },
            [t],
        );
    return {
        open: () => e.current?.click(),
        input: (0, n.jsx)("input", {
            ref: e,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: l,
        }),
    };
}
var tu = l(746080),
    tm = l(165610),
    tx = l(401029);
function tg(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tp(t) {
    let { project: e, onSelect: l } = t,
        i = (0, o.bG)([T.A], () => T.A.isThinking(e.id), [e.id]),
        a =
            null == e.updated_at
                ? null
                : U.intl.formatToPlainString(G.default.oMDaqr, { time: c()(e.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: tx.OY,
        children: [
            (0, n.jsx)(x.D, {
                className: tx.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: tx.MM,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tx.j1,
                            children: e.name,
                        }),
                        null == a
                            ? null
                            : (0, n.jsx)("div", {
                                  className: tx.h3,
                                  children: (0, n.jsx)(g.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: a,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: tx.M2,
                children: [
                    i ? (0, n.jsx)(F.Ty, { className: tx.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: tx.Pl,
                        children: (0, n.jsx)(W, { projectId: e.id, projectName: e.name }),
                    }),
                ],
            }),
        ],
    });
}
function tf(t) {
    let { project: e, projectsLoaded: l, onBack: i, guildId: s } = t,
        [r, d] = a.useState(!1),
        [c, m] = a.useState(!0),
        [x, C] = a.useState(null),
        E = e?.id ?? null,
        y = a.useRef(E),
        k = a.useRef(null);
    y.current = E;
    let A = (0, o.bG)([H.A], () => (null == E ? null : H.A.getIntegrationStatus(E)), [E]),
        { data: I, isLoading: _ } = (0, w.YY)(e?.preview_application_id ?? void 0),
        z = null != E && x !== E,
        P = A?.preview_ready === !0,
        T = P && null != A && (!A.integration_installed || A.bot_permissions_changed),
        F = r || z || _,
        X = U.intl.string(c ? G.default.YdgE0j : G.default.aWVf4j),
        B = a.useCallback(() => m((t) => !t), []),
        K = a.useCallback(() => {
            null != e && (m(!0), (0, D.dv)(e.id, U.intl.string(G.default["2ejwtJ"])));
        }, [e]),
        L = to(
            a.useCallback(
                (t) => {
                    if (null == e) return;
                    let l = e.id,
                        i = tc(t);
                    null != i
                        ? (0, p.P0)((0, f.o)(i, h.Ck.FAILURE))
                        : (0, u.A)({
                              title: U.intl.formatToPlainString(G.default.XYZqZK, { name: e.name }),
                              subtitle: U.intl.string(G.default["6syXoH"]),
                              confirmText: U.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await td(l, t, U.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, p.P0)((0, f.o)(U.intl.string(G.default["02GpNr"]), h.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [e],
            ),
        ),
        M = a.useCallback(async () => {
            if (null == E || y.current !== E) return;
            k.current?.abort();
            let t = new AbortController();
            (k.current = t), C(null);
            try {
                await (0, V.U1)(E, t.signal);
            } catch {
            } finally {
                t.signal.aborted || k.current !== t || y.current !== E || C(E);
            }
        }, [E]);
    a.useEffect(
        () => (
            M(),
            () => {
                k.current?.abort(), (k.current = null);
            }
        ),
        [M],
    );
    let $ = A?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : s,
        q = a.useCallback(async () => {
            null == e ||
                (e.guild_id === $ && e.preview_guild_id === $) ||
                (await (0, V.M7)(e.id, { guild_id: $, preview_guild_id: $ }));
        }, [$, e]),
        Q = a.useCallback(async () => {
            try {
                await q();
            } catch {}
            await M();
        }, [M, q]),
        tt = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                R.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: I ?? null,
                    guildId: $,
                    onClose: () => {
                        Q();
                    },
                });
        }, [Q, $, I, e]),
        tl = T ? { type: "permissions", onReviewPermissions: tt, loading: _ || z } : z ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == e && l && (0, S.pX)(tn.BVt.CHANNEL(s, tu.VV.VIBEGRATIONS));
    }, [s, e, l]);
    let ti = a.useCallback(async () => {
        if (null != e) {
            if (!P) return void te(J.NO_PREVIEW);
            if (T) return void te(J.PERMISSIONS);
            d(!0);
            try {
                var t;
                let l = await (0, D.TV)(e.id);
                if (!0 !== l.ok) throw Error(U.intl.string(G.default.fNP6Cd));
                (0, V.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e.id, t);
                }),
                    (t = { applicationId: e.application_id, guildId: s, projectName: e.name }),
                    (0, Y.openModal)((e) => (0, n.jsx)(tr, { ...e, ...t }));
            } catch (t) {
                (0, p.P0)((0, f.o)(t instanceof Error ? t.message : U.intl.string(G.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, T, P, e]);
    return (0, n.jsxs)("div", {
        className: tx.nj,
        children: [
            (0, n.jsx)(Z, {
                title: e?.name ?? U.intl.string(G.default.F2dRba),
                breadcrumb: { title: U.intl.string(G.default.Xmvb23), onClick: i },
                actions:
                    null == e
                        ? null
                        : (0, n.jsxs)("div", {
                              className: tx.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tx.FO,
                                      children: [
                                          (0, n.jsx)(W, {
                                              projectId: e.id,
                                              projectName: e.name,
                                              onExport: K,
                                              onImport: L.open,
                                          }),
                                          (0, n.jsx)(j.m, {
                                              text: X,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(v.K, {
                                                  icon: tg,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": X,
                                                  "aria-pressed": c,
                                                  onClick: B,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: U.intl.string(G.default["5gU57O"]),
                                      loading: r,
                                      disabled: F,
                                      onClick: ti,
                                  }),
                              ],
                          }),
            }),
            L.input,
            (0, n.jsx)("main", {
                className: tx.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: tx.sD,
                              children: [
                                  (0, n.jsx)(b.D, {
                                      variant: "heading-lg/semibold",
                                      children: U.intl.string(G.default.F2dRba),
                                  }),
                                  (0, n.jsx)(g.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: U.intl.string(G.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: U.intl.string(G.default["42EdIV"]),
                                      onClick: V.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              O.A,
                              {
                                  projectId: e.id,
                                  applicationId: e.preview_application_id,
                                  surface: tm.sd,
                                  chatOpen: c,
                                  previewReady: P,
                                  previewGate: tl,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function th(t) {
    let {
            projects: e,
            fetchState: l,
            idea: i,
            guildId: s,
            submitting: d,
            createError: c,
            createDisabled: o,
            modelSettings: u,
            onModelSettingsChange: m,
            onSelectProject: p,
            onIdeaChange: f,
            onCreate: h,
            onImportNewProject: j,
            importing: v,
        } = t,
        w = to(j),
        S = a.useMemo(
            () =>
                e
                    .filter((t) => (0, z.X0)(t, s))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, s],
        ),
        R = U.intl.string(G.default.TU9IGR),
        T = [
            U.intl.string(G.default["E+Q26x"]),
            U.intl.string(G.default["06/jqP"]),
            U.intl.string(G.default["7MCiK9"]),
        ],
        D = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), o || h());
            },
            [o, h],
        );
    return (0, n.jsxs)("div", {
        className: r()(tx.nj, tx.a0),
        children: [
            (0, n.jsx)(Z, { title: U.intl.string(G.default.Xmvb23) }),
            (0, n.jsx)(C.Ip, {
                children: (0, n.jsx)("main", {
                    className: tx.rf,
                    children: (0, n.jsxs)("div", {
                        className: tx.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: tx.Ix,
                                children: [
                                    (0, n.jsx)(b.D, {
                                        variant: "heading-xl/semibold",
                                        children: U.intl.string(G.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: tx.Aw,
                                        children: T.map((t) =>
                                            (0, n.jsx)(
                                                x.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: tx.nx,
                                                    onClick: d ? void 0 : () => h(t),
                                                    children: (0, n.jsx)(g.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: tx.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: tx.DA,
                                        children: [
                                            (0, n.jsx)(E.f, {
                                                label: R,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: R,
                                                error: c,
                                                onChange: f,
                                                onKeyDown: D,
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: tx.VP,
                                                children: [
                                                    (0, n.jsx)(X.A, {
                                                        settings: u ?? _.hk,
                                                        choices:
                                                            null == (0, P.V)()
                                                                ? _.S8
                                                                : {
                                                                      main: [..._.S8.main, ..._.wF.main],
                                                                      subagent: [..._.S8.subagent, ..._.wF.subagent],
                                                                      thinking: _.S8.thinking,
                                                                  },
                                                        disabled: d,
                                                        onChange: m,
                                                    }),
                                                    (0, n.jsx)(N.$, {
                                                        variant: "primary",
                                                        size: "md",
                                                        text: U.intl.string(U.t.CumH4u),
                                                        disabled: o,
                                                        loading: d,
                                                        onClick: () => h(),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: tx.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tx.lP,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: tx.RM,
                                                children: [
                                                    (0, n.jsx)(g.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: U.intl.string(G.default.Bo5fE3),
                                                    }),
                                                    (0, n.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: U.intl.string(G.default.YnAFtT),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(N.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: y.H,
                                                text: U.intl.string(G.default["NHP2+t"]),
                                                loading: v,
                                                disabled: v,
                                                onClick: w.open,
                                            }),
                                            w.input,
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === S.length
                                        ? (0, n.jsx)("div", { className: tx.E8, children: (0, n.jsx)(k.y, {}) })
                                        : l?.type === "error" && 0 === S.length
                                          ? (0, n.jsxs)("div", {
                                                className: tx.E8,
                                                children: [
                                                    (0, n.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: U.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: U.intl.string(G.default["42EdIV"]),
                                                        onClick: V.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === S.length
                                            ? (0, n.jsx)("div", {
                                                  className: tx.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: tx.ST,
                                                      children: [
                                                          (0, n.jsx)(A.D, {
                                                              size: "lg",
                                                              color: I.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tx.sI,
                                                              children: U.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : S.map((t) =>
                                                  (0, n.jsx)(tp, { project: t, onSelect: () => p(t.id) }, t.id),
                                              ),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tj(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, o.yK)([H.A], () => H.A.getAllProjects()),
        s = (0, o.bG)([H.A], () => H.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = l ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [j, v] = a.useState(null),
        N = r.trim();
    a.useEffect(() => {
        (0, V.hF)();
    }, []),
        a.useEffect(() => {
            (0, V.dm)(e, c);
        }, [e, c]);
    let b = a.useCallback(
            async (t) => {
                let l = (t ?? r).trim();
                if ("" !== l) {
                    null != t && d(t), m(!0), g(null);
                    try {
                        let t = await (0, V.gA)({ guild_id: e });
                        (0, D.Hc)(t),
                            null != j && (0, D.r2)(t, j),
                            (0, D.dv)(t, l),
                            (0, S.pX)(tn.BVt.CHANNEL(e, tu.VV.VIBEGRATIONS, t)),
                            d(""),
                            v(null);
                    } catch (t) {
                        g(t instanceof Error ? t.message : U.intl.string(G.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [e, r, j],
        ),
        [C, E] = a.useState(!1),
        y = a.useCallback(
            async (t) => {
                let l = tc(t);
                if (null != l) return void (0, p.P0)((0, f.o)(l, h.Ck.FAILURE));
                E(!0);
                let i = null;
                try {
                    (i = await (0, V.gA)({ guild_id: e })),
                        await td(i, t, U.intl.string(G.default.KjEtrZ)),
                        (0, S.pX)(tn.BVt.CHANNEL(e, tu.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, V.xx)(i).catch(() => void 0)),
                        (0, p.P0)((0, f.o)(U.intl.string(G.default["02GpNr"]), h.Ck.FAILURE));
                } finally {
                    E(!1);
                }
            },
            [e],
        ),
        k = a.useCallback(
            (t) => {
                (0, S.pX)(tn.BVt.CHANNEL(e, tu.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        A = a.useCallback(() => {
            (0, S.pX)(tn.BVt.CHANNEL(e, tu.VV.VIBEGRATIONS));
        }, [e]),
        I = a.useCallback((t) => {
            d(t), g(null);
        }, []),
        w = null == c ? null : (i.find((t) => t.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(tf, { project: w, projectsLoaded: s?.type === "success", onBack: A, guildId: e })
        : (0, n.jsx)(th, {
              projects: i,
              fetchState: s,
              modelSettings: j,
              onModelSettingsChange: v,
              idea: r,
              guildId: e,
              submitting: u,
              createError: x,
              createDisabled: "" === N || u,
              onSelectProject: k,
              onIdeaChange: I,
              onCreate: b,
              onImportNewProject: y,
              importing: C,
          });
}
