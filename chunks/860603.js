n.d(t, { A: () => t8 }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(735438),
    r = n.n(a),
    o = n(17928),
    d = n(534514),
    c = n(40474),
    u = n(282956),
    m = n(83257),
    g = n(773952),
    h = n(235986),
    x = n(143582),
    p = n(607940),
    A = n(808728),
    b = n(576705),
    f = n(625494),
    _ = n(975571),
    j = n(179771),
    N = n(732159),
    v = n(192308),
    E = n(406810),
    C = n(950305),
    I = n(359778),
    T = n(834730),
    S = n(404778),
    y = n(430392),
    w = n(39619),
    O = n(821609),
    k = n(157559),
    L = n(997509),
    R = n(633018),
    M = n(503698),
    D = n.n(M),
    P = n(542225);
function G(e) {
    let { children: t, icon: n, title: i } = e;
    return (0, l.jsxs)("header", {
        className: P.wx,
        children: [
            (0, l.jsxs)("div", {
                className: P.UU,
                children: [
                    s.cloneElement(n, { className: D()(n.props.className, P.Kk), height: 24, width: 24 }),
                    (0, l.jsx)(d.D, { variant: "heading-md/semibold", className: P.DD, children: i }),
                ],
            }),
            t,
        ],
    });
}
var U = n(542580),
    W = n(803378),
    B = n(825453),
    H = n(892547),
    z = n(485845),
    V = n(155718),
    F = n(633334);
function K(e) {
    return { id: e.id, names: [e.displayName] };
}
var Y = n(261958),
    q = n(939249),
    Q = n(885574),
    Z = n(442433),
    J = n(200662),
    $ = n(985018),
    X = n(870807);
function ee(e) {
    let { applicationIcon: t, applicationName: i, canNavigate: a, command: r, guildId: o } = e,
        d = s.useMemo(() => 0 !== Object.keys(r.permissions ?? {}).length, [r.permissions]),
        c = s.useCallback(() => {
            null != r &&
                a() &&
                (0, v.openModalLazy)(async () => {
                    let { default: e } = await n.e("15946").then(n.bind(n, 326993));
                    return (n) =>
                        (0, l.jsx)(e, {
                            applicationIcon: t,
                            applicationId: r.applicationId,
                            applicationName: i,
                            command: r,
                            guildId: o,
                            ...n,
                        });
                });
        }, [t, i, a, r, o]),
        u = s.useCallback(
            (e) => {
                (0, Z.L3)(e, async () => {
                    let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                    return (t) => (0, l.jsx)(e, { ...t, id: r.id, label: $.intl.string($.t.oJ1Muw) });
                });
            },
            [r],
        ),
        m = r.type === V.kc.CHAT ? R.k : Y.u,
        g = (0, J.p6)(r.type, r.displayName);
    return (0, l.jsxs)(q.D, {
        onClick: c,
        className: X.AS,
        onContextMenu: u,
        children: [
            (0, l.jsxs)("div", {
                className: X.Cv,
                children: [
                    (0, l.jsx)(m, { className: X.Kk, size: "md", color: "currentColor" }),
                    (0, l.jsx)(T.E, { variant: "text-md/normal", children: g }),
                ],
            }),
            (0, l.jsx)("div", {
                className: X.II,
                children: d
                    ? (0, l.jsxs)("div", {
                          className: X.Bs,
                          children: [
                              (0, l.jsx)(T.E, { variant: "text-md/normal", children: $.intl.string($.t.jH4B9O) }),
                              (0, l.jsx)(Q.m, { size: "sm", color: "currentColor", className: X.I8 }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}
var et = n(636547),
    en = n(746523);
function ei(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: i, guildId: a } = e,
        {
            results: r,
            query: d,
            setQuery: c,
            unfilteredCount: u,
        } = (function () {
            let e = (0, o.cf)([W.A], () => Object.values(W.A.getCommands() ?? {})),
                [t, n] = s.useState(""),
                i = s.useMemo(
                    () =>
                        e.filter(
                            (e) =>
                                (null == e.integration_types || e.integration_types.includes(z.b.GUILD_INSTALL)) &&
                                (null == e.contexts || e.contexts?.includes(V.OL.GUILD)),
                        ),
                    [e],
                ),
                l = s.useMemo(
                    () =>
                        [...i].sort((e, t) => {
                            let n = V.kc.CHAT + 1,
                                i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                            return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                        }),
                    [i],
                ),
                a = s.useMemo(() => (t.startsWith("/") ? l.filter((e) => e.type === V.kc.CHAT) : l), [t, l]),
                r = s.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
            return {
                query: t,
                results: s.useMemo(() => (0, F.I)(a, K, r), [a, r]),
                setQuery: n,
                unfilteredCount: e.length,
            };
        })();
    return null != r && u > 0
        ? (0, l.jsx)(et.A, {
              bar: (0, l.jsx)(H.I, { size: "sm", query: d, onChange: c, onClear: () => c("") }),
              inModal: !1,
              title: $.intl.string($.t["0hKkS+"]),
              children: r.map((e, o) =>
                  (0, l.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, l.jsx)(ee, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: i,
                                  command: e,
                                  guildId: a,
                              }),
                              o < r.length - 1 ? (0, l.jsx)(S.c, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, l.jsx)(I.Z, {
              className: en.a,
              editable: !0,
              children: (0, l.jsx)(T.E, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: $.intl.string($.t["x78c+J"]),
              }),
          });
}
var el = n(534148),
    es = n(830662);
function ea(e) {
    let { application: t, canNavigate: n, guildId: i } = e,
        a = (0, o.bG)([W.A], () => W.A.isUnavailable());
    return (s.useEffect(() => (U.hu(t.id), U.AL), [t.id]),
    s.useEffect(() => {
        U.gV(t.id, i, t.id), U.Jw(i, t.id);
    }, [t.id, i]),
    a)
        ? null
        : (0, l.jsxs)(s.Fragment, {
              children: [
                  (0, l.jsx)(G, {
                      icon: (0, l.jsx)(R.k, { size: "md", color: "currentColor" }),
                      title: $.intl.string($.t.RGoJNN),
                  }),
                  (0, l.jsx)(T.E, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: $.intl.string($.t.sCkD3Z),
                  }),
                  (0, l.jsx)(er, { guildId: i, applicationId: t.id }),
                  (0, l.jsx)(ei, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: i }),
              ],
          });
}
function er(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: i, editedTargetPermissions: s, selectedPermissionCount: a } = (0, B.A)(n, t);
    return (0, l.jsx)("div", {
        className: es.zi,
        children: (0, l.jsx)(el.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: i,
            selectedPermissionCount: a,
        }),
    });
}
var eo = n(308244),
    ed = n(486020),
    ec = n(935208),
    eu = n(427262),
    em = n(990078),
    eg = n(331322),
    eh = n(638916),
    ex = n(866219);
function ep(e) {
    let {
        name: t,
        description: n,
        icon: i,
        imageSrc: s,
        iconBackgroundColor: a,
        iconClassName: r,
        iconWrapperClassName: o,
        details: c,
        detailsClassName: u,
        isHeader: m,
        isPremium: g,
        children: h,
    } = e;
    return (0, l.jsxs)(eg.B, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != i || null != s
                ? (function (e, t, n, i, s) {
                      if (null != t) return (0, l.jsx)("img", { alt: "", src: t, className: D()(ex.P0, i) });
                      let a = null;
                      return (
                          null != e &&
                              (a =
                                  "string" == typeof e
                                      ? (0, l.jsx)("img", { alt: "", src: e, className: D()(ex.Kk, i) })
                                      : (0, l.jsx)(e, { className: D()(ex.Kk, i), color: "currentColor" })),
                          (0, l.jsx)("div", { style: { backgroundColor: n }, className: D()(ex.P0, s), children: a })
                      );
                  })(i, s, a, r, o)
                : null,
            (0, l.jsxs)(eg.B, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: i, detailsClassName: s, isHeader: a, isPremium: r } = e,
                            o = i?.map((e, t) => {
                                let { icon: n, text: i } = e;
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        className: D()(ex.yM, a ? ex.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, l.jsx)(n, { size: "xs", color: "currentColor", className: ex.Ul })
                                                : null,
                                            (0, l.jsx)(T.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: s,
                                                children: i,
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            });
                        return (0, l.jsxs)(eg.B, {
                            gap: 0,
                            children: [
                                (0, l.jsxs)(d.D, {
                                    variant: a ? "heading-xl/semibold" : "heading-md/medium",
                                    className: a ? ex.wx : ex.K8,
                                    children: [
                                        t,
                                        r &&
                                            (0, l.jsx)(em.m, {
                                                text: $.intl.string($.t.VFuFum),
                                                children: (0, l.jsx)(eh.q, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: ex.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, l.jsx)(T.E, { variant: "text-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, l.jsx)(eg.B, { direction: "horizontal", children: o }),
                            ],
                        });
                    })({ name: t, description: n, details: c, detailsClassName: u, isHeader: m, isPremium: g }),
                    h,
                ],
            }),
        ],
    });
}
var eA = n(136722),
    eb = n(452027),
    ef = n(686956),
    e_ = n(417454),
    ej = n(595738),
    eN = n(709066),
    ev = n(376092),
    eE = n(889227),
    eC = n(696451),
    eI = n(317525),
    eT = n(592822);
function eS(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: i } = n,
        a = null != i.bot ? new eE.A(i.bot) : null,
        r = (0, o.bG)([eC.Ay], () => (null != a ? eC.Ay.getMember(t.id, a.id) : null), [a, t]),
        d = (0, o.bG)([eI.A], () => eI.A.getEveryoneRole(t)),
        c = (0, o.yK)([eI.A], () => eI.A.getManyRoles(t.id, r?.roles ?? [])),
        u = a?.id;
    s.useEffect(() => {
        null != u && ef.A.requestMembersById(t.id, u);
    }, [t.id, u]);
    let m = s.useMemo(() => eA.kg(d.permissions, ...c.map((e) => e.permissions)), [c, d]);
    if (null == a) return null;
    let g = ed.Ay.getApplicationIconURL({ id: i.id, guildMember: r, bot: i.bot, icon: i.icon, size: 32 });
    return (0, l.jsx)(I.Z, {
        editable: !0,
        className: eT.Nr,
        children: (0, l.jsxs)(h.A, {
            direction: h.A.Direction.VERTICAL,
            children: [
                (0, l.jsxs)(h.A, {
                    align: h.A.Align.CENTER,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: g, className: eT.P0 }),
                        (0, l.jsx)(T.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: $.intl.format($.t.GyhzGw, { user: a.toString() }),
                        }),
                        (0, l.jsx)(eN.A, { className: eT.Tc, verified: a.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, i) {
                    let s = [],
                        a = [];
                    for (let e of ev.Q) eA.zy(i, e) ? s.push(e) : a.push(e);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(S.c, { className: eT.yF }),
                            n.length > 0
                                ? (0, l.jsx)(eb.D, {
                                      label: $.intl.format($.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, l.jsx)(e_.Ay, {
                                          className: eT.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            s.length > 0 || a.length > 0
                                ? (0, l.jsx)(ej.A, {
                                      grantedPermissions: s,
                                      grantedPermissionsHeader: $.intl.string($.t["hA4+su"]),
                                      disabledPermissions: a,
                                      disabledPermissionsHeader: $.intl.string($.t["/rEZ2i"]),
                                  })
                                : null,
                        ],
                    });
                })(a, t, r?.roles ?? [], m),
            ],
        }),
    });
}
var ey = n(47167),
    ew = n(994500),
    eO = n(287809),
    ek = n(123292),
    eL = n(314116),
    eR = n(778492),
    eM = n(292666),
    eD = n(691885),
    eP = n(824953),
    eG = n(147925),
    eU = n(652215),
    eW = n(186480);
function eB(e) {
    let { webhook: t, editedWebhook: n, channelOptions: i, isExpanded: a, errors: r, onToggleExpand: o } = e,
        d = s.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, ed.ku)({ id: t.id, avatar: e, discriminator: eU.h3J });
        }, [t]),
        c = s.useCallback(() => {
            (0, eL.A)({
                title: $.intl.formatToPlainString($.t.gBKqZ0, { name: t.name }),
                subtitle: $.intl.string($.t.zO9jrD),
                confirmText: $.intl.string($.t.CMy0Cj),
                onConfirm: () => {
                    eP.A.delete(t.guild_id, t.id).catch(() => {
                        k.A.show({ title: $.intl.string($.t.LpbaFV), body: $.intl.string($.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        m = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (m.push({ icon: eR.k, text: t.source_channel.name }),
        m.push({
            text: (0, l.jsx)(
                "span",
                {
                    className: eW.lM,
                    children: $.intl.format($.t["H/jJ6R"], {
                        guildHook: () => (0, l.jsx)("span", { className: eW.VZ, children: t.source_guild.name }, t.id),
                    }),
                },
                "guild-source",
            ),
        }));
    let g = null;
    return (
        a &&
            null != n &&
            (g = (0, l.jsxs)("div", {
                className: eW.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eW.fV }),
                    (0, l.jsxs)(eg.B, {
                        gap: 24,
                        children: [
                            (0, l.jsxs)(eg.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(eM.k, {
                                        label: $.intl.string($.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            u.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: r.name,
                                    }),
                                    (0, l.jsx)(eD.l, {
                                        label: $.intl.string($.t["4TuWfc"]),
                                        value: n.channel_id,
                                        options: i,
                                        onSelectionChange: (e) => {
                                            u.A.updateWebhook({ channelId: e });
                                        },
                                        selectionMode: "single",
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(S.c, { className: eW.Bd }),
                            (0, l.jsx)(ek.Q, {
                                onClick: c,
                                size: "sm",
                                variant: "critical",
                                text: $.intl.string($.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(I.Z, {
            editable: !0,
            className: eW.Nr,
            children: (0, l.jsxs)(eg.B, {
                children: [
                    (0, l.jsx)(q.D, {
                        className: eW.wx,
                        "aria-expanded": a,
                        onClick: o,
                        children: (0, l.jsxs)(eg.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, l.jsx)(ep, { name: t.name, imageSrc: d, details: m }),
                                (0, l.jsx)(eG.A, { className: eW.eO, expanded: a, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    g,
                ],
            }),
        })
    );
}
var eH = n(636537),
    ez = n(451988),
    eV = n(783878),
    eF = n(765178),
    eK = n(342298),
    eY = n(957565),
    eq = n(767906);
function eQ(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, ed.ku)({ id: e.id, avatar: t, discriminator: eU.h3J });
}
function eZ(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: i,
            channelOptions: a,
            isExpanded: r,
            isNew: o,
            errors: d,
            onToggleExpand: c,
        } = e,
        [m, g] = s.useState(!1),
        [x] = s.useState(new ez.Ep());
    s.useEffect(() => () => x.stop(), [x]);
    let p = s.useMemo(() => eQ(n, n.avatar), [n]),
        A = s.useCallback(() => {
            let e = `${(0, eH.TP)(!1)}${eU.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, eY.C)(e);
        }, [n]),
        b = s.useCallback(() => {
            (0, eL.A)({
                title: $.intl.formatToPlainString($.t.QVFjHh, { name: n.name }),
                subtitle: $.intl.format($.t["rIWe+5"], { name: n.name }),
                confirmText: $.intl.string($.t["W+K1Fs"]),
                cancelText: $.intl.string($.t.xNhj0O),
                onConfirm: () => {
                    eP.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? k.A.show({ title: $.intl.string($.t.N5riYn), body: $.intl.string($.t.eAxcCc) })
                            : k.A.show({ title: $.intl.string($.t.N5riYn), body: $.intl.string($.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        f = [];
    null != n.user
        ? f.push({
              icon: E.O,
              text: $.intl.formatToPlainString($.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new eE.A(e);
                      return eu.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: ec.default.extractTimestamp(n.id),
              }),
          })
        : f.push({
              icon: E.O,
              text: $.intl.formatToPlainString($.t["7mv59O"], { timestamp: ec.default.extractTimestamp(n.id) }),
          });
    let _ = null;
    return (
        r &&
            null != i &&
            (_ = (0, l.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eq.fV }),
                    (0, l.jsxs)(h.A, {
                        children: [
                            (0, l.jsx)(h.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, l.jsxs)(h.A, {
                                    className: eq.R3,
                                    direction: h.A.Direction.VERTICAL,
                                    children: [
                                        (0, l.jsx)(eK.A, {
                                            image: i.avatar,
                                            onChange: (e) => {
                                                u.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => eQ(n, e),
                                            imageClassName: eq.mr,
                                            showIcon: !0,
                                        }),
                                        null != d.avatar && "" !== d.avatar
                                            ? (0, l.jsx)(T.E, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: d.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, l.jsxs)(h.A, {
                                direction: h.A.Direction.VERTICAL,
                                children: [
                                    (0, l.jsxs)(h.A, {
                                        children: [
                                            (0, l.jsx)(h.A.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, l.jsx)(eM.k, {
                                                    label: $.intl.string($.t.ukdxuo),
                                                    value: i.name,
                                                    onChange: (e) => {
                                                        u.A.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: d.name,
                                                }),
                                            }),
                                            (0, l.jsx)(h.A.Child, {
                                                basis: "50%",
                                                children: (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(eV.Z, {
                                                        label: $.intl.string($.t.GK18KJ),
                                                        value: i.channel_id,
                                                        options: a,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            u.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: $.intl.string($.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(S.c, { className: eq.Bd }),
                                    (0, l.jsxs)(h.A, {
                                        children: [
                                            (0, l.jsx)(em.m, {
                                                text: $.intl.string($.t.wwdb3g),
                                                shouldShow: m,
                                                hideOnClick: !1,
                                                forceOpen: m,
                                                children: (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: eq.cL,
                                                    children: (0, l.jsx)(O.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: $.intl.string($.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            g(!0),
                                                                eF.O.announce($.intl.string($.t.wwdb3g)),
                                                                x.start(1e3, () => g(!1)),
                                                                A();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)(O.$, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: $.intl.string($.t.jVrUnC),
                                                onClick: b,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(I.Z, {
            editable: !0,
            id: t,
            className: D()(eq.Nr, o ? eq.U6 : null),
            children: (0, l.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(q.D, {
                        className: eq.wx,
                        "aria-expanded": r,
                        onClick: c,
                        children: (0, l.jsxs)(h.A, {
                            align: h.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(ep, { name: n.name, imageSrc: p, details: f }),
                                (0, l.jsx)(eG.A, { className: eq.eO, expanded: r, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    _,
                ],
            }),
        })
    );
}
var eJ = n(400698);
function e$(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: i,
            editedWebhook: a,
            errors: r,
            canNavigate: o,
        } = e,
        d = s.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, ey.m1)(e, eO.default, ew.A, !0) })),
            [n],
        ),
        c = s.useMemo(() => {
            let e = {};
            for (let i of t)
                if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
                else {
                    let t = n[i.channel_id];
                    null != t && (e[i.channel_id] = { channel: t, webhooks: [i] });
                }
            return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
        }, [n, t]),
        m = s.useCallback(
            (e) => {
                o() && (e === a?.id ? u.A.stopEditingWebhook() : u.A.startEditingWebhook(e));
            },
            [o, a],
        );
    return (0, l.jsx)("div", {
        className: eJ.__invalid_list,
        children: c.map((e) => {
            let { channel: t, webhooks: n } = e;
            return (function (e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: i,
                    lastCreatedWebhookId: s,
                    editedWebhook: a,
                    errors: r,
                    toggleWebhookExpand: o,
                } = e;
                return (0, l.jsxs)(
                    "div",
                    {
                        children: [
                            (0, l.jsx)(T.E, {
                                variant: "text-md/medium",
                                className: eJ.x,
                                children: $.intl.format($.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, l.jsx)(
                                            "span",
                                            { className: eJ.H, children: (0, ey.m1)(t, eO.default, ew.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === eU.NH1.CHANNEL_FOLLOWER
                                    ? (0, l.jsx)(
                                          eB,
                                          {
                                              webhook: e,
                                              editedWebhook: a,
                                              channelOptions: i,
                                              isExpanded: a?.id === e.id,
                                              onToggleExpand: () => o(e.id),
                                              errors: r,
                                          },
                                          e.id,
                                      )
                                    : (0, l.jsx)(
                                          eZ,
                                          {
                                              id: ((t = e.id), `settings-integrations-webhook-${t}`),
                                              webhook: e,
                                              editedWebhook: a,
                                              channelOptions: i,
                                              isExpanded: a?.id === e.id,
                                              isNew: s === e.id,
                                              onToggleExpand: () => o(e.id),
                                              errors: r,
                                          },
                                          e.id,
                                      );
                            }),
                        ],
                    },
                    t.id,
                );
            })({
                channel: t,
                webhooks: n,
                channelOptions: d,
                lastCreatedWebhookId: i,
                editedWebhook: a,
                errors: r,
                toggleWebhookExpand: m,
            });
        }),
    });
}
var eX = n(234);
function e0(e) {
    let { application: t, guild: n, integration: i, ...s } = e;
    return (0, l.jsx)(N.ConfirmModal, {
        ...s,
        title: $.intl.formatToPlainString($.t["rL9d/1"], { applicationName: t.name }),
        subtitle: $.intl.format($.t.FGE8ya, { applicationName: t.name }),
        confirmText: $.intl.string($.t.ebGf4m),
        onConfirm: () => {
            L.A.disableIntegration(n.id, i.id).catch(() => {
                k.A.show({ title: $.intl.string($.t.wYqMmI), body: $.intl.string($.t.A4Mnst) });
            });
        },
    });
}
function e1(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: i,
            editedWebhook: a,
            errors: r,
            canNavigate: d,
        } = e,
        { application: c, integration: u, webhooks: m } = n,
        [g, x] = (0, o.yK)(
            [b.A],
            () => [
                b.A.can(eU.xBc.MANAGE_ROLES, t),
                null == c.bot || b.A.canManageUser(eU.xBc.MANAGE_GUILD, c.bot.id, t),
            ],
            [c.bot, t],
        ),
        p = (0, o.bG)([b.A], () => b.A.can(eU.xBc.MANAGE_WEBHOOKS, t), [t]),
        A = s.useCallback(() => {
            d() && (0, v.openModal)((e) => (0, l.jsx)(e0, { guild: t, application: c, integration: u, ...e }));
        }, [c, d, t, u]),
        f = s.useMemo(() => {
            let e = [
                {
                    icon: E.O,
                    text: $.intl.formatToPlainString($.t.gcdJ8J, { timestamp: ec.default.extractTimestamp(u.id) }),
                },
            ];
            return (
                null != u.user &&
                    e.push({
                        icon: C.n,
                        text: $.intl.formatToPlainString($.t.qE7oqs, { user: eu.Ay.getUserTag(u.user) }),
                    }),
                e
            );
        }, [u.id, u.user]),
        _ = s.useMemo(
            () =>
                null != c.bot && u.scopes?.includes(j.F.BOT)
                    ? (0, l.jsx)(eS, { guild: t, applicationIntegration: n })
                    : (0, l.jsx)(I.Z, {
                          className: eX.aM,
                          editable: !0,
                          children: (0, l.jsx)(T.E, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: $.intl.string($.t.pfLnza),
                          }),
                      }),
            [c.bot, n, t, u.scopes],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep, {
                name: c.name,
                imageSrc: ed.Ay.getApplicationIconURL({ id: c.id, icon: c.icon, size: 32 }),
                details: f,
                isHeader: !0,
            }),
            c?.description != null ? (0, l.jsx)(eo.A, { userBio: c.description, className: eX.ux }) : null,
            g ? (0, l.jsx)(ea, { application: c, canNavigate: d, guildId: t.id }) : null,
            (0, l.jsx)(S.c, { className: eX.zN }),
            null != c.bot
                ? (0, l.jsxs)("div", {
                      className: eX.uW,
                      children: [
                          (0, l.jsx)(G, {
                              icon: (0, l.jsx)(y.C, { size: "xs", color: "currentColor" }),
                              title: $.intl.string($.t.AOdOYr),
                          }),
                          _,
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: eX.uW,
                children: [
                    (0, l.jsx)(G, {
                        icon: (0, l.jsx)(w.X, { size: "md", color: "currentColor" }),
                        title: $.intl.string($.t["t9ZX/I"]),
                    }),
                    m.length > 0
                        ? (0, l.jsx)(e$, {
                              webhooks: m,
                              editedWebhook: a,
                              selectableWebhookChannels: i,
                              errors: r,
                              canNavigate: d,
                          })
                        : (0, l.jsx)(I.Z, {
                              className: eX.aM,
                              editable: !0,
                              children: (0, l.jsx)(T.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: p ? $.intl.string($.t.ahPd2Y) : $.intl.string($.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, l.jsx)(S.c, { className: eX.zN }),
            (0, l.jsxs)(h.A, {
                className: eX.uW,
                justify: h.A.Justify.BETWEEN,
                align: h.A.Align.CENTER,
                children: [
                    (0, l.jsx)(T.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: x ? $.intl.string($.t.hdneL4) : $.intl.string($.t.xRCMqx),
                    }),
                    (0, l.jsx)(h.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, l.jsx)(O.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: $.intl.string($.t.ebGf4m),
                            disabled: !x,
                            onClick: A,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var e2 = n(573648);
n(323874), n(14289), n(35956);
var e3 = n(989349),
    e8 = n.n(e3),
    e4 = n(788373),
    e9 =
        (((i = {})[(i.ONE_DAY = 1)] = "ONE_DAY"),
        (i[(i.THREE_DAYS = 3)] = "THREE_DAYS"),
        (i[(i.SEVEN_DAYS = 7)] = "SEVEN_DAYS"),
        (i[(i.FOURTEEN_DAYS = 14)] = "FOURTEEN_DAYS"),
        (i[(i.THIRTY_DAYS = 30)] = "THIRTY_DAYS"),
        i),
    e6 = n(125744),
    e7 = n(139033),
    e5 = n(408278),
    te = n(663417),
    tt = n(150934),
    tn = n(349288),
    ti = n(159273),
    tl = n(351906),
    ts = n(858456),
    ta = n(818050);
function tr(e) {
    let t,
        {
            guild: n,
            integration: i,
            editedIntegration: a,
            isExpanded: r,
            onToggleExpand: c,
            onDisable: m,
            onEnable: g,
        } = e,
        [x, p] = s.useState(!1),
        A = (0, o.bG)([tl.A], () => tl.A.hidePersonalInformation),
        f = (0, o.bG)([b.A], () => b.A.can(eU.xBc.KICK_MEMBERS, n)),
        _ = s.useCallback(() => {
            p(!0), g(i);
        }, [i, g]),
        j = s.useCallback(() => {
            if (!i.syncing)
                if (f || i.expire_behavior !== e4.F.KICK) {
                    let e =
                        i.expire_behavior === e4.F.REMOVE_ROLE
                            ? $.intl.string($.t["6kpw4i"])
                            : $.intl.string($.t.fQUQIJ);
                    (0, eL.A)({
                        title: $.intl.string($.t.emx3lN),
                        subtitle: i.type === e6.s.YOUTUBE ? $.intl.string($.t.anKQWU) : $.intl.string($.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => m(i),
                        variant: "critical",
                    });
                } else
                    (0, e7.A)({
                        title: $.intl.string($.t.emx3lN),
                        subtitle: i.type === e6.s.YOUTUBE ? $.intl.string($.t.pDCiEf) : $.intl.string($.t.sQqHFk),
                    });
        }, [i, m, f]),
        N = s.useCallback(() => {
            L.A.syncIntegration(n.id, i.id);
        }, [n.id, i.id]),
        v = s.useCallback(() => {
            null != i.role_id && (L.A.setSection(eU.BEX.ROLES), L.A.selectRole(i.role_id));
        }, [i.role_id]),
        {
            serviceName: C,
            channelURL: y,
            expireBehaviorLabel: w,
            syncLabel: k,
            subscribersText: R,
        } = s.useMemo(() => {
            let e = e2.A.get(i.type)?.getPlatformUserUrl?.({ id: i.account.id, name: i.account.name }) ?? "";
            switch (i.type) {
                case e6.s.YOUTUBE:
                    return {
                        serviceName: $.intl.string($.t.aS6cK4),
                        expireBehaviorLabel: $.intl.string($.t.A5MiqO),
                        syncLabel: $.intl.string($.t["7vHKVe"]),
                        subscribersText: $.intl.formatToPlainString($.t["7lNtce"], {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case e6.s.TWITCH:
                default:
                    return {
                        serviceName: $.intl.string($.t.q4pBG3),
                        expireBehaviorLabel: $.intl.string($.t["S/WCrG"]),
                        syncLabel: $.intl.string($.t["0jbPK4"]),
                        subscribersText: $.intl.formatToPlainString($.t.RdUTrl, {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [i.account, i.subscriber_count, i.type]),
        M = (0, o.bG)([eI.A], () => (null != i.role_id ? eI.A.getRole(n.id, i.role_id) : void 0)),
        { roleLink: P, syncDescriptionText: G } = s.useMemo(() => {
            let e;
            e = null != M ? (0, l.jsx)(tn.Anchor, { onClick: v, children: M.name }) : $.intl.string($.t.PoWNfe);
            let t = e2.A.get(i.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    i.revoked && null != t
                        ? $.intl.formatToPlainString($.t.G16Wji, { user: i.user, platformName: t.name })
                        : $.intl.formatToPlainString($.t.unl3AP, { datetime: e8()(i.synced_at).calendar() }),
            };
        }, [M, v, i.revoked, i.synced_at, i.type, i.user]),
        U = (0, o.bG)([eI.A], () => eI.A.getSortedRoles(n.id)),
        W = s.useMemo(() => {
            let e = ti.Ay.getGuildEmoji(n.id),
                t = U.filter((e) => null != e.tags && e.tags.integration_id === i.id).map((e) => e.id);
            return i.enable_emoticons
                ? e
                      .filter((e) => null != i.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, U, i.enable_emoticons, i.id, i.role_id]);
    if (
        (s.useEffect(() => {
            a?.id === i.id && a?.enabled === !0 && p(!1);
        }, [a, i.id]),
        i.enabled && null != i.user)
    )
        t = [
            {
                icon: E.O,
                text: A
                    ? $.intl.formatToPlainString($.t.gcdJ8J, { timestamp: ec.default.extractTimestamp(i.id) })
                    : $.intl.formatToPlainString($.t.Nu9sat, {
                          user: null != i.user ? new eE.A(i.user).tag : null,
                          timestamp: ec.default.extractTimestamp(i.id),
                      }),
            },
        ];
    else {
        let e = new URL(y);
        t = [
            {
                text: $.intl.format($.t.BegylZ, {
                    serviceName: C,
                    accountUrl: y,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let B = (0, l.jsxs)(h.A, {
            className: ts.wx,
            align: h.A.Align.CENTER,
            children: [
                (0, l.jsx)(ep, { name: `${i.name}`, detailsClassName: ts.h_, details: t }),
                i.enabled
                    ? (0, l.jsx)(h.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, l.jsx)(eG.A, { className: ts.eO, expanded: r && !x, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)(h.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: x
                              ? (0, l.jsx)(e5.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: te.f,
                                    "aria-label": $.intl.string($.t["7sCN8m"]),
                                })
                              : (0, l.jsx)(O.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: _,
                                    text: $.intl.string($.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        H = null;
    return (
        r &&
            !x &&
            null != a &&
            (H = (0, l.jsxs)(h.A, {
                className: ts.rf,
                direction: h.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(S.c, { className: ts.fV }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: i,
                            descriptionText: s,
                            roleLink: a,
                            onSync: r,
                        } = e;
                        return (0, l.jsxs)(h.A, {
                            children: [
                                (0, l.jsxs)(h.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(d.D, {
                                            variant: "heading-md/semibold",
                                            className: ta.QB,
                                            children: $.intl.string($.t.eBtNBa),
                                        }),
                                        (0, l.jsx)(T.E, {
                                            className: ts.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(h.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(d.D, {
                                            variant: "heading-sm/semibold",
                                            className: ta.QB,
                                            children: n,
                                        }),
                                        (0, l.jsxs)(h.A, {
                                            justify: h.A.Justify.BETWEEN,
                                            children: [
                                                (0, l.jsxs)(h.A, {
                                                    direction: h.A.Direction.VERTICAL,
                                                    children: [
                                                        (0, l.jsx)(T.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: i,
                                                        }),
                                                        (0, l.jsx)(T.E, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, l.jsx)(e5.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: te.f,
                                                          "aria-label": $.intl.string($.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, l.jsx)(O.$, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: $.intl.string($.t.BkuOO6),
                                                          disabled: t.revoked,
                                                          onClick: r,
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    })({
                        integration: a,
                        labelText: k,
                        subscribersText: R,
                        descriptionText: G,
                        roleLink: P,
                        onSync: N,
                    }),
                    (0, l.jsx)(S.c, { className: ts.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: s } = e;
                        return (0, l.jsxs)(h.A, {
                            children: [
                                (0, l.jsx)(h.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eD.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: e4.F.REMOVE_ROLE.toString(),
                                                label: $.intl.string($.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: e4.F.KICK.toString(),
                                                label: $.intl.string($.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => i(parseInt(e)),
                                    }),
                                }),
                                (0, l.jsx)(h.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eD.l, {
                                        selectionMode: "single",
                                        label: $.intl.string($.t.uiXMow),
                                        placeholder: $.intl.string($.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(e9)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: $.intl.formatToPlainString($.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => s(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: a,
                        labelText: w,
                        onBehaviorChange: function (e) {
                            u.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !f &&
                        a.expire_behavior === e4.F.KICK &&
                        (0, l.jsx)(T.E, {
                            className: ts.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: $.intl.string($.t.mThMlB),
                        }),
                    i.type === e6.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, l.jsxs)(h.A, {
                                  direction: h.A.Direction.VERTICAL,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: D()(ta.QX, ta.QB),
                                          children: (0, l.jsx)(tt.S, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => i(e),
                                              label: $.intl.string($.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, l.jsx)(h.A, {
                                          wrap: h.A.Wrap.WRAP,
                                          className: ts.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, l.jsx)(
                                                  em.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, l.jsx)(
                                                          "img",
                                                          {
                                                              alt: $.intl.formatToPlainString($.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: D()(ts.Zg, "emoji", "jumboable"),
                                                              src: ed.Ay.getEmojiURL({
                                                                  id: e.id,
                                                                  animated: e.animated,
                                                                  size: 28,
                                                              }),
                                                          },
                                                          e.name,
                                                      ),
                                                  },
                                                  t,
                                              ),
                                          ),
                                      }),
                                  ],
                              });
                          })({
                              integration: a,
                              emojis: W,
                              onToggle: function (e) {
                                  u.A.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, l.jsx)(S.c, { className: ts.Bd }),
                    (0, l.jsx)(h.A, {
                        children: (0, l.jsx)(O.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: $.intl.string($.t.M6q6eX),
                            onClick: j,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(I.Z, {
            editable: !0,
            className: ts.Nr,
            children: (0, l.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                children: [
                    i.enabled
                        ? (0, l.jsx)(q.D, { className: ts._S, "aria-expanded": r && !x, onClick: c, children: B })
                        : B,
                    H,
                ],
            }),
        })
    );
}
var to = n(836803);
function td(e) {
    let {
            integrations: t,
            editedIntegration: n,
            guild: i,
            platformType: a,
            labelText: r,
            descriptionText: o,
            helpText: d,
            errors: c,
            canNavigate: m,
        } = e,
        g = e2.A.get(a),
        h = s.useCallback(
            async (e) => {
                m() && (await L.A.enableIntegration(i.id, e.type, e.id), u.A.startEditingIntegration(e.id));
            },
            [m, i.id],
        ),
        x = s.useCallback(
            (e) => {
                m() && (e.id === n?.id && u.A.stopEditingIntegration(), L.A.disableIntegration(i.id, e.id));
            },
            [m, n, i.id],
        ),
        p = s.useCallback(
            (e) => {
                m() && (e === n?.id ? u.A.stopEditingIntegration() : u.A.startEditingIntegration(e));
            },
            [m, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ep, {
                name: r,
                icon: g?.icon.whiteSVG,
                iconBackgroundColor: g?.color,
                iconClassName: to.tV,
                description: o,
                isHeader: !0,
            }),
            (0, l.jsx)(S.c, { className: to.zN }),
            "message" in c &&
                (0, l.jsx)(T.E, {
                    className: to.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: c.message,
                }),
            t.map((e) =>
                (0, l.jsx)(
                    tr,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: i,
                        isExpanded: n?.id === e.id,
                        onEnable: h,
                        onDisable: x,
                        onToggleExpand: () => p(e.id),
                    },
                    e.id,
                ),
            ),
            (0, l.jsx)(T.E, { className: to.BK, color: "text-muted", variant: "text-sm/normal", children: d }),
        ],
    });
}
var tc = n(462887),
    tu = n(736653),
    tm = n(936256);
let tg = "/assets/a29cabf3e1357986.svg",
    th = "/assets/c733a28e6fcba3ef.svg";
function tx(e) {
    var t;
    let n,
        { followedChannelWebhooks: i, editedWebhook: s, selectableWebhookChannels: a, errors: r, canNavigate: o } = e,
        c = (0, tu.Ay)();
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(T.E, {
                variant: "text-sm/normal",
                children: $.intl.format($.t["5u+aV1"], {
                    helpdeskArticle: _.A.getArticleURL(eU.MVz.CHANNEL_FOLLOWING),
                }),
            }),
            (0, l.jsx)(S.c, { className: tm.zN }),
            i.length > 0
                ? (0, l.jsx)(e$, {
                      webhooks: i,
                      editedWebhook: s,
                      selectableWebhookChannels: a,
                      errors: r,
                      canNavigate: o,
                  })
                : ((t = () => open(_.A.getArticleURL(eU.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, tc.M)(c) ? tg : th),
                  (0, l.jsxs)(h.A, {
                      direction: h.A.Direction.VERTICAL,
                      align: h.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: n, className: tm.QT }),
                          (0, l.jsx)(d.D, { variant: "heading-md/semibold", children: $.intl.string($.t.gzuVH0) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tm.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: $.intl.string($.t["ZwSt+T"]),
                                  onClick: t,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
var tp = n(22231),
    tA = n(429913),
    tb = n(713654),
    tf = n(137177),
    t_ = n(887501),
    tj = n(514810),
    tN = n(43105),
    tv = n(340351),
    tE = n(320448),
    tC = n(58149),
    tI = n(264322),
    tT = n(954571),
    tS = n(320426),
    ty = n(338652);
function tw(e) {
    let {
            name: t,
            icon: n,
            imageSrc: i,
            iconBackgroundColor: a,
            iconClassName: r,
            iconWrapperClassName: d,
            details: c,
            integration: u,
            buttonText: m,
            buttonDisabled: g,
            hasNextSection: h,
            onButtonClick: x,
            guildId: A,
            isScrolling: b,
            canShowMigrationTooltip: f,
            trailing: _,
        } = e,
        [N, v] = s.useState(!1),
        E = f && !b && !N && void 0 !== A && null != u,
        C = s.useRef(null),
        S = s.useRef(null),
        k =
            null == m || null == x
                ? null
                : h
                  ? (0, l.jsxs)(eg.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: S,
                        children: [
                            (0, l.jsx)(T.E, { variant: "text-sm/normal", children: m }),
                            (0, l.jsx)(tE._, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: ty.OW,
                            }),
                        ],
                    })
                  : (0, l.jsx)(O.$, { size: "sm", buttonRef: C, disabled: g, onClick: x, text: m });
    s.useEffect(() => {
        E &&
            tT.default.track(eU.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, tC.H$)(A),
                application_id: u?.application.id,
                location: "overview",
            });
    }, [A, u?.application.id, E]);
    let L =
            E && (null != S.current || null != C.current)
                ? (0, l.jsx)(tN.A, {
                      targetElementRef: h ? S : C,
                      title: $.intl.string($.t.ufFDiC),
                      body: $.intl.string($.t.TyMJwC),
                      onRequestClose: () => {
                          v(!0), tS.A.dismissOverviewTooltip(A, u.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        M = (0, o.yK)([p.A], () =>
            null != u && null != A ? (p.A.getApplicationEntitlementsForGuild(u.application.id, A) ?? []) : [],
        ),
        P = (0, tI.ON)(A, !0),
        G = u?.application != null && Object.keys(P.result?.sections[u.application.id]?.commands ?? {}).length > 0,
        U = (0, l.jsxs)(eg.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, l.jsx)(ep, {
                    name: t,
                    icon: n,
                    imageSrc: i,
                    iconBackgroundColor: a,
                    iconClassName: r,
                    iconWrapperClassName: d,
                    details: c,
                    isPremium: M.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: i, integration: s, webhooks: a } = e;
                        return (
                            null != i.bot &&
                                s?.scopes?.includes(j.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new eE.A(i.bot).isVerifiedBot()
                                        ? $.intl.string($.t.xxcTGy)
                                        : $.intl.string($.t.AOdOYr),
                                    icon: y.C,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: $.intl.formatToPlainString($.t["6HqDfT"], { count: a.length }),
                                    icon: w.X,
                                }),
                            s?.scopes?.includes(j.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: $.intl.string($.t["0hKkS+"]), icon: R.k }),
                            (0, l.jsx)(eg.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, l.jsx)(tv.C, {
                                    label: $.intl.string($.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(u, G),
                }),
                L,
                k,
                _,
            ],
        });
    return h
        ? (0, l.jsx)(q.D, {
              onClick: () => {
                  f && null != A && null != u && tS.A.dismissOverviewTooltip(A, u.integration), x?.();
              },
              children: (0, l.jsx)(I.Z, { editable: !0, className: D()(ty.Nr, ty.vk), children: U }),
          })
        : (0, l.jsx)(I.Z, { editable: !0, className: ty.Nr, children: U });
}
function tO(e) {
    let { channel: t, application: i, showApplicationImage: a, ...r } = e,
        o = (0, tj.N)(t),
        d = s.useCallback(
            () =>
                (0, v.openModalLazy)(async () => {
                    let { default: e } = await n.e("73380").then(n.bind(n, 106895));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, application: i });
                }),
            [i, t],
        ),
        c = a ? (i.getIconURL(48) ?? ed.vI["0"]) : void 0;
    return (0, l.jsx)(tw, { imageSrc: c, onButtonClick: d, details: null != o ? [{ text: o }] : void 0, ...r });
}
var tk = n(108305);
function tL(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, tA.h)(t);
    return 0 === n.length || null == i
        ? null
        : (0, l.jsxs)("div", {
              className: tk.kF,
              children: [
                  (0, l.jsxs)("div", {
                      className: tk.wx,
                      children: [
                          (0, l.jsx)(tf.A, { game: i, size: tf.M.XSMALL }),
                          (0, l.jsx)(d.D, { variant: "heading-md/semibold", children: i?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          tO,
                          {
                              channel: e,
                              application: i,
                              name: (0, ey.m1)(e, eO.default, ew.A),
                              icon: (0, tb.gU)(e) ?? void 0,
                              iconWrapperClassName: tk.N3,
                              hasNextSection: !0,
                              trailing: (0, l.jsx)(tp.R, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function tR(e) {
    let { guild: t } = e,
        n = (0, t_.A)(t.id),
        i = r().groupBy(n, (e) => e.linkedLobby?.application_id),
        a = Object.keys(i);
    return (
        s.useEffect(() => {
            0 === n.length && u.A.setSection(eU.wLn.OVERVIEW);
        }, [n]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(T.E, {
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["9gsSLu"], {
                        helpdeskArticle: _.A.getArticleURL(eU.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, l.jsx)(S.c, { className: tk.zN }),
                a.map((e) => (0, l.jsx)(tL, { applicationId: e, channels: i[e] }, e)),
            ],
        })
    );
}
var tM = n(91871),
    tD = n.n(tM),
    tP = n(881636),
    tG = n(184940),
    tU = n(289873),
    tW = n(398590),
    tB = n(837057),
    tH = n(310419),
    tz = n(526132),
    tV = n(30370),
    tF = n(381616),
    tK = n(488995),
    tY = n(32589),
    tq = n(854766),
    tQ = n(237070);
function tZ(e, t) {
    return t.includes(e);
}
function tJ(e) {
    let { query: t, setQuery: n } = e,
        i = s.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, l.jsx)("div", {
        className: tY.MT,
        children: (0, l.jsx)(H.I, {
            query: t,
            onChange: i,
            onClear: () => n(""),
            placeholder: $.intl.string($.t["5prvKe"]),
            "aria-label": $.intl.string($.t["5prvKe"]),
        }),
    });
}
function t$(e) {
    var t, n, i, a;
    let r,
        c,
        u,
        m,
        x,
        p,
        A,
        f,
        j,
        N,
        {
            guild: C,
            channel: y,
            applicationIntegrations: O,
            builtInIntegrations: k,
            customWebhooks: L,
            followedChannelWebhooks: R,
            isLoadingWebhooks: M,
            canCreateWebhook: P,
            onManageBuiltIn: G,
            onManageCustomWebhooks: U,
            onManageFollowedChannels: W,
            onManageApplication: B,
            onManageLobbiesLinked: H,
        } = e,
        z = (0, tu.Ay)(),
        [V, F] = s.useState(""),
        { isFetchingConnections: K, accounts: Y } = (0, o.cf)(
            [tV.A],
            () => ({ isFetchingConnections: tV.A.isFetching(), accounts: tV.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: q, canManageGuild: Q } = (0, o.cf)(
            [b.A],
            () => ({
                canManageWebhooks:
                    (null != C && b.A.can(eU.xBc.MANAGE_WEBHOOKS, C)) ||
                    (null != y && b.A.can(eU.xBc.MANAGE_WEBHOOKS, y)),
                canManageGuild: null != C && null == y && b.A.can(eU.xBc.MANAGE_GUILD, C),
            }),
            [C, y],
        ),
        Z = (0, tz.e)(y),
        J = (0, tA.h)(y?.linkedLobby?.application_id),
        X = (0, t_.A)(C?.id),
        {
            availableTwitchIntegrations: ee,
            availableYoutubeIntegrations: et,
            guildTwitchIntegrations: en,
            guildYoutubeIntegrations: ei,
        } = s.useMemo(
            () => ({
                availableTwitchIntegrations: k.twitch?.length ?? 0,
                availableYoutubeIntegrations: k.youtube?.length ?? 0,
                guildTwitchIntegrations: k.twitch?.filter((e) => e.enabled).length ?? 0,
                guildYoutubeIntegrations: k.youtube?.filter((e) => e.enabled).length ?? 0,
            }),
            [k.twitch, k.youtube],
        ),
        { showTwitchCard: el, showYoutubeCard: es } = s.useMemo(() => {
            if (K || !Q) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = C?.features.has(eU.GuildFeatures.COMMUNITY),
                t = Y.filter((e) => e.type === eU.fg2.TWITCH).length > 0,
                n = Y.filter((e) => e.type === eU.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: ee > 0 || (!t && e), showYoutubeCard: et > 0 || (!n && e) };
        }, [K, Q, C, Y, ee, et]),
        ea = Object.values(O).length,
        er = s.useMemo(() => {
            let e = ea > 100 ? tZ : tD();
            return Object.values(O).filter((t) => {
                var n;
                let { application: i } = t;
                return !!(
                    "" === (n = (n = V).trim().toLowerCase()) ||
                    i.id === n ||
                    e(n, i.name.toLowerCase()) ||
                    (null != i.bot && e(n, i.bot.username.toLowerCase()))
                );
            });
        }, [O, ea, V]),
        eo = (0, o.bG)([tF.A], () => {
            if (null != C) return er.find((e) => tF.A.canShowOverviewTooltip(C.id, e.integration.id));
        }, [er, C]),
        em = s.useMemo(
            () => (void 0 !== eo ? [eo, ...er.filter((e) => e.integration.id !== eo.integration.id)] : er),
            [er, eo],
        ),
        eg = (0, v.useModalsStore)(v.hasAnyModalOpenSelector),
        [eh, ex] = s.useState(!1),
        ep = s.useRef(0),
        eA = () => {
            ex(!0),
                clearTimeout(ep.current),
                (ep.current = setTimeout(() => {
                    ex(!1);
                }, 200));
        };
    s.useEffect(() => (window.addEventListener("scroll", eA, !0), () => window.removeEventListener("scroll", eA)));
    let eb = em.map((e) => {
            let t = !eg && e.integration.id === eo?.integration.id;
            return (function (e, t, n, i, s) {
                let { application: a, integration: r } = t,
                    o = [];
                return (
                    null != r.user
                        ? o.push({
                              icon: E.O,
                              text: $.intl.formatToPlainString($.t.Nu9sat, {
                                  timestamp: ec.default.extractTimestamp(r.id),
                                  user: eu.Ay.getUserTag(r.user),
                              }),
                          })
                        : o.push({
                              icon: E.O,
                              text: $.intl.formatToPlainString($.t.gcdJ8J, {
                                  timestamp: ec.default.extractTimestamp(r.id),
                              }),
                          }),
                    (0, l.jsx)(
                        tw,
                        {
                            name: a.name,
                            imageSrc: ed.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                            integration: t,
                            buttonText: $.intl.string($.t["Z/qRnM"]),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(a.id),
                                    tT.default.track(eU.HAw.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: e?.id,
                                        is_admin: null != e ? b.A.can(eU.xBc.ADMINISTRATOR, e) : void 0,
                                    });
                            },
                            details: o,
                            guildId: e?.id,
                            isScrolling: i,
                            canShowMigrationTooltip: s,
                        },
                        `integration-${r.id}`,
                    )
                );
            })(C, e, B, eh, t);
        }),
        ef = (0, l.jsx)("div", { className: tY.Hw });
    if (0 === eb.length && Q) {
        let e, n, i;
        (t = C?.id),
            (e = (0, tc.M)(z) ? tq : tQ),
            (n = (0, l.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                align: h.A.Align.CENTER,
                className: tY.Kl,
                children: [
                    (0, l.jsx)("img", { alt: "", src: e, className: tY.s1 }),
                    (0, l.jsx)(I.Z, {
                        editable: !0,
                        className: tY.$N,
                        children: (0, l.jsx)(T.E, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: $.intl.string($.t.EVWFNr),
                        }),
                    }),
                ],
            })),
            (i = (0, l.jsx)(I.Z, {
                editable: !0,
                className: tY.$N,
                children: (0, l.jsxs)("div", {
                    className: tY.q6,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: "/assets/48b60325911c81e0.svg", className: tY.QT }),
                        (0, l.jsx)(d.D, {
                            color: "text-default",
                            variant: "heading-xl/bold",
                            children: $.intl.string($.t.nQQeFM),
                        }),
                        (0, l.jsx)(T.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: $.intl.format($.t.snvKU3, {
                                handleGoToAppDirectory: () => {
                                    (0, tB.transitionToGlobalDiscovery)({
                                        tab: tK.GlobalDiscoveryTab.APPS,
                                        newSessionState: {
                                            entrypoint: { name: tH.sW.GUILD_INTEGRATION_SETTINGS },
                                            guildId: t,
                                        },
                                    }),
                                        (0, tW.jH)();
                                },
                            }),
                        }),
                    ],
                }),
            })),
            (eb = ea > 0 ? n : i),
            (ef = null);
    }
    let e_ = _.A.getArticleURL(eU.MVz.INTEGRATIONS),
        ej = null != y ? $.t.YV0vh6 : $.t.FnZEJs,
        eN = [];
    if (q) {
        let e, t, s, a, r;
        eN.push(
            ((n = L.length),
            n > 0 ? (t = (0, l.jsx)(tP.u, { size: "xs" })) : (e = $.intl.string($.t.lOQqJK)),
            (0, l.jsx)(
                tw,
                {
                    name: $.intl.string($.t.xOg4SP),
                    icon: w.X,
                    buttonText: e,
                    buttonDisabled: !P,
                    trailing: t,
                    onButtonClick: U,
                    hasNextSection: n > 0,
                    details: [{ text: $.intl.formatToPlainString($.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            y?.type === eU.rbe.GUILD_VOICE ||
                (y?.type != null && eU.kvI.GUILD_THREADS_ONLY.has(y.type)) ||
                eN.push(
                    ((i = R.length),
                    i > 0
                        ? ((r = (0, l.jsx)(tP.u, { size: "xs" })), (a = W))
                        : ((s = $.intl.string($.t["ZwSt+T"])),
                          (a = () => open(_.A.getArticleURL(eU.MVz.CHANNEL_FOLLOWING)))),
                    (0, l.jsx)(
                        tw,
                        {
                            name: $.intl.string($.t.OrV60r),
                            icon: tG._,
                            buttonText: s,
                            onButtonClick: a,
                            trailing: r,
                            hasNextSection: i > 0,
                            details: [{ text: $.intl.formatToPlainString($.t.JUNGIZ, { count: i }) }],
                        },
                        "channels-followed",
                    )),
                );
    }
    null == y &&
        X.length > 0 &&
        eN.push(
            ((a = X.length),
            (0, l.jsx)(
                tw,
                {
                    name: $.intl.string($.t.tqtDXC),
                    icon: te.f,
                    trailing: (0, l.jsx)(tP.u, { size: "xs" }),
                    onButtonClick: H,
                    hasNextSection: !0,
                    details: [{ text: $.intl.formatToPlainString($.t["puxS4+"], { count: a }) }],
                },
                "channels-syncing",
            )),
        ),
        el &&
            eN.push(
                ((x = e2.A.get(eU.fg2.TWITCH)),
                ee > 0
                    ? ((m = (0, l.jsx)(tP.u, { size: "xs" })),
                      (c = $.intl.formatToPlainString($.t.FFpnT8, { count: en })),
                      (u = () => G(eU.fg2.TWITCH)))
                    : ((r = $.intl.string($.t.bkvGkn)),
                      (c = $.intl.string($.t.Qq3X2M)),
                      (u = () => (0, g.A)({ platformType: eU.fg2.TWITCH, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tw,
                    {
                        name: $.intl.string($.t.q4pBG3),
                        icon: x.icon.whiteSVG,
                        iconBackgroundColor: x.color,
                        iconClassName: tY.tV,
                        buttonText: r,
                        onButtonClick: u,
                        trailing: m,
                        hasNextSection: ee > 0,
                        details: [{ text: c }],
                    },
                    "integrations-twitch",
                )),
            ),
        es &&
            eN.push(
                ((N = e2.A.get(eU.fg2.YOUTUBE)),
                et > 0
                    ? ((j = (0, l.jsx)(tP.u, { size: "xs" })),
                      (A = $.intl.formatToPlainString($.t.b2g5vC, { count: ei })),
                      (f = () => G(eU.fg2.YOUTUBE)))
                    : ((p = $.intl.string($.t.xEyQ3X)),
                      (A = $.intl.string($.t.T0ivgQ)),
                      (f = () => (0, g.A)({ platformType: eU.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tw,
                    {
                        name: $.intl.string($.t.aS6cK4),
                        icon: N.icon.whiteSVG,
                        iconBackgroundColor: N.color,
                        iconClassName: tY.tV,
                        buttonText: p,
                        onButtonClick: f,
                        trailing: j,
                        hasNextSection: et > 0,
                        details: [{ text: A }],
                    },
                    "integrations-youtube",
                )),
            );
    let ev = null != y && Z && null != J;
    return (0, l.jsxs)("div", {
        className: D()(null != ef ? tY.bg : null),
        children: [
            (0, l.jsx)(T.E, { variant: "text-sm/normal", children: $.intl.format(ej, { helpdeskArticle: e_ }) }),
            (0, l.jsx)(S.c, { className: tY.yF }),
            M || K || null == C
                ? (0, l.jsx)(tU.y, { className: tY.__invalid_spinner, type: tU.y.Type.SPINNING_CIRCLE })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          eN,
                          ev &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      eN.length > 0 ? (0, l.jsx)(S.c, { className: tY.yF }) : null,
                                      (0, l.jsx)(d.D, {
                                          variant: "heading-md/semibold",
                                          className: tY.bV,
                                          children: $.intl.string($.t.oAvIAg),
                                      }),
                                      (0, l.jsx)(tO, {
                                          channel: y,
                                          application: J,
                                          showApplicationImage: !0,
                                          name: J.name,
                                          hasNextSection: !0,
                                          iconClassName: tY.d0,
                                          trailing: (0, l.jsx)(tp.R, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          Q
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        eN.length > 0 || ev ? (0, l.jsx)(S.c, { className: tY.yF }) : null,
                                        (0, l.jsx)(d.D, {
                                            variant: "heading-md/semibold",
                                            className: tY.bV,
                                            children: $.intl.string($.t.pUBKht),
                                        }),
                                        ea > 4 ? (0, l.jsx)(tJ, { query: V, setQuery: F }) : null,
                                        eb,
                                    ],
                                })
                              : null,
                          ef,
                      ],
                  }),
        ],
    });
}
var tX = n(964486),
    t0 = n(174900);
function t1(e) {
    let t,
        n,
        {
            guild: i,
            channel: a,
            customWebhooks: r,
            editedWebhook: o,
            selectableWebhookChannels: c,
            refToScroller: u,
            errors: m,
            canNavigate: g,
        } = e,
        x = (0, tu.Ay)(),
        [p, A] = s.useState(null),
        [b, f] = s.useState(null);
    if (null != a) n = a;
    else {
        let e = Object.values(c);
        n = e.length > 0 ? e[0] : null;
    }
    let j = s.useCallback(async () => {
        if (g() && null !== n) {
            let e = await eP.A.create(i.id, n.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === eU.t02.TOO_MANY_WEBHOOKS
                        ? k.A.show({ title: $.intl.string($.t.cCqsca), body: $.intl.string($.t["w+QZoX"]) })
                        : 429 === n
                          ? k.A.show({ title: $.intl.string($.t.cCqsca), body: $.intl.string($.t["YBM+UW"]) })
                          : k.A.show({ title: $.intl.string($.t.cCqsca), body: $.intl.string($.t["/4TwKf"]) }),
                    null
                );
            });
            null != e && (f(e.id), A(e));
        }
    }, [g, n, i]);
    (0, tX.Ay)(() => {
        0 === r.length && j();
    });
    let N = null !== n;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(T.E, {
                variant: "text-sm/normal",
                children: $.intl.format($.t.WL0d0e, {
                    helpdeskArticle: _.A.getArticleURL(eU.MVz.WEBHOOKS),
                    developersArticle: eU.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, l.jsx)(S.c, { className: t0.zN }),
            r.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.Tf,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: $.intl.string($.t["nrO/HH"]),
                                  disabled: !N,
                                  onClick: j,
                              }),
                          }),
                          (0, l.jsx)(e$, {
                              webhooks: r,
                              editedWebhook: o,
                              selectableWebhookChannels: c,
                              lastCreatedWebhookId: p?.id,
                              errors: m,
                              canNavigate: g,
                          }),
                      ],
                  })
                : ((t = (0, tc.M)(x) ? tg : th),
                  (0, l.jsxs)(h.A, {
                      direction: h.A.Direction.VERTICAL,
                      align: h.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: t, className: t0.QT }),
                          (0, l.jsx)(d.D, { variant: "heading-md/semibold", children: $.intl.string($.t.LzmsWl) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: $.intl.string($.t.lOQqJK),
                                  disabled: !N,
                                  onClick: j,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
var t2 = n(458203);
function t3(e, t) {
    switch (e) {
        case eU.wLn.APPLICATION:
            return t?.application.name ?? "";
        case eU.wLn.OVERVIEW:
            return $.intl.string($.t.s69NLF);
        case eU.wLn.CHANNEL_FOLLOWING:
            return $.intl.string($.t.OrV60r);
        case eU.wLn.TWITCH:
            return $.intl.string($.t.q4pBG3);
        case eU.wLn.WEBHOOKS:
            return $.intl.string($.t.xOg4SP);
        case eU.wLn.YOUTUBE:
            return $.intl.string($.t.aS6cK4);
        case eU.wLn.LOBBIES_LINKED:
            return $.intl.string($.t.tqtDXC);
        default:
            return "";
    }
}
let t8 = s.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: i,
            channel: a,
            integrations: j,
            editedIntegration: N,
            webhooks: v,
            editedWebhook: E,
            isFetchingWebhooks: C,
            refToScroller: I,
            errors: T,
            hasChanges: S,
        } = e,
        y = (0, o.bG)([A.Ay], () => (null != i ? A.Ay.getDefaultChannel(i.id) : null)),
        w = (0, o.cf)([A.Ay], () => A.Ay.getChannels(i?.id)),
        O = (0, o.cf)([b.A], () =>
            r().keyBy(
                w.SELECTABLE.map((e) => e.channel).filter((e) => b.A.can(eU.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        k = (0, o.cf)([b.A], () =>
            r().keyBy(
                w.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && b.A.can(eU.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        L = a ?? y,
        R = t === eU.wLn.APPLICATION ? n : null,
        [M, D] = s.useState(m.n3),
        P = s.useCallback(
            () =>
                S()
                    ? (f._.dispatch(eU.jej.SHAKE_APP, { duration: 300, intensity: M }),
                      D(Math.min(M + m.pe, m.OZ)),
                      f._.dispatch(eU.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (D(m.n3), !0),
            [S, M],
        ),
        G = s.useCallback((e) => !!P() && (u.A.setSection(e), !0), [P]),
        {
            applicationIntegrations: U,
            applicationBotIds: W,
            builtInIntegrations: B,
            customWebhooks: H,
            followedChannelWebhooks: z,
        } = s.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                l = [];
            if (null != j)
                for (let i of j)
                    "discord" === i.type
                        ? null != i.application &&
                          ((e[i.application.id] = { application: i.application, integration: i, webhooks: [] }),
                          i.application.bot?.id !== void 0 && (t[i.application.bot.id] = i.application.id))
                        : (i.type in n || (n[i.type] = []), n[i.type].push(i));
            for (let t of v)
                (t.channel_id in O || t.channel_id in k) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === eU.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [j, O, k, v]);
    s.useEffect(() => {
        if (!C)
            switch (t) {
                case eU.wLn.TWITCH:
                    null == B[eU.fg2.TWITCH] && u.A.setSection(eU.wLn.OVERVIEW);
                    break;
                case eU.wLn.YOUTUBE:
                    null == B[eU.fg2.YOUTUBE] && u.A.setSection(eU.wLn.OVERVIEW);
                    break;
                case eU.wLn.APPLICATION:
                    (null != R && (R in W || R in U)) || u.A.setSection(eU.wLn.OVERVIEW);
            }
    }, [U, W, B, R, t, C]),
        s.useEffect(() => {
            i?.id == null || (p.A.getEntitlementsForGuildFetchState(i.id) === p.e.NOT_FETCHED && x.f5(i.id));
        }, [i?.id]),
        s.useEffect(
            () => () => {
                u.A.setSection(eU.wLn.OVERVIEW, null);
            },
            [],
        );
    let V = null;
    switch (t) {
        case eU.wLn.TWITCH:
            null != B[eU.fg2.TWITCH] &&
                (V = (0, l.jsx)(td, {
                    guild: i,
                    integrations: B[eU.fg2.TWITCH],
                    editedIntegration: N,
                    labelText: $.intl.string($.t.q4pBG3),
                    platformType: eU.fg2.TWITCH,
                    descriptionText: $.intl.string($.t.V9kNqt),
                    helpText: $.intl.format($.t.ro1jEN, {
                        connectAction: () =>
                            (0, g.A)({ platformType: eU.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: _.A.getArticleURL(eU.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case eU.wLn.YOUTUBE:
            null != B[eU.fg2.YOUTUBE] &&
                (V = (0, l.jsx)(td, {
                    guild: i,
                    integrations: B[eU.fg2.YOUTUBE],
                    editedIntegration: N,
                    labelText: $.intl.string($.t.aS6cK4),
                    platformType: eU.fg2.YOUTUBE,
                    descriptionText: $.intl.string($.t["7Tv7JK"]),
                    helpText: $.intl.format($.t["4OSAQ9"], {
                        connectAction: () => (0, g.A)({ platformType: eU.fg2.YOUTUBE }),
                        helpdeskArticle: _.A.getArticleURL(eU.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case eU.wLn.APPLICATION:
            let F = null != R ? (U[W[R]] ?? U[R]) : null;
            null != F &&
                (V = (0, l.jsx)(e1, {
                    guild: i,
                    applicationIntegration: F,
                    editedWebhook: E,
                    selectableWebhookChannels: O,
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case eU.wLn.CHANNEL_FOLLOWING:
            V = (0, l.jsx)(tx, {
                followedChannelWebhooks: z,
                editedWebhook: E,
                selectableWebhookChannels: O,
                canNavigate: P,
                errors: T,
            });
            break;
        case eU.wLn.WEBHOOKS:
            V = (0, l.jsx)(t1, {
                guild: i,
                channel: a,
                customWebhooks: H,
                editedWebhook: E,
                selectableWebhookChannels: { ...O, ...k },
                canNavigate: P,
                refToScroller: I,
                errors: T,
            });
            break;
        case eU.wLn.LOBBIES_LINKED:
            V = (0, l.jsx)(tR, { guild: i });
            break;
        default:
            V = (0, l.jsx)(t$, {
                guild: i,
                channel: a,
                applicationIntegrations: U,
                builtInIntegrations: B,
                customWebhooks: H,
                followedChannelWebhooks: z,
                isLoadingWebhooks: C || null == i,
                canCreateWebhook: null != L,
                onManageCustomWebhooks: () => {
                    u.A.setSection(eU.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    u.A.setSection(eU.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    u.A.setSection(eU.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case eU.fg2.TWITCH:
                            u.A.setSection(eU.wLn.TWITCH);
                            break;
                        case eU.fg2.YOUTUBE:
                            u.A.setSection(eU.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    u.A.setSection(eU.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.A, {
                align: h.A.Align.CENTER,
                className: t2.jD,
                children:
                    t === eU.wLn.OVERVIEW
                        ? (0, l.jsx)(d.D, { variant: "heading-lg/semibold", children: t3(eU.wLn.OVERVIEW) })
                        : (0, l.jsx)(c.A, {
                              activeId: t.toString(),
                              breadcrumbs: [eU.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: t3(e, U[R]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && G(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, l.jsx)(d.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? t2.q3 : t2.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            V,
        ],
    });
});
