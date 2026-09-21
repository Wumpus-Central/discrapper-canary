(n.r(t), n.d(t, { default: () => tE }), n(321073));
var a,
    l = n(477900),
    i = n(582128),
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
    Q = n(933294),
    J = n(822835),
    ee = n(74029),
    et = n(559676),
    en = n(58551),
    ea = n(805332),
    el = n(277977),
    ei = n(972786);
function es(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var eo = n(58703),
    er = n(127181),
    ed = n(192308);
function eu() {
    (0, ed.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ec = n(413927);
function ep() {
    let e = (0, er.TH)("desktop");
    if (0 === e.length) return null;
    let t = Y.intl.string(H.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: ec.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: ec.bZ,
                children: [
                    (0, l.jsx)(b.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: Y.intl.string(H.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: ec.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: ec.S3,
                            children: [
                                (0, l.jsxs)(b.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ec.VO,
                                    children: [
                                        (0, eo.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, er.MZ)(e) ? ` \xb7 ${Y.intl.string(H.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, l.jsx)(b.E, {
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
            (0, er.B)("desktop")
                ? (0, l.jsx)(k.$, {
                      variant: "secondary",
                      size: "sm",
                      text: Y.intl.string(H.default.YWxThz),
                      onClick: eu,
                  })
                : null,
        ],
    });
}
var em = n(121063),
    eh = n(210744),
    ef = n(922016),
    eg = n(980707),
    eb = n(477782),
    ey = n(81369),
    ew = n(402879);
async function ex(e, t, n) {
    (0, el.Hc)(e);
    let a = await (0, el.vX)(e, t);
    (0, el.dv)(e, n, [a]);
}
function ek(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, Z.x5)(e.size, t)
        ? null
        : Y.intl.formatToPlainString(H.default.AzziHF, { size: (0, Z.ZJ)((0, Z.yr)(t)) });
}
async function ej(e, t) {
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
        l = await (0, el.cS)(e, a);
    await (0, ew.F)(l, a);
}
function ev(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, l.jsx)("input", {
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
var eC = n(950305),
    eA = n(664121);
let eI = [
    { value: "user", icon: eC.UserIcon, nameMessage: H.default.iqXIRN },
    { value: "guild", icon: eA.R, nameMessage: H.default.LdgKdI },
];
function eN(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = ev(i.useCallback((e) => n(e, "user"), [n])),
        o = ev(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ef.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: ef.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(eg.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": Y.intl.string(H.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eb.rX, {
                            label: Y.intl.string(H.default.MLg0S8),
                            children: eI
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: Y.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        eb.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(k.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: ey.H,
                        text: Y.intl.string(H.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            s.input,
            o.input,
        ],
    });
}
var eE = n(113491),
    eS = n(629584),
    eP = n(753514),
    e_ = n(491920);
function eR(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eP.kZ)(e), "aria-controls": (0, eP.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(eS.I, {
              role: "tablist",
              look: "pill",
              className: o()(e_.b, s),
              optionClassName: e_.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eO = n(663417),
    eT = n(70688),
    eM = n(173936),
    eD = n(473935),
    eG = n(365199),
    ez = n(7437),
    eF = n(147036),
    eV = n(957565),
    eL = n(123917),
    eB = n(557875);
let eH = new Set();
var eY = n(869369),
    eU = n(746080),
    eq = n(793712);
let eX = [];
function eK(e) {
    (0, y.P0)((0, w.o)(e, x.Ck.FAILURE));
}
function eW(e) {
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
        I = i.useRef(null),
        { pending: N, refresh: E } = (0, ez.A)(C ?? null),
        { pending: S, connect: P } = (function (e, t) {
            let [n, a] = i.useState(eH),
                l = i.useRef(eH),
                s = i.useCallback((e) => {
                    ((l.current = (0, eB.Q6)(l.current, e)), a(l.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, eB.K9)(l.current, n.type);
                        async function o() {
                            let a = await (0, el.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, eL.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, eB.rq)(a.error)
                                          ? Y.intl.string(H.default.avu1u4)
                                          : Y.intl.string(H.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), a(i), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, eK),
        _ = (0, u.bG)([el.Ay], () => (null == A ? eX : el.Ay.getDeclaredConnections(A))),
        R = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: Y.intl.string(H.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: Y.intl.formatToPlainString(H.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: N,
            offers: i.useMemo(() => (0, eB.Xl)(_), [_]),
            connectPending: S,
        }),
        O = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        T = null != m && r,
        M = o && null != p,
        G = T || null != d || M || null != h || null != f || null != g,
        z = eV.p5 && null != a,
        F = eV.p5;
    return null != b || null != j || G || F || o
        ? (0, l.jsx)(ef.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: ef.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(eg.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": Y.intl.string(Y.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != b || null != j
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        null != b
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "refresh",
                                                  icon: eO.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eO.RefreshIcon },
                                                  label: Y.intl.string(H.default.xKexN1),
                                                  disabled: k,
                                                  action: b,
                                              })
                                            : null,
                                        null != j
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "close",
                                                  icon: eT.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eT.DoorExitIcon },
                                                  label: Y.intl.string(H.default.Ea0Wrr),
                                                  action: j,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          R.length > 0
                              ? (0, l.jsx)(eb.rX, {
                                    children: R.map((e) =>
                                        (0, l.jsx)(
                                            eb.Dr,
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
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        T
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "remix",
                                                  label: Y.intl.string(H.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "export",
                                                  label: Y.intl.string(H.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        M
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "import",
                                                  label: Y.intl.string(H.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "connect-tool",
                                                  label: Y.intl.string(H.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "version-history",
                                                  label: Y.intl.string(H.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "restore-points",
                                                  label: Y.intl.string(H.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          F
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        z
                                            ? (0, l.jsx)(eb.Dr, {
                                                  id: "copy-link",
                                                  label: Y.intl.string(Y.t.WqhZss),
                                                  icon: eM.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eM.LinkIcon },
                                                  action: () =>
                                                      (0, eV.C)((0, eF.n)(a, eU.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, w.o)(Y.intl.string(Y.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eb.Dr, {
                                            id: "copy-project-id",
                                            label: Y.intl.string(H.default.b4TqpT),
                                            icon: eD.L,
                                            leadingAccessory: { type: "icon", icon: eD.L },
                                            action: () =>
                                                (0, eV.C)(t, () =>
                                                    (0, y.P0)((0, w.o)(Y.intl.string(H.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eb.rX, {
                                    children: [
                                        (0, l.jsx)(eb.Dr, {
                                            id: "settings",
                                            label: Y.intl.string(H.default["xhcY+n"]),
                                            icon: v.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                            action: () => (0, eY.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(eb.Dr, {
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
                  return (0, l.jsx)("div", {
                      ref: I,
                      className: eq.h,
                      children: (0, l.jsx)(D.A.Icon, {
                          icon: eG.MoreHorizontalIcon,
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
var eZ = n(769979);
function e$(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(D.A, {
        hideSearch: !0,
        toolbar: n,
        className: eZ.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: eZ.QF,
            children: [
                (0, l.jsx)(_.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: R.A.colors.TEXT_STRONG,
                    className: eZ.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(D.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(D.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(D.A.Title, { className: eZ.Qw, wrapperClassName: eZ.DD, children: t }),
            ],
        }),
    });
}
var eQ = n(73432),
    eJ = n(683071),
    e0 = n(47167),
    e2 = n(808728),
    e1 = n(994500),
    e6 = n(287809),
    e9 = n(652215);
let e8 = "conjuring-help";
var e7 = n(107148);
function e3() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([e6.default, V.A, e2.Ay, e1.A], () => {
                let e = e6.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of V.A.getGuildsArray()) {
                    if (!t.features.has(e9.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = e2.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, e0.m1)(t, e6.default, e1.A) === e8;
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
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, G.pX)(e9.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eL.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: e7.l,
              children: (0, l.jsx)(eJ.w, {
                  type: "info",
                  iconAlign: "center",
                  children: Y.intl.format(H.default["4BsHmp"], { channel: e8, onNavigate: t }),
              }),
          });
}
var e5 = n(321593),
    e4 = n(580954),
    te = n(189213),
    tt = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function tn(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = t === tt.PERMISSIONS;
    return (0, l.jsx)(te.Modal, {
        transitionState: n,
        onClose: a,
        title: Y.intl.string(i ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: Y.intl.string(i ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Y.intl.string(i ? Y.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function ta(e) {
    (0, ed.openModal)((t) => (0, l.jsx)(tn, { ...t, reason: e }));
}
var tl = n(480007),
    ti = n(584936),
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
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function tv(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function tC(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
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
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, w.o)(Y.intl.formatToPlainString(H.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    ej(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, w.o)(
                                        409 === (n = e instanceof el._v ? e.status : null)
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
                onImport: (o = ev(
                    i.useCallback(
                        (e) => {
                            let a = ek(e);
                            null != a
                                ? (0, y.P0)((0, w.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: Y.intl.formatToPlainString(H.default.XYZqZK, { name: n }),
                                      subtitle: Y.intl.string(H.default["6syXoH"]),
                                      confirmText: Y.intl.string(H.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, G.pX)(e9.BVt.CHANNEL(p, eU.VV.VIBEGRATIONS, t));
                                          try {
                                              await ex(t, e, Y.intl.string(H.default.C7GU2r));
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
    return (0, l.jsxs)("div", {
        className: tk.OY,
        children: [
            (0, l.jsx)(e5.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tk.W6,
                onClick: m,
                children: [
                    null == C
                        ? (0, l.jsx)("div", {
                              className: tk.a8,
                              "aria-hidden": !0,
                              children: (0, l.jsx)(g.k, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--icon-muted)",
                              }),
                          })
                        : (0, l.jsx)("img", { alt: "", src: C, className: tk.VJ }),
                    (0, l.jsxs)("div", {
                        className: tk.MM,
                        children: [
                            (0, l.jsx)(b.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tk.j1,
                                children: r.name,
                            }),
                            (0, l.jsxs)("div", {
                                className: tk.h3,
                                children: [
                                    (0, l.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tk.Wb,
                                        children: N,
                                    }),
                                    null == A
                                        ? null
                                        : (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("span", {
                                                      className: tk.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, l.jsx)(b.E, {
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
            (0, l.jsx)("div", {
                className: tk.M2,
                children: (0, l.jsxs)("div", {
                    className: tk.Pl,
                    children: [
                        (0, l.jsx)(eW, {
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
        [p, m] = i.useState(!1),
        [h, f] = i.useState(!0),
        [g, A] = i.useState(!1),
        [I, N] = i.useState(!1),
        [E, S] = i.useState(!1),
        P = z.Q_.useSetting(),
        [_, R] = i.useState(null),
        [F, V] = i.useState(null),
        L = s?.id ?? null,
        B = i.useRef(L),
        q = i.useRef(!0),
        X = i.useRef(!1),
        K = i.useRef(null);
    ((B.current = L),
        i.useEffect(
            () => (
                (q.current = !0),
                () => {
                    q.current = !1;
                }
            ),
            [],
        ));
    let Z = (0, u.bG)([ei.Ay], () => (null == L ? null : ei.Ay.getIntegrationStatus(L)), [L]),
        { data: $, isLoading: es } = (0, O.YY)(s?.preview_application_id ?? void 0),
        eo = null != L && F !== L,
        er = Z?.preview_ready === !0,
        eu = Z?.has_activity === !0,
        {
            availability: ec,
            activeMode: ep,
            setMode: ef,
            widgetApplicationId: eg,
        } = (0, J.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: eu,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: Z?.owner_authorization_revoked === !0,
        }),
        eb = (0, en.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: er,
            integrationInstalled: Z?.integration_installed ?? null,
            botPermissionsChanged: Z?.bot_permissions_changed === !0,
        }),
        ey = p || eo || es,
        ew = Y.intl.string(H.default["5gU57O"]),
        ej = h && !E && !g && !I,
        eC = Y.intl.string(ej ? H.default.YdgE0j : H.default.aWVf4j),
        eA = i.useCallback(() => {
            if (E || g || I) {
                (S(!1), A(!1), N(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [E, g, I]),
        eI = i.useCallback(() => f(!1), []),
        { active: eN } = (0, ee.Q_)(L),
        eE = i.useRef(null),
        eS = (0, et.o4)(L),
        eP = Y.intl.string(eS ? H.default.bfQ4Ki : eN ? H.default.rfNEHn : H.default.lXcEa2),
        e_ = i.useCallback(() => {
            if (null != L) {
                if (eN) return void (0, ee.PS)(L);
                (S(!1), A(!1), N(!1), f(!0), (0, ee.nI)(L));
            }
        }, [L, eN]),
        eO = i.useCallback(() => {
            S((e) => !e && (f(!0), A(!1), N(!1), !0));
        }, []),
        eT = i.useCallback(() => S(!1), []),
        eM = i.useCallback(
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
                    (0, el.oB)(t, e.sha)
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
        eD = (0, u.bG)([ea.A], () => ea.A.isBuilderPreviewMobile()),
        eG = Y.intl.string(eD ? H.default["3uCc8U"] : H.default["+nzCxZ"]),
        ez = i.useCallback(() => (0, U.GG)(!eD), [eD]),
        eF = (0, M.A)(s?.preview_application_id ?? null, tx.sd),
        eV = (0, tx.x1)(eF) && eF.data.proxyTicketRefreshing,
        eL = i.useCallback(() => {
            null == eF || eV || T.A.refreshProxyTicket(eF.id);
        }, [eF, eV]),
        eB = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eF?.id), (0, el.Bn)(e), (0, e4.A)().leaveFrame(t)), r());
        }, [s, eF?.id, r]),
        eH = i.useCallback(() => {
            null != s && (f(!0), (0, el.dv)(s.id, Y.intl.string(H.default["2ejwtJ"])));
        }, [s]),
        eq = ev(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ek(e);
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
                                      await ex(t, e, Y.intl.string(H.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eX = i.useCallback(() => {
            null != s && (0, ti.A)(s, d);
        }, [s, d]),
        eK = i.useCallback(async () => {
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
    i.useEffect(
        () => (
            eK(),
            () => {
                (K.current?.abort(), (K.current = null));
            }
        ),
        [eK],
    );
    let eZ =
            ((t = s ?? null), (a = Z ?? null), a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eJ = i.useCallback(async () => {
            null != s && (await W(s, eZ));
        }, [eZ, s]),
        e0 = i.useCallback(async () => {
            try {
                await eJ();
            } catch {}
            await eK();
        }, [eK, eJ]),
        e2 = i.useCallback(() => {
            let e = s?.preview_application_id;
            null != s &&
                null != e &&
                Q.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: $ ?? null,
                    guildId: eZ,
                    onClose: () => {
                        e0();
                    },
                });
        }, [e0, eZ, $, s]),
        e1 = eb
            ? { type: "permissions", onReviewPermissions: e2, loading: es || eo }
            : eo && null == Z
              ? { type: "checking" }
              : void 0;
    i.useEffect(() => {
        null == s && o && (0, G.pX)(e9.BVt.CHANNEL(d, eU.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let e6 = i.useCallback((e) => {
            m(!0);
            let t = (0, el.TV)(e).then((t) => {
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
        e8 = i.useCallback(() => {
            if (null == s) return;
            if (!er) return void ta(tt.NO_PREVIEW);
            if (eb) return void ta(tt.PERMISSIONS);
            if ("user" === s.install_scope)
                return void e6(s.id)
                    .then(() => {
                        (0, y.P0)((0, w.o)(Y.intl.string(H.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, el.$C)(s.id);
            (e.catch(() => {}),
                (0, tl.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: e6(s.id),
                    initialDraft: e,
                }));
        }, [d, eb, er, s, e6]),
        e7 =
            null != s && (0, ei.jf)(s)
                ? (0, l.jsx)(k.$, { size: "sm", variant: "primary", loading: p, disabled: ey, onClick: e8, text: ew })
                : null,
        e3 = (0, l.jsx)(e$, {
            title: s?.name ?? Y.intl.string(H.default.F2dRba),
            breadcrumb: { title: Y.intl.string(H.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tk.FO,
                          children: [
                              ec.showModeSwitch ? (0, l.jsx)(eR, { modes: ec.modes, mode: ep, onChange: ef }) : null,
                              (0, l.jsx)(D.A.Icon, {
                                  icon: eD ? tC : tv,
                                  tooltip: eG,
                                  "aria-label": eG,
                                  selected: eD,
                                  onClick: ez,
                              }),
                              (0, l.jsx)(D.A.Icon, {
                                  ref: eE,
                                  icon: eQ.A,
                                  tooltip: eP,
                                  "aria-label": eP,
                                  selected: eN,
                                  disabled: eS,
                                  onClick: e_,
                              }),
                              "frame" === ep ? (0, l.jsx)(eh.A, { frame: eF, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: tk.YJ }),
                              P
                                  ? (0, l.jsx)(D.A.Icon, {
                                        icon: j.BugIcon,
                                        tooltip: Y.intl.string(H.default["8MLfBT"]),
                                        "aria-label": Y.intl.string(H.default["8MLfBT"]),
                                        selected: E,
                                        onClick: eO,
                                    })
                                  : null,
                              (0, ei.PV)(s)
                                  ? (0, l.jsx)(D.A.Icon, {
                                        icon: v.SettingsIcon,
                                        tooltip: Y.intl.string(H.default["xhcY+n"]),
                                        "aria-label": Y.intl.string(H.default["xhcY+n"]),
                                        onClick: () => (0, eY.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(eW, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, ei.PV)(s),
                                  canRemix: (0, ei.H_)(s),
                                  onRefresh: (0, tx.x1)(eF) ? eL : void 0,
                                  isRefreshing: eV,
                                  onClose: eB,
                                  onExport: eH,
                                  onImport: eq.open,
                                  onRemix: eX,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, ed.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, l.jsx)(t, { ...n, projectId: e });
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
                                      ec.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ec.profileState
                                          ? eg
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ej
                                  ? null
                                  : (0, l.jsx)(D.A.Icon, { icon: tj, tooltip: eC, "aria-label": eC, onClick: eA }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tk.nj,
        children: [
            eq.input,
            (0, l.jsx)("main", {
                className: tk.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: tk.j5,
                              children: [
                                  e3,
                                  (0, l.jsxs)("div", {
                                      className: tk.sD,
                                      children: [
                                          (0, l.jsx)(C.D, {
                                              variant: "heading-lg/semibold",
                                              children: Y.intl.string(H.default.F2dRba),
                                          }),
                                          (0, l.jsx)(b.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: Y.intl.string(H.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: Y.intl.string(H.default["42EdIV"]),
                                              onClick: () => (0, U.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              em.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eE,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: tx.sd,
                                  header: e3,
                                  chatOpen: h,
                                  onCloseChat: eI,
                                  chatHeaderAction: e7,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: I,
                                  onCloseRestorePoints: () => N(!1),
                                  installScope: s.install_scope,
                                  debugOpen: P && E,
                                  onCloseDebug: eT,
                                  onRestoreVersion: eM,
                                  restoreState: _,
                                  previewReady: er,
                                  previewGate: e1,
                                  availability: ec,
                                  activeMode: ep,
                                  widgetApplicationId: eg,
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
        [G, z] = i.useState(() => ({ guildId: a, filter: tm(a) })),
        F = (G.guildId === a ? G.filter : tm(a)) ?? a,
        L = i.useCallback(
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
        q = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: _.D, label: Y.intl.string(H.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: tu,
                    leading: eC.UserIcon,
                    label: Y.intl.string(H.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: tc,
                    leading: eA.R,
                    label: Y.intl.string(H.default["qqH+iN"]),
                },
                ...B.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, l.jsx)(to.Ay, { guild: e, size: to.Ay.Sizes.MINI, active: !0 }),
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
    i.useEffect(() => {
        let e = th(F);
        null == e || ei.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [F]);
    let W = i.useMemo(
            () =>
                X.filter((e) => tf(e, F)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [X, F],
        ),
        Q = i.useMemo(
            () => [
                {
                    label: Y.intl.string(H.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: tr,
                            label: Y.intl.string(H.default.UXnPhI),
                            leading: eC.UserIcon,
                        },
                        ...m.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, l.jsx)(to.Ay, { guild: e, size: to.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [m],
        ),
        J = i.useMemo(
            () =>
                t
                    .filter((e) => tf(e, F))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, F],
        ),
        ee = i.useCallback(
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
        eo = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || O());
            },
            [d, O],
        ),
        er = th(F) ?? a,
        ed = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(er), [er]),
        eu = (0, u.bG)([ei.Ay], () => ei.Ay.getGuildProjectsFetchState(a), [a]),
        [ec, em] = i.useState(ty),
        eh = i.useMemo(() => tg.w.get(tw(a)) ?? !1, [a]),
        ef = "success" === eu,
        eg = (0, u.yK)([ei.Ay], () => ei.Ay.getSharedProjects(a), [a]).length > 0 || t.some((e) => tf(e, a)),
        eb = ec ?? (!!eg || "error" === eu || (!ef && eh));
    i.useEffect(() => {
        ef && tg.w.set(tw(a), eg);
    }, [ef, eg, a]);
    let ey = i.useCallback((e) => {
            (tg.w.set(tb, e), em(e));
        }, []),
        ew = i.useCallback(() => ey(!eb), [ey, eb]),
        ex = i.useCallback(() => ey(!1), [ey]),
        ek = Y.intl.string(H.default.jDPFDh),
        ej = eb ? ek : Y.intl.string(H.default.a6d2y1);
    return (0, l.jsx)("div", {
        className: o()(tk.nj, tk.a0),
        children: (0, l.jsxs)("div", {
            className: tk.Yo,
            children: [
                (0, l.jsxs)("main", {
                    className: tk.ps,
                    children: [
                        (0, l.jsx)(e$, {
                            title: Y.intl.string(H.default.Xmvb23),
                            actions: (0, l.jsx)(D.A.Icon, {
                                icon: A.Z,
                                tooltip: ej,
                                "aria-label": ej,
                                selected: eb,
                                onClick: ew,
                            }),
                        }),
                        (0, l.jsx)(I.Ip, {
                            className: tk.Yy,
                            children: (0, l.jsx)("div", {
                                className: tk.Mo,
                                children: (0, l.jsxs)("section", {
                                    className: o()(tk.Qs, tk.Ix),
                                    children: [
                                        (0, l.jsx)(e3, {}),
                                        (0, l.jsx)(C.D, {
                                            variant: "heading-xl/semibold",
                                            children: Y.intl.string(H.default["2tYpRK"]),
                                        }),
                                        (0, l.jsxs)("section", {
                                            className: tk.WI,
                                            "aria-label": el,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tk.G9,
                                                    children: [
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: el,
                                                        }),
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("ol", {
                                                    className: tk.Aw,
                                                    children: ea.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tk.EA,
                                                                children: (0, l.jsxs)(f.D, {
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
                                                                        (0, l.jsx)(b.E, {
                                                                            className: tk.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, l.jsx)(b.E, {
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
                                        (0, l.jsxs)("section", {
                                            className: tk.WI,
                                            "aria-label": es,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: tk.G9,
                                                    children: [
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: es,
                                                        }),
                                                        (0, l.jsx)(b.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: Y.intl.string(H.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("ol", {
                                                    className: tk.Aw,
                                                    children: en.map((e) =>
                                                        (0, l.jsx)(
                                                            "li",
                                                            {
                                                                className: tk.EA,
                                                                children: (0, l.jsx)(f.D, {
                                                                    "aria-disabled": s,
                                                                    className: tk.nx,
                                                                    onClick: s ? void 0 : () => O(e),
                                                                    children: (0, l.jsx)(b.E, {
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
                                        (0, l.jsx)(ep, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: tk.Yl,
                            children: (0, l.jsxs)("div", {
                                className: o()(tk.Qs, tk.DA),
                                children: [
                                    (0, l.jsx)(N.f, {
                                        label: et,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: n,
                                        placeholder: et,
                                        error: r,
                                        onChange: v,
                                        onKeyDown: eo,
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: tk.VP,
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: tk.gH,
                                                children: (0, l.jsx)(E.l, {
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
                                            (0, l.jsx)(eE.A, {
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
                                            (0, l.jsx)(k.$, {
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
                (0, l.jsxs)("aside", {
                    className: tk.pA,
                    hidden: !eb,
                    "aria-label": Y.intl.string(H.default.Bo5fE3),
                    children: [
                        (0, l.jsxs)("div", {
                            className: tk.IR,
                            children: [
                                (0, l.jsx)(b.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: tk.RM,
                                    children: Y.intl.string(H.default.Bo5fE3),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tk.Ss,
                                    children: [
                                        (0, l.jsx)(eN, { importing: M, onImport: T }),
                                        (0, l.jsx)(D.A.Icon, { icon: S.P, tooltip: ek, "aria-label": ek, onClick: ex }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.Ip, {
                            className: tk.xe,
                            children: [
                                (0, l.jsx)("div", {
                                    className: tk.Vw,
                                    children: (0, l.jsx)(E.l, {
                                        selectionMode: "single",
                                        label: Y.intl.string(H.default.mvtKAm),
                                        hideLabel: !0,
                                        options: q,
                                        value: F,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, l.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: tk.wE,
                                    children: Y.intl.string(H.default.YnAFtT),
                                }),
                                ("unattempted" === ed || "loading" === ed) && 0 === J.length
                                    ? (0, l.jsx)("div", { className: tk.E8, children: (0, l.jsx)(P.y, {}) })
                                    : "error" === ed && 0 === J.length
                                      ? (0, l.jsxs)("div", {
                                            className: tk.E8,
                                            children: [
                                                (0, l.jsx)(b.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: tk.JS,
                                                    children: Y.intl.string(H.default["IN/HRP"]),
                                                }),
                                                (0, l.jsx)(k.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: Y.intl.string(H.default["42EdIV"]),
                                                    onClick: () => (0, U.hF)(er),
                                                }),
                                            ],
                                        })
                                      : 0 === J.length
                                        ? (0, l.jsx)("div", {
                                              className: tk.D1,
                                              children: (0, l.jsxs)("div", {
                                                  className: tk.ST,
                                                  children: [
                                                      (0, l.jsx)(_.D, { size: "lg", color: R.A.colors.TEXT_SUBTLE }),
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: tk.sI,
                                                          children: Y.intl.string(H.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, l.jsx)("div", {
                                              className: tk.Dq,
                                              children: J.map((e) =>
                                                  (0, l.jsx)(
                                                      tA,
                                                      {
                                                          project: e,
                                                          guildId: a,
                                                          onSelect: () => ee(e),
                                                          onRemix: () => (0, ti.A)(e, a),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                W.length > 0
                                    ? (0, l.jsxs)("div", {
                                          className: tk.qx,
                                          children: [
                                              (0, l.jsxs)("div", {
                                                  className: tk.uc,
                                                  children: [
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: Y.intl.string(H.default.jrCnUc),
                                                      }),
                                                      (0, l.jsx)(b.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: Y.intl.string(H.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, l.jsx)("div", {
                                                  className: tk.Dq,
                                                  children: W.map((e) =>
                                                      (0, l.jsx)(
                                                          tA,
                                                          {
                                                              project: e,
                                                              guildId: a,
                                                              onSelect: () => ee(e),
                                                              onRemix: () => (0, ti.A)(e, a),
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
                return null != e && L.A.can(e9.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [d, c] = i.useState(""),
        p = a ?? null,
        [m, h] = i.useState(!1),
        [f, g] = i.useState(null),
        b = (0, ts._)("VibegrationsScreen"),
        [k, j] = i.useState(null);
    i.useEffect(() => {
        j(null);
    }, [n]);
    let v = i.useMemo(() => (b.some((e) => e.id === n) ? n : tr), [b, n]),
        C = k ?? v,
        A = C === tr ? "user" : "guild",
        I = C === tr ? n : C,
        [N, E] = i.useState(null);
    (i.useEffect(() => {
        (0, U.hF)(n);
    }, [n, o, r]),
        i.useEffect(() => {
            (0, U.dm)(n, p);
        }, [n, p]));
    let S = i.useCallback(
            async (e) => {
                let t = (e ?? d).trim(),
                    n = es({ idea: t, installScope: A, submitting: m });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && c(e), h(!0), g(null));
                    try {
                        let e = await (0, U.gA)({ guild_id: I, install_scope: A });
                        ((0, el.Hc)(e),
                            (0, el.r2)(e, N ?? K.Cl),
                            (0, el.dv)(e, t),
                            (0, G.pX)(e9.BVt.CHANNEL(I, eU.VV.VIBEGRATIONS, e)),
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
        [P, _] = i.useState(!1),
        R = i.useCallback(
            async (e, t) => {
                let a = ek(e);
                if (null != a) return void (0, y.P0)((0, w.o)(a, x.Ck.FAILURE));
                _(!0);
                let l = null;
                try {
                    ((l = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, el.Hc)(l),
                        (0, el.r2)(l, N ?? K.Cl),
                        await ex(l, e, Y.intl.string(H.default.KjEtrZ)),
                        (0, G.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS, l)),
                        E(null));
                } catch {
                    (null != l && (await (0, U.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, w.o)(Y.intl.string(H.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    _(!1);
                }
            },
            [n, N],
        ),
        O = i.useCallback(
            (e) => {
                (0, G.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        T = i.useCallback(() => {
            (0, G.pX)(e9.BVt.CHANNEL(n, eU.VV.VIBEGRATIONS));
        }, [n]),
        M = i.useCallback((e) => {
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
        ? (0, l.jsx)(tI, { project: D, projectsLoaded: z, onBack: T, guildId: n }, p)
        : (0, l.jsx)(tN, {
              projects: s,
              modelSettings: N,
              onModelSettingsChange: E,
              idea: d,
              guildId: n,
              submitting: m,
              createError: f,
              createDisabled: "idea" === (t = es({ idea: d, installScope: A, submitting: m })) || "submitting" === t,
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
