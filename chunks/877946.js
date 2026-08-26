l.r(t), l.d(t, { default: () => e0 });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(536637),
    d = l.n(o),
    c = l(17928),
    u = l(314116),
    p = l(534890),
    m = l(646270),
    g = l(31300),
    x = l(794083),
    f = l(939249),
    h = l(834730),
    j = l(691540),
    v = l(857250),
    b = l(97483),
    C = l(866665),
    N = l(408278),
    y = l(297264),
    E = l(821609),
    A = l(364522),
    I = l(103557),
    k = l(691885),
    S = l(289873),
    w = l(152367),
    R = l(661531),
    P = l(627363),
    _ = l(625180),
    z = l(672929),
    L = l(976860),
    V = l(71393),
    T = l(576705),
    D = l(486020),
    M = l(295813),
    G = l(375708),
    F = l(673724),
    H = l(948230),
    U = l(105810),
    X = l(683180),
    B = l(208137),
    O = l(805332),
    K = l(18739),
    Y = l(972786);
function q(e) {
    let { idea: t, installScope: l, submitting: i } = e;
    return i ? "submitting" : "" === t.trim() ? "idea" : null == l ? "scope" : null;
}
var W = l(20386),
    Z = l(402738),
    $ = l(922016),
    Q = l(980707),
    J = l(477782),
    ee = l(81369);
async function et(e, t, l) {
    (0, K.Hc)(e);
    let i = await (0, K.vX)(e, t);
    (0, K.dv)(e, l, [i]);
}
function el(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, F.x5)(e.size, t)
        ? null
        : G.intl.formatToPlainString(M.default.AzziHF, { size: (0, F.ZJ)((0, F.yr)(t)) });
}
async function ei(e, t) {
    let l,
        i =
            ((l = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        n = await (0, K.cS)(e, i),
        a = URL.createObjectURL(n);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = i), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function en(e) {
    let t = a.useRef(null),
        l = a.useCallback(
            (t) => {
                let l = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != l && e(l);
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, n.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: l,
        }),
    };
}
l(323874), l(14289), l(35956);
var ea = l(950305),
    es = l(664121);
let er = [
    { value: "user", icon: ea.UserIcon, nameMessage: M.default.iqXIRN },
    { value: "guild", icon: es.R, nameMessage: M.default.LdgKdI },
];
function eo(e) {
    let { importing: t, onImport: l } = e,
        i = a.useRef(null),
        s = en(a.useCallback((e) => l(e, "user"), [l])),
        r = en(a.useCallback((e) => l(e, "guild"), [l])),
        o = { user: s.open, guild: r.open };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)($.Y, {
                targetElementRef: i,
                position: "bottom",
                align: "right",
                animation: $.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(Q.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": G.intl.string(M.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, n.jsx)(J.rX, {
                            label: G.intl.string(M.default.MLg0S8),
                            children: er
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: G.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, n.jsx)(
                                        J.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, l) => {
                    let { isShown: a } = l;
                    return (0, n.jsx)(E.$, {
                        ...e,
                        buttonRef: i,
                        variant: "secondary",
                        size: "sm",
                        icon: ee.H,
                        text: G.intl.string(M.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                    });
                },
            }),
            s.input,
            r.input,
        ],
    });
}
var ed = l(311656),
    ec = l(629584),
    eu = l(148853),
    ep = l(491920);
function em(e) {
    let { modes: t, mode: l, onChange: i, className: s } = e,
        o = a.useMemo(() => t.map((e) => ({ value: e, name: (0, eu.kZ)(e), "aria-controls": (0, eu.z3)(e) })), [t]),
        d = a.useCallback(
            (e) => {
                i(e.value);
            },
            [i],
        );
    return null == l
        ? null
        : (0, n.jsx)(ec.I, {
              role: "tablist",
              look: "pill",
              className: r()(ep.b, s),
              optionClassName: ep.u,
              options: o,
              value: l,
              onChange: d,
          });
}
var eg = l(663417),
    ex = l(70688),
    ef = l(173936),
    eh = l(365199),
    ej = l(770818),
    ev = l(871237),
    eb = l(957565),
    eC = l(557875),
    eN = l(192308),
    ey = l(123917);
let eE = new Set();
l(321073);
var eA = l(746080);
let eI = [];
function ek(e) {
    let {
            projectId: t,
            projectName: i,
            guildId: s,
            isOwner: r,
            isPublic: o,
            isShared: d,
            supportsVisibility: p,
            onExport: m,
            onImport: g,
            onRemix: x,
            onConnectTool: f,
            onVersionHistory: h,
            onRefresh: C,
            isRefreshing: y = !1,
            onClose: E,
            refreshApplicationId: A,
            previewProjectId: I,
        } = e,
        k = a.useRef(null),
        { pending: S, refresh: w } = (0, ej.A)(A ?? null),
        { pending: R, connect: P } = (function (e) {
            let [t, l] = a.useState(eE),
                i = a.useRef(eE),
                n = a.useCallback((e) => {
                    (i.current = (0, eC.Q6)(i.current, e)), l(i.current);
                }, []);
            return {
                pending: t,
                connect: a.useCallback(
                    (t) => {
                        if (null == e) return;
                        let a = (0, eC.K9)(i.current, t.type);
                        async function s() {
                            let l = await (0, K.JI)(e, t.type);
                            if ((n(t.type), "url" === l.type)) return void (0, ey.h)({ href: l.url, trusted: !1 });
                            let i =
                                "setup" === (0, eC.rq)(l.error)
                                    ? G.intl.string(M.default.avu1u4)
                                    : G.intl.string(M.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(i, b.Ck.FAILURE));
                        }
                        null != a && ((i.current = a), l(a), s().catch(() => n(t.type)));
                    },
                    [e, n],
                ),
            };
        })(I ?? null),
        _ = (0, c.bG)([K.Ay], () => (null == I ? eI : K.Ay.getDeclaredConnections(I))),
        z = (function (e) {
            let { canRefresh: t, refreshPending: l, offers: i, connectPending: n } = e,
                a = [];
            for (let { connection: e, offer: s } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: G.intl.string(M.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: l,
                }),
            i))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: G.intl.formatToPlainString(M.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: n.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: G.intl.formatToPlainString(M.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != A,
            refreshPending: S,
            offers: a.useMemo(() => (0, eC.Xl)(_), [_]),
            connectPending: R,
        }),
        L = a.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        V = null != x && (r || d),
        T = r && null != g,
        D = V || null != m || T || null != f || null != h,
        F = eb.p5 && null != s;
    return null != C || null != E || D || F || r
        ? (0, n.jsx)($.Y, {
              targetElementRef: k,
              position: "bottom",
              align: "right",
              animation: $.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, n.jsxs)(Q.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": G.intl.string(G.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != C || null != E
                              ? (0, n.jsxs)(J.rX, {
                                    children: [
                                        null != C
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "refresh",
                                                  icon: eg.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eg.RefreshIcon },
                                                  label: G.intl.string(M.default.xKexN1),
                                                  disabled: y,
                                                  action: C,
                                              })
                                            : null,
                                        null != E
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "close",
                                                  icon: ex.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: ex.DoorExitIcon },
                                                  label: G.intl.string(M.default.Ea0Wrr),
                                                  action: E,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z.length > 0
                              ? (0, n.jsx)(J.rX, {
                                    children: z.map((e) =>
                                        (0, n.jsx)(
                                            J.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void w();
                                                    let t = null == e.connectionType ? null : L.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          D
                              ? (0, n.jsxs)(J.rX, {
                                    children: [
                                        V
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "remix",
                                                  label: G.intl.string(M.default.vPI794),
                                                  action: x,
                                              })
                                            : null,
                                        null != m
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "export",
                                                  label: G.intl.string(M.default["7iamDC"]),
                                                  action: m,
                                              })
                                            : null,
                                        T
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "import",
                                                  label: G.intl.string(M.default.lf8HqE),
                                                  action: g,
                                              })
                                            : null,
                                        null != f
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "connect-tool",
                                                  label: G.intl.string(M.default["3qelzD"]),
                                                  action: f,
                                              })
                                            : null,
                                        null != h
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "version-history",
                                                  label: G.intl.string(M.default.jAWwzi),
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          F
                              ? (0, n.jsx)(J.rX, {
                                    children: (0, n.jsx)(J.Dr, {
                                        id: "copy-link",
                                        label: G.intl.string(G.t.WqhZss),
                                        icon: ef.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: ef.LinkIcon },
                                        action: () =>
                                            (0, eb.C)((0, ev.n)(s, eA.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(G.intl.string(G.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(J.rX, {
                                    children: [
                                        p
                                            ? (0, n.jsx)(J.sL, {
                                                  id: "visibility",
                                                  label: G.intl.string(M.default.fvxLKl),
                                                  checked: o,
                                                  action: () => (0, H.Ok)(t, !o),
                                              })
                                            : null,
                                        p
                                            ? (0, n.jsx)(J.sL, {
                                                  id: "sharing",
                                                  label: G.intl.string(M.default.EHMPvA),
                                                  checked: d,
                                                  action: () => (0, H.gv)(t, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(J.Dr, {
                                            id: "rename",
                                            label: G.intl.string(M.default.fHTQgk),
                                            action: () => {
                                                (0, eN.openModalLazy)(async () => {
                                                    let { default: e } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(J.Dr, {
                                            id: "delete",
                                            label: G.intl.string(G.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: G.intl.formatToPlainString(M.default.ZokHVz, { name: i }),
                                                    subtitle: G.intl.string(M.default.NmF939),
                                                    confirmText: G.intl.string(G.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, H.xx)(t)).ok)
                                                            throw Error(G.intl.string(M.default.tqKZCi));
                                                    },
                                                });
                                            },
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { isShown: l } = t;
                  return (0, n.jsx)(N.K, {
                      ...e,
                      buttonRef: k,
                      icon: eh.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": G.intl.string(G.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var eS = l(742589),
    ew = l(769979);
function eR(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(eS.A, {
        hideSearch: !0,
        toolbar: l,
        className: ew.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: ew.QF,
            children: [
                (0, n.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: ew.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(eS.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(eS.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(eS.A.Title, { className: ew.Qw, wrapperClassName: ew.DD, children: t }),
            ],
        }),
    });
}
var eP = l(580954),
    e_ = l(189213),
    ez = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function eL(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(e_.Modal, {
        transitionState: l,
        onClose: i,
        title: G.intl.string(a ? M.default.Rtlv25 : M.default["+UouPe"]),
        subtitle: G.intl.string(a ? M.default["nDQB/b"] : M.default["E0QD++"]),
        size: "sm",
        actions: [{ text: G.intl.string(a ? G.t.BddRzS : M.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function eV(e) {
    (0, eN.openModal)((t) => (0, n.jsx)(eL, { ...t, reason: e }));
}
var eT = l(224640),
    eD = l(815021),
    eM = l(652215),
    eG = l(931587),
    eF = l(264997);
function eH(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        o = G.intl.string(M.default.yzxKsU),
        d = G.intl.formatToPlainString(M.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let e = (0, X.SH)(l, t);
            (0, L.pX)(null == e ? eM.BVt.CHANNEL(l) : eM.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(eT.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, n.jsxs)("div", {
            className: eG.zr,
            children: [
                (0, n.jsx)("div", { className: eG.b, children: (0, n.jsx)(eD.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: eG.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: eG.bm,
                            children: (0, n.jsx)("img", { className: eG.yW, src: eF, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eG.R_,
                            children: [
                                (0, n.jsx)(y.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, n.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: d,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eG.o1,
                    children: [
                        (0, n.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: G.intl.string(G.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: G.intl.string(G.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eU = l(647514),
    eX = l(899154),
    eB = l(675210),
    eO = l(165610),
    eK = l(352978);
function eY(e) {
    return (0, n.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function eq(e) {
    return (0, n.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function eW(e) {
    return (0, n.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function eZ(e) {
    return (0, n.jsx)(x.b, { ...e, size: "custom", width: 20, height: 20 });
}
function e$(e) {
    let t,
        l,
        i,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        g =
            ((t = o.id),
            (l = o.name),
            (i = a.useRef(!1)),
            (s = a.useCallback(() => {
                i.current ||
                    ((i.current = !0),
                    (0, j.P0)((0, v.o)(G.intl.formatToPlainString(M.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    ei(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof K._v ? e.status : null)
                                            ? G.intl.string(M.default.uB40Hz)
                                            : 404 === l
                                              ? G.intl.string(M.default.wCq2jC)
                                              : G.intl.string(M.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            i.current = !1;
                        }));
            }, [t, l])),
            {
                onExport: s,
                onImport: (r = en(
                    a.useCallback(
                        (e) => {
                            let i = el(e);
                            null != i
                                ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: G.intl.formatToPlainString(M.default.XYZqZK, { name: l }),
                                      subtitle: G.intl.string(M.default["6syXoH"]),
                                      confirmText: G.intl.string(M.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, L.pX)(eM.BVt.CHANNEL(c, eA.VV.VIBEGRATIONS, t));
                                          try {
                                              await et(t, e, G.intl.string(M.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(G.intl.string(M.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, l, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        x = o.preview_application_id ?? o.application_id,
        { data: C } = (0, P.YY)(x),
        N =
            null == o.updated_at
                ? null
                : G.intl.formatToPlainString(M.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: eK.OY,
        children: [
            (0, n.jsxs)(f.D, {
                className: eK.W6,
                onClick: p,
                children: [
                    (0, n.jsx)("img", {
                        alt: "",
                        src: D.Ay.getApplicationIconURL({ id: x, icon: C?.icon, size: 40 }),
                        className: eK.VJ,
                    }),
                    (0, n.jsxs)("div", {
                        className: eK.MM,
                        children: [
                            (0, n.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: eK.j1,
                                children: o.name,
                            }),
                            null == N
                                ? null
                                : (0, n.jsx)("div", {
                                      className: eK.h3,
                                      children: (0, n.jsx)(h.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: N,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eK.M2,
                children: [
                    (0, n.jsx)(W.ID, { projectId: o.id, className: eK.O$ }),
                    (0, n.jsxs)("div", {
                        className: eK.Pl,
                        children: [
                            (0, n.jsx)(ek, {
                                projectId: o.id,
                                projectName: o.name,
                                guildId: c,
                                isOwner: (0, Y.P)(o),
                                isPublic: (0, F.XE)(o),
                                isShared: (0, F.tr)(o),
                                supportsVisibility: (0, F.IU)(o),
                                onRemix: m,
                                onExport: g.onExport,
                                onImport: g.onImport,
                            }),
                            g.importInput,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eQ(e) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, x] = a.useState(!1),
        [f, A] = a.useState(null),
        [I, k] = a.useState(null),
        S = t?.id ?? null,
        w = a.useRef(S),
        R = a.useRef(!0),
        V = a.useRef(!1),
        T = a.useRef(null);
    (w.current = S),
        a.useEffect(
            () => (
                (R.current = !0),
                () => {
                    R.current = !1;
                }
            ),
            [],
        );
    let D = (0, c.bG)([Y.A], () => (null == S ? null : Y.A.getIntegrationStatus(S)), [S]),
        { data: X, isLoading: B } = (0, P.YY)(t?.preview_application_id ?? void 0),
        q = null != S && I !== S,
        W = D?.preview_ready === !0,
        $ = D?.has_activity === !0,
        {
            availability: Q,
            activeMode: J,
            setMode: ee,
            widgetApplicationId: ei,
        } = (0, eX.q)({
            applicationId: t?.preview_application_id ?? null,
            previewApplicationId: t?.preview_application_id ?? null,
            declaredActivity: $,
            installScope: t?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
        }),
        ea = (0, eB.Qg)({
            installScope: t?.install_scope ?? null,
            previewReady: W,
            integrationInstalled: D?.integration_installed ?? null,
            botPermissionsChanged: D?.bot_permissions_changed === !0,
        }),
        es = o || q || B,
        er = G.intl.string(M.default["5gU57O"]),
        eo = G.intl.string(p ? M.default.YdgE0j : M.default.aWVf4j),
        ed = a.useCallback(() => m((e) => !e), []),
        ec = a.useCallback(() => m(!1), []),
        eu = a.useCallback(
            (e) => {
                if (null == t || V.current) return;
                let l = t.id;
                function i() {
                    return R.current && w.current === l;
                }
                (V.current = !0),
                    x(!1),
                    m(!0),
                    A({ entry: e, status: "restoring" }),
                    (0, K.oB)(l, e.sha)
                        .then(
                            () => {
                                i() && A({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (A({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, v.o)(G.intl.string(M.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (V.current = !1);
                        });
            },
            [t],
        ),
        ep = (0, c.bG)([O.A], () => O.A.isBuilderPreviewMobile()),
        eg = G.intl.string(ep ? M.default["3uCc8U"] : M.default["+nzCxZ"]),
        ex = a.useCallback(() => (0, H.GG)(!ep), [ep]),
        ef = (0, z.A)(t?.preview_application_id ?? null, eO.sd),
        eh = (0, eO.x1)(ef) && ef.data.proxyTicketRefreshing,
        ej = a.useCallback(() => {
            null == ef || eh || _.A.refreshProxyTicket(ef.id);
        }, [ef, eh]),
        ev = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = ef?.id), (0, K.Bn)(e), (0, eP.A)().leaveFrame(l)), s();
        }, [t, ef?.id, s]),
        eb = a.useCallback(() => {
            null != t && (m(!0), (0, K.dv)(t.id, G.intl.string(M.default["2ejwtJ"])));
        }, [t]),
        eC = en(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        i = el(e);
                    null != i
                        ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: G.intl.formatToPlainString(M.default.XYZqZK, { name: t.name }),
                              subtitle: G.intl.string(M.default["6syXoH"]),
                              confirmText: G.intl.string(M.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await et(l, e, G.intl.string(M.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(G.intl.string(M.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        ey = a.useCallback(() => {
            null != t && (0, eU.A)(t, r);
        }, [t, r]),
        eE = a.useCallback(async () => {
            if (null == S || w.current !== S) return;
            T.current?.abort();
            let e = new AbortController();
            (T.current = e), k(null);
            try {
                await (0, H.U1)(S, e.signal);
            } catch {
            } finally {
                e.signal.aborted || T.current !== e || w.current !== S || k(S);
            }
        }, [S]);
    a.useEffect(
        () => (
            eE(),
            () => {
                T.current?.abort(), (T.current = null);
            }
        ),
        [eE],
    );
    let eI = D?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eS = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eI && t.preview_guild_id === eI) ||
                (await (0, H.M7)(t.id, { guild_id: eI, preview_guild_id: eI }));
        }, [eI, t]),
        ew = a.useCallback(async () => {
            try {
                await eS();
            } catch {}
            await eE();
        }, [eE, eS]),
        e_ = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                U.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: X ?? null,
                    guildId: eI,
                    onClose: () => {
                        ew();
                    },
                });
        }, [ew, eI, X, t]),
        eL = ea
            ? { type: "permissions", onReviewPermissions: e_, loading: B || q }
            : q && null == D
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == t && i && (0, L.pX)(eM.BVt.CHANNEL(r, eA.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let eT = a.useCallback(async () => {
            if (null != t) {
                if (!W) return void eV(ez.NO_PREVIEW);
                if (ea) return void eV(ez.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, K.TV)(t.id);
                    if (!0 !== l.ok) throw Error(G.intl.string(M.default.fNP6Cd));
                    (0, H.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, eN.openModal)((t) => (0, n.jsx)(eH, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : G.intl.string(M.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, ea, W, t]),
        eD = (0, n.jsx)(eR, {
            title: t?.name ?? G.intl.string(M.default.F2dRba),
            breadcrumb: { title: G.intl.string(M.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: eK.FO,
                          children: [
                              Q.showModeSwitch ? (0, n.jsx)(em, { modes: Q.modes, mode: J, onChange: ee }) : null,
                              (0, n.jsx)(ek, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  isOwner: (0, Y.P)(t),
                                  isPublic: (0, F.XE)(t),
                                  isShared: (0, F.tr)(t),
                                  supportsVisibility: (0, F.IU)(t),
                                  onRefresh: (0, eO.x1)(ef) ? ej : void 0,
                                  isRefreshing: eh,
                                  onClose: ev,
                                  onExport: eb,
                                  onImport: eC.open,
                                  onRemix: ey,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, eN.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      f?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                m(!0), x(!0);
                                            },
                                  refreshApplicationId:
                                      Q.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== Q.profileState
                                          ? ei
                                          : null,
                                  previewProjectId: t.id,
                              }),
                              (0, n.jsx)(C.m, {
                                  text: eg,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: ep ? eW : eq,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eg,
                                      "aria-pressed": ep,
                                      onClick: ex,
                                  }),
                              }),
                              (0, n.jsx)(C.m, {
                                  text: eo,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: eY,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eo,
                                      "aria-pressed": p,
                                      onClick: ed,
                                  }),
                              }),
                              (0, Y.P)(t)
                                  ? (0, n.jsx)(C.m, {
                                        text: er,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: eZ,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": er,
                                            loading: o,
                                            disabled: es,
                                            onClick: eT,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: eK.nj,
        children: [
            eC.input,
            (0, n.jsx)("main", {
                className: eK.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: eK.j5,
                              children: [
                                  eD,
                                  (0, n.jsxs)("div", {
                                      className: eK.sD,
                                      children: [
                                          (0, n.jsx)(y.D, {
                                              variant: "heading-lg/semibold",
                                              children: G.intl.string(M.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: G.intl.string(M.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(E.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: G.intl.string(M.default["42EdIV"]),
                                              onClick: () => (0, H.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              Z.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eO.sd,
                                  header: eD,
                                  chatOpen: p,
                                  onCloseChat: ec,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  onRestoreVersion: eu,
                                  restoreState: f,
                                  previewReady: W,
                                  previewGate: eL,
                                  availability: Q,
                                  activeMode: J,
                                  widgetApplicationId: ei,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function eJ(e) {
    let {
            projects: t,
            sharedProjects: l,
            fetchState: i,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: g,
            modelSettings: x,
            onModelSettingsChange: j,
            onSelectProject: v,
            onIdeaChange: b,
            onCreate: C,
            onImportNewProject: N,
            importing: P,
        } = e,
        _ = a.useMemo(
            () =>
                l
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [l],
        ),
        z = a.useRef(null);
    a.useEffect(() => {
        null != g && z.current?.querySelector("button")?.focus();
    }, [g]);
    let L = a.useMemo(
            () =>
                t
                    .filter((e) => (0, X.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        V = G.intl.string(M.default.TU9IGR),
        T = [
            G.intl.string(M.default["E+Q26x"]),
            G.intl.string(M.default["06/jqP"]),
            G.intl.string(M.default["3gSfUa"]),
        ],
        D = [
            {
                id: "feature-showcase",
                name: G.intl.string(M.default.BLDsiz),
                description: G.intl.string(M.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: G.intl.string(M.default["+abXa8"]),
                description: G.intl.string(M.default.OZYPMR),
            },
        ],
        U = G.intl.string(M.default.FYK2xQ),
        O = G.intl.string(M.default["/SUK82"]),
        K = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || C());
            },
            [u, C],
        );
    return (0, n.jsxs)("div", {
        className: r()(eK.nj, eK.a0),
        children: [
            (0, n.jsx)(eR, { title: G.intl.string(M.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: eK.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: eK.ps,
                        children: [
                            (0, n.jsx)(A.Ip, {
                                className: eK.Yy,
                                children: (0, n.jsx)("div", {
                                    className: eK.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(eK.Qs, eK.Ix),
                                        children: [
                                            (0, n.jsx)(y.D, {
                                                variant: "heading-xl/semibold",
                                                children: G.intl.string(M.default["2tYpRK"]),
                                            }),
                                            (0, n.jsxs)("section", {
                                                className: eK.WI,
                                                "aria-label": U,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: eK.G9,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: U,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: G.intl.string(M.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("ol", {
                                                        className: eK.Aw,
                                                        children: D.map((e) =>
                                                            (0, n.jsx)(
                                                                "li",
                                                                {
                                                                    className: eK.EA,
                                                                    children: (0, n.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": G.intl.formatToPlainString(
                                                                            M.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eK.nx, eK.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return C(
                                                                                      ((t = e.name),
                                                                                      G.intl.formatToPlainString(
                                                                                          M.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, n.jsx)(h.E, {
                                                                                className: eK.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, n.jsx)(h.E, {
                                                                                className: eK.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: e.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("section", {
                                                className: eK.WI,
                                                "aria-label": O,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: eK.G9,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: O,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: G.intl.string(M.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("ol", {
                                                        className: eK.Aw,
                                                        children: T.map((e) =>
                                                            (0, n.jsx)(
                                                                "li",
                                                                {
                                                                    className: eK.EA,
                                                                    children: (0, n.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: eK.nx,
                                                                        onClick: d ? void 0 : () => C(e),
                                                                        children: (0, n.jsx)(h.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: eK.un,
                                                                            children: e,
                                                                        }),
                                                                    }),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: eK.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(eK.Qs, eK.DA),
                                    children: [
                                        (0, n.jsx)(I.f, {
                                            label: V,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: V,
                                            error: c,
                                            onChange: b,
                                            onKeyDown: K,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: eK.VP,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    className: eK.gH,
                                                    ref: z,
                                                    children: (0, n.jsx)(k.l, {
                                                        selectionMode: "single",
                                                        label: G.intl.string(M.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: G.intl.string(M.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: G.intl.string(M.default.MLg0S8),
                                                                options: er.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: G.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, n.jsx)(ed.A, {
                                                    settings: x ?? F.hk,
                                                    choices: (0, B.e)()
                                                        ? {
                                                              main: [...F.S8.main, ...F.wF.main],
                                                              subagent: [...F.S8.subagent, ...F.wF.subagent],
                                                              thinking: F.S8.thinking,
                                                          }
                                                        : F.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, n.jsx)(E.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: G.intl.string(G.t.CumH4u),
                                                    disabled: u,
                                                    loading: d,
                                                    onClick: () => C(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("aside", {
                        className: eK.pA,
                        "aria-label": G.intl.string(M.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: eK.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: eK.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: G.intl.string(M.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: G.intl.string(M.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(eo, { importing: P, onImport: N }),
                                ],
                            }),
                            (0, n.jsxs)(A.Ip, {
                                className: eK.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === L.length
                                        ? (0, n.jsx)("div", { className: eK.E8, children: (0, n.jsx)(S.y, {}) })
                                        : i?.type === "error" && 0 === L.length
                                          ? (0, n.jsxs)("div", {
                                                className: eK.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eK.JS,
                                                        children: G.intl.string(M.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(E.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: G.intl.string(M.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === L.length
                                            ? (0, n.jsx)("div", {
                                                  className: eK.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: eK.ST,
                                                      children: [
                                                          (0, n.jsx)(w.D, {
                                                              size: "lg",
                                                              color: R.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eK.sI,
                                                              children: G.intl.string(M.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: eK.Dq,
                                                  children: L.map((e) =>
                                                      (0, n.jsx)(
                                                          e$,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, eU.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: eK.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: eK.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: G.intl.string(M.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: G.intl.string(M.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eK.Dq,
                                                      children: _.map((e) =>
                                                          (0, n.jsx)(
                                                              e$,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, eU.A)(e, o),
                                                              },
                                                              e.id,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e0(e) {
    let t,
        { guildId: l, projectId: i } = e,
        s = (0, c.yK)([Y.A], () => Y.A.getOwnedProjects()),
        r = (0, c.bG)([Y.A], () => Y.A.getProjectsFetchState()),
        o = (0, c.bG)([V.A, T.A], () => {
            let e = V.A.getGuild(l);
            return null != e && T.A.can(eM.xBc.MANAGE_GUILD, e);
        }, [l]),
        d = (0, c.yK)([Y.A], () => (o ? Y.A.getSharedProjects(l) : []), [l, o]),
        [u, p] = a.useState(""),
        m = i ?? null,
        [g, x] = a.useState(!1),
        [f, h] = a.useState(null),
        [C, N] = a.useState("guild"),
        [y, E] = a.useState(null),
        [A, I] = a.useState(null);
    a.useEffect(() => {
        (0, H.hF)(l);
    }, [l, o]),
        a.useEffect(() => {
            (0, H.dm)(l, m);
        }, [l, m]);
    let k = a.useCallback((e) => {
            N(e), E(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    i = q({ idea: t, installScope: C, submitting: g });
                if ("idea" !== i && "submitting" !== i) {
                    if (null == C) return void E(G.intl.string(M.default.jQ3nQB));
                    null != e && p(e), x(!0), h(null);
                    try {
                        let e = await (0, H.gA)({ guild_id: l, install_scope: C });
                        (0, K.Hc)(e),
                            null != A && (0, K.r2)(e, A),
                            (0, K.dv)(e, t),
                            (0, L.pX)(eM.BVt.CHANNEL(l, eA.VV.VIBEGRATIONS, e)),
                            p(""),
                            I(null);
                    } catch (e) {
                        h(e instanceof Error ? e.message : G.intl.string(M.default.KKkp5Y));
                    } finally {
                        x(!1);
                    }
                }
            },
            [C, l, u, A, g],
        ),
        [w, R] = a.useState(!1),
        P = a.useCallback(
            async (e, t) => {
                let i = el(e);
                if (null != i) return void (0, j.P0)((0, v.o)(i, b.Ck.FAILURE));
                R(!0);
                let n = null;
                try {
                    (n = await (0, H.gA)({ guild_id: l, install_scope: t })),
                        await et(n, e, G.intl.string(M.default.KjEtrZ)),
                        (0, L.pX)(eM.BVt.CHANNEL(l, eA.VV.VIBEGRATIONS, n));
                } catch {
                    null != n && (await (0, H.xx)(n).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(G.intl.string(M.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    R(!1);
                }
            },
            [l],
        ),
        _ = a.useCallback(
            (e) => {
                (0, L.pX)(eM.BVt.CHANNEL(l, eA.VV.VIBEGRATIONS, e));
            },
            [l],
        ),
        z = a.useCallback(() => {
            (0, L.pX)(eM.BVt.CHANNEL(l, eA.VV.VIBEGRATIONS));
        }, [l]),
        D = a.useCallback((e) => {
            p(e), h(null);
        }, []),
        F = (0, c.bG)([Y.A], () => {
            if (null == m) return null;
            let e = Y.A.getProject(m);
            return null == e || (0, Y.P)(e) || (o && e.guild_id === l) ? e : null;
        }, [m, o, l]),
        U = (0, c.bG)([Y.A], () => Y.A.hasFetchedGuildProjects(l), [l]);
    return null != m
        ? (0, n.jsx)(eQ, { project: F, projectsLoaded: U, onBack: z, guildId: l }, m)
        : (0, n.jsx)(eJ, {
              projects: s,
              sharedProjects: d,
              fetchState: r,
              modelSettings: A,
              onModelSettingsChange: I,
              idea: u,
              guildId: l,
              submitting: g,
              createError: f,
              createDisabled: "idea" === (t = q({ idea: u, installScope: C, submitting: g })) || "submitting" === t,
              onSelectProject: _,
              onIdeaChange: D,
              onCreate: S,
              onImportNewProject: P,
              importing: w,
              installScope: C,
              onInstallScopeChange: k,
              installScopeError: y,
          });
}
