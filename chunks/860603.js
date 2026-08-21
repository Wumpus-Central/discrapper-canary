n.d(t, { A: () => t7 }), n(321073);
var i,
    l = n(477900),
    s = n(582128),
    a = n(435558),
    r = n.n(a),
    o = n(17928),
    c = n(297264),
    d = n(40474),
    u = n(282956),
    m = n(968309),
    g = n(235986),
    h = n(143582),
    x = n(607940),
    p = n(808728),
    A = n(576705),
    f = n(625494),
    b = n(975571),
    j = n(179771),
    N = n(732159),
    E = n(192308),
    C = n(406810),
    v = n(950305),
    I = n(993077),
    T = n(834730),
    S = n(404778),
    y = n(430392),
    k = n(39619),
    O = n(821609),
    L = n(157559),
    w = n(468689),
    R = n(633018),
    M = n(503698),
    _ = n.n(M),
    P = n(178686);
function G(e) {
    let { children: t, icon: n, title: i } = e;
    return (0, l.jsxs)("header", {
        className: P.wx,
        children: [
            (0, l.jsxs)("div", {
                className: P.UU,
                children: [
                    s.cloneElement(n, { className: _()(n.props.className, P.Kk), height: 24, width: 24 }),
                    (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: P.DD, children: i }),
                ],
            }),
            t,
        ],
    });
}
var W = n(542580),
    D = n(803378),
    U = n(825453),
    B = n(892547),
    H = n(485845),
    z = n(155718),
    V = n(633334);
function K(e) {
    return { id: e.id, names: [e.displayName] };
}
var F = n(261958),
    Y = n(939249),
    q = n(885574),
    Q = n(442433),
    J = n(200662),
    Z = n(375708),
    $ = n(634968);
function X(e) {
    let { applicationIcon: t, applicationName: i, canNavigate: a, command: r, guildId: o } = e,
        c = s.useMemo(() => 0 !== Object.keys(r.permissions ?? {}).length, [r.permissions]),
        d = s.useCallback(() => {
            null != r &&
                a() &&
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await n.e("615946").then(n.bind(n, 326993));
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
                    let { default: e } = await n.e("715687").then(n.bind(n, 646938));
                    return (t) => (0, l.jsx)(e, { ...t, id: r.id, label: Z.intl.string(Z.t.oJ1Muw) });
                });
            },
            [r],
        ),
        m = r.type === z.kc.CHAT ? R.k : F.u,
        g = (0, J.p6)(r.type, r.displayName);
    return (0, l.jsxs)(Y.D, {
        onClick: d,
        className: $.AS,
        onContextMenu: u,
        children: [
            (0, l.jsxs)("div", {
                className: $.Cv,
                children: [
                    (0, l.jsx)(m, { className: $.Kk, size: "md", color: "currentColor" }),
                    (0, l.jsx)(T.E, { variant: "text-md/normal", children: g }),
                ],
            }),
            (0, l.jsx)("div", {
                className: $.II,
                children: c
                    ? (0, l.jsxs)("div", {
                          className: $.Bs,
                          children: [
                              (0, l.jsx)(T.E, { variant: "text-md/normal", children: Z.intl.string(Z.t.jH4B9O) }),
                              (0, l.jsx)(q.CircleInformationIcon, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: $.I8,
                              }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}
var ee = n(636547),
    et = n(747414);
function en(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: i, guildId: a } = e,
        {
            results: r,
            query: c,
            setQuery: d,
            unfilteredCount: u,
        } = (function () {
            let e = (0, o.cf)([D.A], () => Object.values(D.A.getCommands() ?? {})),
                [t, n] = s.useState(""),
                i = s.useMemo(
                    () =>
                        e.filter(
                            (e) =>
                                (null == e.integration_types || e.integration_types.includes(H.b.GUILD_INSTALL)) &&
                                (null == e.contexts || e.contexts?.includes(z.OL.GUILD)),
                        ),
                    [e],
                ),
                l = s.useMemo(
                    () =>
                        [...i].sort((e, t) => {
                            let n = z.kc.CHAT + 1,
                                i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                            return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                        }),
                    [i],
                ),
                a = s.useMemo(() => (t.startsWith("/") ? l.filter((e) => e.type === z.kc.CHAT) : l), [t, l]),
                r = s.useMemo(() => (t.startsWith("/") ? t.substring(1) : t), [t]);
            return {
                query: t,
                results: s.useMemo(() => (0, V.I)(a, K, r), [a, r]),
                setQuery: n,
                unfilteredCount: e.length,
            };
        })();
    return null != r && u > 0
        ? (0, l.jsx)(ee.A, {
              bar: (0, l.jsx)(B.I, { size: "sm", query: c, onChange: d, onClear: () => d("") }),
              inModal: !1,
              title: Z.intl.string(Z.t["0hKkS+"]),
              children: r.map((e, o) =>
                  (0, l.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, l.jsx)(X, {
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
              className: et.a,
              editable: !0,
              children: (0, l.jsx)(T.E, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: Z.intl.string(Z.t["x78c+J"]),
              }),
          });
}
var ei = n(534148),
    el = n(16101);
function es(e) {
    let { application: t, canNavigate: n, guildId: i } = e,
        a = (0, o.bG)([D.A], () => D.A.isUnavailable());
    return (s.useEffect(() => (W.hu(t.id), W.AL), [t.id]),
    s.useEffect(() => {
        W.gV(t.id, i, t.id), W.Jw(i, t.id);
    }, [t.id, i]),
    a)
        ? null
        : (0, l.jsxs)(s.Fragment, {
              children: [
                  (0, l.jsx)(G, {
                      icon: (0, l.jsx)(R.k, { size: "md", color: "currentColor" }),
                      title: Z.intl.string(Z.t.RGoJNN),
                  }),
                  (0, l.jsx)(T.E, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: Z.intl.string(Z.t.sCkD3Z),
                  }),
                  (0, l.jsx)(ea, { guildId: i, applicationId: t.id }),
                  (0, l.jsx)(en, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: i }),
              ],
          });
}
function ea(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: i, editedTargetPermissions: s, selectedPermissionCount: a } = (0, U.A)(n, t);
    return (0, l.jsx)("div", {
        className: el.zi,
        children: (0, l.jsx)(ei.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: i,
            selectedPermissionCount: a,
        }),
    });
}
var er = n(308244),
    eo = n(486020),
    ec = n(935208),
    ed = n(427262),
    eu = n(331322),
    em = n(866665),
    eg = n(638916),
    eh = n(783734);
function ex(e) {
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
    return (0, l.jsxs)(eu.B, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != i || null != s
                ? (function (e, t, n, i, s) {
                      if (null != t) return (0, l.jsx)("img", { alt: "", src: t, className: _()(eh.P0, i) });
                      let a = null;
                      return (
                          null != e &&
                              (a =
                                  "string" == typeof e
                                      ? (0, l.jsx)("img", { alt: "", src: e, className: _()(eh.Kk, i) })
                                      : (0, l.jsx)(e, { className: _()(eh.Kk, i), color: "currentColor" })),
                          (0, l.jsx)("div", { style: { backgroundColor: n }, className: _()(eh.P0, s), children: a })
                      );
                  })(i, s, a, r, o)
                : null,
            (0, l.jsxs)(eu.B, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: i, detailsClassName: s, isHeader: a, isPremium: r } = e,
                            o = i?.map((e, t) => {
                                let { icon: n, text: i } = e;
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        className: _()(eh.yM, a ? eh.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, l.jsx)(n, { size: "xs", color: "currentColor", className: eh.Ul })
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
                        return (0, l.jsxs)(eu.B, {
                            gap: 0,
                            children: [
                                (0, l.jsxs)(c.D, {
                                    variant: a ? "heading-xl/semibold" : "heading-md/medium",
                                    className: a ? eh.wx : eh.K8,
                                    children: [
                                        t,
                                        r &&
                                            (0, l.jsx)(em.m, {
                                                text: Z.intl.string(Z.t.VFuFum),
                                                children: (0, l.jsx)(eg.q, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: eh.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, l.jsx)(T.E, { variant: "text-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, l.jsx)(eu.B, { direction: "horizontal", children: o }),
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
    eA = n(452027),
    ef = n(66834),
    eb = n(417454),
    ej = n(595738),
    eN = n(709066),
    eE = n(376092),
    eC = n(889227),
    ev = n(696451),
    eI = n(317525),
    eT = n(737496);
function eS(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: i } = n,
        a = null != i.bot ? new eC.A(i.bot) : null,
        r = (0, o.bG)([ev.Ay], () => (null != a ? ev.Ay.getMember(t.id, a.id) : null), [a, t]),
        c = (0, o.bG)([eI.A], () => eI.A.getEveryoneRole(t)),
        d = (0, o.yK)([eI.A], () => eI.A.getManyRoles(t.id, r?.roles ?? [])),
        u = a?.id;
    s.useEffect(() => {
        null != u && ef.A.requestMembersById(t.id, u);
    }, [t.id, u]);
    let m = s.useMemo(() => ep.kg(c.permissions, ...d.map((e) => e.permissions)), [d, c]);
    if (null == a) return null;
    let h = eo.Ay.getApplicationIconURL({ id: i.id, guildMember: r, bot: i.bot, icon: i.icon, size: 32 });
    return (0, l.jsx)(I.Z, {
        editable: !0,
        className: eT.Nr,
        children: (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            children: [
                (0, l.jsxs)(g.A, {
                    align: g.A.Align.CENTER,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: h, className: eT.P0 }),
                        (0, l.jsx)(T.E, {
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: Z.intl.format(Z.t.GyhzGw, { user: a.toString() }),
                        }),
                        (0, l.jsx)(eN.A, { className: eT.Tc, verified: a.isVerifiedBot() }),
                    ],
                }),
                (function (e, t, n, i) {
                    let s = [],
                        a = [];
                    for (let e of eE.Q) ep.zy(i, e) ? s.push(e) : a.push(e);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(S.c, { className: eT.yF }),
                            n.length > 0
                                ? (0, l.jsx)(eA.D, {
                                      label: Z.intl.format(Z.t.PCs0oo, { numRoles: n.length }),
                                      children: (0, l.jsx)(eb.Ay, {
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
                                      grantedPermissionsHeader: Z.intl.string(Z.t["hA4+su"]),
                                      disabledPermissions: a,
                                      disabledPermissionsHeader: Z.intl.string(Z.t["/rEZ2i"]),
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
    ek = n(994500),
    eO = n(287809),
    eL = n(123292),
    ew = n(314116),
    eR = n(778492),
    eM = n(95477),
    e_ = n(691885),
    eP = n(824953),
    eG = n(147925),
    eW = n(652215),
    eD = n(440193);
function eU(e) {
    let { webhook: t, editedWebhook: n, channelOptions: i, isExpanded: a, errors: r, onToggleExpand: o } = e,
        c = s.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, eo.ku)({ id: t.id, avatar: e, discriminator: eW.h3J });
        }, [t]),
        d = s.useCallback(() => {
            (0, ew.A)({
                title: Z.intl.formatToPlainString(Z.t.gBKqZ0, { name: t.name }),
                subtitle: Z.intl.string(Z.t.zO9jrD),
                confirmText: Z.intl.string(Z.t.CMy0Cj),
                onConfirm: () => {
                    eP.A.delete(t.guild_id, t.id).catch(() => {
                        L.A.show({ title: Z.intl.string(Z.t.LpbaFV), body: Z.intl.string(Z.t["/4TwKf"]) });
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
                    className: eD.lM,
                    children: Z.intl.format(Z.t["H/jJ6R"], {
                        guildHook: () => (0, l.jsx)("span", { className: eD.VZ, children: t.source_guild.name }, t.id),
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
                className: eD.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eD.fV }),
                    (0, l.jsxs)(eu.B, {
                        gap: 24,
                        children: [
                            (0, l.jsxs)(eu.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(eM.k, {
                                        label: Z.intl.string(Z.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            u.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: r.name,
                                    }),
                                    (0, l.jsx)(e_.l, {
                                        label: Z.intl.string(Z.t["4TuWfc"]),
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
                            (0, l.jsx)(S.c, { className: eD.Bd }),
                            (0, l.jsx)(eL.Q, {
                                onClick: d,
                                size: "sm",
                                variant: "critical",
                                text: Z.intl.string(Z.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(I.Z, {
            editable: !0,
            className: eD.Nr,
            children: (0, l.jsxs)(eu.B, {
                children: [
                    (0, l.jsx)(Y.D, {
                        className: eD.wx,
                        "aria-expanded": a,
                        onClick: o,
                        children: (0, l.jsxs)(eu.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, l.jsx)(ex, { name: t.name, imageSrc: c, details: m }),
                                (0, l.jsx)(eG.A, { className: eD.eO, expanded: a, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    g,
                ],
            }),
        })
    );
}
var eB = n(935399),
    eH = n(636537),
    ez = n(451988),
    eV = n(783878),
    eK = n(765178),
    eF = n(342298),
    eY = n(957565),
    eq = n(423959);
function eQ(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, eo.ku)({ id: e.id, avatar: t, discriminator: eW.h3J });
}
function eJ(e) {
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
        [m, h] = s.useState(!1),
        [x] = s.useState(new ez.Ep());
    s.useEffect(() => () => x.stop(), [x]);
    let p = s.useRef(null);
    (0, eB.Ay)(() => {
        !0 === o && (u.A.startEditingWebhook(n.id), p.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
    });
    let A = s.useMemo(() => eQ(n, n.avatar), [n]),
        f = s.useCallback(() => {
            let e = `${(0, eH.TP)(!1)}${eW.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, eY.C)(e);
        }, [n]),
        b = s.useCallback(() => {
            (0, ew.A)({
                title: Z.intl.formatToPlainString(Z.t.QVFjHh, { name: n.name }),
                subtitle: Z.intl.format(Z.t["rIWe+5"], { name: n.name }),
                confirmText: Z.intl.string(Z.t["W+K1Fs"]),
                cancelText: Z.intl.string(Z.t.xNhj0O),
                onConfirm: () => {
                    eP.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? L.A.show({ title: Z.intl.string(Z.t.N5riYn), body: Z.intl.string(Z.t.eAxcCc) })
                            : L.A.show({ title: Z.intl.string(Z.t.N5riYn), body: Z.intl.string(Z.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        j = [];
    null != n.user
        ? j.push({
              icon: C.ClockIcon,
              text: Z.intl.formatToPlainString(Z.t["7EcUbr"], {
                  user: (function (e) {
                      if (null == e) return null;
                      let t = new eC.A(e);
                      return ed.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: ec.default.extractTimestamp(n.id),
              }),
          })
        : j.push({
              icon: C.ClockIcon,
              text: Z.intl.formatToPlainString(Z.t["7mv59O"], { timestamp: ec.default.extractTimestamp(n.id) }),
          });
    let N = null;
    return (
        r &&
            null != i &&
            (N = (0, l.jsxs)("div", {
                className: eq.rf,
                children: [
                    (0, l.jsx)(S.c, { className: eq.fV }),
                    (0, l.jsxs)(g.A, {
                        children: [
                            (0, l.jsx)(g.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, l.jsxs)(g.A, {
                                    className: eq.R3,
                                    direction: g.A.Direction.VERTICAL,
                                    children: [
                                        (0, l.jsx)(eF.A, {
                                            image: i.avatar,
                                            onChange: (e) => {
                                                u.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => eQ(n, e),
                                            imageClassName: eq.mr,
                                            showIcon: !0,
                                        }),
                                        null != c.avatar && "" !== c.avatar
                                            ? (0, l.jsx)(T.E, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: c.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, l.jsxs)(g.A, {
                                direction: g.A.Direction.VERTICAL,
                                children: [
                                    (0, l.jsxs)(g.A, {
                                        children: [
                                            (0, l.jsx)(g.A.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, l.jsx)(eM.k, {
                                                    label: Z.intl.string(Z.t.ukdxuo),
                                                    value: i.name,
                                                    onChange: (e) => {
                                                        u.A.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: c.name,
                                                }),
                                            }),
                                            (0, l.jsx)(g.A.Child, {
                                                basis: "50%",
                                                children: (0, l.jsx)("div", {
                                                    children: (0, l.jsx)(eV.Z, {
                                                        label: Z.intl.string(Z.t.GK18KJ),
                                                        value: i.channel_id,
                                                        options: a,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            u.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: Z.intl.string(Z.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(S.c, { className: eq.Bd }),
                                    (0, l.jsxs)(g.A, {
                                        children: [
                                            (0, l.jsx)(em.m, {
                                                text: Z.intl.string(Z.t.wwdb3g),
                                                shouldShow: m,
                                                hideOnClick: !1,
                                                forceOpen: m,
                                                children: (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: eq.cL,
                                                    children: (0, l.jsx)(O.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Z.intl.string(Z.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            h(!0),
                                                                eK.O.announce(Z.intl.string(Z.t.wwdb3g)),
                                                                x.start(1e3, () => h(!1)),
                                                                f();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)(O.$, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: Z.intl.string(Z.t.jVrUnC),
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
            ref: p,
            editable: !0,
            id: t,
            className: _()(eq.Nr, o ? eq.U6 : null),
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(Y.D, {
                        className: eq.wx,
                        "aria-expanded": r,
                        onClick: d,
                        children: (0, l.jsxs)(g.A, {
                            align: g.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(ex, { name: n.name, imageSrc: A, details: j }),
                                (0, l.jsx)(eG.A, { className: eq.eO, expanded: r, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    N,
                ],
            }),
        })
    );
}
var eZ = n(140659);
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
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, ey.m1)(e, eO.default, ek.A, !0) })),
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
        className: eZ.__invalid_list,
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
                            (0, l.jsx)(T.E, {
                                variant: "text-md/medium",
                                className: eZ.x,
                                children: Z.intl.format(Z.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, l.jsx)(
                                            "span",
                                            { className: eZ.H, children: (0, ey.m1)(t, eO.default, ek.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) =>
                                e.type === eW.NH1.CHANNEL_FOLLOWER
                                    ? (0, l.jsx)(
                                          eU,
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
                                          eJ,
                                          {
                                              webhook: e,
                                              editedWebhook: a,
                                              channelOptions: i,
                                              isExpanded: a?.id === e.id,
                                              isNew: s === e.id,
                                              onToggleExpand: () => o(e.id),
                                              errors: r,
                                          },
                                          e.id,
                                      ),
                            ),
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
var eX = n(710135);
function e0(e) {
    let { application: t, guild: n, integration: i, ...s } = e;
    return (0, l.jsx)(N.ConfirmModal, {
        ...s,
        title: Z.intl.formatToPlainString(Z.t["rL9d/1"], { applicationName: t.name }),
        subtitle: Z.intl.format(Z.t.FGE8ya, { applicationName: t.name }),
        confirmText: Z.intl.string(Z.t.ebGf4m),
        onConfirm: () => {
            w.A.disableIntegration(n.id, i.id).catch(() => {
                L.A.show({ title: Z.intl.string(Z.t.wYqMmI), body: Z.intl.string(Z.t.A4Mnst) });
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
        [h, x] = (0, o.yK)(
            [A.A],
            () => [
                A.A.can(eW.xBc.MANAGE_ROLES, t),
                null == d.bot || A.A.canManageUser(eW.xBc.MANAGE_GUILD, d.bot.id, t),
            ],
            [d.bot, t],
        ),
        p = (0, o.bG)([A.A], () => A.A.can(eW.xBc.MANAGE_WEBHOOKS, t), [t]),
        f = s.useCallback(() => {
            c() && (0, E.openModal)((e) => (0, l.jsx)(e0, { guild: t, application: d, integration: u, ...e }));
        }, [d, c, t, u]),
        b = s.useMemo(() => {
            let e = [
                {
                    icon: C.ClockIcon,
                    text: Z.intl.formatToPlainString(Z.t.gcdJ8J, { timestamp: ec.default.extractTimestamp(u.id) }),
                },
            ];
            return (
                null != u.user &&
                    e.push({
                        icon: v.UserIcon,
                        text: Z.intl.formatToPlainString(Z.t.qE7oqs, { user: ed.Ay.getUserTag(u.user) }),
                    }),
                e
            );
        }, [u.id, u.user]),
        N = s.useMemo(
            () =>
                null != d.bot && u.scopes?.includes(j.F.BOT)
                    ? (0, l.jsx)(eS, { guild: t, applicationIntegration: n })
                    : (0, l.jsx)(I.Z, {
                          className: eX.aM,
                          editable: !0,
                          children: (0, l.jsx)(T.E, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: Z.intl.string(Z.t.pfLnza),
                          }),
                      }),
            [d.bot, n, t, u.scopes],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex, {
                name: d.name,
                imageSrc: eo.Ay.getApplicationIconURL({ id: d.id, icon: d.icon, size: 32 }),
                details: b,
                isHeader: !0,
            }),
            d?.description != null ? (0, l.jsx)(er.A, { userBio: d.description, className: eX.ux }) : null,
            h ? (0, l.jsx)(es, { application: d, canNavigate: c, guildId: t.id }) : null,
            (0, l.jsx)(S.c, { className: eX.zN }),
            null != d.bot
                ? (0, l.jsxs)("div", {
                      className: eX.uW,
                      children: [
                          (0, l.jsx)(G, {
                              icon: (0, l.jsx)(y.RobotIcon, { size: "xs", color: "currentColor" }),
                              title: Z.intl.string(Z.t.AOdOYr),
                          }),
                          N,
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: eX.uW,
                children: [
                    (0, l.jsx)(G, {
                        icon: (0, l.jsx)(k.X, { size: "md", color: "currentColor" }),
                        title: Z.intl.string(Z.t["t9ZX/I"]),
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
                              children: (0, l.jsx)(T.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: p ? Z.intl.string(Z.t.ahPd2Y) : Z.intl.string(Z.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, l.jsx)(S.c, { className: eX.zN }),
            (0, l.jsxs)(g.A, {
                className: eX.uW,
                justify: g.A.Justify.BETWEEN,
                align: g.A.Align.CENTER,
                children: [
                    (0, l.jsx)(T.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: x ? Z.intl.string(Z.t.hdneL4) : Z.intl.string(Z.t.xRCMqx),
                    }),
                    (0, l.jsx)(g.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, l.jsx)(O.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: Z.intl.string(Z.t.ebGf4m),
                            disabled: !x,
                            onClick: f,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var e3 = n(573648);
n(323874), n(14289), n(35956);
var e1 = n(989349),
    e7 = n.n(e1),
    e8 = n(788373),
    e5 =
        (((i = {})[(i.ONE_DAY = 1)] = "ONE_DAY"),
        (i[(i.THREE_DAYS = 3)] = "THREE_DAYS"),
        (i[(i.SEVEN_DAYS = 7)] = "SEVEN_DAYS"),
        (i[(i.FOURTEEN_DAYS = 14)] = "FOURTEEN_DAYS"),
        (i[(i.THIRTY_DAYS = 30)] = "THIRTY_DAYS"),
        i),
    e4 = n(125744),
    e6 = n(139033),
    e9 = n(408278),
    te = n(663417),
    tt = n(150934),
    tn = n(28863),
    ti = n(236285),
    tl = n(351906),
    ts = n(445884),
    ta = n(221851);
function tr(e) {
    let t,
        {
            guild: n,
            integration: i,
            editedIntegration: a,
            isExpanded: r,
            onToggleExpand: d,
            onDisable: m,
            onEnable: h,
        } = e,
        [x, p] = s.useState(!1),
        f = (0, o.bG)([tl.A], () => tl.A.hidePersonalInformation),
        b = (0, o.bG)([A.A], () => A.A.can(eW.xBc.KICK_MEMBERS, n)),
        j = s.useCallback(() => {
            p(!0), h(i);
        }, [i, h]),
        N = s.useCallback(() => {
            if (!i.syncing)
                if (b || i.expire_behavior !== e8.F.KICK) {
                    let e =
                        i.expire_behavior === e8.F.REMOVE_ROLE
                            ? Z.intl.string(Z.t["6kpw4i"])
                            : Z.intl.string(Z.t.fQUQIJ);
                    (0, ew.A)({
                        title: Z.intl.string(Z.t.emx3lN),
                        subtitle: i.type === e4.s.YOUTUBE ? Z.intl.string(Z.t.anKQWU) : Z.intl.string(Z.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => m(i),
                        variant: "critical",
                    });
                } else
                    (0, e6.A)({
                        title: Z.intl.string(Z.t.emx3lN),
                        subtitle: i.type === e4.s.YOUTUBE ? Z.intl.string(Z.t.pDCiEf) : Z.intl.string(Z.t.sQqHFk),
                    });
        }, [i, m, b]),
        E = s.useCallback(() => {
            w.A.syncIntegration(n.id, i.id);
        }, [n.id, i.id]),
        v = s.useCallback(() => {
            null != i.role_id && (w.A.setSection(eW.BEX.ROLES), w.A.selectRole(i.role_id));
        }, [i.role_id]),
        {
            serviceName: y,
            channelURL: k,
            expireBehaviorLabel: L,
            syncLabel: R,
            subscribersText: M,
        } = s.useMemo(() => {
            let e = e3.A.get(i.type)?.getPlatformUserUrl?.({ id: i.account.id, name: i.account.name }) ?? "";
            switch (i.type) {
                case e4.s.YOUTUBE:
                    return {
                        serviceName: Z.intl.string(Z.t.aS6cK4),
                        expireBehaviorLabel: Z.intl.string(Z.t.A5MiqO),
                        syncLabel: Z.intl.string(Z.t["7vHKVe"]),
                        subscribersText: Z.intl.formatToPlainString(Z.t["7lNtce"], {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case e4.s.TWITCH:
                default:
                    return {
                        serviceName: Z.intl.string(Z.t.q4pBG3),
                        expireBehaviorLabel: Z.intl.string(Z.t["S/WCrG"]),
                        syncLabel: Z.intl.string(Z.t["0jbPK4"]),
                        subscribersText: Z.intl.formatToPlainString(Z.t.RdUTrl, {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [i.account, i.subscriber_count, i.type]),
        P = (0, o.bG)([eI.A], () => (null != i.role_id ? eI.A.getRole(n.id, i.role_id) : void 0)),
        { roleLink: G, syncDescriptionText: W } = s.useMemo(() => {
            let e;
            e = null != P ? (0, l.jsx)(tn.Anchor, { onClick: v, children: P.name }) : Z.intl.string(Z.t.PoWNfe);
            let t = e3.A.get(i.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    i.revoked && null != t
                        ? Z.intl.formatToPlainString(Z.t.G16Wji, { user: i.user, platformName: t.name })
                        : Z.intl.formatToPlainString(Z.t.unl3AP, { datetime: e7()(i.synced_at).calendar() }),
            };
        }, [P, v, i.revoked, i.synced_at, i.type, i.user]),
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
            a?.id === i.id && a?.enabled === !0 && p(!1);
        }, [a, i.id]),
        i.enabled && null != i.user)
    )
        t = [
            {
                icon: C.ClockIcon,
                text: f
                    ? Z.intl.formatToPlainString(Z.t.gcdJ8J, { timestamp: ec.default.extractTimestamp(i.id) })
                    : Z.intl.formatToPlainString(Z.t.Nu9sat, {
                          user: null != i.user ? new eC.A(i.user).tag : null,
                          timestamp: ec.default.extractTimestamp(i.id),
                      }),
            },
        ];
    else {
        let e = new URL(k);
        t = [
            {
                text: Z.intl.format(Z.t.BegylZ, {
                    serviceName: y,
                    accountUrl: k,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let B = (0, l.jsxs)(g.A, {
            className: ts.wx,
            align: g.A.Align.CENTER,
            children: [
                (0, l.jsx)(ex, { name: `${i.name}`, detailsClassName: ts.h_, details: t }),
                i.enabled
                    ? (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, l.jsx)(eG.A, { className: ts.eO, expanded: r && !x, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: x
                              ? (0, l.jsx)(e9.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: te.RefreshIcon,
                                    "aria-label": Z.intl.string(Z.t["7sCN8m"]),
                                })
                              : (0, l.jsx)(O.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: j,
                                    text: Z.intl.string(Z.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        H = null;
    return (
        r &&
            !x &&
            null != a &&
            (H = (0, l.jsxs)(g.A, {
                className: ts.rf,
                direction: g.A.Direction.VERTICAL,
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
                        return (0, l.jsxs)(g.A, {
                            children: [
                                (0, l.jsxs)(g.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: ta.QB,
                                            children: Z.intl.string(Z.t.eBtNBa),
                                        }),
                                        (0, l.jsx)(T.E, {
                                            className: ts.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(g.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-sm/semibold",
                                            className: ta.QB,
                                            children: n,
                                        }),
                                        (0, l.jsxs)(g.A, {
                                            justify: g.A.Justify.BETWEEN,
                                            children: [
                                                (0, l.jsxs)(g.A, {
                                                    direction: g.A.Direction.VERTICAL,
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
                                                    ? (0, l.jsx)(e9.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: te.RefreshIcon,
                                                          "aria-label": Z.intl.string(Z.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, l.jsx)(O.$, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: Z.intl.string(Z.t.BkuOO6),
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
                        labelText: R,
                        subscribersText: M,
                        descriptionText: W,
                        roleLink: G,
                        onSync: E,
                    }),
                    (0, l.jsx)(S.c, { className: ts.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: s } = e;
                        return (0, l.jsxs)(g.A, {
                            children: [
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(e_.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: e8.F.REMOVE_ROLE.toString(),
                                                label: Z.intl.string(Z.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: e8.F.KICK.toString(),
                                                label: Z.intl.string(Z.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => i(parseInt(e)),
                                    }),
                                }),
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(e_.l, {
                                        selectionMode: "single",
                                        label: Z.intl.string(Z.t.uiXMow),
                                        placeholder: Z.intl.string(Z.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(e5)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: Z.intl.formatToPlainString(Z.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => s(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: a,
                        labelText: L,
                        onBehaviorChange: function (e) {
                            u.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !b &&
                        a.expire_behavior === e8.F.KICK &&
                        (0, l.jsx)(T.E, {
                            className: ts.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: Z.intl.string(Z.t.mThMlB),
                        }),
                    i.type === e4.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, l.jsxs)(g.A, {
                                  direction: g.A.Direction.VERTICAL,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: _()(ta.QX, ta.QB),
                                          children: (0, l.jsx)(tt.S, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => i(e),
                                              label: Z.intl.string(Z.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, l.jsx)(g.A, {
                                          wrap: g.A.Wrap.WRAP,
                                          className: ts.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, l.jsx)(
                                                  em.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, l.jsx)(
                                                          "img",
                                                          {
                                                              alt: Z.intl.formatToPlainString(Z.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: _()(ts.Zg, "emoji", "jumboable"),
                                                              src: eo.Ay.getEmojiURL({
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
                    (0, l.jsx)(S.c, { className: ts.Bd }),
                    (0, l.jsx)(g.A, {
                        children: (0, l.jsx)(O.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: Z.intl.string(Z.t.M6q6eX),
                            onClick: N,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(I.Z, {
            editable: !0,
            className: ts.Nr,
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    i.enabled
                        ? (0, l.jsx)(Y.D, { className: ts._S, "aria-expanded": r && !x, onClick: d, children: B })
                        : B,
                    H,
                ],
            }),
        })
    );
}
var to = n(260294);
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
                m() && (await w.A.enableIntegration(i.id, e.type, e.id), u.A.startEditingIntegration(e.id));
            },
            [m, i.id],
        ),
        x = s.useCallback(
            (e) => {
                m() && (e.id === n?.id && u.A.stopEditingIntegration(), w.A.disableIntegration(i.id, e.id));
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
            (0, l.jsx)(ex, {
                name: r,
                icon: g?.icon.whiteSVG,
                iconBackgroundColor: g?.color,
                iconClassName: to.tV,
                description: o,
                isHeader: !0,
            }),
            (0, l.jsx)(S.c, { className: to.zN }),
            "message" in d &&
                (0, l.jsx)(T.E, {
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
                        onToggleExpand: () => p(e.id),
                    },
                    e.id,
                ),
            ),
            (0, l.jsx)(T.E, { className: to.BK, color: "text-muted", variant: "text-sm/normal", children: c }),
        ],
    });
}
var td = n(462887),
    tu = n(736653),
    tm = n(945235);
let tg = "/assets/a29cabf3e1357986.svg",
    th = "/assets/c733a28e6fcba3ef.svg";
function tx(e) {
    var t;
    let n,
        { followedChannelWebhooks: i, editedWebhook: s, selectableWebhookChannels: a, errors: r, canNavigate: o } = e,
        d = (0, tu.Ay)();
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(T.E, {
                variant: "text-sm/normal",
                children: Z.intl.format(Z.t["5u+aV1"], {
                    helpdeskArticle: b.A.getArticleURL(eW.MVz.CHANNEL_FOLLOWING),
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
                : ((t = () => open(b.A.getArticleURL(eW.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, td.M)(d) ? tg : th),
                  (0, l.jsxs)(g.A, {
                      direction: g.A.Direction.VERTICAL,
                      align: g.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: n, className: tm.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: Z.intl.string(Z.t.gzuVH0) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tm.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: Z.intl.string(Z.t["ZwSt+T"]),
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
    tf = n(713654),
    tb = n(769015),
    tj = n(887501),
    tN = n(514810),
    tE = n(43105),
    tC = n(340351),
    tv = n(320448),
    tI = n(95561),
    tT = n(264322),
    tS = n(174459),
    ty = n(320426),
    tk = n(187679);
function tO(e) {
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
            onButtonClick: p,
            guildId: A,
            isScrolling: f,
            canShowMigrationTooltip: b,
            trailing: N,
        } = e,
        [E, C] = s.useState(!1),
        v = b && !f && !E && void 0 !== A && null != u,
        S = s.useRef(null),
        L = s.useRef(null),
        w =
            null == m || null == p
                ? null
                : h
                  ? (0, l.jsxs)(eu.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: L,
                        children: [
                            (0, l.jsx)(T.E, { variant: "text-sm/normal", children: m }),
                            (0, l.jsx)(tv._, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: tk.OW,
                            }),
                        ],
                    })
                  : (0, l.jsx)(O.$, { size: "sm", buttonRef: S, disabled: g, onClick: p, text: m });
    s.useEffect(() => {
        v &&
            tS.default.track(eW.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, tI.H$)(A),
                application_id: u?.application.id,
                location: "overview",
            });
    }, [A, u?.application.id, v]);
    let M =
            v && (null != L.current || null != S.current)
                ? (0, l.jsx)(tE.A, {
                      targetElementRef: h ? L : S,
                      title: Z.intl.string(Z.t.ufFDiC),
                      body: Z.intl.string(Z.t.TyMJwC),
                      onRequestClose: () => {
                          C(!0), ty.A.dismissOverviewTooltip(A, u.integration);
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        P = (0, o.yK)([x.A], () =>
            null != u && null != A ? (x.A.getApplicationEntitlementsForGuild(u.application.id, A) ?? []) : [],
        ),
        G = (0, tT.ON)(A, !0),
        W = u?.application != null && Object.keys(G.result?.sections[u.application.id]?.commands ?? {}).length > 0,
        D = (0, l.jsxs)(eu.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, l.jsx)(ex, {
                    name: t,
                    icon: n,
                    imageSrc: i,
                    iconBackgroundColor: a,
                    iconClassName: r,
                    iconWrapperClassName: c,
                    details: d,
                    isPremium: P.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: i, integration: s, webhooks: a } = e;
                        return (
                            null != i.bot &&
                                s?.scopes?.includes(j.F.BOT) &&
                                n.push({
                                    id: "bot",
                                    label: new eC.A(i.bot).isVerifiedBot()
                                        ? Z.intl.string(Z.t.xxcTGy)
                                        : Z.intl.string(Z.t.AOdOYr),
                                    icon: y.RobotIcon,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: Z.intl.formatToPlainString(Z.t["6HqDfT"], { count: a.length }),
                                    icon: k.X,
                                }),
                            s?.scopes?.includes(j.F.APPLICATIONS_COMMANDS) === !0 &&
                                t &&
                                n.push({ id: "commands", label: Z.intl.string(Z.t["0hKkS+"]), icon: R.k }),
                            (0, l.jsx)(eu.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, l.jsx)(tC.C, {
                                    label: Z.intl.string(Z.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(u, W),
                }),
                M,
                w,
                N,
            ],
        });
    return h
        ? (0, l.jsx)(Y.D, {
              onClick: () => {
                  b && null != A && null != u && ty.A.dismissOverviewTooltip(A, u.integration), p?.();
              },
              children: (0, l.jsx)(I.Z, { editable: !0, className: _()(tk.Nr, tk.vk), children: D }),
          })
        : (0, l.jsx)(I.Z, { editable: !0, className: tk.Nr, children: D });
}
function tL(e) {
    let { channel: t, application: i, showApplicationImage: a, ...r } = e,
        o = (0, tN.N)(t),
        c = s.useCallback(
            () =>
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("243486"), n.e("673380")]).then(n.bind(n, 106895));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, application: i });
                }),
            [i, t],
        ),
        d = a ? (i.getIconURL(48) ?? eo.vI["0"]) : void 0;
    return (0, l.jsx)(tO, { imageSrc: d, onButtonClick: c, details: null != o ? [{ text: o }] : void 0, ...r });
}
var tw = n(577020);
function tR(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, tA.h)(t);
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
                              name: (0, ey.m1)(e, eO.default, ek.A),
                              icon: (0, tf.gU)(e) ?? void 0,
                              iconWrapperClassName: tw.N3,
                              hasNextSection: !0,
                              trailing: (0, l.jsx)(tp.PencilIcon, { size: "xs" }),
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
            0 === n.length && u.A.setSection(eW.wLn.OVERVIEW);
        }, [n]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(T.E, {
                    variant: "text-sm/normal",
                    children: Z.intl.format(Z.t["9gsSLu"], {
                        helpdeskArticle: b.A.getArticleURL(eW.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, l.jsx)(S.c, { className: tw.zN }),
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
    tY = n(638594),
    tq = n(854766),
    tQ = n(237070);
function tJ(e, t) {
    return t.includes(e);
}
function tZ(e) {
    let { query: t, setQuery: n } = e,
        i = s.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, l.jsx)("div", {
        className: tY.MT,
        children: (0, l.jsx)(B.I, {
            query: t,
            onChange: i,
            onClear: function () {
                return n("");
            },
            placeholder: Z.intl.string(Z.t["5prvKe"]),
            "aria-label": Z.intl.string(Z.t["5prvKe"]),
        }),
    });
}
function t$(e) {
    var t, n, i, a;
    let r,
        d,
        u,
        h,
        x,
        p,
        f,
        j,
        N,
        v,
        {
            guild: y,
            channel: O,
            applicationIntegrations: L,
            builtInIntegrations: w,
            customWebhooks: R,
            followedChannelWebhooks: M,
            isLoadingWebhooks: P,
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
        { canManageWebhooks: q, canManageGuild: Q } = (0, o.cf)(
            [A.A],
            () => ({
                canManageWebhooks:
                    (null != y && A.A.can(eW.xBc.MANAGE_WEBHOOKS, y)) ||
                    (null != O && A.A.can(eW.xBc.MANAGE_WEBHOOKS, O)),
                canManageGuild: null != y && null == O && A.A.can(eW.xBc.MANAGE_GUILD, y),
            }),
            [y, O],
        ),
        J = (0, tz.e)(O),
        $ = (0, tA.h)(O?.linkedLobby?.application_id),
        X = (0, tj.A)(y?.id),
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
            if (F || !Q) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = y?.features.has(eW.GuildFeatures.COMMUNITY),
                t = Y.filter((e) => e.type === eW.fg2.TWITCH).length > 0,
                n = Y.filter((e) => e.type === eW.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: ee > 0 || (!t && e), showYoutubeCard: et > 0 || (!n && e) };
        }, [F, Q, y, Y, ee, et]),
        ea = Object.values(L).length,
        er = s.useMemo(() => {
            let e = ea > 100 ? tJ : tP();
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
        eu = (0, o.bG)([tK.A], () => {
            if (null != y) return er.find((e) => tK.A.canShowOverviewTooltip(y.id, e.integration.id));
        }, [er, y]),
        em = s.useMemo(
            () => (void 0 !== eu ? [eu, ...er.filter((e) => e.integration.id !== eu.integration.id)] : er),
            [er, eu],
        ),
        eg = (0, E.useModalsStore)(E.hasAnyModalOpenSelector),
        [eh, ex] = s.useState(!1),
        ep = s.useRef(0);
    function eA() {
        ex(!0),
            clearTimeout(ep.current),
            (ep.current = setTimeout(() => {
                ex(!1);
            }, 200));
    }
    s.useEffect(() => (window.addEventListener("scroll", eA, !0), () => window.removeEventListener("scroll", eA)));
    let ef = em.map((e) => {
            let t = !eg && e.integration.id === eu?.integration.id;
            return (function (e, t, n, i, s) {
                let { application: a, integration: r } = t,
                    o = [];
                return (
                    null != r.user
                        ? o.push({
                              icon: C.ClockIcon,
                              text: Z.intl.formatToPlainString(Z.t.Nu9sat, {
                                  timestamp: ec.default.extractTimestamp(r.id),
                                  user: ed.Ay.getUserTag(r.user),
                              }),
                          })
                        : o.push({
                              icon: C.ClockIcon,
                              text: Z.intl.formatToPlainString(Z.t.gcdJ8J, {
                                  timestamp: ec.default.extractTimestamp(r.id),
                              }),
                          }),
                    (0, l.jsx)(
                        tO,
                        {
                            name: a.name,
                            imageSrc: eo.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                            integration: t,
                            buttonText: Z.intl.string(Z.t["Z/qRnM"]),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(a.id),
                                    tS.default.track(eW.HAw.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: e?.id,
                                        is_admin: null != e ? A.A.can(eW.xBc.ADMINISTRATOR, e) : void 0,
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
            })(y, e, B, eh, t);
        }),
        eb = (0, l.jsx)("div", { className: tY.Hw });
    if (0 === ef.length && Q) {
        let e, n, i;
        (t = y?.id),
            (e = (0, td.M)(z) ? tq : tQ),
            (n = (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                align: g.A.Align.CENTER,
                className: tY.Kl,
                children: [
                    (0, l.jsx)("img", { alt: "", src: e, className: tY.s1 }),
                    (0, l.jsx)(I.Z, {
                        editable: !0,
                        className: tY.$N,
                        children: (0, l.jsx)(T.E, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: Z.intl.string(Z.t.EVWFNr),
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
                            children: Z.intl.string(Z.t.nQQeFM),
                        }),
                        (0, l.jsx)(T.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: Z.intl.format(Z.t.snvKU3, {
                                handleGoToAppDirectory: function () {
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
    let ej = b.A.getArticleURL(eW.MVz.INTEGRATIONS),
        eN = null != O ? Z.t.YV0vh6 : Z.t.FnZEJs,
        eE = [];
    if (q) {
        let e, t, s, a, r;
        eE.push(
            ((n = R.length),
            n > 0 ? (t = (0, l.jsx)(tG.u, { size: "xs" })) : (e = Z.intl.string(Z.t.lOQqJK)),
            (0, l.jsx)(
                tO,
                {
                    name: Z.intl.string(Z.t.xOg4SP),
                    icon: k.X,
                    buttonText: e,
                    buttonDisabled: !G,
                    trailing: t,
                    onButtonClick: D,
                    hasNextSection: n > 0,
                    details: [{ text: Z.intl.formatToPlainString(Z.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            O?.type === eW.rbe.GUILD_VOICE ||
                (O?.type != null && eW.kvI.GUILD_THREADS_ONLY.has(O.type)) ||
                eE.push(
                    ((i = M.length),
                    i > 0
                        ? ((r = (0, l.jsx)(tG.u, { size: "xs" })), (a = U))
                        : ((s = Z.intl.string(Z.t["ZwSt+T"])),
                          (a = () => open(b.A.getArticleURL(eW.MVz.CHANNEL_FOLLOWING)))),
                    (0, l.jsx)(
                        tO,
                        {
                            name: Z.intl.string(Z.t.OrV60r),
                            icon: tW._,
                            buttonText: s,
                            onButtonClick: a,
                            trailing: r,
                            hasNextSection: i > 0,
                            details: [{ text: Z.intl.formatToPlainString(Z.t.JUNGIZ, { count: i }) }],
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
                tO,
                {
                    name: Z.intl.string(Z.t.tqtDXC),
                    icon: te.RefreshIcon,
                    trailing: (0, l.jsx)(tG.u, { size: "xs" }),
                    onButtonClick: H,
                    hasNextSection: !0,
                    details: [{ text: Z.intl.formatToPlainString(Z.t["puxS4+"], { count: a }) }],
                },
                "channels-syncing",
            )),
        ),
        el &&
            eE.push(
                ((x = e3.A.get(eW.fg2.TWITCH)),
                ee > 0
                    ? ((h = (0, l.jsx)(tG.u, { size: "xs" })),
                      (d = Z.intl.formatToPlainString(Z.t.FFpnT8, { count: en })),
                      (u = () => W(eW.fg2.TWITCH)))
                    : ((r = Z.intl.string(Z.t.bkvGkn)),
                      (d = Z.intl.string(Z.t.Qq3X2M)),
                      (u = () => (0, m.A)({ platformType: eW.fg2.TWITCH, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tO,
                    {
                        name: Z.intl.string(Z.t.q4pBG3),
                        icon: x.icon.whiteSVG,
                        iconBackgroundColor: x.color,
                        iconClassName: tY.tV,
                        buttonText: r,
                        onButtonClick: u,
                        trailing: h,
                        hasNextSection: ee > 0,
                        details: [{ text: d }],
                    },
                    "integrations-twitch",
                )),
            ),
        es &&
            eE.push(
                ((v = e3.A.get(eW.fg2.YOUTUBE)),
                et > 0
                    ? ((N = (0, l.jsx)(tG.u, { size: "xs" })),
                      (f = Z.intl.formatToPlainString(Z.t.b2g5vC, { count: ei })),
                      (j = () => W(eW.fg2.YOUTUBE)))
                    : ((p = Z.intl.string(Z.t.xEyQ3X)),
                      (f = Z.intl.string(Z.t.T0ivgQ)),
                      (j = () => (0, m.A)({ platformType: eW.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tO,
                    {
                        name: Z.intl.string(Z.t.aS6cK4),
                        icon: v.icon.whiteSVG,
                        iconBackgroundColor: v.color,
                        iconClassName: tY.tV,
                        buttonText: p,
                        onButtonClick: j,
                        trailing: N,
                        hasNextSection: et > 0,
                        details: [{ text: f }],
                    },
                    "integrations-youtube",
                )),
            );
    let eC = null != O && J && null != $;
    return (0, l.jsxs)("div", {
        className: _()(null != eb ? tY.bg : null),
        children: [
            (0, l.jsx)(T.E, { variant: "text-sm/normal", children: Z.intl.format(eN, { helpdeskArticle: ej }) }),
            (0, l.jsx)(S.c, { className: tY.yF }),
            P || F || null == y
                ? (0, l.jsx)(tD.y, { className: tY.__invalid_spinner, type: tD.y.Type.SPINNING_CIRCLE })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          eE,
                          eC &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      eE.length > 0 ? (0, l.jsx)(S.c, { className: tY.yF }) : null,
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-md/semibold",
                                          className: tY.bV,
                                          children: Z.intl.string(Z.t.oAvIAg),
                                      }),
                                      (0, l.jsx)(tL, {
                                          channel: O,
                                          application: $,
                                          showApplicationImage: !0,
                                          name: $.name,
                                          hasNextSection: !0,
                                          iconClassName: tY.d0,
                                          trailing: (0, l.jsx)(tp.PencilIcon, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          Q
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        eE.length > 0 || eC ? (0, l.jsx)(S.c, { className: tY.yF }) : null,
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-md/semibold",
                                            className: tY.bV,
                                            children: Z.intl.string(Z.t.pUBKht),
                                        }),
                                        ea > 4 ? (0, l.jsx)(tZ, { query: V, setQuery: K }) : null,
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
    t0 = n(580807);
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
            canNavigate: h,
        } = e,
        x = (0, tu.Ay)(),
        [p, A] = s.useState(null);
    if (null != a) n = a;
    else {
        let e = Object.values(d);
        n = e.length > 0 ? e[0] : null;
    }
    let f = s.useCallback(async () => {
        if (h() && null !== n) {
            let e = await eP.A.create(i.id, n.id);
            null != e && A(e);
        }
    }, [h, n, i]);
    (0, tX.Ay)(() => {
        0 === r.length && f();
    });
    let j = null !== n;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(T.E, {
                variant: "text-sm/normal",
                children: Z.intl.format(Z.t.WL0d0e, {
                    helpdeskArticle: b.A.getArticleURL(eW.MVz.WEBHOOKS),
                    developersArticle: eW.X7G.API_DOCS_WEBHOOKS,
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
                                  text: Z.intl.string(Z.t["nrO/HH"]),
                                  disabled: !j,
                                  onClick: f,
                              }),
                          }),
                          (0, l.jsx)(e$, {
                              webhooks: r,
                              editedWebhook: o,
                              selectableWebhookChannels: d,
                              lastCreatedWebhookId: p?.id,
                              errors: m,
                              canNavigate: h,
                          }),
                      ],
                  })
                : ((t = (0, td.M)(x) ? tg : th),
                  (0, l.jsxs)(g.A, {
                      direction: g.A.Direction.VERTICAL,
                      align: g.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: t, className: t0.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-md/semibold", children: Z.intl.string(Z.t.LzmsWl) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t0.nM,
                              children: (0, l.jsx)(O.$, {
                                  variant: "primary",
                                  text: Z.intl.string(Z.t.lOQqJK),
                                  disabled: !j,
                                  onClick: f,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
n(46121);
var t3 = n(494192);
function t1(e, t) {
    switch (e) {
        case eW.wLn.APPLICATION:
            return t?.application.name ?? "";
        case eW.wLn.OVERVIEW:
            return Z.intl.string(Z.t.s69NLF);
        case eW.wLn.CHANNEL_FOLLOWING:
            return Z.intl.string(Z.t.OrV60r);
        case eW.wLn.TWITCH:
            return Z.intl.string(Z.t.q4pBG3);
        case eW.wLn.WEBHOOKS:
            return Z.intl.string(Z.t.xOg4SP);
        case eW.wLn.YOUTUBE:
            return Z.intl.string(Z.t.aS6cK4);
        case eW.wLn.LOBBIES_LINKED:
            return Z.intl.string(Z.t.tqtDXC);
        default:
            return "";
    }
}
let t7 = s.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: i,
            channel: a,
            integrations: j,
            editedIntegration: N,
            webhooks: E,
            editedWebhook: C,
            isFetchingWebhooks: v,
            refToScroller: I,
            errors: T,
            hasChanges: S,
        } = e,
        y = (0, o.bG)([p.Ay], () => (null != i ? p.Ay.getDefaultChannel(i.id) : null)),
        k = (0, o.cf)([p.Ay], () => p.Ay.getChannels(i?.id)),
        O = (0, o.cf)([A.A], () =>
            r().keyBy(
                k.SELECTABLE.map((e) => e.channel).filter((e) => A.A.can(eW.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        L = (0, o.cf)([A.A], () =>
            r().keyBy(
                k.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && A.A.can(eW.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        w = a ?? y,
        R = t === eW.wLn.APPLICATION ? n : null,
        [M, _] = s.useState(1.4),
        P = s.useCallback(
            () =>
                S()
                    ? (f._.dispatch(eW.jej.SHAKE_APP, { duration: 300, intensity: M }),
                      _(Math.min(M + 2, 15)),
                      f._.dispatch(eW.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (_(1.4), !0),
            [S, M],
        ),
        G = s.useCallback((e) => !!P() && (u.A.setSection(e), !0), [P]),
        {
            applicationIntegrations: W,
            applicationBotIds: D,
            builtInIntegrations: U,
            customWebhooks: B,
            followedChannelWebhooks: H,
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
            for (let t of E)
                (t.channel_id in O || t.channel_id in L) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === eW.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [j, O, L, E]);
    s.useEffect(() => {
        if (!v)
            switch (t) {
                case eW.wLn.TWITCH:
                    null == U[eW.fg2.TWITCH] && u.A.setSection(eW.wLn.OVERVIEW);
                    break;
                case eW.wLn.YOUTUBE:
                    null == U[eW.fg2.YOUTUBE] && u.A.setSection(eW.wLn.OVERVIEW);
                    break;
                case eW.wLn.APPLICATION:
                    (null != R && (R in D || R in W)) || u.A.setSection(eW.wLn.OVERVIEW);
            }
    }, [W, D, U, R, t, v]),
        s.useEffect(() => {
            i?.id == null || (x.A.getEntitlementsForGuildFetchState(i.id) === x.e.NOT_FETCHED && h.f5(i.id));
        }, [i?.id]),
        s.useEffect(
            () => () => {
                u.A.setSection(eW.wLn.OVERVIEW, null);
            },
            [],
        );
    let z = null;
    switch (t) {
        case eW.wLn.TWITCH:
            null != U[eW.fg2.TWITCH] &&
                (z = (0, l.jsx)(tc, {
                    guild: i,
                    integrations: U[eW.fg2.TWITCH],
                    editedIntegration: N,
                    labelText: Z.intl.string(Z.t.q4pBG3),
                    platformType: eW.fg2.TWITCH,
                    descriptionText: Z.intl.string(Z.t.V9kNqt),
                    helpText: Z.intl.format(Z.t.ro1jEN, {
                        connectAction: () =>
                            (0, m.A)({ platformType: eW.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: b.A.getArticleURL(eW.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case eW.wLn.YOUTUBE:
            null != U[eW.fg2.YOUTUBE] &&
                (z = (0, l.jsx)(tc, {
                    guild: i,
                    integrations: U[eW.fg2.YOUTUBE],
                    editedIntegration: N,
                    labelText: Z.intl.string(Z.t.aS6cK4),
                    platformType: eW.fg2.YOUTUBE,
                    descriptionText: Z.intl.string(Z.t["7Tv7JK"]),
                    helpText: Z.intl.format(Z.t["4OSAQ9"], {
                        connectAction: () => (0, m.A)({ platformType: eW.fg2.YOUTUBE }),
                        helpdeskArticle: b.A.getArticleURL(eW.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case eW.wLn.APPLICATION:
            let V = null != R ? (W[D[R]] ?? W[R]) : null;
            null != V &&
                (z = (0, l.jsx)(e2, {
                    guild: i,
                    applicationIntegration: V,
                    editedWebhook: C,
                    selectableWebhookChannels: O,
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case eW.wLn.CHANNEL_FOLLOWING:
            z = (0, l.jsx)(tx, {
                followedChannelWebhooks: H,
                editedWebhook: C,
                selectableWebhookChannels: O,
                canNavigate: P,
                errors: T,
            });
            break;
        case eW.wLn.WEBHOOKS:
            z = (0, l.jsx)(t2, {
                guild: i,
                channel: a,
                customWebhooks: B,
                editedWebhook: C,
                selectableWebhookChannels: { ...O, ...L },
                canNavigate: P,
                refToScroller: I,
                errors: T,
            });
            break;
        case eW.wLn.LOBBIES_LINKED:
            z = (0, l.jsx)(tM, { guild: i });
            break;
        default:
            z = (0, l.jsx)(t$, {
                guild: i,
                channel: a,
                applicationIntegrations: W,
                builtInIntegrations: U,
                customWebhooks: B,
                followedChannelWebhooks: H,
                isLoadingWebhooks: v || null == i,
                canCreateWebhook: null != w,
                onManageCustomWebhooks: () => {
                    u.A.setSection(eW.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    u.A.setSection(eW.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    u.A.setSection(eW.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case eW.fg2.TWITCH:
                            u.A.setSection(eW.wLn.TWITCH);
                            break;
                        case eW.fg2.YOUTUBE:
                            u.A.setSection(eW.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    u.A.setSection(eW.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.A, {
                align: g.A.Align.CENTER,
                className: t3.jD,
                children:
                    t === eW.wLn.OVERVIEW
                        ? (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t1(eW.wLn.OVERVIEW) })
                        : (0, l.jsx)(d.A, {
                              activeId: t.toString(),
                              breadcrumbs: [eW.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: t1(e, W[R]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && G(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, l.jsx)(c.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? t3.q3 : t3.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            z,
        ],
    });
});
