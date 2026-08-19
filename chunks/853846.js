e.r(l), e.d(l, { default: () => tv });
var i,
    n = e(477900),
    a = e(582128),
    s = e(503698),
    r = e.n(s),
    d = e(989349),
    c = e.n(d),
    o = e(17928),
    u = e(314116),
    m = e(534890),
    x = e(939249),
    g = e(834730),
    p = e(691540),
    f = e(857250),
    h = e(97483),
    j = e(866665),
    v = e(408278),
    N = e(821609),
    b = e(297264),
    C = e(364522),
    E = e(260598),
    k = e(81369),
    y = e(289873),
    A = e(152367),
    I = e(661531),
    w = e(627363),
    S = e(976860),
    _ = e(673724),
    V = e(948230),
    R = e(148555),
    z = e(683180),
    P = e(208137),
    T = e(783791),
    D = e(998939),
    F = e(972786),
    H = e(20386),
    O = e(437423),
    X = e(379307),
    B = e(922016),
    K = e(980707),
    L = e(477782),
    M = e(365199),
    G = e(818085),
    U = e(375708),
    Y = e(192308);
function W(t) {
    let { projectId: l, projectName: i, onExport: s, onImport: r, onFork: d } = t,
        c = a.useRef(null);
    return (0, n.jsx)(B.Y, {
        targetElementRef: c,
        position: "bottom",
        align: "right",
        animation: B.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, n.jsxs)(K.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${l}`,
                "aria-label": U.intl.string(U.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: [
                    null != d || null != s || null != r
                        ? (0, n.jsxs)(L.rX, {
                              children: [
                                  null != d
                                      ? (0, n.jsx)(L.Dr, {
                                            id: "fork",
                                            label: U.intl.string(G.default.hU9QAE),
                                            action: d,
                                        })
                                      : null,
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
                                        let { default: t } = await e.e("153463").then(e.bind(e, 809898));
                                        return (e) => (0, n.jsx)(t, { ...e, projectId: l });
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
                                            if (!(await (0, V.xx)(l)).ok) throw Error(U.intl.string(G.default.tqKZCi));
                                        },
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        children: (t, l) => {
            let { isShown: e } = l;
            return (0, n.jsx)(v.K, {
                ...t,
                buttonRef: c,
                icon: M.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": U.intl.string(U.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": e,
            });
        },
    });
}
var $ = e(742589),
    q = e(833576);
function Q(t) {
    let { title: l, actions: e, breadcrumb: i } = t;
    return (0, n.jsx)($.A, {
        hideSearch: !0,
        toolbar: e,
        className: q.wx,
        "aria-label": l,
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
                (0, n.jsx)($.A.Title, { className: q.Qw, wrapperClassName: q.DD, children: l }),
            ],
        }),
    });
}
var Z = e(594483),
    J = e(189213),
    tt = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function tl(t) {
    let { reason: l, transitionState: e, onClose: i } = t,
        a = "permissions" === l;
    return (0, n.jsx)(J.Modal, {
        transitionState: e,
        onClose: i,
        title: U.intl.string(a ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: U.intl.string(a ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: U.intl.string(a ? U.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function te(t) {
    (0, Y.openModal)((l) => (0, n.jsx)(tl, { ...l, reason: t }));
}
var ti = e(224640),
    tn = e(815021),
    ta = e(652215),
    ts = e(283382),
    tr = e(264997);
function td(t) {
    let { applicationId: l, guildId: e, projectName: i, transitionState: s, onClose: r } = t,
        d = U.intl.string(G.default.yzxKsU),
        c = U.intl.formatToPlainString(G.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let t = (0, z.SH)(e, l);
            (0, S.pX)(null == t ? ta.BVt.CHANNEL(e) : ta.BVt.CHANNEL(e, t)), r();
        }, [l, e, r]);
    return (0, n.jsx)(ti.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: ts.zr,
            children: [
                (0, n.jsx)("div", { className: ts.b, children: (0, n.jsx)(tn.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: ts.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: ts.bm,
                            children: (0, n.jsx)("img", { className: ts.yW, src: tr, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: ts.R_,
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
                    className: ts.o1,
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
async function tc(t, l, e) {
    (0, D.Hc)(t);
    let i = await (0, D.vX)(t, l);
    (0, D.dv)(t, e, [i]);
}
function to(t) {
    let l = "" === t.type ? "application/octet-stream" : t.type;
    return (0, _.x5)(t.size, l)
        ? null
        : U.intl.formatToPlainString(G.default.AzziHF, { size: (0, _.ZJ)((0, _.yr)(l)) });
}
function tu(t) {
    let l = a.useRef(null),
        e = a.useCallback(
            (l) => {
                let e = l.target.files?.[0] ?? null;
                (l.target.value = ""), null != e && t(e);
            },
            [t],
        );
    return {
        open: () => l.current?.click(),
        input: (0, n.jsx)("input", {
            ref: l,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: e,
        }),
    };
}
var tm = e(746080),
    tx = e(165610),
    tg = e(401029);
function tp(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tf(t) {
    let { project: l, onSelect: e, onFork: i } = t,
        a = (0, o.bG)([T.A], () => T.A.isThinking(l.id), [l.id]),
        s =
            null == l.updated_at
                ? null
                : U.intl.formatToPlainString(G.default.oMDaqr, { time: c()(l.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: tg.OY,
        children: [
            (0, n.jsx)(x.D, {
                className: tg.W6,
                onClick: e,
                children: (0, n.jsxs)("div", {
                    className: tg.MM,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tg.j1,
                            children: l.name,
                        }),
                        null == s
                            ? null
                            : (0, n.jsx)("div", {
                                  className: tg.h3,
                                  children: (0, n.jsx)(g.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: s,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: tg.M2,
                children: [
                    a ? (0, n.jsx)(H.Ty, { className: tg.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: tg.Pl,
                        children: (0, n.jsx)(W, { projectId: l.id, projectName: l.name, onFork: i }),
                    }),
                ],
            }),
        ],
    });
}
function th(t) {
    let { project: l, projectsLoaded: e, onBack: i, guildId: s } = t,
        [r, d] = a.useState(!1),
        [c, m] = a.useState(!0),
        [x, C] = a.useState(null),
        E = l?.id ?? null,
        k = a.useRef(E),
        y = a.useRef(null);
    k.current = E;
    let A = (0, o.bG)([F.A], () => (null == E ? null : F.A.getIntegrationStatus(E)), [E]),
        { data: I, isLoading: _ } = (0, w.YY)(l?.preview_application_id ?? void 0),
        z = null != E && x !== E,
        P = A?.preview_ready === !0,
        T = P && null != A && (!A.integration_installed || A.bot_permissions_changed),
        H = r || z || _,
        X = U.intl.string(c ? G.default.YdgE0j : G.default.aWVf4j),
        B = a.useCallback(() => m((t) => !t), []),
        K = a.useCallback(() => {
            null != l && (m(!0), (0, D.dv)(l.id, U.intl.string(G.default["2ejwtJ"])));
        }, [l]),
        L = tu(
            a.useCallback(
                (t) => {
                    if (null == l) return;
                    let e = l.id,
                        i = to(t);
                    null != i
                        ? (0, p.P0)((0, f.o)(i, h.Ck.FAILURE))
                        : (0, u.A)({
                              title: U.intl.formatToPlainString(G.default.XYZqZK, { name: l.name }),
                              subtitle: U.intl.string(G.default["6syXoH"]),
                              confirmText: U.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await tc(e, t, U.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, p.P0)((0, f.o)(U.intl.string(G.default["02GpNr"]), h.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        M = a.useCallback(() => {
            null != l && (0, Z.A)(l, s);
        }, [l, s]),
        $ = a.useCallback(async () => {
            if (null == E || k.current !== E) return;
            y.current?.abort();
            let t = new AbortController();
            (y.current = t), C(null);
            try {
                await (0, V.U1)(E, t.signal);
            } catch {
            } finally {
                t.signal.aborted || y.current !== t || k.current !== E || C(E);
            }
        }, [E]);
    a.useEffect(
        () => (
            $(),
            () => {
                y.current?.abort(), (y.current = null);
            }
        ),
        [$],
    );
    let q = A?.integration_installed === !0 && l?.guild_id != null ? l.guild_id : s,
        J = a.useCallback(async () => {
            null == l ||
                (l.guild_id === q && l.preview_guild_id === q) ||
                (await (0, V.M7)(l.id, { guild_id: q, preview_guild_id: q }));
        }, [q, l]),
        tl = a.useCallback(async () => {
            try {
                await J();
            } catch {}
            await $();
        }, [$, J]),
        ti = a.useCallback(() => {
            let t = l?.preview_application_id;
            null != l &&
                null != t &&
                R.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: I ?? null,
                    guildId: q,
                    onClose: () => {
                        tl();
                    },
                });
        }, [tl, q, I, l]),
        tn = T ? { type: "permissions", onReviewPermissions: ti, loading: _ || z } : z ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == l && e && (0, S.pX)(ta.BVt.CHANNEL(s, tm.VV.VIBEGRATIONS));
    }, [s, l, e]);
    let ts = a.useCallback(async () => {
        if (null != l) {
            if (!P) return void te(tt.NO_PREVIEW);
            if (T) return void te(tt.PERMISSIONS);
            d(!0);
            try {
                var t;
                let e = await (0, D.TV)(l.id);
                if (!0 !== e.ok) throw Error(U.intl.string(G.default.fNP6Cd));
                (0, V.tZ)(l.id, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", l.id, t);
                }),
                    (t = { applicationId: l.application_id, guildId: s, projectName: l.name }),
                    (0, Y.openModal)((l) => (0, n.jsx)(td, { ...l, ...t }));
            } catch (t) {
                (0, p.P0)((0, f.o)(t instanceof Error ? t.message : U.intl.string(G.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, T, P, l]);
    return (0, n.jsxs)("div", {
        className: tg.nj,
        children: [
            (0, n.jsx)(Q, {
                title: l?.name ?? U.intl.string(G.default.F2dRba),
                breadcrumb: { title: U.intl.string(G.default.Xmvb23), onClick: i },
                actions:
                    null == l
                        ? null
                        : (0, n.jsxs)("div", {
                              className: tg.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tg.FO,
                                      children: [
                                          (0, n.jsx)(W, {
                                              projectId: l.id,
                                              projectName: l.name,
                                              onExport: K,
                                              onImport: L.open,
                                              onFork: M,
                                          }),
                                          (0, n.jsx)(j.m, {
                                              text: X,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(v.K, {
                                                  icon: tp,
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
                                      disabled: H,
                                      onClick: ts,
                                  }),
                              ],
                          }),
            }),
            L.input,
            (0, n.jsx)("main", {
                className: tg.JX,
                children:
                    null == l
                        ? (0, n.jsxs)("div", {
                              className: tg.sD,
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
                                  projectId: l.id,
                                  applicationId: l.preview_application_id,
                                  surface: tx.sd,
                                  chatOpen: c,
                                  previewReady: P,
                                  previewGate: tn,
                              },
                              l.id,
                          ),
            }),
        ],
    });
}
function tj(t) {
    let {
            projects: l,
            fetchState: e,
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
        w = tu(j),
        S = a.useMemo(
            () =>
                l
                    .filter((t) => (0, z.X0)(t, s))
                    .slice()
                    .sort((t, l) =>
                        null == t.updated_at ? 1 : null == l.updated_at ? -1 : l.updated_at.localeCompare(t.updated_at),
                    ),
            [l, s],
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
        className: r()(tg.nj, tg.a0),
        children: [
            (0, n.jsx)(Q, { title: U.intl.string(G.default.Xmvb23) }),
            (0, n.jsx)(C.Ip, {
                children: (0, n.jsx)("main", {
                    className: tg.rf,
                    children: (0, n.jsxs)("div", {
                        className: tg.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: tg.Ix,
                                children: [
                                    (0, n.jsx)(b.D, {
                                        variant: "heading-xl/semibold",
                                        children: U.intl.string(G.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: tg.Aw,
                                        children: T.map((t) =>
                                            (0, n.jsx)(
                                                x.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: tg.nx,
                                                    onClick: d ? void 0 : () => h(t),
                                                    children: (0, n.jsx)(g.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: tg.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: tg.DA,
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
                                                className: tg.VP,
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
                                className: tg.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tg.lP,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: tg.RM,
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
                                                icon: k.H,
                                                text: U.intl.string(G.default["NHP2+t"]),
                                                loading: v,
                                                disabled: v,
                                                onClick: w.open,
                                            }),
                                            w.input,
                                        ],
                                    }),
                                    (null == e || "loading" === e.type) && 0 === S.length
                                        ? (0, n.jsx)("div", { className: tg.E8, children: (0, n.jsx)(y.y, {}) })
                                        : e?.type === "error" && 0 === S.length
                                          ? (0, n.jsxs)("div", {
                                                className: tg.E8,
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
                                                  className: tg.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: tg.ST,
                                                      children: [
                                                          (0, n.jsx)(A.D, {
                                                              size: "lg",
                                                              color: I.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tg.sI,
                                                              children: U.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : S.map((t) =>
                                                  (0, n.jsx)(
                                                      tf,
                                                      {
                                                          project: t,
                                                          onSelect: () => p(t.id),
                                                          onFork: () => (0, Z.A)(t, s),
                                                      },
                                                      t.id,
                                                  ),
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
function tv(t) {
    let { guildId: l, projectId: e } = t,
        i = (0, o.yK)([F.A], () => F.A.getAllProjects()),
        s = (0, o.bG)([F.A], () => F.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = e ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [j, v] = a.useState(null),
        N = r.trim();
    a.useEffect(() => {
        (0, V.hF)();
    }, []),
        a.useEffect(() => {
            (0, V.dm)(l, c);
        }, [l, c]);
    let b = a.useCallback(
            async (t) => {
                let e = (t ?? r).trim();
                if ("" !== e) {
                    null != t && d(t), m(!0), g(null);
                    try {
                        let t = await (0, V.gA)({ guild_id: l });
                        (0, D.Hc)(t),
                            null != j && (0, D.r2)(t, j),
                            (0, D.dv)(t, e),
                            (0, S.pX)(ta.BVt.CHANNEL(l, tm.VV.VIBEGRATIONS, t)),
                            d(""),
                            v(null);
                    } catch (t) {
                        g(t instanceof Error ? t.message : U.intl.string(G.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [l, r, j],
        ),
        [C, E] = a.useState(!1),
        k = a.useCallback(
            async (t) => {
                let e = to(t);
                if (null != e) return void (0, p.P0)((0, f.o)(e, h.Ck.FAILURE));
                E(!0);
                let i = null;
                try {
                    (i = await (0, V.gA)({ guild_id: l })),
                        await tc(i, t, U.intl.string(G.default.KjEtrZ)),
                        (0, S.pX)(ta.BVt.CHANNEL(l, tm.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, V.xx)(i).catch(() => void 0)),
                        (0, p.P0)((0, f.o)(U.intl.string(G.default["02GpNr"]), h.Ck.FAILURE));
                } finally {
                    E(!1);
                }
            },
            [l],
        ),
        y = a.useCallback(
            (t) => {
                (0, S.pX)(ta.BVt.CHANNEL(l, tm.VV.VIBEGRATIONS, t));
            },
            [l],
        ),
        A = a.useCallback(() => {
            (0, S.pX)(ta.BVt.CHANNEL(l, tm.VV.VIBEGRATIONS));
        }, [l]),
        I = a.useCallback((t) => {
            d(t), g(null);
        }, []),
        w = null == c ? null : (i.find((t) => t.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(th, { project: w, projectsLoaded: s?.type === "success", onBack: A, guildId: l })
        : (0, n.jsx)(tj, {
              projects: i,
              fetchState: s,
              modelSettings: j,
              onModelSettingsChange: v,
              idea: r,
              guildId: l,
              submitting: u,
              createError: x,
              createDisabled: "" === N || u,
              onSelectProject: y,
              onIdeaChange: I,
              onCreate: b,
              onImportNewProject: k,
              importing: C,
          });
}
