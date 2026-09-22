(n.r(t), n.d(t, { default: () => tE }), n(321073));
var a,
    i = n(477900),
    l = n(582128),
    s = n(503698),
    o = n.n(s),
    r = n(536637),
    d = n.n(r),
    u = n(17928),
    c = n(314116),
    p = n(534890),
    m = n(646270),
    h = n(31300),
    f = n(939249),
    g = n(323384),
    b = n(834730),
    y = n(691540),
    w = n(857250),
    x = n(97483),
    k = n(821609),
    j = n(92446),
    v = n(625903),
    C = n(297264),
    A = n(97893),
    I = n(364522),
    N = n(103557),
    E = n(691885),
    S = n(789645),
    P = n(289873),
    _ = n(152367),
    R = n(661531),
    O = n(627363),
    T = n(625180),
    M = n(672929),
    D = n(742589),
    G = n(976860),
    z = n(885386),
    F = n(696451),
    V = n(71393),
    L = n(576705),
    B = n(486020),
    H = n(50617),
    Y = n(375708),
    U = n(948230),
    q = n(637708),
    X = n(936494),
    K = n(976713);
async function W(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, U.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var Z = n(673724),
    $ = n(208137),
    Q = n(822835),
    J = n(74029),
    ee = n(559676),
    et = n(58551),
    en = n(805332),
    ea = n(277977),
    ei = n(972786);
function el(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var es = n(58703),
    eo = n(127181),
    er = n(192308);
function ed() {
    (0, er.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var eu = n(413927);
function ec() {
    let e = (0, eo.TH)("desktop");
    if (0 === e.length) return null;
    let t = Y.intl.string(H.default.x07mpp);
    return (0, i.jsxs)("section", {
        className: eu.rN,
        "aria-label": t,
        children: [
            (0, i.jsxs)("div", {
                className: eu.bZ,
                children: [
                    (0, i.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(H.default.h5CwHI),
                    }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: eu.V,
                children: e.map((e) =>
                    (0, i.jsxs)(
                        "li",
                        {
                            className: eu.S3,
                            children: [
                                (0, i.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eu.VO,
                                    children: [
                                        (0, es.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, eo.MZ)(e) ? ` \xb7 ${Y.intl.string(H.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, i.jsx)(b.E, {
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
            (0, eo.B)("desktop")
                ? (0, i.jsx)(k.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(H.default.YWxThz),
                      onClick: ed,
                  })
                : null,
        ],
    });
}
var ep = n(87143),
    em = n(210744),
    eh = n(922016),
    ef = n(980707),
    eg = n(477782),
    eb = n(81369),
    ey = n(402879);
async function ew(e, t, n) {
    (0, ea.Hc)(e);
    let a = await (0, ea.vX)(e, t);
    (0, ea.dv)(e, n, [a]);
}
function ex(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Z.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, Z.ZJ)((0, Z.yr)(t)) });
}
async function ek(e, t) {
    let n,
        a =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        i = await (0, ea.cS)(e, a);
    await (0, ey.F)(i, a);
}
function ej(e) {
    let t = l.useRef(null),
        n = l.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
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
            onChange: n,
        }),
    };
}
var ev = n(950305),
    eC = n(664121);
let eA = [
    { value: "user", icon: ev.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eC.R, nameMessage: H.default.LdgKdI },
];
function eI(e) {
    let { importing: t, onImport: n } = e,
        a = l.useRef(null),
        s = ej(l.useCallback((e) => n(e, "user"), [n])),
        o = ej(l.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eh.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: eh.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(ef.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, i.jsx)(eg.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: eA
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, i.jsx)(
                                        eg.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: l } = n;
                    return (0, i.jsx)(k.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: eb.H,
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
var eN = n(113491),
    eE = n(629584),
    eS = n(753514),
    eP = n(491920);
function e_(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = l.useMemo(() => t.map((e) => ({ value: e, name: (0, eS.kZ)(e), "aria-controls": (0, eS.z3)(e) })), [t]),
        d = l.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, i.jsx)(eE.I, {
              role: "tablist",
              look: "pill",
              className: o()(eP.b, s),
              optionClassName: eP.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eR = n(663417),
    eO = n(70688),
    eT = n(173936),
    eM = n(473935),
    eD = n(365199),
    eG = n(7437),
    ez = n(147036),
    eF = n(957565),
    eV = n(123917),
    eL = n(557875);
let eB = new Set();
var eH = n(869369),
    eY = n(746080),
    eU = n(793712);
let eq = [];
function eX(e) {
    (0, y.P0)((0, w.o)(e, x.Ck.FAILURE));
}
function eK(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: a,
            projectGuildId: s,
            isOwner: o,
            canRemix: r,
            onExport: d,
            onImport: p,
            onRemix: m,
            onConnectTool: h,
            onVersionHistory: f,
            onRestorePoints: g,
            onRefresh: b,
            isRefreshing: k = !1,
            onClose: j,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        I = l.useRef(null),
        { pending: N, refresh: E } = (0, eG.A)(C ?? null),
        { pending: S, connect: P } = (function (e, t) {
            let [n, a] = l.useState(eB),
                i = l.useRef(eB),
                s = l.useCallback((e) => {
                    ((i.current = (0, eL.Q6)(i.current, e)), a(i.current));
                }, []);
            return {
                pending: n,
                connect: l.useCallback(
                    (n) => {
                        if (null == e) return;
                        let l = (0, eL.K9)(i.current, n.type);
                        async function o() {
                            let a = await (0, ea.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, eV.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eL.rq)(a.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != l && ((i.current = l), a(l), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, eX),
        _ = (0, u.bG)([ea.Ay], () => (null == A ? eq : ea.Ay.getDeclaredConnections(A))),
        R = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: i } = e,
                l = [];
            for (let { connection: e, offer: s } of (t &&
                l.push({
                    id: "preview-refresh",
                    label: Y.intl.string(H.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
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
            refreshPending: N,
            offers: l.useMemo(() => (0, eL.Xl)(_), [_]),
            connectPending: S,
        }),
        O = l.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        T = null != m && r,
        M = o && null != p,
        G = T || null != d || M || null != h || null != f || null != g,
        z = eF.p5 && null != a,
        F = eF.p5;
    return null != b || null != j || G || F || o
        ? (0, i.jsx)(eh.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: eh.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsxs)(ef.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: l,
                      onSelect: l,
                      children: [
                          null != b || null != j
                              ? (0, i.jsxs)(eg.rX, {
                                    children: [
                                        null != b
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "refresh",
                                                  icon: eR.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eR.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: k,
                                                  action: b,
                                              })
                                            : null,
                                        null != j
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "close",
                                                  icon: eO.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eO.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: j,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          R.length > 0
                              ? (0, i.jsx)(eg.rX, {
                                    children: R.map((e) =>
                                        (0, i.jsx)(
                                            eg.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : O.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          G
                              ? (0, i.jsxs)(eg.rX, {
                                    children: [
                                        T
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        M
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          F
                              ? (0, i.jsxs)(eg.rX, {
                                    children: [
                                        z
                                            ? (0, i.jsx)(eg.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eT.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eT.LinkIcon },
                                                  action: () =>
                                                      (0, eF.C)((0, ez.n)(a, eY.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, i.jsx)(eg.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eM.L,
                                            leadingAccessory: { type: "icon", icon: eM.L },
                                            action: () =>
                                                (0, eF.C)(t, () =>
                                                    (0, y.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, i.jsxs)(eg.rX, {
                                    children: [
                                        (0, i.jsx)(eg.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: v.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                            action: () => (0, eH.A)(t, s ?? a),
                                        }),
                                        (0, i.jsx)(eg.Dr, {
                                            id: "delete",
                                            label: Y.intl.string(Y.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: Y.intl.formatToPlainString(H.default.ZokHVz, { name: n }),
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
                  let { onClick: n } = e,
                      { isShown: a } = t;
                  return (0, i.jsx)("div", {
                      ref: I,
                      className: eU.h,
                      children: (0, i.jsx)(D.A.Icon, {
                          icon: eD.MoreHorizontalIcon,
                          tooltip: Y.intl.string(Y.t["UKOtz+"]),
                          "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                          "aria-haspopup": "menu",
                          "aria-expanded": a,
                          selected: a,
                          onClick: n,
                      }),
                  });
              },
          })
        : null;
}
var eW = n(769979);
function eZ(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, i.jsx)(D.A, {
        hideSearch: !0,
        toolbar: n,
        className: eW.wx,
        "aria-label": t,
        children: (0, i.jsxs)("div", {
            className: eW.QF,
            children: [
                (0, i.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: eW.Kk,
                }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(D.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, i.jsx)(D.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(D.A.Title, { className: eW.Qw, wrapperClassName: eW.DD, children: t }),
            ],
        }),
    });
}
var e$ = n(73432),
    eQ = n(683071),
    eJ = n(47167),
    e0 = n(808728),
    e2 = n(994500),
    e1 = n(287809),
    e6 = n(652215);
let e9 = "conjuring-help";
var e8 = n(107148);
function e7() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([e1.default, V.A, e0.Ay, e2.A], () => {
                let e = e1.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of V.A.getGuildsArray()) {
                    if (!t.features.has(e6.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = e0.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, eJ.m1)(t, e1.default, e2.A) === e9;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = l.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, G.pX)(e6.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eV.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, i.jsx)("div", {
              className: e8.l,
              children: (0, i.jsx)(eQ.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(H.default["4BsHmp"], { channel: e9, onNavigate: t }),
              }),
          });
}
var e3 = n(321593),
    e5 = n(580954),
    e4 = n(227189),
    te = n(189213),
    tt = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function tn(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        l = t === tt.PERMISSIONS;
    return (0, i.jsx)(te.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(l ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(l ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(l ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function ta(e) {
    (0, er.openModal)((t) => (0, i.jsx)(tn, { ...t, reason: e }));
}
var ti = n(480007),
    tl = n(584936),
    ts = n(536820),
    to = n(548118);
let tr = "user";
var td = n(683180);
let tu = "user",
    tc = "no-server",
    tp = new Map();
function tm(e) {
    return tp.get(e) ?? null;
}
function th(e) {
    switch (e) {
        case "all":
        case tu:
        case tc:
            return null;
        default:
            return e;
    }
}
function tf(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tu:
            return "user" === e.install_scope;
        case tc:
            return null == (0, q.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tg = n(506774);
let tb = "VibegrationsProjectsPanelOpen";
function ty() {
    return tg.w.get(tb) ?? null;
}
function tw(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tx = n(165610),
    tk = n(352978);
function tj(e) {
    return (0, i.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tv(e) {
    return (0, i.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tC(e) {
    return (0, i.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tA(e) {
    let t,
        n,
        a,
        s,
        o,
        { project: r, guildId: p, onSelect: m, onRemix: h } = e,
        k =
            ((t = r.id),
            (n = r.name),
            (a = l.useRef(!1)),
            (s = l.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, w.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    ek(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, w.o)(
                                        409 === (n = e instanceof ea._v ? e.status : null)
                                            ? Y.intl.string(H.default.uB40Hz)
                                            : 404 === n
                                              ? Y.intl.string(H.default.wCq2jC)
                                              : Y.intl.string(H.default.G2GqyP),
                                        x.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            a.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: s,
                onImport: (o = ej(
                    l.useCallback(
                        (e) => {
                            let a = ex(e);
                            null != a
                                ? (0, y.P0)((0, w.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, G.pX)(e6.BVt.CHANNEL(p, eY.VV.VIBEGRATIONS, t));
                                          try {
                                              await ew(t, e, Y.intl.string(H.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, p],
                    ),
                )).open,
                importInput: o.input,
            }),
        j = r.preview_application_id ?? r.application_id,
        { data: v } = (0, O.YY)(j),
        C = v?.icon == null ? null : B.Ay.getApplicationIconURL({ id: j, icon: v.icon, size: 40 }),
        A =
            null == r.updated_at
                ? null
                : Y.intl.formatToPlainString(H.default.oMDaqr, { time: d()(r.updated_at).fromNow() }),
        I = (0, q.HC)(r),
        N =
            (0, u.bG)([V.A], () => (null == I ? null : (V.A.getGuild(I)?.name ?? null)), [I]) ??
            Y.intl.string(H.default["qqH+iN"]);
    return (0, i.jsxs)("div", {
        className: tk.OY,
        children: [
            (0, i.jsx)(e3.Ay, { projectId: r.id }),
            (0, i.jsxs)(f.D, {
                className: tk.W6,
                onClick: m,
                children: [
                    null == C
                        ? (0, i.jsx)("div", {
                              className: tk.a8,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, i.jsx)("img", { alt: "", src: C, className: tk.VJ }),
                    (0, i.jsxs)("div", {
                        className: tk.MM,
                        children: [
                            (0, i.jsx)(b.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tk.j1,
                                children: r.name,
                            }),
                            (0, i.jsxs)("div", {
                                className: tk.h3,
                                children: [
                                    (0, i.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tk.Wb,
                                        children: N,
                                    }),
                                    null == A
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("span", {
                                                      className: tk.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, i.jsx)(b.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tk.zM,
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
                className: tk.M2,
                children: (0, i.jsxs)("div", {
                    className: tk.Pl,
                    children: [
                        (0, i.jsx)(eK, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: p,
                            projectGuildId: r.guild_id,
                            isOwner: (0, ei.PV)(r),
                            canRemix: (0, ei.H_)(r),
                            onRemix: h,
                            onExport: k.onExport,
                            onImport: k.onImport,
                        }),
                        k.importInput,
                    ],
                }),
            }),
        ],
    });
}
function tI(e) {
    var t, a;
    let { project: s, projectsLoaded: o, onBack: r, guildId: d } = e,
        [p, m] = l.useState(!1),
        [h, f] = l.useState(!0),
        [g, A] = l.useState(!1),
        [I, N] = l.useState(!1),
        [E, S] = l.useState(!1),
        P = z.Q_.useSetting(),
        [_, R] = l.useState(null),
        [F, V] = l.useState(null),
        L = s?.id ?? null,
        B = l.useRef(L),
        q = l.useRef(!0),
        X = l.useRef(!1),
        K = l.useRef(null);
    ((B.current = L),
        l.useEffect(
            () => (
                (q.current = !0),
                () => {
                    q.current = !1;
                }
            ),
            [],
        ));
    let Z = (0, u.bG)([ei.Ay], () => (null == L ? null : ei.Ay.getIntegrationStatus(L)), [L]),
        { data: $, isLoading: el } = (0, O.YY)(s?.preview_application_id ?? void 0),
        es = null != L && F !== L,
        eo = Z?.preview_ready === !0,
        ed = Z?.has_activity === !0,
        {
            availability: eu,
            activeMode: ec,
            setMode: eh,
            widgetApplicationId: ef,
        } = (0, Q.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ed,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: Z?.owner_authorization_revoked === !0,
        }),
        eg = (0, et.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: eo,
            integrationInstalled: Z?.integration_installed ?? null,
            botPermissionsChanged: Z?.bot_permissions_changed === !0,
        }),
        eb = p || es || el,
        ey = Y.intl.string(H.default["5gU57O"]),
        ek = h && !E && !g && !I,
        ev = Y.intl.string(ek ? H.default.YdgE0j : H.default.aWVf4j),
        eC = l.useCallback(() => {
            if (E || g || I) {
                (S(!1), A(!1), N(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [E, g, I]),
        eA = l.useCallback(() => f(!1), []),
        { active: eI } = (0, J.Q_)(L),
        eN = l.useRef(null),
        eE = (0, ee.o4)(L),
        eS = Y.intl.string(eE ? H.default.bfQ4Ki : eI ? H.default.rfNEHn : H.default.lXcEa2),
        eP = l.useCallback(() => {
            if (null != L) {
                if (eI) return void (0, J.PS)(L);
                (S(!1), A(!1), N(!1), f(!0), (0, J.nI)(L));
            }
        }, [L, eI]),
        eR = l.useCallback(() => {
            S((e) => !e && (f(!0), A(!1), N(!1), !0));
        }, []),
        eO = l.useCallback(() => S(!1), []),
        eT = l.useCallback(
            (e) => {
                if (null == s || X.current) return;
                let t = s.id;
                function n() {
                    return q.current && B.current === t;
                }
                ((X.current = !0),
                    A(!1),
                    f(!0),
                    R({ entry: e, status: "restoring" }),
                    (0, ea.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && R({ entry: e, status: "restored" });
                            },
                            (a) => {
                                n() &&
                                    (R({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, a),
                                    (0, y.P0)((0, w.o)(Y.intl.string(H.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (X.current = !1);
                        }));
            },
            [s],
        ),
        eM = (0, u.bG)([en.A], () => en.A.isBuilderPreviewMobile()),
        eD = Y.intl.string(eM ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        eG = l.useCallback(() => (0, U.GG)(!eM), [eM]),
        ez = (0, M.A)(s?.preview_application_id ?? null, tx.sd),
        eF = (0, tx.x1)(ez) && ez.data.proxyTicketRefreshing,
        eV = l.useCallback(() => {
            null == ez || eF || T.A.refreshProxyTicket(ez.id);
        }, [ez, eF]),
        eL = l.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ez?.id), (0, ea.Bn)(e), (0, e5.A)().leaveFrame(t)), r());
        }, [s, ez?.id, r]),
        eB = l.useCallback(() => {
            null != s && (f(!0), (0, ea.dv)(s.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [s]),
        eU = ej(
            l.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ex(e);
                    null != n
                        ? (0, y.P0)((0, w.o)(n, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: s.name }),
                              subtitle: Y.intl.string(H.default["6syXoH"]),
                              confirmText: Y.intl.string(H.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await ew(t, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eq = l.useCallback(() => {
            null != s && (0, tl.A)(s, d);
        }, [s, d]),
        eX = l.useCallback(async () => {
            if (null == L || B.current !== L) return;
            K.current?.abort();
            let e = new AbortController();
            ((K.current = e), V(null));
            try {
                await (0, U.U1)(L, e.signal);
            } catch {
            } finally {
                e.signal.aborted || K.current !== e || B.current !== L || V(L);
            }
        }, [L]);
    l.useEffect(
        () => (
            eX(),
            () => {
                (K.current?.abort(), (K.current = null));
            }
        ),
        [eX],
    );
    let eW =
            ((t = s ?? null), (a = Z ?? null), a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eQ = l.useCallback(async () => {
            null != s && (await W(s, eW));
        }, [eW, s]),
        eJ = l.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eX();
        }, [eX, eQ]),
        e0 = l.useMemo(() => {
            let e = s?.preview_application_id;
            return null == e || el || es
                ? null
                : {
                      ...(0, e4.p)({ applicationId: e, application: $ ?? null, guildId: eW }),
                      onClose: () => {
                          eJ();
                      },
                  };
        }, [es, eJ, eW, el, $, s?.preview_application_id]),
        e2 = eg ? { type: "permissions", authorizeProps: e0 } : es && null == Z ? { type: "checking" } : void 0;
    l.useEffect(() => {
        null == s && o && (0, G.pX)(e6.BVt.CHANNEL(d, eY.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let e1 = l.useCallback((e) => {
            m(!0);
            let t = (0, ea.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(Y.intl.string(H.default.fNP6Cd));
                (0, U.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, w.o)(e instanceof Error ? e.message : Y.intl.string(H.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        e9 = l.useCallback(() => {
            if (null == s) return;
            if (!eo) return void ta(tt.NO_PREVIEW);
            if (eg) return void ta(tt.PERMISSIONS);
            if ("user" === s.install_scope)
                return void e1(s.id)
                    .then(() => {
                        (0, y.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, ea.$C)(s.id);
            (e.catch(() => {}),
                (0, ti.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: e1(s.id),
                    initialDraft: e,
                }));
        }, [d, eg, eo, s, e1]),
        e8 =
            null != s && (0, ei.jf)(s)
                ? (0, i.jsx)(k.$, { size: "sm", variant: "primary", loading: p, disabled: eb, onClick: e9, text: ey })
                : null,
        e7 = (0, i.jsx)(eZ, {
            title: s?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: tk.FO,
                          children: [
                              eu.showModeSwitch ? (0, i.jsx)(e_, { modes: eu.modes, mode: ec, onChange: eh }) : null,
                              (0, i.jsx)(D.A.Icon, {
                                  icon: eM ? tC : tv,
                                  tooltip: eD,
                                  "aria-label": eD,
                                  selected: eM,
                                  onClick: eG,
                              }),
                              (0, i.jsx)(D.A.Icon, {
                                  ref: eN,
                                  icon: e$.A,
                                  tooltip: eS,
                                  "aria-label": eS,
                                  selected: eI,
                                  disabled: eE,
                                  onClick: eP,
                              }),
                              "frame" === ec ? (0, i.jsx)(em.A, { frame: ez, controlProjectId: s.id }) : null,
                              (0, i.jsx)("div", { className: tk.YJ }),
                              P
                                  ? (0, i.jsx)(D.A.Icon, {
                                        icon: j.BugIcon,
                                        tooltip: Y.intl.string(H.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                        selected: E,
                                        onClick: eR,
                                    })
                                  : null,
                              (0, ei.PV)(s)
                                  ? (0, i.jsx)(D.A.Icon, {
                                        icon: v.SettingsIcon,
                                        tooltip: Y.intl.string(H.default["xhcY+n"]),
                                        "aria-label": Y.intl.string(H.default["xhcY+n"]),
                                        onClick: () => (0, eH.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, i.jsx)(eK, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ei.PV)(s),
                                  canRemix: (0, ei.H_)(s),
                                  onRefresh: (0, tx.x1)(ez) ? eV : void 0,
                                  isRefreshing: eF,
                                  onClose: eL,
                                  onExport: eB,
                                  onImport: eU.open,
                                  onRemix: eq,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, er.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, i.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      _?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (f(!0), S(!1), N(!1), A(!0));
                                            },
                                  onRestorePoints: () => {
                                      (f(!0), S(!1), A(!1), N(!0));
                                  },
                                  refreshApplicationId:
                                      eu.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== eu.profileState
                                          ? ef
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ek
                                  ? null
                                  : (0, i.jsx)(D.A.Icon, { icon: tj, tooltip: ev, "aria-label": ev, onClick: eC }),
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: tk.nj,
        children: [
            eU.input,
            (0, i.jsx)("main", {
                className: tk.JX,
                children:
                    null == s
                        ? (0, i.jsxs)("div", {
                              className: tk.j5,
                              children: [
                                  e7,
                                  (0, i.jsxs)("div", {
                                      className: tk.sD,
                                      children: [
                                          (0, i.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(H.default.F2dRba),
                                          }),
                                          (0, i.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(H.default.GnEJ3o),
                                          }),
                                          (0, i.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(H.default["42EdIV"]),
                                              onClick: () => (0, U.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(
                              ep.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eN,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: tx.sd,
                                  header: e7,
                                  chatOpen: h,
                                  onCloseChat: eA,
                                  chatHeaderAction: e8,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: I,
                                  onCloseRestorePoints: () => N(!1),
                                  installScope: s.install_scope,
                                  debugOpen: P && E,
                                  onCloseDebug: eO,
                                  onRestoreVersion: eT,
                                  restoreState: _,
                                  previewReady: eo,
                                  previewGate: e2,
                                  availability: eu,
                                  activeMode: ec,
                                  widgetApplicationId: ef,
                              },
                              s.id,
                          ),
            }),
        ],
    });
}
function tN(e) {
    let {
            projects: t,
            idea: n,
            guildId: a,
            submitting: s,
            createError: r,
            createDisabled: d,
            conjureTarget: c,
            onConjureTargetChange: p,
            eligibleGuilds: m,
            modelSettings: h,
            onModelSettingsChange: g,
            onSelectProject: j,
            onIdeaChange: v,
            onCreate: O,
            onImportNewProject: T,
            importing: M,
        } = e,
        [G, z] = l.useState(() => ({ guildId: a, filter: tm(a) })),
        F = (G.guildId === a ? G.filter : tm(a)) ?? a,
        L = l.useCallback(
            (e) => {
                (tp.set(a, e), z({ guildId: a, filter: e }));
            },
            [a],
        ),
        B = (0, u.yK)(
            [V.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let a = [];
                    for (let e of n) {
                        let t = V.A.getGuild(e);
                        null != t && a.push(t);
                    }
                    return a.sort((e, t) => e.name.localeCompare(t.name));
                })(t, a),
            [t, a],
        ),
        q = l.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Y.intl.string(H.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tu,
                    leading: ev.UserIcon,
                    label: Y.intl.string(H.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tc,
                    leading: eC.R,
                    label: Y.intl.string(H.default["qqH+iN"]),
                },
                ...B.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, i.jsx)(to.Ay, { guild: e, size: to.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        X = (0, u.yK)(
            [ei.Ay, V.A],
            () => {
                let e = th(F);
                if (null != e) return ei.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(V.A.getGuilds()))
                    ei.Ay.hasFetchedGuildProjects(e.id) && t.push(...ei.Ay.getSharedProjects(e.id));
                return t;
            },
            [F],
        );
    l.useEffect(() => {
        let e = th(F);
        null == e || ei.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [F]);
    let W = l.useMemo(
            () =>
                X.filter((e) => tf(e, F)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [X, F],
        ),
        Q = l.useMemo(
            () => [
                {
                    label: Y.intl.string(H.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tr,
                            label: Y.intl.string(H.default.UXnPhI),
                            leading: ev.UserIcon,
                        },
                        ...m.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, i.jsx)(to.Ay, { guild: e, size: to.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [m],
        ),
        J = l.useMemo(
            () =>
                t
                    .filter((e) => tf(e, F))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, F],
        ),
        ee = l.useCallback(
            (e) => {
                "user" === e.install_scope || (0, td.X0)(e, a)
                    ? j(e.id)
                    : (0, y.P0)((0, w.o)(Y.intl.string(H.default["wY7I+H"]), x.Ck.MESSAGE));
            },
            [a, j],
        ),
        et = Y.intl.string(H.default.TU9IGR),
        en = [
            Y.intl.string(H.default["E+Q26x"]),
            Y.intl.string(H.default["06/jqP"]),
            Y.intl.string(H.default["3gSfUa"]),
        ],
        ea = [
            {
                id: "moderation-bot",
                name: Y.intl.string(H.default.idRAwG),
                description: Y.intl.string(H.default["oP90O/"]),
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
        el = Y.intl.string(H.default.FYK2xQ),
        es = Y.intl.string(H.default["/SUK82"]),
        eo = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || O());
            },
            [d, O],
        ),
        er = th(F) ?? a,
        ed = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(er), [er]),
        eu = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(a), [a]),
        [ep, em] = l.useState(ty),
        eh = l.useMemo(() => tg.w.get(tw(a)) ?? !1, [a]),
        ef = "success" === eu,
        eg = (0, u.yK)([ei.Ay], () => ei.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => tf(e, a)),
        eb = ep ?? (!!eg || "error" === eu || (!ef && eh));
    l.useEffect(() => {
        ef && tg.w.set(tw(a), eg);
    }, [ef, eg, a]);
    let ey = l.useCallback((e) => {
            (tg.w.set(tb, e), em(e));
        }, []),
        ew = l.useCallback(() => ey(!eb), [ey, eb]),
        ex = l.useCallback(() => ey(!1), [ey]),
        ek = Y.intl.string(H.default.jDPFDh),
        ej = eb ? ek : Y.intl.string(H.default.a6d2y1);
    return (0, i.jsx)("div", {
        className: o()(tk.nj, tk.a0),
        children: (0, i.jsxs)("div", {
            className: tk.Yo,
            children: [
                (0, i.jsxs)("main", {
                    className: tk.ps,
                    children: [
                        (0, i.jsx)(eZ, {
                            title: Y.intl.string(H.default.Xmvb23),
                            actions: (0, i.jsx)(D.A.Icon, {
                                icon: A.Z,
                                tooltip: ej,
                                "aria-label": ej,
                                selected: eb,
                                onClick: ew,
                            }),
                        }),
                        (0, i.jsx)(I.Ip, {
                            className: tk.Yy,
                            children: (0, i.jsx)("div", {
                                className: tk.Mo,
                                children: (0, i.jsxs)("section", {
                                    className: o()(tk.Qs, tk.Ix),
                                    children: [
                                        (0, i.jsx)(e7, {}),
                                        (0, i.jsx)(C.D, {
                                            variant: "heading-xl/semibold",
                                            children: Y.intl.string(H.default["2tYpRK"]),
                                        }),
                                        (0, i.jsxs)("section", {
                                            className: tk.WI,
                                            "aria-label": el,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tk.G9,
                                                    children: [
                                                        (0, i.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: el,
                                                        }),
                                                        (0, i.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("ol", {
                                                    className: tk.Aw,
                                                    children: ea.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tk.EA,
                                                                children: (0, i.jsxs)(f.D, {
                                                                    "aria-disabled": s,
                                                                    "aria-label": Y.intl.formatToPlainString(
                                                                        H.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: o()(tk.nx, tk.rz),
                                                                    onClick: s
                                                                        ? void 0
                                                                        : () => {
                                                                              var t;
                                                                              return O(
                                                                                  ((t = e.name),
                                                                                  Y.intl.formatToPlainString(
                                                                                      H.default["9D9L0S"],
                                                                                      { templateName: t },
                                                                                  )),
                                                                              );
                                                                          },
                                                                    children: [
                                                                        (0, i.jsx)(b.E, {
                                                                            className: tk.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, i.jsx)(b.E, {
                                                                            className: tk.BK,
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
                                            className: tk.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: tk.G9,
                                                    children: [
                                                        (0, i.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, i.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("ol", {
                                                    className: tk.Aw,
                                                    children: en.map((e) =>
                                                        (0, i.jsx)(
                                                            "li",
                                                            {
                                                                className: tk.EA,
                                                                children: (0, i.jsx)(f.D, {
                                                                    "aria-disabled": s,
                                                                    className: tk.nx,
                                                                    onClick: s ? void 0 : () => O(e),
                                                                    children: (0, i.jsx)(b.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: tk.un,
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
                                        (0, i.jsx)(ec, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: tk.Yl,
                            children: (0, i.jsxs)("div", {
                                className: o()(tk.Qs, tk.DA),
                                children: [
                                    (0, i.jsx)(N.f, {
                                        label: et,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: et,
                                        error: r,
                                        onChange: v,
                                        onKeyDown: eo,
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tk.VP,
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: tk.gH,
                                                children: (0, i.jsx)(E.l, {
                                                    selectionMode: "single",
                                                    label: Y.intl.string(H.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: Y.intl.string(H.default.MLg0S8),
                                                    options: Q,
                                                    value: c,
                                                    onSelectionChange: p,
                                                    disabled: s,
                                                }),
                                            }),
                                            (0, i.jsx)(eN.A, {
                                                settings: h ?? K.Cl,
                                                choices: (0, $.e)()
                                                    ? {
                                                          main: [...Z.S8.main, ...Z.wF.main],
                                                          subagent: [...Z.S8.subagent, ...Z.wF.subagent],
                                                          thinking: Z.S8.thinking,
                                                      }
                                                    : Z.S8,
                                                disabled: s,
                                                onChange: g,
                                            }),
                                            (0, i.jsx)(k.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: Y.intl.string(Y.t.CumH4u),
                                                disabled: d,
                                                loading: s,
                                                onClick: () => O(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("aside", {
                    className: tk.pA,
                    hidden: !eb,
                    "aria-label": Y.intl.string(H.default.Bo5fE3),
                    children: [
                        (0, i.jsxs)("div", {
                            className: tk.IR,
                            children: [
                                (0, i.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tk.RM,
                                    children: Y.intl.string(H.default.Bo5fE3),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tk.Ss,
                                    children: [
                                        (0, i.jsx)(eI, { importing: M, onImport: T }),
                                        (0, i.jsx)(D.A.Icon, { icon: S.P, tooltip: ek, "aria-label": ek, onClick: ex }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsxs)(I.Ip, {
                            className: tk.xe,
                            children: [
                                (0, i.jsx)("div", {
                                    className: tk.Vw,
                                    children: (0, i.jsx)(E.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(H.default.mvtKAm),
                                        hideLabel: !0,
                                        options: q,
                                        value: F,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, i.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tk.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === ed || "loading" === ed) && 0 === J.length
                                    ? (0, i.jsx)("div", { className: tk.E8, children: (0, i.jsx)(P.y, {}) })
                                    : "error" === ed && 0 === J.length
                                      ? (0, i.jsxs)("div", {
                                            className: tk.E8,
                                            children: [
                                                (0, i.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tk.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, i.jsx)(k.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(er),
                                                }),
                                            ],
                                        })
                                      : 0 === J.length
                                        ? (0, i.jsx)("div", {
                                              className: tk.D1,
                                              children: (0, i.jsxs)("div", {
                                                  className: tk.ST,
                                                  children: [
                                                      (0, i.jsx)(_.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tk.sI,
                                                          children: Y.intl.string(H.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, i.jsx)("div", {
                                              className: tk.Dq,
                                              children: J.map((e) =>
                                                  (0, i.jsx)(
                                                      tA,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => ee(e),
                                                          onRemix: () => (0, tl.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, i.jsxs)("div", {
                                          className: tk.qx,
                                          children: [
                                              (0, i.jsxs)("div", {
                                                  className: tk.uc,
                                                  children: [
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Y.intl.string(H.default.jrCnUc),
                                                      }),
                                                      (0, i.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Y.intl.string(H.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: tk.Dq,
                                                  children: W.map((e) =>
                                                      (0, i.jsx)(
                                                          tA,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => ee(e),
                                                              onRemix: () => (0, tl.A)(e, a),
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
function tE(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([ei.Ay], () => ei.Ay.getOwnedProjects()),
        o = (0, u.yK)([F.Ay], () => F.Ay.getSelfMember(n)?.roles ?? [], [n]),
        r = (0, u.bG)(
            [V.A, L.A],
            () => {
                let e = V.A.getGuild(n);
                return null != e && L.A.can(e6.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [d, c] = l.useState(""),
        p = a ?? null,
        [m, h] = l.useState(!1),
        [f, g] = l.useState(null),
        b = (0, ts._)("VibegrationsScreen"),
        [k, j] = l.useState(null);
    l.useEffect(() => {
        j(null);
    }, [n]);
    let v = l.useMemo(() => (b.some((e) => e.id === n) ? n : tr), [b, n]),
        C = k ?? v,
        A = C === tr ? "user" : "guild",
        I = C === tr ? n : C,
        [N, E] = l.useState(null);
    (l.useEffect(() => {
        (0, U.hF)(n);
    }, [n, o, r]),
        l.useEffect(() => {
            (0, U.dm)(n, p);
        }, [n, p]));
    let S = l.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    n = el({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        let e = await (0, U.gA)({ guild_id: I, install_scope: A });
                        ((0, ea.Hc)(e),
                            (0, ea.r2)(e, N ?? K.Cl),
                            (0, ea.dv)(e, t),
                            (0, G.pX)(e6.BVt.CHANNEL(I, eY.VV.VIBEGRATIONS, e)),
                            c(""),
                            E(null));
                    } catch (e) {
                        g((0, X.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [A, I, d, N, m],
        ),
        [P, _] = l.useState(!1),
        R = l.useCallback(
            async (e, t) => {
                let a = ex(e);
                if (null != a) return void (0, y.P0)((0, w.o)(a, x.Ck.FAILURE));
                _(!0);
                let i = null;
                try {
                    ((i = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, ea.Hc)(i),
                        (0, ea.r2)(i, N ?? K.Cl),
                        await ew(i, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, G.pX)(e6.BVt.CHANNEL(n, eY.VV.VIBEGRATIONS, i)),
                        E(null));
                } catch {
                    (null != i && (await (0, U.xx)(i).catch(() => void 0)),
                        (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    _(!1);
                }
            },
            [n, N],
        ),
        O = l.useCallback(
            (e) => {
                (0, G.pX)(e6.BVt.CHANNEL(n, eY.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        T = l.useCallback(() => {
            (0, G.pX)(e6.BVt.CHANNEL(n, eY.VV.VIBEGRATIONS));
        }, [n]),
        M = l.useCallback((e) => {
            (c(e), g(null));
        }, []),
        D = (0, u.bG)(
            [ei.Ay],
            () => {
                if (null == p) return null;
                let e = ei.Ay.getProject(p);
                return null == e || (0, ei.PV)(e) || e.guild_id === n ? e : null;
            },
            [p, n],
        ),
        z = (0, u.bG)([ei.Ay], () => ei.Ay.hasFetchedGuildProjects(n), [n]);
    return null != p
        ? (0, i.jsx)(tI, { project: D, projectsLoaded: z, onBack: T, guildId: n }, p)
        : (0, i.jsx)(tN, {
              projects: s,
              modelSettings: N,
              onModelSettingsChange: E,
              idea: d,
              guildId: n,
              submitting: m,
              createError: f,
              createDisabled: "idea" === (t = el({ idea: d, installScope: A, submitting: m })) || "submitting" === t,
              onSelectProject: O,
              onIdeaChange: M,
              onCreate: S,
              onImportNewProject: R,
              importing: P,
              conjureTarget: C,
              onConjureTargetChange: j,
              eligibleGuilds: b,
          });
}
