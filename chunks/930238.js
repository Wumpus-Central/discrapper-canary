n.d(t, { A: () => W }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(91871),
    o = n.n(r),
    d = n(311907),
    c = n(582754),
    u = n(397927),
    m = n(398590),
    x = n(736653),
    g = n(573648),
    h = n(429913),
    p = n(882997),
    A = n(235986),
    b = n(837057),
    f = n(310419),
    _ = n(526132),
    j = n(887501),
    N = n(962173),
    v = n(576705),
    T = n(954571),
    C = n(486020),
    E = n(975571),
    I = n(661191),
    S = n(427262),
    y = n(523352),
    O = n(517765),
    w = n(381616),
    k = n(652215),
    R = n(488995),
    L = n(985018),
    M = n(32589),
    G = n(882370),
    D = n(854766),
    P = n(237070);
function U(e, t) {
    return t.includes(e);
}
function B(e) {
    let { query: t, setQuery: n } = e,
        s = l.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, i.jsx)("div", {
        className: M.MT,
        children: (0, i.jsx)(u.IWV, {
            query: t,
            onChange: s,
            onClear: () => n(""),
            placeholder: L.intl.string(L.t["5prvKe"]),
            "aria-label": L.intl.string(L.t["5prvKe"]),
        }),
    });
}
function W(e) {
    var t, n, s, r;
    let W,
        H,
        V,
        z,
        F,
        K,
        Y,
        q,
        J,
        Q,
        {
            guild: Z,
            channel: X,
            applicationIntegrations: $,
            builtInIntegrations: ee,
            customWebhooks: et,
            followedChannelWebhooks: en,
            isLoadingWebhooks: ei,
            canCreateWebhook: el,
            onManageBuiltIn: es,
            onManageCustomWebhooks: ea,
            onManageFollowedChannels: er,
            onManageApplication: eo,
            onManageLobbiesLinked: ed,
        } = e,
        ec = (0, x.Ay)(),
        [eu, em] = l.useState(""),
        { isFetchingConnections: ex, accounts: eg } = (0, d.cf)(
            [N.A],
            () => ({ isFetchingConnections: N.A.isFetching(), accounts: N.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: eh, canManageGuild: ep } = (0, d.cf)(
            [v.A],
            () => ({
                canManageWebhooks:
                    (null != Z && v.A.can(k.xBc.MANAGE_WEBHOOKS, Z)) ||
                    (null != X && v.A.can(k.xBc.MANAGE_WEBHOOKS, X)),
                canManageGuild: null != Z && null == X && v.A.can(k.xBc.MANAGE_GUILD, Z),
            }),
            [Z, X],
        ),
        eA = (0, _.e)(X),
        eb = (0, h.h)(X?.linkedLobby?.application_id),
        ef = (0, j.A)(Z?.id),
        {
            availableTwitchIntegrations: e_,
            availableYoutubeIntegrations: ej,
            guildTwitchIntegrations: eN,
            guildYoutubeIntegrations: ev,
        } = l.useMemo(
            () => ({
                availableTwitchIntegrations: ee.twitch?.length ?? 0,
                availableYoutubeIntegrations: ee.youtube?.length ?? 0,
                guildTwitchIntegrations: ee.twitch?.filter((e) => e.enabled).length ?? 0,
                guildYoutubeIntegrations: ee.youtube?.filter((e) => e.enabled).length ?? 0,
            }),
            [ee.twitch, ee.youtube],
        ),
        { showTwitchCard: eT, showYoutubeCard: eC } = l.useMemo(() => {
            if (ex || !ep) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = Z?.features.has(k.GuildFeatures.COMMUNITY),
                t = eg.filter((e) => e.type === k.fg2.TWITCH).length > 0,
                n = eg.filter((e) => e.type === k.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: e_ > 0 || (!t && e), showYoutubeCard: ej > 0 || (!n && e) };
        }, [ex, ep, Z, eg, e_, ej]),
        eE = Object.values($).length,
        eI = l.useMemo(() => {
            let e = eE > 100 ? U : o();
            return Object.values($).filter((t) => {
                var n;
                let { application: i } = t;
                return !!(
                    "" === (n = (n = eu).trim().toLowerCase()) ||
                    i.id === n ||
                    e(n, i.name.toLowerCase()) ||
                    (null != i.bot && e(n, i.bot.username.toLowerCase()))
                );
            });
        }, [$, eE, eu]),
        eS = (0, d.bG)([w.A], () => {
            if (null != Z) return eI.find((e) => w.A.canShowOverviewTooltip(Z.id, e.integration.id));
        }, [eI, Z]),
        ey = l.useMemo(
            () => (void 0 !== eS ? [eS, ...eI.filter((e) => e.integration.id !== eS.integration.id)] : eI),
            [eI, eS],
        ),
        eO = (0, u.red)(u.DXt),
        [ew, ek] = l.useState(!1),
        eR = l.useRef(0),
        eL = () => {
            ek(!0),
                clearTimeout(eR.current),
                (eR.current = setTimeout(() => {
                    ek(!1);
                }, 200));
        };
    l.useEffect(() => (window.addEventListener("scroll", eL, !0), () => window.removeEventListener("scroll", eL)));
    let eM = ey.map((e) => {
            let t = !eO && e.integration.id === eS?.integration.id;
            return (function (e, t, n, l, s) {
                let { application: a, integration: r } = t,
                    o = [];
                return (
                    null != r.user
                        ? o.push({
                              icon: u.O4,
                              text: L.intl.formatToPlainString(L.t.Nu9sat, {
                                  timestamp: I.default.extractTimestamp(r.id),
                                  user: S.Ay.getUserTag(r.user),
                              }),
                          })
                        : o.push({
                              icon: u.O4,
                              text: L.intl.formatToPlainString(L.t.gcdJ8J, {
                                  timestamp: I.default.extractTimestamp(r.id),
                              }),
                          }),
                    (0, i.jsx)(
                        O.A,
                        {
                            name: a.name,
                            imageSrc: C.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }),
                            integration: t,
                            buttonText: L.intl.string(L.t["Z/qRnM"]),
                            hasNextSection: !0,
                            onButtonClick: () => {
                                n(a.id),
                                    T.default.track(k.HAw.APP_MANAGE_CTA_CLICKED, {
                                        application_id: a.id,
                                        guild_id: e?.id,
                                        is_admin: null != e ? v.A.can(k.xBc.ADMINISTRATOR, e) : void 0,
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
            })(Z, e, eo, ew, t);
        }),
        eG = (0, i.jsx)("div", { className: M.Hw });
    if (0 === eM.length && ep) {
        let e, n, l;
        (t = Z?.id),
            (e = (0, c.Mw)(ec) ? D : P),
            (n = (0, i.jsxs)(A.A, {
                direction: A.A.Direction.VERTICAL,
                align: A.A.Align.CENTER,
                className: M.Kl,
                children: [
                    (0, i.jsx)("img", { alt: "", src: e, className: M.s1 }),
                    (0, i.jsx)(u.ZpM, {
                        editable: !0,
                        className: M.$N,
                        children: (0, i.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: L.intl.string(L.t.EVWFNr),
                        }),
                    }),
                ],
            })),
            (l = (0, i.jsx)(u.ZpM, {
                editable: !0,
                className: M.$N,
                children: (0, i.jsxs)("div", {
                    className: M.q6,
                    children: [
                        (0, i.jsx)("img", { alt: "", src: G, className: M.QT }),
                        (0, i.jsx)(u.Heading, {
                            color: "text-default",
                            variant: "heading-xl/bold",
                            children: L.intl.string(L.t.nQQeFM),
                        }),
                        (0, i.jsx)(u.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: L.intl.format(L.t.snvKU3, {
                                handleGoToAppDirectory: () => {
                                    (0, b.transitionToGlobalDiscovery)({
                                        tab: R.GlobalDiscoveryTab.APPS,
                                        newSessionState: {
                                            entrypoint: { name: f.sW.GUILD_INTEGRATION_SETTINGS },
                                            guildId: t,
                                        },
                                    }),
                                        (0, m.jH)();
                                },
                            }),
                        }),
                    ],
                }),
            })),
            (eM = eE > 0 ? n : l),
            (eG = null);
    }
    let eD = E.A.getArticleURL(k.MVz.INTEGRATIONS),
        eP = null != X ? L.t.YV0vh6 : L.t.FnZEJs,
        eU = [];
    if (eh) {
        let e, t, l, a, r;
        eU.push(
            ((n = et.length),
            n > 0 ? (t = (0, i.jsx)(u.uhT, { size: "xs" })) : (e = L.intl.string(L.t.lOQqJK)),
            (0, i.jsx)(
                O.A,
                {
                    name: L.intl.string(L.t.xOg4SP),
                    icon: u.XC7,
                    buttonText: e,
                    buttonDisabled: !el,
                    trailing: t,
                    onButtonClick: ea,
                    hasNextSection: n > 0,
                    details: [{ text: L.intl.formatToPlainString(L.t["6HqDfT"], { count: n }) }],
                },
                "webhooks",
            )),
        ),
            X?.type === k.rbe.GUILD_VOICE ||
                (X?.type != null && k.kvI.GUILD_THREADS_ONLY.has(X.type)) ||
                eU.push(
                    ((s = en.length),
                    s > 0
                        ? ((r = (0, i.jsx)(u.uhT, { size: "xs" })), (a = er))
                        : ((l = L.intl.string(L.t["ZwSt+T"])),
                          (a = () => open(E.A.getArticleURL(k.MVz.CHANNEL_FOLLOWING)))),
                    (0, i.jsx)(
                        O.A,
                        {
                            name: L.intl.string(L.t.OrV60r),
                            icon: u._qW,
                            buttonText: l,
                            onButtonClick: a,
                            trailing: r,
                            hasNextSection: s > 0,
                            details: [{ text: L.intl.formatToPlainString(L.t.JUNGIZ, { count: s }) }],
                        },
                        "channels-followed",
                    )),
                );
    }
    null == X &&
        ef.length > 0 &&
        eU.push(
            ((r = ef.length),
            (0, i.jsx)(
                O.A,
                {
                    name: L.intl.string(L.t.tqtDXC),
                    icon: u.fNY,
                    trailing: (0, i.jsx)(u.uhT, { size: "xs" }),
                    onButtonClick: ed,
                    hasNextSection: !0,
                    details: [{ text: L.intl.formatToPlainString(L.t["puxS4+"], { count: r }) }],
                },
                "channels-syncing",
            )),
        ),
        eT &&
            eU.push(
                ((F = g.A.get(k.fg2.TWITCH)),
                e_ > 0
                    ? ((z = (0, i.jsx)(u.uhT, { size: "xs" })),
                      (H = L.intl.formatToPlainString(L.t.FFpnT8, { count: eN })),
                      (V = () => es(k.fg2.TWITCH)))
                    : ((W = L.intl.string(L.t.bkvGkn)),
                      (H = L.intl.string(L.t.Qq3X2M)),
                      (V = () => (0, p.A)({ platformType: k.fg2.TWITCH, location: "Integration Settings" }))),
                (0, i.jsx)(
                    O.A,
                    {
                        name: L.intl.string(L.t.q4pBG3),
                        icon: F.icon.whiteSVG,
                        iconBackgroundColor: F.color,
                        iconClassName: M.tV,
                        buttonText: W,
                        onButtonClick: V,
                        trailing: z,
                        hasNextSection: e_ > 0,
                        details: [{ text: H }],
                    },
                    "integrations-twitch",
                )),
            ),
        eC &&
            eU.push(
                ((Q = g.A.get(k.fg2.YOUTUBE)),
                ej > 0
                    ? ((J = (0, i.jsx)(u.uhT, { size: "xs" })),
                      (Y = L.intl.formatToPlainString(L.t.b2g5vC, { count: ev })),
                      (q = () => es(k.fg2.YOUTUBE)))
                    : ((K = L.intl.string(L.t.xEyQ3X)),
                      (Y = L.intl.string(L.t.T0ivgQ)),
                      (q = () => (0, p.A)({ platformType: k.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, i.jsx)(
                    O.A,
                    {
                        name: L.intl.string(L.t.aS6cK4),
                        icon: Q.icon.whiteSVG,
                        iconBackgroundColor: Q.color,
                        iconClassName: M.tV,
                        buttonText: K,
                        onButtonClick: q,
                        trailing: J,
                        hasNextSection: ej > 0,
                        details: [{ text: Y }],
                    },
                    "integrations-youtube",
                )),
            );
    let eB = null != X && eA && null != eb;
    return (0, i.jsxs)("div", {
        className: a()(null != eG ? M.bg : null),
        children: [
            (0, i.jsx)(u.Text, { variant: "text-sm/normal", children: L.intl.format(eP, { helpdeskArticle: eD }) }),
            (0, i.jsx)(u.cGx, { className: M.yF }),
            ei || ex || null == Z
                ? (0, i.jsx)(u.y$y, { className: M.__invalid_spinner, type: u.y$y.Type.SPINNING_CIRCLE })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          eU,
                          eB &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      eU.length > 0 ? (0, i.jsx)(u.cGx, { className: M.yF }) : null,
                                      (0, i.jsx)(u.Heading, {
                                          variant: "heading-md/semibold",
                                          className: M.bV,
                                          children: L.intl.string(L.t.oAvIAg),
                                      }),
                                      (0, i.jsx)(y.q, {
                                          channel: X,
                                          application: eb,
                                          showApplicationImage: !0,
                                          name: eb.name,
                                          hasNextSection: !0,
                                          iconClassName: M.d0,
                                          trailing: (0, i.jsx)(u.R2l, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          ep
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        eU.length > 0 || eB ? (0, i.jsx)(u.cGx, { className: M.yF }) : null,
                                        (0, i.jsx)(u.Heading, {
                                            variant: "heading-md/semibold",
                                            className: M.bV,
                                            children: L.intl.string(L.t.pUBKht),
                                        }),
                                        eE > 4 ? (0, i.jsx)(B, { query: eu, setQuery: em }) : null,
                                        eM,
                                    ],
                                })
                              : null,
                          eG,
                      ],
                  }),
        ],
    });
}
