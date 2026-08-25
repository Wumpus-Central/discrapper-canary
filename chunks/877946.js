t.r(l), t.d(l, { default: () => eJ });
var n,
    i = t(477900),
    a = t(582128),
    s = t(503698),
    r = t.n(s),
    o = t(536637),
    d = t.n(o),
    c = t(17928),
    u = t(314116),
    p = t(534890),
    m = t(646270),
    g = t(31300),
    x = t(794083),
    f = t(939249),
    h = t(834730),
    j = t(691540),
    v = t(857250),
    b = t(97483),
    C = t(866665),
    N = t(408278),
    y = t(297264),
    E = t(821609),
    A = t(364522),
    I = t(103557),
    k = t(691885),
    S = t(289873),
    w = t(152367),
    R = t(661531),
    P = t(627363),
    _ = t(625180),
    z = t(672929),
    L = t(976860),
    T = t(71393),
    V = t(576705),
    D = t(295813),
    M = t(375708),
    G = t(673724),
    F = t(948230),
    H = t(105810),
    X = t(683180),
    U = t(208137),
    B = t(805332),
    O = t(18739),
    K = t(972786);
function q(e) {
    let { idea: l, installScope: t, submitting: n } = e;
    return n ? "submitting" : "" === l.trim() ? "idea" : null == t ? "scope" : null;
}
var Y = t(20386),
    W = t(402738),
    Z = t(922016),
    $ = t(980707),
    Q = t(477782),
    J = t(81369);
async function ee(e, l, t) {
    (0, O.Hc)(e);
    let n = await (0, O.vX)(e, l);
    (0, O.dv)(e, t, [n]);
}
function el(e) {
    let l = "" === e.type ? "application/octet-stream" : e.type;
    return (0, G.x5)(e.size, l)
        ? null
        : M.intl.formatToPlainString(D.default.AzziHF, { size: (0, G.ZJ)((0, G.yr)(l)) });
}
async function et(e, l) {
    let t,
        n =
            ((t = l
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === t ? "vibegration" : t}.zip`),
        i = await (0, O.cS)(e, n),
        a = URL.createObjectURL(i);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = n), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function en(e) {
    let l = a.useRef(null),
        t = a.useCallback(
            (l) => {
                let t = l.target.files?.[0] ?? null;
                (l.target.value = ""), null != t && e(t);
            },
            [e],
        );
    return {
        open: () => l.current?.click(),
        input: (0, i.jsx)("input", {
            ref: l,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: t,
        }),
    };
}
t(323874), t(14289), t(35956);
var ei = t(950305),
    ea = t(664121);
let es = [
    { value: "user", icon: ei.UserIcon, nameMessage: D.default.iqXIRN },
    { value: "guild", icon: ea.R, nameMessage: D.default.LdgKdI },
];
function er(e) {
    let { importing: l, onImport: t } = e,
        n = a.useRef(null),
        s = en(a.useCallback((e) => t(e, "user"), [t])),
        r = en(a.useCallback((e) => t(e, "guild"), [t])),
        o = { user: s.open, guild: r.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Z.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: Z.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsx)($.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": M.intl.string(D.default.oq8F8s),
                        onClose: l,
                        onSelect: l,
                        children: (0, i.jsx)(Q.rX, {
                            label: M.intl.string(D.default.MLg0S8),
                            children: es
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: M.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        Q.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: a } = t;
                    return (0, i.jsx)(E.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: J.H,
                        text: M.intl.string(D.default["NHP2+t"]),
                        loading: l,
                        disabled: l,
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
var eo = t(311656),
    ed = t(629584),
    ec = t(148853),
    eu = t(491920);
function ep(e) {
    let { modes: l, mode: t, onChange: n, className: s } = e,
        o = a.useMemo(() => l.map((e) => ({ value: e, name: (0, ec.kZ)(e), "aria-controls": (0, ec.z3)(e) })), [l]),
        d = a.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == t
        ? null
        : (0, i.jsx)(ed.I, {
              role: "tablist",
              look: "pill",
              className: r()(eu.b, s),
              optionClassName: eu.u,
              options: o,
              value: t,
              onChange: d,
          });
}
var em = t(663417),
    eg = t(70688),
    ex = t(173936),
    ef = t(365199),
    eh = t(770818),
    ej = t(871237),
    ev = t(957565),
    eb = t(557875),
    eC = t(192308),
    eN = t(123917);
let ey = new Set();
t(321073);
var eE = t(746080);
let eA = [];
function eI(e) {
    let {
            projectId: l,
            projectName: n,
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
        { pending: S, refresh: w } = (0, eh.A)(A ?? null),
        { pending: R, connect: P } = (function (e) {
            let [l, t] = a.useState(ey),
                n = a.useRef(ey),
                i = a.useCallback((e) => {
                    (n.current = (0, eb.Q6)(n.current, e)), t(n.current);
                }, []);
            return {
                pending: l,
                connect: a.useCallback(
                    (l) => {
                        if (null == e) return;
                        let a = (0, eb.K9)(n.current, l.type);
                        async function s() {
                            let t = await (0, O.JI)(e, l.type);
                            if ((i(l.type), "url" === t.type)) return void (0, eN.h)({ href: t.url, trusted: !1 });
                            let n =
                                "setup" === (0, eb.rq)(t.error)
                                    ? M.intl.string(D.default.avu1u4)
                                    : M.intl.string(D.default["5fwOcF"]);
                            (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                        }
                        null != a && ((n.current = a), t(a), s().catch(() => i(l.type)));
                    },
                    [e, i],
                ),
            };
        })(I ?? null),
        _ = (0, c.bG)([O.Ay], () => (null == I ? eA : O.Ay.getDeclaredConnections(I))),
        z = (function (e) {
            let { canRefresh: l, refreshPending: t, offers: n, connectPending: i } = e,
                a = [];
            for (let { connection: e, offer: s } of (l &&
                a.push({
                    id: "preview-refresh",
                    label: M.intl.string(D.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: t,
                }),
            n))
                a.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: M.intl.formatToPlainString(D.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: M.intl.formatToPlainString(D.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({
            canRefresh: null != A,
            refreshPending: S,
            offers: a.useMemo(() => (0, eb.Xl)(_), [_]),
            connectPending: R,
        }),
        L = a.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        T = null != x && (r || d),
        V = r && null != g,
        G = T || null != m || V || null != f || null != h,
        H = ev.p5 && null != s;
    return null != C || null != E || G || H || r
        ? (0, i.jsx)(Z.Y, {
              targetElementRef: k,
              position: "bottom",
              align: "right",
              animation: Z.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, i.jsxs)($.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${l}`,
                      "aria-label": M.intl.string(M.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != C || null != E
                              ? (0, i.jsxs)(Q.rX, {
                                    children: [
                                        null != C
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "refresh",
                                                  icon: em.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: em.RefreshIcon },
                                                  label: M.intl.string(D.default.xKexN1),
                                                  disabled: y,
                                                  action: C,
                                              })
                                            : null,
                                        null != E
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "close",
                                                  icon: eg.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eg.DoorExitIcon },
                                                  label: M.intl.string(D.default.Ea0Wrr),
                                                  action: E,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z.length > 0
                              ? (0, i.jsx)(Q.rX, {
                                    children: z.map((e) =>
                                        (0, i.jsx)(
                                            Q.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void w();
                                                    let l = null == e.connectionType ? null : L.get(e.connectionType);
                                                    null != l && P(l);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          G
                              ? (0, i.jsxs)(Q.rX, {
                                    children: [
                                        T
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "remix",
                                                  label: M.intl.string(D.default.vPI794),
                                                  action: x,
                                              })
                                            : null,
                                        null != m
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "export",
                                                  label: M.intl.string(D.default["7iamDC"]),
                                                  action: m,
                                              })
                                            : null,
                                        V
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "import",
                                                  label: M.intl.string(D.default.lf8HqE),
                                                  action: g,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "connect-tool",
                                                  label: M.intl.string(D.default["3qelzD"]),
                                                  action: f,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(Q.Dr, {
                                                  id: "version-history",
                                                  label: M.intl.string(D.default.jAWwzi),
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          H
                              ? (0, i.jsx)(Q.rX, {
                                    children: (0, i.jsx)(Q.Dr, {
                                        id: "copy-link",
                                        label: M.intl.string(M.t.WqhZss),
                                        icon: ex.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: ex.LinkIcon },
                                        action: () =>
                                            (0, ev.C)((0, ej.n)(s, eE.VV.VIBEGRATIONS, l), () =>
                                                (0, j.P0)((0, v.o)(M.intl.string(M.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, i.jsxs)(Q.rX, {
                                    children: [
                                        p
                                            ? (0, i.jsx)(Q.sL, {
                                                  id: "visibility",
                                                  label: M.intl.string(D.default.fvxLKl),
                                                  checked: o,
                                                  action: () => (0, F.Ok)(l, !o),
                                              })
                                            : null,
                                        p
                                            ? (0, i.jsx)(Q.sL, {
                                                  id: "sharing",
                                                  label: M.intl.string(D.default.EHMPvA),
                                                  checked: d,
                                                  action: () => (0, F.gv)(l, !d),
                                              })
                                            : null,
                                        (0, i.jsx)(Q.Dr, {
                                            id: "rename",
                                            label: M.intl.string(D.default.fHTQgk),
                                            action: () => {
                                                (0, eC.openModalLazy)(async () => {
                                                    let { default: e } = await t.e("153463").then(t.bind(t, 809898));
                                                    return (t) => (0, i.jsx)(e, { ...t, projectId: l });
                                                });
                                            },
                                        }),
                                        (0, i.jsx)(Q.Dr, {
                                            id: "delete",
                                            label: M.intl.string(M.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: M.intl.formatToPlainString(D.default.ZokHVz, { name: n }),
                                                    subtitle: M.intl.string(D.default.NmF939),
                                                    confirmText: M.intl.string(M.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, F.xx)(l)).ok)
                                                            throw Error(M.intl.string(D.default.tqKZCi));
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
              children: (e, l) => {
                  let { isShown: t } = l;
                  return (0, i.jsx)(N.K, {
                      ...e,
                      buttonRef: k,
                      icon: ef.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": M.intl.string(M.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": t,
                  });
              },
          })
        : null;
}
var ek = t(742589),
    eS = t(769979);
function ew(e) {
    let { title: l, actions: t, breadcrumb: n } = e;
    return (0, i.jsx)(ek.A, {
        hideSearch: !0,
        toolbar: t,
        className: eS.wx,
        "aria-label": l,
        children: (0, i.jsxs)("div", {
            className: eS.QF,
            children: [
                (0, i.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: eS.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(ek.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(ek.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(ek.A.Title, { className: eS.Qw, wrapperClassName: eS.DD, children: l }),
            ],
        }),
    });
}
var eR = t(580954),
    eP = t(189213),
    e_ = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function ez(e) {
    let { reason: l, transitionState: t, onClose: n } = e,
        a = "permissions" === l;
    return (0, i.jsx)(eP.Modal, {
        transitionState: t,
        onClose: n,
        title: M.intl.string(a ? D.default.Rtlv25 : D.default["+UouPe"]),
        subtitle: M.intl.string(a ? D.default["nDQB/b"] : D.default["E0QD++"]),
        size: "sm",
        actions: [{ text: M.intl.string(a ? M.t.BddRzS : D.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function eL(e) {
    (0, eC.openModal)((l) => (0, i.jsx)(ez, { ...l, reason: e }));
}
var eT = t(224640),
    eV = t(815021),
    eD = t(652215),
    eM = t(931587),
    eG = t(264997);
function eF(e) {
    let { applicationId: l, guildId: t, projectName: n, transitionState: s, onClose: r } = e,
        o = M.intl.string(D.default.yzxKsU),
        d = M.intl.formatToPlainString(D.default.CC69wK, { projectName: n }),
        c = a.useCallback(() => {
            let e = (0, X.SH)(t, l);
            (0, L.pX)(null == e ? eD.BVt.CHANNEL(t) : eD.BVt.CHANNEL(t, e)), r();
        }, [l, t, r]);
    return (0, i.jsx)(eT.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, i.jsxs)("div", {
            className: eM.zr,
            children: [
                (0, i.jsx)("div", { className: eM.b, children: (0, i.jsx)(eV.J, { onClick: r }) }),
                (0, i.jsxs)("div", {
                    className: eM.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eM.bm,
                            children: (0, i.jsx)("img", { className: eM.yW, src: eG, alt: "" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eM.R_,
                            children: [
                                (0, i.jsx)(y.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, i.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: d,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eM.o1,
                    children: [
                        (0, i.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: M.intl.string(M.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, i.jsx)(E.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: M.intl.string(M.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eH = t(647514),
    eX = t(899154),
    eU = t(675210),
    eB = t(165610),
    eO = t(352978);
function eK(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function eq(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function eY(e) {
    return (0, i.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function eW(e) {
    return (0, i.jsx)(x.b, { ...e, size: "custom", width: 20, height: 20 });
}
function eZ(e) {
    let l,
        t,
        n,
        s,
        r,
        { project: o, guildId: c, onSelect: p, onRemix: m } = e,
        g =
            ((l = o.id),
            (t = o.name),
            (n = a.useRef(!1)),
            (s = a.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, j.P0)((0, v.o)(M.intl.formatToPlainString(D.default.u9TapG, { name: t }), b.Ck.MESSAGE)),
                    et(l, t)
                        .catch((e) => {
                            let t;
                            console.error("[vibegrations] project export failed", l, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (t = e instanceof O._v ? e.status : null)
                                            ? M.intl.string(D.default.uB40Hz)
                                            : 404 === t
                                              ? M.intl.string(D.default.wCq2jC)
                                              : M.intl.string(D.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            n.current = !1;
                        }));
            }, [l, t])),
            {
                onExport: s,
                onImport: (r = en(
                    a.useCallback(
                        (e) => {
                            let n = el(e);
                            null != n
                                ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: M.intl.formatToPlainString(D.default.XYZqZK, { name: t }),
                                      subtitle: M.intl.string(D.default["6syXoH"]),
                                      confirmText: M.intl.string(D.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, L.pX)(eD.BVt.CHANNEL(c, eE.VV.VIBEGRATIONS, l));
                                          try {
                                              await ee(l, e, M.intl.string(D.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(M.intl.string(D.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [l, t, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        x =
            null == o.updated_at
                ? null
                : M.intl.formatToPlainString(D.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, i.jsxs)("div", {
        className: eO.OY,
        children: [
            (0, i.jsx)(f.D, {
                className: eO.W6,
                onClick: p,
                children: (0, i.jsxs)("div", {
                    className: eO.MM,
                    children: [
                        (0, i.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: eO.j1,
                            children: o.name,
                        }),
                        null == x
                            ? null
                            : (0, i.jsx)("div", {
                                  className: eO.h3,
                                  children: (0, i.jsx)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: x,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: eO.M2,
                children: [
                    (0, i.jsx)(Y.ID, { projectId: o.id, className: eO.O$ }),
                    (0, i.jsxs)("div", {
                        className: eO.Pl,
                        children: [
                            (0, i.jsx)(eI, {
                                projectId: o.id,
                                projectName: o.name,
                                guildId: c,
                                isOwner: (0, K.P)(o),
                                isPublic: (0, G.XE)(o),
                                isShared: (0, G.tr)(o),
                                supportsVisibility: (0, G.IU)(o),
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
function e$(e) {
    let { project: l, projectsLoaded: n, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [p, m] = a.useState(!0),
        [g, x] = a.useState(!1),
        [f, A] = a.useState(null),
        [I, k] = a.useState(null),
        S = l?.id ?? null,
        w = a.useRef(S),
        R = a.useRef(!0),
        T = a.useRef(!1),
        V = a.useRef(null);
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
    let X = (0, c.bG)([K.A], () => (null == S ? null : K.A.getIntegrationStatus(S)), [S]),
        { data: U, isLoading: q } = (0, P.YY)(l?.preview_application_id ?? void 0),
        Y = null != S && I !== S,
        Z = X?.preview_ready === !0,
        $ = X?.has_activity === !0,
        {
            availability: Q,
            activeMode: J,
            setMode: et,
            widgetApplicationId: ei,
        } = (0, eX.q)({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: $,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: X?.owner_authorization_revoked === !0,
        }),
        ea = (0, eU.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: Z,
            integrationInstalled: X?.integration_installed ?? null,
            botPermissionsChanged: X?.bot_permissions_changed === !0,
        }),
        es = o || Y || q,
        er = M.intl.string(D.default["5gU57O"]),
        eo = M.intl.string(p ? D.default.YdgE0j : D.default.aWVf4j),
        ed = a.useCallback(() => m((e) => !e), []),
        ec = a.useCallback(() => m(!1), []),
        eu = a.useCallback(
            (e) => {
                if (null == l || T.current) return;
                let t = l.id;
                function n() {
                    return R.current && w.current === t;
                }
                (T.current = !0),
                    x(!1),
                    m(!0),
                    A({ entry: e, status: "restoring" }),
                    (0, O.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && A({ entry: e, status: "restored" });
                            },
                            (l) => {
                                n() &&
                                    (A({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, l),
                                    (0, j.P0)((0, v.o)(M.intl.string(D.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (T.current = !1);
                        });
            },
            [l],
        ),
        em = (0, c.bG)([B.A], () => B.A.isBuilderPreviewMobile()),
        eg = M.intl.string(em ? D.default["3uCc8U"] : D.default["+nzCxZ"]),
        ex = a.useCallback(() => (0, F.GG)(!em), [em]),
        ef = (0, z.A)(l?.preview_application_id ?? null, eB.sd),
        eh = (0, eB.x1)(ef) && ef.data.proxyTicketRefreshing,
        ej = a.useCallback(() => {
            null == ef || eh || _.A.refreshProxyTicket(ef.id);
        }, [ef, eh]),
        ev = a.useCallback(() => {
            var e, t;
            null != l && ((e = l.id), (t = ef?.id), (0, O.Bn)(e), (0, eR.A)().leaveFrame(t)), s();
        }, [l, ef?.id, s]),
        eb = a.useCallback(() => {
            null != l && (m(!0), (0, O.dv)(l.id, M.intl.string(D.default["2ejwtJ"])));
        }, [l]),
        eN = en(
            a.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = el(e);
                    null != n
                        ? (0, j.P0)((0, v.o)(n, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: M.intl.formatToPlainString(D.default.XYZqZK, { name: l.name }),
                              subtitle: M.intl.string(D.default["6syXoH"]),
                              confirmText: M.intl.string(D.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  m(!0);
                                  try {
                                      await ee(t, e, M.intl.string(D.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(M.intl.string(D.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        ey = a.useCallback(() => {
            null != l && (0, eH.A)(l, r);
        }, [l, r]),
        eA = a.useCallback(async () => {
            if (null == S || w.current !== S) return;
            V.current?.abort();
            let e = new AbortController();
            (V.current = e), k(null);
            try {
                await (0, F.U1)(S, e.signal);
            } catch {
            } finally {
                e.signal.aborted || V.current !== e || w.current !== S || k(S);
            }
        }, [S]);
    a.useEffect(
        () => (
            eA(),
            () => {
                V.current?.abort(), (V.current = null);
            }
        ),
        [eA],
    );
    let ek = X?.integration_installed === !0 && l?.guild_id != null ? l.guild_id : r,
        eS = a.useCallback(async () => {
            null == l ||
                (l.guild_id === ek && l.preview_guild_id === ek) ||
                (await (0, F.M7)(l.id, { guild_id: ek, preview_guild_id: ek }));
        }, [ek, l]),
        eP = a.useCallback(async () => {
            try {
                await eS();
            } catch {}
            await eA();
        }, [eA, eS]),
        ez = a.useCallback(() => {
            let e = l?.preview_application_id;
            null != l &&
                null != e &&
                H.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: U ?? null,
                    guildId: ek,
                    onClose: () => {
                        eP();
                    },
                });
        }, [eP, ek, U, l]),
        eT = ea
            ? { type: "permissions", onReviewPermissions: ez, loading: q || Y }
            : Y && null == X
              ? { type: "checking" }
              : void 0;
    a.useEffect(() => {
        null == l && n && (0, L.pX)(eD.BVt.CHANNEL(r, eE.VV.VIBEGRATIONS));
    }, [r, l, n]);
    let eV = a.useCallback(async () => {
            if (null != l) {
                if (!Z) return void eL(e_.NO_PREVIEW);
                if (ea) return void eL(e_.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let t = await (0, O.TV)(l.id);
                    if (!0 !== t.ok) throw Error(M.intl.string(D.default.fNP6Cd));
                    (0, F.tZ)(l.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", l.id, e);
                    }),
                        (e = { applicationId: l.application_id, guildId: r, projectName: l.name }),
                        (0, eC.openModal)((l) => (0, i.jsx)(eF, { ...l, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : M.intl.string(D.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, ea, Z, l]),
        eM = (0, i.jsx)(ew, {
            title: l?.name ?? M.intl.string(D.default.F2dRba),
            breadcrumb: { title: M.intl.string(D.default.Xmvb23), onClick: s },
            actions:
                null == l
                    ? null
                    : (0, i.jsxs)("div", {
                          className: eO.FO,
                          children: [
                              Q.showModeSwitch ? (0, i.jsx)(ep, { modes: Q.modes, mode: J, onChange: et }) : null,
                              (0, i.jsx)(eI, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: r,
                                  isOwner: (0, K.P)(l),
                                  isPublic: (0, G.XE)(l),
                                  isShared: (0, G.tr)(l),
                                  supportsVisibility: (0, G.IU)(l),
                                  onRefresh: (0, eB.x1)(ef) ? ej : void 0,
                                  isRefreshing: eh,
                                  onClose: ev,
                                  onExport: eb,
                                  onImport: eN.open,
                                  onRemix: ey,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, eC.openModalLazy)(async () => {
                                              let { default: l } = await Promise.all([
                                                  t.e("964476"),
                                                  t.e("461590"),
                                              ]).then(t.bind(t, 84469));
                                              return (t) => (0, i.jsx)(l, { ...t, projectId: e });
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
                                  previewProjectId: l.id,
                              }),
                              (0, i.jsx)(C.m, {
                                  text: eg,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(N.K, {
                                      icon: em ? eY : eq,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eg,
                                      "aria-pressed": em,
                                      onClick: ex,
                                  }),
                              }),
                              (0, i.jsx)(C.m, {
                                  text: eo,
                                  ariaHidden: !0,
                                  children: (0, i.jsx)(N.K, {
                                      icon: eK,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eo,
                                      "aria-pressed": p,
                                      onClick: ed,
                                  }),
                              }),
                              (0, K.P)(l)
                                  ? (0, i.jsx)(C.m, {
                                        text: er,
                                        ariaHidden: !0,
                                        children: (0, i.jsx)(N.K, {
                                            icon: eW,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": er,
                                            loading: o,
                                            disabled: es,
                                            onClick: eV,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: eO.nj,
        children: [
            eN.input,
            (0, i.jsx)("main", {
                className: eO.JX,
                children:
                    null == l
                        ? (0, i.jsxs)("div", {
                              className: eO.j5,
                              children: [
                                  eM,
                                  (0, i.jsxs)("div", {
                                      className: eO.sD,
                                      children: [
                                          (0, i.jsx)(y.D, {
                                              variant: "heading-lg/semibold",
                                              children: M.intl.string(D.default.F2dRba),
                                          }),
                                          (0, i.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: M.intl.string(D.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(E.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: M.intl.string(D.default["42EdIV"]),
                                              onClick: () => (0, F.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              W.A,
                              {
                                  projectId: l.id,
                                  applicationId: l.preview_application_id,
                                  previewApplicationId: l.preview_application_id,
                                  surface: eB.sd,
                                  header: eM,
                                  chatOpen: p,
                                  onCloseChat: ec,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => x(!1),
                                  onRestoreVersion: eu,
                                  restoreState: f,
                                  previewReady: Z,
                                  previewGate: eT,
                                  availability: Q,
                                  activeMode: J,
                                  widgetApplicationId: ei,
                              },
                              l.id,
                          ),
            }),
        ],
    });
}
function eQ(e) {
    let {
            projects: l,
            sharedProjects: t,
            fetchState: n,
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
                t
                    .slice()
                    .sort((e, l) =>
                        null == e.updated_at ? 1 : null == l.updated_at ? -1 : l.updated_at.localeCompare(e.updated_at),
                    ),
            [t],
        ),
        z = a.useRef(null);
    a.useEffect(() => {
        null != g && z.current?.querySelector("button")?.focus();
    }, [g]);
    let L = a.useMemo(
            () =>
                l
                    .filter((e) => (0, X.X0)(e, o))
                    .slice()
                    .sort((e, l) =>
                        null == e.updated_at ? 1 : null == l.updated_at ? -1 : l.updated_at.localeCompare(e.updated_at),
                    ),
            [l, o],
        ),
        T = M.intl.string(D.default.TU9IGR),
        V = [
            M.intl.string(D.default["E+Q26x"]),
            M.intl.string(D.default["06/jqP"]),
            M.intl.string(D.default["3gSfUa"]),
        ],
        H = [
            {
                id: "feature-showcase",
                name: M.intl.string(D.default.BLDsiz),
                description: M.intl.string(D.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: M.intl.string(D.default["+abXa8"]),
                description: M.intl.string(D.default.OZYPMR),
            },
        ],
        B = M.intl.string(D.default.FYK2xQ),
        O = M.intl.string(D.default["/SUK82"]),
        K = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || C());
            },
            [u, C],
        );
    return (0, i.jsxs)("div", {
        className: r()(eO.nj, eO.a0),
        children: [
            (0, i.jsx)(ew, { title: M.intl.string(D.default.Xmvb23) }),
            (0, i.jsxs)("div", {
                className: eO.Yo,
                children: [
                    (0, i.jsxs)("main", {
                        className: eO.ps,
                        children: [
                            (0, i.jsx)(A.Ip, {
                                className: eO.Yy,
                                children: (0, i.jsx)("div", {
                                    className: eO.Mo,
                                    children: (0, i.jsxs)("section", {
                                        className: r()(eO.Qs, eO.Ix),
                                        children: [
                                            (0, i.jsx)(y.D, {
                                                variant: "heading-xl/semibold",
                                                children: M.intl.string(D.default["2tYpRK"]),
                                            }),
                                            (0, i.jsxs)("section", {
                                                className: eO.WI,
                                                "aria-label": B,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eO.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: B,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: M.intl.string(D.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eO.Aw,
                                                        children: H.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eO.EA,
                                                                    children: (0, i.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": M.intl.formatToPlainString(
                                                                            D.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eO.nx, eO.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var l;
                                                                                  return C(
                                                                                      ((l = e.name),
                                                                                      M.intl.formatToPlainString(
                                                                                          D.default["9D9L0S"],
                                                                                          { templateName: l },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, i.jsx)(h.E, {
                                                                                className: eO.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, i.jsx)(h.E, {
                                                                                className: eO.BK,
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
                                            (0, i.jsxs)("section", {
                                                className: eO.WI,
                                                "aria-label": O,
                                                children: [
                                                    (0, i.jsxs)("div", {
                                                        className: eO.G9,
                                                        children: [
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: O,
                                                            }),
                                                            (0, i.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: M.intl.string(D.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsx)("ol", {
                                                        className: eO.Aw,
                                                        children: V.map((e) =>
                                                            (0, i.jsx)(
                                                                "li",
                                                                {
                                                                    className: eO.EA,
                                                                    children: (0, i.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: eO.nx,
                                                                        onClick: d ? void 0 : () => C(e),
                                                                        children: (0, i.jsx)(h.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: eO.un,
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
                            (0, i.jsx)("div", {
                                className: eO.Yl,
                                children: (0, i.jsxs)("div", {
                                    className: r()(eO.Qs, eO.DA),
                                    children: [
                                        (0, i.jsx)(I.f, {
                                            label: T,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: T,
                                            error: c,
                                            onChange: b,
                                            onKeyDown: K,
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: eO.VP,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: eO.gH,
                                                    ref: z,
                                                    children: (0, i.jsx)(k.l, {
                                                        selectionMode: "single",
                                                        label: M.intl.string(D.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: M.intl.string(D.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: M.intl.string(D.default.MLg0S8),
                                                                options: es.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: M.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: g,
                                                    }),
                                                }),
                                                (0, i.jsx)(eo.A, {
                                                    settings: x ?? G.hk,
                                                    choices: (0, U.e)()
                                                        ? {
                                                              main: [...G.S8.main, ...G.wF.main],
                                                              subagent: [...G.S8.subagent, ...G.wF.subagent],
                                                              thinking: G.S8.thinking,
                                                          }
                                                        : G.S8,
                                                    disabled: d,
                                                    onChange: j,
                                                }),
                                                (0, i.jsx)(E.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: M.intl.string(M.t.CumH4u),
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
                    (0, i.jsxs)("aside", {
                        className: eO.pA,
                        "aria-label": M.intl.string(D.default.Bo5fE3),
                        children: [
                            (0, i.jsxs)("div", {
                                className: eO.IR,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eO.RM,
                                        children: [
                                            (0, i.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: M.intl.string(D.default.Bo5fE3),
                                            }),
                                            (0, i.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: M.intl.string(D.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(er, { importing: P, onImport: N }),
                                ],
                            }),
                            (0, i.jsxs)(A.Ip, {
                                className: eO.xe,
                                children: [
                                    (null == n || "loading" === n.type) && 0 === L.length
                                        ? (0, i.jsx)("div", { className: eO.E8, children: (0, i.jsx)(S.y, {}) })
                                        : n?.type === "error" && 0 === L.length
                                          ? (0, i.jsxs)("div", {
                                                className: eO.E8,
                                                children: [
                                                    (0, i.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eO.JS,
                                                        children: M.intl.string(D.default["IN/HRP"]),
                                                    }),
                                                    (0, i.jsx)(E.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: M.intl.string(D.default["42EdIV"]),
                                                        onClick: () => (0, F.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === L.length
                                            ? (0, i.jsx)("div", {
                                                  className: eO.D1,
                                                  children: (0, i.jsxs)("div", {
                                                      className: eO.ST,
                                                      children: [
                                                          (0, i.jsx)(w.D, {
                                                              size: "lg",
                                                              color: R.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eO.sI,
                                                              children: M.intl.string(D.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, i.jsx)("div", {
                                                  className: eO.Dq,
                                                  children: L.map((e) =>
                                                      (0, i.jsx)(
                                                          eZ,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => v(e.id),
                                                              onRemix: () => (0, eH.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, i.jsxs)("div", {
                                              className: eO.qx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: eO.uc,
                                                      children: [
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: M.intl.string(D.default.jrCnUc),
                                                          }),
                                                          (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: M.intl.string(D.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: eO.Dq,
                                                      children: _.map((e) =>
                                                          (0, i.jsx)(
                                                              eZ,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => v(e.id),
                                                                  onRemix: () => (0, eH.A)(e, o),
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
function eJ(e) {
    let l,
        { guildId: t, projectId: n } = e,
        s = (0, c.yK)([K.A], () => K.A.getOwnedProjects()),
        r = (0, c.bG)([K.A], () => K.A.getProjectsFetchState()),
        o = (0, c.bG)([T.A, V.A], () => {
            let e = T.A.getGuild(t);
            return null != e && V.A.can(eD.xBc.MANAGE_GUILD, e);
        }, [t]),
        d = (0, c.yK)([K.A], () => (o ? K.A.getSharedProjects(t) : []), [t, o]),
        [u, p] = a.useState(""),
        m = n ?? null,
        [g, x] = a.useState(!1),
        [f, h] = a.useState(null),
        [C, N] = a.useState("guild"),
        [y, E] = a.useState(null),
        [A, I] = a.useState(null);
    a.useEffect(() => {
        (0, F.hF)(t);
    }, [t, o]),
        a.useEffect(() => {
            (0, F.dm)(t, m);
        }, [t, m]);
    let k = a.useCallback((e) => {
            N(e), E(null);
        }, []),
        S = a.useCallback(
            async (e) => {
                let l = (e ?? u).trim(),
                    n = q({ idea: l, installScope: C, submitting: g });
                if ("idea" !== n && "submitting" !== n) {
                    if (null == C) return void E(M.intl.string(D.default.jQ3nQB));
                    null != e && p(e), x(!0), h(null);
                    try {
                        let e = await (0, F.gA)({ guild_id: t, install_scope: C });
                        (0, O.Hc)(e),
                            null != A && (0, O.r2)(e, A),
                            (0, O.dv)(e, l),
                            (0, L.pX)(eD.BVt.CHANNEL(t, eE.VV.VIBEGRATIONS, e)),
                            p(""),
                            I(null);
                    } catch (e) {
                        h(e instanceof Error ? e.message : M.intl.string(D.default.KKkp5Y));
                    } finally {
                        x(!1);
                    }
                }
            },
            [C, t, u, A, g],
        ),
        [w, R] = a.useState(!1),
        P = a.useCallback(
            async (e, l) => {
                let n = el(e);
                if (null != n) return void (0, j.P0)((0, v.o)(n, b.Ck.FAILURE));
                R(!0);
                let i = null;
                try {
                    (i = await (0, F.gA)({ guild_id: t, install_scope: l })),
                        await ee(i, e, M.intl.string(D.default.KjEtrZ)),
                        (0, L.pX)(eD.BVt.CHANNEL(t, eE.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, F.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(M.intl.string(D.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    R(!1);
                }
            },
            [t],
        ),
        _ = a.useCallback(
            (e) => {
                (0, L.pX)(eD.BVt.CHANNEL(t, eE.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        z = a.useCallback(() => {
            (0, L.pX)(eD.BVt.CHANNEL(t, eE.VV.VIBEGRATIONS));
        }, [t]),
        G = a.useCallback((e) => {
            p(e), h(null);
        }, []),
        H = (0, c.bG)([K.A], () => {
            if (null == m) return null;
            let e = K.A.getProject(m);
            return null == e || (0, K.P)(e) || (o && e.guild_id === t) ? e : null;
        }, [m, o, t]),
        X = (0, c.bG)([K.A], () => K.A.hasFetchedGuildProjects(t), [t]);
    return null != m
        ? (0, i.jsx)(e$, { project: H, projectsLoaded: X, onBack: z, guildId: t }, m)
        : (0, i.jsx)(eQ, {
              projects: s,
              sharedProjects: d,
              fetchState: r,
              modelSettings: A,
              onModelSettingsChange: I,
              idea: u,
              guildId: t,
              submitting: g,
              createError: f,
              createDisabled: "idea" === (l = q({ idea: u, installScope: C, submitting: g })) || "submitting" === l,
              onSelectProject: _,
              onIdeaChange: G,
              onCreate: S,
              onImportNewProject: P,
              importing: w,
              installScope: C,
              onInstallScopeChange: k,
              installScopeError: y,
          });
}
