(n.r(t), n.d(t, { default: () => tu }));
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
    g = n(834730),
    y = n(691540),
    b = n(857250),
    x = n(97483),
    w = n(821609),
    v = n(92446),
    j = n(625903),
    k = n(297264),
    C = n(364522),
    A = n(103557),
    I = n(691885),
    N = n(289873),
    E = n(152367),
    S = n(661531),
    P = n(627363),
    R = n(625180),
    _ = n(672929),
    T = n(742589),
    D = n(976860),
    M = n(885386),
    O = n(696451),
    L = n(71393),
    V = n(576705),
    z = n(486020),
    G = n(50617),
    F = n(375708),
    B = n(948230),
    Y = n(936494),
    H = n(976713);
async function X(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, B.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var U = n(673724),
    q = n(208137),
    K = n(964992),
    W = n(683180),
    Z = n(822835),
    $ = n(559676),
    Q = n(58551),
    J = n(805332),
    ee = n(277977),
    et = n(972786);
function en(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var ea = n(58703),
    el = n(127181),
    ei = n(192308);
function es() {
    (0, ei.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var eo = n(413927);
function er() {
    let e = (0, el.TH)("desktop");
    if (0 === e.length) return null;
    let t = F.intl.string(G.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: eo.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: eo.bZ,
                children: [
                    (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: F.intl.string(G.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: eo.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: eo.S3,
                            children: [
                                (0, l.jsxs)(g.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: eo.VO,
                                    children: [
                                        (0, ea.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, el.MZ)(e) ? ` \xb7 ${F.intl.string(G.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, l.jsx)(g.E, {
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
            (0, el.B)("desktop")
                ? (0, l.jsx)(w.$, {
                      variant: "secondary",
                      size: "sm",
                      text: F.intl.string(G.default.YWxThz),
                      onClick: es,
                  })
                : null,
        ],
    });
}
var ed = n(803510),
    eu = n(210744),
    ec = n(922016),
    ep = n(980707),
    em = n(477782),
    eh = n(81369),
    ef = n(402879);
async function eg(e, t, n) {
    (0, ee.Hc)(e);
    let a = await (0, ee.vX)(e, t);
    (0, ee.dv)(e, n, [a]);
}
function ey(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, U.x5)(e.size, t)
        ? null
        : F.intl.formatToPlainString(G.default.AzziHF, { size: (0, U.ZJ)((0, U.yr)(t)) });
}
async function eb(e, t) {
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
        l = await (0, ee.cS)(e, a);
    await (0, ef.F)(l, a);
}
function ex(e) {
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
var ew = n(950305),
    ev = n(664121);
let ej = [
    { value: "user", icon: ew.UserIcon, nameMessage: G.default.iqXIRN },
    { value: "guild", icon: ev.R, nameMessage: G.default.LdgKdI },
];
function ek(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = ex(i.useCallback((e) => n(e, "user"), [n])),
        o = ex(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ec.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: ec.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(ep.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": F.intl.string(G.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(em.rX, {
                            label: F.intl.string(G.default.MLg0S8),
                            children: ej
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: F.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        em.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: r[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, l.jsx)(w.$, {
                        ...e,
                        buttonRef: a,
                        variant: "secondary",
                        size: "sm",
                        icon: eh.H,
                        text: F.intl.string(G.default["NHP2+t"]),
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
var eC = n(113491),
    eA = n(629584),
    eI = n(753514),
    eN = n(491920);
function eE(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eI.kZ)(e), "aria-controls": (0, eI.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(eA.I, {
              role: "tablist",
              look: "pill",
              className: o()(eN.b, s),
              optionClassName: eN.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eS = n(663417),
    eP = n(70688),
    eR = n(173936),
    e_ = n(473935),
    eT = n(365199),
    eD = n(770818),
    eM = n(147036),
    eO = n(957565),
    eL = n(557875),
    eV = n(869369),
    ez = n(123917);
let eG = new Set();
n(321073);
var eF = n(746080),
    eB = n(793712);
let eY = [];
function eH(e) {
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
            onRefresh: w,
            isRefreshing: v = !1,
            onClose: k,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        I = i.useRef(null),
        { pending: N, refresh: E } = (0, eD.A)(C ?? null),
        { pending: S, connect: P } = (function (e) {
            let [t, n] = i.useState(eG),
                a = i.useRef(eG),
                l = i.useCallback((e) => {
                    ((a.current = (0, eL.Q6)(a.current, e)), n(a.current));
                }, []);
            return {
                pending: t,
                connect: i.useCallback(
                    (t) => {
                        if (null == e) return;
                        let i = (0, eL.K9)(a.current, t.type);
                        async function s() {
                            let n = await (0, ee.JI)(e, t.type);
                            if ((l(t.type), "url" === n.type)) return void (0, ez.h)({ href: n.url, trusted: !1 });
                            let a =
                                "setup" === (0, eL.rq)(n.error)
                                    ? F.intl.string(G.default.avu1u4)
                                    : F.intl.string(G.default["5fwOcF"]);
                            (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                        }
                        null != i && ((a.current = i), n(i), s().catch(() => l(t.type)));
                    },
                    [e, l],
                ),
            };
        })(A ?? null),
        R = (0, u.bG)([ee.Ay], () => (null == A ? eY : ee.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: F.intl.string(G.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: F.intl.formatToPlainString(G.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: F.intl.formatToPlainString(G.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: N,
            offers: i.useMemo(() => (0, eL.Xl)(R), [R]),
            connectPending: S,
        }),
        D = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        M = null != m && r,
        O = o && null != p,
        L = M || null != d || O || null != h || null != f || null != g,
        V = eO.p5 && null != a,
        z = eO.p5;
    return null != w || null != k || L || z || o
        ? (0, l.jsx)(ec.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: ec.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(ep.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": F.intl.string(F.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != w || null != k
                              ? (0, l.jsxs)(em.rX, {
                                    children: [
                                        null != w
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "refresh",
                                                  icon: eS.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eS.RefreshIcon },
                                                  label: F.intl.string(G.default.xKexN1),
                                                  disabled: v,
                                                  action: w,
                                              })
                                            : null,
                                        null != k
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "close",
                                                  icon: eP.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eP.DoorExitIcon },
                                                  label: F.intl.string(G.default.Ea0Wrr),
                                                  action: k,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, l.jsx)(em.rX, {
                                    children: _.map((e) =>
                                        (0, l.jsx)(
                                            em.Dr,
                                            {
                                                id: e.id,
                                                label: e.label,
                                                disabled: e.disabled,
                                                dontCloseOnAction: !0,
                                                action: () => {
                                                    if ("refresh" === e.kind) return void E();
                                                    let t = null == e.connectionType ? null : D.get(e.connectionType);
                                                    null != t && P(t);
                                                },
                                            },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          L
                              ? (0, l.jsxs)(em.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "remix",
                                                  label: F.intl.string(G.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "export",
                                                  label: F.intl.string(G.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "import",
                                                  label: F.intl.string(G.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "connect-tool",
                                                  label: F.intl.string(G.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "version-history",
                                                  label: F.intl.string(G.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "restore-points",
                                                  label: F.intl.string(G.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z
                              ? (0, l.jsxs)(em.rX, {
                                    children: [
                                        V
                                            ? (0, l.jsx)(em.Dr, {
                                                  id: "copy-link",
                                                  label: F.intl.string(F.t.WqhZss),
                                                  icon: eR.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: eR.LinkIcon },
                                                  action: () =>
                                                      (0, eO.C)((0, eM.n)(a, eF.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(F.intl.string(F.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(em.Dr, {
                                            id: "copy-project-id",
                                            label: F.intl.string(G.default.b4TqpT),
                                            icon: e_.L,
                                            leadingAccessory: { type: "icon", icon: e_.L },
                                            action: () =>
                                                (0, eO.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(F.intl.string(G.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(em.rX, {
                                    children: [
                                        (0, l.jsx)(em.Dr, {
                                            id: "settings",
                                            label: F.intl.string(G.default["xhcY+n"]),
                                            icon: j.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: j.SettingsIcon },
                                            action: () => (0, eV.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(em.Dr, {
                                            id: "delete",
                                            label: F.intl.string(F.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: F.intl.formatToPlainString(G.default.ZokHVz, { name: n }),
                                                    subtitle: F.intl.string(G.default.NmF939),
                                                    confirmText: F.intl.string(F.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, B.xx)(t)).ok)
                                                            throw Error(F.intl.string(G.default.tqKZCi));
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
                      className: eB.h,
                      children: (0, l.jsx)(T.A.Icon, {
                          icon: eT.MoreHorizontalIcon,
                          tooltip: F.intl.string(F.t["UKOtz+"]),
                          "aria-label": F.intl.string(F.t["UKOtz+"]),
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
var eX = n(769979);
function eU(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(T.A, {
        hideSearch: !0,
        toolbar: n,
        className: eX.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: eX.QF,
            children: [
                (0, l.jsx)(E.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: eX.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(T.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(T.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(T.A.Title, { className: eX.Qw, wrapperClassName: eX.DD, children: t }),
            ],
        }),
    });
}
var eq = n(73432),
    eK = n(683071),
    eW = n(47167),
    eZ = n(808728),
    e$ = n(994500),
    eQ = n(287809),
    eJ = n(652215);
let e0 = "conjuring-help";
var e2 = n(107148);
function e1() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([eQ.default, L.A, eZ.Ay, e$.A], () => {
                let e = eQ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(eJ.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eZ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, eW.m1)(t, eQ.default, e$.A) === e0;
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
                    ? (0, D.pX)(eJ.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, ez.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: e2.l,
              children: (0, l.jsx)(eK.w, {
                  type: "info",
                  iconAlign: "center",
                  children: F.intl.format(G.default["4BsHmp"], { channel: e0, onNavigate: t }),
              }),
          });
}
var e6 = n(321593),
    e9 = n(580954),
    e8 = n(189213),
    e7 = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function e3(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = "permissions" === t;
    return (0, l.jsx)(e8.Modal, {
        transitionState: n,
        onClose: a,
        title: F.intl.string(i ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: F.intl.string(i ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: F.intl.string(i ? F.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function e5(e) {
    (0, ei.openModal)((t) => (0, l.jsx)(e3, { ...t, reason: e }));
}
var e4 = n(480007),
    te = n(584936),
    tt = n(783134),
    tn = n(165610),
    ta = n(352978);
function tl(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ti(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function ts(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function to(e) {
    let t,
        n,
        a,
        s,
        o,
        { project: r, guildId: u, onSelect: p, onRemix: m } = e,
        h =
            ((t = r.id),
            (n = r.name),
            (a = i.useRef(!1)),
            (s = i.useCallback(() => {
                a.current ||
                    ((a.current = !0),
                    (0, y.P0)((0, b.o)(F.intl.formatToPlainString(G.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    eb(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof ee._v ? e.status : null)
                                            ? F.intl.string(G.default.uB40Hz)
                                            : 404 === n
                                              ? F.intl.string(G.default.wCq2jC)
                                              : F.intl.string(G.default.G2GqyP),
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
                onImport: (o = ex(
                    i.useCallback(
                        (e) => {
                            let a = ey(e);
                            null != a
                                ? (0, y.P0)((0, b.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: F.intl.formatToPlainString(G.default.XYZqZK, { name: n }),
                                      subtitle: F.intl.string(G.default["6syXoH"]),
                                      confirmText: F.intl.string(G.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(eJ.BVt.CHANNEL(u, eF.VV.VIBEGRATIONS, t));
                                          try {
                                              await eg(t, e, F.intl.string(G.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, b.o)(F.intl.string(G.default["02GpNr"]), x.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, n, u],
                    ),
                )).open,
                importInput: o.input,
            }),
        w = r.preview_application_id ?? r.application_id,
        { data: v } = (0, P.YY)(w),
        j =
            null == r.updated_at
                ? null
                : F.intl.formatToPlainString(G.default.oMDaqr, { time: d()(r.updated_at).fromNow() });
    return (0, l.jsxs)("div", {
        className: ta.OY,
        children: [
            (0, l.jsx)(e6.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: ta.W6,
                onClick: p,
                children: [
                    (0, l.jsx)("img", {
                        alt: "",
                        src: z.Ay.getApplicationIconURL({ id: w, icon: v?.icon, size: 40 }),
                        className: ta.VJ,
                    }),
                    (0, l.jsxs)("div", {
                        className: ta.MM,
                        children: [
                            (0, l.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: ta.j1,
                                children: r.name,
                            }),
                            null == j
                                ? null
                                : (0, l.jsx)("div", {
                                      className: ta.h3,
                                      children: (0, l.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: j,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: ta.M2,
                children: (0, l.jsxs)("div", {
                    className: ta.Pl,
                    children: [
                        (0, l.jsx)(eH, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: u,
                            projectGuildId: r.guild_id,
                            isOwner: (0, et.PV)(r),
                            canRemix: (0, et.H_)(r),
                            onRemix: m,
                            onExport: h.onExport,
                            onImport: h.onImport,
                        }),
                        h.importInput,
                    ],
                }),
            }),
        ],
    });
}
function tr(e) {
    var t, a;
    let { project: s, projectsLoaded: o, onBack: r, guildId: d } = e,
        [p, m] = i.useState(!1),
        [h, f] = i.useState(!0),
        [C, A] = i.useState(!1),
        [I, N] = i.useState(!1),
        [E, S] = i.useState(!1),
        O = M.Q_.useSetting(),
        [L, V] = i.useState(null),
        [z, Y] = i.useState(null),
        H = s?.id ?? null,
        U = i.useRef(H),
        q = i.useRef(!0),
        W = i.useRef(!1),
        en = i.useRef(null);
    ((U.current = H),
        i.useEffect(
            () => (
                (q.current = !0),
                () => {
                    q.current = !1;
                }
            ),
            [],
        ));
    let ea = (0, u.bG)([et.Ay], () => (null == H ? null : et.Ay.getIntegrationStatus(H)), [H]),
        { data: el, isLoading: es } = (0, P.YY)(s?.preview_application_id ?? void 0),
        eo = null != H && z !== H,
        er = ea?.preview_ready === !0,
        ec = ea?.has_activity === !0,
        {
            availability: ep,
            activeMode: em,
            setMode: eh,
            widgetApplicationId: ef,
        } = (0, Z.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ec,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ea?.owner_authorization_revoked === !0,
        }),
        eb = (0, Q.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: er,
            integrationInstalled: ea?.integration_installed ?? null,
            botPermissionsChanged: ea?.bot_permissions_changed === !0,
        }),
        ew = p || eo || es,
        ev = F.intl.string(G.default["5gU57O"]),
        ej = h && !E && !C && !I,
        ek = F.intl.string(ej ? G.default.YdgE0j : G.default.aWVf4j),
        eC = i.useCallback(() => {
            if (E || C || I) {
                (S(!1), A(!1), N(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [E, C, I]),
        eA = i.useCallback(() => f(!1), []),
        { active: eI } = (0, tt.Q_)(H),
        eN = i.useRef(null),
        eS = (0, $.o4)(H),
        eP = F.intl.string(eS ? G.default.bfQ4Ki : eI ? G.default.rfNEHn : G.default.lXcEa2),
        eR = i.useCallback(() => {
            if (null != H) {
                if (eI) return void (0, tt.PS)(H);
                (S(!1), A(!1), N(!1), f(!0), (0, tt.nI)(H));
            }
        }, [H, eI]),
        e_ = i.useCallback(() => {
            S((e) => !e && (f(!0), A(!1), N(!1), !0));
        }, []),
        eT = i.useCallback(() => S(!1), []),
        eD = i.useCallback(
            (e) => {
                if (null == s || W.current) return;
                let t = s.id;
                function n() {
                    return q.current && U.current === t;
                }
                ((W.current = !0),
                    A(!1),
                    f(!0),
                    V({ entry: e, status: "restoring" }),
                    (0, ee.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && V({ entry: e, status: "restored" });
                            },
                            (a) => {
                                n() &&
                                    (V({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, a),
                                    (0, y.P0)((0, b.o)(F.intl.string(G.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (W.current = !1);
                        }));
            },
            [s],
        ),
        eM = (0, u.bG)([J.A], () => J.A.isBuilderPreviewMobile()),
        eO = F.intl.string(eM ? G.default["3uCc8U"] : G.default["+nzCxZ"]),
        eL = i.useCallback(() => (0, B.GG)(!eM), [eM]),
        ez = (0, _.A)(s?.preview_application_id ?? null, tn.sd),
        eG = (0, tn.x1)(ez) && ez.data.proxyTicketRefreshing,
        eB = i.useCallback(() => {
            null == ez || eG || R.A.refreshProxyTicket(ez.id);
        }, [ez, eG]),
        eY = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ez?.id), (0, ee.Bn)(e), (0, e9.A)().leaveFrame(t)), r());
        }, [s, ez?.id, r]),
        eX = i.useCallback(() => {
            null != s && (f(!0), (0, ee.dv)(s.id, F.intl.string(G.default["2ejwtJ"])));
        }, [s]),
        eK = ex(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = ey(e);
                    null != n
                        ? (0, y.P0)((0, b.o)(n, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: F.intl.formatToPlainString(G.default.XYZqZK, { name: s.name }),
                              subtitle: F.intl.string(G.default["6syXoH"]),
                              confirmText: F.intl.string(G.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await eg(t, e, F.intl.string(G.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(F.intl.string(G.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eW = i.useCallback(() => {
            null != s && (0, te.A)(s, d);
        }, [s, d]),
        eZ = i.useCallback(async () => {
            if (null == H || U.current !== H) return;
            en.current?.abort();
            let e = new AbortController();
            ((en.current = e), Y(null));
            try {
                await (0, B.U1)(H, e.signal);
            } catch {
            } finally {
                e.signal.aborted || en.current !== e || U.current !== H || Y(H);
            }
        }, [H]);
    i.useEffect(
        () => (
            eZ(),
            () => {
                (en.current?.abort(), (en.current = null));
            }
        ),
        [eZ],
    );
    let e$ =
            ((t = s ?? null),
            (a = ea ?? null),
            a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eQ = i.useCallback(async () => {
            null != s && (await X(s, e$));
        }, [e$, s]),
        e0 = i.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eZ();
        }, [eZ, eQ]),
        e2 = i.useCallback(() => {
            let e = s?.preview_application_id;
            null != s &&
                null != e &&
                K.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: el ?? null,
                    guildId: e$,
                    onClose: () => {
                        e0();
                    },
                });
        }, [e0, e$, el, s]),
        e1 = eb
            ? { type: "permissions", onReviewPermissions: e2, loading: es || eo }
            : eo && null == ea
              ? { type: "checking" }
              : void 0;
    i.useEffect(() => {
        null == s && o && (0, D.pX)(eJ.BVt.CHANNEL(d, eF.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let e6 = i.useCallback((e) => {
            m(!0);
            let t = (0, ee.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(F.intl.string(G.default.fNP6Cd));
                (0, B.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, b.o)(e instanceof Error ? e.message : F.intl.string(G.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        e8 = i.useCallback(() => {
            if (null == s) return;
            if (!er) return void e5(e7.NO_PREVIEW);
            if (eb) return void e5(e7.PERMISSIONS);
            if ("user" === s.install_scope)
                return void e6(s.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(F.intl.string(G.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, ee.$C)(s.id);
            (e.catch(() => {}),
                (0, e4.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: e6(s.id),
                    initialDraft: e,
                }));
        }, [d, eb, er, s, e6]),
        e3 =
            null != s && (0, et.jf)(s)
                ? (0, l.jsx)(w.$, { size: "sm", variant: "primary", loading: p, disabled: ew, onClick: e8, text: ev })
                : null,
        to = (0, l.jsx)(eU, {
            title: s?.name ?? F.intl.string(G.default.F2dRba),
            breadcrumb: { title: F.intl.string(G.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: ta.FO,
                          children: [
                              ep.showModeSwitch ? (0, l.jsx)(eE, { modes: ep.modes, mode: em, onChange: eh }) : null,
                              (0, l.jsx)(T.A.Icon, {
                                  icon: eM ? ts : ti,
                                  tooltip: eO,
                                  "aria-label": eO,
                                  selected: eM,
                                  onClick: eL,
                              }),
                              (0, l.jsx)(T.A.Icon, {
                                  ref: eN,
                                  icon: eq.A,
                                  tooltip: eP,
                                  "aria-label": eP,
                                  selected: eI,
                                  disabled: eS,
                                  onClick: eR,
                              }),
                              "frame" === em ? (0, l.jsx)(eu.A, { frame: ez, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: ta.YJ }),
                              O
                                  ? (0, l.jsx)(T.A.Icon, {
                                        icon: v.BugIcon,
                                        tooltip: F.intl.string(G.default["8MLfBT"]),
                                        "aria-label": F.intl.string(G.default["8MLfBT"]),
                                        selected: E,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, et.PV)(s)
                                  ? (0, l.jsx)(T.A.Icon, {
                                        icon: j.SettingsIcon,
                                        tooltip: F.intl.string(G.default["xhcY+n"]),
                                        "aria-label": F.intl.string(G.default["xhcY+n"]),
                                        onClick: () => (0, eV.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(eH, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, et.PV)(s),
                                  canRemix: (0, et.H_)(s),
                                  onRefresh: (0, tn.x1)(ez) ? eB : void 0,
                                  isRefreshing: eG,
                                  onClose: eY,
                                  onExport: eX,
                                  onImport: eK.open,
                                  onRemix: eW,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, ei.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("461590"),
                                              ]).then(n.bind(n, 84469));
                                              return (n) => (0, l.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      L?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (f(!0), S(!1), N(!1), A(!0));
                                            },
                                  onRestorePoints: () => {
                                      (f(!0), S(!1), A(!1), N(!0));
                                  },
                                  refreshApplicationId:
                                      ep.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== ep.profileState
                                          ? ef
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ej
                                  ? null
                                  : (0, l.jsx)(T.A.Icon, { icon: tl, tooltip: ek, "aria-label": ek, onClick: eC }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: ta.nj,
        children: [
            eK.input,
            (0, l.jsx)("main", {
                className: ta.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: ta.j5,
                              children: [
                                  to,
                                  (0, l.jsxs)("div", {
                                      className: ta.sD,
                                      children: [
                                          (0, l.jsx)(k.D, {
                                              variant: "heading-lg/semibold",
                                              children: F.intl.string(G.default.F2dRba),
                                          }),
                                          (0, l.jsx)(g.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: F.intl.string(G.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: F.intl.string(G.default["42EdIV"]),
                                              onClick: () => (0, B.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              ed.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eN,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: tn.sd,
                                  header: to,
                                  chatOpen: h,
                                  onCloseChat: eA,
                                  chatHeaderAction: e3,
                                  versionHistoryOpen: C,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: I,
                                  onCloseRestorePoints: () => N(!1),
                                  installScope: s.install_scope,
                                  debugOpen: O && E,
                                  onCloseDebug: eT,
                                  onRestoreVersion: eD,
                                  restoreState: L,
                                  previewReady: er,
                                  previewGate: e1,
                                  availability: ep,
                                  activeMode: em,
                                  widgetApplicationId: ef,
                              },
                              s.id,
                          ),
            }),
        ],
    });
}
function td(e) {
    let {
            projects: t,
            sharedProjects: n,
            fetchState: a,
            idea: s,
            guildId: r,
            submitting: d,
            createError: u,
            createDisabled: c,
            installScope: p,
            onInstallScopeChange: m,
            installScopeError: h,
            modelSettings: y,
            onModelSettingsChange: b,
            onSelectProject: x,
            onIdeaChange: v,
            onCreate: j,
            onImportNewProject: P,
            importing: R,
        } = e,
        _ = i.useMemo(
            () =>
                n
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [n],
        ),
        T = i.useRef(null);
    i.useEffect(() => {
        null != h && T.current?.querySelector("button")?.focus();
    }, [h]);
    let D = i.useMemo(
            () =>
                t
                    .filter((e) => (0, W.X0)(e, r))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, r],
        ),
        M = F.intl.string(G.default.TU9IGR),
        O = [
            F.intl.string(G.default["E+Q26x"]),
            F.intl.string(G.default["06/jqP"]),
            F.intl.string(G.default["3gSfUa"]),
        ],
        L = [
            {
                id: "feature-showcase",
                name: F.intl.string(G.default.BLDsiz),
                description: F.intl.string(G.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: F.intl.string(G.default["+abXa8"]),
                description: F.intl.string(G.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: F.intl.string(G.default.ieAgex),
                description: F.intl.string(G.default["5yvj+f"]),
            },
        ],
        V = F.intl.string(G.default.FYK2xQ),
        z = F.intl.string(G.default["/SUK82"]),
        Y = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || j());
            },
            [c, j],
        );
    return (0, l.jsxs)("div", {
        className: o()(ta.nj, ta.a0),
        children: [
            (0, l.jsx)(eU, { title: F.intl.string(G.default.Xmvb23) }),
            (0, l.jsxs)("div", {
                className: ta.Yo,
                children: [
                    (0, l.jsxs)("main", {
                        className: ta.ps,
                        children: [
                            (0, l.jsx)(C.Ip, {
                                className: ta.Yy,
                                children: (0, l.jsx)("div", {
                                    className: ta.Mo,
                                    children: (0, l.jsxs)("section", {
                                        className: o()(ta.Qs, ta.Ix),
                                        children: [
                                            (0, l.jsx)(e1, {}),
                                            (0, l.jsx)(k.D, {
                                                variant: "heading-xl/semibold",
                                                children: F.intl.string(G.default["2tYpRK"]),
                                            }),
                                            (0, l.jsxs)("section", {
                                                className: ta.WI,
                                                "aria-label": V,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: ta.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: V,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: ta.Aw,
                                                        children: L.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: ta.EA,
                                                                    children: (0, l.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": F.intl.formatToPlainString(
                                                                            G.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: o()(ta.nx, ta.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return j(
                                                                                      ((t = e.name),
                                                                                      F.intl.formatToPlainString(
                                                                                          G.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, l.jsx)(g.E, {
                                                                                className: ta.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, l.jsx)(g.E, {
                                                                                className: ta.BK,
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
                                                className: ta.WI,
                                                "aria-label": z,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: ta.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: z,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: F.intl.string(G.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: ta.Aw,
                                                        children: O.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: ta.EA,
                                                                    children: (0, l.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: ta.nx,
                                                                        onClick: d ? void 0 : () => j(e),
                                                                        children: (0, l.jsx)(g.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: ta.un,
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
                                            (0, l.jsx)(er, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: ta.Yl,
                                children: (0, l.jsxs)("div", {
                                    className: o()(ta.Qs, ta.DA),
                                    children: [
                                        (0, l.jsx)(A.f, {
                                            label: M,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: M,
                                            error: u,
                                            onChange: v,
                                            onKeyDown: Y,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: ta.VP,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: ta.gH,
                                                    ref: T,
                                                    children: (0, l.jsx)(I.l, {
                                                        selectionMode: "single",
                                                        label: F.intl.string(G.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: F.intl.string(G.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: F.intl.string(G.default.MLg0S8),
                                                                options: ej.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: F.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: h,
                                                    }),
                                                }),
                                                (0, l.jsx)(eC.A, {
                                                    settings: y ?? H.Cl,
                                                    choices: (0, q.e)()
                                                        ? {
                                                              main: [...U.S8.main, ...U.wF.main],
                                                              subagent: [...U.S8.subagent, ...U.wF.subagent],
                                                              thinking: U.S8.thinking,
                                                          }
                                                        : U.S8,
                                                    disabled: d,
                                                    onChange: b,
                                                }),
                                                (0, l.jsx)(w.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
                                                    disabled: c,
                                                    loading: d,
                                                    onClick: () => j(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("aside", {
                        className: ta.pA,
                        "aria-label": F.intl.string(G.default.Bo5fE3),
                        children: [
                            (0, l.jsxs)("div", {
                                className: ta.IR,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ta.RM,
                                        children: [
                                            (0, l.jsx)(g.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(G.default.Bo5fE3),
                                            }),
                                            (0, l.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(G.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(ek, { importing: R, onImport: P }),
                                ],
                            }),
                            (0, l.jsxs)(C.Ip, {
                                className: ta.xe,
                                children: [
                                    (null == a || "loading" === a.type) && 0 === D.length
                                        ? (0, l.jsx)("div", { className: ta.E8, children: (0, l.jsx)(N.y, {}) })
                                        : a?.type === "error" && 0 === D.length
                                          ? (0, l.jsxs)("div", {
                                                className: ta.E8,
                                                children: [
                                                    (0, l.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: ta.JS,
                                                        children: F.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, l.jsx)(w.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(G.default["42EdIV"]),
                                                        onClick: () => (0, B.hF)(r),
                                                    }),
                                                ],
                                            })
                                          : 0 === D.length
                                            ? (0, l.jsx)("div", {
                                                  className: ta.D1,
                                                  children: (0, l.jsxs)("div", {
                                                      className: ta.ST,
                                                      children: [
                                                          (0, l.jsx)(E.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ta.sI,
                                                              children: F.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, l.jsx)("div", {
                                                  className: ta.Dq,
                                                  children: D.map((e) =>
                                                      (0, l.jsx)(
                                                          to,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => x(e.id),
                                                              onRemix: () => (0, te.A)(e, r),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, l.jsxs)("div", {
                                              className: ta.qx,
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: ta.uc,
                                                      children: [
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: F.intl.string(G.default.jrCnUc),
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: F.intl.string(G.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: ta.Dq,
                                                      children: _.map((e) =>
                                                          (0, l.jsx)(
                                                              to,
                                                              {
                                                                  project: e,
                                                                  guildId: r,
                                                                  onSelect: () => x(e.id),
                                                                  onRemix: () => (0, te.A)(e, r),
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
function tu(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([et.Ay], () => et.Ay.getOwnedProjects()),
        o = (0, u.bG)([et.Ay], () => et.Ay.getProjectsFetchState()),
        r = (0, u.yK)([et.Ay], () => et.Ay.getSharedProjects(n), [n]),
        d = (0, u.yK)([O.Ay], () => O.Ay.getSelfMember(n)?.roles ?? [], [n]),
        c = (0, u.bG)(
            [L.A, V.A],
            () => {
                let e = L.A.getGuild(n);
                return null != e && V.A.can(eJ.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [p, m] = i.useState(""),
        h = a ?? null,
        [f, g] = i.useState(!1),
        [w, v] = i.useState(null),
        [j, k] = i.useState("guild"),
        [C, A] = i.useState(null),
        [I, N] = i.useState(null);
    (i.useEffect(() => {
        (0, B.hF)(n);
    }, [n, d, c]),
        i.useEffect(() => {
            (0, B.dm)(n, h);
        }, [n, h]));
    let E = i.useCallback((e) => {
            (k(e), A(null));
        }, []),
        S = i.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    a = en({ idea: t, installScope: j, submitting: f });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == j) return void A(F.intl.string(G.default.jQ3nQB));
                    (null != e && m(e), g(!0), v(null));
                    try {
                        let e = await (0, B.gA)({ guild_id: n, install_scope: j });
                        ((0, ee.Hc)(e),
                            (0, ee.r2)(e, I ?? H.Cl),
                            (0, ee.dv)(e, t),
                            (0, D.pX)(eJ.BVt.CHANNEL(n, eF.VV.VIBEGRATIONS, e)),
                            m(""),
                            N(null));
                    } catch (e) {
                        v((0, Y.Xd)(e));
                    } finally {
                        g(!1);
                    }
                }
            },
            [j, n, p, I, f],
        ),
        [P, R] = i.useState(!1),
        _ = i.useCallback(
            async (e, t) => {
                let a = ey(e);
                if (null != a) return void (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                R(!0);
                let l = null;
                try {
                    ((l = await (0, B.gA)({ guild_id: n, install_scope: t })),
                        (0, ee.Hc)(l),
                        (0, ee.r2)(l, I ?? H.Cl),
                        await eg(l, e, F.intl.string(G.default.KjEtrZ)),
                        (0, D.pX)(eJ.BVt.CHANNEL(n, eF.VV.VIBEGRATIONS, l)),
                        N(null));
                } catch {
                    (null != l && (await (0, B.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(F.intl.string(G.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    R(!1);
                }
            },
            [n, I],
        ),
        T = i.useCallback(
            (e) => {
                (0, D.pX)(eJ.BVt.CHANNEL(n, eF.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        M = i.useCallback(() => {
            (0, D.pX)(eJ.BVt.CHANNEL(n, eF.VV.VIBEGRATIONS));
        }, [n]),
        z = i.useCallback((e) => {
            (m(e), v(null));
        }, []),
        X = (0, u.bG)(
            [et.Ay],
            () => {
                if (null == h) return null;
                let e = et.Ay.getProject(h);
                return null == e || (0, et.PV)(e) || e.guild_id === n ? e : null;
            },
            [h, n],
        ),
        U = (0, u.bG)([et.Ay], () => et.Ay.hasFetchedGuildProjects(n), [n]);
    return null != h
        ? (0, l.jsx)(tr, { project: X, projectsLoaded: U, onBack: M, guildId: n }, h)
        : (0, l.jsx)(td, {
              projects: s,
              sharedProjects: r,
              fetchState: o,
              modelSettings: I,
              onModelSettingsChange: N,
              idea: p,
              guildId: n,
              submitting: f,
              createError: w,
              createDisabled: "idea" === (t = en({ idea: p, installScope: j, submitting: f })) || "submitting" === t,
              onSelectProject: T,
              onIdeaChange: z,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: j,
              onInstallScopeChange: E,
              installScopeError: C,
          });
}
