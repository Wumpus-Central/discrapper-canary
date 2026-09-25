(a.r(t), a.d(t, { default: () => tq }), a(321073));
var n,
    i = a(477900),
    l = a(582128),
    s = a(503698),
    o = a.n(s),
    r = a(536637),
    d = a.n(r),
    u = a(17928),
    c = a(314116),
    m = a(534890),
    p = a(646270),
    h = a(31300),
    f = a(939249),
    g = a(323384),
    y = a(834730),
    b = a(691540),
    w = a(857250),
    k = a(97483),
    x = a(821609),
    v = a(92446),
    j = a(625903),
    C = a(297264),
    A = a(97893),
    N = a(364522),
    I = a(103557),
    S = a(691885),
    E = a(789645),
    P = a(289873),
    _ = a(152367),
    T = a(661531),
    R = a(627363),
    M = a(625180),
    O = a(672929),
    G = a(742589),
    D = a(976860),
    V = a(885386),
    z = a(696451),
    L = a(71393),
    B = a(576705),
    F = a(486020),
    H = a(50617),
    Y = a(375708),
    q = a(673724),
    U = a(948230),
    X = a(637708),
    W = a(936494);
async function K(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, U.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var $ = a(208137),
    Z = a(993396),
    Q = a(822835),
    J = a(808728),
    ee = a(683180),
    et = a(66708),
    ea = a(74029),
    en = a(559676),
    ei = a(58551),
    el = a(805332),
    es = a(277977),
    eo = a(972786);
function er(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var ed = a(58703),
    eu = a(127181),
    ec = a(192308);
function em() {
    (0, ec.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ep = a(413927);
function eh() {
    let e = (0, eu.TH)("desktop");
    if (0 === e.length) return null;
    let t = Y.intl.string(H.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: ep.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: ep.bZ,
                children: [
                    (0, i.jsx)(y.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(y.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(H.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: ep.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: ep.S3,
                            children: [
                                (0, i.jsxs)(y.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ep.VO,
                                    children: [
                                        (0, ed.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eu.MZ)(e) ? ` \xb7 ${Y.intl.string(H.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
            (0, eu.B)("desktop")
                ? (0, i.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(H.default.YWxThz),
                      onClick: em,
                  })
                : null,
        ],
    });
}
var ef = a(428681);
function eg(e) {
    let { className: t, ariaLabel: a, disabled: n, onClick: l, children: s } = e;
    return (0, i.jsx)(f.D, { "aria-disabled": n, "aria-label": a, className: t, onClick: n ? void 0 : l, children: s });
}
var ey = a(865665),
    eb = a(568190);
let ew = { x: 5, y: 7 },
    ek = { x: 5, y: 4 };
function ex(e) {
    let { listClassName: t, radius: a, children: n } = e,
        [s, o] = l.useState(!1);
    return (0, i.jsxs)("div", {
        className: eb.n,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, i.jsx)("ol", { className: t, children: n }),
            s ? (0, i.jsx)(ey.C, { area: 64, radius: a, color: T.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ev = a(210744),
    ej = a(864970),
    eC = a(707554),
    eA = a(770178),
    eN = a(765548),
    eI = a(597643),
    eS = a(885576),
    eE = a(236730);
let eP = "heading-xxl/semibold",
    e_ = !1;
function eT() {
    let e = l.useRef(null),
        [t, a] = l.useState(!0),
        n = (0, eN.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        s = (0, eA.w)(n, [], { fireOnMount: !0 }),
        o = (0, u.bG)([eI.A], () => eI.A.isConnected());
    l.useEffect(() => {
        if (!o || !t || e_) return;
        let a = !1,
            n = 0;
        function i() {
            a ||
                (n = window.setTimeout(() => {
                    ((e_ = !0), e.current?.play());
                }, 400));
        }
        let l = document.fonts;
        return (
            null == l ? i() : l.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(i, i),
            () => {
                ((a = !0), window.clearTimeout(n));
            }
        );
    }, [o, t]);
    let r = (0, u.bG)([eS.A], () => eS.A.isIdle()),
        d = l.useRef(r);
    l.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && e_ && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let c = Y.intl.string(H.default["2tYpRK"]);
    return (0, i.jsx)("div", {
        ref: s,
        className: eE.x,
        children: t
            ? (0, i.jsx)(eC.H, { children: (0, i.jsx)(ej.o, { ref: e, text: c, variant: eP, delay: null }) })
            : (0, i.jsx)(C.D, { variant: eP, children: c }),
    });
}
var eR = a(922016),
    eM = a(980707),
    eO = a(477782),
    eG = a(81369),
    eD = a(402879);
async function eV(e, t, a) {
    (0, es.Hc)(e);
    let n = await (0, es.vX)(e, t);
    (0, es.dv)(e, a, [n]);
}
function ez(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, q.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, q.ZJ)((0, q.yr)(t)) });
}
async function eL(e, t) {
    let a,
        n =
            ((a = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === a ? "vibegration" : a}.zip`),
        i = await (0, es.cS)(e, n);
    await (0, eD.F)(i, n);
}
function eB(e) {
    let t = l.useRef(null),
        a = l.useCallback(
            (t) => {
                let a = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != a && e(a));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, i.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: a,
        }),
    };
}
var eF = a(950305),
    eH = a(664121);
let eY = [
    { value: "user", icon: eF.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eH.R, nameMessage: H.default.LdgKdI },
];
function eq(e) {
    let { importing: t, onImport: a } = e,
        n = l.useRef(null),
        s = eB(l.useCallback((e) => a(e, "user"), [a])),
        o = eB(l.useCallback((e) => a(e, "guild"), [a])),
        r = { user: s.open, guild: o.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eR.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: eR.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(eM.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(eO.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: eY
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        eO.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: l } = a;
                    return (0, i.jsx)(x.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: eG.H,
                        text: Y.intl.string(H.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": l,
                    });
                },
            }),
            s.input,
            o.input,
        ],
    });
}
var eU = a(379307),
    eX = a(629584),
    eW = a(753514),
    eK = a(491920);
function e$(e) {
    let { modes: t, mode: a, onChange: n, className: s } = e,
        r = l.useMemo(() => t.map((e) => ({ value: e, name: (0, eW.kZ)(e), "aria-controls": (0, eW.z3)(e) })), [t]),
        d = l.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == a
        ? null
        : (0, i.jsx)(eX.I, {
              role: "tablist",
              look: "pill",
              className: o()(eK.b, s),
              optionClassName: eK.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var eZ = a(663417),
    eQ = a(70688),
    eJ = a(173936),
    e0 = a(473935),
    e2 = a(365199),
    e1 = a(7437),
    e6 = a(147036),
    e9 = a(957565),
    e8 = a(123917),
    e7 = a(557875);
let e3 = new Set();
var e5 = a(976814),
    e4 = a(746080),
    te = a(793712);
let tt = [];
function ta(e) {
    (0, b.P0)((0, w.o)(e, k.Ck.FAILURE));
}
function tn(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: n,
            projectGuildId: s,
            isOwner: o,
            canRemix: r,
            onExport: d,
            onImport: m,
            onRemix: p,
            onConnectTool: h,
            onVersionHistory: f,
            onRestorePoints: g,
            onRefresh: y,
            isRefreshing: x = !1,
            onClose: v,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        N = l.useRef(null),
        { pending: I, refresh: S } = (0, e1.A)(C ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [a, n] = l.useState(e3),
                i = l.useRef(e3),
                s = l.useCallback((e) => {
                    ((i.current = (0, e7.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: l.useCallback(
                    (a) => {
                        if (null == e) return;
                        let l = (0, e7.K9)(i.current, a.type);
                        async function o() {
                            let n = await (0, es.JI)(e, a.type);
                            (s(a.type), "url" === n.type)
                                ? (0, e8.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e7.rq)(n.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != l && ((i.current = l), n(l), o().catch(() => s(a.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, ta),
        _ = (0, u.bG)([es.Ay], () => (null == A ? tt : es.Ay.getDeclaredConnections(A))),
        T = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: i } = e,
                l = [];
            for (let { connection: e, offer: s } of (t &&
                l.push({
                    id: "preview-refresh",
                    label: Y.intl.string(H.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                l.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return l;
        })({
            canRefresh: null != C,
            refreshPending: I,
            offers: l.useMemo(() => (0, e7.Xl)(_), [_]),
            connectPending: E,
        }),
        R = l.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        M = null != p && r,
        O = o && null != m,
        D = M || null != d || O || null != h || null != f || null != g,
        V = e9.p5 && null != n,
        z = e9.p5;
    return null != y || null != v || D || z || o
        ? (0, i.jsx)(eR.Y, {
              targetElementRef: N,
              position: "bottom",
              align: "right",
              animation: eR.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsxs)(eM.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: l,
                      onSelect: l,
                      children: [
                          null != y || null != v
                              ? (0, i.jsxs)(eO.rX, {
                                    children: [
                                        null != y
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "refresh",
                                                  icon: eZ.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eZ.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: x,
                                                  action: y,
                                              })
                                            : null,
                                        null != v
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "close",
                                                  icon: eQ.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eQ.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: v,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          T.length > 0
                              ? (0, i.jsx)(eO.rX, {
                                    children: T.map((e) =>
                                        (0, i.jsx)(
                                            eO.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void S();
                                                    let t = null == e.connectionType ? null : R.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          D
                              ? (0, i.jsxs)(eO.rX, {
                                    children: [
                                        M
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z
                              ? (0, i.jsxs)(eO.rX, {
                                    children: [
                                        V
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eJ.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eJ.LinkIcon },
                                                  action: () =>
                                                      (0, e9.C)((0, e6.n)(n, e4.VV.VIBEGRATIONS, t), () =>
                                                          (0, b.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), k.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(eO.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: e0.L,
                                            leadingAccessory: { type: "icon", icon: e0.L },
                                            action: () =>
                                                (0, e9.C)(t, () =>
                                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), k.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, i.jsxs)(eO.rX, {
                                    children: [
                                        (0, i.jsx)(eO.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: j.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                            action: () =>
                                                (0, e5.A)(t, { guildId: s ?? n, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, i.jsx)(eO.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: Y.intl.formatToPlainString(H.default.ZokHVz, { name: a }),
                                                    subtitle: Y.intl.string(H.default.NmF939),
                                                    confirmText: Y.intl.string(Y.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, U.xx)(t)).ok)
                                                            throw Error(Y.intl.string(H.default.tqKZCi));
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
                  let { onClick: a } = e,
                      { isShown: n } = t;
                  return (0, i.jsx)("div", {
                      ref: N,
                      className: te.h,
                      children: (0, i.jsx)(G.A.Icon, {
                          icon: e2.MoreHorizontalIcon,
                          tooltip: Y.intl.string(Y.t["UKOtz+"]),
                          "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                          "aria-haspopup": "menu",
                          "aria-expanded": n,
                          selected: n,
                          onClick: a,
                      }),
                  });
              },
          })
        : null;
}
var ti = a(769979);
function tl(e) {
    let { title: t, actions: a, breadcrumb: n } = e;
    return (0, i.jsx)(G.A, {
        hideSearch: !0,
        toolbar: a,
        className: ti.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: ti.QF,
            children: [
                (0, i.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: T.A.colors.TEXT_STRONG,
                    className: ti.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(G.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(G.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(G.A.Title, { className: ti.Qw, wrapperClassName: ti.DD, children: t }),
            ],
        }),
    });
}
var ts = a(73432),
    to = a(683071),
    tr = a(47167),
    td = a(994500),
    tu = a(287809),
    tc = a(652215);
let tm = "conjuring-help";
var tp = a(107148);
function th() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([tu.default, L.A, J.Ay, td.A], () => {
                let e = tu.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(tc.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = J.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tr.m1)(t, tu.default, td.A) === tm;
                    });
                    if (null != a) return { isStaff: e, guildId: t.id, channelId: a.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != a
                    ? { kind: "channel", guildId: t, channelId: a }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = l.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, D.pX)(tc.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, e8.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, i.jsx)("div", {
              className: tp.l,
              children: (0, i.jsx)(to.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(H.default["4BsHmp"], { channel: tm, onNavigate: t }),
              }),
          });
}
var tf = a(321593),
    tg = a(580954),
    ty = a(227189),
    tb = a(189213),
    tw = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function tk(e) {
    let { reason: t, transitionState: a, onClose: n } = e,
        l = t === tw.PERMISSIONS;
    return (0, i.jsx)(tb.Modal, {
        transitionState: a,
        onClose: n,
        title: Y.intl.string(l ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(l ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(l ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function tx(e) {
    (0, ec.openModal)((t) => (0, i.jsx)(tk, { ...t, reason: e }));
}
var tv = a(480007),
    tj = a(584936),
    tC = a(536820),
    tA = a(548118);
let tN = "user",
    tI = "user",
    tS = "no-server",
    tE = new Map();
function tP(e) {
    return tE.get(e) ?? null;
}
function t_(e) {
    switch (e) {
        case "all":
        case tI:
        case tS:
            return null;
        default:
            return e;
    }
}
function tT(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tI:
            return "user" === e.install_scope;
        case tS:
            return null == (0, X.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tR = a(506774);
let tM = "VibegrationsProjectsPanelOpen";
function tO() {
    return tR.w.get(tM) ?? null;
}
function tG(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tD = a(165610),
    tV = a(352978);
function tz(e) {
    return (0, i.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tL(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tB(e) {
    return (0, i.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tF(e) {
    let t,
        a,
        n,
        s,
        o,
        { project: r, guildId: m, onSelect: p, onRemix: h } = e,
        x =
            ((t = r.id),
            (a = r.name),
            (n = l.useRef(!1)),
            (s = l.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, b.P0)((0, w.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: a }), k.Ck.MESSAGE)),
                    eL(t, a)
                        .catch((e) => {
                            let a;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, b.P0)(
                                    (0, w.o)(
                                        409 === (a = e instanceof es._v ? e.status : null)
                                            ? Y.intl.string(H.default.uB40Hz)
                                            : 404 === a
                                              ? Y.intl.string(H.default.wCq2jC)
                                              : Y.intl.string(H.default.G2GqyP),
                                        k.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            n.current = !1;
                        }));
            }, [t, a])),
            {
                onExport: s,
                onImport: (o = eB(
                    l.useCallback(
                        (e) => {
                            let n = ez(e);
                            null != n
                                ? (0, b.P0)((0, w.o)(n, k.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: a }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(tc.BVt.CHANNEL(m, e4.VV.VIBEGRATIONS, t));
                                          try {
                                              await eV(t, e, Y.intl.string(H.default.C7GU2r));
                                          } catch {
                                              (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), k.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, a, m],
                    ),
                )).open,
                importInput: o.input,
            }),
        v = r.preview_application_id ?? r.application_id,
        { data: j } = (0, R.YY)(v),
        C = j?.icon == null ? null : F.Ay.getApplicationIconURL({ id: v, icon: j.icon, size: 40 }),
        A =
            null == r.updated_at
                ? null
                : Y.intl.formatToPlainString(H.default.oMDaqr, { time: d()(r.updated_at).fromNow() }),
        N = (0, X.HC)(r),
        I =
            (0, u.bG)([L.A], () => (null == N ? null : (L.A.getGuild(N)?.name ?? null)), [N]) ??
            Y.intl.string(H.default["qqH+iN"]);
    return (0, i.jsxs)("div", {
        className: tV.OY,
        children: [
            (0, i.jsx)(tf.Ay, { projectId: r.id }),
            (0, i.jsxs)(f.D, {
                className: tV.W6,
                onClick: p,
                children: [
                    null == C
                        ? (0, i.jsx)("div", {
                              className: tV.a8,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, i.jsx)("img", { alt: "", src: C, className: tV.VJ }),
                    (0, i.jsxs)("div", {
                        className: tV.MM,
                        children: [
                            (0, i.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tV.j1,
                                children: r.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: tV.h3,
                                children: [
                                    (0, i.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tV.Wb,
                                        children: I,
                                    }),
                                    null == A
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: tV.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, i.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tV.zM,
                                                      children: A,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tV.M2,
                children: (0, i.jsxs)("div", {
                    className: tV.Pl,
                    children: [
                        (0, i.jsx)(tn, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: m,
                            projectGuildId: r.guild_id,
                            isOwner: (0, eo.PV)(r),
                            canRemix: (0, eo.H_)(r),
                            onRemix: h,
                            onExport: x.onExport,
                            onImport: x.onImport,
                        }),
                        x.importInput,
                    ],
                }),
            }),
        ],
    });
}
function tH(e) {
    var t, n, s;
    let { project: o, projectsLoaded: r, onBack: d, guildId: m } = e,
        [p, h] = l.useState(!1),
        [f, g] = l.useState(!0),
        [A, N] = l.useState(!1),
        [I, S] = l.useState(!1),
        [E, P] = l.useState(!1),
        _ = V.Q_.useSetting(),
        [T, z] = l.useState(null),
        [L, B] = l.useState(null),
        F = o?.id ?? null,
        q = l.useRef(F),
        X = l.useRef(!0),
        W = l.useRef(!1),
        $ = l.useRef(null);
    ((q.current = F),
        l.useEffect(
            () => (
                (X.current = !0),
                () => {
                    X.current = !1;
                }
            ),
            [],
        ));
    let Z = (0, u.bG)([eo.Ay], () => (null == F ? null : eo.Ay.getIntegrationStatus(F)), [F]),
        { data: et, isLoading: er } = (0, R.YY)(o?.preview_application_id ?? void 0),
        ed = null != F && L !== F,
        eu = Z?.preview_ready === !0,
        em = Z?.has_activity === !0,
        {
            availability: ep,
            activeMode: eh,
            setMode: eg,
            widgetApplicationId: ey,
        } = (0, Q.q)({
            applicationId: o?.preview_application_id ?? null,
            previewApplicationId: o?.preview_application_id ?? null,
            declaredActivity: em,
            installScope: o?.install_scope ?? null,
            ownerAuthorizationRevoked: Z?.owner_authorization_revoked === !0,
        }),
        eb = (0, ei.Qg)({
            installScope: o?.install_scope ?? null,
            previewReady: eu,
            integrationInstalled: Z?.integration_installed ?? null,
            botPermissionsChanged: Z?.bot_permissions_changed === !0,
        }),
        ew = p || ed || er,
        ek = Y.intl.string(H.default["5gU57O"]),
        ex = f && !E && !A && !I,
        ej = Y.intl.string(ex ? H.default.YdgE0j : H.default.aWVf4j),
        eC = l.useCallback(() => {
            if (E || A || I) {
                (P(!1), N(!1), S(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [E, A, I]),
        eA = l.useCallback(() => g(!1), []),
        { active: eN } = (0, ea.Q_)(F),
        eI = l.useRef(null),
        eS = (0, en.o4)(F),
        eE = Y.intl.string(eS ? H.default.bfQ4Ki : eN ? H.default.rfNEHn : H.default.lXcEa2),
        eP = l.useCallback(() => {
            if (null != F) {
                if (eN) return void (0, ea.PS)(F);
                (P(!1), N(!1), S(!1), g(!0), (0, ea.nI)(F));
            }
        }, [F, eN]),
        e_ = l.useCallback(() => {
            P((e) => !e && (g(!0), N(!1), S(!1), !0));
        }, []),
        eT = l.useCallback(() => P(!1), []),
        eR = l.useCallback(
            (e) => {
                if (null == o || W.current) return;
                let t = o.id;
                function a() {
                    return X.current && q.current === t;
                }
                ((W.current = !0),
                    N(!1),
                    g(!0),
                    z({ entry: e, status: "restoring" }),
                    (0, es.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && z({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (z({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, b.P0)((0, w.o)(Y.intl.string(H.default.q6iZ84), k.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (W.current = !1);
                        }));
            },
            [o],
        ),
        eM = (0, u.bG)([el.A], () => el.A.isBuilderPreviewMobile()),
        eO = Y.intl.string(eM ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eG = l.useCallback(() => (0, U.GG)(!eM), [eM]),
        eD = (0, O.A)(o?.preview_application_id ?? null, tD.sd),
        eL = (0, tD.x1)(eD) && eD.data.proxyTicketRefreshing,
        eF = l.useCallback(() => {
            null == eD || eL || M.A.refreshProxyTicket(eD.id);
        }, [eD, eL]),
        eH = l.useCallback(() => {
            var e, t;
            (null != o && ((e = o.id), (t = eD?.id), (0, es.Bn)(e), (0, tg.A)().leaveFrame(t)), d());
        }, [o, eD?.id, d]),
        eY = l.useCallback(() => {
            null != o && (g(!0), (0, es.dv)(o.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [o]),
        eq = eB(
            l.useCallback(
                (e) => {
                    if (null == o) return;
                    let t = o.id,
                        a = ez(e);
                    null != a
                        ? (0, b.P0)((0, w.o)(a, k.Ck.FAILURE))
                        : (0, c.A)({
                              title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: o.name }),
                              subtitle: Y.intl.string(H.default["6syXoH"]),
                              confirmText: Y.intl.string(H.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await eV(t, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), k.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [o],
            ),
        ),
        eU = l.useCallback(() => {
            null != o && (0, tj.A)(o, m);
        }, [o, m]),
        eX = l.useCallback(async () => {
            if (null == F || q.current !== F) return;
            $.current?.abort();
            let e = new AbortController();
            (($.current = e), B(null));
            try {
                await (0, U.U1)(F, e.signal);
            } catch {
            } finally {
                e.signal.aborted || $.current !== e || q.current !== F || B(F);
            }
        }, [F]);
    l.useEffect(
        () => (
            eX(),
            () => {
                ($.current?.abort(), ($.current = null));
            }
        ),
        [eX],
    );
    let eW =
            ((t = o ?? null), (n = Z ?? null), n?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : m),
        eK = ((s = o?.application_id ?? null), (0, u.bG)([J.Ay], () => (null == s ? null : (0, ee.SH)(m, s)), [m, s])),
        eZ = l.useMemo(() => (null == eK ? null : () => (0, D.pX)(tc.BVt.CHANNEL(m, eK))), [m, eK]),
        eQ = l.useCallback(async () => {
            null != o && (await K(o, eW));
        }, [eW, o]),
        eJ = l.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eX();
        }, [eX, eQ]),
        e0 = l.useMemo(() => {
            let e = o?.preview_application_id;
            return null == e || er || ed
                ? null
                : {
                      ...(0, ty.p)({ applicationId: e, application: et ?? null, guildId: eW }),
                      onClose: () => {
                          eJ();
                      },
                  };
        }, [ed, eJ, eW, er, et, o?.preview_application_id]),
        e2 = eb ? { type: "permissions", authorizeProps: e0 } : ed && null == Z ? { type: "checking" } : void 0;
    l.useEffect(() => {
        null == o && r && (0, D.pX)(tc.BVt.CHANNEL(m, e4.VV.VIBEGRATIONS));
    }, [m, o, r]);
    let e1 = l.useCallback((e) => {
            h(!0);
            let t = (0, es.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(Y.intl.string(H.default.fNP6Cd));
                (0, U.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, b.P0)(
                            (0, w.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), k.Ck.FAILURE),
                        );
                    })
                    .finally(() => h(!1)),
                t
            );
        }, []),
        e6 = l.useCallback(() => {
            if (null == o) return;
            if (!eu) return void tx(tw.NO_PREVIEW);
            if (eb) return void tx(tw.PERMISSIONS);
            if ("user" === o.install_scope)
                return void e1(o.id)
                    .then(() => {
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), k.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, es.$C)(o.id);
            (e.catch(() => {}),
                (0, tv.A)({
                    projectId: o.id,
                    guildId: m,
                    applicationId: o.application_id,
                    projectName: o.name,
                    publish: e1(o.id),
                    initialDraft: e,
                }));
        }, [m, eb, eu, o, e1]),
        e9 =
            null != o && (0, eo.jf)(o)
                ? (0, i.jsx)(x.$, { size: "sm", variant: "primary", loading: p, disabled: ew, onClick: e6, text: ek })
                : null,
        e8 = (0, i.jsx)(tl, {
            title: o?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: d },
            actions:
                null == o
                    ? null
                    : (0, i.jsxs)("div", {
                          className: tV.FO,
                          children: [
                              ep.showModeSwitch ? (0, i.jsx)(e$, { modes: ep.modes, mode: eh, onChange: eg }) : null,
                              (0, i.jsx)(G.A.Icon, {
                                  icon: eM ? tB : tL,
                                  tooltip: eO,
                                  "aria-label": eO,
                                  selected: eM,
                                  onClick: eG,
                              }),
                              (0, i.jsx)(G.A.Icon, {
                                  ref: eI,
                                  icon: ts.A,
                                  tooltip: eE,
                                  "aria-label": eE,
                                  selected: eN,
                                  disabled: eS,
                                  onClick: eP,
                              }),
                              "frame" === eh ? (0, i.jsx)(ev.A, { frame: eD, controlProjectId: o.id }) : null,
                              (0, i.jsx)("div", { className: tV.YJ }),
                              _
                                  ? (0, i.jsx)(G.A.Icon, {
                                        icon: v.BugIcon,
                                        tooltip: Y.intl.string(H.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                        selected: E,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, i.jsx)(G.A.Icon, {
                                  icon: j.SettingsIcon,
                                  tooltip: Y.intl.string(H.default.cWmjzs),
                                  "aria-label": Y.intl.string(H.default.cWmjzs),
                                  onClick: () => (0, e5.A)(o.id, { guildId: m, isPreview: !0 }),
                              }),
                              (0, i.jsx)(tn, {
                                  projectId: o.id,
                                  projectName: o.name,
                                  guildId: m,
                                  projectGuildId: o.guild_id,
                                  isOwner: (0, eo.PV)(o),
                                  canRemix: (0, eo.H_)(o),
                                  onRefresh: (0, tD.x1)(eD) ? eF : void 0,
                                  isRefreshing: eL,
                                  onClose: eH,
                                  onExport: eY,
                                  onImport: eq.open,
                                  onRemix: eU,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = o.id),
                                          void (0, ec.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  a.e("964476"),
                                                  a.e("461590"),
                                              ]).then(a.bind(a, 84469));
                                              return (a) => (0, i.jsx)(t, { ...a, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      T?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (g(!0), P(!1), S(!1), N(!0));
                                            },
                                  onRestorePoints: () => {
                                      (g(!0), P(!1), N(!1), S(!0));
                                  },
                                  refreshApplicationId:
                                      ep.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ep.profileState
                                          ? ey
                                          : null,
                                  previewProjectId: o.id,
                              }),
                              ex
                                  ? null
                                  : (0, i.jsx)(G.A.Icon, { icon: tz, tooltip: ej, "aria-label": ej, onClick: eC }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: tV.nj,
        children: [
            eq.input,
            (0, i.jsx)("main", {
                className: tV.JX,
                children:
                    null == o
                        ? (0, i.jsxs)("div", {
                              className: tV.j5,
                              children: [
                                  e8,
                                  (0, i.jsxs)("div", {
                                      className: tV.sD,
                                      children: [
                                          (0, i.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(H.default.F2dRba),
                                          }),
                                          (0, i.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(H.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(H.default["42EdIV"]),
                                              onClick: () => (0, U.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ef.A,
                              {
                                  projectId: o.id,
                                  designFeedbackToggleRef: eI,
                                  applicationId: o.preview_application_id,
                                  previewApplicationId: o.preview_application_id,
                                  surface: tD.sd,
                                  header: e8,
                                  chatOpen: f,
                                  onCloseChat: eA,
                                  chatHeaderAction: e9,
                                  versionHistoryOpen: A,
                                  onCloseVersionHistory: () => N(!1),
                                  restorePointsOpen: I,
                                  onCloseRestorePoints: () => S(!1),
                                  installScope: o.install_scope,
                                  debugOpen: _ && E,
                                  onCloseDebug: eT,
                                  onRestoreVersion: eR,
                                  restoreState: T,
                                  previewReady: eu,
                                  previewGate: e2,
                                  availability: ep,
                                  activeMode: eh,
                                  widgetApplicationId: ey,
                                  onOpenPublishedApp: eZ,
                              },
                              o.id,
                          ),
            }),
        ],
    });
}
function tY(e) {
    let {
            projects: t,
            idea: n,
            guildId: s,
            submitting: r,
            createError: d,
            createDisabled: c,
            conjureTarget: m,
            onConjureTargetChange: p,
            eligibleGuilds: h,
            modelSettings: f,
            onModelSettingsChange: g,
            onSelectProject: v,
            onIdeaChange: j,
            onCreate: C,
            onStartTemplate: R,
            onSubmitTemplate: M,
            onCancelTemplate: O,
            onSkipTemplate: D,
            onImportNewProject: V,
            importing: z,
        } = e,
        [B, F] = l.useState(() => ({ guildId: s, filter: tP(s) })),
        X = (B.guildId === s ? B.filter : tP(s)) ?? s,
        W = l.useCallback(
            (e) => {
                (tE.set(s, e), F({ guildId: s, filter: e }));
            },
            [s],
        ),
        K = (0, u.yK)(
            [L.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = L.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, s),
            [t, s],
        ),
        Z = l.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Y.intl.string(H.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tI,
                    leading: eF.UserIcon,
                    label: Y.intl.string(H.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tS,
                    leading: eH.R,
                    label: Y.intl.string(H.default["qqH+iN"]),
                },
                ...K.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, i.jsx)(tA.Ay, { guild: e, size: tA.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [K],
        ),
        Q = (0, u.yK)(
            [eo.Ay, L.A],
            () => {
                let e = t_(X);
                if (null != e) return eo.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(L.A.getGuilds()))
                    eo.Ay.hasFetchedGuildProjects(e.id) && t.push(...eo.Ay.getSharedProjects(e.id));
                return t;
            },
            [X],
        );
    l.useEffect(() => {
        let e = t_(X);
        null == e || eo.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [X]);
    let J = l.useMemo(
            () =>
                Q.filter((e) => tT(e, X)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Q, X],
        ),
        et = l.useMemo(
            () => [
                {
                    label: Y.intl.string(H.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tN,
                            label: Y.intl.string(H.default.UXnPhI),
                            leading: eF.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, i.jsx)(tA.Ay, { guild: e, size: tA.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        ea = l.useMemo(
            () =>
                t
                    .filter((e) => tT(e, X))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, X],
        ),
        en = l.useCallback(
            (e) => {
                "user" === e.install_scope || (0, ee.X0)(e, s)
                    ? v(e.id)
                    : (0, b.P0)((0, w.o)(Y.intl.string(H.default["wY7I+H"]), k.Ck.MESSAGE));
            },
            [s, v],
        ),
        ei = Y.intl.string(H.default.TU9IGR),
        el = [
            Y.intl.string(H.default["E+Q26x"]),
            Y.intl.string(H.default["06/jqP"]),
            Y.intl.string(H.default["3gSfUa"]),
        ],
        es = [
            {
                id: "moderation-bot",
                name: Y.intl.string(H.default.idRAwG),
                description: Y.intl.string(H.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: Y.intl.string(H.default.BLDsiz),
                description: Y.intl.string(H.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: Y.intl.string(H.default["+abXa8"]),
                description: Y.intl.string(H.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: Y.intl.string(H.default.ieAgex),
                description: Y.intl.string(H.default["5yvj+f"]),
            },
        ],
        er = l.useCallback(
            (e) => {
                var t, n;
                null != e.wizard
                    ? ((t = {
                          template: e,
                          guildId: s,
                          eligibleGuilds: h,
                          onStart: (t) => R(e.name, t),
                          onSubmit: M,
                          onCancel: O,
                          onSkip: D,
                      }),
                      (0, ec.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                  a.bind(a, 248702),
                              );
                              return (a) => (0, i.jsx)(e, { ...a, ...t });
                          },
                          { modalKey: "VibegrationsTemplateWizardModal" },
                      ))
                    : C(((n = e.name), Y.intl.formatToPlainString(H.default["9D9L0S"], { templateName: n })));
            },
            [h, s, O, C, D, R, M],
        ),
        ed = Y.intl.string(H.default.FYK2xQ),
        eu = Y.intl.string(H.default["/SUK82"]),
        em = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || C());
            },
            [c, C],
        ),
        ep = t_(X) ?? s,
        ef = (0, u.bG)([eo.Ay], () => eo.Ay.getGuildProjectsFetchState(ep), [ep]),
        ey = (0, u.bG)([eo.Ay], () => eo.Ay.getGuildProjectsFetchState(s), [s]),
        [eb, ev] = l.useState(tO),
        ej = l.useMemo(() => tR.w.get(tG(s)) ?? !1, [s]),
        eC = "success" === ey,
        eA = (0, u.yK)([eo.Ay], () => eo.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => tT(e, s)),
        eN = eb ?? (!!eA || "error" === ey || (!eC && ej));
    l.useEffect(() => {
        eC && tR.w.set(tG(s), eA);
    }, [eC, eA, s]);
    let eI = l.useCallback((e) => {
            (tR.w.set(tM, e), ev(e));
        }, []),
        eS = l.useCallback(() => eI(!eN), [eI, eN]),
        eE = l.useCallback(() => eI(!1), [eI]),
        eP = Y.intl.string(H.default.jDPFDh),
        e_ = eN ? eP : Y.intl.string(H.default.a6d2y1);
    return (0, i.jsx)("div", {
        className: o()(tV.nj, tV.a0),
        children: (0, i.jsxs)("div", {
            className: tV.Yo,
            children: [
                (0, i.jsxs)("main", {
                    className: tV.ps,
                    children: [
                        (0, i.jsx)(tl, {
                            title: Y.intl.string(H.default.Xmvb23),
                            actions: (0, i.jsx)(G.A.Icon, {
                                icon: A.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: eN,
                                onClick: eS,
                            }),
                        }),
                        (0, i.jsx)(N.Ip, {
                            className: tV.Yy,
                            children: (0, i.jsx)("div", {
                                className: tV.Mo,
                                children: (0, i.jsxs)("section", {
                                    className: o()(tV.Qs, tV.Ix),
                                    children: [
                                        (0, i.jsx)(th, {}),
                                        (0, i.jsx)(eT, {}),
                                        (0, i.jsxs)("section", {
                                            className: tV.WI,
                                            "aria-label": ed,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tV.G9,
                                                    children: [
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ed,
                                                        }),
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(ex, {
                                                    listClassName: tV.Aw,
                                                    radius: ew,
                                                    children: es.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tV.EA,
                                                                children: (0, i.jsxs)(eg, {
                                                                    disabled: r,
                                                                    ariaLabel: Y.intl.formatToPlainString(
                                                                        H.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tV.nx, tV.rz),
                                                                    onClick: () => er(e),
                                                                    children: [
                                                                        (0, i.jsx)(y.E, {
                                                                            className: tV.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, i.jsx)(y.E, {
                                                                            className: tV.BK,
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
                                            className: tV.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tV.G9,
                                                    children: [
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(ex, {
                                                    listClassName: tV.Aw,
                                                    radius: ek,
                                                    children: el.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tV.EA,
                                                                children: (0, i.jsx)(eg, {
                                                                    disabled: r,
                                                                    className: tV.nx,
                                                                    onClick: () => C(e),
                                                                    children: (0, i.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tV.un,
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
                                        (0, i.jsx)(eh, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: tV.Yl,
                            children: (0, i.jsxs)("div", {
                                className: o()(tV.Qs, tV.DA),
                                children: [
                                    (0, i.jsx)(I.f, {
                                        label: ei,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: ei,
                                        error: d,
                                        onChange: j,
                                        onKeyDown: em,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tV.VP,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tV.gH,
                                                children: (0, i.jsx)(S.l, {
                                                    selectionMode: "single",
                                                    label: Y.intl.string(H.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: Y.intl.string(H.default.MLg0S8),
                                                    options: et,
                                                    value: m,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, i.jsx)(eU.A, {
                                                settings: f ?? q.v0,
                                                tiers: q.qf,
                                                choices: (0, $.e)()
                                                    ? {
                                                          main: [...q.S8.main, ...q.wF.main],
                                                          subagent: [...q.S8.subagent, ...q.wF.subagent],
                                                          thinking: q.S8.thinking,
                                                      }
                                                    : q.S8,
                                                disabled: r,
                                                onChange: g,
                                            }),
                                            (0, i.jsx)(x.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: Y.intl.string(Y.t.CumH4u),
                                                disabled: c,
                                                loading: r,
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
                    className: tV.pA,
                    hidden: !eN,
                    "aria-label": Y.intl.string(H.default.Bo5fE3),
                    children: [
                        (0, i.jsxs)("div", {
                            className: tV.IR,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tV.RM,
                                    children: Y.intl.string(H.default.Bo5fE3),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tV.Ss,
                                    children: [
                                        (0, i.jsx)(eq, { importing: z, onImport: V }),
                                        (0, i.jsx)(G.A.Icon, { icon: E.P, tooltip: eP, "aria-label": eP, onClick: eE }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(N.Ip, {
                            className: tV.xe,
                            children: [
                                (0, i.jsx)("div", {
                                    className: tV.Vw,
                                    children: (0, i.jsx)(S.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(H.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Z,
                                        value: X,
                                        onSelectionChange: W,
                                    }),
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tV.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === ef || "loading" === ef) && 0 === ea.length
                                    ? (0, i.jsx)("div", { className: tV.E8, children: (0, i.jsx)(P.y, {}) })
                                    : "error" === ef && 0 === ea.length
                                      ? (0, i.jsxs)("div", {
                                            className: tV.E8,
                                            children: [
                                                (0, i.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tV.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, i.jsx)(x.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(ep),
                                                }),
                                            ],
                                        })
                                      : 0 === ea.length
                                        ? (0, i.jsx)("div", {
                                              className: tV.D1,
                                              children: (0, i.jsxs)("div", {
                                                  className: tV.ST,
                                                  children: [
                                                      (0, i.jsx)(_.D, { size: "lg", color: T.A.colors.TEXT_SUBTLE }),
                                                      (0, i.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tV.sI,
                                                          children: Y.intl.string(H.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, i.jsx)("div", {
                                              className: tV.Dq,
                                              children: ea.map((e) =>
                                                  (0, i.jsx)(
                                                      tF,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, tj.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                J.length > 0
                                    ? (0, i.jsxs)("div", {
                                          className: tV.qx,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tV.uc,
                                                  children: [
                                                      (0, i.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Y.intl.string(H.default.jrCnUc),
                                                      }),
                                                      (0, i.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Y.intl.string(H.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: tV.Dq,
                                                  children: J.map((e) =>
                                                      (0, i.jsx)(
                                                          tF,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => en(e),
                                                              onRemix: () => (0, tj.A)(e, s),
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
    });
}
function tq(e) {
    let t,
        { guildId: a, projectId: n } = e,
        s = (0, u.yK)([eo.Ay], () => eo.Ay.getOwnedProjects()),
        o = (0, u.yK)([z.Ay], () => z.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [L.A, B.A],
            () => {
                let e = L.A.getGuild(a);
                return null != e && B.A.can(tc.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, c] = l.useState(""),
        m = n ?? null,
        [p, h] = l.useState(!1),
        [f, g] = l.useState(null),
        y = (0, tC._)("VibegrationsScreen"),
        [x, v] = l.useState(null);
    l.useEffect(() => {
        v(null);
    }, [a]);
    let j = l.useMemo(() => (y.some((e) => e.id === a) ? a : tN), [y, a]),
        C = x ?? j,
        A = C === tN ? "user" : "guild",
        N = C === tN ? a : C,
        [I, S] = l.useState(null);
    (l.useEffect(() => {
        (0, U.hF)(a);
    }, [a, o, r]),
        l.useEffect(() => {
            (0, U.dm)(a, m);
        }, [a, m]));
    let E = l.useCallback(
            async (e, t, a) => {
                let n = await (0, U.gA)({ guild_id: t, install_scope: a });
                ((0, es.Hc)(n),
                    (0, es.r2)(n, I ?? q.v0),
                    (0, es.dv)(n, e),
                    (0, D.pX)(tc.BVt.CHANNEL(t, e4.VV.VIBEGRATIONS, n)),
                    c(""),
                    S(null));
            },
            [I],
        ),
        P = l.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = er({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        await E(t, N, A);
                    } catch (e) {
                        g((0, W.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, N, d, p],
        ),
        _ = l.useCallback(
            async (e, t) => {
                let a = await (0, U.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, es.Hc)(a), (0, es.r2)(a, I ?? q.v0), (0, es.dv)(a, (0, Z.v8)(e)), a);
            },
            [I],
        ),
        T = l.useCallback(async (e, t, a) => {
            if (eo.Ay.getProject(e)?.guild_id !== t) {
                let a = await (0, U.M7)(e, { guild_id: t, preview_guild_id: t });
                if (!a.ok) throw new W.uQ((0, W.hj)(a), a.status);
            }
            ((0, es.dv)(e, a), (0, et.R6)(e), (0, D.pX)(tc.BVt.CHANNEL(t, e4.VV.VIBEGRATIONS, e)), S(null));
        }, []),
        R = l.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        M = l.useCallback(
            (e) => {
                let t = eo.Ay.getProject(e)?.guild_id ?? a;
                ((0, D.pX)(tc.BVt.CHANNEL(t, e4.VV.VIBEGRATIONS, e)), S(null));
            },
            [a],
        ),
        [O, G] = l.useState(!1),
        V = l.useCallback(
            async (e, t) => {
                let n = ez(e);
                if (null != n) return void (0, b.P0)((0, w.o)(n, k.Ck.FAILURE));
                G(!0);
                let i = null;
                try {
                    ((i = await (0, U.gA)({ guild_id: a, install_scope: t })),
                        (0, es.Hc)(i),
                        (0, es.r2)(i, I ?? q.v0),
                        await eV(i, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS, i)),
                        S(null));
                } catch {
                    (null != i && (await (0, U.xx)(i).catch(() => void 0)),
                        (0, b.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), k.Ck.FAILURE)));
                } finally {
                    G(!1);
                }
            },
            [a, I],
        ),
        F = l.useCallback(
            (e) => {
                (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        X = l.useCallback(() => {
            (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS));
        }, [a]),
        K = l.useCallback((e) => {
            (c(e), g(null));
        }, []),
        $ = (0, u.bG)(
            [eo.Ay],
            () => {
                if (null == m) return null;
                let e = eo.Ay.getProject(m);
                return null == e || (0, eo.PV)(e) || e.guild_id === a ? e : null;
            },
            [m, a],
        ),
        Q = (0, u.bG)([eo.Ay], () => eo.Ay.hasFetchedGuildProjects(a), [a]);
    return null != m
        ? (0, i.jsx)(tH, { project: $, projectsLoaded: Q, onBack: X, guildId: a }, m)
        : (0, i.jsx)(tY, {
              projects: s,
              modelSettings: I,
              onModelSettingsChange: S,
              idea: d,
              guildId: a,
              submitting: p,
              createError: f,
              createDisabled: "idea" === (t = er({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: F,
              onIdeaChange: K,
              onCreate: P,
              onStartTemplate: _,
              onSubmitTemplate: T,
              onCancelTemplate: R,
              onSkipTemplate: M,
              onImportNewProject: V,
              importing: O,
              conjureTarget: C,
              onConjureTargetChange: v,
              eligibleGuilds: y,
          });
}
