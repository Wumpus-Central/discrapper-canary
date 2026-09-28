(a.r(t), a.d(t, { default: () => t7 }), a(321073));
var n,
    i = a(477900),
    s = a(582128),
    o = a(503698),
    l = a.n(o),
    r = a(536637),
    d = a.n(r),
    u = a(17928),
    m = a(314116),
    c = a(534890),
    p = a(646270),
    h = a(31300),
    f = a(834730),
    g = a(323384),
    y = a(939249),
    b = a(866665),
    w = a(140735),
    k = a(289873),
    v = a(691540),
    j = a(857250),
    x = a(97483),
    C = a(821609),
    A = a(92446),
    I = a(625903),
    N = a(297264),
    S = a(97893),
    E = a(364522),
    P = a(103557),
    T = a(691885),
    _ = a(789645),
    R = a(152367),
    M = a(661531),
    O = a(627363),
    G = a(625180),
    z = a(672929),
    D = a(742589),
    L = a(976860),
    F = a(885386),
    V = a(696451),
    B = a(71393),
    H = a(576705),
    U = a(486020),
    Y = a(277977),
    q = a(50617),
    K = a(375708),
    X = a(673724),
    W = a(948230),
    Z = a(637708),
    $ = a(936494);
async function Q(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, W.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var J = a(208137),
    ee = a(993396),
    et = a(822835),
    ea = a(287809),
    en = a(427262),
    ei = a(783791),
    es = a(725592),
    eo = a(459514),
    el = a(808728),
    er = a(683180),
    ed = a(66708),
    eu = a(74029),
    em = a(559676),
    ec = a(58551),
    ep = a(805332),
    eh = a(972786);
function ef(e) {
    let { idea: t, installScope: a, submitting: n } = e;
    return n ? "submitting" : "" === t.trim() ? "idea" : null == a ? "scope" : null;
}
var eg = a(58703),
    ey = a(127181),
    eb = a(192308);
function ew() {
    (0, eb.openModalLazy)(
        async () => {
            let { default: e } = await a.e("978132").then(a.bind(a, 75199));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ek = a(413927);
function ev() {
    let e = (0, ey.TH)("desktop");
    if (0 === e.length) return null;
    let t = K.intl.string(q.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: ek.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: ek.bZ,
                children: [
                    (0, i.jsx)(f.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: K.intl.string(q.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: ek.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: ek.S3,
                            children: [
                                (0, i.jsxs)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ek.VO,
                                    children: [
                                        (0, eg.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ey.MZ)(e) ? ` \xb7 ${K.intl.string(q.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, i.jsx)(f.E, {
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
            (0, ey.B)("desktop")
                ? (0, i.jsx)(C.$, {
                      variant: "secondary",
                      size: "sm",
                      text: K.intl.string(q.default.YWxThz),
                      onClick: ew,
                  })
                : null,
        ],
    });
}
var ej = a(874618);
function ex(e) {
    let { className: t, ariaLabel: a, disabled: n, onClick: s, children: o } = e;
    return (0, i.jsx)(y.D, { "aria-disabled": n, "aria-label": a, className: t, onClick: n ? void 0 : s, children: o });
}
var eC = a(865665),
    eA = a(568190);
let eI = { x: 5, y: 7 },
    eN = { x: 5, y: 4 };
function eS(e) {
    let { listClassName: t, radius: a, children: n } = e,
        [o, l] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: eA.n,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        children: [
            (0, i.jsx)("ol", { className: t, children: n }),
            o ? (0, i.jsx)(eC.C, { area: 64, radius: a, color: M.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eE = a(210744),
    eP = a(864970),
    eT = a(707554),
    e_ = a(770178),
    eR = a(765548),
    eM = a(597643),
    eO = a(885576),
    eG = a(236730);
let ez = "heading-xxl/semibold",
    eD = !1;
function eL() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        n = (0, eR.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        o = (0, e_.w)(n, [], { fireOnMount: !0 }),
        l = (0, u.bG)([eM.A], () => eM.A.isConnected());
    s.useEffect(() => {
        if (!l || !t || eD) return;
        let a = !1,
            n = 0;
        function i() {
            a ||
                (n = window.setTimeout(() => {
                    ((eD = !0), e.current?.play());
                }, 400));
        }
        let s = document.fonts;
        return (
            null == s ? i() : s.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(i, i),
            () => {
                ((a = !0), window.clearTimeout(n));
            }
        );
    }, [l, t]);
    let r = (0, u.bG)([eO.A], () => eO.A.isIdle()),
        d = s.useRef(r);
    s.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && eD && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let m = K.intl.string(q.default["2tYpRK"]);
    return (0, i.jsx)("div", {
        ref: o,
        className: eG.x,
        children: t
            ? (0, i.jsx)(eT.H, { children: (0, i.jsx)(eP.o, { ref: e, text: m, variant: ez, delay: null }) })
            : (0, i.jsx)(N.D, { variant: ez, children: m }),
    });
}
var eF = a(922016),
    eV = a(980707),
    eB = a(477782),
    eH = a(81369),
    eU = a(402879);
async function eY(e, t, a) {
    (0, Y.Hc)(e);
    let n = await (0, Y.vX)(e, t);
    (0, Y.dv)(e, a, [n]);
}
function eq(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, X.x5)(e.size, t)
        ? null
        : K.intl.formatToPlainString(q.default.AzziHF, { size: (0, X.ZJ)((0, X.yr)(t)) });
}
async function eK(e, t) {
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
        i = await (0, Y.cS)(e, n);
    await (0, eU.F)(i, n);
}
function eX(e) {
    let t = s.useRef(null),
        a = s.useCallback(
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
var eW = a(950305),
    eZ = a(664121);
let e$ = [
    { value: "user", icon: eW.UserIcon, nameMessage: q.default.iqXIRN },
    { value: "guild", icon: eZ.R, nameMessage: q.default.LdgKdI },
];
function eQ(e) {
    let { importing: t, onImport: a } = e,
        n = s.useRef(null),
        o = eX(s.useCallback((e) => a(e, "user"), [a])),
        l = eX(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: o.open, guild: l.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eF.Y, {
                targetElementRef: n,
                position: "bottom",
                align: "right",
                animation: eF.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(eV.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": K.intl.string(q.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(eB.rX, {
                            label: K.intl.string(q.default.MLg0S8),
                            children: e$
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: K.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        eB.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, a) => {
                    let { isShown: s } = a;
                    return (0, i.jsx)(C.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: eH.H,
                        text: K.intl.string(q.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": s,
                    });
                },
            }),
            o.input,
            l.input,
        ],
    });
}
var eJ = a(379307),
    e0 = a(629584),
    e2 = a(753514),
    e6 = a(491920);
function e1(e) {
    let { modes: t, mode: a, onChange: n, className: o } = e,
        r = s.useMemo(() => t.map((e) => ({ value: e, name: (0, e2.kZ)(e), "aria-controls": (0, e2.z3)(e) })), [t]),
        d = s.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == a
        ? null
        : (0, i.jsx)(e0.I, {
              role: "tablist",
              look: "pill",
              className: l()(e6.b, o),
              optionClassName: e6.u,
              options: r,
              value: a,
              onChange: d,
          });
}
var e9 = a(663417),
    e7 = a(70688),
    e8 = a(173936),
    e3 = a(473935),
    e5 = a(408278),
    e4 = a(365199),
    te = a(7437),
    tt = a(147036),
    ta = a(957565),
    tn = a(123917),
    ti = a(557875);
let ts = new Set();
var to = a(976814),
    tl = a(746080),
    tr = a(793712);
let td = [];
function tu(e) {
    (0, v.P0)((0, j.o)(e, x.Ck.FAILURE));
}
function tm(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: n,
            projectGuildId: o,
            isOwner: l,
            canRemix: r,
            onExport: d,
            onImport: c,
            onRemix: p,
            onConnectTool: h,
            onVersionHistory: f,
            onRestorePoints: g,
            onRefresh: y,
            isRefreshing: w = !1,
            onClose: k,
            refreshApplicationId: C,
            previewProjectId: A,
            trigger: N = "header",
        } = e,
        S = s.useRef(null),
        { pending: E, refresh: P } = (0, te.A)(C ?? null),
        { pending: T, connect: _ } = (function (e, t) {
            let [a, n] = s.useState(ts),
                i = s.useRef(ts),
                o = s.useCallback((e) => {
                    ((i.current = (0, ti.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, ti.K9)(i.current, a.type);
                        async function l() {
                            let n = await (0, Y.JI)(e, a.type);
                            (o(a.type), "url" === n.type)
                                ? (0, tn.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ti.rq)(n.error)
                                          ? K.intl.string(q.default.avu1u4)
                                          : K.intl.string(q.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), l().catch(() => o(a.type)));
                    },
                    [t, e, o],
                ),
            };
        })(A ?? null, tu),
        R = (0, u.bG)([Y.Ay], () => (null == A ? td : Y.Ay.getDeclaredConnections(A))),
        M = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: i } = e,
                s = [];
            for (let { connection: e, offer: o } of (t &&
                s.push({
                    id: "preview-refresh",
                    label: K.intl.string(q.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                s.push(
                    "authorize" === o
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: K.intl.formatToPlainString(q.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: K.intl.formatToPlainString(q.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return s;
        })({
            canRefresh: null != C,
            refreshPending: E,
            offers: s.useMemo(() => (0, ti.Xl)(R), [R]),
            connectPending: T,
        }),
        O = s.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        G = null != p && r,
        z = l && null != c,
        L = G || null != d || z || null != h || null != f || null != g,
        F = ta.p5 && null != n,
        V = ta.p5;
    return null != y || null != k || L || V || l
        ? (0, i.jsx)(eF.Y, {
              targetElementRef: S,
              position: "bottom",
              align: "right",
              animation: eF.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, i.jsxs)(eV.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": K.intl.string(K.t.ogxXGq),
                      onClose: s,
                      onSelect: s,
                      children: [
                          null != y || null != k
                              ? (0, i.jsxs)(eB.rX, {
                                    children: [
                                        null != y
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "refresh",
                                                  icon: e9.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: e9.RefreshIcon },
                                                  label: K.intl.string(q.default.xKexN1),
                                                  disabled: w,
                                                  action: y,
                                              })
                                            : null,
                                        null != k
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "close",
                                                  icon: e7.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: e7.DoorExitIcon },
                                                  label: K.intl.string(q.default.Ea0Wrr),
                                                  action: k,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          M.length > 0
                              ? (0, i.jsx)(eB.rX, {
                                    children: M.map((e) =>
                                        (0, i.jsx)(
                                            eB.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void P();
                                                    let t = null == e.connectionType ? null : O.get(e.connectionType);
                                                    null != t && _(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          L
                              ? (0, i.jsxs)(eB.rX, {
                                    children: [
                                        G
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "remix",
                                                  label: K.intl.string(q.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "export",
                                                  label: K.intl.string(q.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        z
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "import",
                                                  label: K.intl.string(q.default.lf8HqE),
                                                  action: c,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "connect-tool",
                                                  label: K.intl.string(q.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "version-history",
                                                  label: K.intl.string(q.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "restore-points",
                                                  label: K.intl.string(q.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          V
                              ? (0, i.jsxs)(eB.rX, {
                                    children: [
                                        F
                                            ? (0, i.jsx)(eB.Dr, {
                                                  id: "copy-link",
                                                  label: K.intl.string(K.t.WqhZss),
                                                  icon: e8.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: e8.LinkIcon },
                                                  action: () =>
                                                      (0, ta.C)((0, tt.n)(n, tl.VV.VIBEGRATIONS, t), () =>
                                                          (0, v.P0)(
                                                              (0, j.o)(K.intl.string(K.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(eB.Dr, {
                                            id: "copy-project-id",
                                            label: K.intl.string(q.default.b4TqpT),
                                            icon: e3.L,
                                            leadingAccessory: { type: "icon", icon: e3.L },
                                            action: () =>
                                                (0, ta.C)(t, () =>
                                                    (0, v.P0)((0, j.o)(K.intl.string(q.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          l
                              ? (0, i.jsxs)(eB.rX, {
                                    children: [
                                        (0, i.jsx)(eB.Dr, {
                                            id: "settings",
                                            label: K.intl.string(q.default["xhcY+n"]),
                                            icon: I.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: I.SettingsIcon },
                                            action: () =>
                                                (0, to.A)(t, { guildId: o ?? n, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, i.jsx)(eB.Dr, {
                                            id: "delete",
                                            label: K.intl.string(K.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, m.A)({
                                                    title: K.intl.formatToPlainString(q.default.ZokHVz, { name: a }),
                                                    subtitle: K.intl.string(q.default.NmF939),
                                                    confirmText: K.intl.string(K.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, W.K)(t, () =>
                                                            (0, v.P0)(
                                                                (0, j.o)(K.intl.string(q.default.tqKZCi), x.Ck.FAILURE),
                                                            ),
                                                        );
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
                      ref: S,
                      className: tr.h,
                      children:
                          "iconButton" === N
                              ? (0, i.jsx)(b.m, {
                                    text: K.intl.string(K.t["UKOtz+"]),
                                    children: (0, i.jsx)(e5.K, {
                                        icon: e4.MoreHorizontalIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": K.intl.string(K.t["UKOtz+"]),
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        onClick: a,
                                    }),
                                })
                              : (0, i.jsx)(D.A.Icon, {
                                    icon: e4.MoreHorizontalIcon,
                                    tooltip: K.intl.string(K.t["UKOtz+"]),
                                    "aria-label": K.intl.string(K.t["UKOtz+"]),
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
var tc = a(778712),
    tp = a(97808),
    th = a(104171),
    tf = a(889227),
    tg = a(350086);
let ty = tc._3.SIZE_16;
function tb(e) {
    return e instanceof tf.A
        ? (0, i.jsx)(tp.eu, { src: e.getAvatarURL(void 0, (0, tc.FT)(ty)), size: ty, "aria-hidden": !0 })
        : null;
}
function tw(e) {
    let { creator: t, className: a } = e,
        n = [t.creator, ...t.collaborators],
        s = n.length - 3;
    return (0, i.jsxs)("div", {
        className: l()(tg.c, a),
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(th.Ay, { users: n.slice(0, 3), max: 3, size: th.DN.SIZE_16, renderUser: tb }),
            s > 0 ? (0, i.jsxs)(f.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", s] }) : null,
        ],
    });
}
var tk = a(769979);
function tv(e) {
    let { title: t, actions: a, breadcrumb: n } = e;
    return (0, i.jsx)(D.A, {
        hideSearch: !0,
        toolbar: a,
        className: tk.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: tk.QF,
            children: [
                (0, i.jsx)(R.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: M.A.colors.TEXT_STRONG,
                    className: tk.Kk,
                }),
                null != n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(D.A.Title, { onClick: n.onClick, children: n.title }),
                              (0, i.jsx)(D.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(D.A.Title, { className: tk.Qw, wrapperClassName: tk.DD, children: t }),
            ],
        }),
    });
}
var tj = a(73432),
    tx = a(683071),
    tC = a(47167),
    tA = a(994500),
    tI = a(652215);
let tN = "conjuring-help";
var tS = a(107148);
function tE() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: a,
            } = (0, u.cf)([ea.default, B.A, el.Ay, tA.A], () => {
                let e = ea.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of B.A.getGuildsArray()) {
                    if (!t.features.has(tI.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = el.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tC.m1)(t, ea.default, tA.A) === tN;
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
        t = s.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, L.pX)(tI.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tn.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, i.jsx)("div", {
              className: tS.l,
              children: (0, i.jsx)(tx.w, {
                  type: "info",
                  iconAlign: "center",
                  children: K.intl.format(q.default["4BsHmp"], { channel: tN, onNavigate: t }),
              }),
          });
}
var tP = a(321593),
    tT = a(580954),
    t_ = a(227189),
    tR = a(189213),
    tM = (((n = {}).NO_PREVIEW = "no-preview"), (n.PERMISSIONS = "permissions"), n);
function tO(e) {
    let { reason: t, transitionState: a, onClose: n } = e,
        s = t === tM.PERMISSIONS;
    return (0, i.jsx)(tR.a, {
        transitionState: a,
        onClose: n,
        title: K.intl.string(s ? q.default.Rtlv25 : q.default["+UouPe"]),
        subtitle: K.intl.string(s ? q.default["nDQB/b"] : q.default["E0QD++"]),
        size: "sm",
        actions: [{ text: K.intl.string(s ? K.t.BddRzS : q.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function tG(e) {
    (0, eb.openModal)((t) => (0, i.jsx)(tO, { ...t, reason: e }));
}
var tz = a(480007),
    tD = a(584936),
    tL = a(548118);
let tF = "user",
    tV = "user",
    tB = "no-server",
    tH = new Map();
function tU(e) {
    return tH.get(e) ?? null;
}
function tY(e) {
    switch (e) {
        case "all":
        case tV:
        case tB:
            return null;
        default:
            return e;
    }
}
function tq(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tV:
            return "user" === e.install_scope;
        case tB:
            return null == (0, Z.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tK = a(506774);
let tX = "VibegrationsProjectsPanelOpen";
function tW() {
    return tK.w.get(tX) ?? null;
}
function tZ(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var t$ = a(165610),
    tQ = a(352978);
function tJ(e) {
    return (0, i.jsx)(c.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function t0(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function t2(e) {
    return (0, i.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function t6(e) {
    var t;
    let a,
        n,
        o,
        r,
        c,
        p,
        h,
        C,
        A,
        I,
        { project: N, guildId: S, onSelect: E, onRemix: P, shared: T = !1 } = e,
        _ =
            ((a = N.id),
            (n = N.name),
            (o = s.useRef(!1)),
            (r = s.useCallback(() => {
                o.current ||
                    ((o.current = !0),
                    (0, v.P0)((0, j.o)(K.intl.formatToPlainString(q.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    eK(a, n)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", a, e),
                                (0, v.P0)(
                                    (0, j.o)(
                                        409 === (t = e instanceof Y._v ? e.status : null)
                                            ? K.intl.string(q.default.uB40Hz)
                                            : 404 === t
                                              ? K.intl.string(q.default.wCq2jC)
                                              : K.intl.string(q.default.G2GqyP),
                                        x.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            o.current = !1;
                        }));
            }, [a, n])),
            {
                onExport: r,
                onImport: (c = eX(
                    s.useCallback(
                        (e) => {
                            let t = eq(e);
                            null != t
                                ? (0, v.P0)((0, j.o)(t, x.Ck.FAILURE))
                                : (0, m.A)({
                                      title: K.intl.formatToPlainString(q.default.XYZqZK, { name: n }),
                                      subtitle: K.intl.string(q.default["6syXoH"]),
                                      confirmText: K.intl.string(q.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, L.pX)(tI.BVt.CHANNEL(S, tl.VV.VIBEGRATIONS, a));
                                          try {
                                              await eY(a, e, K.intl.string(q.default.C7GU2r));
                                          } catch {
                                              (0, v.P0)((0, j.o)(K.intl.string(q.default["02GpNr"]), x.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [a, n, S],
                    ),
                )).open,
                importInput: c.input,
            }),
        R = N.preview_application_id ?? N.application_id,
        { data: M } = (0, O.YY)(R),
        G = M?.icon == null ? null : U.Ay.getApplicationIconURL({ id: R, icon: M.icon, size: 40 }),
        z =
            null == N.updated_at
                ? null
                : K.intl.formatToPlainString(q.default.oMDaqr, { time: d()(N.updated_at).fromNow() }),
        D = (0, Z.HC)(N),
        F =
            (0, u.bG)([B.A], () => (null == D ? null : (B.A.getGuild(D)?.name ?? null)), [D]) ??
            K.intl.string(q.default["qqH+iN"]),
        V = (0, u.bG)([eh.Ay], () => eh.Ay.isProjectDeleting(N.id), [N.id]),
        H =
            ((t = T ? N : null),
            (p = t?.id),
            (h = t?.owner_user_id),
            (C = (0, u.yK)(
                [ei.Ay],
                () =>
                    null == p
                        ? []
                        : [
                              ...new Set(
                                  ei.Ay.getMessages(p)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [p, h],
            )),
            s.useEffect(() => {
                null != h && ((0, es.Y)(h), C.forEach(es.Y));
            }, [h, C]),
            (A = (0, u.bG)([ea.default], () => (null == h ? null : ea.default.getUser(h)), [h])),
            (I = (0, u.yK)([ea.default], () => C.map((e) => ea.default.getUser(e)).filter((e) => null != e), [C])),
            s.useMemo(
                () =>
                    null == A
                        ? null
                        : {
                              creator: A,
                              collaborators: I,
                              label: (function (e, t) {
                                  let a;
                                  return 0 === t.length
                                      ? K.intl.formatToPlainString(q.default.TwgkQe, { creator: e })
                                      : K.intl.formatToPlainString(q.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (a = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === a
                                                      ? K.intl.formatToPlainString(K.t["8s9z8P"], { first: t[0] })
                                                      : 2 === a
                                                        ? K.intl.formatToPlainString(K.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === a
                                                          ? K.intl.formatToPlainString(K.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : K.intl.formatToPlainString(K.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: a - 3,
                                                            }),
                                        });
                              })(
                                  (0, en.mG)(A),
                                  I.map((e) => (0, en.mG)(e)),
                              ),
                          },
                [A, I],
            )),
        X = s.useId(),
        W = (0, i.jsx)(f.E, { variant: "text-md/semibold", color: "text-strong", className: tQ.j1, children: N.name }),
        $ =
            null == G
                ? (0, i.jsx)("div", {
                      className: tQ.a8,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(g.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, i.jsx)("img", { alt: "", src: G, className: tQ.VJ });
    return (0, i.jsxs)("div", {
        className: l()(tQ.OY, { [tQ.Wy]: V }),
        "aria-busy": V,
        children: [
            (0, i.jsx)(tP.Ay, { projectId: N.id }),
            (0, i.jsxs)(y.D, {
                className: tQ.W6,
                onClick: V ? void 0 : E,
                tabIndex: V ? -1 : void 0,
                "aria-describedby": null != H ? X : void 0,
                children: [
                    $,
                    (0, i.jsxs)("div", {
                        className: tQ.MM,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tQ.Ub,
                                children: [
                                    null != H ? (0, i.jsx)(b.m, { text: H.label, ariaHidden: !0, children: W }) : W,
                                    null == H || V ? null : (0, i.jsx)(tw, { creator: H, className: tQ.rb }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tQ.h3,
                                children: [
                                    (0, i.jsx)(f.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tQ.Wb,
                                        children: V ? K.intl.string(q.default.EwXXks) : F,
                                    }),
                                    null == z || V
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: tQ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, i.jsx)(f.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tQ.zM,
                                                      children: z,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != H ? (0, i.jsx)(w.A, { id: X, children: H.label }) : null,
            (0, i.jsx)("div", {
                className: tQ.M2,
                children: V
                    ? (0, i.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, i.jsxs)("div", {
                          className: tQ.Pl,
                          children: [
                              (0, i.jsx)(tm, {
                                  projectId: N.id,
                                  projectName: N.name,
                                  guildId: S,
                                  projectGuildId: N.guild_id,
                                  isOwner: (0, eh.PV)(N),
                                  canRemix: (0, eh.H_)(N),
                                  onRemix: P,
                                  onExport: _.onExport,
                                  onImport: _.onImport,
                                  trigger: "iconButton",
                              }),
                              _.importInput,
                          ],
                      }),
            }),
        ],
    });
}
function t1(e) {
    var t, n, o;
    let { project: l, projectsLoaded: r, onBack: d, guildId: c } = e,
        [p, h] = s.useState(!1),
        [g, y] = s.useState(!0),
        [b, w] = s.useState(!1),
        [k, S] = s.useState(!1),
        [E, P] = s.useState(!1),
        T = F.Q_.useSetting(),
        [_, R] = s.useState(null),
        [M, V] = s.useState(null),
        B = l?.id ?? null,
        H = s.useRef(B),
        U = s.useRef(!0),
        X = s.useRef(!1),
        Z = s.useRef(null);
    ((H.current = B),
        s.useEffect(
            () => (
                (U.current = !0),
                () => {
                    U.current = !1;
                }
            ),
            [],
        ));
    let $ = (0, u.bG)([eh.Ay], () => (null == B ? null : eh.Ay.getIntegrationStatus(B)), [B]),
        { data: J, isLoading: ee } = (0, O.YY)(l?.preview_application_id ?? void 0),
        ea = null != B && M !== B,
        en = $?.preview_ready === !0,
        ei = $?.has_activity === !0,
        {
            availability: es,
            activeMode: eo,
            setMode: ed,
            widgetApplicationId: ef,
        } = (0, et.q)({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: ei,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: $?.owner_authorization_revoked === !0,
        }),
        eg = (0, ec.Qg)({
            installScope: l?.install_scope ?? null,
            previewReady: en,
            integrationInstalled: $?.integration_installed ?? null,
            botPermissionsChanged: $?.bot_permissions_changed === !0,
        }),
        ey = p || ea || ee,
        ew = K.intl.string(q.default["5gU57O"]),
        ek = g && !E && !b && !k,
        ev = K.intl.string(ek ? q.default.YdgE0j : q.default.aWVf4j),
        ex = s.useCallback(() => {
            if (E || b || k) {
                (P(!1), w(!1), S(!1), y(!0));
                return;
            }
            y((e) => !e);
        }, [E, b, k]),
        eC = s.useCallback(() => y(!1), []),
        { active: eA } = (0, eu.Q_)(B),
        eI = s.useRef(null),
        eN = (0, em.o4)(B),
        eS = K.intl.string(eN ? q.default.bfQ4Ki : eA ? q.default.rfNEHn : q.default.lXcEa2),
        eP = s.useCallback(() => {
            if (null != B) {
                if (eA) return void (0, eu.PS)(B);
                (P(!1), w(!1), S(!1), y(!0), (0, eu.nI)(B));
            }
        }, [B, eA]),
        eT = s.useCallback(() => {
            P((e) => !e && (y(!0), w(!1), S(!1), !0));
        }, []),
        e_ = s.useCallback(() => P(!1), []),
        eR = s.useCallback(
            (e) => {
                if (null == l || X.current) return;
                let t = l.id;
                function a() {
                    return U.current && H.current === t;
                }
                ((X.current = !0),
                    w(!1),
                    y(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, Y.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && R({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (R({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, v.P0)((0, j.o)(K.intl.string(q.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (X.current = !1);
                        }));
            },
            [l],
        ),
        eM = (0, u.bG)([ep.A], () => ep.A.isBuilderPreviewMobile()),
        eO = K.intl.string(eM ? q.default["3uCc8U"] : q.default["+nzCxZ"]),
        eG = s.useCallback(() => (0, W.GG)(!eM), [eM]),
        ez = (0, z.A)(l?.preview_application_id ?? null, t$.sd),
        eD = (0, t$.x1)(ez) && ez.data.proxyTicketRefreshing,
        eL = s.useCallback(() => {
            null == ez || eD || G.A.refreshProxyTicket(ez.id);
        }, [ez, eD]),
        eF = s.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = ez?.id), (0, Y.Bn)(e), (0, tT.A)().leaveFrame(t)), d());
        }, [l, ez?.id, d]),
        eV = s.useCallback(() => {
            null != l && (y(!0), (0, Y.dv)(l.id, K.intl.string(q.default["2ejwtJ"])));
        }, [l]),
        eB = eX(
            s.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        a = eq(e);
                    null != a
                        ? (0, v.P0)((0, j.o)(a, x.Ck.FAILURE))
                        : (0, m.A)({
                              title: K.intl.formatToPlainString(q.default.XYZqZK, { name: l.name }),
                              subtitle: K.intl.string(q.default["6syXoH"]),
                              confirmText: K.intl.string(q.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  y(!0);
                                  try {
                                      await eY(t, e, K.intl.string(q.default.C7GU2r));
                                  } catch {
                                      (0, v.P0)((0, j.o)(K.intl.string(q.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eH = s.useCallback(() => {
            null != l && (0, tD.A)(l, c);
        }, [l, c]),
        eU = s.useCallback(async () => {
            if (null == B || H.current !== B) return;
            Z.current?.abort();
            let e = new AbortController();
            ((Z.current = e), V(null));
            try {
                await (0, W.U1)(B, e.signal);
            } catch {
            } finally {
                e.signal.aborted || Z.current !== e || H.current !== B || V(B);
            }
        }, [B]);
    s.useEffect(
        () => (
            eU(),
            () => {
                (Z.current?.abort(), (Z.current = null));
            }
        ),
        [eU],
    );
    let eK =
            ((t = l ?? null), (n = $ ?? null), n?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : c),
        eW = ((o = l?.application_id ?? null), (0, u.bG)([el.Ay], () => (null == o ? null : (0, er.SH)(c, o)), [c, o])),
        eZ = s.useMemo(() => (null == eW ? null : () => (0, L.pX)(tI.BVt.CHANNEL(c, eW))), [c, eW]),
        e$ = s.useCallback(async () => {
            null != l && (await Q(l, eK));
        }, [eK, l]),
        eQ = s.useCallback(async () => {
            try {
                await e$();
            } catch {}
            await eU();
        }, [eU, e$]),
        eJ = s.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || ee || ea
                ? null
                : {
                      ...(0, t_.p)({ applicationId: e, application: J ?? null, guildId: eK }),
                      onClose: () => {
                          eQ();
                      },
                  };
        }, [ea, eQ, eK, ee, J, l?.preview_application_id]),
        e0 = eg ? { type: "permissions", authorizeProps: eJ } : ea && null == $ ? { type: "checking" } : void 0,
        e2 = (0, u.bG)([eh.Ay], () => null != B && eh.Ay.isProjectDeleting(B), [B]);
    s.useEffect(() => {
        ((null == l && r) || e2) && (0, L.pX)(tI.BVt.CHANNEL(c, tl.VV.VIBEGRATIONS));
    }, [c, l, r, e2]);
    let e6 = s.useCallback((e) => {
            h(!0);
            let t = (0, Y.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(K.intl.string(q.default.fNP6Cd));
                (0, W.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, v.P0)(
                            (0, j.o)(e instanceof Error ? e.message : K.intl.string(q.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => h(!1)),
                t
            );
        }, []),
        e9 = s.useCallback(() => {
            if (null == l) return;
            if (!en) return void tG(tM.NO_PREVIEW);
            if (eg) return void tG(tM.PERMISSIONS);
            if ("user" === l.install_scope)
                return void e6(l.id)
                    .then(() => {
                        (0, v.P0)((0, j.o)(K.intl.string(q.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, Y.$C)(l.id);
            (e.catch(() => {}),
                (0, tz.A)({
                    projectId: l.id,
                    guildId: c,
                    applicationId: l.application_id,
                    projectName: l.name,
                    publish: e6(l.id),
                    initialDraft: e,
                }));
        }, [c, eg, en, l, e6]),
        e7 =
            null != l && (0, eh.jf)(l)
                ? (0, i.jsx)(C.$, { size: "sm", variant: "primary", loading: p, disabled: ey, onClick: e9, text: ew })
                : null,
        e8 = (0, i.jsx)(tv, {
            title: l?.name ?? K.intl.string(q.default.F2dRba),
            breadcrumb: { title: K.intl.string(q.default.Xmvb23), onClick: d },
            actions:
                null == l
                    ? null
                    : (0, i.jsxs)("div", {
                          className: tQ.FO,
                          children: [
                              es.showModeSwitch ? (0, i.jsx)(e1, { modes: es.modes, mode: eo, onChange: ed }) : null,
                              (0, i.jsx)(D.A.Icon, {
                                  icon: eM ? t2 : t0,
                                  tooltip: eO,
                                  "aria-label": eO,
                                  selected: eM,
                                  onClick: eG,
                              }),
                              (0, i.jsx)(D.A.Icon, {
                                  ref: eI,
                                  icon: tj.A,
                                  tooltip: eS,
                                  "aria-label": eS,
                                  selected: eA,
                                  disabled: eN,
                                  onClick: eP,
                              }),
                              "frame" === eo ? (0, i.jsx)(eE.A, { frame: ez, controlProjectId: l.id }) : null,
                              (0, i.jsx)("div", { className: tQ.YJ }),
                              T
                                  ? (0, i.jsx)(D.A.Icon, {
                                        icon: A.BugIcon,
                                        tooltip: K.intl.string(q.default["8MLfBT"]),
                                        "aria-label": K.intl.string(q.default["8MLfBT"]),
                                        selected: E,
                                        onClick: eT,
                                    })
                                  : null,
                              (0, i.jsx)(D.A.Icon, {
                                  icon: I.SettingsIcon,
                                  tooltip: K.intl.string(q.default.cWmjzs),
                                  "aria-label": K.intl.string(q.default.cWmjzs),
                                  onClick: () => (0, to.A)(l.id, { guildId: c, isPreview: !0 }),
                              }),
                              (0, i.jsx)(tm, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: c,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, eh.PV)(l),
                                  canRemix: (0, eh.H_)(l),
                                  onRefresh: (0, t$.x1)(ez) ? eL : void 0,
                                  isRefreshing: eD,
                                  onClose: eF,
                                  onExport: eV,
                                  onImport: eB.open,
                                  onRemix: eH,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, eb.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  a.e("964476"),
                                                  a.e("461590"),
                                              ]).then(a.bind(a, 84469));
                                              return (a) => (0, i.jsx)(t, { ...a, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      _?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (y(!0), P(!1), S(!1), w(!0));
                                            },
                                  onRestorePoints: () => {
                                      (y(!0), P(!1), w(!1), S(!0));
                                  },
                                  refreshApplicationId:
                                      es.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== es.profileState
                                          ? ef
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              ek
                                  ? null
                                  : (0, i.jsx)(D.A.Icon, { icon: tJ, tooltip: ev, "aria-label": ev, onClick: ex }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: tQ.nj,
        children: [
            eB.input,
            (0, i.jsx)("main", {
                className: tQ.JX,
                children:
                    null == l
                        ? (0, i.jsxs)("div", {
                              className: tQ.j5,
                              children: [
                                  e8,
                                  (0, i.jsxs)("div", {
                                      className: tQ.sD,
                                      children: [
                                          (0, i.jsx)(N.D, {
                                              variant: "heading-lg/semibold",
                                              children: K.intl.string(q.default.F2dRba),
                                          }),
                                          (0, i.jsx)(f.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: K.intl.string(q.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: K.intl.string(q.default["42EdIV"]),
                                              onClick: () => (0, W.hF)(c),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ej.A,
                              {
                                  projectId: l.id,
                                  designFeedbackToggleRef: eI,
                                  applicationId: l.preview_application_id,
                                  previewApplicationId: l.preview_application_id,
                                  surface: t$.sd,
                                  header: e8,
                                  chatOpen: g,
                                  onCloseChat: eC,
                                  chatHeaderAction: e7,
                                  versionHistoryOpen: b,
                                  onCloseVersionHistory: () => w(!1),
                                  restorePointsOpen: k,
                                  onCloseRestorePoints: () => S(!1),
                                  installScope: l.install_scope,
                                  debugOpen: T && E,
                                  onCloseDebug: e_,
                                  onRestoreVersion: eR,
                                  restoreState: _,
                                  previewReady: en,
                                  previewGate: e0,
                                  availability: es,
                                  activeMode: eo,
                                  widgetApplicationId: ef,
                                  onOpenPublishedApp: eZ,
                              },
                              l.id,
                          ),
            }),
        ],
    });
}
function t9(e) {
    let {
            projects: t,
            idea: n,
            guildId: o,
            submitting: r,
            createError: d,
            createDisabled: m,
            conjureTarget: c,
            onConjureTargetChange: p,
            eligibleGuilds: h,
            modelSettings: g,
            onModelSettingsChange: y,
            onSelectProject: b,
            onIdeaChange: w,
            onCreate: A,
            onCreateFromTemplate: I,
            onStartTemplate: N,
            onSubmitTemplate: O,
            onCancelTemplate: G,
            onSkipTemplate: z,
            onImportNewProject: L,
            importing: F,
        } = e,
        [V, H] = s.useState(() => ({ guildId: o, filter: tU(o) })),
        U = (V.guildId === o ? V.filter : tU(o)) ?? o,
        Y = s.useCallback(
            (e) => {
                (tH.set(o, e), H({ guildId: o, filter: e }));
            },
            [o],
        ),
        Z = (0, u.yK)(
            [B.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = B.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, o),
            [t, o],
        ),
        $ = s.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: R.D, label: K.intl.string(q.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tV,
                    leading: eW.UserIcon,
                    label: K.intl.string(q.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tB,
                    leading: eZ.R,
                    label: K.intl.string(q.default["qqH+iN"]),
                },
                ...Z.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, i.jsx)(tL.Ay, { guild: e, size: tL.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [Z],
        ),
        Q = (0, u.yK)(
            [eh.Ay, B.A],
            () => {
                let e = tY(U);
                if (null != e) return eh.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(B.A.getGuilds()))
                    eh.Ay.hasFetchedGuildProjects(e.id) && t.push(...eh.Ay.getSharedProjects(e.id));
                return t;
            },
            [U],
        );
    s.useEffect(() => {
        let e = tY(U);
        null == e || eh.Ay.hasFetchedGuildProjects(e) || (0, W.hF)(e);
    }, [U]);
    let ee = s.useMemo(
            () =>
                Q.filter((e) => tq(e, U)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Q, U],
        ),
        et = s.useMemo(
            () => [
                {
                    label: K.intl.string(q.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tF,
                            label: K.intl.string(q.default.UXnPhI),
                            leading: eW.UserIcon,
                        },
                        ...h.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, i.jsx)(tL.Ay, { guild: e, size: tL.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [h],
        ),
        ea = s.useMemo(
            () =>
                t
                    .filter((e) => tq(e, U))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, U],
        ),
        en = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, er.X0)(e, o)
                    ? b(e.id)
                    : (0, v.P0)((0, j.o)(K.intl.string(q.default["wY7I+H"]), x.Ck.MESSAGE));
            },
            [o, b],
        ),
        ei = K.intl.string(q.default.TU9IGR),
        es = [
            K.intl.string(q.default["E+Q26x"]),
            K.intl.string(q.default["06/jqP"]),
            K.intl.string(q.default["3gSfUa"]),
        ],
        eo = [
            {
                id: "moderation-bot",
                name: K.intl.string(q.default.idRAwG),
                description: K.intl.string(q.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: K.intl.string(q.default.BLDsiz),
                description: K.intl.string(q.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: K.intl.string(q.default["+abXa8"]),
                description: K.intl.string(q.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: K.intl.string(q.default.ieAgex),
                description: K.intl.string(q.default["5yvj+f"]),
            },
        ],
        el = s.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: o,
                        eligibleGuilds: h,
                        onStart: (t) => N(e.name, t),
                        onSubmit: (t, a, n) => O(e, t, a, n),
                        onCancel: G,
                        onSkip: z,
                    }),
                    (0, eb.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                a.bind(a, 248702),
                            );
                            return (a) => (0, i.jsx)(e, { ...a, ...t });
                        },
                        { modalKey: "VibegrationsTemplateWizardModal" },
                    ));
                }
                I(e);
            },
            [h, o, G, I, z, N, O],
        ),
        ed = K.intl.string(q.default.FYK2xQ),
        eu = K.intl.string(q.default["/SUK82"]),
        em = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), m || A());
            },
            [m, A],
        ),
        ec = tY(U) ?? o,
        ep = (0, u.bG)([eh.Ay], () => eh.Ay.getGuildProjectsFetchState(ec), [ec]),
        ef = (0, u.bG)([eh.Ay], () => eh.Ay.getGuildProjectsFetchState(o), [o]),
        [eg, ey] = s.useState(tW),
        ew = s.useMemo(() => tK.w.get(tZ(o)) ?? !1, [o]),
        ek = "success" === ef,
        ej = (0, u.yK)([eh.Ay], () => eh.Ay.getSharedProjects(o), [o]).length > 0 || t.some((e) => tq(e, o)),
        eC = eg ?? (!!ej || "error" === ef || (!ek && ew));
    s.useEffect(() => {
        ek && tK.w.set(tZ(o), ej);
    }, [ek, ej, o]);
    let eA = s.useCallback((e) => {
            (tK.w.set(tX, e), ey(e));
        }, []),
        eE = s.useCallback(() => eA(!eC), [eA, eC]),
        eP = s.useCallback(() => eA(!1), [eA]),
        eT = K.intl.string(q.default.jDPFDh),
        e_ = eC ? eT : K.intl.string(q.default.a6d2y1);
    return (0, i.jsx)("div", {
        className: l()(tQ.nj, tQ.a0),
        children: (0, i.jsxs)("div", {
            className: tQ.Yo,
            children: [
                (0, i.jsxs)("main", {
                    className: tQ.ps,
                    children: [
                        (0, i.jsx)(tv, {
                            title: K.intl.string(q.default.Xmvb23),
                            actions: (0, i.jsx)(D.A.Icon, {
                                icon: S.Z,
                                tooltip: e_,
                                "aria-label": e_,
                                selected: eC,
                                onClick: eE,
                            }),
                        }),
                        (0, i.jsx)(E.Ip, {
                            className: tQ.Yy,
                            children: (0, i.jsx)("div", {
                                className: tQ.Mo,
                                children: (0, i.jsxs)("section", {
                                    className: l()(tQ.Qs, tQ.Ix),
                                    children: [
                                        (0, i.jsx)(tE, {}),
                                        (0, i.jsx)(eL, {}),
                                        (0, i.jsxs)("section", {
                                            className: tQ.WI,
                                            "aria-label": ed,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tQ.G9,
                                                    children: [
                                                        (0, i.jsx)(f.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ed,
                                                        }),
                                                        (0, i.jsx)(f.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: K.intl.string(q.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(eS, {
                                                    listClassName: tQ.Aw,
                                                    radius: eI,
                                                    children: eo.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tQ.EA,
                                                                children: (0, i.jsxs)(ex, {
                                                                    disabled: r,
                                                                    ariaLabel: K.intl.formatToPlainString(
                                                                        q.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: l()(tQ.nx, tQ.rz),
                                                                    onClick: () => el(e),
                                                                    children: [
                                                                        (0, i.jsx)(f.E, {
                                                                            className: tQ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, i.jsx)(f.E, {
                                                                            className: tQ.BK,
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
                                            className: tQ.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tQ.G9,
                                                    children: [
                                                        (0, i.jsx)(f.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, i.jsx)(f.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: K.intl.string(q.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(eS, {
                                                    listClassName: tQ.Aw,
                                                    radius: eN,
                                                    children: es.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tQ.EA,
                                                                children: (0, i.jsx)(ex, {
                                                                    disabled: r,
                                                                    className: tQ.nx,
                                                                    onClick: () => A(e),
                                                                    children: (0, i.jsx)(f.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tQ.un,
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
                                        (0, i.jsx)(ev, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: tQ.Yl,
                            children: (0, i.jsxs)("div", {
                                className: l()(tQ.Qs, tQ.DA),
                                children: [
                                    (0, i.jsx)(P.f, {
                                        label: ei,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: ei,
                                        error: d,
                                        onChange: w,
                                        onKeyDown: em,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tQ.VP,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tQ.gH,
                                                children: (0, i.jsx)(T.l, {
                                                    selectionMode: "single",
                                                    label: K.intl.string(q.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: K.intl.string(q.default.MLg0S8),
                                                    options: et,
                                                    value: c,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, i.jsx)(eJ.A, {
                                                settings: g ?? X.v0,
                                                tiers: X.qf,
                                                choices: (0, J.e)()
                                                    ? {
                                                          main: [...X.S8.main, ...X.wF.main],
                                                          subagent: [...X.S8.subagent, ...X.wF.subagent],
                                                          thinking: X.S8.thinking,
                                                      }
                                                    : X.S8,
                                                disabled: r,
                                                onChange: y,
                                            }),
                                            (0, i.jsx)(C.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: K.intl.string(K.t.CumH4u),
                                                disabled: m,
                                                loading: r,
                                                onClick: () => A(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("aside", {
                    className: tQ.pA,
                    hidden: !eC,
                    "aria-label": K.intl.string(q.default.Bo5fE3),
                    children: [
                        (0, i.jsxs)("div", {
                            className: tQ.IR,
                            children: [
                                (0, i.jsx)(f.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tQ.RM,
                                    children: K.intl.string(q.default.Bo5fE3),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tQ.Ss,
                                    children: [
                                        (0, i.jsx)(eQ, { importing: F, onImport: L }),
                                        (0, i.jsx)(D.A.Icon, { icon: _.P, tooltip: eT, "aria-label": eT, onClick: eP }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(E.Ip, {
                            className: tQ.xe,
                            children: [
                                (0, i.jsx)("div", {
                                    className: tQ.Vw,
                                    children: (0, i.jsx)(T.l, {
                                        selectionMode: "single",
                                        label: K.intl.string(q.default.mvtKAm),
                                        hideLabel: !0,
                                        options: $,
                                        value: U,
                                        onSelectionChange: Y,
                                    }),
                                }),
                                (0, i.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tQ.wE,
                                    children: K.intl.string(q.default.YnAFtT),
                                }),
                                ("unattempted" === ep || "loading" === ep) && 0 === ea.length
                                    ? (0, i.jsx)("div", { className: tQ.E8, children: (0, i.jsx)(k.y, {}) })
                                    : "error" === ep && 0 === ea.length
                                      ? (0, i.jsxs)("div", {
                                            className: tQ.E8,
                                            children: [
                                                (0, i.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tQ.JS,
                                                    children: K.intl.string(q.default["IN/HRP"]),
                                                }),
                                                (0, i.jsx)(C.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: K.intl.string(q.default["42EdIV"]),
                                                    onClick: () => (0, W.hF)(ec),
                                                }),
                                            ],
                                        })
                                      : 0 === ea.length
                                        ? (0, i.jsx)("div", {
                                              className: tQ.D1,
                                              children: (0, i.jsxs)("div", {
                                                  className: tQ.ST,
                                                  children: [
                                                      (0, i.jsx)(R.D, { size: "lg", color: M.A.colors.TEXT_SUBTLE }),
                                                      (0, i.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tQ.sI,
                                                          children: K.intl.string(q.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, i.jsx)("div", {
                                              className: tQ.Dq,
                                              children: ea.map((e) =>
                                                  (0, i.jsx)(
                                                      t6,
                                                      {
                                                          project: e,
                                                          guildId: o,
                                                          onSelect: () => en(e),
                                                          onRemix: () => (0, tD.A)(e, o),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                ee.length > 0
                                    ? (0, i.jsxs)("div", {
                                          className: tQ.qx,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tQ.uc,
                                                  children: [
                                                      (0, i.jsx)(f.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: K.intl.string(q.default.jrCnUc),
                                                      }),
                                                      (0, i.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: K.intl.string(q.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: tQ.Dq,
                                                  children: ee.map((e) =>
                                                      (0, i.jsx)(
                                                          t6,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => en(e),
                                                              onRemix: () => (0, tD.A)(e, o),
                                                              shared: !0,
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
function t7(e) {
    let t,
        { guildId: a, projectId: n } = e,
        o = (0, u.yK)([eh.Ay], () => eh.Ay.getOwnedProjects()),
        l = (0, u.yK)([V.Ay], () => V.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [B.A, H.A],
            () => {
                let e = B.A.getGuild(a);
                return null != e && H.A.can(tI.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, m] = s.useState(""),
        c = n ?? null,
        [p, h] = s.useState(!1),
        [f, g] = s.useState(null),
        y = (0, eo._)("VibegrationsScreen"),
        [b, w] = s.useState(null);
    s.useEffect(() => {
        w(null);
    }, [a]);
    let k = s.useMemo(() => (y.some((e) => e.id === a) ? a : tF), [y, a]),
        C = b ?? k,
        A = C === tF ? "user" : "guild",
        I = C === tF ? a : C,
        [N, S] = s.useState(null);
    (s.useEffect(() => {
        (0, W.hF)(a);
    }, [a, l, r]),
        s.useEffect(() => {
            (0, W.dm)(a, c);
        }, [a, c]));
    let E = s.useCallback(
            async (e, t, a) => {
                let n = await (0, W.gA)({ guild_id: t, install_scope: a });
                ((0, Y.Hc)(n),
                    (0, Y.r2)(n, N ?? X.v0),
                    e(n),
                    (0, L.pX)(tI.BVt.CHANNEL(t, tl.VV.VIBEGRATIONS, n)),
                    m(""),
                    S(null));
            },
            [N],
        ),
        P = s.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = ef({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && m(e), h(!0), g(null));
                    try {
                        await E((e) => (0, Y.dv)(e, t), I, A);
                    } catch (e) {
                        g((0, $.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, I, d, p],
        ),
        T = s.useCallback(
            async (e) => {
                if (!p) {
                    (h(!0), g(null));
                    try {
                        await E(
                            (t) => {
                                var a;
                                (0, Y.dv)(
                                    t,
                                    ((a = e.name),
                                    K.intl.formatToPlainString(q.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            I,
                            A,
                        );
                    } catch (e) {
                        g((0, $.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, I, p],
        ),
        _ = s.useCallback(
            async (e, t) => {
                let a = await (0, W.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, Y.Hc)(a), (0, Y.r2)(a, N ?? X.v0), (0, Y.dv)(a, (0, ee.v8)(e)), a);
            },
            [N],
        ),
        R = s.useCallback(async (e, t, a, n) => {
            if (eh.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, W.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new $.uQ((0, $.hj)(e), e.status);
            }
            ((0, Y.dv)(t, n, void 0, { templateId: e.id }),
                (0, ed.R6)(t),
                (0, L.pX)(tI.BVt.CHANNEL(a, tl.VV.VIBEGRATIONS, t)),
                S(null));
        }, []),
        M = s.useCallback((e) => {
            (0, W.xx)(e).catch(() => void 0);
        }, []),
        O = s.useCallback(
            (e) => {
                let t = eh.Ay.getProject(e)?.guild_id ?? a;
                ((0, L.pX)(tI.BVt.CHANNEL(t, tl.VV.VIBEGRATIONS, e)), S(null));
            },
            [a],
        ),
        [G, z] = s.useState(!1),
        D = s.useCallback(
            async (e, t) => {
                let n = eq(e);
                if (null != n) return void (0, v.P0)((0, j.o)(n, x.Ck.FAILURE));
                z(!0);
                let i = null;
                try {
                    ((i = await (0, W.gA)({ guild_id: a, install_scope: t })),
                        (0, Y.Hc)(i),
                        (0, Y.r2)(i, N ?? X.v0),
                        await eY(i, e, K.intl.string(q.default.KjEtrZ)),
                        (0, L.pX)(tI.BVt.CHANNEL(a, tl.VV.VIBEGRATIONS, i)),
                        S(null));
                } catch {
                    (null != i && (await (0, W.xx)(i).catch(() => void 0)),
                        (0, v.P0)((0, j.o)(K.intl.string(q.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [a, N],
        ),
        F = s.useCallback(
            (e) => {
                (0, L.pX)(tI.BVt.CHANNEL(a, tl.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        U = s.useCallback(() => {
            (0, L.pX)(tI.BVt.CHANNEL(a, tl.VV.VIBEGRATIONS));
        }, [a]),
        Z = s.useCallback((e) => {
            (m(e), g(null));
        }, []),
        Q = (0, u.bG)(
            [eh.Ay],
            () => {
                if (null == c) return null;
                let e = eh.Ay.getProject(c);
                return null == e || (0, eh.PV)(e) || e.guild_id === a ? e : null;
            },
            [c, a],
        ),
        J = (0, u.bG)([eh.Ay], () => eh.Ay.hasFetchedGuildProjects(a), [a]);
    return null != c
        ? (0, i.jsx)(t1, { project: Q, projectsLoaded: J, onBack: U, guildId: a }, c)
        : (0, i.jsx)(t9, {
              projects: o,
              modelSettings: N,
              onModelSettingsChange: S,
              idea: d,
              guildId: a,
              submitting: p,
              createError: f,
              createDisabled: "idea" === (t = ef({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: F,
              onIdeaChange: Z,
              onCreate: P,
              onCreateFromTemplate: T,
              onStartTemplate: _,
              onSubmitTemplate: R,
              onCancelTemplate: M,
              onSkipTemplate: O,
              onImportNewProject: D,
              importing: G,
              conjureTarget: C,
              onConjureTargetChange: w,
              eligibleGuilds: y,
          });
}
