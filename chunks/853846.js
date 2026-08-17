i.r(e), i.d(e, { default: () => tN });
var l,
    a = i(477900),
    n = i(582128),
    s = i(503698),
    r = i.n(s),
    d = i(989349),
    o = i.n(d),
    c = i(17928),
    u = i(314116),
    m = i(534890),
    g = i(939249),
    x = i(834730),
    f = i(691540),
    p = i(857250),
    h = i(97483),
    j = i(866665),
    v = i(408278),
    C = i(32880),
    b = i(81369),
    N = i(821609),
    E = i(297264),
    k = i(364522),
    y = i(260598),
    S = i(289873),
    w = i(152367),
    A = i(661531),
    I = i(627363),
    R = i(976860),
    _ = i(673724),
    P = i(948230),
    V = i(148555),
    z = i(683180),
    T = i(208137),
    H = i(783791),
    D = i(998939),
    L = i(972786),
    F = i(20386),
    M = i(805070),
    O = i(379307),
    B = i(922016),
    K = i(980707),
    U = i(477782),
    X = i(365199),
    G = i(818085),
    W = i(375708),
    Y = i(192308);
function q(t) {
    let { projectId: e, projectName: l } = t,
        s = n.useRef(null);
    return (0, a.jsx)(B.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: B.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, a.jsx)(K.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": W.intl.string(W.t.ogxXGq),
                onClose: n,
                onSelect: n,
                children: (0, a.jsxs)(U.rX, {
                    children: [
                        (0, a.jsx)(U.Dr, {
                            id: "rename",
                            label: W.intl.string(G.default.fHTQgk),
                            action: () => {
                                (0, Y.openModalLazy)(async () => {
                                    let { default: t } = await i.e("153463").then(i.bind(i, 809898));
                                    return (i) => (0, a.jsx)(t, { ...i, projectId: e });
                                });
                            },
                        }),
                        (0, a.jsx)(U.Dr, {
                            id: "delete",
                            label: W.intl.string(W.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, u.A)({
                                    title: W.intl.formatToPlainString(G.default.ZokHVz, { name: l }),
                                    subtitle: W.intl.string(G.default.NmF939),
                                    confirmText: W.intl.string(W.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, P.xx)(e)).ok) throw Error(W.intl.string(G.default.tqKZCi));
                                    },
                                });
                            },
                        }),
                    ],
                }),
            });
        },
        children: (t, e) => {
            let { isShown: i } = e;
            return (0, a.jsx)(v.K, {
                ...t,
                buttonRef: s,
                icon: X.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": W.intl.string(W.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": i,
            });
        },
    });
}
var $ = i(742589),
    Q = i(833576);
function Z(t) {
    let { title: e, actions: i, breadcrumb: l } = t;
    return (0, a.jsx)($.A, {
        hideSearch: !0,
        toolbar: i,
        className: Q.wx,
        "aria-label": e,
        children: (0, a.jsxs)("div", {
            className: Q.QF,
            children: [
                (0, a.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: A.A.colors.TEXT_STRONG,
                    className: Q.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)($.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)($.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)($.A.Title, { className: Q.Qw, wrapperClassName: Q.DD, children: e }),
            ],
        }),
    });
}
var J = i(189213),
    tt = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l);
function te(t) {
    let { reason: e, transitionState: i, onClose: l } = t,
        n = "permissions" === e;
    return (0, a.jsx)(J.Modal, {
        transitionState: i,
        onClose: l,
        title: W.intl.string(n ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: W.intl.string(n ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: W.intl.string(n ? W.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: l }],
    });
}
function ti(t) {
    (0, Y.openModal)((e) => (0, a.jsx)(te, { ...e, reason: t }));
}
var tl = i(224640),
    ta = i(815021),
    tn = i(652215),
    ts = i(283382),
    tr = i(264997);
function td(t) {
    let { applicationId: e, guildId: i, projectName: l, transitionState: s, onClose: r } = t,
        d = W.intl.string(G.default.yzxKsU),
        o = W.intl.formatToPlainString(G.default.CC69wK, { projectName: l }),
        c = n.useCallback(() => {
            let t = (0, z.SH)(i, e);
            (0, R.pX)(null == t ? tn.BVt.CHANNEL(i) : tn.BVt.CHANNEL(i, t)), r();
        }, [e, i, r]);
    return (0, a.jsx)(tl.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, a.jsxs)("div", {
            className: ts.zr,
            children: [
                (0, a.jsx)("div", { className: ts.b, children: (0, a.jsx)(ta.J, { onClick: r }) }),
                (0, a.jsxs)("div", {
                    className: ts.wx,
                    children: [
                        (0, a.jsx)("div", {
                            className: ts.bm,
                            children: (0, a.jsx)("img", { className: ts.yW, src: tr, alt: "" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: ts.R_,
                            children: [
                                (0, a.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, a.jsx)(x.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: ts.o1,
                    children: [
                        (0, a.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: W.intl.string(W.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, a.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: W.intl.string(W.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
i(323874), i(14289), i(35956);
var to = i(77729),
    tc = i(723702),
    tu = i(264572).Buffer;
async function tm(t, e) {
    if (tc.isPlatformEmbedded && "function" == typeof to.A.fileManager.saveWithDialog2) {
        let i = tu.from(await t.arrayBuffer());
        await to.A.fileManager.saveWithDialog2(i, e);
        return;
    }
    let i = URL.createObjectURL(t),
        l = document.createElement("a");
    (l.href = i), (l.download = e), document.body.appendChild(l), l.click(), l.remove(), URL.revokeObjectURL(i);
}
function tg(t, e) {
    let i = t instanceof D.WN ? t.status : null;
    return 409 === i
        ? W.intl.string(G.default.m7otAJ)
        : "export" === e
          ? W.intl.string(G.default.G2GqyP)
          : 413 === i
            ? W.intl.string(G.default.AzziHF)
            : 400 === i
              ? W.intl.string(G.default.XqkyM5)
              : W.intl.string(G.default["02GpNr"]);
}
function tx(t) {
    let e = n.useRef(null),
        i = n.useCallback(
            (e) => {
                let i = e.target.files?.[0] ?? null;
                (e.target.value = ""), null != i && t(i);
            },
            [t],
        );
    return {
        open: () => e.current?.click(),
        input: (0, a.jsx)("input", {
            ref: e,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: i,
        }),
    };
}
var tf = i(746080),
    tp = i(165610),
    th = i(401029);
function tj(t) {
    return (0, a.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tv(t) {
    let { project: e, onSelect: i } = t,
        l = (0, c.bG)([H.A], () => H.A.isThinking(e.id), [e.id]),
        n =
            null == e.updated_at
                ? null
                : W.intl.formatToPlainString(G.default.oMDaqr, { time: o()(e.updated_at).fromNow() });
    return (0, a.jsxs)("div", {
        className: th.OY,
        children: [
            (0, a.jsx)(g.D, {
                className: th.W6,
                onClick: i,
                children: (0, a.jsxs)("div", {
                    className: th.MM,
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: th.j1,
                            children: e.name,
                        }),
                        null == n
                            ? null
                            : (0, a.jsx)("div", {
                                  className: th.h3,
                                  children: (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: th.M2,
                children: [
                    l ? (0, a.jsx)(F.Ty, { className: th.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: th.Pl,
                        children: (0, a.jsx)(q, { projectId: e.id, projectName: e.name }),
                    }),
                ],
            }),
        ],
    });
}
function tC(t) {
    let { project: e, projectsLoaded: i, onBack: l, guildId: s } = t,
        [r, d] = n.useState(!1),
        [o, m] = n.useState(!0),
        [g, k] = n.useState(null),
        y = e?.id ?? null,
        S = n.useRef(y),
        w = n.useRef(null);
    S.current = y;
    let A = (0, c.bG)([L.A], () => (null == y ? null : L.A.getIntegrationStatus(y)), [y]),
        { data: _, isLoading: z } = (0, I.YY)(e?.preview_application_id ?? void 0),
        T = null != y && g !== y,
        H = A?.preview_ready === !0,
        F = H && null != A && (!A.integration_installed || A.bot_permissions_changed),
        O = r || T || z,
        B = W.intl.string(o ? G.default.YdgE0j : G.default.aWVf4j),
        K = n.useCallback(() => m((t) => !t), []),
        [U, X] = n.useState(!1),
        $ = n.useCallback(async () => {
            if (null != e) {
                X(!0);
                try {
                    let { blob: t, filename: i } = await (0, D.LJ)(e.id, e.name);
                    await tm(t, i);
                } catch (t) {
                    (0, f.P0)((0, p.o)(tg(t, "export"), h.Ck.FAILURE));
                } finally {
                    X(!1);
                }
            }
        }, [e]),
        Q = n.useCallback(
            (t) => {
                if (null == e) return;
                let i = e.id;
                (0, u.A)({
                    title: W.intl.formatToPlainString(G.default.XYZqZK, { name: e.name }),
                    subtitle: W.intl.string(G.default["6syXoH"]),
                    confirmText: W.intl.string(G.default.pgFuyr),
                    variant: "critical",
                    onConfirm: async () => {
                        try {
                            let { fileCount: e } = await (0, D.gm)(i, t);
                            (0, f.P0)(
                                (0, p.o)(W.intl.formatToPlainString(G.default.p5Cw7k, { count: e }), h.Ck.SUCCESS),
                            );
                        } catch (t) {
                            (0, f.P0)((0, p.o)(tg(t, "import"), h.Ck.FAILURE));
                        }
                    },
                });
            },
            [e],
        ),
        J = tx(Q),
        te = n.useCallback(async () => {
            if (null == y || S.current !== y) return;
            w.current?.abort();
            let t = new AbortController();
            (w.current = t), k(null);
            try {
                await (0, P.U1)(y, t.signal);
            } catch {
            } finally {
                t.signal.aborted || w.current !== t || S.current !== y || k(y);
            }
        }, [y]);
    n.useEffect(
        () => (
            te(),
            () => {
                w.current?.abort(), (w.current = null);
            }
        ),
        [te],
    );
    let tl = A?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : s,
        ta = n.useCallback(async () => {
            null == e ||
                (e.guild_id === tl && e.preview_guild_id === tl) ||
                (await (0, P.M7)(e.id, { guild_id: tl, preview_guild_id: tl }));
        }, [tl, e]),
        ts = n.useCallback(async () => {
            try {
                await ta();
            } catch {}
            await te();
        }, [te, ta]),
        tr = n.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                V.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: _ ?? null,
                    guildId: tl,
                    onClose: () => {
                        ts();
                    },
                });
        }, [ts, tl, _, e]),
        to = F ? { type: "permissions", onReviewPermissions: tr, loading: z || T } : T ? { type: "checking" } : void 0;
    n.useEffect(() => {
        null == e && i && (0, R.pX)(tn.BVt.CHANNEL(s, tf.VV.VIBEGRATIONS));
    }, [s, e, i]);
    let tc = n.useCallback(async () => {
        if (null != e) {
            if (!H) return void ti(tt.NO_PREVIEW);
            if (F) return void ti(tt.PERMISSIONS);
            d(!0);
            try {
                var t;
                let i = await (0, D.TV)(e.id);
                if (!0 !== i.ok) throw Error(W.intl.string(G.default.fNP6Cd));
                (0, P.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e.id, t);
                }),
                    (t = { applicationId: e.application_id, guildId: s, projectName: e.name }),
                    (0, Y.openModal)((e) => (0, a.jsx)(td, { ...e, ...t }));
            } catch (t) {
                (0, f.P0)((0, p.o)(t instanceof Error ? t.message : W.intl.string(G.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, F, H, e]);
    return (0, a.jsxs)("div", {
        className: th.nj,
        children: [
            (0, a.jsx)(Z, {
                title: e?.name ?? W.intl.string(G.default.F2dRba),
                breadcrumb: { title: W.intl.string(G.default.Xmvb23), onClick: l },
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: th.wO,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: th.FO,
                                      children: [
                                          (0, a.jsx)(q, { projectId: e.id, projectName: e.name }),
                                          (0, a.jsx)(j.m, {
                                              text: W.intl.string(G.default["7iamDC"]),
                                              ariaHidden: !0,
                                              children: (0, a.jsx)(v.K, {
                                                  icon: C.DownloadIcon,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": W.intl.string(G.default["7iamDC"]),
                                                  loading: U,
                                                  disabled: U,
                                                  onClick: $,
                                              }),
                                          }),
                                          (0, a.jsx)(j.m, {
                                              text: W.intl.string(G.default.lf8HqE),
                                              ariaHidden: !0,
                                              children: (0, a.jsx)(v.K, {
                                                  icon: b.H,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": W.intl.string(G.default.lf8HqE),
                                                  onClick: J.open,
                                              }),
                                          }),
                                          (0, a.jsx)(j.m, {
                                              text: B,
                                              ariaHidden: !0,
                                              children: (0, a.jsx)(v.K, {
                                                  icon: tj,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": B,
                                                  "aria-pressed": o,
                                                  onClick: K,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: W.intl.string(G.default["5gU57O"]),
                                      loading: r,
                                      disabled: O,
                                      onClick: tc,
                                  }),
                              ],
                          }),
            }),
            J.input,
            (0, a.jsx)("main", {
                className: th.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: th.sD,
                              children: [
                                  (0, a.jsx)(E.D, {
                                      variant: "heading-lg/semibold",
                                      children: W.intl.string(G.default.F2dRba),
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: W.intl.string(G.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: W.intl.string(G.default["42EdIV"]),
                                      onClick: P.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              M.A,
                              {
                                  projectId: e.id,
                                  applicationId: e.preview_application_id,
                                  surface: tp.sd,
                                  chatOpen: o,
                                  previewReady: H,
                                  previewGate: to,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function tb(t) {
    let {
            projects: e,
            fetchState: i,
            idea: l,
            guildId: s,
            submitting: d,
            createError: o,
            createDisabled: c,
            modelSettings: u,
            onModelSettingsChange: m,
            onSelectProject: f,
            onIdeaChange: p,
            onCreate: h,
            onImportNewProject: j,
            importing: v,
        } = t,
        C = tx(j),
        I = n.useMemo(
            () =>
                e
                    .filter((t) => (0, z.X0)(t, s))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, s],
        ),
        R = W.intl.string(G.default.TU9IGR),
        V = [
            W.intl.string(G.default["E+Q26x"]),
            W.intl.string(G.default["06/jqP"]),
            W.intl.string(G.default["7MCiK9"]),
        ],
        H = n.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), c || h());
            },
            [c, h],
        );
    return (0, a.jsxs)("div", {
        className: r()(th.nj, th.a0),
        children: [
            (0, a.jsx)(Z, { title: W.intl.string(G.default.Xmvb23) }),
            (0, a.jsx)(k.Ip, {
                children: (0, a.jsx)("main", {
                    className: th.rf,
                    children: (0, a.jsxs)("div", {
                        className: th.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: th.Ix,
                                children: [
                                    (0, a.jsx)(E.D, {
                                        variant: "heading-xl/semibold",
                                        children: W.intl.string(G.default["2tYpRK"]),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: th.Aw,
                                        children: V.map((t) =>
                                            (0, a.jsx)(
                                                g.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: th.nx,
                                                    onClick: d ? void 0 : () => h(t),
                                                    children: (0, a.jsx)(x.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: th.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: th.DA,
                                        children: [
                                            (0, a.jsx)(y.f, {
                                                label: R,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: l,
                                                placeholder: R,
                                                error: o,
                                                onChange: p,
                                                onKeyDown: H,
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: th.VP,
                                                children: [
                                                    (0, a.jsx)(O.A, {
                                                        settings: u ?? _.hk,
                                                        choices:
                                                            null == (0, T.V)()
                                                                ? _.S8
                                                                : {
                                                                      main: [..._.S8.main, ..._.wF.main],
                                                                      subagent: [..._.S8.subagent, ..._.wF.subagent],
                                                                      thinking: _.S8.thinking,
                                                                  },
                                                        disabled: d,
                                                        onChange: m,
                                                    }),
                                                    (0, a.jsx)(N.$, {
                                                        variant: "primary",
                                                        size: "md",
                                                        text: W.intl.string(W.t.CumH4u),
                                                        disabled: c,
                                                        loading: d,
                                                        onClick: () => h(),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("section", {
                                className: th.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: th.lP,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: th.RM,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: W.intl.string(G.default.Bo5fE3),
                                                    }),
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: W.intl.string(G.default.YnAFtT),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(N.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: b.H,
                                                text: W.intl.string(G.default["NHP2+t"]),
                                                loading: v,
                                                disabled: v,
                                                onClick: C.open,
                                            }),
                                            C.input,
                                        ],
                                    }),
                                    (null == i || "loading" === i.type) && 0 === I.length
                                        ? (0, a.jsx)("div", { className: th.E8, children: (0, a.jsx)(S.y, {}) })
                                        : i?.type === "error" && 0 === I.length
                                          ? (0, a.jsxs)("div", {
                                                className: th.E8,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: W.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: W.intl.string(G.default["42EdIV"]),
                                                        onClick: P.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === I.length
                                            ? (0, a.jsx)("div", {
                                                  className: th.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: th.ST,
                                                      children: [
                                                          (0, a.jsx)(w.D, {
                                                              size: "lg",
                                                              color: A.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: th.sI,
                                                              children: W.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : I.map((t) =>
                                                  (0, a.jsx)(tv, { project: t, onSelect: () => f(t.id) }, t.id),
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
function tN(t) {
    let { guildId: e, projectId: i } = t,
        l = (0, c.yK)([L.A], () => L.A.getAllProjects()),
        s = (0, c.bG)([L.A], () => L.A.getProjectsFetchState()),
        [r, d] = n.useState(""),
        o = i ?? null,
        [u, m] = n.useState(!1),
        [g, x] = n.useState(null),
        [j, v] = n.useState(null),
        C = r.trim();
    n.useEffect(() => {
        (0, P.hF)();
    }, []),
        n.useEffect(() => {
            (0, P.dm)(e, o);
        }, [e, o]);
    let b = n.useCallback(
            async (t) => {
                let i = (t ?? r).trim();
                if ("" !== i) {
                    null != t && d(t), m(!0), x(null);
                    try {
                        let t = await (0, P.gA)({ guild_id: e });
                        (0, D.Hc)(t),
                            null != j && (0, D.r2)(t, j),
                            (0, D.dv)(t, i),
                            (0, R.pX)(tn.BVt.CHANNEL(e, tf.VV.VIBEGRATIONS, t)),
                            d(""),
                            v(null);
                    } catch (t) {
                        x(t instanceof Error ? t.message : W.intl.string(G.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [e, r, j],
        ),
        [N, E] = n.useState(!1),
        k = n.useCallback(
            async (t) => {
                E(!0);
                let i = null;
                try {
                    i = await (0, P.gA)({ guild_id: e });
                    let { fileCount: l } = await (0, D.gm)(i, t);
                    (0, R.pX)(tn.BVt.CHANNEL(e, tf.VV.VIBEGRATIONS, i)),
                        (0, f.P0)((0, p.o)(W.intl.formatToPlainString(G.default.p5Cw7k, { count: l }), h.Ck.SUCCESS));
                } catch (t) {
                    null != i && (await (0, P.xx)(i).catch(() => void 0)),
                        (0, f.P0)((0, p.o)(tg(t, "import"), h.Ck.FAILURE));
                } finally {
                    E(!1);
                }
            },
            [e],
        ),
        y = n.useCallback(
            (t) => {
                (0, R.pX)(tn.BVt.CHANNEL(e, tf.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        S = n.useCallback(() => {
            (0, R.pX)(tn.BVt.CHANNEL(e, tf.VV.VIBEGRATIONS));
        }, [e]),
        w = n.useCallback((t) => {
            d(t), x(null);
        }, []),
        A = null == o ? null : (l.find((t) => t.id === o) ?? null);
    return null != o
        ? (0, a.jsx)(tC, { project: A, projectsLoaded: s?.type === "success", onBack: S, guildId: e })
        : (0, a.jsx)(tb, {
              projects: l,
              fetchState: s,
              modelSettings: j,
              onModelSettingsChange: v,
              idea: r,
              guildId: e,
              submitting: u,
              createError: g,
              createDisabled: "" === C || u,
              onSelectProject: y,
              onIdeaChange: w,
              onCreate: b,
              onImportNewProject: k,
              importing: N,
          });
}
