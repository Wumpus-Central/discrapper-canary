l.r(e), l.d(e, { default: () => tk });
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
    x = l(646270),
    g = l(31300),
    p = l(939249),
    h = l(834730),
    f = l(691540),
    j = l(857250),
    v = l(97483),
    b = l(866665),
    N = l(408278),
    C = l(821609),
    E = l(297264),
    k = l(364522),
    y = l(260598),
    A = l(81369),
    w = l(289873),
    I = l(152367),
    S = l(661531),
    _ = l(627363),
    z = l(976860),
    V = l(673724),
    R = l(948230),
    P = l(148555),
    T = l(683180),
    D = l(208137),
    F = l(805332),
    H = l(783791),
    G = l(998939),
    B = l(972786),
    K = l(20386),
    M = l(429880),
    O = l(379307),
    X = l(922016),
    L = l(980707),
    U = l(477782),
    Y = l(365199),
    W = l(295813),
    Z = l(375708),
    $ = l(192308);
function q(t) {
    let { projectId: e, projectName: i, onExport: s, onImport: r, onFork: d } = t,
        c = a.useRef(null);
    return (0, n.jsx)(X.Y, {
        targetElementRef: c,
        position: "bottom",
        align: "right",
        animation: X.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, n.jsxs)(L.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": Z.intl.string(Z.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: [
                    null != d || null != s || null != r
                        ? (0, n.jsxs)(U.rX, {
                              children: [
                                  null != d
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "fork",
                                            label: Z.intl.string(W.default.hU9QAE),
                                            action: d,
                                        })
                                      : null,
                                  null != s
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "export",
                                            label: Z.intl.string(W.default["7iamDC"]),
                                            action: s,
                                        })
                                      : null,
                                  null != r
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "import",
                                            label: Z.intl.string(W.default.lf8HqE),
                                            action: r,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    (0, n.jsxs)(U.rX, {
                        children: [
                            (0, n.jsx)(U.Dr, {
                                id: "rename",
                                label: Z.intl.string(W.default.fHTQgk),
                                action: () => {
                                    (0, $.openModalLazy)(async () => {
                                        let { default: t } = await l.e("153463").then(l.bind(l, 809898));
                                        return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                    });
                                },
                            }),
                            (0, n.jsx)(U.Dr, {
                                id: "delete",
                                label: Z.intl.string(Z.t.oyYWHE),
                                color: "danger",
                                action: () => {
                                    (0, u.A)({
                                        title: Z.intl.formatToPlainString(W.default.ZokHVz, { name: i }),
                                        subtitle: Z.intl.string(W.default.NmF939),
                                        confirmText: Z.intl.string(Z.t.oyYWHE),
                                        variant: "critical",
                                        onConfirm: async () => {
                                            if (!(await (0, R.xx)(e)).ok) throw Error(Z.intl.string(W.default.tqKZCi));
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
            return (0, n.jsx)(N.K, {
                ...t,
                buttonRef: c,
                icon: Y.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": Z.intl.string(Z.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var Q = l(742589),
    J = l(769979);
function tt(t) {
    let { title: e, actions: l, breadcrumb: i } = t;
    return (0, n.jsx)(Q.A, {
        hideSearch: !0,
        toolbar: l,
        className: J.wx,
        "aria-label": e,
        children: (0, n.jsxs)("div", {
            className: J.QF,
            children: [
                (0, n.jsx)(I.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: J.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(Q.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(Q.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(Q.A.Title, { className: J.Qw, wrapperClassName: J.DD, children: e }),
            ],
        }),
    });
}
var te = l(594483),
    tl = l(189213),
    ti = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function tn(t) {
    let { reason: e, transitionState: l, onClose: i } = t,
        a = "permissions" === e;
    return (0, n.jsx)(tl.Modal, {
        transitionState: l,
        onClose: i,
        title: Z.intl.string(a ? W.default.Rtlv25 : W.default["+UouPe"]),
        subtitle: Z.intl.string(a ? W.default["nDQB/b"] : W.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Z.intl.string(a ? Z.t.BddRzS : W.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function ta(t) {
    (0, $.openModal)((e) => (0, n.jsx)(tn, { ...e, reason: t }));
}
var ts = l(224640),
    tr = l(815021),
    td = l(652215),
    tc = l(931587),
    to = l(264997);
function tu(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: s, onClose: r } = t,
        d = Z.intl.string(W.default.yzxKsU),
        c = Z.intl.formatToPlainString(W.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let t = (0, T.SH)(l, e);
            (0, z.pX)(null == t ? td.BVt.CHANNEL(l) : td.BVt.CHANNEL(l, t)), r();
        }, [e, l, r]);
    return (0, n.jsx)(ts.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: tc.zr,
            children: [
                (0, n.jsx)("div", { className: tc.b, children: (0, n.jsx)(tr.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: tc.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: tc.bm,
                            children: (0, n.jsx)("img", { className: tc.yW, src: to, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tc.R_,
                            children: [
                                (0, n.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tc.o1,
                    children: [
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: Z.intl.string(Z.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: Z.intl.string(Z.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function tm(t, e, l) {
    (0, G.Hc)(t);
    let i = await (0, G.vX)(t, e);
    (0, G.dv)(t, l, [i]);
}
function tx(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, V.x5)(t.size, e)
        ? null
        : Z.intl.formatToPlainString(W.default.AzziHF, { size: (0, V.ZJ)((0, V.yr)(e)) });
}
function tg(t) {
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
var tp = l(746080),
    th = l(165610),
    tf = l(352978);
function tj(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tv(t) {
    return (0, n.jsx)(x.u, { ...t, size: "custom", width: 20, height: 20 });
}
function tb(t) {
    return (0, n.jsx)(g.k, { ...t, size: "custom", width: 20, height: 20 });
}
function tN(t) {
    let { project: e, onSelect: l, onFork: i } = t,
        a = (0, o.bG)([H.A], () => H.A.isThinking(e.id), [e.id]),
        s =
            null == e.updated_at
                ? null
                : Z.intl.formatToPlainString(W.default.oMDaqr, { time: c()(e.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: tf.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: tf.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: tf.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tf.j1,
                            children: e.name,
                        }),
                        null == s
                            ? null
                            : (0, n.jsx)("div", {
                                  className: tf.h3,
                                  children: (0, n.jsx)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: s,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: tf.M2,
                children: [
                    a ? (0, n.jsx)(K.Ty, { className: tf.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: tf.Pl,
                        children: (0, n.jsx)(q, { projectId: e.id, projectName: e.name, onFork: i }),
                    }),
                ],
            }),
        ],
    });
}
function tC(t) {
    let { project: e, projectsLoaded: l, onBack: i, guildId: s } = t,
        [r, d] = a.useState(!1),
        [c, m] = a.useState(!0),
        [x, g] = a.useState(null),
        p = e?.id ?? null,
        k = a.useRef(p),
        y = a.useRef(null);
    k.current = p;
    let A = (0, o.bG)([B.A], () => (null == p ? null : B.A.getIntegrationStatus(p)), [p]),
        { data: w, isLoading: I } = (0, _.YY)(e?.preview_application_id ?? void 0),
        S = null != p && x !== p,
        V = A?.preview_ready === !0,
        T = V && null != A && (!A.integration_installed || A.bot_permissions_changed),
        D = r || S || I,
        H = Z.intl.string(c ? W.default.YdgE0j : W.default.aWVf4j),
        K = a.useCallback(() => m((t) => !t), []),
        O = (0, o.bG)([F.A], () => F.A.isBuilderPreviewMobile()),
        X = Z.intl.string(O ? W.default["3uCc8U"] : W.default["+nzCxZ"]),
        L = a.useCallback(() => (0, R.GG)(!O), [O]),
        U = a.useCallback(() => {
            null != e && (m(!0), (0, G.dv)(e.id, Z.intl.string(W.default["2ejwtJ"])));
        }, [e]),
        Y = tg(
            a.useCallback(
                (t) => {
                    if (null == e) return;
                    let l = e.id,
                        i = tx(t);
                    null != i
                        ? (0, f.P0)((0, j.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: Z.intl.formatToPlainString(W.default.XYZqZK, { name: e.name }),
                              subtitle: Z.intl.string(W.default["6syXoH"]),
                              confirmText: Z.intl.string(W.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await tm(l, t, Z.intl.string(W.default.C7GU2r));
                                  } catch {
                                      (0, f.P0)((0, j.o)(Z.intl.string(W.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [e],
            ),
        ),
        Q = a.useCallback(() => {
            null != e && (0, te.A)(e, s);
        }, [e, s]),
        J = a.useCallback(async () => {
            if (null == p || k.current !== p) return;
            y.current?.abort();
            let t = new AbortController();
            (y.current = t), g(null);
            try {
                await (0, R.U1)(p, t.signal);
            } catch {
            } finally {
                t.signal.aborted || y.current !== t || k.current !== p || g(p);
            }
        }, [p]);
    a.useEffect(
        () => (
            J(),
            () => {
                y.current?.abort(), (y.current = null);
            }
        ),
        [J],
    );
    let tl = A?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : s,
        tn = a.useCallback(async () => {
            null == e ||
                (e.guild_id === tl && e.preview_guild_id === tl) ||
                (await (0, R.M7)(e.id, { guild_id: tl, preview_guild_id: tl }));
        }, [tl, e]),
        ts = a.useCallback(async () => {
            try {
                await tn();
            } catch {}
            await J();
        }, [J, tn]),
        tr = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                P.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: w ?? null,
                    guildId: tl,
                    onClose: () => {
                        ts();
                    },
                });
        }, [ts, tl, w, e]),
        tc = T ? { type: "permissions", onReviewPermissions: tr, loading: I || S } : S ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == e && l && (0, z.pX)(td.BVt.CHANNEL(s, tp.VV.VIBEGRATIONS));
    }, [s, e, l]);
    let to = a.useCallback(async () => {
        if (null != e) {
            if (!V) return void ta(ti.NO_PREVIEW);
            if (T) return void ta(ti.PERMISSIONS);
            d(!0);
            try {
                var t;
                let l = await (0, G.TV)(e.id);
                if (!0 !== l.ok) throw Error(Z.intl.string(W.default.fNP6Cd));
                (0, R.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e.id, t);
                }),
                    (t = { applicationId: e.application_id, guildId: s, projectName: e.name }),
                    (0, $.openModal)((e) => (0, n.jsx)(tu, { ...e, ...t }));
            } catch (t) {
                (0, f.P0)((0, j.o)(t instanceof Error ? t.message : Z.intl.string(W.default.fNP6Cd), v.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, T, V, e]);
    return (0, n.jsxs)("div", {
        className: tf.nj,
        children: [
            (0, n.jsx)(tt, {
                title: e?.name ?? Z.intl.string(W.default.F2dRba),
                breadcrumb: { title: Z.intl.string(W.default.Xmvb23), onClick: i },
                actions:
                    null == e
                        ? null
                        : (0, n.jsxs)("div", {
                              className: tf.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tf.FO,
                                      children: [
                                          (0, n.jsx)(q, {
                                              projectId: e.id,
                                              projectName: e.name,
                                              onExport: U,
                                              onImport: Y.open,
                                              onFork: Q,
                                          }),
                                          (0, n.jsx)(b.m, {
                                              text: X,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(N.K, {
                                                  icon: O ? tb : tv,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": X,
                                                  "aria-pressed": O,
                                                  onClick: L,
                                              }),
                                          }),
                                          (0, n.jsx)(b.m, {
                                              text: H,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(N.K, {
                                                  icon: tj,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": H,
                                                  "aria-pressed": c,
                                                  onClick: K,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: Z.intl.string(W.default["5gU57O"]),
                                      loading: r,
                                      disabled: D,
                                      onClick: to,
                                  }),
                              ],
                          }),
            }),
            Y.input,
            (0, n.jsx)("main", {
                className: tf.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: tf.sD,
                              children: [
                                  (0, n.jsx)(E.D, {
                                      variant: "heading-lg/semibold",
                                      children: Z.intl.string(W.default.F2dRba),
                                  }),
                                  (0, n.jsx)(h.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: Z.intl.string(W.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(C.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: Z.intl.string(W.default["42EdIV"]),
                                      onClick: R.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              M.A,
                              {
                                  projectId: e.id,
                                  applicationId: e.preview_application_id,
                                  previewApplicationId: e.preview_application_id,
                                  surface: th.sd,
                                  chatOpen: c,
                                  previewReady: V,
                                  previewGate: tc,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function tE(t) {
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
            onSelectProject: x,
            onIdeaChange: g,
            onCreate: f,
            onImportNewProject: j,
            importing: v,
        } = t,
        b = tg(j),
        N = a.useMemo(
            () =>
                e
                    .filter((t) => (0, T.X0)(t, s))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, s],
        ),
        _ = Z.intl.string(W.default.TU9IGR),
        z = [
            Z.intl.string(W.default["E+Q26x"]),
            Z.intl.string(W.default["06/jqP"]),
            Z.intl.string(W.default["7MCiK9"]),
        ],
        P = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), o || f());
            },
            [o, f],
        );
    return (0, n.jsxs)("div", {
        className: r()(tf.nj, tf.a0),
        children: [
            (0, n.jsx)(tt, { title: Z.intl.string(W.default.Xmvb23) }),
            (0, n.jsx)(k.Ip, {
                children: (0, n.jsx)("main", {
                    className: tf.rf,
                    children: (0, n.jsxs)("div", {
                        className: tf.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: tf.Ix,
                                children: [
                                    (0, n.jsx)(E.D, {
                                        variant: "heading-xl/semibold",
                                        children: Z.intl.string(W.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: tf.Aw,
                                        children: z.map((t) =>
                                            (0, n.jsx)(
                                                p.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: tf.nx,
                                                    onClick: d ? void 0 : () => f(t),
                                                    children: (0, n.jsx)(h.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: tf.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: tf.DA,
                                        children: [
                                            (0, n.jsx)(y.f, {
                                                label: _,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: _,
                                                error: c,
                                                onChange: g,
                                                onKeyDown: P,
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: tf.VP,
                                                children: [
                                                    (0, n.jsx)(O.A, {
                                                        settings: u ?? V.hk,
                                                        choices:
                                                            null == (0, D.V)()
                                                                ? V.S8
                                                                : {
                                                                      main: [...V.S8.main, ...V.wF.main],
                                                                      subagent: [...V.S8.subagent, ...V.wF.subagent],
                                                                      thinking: V.S8.thinking,
                                                                  },
                                                        disabled: d,
                                                        onChange: m,
                                                    }),
                                                    (0, n.jsx)(C.$, {
                                                        variant: "primary",
                                                        size: "md",
                                                        text: Z.intl.string(Z.t.CumH4u),
                                                        disabled: o,
                                                        loading: d,
                                                        onClick: () => f(),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: tf.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tf.lP,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: tf.RM,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: Z.intl.string(W.default.Bo5fE3),
                                                    }),
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: Z.intl.string(W.default.YnAFtT),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(C.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: A.H,
                                                text: Z.intl.string(W.default["NHP2+t"]),
                                                loading: v,
                                                disabled: v,
                                                onClick: b.open,
                                            }),
                                            b.input,
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === N.length
                                        ? (0, n.jsx)("div", { className: tf.E8, children: (0, n.jsx)(w.y, {}) })
                                        : l?.type === "error" && 0 === N.length
                                          ? (0, n.jsxs)("div", {
                                                className: tf.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: Z.intl.string(W.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(C.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Z.intl.string(W.default["42EdIV"]),
                                                        onClick: R.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === N.length
                                            ? (0, n.jsx)("div", {
                                                  className: tf.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: tf.ST,
                                                      children: [
                                                          (0, n.jsx)(I.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tf.sI,
                                                              children: Z.intl.string(W.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : N.map((t) =>
                                                  (0, n.jsx)(
                                                      tN,
                                                      {
                                                          project: t,
                                                          onSelect: () => x(t.id),
                                                          onFork: () => (0, te.A)(t, s),
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
function tk(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, o.yK)([B.A], () => B.A.getAllProjects()),
        s = (0, o.bG)([B.A], () => B.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = l ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [p, h] = a.useState(null),
        b = r.trim();
    a.useEffect(() => {
        (0, R.hF)();
    }, []),
        a.useEffect(() => {
            (0, R.dm)(e, c);
        }, [e, c]);
    let N = a.useCallback(
            async (t) => {
                let l = (t ?? r).trim();
                if ("" !== l) {
                    null != t && d(t), m(!0), g(null);
                    try {
                        let t = await (0, R.gA)({ guild_id: e });
                        (0, G.Hc)(t),
                            null != p && (0, G.r2)(t, p),
                            (0, G.dv)(t, l),
                            (0, z.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS, t)),
                            d(""),
                            h(null);
                    } catch (t) {
                        g(t instanceof Error ? t.message : Z.intl.string(W.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [e, r, p],
        ),
        [C, E] = a.useState(!1),
        k = a.useCallback(
            async (t) => {
                let l = tx(t);
                if (null != l) return void (0, f.P0)((0, j.o)(l, v.Ck.FAILURE));
                E(!0);
                let i = null;
                try {
                    (i = await (0, R.gA)({ guild_id: e })),
                        await tm(i, t, Z.intl.string(W.default.KjEtrZ)),
                        (0, z.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, R.xx)(i).catch(() => void 0)),
                        (0, f.P0)((0, j.o)(Z.intl.string(W.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    E(!1);
                }
            },
            [e],
        ),
        y = a.useCallback(
            (t) => {
                (0, z.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        A = a.useCallback(() => {
            (0, z.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS));
        }, [e]),
        w = a.useCallback((t) => {
            d(t), g(null);
        }, []),
        I = null == c ? null : (i.find((t) => t.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(tC, { project: I, projectsLoaded: s?.type === "success", onBack: A, guildId: e })
        : (0, n.jsx)(tE, {
              projects: i,
              fetchState: s,
              modelSettings: p,
              onModelSettingsChange: h,
              idea: r,
              guildId: e,
              submitting: u,
              createError: x,
              createDisabled: "" === b || u,
              onSelectProject: y,
              onIdeaChange: w,
              onCreate: N,
              onImportNewProject: k,
              importing: C,
          });
}
