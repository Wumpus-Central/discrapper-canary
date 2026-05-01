n.d(t, { A: () => t1 }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(735438),
    r = n.n(a),
    o = n(17928),
    c = n(534514),
    d = n(40474),
    u = n(282956),
    m = n(83257),
    g = n(773952),
    h = n(235986),
    x = n(143582),
    A = n(607940),
    p = n(808728),
    f = n(576705),
    b = n(625494),
    j = n(975571),
    N = n(179771),
    E = n(732159),
    C = n(192308),
    v = n(406810),
    T = n(950305),
    I = n(359778),
    S = n(834730),
    y = n(404778),
    O = n(430392),
    k = n(39619),
    L = n(821609),
    w = n(157559),
    R = n(468689),
    M = n(633018),
    _ = n(503698),
    P = n.n(_),
    G = n(542225);
function W(e) {
    let { children: t, icon: n, title: i } = e;
    return (0, l.jsxs)("header", {
        className: G.wx,
        children: [
            (0, l.jsxs)("div", {
                className: G.UU,
                children: [
                    s.cloneElement(n, { className: P()(n.props.className, G.Kk), height: 24, width: 24 }),
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: G.DD, children: i }),
                ],
            }),
            t,
        ],
    });
}
var D = n(542580),
    U = n(803378),
    B = n(825453),
    H = n(892547),
    z = n(485845),
    V = n(155718),
    K = n(633334);
function F(e) {
    return { id: e.id, names: [e.displayName] };
}
var Y = n(261958),
    q = n(939249),
    Z = n(885574),
    Q = n(442433),
    J = n(200662),
    $ = n(375708),
    X = n(870807);
function ee(e) {
    let { applicationIcon: t, applicationName: i, canNavigate: a, command: r, guildId: o } = e,
        c = s.useMemo(() => 0 !== Object.keys(r.permissions ?? {}).length, [r.permissions]),
        d = s.useCallback(() => {
            null != r &&
                a() &&
                (0, C.openModalLazy)(async () => {
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
                (0, Q.L3)(e, async () => {
                    let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                    return (t) => (0, l.jsx)(e, { ...t, id: r.id, label: $.intl.string($.t.oJ1Muw) });
                });
            },
            [r],
        ),
        m = r.type === V.kc.CHAT ? M.k : Y.u,
        g = (0, J.p6)(r.type, r.displayName);
    return (0, l.jsxs)(q.D, {
        onClick: d,
        className: X.AS,
        onContextMenu: u,
        children: [
            (0, l.jsxs)("div", {
                className: X.Cv,
                children: [
                    (0, l.jsx)(m, { className: X.Kk, size: "md", color: "currentColor" }),
                    (0, l.jsx)(S.E, { variant: "text-md/normal", children: g }),
                ],
            }),
            (0, l.jsx)("div", {
                className: X.II,
                children: c
                    ? (0, l.jsxs)("div", {
                          className: X.Bs,
                          children: [
                              (0, l.jsx)(S.E, { variant: "text-md/normal", children: $.intl.string($.t.jH4B9O) }),
                              (0, l.jsx)(Z.m, { size: "sm", color: "currentColor", className: X.I8 }),
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
            query: c,
            setQuery: d,
            unfilteredCount: u,
        } = (function () {
            let e = (0, o.cf)([U.A], () => Object.values(U.A.getCommands() ?? {})),
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
                results: s.useMemo(() => (0, K.I)(a, F, r), [a, r]),
                setQuery: n,
                unfilteredCount: e.length,
            };
        })();
    return null != r && u > 0
        ? (0, l.jsx)(et.A, {
              bar: (0, l.jsx)(H.I, { size: "sm", query: c, onChange: d, onClear: () => d("") }),
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
                              o < r.length - 1 ? (0, l.jsx)(y.c, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, l.jsx)(I.Z, {
              className: en.a,
              editable: !0,
              children: (0, l.jsx)(S.E, {
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
        a = (0, o.bG)([U.A], () => U.A.isUnavailable());
    return (s.useEffect(() => (D.hu(t.id), D.AL), [t.id]),
    s.useEffect(() => {
        D.gV(t.id, i, t.id), D.Jw(i, t.id);
    }, [t.id, i]),
    a)
        ? null
        : (0, l.jsxs)(s.Fragment, {
              children: [
                  (0, l.jsx)(W, {
                      icon: (0, l.jsx)(M.k, { size: "md", color: "currentColor" }),
                      title: $.intl.string($.t.RGoJNN),
                  }),
                  (0, l.jsx)(S.E, {
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
    ec = n(486020),
    ed = n(935208),
    eu = n(427262),
    em = n(990078),
    eg = n(331322),
    eh = n(638916),
    ex = n(866219);
function eA(e) {
    let {
        name: t,
        description: n,
        icon: i,
        imageSrc: s,
        iconBackgroundColor: a,
        iconClassName: r,
        iconWrapperClassName: o,
        details: d,
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
                      if (null != t) return (0, l.jsx)("img", { alt: "", src: t, className: P()(ex.P0, i) });
                      let a = null;
                      return (
                          null != e &&
                              (a =
                                  "string" == typeof e
                                      ? (0, l.jsx)("img", { alt: "", src: e, className: P()(ex.Kk, i) })
                                      : (0, l.jsx)(e, { className: P()(ex.Kk, i), color: "currentColor" })),
                          (0, l.jsx)("div", { style: { backgroundColor: n }, className: P()(ex.P0, s), children: a })
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
                                        className: P()(ex.yM, a ? ex.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, l.jsx)(n, { size: "xs", color: "currentColor", className: ex.Ul })
                                                : null,
                                            (0, l.jsx)(S.E, {
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
                                (0, l.jsxs)(c.D, {
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
                                    ? (0, l.jsx)(S.E, { variant: "text-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, l.jsx)(eg.B, { direction: "horizontal", children: o }),
                            ],
                        });
                    })({ name: t, description: n, details: d, detailsClassName: u, isHeader: m, isPremium: g }),
                    h,
                ],
            }),
        ],
    });
}
var ep = n(136722),
    ef = n(452027),
    eb = n(66834),
    ej = n(417454),
    eN = n(595738),
    eE = n(709066),
    eC = n(376092),
    ev = n(889227),
    eT = n(696451),
    eI = n(317525),
    eS = n(592822);
function ey(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: i } = n,
        a = null != i.bot ? new ev.A(i.bot) : null,
        r = (0, o.bG)([eT.Ay], () => (null != a ? eT.Ay.getMember(t.id, a.id) : null), [a, t]),
        c = (0, o.bG)([eI.A], () => eI.A.getEveryoneRole(t)),
        d = (0, o.yK)([eI.A], () => eI.A.getManyRoles(t.id, r?.roles ?? [])),
        u = a?.id;
    s.useEffect(() => {
        null != u && eb.A.requestMembersById(t.id, u);
    }, [t.id, u]);
    let m = s.useMemo(() => ep.kg(c.permissions, ...d.map((e) => e.permissions)), [d, c]);
    if (null == a) return null;
    let g = ec.Ay.getApplicationIconURL({ id: i.id, guildMember: r, bot: i.bot, icon: i.icon, size: 32 });
    return (0, l.jsx)(I.Z, {
        editable: !0,
        className: eS.Nr,
        children: (0, l.jsxs)(h.A, {
            direction: h.A.Direction.VERTICAL,
            children: [
                (0, l.jsxs)(h.A, {
                    align: h.A.Align.CENTER,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: g, className: eS.P0 }),
                        (0, l.jsx)(S.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: $.intl.format($.t.GyhzGw, { user: a.toString() }),
                        }),
                        (0, l.jsx)(eE.A, { className: eS.Tc, verified: a.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, i) {
                    let s = [],
                        a = [];
                    for (let e of eC.Q) ep.zy(i, e) ? s.push(e) : a.push(e);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(y.c, { className: eS.yF }),
                            n.length > 0
                                ? (0, l.jsx)(ef.D, {
                                      label: $.intl.format($.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, l.jsx)(ej.Ay, {
                                          className: eS.pf,
                                          user: e,
                                          guild: t,
                                          userRoleIds: n,
                                          wrap: !1,
                                          readOnly: !0,
                                      }),
                                  })
                                : null,
                            s.length > 0 || a.length > 0
                                ? (0, l.jsx)(eN.A, {
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
var eO = n(47167),
    ek = n(994500),
    eL = n(287809),
    ew = n(123292),
    eR = n(314116),
    eM = n(778492),
    e_ = n(292666),
    eP = n(691885),
    eG = n(824953),
    eW = n(147925),
    eD = n(652215),
    eU = n(186480);
function eB(e) {
    let { webhook: t, editedWebhook: n, channelOptions: i, isExpanded: a, errors: r, onToggleExpand: o } = e,
        c = s.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, ec.ku)({ id: t.id, avatar: e, discriminator: eD.h3J });
        }, [t]),
        d = s.useCallback(() => {
            (0, eR.A)({
                title: $.intl.formatToPlainString($.t.gBKqZ0, { name: t.name }),
                subtitle: $.intl.string($.t.zO9jrD),
                confirmText: $.intl.string($.t.CMy0Cj),
                onConfirm: () => {
                    eG.A.delete(t.guild_id, t.id).catch(() => {
                        w.A.show({ title: $.intl.string($.t.LpbaFV), body: $.intl.string($.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        m = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (m.push({ icon: eM.k, text: t.source_channel.name }),
        m.push({
            text: (0, l.jsx)(
                "span",
                {
                    className: eU.lM,
                    children: $.intl.format($.t["H/jJ6R"], {
                        guildHook: () => (0, l.jsx)("span", { className: eU.VZ, children: t.source_guild.name }, t.id),
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
                className: eU.rf,
                children: [
                    (0, l.jsx)(y.c, { className: eU.fV }),
                    (0, l.jsxs)(eg.B, {
                        gap: 24,
                        children: [
                            (0, l.jsxs)(eg.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(e_.k, {
                                        label: $.intl.string($.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            u.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: r.name,
                                    }),
                                    (0, l.jsx)(eP.l, {
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
                            (0, l.jsx)(y.c, { className: eU.Bd }),
                            (0, l.jsx)(ew.Q, {
                                onClick: d,
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
            className: eU.Nr,
            children: (0, l.jsxs)(eg.B, {
                children: [
                    (0, l.jsx)(q.D, {
                        className: eU.wx,
                        "aria-expanded": a,
                        onClick: o,
                        children: (0, l.jsxs)(eg.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, l.jsx)(eA, { name: t.name, imageSrc: c, details: m }),
                                (0, l.jsx)(eW.A, { className: eU.eO, expanded: a, "aria-hidden": !0 }),
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
    eK = n(765178),
    eF = n(342298),
    eY = n(957565),
    eq = n(767906);
function eZ(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, ec.ku)({ id: e.id, avatar: t, discriminator: eD.h3J });
}
function eQ(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: i,
            channelOptions: a,
            isExpanded: r,
            isNew: o,
            errors: c,
            onToggleExpand: d,
        } = e,
        [m, g] = s.useState(!1),
        [x] = s.useState(new ez.Ep());
    s.useEffect(() => () => x.stop(), [x]);
    let A = s.useMemo(() => eZ(n, n.avatar), [n]),
        p = s.useCallback(() => {
            let e = `${(0, eH.TP)(!1)}${eD.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, eY.C)(e);
        }, [n]),
        f = s.useCallback(() => {
            (0, eR.A)({
                title: $.intl.formatToPlainString($.t.QVFjHh, { name: n.name }),
                subtitle: $.intl.format($.t["rIWe+5"], { name: n.name }),
                confirmText: $.intl.string($.t["W+K1Fs"]),
                cancelText: $.intl.string($.t.xNhj0O),
                onConfirm: () => {
                    eG.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? w.A.show({ title: $.intl.string($.t.N5riYn), body: $.intl.string($.t.eAxcCc) })
                            : w.A.show({ title: $.intl.string($.t.N5riYn), body: $.intl.string($.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        b = [];
    null != n.user
        ? b.push({
              icon: v.O,
              text: $.intl.formatToPlainString($.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new ev.A(e);
                      return eu.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: ed.default.extractTimestamp(n.id),
              }),
          })
        : b.push({
              icon: v.O,
              text: $.intl.formatToPlainString($.t["7mv59O"], { timestamp: ed.default.extractTimestamp(n.id) }),
          });
    let j = null;
    return (
        r &&
            null != i &&
            (j = (0, l.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, l.jsx)(y.c, { className: eq.fV }),
                    (0, l.jsxs)(h.A, {
                        children: [
                            (0, l.jsx)(h.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, l.jsxs)(h.A, {
                                    className: eq.R3,
                                    direction: h.A.Direction.VERTICAL,
                                    children: [
                                        (0, l.jsx)(eF.A, {
                                            image: i.avatar,
                                            onChange: (e) => {
                                                u.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => eZ(n, e),
                                            imageClassName: eq.mr,
                                            showIcon: !0,
                                        }),
                                        null != c.avatar && "" !== c.avatar
                                            ? (0, l.jsx)(S.E, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: c.avatar,
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
                                                children: (0, l.jsx)(e_.k, {
                                                    label: $.intl.string($.t.ukdxuo),
                                                    value: i.name,
                                                    onChange: (e) => {
                                                        u.A.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: c.name,
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
                                    (0, l.jsx)(y.c, { className: eq.Bd }),
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
                                                    children: (0, l.jsx)(L.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: $.intl.string($.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            g(!0),
                                                                eK.O.announce($.intl.string($.t.wwdb3g)),
                                                                x.start(1e3, () => g(!1)),
                                                                p();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)(L.$, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: $.intl.string($.t.jVrUnC),
                                                onClick: f,
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
            className: P()(eq.Nr, o ? eq.U6 : null),
            children: (0, l.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(q.D, {
                        className: eq.wx,
                        "aria-expanded": r,
                        onClick: d,
                        children: (0, l.jsxs)(h.A, {
                            align: h.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(eA, { name: n.name, imageSrc: A, details: b }),
                                (0, l.jsx)(eW.A, { className: eq.eO, expanded: r, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    j,
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
        c = s.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, eO.m1)(e, eL.default, ek.A, !0) })),
            [n],
        ),
        d = s.useMemo(() => {
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
        children: d.map((e) => {
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
                            (0, l.jsx)(S.E, {
                                variant: "text-md/medium",
                                className: eJ.x,
                                children: $.intl.format($.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, l.jsx)(
                                            "span",
                                            { className: eJ.H, children: (0, eO.m1)(t, eL.default, ek.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) => {
                                var t;
                                return e.type === eD.NH1.CHANNEL_FOLLOWER
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
                                          eQ,
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
                channelOptions: c,
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
    return (0, l.jsx)(E.ConfirmModal, {
        ...s,
        title: $.intl.formatToPlainString($.t["rL9d/1"], { applicationName: t.name }),
        subtitle: $.intl.format($.t.FGE8ya, { applicationName: t.name }),
        confirmText: $.intl.string($.t.ebGf4m),
        onConfirm: () => {
            R.A.disableIntegration(n.id, i.id).catch(() => {
                w.A.show({ title: $.intl.string($.t.wYqMmI), body: $.intl.string($.t.A4Mnst) });
            });
        },
    });
}
function e2(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: i,
            editedWebhook: a,
            errors: r,
            canNavigate: c,
        } = e,
        { application: d, integration: u, webhooks: m } = n,
        [g, x] = (0, o.yK)(
            [f.A],
            () => [
                f.A.can(eD.xBc.MANAGE_ROLES, t),
                null == d.bot || f.A.canManageUser(eD.xBc.MANAGE_GUILD, d.bot.id, t),
            ],
            [d.bot, t],
        ),
        A = (0, o.bG)([f.A], () => f.A.can(eD.xBc.MANAGE_WEBHOOKS, t), [t]),
        p = s.useCallback(() => {
            c() && (0, C.openModal)((e) => (0, l.jsx)(e0, { guild: t, application: d, integration: u, ...e }));
        }, [d, c, t, u]),
        b = s.useMemo(() => {
            let e = [
                {
                    icon: v.O,
                    text: $.intl.formatToPlainString($.t.gcdJ8J, { timestamp: ed.default.extractTimestamp(u.id) }),
                },
            ];
            return (
                null != u.user &&
                    e.push({
                        icon: T.n,
                        text: $.intl.formatToPlainString($.t.qE7oqs, { user: eu.Ay.getUserTag(u.user) }),
                    }),
                e
            );
        }, [u.id, u.user]),
        j = s.useMemo(
            () =>
                null != d.bot && u.scopes?.includes(N.F.BOT)
                    ? (0, l.jsx)(ey, { guild: t, applicationIntegration: n })
                    : (0, l.jsx)(I.Z, {
                          className: eX.aM,
                          editable: !0,
                          children: (0, l.jsx)(S.E, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: $.intl.string($.t.pfLnza),
                          }),
                      }),
            [d.bot, n, t, u.scopes],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA, {
                name: d.name,
                imageSrc: ec.Ay.getApplicationIconURL({ id: d.id, icon: d.icon, size: 32 }),
                details: b,
                isHeader: !0,
            }),
            d?.description != null ? (0, l.jsx)(eo.A, { userBio: d.description, className: eX.ux }) : null,
            g ? (0, l.jsx)(ea, { application: d, canNavigate: c, guildId: t.id }) : null,
            (0, l.jsx)(y.c, { className: eX.zN }),
            null != d.bot
                ? (0, l.jsxs)("div", {
                      className: eX.uW,
                      children: [
                          (0, l.jsx)(W, {
                              icon: (0, l.jsx)(O.C, { size: "xs", color: "currentColor" }),
                              title: $.intl.string($.t.AOdOYr),
                          }),
                          j,
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: eX.uW,
                children: [
                    (0, l.jsx)(W, {
                        icon: (0, l.jsx)(k.X, { size: "md", color: "currentColor" }),
                        title: $.intl.string($.t["t9ZX/I"]),
                    }),
                    m.length > 0
                        ? (0, l.jsx)(e$, {
                              webhooks: m,
                              editedWebhook: a,
                              selectableWebhookChannels: i,
                              errors: r,
                              canNavigate: c,
                          })
                        : (0, l.jsx)(I.Z, {
                              className: eX.aM,
                              editable: !0,
                              children: (0, l.jsx)(S.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: A ? $.intl.string($.t.ahPd2Y) : $.intl.string($.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, l.jsx)(y.c, { className: eX.zN }),
            (0, l.jsxs)(h.A, {
                className: eX.uW,
                justify: h.A.Justify.BETWEEN,
                align: h.A.Align.CENTER,
                children: [
                    (0, l.jsx)(S.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: x ? $.intl.string($.t.hdneL4) : $.intl.string($.t.xRCMqx),
                    }),
                    (0, l.jsx)(h.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, l.jsx)(L.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: $.intl.string($.t.ebGf4m),
                            disabled: !x,
                            onClick: p,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var e3 = n(573648);
n(323874), n(14289), n(35956);
var e7 = n(989349),
    e1 = n.n(e7),
    e8 = n(788373),
    e6 =
        (((i = {})[(i.ONE_DAY = 1)] = "ONE_DAY"),
        (i[(i.THREE_DAYS = 3)] = "THREE_DAYS"),
        (i[(i.SEVEN_DAYS = 7)] = "SEVEN_DAYS"),
        (i[(i.FOURTEEN_DAYS = 14)] = "FOURTEEN_DAYS"),
        (i[(i.THIRTY_DAYS = 30)] = "THIRTY_DAYS"),
        i),
    e4 = n(125744),
    e5 = n(139033),
    e9 = n(408278),
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
            onToggleExpand: d,
            onDisable: m,
            onEnable: g,
        } = e,
        [x, A] = s.useState(!1),
        p = (0, o.bG)([tl.A], () => tl.A.hidePersonalInformation),
        b = (0, o.bG)([f.A], () => f.A.can(eD.xBc.KICK_MEMBERS, n)),
        j = s.useCallback(() => {
            A(!0), g(i);
        }, [i, g]),
        N = s.useCallback(() => {
            if (!i.syncing)
                if (b || i.expire_behavior !== e8.F.KICK) {
                    let e =
                        i.expire_behavior === e8.F.REMOVE_ROLE
                            ? $.intl.string($.t["6kpw4i"])
                            : $.intl.string($.t.fQUQIJ);
                    (0, eR.A)({
                        title: $.intl.string($.t.emx3lN),
                        subtitle: i.type === e4.s.YOUTUBE ? $.intl.string($.t.anKQWU) : $.intl.string($.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => m(i),
                        variant: "critical",
                    });
                } else
                    (0, e5.A)({
                        title: $.intl.string($.t.emx3lN),
                        subtitle: i.type === e4.s.YOUTUBE ? $.intl.string($.t.pDCiEf) : $.intl.string($.t.sQqHFk),
                    });
        }, [i, m, b]),
        E = s.useCallback(() => {
            R.A.syncIntegration(n.id, i.id);
        }, [n.id, i.id]),
        C = s.useCallback(() => {
            null != i.role_id && (R.A.setSection(eD.BEX.ROLES), R.A.selectRole(i.role_id));
        }, [i.role_id]),
        {
            serviceName: T,
            channelURL: O,
            expireBehaviorLabel: k,
            syncLabel: w,
            subscribersText: M,
        } = s.useMemo(() => {
            let e = e3.A.get(i.type)?.getPlatformUserUrl?.({ id: i.account.id, name: i.account.name }) ?? "";
            switch (i.type) {
                case e4.s.YOUTUBE:
                    return {
                        serviceName: $.intl.string($.t.aS6cK4),
                        expireBehaviorLabel: $.intl.string($.t.A5MiqO),
                        syncLabel: $.intl.string($.t["7vHKVe"]),
                        subscribersText: $.intl.formatToPlainString($.t["7lNtce"], {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case e4.s.TWITCH:
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
        _ = (0, o.bG)([eI.A], () => (null != i.role_id ? eI.A.getRole(n.id, i.role_id) : void 0)),
        { roleLink: G, syncDescriptionText: W } = s.useMemo(() => {
            let e;
            e = null != _ ? (0, l.jsx)(tn.Anchor, { onClick: C, children: _.name }) : $.intl.string($.t.PoWNfe);
            let t = e3.A.get(i.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    i.revoked && null != t
                        ? $.intl.formatToPlainString($.t.G16Wji, { user: i.user, platformName: t.name })
                        : $.intl.formatToPlainString($.t.unl3AP, { datetime: e1()(i.synced_at).calendar() }),
            };
        }, [_, C, i.revoked, i.synced_at, i.type, i.user]),
        D = (0, o.bG)([eI.A], () => eI.A.getSortedRoles(n.id)),
        U = s.useMemo(() => {
            let e = ti.Ay.getGuildEmoji(n.id),
                t = D.filter((e) => null != e.tags && e.tags.integration_id === i.id).map((e) => e.id);
            return i.enable_emoticons
                ? e
                      .filter((e) => null != i.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, D, i.enable_emoticons, i.id, i.role_id]);
    if (
        (s.useEffect(() => {
            a?.id === i.id && a?.enabled === !0 && A(!1);
        }, [a, i.id]),
        i.enabled && null != i.user)
    )
        t = [
            {
                icon: v.O,
                text: p
                    ? $.intl.formatToPlainString($.t.gcdJ8J, { timestamp: ed.default.extractTimestamp(i.id) })
                    : $.intl.formatToPlainString($.t.Nu9sat, {
                          user: null != i.user ? new ev.A(i.user).tag : null,
                          timestamp: ed.default.extractTimestamp(i.id),
                      }),
            },
        ];
    else {
        let e = new URL(O);
        t = [
            {
                text: $.intl.format($.t.BegylZ, {
                    serviceName: T,
                    accountUrl: O,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let B = (0, l.jsxs)(h.A, {
            className: ts.wx,
            align: h.A.Align.CENTER,
            children: [
                (0, l.jsx)(eA, { name: `${i.name}`, detailsClassName: ts.h_, details: t }),
                i.enabled
                    ? (0, l.jsx)(h.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, l.jsx)(eW.A, { className: ts.eO, expanded: r && !x, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)(h.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: x
                              ? (0, l.jsx)(e9.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: te.f,
                                    "aria-label": $.intl.string($.t["7sCN8m"]),
                                })
                              : (0, l.jsx)(L.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: j,
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
                    (0, l.jsx)(y.c, { className: ts.fV }),
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
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: ta.QB,
                                            children: $.intl.string($.t.eBtNBa),
                                        }),
                                        (0, l.jsx)(S.E, {
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
                                        (0, l.jsx)(c.D, {
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
                                                        (0, l.jsx)(S.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: i,
                                                        }),
                                                        (0, l.jsx)(S.E, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, l.jsx)(e9.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: te.f,
                                                          "aria-label": $.intl.string($.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, l.jsx)(L.$, {
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
                        labelText: w,
                        subscribersText: M,
                        descriptionText: W,
                        roleLink: G,
                        onSync: E,
                    }),
                    (0, l.jsx)(y.c, { className: ts.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: s } = e;
                        return (0, l.jsxs)(h.A, {
                            children: [
                                (0, l.jsx)(h.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eP.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: e8.F.REMOVE_ROLE.toString(),
                                                label: $.intl.string($.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: e8.F.KICK.toString(),
                                                label: $.intl.string($.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => i(parseInt(e)),
                                    }),
                                }),
                                (0, l.jsx)(h.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eP.l, {
                                        selectionMode: "single",
                                        label: $.intl.string($.t.uiXMow),
                                        placeholder: $.intl.string($.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(e6)
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
                        labelText: k,
                        onBehaviorChange: function (e) {
                            u.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !b &&
                        a.expire_behavior === e8.F.KICK &&
                        (0, l.jsx)(S.E, {
                            className: ts.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: $.intl.string($.t.mThMlB),
                        }),
                    i.type === e4.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, l.jsxs)(h.A, {
                                  direction: h.A.Direction.VERTICAL,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: P()(ta.QX, ta.QB),
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
                                                              className: P()(ts.Zg, "emoji", "jumboable"),
                                                              src: ec.Ay.getEmojiURL({
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
                              emojis: U,
                              onToggle: function (e) {
                                  u.A.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, l.jsx)(y.c, { className: ts.Bd }),
                    (0, l.jsx)(h.A, {
                        children: (0, l.jsx)(L.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: $.intl.string($.t.M6q6eX),
                            onClick: N,
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
                        ? (0, l.jsx)(q.D, { className: ts._S, "aria-expanded": r && !x, onClick: d, children: B })
                        : B,
                    H,
                ],
            }),
        })
    );
}
var to = n(836803);
function tc(e) {
    let {
            integrations: t,
            editedIntegration: n,
            guild: i,
            platformType: a,
            labelText: r,
            descriptionText: o,
            helpText: c,
            errors: d,
            canNavigate: m,
        } = e,
        g = e3.A.get(a),
        h = s.useCallback(
            async (e) => {
                m() && (await R.A.enableIntegration(i.id, e.type, e.id), u.A.startEditingIntegration(e.id));
            },
            [m, i.id],
        ),
        x = s.useCallback(
            (e) => {
                m() && (e.id === n?.id && u.A.stopEditingIntegration(), R.A.disableIntegration(i.id, e.id));
            },
            [m, n, i.id],
        ),
        A = s.useCallback(
            (e) => {
                m() && (e === n?.id ? u.A.stopEditingIntegration() : u.A.startEditingIntegration(e));
            },
            [m, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA, {
                name: r,
                icon: g?.icon.whiteSVG,
                iconBackgroundColor: g?.color,
                iconClassName: to.tV,
                description: o,
                isHeader: !0,
            }),
            (0, l.jsx)(y.c, { className: to.zN }),
            "message" in d &&
                (0, l.jsx)(S.E, {
                    className: to.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: d.message,
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
                        onToggleExpand: () => A(e.id),
                    },
                    e.id,
                ),
            ),
            (0, l.jsx)(S.E, { className: to.BK, color: "text-muted", variant: "text-sm/normal", children: c }),
        ],
    });
}
var td = n(462887),
    tu = n(736653),
    tm = n(936256);
let tg = "/assets/a29cabf3e1357986.svg",
    th = "/assets/c733a28e6fcba3ef.svg";
function tx(e) {
    var t;
    let n,
        { followedChannelWebhooks: i, editedWebhook: s, selectableWebhookChannels: a, errors: r, canNavigate: o } = e,
        d = (0, tu.Ay)();
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(S.E, {
                variant: "text-sm/normal",
                children: $.intl.format($.t["5u+aV1"], {
                    helpdeskArticle: j.A.getArticleURL(eD.MVz.CHANNEL_FOLLOWING),
                }),
            }),
            (0, l.jsx)(y.c, { className: tm.zN }),
            i.length > 0
                ? (0, l.jsx)(e$, {
                      webhooks: i,
                      editedWebhook: s,
                      selectableWebhookChannels: a,
                      errors: r,
                      canNavigate: o,
                  })
                : ((t = () => open(j.A.getArticleURL(eD.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, td.M)(d) ? tg : th),
                  (0, l.jsxs)(h.A, {
                      direction: h.A.Direction.VERTICAL,
                      align: h.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: n, className: tm.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: $.intl.string($.t.gzuVH0) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tm.nM,
                              children: (0, l.jsx)(L.$, {
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
var tA = n(22231),
    tp = n(429913),
    tf = n(713654),
    tb = n(137177),
    tj = n(887501),
    tN = n(514810),
    tE = n(43105),
    tC = n(528265),
    tv = n(320448),
    tT = n(95561),
    tI = n(264322),
    tS = n(174459),
    ty = n(320426),
    tO = n(338652);
function tk(e) {
    let {
            name: t,
            icon: n,
            imageSrc: i,
            iconBackgroundColor: a,
            iconClassName: r,
            iconWrapperClassName: c,
            details: d,
            integration: u,
            buttonText: m,
            buttonDisabled: g,
            hasNextSection: h,
            onButtonClick: x,
            guildId: p,
            isScrolling: f,
            canShowMigrationTooltip: b,
            trailing: j,
        } = e,
        [E, C] = s.useState(!1),
        v = b && !f && !E && void 0 !== p && null != u,
        T = s.useRef(null),
        y = s.useRef(null),
        w =
            null == m || null == x
                ? null
                : h
                  ? (0, l.jsxs)(eg.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: y,
                        children: [
                            (0, l.jsx)(S.E, { variant: "text-sm/normal", children: m }),
                            (0, l.jsx)(tv._, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: tO.OW,
                            }),
                        ],
                    })
                  : (0, l.jsx)(L.$, { size: "sm", buttonRef: T, disabled: g, onClick: x, text: m });
    s.useEffect(() => {
        v &&
            tS.default.track(eD.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, tT.H$)(p),
                application_id: u?.application.id,
                location: "overview",
            });
    }, [p, u?.application.id, v]);
    let R =
            v && (null != y.current || null != T.current)
                ? (0, l.jsx)(tE.A, {
                      targetElementRef: h ? y : T,
                      title: $.intl.string($.t.ufFDiC),
                      body: $.intl.string($.t.TyMJwC),
                      onRequestClose: () => {
                          C(!0), ty.A.dismissOverviewTooltip(p, u.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        _ = (0, o.yK)([A.A], () =>
            null != u && null != p ? (A.A.getApplicationEntitlementsForGuild(u.application.id, p) ?? []) : [],
        ),
        G = (0, tI.ON)(p, !0),
        W = u?.application != null && Object.keys(G.result?.sections[u.application.id]?.commands ?? {}).length > 0,
        D = (0, l.jsxs)(eg.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, l.jsx)(eA, {
                    name: t,
                    icon: n,
                    imageSrc: i,
                    iconBackgroundColor: a,
                    iconClassName: r,
                    iconWrapperClassName: c,
                    details: d,
                    isPremium: _.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: i, integration: s, webhooks: a } = e;
                        return (
                            null != i.bot &&
                                s?.scopes?.includes(N.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new ev.A(i.bot).isVerifiedBot()
                                        ? $.intl.string($.t.xxcTGy)
                                        : $.intl.string($.t.AOdOYr),
                                    icon: O.C,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: $.intl.formatToPlainString($.t["6HqDfT"], { count: a.length }),
                                    icon: k.X,
                                }),
                            s?.scopes?.includes(N.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: $.intl.string($.t["0hKkS+"]), icon: M.k }),
                            (0, l.jsx)(eg.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, l.jsx)(tC.C, {
                                    label: $.intl.string($.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(u, W),
                }),
                R,
                w,
                j,
            ],
        });
    return h
        ? (0, l.jsx)(q.D, {
              onClick: () => {
                  b && null != p && null != u && ty.A.dismissOverviewTooltip(p, u.integration), x?.();
              },
              children: (0, l.jsx)(I.Z, { editable: !0, className: P()(tO.Nr, tO.vk), children: D }),
          })
        : (0, l.jsx)(I.Z, { editable: !0, className: tO.Nr, children: D });
}
function tL(e) {
    let { channel: t, application: i, showApplicationImage: a, ...r } = e,
        o = (0, tN.N)(t),
        c = s.useCallback(
            () =>
                (0, C.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("10527"), n.e("73380")]).then(n.bind(n, 106895));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, application: i });
                }),
            [i, t],
        ),
        d = a ? (i.getIconURL(48) ?? ec.vI["0"]) : void 0;
    return (0, l.jsx)(tk, { imageSrc: d, onButtonClick: c, details: null != o ? [{ text: o }] : void 0, ...r });
}
var tw = n(108305);
function tR(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, tp.h)(t);
    return 0 === n.length || null == i
        ? null
        : (0, l.jsxs)("div", {
              className: tw.kF,
              children: [
                  (0, l.jsxs)("div", {
                      className: tw.wx,
                      children: [
                          (0, l.jsx)(tb.A, { game: i, size: tb.M.XSMALL }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: i?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          tL,
                          {
                              channel: e,
                              application: i,
                              name: (0, eO.m1)(e, eL.default, ek.A),
                              icon: (0, tf.gU)(e) ?? void 0,
                              iconWrapperClassName: tw.N3,
                              hasNextSection: !0,
                              trailing: (0, l.jsx)(tA.R, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function tM(e) {
    let { guild: t } = e,
        n = (0, tj.A)(t.id),
        i = r().groupBy(n, (e) => e.linkedLobby?.application_id),
        a = Object.keys(i);
    return (
        s.useEffect(() => {
            0 === n.length && u.A.setSection(eD.wLn.OVERVIEW);
        }, [n]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(S.E, {
                    variant: "text-sm/normal",
                    children: $.intl.format($.t["9gsSLu"], {
                        helpdeskArticle: j.A.getArticleURL(eD.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, l.jsx)(y.c, { className: tw.zN }),
                a.map((e) => (0, l.jsx)(tR, { applicationId: e, channels: i[e] }, e)),
            ],
        })
    );
}
var t_ = n(91871),
    tP = n.n(t_),
    tG = n(881636),
    tW = n(184940),
    tD = n(289873),
    tU = n(398590),
    tB = n(837057),
    tH = n(310419),
    tz = n(526132),
    tV = n(30370),
    tK = n(381616),
    tF = n(488995),
    tY = n(32589),
    tq = n(854766),
    tZ = n(237070);
function tQ(e, t) {
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
        d,
        u,
        m,
        x,
        A,
        p,
        b,
        N,
        E,
        {
            guild: T,
            channel: O,
            applicationIntegrations: L,
            builtInIntegrations: w,
            customWebhooks: R,
            followedChannelWebhooks: M,
            isLoadingWebhooks: _,
            canCreateWebhook: G,
            onManageBuiltIn: W,
            onManageCustomWebhooks: D,
            onManageFollowedChannels: U,
            onManageApplication: B,
            onManageLobbiesLinked: H,
        } = e,
        z = (0, tu.Ay)(),
        [V, K] = s.useState(""),
        { isFetchingConnections: F, accounts: Y } = (0, o.cf)(
            [tV.A],
            () => ({ isFetchingConnections: tV.A.isFetching(), accounts: tV.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: q, canManageGuild: Z } = (0, o.cf)(
            [f.A],
            () => ({
                canManageWebhooks:
                    (null != T && f.A.can(eD.xBc.MANAGE_WEBHOOKS, T)) ||
                    (null != O && f.A.can(eD.xBc.MANAGE_WEBHOOKS, O)),
                canManageGuild: null != T && null == O && f.A.can(eD.xBc.MANAGE_GUILD, T),
            }),
            [T, O],
        ),
        Q = (0, tz.e)(O),
        J = (0, tp.h)(O?.linkedLobby?.application_id),
        X = (0, tj.A)(T?.id),
        {
            availableTwitchIntegrations: ee,
            availableYoutubeIntegrations: et,
            guildTwitchIntegrations: en,
            guildYoutubeIntegrations: ei,
        } = s.useMemo(
            () => ({
                availableTwitchIntegrations: w.twitch?.length ?? 0,
                availableYoutubeIntegrations: w.youtube?.length ?? 0,
                guildTwitchIntegrations: w.twitch?.filter((e) => e.enabled).length ?? 0,
                guildYoutubeIntegrations: w.youtube?.filter((e) => e.enabled).length ?? 0,
            }),
            [w.twitch, w.youtube],
        ),
        { showTwitchCard: el, showYoutubeCard: es } = s.useMemo(() => {
            if (F || !Z) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = T?.features.has(eD.GuildFeatures.COMMUNITY),
                t = Y.filter((e) => e.type === eD.fg2.TWITCH).length > 0,
                n = Y.filter((e) => e.type === eD.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: ee > 0 || (!t && e), showYoutubeCard: et > 0 || (!n && e) };
        }, [F, Z, T, Y, ee, et]),
        ea = Object.values(L).length,
        er = s.useMemo(() => {
            let e = ea > 100 ? tQ : tP();
            return Object.values(L).filter((t) => {
                var n;
                let { application: i } = t;
                return !!(
                    "" === (n = (n = V).trim().toLowerCase()) ||
                    i.id === n ||
                    e(n, i.name.toLowerCase()) ||
                    (null != i.bot && e(n, i.bot.username.toLowerCase()))
                );
            });
        }, [L, ea, V]),
        eo = (0, o.bG)([tK.A], () => {
            if (null != T) return er.find((e) => tK.A.canShowOverviewTooltip(T.id, e.integration.id));
        }, [er, T]),
        em = s.useMemo(
            () => (void 0 !== eo ? [eo, ...er.filter((e) => e.integration.id !== eo.integration.id)] : er),
            [er, eo],
        ),
        eg = (0, C.useModalsStore)(C.hasAnyModalOpenSelector),
        [eh, ex] = s.useState(!1),
        eA = s.useRef(0),
        ep = () => {
            ex(!0),
                clearTimeout(eA.current),
                (eA.current = setTimeout(() => {
                    ex(!1);
                }, 200));
        };
    s.useEffect(() => (window.addEventListener("scroll", ep, !0), () => window.removeEventListener("scroll", ep)));
    let ef = em.map((e) => {
            let t = !eg && e.integration.id === eo?.integration.id;
            return (function (e, t, n, i, s) {
                let { application: a, integration: r } = t,
                    o = [];
                return (
                    null != r.user
                        ? o.push({
                              icon: v.O,
                              text: $.intl.formatToPlainString($.t.Nu9sat, {
                                  timestamp: ed.default.extractTimestamp(r.id),
                                  user: eu.Ay.getUserTag(r.user),
                              }),
                          })
                        : o.push({
                              icon: v.O,
                              text: $.intl.formatToPlainString($.t.gcdJ8J, {
                                  timestamp: ed.default.extractTimestamp(r.id),
                              }),
                          }),
                    (0, l.jsx)(
                        tk,
                        {
                            name: a.name,
                            imageSrc: ec.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                            integration: t,
                            buttonText: $.intl.string($.t["Z/qRnM"]),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(a.id),
                                    tS.default.track(eD.HAw.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: e?.id,
                                        is_admin: null != e ? f.A.can(eD.xBc.ADMINISTRATOR, e) : void 0,
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
            })(T, e, B, eh, t);
        }),
        eb = (0, l.jsx)("div", { className: tY.Hw });
    if (0 === ef.length && Z) {
        let e, n, i;
        (t = T?.id),
            (e = (0, td.M)(z) ? tq : tZ),
            (n = (0, l.jsxs)(h.A, {
                direction: h.A.Direction.VERTICAL,
                align: h.A.Align.CENTER,
                className: tY.Kl,
                children: [
                    (0, l.jsx)("img", { alt: "", src: e, className: tY.s1 }),
                    (0, l.jsx)(I.Z, {
                        editable: !0,
                        className: tY.$N,
                        children: (0, l.jsx)(S.E, {
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
                        (0, l.jsx)(c.D, {
                            color: "text-default",
                            variant: "heading-xl/bold",
                            children: $.intl.string($.t.nQQeFM),
                        }),
                        (0, l.jsx)(S.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: $.intl.format($.t.snvKU3, {
                                handleGoToAppDirectory: () => {
                                    (0, tB.transitionToGlobalDiscovery)({
                                        tab: tF.GlobalDiscoveryTab.APPS,
                                        newSessionState: {
                                            entrypoint: { name: tH.sW.GUILD_INTEGRATION_SETTINGS },
                                            guildId: t,
                                        },
                                    }),
                                        (0, tU.jH)();
                                },
                            }),
                        }),
                    ],
                }),
            })),
            (ef = ea > 0 ? n : i),
            (eb = null);
    }
    let ej = j.A.getArticleURL(eD.MVz.INTEGRATIONS),
        eN = null != O ? $.t.YV0vh6 : $.t.FnZEJs,
        eE = [];
    if (q) {
        let e, t, s, a, r;
        eE.push(
            ((n = R.length),
            n > 0 ? (t = (0, l.jsx)(tG.u, { size: "xs" })) : (e = $.intl.string($.t.lOQqJK)),
            (0, l.jsx)(
                tk,
                {
                    name: $.intl.string($.t.xOg4SP),
                    icon: k.X,
                    buttonText: e,
                    buttonDisabled: !G,
                    trailing: t,
                    onButtonClick: D,
                    hasNextSection: n > 0,
                    details: [{ text: $.intl.formatToPlainString($.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            O?.type === eD.rbe.GUILD_VOICE ||
                (O?.type != null && eD.kvI.GUILD_THREADS_ONLY.has(O.type)) ||
                eE.push(
                    ((i = M.length),
                    i > 0
                        ? ((r = (0, l.jsx)(tG.u, { size: "xs" })), (a = U))
                        : ((s = $.intl.string($.t["ZwSt+T"])),
                          (a = () => open(j.A.getArticleURL(eD.MVz.CHANNEL_FOLLOWING)))),
                    (0, l.jsx)(
                        tk,
                        {
                            name: $.intl.string($.t.OrV60r),
                            icon: tW._,
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
    null == O &&
        X.length > 0 &&
        eE.push(
            ((a = X.length),
            (0, l.jsx)(
                tk,
                {
                    name: $.intl.string($.t.tqtDXC),
                    icon: te.f,
                    trailing: (0, l.jsx)(tG.u, { size: "xs" }),
                    onButtonClick: H,
                    hasNextSection: !0,
                    details: [{ text: $.intl.formatToPlainString($.t["puxS4+"], { count: a }) }],
                },
                "channels-syncing",
            )),
        ),
        el &&
            eE.push(
                ((x = e3.A.get(eD.fg2.TWITCH)),
                ee > 0
                    ? ((m = (0, l.jsx)(tG.u, { size: "xs" })),
                      (d = $.intl.formatToPlainString($.t.FFpnT8, { count: en })),
                      (u = () => W(eD.fg2.TWITCH)))
                    : ((r = $.intl.string($.t.bkvGkn)),
                      (d = $.intl.string($.t.Qq3X2M)),
                      (u = () => (0, g.A)({ platformType: eD.fg2.TWITCH, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tk,
                    {
                        name: $.intl.string($.t.q4pBG3),
                        icon: x.icon.whiteSVG,
                        iconBackgroundColor: x.color,
                        iconClassName: tY.tV,
                        buttonText: r,
                        onButtonClick: u,
                        trailing: m,
                        hasNextSection: ee > 0,
                        details: [{ text: d }],
                    },
                    "integrations-twitch",
                )),
            ),
        es &&
            eE.push(
                ((E = e3.A.get(eD.fg2.YOUTUBE)),
                et > 0
                    ? ((N = (0, l.jsx)(tG.u, { size: "xs" })),
                      (p = $.intl.formatToPlainString($.t.b2g5vC, { count: ei })),
                      (b = () => W(eD.fg2.YOUTUBE)))
                    : ((A = $.intl.string($.t.xEyQ3X)),
                      (p = $.intl.string($.t.T0ivgQ)),
                      (b = () => (0, g.A)({ platformType: eD.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tk,
                    {
                        name: $.intl.string($.t.aS6cK4),
                        icon: E.icon.whiteSVG,
                        iconBackgroundColor: E.color,
                        iconClassName: tY.tV,
                        buttonText: A,
                        onButtonClick: b,
                        trailing: N,
                        hasNextSection: et > 0,
                        details: [{ text: p }],
                    },
                    "integrations-youtube",
                )),
            );
    let eC = null != O && Q && null != J;
    return (0, l.jsxs)("div", {
        className: P()(null != eb ? tY.bg : null),
        children: [
            (0, l.jsx)(S.E, { variant: "text-sm/normal", children: $.intl.format(eN, { helpdeskArticle: ej }) }),
            (0, l.jsx)(y.c, { className: tY.yF }),
            _ || F || null == T
                ? (0, l.jsx)(tD.y, { className: tY.__invalid_spinner, type: tD.y.Type.SPINNING_CIRCLE })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          eE,
                          eC &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      eE.length > 0 ? (0, l.jsx)(y.c, { className: tY.yF }) : null,
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-md/semibold",
                                          className: tY.bV,
                                          children: $.intl.string($.t.oAvIAg),
                                      }),
                                      (0, l.jsx)(tL, {
                                          channel: O,
                                          application: J,
                                          showApplicationImage: !0,
                                          name: J.name,
                                          hasNextSection: !0,
                                          iconClassName: tY.d0,
                                          trailing: (0, l.jsx)(tA.R, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          Z
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        eE.length > 0 || eC ? (0, l.jsx)(y.c, { className: tY.yF }) : null,
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: tY.bV,
                                            children: $.intl.string($.t.pUBKht),
                                        }),
                                        ea > 4 ? (0, l.jsx)(tJ, { query: V, setQuery: K }) : null,
                                        ef,
                                    ],
                                })
                              : null,
                          eb,
                      ],
                  }),
        ],
    });
}
var tX = n(964486),
    t0 = n(174900);
function t2(e) {
    let t,
        n,
        {
            guild: i,
            channel: a,
            customWebhooks: r,
            editedWebhook: o,
            selectableWebhookChannels: d,
            refToScroller: u,
            errors: m,
            canNavigate: g,
        } = e,
        x = (0, tu.Ay)(),
        [A, p] = s.useState(null),
        [f, b] = s.useState(null);
    if (null != a) n = a;
    else {
        let e = Object.values(d);
        n = e.length > 0 ? e[0] : null;
    }
    let N = s.useCallback(async () => {
        if (g() && null !== n) {
            let e = await eG.A.create(i.id, n.id).catch((e) => {
                let { body: t, status: n } = e;
                return (
                    t && t.code === eD.t02.TOO_MANY_WEBHOOKS
                        ? w.A.show({ title: $.intl.string($.t.cCqsca), body: $.intl.string($.t["w+QZoX"]) })
                        : 429 === n
                          ? w.A.show({ title: $.intl.string($.t.cCqsca), body: $.intl.string($.t["YBM+UW"]) })
                          : w.A.show({ title: $.intl.string($.t.cCqsca), body: $.intl.string($.t["/4TwKf"]) }),
                    null
                );
            });
            null != e && (b(e.id), p(e));
        }
    }, [g, n, i]);
    (0, tX.Ay)(() => {
        0 === r.length && N();
    });
    let E = null !== n;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(S.E, {
                variant: "text-sm/normal",
                children: $.intl.format($.t.WL0d0e, {
                    helpdeskArticle: j.A.getArticleURL(eD.MVz.WEBHOOKS),
                    developersArticle: eD.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, l.jsx)(y.c, { className: t0.zN }),
            r.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.Tf,
                              children: (0, l.jsx)(L.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: $.intl.string($.t["nrO/HH"]),
                                  disabled: !E,
                                  onClick: N,
                              }),
                          }),
                          (0, l.jsx)(e$, {
                              webhooks: r,
                              editedWebhook: o,
                              selectableWebhookChannels: d,
                              lastCreatedWebhookId: A?.id,
                              errors: m,
                              canNavigate: g,
                          }),
                      ],
                  })
                : ((t = (0, td.M)(x) ? tg : th),
                  (0, l.jsxs)(h.A, {
                      direction: h.A.Direction.VERTICAL,
                      align: h.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: t, className: t0.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: $.intl.string($.t.LzmsWl) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.nM,
                              children: (0, l.jsx)(L.$, {
                                  variant: "primary",
                                  text: $.intl.string($.t.lOQqJK),
                                  disabled: !E,
                                  onClick: N,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
var t3 = n(458203);
function t7(e, t) {
    switch (e) {
        case eD.wLn.APPLICATION:
            return t?.application.name ?? "";
        case eD.wLn.OVERVIEW:
            return $.intl.string($.t.s69NLF);
        case eD.wLn.CHANNEL_FOLLOWING:
            return $.intl.string($.t.OrV60r);
        case eD.wLn.TWITCH:
            return $.intl.string($.t.q4pBG3);
        case eD.wLn.WEBHOOKS:
            return $.intl.string($.t.xOg4SP);
        case eD.wLn.YOUTUBE:
            return $.intl.string($.t.aS6cK4);
        case eD.wLn.LOBBIES_LINKED:
            return $.intl.string($.t.tqtDXC);
        default:
            return "";
    }
}
let t1 = s.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: i,
            channel: a,
            integrations: N,
            editedIntegration: E,
            webhooks: C,
            editedWebhook: v,
            isFetchingWebhooks: T,
            refToScroller: I,
            errors: S,
            hasChanges: y,
        } = e,
        O = (0, o.bG)([p.Ay], () => (null != i ? p.Ay.getDefaultChannel(i.id) : null)),
        k = (0, o.cf)([p.Ay], () => p.Ay.getChannels(i?.id)),
        L = (0, o.cf)([f.A], () =>
            r().keyBy(
                k.SELECTABLE.map((e) => e.channel).filter((e) => f.A.can(eD.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        w = (0, o.cf)([f.A], () =>
            r().keyBy(
                k.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && f.A.can(eD.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        R = a ?? O,
        M = t === eD.wLn.APPLICATION ? n : null,
        [_, P] = s.useState(m.n3),
        G = s.useCallback(
            () =>
                y()
                    ? (b._.dispatch(eD.jej.SHAKE_APP, { duration: 300, intensity: _ }),
                      P(Math.min(_ + m.pe, m.OZ)),
                      b._.dispatch(eD.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (P(m.n3), !0),
            [y, _],
        ),
        W = s.useCallback((e) => !!G() && (u.A.setSection(e), !0), [G]),
        {
            applicationIntegrations: D,
            applicationBotIds: U,
            builtInIntegrations: B,
            customWebhooks: H,
            followedChannelWebhooks: z,
        } = s.useMemo(() => {
            let e = {},
                t = {},
                n = {},
                i = [],
                l = [];
            if (null != N)
                for (let i of N)
                    "discord" === i.type
                        ? null != i.application &&
                          ((e[i.application.id] = { application: i.application, integration: i, webhooks: [] }),
                          i.application.bot?.id !== void 0 && (t[i.application.bot.id] = i.application.id))
                        : (i.type in n || (n[i.type] = []), n[i.type].push(i));
            for (let t of C)
                (t.channel_id in L || t.channel_id in w) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === eD.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [N, L, w, C]);
    s.useEffect(() => {
        if (!T)
            switch (t) {
                case eD.wLn.TWITCH:
                    null == B[eD.fg2.TWITCH] && u.A.setSection(eD.wLn.OVERVIEW);
                    break;
                case eD.wLn.YOUTUBE:
                    null == B[eD.fg2.YOUTUBE] && u.A.setSection(eD.wLn.OVERVIEW);
                    break;
                case eD.wLn.APPLICATION:
                    (null != M && (M in U || M in D)) || u.A.setSection(eD.wLn.OVERVIEW);
            }
    }, [D, U, B, M, t, T]),
        s.useEffect(() => {
            i?.id == null || (A.A.getEntitlementsForGuildFetchState(i.id) === A.e.NOT_FETCHED && x.f5(i.id));
        }, [i?.id]),
        s.useEffect(
            () => () => {
                u.A.setSection(eD.wLn.OVERVIEW, null);
            },
            [],
        );
    let V = null;
    switch (t) {
        case eD.wLn.TWITCH:
            null != B[eD.fg2.TWITCH] &&
                (V = (0, l.jsx)(tc, {
                    guild: i,
                    integrations: B[eD.fg2.TWITCH],
                    editedIntegration: E,
                    labelText: $.intl.string($.t.q4pBG3),
                    platformType: eD.fg2.TWITCH,
                    descriptionText: $.intl.string($.t.V9kNqt),
                    helpText: $.intl.format($.t.ro1jEN, {
                        connectAction: () =>
                            (0, g.A)({ platformType: eD.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: j.A.getArticleURL(eD.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: S,
                    canNavigate: G,
                }));
            break;
        case eD.wLn.YOUTUBE:
            null != B[eD.fg2.YOUTUBE] &&
                (V = (0, l.jsx)(tc, {
                    guild: i,
                    integrations: B[eD.fg2.YOUTUBE],
                    editedIntegration: E,
                    labelText: $.intl.string($.t.aS6cK4),
                    platformType: eD.fg2.YOUTUBE,
                    descriptionText: $.intl.string($.t["7Tv7JK"]),
                    helpText: $.intl.format($.t["4OSAQ9"], {
                        connectAction: () => (0, g.A)({ platformType: eD.fg2.YOUTUBE }),
                        helpdeskArticle: j.A.getArticleURL(eD.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: S,
                    canNavigate: G,
                }));
            break;
        case eD.wLn.APPLICATION:
            let K = null != M ? (D[U[M]] ?? D[M]) : null;
            null != K &&
                (V = (0, l.jsx)(e2, {
                    guild: i,
                    applicationIntegration: K,
                    editedWebhook: v,
                    selectableWebhookChannels: L,
                    errors: S,
                    canNavigate: G,
                }));
            break;
        case eD.wLn.CHANNEL_FOLLOWING:
            V = (0, l.jsx)(tx, {
                followedChannelWebhooks: z,
                editedWebhook: v,
                selectableWebhookChannels: L,
                canNavigate: G,
                errors: S,
            });
            break;
        case eD.wLn.WEBHOOKS:
            V = (0, l.jsx)(t2, {
                guild: i,
                channel: a,
                customWebhooks: H,
                editedWebhook: v,
                selectableWebhookChannels: { ...L, ...w },
                canNavigate: G,
                refToScroller: I,
                errors: S,
            });
            break;
        case eD.wLn.LOBBIES_LINKED:
            V = (0, l.jsx)(tM, { guild: i });
            break;
        default:
            V = (0, l.jsx)(t$, {
                guild: i,
                channel: a,
                applicationIntegrations: D,
                builtInIntegrations: B,
                customWebhooks: H,
                followedChannelWebhooks: z,
                isLoadingWebhooks: T || null == i,
                canCreateWebhook: null != R,
                onManageCustomWebhooks: () => {
                    u.A.setSection(eD.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    u.A.setSection(eD.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    u.A.setSection(eD.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case eD.fg2.TWITCH:
                            u.A.setSection(eD.wLn.TWITCH);
                            break;
                        case eD.fg2.YOUTUBE:
                            u.A.setSection(eD.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    u.A.setSection(eD.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.A, {
                align: h.A.Align.CENTER,
                className: t3.jD,
                children:
                    t === eD.wLn.OVERVIEW
                        ? (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t7(eD.wLn.OVERVIEW) })
                        : (0, l.jsx)(d.A, {
                              activeId: t.toString(),
                              breadcrumbs: [eD.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: t7(e, D[M]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && W(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, l.jsx)(c.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? t3.q3 : t3.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            V,
        ],
    });
});
