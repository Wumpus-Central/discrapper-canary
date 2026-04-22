n.d(t, { A: () => X }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(91871),
    o = n.n(r),
    d = n(311907),
    c = n(462887),
    u = n(881636),
    m = n(39619),
    g = n(184940),
    h = n(663417),
    x = n(406810),
    p = n(359778),
    A = n(834730),
    b = n(534514),
    f = n(892547),
    _ = n(192308),
    j = n(404778),
    N = n(289873),
    v = n(22231),
    E = n(398590),
    C = n(736653),
    I = n(573648),
    T = n(429913),
    S = n(882997),
    y = n(235986),
    w = n(837057),
    O = n(310419),
    k = n(526132),
    L = n(887501),
    R = n(962173),
    M = n(576705),
    D = n(954571),
    P = n(486020),
    G = n(975571),
    U = n(661191),
    W = n(427262),
    B = n(523352),
    H = n(517765),
    z = n(381616),
    V = n(652215),
    F = n(488995),
    K = n(985018),
    Y = n(32589),
    q = n(882370),
    Q = n(854766),
    Z = n(237070);
function J(e, t) {
    return t.includes(e);
}
function $(e) {
    let { query: t, setQuery: n } = e,
        s = l.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, i.jsx)("div", {
        className: Y.MT,
        children: (0, i.jsx)(f.I, {
            query: t,
            onChange: s,
            onClear: () => n(""),
            placeholder: K.intl.string(K.t["5prvKe"]),
            "aria-label": K.intl.string(K.t["5prvKe"]),
        }),
    });
}
function X(e) {
    var t, n, s, r;
    let f,
        X,
        ee,
        et,
        en,
        ei,
        el,
        es,
        ea,
        er,
        {
            guild: eo,
            channel: ed,
            applicationIntegrations: ec,
            builtInIntegrations: eu,
            customWebhooks: em,
            followedChannelWebhooks: eg,
            isLoadingWebhooks: eh,
            canCreateWebhook: ex,
            onManageBuiltIn: ep,
            onManageCustomWebhooks: eA,
            onManageFollowedChannels: eb,
            onManageApplication: ef,
            onManageLobbiesLinked: e_,
        } = e,
        ej = (0, C.Ay)(),
        [eN, ev] = l.useState(""),
        { isFetchingConnections: eE, accounts: eC } = (0, d.cf)(
            [R.A],
            () => ({ isFetchingConnections: R.A.isFetching(), accounts: R.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: eI, canManageGuild: eT } = (0, d.cf)(
            [M.A],
            () => ({
                canManageWebhooks:
                    (null != eo && M.A.can(V.xBc.MANAGE_WEBHOOKS, eo)) ||
                    (null != ed && M.A.can(V.xBc.MANAGE_WEBHOOKS, ed)),
                canManageGuild: null != eo && null == ed && M.A.can(V.xBc.MANAGE_GUILD, eo),
            }),
            [eo, ed],
        ),
        eS = (0, k.e)(ed),
        ey = (0, T.h)(ed?.linkedLobby?.application_id),
        ew = (0, L.A)(eo?.id),
        {
            availableTwitchIntegrations: eO,
            availableYoutubeIntegrations: ek,
            guildTwitchIntegrations: eL,
            guildYoutubeIntegrations: eR,
        } = l.useMemo(
            () => ({
                availableTwitchIntegrations: eu.twitch?.length ?? 0,
                availableYoutubeIntegrations: eu.youtube?.length ?? 0,
                guildTwitchIntegrations: eu.twitch?.filter((e) => e.enabled).length ?? 0,
                guildYoutubeIntegrations: eu.youtube?.filter((e) => e.enabled).length ?? 0,
            }),
            [eu.twitch, eu.youtube],
        ),
        { showTwitchCard: eM, showYoutubeCard: eD } = l.useMemo(() => {
            if (eE || !eT) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = eo?.features.has(V.GuildFeatures.COMMUNITY),
                t = eC.filter((e) => e.type === V.fg2.TWITCH).length > 0,
                n = eC.filter((e) => e.type === V.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: eO > 0 || (!t && e), showYoutubeCard: ek > 0 || (!n && e) };
        }, [eE, eT, eo, eC, eO, ek]),
        eP = Object.values(ec).length,
        eG = l.useMemo(() => {
            let e = eP > 100 ? J : o();
            return Object.values(ec).filter((t) => {
                var n;
                let { application: i } = t;
                return !!(
                    "" === (n = (n = eN).trim().toLowerCase()) ||
                    i.id === n ||
                    e(n, i.name.toLowerCase()) ||
                    (null != i.bot && e(n, i.bot.username.toLowerCase()))
                );
            });
        }, [ec, eP, eN]),
        eU = (0, d.bG)([z.A], () => {
            if (null != eo) return eG.find((e) => z.A.canShowOverviewTooltip(eo.id, e.integration.id));
        }, [eG, eo]),
        eW = l.useMemo(
            () => (void 0 !== eU ? [eU, ...eG.filter((e) => e.integration.id !== eU.integration.id)] : eG),
            [eG, eU],
        ),
        eB = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        [eH, ez] = l.useState(!1),
        eV = l.useRef(0),
        eF = () => {
            ez(!0),
                clearTimeout(eV.current),
                (eV.current = setTimeout(() => {
                    ez(!1);
                }, 200));
        };
    l.useEffect(() => (window.addEventListener("scroll", eF, !0), () => window.removeEventListener("scroll", eF)));
    let eK = eW.map((e) => {
            let t = !eB && e.integration.id === eU?.integration.id;
            return (function (e, t, n, l, s) {
                let { application: a, integration: r } = t,
                    o = [];
                return (
                    null != r.user
                        ? o.push({
                              icon: x.O,
                              text: K.intl.formatToPlainString(K.t.Nu9sat, {
                                  timestamp: U.default.extractTimestamp(r.id),
                                  user: W.Ay.getUserTag(r.user),
                              }),
                          })
                        : o.push({
                              icon: x.O,
                              text: K.intl.formatToPlainString(K.t.gcdJ8J, {
                                  timestamp: U.default.extractTimestamp(r.id),
                              }),
                          }),
                    (0, i.jsx)(
                        H.A,
                        {
                            name: a.name,
                            imageSrc: P.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                            integration: t,
                            buttonText: K.intl.string(K.t["Z/qRnM"]),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(a.id),
                                    D.default.track(V.HAw.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: e?.id,
                                        is_admin: null != e ? M.A.can(V.xBc.ADMINISTRATOR, e) : void 0,
                                    });
                            },
                            details: o,
                            guildId: e?.id,
                            isScrolling: l,
                            canShowMigrationTooltip: s,
                        },
                        `integration-${r.id}`,
                    )
                );
            })(eo, e, ef, eH, t);
        }),
        eY = (0, i.jsx)("div", { className: Y.Hw });
    if (0 === eK.length && eT) {
        let e, n, l;
        (t = eo?.id),
            (e = (0, c.M)(ej) ? Q : Z),
            (n = (0, i.jsxs)(y.A, {
                direction: y.A.Direction.VERTICAL,
                align: y.A.Align.CENTER,
                className: Y.Kl,
                children: [
                    (0, i.jsx)("img", { alt: "", src: e, className: Y.s1 }),
                    (0, i.jsx)(p.Z, {
                        editable: !0,
                        className: Y.$N,
                        children: (0, i.jsx)(A.E, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: K.intl.string(K.t.EVWFNr),
                        }),
                    }),
                ],
            })),
            (l = (0, i.jsx)(p.Z, {
                editable: !0,
                className: Y.$N,
                children: (0, i.jsxs)("div", {
                    className: Y.q6,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: q, className: Y.QT }),
                        (0, i.jsx)(b.D, {
                            color: "text-default",
                            variant: "heading-xl/bold",
                            children: K.intl.string(K.t.nQQeFM),
                        }),
                        (0, i.jsx)(A.E, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: K.intl.format(K.t.snvKU3, {
                                handleGoToAppDirectory: () => {
                                    (0, w.transitionToGlobalDiscovery)({
                                        tab: F.GlobalDiscoveryTab.APPS,
                                        newSessionState: {
                                            entrypoint: { name: O.sW.GUILD_INTEGRATION_SETTINGS },
                                            guildId: t,
                                        },
                                    }),
                                        (0, E.jH)();
                                },
                            }),
                        }),
                    ],
                }),
            })),
            (eK = eP > 0 ? n : l),
            (eY = null);
    }
    let eq = G.A.getArticleURL(V.MVz.INTEGRATIONS),
        eQ = null != ed ? K.t.YV0vh6 : K.t.FnZEJs,
        eZ = [];
    if (eI) {
        let e, t, l, a, r;
        eZ.push(
            ((n = em.length),
            n > 0 ? (t = (0, i.jsx)(u.u, { size: "xs" })) : (e = K.intl.string(K.t.lOQqJK)),
            (0, i.jsx)(
                H.A,
                {
                    name: K.intl.string(K.t.xOg4SP),
                    icon: m.X,
                    buttonText: e,
                    buttonDisabled: !ex,
                    trailing: t,
                    onButtonClick: eA,
                    hasNextSection: n > 0,
                    details: [{ text: K.intl.formatToPlainString(K.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            ed?.type === V.rbe.GUILD_VOICE ||
                (ed?.type != null && V.kvI.GUILD_THREADS_ONLY.has(ed.type)) ||
                eZ.push(
                    ((s = eg.length),
                    s > 0
                        ? ((r = (0, i.jsx)(u.u, { size: "xs" })), (a = eb))
                        : ((l = K.intl.string(K.t["ZwSt+T"])),
                          (a = () => open(G.A.getArticleURL(V.MVz.CHANNEL_FOLLOWING)))),
                    (0, i.jsx)(
                        H.A,
                        {
                            name: K.intl.string(K.t.OrV60r),
                            icon: g._,
                            buttonText: l,
                            onButtonClick: a,
                            trailing: r,
                            hasNextSection: s > 0,
                            details: [{ text: K.intl.formatToPlainString(K.t.JUNGIZ, { count: s }) }],
                        },
                        "channels-followed",
                    )),
                );
    }
    null == ed &&
        ew.length > 0 &&
        eZ.push(
            ((r = ew.length),
            (0, i.jsx)(
                H.A,
                {
                    name: K.intl.string(K.t.tqtDXC),
                    icon: h.f,
                    trailing: (0, i.jsx)(u.u, { size: "xs" }),
                    onButtonClick: e_,
                    hasNextSection: !0,
                    details: [{ text: K.intl.formatToPlainString(K.t["puxS4+"], { count: r }) }],
                },
                "channels-syncing",
            )),
        ),
        eM &&
            eZ.push(
                ((en = I.A.get(V.fg2.TWITCH)),
                eO > 0
                    ? ((et = (0, i.jsx)(u.u, { size: "xs" })),
                      (X = K.intl.formatToPlainString(K.t.FFpnT8, { count: eL })),
                      (ee = () => ep(V.fg2.TWITCH)))
                    : ((f = K.intl.string(K.t.bkvGkn)),
                      (X = K.intl.string(K.t.Qq3X2M)),
                      (ee = () => (0, S.A)({ platformType: V.fg2.TWITCH, location: "Integration Settings" }))),
                (0, i.jsx)(
                    H.A,
                    {
                        name: K.intl.string(K.t.q4pBG3),
                        icon: en.icon.whiteSVG,
                        iconBackgroundColor: en.color,
                        iconClassName: Y.tV,
                        buttonText: f,
                        onButtonClick: ee,
                        trailing: et,
                        hasNextSection: eO > 0,
                        details: [{ text: X }],
                    },
                    "integrations-twitch",
                )),
            ),
        eD &&
            eZ.push(
                ((er = I.A.get(V.fg2.YOUTUBE)),
                ek > 0
                    ? ((ea = (0, i.jsx)(u.u, { size: "xs" })),
                      (el = K.intl.formatToPlainString(K.t.b2g5vC, { count: eR })),
                      (es = () => ep(V.fg2.YOUTUBE)))
                    : ((ei = K.intl.string(K.t.xEyQ3X)),
                      (el = K.intl.string(K.t.T0ivgQ)),
                      (es = () => (0, S.A)({ platformType: V.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, i.jsx)(
                    H.A,
                    {
                        name: K.intl.string(K.t.aS6cK4),
                        icon: er.icon.whiteSVG,
                        iconBackgroundColor: er.color,
                        iconClassName: Y.tV,
                        buttonText: ei,
                        onButtonClick: es,
                        trailing: ea,
                        hasNextSection: ek > 0,
                        details: [{ text: el }],
                    },
                    "integrations-youtube",
                )),
            );
    let eJ = null != ed && eS && null != ey;
    return (0, i.jsxs)("div", {
        className: a()(null != eY ? Y.bg : null),
        children: [
            (0, i.jsx)(A.E, { variant: "text-sm/normal", children: K.intl.format(eQ, { helpdeskArticle: eq }) }),
            (0, i.jsx)(j.c, { className: Y.yF }),
            eh || eE || null == eo
                ? (0, i.jsx)(N.y, { className: Y.__invalid_spinner, type: N.y.Type.SPINNING_CIRCLE })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eZ,
                          eJ &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eZ.length > 0 ? (0, i.jsx)(j.c, { className: Y.yF }) : null,
                                      (0, i.jsx)(b.D, {
                                          variant: "heading-md/semibold",
                                          className: Y.bV,
                                          children: K.intl.string(K.t.oAvIAg),
                                      }),
                                      (0, i.jsx)(B.q, {
                                          channel: ed,
                                          application: ey,
                                          showApplicationImage: !0,
                                          name: ey.name,
                                          hasNextSection: !0,
                                          iconClassName: Y.d0,
                                          trailing: (0, i.jsx)(v.R, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          eT
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eZ.length > 0 || eJ ? (0, i.jsx)(j.c, { className: Y.yF }) : null,
                                        (0, i.jsx)(b.D, {
                                            variant: "heading-md/semibold",
                                            className: Y.bV,
                                            children: K.intl.string(K.t.pUBKht),
                                        }),
                                        eP > 4 ? (0, i.jsx)($, { query: eN, setQuery: ev }) : null,
                                        eK,
                                    ],
                                })
                              : null,
                          eY,
                      ],
                  }),
        ],
    });
}
