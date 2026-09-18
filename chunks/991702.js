(n.r(t), n.d(t, { default: () => tc }));
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
    k = n(92446),
    v = n(625903),
    j = n(297264),
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
    F = n(50617),
    G = n(375708),
    B = n(948230),
    Y = n(936494),
    H = n(976713);
async function X(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, B.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var U = n(673724),
    q = n(208137),
    K = n(933294),
    W = n(683180),
    Z = n(822835),
    $ = n(74029),
    Q = n(559676),
    J = n(58551),
    ee = n(805332),
    et = n(277977),
    en = n(972786);
function ea(e) {
    let { idea: t, installScope: n, submitting: a } = e;
    return a ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var el = n(58703),
    ei = n(127181),
    es = n(192308);
function eo() {
    (0, es.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, l.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var er = n(413927);
function ed() {
    let e = (0, ei.TH)("desktop");
    if (0 === e.length) return null;
    let t = G.intl.string(F.default.x07mpp);
    return (0, l.jsxs)("section", {
        className: er.rN,
        "aria-label": t,
        children: [
            (0, l.jsxs)("div", {
                className: er.bZ,
                children: [
                    (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, l.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: G.intl.string(F.default.h5CwHI),
                    }),
                ],
            }),
            (0, l.jsx)("ol", {
                className: er.V,
                children: e.map((e) =>
                    (0, l.jsxs)(
                        "li",
                        {
                            className: er.S3,
                            children: [
                                (0, l.jsxs)(g.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: er.VO,
                                    children: [
                                        (0, el.i$)(d()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ei.MZ)(e) ? ` \xb7 ${G.intl.string(F.default.vvxuUI)}` : null,
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
            (0, ei.B)("desktop")
                ? (0, l.jsx)(w.$, {
                      variant: "secondary",
                      size: "sm",
                      text: G.intl.string(F.default.YWxThz),
                      onClick: eo,
                  })
                : null,
        ],
    });
}
var eu = n(121063),
    ec = n(210744),
    ep = n(922016),
    em = n(980707),
    eh = n(477782),
    ef = n(81369),
    eg = n(402879);
async function ey(e, t, n) {
    (0, et.Hc)(e);
    let a = await (0, et.vX)(e, t);
    (0, et.dv)(e, n, [a]);
}
function eb(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, U.x5)(e.size, t)
        ? null
        : G.intl.formatToPlainString(F.default.AzziHF, { size: (0, U.ZJ)((0, U.yr)(t)) });
}
async function ex(e, t) {
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
        l = await (0, et.cS)(e, a);
    await (0, eg.F)(l, a);
}
function ew(e) {
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
var ek = n(950305),
    ev = n(664121);
let ej = [
    { value: "user", icon: ek.UserIcon, nameMessage: F.default.iqXIRN },
    { value: "guild", icon: ev.R, nameMessage: F.default.LdgKdI },
];
function eC(e) {
    let { importing: t, onImport: n } = e,
        a = i.useRef(null),
        s = ew(i.useCallback((e) => n(e, "user"), [n])),
        o = ew(i.useCallback((e) => n(e, "guild"), [n])),
        r = { user: s.open, guild: o.open };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep.Y, {
                targetElementRef: a,
                position: "bottom",
                align: "right",
                animation: ep.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(em.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": G.intl.string(F.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, l.jsx)(eh.rX, {
                            label: G.intl.string(F.default.MLg0S8),
                            children: ej
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: G.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, l.jsx)(
                                        eh.Dr,
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
                        icon: ef.H,
                        text: G.intl.string(F.default["NHP2+t"]),
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
var eA = n(113491),
    eI = n(629584),
    eN = n(753514),
    eE = n(491920);
function eS(e) {
    let { modes: t, mode: n, onChange: a, className: s } = e,
        r = i.useMemo(() => t.map((e) => ({ value: e, name: (0, eN.kZ)(e), "aria-controls": (0, eN.z3)(e) })), [t]),
        d = i.useCallback(
            (e) => {
                a(e.value);
            },
            [a],
        );
    return null == n
        ? null
        : (0, l.jsx)(eI.I, {
              role: "tablist",
              look: "pill",
              className: o()(eE.b, s),
              optionClassName: eE.u,
              options: r,
              value: n,
              onChange: d,
          });
}
var eP = n(663417),
    eR = n(70688),
    e_ = n(173936),
    eT = n(473935),
    eD = n(365199),
    eM = n(410645),
    eO = n(147036),
    eL = n(957565),
    eV = n(123917),
    ez = n(557875);
let eF = new Set();
n(321073);
var eG = n(869369),
    eB = n(746080),
    eY = n(793712);
let eH = [];
function eX(e) {
    (0, y.P0)((0, b.o)(e, x.Ck.FAILURE));
}
function eU(e) {
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
            isRefreshing: k = !1,
            onClose: j,
            refreshApplicationId: C,
            previewProjectId: A,
        } = e,
        I = i.useRef(null),
        { pending: N, refresh: E } = (0, eM.A)(C ?? null),
        { pending: S, connect: P } = (function (e, t) {
            let [n, a] = i.useState(eF),
                l = i.useRef(eF),
                s = i.useCallback((e) => {
                    ((l.current = (0, ez.Q6)(l.current, e)), a(l.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, ez.K9)(l.current, n.type);
                        async function o() {
                            let a = await (0, et.JI)(e, n.type);
                            (s(n.type), "url" === a.type)
                                ? (0, eV.h)({ href: a.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ez.rq)(a.error)
                                          ? G.intl.string(F.default.avu1u4)
                                          : G.intl.string(F.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((l.current = i), a(i), o().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, eX),
        R = (0, u.bG)([et.Ay], () => (null == A ? eH : et.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: a, connectPending: l } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: G.intl.string(F.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            a))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: G.intl.formatToPlainString(F.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: l.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: G.intl.formatToPlainString(F.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != C,
            refreshPending: N,
            offers: i.useMemo(() => (0, ez.Xl)(R), [R]),
            connectPending: S,
        }),
        D = i.useMemo(() => new Map(R.map((e) => [e.type, e])), [R]),
        M = null != m && r,
        O = o && null != p,
        L = M || null != d || O || null != h || null != f || null != g,
        V = eL.p5 && null != a,
        z = eL.p5;
    return null != w || null != j || L || z || o
        ? (0, l.jsx)(ep.Y, {
              targetElementRef: I,
              position: "bottom",
              align: "right",
              animation: ep.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsxs)(em.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": G.intl.string(G.t.ogxXGq),
                      onClose: i,
                      onSelect: i,
                      children: [
                          null != w || null != j
                              ? (0, l.jsxs)(eh.rX, {
                                    children: [
                                        null != w
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "refresh",
                                                  icon: eP.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: eP.RefreshIcon },
                                                  label: G.intl.string(F.default.xKexN1),
                                                  disabled: k,
                                                  action: w,
                                              })
                                            : null,
                                        null != j
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "close",
                                                  icon: eR.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: eR.DoorExitIcon },
                                                  label: G.intl.string(F.default.Ea0Wrr),
                                                  action: j,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          _.length > 0
                              ? (0, l.jsx)(eh.rX, {
                                    children: _.map((e) =>
                                        (0, l.jsx)(
                                            eh.Dr,
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
                              ? (0, l.jsxs)(eh.rX, {
                                    children: [
                                        M
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "remix",
                                                  label: G.intl.string(F.default.vPI794),
                                                  action: m,
                                              })
                                            : null,
                                        null != d
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "export",
                                                  label: G.intl.string(F.default["7iamDC"]),
                                                  action: d,
                                              })
                                            : null,
                                        O
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "import",
                                                  label: G.intl.string(F.default.lf8HqE),
                                                  action: p,
                                              })
                                            : null,
                                        null != h
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "connect-tool",
                                                  label: G.intl.string(F.default["3qelzD"]),
                                                  action: h,
                                              })
                                            : null,
                                        null != f
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "version-history",
                                                  label: G.intl.string(F.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                        null != g
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "restore-points",
                                                  label: G.intl.string(F.default.FRjicO),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          z
                              ? (0, l.jsxs)(eh.rX, {
                                    children: [
                                        V
                                            ? (0, l.jsx)(eh.Dr, {
                                                  id: "copy-link",
                                                  label: G.intl.string(G.t.WqhZss),
                                                  icon: e_.LinkIcon,
                                                  leadingAccessory: { type: "icon", icon: e_.LinkIcon },
                                                  action: () =>
                                                      (0, eL.C)((0, eO.n)(a, eB.VV.VIBEGRATIONS, t), () =>
                                                          (0, y.P0)(
                                                              (0, b.o)(G.intl.string(G.t["L/PwZf"]), x.Ck.SUCCESS),
                                                          ),
                                                      ),
                                              })
                                            : null,
                                        (0, l.jsx)(eh.Dr, {
                                            id: "copy-project-id",
                                            label: G.intl.string(F.default.b4TqpT),
                                            icon: eT.L,
                                            leadingAccessory: { type: "icon", icon: eT.L },
                                            action: () =>
                                                (0, eL.C)(t, () =>
                                                    (0, y.P0)((0, b.o)(G.intl.string(F.default.WOKsTg), x.Ck.SUCCESS)),
                                                ),
                                        }),
                                    ],
                                })
                              : null,
                          o
                              ? (0, l.jsxs)(eh.rX, {
                                    children: [
                                        (0, l.jsx)(eh.Dr, {
                                            id: "settings",
                                            label: G.intl.string(F.default["xhcY+n"]),
                                            icon: v.SettingsIcon,
                                            leadingAccessory: { type: "icon", icon: v.SettingsIcon },
                                            action: () => (0, eG.A)(t, s ?? a),
                                        }),
                                        (0, l.jsx)(eh.Dr, {
                                            id: "delete",
                                            label: G.intl.string(G.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, c.A)({
                                                    title: G.intl.formatToPlainString(F.default.ZokHVz, { name: n }),
                                                    subtitle: G.intl.string(F.default.NmF939),
                                                    confirmText: G.intl.string(G.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, B.xx)(t)).ok)
                                                            throw Error(G.intl.string(F.default.tqKZCi));
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
                      className: eY.h,
                      children: (0, l.jsx)(T.A.Icon, {
                          icon: eD.MoreHorizontalIcon,
                          tooltip: G.intl.string(G.t["UKOtz+"]),
                          "aria-label": G.intl.string(G.t["UKOtz+"]),
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
var eq = n(769979);
function eK(e) {
    let { title: t, actions: n, breadcrumb: a } = e;
    return (0, l.jsx)(T.A, {
        hideSearch: !0,
        toolbar: n,
        className: eq.wx,
        "aria-label": t,
        children: (0, l.jsxs)("div", {
            className: eq.QF,
            children: [
                (0, l.jsx)(E.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: eq.Kk,
                }),
                null != a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(T.A.Title, { onClick: a.onClick, children: a.title }),
                              (0, l.jsx)(T.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(T.A.Title, { className: eq.Qw, wrapperClassName: eq.DD, children: t }),
            ],
        }),
    });
}
var eW = n(73432),
    eZ = n(683071),
    e$ = n(47167),
    eQ = n(808728),
    eJ = n(994500),
    e0 = n(287809),
    e2 = n(652215);
let e1 = "conjuring-help";
var e6 = n(107148);
function e9() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, u.cf)([e0.default, L.A, eQ.Ay, eJ.A], () => {
                let e = e0.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of L.A.getGuildsArray()) {
                    if (!t.features.has(e2.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eQ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, e$.m1)(t, e0.default, eJ.A) === e1;
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
                    ? (0, D.pX)(e2.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, eV.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, l.jsx)("div", {
              className: e6.l,
              children: (0, l.jsx)(eZ.w, {
                  type: "info",
                  iconAlign: "center",
                  children: G.intl.format(F.default["4BsHmp"], { channel: e1, onNavigate: t }),
              }),
          });
}
var e8 = n(321593),
    e7 = n(580954),
    e3 = n(189213),
    e5 = (((a = {}).NO_PREVIEW = "no-preview"), (a.PERMISSIONS = "permissions"), a);
function e4(e) {
    let { reason: t, transitionState: n, onClose: a } = e,
        i = t === e5.PERMISSIONS;
    return (0, l.jsx)(e3.Modal, {
        transitionState: n,
        onClose: a,
        title: G.intl.string(i ? F.default.Rtlv25 : F.default["+UouPe"]),
        subtitle: G.intl.string(i ? F.default["nDQB/b"] : F.default["E0QD++"]),
        size: "sm",
        actions: [{ text: G.intl.string(i ? G.t.BddRzS : F.default["+Zh4FA"]), variant: "primary", onClick: a }],
    });
}
function te(e) {
    (0, es.openModal)((t) => (0, l.jsx)(e4, { ...t, reason: e }));
}
var tt = n(480007),
    tn = n(584936),
    ta = n(165610),
    tl = n(352978);
function ti(e) {
    return (0, l.jsx)(p.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ts(e) {
    return (0, l.jsx)(m.u, { ...e, size: "custom", width: 20, height: 20 });
}
function to(e) {
    return (0, l.jsx)(h.k, { ...e, size: "custom", width: 20, height: 20 });
}
function tr(e) {
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
                    (0, y.P0)((0, b.o)(G.intl.formatToPlainString(F.default.u9TapG, { name: n }), x.Ck.MESSAGE)),
                    ex(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[vibegrations] project export failed", t, e),
                                (0, y.P0)(
                                    (0, b.o)(
                                        409 === (n = e instanceof et._v ? e.status : null)
                                            ? G.intl.string(F.default.uB40Hz)
                                            : 404 === n
                                              ? G.intl.string(F.default.wCq2jC)
                                              : G.intl.string(F.default.G2GqyP),
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
                onImport: (o = ew(
                    i.useCallback(
                        (e) => {
                            let a = eb(e);
                            null != a
                                ? (0, y.P0)((0, b.o)(a, x.Ck.FAILURE))
                                : (0, c.A)({
                                      title: G.intl.formatToPlainString(F.default.XYZqZK, { name: n }),
                                      subtitle: G.intl.string(F.default["6syXoH"]),
                                      confirmText: G.intl.string(F.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, D.pX)(e2.BVt.CHANNEL(u, eB.VV.VIBEGRATIONS, t));
                                          try {
                                              await ey(t, e, G.intl.string(F.default.C7GU2r));
                                          } catch {
                                              (0, y.P0)((0, b.o)(G.intl.string(F.default["02GpNr"]), x.Ck.FAILURE));
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
        { data: k } = (0, P.YY)(w),
        v =
            null == r.updated_at
                ? null
                : G.intl.formatToPlainString(F.default.oMDaqr, { time: d()(r.updated_at).fromNow() });
    return (0, l.jsxs)("div", {
        className: tl.OY,
        children: [
            (0, l.jsx)(e8.Ay, { projectId: r.id }),
            (0, l.jsxs)(f.D, {
                className: tl.W6,
                onClick: p,
                children: [
                    (0, l.jsx)("img", {
                        alt: "",
                        src: z.Ay.getApplicationIconURL({ id: w, icon: k?.icon, size: 40 }),
                        className: tl.VJ,
                    }),
                    (0, l.jsxs)("div", {
                        className: tl.MM,
                        children: [
                            (0, l.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: tl.j1,
                                children: r.name,
                            }),
                            null == v
                                ? null
                                : (0, l.jsx)("div", {
                                      className: tl.h3,
                                      children: (0, l.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: v,
                                      }),
                                  }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: tl.M2,
                children: (0, l.jsxs)("div", {
                    className: tl.Pl,
                    children: [
                        (0, l.jsx)(eU, {
                            projectId: r.id,
                            projectName: r.name,
                            guildId: u,
                            projectGuildId: r.guild_id,
                            isOwner: (0, en.PV)(r),
                            canRemix: (0, en.H_)(r),
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
function td(e) {
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
        ea = i.useRef(null);
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
    let el = (0, u.bG)([en.Ay], () => (null == H ? null : en.Ay.getIntegrationStatus(H)), [H]),
        { data: ei, isLoading: eo } = (0, P.YY)(s?.preview_application_id ?? void 0),
        er = null != H && z !== H,
        ed = el?.preview_ready === !0,
        ep = el?.has_activity === !0,
        {
            availability: em,
            activeMode: eh,
            setMode: ef,
            widgetApplicationId: eg,
        } = (0, Z.q)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ep,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: el?.owner_authorization_revoked === !0,
        }),
        ex = (0, J.Qg)({
            installScope: s?.install_scope ?? null,
            previewReady: ed,
            integrationInstalled: el?.integration_installed ?? null,
            botPermissionsChanged: el?.bot_permissions_changed === !0,
        }),
        ek = p || er || eo,
        ev = G.intl.string(F.default["5gU57O"]),
        ej = h && !E && !C && !I,
        eC = G.intl.string(ej ? F.default.YdgE0j : F.default.aWVf4j),
        eA = i.useCallback(() => {
            if (E || C || I) {
                (S(!1), A(!1), N(!1), f(!0));
                return;
            }
            f((e) => !e);
        }, [E, C, I]),
        eI = i.useCallback(() => f(!1), []),
        { active: eN } = (0, $.Q_)(H),
        eE = i.useRef(null),
        eP = (0, Q.o4)(H),
        eR = G.intl.string(eP ? F.default.bfQ4Ki : eN ? F.default.rfNEHn : F.default.lXcEa2),
        e_ = i.useCallback(() => {
            if (null != H) {
                if (eN) return void (0, $.PS)(H);
                (S(!1), A(!1), N(!1), f(!0), (0, $.nI)(H));
            }
        }, [H, eN]),
        eT = i.useCallback(() => {
            S((e) => !e && (f(!0), A(!1), N(!1), !0));
        }, []),
        eD = i.useCallback(() => S(!1), []),
        eM = i.useCallback(
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
                    (0, et.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && V({ entry: e, status: "restored" });
                            },
                            (a) => {
                                n() &&
                                    (V({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, a),
                                    (0, y.P0)((0, b.o)(G.intl.string(F.default.q6iZ84), x.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (W.current = !1);
                        }));
            },
            [s],
        ),
        eO = (0, u.bG)([ee.A], () => ee.A.isBuilderPreviewMobile()),
        eL = G.intl.string(eO ? F.default["3uCc8U"] : F.default["+nzCxZ"]),
        eV = i.useCallback(() => (0, B.GG)(!eO), [eO]),
        ez = (0, _.A)(s?.preview_application_id ?? null, ta.sd),
        eF = (0, ta.x1)(ez) && ez.data.proxyTicketRefreshing,
        eY = i.useCallback(() => {
            null == ez || eF || R.A.refreshProxyTicket(ez.id);
        }, [ez, eF]),
        eH = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ez?.id), (0, et.Bn)(e), (0, e7.A)().leaveFrame(t)), r());
        }, [s, ez?.id, r]),
        eX = i.useCallback(() => {
            null != s && (f(!0), (0, et.dv)(s.id, G.intl.string(F.default["2ejwtJ"])));
        }, [s]),
        eq = ew(
            i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = eb(e);
                    null != n
                        ? (0, y.P0)((0, b.o)(n, x.Ck.FAILURE))
                        : (0, c.A)({
                              title: G.intl.formatToPlainString(F.default.XYZqZK, { name: s.name }),
                              subtitle: G.intl.string(F.default["6syXoH"]),
                              confirmText: G.intl.string(F.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  f(!0);
                                  try {
                                      await ey(t, e, G.intl.string(F.default.C7GU2r));
                                  } catch {
                                      (0, y.P0)((0, b.o)(G.intl.string(F.default["02GpNr"]), x.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [s],
            ),
        ),
        eZ = i.useCallback(() => {
            null != s && (0, tn.A)(s, d);
        }, [s, d]),
        e$ = i.useCallback(async () => {
            if (null == H || U.current !== H) return;
            ea.current?.abort();
            let e = new AbortController();
            ((ea.current = e), Y(null));
            try {
                await (0, B.U1)(H, e.signal);
            } catch {
            } finally {
                e.signal.aborted || ea.current !== e || U.current !== H || Y(H);
            }
        }, [H]);
    i.useEffect(
        () => (
            e$(),
            () => {
                (ea.current?.abort(), (ea.current = null));
            }
        ),
        [e$],
    );
    let eQ =
            ((t = s ?? null),
            (a = el ?? null),
            a?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : d),
        eJ = i.useCallback(async () => {
            null != s && (await X(s, eQ));
        }, [eQ, s]),
        e0 = i.useCallback(async () => {
            try {
                await eJ();
            } catch {}
            await e$();
        }, [e$, eJ]),
        e1 = i.useCallback(() => {
            let e = s?.preview_application_id;
            null != s &&
                null != e &&
                K.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: ei ?? null,
                    guildId: eQ,
                    onClose: () => {
                        e0();
                    },
                });
        }, [e0, eQ, ei, s]),
        e6 = ex
            ? { type: "permissions", onReviewPermissions: e1, loading: eo || er }
            : er && null == el
              ? { type: "checking" }
              : void 0;
    i.useEffect(() => {
        null == s && o && (0, D.pX)(e2.BVt.CHANNEL(d, eB.VV.VIBEGRATIONS));
    }, [d, s, o]);
    let e9 = i.useCallback((e) => {
            m(!0);
            let t = (0, et.TV)(e).then((t) => {
                if (!0 !== t.ok) throw Error(G.intl.string(F.default.fNP6Cd));
                (0, B.tZ)(e, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e, t);
                });
            });
            return (
                t
                    .catch((e) => {
                        (0, y.P0)(
                            (0, b.o)(e instanceof Error ? e.message : G.intl.string(F.default.fNP6Cd), x.Ck.FAILURE),
                        );
                    })
                    .finally(() => m(!1)),
                t
            );
        }, []),
        e8 = i.useCallback(() => {
            if (null == s) return;
            if (!ed) return void te(e5.NO_PREVIEW);
            if (ex) return void te(e5.PERMISSIONS);
            if ("user" === s.install_scope)
                return void e9(s.id)
                    .then(() => {
                        (0, y.P0)((0, b.o)(G.intl.string(F.default.wA0o0L), x.Ck.SUCCESS));
                    })
                    .catch(() => {});
            let e = (0, et.$C)(s.id);
            (e.catch(() => {}),
                (0, tt.A)({
                    projectId: s.id,
                    guildId: d,
                    applicationId: s.application_id,
                    projectName: s.name,
                    publish: e9(s.id),
                    initialDraft: e,
                }));
        }, [d, ex, ed, s, e9]),
        e3 =
            null != s && (0, en.jf)(s)
                ? (0, l.jsx)(w.$, { size: "sm", variant: "primary", loading: p, disabled: ek, onClick: e8, text: ev })
                : null,
        e4 = (0, l.jsx)(eK, {
            title: s?.name ?? G.intl.string(F.default.F2dRba),
            breadcrumb: { title: G.intl.string(F.default.Xmvb23), onClick: r },
            actions:
                null == s
                    ? null
                    : (0, l.jsxs)("div", {
                          className: tl.FO,
                          children: [
                              em.showModeSwitch ? (0, l.jsx)(eS, { modes: em.modes, mode: eh, onChange: ef }) : null,
                              (0, l.jsx)(T.A.Icon, {
                                  icon: eO ? to : ts,
                                  tooltip: eL,
                                  "aria-label": eL,
                                  selected: eO,
                                  onClick: eV,
                              }),
                              (0, l.jsx)(T.A.Icon, {
                                  ref: eE,
                                  icon: eW.A,
                                  tooltip: eR,
                                  "aria-label": eR,
                                  selected: eN,
                                  disabled: eP,
                                  onClick: e_,
                              }),
                              "frame" === eh ? (0, l.jsx)(ec.A, { frame: ez, controlProjectId: s.id }) : null,
                              (0, l.jsx)("div", { className: tl.YJ }),
                              O
                                  ? (0, l.jsx)(T.A.Icon, {
                                        icon: k.BugIcon,
                                        tooltip: G.intl.string(F.default["8MLfBT"]),
                                        "aria-label": G.intl.string(F.default["8MLfBT"]),
                                        selected: E,
                                        onClick: eT,
                                    })
                                  : null,
                              (0, en.PV)(s)
                                  ? (0, l.jsx)(T.A.Icon, {
                                        icon: v.SettingsIcon,
                                        tooltip: G.intl.string(F.default["xhcY+n"]),
                                        "aria-label": G.intl.string(F.default["xhcY+n"]),
                                        onClick: () => (0, eG.A)(s.id, s.guild_id ?? d),
                                    })
                                  : null,
                              (0, l.jsx)(eU, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: d,
                                  projectGuildId: s.guild_id,
                                  isOwner: (0, en.PV)(s),
                                  canRemix: (0, en.H_)(s),
                                  onRefresh: (0, ta.x1)(ez) ? eY : void 0,
                                  isRefreshing: eF,
                                  onClose: eH,
                                  onExport: eX,
                                  onImport: eq.open,
                                  onRemix: eZ,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = s.id),
                                          void (0, es.openModalLazy)(async () => {
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
                                      em.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== em.profileState
                                          ? eg
                                          : null,
                                  previewProjectId: s.id,
                              }),
                              ej
                                  ? null
                                  : (0, l.jsx)(T.A.Icon, { icon: ti, tooltip: eC, "aria-label": eC, onClick: eA }),
                          ],
                      }),
        });
    return (0, l.jsxs)("div", {
        className: tl.nj,
        children: [
            eq.input,
            (0, l.jsx)("main", {
                className: tl.JX,
                children:
                    null == s
                        ? (0, l.jsxs)("div", {
                              className: tl.j5,
                              children: [
                                  e4,
                                  (0, l.jsxs)("div", {
                                      className: tl.sD,
                                      children: [
                                          (0, l.jsx)(j.D, {
                                              variant: "heading-lg/semibold",
                                              children: G.intl.string(F.default.F2dRba),
                                          }),
                                          (0, l.jsx)(g.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: G.intl.string(F.default.GnEJ3o),
                                          }),
                                          (0, l.jsx)(w.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: G.intl.string(F.default["42EdIV"]),
                                              onClick: () => (0, B.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, l.jsx)(
                              eu.A,
                              {
                                  projectId: s.id,
                                  designFeedbackToggleRef: eE,
                                  applicationId: s.preview_application_id,
                                  previewApplicationId: s.preview_application_id,
                                  surface: ta.sd,
                                  header: e4,
                                  chatOpen: h,
                                  onCloseChat: eI,
                                  chatHeaderAction: e3,
                                  versionHistoryOpen: C,
                                  onCloseVersionHistory: () => A(!1),
                                  restorePointsOpen: I,
                                  onCloseRestorePoints: () => N(!1),
                                  installScope: s.install_scope,
                                  debugOpen: O && E,
                                  onCloseDebug: eD,
                                  onRestoreVersion: eM,
                                  restoreState: L,
                                  previewReady: ed,
                                  previewGate: e6,
                                  availability: em,
                                  activeMode: eh,
                                  widgetApplicationId: eg,
                              },
                              s.id,
                          ),
            }),
        ],
    });
}
function tu(e) {
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
            onIdeaChange: k,
            onCreate: v,
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
        M = G.intl.string(F.default.TU9IGR),
        O = [
            G.intl.string(F.default["E+Q26x"]),
            G.intl.string(F.default["06/jqP"]),
            G.intl.string(F.default["3gSfUa"]),
        ],
        L = [
            {
                id: "feature-showcase",
                name: G.intl.string(F.default.BLDsiz),
                description: G.intl.string(F.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: G.intl.string(F.default["+abXa8"]),
                description: G.intl.string(F.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: G.intl.string(F.default.ieAgex),
                description: G.intl.string(F.default["5yvj+f"]),
            },
        ],
        V = G.intl.string(F.default.FYK2xQ),
        z = G.intl.string(F.default["/SUK82"]),
        Y = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), c || v());
            },
            [c, v],
        );
    return (0, l.jsxs)("div", {
        className: o()(tl.nj, tl.a0),
        children: [
            (0, l.jsx)(eK, { title: G.intl.string(F.default.Xmvb23) }),
            (0, l.jsxs)("div", {
                className: tl.Yo,
                children: [
                    (0, l.jsxs)("main", {
                        className: tl.ps,
                        children: [
                            (0, l.jsx)(C.Ip, {
                                className: tl.Yy,
                                children: (0, l.jsx)("div", {
                                    className: tl.Mo,
                                    children: (0, l.jsxs)("section", {
                                        className: o()(tl.Qs, tl.Ix),
                                        children: [
                                            (0, l.jsx)(e9, {}),
                                            (0, l.jsx)(j.D, {
                                                variant: "heading-xl/semibold",
                                                children: G.intl.string(F.default["2tYpRK"]),
                                            }),
                                            (0, l.jsxs)("section", {
                                                className: tl.WI,
                                                "aria-label": V,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: tl.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: V,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: G.intl.string(F.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: tl.Aw,
                                                        children: L.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: tl.EA,
                                                                    children: (0, l.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": G.intl.formatToPlainString(
                                                                            F.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: o()(tl.nx, tl.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return v(
                                                                                      ((t = e.name),
                                                                                      G.intl.formatToPlainString(
                                                                                          F.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, l.jsx)(g.E, {
                                                                                className: tl.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, l.jsx)(g.E, {
                                                                                className: tl.BK,
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
                                                className: tl.WI,
                                                "aria-label": z,
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: tl.G9,
                                                        children: [
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: z,
                                                            }),
                                                            (0, l.jsx)(g.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: G.intl.string(F.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("ol", {
                                                        className: tl.Aw,
                                                        children: O.map((e) =>
                                                            (0, l.jsx)(
                                                                "li",
                                                                {
                                                                    className: tl.EA,
                                                                    children: (0, l.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: tl.nx,
                                                                        onClick: d ? void 0 : () => v(e),
                                                                        children: (0, l.jsx)(g.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: tl.un,
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
                                            (0, l.jsx)(ed, {}),
                                        ],
                                    }),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: tl.Yl,
                                children: (0, l.jsxs)("div", {
                                    className: o()(tl.Qs, tl.DA),
                                    children: [
                                        (0, l.jsx)(A.f, {
                                            label: M,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: M,
                                            error: u,
                                            onChange: k,
                                            onKeyDown: Y,
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: tl.VP,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: tl.gH,
                                                    ref: T,
                                                    children: (0, l.jsx)(I.l, {
                                                        selectionMode: "single",
                                                        label: G.intl.string(F.default.MLg0S8),
                                                        hideLabel: !0,
                                                        placeholder: G.intl.string(F.default.MLg0S8),
                                                        options: [
                                                            {
                                                                label: G.intl.string(F.default.MLg0S8),
                                                                options: ej.map((e) => ({
                                                                    id: `install-scope-option-${e.value}`,
                                                                    value: e.value,
                                                                    leading: e.icon,
                                                                    label: G.intl.string(e.nameMessage),
                                                                })),
                                                            },
                                                        ],
                                                        value: p ?? void 0,
                                                        onSelectionChange: m,
                                                        errorMessage: h,
                                                    }),
                                                }),
                                                (0, l.jsx)(eA.A, {
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
                                                    text: G.intl.string(G.t.CumH4u),
                                                    disabled: c,
                                                    loading: d,
                                                    onClick: () => v(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("aside", {
                        className: tl.pA,
                        "aria-label": G.intl.string(F.default.Bo5fE3),
                        children: [
                            (0, l.jsxs)("div", {
                                className: tl.IR,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tl.RM,
                                        children: [
                                            (0, l.jsx)(g.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: G.intl.string(F.default.Bo5fE3),
                                            }),
                                            (0, l.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: G.intl.string(F.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(eC, { importing: R, onImport: P }),
                                ],
                            }),
                            (0, l.jsxs)(C.Ip, {
                                className: tl.xe,
                                children: [
                                    (null == a || "loading" === a.type) && 0 === D.length
                                        ? (0, l.jsx)("div", { className: tl.E8, children: (0, l.jsx)(N.y, {}) })
                                        : a?.type === "error" && 0 === D.length
                                          ? (0, l.jsxs)("div", {
                                                className: tl.E8,
                                                children: [
                                                    (0, l.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: tl.JS,
                                                        children: G.intl.string(F.default["IN/HRP"]),
                                                    }),
                                                    (0, l.jsx)(w.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: G.intl.string(F.default["42EdIV"]),
                                                        onClick: () => (0, B.hF)(r),
                                                    }),
                                                ],
                                            })
                                          : 0 === D.length
                                            ? (0, l.jsx)("div", {
                                                  className: tl.D1,
                                                  children: (0, l.jsxs)("div", {
                                                      className: tl.ST,
                                                      children: [
                                                          (0, l.jsx)(E.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tl.sI,
                                                              children: G.intl.string(F.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, l.jsx)("div", {
                                                  className: tl.Dq,
                                                  children: D.map((e) =>
                                                      (0, l.jsx)(
                                                          tr,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => x(e.id),
                                                              onRemix: () => (0, tn.A)(e, r),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, l.jsxs)("div", {
                                              className: tl.qx,
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className: tl.uc,
                                                      children: [
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: G.intl.string(F.default.jrCnUc),
                                                          }),
                                                          (0, l.jsx)(g.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: G.intl.string(F.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: tl.Dq,
                                                      children: _.map((e) =>
                                                          (0, l.jsx)(
                                                              tr,
                                                              {
                                                                  project: e,
                                                                  guildId: r,
                                                                  onSelect: () => x(e.id),
                                                                  onRemix: () => (0, tn.A)(e, r),
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
function tc(e) {
    let t,
        { guildId: n, projectId: a } = e,
        s = (0, u.yK)([en.Ay], () => en.Ay.getOwnedProjects()),
        o = (0, u.bG)([en.Ay], () => en.Ay.getProjectsFetchState()),
        r = (0, u.yK)([en.Ay], () => en.Ay.getSharedProjects(n), [n]),
        d = (0, u.yK)([O.Ay], () => O.Ay.getSelfMember(n)?.roles ?? [], [n]),
        c = (0, u.bG)(
            [L.A, V.A],
            () => {
                let e = L.A.getGuild(n);
                return null != e && V.A.can(e2.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [p, m] = i.useState(""),
        h = a ?? null,
        [f, g] = i.useState(!1),
        [w, k] = i.useState(null),
        [v, j] = i.useState("guild"),
        [C, A] = i.useState(null),
        [I, N] = i.useState(null);
    (i.useEffect(() => {
        (0, B.hF)(n);
    }, [n, d, c]),
        i.useEffect(() => {
            (0, B.dm)(n, h);
        }, [n, h]));
    let E = i.useCallback((e) => {
            (j(e), A(null));
        }, []),
        S = i.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    a = ea({ idea: t, installScope: v, submitting: f });
                if ("idea" !== a && "submitting" !== a) {
                    if (null == v) return void A(G.intl.string(F.default.jQ3nQB));
                    (null != e && m(e), g(!0), k(null));
                    try {
                        let e = await (0, B.gA)({ guild_id: n, install_scope: v });
                        ((0, et.Hc)(e),
                            (0, et.r2)(e, I ?? H.Cl),
                            (0, et.dv)(e, t),
                            (0, D.pX)(e2.BVt.CHANNEL(n, eB.VV.VIBEGRATIONS, e)),
                            m(""),
                            N(null));
                    } catch (e) {
                        k((0, Y.Xd)(e));
                    } finally {
                        g(!1);
                    }
                }
            },
            [v, n, p, I, f],
        ),
        [P, R] = i.useState(!1),
        _ = i.useCallback(
            async (e, t) => {
                let a = eb(e);
                if (null != a) return void (0, y.P0)((0, b.o)(a, x.Ck.FAILURE));
                R(!0);
                let l = null;
                try {
                    ((l = await (0, B.gA)({ guild_id: n, install_scope: t })),
                        (0, et.Hc)(l),
                        (0, et.r2)(l, I ?? H.Cl),
                        await ey(l, e, G.intl.string(F.default.KjEtrZ)),
                        (0, D.pX)(e2.BVt.CHANNEL(n, eB.VV.VIBEGRATIONS, l)),
                        N(null));
                } catch {
                    (null != l && (await (0, B.xx)(l).catch(() => void 0)),
                        (0, y.P0)((0, b.o)(G.intl.string(F.default["02GpNr"]), x.Ck.FAILURE)));
                } finally {
                    R(!1);
                }
            },
            [n, I],
        ),
        T = i.useCallback(
            (e) => {
                (0, D.pX)(e2.BVt.CHANNEL(n, eB.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        M = i.useCallback(() => {
            (0, D.pX)(e2.BVt.CHANNEL(n, eB.VV.VIBEGRATIONS));
        }, [n]),
        z = i.useCallback((e) => {
            (m(e), k(null));
        }, []),
        X = (0, u.bG)(
            [en.Ay],
            () => {
                if (null == h) return null;
                let e = en.Ay.getProject(h);
                return null == e || (0, en.PV)(e) || e.guild_id === n ? e : null;
            },
            [h, n],
        ),
        U = (0, u.bG)([en.Ay], () => en.Ay.hasFetchedGuildProjects(n), [n]);
    return null != h
        ? (0, l.jsx)(td, { project: X, projectsLoaded: U, onBack: M, guildId: n }, h)
        : (0, l.jsx)(tu, {
              projects: s,
              sharedProjects: r,
              fetchState: o,
              modelSettings: I,
              onModelSettingsChange: N,
              idea: p,
              guildId: n,
              submitting: f,
              createError: w,
              createDisabled: "idea" === (t = ea({ idea: p, installScope: v, submitting: f })) || "submitting" === t,
              onSelectProject: T,
              onIdeaChange: z,
              onCreate: S,
              onImportNewProject: _,
              importing: P,
              installScope: v,
              onInstallScopeChange: E,
              installScopeError: C,
          });
}
