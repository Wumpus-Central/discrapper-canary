(a.r(t), a.d(t, { default: () => tq }), a(321073));
var n,
    i = a(477900),
    s = a(582128),
    l = a(503698),
    o = a.n(l),
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
    b = a(289873),
    w = a(691540),
    k = a(857250),
    v = a(97483),
    x = a(821609),
    j = a(92446),
    C = a(625903),
    A = a(297264),
    I = a(97893),
    N = a(364522),
    S = a(103557),
    E = a(691885),
    P = a(789645),
    _ = a(152367),
    T = a(661531),
    R = a(627363),
    M = a(625180),
    O = a(672929),
    G = a(742589),
    D = a(976860),
    L = a(885386),
    V = a(696451),
    z = a(71393),
    F = a(576705),
    B = a(486020),
    H = a(277977),
    X = a(50617),
    q = a(375708),
    U = a(673724),
    Y = a(948230),
    W = a(637708),
    K = a(936494);
async function $(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, Y.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var Z = a(208137),
    Q = a(993396),
    J = a(822835),
    ee = a(808728),
    et = a(683180),
    ea = a(66708),
    en = a(74029),
    ei = a(559676),
    es = a(58551),
    el = a(805332),
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
    let t = q.intl.string(X.default.x07mpp);
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
                        children: q.intl.string(X.default.h5CwHI),
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
                                        (0, eu.MZ)(e) ? ` \xb7 ${q.intl.string(X.default.vvxuUI)}` : null,
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
                      text: q.intl.string(X.default.YWxThz),
                      onClick: em,
                  })
                : null,
        ],
    });
}
var ef = a(285272);
function eg(e) {
    let { className: t, ariaLabel: a, disabled: n, onClick: s, children: l } = e;
    return (0, i.jsx)(f.D, { "aria-disabled": n, "aria-label": a, className: t, onClick: n ? void 0 : s, children: l });
}
var ey = a(865665),
    eb = a(568190);
let ew = { x: 5, y: 7 },
    ek = { x: 5, y: 4 };
function ev(e) {
    let { listClassName: t, radius: a, children: n } = e,
        [l, o] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: eb.n,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, i.jsx)("ol", { className: t, children: n }),
            l ? (0, i.jsx)(ey.C, { area: 64, radius: a, color: T.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ex = a(210744),
    ej = a(864970),
    eC = a(707554),
    eA = a(770178),
    eI = a(765548),
    eN = a(597643),
    eS = a(885576),
    eE = a(236730);
let eP = "heading-xxl/semibold",
    e_ = !1;
function eT() {
    let e = s.useRef(null),
        [t, a] = s.useState(!0),
        n = (0, eI.A)((e) => {
            a(e.target.clientWidth >= 500);
        }),
        l = (0, eA.w)(n, [], { fireOnMount: !0 }),
        o = (0, u.bG)([eN.A], () => eN.A.isConnected());
    s.useEffect(() => {
        if (!o || !t || e_) return;
        let a = !1,
            n = 0;
        function i() {
            a ||
                (n = window.setTimeout(() => {
                    ((e_ = !0), e.current?.play());
                }, 400));
        }
        let s = document.fonts;
        return (
            null == s ? i() : s.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(i, i),
            () => {
                ((a = !0), window.clearTimeout(n));
            }
        );
    }, [o, t]);
    let r = (0, u.bG)([eS.A], () => eS.A.isIdle()),
        d = s.useRef(r);
    s.useEffect(() => {
        let t = d.current && !r;
        ((d.current = r), t && e_ && (e.current?.stop(), e.current?.play()));
    }, [r]);
    let c = q.intl.string(X.default["2tYpRK"]);
    return (0, i.jsx)("div", {
        ref: l,
        className: eE.x,
        children: t
            ? (0, i.jsx)(eC.H, { children: (0, i.jsx)(ej.o, { ref: e, text: c, variant: eP, delay: null }) })
            : (0, i.jsx)(A.D, { variant: eP, children: c }),
    });
}
var eR = a(922016),
    eM = a(980707),
    eO = a(477782),
    eG = a(81369),
    eD = a(402879);
async function eL(e, t, a) {
    (0, H.Hc)(e);
    let n = await (0, H.vX)(e, t);
    (0, H.dv)(e, a, [n]);
}
function eV(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, U.x5)(e.size, t)
        ? null
        : q.intl.formatToPlainString(X.default.AzziHF, { size: (0, U.ZJ)((0, U.yr)(t)) });
}
async function ez(e, t) {
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
        i = await (0, H.cS)(e, n);
    await (0, eD.F)(i, n);
}
function eF(e) {
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
var eB = a(950305),
    eH = a(664121);
let eX = [
    { value: "user", icon: eB.UserIcon, nameMessage: X.default.iqXIRN },
    { value: "guild", icon: eH.R, nameMessage: X.default.LdgKdI },
];
function eq(e) {
    let { importing: t, onImport: a } = e,
        n = s.useRef(null),
        l = eF(s.useCallback((e) => a(e, "user"), [a])),
        o = eF(s.useCallback((e) => a(e, "guild"), [a])),
        r = { user: l.open, guild: o.open };
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
                        "aria-label": q.intl.string(X.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(eO.rX, {
                            label: q.intl.string(X.default.MLg0S8),
                            children: eX
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: q.intl.string(e.nameMessage),
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
                    let { isShown: s } = a;
                    return (0, i.jsx)(x.$, {
                        ...e,
                        buttonRef: n,
                        variant: "secondary",
                        size: "sm",
                        icon: eG.H,
                        text: q.intl.string(X.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": s,
                    });
                },
            }),
            l.input,
            o.input,
        ],
    });
}
var eU = a(379307),
    eY = a(629584),
    eW = a(753514),
    eK = a(491920);
function e$(e) {
    let { modes: t, mode: a, onChange: n, className: l } = e,
        r = s.useMemo(() => t.map((e) => ({ value: e, name: (0, eW.kZ)(e), "aria-controls": (0, eW.z3)(e) })), [t]),
        d = s.useCallback(
            (e) => {
                n(e.value);
            },
            [n],
        );
    return null == a
        ? null
        : (0, i.jsx)(eY.I, {
              role: "tablist",
              look: "pill",
              className: o()(eK.b, l),
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
    e6 = a(7437),
    e1 = a(147036),
    e9 = a(957565),
    e8 = a(123917),
    e7 = a(557875);
let e3 = new Set();
var e5 = a(976814),
    e4 = a(746080),
    te = a(793712);
let tt = [];
function ta(e) {
    (0, w.P0)((0, k.o)(e, v.Ck.FAILURE));
}
function tn(e) {
    let {
            projectId: t,
            projectName: a,
            guildId: n,
            projectGuildId: l,
            isOwner: o,
            canRemix: r,
            onExport: d,
            onImport: m,
            onRemix: p,
            onConnectTool: h,
            onVersionHistory: f,
            onRestorePoints: g,
            onRefresh: y,
            isRefreshing: b = !1,
            onClose: x,
            refreshApplicationId: j,
            previewProjectId: A,
        } = e,
        I = s.useRef(null),
        { pending: N, refresh: S } = (0, e6.A)(j ?? null),
        { pending: E, connect: P } = (function (e, t) {
            let [a, n] = s.useState(e3),
                i = s.useRef(e3),
                l = s.useCallback((e) => {
                    ((i.current = (0, e7.Q6)(i.current, e)), n(i.current));
                }, []);
            return {
                pending: a,
                connect: s.useCallback(
                    (a) => {
                        if (null == e) return;
                        let s = (0, e7.K9)(i.current, a.type);
                        async function o() {
                            let n = await (0, H.JI)(e, a.type);
                            (l(a.type), "url" === n.type)
                                ? (0, e8.h)({ href: n.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e7.rq)(n.error)
                                          ? q.intl.string(X.default.avu1u4)
                                          : q.intl.string(X.default["5fwOcF"]),
                                  );
                        }
                        null != s && ((i.current = s), n(s), o().catch(() => l(a.type)));
                    },
                    [t, e, l],
                ),
            };
        })(A ?? null, ta),
        _ = (0, u.bG)([H.Ay], () => (null == A ? tt : H.Ay.getDeclaredConnections(A))),
        T = (function (e) {
            let { canRefresh: t, refreshPending: a, offers: n, connectPending: i } = e,
                s = [];
            for (let { connection: e, offer: l } of (t &&
                s.push({
                    id: "preview-refresh",
                    label: q.intl.string(X.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: a,
                }),
            n))
                s.push(
                    "authorize" === l
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: q.intl.formatToPlainString(X.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: i.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: q.intl.formatToPlainString(X.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return s;
        })({
            canRefresh: null != j,
            refreshPending: N,
            offers: s.useMemo(() => (0, e7.Xl)(_), [_]),
            connectPending: E,
        }),
        R = s.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        M = null != p && r,
        O = o && null != m,
        D = M || null != d || O || null != h || null != f || null != g,
        L = e9.p5 && null != n,
        V = e9.p5;
    return null != y || null != x || D || V || o
        ? (0, i.jsx)(eR.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: eR.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, i.jsxs)(eM.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": q.intl.string(q.t.ogxXGq),
                      onClose: s,
                      onSelect: s,
                      children: [
                          null != y || null != x
                              ? (0, i.jsxs)(eO.rX, {
                                    children: [
                                        null != y
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "refresh",
                                                  icon: eZ.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eZ.RefreshIcon },
                                                  label: q.intl.string(X.default.xKexN1),
                                                  disabled: b,
                                                  action: y,
                                              })
                                            : null,
                                        null != x
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "close",
                                                  icon: eQ.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eQ.DoorExitIcon },
                                                  label: q.intl.string(X.default.Ea0Wrr),
                                                  action: x,
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
                                                  label: q.intl.string(X.default.vPI794),
                                                  action: p,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "export",
                                                  label: q.intl.string(X.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "import",
                                                  label: q.intl.string(X.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "connect-tool",
                                                  label: q.intl.string(X.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "version-history",
                                                  label: q.intl.string(X.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "restore-points",
                                                  label: q.intl.string(X.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          V
                              ? (0, i.jsxs)(eO.rX, {
                                    children: [
                                        L
                                            ? (0, i.jsx)(eO.Dr, {
                                                  id: "copy-link",
                                                  label: q.intl.string(q.t.WqhZss),
                                                  icon: eJ.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eJ.LinkIcon },
                                                  action: () =>
                                                      (0, e9.C)((0, e1.n)(n, e4.VV.VIBEGRATIONS, t), () =>
                                                          (0, w.P0)(
                                                              (0, k.o)(q.intl.string(q.t["L/PwZf"]), v.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(eO.Dr, {
                                            id: "copy-project-id",
                                            label: q.intl.string(X.default.b4TqpT),
                                            icon: e0.L,
                                            leadingAccessory: { type: "icon", icon: e0.L },
                                            action: () =>
                                                (0, e9.C)(t, () =>
                                                    (0, w.P0)((0, k.o)(q.intl.string(X.default.WOKsTg), v.Ck.SUCCESS)),
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
                                            label: q.intl.string(X.default["xhcY+n"]),
                                            icon: C.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: C.SettingsIcon },
                                            action: () =>
                                                (0, e5.A)(t, { guildId: l ?? n, initialTab: "project", isPreview: !0 }),
                                        }),
                                        (0, i.jsx)(eO.Dr, {
                                            id: "delete",
                                            label: q.intl.string(q.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: q.intl.formatToPlainString(X.default.ZokHVz, { name: a }),
                                                    subtitle: q.intl.string(X.default.NmF939),
                                                    confirmText: q.intl.string(q.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: () => {
                                                        (0, Y.K)(t, () =>
                                                            (0, w.P0)(
                                                                (0, k.o)(q.intl.string(X.default.tqKZCi), v.Ck.FAILURE),
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
                      ref: I,
                      className: te.h,
                      children: (0, i.jsx)(G.A.Icon, {
                          icon: e2.MoreHorizontalIcon,
                          tooltip: q.intl.string(q.t["UKOtz+"]),
                          "aria-label": q.intl.string(q.t["UKOtz+"]),
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
function ts(e) {
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
var tl = a(73432),
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
            } = (0, u.cf)([tu.default, z.A, ee.Ay, td.A], () => {
                let e = tu.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of z.A.getGuildsArray()) {
                    if (!t.features.has(tc.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let a = ee.Ay.getSelectableChannels(t.id).find((e) => {
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
        t = s.useCallback(() => {
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
                  children: q.intl.format(X.default["4BsHmp"], { channel: tm, onNavigate: t }),
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
        s = t === tw.PERMISSIONS;
    return (0, i.jsx)(tb.a, {
        transitionState: a,
        onClose: n,
        title: q.intl.string(s ? X.default.Rtlv25 : X.default["+UouPe"]),
        subtitle: q.intl.string(s ? X.default["nDQB/b"] : X.default["E0QD++"]),
        size: "sm",
        actions: [{ text: q.intl.string(s ? q.t.BddRzS : X.default["+Zh4FA"]), variant: "primary", onClick: n }],
    });
}
function tv(e) {
    (0, ec.openModal)((t) => (0, i.jsx)(tk, { ...t, reason: e }));
}
var tx = a(480007),
    tj = a(584936),
    tC = a(536820),
    tA = a(548118);
let tI = "user",
    tN = "user",
    tS = "no-server",
    tE = new Map();
function tP(e) {
    return tE.get(e) ?? null;
}
function t_(e) {
    switch (e) {
        case "all":
        case tN:
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
        case tN:
            return "user" === e.install_scope;
        case tS:
            return null == (0, W.HC)(e);
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
    tL = a(352978);
function tV(e) {
    return (0, i.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tz(e) {
    return (0, i.jsx)(p.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tF(e) {
    return (0, i.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tB(e) {
    let t,
        a,
        n,
        l,
        r,
        { project: m, guildId: p, onSelect: h, onRemix: x } = e,
        j =
            ((t = m.id),
            (a = m.name),
            (n = s.useRef(!1)),
            (l = s.useCallback(() => {
                n.current ||
                    ((n.current = !0),
                    (0, w.P0)((0, k.o)(q.intl.formatToPlainString(X.default.u9TapG, { name: a }), v.Ck.MESSAGE)),
                    ez(t, a)
                        .catch((e) => {
                            let a;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, w.P0)(
                                    (0, k.o)(
                                        409 === (a = e instanceof H._v ? e.status : null)
                                            ? q.intl.string(X.default.uB40Hz)
                                            : 404 === a
                                              ? q.intl.string(X.default.wCq2jC)
                                              : q.intl.string(X.default.G2GqyP),
                                        v.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            n.current = !1;
                        }));
            }, [t, a])),
            {
                onExport: l,
                onImport: (r = eF(
                    s.useCallback(
                        (e) => {
                            let n = eV(e);
                            null != n
                                ? (0, w.P0)((0, k.o)(n, v.Ck.FAILURE))
                                : (0, c.A)({
                                      title: q.intl.formatToPlainString(X.default.XYZqZK, { name: a }),
                                      subtitle: q.intl.string(X.default["6syXoH"]),
                                      confirmText: q.intl.string(X.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(tc.BVt.CHANNEL(p, e4.VV.VIBEGRATIONS, t));
                                          try {
                                              await eL(t, e, q.intl.string(X.default.C7GU2r));
                                          } catch {
                                              (0, w.P0)((0, k.o)(q.intl.string(X.default["02GpNr"]), v.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, a, p],
                    ),
                )).open,
                importInput: r.input,
            }),
        C = m.preview_application_id ?? m.application_id,
        { data: A } = (0, R.YY)(C),
        I = A?.icon == null ? null : B.Ay.getApplicationIconURL({ id: C, icon: A.icon, size: 40 }),
        N =
            null == m.updated_at
                ? null
                : q.intl.formatToPlainString(X.default.oMDaqr, { time: d()(m.updated_at).fromNow() }),
        S = (0, W.HC)(m),
        E =
            (0, u.bG)([z.A], () => (null == S ? null : (z.A.getGuild(S)?.name ?? null)), [S]) ??
            q.intl.string(X.default["qqH+iN"]),
        P = (0, u.bG)([eo.Ay], () => eo.Ay.isProjectDeleting(m.id), [m.id]);
    return (0, i.jsxs)("div", {
        className: o()(tL.OY, { [tL.Wy]: P }),
        "aria-busy": P,
        children: [
            (0, i.jsx)(tf.Ay, { projectId: m.id }),
            (0, i.jsxs)(f.D, {
                className: tL.W6,
                onClick: P ? void 0 : h,
                tabIndex: P ? -1 : void 0,
                children: [
                    null == I
                        ? (0, i.jsx)("div", {
                              className: tL.a8,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, i.jsx)("img", { alt: "", src: I, className: tL.VJ }),
                    (0, i.jsxs)("div", {
                        className: tL.MM,
                        children: [
                            (0, i.jsx)(y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tL.j1,
                                children: m.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: tL.h3,
                                children: [
                                    (0, i.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tL.Wb,
                                        children: P ? q.intl.string(X.default.EwXXks) : E,
                                    }),
                                    null == N || P
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: tL.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, i.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tL.zM,
                                                      children: N,
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
                className: tL.M2,
                children: P
                    ? (0, i.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, i.jsxs)("div", {
                          className: tL.Pl,
                          children: [
                              (0, i.jsx)(tn, {
                                  projectId: m.id,
                                  projectName: m.name,
                                  guildId: p,
                                  projectGuildId: m.guild_id,
                                  isOwner: (0, eo.PV)(m),
                                  canRemix: (0, eo.H_)(m),
                                  onRemix: x,
                                  onExport: j.onExport,
                                  onImport: j.onImport,
                              }),
                              j.importInput,
                          ],
                      }),
            }),
        ],
    });
}
function tH(e) {
    var t, n, l;
    let { project: o, projectsLoaded: r, onBack: d, guildId: m } = e,
        [p, h] = s.useState(!1),
        [f, g] = s.useState(!0),
        [b, I] = s.useState(!1),
        [N, S] = s.useState(!1),
        [E, P] = s.useState(!1),
        _ = L.Q_.useSetting(),
        [T, V] = s.useState(null),
        [z, F] = s.useState(null),
        B = o?.id ?? null,
        U = s.useRef(B),
        W = s.useRef(!0),
        K = s.useRef(!1),
        Z = s.useRef(null);
    ((U.current = B),
        s.useEffect(
            () => (
                (W.current = !0),
                () => {
                    W.current = !1;
                }
            ),
            [],
        ));
    let Q = (0, u.bG)([eo.Ay], () => (null == B ? null : eo.Ay.getIntegrationStatus(B)), [B]),
        { data: ea, isLoading: er } = (0, R.YY)(o?.preview_application_id ?? void 0),
        ed = null != B && z !== B,
        eu = Q?.preview_ready === !0,
        em = Q?.has_activity === !0,
        {
            availability: ep,
            activeMode: eh,
            setMode: eg,
            widgetApplicationId: ey,
        } = (0, J.q)({
            applicationId: o?.preview_application_id ?? null,
            previewApplicationId: o?.preview_application_id ?? null,
            declaredActivity: em,
            installScope: o?.install_scope ?? null,
            ownerAuthorizationRevoked: Q?.owner_authorization_revoked === !0,
        }),
        eb = (0, es.Qg)({
            installScope: o?.install_scope ?? null,
            previewReady: eu,
            integrationInstalled: Q?.integration_installed ?? null,
            botPermissionsChanged: Q?.bot_permissions_changed === !0,
        }),
        ew = p || ed || er,
        ek = q.intl.string(X.default["5gU57O"]),
        ev = f && !E && !b && !N,
        ej = q.intl.string(ev ? X.default.YdgE0j : X.default.aWVf4j),
        eC = s.useCallback(() => {
            if (E || b || N) {
                (P(!1), I(!1), S(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [E, b, N]),
        eA = s.useCallback(() => g(!1), []),
        { active: eI } = (0, en.Q_)(B),
        eN = s.useRef(null),
        eS = (0, ei.o4)(B),
        eE = q.intl.string(eS ? X.default.bfQ4Ki : eI ? X.default.rfNEHn : X.default.lXcEa2),
        eP = s.useCallback(() => {
            if (null != B) {
                if (eI) return void (0, en.PS)(B);
                (P(!1), I(!1), S(!1), g(!0), (0, en.nI)(B));
            }
        }, [B, eI]),
        e_ = s.useCallback(() => {
            P((e) => !e && (g(!0), I(!1), S(!1), !0));
        }, []),
        eT = s.useCallback(() => P(!1), []),
        eR = s.useCallback(
            (e) => {
                if (null == o || K.current) return;
                let t = o.id;
                function a() {
                    return W.current && U.current === t;
                }
                ((K.current = !0),
                    I(!1),
                    g(!0),
                    V({ entry: e, status: "restoring" }),
                    (0, H.oB)(t, e.sha)
                        .then(
                            () => {
                                a() && V({ entry: e, status: "restored" });
                            },
                            (n) => {
                                a() &&
                                    (V({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, n),
                                    (0, w.P0)((0, k.o)(q.intl.string(X.default.q6iZ84), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            a() && (K.current = !1);
                        }));
            },
            [o],
        ),
        eM = (0, u.bG)([el.A], () => el.A.isBuilderPreviewMobile()),
        eO = q.intl.string(eM ? X.default["3uCc8U"] : X.default["+nzCxZ"]),
        eG = s.useCallback(() => (0, Y.GG)(!eM), [eM]),
        eD = (0, O.A)(o?.preview_application_id ?? null, tD.sd),
        ez = (0, tD.x1)(eD) && eD.data.proxyTicketRefreshing,
        eB = s.useCallback(() => {
            null == eD || ez || M.A.refreshProxyTicket(eD.id);
        }, [eD, ez]),
        eH = s.useCallback(() => {
            var e, t;
            (null != o && ((e = o.id), (t = eD?.id), (0, H.Bn)(e), (0, tg.A)().leaveFrame(t)), d());
        }, [o, eD?.id, d]),
        eX = s.useCallback(() => {
            null != o && (g(!0), (0, H.dv)(o.id, q.intl.string(X.default["2ejwtJ"])));
        }, [o]),
        eq = eF(
            s.useCallback(
                (e) => {
                    if (null == o) return;
                    let t = o.id,
                        a = eV(e);
                    null != a
                        ? (0, w.P0)((0, k.o)(a, v.Ck.FAILURE))
                        : (0, c.A)({
                              title: q.intl.formatToPlainString(X.default.XYZqZK, { name: o.name }),
                              subtitle: q.intl.string(X.default["6syXoH"]),
                              confirmText: q.intl.string(X.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  g(!0);
                                  try {
                                      await eL(t, e, q.intl.string(X.default.C7GU2r));
                                  } catch {
                                      (0, w.P0)((0, k.o)(q.intl.string(X.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [o],
            ),
        ),
        eU = s.useCallback(() => {
            null != o && (0, tj.A)(o, m);
        }, [o, m]),
        eY = s.useCallback(async () => {
            if (null == B || U.current !== B) return;
            Z.current?.abort();
            let e = new AbortController();
            ((Z.current = e), F(null));
            try {
                await (0, Y.U1)(B, e.signal);
            } catch {
            } finally {
                e.signal.aborted || Z.current !== e || U.current !== B || F(B);
            }
        }, [B]);
    s.useEffect(
        () => (
            eY(),
            () => {
                (Z.current?.abort(), (Z.current = null));
            }
        ),
        [eY],
    );
    let eW =
            ((t = o ?? null), (n = Q ?? null), n?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : m),
        eK = ((l = o?.application_id ?? null), (0, u.bG)([ee.Ay], () => (null == l ? null : (0, et.SH)(m, l)), [m, l])),
        eZ = s.useMemo(() => (null == eK ? null : () => (0, D.pX)(tc.BVt.CHANNEL(m, eK))), [m, eK]),
        eQ = s.useCallback(async () => {
            null != o && (await $(o, eW));
        }, [eW, o]),
        eJ = s.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eY();
        }, [eY, eQ]),
        e0 = s.useMemo(() => {
            let e = o?.preview_application_id;
            return null == e || er || ed
                ? null
                : {
                      ...(0, ty.p)({ applicationId: e, application: ea ?? null, guildId: eW }),
                      onClose: () => {
                          eJ();
                      },
                  };
        }, [ed, eJ, eW, er, ea, o?.preview_application_id]),
        e2 = eb ? { type: "permissions", authorizeProps: e0 } : ed && null == Q ? { type: "checking" } : void 0,
        e6 = (0, u.bG)([eo.Ay], () => null != B && eo.Ay.isProjectDeleting(B), [B]);
    s.useEffect(() => {
        ((null == o && r) || e6) && (0, D.pX)(tc.BVt.CHANNEL(m, e4.VV.VIBEGRATIONS));
    }, [m, o, r, e6]);
    let e1 = s.useCallback((e) => {
            h(!0);
            let t = (0, H.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(q.intl.string(X.default.fNP6Cd));
                (0, Y.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, w.P0)(
                            (0, k.o)(e instanceof Error ? e.message : q.intl.string(X.default.fNP6Cd), v.Ck.FAILURE),
                        );
                    })
                    .finally(() => h(!1)),
                t
            );
        }, []),
        e9 = s.useCallback(() => {
            if (null == o) return;
            if (!eu) return void tv(tw.NO_PREVIEW);
            if (eb) return void tv(tw.PERMISSIONS);
            if ("user" === o.install_scope)
                return void e1(o.id)
                    .then(() => {
                        (0, w.P0)((0, k.o)(q.intl.string(X.default.wA0o0L), v.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, H.$C)(o.id);
            (e.catch(() => {}),
                (0, tx.A)({
                    projectId: o.id,
                    guildId: m,
                    applicationId: o.application_id,
                    projectName: o.name,
                    publish: e1(o.id),
                    initialDraft: e,
                }));
        }, [m, eb, eu, o, e1]),
        e8 =
            null != o && (0, eo.jf)(o)
                ? (0, i.jsx)(x.$, { size: "sm", variant: "primary", loading: p, disabled: ew, onClick: e9, text: ek })
                : null,
        e7 = (0, i.jsx)(ts, {
            title: o?.name ?? q.intl.string(X.default.F2dRba),
            breadcrumb: { title: q.intl.string(X.default.Xmvb23), onClick: d },
            actions:
                null == o
                    ? null
                    : (0, i.jsxs)("div", {
                          className: tL.FO,
                          children: [
                              ep.showModeSwitch ? (0, i.jsx)(e$, { modes: ep.modes, mode: eh, onChange: eg }) : null,
                              (0, i.jsx)(G.A.Icon, {
                                  icon: eM ? tF : tz,
                                  tooltip: eO,
                                  "aria-label": eO,
                                  selected: eM,
                                  onClick: eG,
                              }),
                              (0, i.jsx)(G.A.Icon, {
                                  ref: eN,
                                  icon: tl.A,
                                  tooltip: eE,
                                  "aria-label": eE,
                                  selected: eI,
                                  disabled: eS,
                                  onClick: eP,
                              }),
                              "frame" === eh ? (0, i.jsx)(ex.A, { frame: eD, controlProjectId: o.id }) : null,
                              (0, i.jsx)("div", { className: tL.YJ }),
                              _
                                  ? (0, i.jsx)(G.A.Icon, {
                                        icon: j.BugIcon,
                                        tooltip: q.intl.string(X.default["8MLfBT"]),
                                        "aria-label": q.intl.string(X.default["8MLfBT"]),
                                        selected: E,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, i.jsx)(G.A.Icon, {
                                  icon: C.SettingsIcon,
                                  tooltip: q.intl.string(X.default.cWmjzs),
                                  "aria-label": q.intl.string(X.default.cWmjzs),
                                  onClick: () => (0, e5.A)(o.id, { guildId: m, isPreview: !0 }),
                              }),
                              (0, i.jsx)(tn, {
                                  projectId: o.id,
                                  projectName: o.name,
                                  guildId: m,
                                  projectGuildId: o.guild_id,
                                  isOwner: (0, eo.PV)(o),
                                  canRemix: (0, eo.H_)(o),
                                  onRefresh: (0, tD.x1)(eD) ? eB : void 0,
                                  isRefreshing: ez,
                                  onClose: eH,
                                  onExport: eX,
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
                                                (g(!0), P(!1), S(!1), I(!0));
                                            },
                                  onRestorePoints: () => {
                                      (g(!0), P(!1), I(!1), S(!0));
                                  },
                                  refreshApplicationId:
                                      ep.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ep.profileState
                                          ? ey
                                          : null,
                                  previewProjectId: o.id,
                              }),
                              ev
                                  ? null
                                  : (0, i.jsx)(G.A.Icon, { icon: tV, tooltip: ej, "aria-label": ej, onClick: eC }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: tL.nj,
        children: [
            eq.input,
            (0, i.jsx)("main", {
                className: tL.JX,
                children:
                    null == o
                        ? (0, i.jsxs)("div", {
                              className: tL.j5,
                              children: [
                                  e7,
                                  (0, i.jsxs)("div", {
                                      className: tL.sD,
                                      children: [
                                          (0, i.jsx)(A.D, {
                                              variant: "heading-lg/semibold",
                                              children: q.intl.string(X.default.F2dRba),
                                          }),
                                          (0, i.jsx)(y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: q.intl.string(X.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: q.intl.string(X.default["42EdIV"]),
                                              onClick: () => (0, Y.hF)(m),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ef.A,
                              {
                                  projectId: o.id,
                                  designFeedbackToggleRef: eN,
                                  applicationId: o.preview_application_id,
                                  previewApplicationId: o.preview_application_id,
                                  surface: tD.sd,
                                  header: e7,
                                  chatOpen: f,
                                  onCloseChat: eA,
                                  chatHeaderAction: e8,
                                  versionHistoryOpen: b,
                                  onCloseVersionHistory: () => I(!1),
                                  restorePointsOpen: N,
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
function tX(e) {
    let {
            projects: t,
            idea: n,
            guildId: l,
            submitting: r,
            createError: d,
            createDisabled: c,
            conjureTarget: m,
            onConjureTargetChange: p,
            eligibleGuilds: h,
            modelSettings: f,
            onModelSettingsChange: g,
            onSelectProject: j,
            onIdeaChange: C,
            onCreate: A,
            onCreateFromTemplate: R,
            onStartTemplate: M,
            onSubmitTemplate: O,
            onCancelTemplate: D,
            onSkipTemplate: L,
            onImportNewProject: V,
            importing: F,
        } = e,
        [B, H] = s.useState(() => ({ guildId: l, filter: tP(l) })),
        W = (B.guildId === l ? B.filter : tP(l)) ?? l,
        K = s.useCallback(
            (e) => {
                (tE.set(l, e), H({ guildId: l, filter: e }));
            },
            [l],
        ),
        $ = (0, u.yK)(
            [z.A],
            () =>
                (function (e, t) {
                    let a = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && a.add(t.guild_id),
                            null != t.preview_guild_id && a.add(t.preview_guild_id));
                    let n = [];
                    for (let e of a) {
                        let t = z.A.getGuild(e);
                        null != t && n.push(t);
                    }
                    return n.sort((e, t) => e.name.localeCompare(t.name));
                })(t, l),
            [t, l],
        ),
        Q = s.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: q.intl.string(X.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tN,
                    leading: eB.UserIcon,
                    label: q.intl.string(X.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tS,
                    leading: eH.R,
                    label: q.intl.string(X.default["qqH+iN"]),
                },
                ...$.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, i.jsx)(tA.Ay, { guild: e, size: tA.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [$],
        ),
        J = (0, u.yK)(
            [eo.Ay, z.A],
            () => {
                let e = t_(W);
                if (null != e) return eo.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(z.A.getGuilds()))
                    eo.Ay.hasFetchedGuildProjects(e.id) && t.push(...eo.Ay.getSharedProjects(e.id));
                return t;
            },
            [W],
        );
    s.useEffect(() => {
        let e = t_(W);
        null == e || eo.Ay.hasFetchedGuildProjects(e) || (0, Y.hF)(e);
    }, [W]);
    let ee = s.useMemo(
            () =>
                J.filter((e) => tT(e, W)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [J, W],
        ),
        ea = s.useMemo(
            () => [
                {
                    label: q.intl.string(X.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tI,
                            label: q.intl.string(X.default.UXnPhI),
                            leading: eB.UserIcon,
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
        en = s.useMemo(
            () =>
                t
                    .filter((e) => tT(e, W))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, W],
        ),
        ei = s.useCallback(
            (e) => {
                "user" === e.install_scope || (0, et.X0)(e, l)
                    ? j(e.id)
                    : (0, w.P0)((0, k.o)(q.intl.string(X.default["wY7I+H"]), v.Ck.MESSAGE));
            },
            [l, j],
        ),
        es = q.intl.string(X.default.TU9IGR),
        el = [
            q.intl.string(X.default["E+Q26x"]),
            q.intl.string(X.default["06/jqP"]),
            q.intl.string(X.default["3gSfUa"]),
        ],
        er = [
            {
                id: "moderation-bot",
                name: q.intl.string(X.default.idRAwG),
                description: q.intl.string(X.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: q.intl.string(X.default.BLDsiz),
                description: q.intl.string(X.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: q.intl.string(X.default["+abXa8"]),
                description: q.intl.string(X.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: q.intl.string(X.default.ieAgex),
                description: q.intl.string(X.default["5yvj+f"]),
            },
        ],
        ed = s.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: l,
                        eligibleGuilds: h,
                        onStart: (t) => M(e.name, t),
                        onSubmit: (t, a, n) => O(e, t, a, n),
                        onCancel: D,
                        onSkip: L,
                    }),
                    (0, ec.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([a.e("247719"), a.e("948979")]).then(
                                a.bind(a, 248702),
                            );
                            return (a) => (0, i.jsx)(e, { ...a, ...t });
                        },
                        { modalKey: "VibegrationsTemplateWizardModal" },
                    ));
                }
                R(e);
            },
            [h, l, D, R, L, M, O],
        ),
        eu = q.intl.string(X.default.FYK2xQ),
        em = q.intl.string(X.default["/SUK82"]),
        ep = s.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || A());
            },
            [c, A],
        ),
        ef = t_(W) ?? l,
        ey = (0, u.bG)([eo.Ay], () => eo.Ay.getGuildProjectsFetchState(ef), [ef]),
        eb = (0, u.bG)([eo.Ay], () => eo.Ay.getGuildProjectsFetchState(l), [l]),
        [ex, ej] = s.useState(tO),
        eC = s.useMemo(() => tR.w.get(tG(l)) ?? !1, [l]),
        eA = "success" === eb,
        eI = (0, u.yK)([eo.Ay], () => eo.Ay.getSharedProjects(l), [l]).length > 0 || t.some((e) => tT(e, l)),
        eN = ex ?? (!!eI || "error" === eb || (!eA && eC));
    s.useEffect(() => {
        eA && tR.w.set(tG(l), eI);
    }, [eA, eI, l]);
    let eS = s.useCallback((e) => {
            (tR.w.set(tM, e), ej(e));
        }, []),
        eE = s.useCallback(() => eS(!eN), [eS, eN]),
        eP = s.useCallback(() => eS(!1), [eS]),
        e_ = q.intl.string(X.default.jDPFDh),
        eR = eN ? e_ : q.intl.string(X.default.a6d2y1);
    return (0, i.jsx)("div", {
        className: o()(tL.nj, tL.a0),
        children: (0, i.jsxs)("div", {
            className: tL.Yo,
            children: [
                (0, i.jsxs)("main", {
                    className: tL.ps,
                    children: [
                        (0, i.jsx)(ts, {
                            title: q.intl.string(X.default.Xmvb23),
                            actions: (0, i.jsx)(G.A.Icon, {
                                icon: I.Z,
                                tooltip: eR,
                                "aria-label": eR,
                                selected: eN,
                                onClick: eE,
                            }),
                        }),
                        (0, i.jsx)(N.Ip, {
                            className: tL.Yy,
                            children: (0, i.jsx)("div", {
                                className: tL.Mo,
                                children: (0, i.jsxs)("section", {
                                    className: o()(tL.Qs, tL.Ix),
                                    children: [
                                        (0, i.jsx)(th, {}),
                                        (0, i.jsx)(eT, {}),
                                        (0, i.jsxs)("section", {
                                            className: tL.WI,
                                            "aria-label": eu,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tL.G9,
                                                    children: [
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eu,
                                                        }),
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: q.intl.string(X.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(ev, {
                                                    listClassName: tL.Aw,
                                                    radius: ew,
                                                    children: er.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tL.EA,
                                                                children: (0, i.jsxs)(eg, {
                                                                    disabled: r,
                                                                    ariaLabel: q.intl.formatToPlainString(
                                                                        X.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tL.nx, tL.rz),
                                                                    onClick: () => ed(e),
                                                                    children: [
                                                                        (0, i.jsx)(y.E, {
                                                                            className: tL.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, i.jsx)(y.E, {
                                                                            className: tL.BK,
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
                                            className: tL.WI,
                                            "aria-label": em,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tL.G9,
                                                    children: [
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: em,
                                                        }),
                                                        (0, i.jsx)(y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: q.intl.string(X.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)(ev, {
                                                    listClassName: tL.Aw,
                                                    radius: ek,
                                                    children: el.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tL.EA,
                                                                children: (0, i.jsx)(eg, {
                                                                    disabled: r,
                                                                    className: tL.nx,
                                                                    onClick: () => A(e),
                                                                    children: (0, i.jsx)(y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tL.un,
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
                            className: tL.Yl,
                            children: (0, i.jsxs)("div", {
                                className: o()(tL.Qs, tL.DA),
                                children: [
                                    (0, i.jsx)(S.f, {
                                        label: es,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: es,
                                        error: d,
                                        onChange: C,
                                        onKeyDown: ep,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tL.VP,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tL.gH,
                                                children: (0, i.jsx)(E.l, {
                                                    selectionMode: "single",
                                                    label: q.intl.string(X.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: q.intl.string(X.default.MLg0S8),
                                                    options: ea,
                                                    value: m,
                                                    onSelectionChange: p,
                                                    disabled: r,
                                                }),
                                            }),
                                            (0, i.jsx)(eU.A, {
                                                settings: f ?? U.v0,
                                                tiers: U.qf,
                                                choices: (0, Z.e)()
                                                    ? {
                                                          main: [...U.S8.main, ...U.wF.main],
                                                          subagent: [...U.S8.subagent, ...U.wF.subagent],
                                                          thinking: U.S8.thinking,
                                                      }
                                                    : U.S8,
                                                disabled: r,
                                                onChange: g,
                                            }),
                                            (0, i.jsx)(x.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: q.intl.string(q.t.CumH4u),
                                                disabled: c,
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
                    className: tL.pA,
                    hidden: !eN,
                    "aria-label": q.intl.string(X.default.Bo5fE3),
                    children: [
                        (0, i.jsxs)("div", {
                            className: tL.IR,
                            children: [
                                (0, i.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tL.RM,
                                    children: q.intl.string(X.default.Bo5fE3),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tL.Ss,
                                    children: [
                                        (0, i.jsx)(eq, { importing: F, onImport: V }),
                                        (0, i.jsx)(G.A.Icon, { icon: P.P, tooltip: e_, "aria-label": e_, onClick: eP }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(N.Ip, {
                            className: tL.xe,
                            children: [
                                (0, i.jsx)("div", {
                                    className: tL.Vw,
                                    children: (0, i.jsx)(E.l, {
                                        selectionMode: "single",
                                        label: q.intl.string(X.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Q,
                                        value: W,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, i.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tL.wE,
                                    children: q.intl.string(X.default.YnAFtT),
                                }),
                                ("unattempted" === ey || "loading" === ey) && 0 === en.length
                                    ? (0, i.jsx)("div", { className: tL.E8, children: (0, i.jsx)(b.y, {}) })
                                    : "error" === ey && 0 === en.length
                                      ? (0, i.jsxs)("div", {
                                            className: tL.E8,
                                            children: [
                                                (0, i.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tL.JS,
                                                    children: q.intl.string(X.default["IN/HRP"]),
                                                }),
                                                (0, i.jsx)(x.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: q.intl.string(X.default["42EdIV"]),
                                                    onClick: () => (0, Y.hF)(ef),
                                                }),
                                            ],
                                        })
                                      : 0 === en.length
                                        ? (0, i.jsx)("div", {
                                              className: tL.D1,
                                              children: (0, i.jsxs)("div", {
                                                  className: tL.ST,
                                                  children: [
                                                      (0, i.jsx)(_.D, { size: "lg", color: T.A.colors.TEXT_SUBTLE }),
                                                      (0, i.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tL.sI,
                                                          children: q.intl.string(X.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, i.jsx)("div", {
                                              className: tL.Dq,
                                              children: en.map((e) =>
                                                  (0, i.jsx)(
                                                      tB,
                                                      {
                                                          project: e,
                                                          guildId: l,
                                                          onSelect: () => ei(e),
                                                          onRemix: () => (0, tj.A)(e, l),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                ee.length > 0
                                    ? (0, i.jsxs)("div", {
                                          className: tL.qx,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tL.uc,
                                                  children: [
                                                      (0, i.jsx)(y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: q.intl.string(X.default.jrCnUc),
                                                      }),
                                                      (0, i.jsx)(y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: q.intl.string(X.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: tL.Dq,
                                                  children: ee.map((e) =>
                                                      (0, i.jsx)(
                                                          tB,
                                                          {
                                                              project: e,
                                                              guildId: l,
                                                              onSelect: () => ei(e),
                                                              onRemix: () => (0, tj.A)(e, l),
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
        l = (0, u.yK)([eo.Ay], () => eo.Ay.getOwnedProjects()),
        o = (0, u.yK)([V.Ay], () => V.Ay.getSelfMember(a)?.roles ?? [], [a]),
        r = (0, u.bG)(
            [z.A, F.A],
            () => {
                let e = z.A.getGuild(a);
                return null != e && F.A.can(tc.xBc.MANAGE_GUILD, e);
            },
            [a],
        ),
        [d, c] = s.useState(""),
        m = n ?? null,
        [p, h] = s.useState(!1),
        [f, g] = s.useState(null),
        y = (0, tC._)("VibegrationsScreen"),
        [b, x] = s.useState(null);
    s.useEffect(() => {
        x(null);
    }, [a]);
    let j = s.useMemo(() => (y.some((e) => e.id === a) ? a : tI), [y, a]),
        C = b ?? j,
        A = C === tI ? "user" : "guild",
        I = C === tI ? a : C,
        [N, S] = s.useState(null);
    (s.useEffect(() => {
        (0, Y.hF)(a);
    }, [a, o, r]),
        s.useEffect(() => {
            (0, Y.dm)(a, m);
        }, [a, m]));
    let E = s.useCallback(
            async (e, t, a) => {
                let n = await (0, Y.gA)({ guild_id: t, install_scope: a });
                ((0, H.Hc)(n),
                    (0, H.r2)(n, N ?? U.v0),
                    e(n),
                    (0, D.pX)(tc.BVt.CHANNEL(t, e4.VV.VIBEGRATIONS, n)),
                    c(""),
                    S(null));
            },
            [N],
        ),
        P = s.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    a = er({ idea: t, installScope: A, submitting: p });
                if ("idea" !== a && "submitting" !== a) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        await E((e) => (0, H.dv)(e, t), I, A);
                    } catch (e) {
                        g((0, K.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, I, d, p],
        ),
        _ = s.useCallback(
            async (e) => {
                if (!p) {
                    (h(!0), g(null));
                    try {
                        await E(
                            (t) => {
                                var a;
                                (0, H.dv)(
                                    t,
                                    ((a = e.name),
                                    q.intl.formatToPlainString(X.default["9D9L0S"], { templateName: a })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            I,
                            A,
                        );
                    } catch (e) {
                        g((0, K.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [E, A, I, p],
        ),
        T = s.useCallback(
            async (e, t) => {
                let a = await (0, Y.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, H.Hc)(a), (0, H.r2)(a, N ?? U.v0), (0, H.dv)(a, (0, Q.v8)(e)), a);
            },
            [N],
        ),
        R = s.useCallback(async (e, t, a, n) => {
            if (eo.Ay.getProject(t)?.guild_id !== a) {
                let e = await (0, Y.M7)(t, { guild_id: a, preview_guild_id: a });
                if (!e.ok) throw new K.uQ((0, K.hj)(e), e.status);
            }
            ((0, H.dv)(t, n, void 0, { templateId: e.id }),
                (0, ea.R6)(t),
                (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS, t)),
                S(null));
        }, []),
        M = s.useCallback((e) => {
            (0, Y.xx)(e).catch(() => void 0);
        }, []),
        O = s.useCallback(
            (e) => {
                let t = eo.Ay.getProject(e)?.guild_id ?? a;
                ((0, D.pX)(tc.BVt.CHANNEL(t, e4.VV.VIBEGRATIONS, e)), S(null));
            },
            [a],
        ),
        [G, L] = s.useState(!1),
        B = s.useCallback(
            async (e, t) => {
                let n = eV(e);
                if (null != n) return void (0, w.P0)((0, k.o)(n, v.Ck.FAILURE));
                L(!0);
                let i = null;
                try {
                    ((i = await (0, Y.gA)({ guild_id: a, install_scope: t })),
                        (0, H.Hc)(i),
                        (0, H.r2)(i, N ?? U.v0),
                        await eL(i, e, q.intl.string(X.default.KjEtrZ)),
                        (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS, i)),
                        S(null));
                } catch {
                    (null != i && (await (0, Y.xx)(i).catch(() => void 0)),
                        (0, w.P0)((0, k.o)(q.intl.string(X.default["02GpNr"]), v.Ck.FAILURE)));
                } finally {
                    L(!1);
                }
            },
            [a, N],
        ),
        W = s.useCallback(
            (e) => {
                (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS, e));
            },
            [a],
        ),
        $ = s.useCallback(() => {
            (0, D.pX)(tc.BVt.CHANNEL(a, e4.VV.VIBEGRATIONS));
        }, [a]),
        Z = s.useCallback((e) => {
            (c(e), g(null));
        }, []),
        J = (0, u.bG)(
            [eo.Ay],
            () => {
                if (null == m) return null;
                let e = eo.Ay.getProject(m);
                return null == e || (0, eo.PV)(e) || e.guild_id === a ? e : null;
            },
            [m, a],
        ),
        ee = (0, u.bG)([eo.Ay], () => eo.Ay.hasFetchedGuildProjects(a), [a]);
    return null != m
        ? (0, i.jsx)(tH, { project: J, projectsLoaded: ee, onBack: $, guildId: a }, m)
        : (0, i.jsx)(tX, {
              projects: l,
              modelSettings: N,
              onModelSettingsChange: S,
              idea: d,
              guildId: a,
              submitting: p,
              createError: f,
              createDisabled: "idea" === (t = er({ idea: d, installScope: A, submitting: p })) || "submitting" === t,
              onSelectProject: W,
              onIdeaChange: Z,
              onCreate: P,
              onCreateFromTemplate: _,
              onStartTemplate: T,
              onSubmitTemplate: R,
              onCancelTemplate: M,
              onSkipTemplate: O,
              onImportNewProject: B,
              importing: G,
              conjureTarget: C,
              onConjureTargetChange: x,
              eligibleGuilds: y,
          });
}
