(n.d(t, { iV: () => ce, OC: () => cn, Ay: () => ct }), n(938796));
var i,
    l,
    s = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    d = n(448761),
    c = n(665260),
    u = n(17928),
    m = n(803805),
    h = n(52133),
    g = n(192308),
    p = n(640238),
    A = n(834730),
    x = n(148494),
    f = n(793574),
    I = n(688810),
    E = n(735991);
(n(321073), n(134528), n(947204));
var v = n(485845),
    C = n(379834),
    _ = n(836480),
    j = n(825860),
    N = n(950305),
    y = n(452295),
    T = n(361926),
    S = n(583846),
    b = n(366430),
    k = n(205184),
    R = n(773669),
    L = n(280450),
    M = n(734057),
    P = n(994500),
    D = n(967198),
    O = n(287809),
    U = n(486020),
    G = n(204776),
    w = n(725606),
    B = n(572211),
    V = n(500060),
    H = n(432017),
    F = n(687966),
    z = n(104171),
    Y = n(652215),
    K = n(105292),
    W = n(852575);
function J(e) {
    let { activityUsers: t, guildId: n, activityText: i } = e;
    return (0, s.jsxs)("div", {
        className: W.i,
        children: [
            (0, s.jsx)(z.Ay, { guildId: n, users: t, max: 6, size: z.DN.SIZE_16 }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", color: "none", children: i }),
        ],
    });
}
var X = n(354287),
    Z = n(138175),
    q = n(112150),
    $ = n(574660),
    Q = n(768349),
    ee = n(113732);
function et(e) {
    let {
            app: t,
            linkType: n,
            activityCustomId: i,
            activityReferrerId: l,
            activityChannelId: a,
            message: o,
            onView: d,
        } = e,
        { name: c, bot: m } = (t = (0, Z.b)(t)),
        h = m?.id,
        g = (0, E.Z$)(t),
        p = U.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: m }),
        { staticBannerSrc: A, videoBannerSrc: x, bannerAspectRatio: v } = (0, q.f)(t),
        C = (0, u.bG)([L.default], () => l ?? L.default.getId(), [l]),
        { analyticsLocations: _ } = (0, I.Ay)(f.A.APP_MESSAGE_EMBED),
        { currentChannelId: j, instanceId: N, isCurrentlyInInstance: S, canLaunchInChannel: k } = (0, w.w)(t.id),
        R = (0, T.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: m?.id }),
        P = null != h && g && R,
        D = k && g,
        O = (0, b.U4)(t),
        G = (0, $.F)(t),
        V = (0, $.t)(t),
        H = r.useMemo(() => {
            let e = [];
            function n(e) {
                y.A.launch({
                    applicationId: t.id,
                    channelId: e,
                    fromLink: !0,
                    linkChannelId: a,
                    customId: i,
                    referrerId: C,
                    analyticsLocations: _,
                });
            }
            return (
                g || O
                    ? O
                        ? e.push({
                              label: K.intl.string(K.t.RscU7I),
                              trackingArea: X.kY.PLAY,
                              onClick() {
                                  n(null);
                              },
                          })
                        : (D &&
                              e.push({
                                  label:
                                      null == N
                                          ? K.intl.string(K.t.RscU7I)
                                          : S
                                            ? K.intl.string(K.t.DPfdsq)
                                            : K.intl.string(K.t.sqe0hj),
                                  trackingArea: X.kY.PLAY,
                                  onClick() {
                                      n(j);
                                  },
                                  disabled: S,
                              }),
                          !D &&
                              P &&
                              e.push({
                                  label: K.intl.string(K.t.JeK1Wg),
                                  trackingArea: X.kY.PLAY,
                                  onClick() {
                                      n(null);
                                  },
                              }))
                    : null != V && e.push(V),
                e
            );
        }, [g, V, O, t, D, P, N, S, j, i, a, C, _]),
        F = g ? (0, s.jsx)(ei, { app: t }) : (0, s.jsx)(en, { app: t });
    return (0, s.jsx)(B.h, {
        title: c,
        staticBannerSrc: A,
        videoBannerSrc: x,
        onClickBanner: G,
        bannerAspectRatio: v,
        iconSrc: p,
        info: F,
        actions: H,
        onClickContent: G,
        trackingConfig: {
            id: t.id,
            linkType: n,
            referrerId: C,
            activityCustomId: i,
            onView: d,
            guildId: M.A.getChannel(o.channel_id)?.guild_id,
            channelId: o.channel_id,
            messageId: o.id,
        },
    });
}
function en(e) {
    let { app: t } = e,
        n =
            (0, G.Ie)({
                customInstallUrl: t.customInstallUrl,
                installParams: t.installParams,
                integrationTypesConfig: t.integrationTypesConfig,
            }) &&
            null != t.integrationTypesConfig &&
            v.b.GUILD_INSTALL in t.integrationTypesConfig,
        i = (0, u.bG)([R.default], () => R.default.locale, []),
        l = r.useMemo(() => {
            if (!n) return null;
            let e = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" }),
                l = t.directoryEntry?.guild_count ?? 0;
            return 0 === l ? null : K.intl.format(K.t["6IW6Wi"], { guildCount: e.format(l) });
        }, [t.directoryEntry?.guild_count, n, i]),
        a = t.categories?.at(0)?.name;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != a && (0, s.jsx)(A.E, { variant: "text-xs/medium", className: ee.h_, color: "none", children: a }),
            null != l &&
                (0, s.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    className: ee.dS,
                    color: "none",
                    lineClamp: 1,
                    children: [(0, s.jsx)(_.CompassIcon, { size: "xxs", color: "currentColor" }), l],
                }),
        ],
    });
}
function ei(e) {
    let { app: t } = e,
        { tags: n, maxParticipants: i = 0 } = t,
        l = (0, u.bG)([D.A], () => D.A.getGuildId() ?? void 0, []),
        a = (0, k.s)(t.id),
        o = (0, u.yK)(
            [O.default, P.A],
            () => {
                let e = [];
                for (let [t, n] of a.entries()) {
                    if (t >= 5) break;
                    let i = O.default.getUser(n.author_id),
                        l = P.A.isFriend(n.author_id);
                    null != i && l && e.push(i);
                }
                return e;
            },
            [a],
        ),
        d = r.useMemo(() => {
            if (o.length > 0)
                return (0, s.jsx)(J, {
                    activityUsers: o,
                    guildId: l,
                    activityText: K.intl.formatToPlainString(K.t["IJa+46"], { count: o.length }),
                });
            if (a.some((e) => (0, S.CZ)(e) === C.m.GLOBAL))
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(j.FireIcon, { size: "xxs", color: "currentColor" }),
                        K.intl.string(K.t.TsWCdW),
                    ],
                });
            let e = i > 0 ? K.intl.format(K.t.z8EAJW, { count: i }) : K.intl.string(K.t.RjceQU);
            return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(N.UserIcon, { size: "xxs", color: "currentColor" }), e],
            });
        }, [a, o, l, i]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            n.length > 0 &&
                (0, s.jsx)(A.E, {
                    variant: "text-xs/medium",
                    className: ee.h_,
                    color: "none",
                    lineClamp: 1,
                    children: n.map((e, t) => (0, s.jsx)("span", { className: ee.Tc, children: e }, t)),
                }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: ee.dS, color: "none", lineClamp: 1, children: d }),
        ],
    });
}
var el = n(582388),
    es = n(257269);
let er = (0, u.UT)(el.A, {
    getQueryId: Y.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : el.A.getOne(e, t)),
    load: (e, t) => (0, es.Py)(e, t),
});
var ea = n(309010),
    eo = n(933958),
    ed = n(782091);
function ec(e) {
    let { application: t, customId: n, channelId: i, customLink: l, referrerId: r, message: a } = e,
        o = t?.bot?.id,
        d = (0, T.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        c = null != t && (0, E.Z$)(t),
        { analyticsLocations: m } = (0, I.Ay)(f.A.ACTIVITY_CUSTOM_LINK),
        h = (0, u.bG)([ea.Ay], () => ea.Ay.getChannelId()),
        g = (0, ed.et)(h),
        p = (0, u.bG)([eo.Ay], () => {
            if (null == h) return;
            let e = eo.Ay.getEmbeddedActivitiesForChannel(h).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        A = (0, u.bG)([eo.Ay], () => eo.Ay.getCurrentEmbeddedActivity()),
        x = g === ed.xy.CAN_LAUNCH,
        v = null != p && A?.compositeInstanceId === p,
        C = null != n ? n : l.customId;
    function _(e) {
        y.A.launch({
            applicationId: t.id,
            channelId: e,
            fromLink: !0,
            linkChannelId: i,
            customId: C,
            referrerId: r,
            analyticsLocations: m,
        });
    }
    let j = [];
    (0, b.U4)(t)
        ? j.push({
              label: K.intl.string(K.t.RscU7I),
              trackingArea: X.kY.PLAY,
              onClick() {
                  _(h);
              },
          })
        : (x &&
              j.push({
                  label:
                      null == p ? K.intl.string(K.t.RscU7I) : v ? K.intl.string(K.t.DPfdsq) : K.intl.string(K.t.sqe0hj),
                  trackingArea: X.kY.PLAY,
                  onClick() {
                      _(h);
                  },
                  disabled: v,
              }),
          null != o &&
              c &&
              d &&
              !x &&
              j.push({
                  label: K.intl.string(K.t.JeK1Wg),
                  trackingArea: X.kY.PLAY,
                  onClick() {
                      _(null);
                  },
              }));
    let N = (0, $.F)(t);
    return (0, s.jsx)(B.h, {
        actions: j,
        onClickContent: N,
        header: t.name,
        iconSrc: U.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, s.jsx)("div", { children: l.description }),
        staticBannerSrc: l.getAssetURL(),
        title: l.title,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.CUSTOM_ACTIVITY_LINK,
            referrerId: r,
            activityCustomId: C,
            guildId: M.A.getChannel(a.channel_id)?.guild_id,
            channelId: a.channel_id,
            messageId: a.id,
        },
    });
}
function eu(e) {
    let { application: t, message: n, params: i } = e,
        { referrerId: l = n.author.id, linkId: r, customId: a, channelId: o } = i,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_BOOKMARK),
        { data: c, error: u } = er(t.id, r);
    return (0, E.Z$)(t)
        ? null != r && null == u && null != c
            ? (0, s.jsx)(I.f5, {
                  value: d,
                  children: (0, s.jsx)(ec, {
                      application: t,
                      customId: a,
                      channelId: o,
                      customLink: c,
                      referrerId: l,
                      message: n,
                  }),
              })
            : (0, s.jsx)(I.f5, {
                  value: d,
                  children: (0, s.jsx)(et, {
                      app: t,
                      linkType: Q.J.ACTIVITY,
                      activityCustomId: a,
                      activityReferrerId: l,
                      activityChannelId: o,
                      message: n,
                  }),
              })
        : null;
}
var em = n(424743),
    eh = n(821609),
    eg = n(379257),
    ep = n(306537),
    eA = n(36149);
function ex(e) {
    let { channelId: t, messageId: n } = e,
        i = (0, eA.i2)(),
        l = r.useCallback(() => {
            (eg.A.showAgeVerificationGetStartedModal({ entryPoint: ep.q1.SYSTEM_DM_RETRY_BUTTON }),
                (0, ep.UT)(ep.Im.RETRY, t));
        }, [t]);
    return (0, s.jsx)(eh.$, {
        variant: "primary",
        text: K.intl.string((0, em.FQ)(t, n) ? K.t.DVywUB : K.t["/nicWo"]),
        onClick: l,
        disabled: !i,
    });
}
var ef = n(107766),
    eI = n(780964),
    eE = n(766075);
function ev(e) {
    let { channelId: t } = e,
        n = r.useCallback(() => {
            ((0, ef.nk)() || (0, eE.openUserSettings)(eI.X.FAMILY_CENTER_PANEL), (0, ep.UT)(ep.Im.CONNECT_TO_TEEN, t));
        }, [t]);
    return (0, s.jsx)(eh.$, { variant: "primary", text: K.intl.string(K.t.n8a49k), onClick: n });
}
var eC = n(277861),
    e_ = n(876891);
function ej(e) {
    let { channelId: t } = e,
        n = (0, eA.i2)(),
        i = r.useCallback(() => {
            ((0, eC.Vq)(), (0, ep.UT)(ep.Im.MANUAL_REVIEW, t));
        }, [t]);
    return (0, s.jsx)(eh.$, { variant: "secondary", text: K.intl.string(e_.default.Z61nkt), onClick: i, disabled: !n });
}
var eN = n(284009),
    ey = n.n(eN),
    eT = n(664121),
    eS = n(34188),
    eb = n(408278),
    ek = n(173936),
    eR = n(858899),
    eL = n(939249),
    eM = n(996759),
    eP = n(800342),
    eD = n(163437),
    eO = n(185438),
    eU = n(97352),
    eG = n(652676),
    ew = n(67480),
    eB = n(328968),
    eV = n(174459),
    eH = n(957565),
    eF = n(943775),
    ez = n(997997),
    eY = n(658575),
    eK = n(376374),
    eW = n(435220),
    eJ = n(140046);
let eX = (0, u.UT)([ew.A, eB.A, eU.A], {
        getQueryId: Y.fic.SKU,
        get: (e) => {
            if (null == e) return;
            let t = ew.A.get(e),
                n = eB.A.getForSKU(e);
            if (null == t || null == n) return;
            let i = eU.A.getForSKU(e);
            return { sku: t, storeListing: n, subscriptionPlan: null != i ? i[0] : void 0 };
        },
        load: async (e) => {
            (ey()(null != e, "skuId is null"), await (0, eP.QB)(e));
        },
    }),
    eZ = (0, u.UT)([ew.A], {
        getQueryId: Y.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
        get: (e) => (null == e ? null : (ew.A.getParentSKU(e) ?? null)),
        load: async (e, t) => {
            (ey()(null != e && null != t, "appId is null"), await (0, eP.JI)(t));
        },
    });
function eq(e) {
    let { application: t, message: i } = e,
        l = t.id,
        a = (0, eY.G)(l),
        [o, d, c, m] = (0, u.yK)(
            [eG.A, M.A],
            () => {
                let e = (0, eF.A)(t, 45),
                    n = M.A.getBasicChannel(i.channel_id)?.guild_id;
                return [eG.A.getStoreLayout(l), eG.A.getFetchStatus(l), n, e];
            },
            [t, l, i.channel_id],
        );
    r.useEffect(() => {
        d === eG.N.NONE && (0, eM.V)(l);
    }, [l, d]);
    let h = o.subscriptions.length,
        p = o.otps.length,
        A = r.useMemo(
            () =>
                h > 0 && p > 0
                    ? K.intl.formatToPlainString(K.t["jA648+"], { subCount: h, itemCount: p })
                    : h > 0
                      ? K.intl.formatToPlainString(K.t.GSfibA, { count: h })
                      : p > 0
                        ? K.intl.formatToPlainString(K.t.j7Go5A, { count: p })
                        : K.intl.string(K.t.rMA98g),
            [p, h],
        );
    if (!a) return null;
    function x() {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (t) =>
                (0, s.jsx)(e, { transitionState: t.transitionState, onClose: t.onClose, appId: l, guildId: c });
        });
    }
    return (0, s.jsx)(eQ, {
        appName: t.name,
        title: K.intl.formatToPlainString(K.t.XDRjs5, { appName: t.name }),
        description: A,
        link: `${location.protocol}//${location.host}${Y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eW.GlobalDiscoveryAppsSections.STORE)}`,
        onLinkCopy: function () {
            (0, ez.K)(l, ez.C.STORE_EMBED);
        },
        iconSrc: m,
        onIconClick: function () {
            (x(),
                eV.default.track(Y.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: l,
                    area: "app_icon",
                }));
        },
        children: (0, s.jsx)("div", {
            className: eJ.mZ,
            children: (0, s.jsx)(eh.$, {
                onClick: function () {
                    (x(),
                        eV.default.track(Y.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: l,
                            area: "open_store_button",
                        }));
                },
                text: K.intl.string(K.t.kRvlKJ),
            }),
        }),
    });
}
function e$(e) {
    let { application: t, skuId: i, message: l } = e,
        {
            parentSku: a,
            sku: o,
            subscriptionPlan: d,
            storeListing: c,
        } = (function (e, t) {
            let { data: n } = eX(e),
                i = n?.sku,
                l = n?.subscriptionPlan,
                s = n?.storeListing,
                { data: r } = eZ(e, i?.application?.id ?? i?.applicationId);
            return { parentSku: r, sku: i?.applicationId === t ? i : null, storeListing: s, subscriptionPlan: l };
        })(i, t.id),
        m = (0, u.bG)([M.A], () => M.A.getBasicChannel(l.channel_id)?.guild_id, [l]),
        h = r.useMemo(() => (0, eF.A)(t, 45), [t]),
        p = (0, eY.G)(t.id),
        { openModal: A, subscriptionPurchaseButtonState: x } = (0, eO.A)({ skuId: i, initialSubscribeForGuild: m });
    if (!p || null == o) return null;
    let f = o.type === Y.Puh.SUBSCRIPTION,
        I = !!f && (0, eD.bg)(o.flags);
    function E() {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (n) =>
                (0, s.jsx)(e, { transitionState: n.transitionState, onClose: n.onClose, appId: t.id, guildId: m });
        });
    }
    let v = () => {
            (0, g.openModalLazy)(async () => {
                let e = f ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
                    l = f ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
                return (n) => {
                    function r() {
                        (n.onClose(), E());
                    }
                    return null != e && null != a
                        ? (0, s.jsx)(e, {
                              transitionState: n.transitionState,
                              appId: t.id,
                              skuId: o.id,
                              guildId: m,
                              subscriptionType: I ? "user" : "guild",
                              onClose: n.onClose,
                              onHeaderTitleClick: r,
                          })
                        : null != l
                          ? (0, s.jsx)(l, {
                                transitionState: n.transitionState,
                                appId: t.id,
                                skuId: i,
                                onClose: n.onClose,
                                onHeaderTitleClick: r,
                            })
                          : null;
                };
            });
        },
        C = f
            ? I
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(N.UserIcon, { size: "custom", width: 12, height: 12 }),
                          " ",
                          K.intl.string(K.t.wnifjC),
                      ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(eT.R, { size: "custom", width: 12, height: 12 }),
                          " ",
                          K.intl.string(K.t.NRC3ar),
                      ],
                  })
            : c?.description?.trim();
    function _() {
        null != o &&
            eV.default.track(Y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: t.id,
                sku_id: o.id,
                area: "purchase_button",
            });
    }
    return (
        "" === C && (C = void 0),
        (0, s.jsx)(eQ, {
            appName: t.name,
            title: o.name,
            description: C,
            link: `${location.protocol}//${location.host}${Y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.id, eW.GlobalDiscoveryAppsSections.STORE)}`,
            onLinkCopy: function () {
                (0, ez.K)(t.id, ez.C.SKU_EMBED, i);
            },
            iconSrc: h,
            onIconClick: function () {
                null != o &&
                    (E(),
                    eV.default.track(Y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: t.id,
                        sku_id: o.id,
                        area: "app_icon",
                    }));
            },
            children: (0, s.jsxs)("div", {
                className: eJ.w,
                children: [
                    (0, s.jsx)(eh.$, {
                        variant: "secondary",
                        onClick: function () {
                            null != o &&
                                (v(),
                                eV.default.track(Y.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: t.id,
                                    sku_id: o.id,
                                    area: "view_details",
                                }));
                        },
                        text: K.intl.string(K.t.DXYfjO),
                    }),
                    f
                        ? null != d
                            ? (0, s.jsx)(eK.rc, {
                                  onClick: A,
                                  appId: t.id,
                                  subscriptionType: I ? "user" : "guild",
                                  skuId: o.id,
                                  icon: eS.U,
                                  onHasClicked: _,
                                  subscriptionPlan: d,
                                  state: x,
                              })
                            : (0, s.jsx)(eh.$, { variant: "primary", text: K.intl.string(K.t.uuzaAK), onClick: v })
                        : (0, s.jsx)(eK.$P, { appId: t.id, sku: o, icon: eS.U, onHasClicked: _ }),
                ],
            }),
        })
    );
}
function eQ(e) {
    let { appName: t, title: n, description: i, link: l, iconSrc: r, onIconClick: a, onLinkCopy: o, children: d } = e;
    return (0, s.jsxs)("div", {
        className: eJ.iE,
        children: [
            (0, s.jsxs)("div", {
                className: eJ.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: eJ.qd,
                        children: [
                            (0, s.jsx)(eS.U, { size: "xxs" }),
                            (0, s.jsx)(A.E, { variant: "eyebrow", color: "text-muted", children: t }),
                        ],
                    }),
                    eH.p5 &&
                        (0, s.jsx)(eb.K, {
                            "aria-label": K.intl.string(K.t.WqhZss),
                            icon: () => (0, s.jsx)(ek.LinkIcon, { size: "xs" }),
                            size: "sm",
                            onClick: () => {
                                (0, eH.C)(l, () => {
                                    ((0, eR.P0)({ text: K.intl.string(K.t["L/PwZf"]), variant: "success" }), o());
                                });
                            },
                            variant: "icon-only",
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eJ.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: eJ.oB,
                        children: [
                            null != r &&
                                (0, s.jsx)(eL.D, {
                                    onClick: a,
                                    children: (0, s.jsx)("img", { src: r.href, alt: "", className: eJ.Z2 }),
                                }),
                            (0, s.jsxs)("div", {
                                className: eJ.Tf,
                                style: null == i ? { justifyContent: "space-evenly" } : void 0,
                                children: [
                                    (0, s.jsx)(A.E, { variant: "heading-md/semibold", tag: "div", children: n }),
                                    null != i &&
                                        (0, s.jsx)(A.E, {
                                            variant: "heading-md/medium",
                                            color: "text-muted",
                                            tag: "div",
                                            className: eJ.h_,
                                            children: i,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    d,
                ],
            }),
        ],
    });
}
var e0 = n(401374),
    e1 = n(562708),
    e2 = n(139286);
function e3(e) {
    let { application: t, message: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(f.A.APP_OAUTH2_LINK_EMBED),
        l = r.useCallback(() => {
            (0, e2.x)({
                type: e1.ImpressionTypes.VIEW,
                name: e1.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: t.id },
            });
        }, [t.id]);
    return (0, G.Ie)({
        customInstallUrl: t.customInstallUrl,
        installParams: t.installParams,
        integrationTypesConfig: t.integrationTypesConfig,
    })
        ? (0, s.jsx)(I.f5, {
              value: i,
              children: (0, s.jsx)(et, { app: t, linkType: Q.J.OAUTH, onView: l, message: n }),
          })
        : null;
}
var e5 = n(778492),
    e4 = n(297264),
    e9 = n(285796),
    e6 = n(857182),
    e8 = n(506774),
    e7 = n(73153),
    te = n(576705),
    tt = n(812930);
let tn = "ChannelFollowingBumpChannels",
    ti = new Set(),
    tl = new Set();
class ts extends u.Ay.Store {
    static displayName = "ChannelFollowingPublishBumpStore";
    initialize() {
        (this.waitFor(L.default, M.A, te.A, O.default), (ti = new Set(e8.w.get(tn))));
    }
    shouldShowBump(e) {
        return tl.has(e);
    }
}
let tr = new ts(e7.h, {
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i } = e;
        if (i || ti.has(t)) return !1;
        let l = M.A.getChannel(t),
            s = O.default.getCurrentUser(),
            r = null != s && n.author?.id === s.id;
        if (
            !(
                null != l &&
                l.type === Y.rbe.GUILD_ANNOUNCEMENT &&
                (0, tt.A)(n) &&
                te.A.can(Y.xBc.SEND_MESSAGES, l) &&
                (r || te.A.can(Y.xBc.MANAGE_MESSAGES, l)) &&
                !c.Lt(Number(n.flags), Y.pr7.CROSSPOSTED)
            )
        )
            return !1;
        tl.add(n.id);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        tl.has(t.id) && c.Lt(Number(t.flags), Y.pr7.CROSSPOSTED) && tl.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        tl.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let { messageId: t } = e;
        tl.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let { channelId: t } = e;
        (ti.add(t), e8.w.set(tn, ti), tl.clear());
    },
});
var ta = n(419056),
    to = n(732929);
let td = function (e) {
    let { channelId: t, messageId: n } = e,
        i = (0, u.bG)([tr], () => tr.shouldShowBump(n), [n]),
        l = r.useCallback(() => {
            (e6.A.dismissPublishBump(n), (0, ta.A)(t, n));
        }, [t, n]),
        a = r.useCallback(() => {
            e6.A.dismissPublishBump(n);
        }, [n]),
        o = r.useCallback(() => {
            e6.A.permanentlyHidePublishBump(t);
        }, [t]);
    return i
        ? (0, s.jsxs)("div", {
              className: to.kL,
              children: [
                  (0, s.jsxs)("div", {
                      className: to.mp,
                      children: [
                          (0, s.jsx)(e5.k, { size: "xs", color: "currentColor", className: to.Kk }),
                          (0, s.jsx)(e4.D, {
                              variant: "heading-sm/normal",
                              className: to.dS,
                              children: K.intl.string(K.t.hasZoU),
                          }),
                          (0, s.jsx)(A.E, {
                              color: "text-brand",
                              className: to.mk,
                              variant: "text-sm/normal",
                              children: (0, s.jsx)(eL.D, { onClick: l, children: K.intl.string(K.t.MFGE51) }),
                          }),
                          (0, s.jsx)(eL.D, {
                              onClick: a,
                              children: (0, s.jsx)(e9.a, { size: "xs", color: "currentColor", className: to.ut }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(A.E, {
                      color: "text-muted",
                      className: to.qx,
                      variant: "text-sm/normal",
                      children: (0, s.jsx)(eL.D, { onClick: o, children: K.intl.string(K.t.efSkDm) }),
                  }),
              ],
          })
        : null;
};
var tc = n(161573),
    tu = n(435558),
    tm = n.n(tu),
    th = n(239947),
    tg = n(403581),
    tp = n(97808),
    tA = n(778712),
    tx = n(520117),
    tf = n(793943),
    tI = n(763754),
    tE = n(973654),
    tv = n(467135),
    tC = n(644235),
    t_ = n(698387),
    tj = n(72191),
    tN = n(988986);
function ty(e) {
    return e.map((e) => `#${e}`);
}
function tT(e) {
    let { message: t } = e,
        { sharedClientTheme: n } = t,
        { setAll: i } = (0, tv.ko)();
    return void 0 === n
        ? null
        : (0, s.jsxs)("div", {
              className: tN.kL,
              children: [
                  (0, s.jsx)(tS, { message: t }),
                  (0, s.jsx)(eh.$, {
                      text: K.intl.string(K.t.SKNnqq),
                      fullWidth: !0,
                      variant: "primary",
                      onClick: () => {
                          (eV.default.track(Y.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}),
                              (0, tf.nf)(tf.HP.CUSTOM_THEME, { from: tf.xv.SHARE_MESSAGE }),
                              i({
                                  colors: ty(n.colors),
                                  chassisMixAmount: n.base_mix,
                                  gradientAngle: n.gradient_angle,
                              }),
                              (0, tE.GQ)((0, tC.PC)(n.base_theme)));
                      },
                  }),
              ],
          });
}
function tS(e) {
    var t, n, i, l;
    let { message: a } = e,
        { sharedClientTheme: o } = a,
        d = (0, tI.Ay)(a),
        c = r.useMemo(
            () =>
                (0, tu.once)(() => {
                    (0, e2.x)({ type: e1.ImpressionTypes.VIEW, name: th.IJ.CUSTOM_THEME_SHARE, properties: {} });
                }),
            [],
        ),
        u = (0, tx.A)({
            onVisible: () => {
                c();
            },
            threshold: 1,
            minTimeVisibleMs: 200,
        }),
        m = r.useMemo(() => (void 0 === o ? "" : (0, t_.V9)(ty(o.colors), o.gradient_angle ?? 0)), [o]);
    return void 0 === o
        ? null
        : (0, s.jsxs)("div", {
              className: tN.pS,
              ref: u,
              children: [
                  (0, s.jsx)("div", { className: tN.sl, style: { background: `${m}` } }),
                  (0, s.jsxs)("div", {
                      className: tN.Ix,
                      children: [
                          (0, s.jsxs)(e4.D, {
                              variant: "heading-md/semibold",
                              className: tN.qP,
                              children: [K.intl.string(tj.default.KSBBpC), " ", (0, s.jsx)(tg.t, {})],
                          }),
                          (0, s.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              className: tN.Tb,
                              children:
                                  ((t = `${K.intl.format(tj.default.fQPSEf, { username: "__USERNAME__" })}`),
                                  (n = a.author),
                                  (i = d.nick),
                                  (l = d.guildId),
                                  t
                                      .split(" ")
                                      .map((e, t) =>
                                          "__USERNAME__" !== e
                                              ? (0, s.jsxs)(r.Fragment, { children: [e, " "] }, t)
                                              : (0, s.jsxs)(
                                                    "span",
                                                    {
                                                        className: tN.H,
                                                        children: [
                                                            (0, s.jsx)(tp.eu, {
                                                                "aria-label": i,
                                                                src: n.getAvatarURL(l, 20),
                                                                size: tA._3.SIZE_20,
                                                            }),
                                                            " ",
                                                            i,
                                                            " ",
                                                        ],
                                                    },
                                                    t,
                                                ),
                                      )),
                          }),
                      ],
                  }),
              ],
          });
}
var tb = n(76349),
    tk = n(167189),
    tR = n(758836);
let tL = new Set(Object.values(tR.G2).filter((e) => e !== tR.G2.COLLECTION_INDEX));
var tM = n(132500),
    tP = n(172218),
    tD = n(612324),
    tO = n(575593),
    tU = n(318254),
    tG = n(890856),
    tw = n(866665),
    tB = n(825484),
    tV = n(289873),
    tH = n(444927),
    tF = n(713517),
    tz = n(427209),
    tY = n(44120),
    tK = n(821925),
    tW = n(309954),
    tJ = n(652165),
    tX = n(24482),
    tZ = n(580630),
    tq = n(815996),
    t$ = n(440938),
    tQ = n(4227),
    t0 = n(298072),
    t1 = n(993408),
    t2 = n(682301),
    t3 = n(841702),
    t5 = n(466459),
    t4 = n(777829),
    t9 = n(859587),
    t6 = n(918838),
    t8 = n(623373),
    t7 = n(536572),
    ne = n(156248),
    nt = n(38405);
class nn extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nt.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
var ni = n(878112),
    nl = n(722258),
    ns = n(268959),
    nr = n(387945),
    na = n(618317),
    no = n(140877),
    nd = n(561769),
    nc = n(661847),
    nu = n(753704),
    nm = n(540737),
    nh = n(927813);
let ng = 10 * nh.A.Millis.MINUTE,
    np = new (class {
        capacity;
        refillTokensPerMs;
        now;
        tokens;
        lastRefillAt;
        constructor({ capacity: e, refillTokensPerMs: t, now: n = Date.now }) {
            ((this.capacity = e),
                (this.refillTokensPerMs = t),
                (this.now = n),
                (this.tokens = e),
                (this.lastRefillAt = n()));
        }
        refill() {
            let e = this.now(),
                t = e - this.lastRefillAt;
            t <= 0 ||
                ((this.tokens = Math.min(this.capacity, this.tokens + t * this.refillTokensPerMs)),
                (this.lastRefillAt = e));
        }
        tryTake() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return (this.refill(), this.tokens >= e && ((this.tokens -= e), !0));
        }
        getMsUntilAvailable() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return (this.refill(), this.tokens >= e) ? 0 : Math.ceil((e - this.tokens) / this.refillTokensPerMs);
        }
    })({ capacity: 10, refillTokensPerMs: 5e-4 }),
    nA = new Set(),
    nx = new Map(),
    nf = null;
function nI(e) {
    let t = nx.get(e);
    return null != t && Date.now() - t < ng;
}
var nE = n(347722),
    nv = n(935094),
    nC = n(57020),
    n_ = n(61750),
    nj = n(521e3),
    nN = n(202541),
    ny = n(278324);
function nT() {
    return ((0, t3.b5)(), null);
}
function nS(e) {
    let { disableFetch: t } = e;
    return ((0, tW.W)({ disableFetch: t }), null);
}
function nb(e) {
    let { product: t, hasShopDiscount: n, analyticsLocations: i } = e,
        { shouldCheckoutWithOrbs: l, checkoutEligiblePrices: a } = (0, nC.F)({ product: t, hasShopDiscount: n }),
        o = a[0],
        d = t.skuId,
        c = r.useCallback(() => {
            l
                ? (0, tJ.B4)({
                      skuId: d,
                      analyticsLocations: i,
                      onComplete: (e) => {
                          ((0, tq.gB)(),
                              (0, n_.A)({
                                  product: t,
                                  analyticsLocations: i,
                                  itemConsumed: e?.entitlements?.[0]?.consumed,
                                  purchaseType: tR.gs.ORB,
                              }));
                      },
                  })
                : (0, tY.A)({
                      skuId: d,
                      analyticsLocations: i,
                      onClose: (e) => {
                          e && (0, tq.gB)();
                      },
                  });
        }, [t, d, l, i]);
    if (null == o) return null;
    let u = l
        ? K.intl.format(K.t.JC15qj, {
              orbPrice: o.amount,
              orbIconHook: () => (0, s.jsx)(tU.C, { className: ny.fN, size: "sm", color: "currentColor" }),
          })
        : K.intl.formatToPlainString(K.t["cNSL/j"], { price: (0, tZ.$g)(o.amount, o.currency) });
    return (0, s.jsx)(eh.$, { variant: "primary", onClick: c, text: u, fullWidth: !0 });
}
function nk(e) {
    let { product: t, skuId: n, tab: i, channel: l } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        d = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
        c = l.isDM() || l.isGroupDM(),
        m = r.useRef(null),
        { isHoveringOrFocusing: h } = (0, tF.A)(m),
        g = r.useRef(null),
        p = (0, t6.U)(t),
        A = (0, tD.A)(g, p);
    (0, t9.x)(h, t);
    let { previewingVariantIndex: x, handleEntering: f, handleLeaving: E } = (0, nv.f)(t),
        v = r.useRef(!1);
    r.useEffect(() => {
        if (v.current || !(0, t8.B1)(t)) return;
        let e = t.variants.findIndex((e) => e.skuId === n);
        (e > -1 && (0, t0.n)(t, e), (v.current = !0));
    }, [t, n]);
    let C = (0, t0.Q)(t),
        _ = (0, t8.B1)(t) ? (t.variants[C] ?? t) : t,
        j = _.skuId,
        { isPurchased: N } = (0, t5.h)(_),
        y = (0, u.bG)([tQ.A], () => tQ.A.hasPreviouslyFetched || null != tQ.A.fetchError),
        T = !c || y,
        S = c && N,
        b = (0, u.bG)([O.default], () => {
            if (!l.isDM() || null == l.recipients) return;
            let e = O.default.getCurrentUser()?.id,
                t = l.recipients.find((t) => t !== e) ?? l.recipients[0];
            return null != t ? (O.default.getUser(t) ?? void 0) : void 0;
        }),
        k = (0, nE.X)(_),
        R = (0, t4.f)({ product: t, analyticsLocations: a }),
        L = (0, ne.G)({
            skuId: j,
            product: _,
            productName: (0, t7.VG)(_),
            tab: i,
            source: "collectibles-shop-embed",
            onTrackClick: R,
        }),
        M = r.useCallback(
            (e) => {
                (e.stopPropagation(), L());
            },
            [L],
        ),
        P = r.useCallback(() => {
            (0, nl.B)({ skuId: j, tab: i, analyticsLocations: a });
        }, [j, i, a]),
        D = r.useMemo(() => ({ maxVariantsToShow: 4, onClick: P }), [P]),
        U = r.useMemo(() => ({ productOverride: t, flattenProductVariants: !0 }), [t]),
        G = null != d && tX.Ay.canUseShopDiscounts(d),
        w = T && !S && !(0, t1.G0)(_),
        B = (0, s.jsx)(eh.$, { variant: "secondary", onClick: P, text: K.intl.string(K.t.KLBTgF), fullWidth: !0 }),
        V = w ? (0, s.jsx)(nb, { product: _, hasShopDiscount: G, analyticsLocations: a }) : null,
        H = k
            ? (0, s.jsx)(ni.A, {
                  primary: !0,
                  product: t,
                  selectedVariantIndex: C,
                  giftRecipient: b,
                  giftingOrigin: nN.vQ.SHOP_PAGE,
              })
            : null;
    return (0, s.jsxs)("div", {
        ref: m,
        className: ny.kL,
        children: [
            c && (0, s.jsx)(nT, {}),
            (0, s.jsx)(nS, { disableFetch: !(0, t8.Vx)(_) }),
            (0, s.jsxs)(nd.v3.Provider, {
                value: U,
                children: [
                    (0, s.jsx)(nj.vf.Provider, {
                        value: (0, nj.$c)(t.skuId) ? g : null,
                        children: (0, s.jsxs)(tG.s, {
                            ref: A,
                            onClick: P,
                            "aria-label": (0, t7.s7)(_),
                            className: ny.xX,
                            children: [
                                t.type === tO.R.BUNDLE &&
                                    t.previewAssets?.bgStatic != null &&
                                    (0, s.jsx)("img", { className: ny.fB, src: t.previewAssets.bgStatic, alt: "" }),
                                (0, s.jsx)("div", {
                                    className: ny.VH,
                                    children: (0, s.jsx)(na.A, { skuId: n, isCardHovered: h, overrideVariantIndex: x }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: ny.GJ,
                                    children: [
                                        (0, s.jsx)(ns.A, { skuId: n }),
                                        (0, s.jsxs)("div", {
                                            className: ny.gj,
                                            children: [
                                                (0, s.jsx)(tw.m, {
                                                    text: K.intl.string(K.t.RDE0Sc),
                                                    ariaHidden: !0,
                                                    children: (0, s.jsx)(eL.D, {
                                                        "aria-label": K.intl.string(K.t.Ej3B3Y),
                                                        onClick: M,
                                                        className: o()(ny.VD, { [ny.Hk]: !h }),
                                                        children: (0, s.jsx)(tz.A, {
                                                            size: "refresh_sm",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                                (0, s.jsx)(nu.R, {
                                                    product: t,
                                                    selectedVariantIndex: C,
                                                    isCardHovered: h,
                                                    onTrackClick: R,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsxs)("div", {
                        className: ny.zH,
                        children: [
                            (0, s.jsxs)("div", {
                                className: ny.pq,
                                children: [
                                    (0, s.jsx)(nr.A, { skuId: n }),
                                    (0, s.jsxs)("div", {
                                        className: ny.y3,
                                        children: [
                                            (0, s.jsx)(no.A, { skuId: n }),
                                            (0, s.jsx)(nc.A, {
                                                skuId: n,
                                                isCollapsed: !h,
                                                onVariantEnter: f,
                                                onVariantExit: E,
                                                overflowProps: D,
                                                onTrackClick: R,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(tB.e, { wrap: !1, fullWidth: !0, children: [B, V, H] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let nR = { rootMargin: "200px" };
function nL(e) {
    let {
            product: t,
            category: n,
            state: i,
        } = (0, t2.IK)(e.skuId, { needsCategory: !0, seedCategoryStore: !0, shouldFetchProduct: !1 }),
        l = (0, u.bG)([tK.A], () => tK.A.getFetchStateForSku(e.skuId)),
        a = (0, tH.A)(() => ({ cardId: (0, tM.A)() })),
        [o, d] = r.useState(!1),
        c = (0, tP.B)(
            r.useCallback((e) => {
                e.isIntersecting && d(!0);
            }, []),
            nR,
            "loading" === i && !o,
        );
    return (r.useEffect(() => {
        var t;
        o &&
            "loading" === i &&
            !("" === (t = e.skuId) || nA.has(t) || nI(t)) &&
            !(nA.size >= 50) &&
            (0, nm.jn)(t) &&
            (nA.add(t),
            (function e(t) {
                null == nf &&
                    (nf = setTimeout(() => {
                        ((nf = null),
                            (function () {
                                for (let e of [...nA]) (nI(e) || !(0, nm.jn)(e)) && nA.delete(e);
                                if (0 === nA.size) return;
                                let t = [];
                                for (let e of nA) {
                                    if (t.length >= 50 || !np.tryTake()) break;
                                    (t.push(e),
                                        nA.delete(e),
                                        (function (e) {
                                            if ((nx.set(e, Date.now()), nx.size > 2e3)) {
                                                let e = nx.keys().next().value;
                                                null != e && nx.delete(e);
                                            }
                                        })(e));
                                }
                                (t.length > 0 && (0, nm.tu)({ skuIds: t }),
                                    nA.size > 0 && e(Math.max(np.getMsUntilAvailable(), 300)));
                            })());
                    }, t));
            })(300));
    }, [o, i, e.skuId]),
    "loading" === i)
        ? null == t && "loading" !== l && nI(e.skuId)
            ? null
            : (0, s.jsx)("div", {
                  ref: c,
                  className: ny.kL,
                  children: (0, s.jsx)("div", { className: ny.dc, children: (0, s.jsx)(tV.y, {}) }),
              })
        : "ready" === i &&
            null != t &&
            null != n &&
            n.products.some((t) => t.skuId === e.skuId || (t.variants ?? []).some((t) => t.skuId === e.skuId))
          ? (0, s.jsx)(t$.R9, { newValue: a, children: (0, s.jsx)(nk, { ...e, product: t }) })
          : null;
}
function nM(e) {
    return (0, s.jsx)(nn, { children: (0, s.jsx)(nL, { ...e }) });
}
var nP = n(661531),
    nD = n(696986),
    nO = n(666860),
    nU = n(548118),
    nG = n(250627),
    nw = n(741231),
    nB = n(749314),
    nV = n(71393),
    nH = n(722888),
    nF = n(43136),
    nz = n(575926),
    nY = n(775429);
function nK(e) {
    let { guildId: t } = e,
        n = (0, u.bG)([nV.A], () => nV.A.getGuild(t)),
        { loading: i, subscriptionsSettings: l } = (0, nH.G)(t),
        { listingsLoaded: a } = (0, nG.bb)(t),
        d = (0, nG.fZ)(t, { publishedOnly: !0 }),
        c = r.useCallback(async () => {
            (eV.default.track(Y.HAw.GUILD_SHOP_EMBED_CLICKED, { ...(0, nO.H$)(t) }),
                await (0, nw.A)(Y.BVt.SERVER_SHOP(t)));
        }, [t]);
    (0, e2.A)(
        { type: e1.ImpressionTypes.VIEW, name: e1.ImpressionNames.GUILD_SHOP_EMBED },
        { disableTrack: null == n },
    );
    let m = d.length > 0 ? new Date(Math.min(...d.map((e) => Date.parse(e.published_at)))) : void 0;
    return i || !a
        ? (0, s.jsx)("div", { className: o()(nY.lm, nY.dc), children: (0, s.jsx)(tV.y, {}) })
        : null == n || null == l
          ? null
          : (0, s.jsxs)("div", {
                className: nY.lm,
                children: [
                    (0, s.jsx)(nF.C, { coverImageAsset: l.cover_image_asset ?? null }),
                    (0, s.jsx)(nD.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nY.qs,
                        children: [
                            (0, s.jsx)(nz.h, {
                                height: "16px",
                                width: "16px",
                                color: nP.A.colors.INTERACTIVE_TEXT_DEFAULT.css,
                            }),
                            (0, s.jsx)(e4.D, {
                                variant: "heading-sm/semibold",
                                color: "interactive-text-default",
                                className: nY.Nl,
                                children: K.intl.string(K.t.al5EXL),
                            }),
                        ],
                    }),
                    (0, s.jsx)(nD.h, { size: 16 }),
                    (0, s.jsx)(e4.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: K.intl.format(K.t.NZeik9, { guildName: n.name }),
                    }),
                    (0, s.jsx)(nD.h, { size: 4 }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 2,
                        children: l.description,
                    }),
                    (0, s.jsx)(nD.h, { size: 16 }),
                    (0, s.jsx)(nB.A, {}),
                    (0, s.jsx)(nD.h, { size: 16 }),
                    (0, s.jsxs)("div", {
                        className: nY.kS,
                        children: [
                            (0, s.jsx)(nU.Ay, { guild: n }),
                            (0, s.jsxs)("ul", {
                                className: nY.q6,
                                children: [
                                    (0, s.jsx)("li", {
                                        children: (0, s.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: K.intl.format(K.t.tKZNlb, { listingCount: d.length }),
                                        }),
                                    }),
                                    null != m &&
                                        (0, s.jsx)("li", {
                                            children: (0, s.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: K.intl.format(K.t["kXr8+b"], {
                                                    createdYear: m.getFullYear(),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: nY.$h,
                                children: (0, s.jsx)(eh.$, { onClick: c, icon: nz.A, text: K.intl.string(K.t.jXx1CC) }),
                            }),
                        ],
                    }),
                ],
            });
}
var nW = n(390248),
    nJ = n(282108),
    nX = n(33358),
    nZ = n(885574),
    nq = n(874840);
function n$(e) {
    let { message: t } = e;
    return (0, s.jsxs)(eL.D, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("249629"), n.e("486381"), n.e("635270")]).then(
                    n.bind(n, 743461),
                );
                return (n) => (0, s.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: nq.L,
        children: [
            (0, s.jsx)(nZ.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            (0, s.jsx)(A.E, { variant: "text-xs/normal", className: nq.m, children: K.intl.string(K.t["2aXnfa"]) }),
        ],
    });
}
var nQ = n(974875),
    n0 = n(900019);
function n1(e) {
    let { messageId: t, channelId: n } = e,
        i = (0, u.bG)([n0.A], () => n0.A.canSubmitFpReport(t)),
        l = r.useCallback(() => {
            (0, nQ.Q)(n, t);
        }, [n, t]);
    return (0, s.jsx)(eh.$, { variant: "secondary", text: K.intl.string(K.t["4q1Elf"]), onClick: l, disabled: !i });
}
var n2 = n(320448),
    n3 = n(958340),
    n5 = n(384231),
    n4 = n(959698),
    n9 = n(438729),
    n6 = n(470964),
    n8 = n(886737),
    n7 = n(253932),
    ie = n(540999),
    it = n(47167),
    ii = n(58703),
    il = n(935208),
    is = n(427930);
function ir(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: U.Ay.getGuildIconURL({ id: e.id, size: 16, icon: e.icon, canAnimate: !1 }),
        timestampLabel: t,
        accessibilityLabel: K.intl.formatToPlainString(K.t["+l04BN"], { origin: e.name, timestamp: t }),
    };
}
class ia {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        ((this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P.A,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : te.A,
            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : nV.A,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : n3.A,
            { snapshotIndex: r, parentMessage: a, messageSnapshot: o } = this,
            d = (0, is.A)(a) ? a.messageReference?.message_id : void 0,
            c = (0, ii.Fe)(null != d ? new Date(il.default.extractTimestamp(d)) : o.message.timestamp),
            u = e.getChannel(this.parentMessage.channel_id);
        if (null != u && u.guild_id === a.messageReference?.guild_id) {
            var m;
            let s = e.getChannel(a.messageReference?.channel_id);
            if (null == s) {
                let e = l.getGuild(u.guild_id);
                return null == e ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ir(e, c) };
            }
            return i.can(s.accessPermissions, s)
                ? {
                      snapshotIndex: r,
                      footerInfo: {
                          originLabel: (m = (0, it.m1)(s, t, n, !0)),
                          timestampLabel: c,
                          accessibilityLabel: K.intl.formatToPlainString(K.t["+l04BN"], { origin: m, timestamp: c }),
                      },
                  }
                : { snapshotIndex: r };
        }
        let h = a.messageReference?.guild_id;
        if (null == h) return { snapshotIndex: r };
        let g = l.getGuild(h) ?? s.getGuild(h);
        return null == g ? { snapshotIndex: r } : { snapshotIndex: r, footerInfo: ir(g, c) };
    }
}
var io = n(66834),
    id = n(449054);
async function ic(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = M.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == nV.A.getGuild(t))
        try {
            (await (0, id.Z2)(t, { object: Y.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, io.k)(t),
                (l = M.A.getChannel(n)));
        } catch {}
    eV.default.track(Y.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: M.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let r = s ? n : void 0;
    (0, nw.A)(Y.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var iu = n(387408),
    im = n(352106);
function ih() {
    return (0, s.jsxs)("div", {
        className: im.N1,
        children: [
            (0, s.jsx)(tz.A, { size: "xs", className: im.nr, color: nP.A.colors.TEXT_MUTED }),
            (0, s.jsx)(A.E, {
                className: im.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: K.intl.string(K.t.ToyvLk),
            }),
        ],
    });
}
function ig(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new ia(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [M.A, O.default, P.A, te.A, nV.A, n3.A],
            () => l.getForwardInfo(M.A, O.default, P.A, te.A, nV.A, n3.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            ic(t);
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eL.D, {
              className: im.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: im.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: im.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(n2._, { size: "xxs", color: nP.A.colors.TEXT_MUTED }),
              ],
          });
}
function ip(e) {
    let {
            message: t,
            renderAccessories: n,
            snapshot: i,
            index: l,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: o,
        } = e,
        d = r.useMemo(() => (0, iu.A)(t, i), [t, i]),
        c = n7.hD.useSetting(),
        m = n7.rs.useSetting(),
        h = (0, u.bG)([ie.A], () => ie.A.isDeveloper),
        g = (0, n4.U)(),
        p = (0, n5.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: x,
            hasBailedAst: f,
        } = (0, n6.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
            postProcessor: g ? n8.A : void 0,
        }),
        I = (0, u.bG)([M.A], () => M.A.getChannel(t.channel_id)),
        E = n7.hH.useSetting();
    return null == I
        ? null
        : (0, s.jsxs)(
              "div",
              {
                  className: im.kL,
                  children: [
                      (0, s.jsx)("div", { className: im.hD }),
                      (0, s.jsxs)("div", {
                          className: im.Qs,
                          children: [
                              (0, s.jsx)(ih, {}),
                              (0, s.jsx)(n9.Ay, { message: d, content: A, compact: E }),
                              n({
                                  channelMessageProps: { message: d, channel: I, compact: E },
                                  hasSpoilerEmbeds: x,
                                  hasBailedAst: f,
                                  handleContextMenu: o,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                                  disableComponentInteractivity: a,
                              }),
                              !g && (0, s.jsx)(ig, { message: t, snapshot: i, index: l }),
                          ],
                      }),
                  ],
              },
              l,
          );
}
function iA(e) {
    let { message: t, renderAccessories: n, disableComponentInteractivity: i, onMediaItemContextMenu: l } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, r) =>
            (0, s.jsx)(
                ip,
                {
                    message: t,
                    snapshot: e,
                    index: r,
                    renderAccessories: n,
                    disableComponentInteractivity: i,
                    onMediaItemContextMenu: l,
                },
                r,
            ),
        ),
    });
}
var ix = n(109112),
    iI = n(62010),
    iE = n(369606),
    iv = n(980822),
    iC = n(409626),
    i_ = n(49491),
    ij = n(692969),
    iN = n(575568);
function iy(e) {
    let { gameId: t, sourceUserId: n } = e,
        {
            game: i,
            iconUrl: l,
            bannerUrl: r,
            openGameProfile: a,
            shouldRender: o,
        } = (function (e) {
            let { gameId: t, sourceUserId: n } = e,
                { gameId: i, gameRecord: l, isLoading: s } = (0, iv.A)({ gameId: t }),
                r = (0, ij.A)({ gameId: t, source: iC.GameProfileSources.GameProfileEmbed, sourceUserId: n }),
                a = (0, i_.A)(l),
                o = null != l && null != r && !s && !a,
                d = l?.getIconURL(80) ?? null,
                c = l?.getBannerURL(300) ?? l?.getScreenshotURL(0, 300) ?? null;
            return {
                game: l ?? null,
                resolvedGameId: i,
                iconUrl: d,
                bannerUrl: c,
                openGameProfile: r,
                shouldRender: o,
            };
        })({ gameId: t, sourceUserId: n });
    return o && null != i && null != a
        ? (0, s.jsxs)(tG.s, {
              className: iN.E6,
              onClick: a,
              "aria-label": K.intl.formatToPlainString(K.t["8QLQB+"], { gameName: i.name }),
              children: [
                  (0, s.jsxs)("div", {
                      "aria-hidden": !0,
                      className: iN.yl,
                      children: [
                          null != r &&
                              (0, s.jsx)("div", { className: iN.Tp, style: { backgroundImage: `url("${r}")` } }),
                          (0, s.jsx)("div", { className: iN.N4 }),
                      ],
                  }),
                  (0, s.jsxs)("div", {
                      className: iN.rf,
                      children: [
                          null != l
                              ? (0, s.jsx)("img", { src: l, alt: "", className: iN.Kk, draggable: !1 })
                              : (0, s.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: iN.EU,
                                    children: (0, s.jsx)(ix._, { size: "lg", color: "currentColor" }),
                                }),
                          (0, s.jsxs)("div", {
                              className: iN.Qs,
                              children: [
                                  (0, s.jsx)(e4.D, {
                                      variant: "heading-md/semibold",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: i.name,
                                  }),
                                  null != i.l30Rank &&
                                      (0, s.jsx)("div", {
                                          className: iN.k3,
                                          children: (0, s.jsx)(iI.E, {
                                              variant: "secondary",
                                              type: {
                                                  text: K.intl.formatToPlainString(K.t.ehZXlZ, { rank: i.l30Rank }),
                                              },
                                              icon: iE.TrophyIcon,
                                          }),
                                      }),
                              ],
                          }),
                          (0, s.jsx)(eb.K, {
                              icon: n2._,
                              variant: "overlay-secondary",
                              size: "sm",
                              "aria-label": K.intl.formatToPlainString(K.t["8QLQB+"], { gameName: i.name }),
                              onClick: a,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var iT = n(281445),
    iS = n(554146),
    ib = n(933832),
    ik = n(624479),
    iR = n(131607),
    iL = n(454908),
    iM = n(95035),
    iP = n(403362),
    iD = n(196736),
    iO = n(614393),
    iU = n(143407),
    iG = n(685743),
    iw = n(349085),
    iB = n(581453),
    iV = n(342942),
    iH = n(174861),
    iF = n(49999),
    iz = n(394107),
    iY = n(116947);
function iK(e) {
    let { code: t } = e,
        n = r.useMemo(() => (0, iH.GF)(t), [t]);
    r.useEffect(() => {
        y.A.getDetectableGames();
    }, []);
    let i = (0, iw.A)(n?.game_id, "cover"),
        { data: l } = (0, iL.I)(n?.game_id),
        a = (0, iD.H)({ location: "game_server_share_embed" }),
        o = i ?? n?.image_url ?? "",
        [d, c] = (0, iR.kn)([iS.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        u = d !== iS.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        m = n?.provider ?? iT.X.SHOCKBYTE,
        h = L.default.getId() ?? "0",
        g =
            null != n
                ? null == n.ip || "" === n.ip
                    ? null
                    : null != n.port && "" !== n.port
                      ? `${n.ip}:${n.port}`
                      : n.ip
                : null,
        { handleCopyServerIp: p, animateCopyIcon: x } = (0, iG.A)(h, "0", f.A.GAME_SERVER_PAGE, g ?? ""),
        I = r.useCallback(() => {
            (0, tq.Cz)({
                tab: tR.G2.GAME_SERVERS,
                analyticsLocations: [f.A.GAME_SERVER_PAGE],
                analyticsSource: f.A.GAME_SERVER_PAGE,
            });
        }, []),
        E = r.useMemo(
            () =>
                null == n || null == n.sku_id || "" === n.sku_id
                    ? null
                    : {
                          id: "0",
                          gameId: n.game_id,
                          name: n.name,
                          regionId: "",
                          regionName: n.region_name ?? void 0,
                          planId: n.sku_id,
                          planName: n.plan_name ?? "",
                          providerType: m,
                          serverIP: n.ip ?? void 0,
                          port: n.port ?? void 0,
                          entitlementId: "",
                      },
            [n, m],
        ),
        v = r.useCallback(() => {
            null != E &&
                (u
                    ? (0, iB.A)(h, E)
                    : (0, iV.A)({
                          provider: m,
                          onAccept: () => {
                              (c(iF.i.TAKE_ACTION), (0, iB.A)(h, E));
                          },
                      }));
        }, [E, u, m, c, h]),
        C = r.useCallback(() => {
            (0, iV.A)({
                provider: m,
                onAccept: () => {
                    (c(iF.i.TAKE_ACTION), p());
                },
            });
        }, [m, c, p]);
    if (null == n) return null;
    let _ = [l?.name, n.plan_name].filter(iP.Vq).join("  \u2022  ");
    return (0, s.jsxs)("div", {
        className: iY.E6,
        children: [
            (0, s.jsxs)("div", {
                className: iY.FG,
                children: [
                    (0, s.jsxs)("div", {
                        className: iY.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: iY.oL,
                                children: [
                                    "" !== o
                                        ? (0, s.jsx)("img", { className: iY.vT, src: o, alt: "" })
                                        : (0, s.jsx)("div", {
                                              className: iY.iv,
                                              children: (0, s.jsx)(A.E, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  children: n.name,
                                              }),
                                          }),
                                    (0, s.jsx)("div", { className: iY.iB, "aria-hidden": !0 }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: iY.TK,
                                children: [
                                    (0, s.jsx)(e4.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-default",
                                        children: n.name,
                                    }),
                                    "" !== _ &&
                                        (0, s.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: _,
                                        }),
                                ],
                            }),
                            a &&
                                (0, s.jsx)("div", {
                                    className: iY.xG,
                                    children: (0, s.jsx)(eb.K, {
                                        variant: "secondary",
                                        icon: eS.U,
                                        "aria-label": K.intl.string(iz.default.F5W36W),
                                        onClick: I,
                                    }),
                                }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: iY.$D,
                        children: [
                            (0, s.jsxs)("div", {
                                className: iY.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: K.intl.string(iz.default.mJlz3T),
                                    }),
                                    (0, s.jsx)(A.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children:
                                            null != n.region_name && "" !== n.region_name ? n.region_name : "\u2014",
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: iY.lj,
                                children: [
                                    (0, s.jsx)(A.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-muted",
                                        children: K.intl.string(iz.default["7phwMG"]),
                                    }),
                                    null == g
                                        ? (0, s.jsx)(A.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children: "\u2014",
                                          })
                                        : u
                                          ? (0, s.jsxs)("div", {
                                                className: iY.qy,
                                                children: [
                                                    (0, s.jsx)(A.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-default",
                                                        selectable: !0,
                                                        children: g,
                                                    }),
                                                    (0, s.jsx)(eL.D, {
                                                        className: iY.cL,
                                                        "aria-label": K.intl.string(K.t.OpuAlK),
                                                        onClick: p,
                                                        children: x
                                                            ? (0, s.jsx)(ib.CheckmarkLargeIcon, { size: "sm" })
                                                            : (0, s.jsx)(ik.CopyIcon, { size: "sm" }),
                                                    }),
                                                ],
                                            })
                                          : (0, s.jsx)(iM.A, {
                                                onClick: C,
                                                children: K.intl.string(iz.default["f+F7H3"]),
                                            }),
                                ],
                            }),
                        ],
                    }),
                    null != E && (0, s.jsx)("div", { className: iY.PD, children: (0, s.jsx)(iU.l5, { onClick: v }) }),
                ],
            }),
            (0, s.jsx)("div", { className: iY.uV, children: (0, s.jsx)(iO.T, { imageUrl: o }) }),
        ],
    });
}
class iW extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        nt.A.captureException(e);
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function iJ(e) {
    let { code: t } = e;
    return (0, s.jsx)(iW, { children: (0, s.jsx)(iK, { code: t }) });
}
var iX = n(643612),
    iZ = n(607399),
    iq = n(702841),
    i$ = n(529200),
    iQ = n(395671),
    i0 = n(993748),
    i1 = n(212534),
    i2 = n(820496);
function i3(e) {
    let { code: t, message: n } = e,
        [i, l, a] = (0, iq.yK)(
            [i1.A],
            () => [i1.A.getApplication(t), i1.A.isInvalidApplication(t), i1.A.getApplicationFetchState(t)],
            [t],
        ),
        o = (0, iq.bG)([D.A], () => D.A.getGuildId() ?? void 0),
        [d, c] = r.useState(!1),
        u = r.useCallback((e) => {
            e && c(!0);
        }, []),
        m = (0, tP.K)(u),
        h = r.useCallback(() => {
            eV.default.track(Y.HAw.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                application_id: t,
                device_platform: iZ.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
        }, [t, o, n.author.id, n.channel_id]);
    return (r.useEffect(() => {
        (0, i0.eP)(t);
    }, [t]),
    r.useEffect(() => {
        d && a === i1.e.FETCHED && h();
    }, [d, a, h]),
    r.useEffect(() => {
        d &&
            l &&
            eV.default.track(Y.HAw.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                device_platform: iZ.Fr ? "mobile_web" : "desktop_web",
                sender_user_id: n.author.id,
                guild_id: o,
                channel_id: n.channel_id,
            });
    }, [d, o, l, n.author.id, n.channel_id]),
    l)
        ? (0, s.jsxs)(i$.A, {
              containerRef: m,
              children: [
                  (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t.j4KtLa) }),
                  (0, s.jsx)(i$.A.Body, {
                      children: (0, s.jsxs)("div", {
                          className: i2.k,
                          children: [
                              (0, s.jsx)(i$.A.Icon, { expired: !0 }),
                              (0, s.jsx)(i$.A.Info, {
                                  expired: !0,
                                  title: K.intl.string(K.t.NaQLEx),
                                  children: K.intl.string(K.t["0H5OT2"]),
                              }),
                          ],
                      }),
                  }),
              ],
          })
        : null == i || a === i1.e.FETCHING
          ? (0, s.jsxs)(i$.A, {
                containerRef: m,
                children: [
                    (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t.m9hXGR) }),
                    (0, s.jsx)(i$.A.Body, { resolving: !0 }),
                ],
            })
          : (0, s.jsx)(et, { app: iQ.Ay.createFromServer(i), linkType: Q.J.APP_DISCOVERY, onView: h, message: n });
}
var i5 = n(229527),
    i4 = n(870136),
    i9 = n(330075),
    i6 = n(412728);
function i8(e) {
    let { code: t } = e,
        [n, i] = t.split("-"),
        l = (0, nG.Qi)(n, i),
        r = (0, iq.bG)([D.A], () => D.A.getGuildId());
    return ((0, e2.A)(
        {
            type: i6.z.VIEW,
            name: e1.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
            properties: { guild_product_listing_id: i, has_entitlement: l?.has_entitlement === !0 },
        },
        { disableTrack: null == l },
    ),
    null == l || r !== n)
        ? null
        : (0, s.jsx)(i9.i, {
              guildProductListing: l,
              guildId: n,
              location: f.A.GUILD_PRODUCT_EMBED_CARD,
              cardWidth: 390,
              thumbnailHeight: 219,
          });
}
var i7 = n(484724),
    le = n(953727);
function lt(e) {
    let { width: t = 40, height: n = 40, color: i = "currentColor", ...l } = e;
    return (0, s.jsxs)("svg", {
        ...(0, le.A)(l),
        width: t,
        height: n,
        style: { minWidth: t, minHeight: n },
        viewBox: "0 0 40 40",
        children: [
            (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20 4C15.5817 4 12 7.58172 12 12V20C12 24.4183 15.5817 28 20 28H28C32.4183 28 36 24.4183 36 20V12C36 7.58172 32.4183 4 28 4H20ZM19.5962 21.6084C19.5599 21.8126 19.717 22 19.9244 22H20.5806C20.7422 22 20.8806 21.8841 20.9088 21.7249L21.3333 19.3333H25.3333L24.9295 21.6084C24.8932 21.8126 25.0503 22 25.2577 22H25.9139C26.0756 22 26.2139 21.8841 26.2421 21.7249L26.6667 19.3333H29.0533C29.2152 19.3333 29.3537 19.217 29.3816 19.0575L29.4983 18.3908C29.534 18.1868 29.377 18 29.1699 18H26.9L27.6067 14H29.9933C30.1552 14 30.2937 13.8836 30.3216 13.7241L30.4383 13.0575C30.474 12.8535 30.317 12.6667 30.1099 12.6667H27.84L28.2438 10.3916C28.2801 10.1874 28.123 10 27.9156 10H27.2594C27.0977 10 26.9594 10.1159 26.9312 10.2751L26.5067 12.6667H22.5067L22.9105 10.3916C22.9467 10.1874 22.7897 10 22.5823 10H21.926C21.7644 10 21.6261 10.1159 21.5978 10.2751L21.1733 12.6667H18.7867C18.6248 12.6667 18.4863 12.783 18.4584 12.9425L18.3417 13.6092C18.306 13.8132 18.463 14 18.6701 14H20.94L20.2333 18H17.8467C17.6848 18 17.5463 18.1164 17.5184 18.2759L17.4017 18.9425C17.366 19.1465 17.523 19.3333 17.7301 19.3333H20L19.5962 21.6084ZM21.5669 18L22.2736 14H26.2736L25.5669 18H21.5669Z",
                fill: i,
            }),
            (0, s.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.33335 14.0208C6.11738 16.1734 4 19.8395 4 24C4 30.6274 9.37258 36 16 36C20.1604 36 23.8262 33.8829 25.979 30.6672H24.3268C22.372 33.1055 19.3683 34.6667 16 34.6667C10.109 34.6667 5.33333 29.8911 5.33333 24C5.33333 20.6315 6.89477 17.6277 9.33335 15.6729V14.0208Z",
                fill: i,
            }),
        ],
    });
}
var ln = n(122906),
    li = n(401755),
    ll = n(313977),
    ls = n(508557);
function lr(e) {
    let { code: t } = e,
        i = (0, u.bG)([ln.A], () => ln.A.getGuildTemplate(t));
    if (null == i || i.state === li.QB.RESOLVING)
        return (0, s.jsxs)(i$.A, {
            children: [
                (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t.Xj87Yf) }),
                (0, s.jsx)(i$.A.Body, { resolving: !0 }),
            ],
        });
    if (i.state === li.QB.EXPIRED)
        return (0, s.jsxs)(i$.A, {
            children: [
                (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t.C7ZRNw) }),
                (0, s.jsxs)(i$.A.Body, {
                    children: [
                        (0, s.jsx)(i$.A.Icon, { expired: !0 }),
                        (0, s.jsx)(i$.A.Info, { expired: !0, title: K.intl.string(K.t.A6MwXE) }),
                    ],
                }),
            ],
        });
    let l = __OVERLAY__
        ? (0, s.jsx)(eh.$, { disabled: !0, variant: "secondary", text: K.intl.string(K.t.W7NTWm) })
        : (0, s.jsx)(eh.$, {
              onClick: function () {
                  null != i &&
                      i.state !== li.QB.RESOLVING &&
                      (0, g.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("860350"),
                              n.e("122326"),
                              n.e("562772"),
                              n.e("461123"),
                              n.e("734187"),
                              n.e("978953"),
                              n.e("324866"),
                              n.e("883952"),
                              n.e("582486"),
                              n.e("419580"),
                              n.e("816198"),
                              n.e("592152"),
                          ]).then(n.bind(n, 72715));
                          return (t) => (0, s.jsx)(e, { ...t, guildTemplate: i });
                      });
              },
              loading: i.state === li.QB.ACCEPTING,
              variant: "active",
              text: K.intl.string(K.t["a3Gl+e"]),
          });
    return (0, s.jsxs)(i$.A, {
        children: [
            (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t.kAvFkO) }),
            (0, s.jsxs)(i$.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: ls.iH,
                        children: [
                            (0, s.jsx)(lt, { className: ll.K }),
                            (0, s.jsx)(i$.A.Info, {
                                title: i.name,
                                children: K.intl.format(K.t.cGXXHL, { usageCount: String(i.usageCount ?? 0) }),
                            }),
                        ],
                    }),
                    l,
                ],
            }),
        ],
    });
}
var la = n(21599),
    lo = n(681154),
    ld = n(155718);
let lc = new Set([
    lo.ContentInventoryEntryType.TOP_ARTIST,
    lo.ContentInventoryEntryType.TOP_GAME,
    lo.ContentInventoryEntryType.PLAYED_GAME,
    lo.ContentInventoryEntryType.WATCHED_MEDIA,
    lo.ContentInventoryEntryType.LISTENED_SESSION,
    lo.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var lu = n(562175),
    lm = n(857071),
    lh = n(46054),
    lg = n(731068),
    lp = n(619517),
    lA = n(207133),
    lx = n(844222),
    lf = n(463930),
    lI = n(251391),
    lE = n(601255),
    lv = n(562819),
    lC = n(234914),
    l_ = n(59318),
    lj = n(837528),
    lN = n(754459),
    ly = n(967144),
    lT = n(342296),
    lS = n(696451),
    lb = n(218394);
function lk(e) {
    let { width: t = 14, height: n = 18, color: i = "currentColor", ...l } = e;
    return (0, s.jsx)("svg", {
        ...(0, le.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 10 14",
        fill: "none",
        children: (0, s.jsx)("path", {
            d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
            fill: i,
        }),
    });
}
var lR = n(717125),
    lL = n(376943),
    lM = n(36491),
    lP = n(752755),
    lD = n(461715),
    lO = n(381941),
    lU = n(966101);
function lG(e) {
    let { embedUrl: t, message: n, channel: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        d = (function (e, t) {
            let n = (0, lD.CI)(e),
                i = (0, iq.bG)(
                    [lS.Ay, L.default],
                    () => {
                        let e = L.default.getId();
                        return lS.Ay.isMember(n?.guildId, e);
                    },
                    [n],
                ),
                l = (0, iq.bG)(
                    [lR.A],
                    () => null != n && n?.channelId != null && lR.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                s = t.hasFlag(Y.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: a,
                    guild: o,
                    parentChannel: d,
                    user: c,
                    selectedGuildId: u,
                    canAccess: m,
                } = (0, iq.cf)(
                    [lP.A, nV.A, M.A, O.default, D.A],
                    () => {
                        let e = lP.A.getMediaPostEmbed(n?.threadId)?.media,
                            t = nV.A.getGuild(n?.guildId),
                            i = M.A.getChannel(n?.channelId),
                            l = O.default.getUser(e?.author_id),
                            s = D.A.getGuildId(),
                            r = null != i && (0, lL.nc)(i);
                        return {
                            rawMediaPostEmbedData: e,
                            guild: t,
                            parentChannel: i,
                            user: l,
                            selectedGuildId: s,
                            canAccess: r,
                        };
                    },
                    [n],
                ),
                h = r.useMemo(() => {
                    let e = (0, lD.tU)({
                        mediaPostEmbedData: a,
                        guild: o,
                        parentChannel: d,
                        user: c,
                        selectedGuildId: u,
                        canAccess: m,
                    });
                    return null == e ? null : { ...e, user: c };
                }, [a, o, d, c, u, m]);
            return (
                r.useEffect(() => {
                    n?.threadId != null &&
                        (lP.A.getEmbedFetchState(n.threadId) !== lP.e.NOT_FETCHED ||
                            (i && !1 === l) ||
                            (!i && s) ||
                            (0, lM.O0)(n?.threadId));
                }, [n, i, l, s]),
                h
            );
        })(t, n),
        { setPopout: c } = (0, lN.A)(n.id, lO.Fd),
        u = (0, lj.VL)(n, i, c, !0),
        m = n7.kt.useSetting(),
        h = (0, lb.j)(),
        [g, p] = r.useState(!1),
        [x, I] = r.useState(d?.coverImage == null),
        E = (0, iq.bG)([lS.Ay, O.default], () => lS.Ay.isMember(d?.guildId, O.default.getCurrentUser()?.id), [d]),
        v = (0, iq.bG)([lS.Ay], () => (d?.authorId != null ? lS.Ay.getMember(d.guildId, d.authorId) : null)),
        C = (0, lE.A)(v?.avatarDecoration != null ? v?.avatarDecoration : d?.user?.avatarDecoration),
        [_, j, N] = r.useMemo(() => [v?.colorString ?? "inherit", v?.colorStrings ?? null, v?.colorRoleId], [v]),
        y = (0, ly.gn)(v?.guildId, d?.authorId ?? void 0, j),
        { reducedMotion: T } = r.useContext(lx.C),
        [S, b] = r.useState(!1),
        k = r.useCallback(() => {
            p(!0);
        }, [p]),
        R = r.useCallback(() => {
            p(!1);
        }, [p]),
        P = r.useCallback(async () => {
            null != d &&
                ((0, nO.zV)(Y.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: d.threadId,
                    channel_id: i.id,
                    can_access: d.canAccess,
                    is_member: E,
                }),
                d.canAccess
                    ? (0, nw.A)(Y.BVt.CHANNEL(d.guildId, d.threadId, d.messageId))
                    : E
                      ? (0, nw.A)(Y.BVt.CHANNEL(d.guildId, d.parentChannelId))
                      : await id.Z2(d.guildId, {}, { channelId: d.parentChannelId }));
        }, [d, i, E]);
    if (null == d) return null;
    let G = (0, U.F_)({ avatarDecoration: C, size: (0, lv.Te)(tA._3.SIZE_40), canAnimate: S }),
        w = d.user?.getAvatarURL(d.guildId, 40, S);
    function B() {
        T.enabled || b((e) => !e);
    }
    let V = d.coverImage,
        H = null != V && (0, l_.ge)(V);
    return (0, s.jsxs)("div", {
        className: lU.wb,
        children: [
            (0, s.jsxs)("div", {
                className: lU.iT,
                onMouseEnter: k,
                onMouseLeave: R,
                children: [
                    !x &&
                        (!0 === d.shouldShowBlurredThumbnailImage
                            ? (0, s.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: K.intl.string(K.t.rIbh8H),
                                  className: o()(lU.xn, { [lU.p6]: d.shouldSpoiler }),
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })
                            : (0, s.jsx)(lC.A, {
                                  src: !(h && (m || g)) && H ? `${V}?format=png` : V,
                                  backgroundSrc: `${V}?format=png`,
                                  alt: K.intl.string(K.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: o()(lU.xn, { [lU.p6]: d.shouldSpoiler }),
                                  imageChildClassName: lU.q_,
                                  onContextMenu: u,
                                  onError: () => I(!0),
                              })),
                    null != d.coverImageOverlayText &&
                        (0, s.jsx)(eL.D, {
                            onClick: P,
                            children: (0, s.jsx)("div", {
                                className: lU.nx,
                                children: (0, s.jsxs)("div", {
                                    className: lU.BS,
                                    children: [
                                        (0, s.jsx)(lk, { color: nP.A.colors.WHITE.css }),
                                        (0, s.jsx)(A.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-overlay-light",
                                            children: d.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: lU.iQ,
                children: [
                    (0, s.jsxs)("div", {
                        className: lU.OA,
                        children: [
                            (0, s.jsx)(A.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: lU.hF,
                                children: d.title,
                            }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: o()(lU.hF, lU.Fq),
                                children: d.subtitle,
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: lU._5,
                        children: [
                            null != d.authorId &&
                                null != w &&
                                (0, s.jsx)(lT.A, {
                                    targetElementRef: a,
                                    userId: d.authorId,
                                    guildId: d.guildId,
                                    channelId: i.id,
                                    messageId: n.id,
                                    roleId: N,
                                    avatarUrl: d.avatarUrl,
                                    newAnalyticsLocations: [f.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, s.jsx)("div", {
                                            onMouseEnter: B,
                                            onMouseLeave: B,
                                            children: (0, s.jsx)(tp.eu, {
                                                ...e,
                                                ref: a,
                                                size: tA._3.SIZE_40,
                                                src: w,
                                                "aria-label": K.intl.string(K.t.KXz3XB),
                                                avatarDecoration: G,
                                            }),
                                        }),
                                }),
                            (0, s.jsxs)("div", {
                                className: lU.Ny,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: lU.O9,
                                        children: [
                                            null != d.channelName &&
                                                (0, s.jsx)(lI.d, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: lU.Xg,
                                                }),
                                            (0, s.jsx)(eL.D, {
                                                onClick: P,
                                                className: lU.HA,
                                                children: (0, s.jsx)(e4.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: d.channelName ?? d.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != d.authorName &&
                                        (0, s.jsx)(A.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: lU.wn,
                                            children: K.intl.format(K.t.voIDKa, {
                                                authorName: d.authorName,
                                                authorNameHook: function () {
                                                    return null == d
                                                        ? null
                                                        : null == d.authorId
                                                          ? (0, s.jsx)(lf.V, {
                                                                name: d.authorName,
                                                                colorString: _,
                                                                colorStrings: y,
                                                                className: lU.fh,
                                                            })
                                                          : (0, s.jsx)(
                                                                lT.A,
                                                                {
                                                                    targetElementRef: l,
                                                                    userId: d.authorId,
                                                                    guildId: d.guildId,
                                                                    channelId: i.id,
                                                                    messageId: n.id,
                                                                    roleId: N,
                                                                    avatarUrl: d.avatarUrl,
                                                                    newAnalyticsLocations: [f.A.USERNAME],
                                                                    children: (e) =>
                                                                        (0, s.jsx)(lf.V, {
                                                                            ...e,
                                                                            ref: l,
                                                                            name: d.authorName,
                                                                            colorString: _,
                                                                            colorStrings: y,
                                                                            className: lU.fh,
                                                                        }),
                                                                },
                                                                (0, tM.A)(),
                                                            );
                                                },
                                            }),
                                        }),
                                ],
                            }),
                            d.canAccess
                                ? (0, s.jsx)(eh.$, { variant: "primary", onClick: P, text: d.ctaText })
                                : (0, s.jsx)(eh.$, { onClick: P, variant: "primary", text: d.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lw = n(492230),
    lB = n(378058),
    lV = n(704413),
    lH = n(537039),
    lF = n(711038),
    lz = n(892340),
    lY = n(803306),
    lK = n(491182),
    lW = n(622868),
    lJ = n(10364),
    lX = n(378570),
    lZ = n(138298),
    lq = n(358047),
    l$ = n(536637),
    lQ = n.n(l$),
    l0 = n(606049),
    l1 = n(943815),
    l2 = n(447215),
    l3 = n(39470),
    l5 = n(832038),
    l4 = n(318626),
    l9 = n(513653);
let l6 = (e) => {
    let { reportingUserId: t, guildId: n, compact: i, channel: l, messageId: a, reportedTimestamp: d } = e,
        c = O.default.getUser(t),
        u = r.useMemo(() => (i ? (0, l1.A)((0, ii.i$)(lQ()(), "LT")) : null), [i]),
        m = (0, l2.P)({ user: c, channelId: l.id, guildId: n, messageId: a })((0, tI.m2)(c, l)),
        h = null != c ? c.getAvatarURL(n, (0, tA.FT)(tA._3.SIZE_16)) : l9,
        g =
            null != c
                ? K.intl.format(l3.default["+zqXZs"], { username: c.username, onUserClick: m })
                : K.intl.string(l3.default.xpRjfS);
    return (0, s.jsxs)("div", {
        className: o()(l4.NB, l4.JZ, u),
        children: [
            (0, s.jsx)(tp.eu, { src: h, size: tA._3.SIZE_16, className: l5.my, "aria-label": "" }),
            (0, s.jsx)(A.E, { variant: "text-sm/medium", color: "text-subtle", className: l5.Xh, children: g }),
            (0, s.jsxs)(A.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, s.jsx)("span", { className: l5.Ek, children: "\u2022" }),
                    (0, s.jsx)(l0.A, { timestamp: d, className: l5.vE }),
                ],
            }),
        ],
    });
};
var l8 = n(942925);
function l7(e) {
    let { message: t, snapshot: n, index: i } = e,
        l = r.useMemo(() => new ia(t, n, i), [t, n, i]),
        a = (0, u.bG)(
            [M.A, O.default, P.A, te.A, nV.A, n3.A],
            () => l.getForwardInfo(M.A, O.default, P.A, te.A, nV.A, n3.A).footerInfo,
            [l],
            h.A,
        ),
        o = r.useCallback(() => {
            let e = M.A.getChannel(t.channel_id),
                n = nV.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = ea.Ay.getCurrentlySelectedChannelId(),
                s = lq.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && s === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (lZ.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, lX.iN)(i),
                eV.default.track(Y.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == a
        ? null
        : (0, s.jsxs)(eL.D, {
              className: l8.xQ,
              onClick: o,
              "aria-label": a.accessibilityLabel,
              children: [
                  null != a.originIconUrl
                      ? (0, s.jsx)("img", { className: l8.yl, src: a.originIconUrl, alt: "" })
                      : null,
                  (0, s.jsx)(A.E, {
                      className: l8.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${a.originLabel}  \u{2022}  ${a.timestampLabel}`,
                  }),
                  (0, s.jsx)(n2._, { size: "xxs", color: nP.A.colors.TEXT_MUTED }),
              ],
          });
}
function se(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: l, reportedTimestamp: a } = e,
        o = (0, tI.m2)(t.author, i),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, lN.A)(e.id, lO.Fd),
                { usernameProfile: l, avatarProfile: s } = n,
                a = (0, lj.m)(e, t, l, i);
            return {
                onClickUsername: a,
                onClickAvatar: (0, lj.Jo)(s, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: s,
            };
        })(t, i);
    return (0, s.jsx)(lK.A, {
        childrenExecutedCommand: (0, s.jsx)(l6, {
            reportingUserId: l,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: a,
            compact: !1,
        }),
        childrenHeader: (0, s.jsx)(lW.Ay, {
            message: t,
            channel: i,
            author: o,
            guildId: i.guild_id,
            hideTimestamp: !0,
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
            renderPopout: lJ.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, s.jsx)(n9.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: l8.iU,
        author: o,
    });
}
function st(e) {
    let { message: t, snapshot: n, index: i, renderAccessories: l } = e,
        [a, o] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, lY.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = r.useMemo(() => {
            let e = (0, iu.A)(t, n);
            return null != a && n?.moderatorReport?.reported_user_id != null ? e.set("author", a) : e;
        }, [t, n, a]),
        c = n7.hD.useSetting(),
        m = n7.rs.useSetting(),
        h = (0, u.bG)([ie.A], () => ie.A.isDeveloper),
        g = (0, n5.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: p,
            hasSpoilerEmbeds: A,
            hasBailedAst: x,
        } = (0, n6.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
        }),
        f = (0, u.bG)([M.A], () => M.A.getChannel(t.channel_id));
    return null == f
        ? null
        : (0, s.jsx)(
              "div",
              {
                  className: l8.kL,
                  children: (0, s.jsxs)("div", {
                      className: l8.Qs,
                      children: [
                          (0, s.jsx)(se, {
                              mergedMessageRecord: d,
                              content: p,
                              channel: f,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          l({
                              channelMessageProps: { message: d, channel: f, compact: !1 },
                              hasSpoilerEmbeds: A,
                              hasBailedAst: x,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: l8.Mf,
                          }),
                          (0, s.jsx)(l7, { message: t, snapshot: n, index: i }),
                      ],
                  }),
              },
              i,
          );
}
function sn(e) {
    let { message: t, renderAccessories: n } = e;
    return (0, s.jsx)(s.Fragment, {
        children: t.messageSnapshots.map((e, i) =>
            (0, s.jsx)(st, { message: t, snapshot: e, index: i, renderAccessories: n }, i),
        ),
    });
}
var si = n(302031),
    sl = n(738188),
    ss = n(123292),
    sr = n(239093),
    sa = n(798362);
function so(e) {
    if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
    let t = e.message.embeds[0],
        i = t.fields?.find((e) => e.rawName === sr.AT.CLASSIFICATION_ID) ?? void 0,
        l = i?.rawValue ?? void 0,
        r = t.fields?.find((e) => e.rawName === sr.AT.INCIDENT_TIMESTAMP) ?? void 0,
        a = null == r || null == r.rawValue ? void 0 : parseFloat(r.rawValue);
    return null == l || null == a
        ? null
        : (0, s.jsxs)(eL.D, {
              onClick: function () {
                  null != l &&
                      (0, g.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                              n.e("252964"),
                              n.e("726464"),
                              n.e("483518"),
                              n.e("51194"),
                              n.e("292030"),
                              n.e("190255"),
                          ]).then(n.bind(n, 954098));
                          return (t) =>
                              (0, s.jsx)(e, {
                                  classificationId: l,
                                  source: sr.XN.SystemDM,
                                  transitionState: t.transitionState,
                                  onClose: t.onClose,
                              });
                      });
              },
              className: sa.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: sa.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: sa.U1,
                              children: [
                                  (0, s.jsx)(sl.WarningIcon, {
                                      className: sa.QW,
                                      color: nP.A.colors.ICON_FEEDBACK_CRITICAL,
                                  }),
                                  (0, s.jsx)(A.E, {
                                      variant: "text-md/semibold",
                                      children: K.intl.string(K.t["4CxGXi"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: sa.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: K.intl.format(K.t.eevFb6, { daysAgo: lQ()().diff(lQ().unix(a), "days") }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: sa.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: K.intl.string(K.t["5CLb0A"]),
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: sa.xQ,
                      children: (0, s.jsx)(ss.Q, { text: K.intl.string(K.t.zKnzwm), variant: "secondary" }),
                  }),
              ],
          });
}
var sd = n(28863),
    sc = n(393033),
    su = n(975430);
function sm(e) {
    let { classificationId: t } = e;
    return (0, s.jsx)(sd.Anchor, {
        onClick: function () {
            (0, g.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("252964"),
                    n.e("726464"),
                    n.e("483518"),
                    n.e("51194"),
                    n.e("292030"),
                    n.e("190255"),
                ]).then(n.bind(n, 954098));
                return (n) =>
                    (0, s.jsx)(e, {
                        classificationId: t,
                        source: sr.XN.SystemDM,
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                    });
            });
        },
        className: su.zh,
        children: K.intl.string(K.t.QsqdXC),
    });
}
function sh(e) {
    let { learnMoreLink: t } = e;
    return (0, s.jsx)(sd.Anchor, { className: su.zh, href: t, children: K.intl.string(K.t["8/GdRB"]) });
}
function sg(e) {
    let { ctaType: t, classificationId: n, learnMoreLink: i } = e;
    switch (t) {
        case sr.xw.POLICY_VIOLATION_DETAIL:
            if (null == n) return null;
            return (0, s.jsx)(sm, { classificationId: n });
        case sr.xw.LEARN_MORE_LINK:
            if (null == i) return null;
            return (0, s.jsx)(sh, { learnMoreLink: i });
        default:
            return null;
    }
}
function sp(e) {
    let { iconType: t } = e,
        n = {
            default: (0, s.jsx)(e5.k, { size: "xs", color: nP.A.colors.TEXT_LINK.css }),
            danger: (0, s.jsx)(sl.WarningIcon, { color: nP.A.colors.ICON_FEEDBACK_CRITICAL }),
        };
    return null != t && t in n ? (0, s.jsx)("div", { className: su.Kk, children: n[t] }) : null;
}
function sA(e) {
    let { children: t, theme: n } = e,
        i = { default: su._y, danger: su.yk };
    return (0, s.jsx)("div", { className: i[n ?? "default"], children: t });
}
function sx(e) {
    var t;
    if (null == e.embed || null == e.embed.fields) return null;
    let n = (0, sc.f4)(e.embed);
    return null == n
        ? null
        : (0, s.jsxs)(eL.D, {
              className: su.o3,
              children: [
                  (0, s.jsxs)("div", {
                      className: su.qZ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: su.U1,
                              children: [
                                  (0, s.jsx)(sp, { iconType: n.icon }),
                                  (0, s.jsx)(A.E, { variant: "text-md/semibold", children: n.header }),
                              ],
                          }),
                          (0, s.jsx)("div", {
                              className: su.VU,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-xs/medium",
                                  children: K.intl.format(K.t.eevFb6, {
                                      daysAgo: ((t = n.timestamp ?? 0), lQ()().diff(lQ().unix(t), "days")),
                                  }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: su.vv,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: n.body,
                              }),
                          }),
                      ],
                  }),
                  (0, s.jsx)(sA, {
                      theme: n.theme,
                      children: n.ctas?.map((e) =>
                          (0, s.jsx)(
                              sg,
                              { ctaType: e, classificationId: n.classification_id, learnMoreLink: n.learn_more_link },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
var sf = n(44724),
    sI = n(227327),
    sE = n(638495),
    sv = n(43990),
    sC = n(429913),
    s_ = n(976860),
    sj = n(371794),
    sN = n(871123),
    sy = n(439303),
    sT = n(353281),
    sS = n(832163),
    sb = n(637893),
    sk = n(376680),
    sR = n(317560),
    sL = n(467884),
    sM = n(661070);
function sP(e) {
    let t,
        { guildOrApplication: n, skuIds: i, destinationGuildId: l, channelId: a, messageId: d } = e,
        c = (0, sE.k)(),
        m = (0, sb._)("SocialLayerStorefrontEmbed"),
        h = "guild" === n.type ? n.guildId : void 0,
        g = "application" === n.type ? n.applicationId : void 0,
        p = (0, sk.A)({ applicationId: g, guildId: h }),
        A = p?.storefront,
        x = g ?? A?.applicationId,
        E = (0, sC.h)(x),
        v = A?.application?.name ?? E?.name ?? null,
        C = "guild" === n.type ? n.guildId : ((0, sN.n5)(x) ?? null),
        _ = (0, u.yK)([ew.A], () => (null == x ? [] : i.filter((e) => ew.A.get(e)?.applicationId === x)), [i, x]),
        { analyticsLocations: j } = (0, I.Ay)(f.A.SLAYER_STOREFRONT_EMBED),
        N = r.useMemo(() => ({ pageSection: "storefront_embed", placement: sy.Ye.MULTI_SKU_EMBED }), []),
        y = r.useCallback(() => {
            (null != x &&
                eV.default.track(Y.HAw.SLAYER_STOREFRONT_EMBED_SHOP_ALL_CLICKED, {
                    application_id: x,
                    application_name: v,
                    guild_id: C,
                    destination_guild_id: l,
                    channel_id: a,
                    message_id: d,
                    sku_ids: _,
                    sku_count: _.length,
                }),
                (0, sf.default)("guild" === n.type ? { guildId: n.guildId } : { applicationId: n.applicationId }));
        }, [x, v, a, l, n, d, C, _]),
        T = r.useCallback(
            (e, t) => {
                let { skuId: n, applicationId: i } = t;
                (0, sR.R)({ skuId: n, applicationId: i, isStorefront: !1, analyticsLocations: j, contextKey: c });
            },
            [j, c],
        ),
        S = r.useCallback(
            (e, t, n) => {
                if (null == x) return;
                let i = sS.A.getStorefrontState(x)?.activePage ?? 0;
                (0, s_.bG)(Y.BVt.COLLECTIBLES_SHOP_GAME_SHOP(x, i, e, n));
            },
            [x],
        );
    if (!m) return null;
    if (p?.state === "loading")
        return (0, s.jsx)("div", { className: o()(sM.kL, sM.g4), children: (0, s.jsx)(tV.y, {}) });
    if (null == A || null == x || 0 === _.length) return null;
    let b =
            null !=
            (t = A.pages.find((e) => e.leaderboard?.backgroundImageAssetId != null)?.leaderboard
                ?.backgroundImageAssetId)
                ? (0, sj.YE)(A.applicationId, t, 1024, sN.pV)
                : null,
        k = A.logoAssetId ?? A.lightThemeLogoAssetId,
        R = null != k ? (0, sj.YE)(x, k, 128) : null;
    return (0, s.jsx)(sv.N, {
        theme: Y.NJ8.DARK,
        children: (e) =>
            (0, s.jsxs)("div", {
                className: o()(sM.kL, e),
                children: [
                    (0, s.jsx)("div", {
                        "aria-hidden": !0,
                        className: sM.Tp,
                        children:
                            null != b &&
                            (0, s.jsx)("div", { className: sM.iL, style: { backgroundImage: `url(${b})` } }),
                    }),
                    (0, s.jsx)("div", {
                        className: sM.wx,
                        children: (0, s.jsxs)("div", {
                            className: sM.VW,
                            children: [
                                null != R && (0, s.jsx)("img", { className: sM.wm, src: R, alt: "" }),
                                (0, s.jsx)(e4.D, {
                                    className: sM.DD,
                                    variant: "heading-md/semibold",
                                    color: "text-overlay-light",
                                    lineClamp: 1,
                                    children: A.title,
                                }),
                                (0, s.jsx)(eh.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    icon: eS.U,
                                    text: K.intl.string(K.t.RSyoZu),
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
                    (0, s.jsx)(sy.E9, {
                        newValue: N,
                        children: (0, s.jsx)(sT.J, {
                            viewProductDetails: S,
                            children: (0, s.jsx)("div", {
                                className: o()(sM.Vg, { [sM.Me]: _.length % 2 == 1 }),
                                children: _.map((e, t) =>
                                    (0, s.jsx)(
                                        "div",
                                        {
                                            className: o()(sM.ux, { [sM.Xv]: 0 === t && _.length % 2 == 1 }),
                                            children: (0, s.jsx)(sL.Ay, {
                                                className: sM.Nr,
                                                skuId: e,
                                                positionInSection: t,
                                                variant: sL.s6.SMALL,
                                                onClick: T,
                                                analyticsLocations: j,
                                                disableMultiSelect: !0,
                                            }),
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        }),
                    }),
                ],
            }),
    });
}
var sD = n(50777),
    sO = n(288254),
    sU = n(319060),
    sG = n(812282),
    sw = n(265872),
    sB = n(44788),
    sV = n(188645),
    sH = n(240248),
    sF = n(256449),
    sz = n(194004),
    sY = n(148355),
    sK = n(3026),
    sW = n(862482),
    sJ = n(305866),
    sX = n(847374),
    sZ = n(964486),
    sq = n(235986),
    s$ = n(624793),
    sQ = n(636537),
    s0 = n(639245),
    s1 = n(87719),
    s2 = n(725807),
    s3 = n(750385),
    s5 = n(850992),
    s4 = n(625494),
    s9 = n(698279),
    s6 = n(665055),
    s8 = n(844749);
function s7(e) {
    (eV.default.track(Y.HAw.PREMIUM_PROMOTION_OPENED, {
        location_page: null != e.guild_id ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
        location_section: Y.JJy.STICKER_POPOUT,
    }),
        (0, s1.e)());
}
function re(e) {
    let { sticker: t, description: n } = e;
    return (0, s.jsxs)(sq.A, {
        children: [
            (0, s.jsx)(sY.A, { sticker: t, size: 48, isInteracting: !0 }),
            (0, s.jsxs)(sq.A, {
                direction: sq.A.Direction.VERTICAL,
                justify: sq.A.Justify.CENTER,
                className: s8.bM,
                children: [
                    (0, s.jsx)(A.E, { variant: "text-md/semibold", children: (0, s.jsx)(sK.A, { children: t.name }) }),
                    null != n && (0, s.jsx)(A.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function rt(e) {
    let { closePopout: t, sticker: n, channel: i, refreshPositionKey: l } = e,
        [a, o, d] = (0, u.yK)(
            [s3.A],
            () => [s3.A.getStickerPack(n.pack_id), !s3.A.hasLoadedStickerPacks, s3.A.isPremiumPack(n.pack_id)],
            [n],
        ),
        c = (function (e) {
            let { sticker: t, stickerPack: n } = e;
            return r.useMemo(
                () =>
                    null == n
                        ? []
                        : n.stickers
                              .slice(0, 4)
                              .reduce((e, n) => (3 !== e.length && n.id !== t.id ? e.concat(n) : e), []),
                [t, n],
            );
        })({ sticker: n, stickerPack: a });
    (0, sF.Sr)(n.pack_id);
    let m = (0, sF.pD)(i),
        h = { refreshPositionKey: l, channel: i },
        g = r.useRef(h);
    return (r.useEffect(() => {
        g.current = h;
    }),
    r.useEffect(() => {
        let { refreshPositionKey: e } = g.current;
        e();
    }, [o]),
    r.useEffect(() => {
        let { channel: e } = g.current;
        eV.default.track(Y.HAw.OPEN_POPOUT, {
            type: Y.JJy.STICKER_POPOUT,
            guild_id: e.getGuildId(),
            sticker_pack_id: n.pack_id,
            ...(0, nO.dI)(e),
        });
    }, [n.pack_id]),
    o || null == a)
        ? (0, s.jsx)(sV.Y0, { className: s6.v0 })
        : (0, s.jsx)(sJ.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sV.Uq, {
                  className: s6.Bm,
                  children: [
                      (0, s.jsx)(e4.D, { variant: "heading-md/semibold", children: n.name }),
                      (0, s.jsx)(A.E, {
                          variant: "text-sm/normal",
                          children: d
                              ? K.intl.format(K.t.auckXz, { stickerPackName: a.name })
                              : K.intl.format(K.t.OzB6e3, { stickerPackName: a.name }),
                      }),
                      (0, s.jsx)("ul", {
                          className: s6.pQ,
                          children: c.map((e) => (0, s.jsx)(sY.A, { isInteracting: !0, size: 80, sticker: e }, e.id)),
                      }),
                      d &&
                          (0, s.jsx)("div", {
                              className: s6.j0,
                              children: (0, s.jsx)(
                                  eh.$,
                                  {
                                      variant: "secondary",
                                      size: "sm",
                                      text: K.intl.string(K.t.GPy3Ar),
                                      autoFocus: !0,
                                      onClick: function () {
                                          null != a &&
                                              (d &&
                                                  (function (e) {
                                                      let { stickerPack: t, stickerPickerCategories: n } = e;
                                                      s4._.dispatchToLastSubscribed(Y.jej.OPEN_EXPRESSION_PICKER, {
                                                          activeView: s9.kx.STICKER,
                                                      });
                                                      let i = n.findIndex((e) => e.id === t.id);
                                                      -1 !== i && s5.bM.setActiveCategoryIndex(i);
                                                  })({ stickerPack: a, stickerPickerCategories: m }),
                                              t());
                                      },
                                  },
                                  "view-sticker-pack",
                              ),
                          }),
                  ],
              }),
          });
}
function rn(e) {
    let t,
        { sticker: n, channel: i, closePopout: l, refreshPositionKey: a } = e,
        [d, c] = r.useState(null),
        [m, h] = r.useState(!1),
        g = O.default.getCurrentUser(),
        p = tX.Ay.canUseCustomStickersEverywhere(g),
        x = (0, u.bG)([nV.A], () => nV.A.getGuild(n.guild_id)),
        f = null != x,
        [I, E] = r.useState(!1),
        [v, C] = r.useState(null),
        _ = r.useMemo(
            () => ({
                page: null != i.guild_id ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
                section: Y.JJy.STICKER_POPOUT,
            }),
            [i.guild_id],
        ),
        { current: j } = r.useRef({ guild_id: i.getGuildId(), ...(0, nO.dI)(i) }),
        N = { stickerSourceGuild: x, refreshPositionKey: a },
        y = r.useRef(N);
    (r.useEffect(() => {
        y.current = N;
    }),
        r.useEffect(() => {
            let { stickerSourceGuild: e } = y.current;
            !(async function () {
                if (null == e || e.features.has(Y.GuildFeatures.DISCOVERABLE)) {
                    var t;
                    c(
                        await ((t = n.id),
                        sQ.Bo.get({ url: Y.Rsh.STICKER_GUILD_DATA(t), oldFormErrors: !0, rejectWithError: !0 })
                            .then((e) => (e?.body != null ? (0, id.jE)(e.body) : null))
                            .catch(() => null)),
                    );
                }
                h(!0);
            })();
        }, [n.id, f]));
    let T = n.guild_id === i.getGuildId(),
        S = null != d,
        b = !1,
        k = "Custom Sticker Popout";
    p
        ? (t = f
              ? T
                  ? K.intl.string(K.t.fZ0DiG)
                  : K.intl.string(K.t["1f6D9m"])
              : S
                ? K.intl.string(K.t.yHmoR9)
                : K.intl.string(K.t.vZaScH))
        : f
          ? ((t = T ? K.intl.string(K.t.jNphpt) : K.intl.string(K.t.lyD5ZW)),
            (b = !0),
            (k = "Custom Sticker Popout (Upsell)"))
          : S
            ? ((t = K.intl.string(K.t.IuXYch)), (b = !0), (k = "Custom Sticker Popout (Upsell)"))
            : ((t = K.intl.format(K.t.hGWuxU, {
                  openPremiumSettings: () => {
                      (s7(i), l());
                  },
              })),
              (k = "Custom Sticker Popout (Soft Upsell)"));
    let R = !b && !f && S && p;
    return (r.useEffect(() => {
        let { refreshPositionKey: e } = y.current;
        e();
    }, [m, d]),
    (0, sZ.Ay)(() => {
        eV.default.track(Y.HAw.OPEN_POPOUT, { type: k, ...j });
    }),
    m)
        ? (0, s.jsx)(sJ.l, {
              "aria-label": n.name,
              children: (0, s.jsxs)(sV.Uq, {
                  className: s8.Bm,
                  children: [
                      (function () {
                          async function e() {
                              if (null == d || f) return;
                              l();
                              let e = d.id;
                              try {
                                  (await io.A.joinGuild(e), io.A.transitionToGuildSync(e));
                              } catch {}
                          }
                          return (0, s.jsxs)("div", {
                              className: s8.gH,
                              children: [
                                  (0, s.jsx)(re, { description: t, sticker: n }),
                                  b &&
                                      (0, s.jsx)(s2.A, {
                                          className: s8.lI,
                                          subscriptionTier: nN.pe.TIER_2,
                                          size: sW.$n.Sizes.SMALL,
                                          fullWidth: !0,
                                          textOptions: { textOverride: K.intl.string(K.t["gl/XHJ"]) },
                                          onSubscribeModalClose: (t) => (t ? e() : l()),
                                          postSuccessGuild: f || null == d ? void 0 : d,
                                          premiumModalAnalyticsLocation: _,
                                      }),
                                  R &&
                                      (0, s.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: s8.lI,
                                          children: (0, s.jsx)(eh.$, {
                                              variant: "primary",
                                              size: "sm",
                                              text: K.intl.string(K.t.riu2R5),
                                              fullWidth: !0,
                                              autoFocus: !0,
                                              onClick: e,
                                          }),
                                      }),
                              ],
                          });
                      })(),
                      (null != x || null != d) &&
                          (function () {
                              if (!S && !f) return;
                              let e = (d?.stickers ?? [])
                                      .slice(0, 13)
                                      .filter((e) => e.id !== n.id)
                                      .slice(0, 12),
                                  t = null != d ? s$.GO.createFromDiscoverableGuild(d) : s$.GO.createFromGuildRecord(x);
                              return (0, s.jsxs)("div", {
                                  className: s8.tl,
                                  children: [
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: s8.YW,
                                          children: f ? K.intl.string(K.t.kx6pEG) : K.intl.string(K.t.pDE7Gb),
                                      }),
                                      (0, s.jsx)(s0.G7, {
                                          expressionSourceGuild: t,
                                          hasJoinedExpressionSourceGuild: f,
                                          isDisplayingJoinGuildButtonInPopout: R,
                                          closePopout: l,
                                      }),
                                      !f &&
                                          (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                  (0, s.jsx)(eL.D, {
                                                      onClick: function () {
                                                          (a(), E(!I));
                                                      },
                                                      className: s8.wK,
                                                      children: (0, s.jsxs)(sq.A, {
                                                          children: [
                                                              (0, s.jsx)(A.E, {
                                                                  className: s8.__invalid_showMoreEmojisLabel,
                                                                  variant: "text-xs/normal",
                                                                  color: "none",
                                                                  children: K.intl.string(K.t.vtH5hn),
                                                              }),
                                                              (0, s.jsx)(sX.a, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: o()(s8.ZB, { [s8.cP]: !I }),
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                                  I &&
                                                      (0, s.jsx)(sq.A, {
                                                          wrap: sq.A.Wrap.WRAP,
                                                          align: sq.A.Align.START,
                                                          justify: sq.A.Justify.START,
                                                          className: s8.LX,
                                                          children: e.map((e) =>
                                                              (0, s.jsx)(
                                                                  tw.m,
                                                                  {
                                                                      text: e.name,
                                                                      ...sV.Uk,
                                                                      children: (0, s.jsx)(
                                                                          "div",
                                                                          {
                                                                              className: o()(s8.Th, {
                                                                                  [s6.vT]: null != v && v !== e.id,
                                                                              }),
                                                                              onMouseEnter: () => {
                                                                                  C(e.id);
                                                                              },
                                                                              onMouseLeave: () => {
                                                                                  C(null);
                                                                              },
                                                                              children: (0, s.jsx)(sY.A, {
                                                                                  size: 32,
                                                                                  enlargeOnInteraction: !0,
                                                                                  enlargeWithName: !1,
                                                                                  enlargeScaleFactor: 2,
                                                                                  isInteracting: v === e.id,
                                                                                  sticker: e,
                                                                              }),
                                                                          },
                                                                          e.id,
                                                                      ),
                                                                  },
                                                                  e.id,
                                                              ),
                                                          ),
                                                      }),
                                              ],
                                          }),
                                  ],
                              });
                          })(),
                  ],
              }),
          })
        : (0, s.jsx)(sV.Y0, { className: s6.v0 });
}
function ri(e) {
    let { channel: t, closePopout: n, sticker: i } = e;
    return (0, s.jsx)(sJ.l, {
        "aria-label": i.name,
        children: (0, s.jsx)(sV.Uq, {
            className: s6.Bm,
            children: (0, s.jsx)(re, {
                sticker: i,
                description: K.intl.format(K.t.hGWuxU, {
                    openPremiumSettings: () => {
                        (n(), s7(t));
                    },
                }),
            }),
        }),
    });
}
let rl = function (e) {
    let { renderableSticker: t, channel: n, closePopout: i, refreshPositionKey: l } = e,
        [r, a] = (0, sF.Zq)(t, !0);
    return null != r && (0, lB.FD)(r)
        ? (0, s.jsx)(rt, { sticker: r, closePopout: i, channel: n, refreshPositionKey: l })
        : null != r && (0, lB.Xw)(r)
          ? (0, s.jsx)(rn, { sticker: r, channel: n, closePopout: i, refreshPositionKey: l })
          : a
            ? (0, s.jsx)(ri, { channel: n, closePopout: i, sticker: t })
            : (0, s.jsx)(sV.Y0, {});
};
var rs = n(751686);
let rr = (0, sH.xI)(sU.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    ra = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: i } = e,
            l = r.useRef(null),
            [a, o] = r.useState(!0),
            [d, c] = r.useState(String(Date.now())),
            [u] = (0, sF.Zq)(t, i),
            { analyticsLocations: m } = (0, I.Ay)(f.A.STICKER_MESSAGE),
            h = (0, s.jsxs)("span", {
                className: rs.Zl,
                children: [(0, s.jsx)(sG.s, { size: "xs", color: "currentColor", className: rs.lA }), (u ?? t).name],
            });
        return (0, s.jsx)(I.f5, {
            value: m,
            children: (0, s.jsx)("div", {
                className: rs.be,
                children: (0, s.jsx)(sw.Y, {
                    align: "center",
                    animation: sw.Y.Animation.TRANSLATE,
                    positionKey: d,
                    onRequestClose: () => {
                        o(!0);
                    },
                    renderPopout: (e) =>
                        (0, s.jsx)(rl, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => c(String(Date.now())),
                        }),
                    targetElementRef: l,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, s.jsx)(tw.m, {
                            ...sV.Uk,
                            shouldShow: a,
                            __unsupportedReactNodeAsText: (0, sB.yR)(h),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = u) &&
                                    nO.Ay.trackWithMetadata(Y.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: nN.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, sz.Tw)(e.format_type),
                                        is_custom: (0, sz.zN)(e.type),
                                    });
                            },
                            children: (0, s.jsx)(eL.D, {
                                innerRef: l,
                                className: rs.q7,
                                onClick: (e) => {
                                    (o(!a), n(e));
                                },
                                tag: "span",
                                children: (0, s.jsx)(sY.A, { isInteracting: i, size: rr, sticker: u ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
var ro = n(406704),
    rd = n(531142),
    rc = n(140735),
    ru = n(442433),
    rm = n(143413),
    rh = n(321045),
    rg = n(456874),
    rp = n(707539),
    rA = n(80682),
    rx = n(521981),
    rf = n(448368),
    rI = n(943220),
    rE = n(838541);
function rv(e) {
    let { message: t, channel: n } = e,
        { isBlocked: i, isIgnored: l } = (0, u.cf)(
            [P.A],
            () => ({ isBlocked: P.A.isBlockedForMessage(t), isIgnored: P.A.isIgnoredForMessage(t) }),
            [t],
        ),
        a = r.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, rA.Eq)(a, "ThreadMessageAccessoryMessage");
    let o = r.useMemo(
            () =>
                null != t.content && "" !== t.content
                    ? (0, rx.Ay)(t, { formatInline: !0, allowLinks: !0, allowGameMentions: !0 }).content
                    : null,
            [t],
        ),
        d = (0, sO.IL)(n);
    return (0, s.jsxs)("div", {
        className: l4.up,
        children: [
            (0, s.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: l4.FJ }),
            (0, s.jsx)(rI.A, { message: t, channel: n, compact: !0 }),
            (0, s.jsx)("div", {
                className: l4.Au,
                children: d
                    ? (0, s.jsx)("span", { className: l4.dp, children: K.intl.string(K.t["5uaI/7"]) })
                    : (function (e, t, n, i) {
                          let {
                              contentPlaceholder: l,
                              renderedContent: r,
                              leadingIcon: a,
                              trailingIcon: o,
                          } = (0, rf.o)(e, t, n, i, l4.tP, {
                              trailingIconClass: l4._v,
                              leadingIconClass: l4.a5,
                              iconSize: rE.eJ,
                          });
                          return (0, s.jsxs)(s.Fragment, {
                              children: [a, r ?? (0, s.jsx)("span", { className: l4.dp, children: l }), o],
                          });
                      })(t, o, i, l),
            }),
        ],
    });
}
var rC = n(747926),
    r_ = n(650583),
    rj = n(77462);
function rN(e) {
    let { message: t, compact: n } = e,
        i = (0, u.bG)([M.A], () => M.A.getChannel(il.default.castMessageIdAsChannelId(t.id)));
    return null == i ? null : (0, s.jsx)(ry, { channel: i, compact: n, isSystemMessage: (0, rm.A)(t) });
}
function ry(e) {
    var t;
    let i,
        l,
        r,
        { channel: a, compact: d, isSystemMessage: c } = e,
        m = (0, it.Ay)(a),
        h = (0, u.bG)([rg.A], () => rg.A.getCount(a.id)),
        g =
            ((t = a),
            (i = (0, u.bG)([rg.A], () => rg.A.getMostRecentMessage(t.id))),
            (l = (0, u.bG)([rg.A], () => rg.A.getCount(t.id))),
            (r = (0, rp.JO)(t)),
            t.threadMetadata?.archived
                ? K.intl.string(K.t.ZTo4HS)
                : null == l || 0 === l
                  ? K.intl.string(K.t.HYtNyE)
                  : null == i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("span", { children: K.intl.string(K.t.ZTo4HS) }),
                              (0, s.jsx)("span", { className: rj.vE, children: (0, rp.aK)(r) }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(rv, { message: i, channel: t }),
                              (0, s.jsx)("span", { className: rj.vE, children: (0, rp.aK)(r) }),
                          ],
                      })),
        p = null != h && h > 0;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", { className: o()(rj.GI, { [rj.E]: !d, [rj.E_]: c }) }),
            (0, s.jsx)(eL.D, {
                onClick: function (e) {
                    (e.stopPropagation(), (0, rC.JA)(a, e.shiftKey));
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === r_.dh.SPACE || e.key === r_.dh.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, rC.JA)(a, n));
                },
                onContextMenu: function (e) {
                    (0, ru.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("391763"),
                            n.e("955557"),
                            n.e("368358"),
                            n.e("947502"),
                            n.e("603998"),
                            n.e("343266"),
                            n.e("965789"),
                            n.e("691671"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("896804"),
                            n.e("275289"),
                            n.e("421060"),
                            n.e("697367"),
                            n.e("699011"),
                            n.e("703869"),
                            n.e("51212"),
                            n.e("584615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, s.jsx)(e, { channel: a, ...t });
                    });
                },
                "aria-roledescription": K.intl.string(K.t["8ipxiY"]),
                className: o()(rj.kL, { [rj.og]: c }),
                children: (0, s.jsxs)(rd.R, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: rj.kq,
                            children: [
                                (0, s.jsx)(rc.A, { children: K.intl.string(K.t["7Xm5QI"]) }),
                                (0, s.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    className: rj.UU,
                                    children: m,
                                }),
                                (0, s.jsx)("span", {
                                    className: rj.lO,
                                    "aria-hidden": !p,
                                    children: (0, rh.ub)(h, a.id),
                                }),
                            ],
                        }),
                        (0, s.jsx)(A.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: rj.sb,
                            children: g,
                        }),
                    ],
                }),
            }),
        ],
    });
}
var rT = n(168543),
    rS = n(321191),
    rb = n(215530),
    rk = n(331322),
    rR = n(562153),
    rL = n(183555),
    rM = n(999291),
    rP = n(391210),
    rD = n(249790),
    rO = n(254828),
    rU = n(783123),
    rG = n(213994),
    rw = n(753504);
function rB(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l, onReveal: r } = e,
        a = (0, u.bG)([O.default], () => O.default.getUser(t)),
        o = (0, u.bG)([P.A], () => P.A.isBlocked(t)),
        d = rR.Ay.useName(n, i, a),
        c = (0, rM.Ay)(t, n),
        [m, h] = (0, rP.A)(),
        { analyticsLocations: g } = (0, I.Ay)(o ? f.A.BLOCKED_PROFILE_EMBED : f.A.IGNORED_PROFILE_EMBED),
        p = (0, rL.pb)({ layout: "EMBED", userId: t, guildId: n, channelId: i, messageId: l });
    return null == a
        ? null
        : (0, s.jsx)(I.f5, {
              value: g,
              children: (0, s.jsx)(rL.of, {
                  value: p,
                  fetchStartedAt: c?.fetchStartedAt,
                  fetchEndedAt: c?.fetchEndedAt,
                  isLoaded: c?.isLoaded === !0 && m,
                  children: (0, s.jsx)(rG.A, {
                      user: a,
                      displayProfile: null,
                      size: "sm",
                      className: rw.k,
                      containerRef: h,
                      headingText: K.intl.formatToPlainString(K.t["8yRya1"], { name: d }),
                      children: (0, s.jsxs)(rk.B, {
                          align: "center",
                          gap: 16,
                          children: [
                              (0, s.jsxs)(rk.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rD.A, { user: a, guildId: n }),
                                      (0, s.jsx)(e4.D, {
                                          variant: "heading-lg/bold",
                                          children: K.intl.string(K.t.b33pLD),
                                      }),
                                      (0, s.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          children: K.intl.format(o ? K.t["8F+WNz"] : K.t["/cZp5s"], { username: d }),
                                      }),
                                  ],
                              }),
                              (0, s.jsxs)(rk.B, {
                                  align: "center",
                                  gap: 8,
                                  children: [
                                      (0, s.jsx)(rU.A, { isBlocked: o, onClick: r }),
                                      (0, s.jsx)(rO.A, { userId: t, onClick: r }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              }),
          });
}
var rV = n(273147),
    rH = (((i = {}).NO_USER_RECORD = "NO_USER_RECORD"), (i.RENDER_ERROR = "RENDER_ERROR"), i);
function rF(e) {
    let { userId: t, reason: n, guildId: i, channelId: l, errorStatus: s } = e;
    nO.Ay.trackWithMetadata(Y.HAw.USER_PROFILE_EMBED_RENDER_FAILED, {
        linked_user_id: t,
        failure_reason: n,
        error_status: s,
        guild_id: i ?? void 0,
        channel_id: l ?? void 0,
    });
}
function rz(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e,
        [a, o] = (0, rb.A)(t),
        d = r.useRef(!1),
        c = (0, u.bG)(
            [O.default, rS.A],
            () => {
                if (rS.A.isFetchingProfile(t, n ?? void 0) || null != O.default.getUser(t)) return null;
                let e = rS.A.getUserProfile(t);
                return (e?.fetchEndedAt ?? 0) > 0 ? rH.NO_USER_RECORD : null;
            },
            [t, n],
        ),
        m = r.useRef(!1);
    (r.useEffect(() => {
        m.current = !1;
    }, [t]),
        r.useEffect(() => {
            null == c ||
                m.current ||
                ((m.current = !0),
                rF({
                    userId: t,
                    reason: c,
                    guildId: n,
                    channelId: i,
                    errorStatus: rS.A.getUserProfile(t)?.fetchError?.status,
                }));
        }, [c, t, n, i]));
    let h = r.useCallback((e) => {
            null != e && d.current && ((d.current = !1), e.focus());
        }, []),
        g = r.useCallback(() => {
            ((d.current = !0), o());
        }, [o]);
    return a
        ? (0, s.jsx)(rB, { userId: t, guildId: n, channelId: i, messageId: l, onReveal: g })
        : (0, s.jsx)(rV.G, { userId: t, guildId: n, channelId: i, messageId: l, headingRef: h });
}
class rY extends r.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch(e) {
        (nt.A.captureException(e),
            rF({
                userId: this.props.userId,
                reason: rH.RENDER_ERROR,
                guildId: this.props.guildId,
                channelId: this.props.channelId,
            }));
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
function rK(e) {
    let { userId: t, guildId: n, channelId: i, messageId: l } = e;
    return (0, rT.c)("UserProfileEmbed")
        ? (0, s.jsx)(rY, {
              userId: t,
              guildId: n,
              channelId: i,
              children: (0, s.jsx)(rz, { userId: t, guildId: n, channelId: i, messageId: l }),
          })
        : null;
}
var rW = n(383233),
    rJ = n(834942),
    rX = n(644447),
    rZ = n(659674),
    rq = n(998218),
    r$ = n(5095),
    rQ = n(294520),
    r0 = n(320095),
    r1 = n(863439),
    r2 = n(869938),
    r3 = n(707985),
    r5 = n(730852),
    r4 = n(265422),
    r9 = n(537547);
function r6(e) {
    let { guild: t, channel: n, message: i } = e,
        l = D.A.getGuildId(),
        a = ea.Ay.getChannelId(l),
        o = r.useCallback(() => {
            (eV.default.track(Y.HAw.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: i.author?.id,
                link_guild_id: t.id,
                link_channel_id: n.id,
                link_channel_type: n.type,
                guild_id: l,
                channel_id: a,
            }),
                (0, r4.i)(t.id, n.id),
                r5.default.selectVoiceChannel(n.id));
        }, [i, t, n, l, a]),
        d = (0, s.jsx)(i$.A.Channel, { channel: n });
    return (0, s.jsx)(i$.A, {
        children: (0, s.jsxs)(i$.A.Body, {
            children: [
                (0, s.jsxs)("div", {
                    className: ls.iH,
                    children: [
                        (0, s.jsx)(i$.A.Icon, { guild: t }),
                        (0, s.jsx)(i$.A.Info, {
                            title: d,
                            onClick: o,
                            children: (0, s.jsxs)("span", {
                                className: ls.FA,
                                children: [
                                    K.intl.format(K.t["2wimj5"], { guildName: t.name }),
                                    (0, s.jsx)("span", {
                                        className: ls.E3,
                                        children: (0, s.jsx)(r9.A, { guild: t, isBannerVisible: !1 }),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: ls.UD,
                    children: (0, s.jsx)(eh.$, {
                        fullWidth: !0,
                        onClick: o,
                        variant: "active",
                        text: n.isGuildStageVoice() ? K.intl.string(K.t["7vb2cc"]) : K.intl.string(K.t["96ANUN"]),
                    }),
                }),
            ],
        }),
    });
}
function r8(e) {
    let { code: t, message: n } = e,
        [i, l] = t.split("/"),
        r = M.A.getChannel(l),
        a = nV.A.getGuild(i);
    return null != r && r.isGuildVocal() && null != a && te.A.can(Y.xBc.VIEW_CHANNEL, r) && te.A.can(Y.xBc.CONNECT, r)
        ? (0, s.jsx)(r6, { guild: a, channel: r, message: n })
        : null;
}
var r7 = n(789645),
    ae = n(298236),
    at = n(953756),
    an = n(564107),
    ai = n(216763),
    al = n(359886);
function as(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: i,
            getGifFavButton: l,
            getOnMediaItemContextMenu: r,
            shouldHideMediaOptions: a,
            enabledContentHarmTypeFlags: d,
            onSuppressEmbed: c,
            hiddenSpoiler: u = !1,
        } = e,
        [m, h] = (0, at.zn)();
    return 0 === t.length
        ? null
        : (0, s.jsx)(an.N, {
              gifAutoPlay: i,
              getGifFavButton: l,
              getOnMediaItemContextMenu: r,
              shouldHideMediaOptions: a,
              enabledContentHarmTypeFlags: d,
              children: (0, s.jsx)(ae.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, s.jsx)(at.O7.Root, {
                      containerInnerWidth: h,
                      children: (0, s.jsx)("div", {
                          style: { width: "100%" },
                          ref: m,
                          children: (0, s.jsx)(at.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, s.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": u,
                                      className: o()(ai.O0, al.k, al.z, { [ai.dK]: u }),
                                      children: [
                                          null != c &&
                                              (0, s.jsx)(eL.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: ai.PP,
                                                  onClick: c,
                                                  "aria-label": K.intl.string(K.t.GT3fNz),
                                                  children: (0, s.jsx)(r7.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, lu.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
var ar = n(451988),
    aa = n(261958),
    ao = n(212245),
    ad = n(775602),
    ac = n(62583),
    au = n(550151),
    am = n(392054),
    ah = n(853390),
    ag = n(290863),
    ap = n(811024),
    aA = n(818023),
    ax = n(555375);
let af = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        l = (0, lb.j)(),
        s = (0, u.bG)([ad.Ay], () => ad.Ay.useReducedMotion),
        a = !1 === l || s;
    return (
        r.useEffect(() => {
            let e = new ar.IX();
            return (
                e.start(a ? 15 * nh.A.Millis.SECOND : nh.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / nh.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [a, t]),
        (0, ah.fU)(n)
    );
});
af.displayName = "ActivityRuntimeCounter";
let aI = r.memo(function (e) {
    let t,
        { application: n, channelId: i, guildId: l, message: a } = e,
        { analyticsLocations: d } = (0, I.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        c = (0, ao.p)(),
        m = (0, u.bG)([M.A], () => M.A.getChannel(i), [i]),
        h = m?.isThread?.() ? m?.parent_id : i,
        g = (0, u.bG)([L.default], () => L.default.getId()),
        {
            embeddedActivity: p,
            currentEmbeddedActivity: x,
            activityLaunchState: E,
        } = (0, u.cf)(
            [eo.Ay],
            () => ({
                embeddedActivity: eo.Ay.getEmbeddedActivitiesForChannelIncludingHidden(h ?? "").find(
                    (e) => e.applicationId === n.id,
                ),
                currentEmbeddedActivity: eo.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: eo.Ay.getLaunchState(n.id, h ?? void 0),
            }),
            [h, n.id],
        ),
        v = p?.userIds,
        C = (0, u.yK)(
            [O.default],
            () =>
                Array.from(v ?? [])
                    .map((e) => O.default.getUser(e))
                    .filter(iP.Vq),
            [v],
        ),
        _ = (0, u.bG)(
            [ag.A],
            () => {
                if (null == v) return null;
                for (let e of v) {
                    let t = ag.A.findActivity(e, (e) => e.application_id === n.id);
                    if (null != t) return t;
                }
                return null;
            },
            [n.id, v],
        ),
        j = _?.details,
        N = r.useMemo(() => {
            let e = new iQ.Ay(n);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = aA.Gl), e);
        }, [n]),
        T = (0, au.vG)({ userId: g, channelId: i, application: N }),
        S = null == p,
        b = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e;
            return r.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            r = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? K.intl.string(K.t.RscU7I) : K.intl.string(K.t.sqe0hj),
                                tooltip: void 0,
                            },
                            a = (0, ap.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: K.intl.string(K.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...r, disabled: !a, tooltip: a ? void 0 : K.intl.string(K.t.f41E1g) };
                        if (null != n && n !== au.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case au.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = K.intl.string(K.t.hHGrWz);
                                    break;
                                case au.Gy.ACTIVITY_AGE_GATED:
                                    e = K.intl.string(K.t["4WuFRE"]);
                                    break;
                                case au.Gy.CHANNEL_CONTENT_GATED:
                                    e = K.intl.string(K.t.pKLV22);
                                    break;
                                case au.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = K.intl.string(K.t.uGDCcw);
                                    break;
                                case au.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = K.intl.string(K.t.UXoQTp);
                                    break;
                                case au.Gy.CHANNEL_FULL:
                                    e = K.intl.string(K.t.rZfiNq);
                                    break;
                                case au.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = K.intl.string(K.t.w5SAps);
                                    break;
                                case au.Gy.NO_CHANNEL:
                                case au.Gy.NO_GUILD:
                                case au.Gy.NO_USER:
                                case au.Gy.IS_AFK_CHANNEL:
                                    e = K.intl.string(K.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l }),
                [t, n, i, l],
            );
        })({ embeddedActivity: p, joinability: T, currentEmbeddedActivity: x, channel: m }),
        k = r.useId(),
        R = null != E && E.isLaunching && E.componentId === k;
    async function P() {
        (eV.default.track(Y.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
            application_id: n.id,
            channel_id: i,
            channel_type: m?.type,
            is_activity_start: S,
            cta: "Play",
        }),
            S
                ? await y.A.launch({
                      applicationId: n.id,
                      channelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: k,
                      commandOrigin: am.iw.ACTIVITY_INSTANCE_EMBED,
                  })
                : await (0, ac.A)({
                      applicationId: p.applicationId,
                      activityChannelId: i,
                      locationObject: c.location,
                      analyticsLocations: d,
                      componentId: k,
                  }));
    }
    let D = b.disabled ? K.intl.string(K.t.JBnc7N) : K.intl.string(K.t.cX9uLZ),
        G = (0, $.F)(N, () => {
            eV.default.track(Y.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: i,
                channel_type: m?.type,
                cta: "View",
            });
        }),
        w = U.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    b.disabled && (t = b.tooltip);
    let z = C.length,
        W = _?.timestamps?.start ?? _?.created_at,
        Z = (function (e) {
            let { activity: t, activityUsersCount: n } = e;
            switch (t?.type) {
                case Y.$pd.STREAMING:
                    return { text: K.intl.formatToPlainString(K.t.tyCw2q, { count: n }), Icon: V.o };
                case Y.$pd.LISTENING:
                    return { text: K.intl.formatToPlainString(K.t["2l8yka"], { count: n }), Icon: H.T };
                default:
                    return { text: K.intl.formatToPlainString(K.t.yJj035, { count: n }), Icon: F.GameControllerIcon };
            }
        })({ activity: _, activityUsersCount: z }),
        q = [
            {
                label: b.text,
                trackingArea: X.kY.PLAY,
                onClick: P,
                disabled: b.disabled,
                disabledReason: t,
                submitting: R,
            },
        ];
    return (0, s.jsx)(B.h, {
        header: K.intl.string(K.t.pkq6Vq),
        title: n.name,
        iconSrc: w,
        info: (0, s.jsx)("div", {
            className: ax.QR,
            children: S
                ? (0, s.jsx)(A.E, { variant: "text-xs/medium", color: "none", children: D })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != j &&
                              (0, s.jsxs)("div", {
                                  className: ax.oL,
                                  children: [
                                      null != W &&
                                          (0, s.jsxs)("div", {
                                              className: ax.DT,
                                              children: [
                                                  (0, s.jsx)("div", {
                                                      className: ax.y9,
                                                      children: (0, s.jsx)(Z.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, s.jsx)(A.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, s.jsx)(af, { start: W }),
                                                  }),
                                              ],
                                          }),
                                      (0, s.jsxs)("div", {
                                          className: o()(ax.DT, ax.PK),
                                          children: [
                                              (0, s.jsx)("div", {
                                                  children: (0, s.jsx)(aa.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, s.jsx)(A.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: j,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          z > 0 && (0, s.jsx)(J, { activityUsers: C, guildId: l, activityText: Z.text }),
                      ],
                  }),
        }),
        actions: q,
        onClickContent: G,
        trackingConfig: {
            id: n.id,
            linkType: Q.J.ACTIVITY_INSTANCE,
            guildId: l,
            channelId: i,
            messageId: a.id,
            isDeadEnd: S,
        },
    });
});
var aE = n(164664),
    av = n(439401),
    aC = n(657044),
    a_ = n(863574),
    aj = n(707606),
    aN = n(456412),
    ay = n(242874),
    aT = n(499454),
    aS = n(180522),
    ab = n(928550),
    ak = n(30793),
    aR = n(189081);
function aL(e) {
    let { color: t = "currentColor", foreground: n, ...i } = e;
    return (0, s.jsx)("svg", {
        ...(0, le.A)(i),
        viewBox: "0 0 136 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, s.jsxs)("g", {
            className: n,
            fill: t,
            children: [
                (0, s.jsx)("path", {
                    d: "M124.299 22.9512H107.187C106.75 22.9512 106.368 23.2787 106.313 23.7154L105.495 29.3918C105.413 29.9103 105.822 30.4015 106.368 30.4015H109.506C109.834 30.4015 110.025 30.729 109.916 31.0019C109.534 31.9025 109.234 32.9122 109.097 33.9766L107.514 44.9746C106.477 52.343 112.591 56 119.277 56C126.264 56 133.142 52.3157 134.179 44.9746L135.762 33.9766C136.744 26.7719 130.822 23.115 124.299 22.9512ZM127.574 34.0038L125.991 44.7563C125.636 47.2943 122.771 48.4678 120.123 48.4678C117.667 48.4678 115.265 47.2943 115.593 44.9746L117.176 33.9766C117.53 31.575 120.396 30.3469 123.043 30.3469C125.691 30.3469 127.956 31.575 127.574 34.0038Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M29.3491 22.9512H22.9627C22.526 22.9512 22.1439 23.2787 22.0894 23.7154L20.1243 37.7154V37.7427L20.2062 43.1462C20.2062 43.2553 20.1243 43.3645 20.0151 43.3918L18.1866 36.8694V36.8421L12.4825 23.497C12.346 23.1696 12.0185 22.9512 11.6637 22.9512H5.19545C4.75878 22.9512 4.37668 23.2787 4.3221 23.7154L0.00992229 54.5536C-0.0719545 55.0994 0.364722 55.5633 0.883275 55.5633H7.32425C7.76092 55.5633 8.14302 55.2358 8.1976 54.7992L9.88972 42.5458V42.5185L9.80784 36.2417L9.99889 36.1871L11.9366 42.7095V42.7368L17.2586 55.0448C17.3951 55.3723 17.7226 55.5906 18.0774 55.5906H25.0642C25.5009 55.5906 25.883 55.2631 25.9376 54.8265L30.2497 23.9883C30.3316 23.4425 29.8949 22.9512 29.3491 22.9512Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M43.322 22.9512H36.8814C36.4448 22.9512 36.0627 23.2787 36.0081 23.7154L31.6962 54.5263C31.6144 55.0721 32.051 55.536 32.5695 55.536H39.0101C39.4467 55.536 39.8288 55.2085 39.8834 54.7719L44.1953 23.961C44.2771 23.4424 43.8678 22.9512 43.322 22.9512Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M73.5353 22.9512H49.4363C48.9996 22.9512 48.6175 23.2787 48.5629 23.7154L47.7168 29.4736C47.635 30.0194 48.0443 30.4834 48.5902 30.4834H55.3314C55.8772 30.4834 56.2866 30.9473 56.2047 31.4931L53.0388 54.5263C52.957 55.0721 53.3936 55.536 53.9122 55.536H60.435C60.8717 55.536 61.2538 55.2085 61.3084 54.7719L64.5562 31.2475C64.6107 30.8109 64.9928 30.4834 65.4295 30.4834H72.662C73.0986 30.4834 73.4807 30.1559 73.5353 29.7192L74.3814 23.961C74.5178 23.4424 74.0812 22.9512 73.5353 22.9512Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M91.9575 22.9512H79.7033C79.2666 22.9512 78.8845 23.2787 78.8299 23.7154L74.5177 54.5263C74.4359 55.0721 74.8725 55.536 75.3911 55.536H81.9139C82.3506 55.536 82.7327 55.2085 82.7873 54.7719L84.0427 45.575C84.07 45.3567 84.2611 45.1929 84.4794 45.1929H85.3255C85.4892 45.1929 85.6257 45.2748 85.7076 45.4113L91.9302 55.1539C92.0939 55.3996 92.3669 55.5633 92.6944 55.5633H100.773C101.482 55.5633 101.919 54.7446 101.51 54.1715L94.9596 44.8109C94.7959 44.5925 94.8778 44.2651 95.1234 44.1559C99.2991 42.1091 101.728 40.035 102.52 34.1949C103.448 26.5536 98.6714 22.9512 91.9575 22.9512ZM94.1954 34.3313C93.9771 36.2144 92.5033 38.0974 89.9651 38.0974H86.1715C85.6257 38.0974 85.2163 37.6062 85.2982 37.0877L86.1169 31.4113C86.1715 30.9746 86.5536 30.6471 86.9903 30.6471H91.0568C93.4586 30.6471 94.4411 32.3664 94.1954 34.3313Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M29.1035 3.43858H33.7428C34.8617 3.43858 35.8169 3.60233 36.581 3.9571C37.2906 4.2573 37.891 4.77581 38.3276 5.43079C38.7097 6.08576 38.928 6.8226 38.9007 7.55944C38.9007 8.32357 38.7097 9.06041 38.3003 9.71539C37.8637 10.3976 37.2087 10.9162 36.4719 11.2437C35.6532 11.6257 34.6161 11.8167 33.4153 11.8167H29.1035V3.43858V3.43858ZM33.3881 9.66081C34.1522 9.66081 34.7253 9.46977 35.1346 9.08771C35.544 8.67835 35.7623 8.13254 35.735 7.53215C35.7623 6.98634 35.5713 6.46782 35.1892 6.08576C34.8345 5.73098 34.2886 5.53995 33.5518 5.53995H32.1054V9.63351H33.3881V9.66081Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M45.8881 11.7895C45.2877 11.6257 44.6873 11.3801 44.1415 11.0526V9.06043C44.6055 9.4152 45.1513 9.66082 45.6971 9.79727C46.3248 9.9883 46.9525 10.0702 47.6074 10.0975C47.8258 10.0975 48.0441 10.0702 48.2624 9.9883C48.3989 9.90643 48.4807 9.82456 48.4807 9.7154C48.4807 9.60624 48.4534 9.49707 48.3716 9.4152C48.2351 9.30604 48.0714 9.25146 47.9076 9.22417L46.4885 8.89668C45.6698 8.70565 45.0967 8.43275 44.7419 8.10526C44.3872 7.75049 44.1961 7.25926 44.2234 6.76803C44.2234 6.33138 44.3872 5.89473 44.6873 5.56725C45.0421 5.18518 45.4788 4.91228 45.97 4.77583C46.5977 4.58479 47.2527 4.47563 47.9349 4.50292C48.5626 4.50292 49.163 4.5575 49.7634 4.72124C50.2546 4.83041 50.7185 5.02144 51.1552 5.26705V7.1501C50.7458 6.90448 50.3092 6.74074 49.8725 6.63158C49.3813 6.49512 48.8628 6.44054 48.3716 6.44054C47.6347 6.44054 47.2527 6.577 47.2527 6.82261C47.2527 6.93177 47.3072 7.04093 47.4164 7.09551C47.6074 7.17739 47.8258 7.23197 48.0441 7.28655L49.2449 7.50487C50.009 7.64132 50.6094 7.88694 50.9914 8.21442C51.3735 8.54191 51.5645 9.06043 51.5645 9.7154C51.5645 10.4249 51.2098 11.0799 50.6094 11.4347C49.9817 11.8441 49.0811 12.0624 47.9076 12.0624C47.2254 12.0351 46.5431 11.9532 45.8881 11.7895Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M54.3486 11.5438C53.7209 11.2436 53.1751 10.7797 52.7931 10.1793C52.4383 9.60622 52.2745 8.92396 52.2745 8.2417C52.2745 7.55944 52.4383 6.90447 52.8203 6.33137C53.2024 5.73098 53.7482 5.29433 54.4032 4.99413C55.1946 4.66665 56.0406 4.47562 56.8866 4.50291C58.0874 4.50291 59.0699 4.74852 59.8613 5.26704V7.45027C59.5611 7.25924 59.2336 7.0955 58.8788 6.98634C58.4968 6.87718 58.0874 6.7953 57.678 6.7953C56.9412 6.7953 56.3681 6.93176 55.9315 7.20466C55.3311 7.53215 55.14 8.26899 55.4675 8.86938C55.5767 9.06041 55.7404 9.22415 55.9315 9.33332C56.3408 9.60622 56.9139 9.74267 57.7053 9.74267C58.1147 9.74267 58.4968 9.68809 58.8788 9.57893C59.2336 9.46977 59.5611 9.33332 59.8613 9.14228V11.2436C58.9334 11.7895 57.8964 12.0624 56.832 12.0351C55.986 12.0624 55.1127 11.8986 54.3486 11.5438Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M62.8365 11.5439C62.1816 11.2437 61.6358 10.7797 61.2537 10.1793C60.8989 9.60624 60.7079 8.92398 60.7079 8.24171C60.7079 7.55945 60.8716 6.90448 61.2537 6.33138C61.6358 5.75828 62.1816 5.29435 62.8365 5.02144C64.3921 4.39376 66.166 4.39376 67.7215 5.02144C68.3492 5.29435 68.895 5.75828 69.2771 6.33138C69.6319 6.90448 69.8229 7.58674 69.8229 8.24171C69.8229 8.92398 69.6319 9.60624 69.2771 10.1793C68.895 10.7797 68.3492 11.2437 67.7215 11.5439C66.1387 12.1988 64.3921 12.1988 62.8365 11.5439ZM66.4389 9.4152C66.7391 9.11501 66.9028 8.67836 66.8755 8.269C66.9028 7.83236 66.7391 7.423 66.4389 7.12281C66.1114 6.82261 65.6747 6.68616 65.2381 6.68616C64.8015 6.65887 64.3648 6.82261 64.0373 7.12281C63.7371 7.423 63.5734 7.83236 63.6007 8.269C63.5734 8.70565 63.7371 9.11501 64.0373 9.4152C64.3648 9.7154 64.8015 9.87914 65.2381 9.85185C65.702 9.87914 66.1387 9.7154 66.4389 9.4152Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M76.9736 4.93955V7.53214C76.6188 7.31381 76.2095 7.20465 75.8001 7.23194C75.1724 7.23194 74.6812 7.42298 74.3264 7.80504C73.999 8.18711 73.8079 8.7875 73.8079 9.60621V11.7894H70.8878V4.80309H73.7533V7.01362C73.9171 6.19491 74.1627 5.59452 74.5175 5.21245C74.8723 4.83038 75.3635 4.61206 75.882 4.63935C76.2641 4.63935 76.6461 4.74851 76.9736 4.93955Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M86.6895 3.19298V11.7895H83.7694V10.2339C83.5511 10.7797 83.1418 11.2709 82.6505 11.5711C82.0774 11.8986 81.4497 12.0624 80.7948 12.0351C80.1944 12.0624 79.594 11.8713 79.0755 11.5439C78.5842 11.2164 78.1749 10.7524 77.9293 10.2066C77.6564 9.60623 77.5199 8.95126 77.5199 8.29629C77.4926 7.61403 77.6564 6.93177 77.9293 6.33138C78.2022 5.75828 78.6388 5.29434 79.1573 4.96686C79.7032 4.63937 80.3308 4.47563 80.9585 4.47563C82.3503 4.47563 83.2782 5.07602 83.7694 6.2768V3.19298H86.6895ZM83.3328 9.36062C83.633 9.06042 83.7967 8.65107 83.7694 8.24171C83.7694 7.83235 83.6057 7.423 83.3328 7.15009C82.6505 6.57699 81.6681 6.57699 80.9585 7.15009C80.6583 7.45029 80.4946 7.83235 80.5219 8.24171C80.4946 8.65107 80.6583 9.06042 80.9585 9.36062C81.286 9.66081 81.6954 9.79727 82.132 9.79727C82.5959 9.82456 83.0053 9.66081 83.3328 9.36062Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M18.3503 1.36452C16.9311 0.736842 15.4301 0.272904 13.8744 0C13.6561 0.382066 13.465 0.764132 13.3013 1.17349C11.6637 0.927875 9.9716 0.927875 8.33407 1.17349C8.17031 0.764132 7.97927 0.382066 7.76093 0C6.23256 0.272904 4.73149 0.736842 3.285 1.39181C0.473899 5.56725 -0.290284 9.63353 0.0918077 13.6725C1.75664 14.9006 3.61251 15.8285 5.57755 16.4288C6.01423 15.8285 6.42361 15.2008 6.75112 14.5458C6.1234 14.3002 5.49567 14 4.89524 13.6725C5.059 13.5633 5.19546 13.4542 5.35921 13.345C8.82533 14.9825 12.8373 14.9825 16.3307 13.345C16.4672 13.4542 16.6309 13.5906 16.7947 13.6725C16.1942 14.0273 15.5938 14.3275 14.9388 14.5458C15.2663 15.2008 15.6757 15.8285 16.1124 16.4288C18.0774 15.8285 19.9333 14.9006 21.5981 13.6725C22.0348 9.00585 20.8066 4.96686 18.3503 1.36452ZM7.21509 11.1891C6.15069 11.1891 5.25004 10.2066 5.25004 9.03314C5.25004 7.85965 6.0961 6.8499 7.18779 6.8499C8.27948 6.8499 9.15284 7.83236 9.15284 9.03314C9.15284 10.2339 8.30678 11.1891 7.21509 11.1891ZM14.4202 11.1891C13.3558 11.1891 12.4825 10.2066 12.4825 9.03314C12.4825 7.85965 13.3285 6.8499 14.4202 6.8499C15.5119 6.8499 16.3853 7.83236 16.358 9.03314C16.358 10.2339 15.5119 11.1891 14.4202 11.1891Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M41.3849 5.56724C42.1837 5.56724 42.8313 4.98076 42.8313 4.2573C42.8313 3.53384 42.1837 2.94736 41.3849 2.94736C40.5861 2.94736 39.9385 3.53384 39.9385 4.2573C39.9385 4.98076 40.5861 5.56724 41.3849 5.56724Z",
                    fill: t,
                }),
                (0, s.jsx)("path", {
                    d: "M39.9385 6.46785C40.8664 6.84992 41.9307 6.84992 42.8586 6.46785V11.8441H39.9385V6.46785Z",
                    fill: t,
                }),
            ],
        }),
    });
}
var aM = n(339586),
    aP = n(45938),
    aD = n(615396),
    aO = n(427262),
    aU = n(561028),
    aG = n(820284),
    aw = n(674378),
    aB = n(598429),
    aV = n(979604);
function aH(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: l,
            disabledVariant: r,
            hideNotLaunchable: a,
            tooltipPosition: o,
            onClick: d,
            className: c,
            source: m,
            hover: h,
            innerClassName: g,
        } = e,
        p = {
            fullWidth: n,
            size: i,
            disabledVariant: r,
            tooltipPosition: o,
            onClick: d,
            className: c,
            hover: h,
            innerClassName: g,
        },
        A = (0, u.bG)([aR.A], () => aR.A.getActiveLibraryApplication(t.id)),
        x = null != A ? A.sku.id : null,
        f = null != x ? x : t.primarySkuId,
        I = (0, u.bG)([ew.A], () => null != f && !ew.A.didFetchingSkuFail(f));
    return null != A && (0, aw.XZ)(A)
        ? (0, s.jsx)(aV.A, { ...p, playButtonVariant: l, libraryApplication: A, source: m })
        : I
          ? (0, s.jsx)("div", { children: "deprecated!" })
          : (0, s.jsx)(aB.A, { ...p, variant: l, hideNotLaunchable: a, applicationId: t.id });
}
function aF(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return K.intl.string(K.t.RWouSQ);
    if (e.premium && !n) return K.intl.string(K.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, tZ.$g)(i.amount, i.currency);
        else return K.intl.string(K.t.QQsaCc);
    return K.intl.string(K.t.RWouSQ);
}
var az = n(176140),
    aY =
        (((l = aY || {})[(l.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (l[(l.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (l[(l.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (l[(l.LISTING = 4)] = "LISTING"),
        (l[(l.EMBED = 5)] = "EMBED"),
        l);
function aK(e) {
    let { className: t } = e;
    return (0, s.jsxs)("div", {
        className: o()(az.nM, t),
        children: [
            (0, s.jsx)(aC._, { size: "md", color: "currentColor", className: az.Kk }),
            K.intl.string(K.t["7eicAO"]),
        ],
    });
}
function aW(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(az.nM, n),
        children: [(0, s.jsx)(tg.t, { size: "md", color: "currentColor", className: az.Kk }), aF(t)],
    });
}
function aJ(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(az.EQ, n), children: t.getDisplaySalePercentage() });
}
function aX(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: o()(az.I8, n), children: aF(t, !1) });
}
function aZ(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsx)("div", { className: n, children: aF(t) });
}
function aq(e) {
    let { sku: t, className: n } = e;
    return (0, s.jsxs)("div", {
        className: o()(az.nM, n),
        children: [(0, s.jsx)(aJ, { sku: t }), (0, s.jsx)(aX, { sku: t }), (0, s.jsx)(aZ, { sku: t })],
    });
}
function a$(e) {
    let { className: t } = e;
    return (0, s.jsx)("div", { className: t, children: K.intl.string(K.t.QQsaCc) });
}
class aQ extends r.PureComponent {
    static Types = aY;
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        if (t.premium) return 3;
        if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(a$, { className: o()(t, n) });
            case 1:
                return (0, s.jsx)(aK, { className: o()(t, n) });
            case 3:
                return (0, s.jsx)(aW, { sku: i, className: o()(t, n) });
            case 2:
                return (0, s.jsx)(aq, { sku: i, className: o()(t, n) });
            default:
                return (0, s.jsx)(aZ, { className: o()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, s.jsx)(a$, { className: t });
            case 3:
                return (0, s.jsx)(aW, { sku: n, className: o()(az.OB, t) });
            case 2:
                return (0, s.jsx)(aq, { sku: n, className: o()(az.dk, t) });
            default:
                return (0, s.jsx)(aZ, { className: o()(az.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, s.jsx)(a$, {});
                break;
            case 2:
                t = (0, s.jsxs)(r.Fragment, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: az.nM,
                            children: [(0, s.jsx)(aZ, { sku: i }), (0, s.jsx)(aJ, { sku: i })],
                        }),
                        (0, s.jsx)(aX, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, s.jsx)(aZ, { sku: i });
        }
        return (0, s.jsx)("div", { className: o()(az.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, az.Pl);
            case 3:
                return this.renderGeneric(e, az.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, az.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var a0 = n(301568);
let a1 = {
    [Y.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, le.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z",
                        }),
                        (0, s.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => K.intl.string(K.t["0/xHFO"]),
    },
    [Y.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, le.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z",
                        }),
                        (0, s.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => K.intl.string(K.t.E4u4n5),
    },
    [Y.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: l, ...r } = e;
            return (0, s.jsx)("svg", {
                ...(0, le.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, s.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73",
                        }),
                        (0, s.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => K.intl.string(K.t.tcawo3),
    },
};
function a2(e) {
    let { operatingSystem: t, className: n } = e,
        i = a1[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let l = i.icon;
    return (0, s.jsx)(tw.m, { text: i.getLabel(), children: (0, s.jsx)(l, { className: n }) });
}
function a3(e) {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, s.jsx)("div", {
        className: o()(a0.I, n),
        children: t.map((e) => (0, s.jsx)(a2, { operatingSystem: e, className: o()(a0.A, i) }, e)),
    });
}
var a5 = n(198985);
let a4 = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(a5.T, t),
        children: (0, s.jsx)("span", { className: a5.Q, children: K.intl.string(K.t["14lP0W"]) }),
    });
};
var a9 = n(992856);
let a6 = function (e) {
    let { className: t } = e;
    return (0, s.jsx)("div", {
        className: o()(a9.T, t),
        children: (0, s.jsx)("span", { className: a9.Q, children: K.intl.string(K.t["8IfYqa"]) }),
    });
};
var a8 = n(615300),
    a7 = n(868285),
    oe = n(358618),
    ot = n(983851),
    on = n(133296),
    oi = n(607470),
    ol = n(856328);
class os extends r.Component {
    _animatedValue = new a8.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        (this._animatedValue.setValue(0), a8.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e));
    };
    componentWillLeave = (e) => {
        a8.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
    };
    getImageStyle = () => ({ opacity: this._animatedValue });
    handleImageError = () => {
        this.setState({ imageLoadError: !0, imageLoading: !1 });
    };
    handleImageLoaded = () => {
        this.setState({ imageLoading: !1 });
    };
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, s.jsx)(a8.A.img, {
            className: o()({ [ol.YC]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: l } = this.state;
        return null == n || i
            ? (0, s.jsx)(a8.A.div, { className: o()(ol.gn, e), style: this.getImageStyle(), children: t })
            : (0, s.jsxs)(a8.A.div, {
                  className: o()(l ? ol.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, s.jsx)(tV.y, {
                                className: ol.u1,
                                itemClassName: ol.$N,
                                type: tV.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class or extends r.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = r.createRef();
    videoTimeout = new ar.Ep();
    videoPlaying = !1;
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n)
            if (t && !e.playing) {
                (this.videoTimeout.stop(),
                    isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0),
                    (n.volume = 0.3));
                let e = n.play();
                null != e &&
                    e.then(() => {
                        this.videoPlaying = !0;
                    });
            } else
                e.playing &&
                    !t &&
                    this.videoTimeout.start(400, () => {
                        this.videoPlaying && (n.pause(), (this.videoPlaying = !1));
                    });
    }
    handleToggleMute = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onToggleMute: t } = this.props;
        t?.(e);
    };
    handleVideoError = () => {
        this.setState({ videoLoadError: !0 });
    };
    handleVideoLoaded = () => {
        this.setState({ videoLoaded: !0 });
    };
    renderTypeVideo = () => {
        let { videoLoaded: e } = this.state,
            {
                video: t,
                image: n,
                title: i,
                playing: l,
                muted: a,
                splashClassName: d,
                splashPlaceholderClassName: c,
                renderMediaOverlay: u,
            } = this.props,
            m = a ? oe._ : ot.H;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                iZ.Fr
                    ? null
                    : (0, s.jsx)(oi.A, {
                          className: o()(ol.Yi, d),
                          muted: a,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, s.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, s.jsx)(a7.F, {
                    children: l && e ? null : (0, s.jsx)(os, { className: o()(ol.NB, c), src: n, title: i }, 0),
                }),
                (0, s.jsx)(eL.D, {
                    className: o()(ol.b4, { [ol.HY]: l && e, [ol.Hy]: null != u }),
                    onClick: this.handleToggleMute,
                    children: l && e ? (0, s.jsx)(m, { className: ol.i2 }) : null,
                }),
            ],
        });
    };
    nextItem = () => {
        let { slideImages: e } = this.props;
        null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
    };
    renderSlideItem = (e) => {
        let { image: t, title: n, playing: i, splashClassName: l } = this.props,
            { currentIndex: r } = this.state;
        return i
            ? (0, s.jsx)(os, { className: o()(ol.Yi, l), src: e[r], title: n }, r)
            : (0, s.jsx)(os, { className: o()(ol.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, s.jsx)(os, { className: o()(ol.Yi, l), src: n, title: i }, "image")
            : (0, s.jsx)(on.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: ol.mZ,
                  disable: !e,
                  children: (0, s.jsx)(a7.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: a } = this.state;
        return n
            ? (0, s.jsx)("div", { className: t })
            : (0, s.jsxs)("figure", {
                  className: o()(ol.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && a)],
              });
    }
}
var oa = n(366523),
    oo = n(622413),
    od = n(435919);
class oc extends r.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: l } = this.props,
            r = (l || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, s.jsxs)("div", {
                  className: od.ED,
                  children: [
                      (0, s.jsx)(aQ, {
                          type: aQ.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? od.ae : od.Ek,
                      }),
                      (0, s.jsx)(a3, { systems: [Y.uje.WINDOWS], className: od.iD }),
                      r ? (0, s.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: i,
            sku: l,
            isHorizontal: a,
            storeListing: d,
        } = this.props;
        return (0, sN.bF)(l)
            ? (0, s.jsx)(oa.e, {
                  sku: l,
                  shape: "custom",
                  containerClassName: od.A$,
                  backgroundImageClassName: od.iZ,
                  foregroundImageClassName: od.O7,
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      (0, s.jsx)(or, {
                          className: o()(od.H1, { [od.ZC]: a }),
                          video: null != d.previewVideo ? (0, sj.YE)(l.applicationId, d.previewVideo) : void 0,
                          image: null != d.thumbnail ? (0, sj.YE)(l.applicationId, d.thumbnail, 600) : void 0,
                          title: l.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: od.ZI,
                          splashPlaceholderClassName: od.NB,
                      }),
                      l.exclusive
                          ? (0, s.jsx)(a6, { className: o()(od.LJ, { [od.V9]: e }) })
                          : l.isTheGameAwardsWinner
                            ? (0, s.jsx)(a4, { className: o()(od.LJ, { [od.V9]: e }) })
                            : null,
                  ],
              });
    };
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: i,
                renderCustomTagline: l,
                renderCustomTitle: r,
                renderCustomMedia: a,
                isEmbed: o,
            } = this.props,
            d = o ? a_.ug : oo.A;
        return (0, s.jsx)(d, {
            className: i,
            renderMedia: null != a ? a : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var ou = n(587895),
    om = n(976150);
class oh extends r.Component {
    static defaultProps = { renderFallback: Y.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : Y.JJy.APPLICATION_EMBED, object: Y.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, eP.QB)(t);
    }
    handleToggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };
    handleMouseEnter = () => {
        this.setState({ playing: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ playing: !1 });
    };
    handleActionButtonClick = (e) => e.preventDefault();
    handleBuyButtonClick = (e) => e.preventDefault();
    handleLinkClick = (e) => {
        let { onEmbedClick: t } = this.props;
        null != t && t(e);
    };
    renderViewInStoreButton() {
        return (0, s.jsx)("div", {
            className: om.h,
            children: (0, s.jsx)(eh.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: K.intl.string(K.t["W+NB90"]),
                onClick: () => {
                    (0, s_.pX)(Y.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: r, renderCustomMedia: a } = this.props,
            { playing: o, muted: d } = this.state,
            c = i > a_.Tm;
        return (0, s.jsx)(oc, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: l,
            renderCustomTagline: r,
            renderCustomMedia: a,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: r } = this.props;
        if (null != r) return (0, s.jsx)("div", { className: om.i, children: r() });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === i,
            o = null != l && l.hasFlag(Y.hM6.HIDDEN);
        return (0, s.jsxs)("div", {
            className: om.i,
            children: [
                !a || o
                    ? this.renderViewInStoreButton()
                    : (0, s.jsx)(aH, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: om.h,
                          source: Y.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, s.jsx)(aQ, { type: aQ.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            r = n > a_.Tm;
        return null == e || null == t
            ? i
                ? l()
                : (0, s.jsx)(a_.Wb, { isHorizontal: r })
            : e.productLine === Y.EZt.PREMIUM
              ? (0, s.jsx)(aG.A, {
                    section: Y.JJy.APPLICATION_EMBED,
                    children: (0, s.jsx)(aU.N_, {
                        onClick: this.handleLinkClick,
                        to: Y.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                })
              : (0, s.jsx)(aG.A, { section: Y.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) });
    }
}
let og = [ew.A, aR.A, eB.A];
function op(e) {
    let { skuId: t } = e,
        n = ew.A.get(t),
        i = null != n ? ou.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: ew.A.didFetchingSkuFail(t),
        inLibrary: null != n && aR.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? eB.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? aR.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let oA = (0, aN.A)((0, aj.A)(oh)),
    ox = u.Ay.connectStores(og, op)(oA),
    of = (0, aj.A)(u.Ay.connectStores(og, op)(oh));
var oI = n(866022);
function oE(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, s.jsxs)(eL.D, {
        className: oI.kP,
        onClick: t,
        children: [
            (0, s.jsx)(aC._, { size: "md", color: "currentColor", className: oI.dy }),
            (0, s.jsx)("div", { children: n.isHidden() ? K.intl.string(K.t.Wi99Ro) : K.intl.string(K.t["+tXad7"]) }),
        ],
    });
}
class ov extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= a_.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === Y.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, eE.openUserSettings)(eI.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? K.intl.string(K.t.mT9B49) : K.intl.string(K.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, s.jsx)(eh.$, {
                  variant: "primary",
                  size: "sm",
                  text: K.intl.string(K.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, s.jsx)(eh.$, { variant: "primary", size: "sm", text: K.intl.string(K.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? K.intl.string(K.t.QXgO5w)
            : this.props.isSelfGift
              ? K.intl.string(K.t.eEM3dq)
              : K.intl.string(K.t.tB8S6u);
    render() {
        return (0, s.jsx)(a_.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class oC extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: Y.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        (e.preventDefault(),
            null != t && t.isHidden()
                ? (0, s_.pX)(Y.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, s_.pX)(Y.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
    };
    handleVerificationClick = (e) => {
        (e.stopPropagation(), e.preventDefault(), (0, eE.openUserSettings)(eI.X.ACCOUNT_PANEL));
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: s } = this.props;
        (e.preventDefault(),
            e.stopPropagation(),
            eV.default.track(Y.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: Y.ZSU.BUTTON_CTA },
            }));
        let r = l !== Y.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, aT.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: s });
    };
    handleLaunchGame = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let { skuApplication: t, sku: n, isSelfGift: i } = this.props;
        null != t &&
            (eV.default.track(Y.HAw.SLAYER_STOREFRONT_GAME_LAUNCH_CLICKED, {
                location_stack: [f.A.GIFT_CODE_EMBED],
                sku_id: n?.id,
                application_id: t.id,
                is_gift: !i,
            }),
            aM.A.launchGame(t.id));
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, sN.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, sR.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [f.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, eE.openUserSettings)(eI.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let t = this.props.giftCode?.code;
        null != t && window.open(Y.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, s.jsxs)(sq.A, {
            justify: sq.A.Justify.BETWEEN,
            children: [
                (0, s.jsxs)(sq.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, s.jsx)(oE, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, s.jsxs)(sq.A, {
                    align: sq.A.Align.END,
                    justify: sq.A.Justify.END,
                    className: oI.yu,
                    direction: sq.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, s.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, s.jsx)("div", {
                                  children: K.intl.format(K.t.nZBvUR, { hours: e.expiresAt.diff(lQ()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? K.t["4iHwKT"] : K.t.YeLq88;
        return K.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i, canLaunchRedeemedSlayerGameItem: l } = this.props;
        if (l)
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(eh.$, {
                    variant: "primary",
                    size: "sm",
                    text: K.intl.string(K.t["s+J8Dl"]),
                    onClick: this.handleLaunchGame,
                }),
            });
        let r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, tX.TW)(n)),
            a = e.redeemed || r || e.isClaimed || !n.verified,
            o = e.redeemed
                ? K.intl.string(K.t.BTihou)
                : null != e.giftStyle
                  ? K.intl.string(K.t.TiZFqX)
                  : K.intl.string(K.t.bUvv1f);
        return (0, s.jsx)("div", {
            className: (0, t1.hU)(e) ? oI.UQ : void 0,
            children: (0, s.jsx)(eh.$, {
                variant: "primary",
                size: "sm",
                text: o,
                onClick: this.handleAccept,
                disabled: a,
            }),
        });
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === Y.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? K.intl.formatToPlainString(K.t.t1SOId, { recipientDisplayName: aO.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? K.intl.string(K.t["2PJ1NP"])
                    : K.intl.string(K.t.hrnGng)
                : n
                  ? K.intl.string(K.t.QLEMld)
                  : K.intl.string(K.t.W4DBcy);
    }
    renderBody(e) {
        let {
            libraryApplication: t,
            isSelfGift: n,
            sku: i,
            gifter: l,
            subscriptionPlan: s,
            currentUser: r,
        } = this.props;
        if (null == i) return K.intl.string(K.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, sN.bF)(i) ? this.props.content : void 0;
        let a = i.isPreorder() ? K.intl.formatToPlainString(K.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, t1.hU)(e) || (0, sN.bF)(i)
                ? K.intl.string(K.t.mVC3Cv)
                : K.intl.format(K.t["ss/L+/"], { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return K.intl.format(K.t.UdXO8P, { skuName: a, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return K.intl.string(K.t.ARWFQX);
        if (!r.verified) return K.intl.format(K.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? K.intl.string(K.t["lQI+cB"])
                : K.intl.formatToPlainString(K.t["A+etHx"], { skuName: a });
        if (e.isExistingPremiumSubscriptionDisallowed) return K.intl.string(K.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? K.intl.format(K.t.l3VxgG, { username: aO.Ay.getUserTag(l), maxUses: e.maxUses, skuName: a })
                    : K.intl.format(K.t["9cYrw5"], {
                          username: aO.Ay.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: a,
                      })
                : e.isSubscription
                  ? K.intl.formatToPlainString(K.t.svrO3W, { maxUses: e.maxUses, skuName: a })
                  : K.intl.formatToPlainString(K.t["3AgAn3"], { totalCopies: e.maxUses, skuName: a });
        if (e.isSubscription) {
            if (null == s) return K.intl.string(K.t.ZTNur7);
            if (null != l) {
                let e = s.interval === nN.WT.MONTH ? K.t["/RDIEA"] : K.t["3CX6Ev"];
                return K.intl.format(e, { username: aO.Ay.getUserTag(l), skuName: a, intervalCount: s.intervalCount });
            }
            let e = s.interval === nN.WT.MONTH ? K.t["2O4lo5"] : K.t["+XjmsR"];
            return K.intl.format(e, { skuName: a, intervalCount: s.intervalCount });
        }
        return null != l ? K.intl.format(K.t["3HsdQ/"], { username: aO.Ay.getUserTag(l) }) : K.intl.string(K.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = nN.Wx.includes(e.giftStyle),
            i = o()(oI.gB, { [oI.El]: n, [oI.by]: t >= a_.Tm }),
            l = o()({ [oI.gc]: n, [oI.Ei]: n && t >= a_.Tm, [oI.ww]: !n, [oI.wy]: !n && t >= a_.Tm });
        return (0, s.jsxs)("div", {
            className: i,
            children: [
                n && (0, s.jsx)(aL, { className: oI.nr }),
                null != e.giftStyle &&
                    (0, s.jsx)(aS.A, {
                        defaultAnimationState: e.redeemed ? ay.oA.LOOP : ay.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, s.jsx)(eh.$, {
            variant: "primary",
            size: "sm",
            text: K.intl.string(K.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, sN.bF)(n);
        return (0, s.jsx)(of, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: Y.JJy.GIFT_CODE_EMBED,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: () => this.renderTitle(e),
            renderCustomTagline: () => this.renderBody(e),
            renderCustomMedia: i ? () => this.renderCustomGiftBox(e) : void 0,
            width: t,
        });
    }
    render() {
        let { giftCode: e, resolved: t, resolveErrorCode: n, width: i, isSelfGift: l } = this.props;
        if (null != e && null != e.promotion)
            return (0, s.jsx)(of, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: Y.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => K.intl.string(K.t.X4p5uH),
                renderCustomTagline: () => K.intl.string(K.t.VIuwD7),
                width: i,
            });
        if (null == e || e.revoked)
            if (t) return (0, s.jsx)(ov, { isSelfGift: l, width: i, resolveErrorCode: n });
            else return (0, s.jsx)(a_.Wb, { isHorizontal: i >= a_.Tm });
        return (0, t1.hU)(e)
            ? (0, s.jsx)("div", { className: oI.mp, children: this.renderEmbed() })
            : this.renderEmbed();
    }
}
let o_ = (0, aN.A)((0, aj.A)(oC)),
    oj = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: i,
                resolved: l,
                resolveErrorCode: r,
            } = (0, u.cf)([ak.A], () => {
                let e = ak.A.getError(t);
                return { giftCode: ak.A.get(t), resolved: ak.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            a = (0, u.bG)([O.default], () => (null != i && null != i.userId ? O.default.getUser(i.userId) : null)),
            o = (0, u.bG)([ew.A], () => (null != i ? ew.A.get(i.skuId) : null)),
            d = (0, u.bG)([aR.A], () =>
                null != o && i?.entitlementBranches != null ? aP.YI(i.entitlementBranches, o, aR.A) : null,
            ),
            c = (0, sC.h)(o?.applicationId),
            m = null != o && (0, sN.bF)(o) && i?.redeemed === !0,
            [h] = (0, ab.L_)(m ? c?.id : null),
            g = (0, aD.zz)(i?.subscriptionPlanId),
            p = (0, u.bG)([L.default], () => (null != i ? L.default.getId() === i.userId : L.default.getId() === n.id));
        return (0, s.jsx)(o_, {
            ...e,
            skuApplication: c,
            canLaunchRedeemedSlayerGameItem: h,
            giftCode: i,
            resolved: l,
            resolveErrorCode: r,
            gifter: a,
            libraryApplication: d,
            subscriptionPlan: g,
            sku: o,
            isSelfGift: p,
        });
    };
var oN = n(376728),
    oy = n(107123),
    oT = n(698441),
    oS = n(427080),
    ob = n(346542),
    ok = n(800772),
    oR = n(95701),
    oL = n(299091),
    oM = n(149790);
let oP = (0, n(600975).C)({
    kind: "guild",
    id: "2026-05_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function oD(e) {
    let { guildId: t, location: n } = e;
    return oP.getCurrentConfig({ guildId: t, location: n });
}
var oO = n(713654);
function oU() {
    return (0, s.jsxs)(i$.A, {
        children: [
            (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t["N/g9Z4"]) }),
            (0, s.jsx)(i$.A.Body, { resolving: !0 }),
        ],
    });
}
var oG = n(172799),
    ow = n(624394);
function oB(e) {
    let { members: t, membersOnline: n, textColor: i } = e,
        l = [];
    return (
        null != n &&
            n > 0 &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: ow.MY,
                        children: [
                            (0, s.jsx)("i", { className: ow.QD }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: ow.U9,
                                color: i,
                                children: K.intl.format(K.t["LC+S+m"], { membersOnline: n }),
                            }),
                        ],
                    },
                    "onlineCount",
                ),
            ),
        null != t &&
            l.push(
                (0, s.jsxs)(
                    "div",
                    {
                        className: ow.MY,
                        children: [
                            (0, s.jsx)("i", { className: ow.o6 }),
                            (0, s.jsx)(A.E, {
                                variant: "text-xs/normal",
                                className: ow.U9,
                                color: i,
                                children: K.intl.format(K.t.zRl6XR, { count: t }),
                            }),
                        ],
                    },
                    "memberCount",
                ),
            ),
        (0, s.jsx)("div", { className: ow.rc, children: l })
    );
}
function oV(e) {
    let { channel: t, guild: n, hasEnded: i, textColor: l } = e,
        r = (0, it.Ay)(t);
    if (null != t && null != n) {
        let e = (0, oO.gU)(t, n);
        return (0, s.jsxs)("div", {
            className: o()(ow.Ix, { [ow.v6]: i }),
            children: [
                null != e ? (0, s.jsx)(e, { className: ow.p, size: "xs", color: "currentColor" }) : null,
                (0, s.jsx)(sK.A, {
                    children: (0, s.jsx)(A.E, {
                        variant: "text-xs/normal",
                        color: l,
                        children: K.intl.format(K.t["dc+LW4"], { channelName: r ?? "", serverName: n.name }),
                    }),
                }),
            ],
        });
    }
    return null != n
        ? (0, s.jsx)("div", {
              className: o()(ow.Ix, { [ow.v6]: i }),
              children: (0, s.jsx)(sK.A, {
                  children: (0, s.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: l,
                      children: K.intl.format(K.t.u0vaDE, { guildName: n.name }),
                  }),
              }),
          })
        : null;
}
function oH(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        { target_type: l, target_application: r } = t;
    ey()(l === oG.yV.EMBEDDED_APPLICATION && null != r, "invalid application invite");
    let a = t.channel?.id,
        o = (0, u.bG)([M.A], () => M.A.getChannel(a), [a]);
    return null == o
        ? null
        : (0, s.jsx)(e0.O, {
              applicationId: r.id,
              channel: o,
              variant: "game_invite",
              children: (e) =>
                  (0, s.jsx)(oF, { invite: t, message: n, getAcceptInviteContext: i, application: e, channel: o }),
          });
}
function oF(e) {
    let t,
        n,
        { invite: i, message: l, getAcceptInviteContext: a, application: o, channel: d } = e,
        { approximate_member_count: c, approximate_presence_count: m, target_application: h } = i;
    ey()(null != h, "invalid application invite");
    let g = r.useCallback(() => {
            eV.default.track(Y.HAw.EMBEDDED_APPLICATION_INVITE_EMBED_VIEWED, {
                application_id: h.id,
                invite_inviter_id: i.inviter?.id,
            });
        }, [i.inviter?.id, h.id]),
        p = (0, u.bG)([nV.A], () => (null != i.guild ? nV.A.getGuild(i.guild.id) : null), [i]),
        A = (0, u.bG)(
            [eo.Ay],
            () => i?.channel != null && eo.Ay.getSelfEmbeddedActivityForChannel(i.channel.id)?.applicationId === h.id,
        ),
        x = (0, u.bG)([eo.Ay], () =>
            (i.channel?.id != null ? eo.Ay.getEmbeddedActivitiesForChannelIncludingHidden(i.channel.id) : []).some(
                (e) => {
                    let { applicationId: t } = e;
                    return h.id === t;
                },
            ),
        ),
        E = (0, u.bG)([te.A], () => null != d && te.A.can(Y.xBc.USE_EMBEDDED_ACTIVITIES, d), [d]),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED),
        C = (0, u.yK)(
            [eo.Ay],
            () =>
                null != d
                    ? eo.Ay.getEmbeddedActivitiesForChannelIncludingHidden(d.id)
                          .filter((e) => e.applicationId === h.id)
                          .flatMap((e) => Array.from(e.userIds))
                    : [],
            [d, h.id],
        ),
        _ = (0, u.yK)([O.default], () => C.map((e) => O.default.getUser(e)).filter((e) => null != e), [C]),
        j = r.useCallback(() => {
            ((0, oN.he)(
                {
                    invite: i,
                    action: "accept",
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, la._U)(i.code, l.id),
                },
                v,
            ),
                oN.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: i.code,
                    context: a("Invite Button Embed", i.code),
                    analyticsLocations: v,
                }));
        }, [i, l, v, a]),
        N = i.state === Y.elq.ACCEPTING,
        y = null != p;
    if (null == p) {
        if (null == i.guild) return (0, s.jsx)(oU, {});
        p = (0, oM.DY)(i.guild);
    }
    t = y
        ? A
            ? K.intl.string(K.t.DPfdsq)
            : x
              ? K.intl.string(K.t.sqe0hj)
              : K.intl.string(K.t.RscU7I)
        : K.intl.string(K.t["2BP08E"]);
    let T = (y && !E) || (y && A);
    return (E || (n = K.intl.string(K.t.hHGrWz)), null == i.code || "" === i.code)
        ? null
        : (0, s.jsx)(I.f5, {
              value: v,
              children: (0, s.jsx)(oz, {
                  app: o,
                  activityUsers: _,
                  isMember: y,
                  channel: d,
                  guild: p,
                  message: l,
                  members: c,
                  membersOnline: m,
                  isActivityActive: x,
                  submitting: N,
                  buttonLabel: t,
                  disabled: T,
                  disabledReason: n,
                  handleAcceptInvite: j,
                  onView: g,
              }),
          });
}
function oz(e) {
    let {
            app: t,
            activityUsers: n,
            isMember: i,
            channel: l,
            guild: a,
            message: o,
            members: d,
            membersOnline: c,
            isActivityActive: u,
            submitting: m,
            buttonLabel: h,
            disabled: g,
            disabledReason: p,
            handleAcceptInvite: A,
            onView: x,
        } = e,
        { bot: f, icon: I } = t,
        E = U.Ay.getApplicationIconURL({ id: t.id, icon: I, bot: f }),
        v = (0, $.F)(t),
        C = (0, q.f)(t),
        _ = n.length,
        j = r.useMemo(
            () => [
                {
                    label: h,
                    trackingArea: i ? X.kY.PLAY : X.kY.JOIN_SERVER,
                    submitting: m,
                    disabled: g,
                    disabledReason: g && null != p ? p : void 0,
                    onClick: A,
                },
            ],
            [h, i, m, g, p, A],
        );
    return (0, s.jsx)(B.h, {
        header: t.name,
        title: K.intl.string(K.t["7vb6nw"]),
        iconSrc: E,
        ...C,
        onClickBanner: v,
        info: (0, s.jsxs)("div", {
            className: ow.QR,
            children: [
                (0, s.jsx)(oV, { channel: l, guild: a, hasEnded: !u, textColor: "none" }),
                i
                    ? _ > 0 &&
                      (0, s.jsx)(J, {
                          activityUsers: n,
                          guildId: a.id,
                          activityText: K.intl.formatToPlainString(K.t.yJj035, { count: _ }),
                      })
                    : (0, s.jsx)(oB, { members: d, membersOnline: c, textColor: "none" }),
            ],
        }),
        actions: j,
        onClickContent: v,
        trackingConfig: {
            id: t.id,
            linkType: Q.J.ACTIVITY_INVITE,
            onView: x,
            guildId: a.id,
            channelId: l?.id,
            messageId: o.id,
            isDeadEnd: !u,
        },
    });
}
var oY = n(4274);
function oK(e) {
    let { author: t, inviteError: n } = e,
        i =
            (0, u.bG)([L.default], () => L.default.getId()) === t.id
                ? K.intl.string(K.t.C89OLE)
                : K.intl.string(K.t.YVub5y),
        l = (0, oY.g)(n?.code);
    return (0, s.jsxs)(i$.A, {
        children: [
            (0, s.jsx)(i$.A.Header, { text: i }),
            (0, s.jsxs)(i$.A.Body, {
                children: [
                    (0, s.jsx)(i$.A.Icon, { expired: !0 }),
                    (0, s.jsx)(i$.A.Info, {
                        expired: !0,
                        title: l?.title ?? K.intl.string(K.t["Jhx/ud"]),
                        children: l?.description ?? n?.message,
                    }),
                ],
            }),
        ],
    });
}
var oW = n(308528),
    oJ = n(889227);
function oX(e) {
    let { invite: t, message: n, getAcceptInviteContext: i } = e,
        l = (0, u.bG)([L.default], () => L.default.getId()),
        a = t.inviter?.id === l,
        o = t.state === Y.elq.ACCEPTING,
        { analyticsLocations: d } = (0, I.Ay)(f.A.INVITE_EMBED),
        c = (0, u.bG)([P.A], () => null != t.inviter && P.A.isFriend(t.inviter?.id)),
        m = r.useCallback(() => {
            let e = "noop";
            (null != t.inviter &&
                null != M.A.getDMFromUserId(t.inviter.id) &&
                ((e = "transition"), oW.A.openPrivateChannel({ recipientIds: [t.inviter.id] })),
                (0, oN.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, la._U)(t.code, n.id),
                    },
                    d,
                ));
        }, [t, n, d]),
        h = r.useCallback(() => {
            (0, oN.he)(
                {
                    invite: t,
                    action: "accept",
                    inviter_id: n.author.id,
                    invite_message_id: n.id,
                    invite_instance_id: (0, la._U)(t.code, n.id),
                },
                d,
            );
            let e = i("Invite Button Embed", t.code);
            oN.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t.code, context: e });
        }, [t, n, d, i]);
    if (null == t.inviter) return null;
    let g = c ? m : h,
        p = K.intl.string(K.t.ib7Ng1),
        A = "active";
    c
        ? ((p = K.intl.string(K.t.xhxnPn)), (A = "secondary"))
        : a && ((p = K.intl.string(K.t.ib7Ng1)), (A = "secondary"));
    let x = a ? K.intl.string(K.t.eQyu1F) : K.intl.string(K.t.PYJHW6),
        E = null != t.inviter ? `${t.inviter.username}` : "",
        v = null != t.inviter ? aO.Ay.getUserTag(t.inviter) : "";
    return (0, s.jsxs)(i$.A, {
        children: [
            (0, s.jsx)(i$.A.Header, { text: x }),
            (0, s.jsxs)(i$.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: ls.iH,
                        children: [
                            (0, s.jsx)(i$.A.Icon, { user: new oJ.A(t.inviter), onClick: c ? g : void 0 }),
                            (0, s.jsx)(i$.A.Info, { title: E, onClick: c ? g : void 0, children: v }),
                        ],
                    }),
                    (0, s.jsx)(eh.$, { onClick: g, text: p, loading: o, disabled: a, variant: A }),
                ],
            }),
        ],
    });
}
var oZ = n(342952);
function oq(e) {
    let { invite: t, message: n, currentUserId: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        o = i === n.author.id,
        d = t.state === Y.elq.ACCEPTING,
        c = (0, u.bG)([M.A], () => (null != t.channel ? M.A.getChannel(t.channel.id) : null), [t]);
    ey()(null == c || c.isPrivate(), "must be a private channel");
    let { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = null != c,
        g = r.useRef(null),
        p = r.useCallback(() => {
            let e = "noop";
            (h ? (l(), (e = "transition")) : (a(), (e = "accept")),
                (0, oN.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: (0, la._U)(t.code, n.id),
                    },
                    m,
                ));
        }, [t, n, m, h, l, a]),
        x = (function (e, t) {
            if (null == t && null == e.channel) return null;
            let n = [];
            if (null == t && null != e.channel) {
                let t = (0, oR.OY)(e.channel),
                    i = (0, it.Bi)(t);
                return {
                    channel: t,
                    recipients: (n = null != e.channel.recipients ? e.channel.recipients : []),
                    customGroupName: i,
                };
            }
            if (null != t) {
                n =
                    t.recipients?.reduce((e, t) => {
                        let n = O.default.getUser(t);
                        return (null != n && e.push(n), e);
                    }, []) ?? [];
                let e = (0, it.Bi)(t),
                    i = O.default.getCurrentUser();
                return (null != i && n.push(i), { channel: t, recipients: n, customGroupName: e });
            }
            return null;
        })(t, c ?? null);
    if (null == x) return (0, s.jsx)(oU, {});
    let {
            bodyTitle: E,
            headerText: v,
            buttonText: C,
            buttonVariant: _,
        } = (function (e, t, n) {
            let i,
                { recipients: l, customGroupName: s } = e,
                r =
                    null != s
                        ? s
                        : 0 ===
                            (i = l
                                .map((e) => {
                                    let t = P.A.getNickname(e.id);
                                    if (null != t && "" !== t) return t;
                                    let n = e instanceof oJ.A ? e : O.default.getUser(e.id);
                                    if (null != n) {
                                        let e = aO.Ay.getName(n);
                                        if (null != e) return e;
                                    }
                                    return e.username;
                                })
                                .filter((e) => "" !== e)).length
                          ? K.intl.string(K.t.LJpTRF)
                          : 1 === i.length
                            ? i[0]
                            : 2 === i.length
                              ? K.intl.formatToPlainString(K.t.gwRP0Y, { first: i[0], second: i[1] })
                              : 3 === i.length
                                ? K.intl.formatToPlainString(K.t["/KSOKY"], { first: i[0], second: i[1], third: i[2] })
                                : K.intl.formatToPlainString(K.t.m5uYso, { first: i[0], second: i[1] }),
                a = K.intl.string(K.t.gVDdRn),
                o = "active";
            return (
                n && ((a = K.intl.string(K.t.cEnaWx)), (o = "secondary")),
                {
                    bodyTitle: r,
                    headerText: t ? K.intl.string(K.t.Fyamu8) : K.intl.string(K.t["2tr5Qz"]),
                    buttonText: a,
                    buttonVariant: o,
                }
            );
        })(x, o, h),
        { channel: j, recipients: N } = x,
        y = N.map((e) =>
            e instanceof oJ.A
                ? e
                : (O.default.getUser(e.id) ?? new oJ.A({ id: e.id, username: e.username, avatar: e.avatar ?? null })),
        ),
        T = null != j.icon,
        S = K.intl.format(K.t.zRl6XR, { count: N.length });
    return (0, s.jsxs)(i$.A, {
        className: ls.TV,
        children: [
            (0, s.jsx)(A.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: ls.JO,
                lineClamp: 1,
                children: v,
            }),
            (0, s.jsxs)(i$.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: `${ls.iH} ${ls.mx}`,
                        children: [
                            T &&
                                (0, s.jsx)(i$.A.Icon, {
                                    channel: j,
                                    onClick: h ? p : void 0,
                                    channelIconSize: tA._3.SIZE_48,
                                }),
                            (0, s.jsx)(i$.A.Info, {
                                title: (0, s.jsx)(sK.A, { children: E }),
                                onClick: h ? p : void 0,
                                titleVariant: "heading-md/medium",
                                detailVariant: "text-sm/medium",
                                children: (0, s.jsx)("div", {
                                    className: ls.er,
                                    children:
                                        y.length > 0
                                            ? (0, s.jsx)(eL.D, {
                                                  className: ls.N_,
                                                  onClick: (e) => {
                                                      g.current?.openUserList(e.currentTarget);
                                                  },
                                                  children: S,
                                              })
                                            : S,
                                }),
                            }),
                            y.length > 0 &&
                                (0, s.jsx)(oZ.A, {
                                    ref: g,
                                    className: ls.t2,
                                    users: y,
                                    maxUsers: 3,
                                    size: tA._3.SIZE_32,
                                    channelId: j.id,
                                    popoutClassName: ls.BV,
                                }),
                        ],
                    }),
                    (0, s.jsx)(eh.$, { onClick: p, loading: d, disabled: h, variant: _, text: C, fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var o$ = n(821418),
    oQ = n(340837);
let o0 = function (e, t) {
    let [n] = e,
        { guild: i } = t;
    return (
        !(null != i && (0, c.Lt)(n.getSelfMember(i.id)?.flags ?? 0, oQ.D.IS_GUEST)) ||
        (0, c.Lt)(t.flags ?? 0, o$.Q.IS_GUEST_INVITE)
    );
};
var o1 = n(517905);
function o2(e) {
    let t,
        i,
        l,
        {
            onTransitionToInviteChannel: a,
            onAcceptInstantInvite: o,
            guild: d,
            invite: m,
            message: h,
            currentUserId: p,
        } = e,
        x = p === h.author.id,
        { channel: E, approximate_member_count: v, approximate_presence_count: C } = m,
        _ = m.state === Y.elq.ACCEPTING,
        j = null != E ? (0, oR.OY)(E) : null,
        N = null != d,
        y = null != j,
        T = null != j && j.isGuildStageVoice(),
        S = (0, c.Lt)(m.flags ?? 0, o$.Q.IS_GUEST_INVITE),
        b = j?.isGuildVoiceOrThread() ?? !1,
        k = d?.features.has(Y.GuildFeatures.HUB) ?? !1,
        R = d?.id,
        { analyticsLocations: L } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e2.A)({
        name: e1.ImpressionNames.INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: m.code,
            invite_guild_id: m.guild?.id,
            invite_channel_id: E?.id,
            invite_instance_id: (0, la._U)(m.code, h.id),
            invite_channel_type: E?.type,
            embed_type: "guild_invite",
            location_stack: L,
        },
    });
    let [M, P] = r.useState(!1),
        D = r.useCallback(() => P(!1), []),
        O = r.useRef(null),
        U = (0, u.bG)([lS.Ay], () => o0([lS.Ay], m)),
        G = r.useCallback(() => {
            (P(!0), (0, oN.Pq)(R, "show profile", L));
        }, [R, L]),
        w = r.useCallback(() => {
            let e = "noop";
            (N ? (a(), (e = "transition")) : (o(), (e = "accept")),
                (0, oN.he)(
                    {
                        invite: m,
                        action: e,
                        inviter_id: h.author.id,
                        invite_message_id: h.id,
                        invite_instance_id: (0, la._U)(m.code, h.id),
                    },
                    L,
                ));
        }, [m, h, L, N, a, o]);
    if (null == d) {
        if (null == m.guild) return (0, s.jsx)(oU, {});
        (d = oM.DY(m.guild)).premiumTier = m.guild.premium_tier ?? Y.TVA.NONE;
    }
    let B = (function (e) {
        let { isVoiceChannel: t, isHubGuild: n, isOwnInvite: i, isGuest: l, isStage: s, isStream: r } = e;
        if (t)
            if (i)
                if (r) return K.intl.string(K.t.N85DCl);
                else if (s) return K.intl.string(K.t.TJQcNv);
                else if (l) return K.intl.string(K.t.mJyBir);
                else return K.intl.string(K.t.lxTgP9);
            else if (r) return K.intl.string(K.t.Mnvc3C);
            else if (s) return K.intl.string(K.t.FdPNr5);
            else if (l) return K.intl.string(K.t.f4gmrf);
            else return K.intl.string(K.t.H39rEY);
        return n
            ? i
                ? K.intl.string(K.t.UxmnHx)
                : K.intl.string(K.t.sigPEf)
            : i
              ? K.intl.string(K.t["oU/lsl"])
              : K.intl.string(K.t.BoQUFf);
    })({ isVoiceChannel: b, isOwnInvite: x, isGuest: S, isHubGuild: k, isStage: T, isStream: !1 });
    return (
        (i = (0, s.jsxs)("span", {
            className: ls.FA,
            children: [
                (0, s.jsx)(o1.A, {
                    guildId: d.id,
                    name: d.name,
                    shouldShow: M,
                    onRequestClose: D,
                    targetElementRef: O,
                    children: () => (0, s.jsx)(i$.A.GuildName, { guild: d, ref: O }),
                }),
                (0, s.jsx)("span", {
                    className: ls.E3,
                    children: (0, s.jsx)(r9.A, { guild: d, isBannerVisible: !1, disableBoostClick: !0 }),
                }),
            ],
        })),
        S &&
            (l = (0, s.jsx)(tw.m, {
                asContainer: !0,
                text: K.intl.string(K.t["/FeTK6"]),
                children: (0, s.jsx)(nZ.CircleInformationIcon, { size: "md", color: "currentColor", className: ls.G }),
            })),
        b
            ? ((i = (0, s.jsx)(i$.A.Channel, { channel: j })),
              (t = (0, s.jsxs)("span", {
                  className: ls.FA,
                  children: [
                      K.intl.format(K.t["2wimj5"], { guildName: d.name }),
                      (0, s.jsx)("span", {
                          className: ls.E3,
                          children: (0, s.jsx)(r9.A, { guild: d, isBannerVisible: !1 }),
                      }),
                  ],
              })))
            : (null != v && v >= 5) || (null != C && C > 0)
              ? (t = (0, s.jsx)(i$.A.Data, { members: v, membersOnline: C }))
              : y && (t = (0, s.jsx)(i$.A.Channel, { channel: j, guild: d })),
        (0, s.jsxs)(i$.A, {
            children: [
                (0, s.jsx)(i$.A.GuildSplash, { guild: d }),
                (0, s.jsx)(i$.A.Header, { text: B, extra: l }),
                (0, s.jsxs)(i$.A.Body, {
                    children: [
                        (0, s.jsxs)("div", {
                            className: ls.iH,
                            children: [
                                (0, s.jsx)(i$.A.Icon, { guild: d }),
                                (0, s.jsx)(i$.A.Info, { title: i, onClick: G, children: t }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: ls.UD,
                            children: (0, s.jsx)(eh.$, {
                                onClick: w,
                                loading: _,
                                variant: "active",
                                fullWidth: b,
                                disabled: !U,
                                text: b
                                    ? T
                                        ? K.intl.string(K.t["7vb2cc"])
                                        : K.intl.string(K.t.gpqgah)
                                    : N
                                      ? K.intl.string(K.t.cEnaWx)
                                      : K.intl.string(K.t.XpeFYr),
                            }),
                        }),
                    ],
                }),
                d.features.has(Y.GuildFeatures.HUB) &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: ls.me }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: K.intl.format(K.t["/o1IfA"], {
                                    onClick: () =>
                                        (0, g.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("144909"),
                                                n.e("197804"),
                                                n.e("807265"),
                                                n.e("797641"),
                                                n.e("890496"),
                                            ]).then(n.bind(n, 401155));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        }),
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
var o3 = n(9994),
    o5 = n(461888),
    o4 = n(263908),
    o9 = n(123213),
    o6 = n(86376),
    o8 = n(42780),
    o7 = n(897288),
    de = n(151101);
function dt(e) {
    let { invite: t, isMemberOfGuild: n, message: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = r.useId(),
        [m, h] = r.useState(!0),
        [g, p] = r.useState(!1),
        A = t.state === Y.elq.ACCEPTING,
        x = (0, u.bG)([ad.Ay], () => ad.Ay.useReducedMotion),
        { analyticsLocations: E } = (0, I.Ay)(f.A.INVITE_EMBED);
    ((0, e2.A)({
        name: e1.ImpressionNames.INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, la._U)(t.code, i.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: E,
        },
    }),
        r.useLayoutEffect(() => {
            p((d.current?.clientHeight ?? 0) > 292);
        }, [p]));
    let v = (0, o3.oO)(t),
        C = r.useCallback(() => {
            !g || (m && h(!1));
        }, [m, g]),
        _ = r.useCallback(() => {
            !g || m || h(!0);
        }, [m, g]),
        j = r.useMemo(
            () =>
                g && d.current?.clientHeight != null
                    ? {
                          height: m ? 292 : d.current.clientHeight + 36 + 48,
                          transition: x ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [m, g, x],
        );
    if (null == v) return (0, s.jsx)(oU, {});
    let N = (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: de.uY,
                ref: d,
                children: [
                    (0, s.jsx)(o8.J$, { profile: v, className: de.vK }),
                    (0, s.jsx)(o8.CG, { profile: v }),
                    (0, s.jsx)(o6.A, { profile: v, disableGuildNameClick: !g, guildNameId: c }),
                    (0, s.jsx)(o4.P, { profile: v, className: de.rb }),
                    (0, s.jsx)(o7.A, {
                        guild: null != t.guild ? (0, oM.DY)(t.guild) : null,
                        roles: t.roles,
                        className: de.Ei,
                    }),
                ],
            }),
            g && !m
                ? (0, s.jsx)("div", {
                      className: de.Se,
                      children: (0, s.jsx)(ss.Q, {
                          textVariant: "text-xs/medium",
                          variant: "secondary",
                          size: "sm",
                          onClick: _,
                          text: K.intl.string(K.t.xdCLeM),
                      }),
                  })
                : null,
            (0, s.jsxs)("div", {
                className: o()(de.qr, { [de.iK]: g }),
                children: [
                    g && m ? (0, s.jsx)("div", { className: de.D7 }) : null,
                    (0, s.jsx)("div", {
                        className: o()(de.z8, { [de.it]: g && m }),
                        children: (0, s.jsx)("div", {
                            className: de.UD,
                            children: (0, s.jsx)(dn, {
                                invite: t,
                                profile: v,
                                isMemberOfGuild: n,
                                message: i,
                                submitting: A,
                                onTransitionToInviteChannel: l,
                                onAcceptInstantInvite: a,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
    return g
        ? (0, s.jsx)(tG.s, {
              className: o()(de.Gg, { [de.vk]: m }),
              onClick: C,
              style: j,
              "aria-label": K.intl.string(K.t.dcl9MQ),
              children: N,
          })
        : (0, s.jsx)("div", { className: de.Gg, role: "group", "aria-labelledby": c, children: N });
}
function dn(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: i,
            message: l,
            submitting: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: u } = (0, o5.Ay)(n, o5.cn.INVITE, t.code),
        { analyticsLocations: m } = (0, I.Ay)(f.A.INVITE_EMBED),
        h = r.useCallback(() => {
            let e = i ? "transition" : "accept";
            (0, oN.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l.author.id,
                    invite_message_id: l.id,
                    invite_instance_id: (0, la._U)(t.code, l.id),
                },
                m,
            );
        }, [t, l, m, i]);
    return null == u
        ? null
        : (0, s.jsx)(o9.Y, {
              guildId: c,
              ctaType: u,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: h,
          });
}
function di(e) {
    let t,
        n,
        { author: i, banned: l } = e,
        a = r.useId();
    return (
        (0, u.bG)([L.default], () => L.default.getId()) === i.id
            ? ((n = K.intl.string(K.t.HfUzlI)), (t = K.intl.string(K.t.y7uT5j)))
            : l
              ? ((n = K.intl.string(K.t.OMfs8i)), (t = K.intl.string(K.t["57nBty"])))
              : ((n = K.intl.string(K.t.OMfs8i)), (t = K.intl.string(K.t["p/zTYn"]))),
        (0, s.jsxs)(i$.A, {
            className: ls.TV,
            role: "group",
            "aria-labelledby": a,
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ls.JO,
                    lineClamp: 1,
                    children: n,
                }),
                (0, s.jsx)(i$.A.Body, {
                    children: (0, s.jsxs)("div", {
                        className: ls.iH,
                        children: [
                            (0, s.jsx)(i$.A.Icon, { expired: !0 }),
                            (0, s.jsx)(i$.A.Info, {
                                expired: !0,
                                title: K.intl.string(K.t["Jhx/ud"]),
                                titleId: a,
                                titleVariant: "heading-md/medium",
                                children: t,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var dl = n(616356);
function ds(e) {
    let t,
        {
            invite: n,
            currentUserId: i,
            guild: l,
            message: a,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        c = l?.id,
        m = (0, u.bG)([D.A], () => D.A.getGuildId()),
        h = (0, u.bG)(
            [dl.A],
            () => (null != n && null != n.target_user ? dl.A.getActiveStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        g = (0, u.bG)(
            [dl.A],
            () => (null != n && null != n.target_user ? dl.A.getStreamForUser(n.target_user.id, c) : null),
            [n, c],
        ),
        { analyticsLocations: p } = (0, I.Ay)(f.A.INVITE_EMBED);
    (0, e2.A)({
        name: e1.ImpressionNames.INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, la._U)(n.code, a.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: p,
        },
    });
    let A = null != n && n.target_type === oG.yV.STREAM && null != n.target_user && null != h,
        x =
            null != n &&
            null != g &&
            null != n.channel &&
            null != n.guild &&
            g.channelId === n.channel.id &&
            g.guildId === n.guild.id;
    ey()(null != n, "Invite cannot be null");
    let { target_type: E, target_user: v } = n;
    ey()(E === oG.yV.STREAM && null != v, "invalid streaming invite");
    let C = i === v.id,
        _ = n.state === Y.elq.ACCEPTING,
        j = r.useCallback(() => {
            let e = "noop";
            (A ? (o(), (e = "transition")) : (d(), (e = "accept")),
                (0, oN.he)(
                    {
                        invite: n,
                        action: e,
                        inviter_id: a.author.id,
                        invite_message_id: a.id,
                        invite_instance_id: (0, la._U)(n.code, a.id),
                    },
                    p,
                ));
        }, [n, a, p, A, o, d]),
        N = null != l;
    if (null == l) {
        if (null == n.guild) return (0, s.jsx)(oU, {});
        l = (0, oM.DY)(n.guild);
    }
    let y = null != n.channel ? (0, oR.OY)(n.channel) : null,
        T = aO.Ay.getName(v),
        S = A || (!x && N),
        b = K.intl.string(K.t.I6JG46),
        k = "active";
    N && !x
        ? ((t = C ? K.intl.string(K.t.oBLoZJ) : K.intl.formatToPlainString(K.t["0QJmA+"], { name: T })),
          (b = K.intl.string(K.t.Wdi5E1)))
        : ((k = "active"),
          A && ((b = K.intl.string(K.t.Q1W99y)), (k = "secondary")),
          (t = C ? K.intl.string(K.t["4hyaHu"]) : K.intl.formatToPlainString(K.t.QmlLEq, { name: T })));
    let R =
        m === l.id && null != y
            ? (0, s.jsx)(i$.A.Channel, { channel: y })
            : K.intl.formatToPlainString(K.t.u0vaDE, { guildName: l.name });
    return (0, s.jsxs)(i$.A, {
        children: [
            (0, s.jsx)(i$.A.Header, { text: K.intl.string(K.t["wS+5Wb"]) }),
            (0, s.jsxs)(i$.A.Body, {
                children: [
                    (0, s.jsxs)("div", {
                        className: ls.iH,
                        children: [
                            (0, s.jsx)(i$.A.Icon, { guild: l, onClick: N && x ? j : void 0 }),
                            (0, s.jsx)(i$.A.Info, { title: t, onClick: N && x ? j : void 0, children: R }),
                        ],
                    }),
                    (0, s.jsx)(eh.$, { onClick: j, loading: _, disabled: S, variant: k, text: b }),
                ],
            }),
        ],
    });
}
var dr = n(683063),
    da = n(364522),
    dd = n(952270),
    dc = n(52074),
    du = n(725613),
    dm = n(693879),
    dh = n(145497),
    dg = n(936520),
    dp = n(977997),
    dA = n(607567),
    dx = n(923710);
function df(e) {
    let { invite: t, message: n, channel: i, onTransitionToInviteChannel: l } = e,
        a = (0, it.Ay)(i),
        o = (0, u.bG)([nV.A], () => nV.A.getGuild(i.guild_id), [i.guild_id]),
        d = (0, u.bG)([dp.A], () => dp.A.isInChannel(i.id), [i.id]),
        { voiceStates: c } = (0, u.cf)(
            [dA.Ay],
            () => ({ voiceStates: null != i.guild_id ? dA.Ay.getVoiceStatesForChannelAlt(i.id, i.guild_id) : [] }),
            [i],
        ),
        m = r.useMemo(
            () => [...c.filter((e) => e.voiceState.selfStream), ...c.filter((e) => !e.voiceState.selfStream)],
            [c],
        ),
        h = (0, u.bG)([du.A], () => du.A.getStartTime(i), [i]);
    r.useEffect(() => {
        null != h || null == i.guild_id || du.A.hasRequestedStartTimes(i.guild_id) || (0, dc.U)(i.guild_id);
    }, [i, h]);
    let g = r.useRef(null),
        p = r.useRef(null),
        x = r.useCallback(() => {
            let e = g.current,
                t = p.current;
            if (null == t) return;
            let n = null != e && e.scrollHeight - e.scrollTop > e.clientHeight + 1;
            t.style.opacity = n ? "1" : "0";
        }, []);
    r.useLayoutEffect(() => {
        x();
    }, [m, x]);
    let E = r.useCallback(
            (e) => {
                (null != g.current && g.current.removeEventListener("scroll", x),
                    (g.current = e),
                    null != e && e.addEventListener("scroll", x));
            },
            [x],
        ),
        { analyticsLocations: v } = (0, I.Ay)(f.A.INVITE_EMBED, f.A.VOICE_CHANNEL_LIST_INVITE_EMBED),
        C = (0, la._U)(t.code, n.id),
        _ = c.some((e) => e.voiceState.selfStream);
    (0, e2.A)({
        name: e1.ImpressionNames.VOICE_INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: i.guild_id,
            invite_channel_id: i.id,
            invite_instance_id: C,
            has_active_stream: _,
            location_stack: v,
        },
    });
    let j = r.useCallback(() => {
            (0, lX.iN)(i.id);
        }, [i.id]),
        N = r.useCallback(() => {
            (l(),
                (0, oN.he)(
                    {
                        invite: t,
                        action: "transition",
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: C,
                        number_of_users_in_channel: c.length,
                    },
                    v,
                ));
        }, [t, n, v, C, c.length, l]);
    return (0, s.jsxs)("div", {
        className: dx.kL,
        children: [
            (0, s.jsxs)("div", {
                className: dx.nz,
                children: [
                    (0, s.jsxs)("div", {
                        className: dx.wx,
                        children: [
                            (0, s.jsxs)("div", {
                                className: dx.yW,
                                children: [
                                    (0, s.jsx)(ot.H, {
                                        className: dx.p,
                                        color:
                                            c.length > 0 ? nP.A.colors.TEXT_FEEDBACK_POSITIVE : nP.A.colors.ICON_SUBTLE,
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                    }),
                                    (0, s.jsx)(dr.u, {
                                        title: `${o?.name} / ${a}`,
                                        body: "",
                                        assetSize: 24,
                                        asset: null != o ? (0, s.jsx)(dh.Ay, { guild: o, iconSize: 24 }) : void 0,
                                        position: "top",
                                        children: (0, s.jsx)(eL.D, {
                                            className: dx.HA,
                                            onClick: j,
                                            children: (0, s.jsx)(A.E, {
                                                variant: "text-md/normal",
                                                color: d ? "text-default" : "text-muted",
                                                lineClamp: 1,
                                                children: a,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            null != h
                                ? (0, s.jsx)(dm.z, { entry: { start: h }, textColor: "text-feedback-positive" })
                                : null,
                        ],
                    }),
                    m.length > 0
                        ? (0, s.jsxs)("div", {
                              className: dx.Ao,
                              children: [
                                  (0, s.jsx)(da.Ip, {
                                      ref: E,
                                      className: dx.JD,
                                      children: m.map((e) =>
                                          (0, s.jsx)(
                                              dg.Ay,
                                              {
                                                  className: dx.Eq,
                                                  user: e.user,
                                                  guildId: i.guild_id ?? void 0,
                                                  channelId: i.id,
                                                  nick: e.nick,
                                                  isStreaming: e.voiceState.selfStream,
                                              },
                                              e.user.id,
                                          ),
                                      ),
                                  }),
                                  (0, s.jsx)("div", { ref: p, className: dx.wH }),
                              ],
                          })
                        : (0, s.jsx)("div", {
                              className: dx.p$,
                              children: (0, s.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: K.intl.string(K.t.zSqdrS),
                              }),
                          }),
                    (0, s.jsx)("div", {
                        className: dx.TB,
                        children: (0, s.jsx)(eh.$, {
                            onClick: N,
                            icon: ot.H,
                            variant: "active",
                            fullWidth: !0,
                            text: K.intl.string(K.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dx.qr,
                children: [
                    (0, s.jsx)(dd.EyeSlashIcon, { size: "custom", color: "currentColor", className: dx.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: K.intl.string(K.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function dI(e) {
    let { invite: t, message: n, onTransitionToInviteChannel: i, onAcceptInstantInvite: l } = e,
        r = t.channel?.id,
        a = (0, u.bG)(
            [M.A, te.A],
            () => {
                let e = M.A.getChannel(r);
                return null != e && te.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, e) ? e : null;
            },
            [r],
        ),
        o = (0, u.bG)([nV.A], () => null != nV.A.getGuild(t.guild?.id), [t.guild]);
    return null == a
        ? (0, s.jsx)(dt, {
              invite: t,
              message: n,
              isMemberOfGuild: o,
              onTransitionToInviteChannel: i,
              onAcceptInstantInvite: l,
          })
        : (0, s.jsx)(df, { invite: t, message: n, channel: a, onTransitionToInviteChannel: i });
}
var dE = n(652896),
    dv = n(834757),
    dC = n(427358),
    d_ = n(323605);
function dj(e) {
    let { className: t, channel: n, guild: i, onClick: l } = e,
        r = (0, oO.gU)(n, i),
        a = (0, it.Ay)(n);
    return (0, s.jsxs)(eL.D, {
        onClick: l,
        className: o()(d_.UP, t),
        children: [
            null != r &&
                (0, s.jsx)(r, { className: d_.p, color: "currentColor", size: "custom", width: 12, height: 12 }),
            (0, s.jsx)(A.E, {
                variant: "text-xs/medium",
                lineClamp: 1,
                color: "currentColor",
                children: (0, s.jsxs)(sK.A, { children: [i.name, " / ", a] }),
            }),
            (0, s.jsx)(n2._, { className: d_.t4, color: "currentColor", size: "custom", width: 12, height: 12 }),
        ],
    });
}
var dN = n(399513),
    dy = n(717421),
    dT = n(297413),
    dS = n(528944);
function db(e) {
    let { user: t, guildId: n, channelId: i, nick: l } = e,
        a = r.useRef(null);
    return (0, s.jsx)(lT.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        channelId: i,
        position: "left",
        children: (e) => {
            let { onClick: i, ...r } = e;
            return (0, s.jsxs)(eL.D, {
                ...r,
                innerRef: a,
                className: dS.nM,
                onClick: i,
                children: [
                    (0, s.jsx)(tp.eu, {
                        src: t.getAvatarURL(n, (0, tA.FT)(tA._3.SIZE_24)),
                        className: dS.my,
                        "aria-label": t.username,
                        size: tA._3.SIZE_24,
                    }),
                    (0, s.jsx)(A.E, {
                        className: dS.Tc,
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: (0, s.jsx)(dT.A, { user: t, nick: l, hideDiscriminator: !0 }),
                    }),
                ],
            });
        },
    });
}
var dk = n(480887);
function dR(e) {
    let { guildId: t, channelId: n, users: i, onHoverOrFocus: l, ...a } = e,
        o = r.useCallback((e) => (0, s.jsx)(dL, { users: e, guildId: t, channelId: n, onHoverOrFocus: l }), [t, n, l]);
    return (0, s.jsx)(sw.Y, { renderPopout: () => o(i), ...a });
}
function dL(e) {
    let { users: t, guildId: n, channelId: i, onHoverOrFocus: l } = e,
        a = r.useRef(null),
        { isHoveringOrFocusing: o } = (0, tF.A)(a);
    return (
        r.useEffect(() => {
            l?.(o);
        }, [l, o]),
        (0, s.jsx)("div", {
            ref: a,
            className: dk.o,
            style: { "--custom-popover-width": "200px" },
            children: (0, s.jsx)(da.Ip, {
                className: dk.G,
                children: t.map((e) =>
                    (0, s.jsx)(
                        db,
                        { user: e, guildId: n ?? void 0, channelId: i, nick: rR.Ay.getNickname(n, i, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
var dM = n(768920);
let dP = { mass: 1, tension: 170, friction: 26 };
function dD(e) {
    let { className: t, guildId: n, channelId: i, members: l, ref: a, motion: d } = e,
        c = l.length > 4,
        u = c ? l.slice(0, 3) : l,
        m = c ? l.length - 4 + 1 : 0,
        h = Math.min(c ? u.length + 1 : u.length, 4),
        g = (d?.percentX ?? 0) * 6,
        p = (d?.percentY ?? 0) * 6,
        A = 1 + ((d?.proximity ?? 0) / 2) * 0.08,
        [x, f] = (0, dy.z)(() => ({ x: 0, y: 0, scale: 1, config: dP }));
    return (
        r.useEffect(() => {
            f({ x: g, y: p, scale: A });
        }, [g, p, A, f]),
        (0, s.jsxs)(dN.animated.div, {
            ref: a,
            className: o()(dM.gg, t),
            "data-count": h,
            "aria-hidden": !0,
            style: {
                transform: (0, dN.to)([x.x, x.y, x.scale], (e, t, n) => `translate3d(${e}px, ${t}px, 0) scale(${n})`),
            },
            children: [
                u.map((e, t) =>
                    (0, s.jsx)(
                        "div",
                        {
                            className: dM.my,
                            children: (0, s.jsx)(tw.m, {
                                text: rR.Ay.getName(n, i, e),
                                asContainer: !0,
                                tag: "div",
                                children: (0, s.jsx)(tp.eu, {
                                    src: (function (e, t, n) {
                                        let i = lS.Ay.getMember(t, e.id);
                                        if (null != i) {
                                            let e = (0, U.xT)(i);
                                            if (null != e) return e;
                                        }
                                        return e.getAvatarURL(t, n);
                                    })(e, n, 0 === t ? 80 : 60),
                                    size:
                                        1 === h
                                            ? tA._3.SIZE_80
                                            : 2 === h && 0 === t
                                              ? tA._3.DEPRECATED_SIZE_60
                                              : 2 === h && 1 === t
                                                ? tA._3.SIZE_40
                                                : h > 2 && 0 === t
                                                  ? tA._3.DEPRECATED_SIZE_60
                                                  : h > 2 && 1 === t
                                                    ? tA._3.SIZE_48
                                                    : h > 2
                                                      ? tA._3.SIZE_40
                                                      : tA._3.SIZE_48,
                                    "aria-hidden": !0,
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
                c && (0, s.jsx)(dO, { guildId: n, channelId: i, members: l, count: m }, "overflow"),
            ],
        })
    );
}
function dO(e) {
    let { guildId: t, channelId: n, members: i, count: l } = e,
        {
            triggerRef: a,
            shouldShow: d,
            onPopoutHoverOrFocus: c,
        } = (function () {
            let e = r.useRef(null),
                { isHoveringOrFocusing: t } = (0, tF.A)(e),
                [n, i] = r.useState(!1),
                l = t || n,
                [s, a] = r.useState(!1),
                o = r.useRef(null);
            return (
                r.useEffect(
                    () => (l || (o.current = setTimeout(() => a(!1), 300)), () => clearTimeout(o.current)),
                    [l],
                ),
                l && !s && a(!0),
                { triggerRef: e, shouldShow: l || s, onPopoutHoverOrFocus: i }
            );
        })();
    return (0, s.jsx)(dR, {
        targetElementRef: a,
        guildId: t,
        channelId: n,
        users: i,
        shouldShow: d,
        onHoverOrFocus: c,
        children: (e) =>
            (0, s.jsx)("div", {
                className: o()(dM.my, dM.k2),
                ref: a,
                ...e,
                children: (0, s.jsx)(A.E, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    children: l > 99 ? ">99" : `+${l}`,
                }),
            }),
    });
}
var dU = n(183751);
function dG(e) {
    let { invite: t, message: n, guild: i, onTransitionToInviteChannel: l, onAcceptInstantInvite: a } = e,
        d = r.useRef(null),
        c = i ?? null;
    null == c && null != t.guild && (c = oM.DY(t.guild));
    let m = null != t.channel ? (0, oR.OY)(t.channel) : null;
    (ey()(null != c, "Voice Invite Embed must be used in context of a guild."),
        ey()(null != m, "Voice Invite Embed must be able to resolve an invite channel."));
    let h = (0, u.bG)(
            [te.A, M.A],
            () => {
                let e = M.A.getChannel(m.id);
                return null == e || te.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, e);
            },
            [m.id],
        ),
        g = (0, u.bG)([dA.Ay], () => (h ? dA.Ay.getVoiceStatesForChannelAlt(m.id, c.id) : []), [m.id, c.id, h]),
        { label: p, sublabel: x } = (function (e) {
            let { currentUserId: t, author: n, voiceStates: i } = e,
                l = n.id === t,
                s = i.length > 0,
                r = i.some((e) => e.user?.id === n.id),
                a = i.length - !!r;
            if (!s)
                return {
                    label: l ? K.intl.string(K.t.DVDvCD) : K.intl.string(K.t.TY77rq),
                    sublabel: K.intl.string(K.t.wM2WTM),
                };
            let o = r ? K.t["2RWMFV"] : K.t.IWXzHV,
                d = r ? K.t.Da7tZx : K.t["3VbQvv"];
            return { label: l ? K.intl.format(o, { othersCount: a }) : K.intl.format(d, { othersCount: a }) };
        })({ currentUserId: (0, u.bG)([L.default], () => L.default.getId()), author: n.author, voiceStates: g }),
        E = (0, u.bG)([nV.A], () => null != nV.A.getGuild(c.id), [c.id]),
        v = (0, u.bG)([ea.Ay], () => ea.Ay.getVoiceChannelId() === m.id, [m.id]),
        C = (0, u.bG)([lS.Ay], () => o0([lS.Ay], t), [t]),
        _ = t.state === Y.elq.ACCEPTING,
        { analyticsLocations: j } = (0, I.Ay)(f.A.INVITE_EMBED),
        N = (0, la._U)(t.code, n.id),
        y = (function (e) {
            let { invite: t, message: n, voiceStates: i, guildId: l, channelId: s } = e;
            return (0, u.bG)(
                [dl.A, dC.A],
                () => {
                    if ((0, ob.G4)(t) && null != t.target_user) {
                        let e = dl.A.getStreamForUser(t.target_user.id, l);
                        if (null != e && e.channelId === s) return e;
                    }
                    let e = n.author.id;
                    if (i.some((t) => t.voiceState.userId === e && t.voiceState.selfStream)) {
                        let t = dl.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    let r = i
                        .filter((t) => t.voiceState.selfStream && t.voiceState.userId !== e)
                        .map((e) => e.voiceState.userId);
                    if (0 === r.length) return null;
                    for (let e of [...r].sort((e, t) => {
                        let n = dC.A.getUserAffinity(e)?.vcProbability ?? 0;
                        return (dC.A.getUserAffinity(t)?.vcProbability ?? 0) - n;
                    })) {
                        let t = dl.A.getStreamForUser(e, l);
                        if (null != t && t.channelId === s) return t;
                    }
                    return null;
                },
                [t, n, i, l, s],
            );
        })({ invite: t, message: n, voiceStates: g, guildId: c.id, channelId: m.id }),
        T = (0, dv.AO)(y),
        S = null != y,
        b = r.useCallback(() => {
            let e = E ? "transition" : "accept";
            (E ? l() : a(),
                (0, oN.he)(
                    {
                        invite: t,
                        action: e,
                        inviter_id: n.author.id,
                        invite_message_id: n.id,
                        invite_instance_id: N,
                        application_id: T?.id ?? void 0,
                        stream_key: null != y ? (0, dE._z)(y) : void 0,
                        number_of_users_in_channel: g.length,
                    },
                    j,
                ));
        }, [t, n, j, N, E, T, y, g.length, l, a]),
        k = r.useCallback(() => {
            (E ? (0, lX.iN)(m.id) : a({ autoJoin: !1 }),
                eV.default.track(Y.HAw.VOICE_INVITE_EMBED_BREADCRUMB_CLICKED, {
                    invite_code: t.code,
                    invite_guild_id: c.id,
                    invite_channel_id: m.id,
                    invite_instance_id: N,
                    is_member: E,
                    application_id: T?.id ?? null,
                    stream_key: null != y ? (0, dE._z)(y) : null,
                    number_of_users_in_channel: g.length,
                    location_stack: j,
                }));
        }, [m.id, c.id, t.code, N, E, T, y, g.length, j, a]);
    (0, e2.A)({
        name: e1.ImpressionNames.VOICE_INVITE_EMBED,
        type: e1.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: c.id,
            invite_channel_id: m.id,
            invite_instance_id: N,
            has_active_stream: S,
            location_stack: j,
        },
    });
    let R = (0, u.bG)([ad.Ay], () => ad.Ay.useReducedMotion),
        P = r.useRef(null),
        [D, O] = r.useState({ percentX: 0, percentY: 0, proximity: 0 }),
        U = (0, u.bG)(
            [dC.A],
            () => {
                let e = g.map((e) => e.user),
                    t = e.find((e) => e.id === n.author.id),
                    i = e
                        .filter((e) => e.id !== n.author.id)
                        .sort((e, t) => {
                            let n = dC.A.getUserAffinity(e.id)?.vcProbability ?? 0;
                            return (dC.A.getUserAffinity(t.id)?.vcProbability ?? 0) - n;
                        });
                return null != t ? [t, ...i] : i;
            },
            [g, n.author.id],
        ),
        G = r.useMemo(() => tm().throttle(O, 20), [O]);
    r.useEffect(() => () => G.cancel(), [G]);
    let w = r.useCallback(
            (e) => {
                if (R) return;
                let t = P.current?.getBoundingClientRect();
                if (null == t) return;
                let n = ((e.clientX - t.left) / t.width) * 2 - 1,
                    i = ((e.clientY - t.top) / t.height) * 2 - 1,
                    l = 0,
                    s = d.current?.getBoundingClientRect();
                if (null != s) {
                    let n = s.left + s.width / 2,
                        i = s.top + s.height / 2,
                        r = e.clientX - n,
                        a = e.clientY - i;
                    l = 2 * Math.exp(-Math.sqrt(r * r + a * a) / (0.2 * Math.sqrt(t.width ** 2 + t.height ** 2)));
                }
                G({ percentX: n, percentY: i, proximity: l });
            },
            [R, G],
        ),
        B = r.useCallback(() => {
            (G.cancel(), O({ percentX: 0, percentY: 0, proximity: 0 }));
        }, [G]);
    return (0, s.jsxs)("div", {
        className: dU.kL,
        children: [
            (0, s.jsxs)("div", {
                ref: P,
                className: dU.hw,
                onMouseMove: w,
                onMouseLeave: B,
                children: [
                    (0, s.jsx)("div", { className: dU.ys }),
                    (0, s.jsx)("div", { className: dU.r$, style: { "--custom-number-of-dots": 20 } }),
                    (0, s.jsxs)("div", {
                        className: dU.rf,
                        children: [
                            (0, s.jsxs)("div", {
                                className: o()(dU.Qs, { [dU.tE]: 0 === U.length }),
                                children: [
                                    (0, s.jsx)(dj, { channel: m, guild: c, onClick: k }),
                                    (0, s.jsxs)("div", {
                                        className: dU.WD,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "text-md/medium",
                                                children: (0, s.jsx)(sK.A, { lineClamp: 3, delay: 150, children: p }),
                                            }),
                                            null != x
                                                ? (0, s.jsx)(A.E, {
                                                      variant: "text-sm/normal",
                                                      className: dU.$B,
                                                      children: (0, s.jsx)(sK.A, { delay: 150, children: x }),
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            U.length > 0
                                ? (0, s.jsx)("div", {
                                      className: dU.RE,
                                      children: (0, s.jsx)(dD, {
                                          ref: d,
                                          guildId: c.id,
                                          channelId: m.id,
                                          members: U,
                                          motion: D,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: dU.xk,
                        children: (0, s.jsx)(eh.$, {
                            onClick: b,
                            loading: _,
                            variant: v ? "secondary" : "active",
                            fullWidth: !0,
                            disabled: !C,
                            text: v ? K.intl.string(K.t["3xjX0U"]) : K.intl.string(K.t.gpqgah),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: dU.qr,
                children: [
                    (0, s.jsx)(dd.EyeSlashIcon, { size: "custom", color: "currentColor", className: dU.Dq }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        lineClamp: 1,
                        children: K.intl.string(K.t.fkg9mQ),
                    }),
                ],
            }),
        ],
    });
}
function dw(e) {
    let { code: t, message: n, getAcceptInviteContext: i } = e,
        { invite: l, inviteError: a } = (0, u.cf)(
            [oL.A],
            () => ({ invite: oL.A.getInvite(t), inviteError: oL.A.getInviteError(t) }),
            [t],
        ),
        o = (0, la._U)(t, n.id);
    r.useEffect(() => {
        null == l && oN.Ay.resolveInvite(t, void 0, { inviteInstanceId: o });
    }, [t]);
    let d = l ?? { state: Y.elq.RESOLVING, code: "" },
        { analyticsLocations: c } = (0, I.Ay)(),
        m = (0, u.bG)([nV.A], () => (l?.guild != null ? nV.A.getGuild(l.guild.id) : null), [l]),
        h = (0, u.bG)(
            [M.A, te.A],
            () => {
                let e = l?.channel?.id;
                if (null == e) return !1;
                let t = M.A.getChannel(e);
                return null != t && te.A.canBasicChannel(Y.hVb.VIEW_CHANNEL, t);
            },
            [l],
        ),
        g = (0, u.bG)([L.default], () => L.default.getId()),
        p = (0, u.bG)([oT.Ay], () => oT.Ay.getGuildScheduledEvent(d.guild_scheduled_event?.id), [d]);
    function A() {
        null != d.channel && oN.Ay.transitionToInvite(d, { forceTransition: !0 });
    }
    function x() {
        let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        function n() {
            oN.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: i("Invite Button Embed", t),
                autoJoin: e,
            });
        }
        let s = null == m && l?.guild != null ? oM.DY(l.guild) : m;
        (0, ok.g0)({
            guildId: l?.guild?.id ?? null,
            guild: s,
            isMember: null != m,
            analyticsLocations: c,
            onGateConfirm: n,
        }) === ok.Wx.PROCEED && n();
    }
    let f = (0, s.jsx)(o2, {
        onTransitionToInviteChannel: A,
        onAcceptInstantInvite: x,
        currentUserId: g,
        guild: m,
        invite: d,
        message: n,
    });
    switch (d.state) {
        case Y.elq.RESOLVING:
            f = (0, s.jsx)(oU, {});
            break;
        case Y.elq.EXPIRED:
        case Y.elq.BANNED:
            f = (0, s.jsx)(di, { banned: d.state === Y.elq.BANNED, author: n.author });
            break;
        case Y.elq.ERROR:
            f = (0, s.jsx)(oK, { author: n.author, inviteError: a });
            break;
        default:
            switch ((0, ob.On)(d)) {
                case ob.Xd.GROUP_DM:
                    f = (0, s.jsx)(oq, {
                        onTransitionToInviteChannel: A,
                        onAcceptInstantInvite: x,
                        currentUserId: g,
                        invite: d,
                        message: n,
                    });
                    break;
                case ob.Xd.FRIEND:
                    f = (0, s.jsx)(oX, { invite: d, message: n, getAcceptInviteContext: i });
                    break;
                default:
                    if ((0, ob.G4)(d)) {
                        if (null != d.channel && (0, oR.OY)(d.channel).isGuildVoice() && null != d.guild) {
                            let e = oD({ location: "InviteEmbed.isStreamInvite", guildId: d.guild.id });
                            if (h)
                                if (e.enabled) {
                                    f = (0, s.jsx)(dI, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                } else {
                                    f = (0, s.jsx)(dG, {
                                        onTransitionToInviteChannel: A,
                                        onAcceptInstantInvite: x,
                                        guild: m,
                                        invite: d,
                                        message: n,
                                    });
                                    break;
                                }
                        }
                        f = (0, s.jsx)(ds, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            currentUserId: g,
                            message: n,
                            guild: m,
                            invite: d,
                        });
                        break;
                    }
                    if ((0, ob.ly)(d)) {
                        f = (0, s.jsx)(oS.Ay, {
                            guildScheduledEvent: p,
                            guild: d.guild,
                            channel: d.channel,
                            isMember: null != m,
                            onAcceptInstantInvite: x,
                            onTransitionToInviteChannel: A,
                        });
                        break;
                    }
                    if ((0, ob.oK)(d)) {
                        f = (0, s.jsx)(oH, { invite: d, getAcceptInviteContext: i, message: n });
                        break;
                    }
                    if (null != d.channel && (0, oR.OY)(d.channel).isGuildVoice() && null != d.guild) {
                        let e = oD({ location: "InviteEmbed.isGuildVoice", guildId: d.guild.id });
                        if (h)
                            if (e.enabled) {
                                f = (0, s.jsx)(dI, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            } else {
                                f = (0, s.jsx)(dG, {
                                    onTransitionToInviteChannel: A,
                                    onAcceptInstantInvite: x,
                                    guild: m,
                                    invite: d,
                                    message: n,
                                });
                                break;
                            }
                    }
                    (0, oy.v)(d) &&
                        (f = (0, s.jsx)(dt, {
                            onTransitionToInviteChannel: A,
                            onAcceptInstantInvite: x,
                            isMemberOfGuild: null != m,
                            invite: d,
                            message: n,
                        }));
            }
    }
    return (0, s.jsx)(aG.A, { section: Y.JJy.INVITE_LINK, children: f });
}
var dB = n(706403),
    dV = n(860227),
    dH = n(441939),
    dF = n(280621),
    dz = n(123791),
    dY = n(627363);
function dK(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, dY.YY)(t);
    return null == i ? null : (0, s.jsx)(dW, { app: i, guildId: n });
}
function dW(e) {
    let { app: t, guildId: i } = e;
    (0, dz.C)(t.id);
    let l = r.useCallback(() => {
        (0, g.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("538855"),
                n.e("406322"),
                n.e("309702"),
                n.e("168031"),
                n.e("485384"),
                n.e("320428"),
            ]).then(n.bind(n, 719847));
            return (n) => (0, s.jsx)(e, { appId: t.id, guildId: i, ...n });
        });
    }, [t, i]);
    return (0, s.jsx)(eh.$, {
        size: "sm",
        onClick: l,
        icon: dF.U,
        text: K.intl.format(K.t.XDRjs5, { appName: t.name }),
    });
}
var dJ = n(394839),
    dX = n(96782),
    dZ = n(930390),
    dq = n(861986),
    d$ = n(87221),
    dQ = n(313433);
function d0(e) {
    let { count: t } = e;
    return (0, s.jsxs)("div", {
        className: dQ.kL,
        children: [
            Array.from({ length: t }, (e, t) =>
                (0, s.jsxs)(
                    "div",
                    {
                        className: dQ.Yf,
                        children: [
                            (0, s.jsx)(d$.D, { size: "lg", color: nP.A.colors.TEXT_MUTED }),
                            (0, s.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: K.intl.string(K.t.B2xSxL),
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, s.jsxs)("div", {
                className: dQ.Fj,
                children: [
                    (0, s.jsx)(nZ.CircleInformationIcon, { size: "sm", color: nP.A.colors.TEXT_MUTED }),
                    (0, s.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: K.intl.string(K.t["VGf+K3"]),
                    }),
                ],
            }),
        ],
    });
}
var d1 = n(343552),
    d2 = n(581619),
    d3 = n(803931);
function d5(e) {
    return (0, sB.$o)({ ...e, showPlaybackSpeedControl: !0 });
}
let d4 = [Y.Auw.GIFV],
    d9 = 15 * nh.A.Millis.MINUTE,
    d6 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    d8 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, c.Lt)(r, lg.e5.IS_ANIMATED);
        return null != i && null != l && (lp.bp.test(n) || (a && (lp.P8.test(n) || lp.p4.test(n))))
            ? (0, s.jsx)(av.A, { width: i, height: l, src: n, url: t, format: m.TL.IMAGE, className: d3.jj })
            : null;
    };
function d7(e) {
    let { url: t, image: n, video: i, thumbnail: l, providerName: a, children: o } = e,
        d = r.useMemo(() => (0, d1.b)(t, n, i, l, a), [t, n, i, l, a]);
    return (0, s.jsx)(iX.G.Provider, { value: d, children: o });
}
class ce extends r.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1, hideInviteEmbedBanner: !1, hideActivityInvite: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: i } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: i.id,
            ...(null != t ? { invite_instance_id: (0, la._U)(t, i.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && d6.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: s, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, h.A)(this.state, t) ||
            !(0, h.A)(this.props, e, ["message", "channel"]) ||
            l.type !== a.type ||
            d !== r ||
            o.codedLinks !== s.codedLinks ||
            o.flags !== s.flags ||
            o.giftCodes !== s.giftCodes ||
            o.attachments !== s.attachments ||
            o.embeds !== s.embeds ||
            o.components !== s.components ||
            o.activity !== s.activity ||
            ((n = o.reactions) !== (i = s.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: s } = e,
                            { emoji: r, count: a, burst_count: o } = i[t];
                        return s !== o || l !== a || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButtons() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case r$.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(n1, { messageId: e.id, channelId: t.id });
                break;
            case r$.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(ex, { channelId: t.id, messageId: e.id }),
                        (0, em.cc)(t.id, e.id) ? (0, s.jsx)(ej, { channelId: t.id }) : null,
                    ],
                });
                break;
            case r$.xC.CONNECT_TO_TEEN:
                i = (0, s.jsx)(ev, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: d3.od, children: i });
    }
    renderCodedLinks(e) {
        if (0 === e.codedLinks.length) return null;
        let { channel: t } = this.props;
        return e.codedLinks.map((n) => {
            let { type: i, code: l, url: r } = n;
            if ((0, tb.Yf)(i)) {
                let n = (0, tb.kK)(i, l, r);
                if (null == n) return null;
                let { applicationId: a } = n;
                return (0, s.jsx)(
                    e0.O,
                    {
                        applicationId: a,
                        channel: t,
                        variant: "app_embed",
                        children: (t) => {
                            switch (n.type) {
                                case tk.I.APP_DIRECTORY_PROFILE:
                                    return (0, s.jsx)(i3, { code: a, message: e });
                                case tk.I.ACTIVITY_BOOKMARK:
                                    let { params: i } = n;
                                    return (0, s.jsx)(eu, { application: t, message: e, params: i });
                                case tk.I.APP_DIRECTORY_STOREFRONT:
                                    return (0, s.jsx)(eq, { application: t, message: e });
                                case tk.I.APP_DIRECTORY_STOREFRONT_SKU:
                                    let { skuId: l } = n;
                                    return (0, s.jsx)(e$, { application: t, message: e, skuId: l });
                                case tk.I.APP_OAUTH2_LINK:
                                    return (0, s.jsx)(e3, { application: t, message: e });
                                default:
                                    return null;
                            }
                        },
                    },
                    l,
                );
            }
            switch (i) {
                case tk.I.INVITE:
                    if (!this.shouldRenderInvite(l)) return null;
                    return (0, s.jsx)(
                        dw,
                        { code: l, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                        l,
                    );
                case tk.I.TEMPLATE:
                    return (0, s.jsx)(lr, { code: l }, l);
                case tk.I.EVENT:
                    return (0, s.jsx)(i7.A, { code: l }, l);
                case tk.I.CHANNEL_LINK:
                    return (0, s.jsx)(r8, { code: l, message: e }, l);
                case tk.I.GUILD_PRODUCT:
                    return (0, s.jsx)(i8, { code: l }, l);
                case tk.I.SERVER_SHOP:
                    return (0, s.jsx)(nK, { guildId: l }, l);
                case tk.I.SOCIAL_LAYER_STOREFRONT: {
                    let n = (0, sI.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sP,
                            {
                                guildOrApplication: { type: "guild", guildId: i },
                                skuIds: n.skuIds,
                                destinationGuildId: t.getGuildId() ?? null,
                                channelId: t.id,
                                messageId: e.id,
                            },
                            l,
                        );
                    let [r] = n.skuIds;
                    return (0, s.jsx)(
                        sD.A,
                        {
                            guildId: i,
                            skuId: r,
                            channel: t,
                            customNavigateToSocialLayerStorefront: () => {
                                (0, sf.navigateToSocialLayerStorefrontWithGuildPreview)({ guildId: i });
                            },
                        },
                        l,
                    );
                }
                case tk.I.SOCIAL_LAYER_STOREFRONT_APP: {
                    let n = (0, sI.rg)(l);
                    if (null == n) return null;
                    let i = n.scopeId;
                    if (n.skuIds.length > 1)
                        return (0, s.jsx)(
                            sP,
                            {
                                guildOrApplication: { type: "application", applicationId: i },
                                skuIds: n.skuIds,
                                destinationGuildId: t.getGuildId() ?? null,
                                channelId: t.id,
                                messageId: e.id,
                            },
                            l,
                        );
                    let [r] = n.skuIds;
                    return (0, s.jsx)(sD.I, { applicationId: i, skuId: r, channel: t }, l);
                }
                case tk.I.QUESTS_EMBED:
                    return (0, s.jsx)(lF.A, { questId: l }, l);
                case tk.I.GAME_PROFILE:
                    return (0, s.jsx)(iy, { gameId: l, sourceUserId: e.author.id }, l);
                case tk.I.GAME_SERVER_SHARE:
                    return (0, s.jsx)(iJ, { code: l }, l);
                case tk.I.USER_PROFILE:
                    return (0, s.jsx)(rK, { userId: l, guildId: t.guild_id, channelId: t.id, messageId: e.id }, l);
                case tk.I.COLLECTIBLES_SHOP: {
                    if (!t.isPrivate()) return null;
                    let e = (function (e) {
                        let t = e.lastIndexOf("-"),
                            n = t >= 0 ? e.slice(t + 1) : "";
                        if ("" === n) return null;
                        let i = t > 0 ? e.slice(0, t) : "";
                        return { skuId: n, tab: tL.has(i) ? i : void 0 };
                    })(l);
                    if (null == e) return null;
                    return (0, s.jsx)(nM, { skuId: e.skuId, tab: e.tab, channel: t }, l);
                }
                case tk.I.EXPERIMENT:
                case tk.I.GAME_ORGANIZATION_INVITE:
                    return null;
                default:
                    throw Error(`Unknown coded link type: ${i}`);
            }
        });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = O.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: d3.zv,
                          children: (0, s.jsx)(oj, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: l,
                              content: r,
                              giftInfo: a,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: i,
            isLurking: l,
            isPendingMember: r,
            channel: a,
        } = this.props;
        return n
            ? null
            : (0, s.jsx)(dZ.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isPendingMember: r,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: l,
                onMediaItemContextMenu: r,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: d, flags: u } = e;
        if (0 === d.length || e.isPoll() || (0, rW._c)(e)) return null;
        let m = d.filter((e) => null == e.flags || !(0, c.Lt)(e.flags, Y.sbO.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => ({
                    ...(0, lg.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, c.Lt)(t.flags ?? 0, Y.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            {
                srcToOnClickOverride: g,
                srcToHandlePreloadImage: p,
                srcToSeekOverride: A,
            } = (0, lw.o)(h, { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o }, "Media Mosaic"),
            x = h.length > 1,
            f = (0, c.Lt)(u, Y.pr7.IS_VOICE_MESSAGE);
        function I(e, n) {
            let i = (0, c.Lt)(e.originalItem.flags ?? 0, Y.sbO.IS_SPOILER) || (0, sO.BV)(t);
            return (0, rQ.iW)(e.originalItem, n, i);
        }
        let E = m.map((s) => {
            let a = (0, lg.aG)(s),
                o = {
                    message: e,
                    item: (0, dX.rC)(s, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (m.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    canEditItem: i,
                    onEditItem: this.handleEditAttachment,
                    getObscureReason: I,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  (e.stopPropagation(), e.preventDefault(), r(e, a));
                              }
                            : void 0,
                    renderAudioComponent: f ? dB.SX : dB.Nj,
                    renderImageComponent: dB.Cr,
                    renderVideoComponent: dB.I1,
                    renderPlaintextFilePreview: dB.R6,
                    renderGenericFileComponent: dB.UB,
                    onPlay: function (n, i, l) {
                        eV.default.track(Y.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: s.content_type,
                            flags: s.flags,
                            size: s.size,
                            attachment_id: s.id,
                            message_id: e.id,
                            duration: l,
                        });
                    },
                    gifFavoriteButton: d8(a),
                    allowFullScreen: !this.props.disableComponentInteractivity,
                },
                d = (0, rX.E)({ proxyURL: s.proxy_url, url: s.url });
            return (d in g && x && ((o.onClick = g[d]), (o.handlePreloadImage = p[d]), (o.onSeekRequest = A[d])), o);
        });
        return (0, s.jsx)(dJ.A, { items: E });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: l,
                inlineEmbedMedia: r,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: c,
            } = this.props,
            u = (0, rQ.sC)(e, i, o, d);
        if (e.type === Y.Auw.GIFT) return null;
        let m = d4.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            d7,
            {
                url: m,
                image: e.image,
                video: e.video,
                thumbnail: e.thumbnail,
                providerName: e.provider?.name,
                children: (0, s.jsx)(tc.Ay, {
                    embed: e,
                    obscureReason: u ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !r,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: a ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: i,
                    embedIndex: t,
                    shouldAgeVerify: c ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== Y.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? lh.A.parseEmbedTitleWithoutLinks : lh.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === Y.Auw.RICH
            ? lh.A.parseRichEmbedText(t, !0, {
                  channelId: this.props.channel.id,
                  allowLinks: !0,
                  allowEmojiLinks: !0,
                  allowList: this.props.showListsAndHeaders,
                  allowHeading: !n && this.props.showListsAndHeaders,
                  previewLinkTarget: this.props.showMaskedLinks,
              })
            : t;
    handleEmbedSuppressed = (e) => {
        let { channel: t, message: n } = this.props;
        e.shiftKey ? x.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    handleEditAttachment = (e) => {
        let t = e.originalItem;
        (0, g.openModalLazy)(async () => {
            let { ModifyMosaicAttachmentModal: i } = await Promise.all([n.e("865429"), n.e("570698")]).then(
                n.bind(n, 427281),
            );
            return (n) =>
                (0, s.jsx)(i, {
                    ...n,
                    item: e,
                    onSubmit: (e) => {
                        let { description: n, spoiler: i } = e,
                            { channel: l, message: s } = this.props,
                            r = s.attachments.map((e) => ({ id: e.id })),
                            a = r.find((e) => e.id === t.id);
                        null != a &&
                            ((a.description = n), (a.is_spoiler = i), x.A.patchMessageAttachments(l.id, s.id, r));
                    },
                });
        });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  let i;
                  if (
                      d2.zx.has(t.type) ||
                      (0, rZ.p6)(t) ||
                      ((0, c.Lt)(t.flags ?? 0, Y.iSj.IS_CONTENT_INVENTORY_ENTRY) &&
                          !(
                              0 ===
                                  (i = (e.components ?? []).filter((e) => e.type === ld.I5.CONTENT_INVENTORY_ENTRY))
                                      .length ||
                              i.some((e) => {
                                  let { contentInventoryEntry: t } = e;
                                  return !lc.has(t.content_type);
                              })
                          )) ||
                      (0, rZ.V)(t) ||
                      (0, rZ.G8)(t) ||
                      (0, rZ.Xk)(t) ||
                      ((0, rZ.nL)(t) && (0, rT.l)("MessageAccessories.renderEmbeds"))
                  )
                      return null;
                  if (t.type === Y.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var l = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: i,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          c = (0, rQ.sC)(t, e, d, i),
                          u = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  as,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: d8,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    (t.stopPropagation(), t.preventDefault(), a?.(t, e));
                                                },
                                      shouldHideMediaOptions: r,
                                      enabledContentHarmTypeFlags: i,
                                      onSuppressEmbed: o ? l.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
                                  },
                                  t.id,
                              );
                          };
                      return null != c
                          ? (0, s.jsx)(
                                si.Ay,
                                {
                                    type: si.Ay.Types.EMBED,
                                    reason: c,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => u(e),
                                },
                                t.id,
                            )
                          : u();
                  }
                  let r = { renderImageComponent: sB.LL, renderVideoComponent: d5, renderLinkComponent: sB.bU };
                  if (
                      t.type === Y.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = rq.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  ox,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, r, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: i,
            disableComponentInteractivity: l,
            onMediaItemContextMenu: r,
        } = this.props;
        return (0, s.jsx)(an.N, {
            gifAutoPlay: t,
            getGifFavButton: d8,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), r?.(t, e));
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(lu.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t, hideInviteEmbedBanner: n, hideActivityInvite: i } = this.props;
        return i ? null : (0, s.jsx)(dH.A, { channel: t, message: e, hideParty: !1, hideInviteEmbedBanner: n });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== Y.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(td, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, r0.ec)(e)
            ? (0, s.jsx)(aE.A, {
                  message: e,
                  onDeleteMessage: () => {
                      x.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, lB.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(ra, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(Y.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(rN, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(Y.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - il.default.extractTimestamp(e.id) >= d9)
        )
            return (0, s.jsx)("div", { className: d3.xM, children: K.intl.string(K.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(p.M, {
            dismissable: !0,
            header: K.intl.string(K.t.VL1KOk),
            confirmText: K.intl.string(K.t.YEHppG),
            cancelText: K.intl.string(K.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (x.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: d3.IX,
                    children: K.intl.string(K.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(A.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: K.intl.string(K.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, s.jsx)(p.M, {
                  dismissable: !0,
                  header: K.intl.string(K.t.CbTIEo),
                  confirmText: K.intl.string(K.t.kFwAsa),
                  cancelText: K.intl.string(K.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let i = t.attachments.filter((e) => e.id !== n.id);
                      (x.A.patchMessageAttachments(e.id, t.id, i),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }));
                  },
                  children: (0, s.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: d3.IX,
                      children: K.intl.string(K.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== d.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(dK, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(e0.c, {
                  contentClassification: t.content_classification,
                  channel: this.props.channel,
                  variant: "app_embed",
                  children: (0, s.jsx)(aI, {
                      application: t,
                      channelId: this.props.channel.id,
                      guildId: this.props.channel.guild_id,
                      message: e,
                  }),
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== Y.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(lG, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === Y.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(so, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === Y.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(sx, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, nJ.KM)(e)
            ? (0, s.jsx)(n$, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(lH.A, { message: e, poll: t, className: d3.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(tT, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, lz.Mn)(e, this.props.channel))
            return (0, s.jsx)(sn, { message: e, renderAccessories: this.props.renderAccessories });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, lz.Mn)(e, this.props.channel))
            return (0, s.jsx)(iA, {
                message: e,
                renderAccessories: this.props.renderAccessories,
                disableComponentInteractivity: this.props.disableComponentInteractivity,
                onMediaItemContextMenu: this.props.onMediaItemContextMenu,
            });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(dq.A, { message: e, compact: t, location: dq.O.AFTER_ACCESSORIES });
    }
    renderRestrictedHiddenMedia(e) {
        let t,
            n,
            i =
                (n =
                    null !=
                    (t = (function (e) {
                        if (!(0, is.A)(e)) return;
                        let t = e.messageSnapshots[0];
                        if (null != t) return new ia(e, t, 0);
                    })(e))
                        ? t.messageSnapshot.message
                        : e).attachments.length +
                n.embeds.length +
                (0, lB.o6)(n).length;
        return 0 === i
            ? null
            : (0, s.jsx)("div", {
                  id: (0, dV.XL)(e),
                  className: o()(this.props.className, d3.kL),
                  children: (0, s.jsx)(d0, { count: i }),
              });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: r } = this.state;
        if (!0 === this.props.restrictedPreview) {
            let n = this.renderForwardedMessage(t);
            return null != n
                ? (0, s.jsx)("div", { id: (0, dV.XL)(t), className: o()(e, d3.kL), children: n })
                : this.renderRestrictedHiddenMedia(t);
        }
        let a = this.renderEditedTag(t, i),
            d = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButtons(),
            h = this.renderEmbeds(t),
            g = this.renderActivityInvite(t),
            p = this.renderReactions(t),
            A = this.renderPublishBump(t),
            x = this.renderEphemeralAccessories(t),
            f = this.renderStickersAccessories(t),
            I = this.renderThreadAccessories(t),
            E = this.renderComponentAccessories(t),
            v = this.renderThreadRoleMentionWarning(t),
            C = this.renderEmbeddedApplicationInstanceEmbed(t),
            _ = this.renderInteractionPremiumUpsell(t),
            j = this.renderMediaPostEmbeds(t),
            N = this.renderSafetyPolicyNotice(t),
            y = this.renderSafetySystemNotification(t),
            T = this.renderMediaObscureNotice(t),
            S = this.renderPoll(t, n),
            b = this.renderForwardedMessage(t),
            k = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == d &&
            null == u &&
            null == h &&
            null == g &&
            null == p &&
            null == c &&
            null == A &&
            null == x &&
            null == f &&
            null == I &&
            null == E &&
            null == C &&
            null == v &&
            null == j &&
            null == N &&
            null != _ &&
            null == S &&
            null == b &&
            null == k &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, dV.XL)(t),
                  className: o()(e, d3.kL),
                  children: [
                      k,
                      b,
                      v,
                      S,
                      R,
                      d,
                      c,
                      j,
                      u,
                      m,
                      h,
                      T,
                      g,
                      f,
                      E,
                      C,
                      _,
                      a,
                      p,
                      A,
                      x,
                      l && this.renderSuppressConfirmModal(),
                      r && this.renderRemoveAttachmentConfirmModal(),
                      I,
                      N,
                      y,
                  ],
              });
    }
}
function ct(e) {
    let {
            channel: t,
            message: n,
            renderSuppressEmbeds: i,
            isMessageSnapshot: l,
            hideInviteEmbedBanner: r,
            hideActivityInvite: a,
        } = e,
        o = (0, u.bG)([L.default], () => L.default.getId()),
        d = n7.X6.useSetting(),
        m = n7.hD.useSetting(),
        h = n7.rs.useSetting() && !(0, rm.A)(e.message),
        g = n7.jW.useSetting() && !1 !== e.renderReactions,
        p = n7.kt.useSetting(),
        A = (0, u.bG)([rJ.A], () => null == t.guild_id || rJ.A.canChatInGuild(t.guild_id), [t]),
        x = (0, u.bG)([lm.A], () => null != t.guild_id && lm.A.isLurking(t.guild_id), [t]),
        f = (0, u.bG)([lS.Ay, O.default], () => {
            let e = O.default.getCurrentUser();
            return (null != t.guild_id && null != e ? lS.Ay.getMember(t.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: I, canManageMessages: E } = (0, u.cf)(
            [te.A],
            () => ({
                canAddNewReactions: A && te.A.can(Y.xBc.ADD_REACTIONS, t),
                canManageMessages: te.A.can(Y.xBc.MANAGE_MESSAGES, t),
            }),
            [A, t],
        ),
        v = (0, i5.ix)(t.guild_id),
        [, C] = (0, i4.c)(t.guild_id),
        _ = (0, ro.Id)(t),
        j =
            (o === n.author.id || E) &&
            n.author.id !== Y.oIV &&
            !1 !== i &&
            !(0, c.Lt)(n.flags, Y.pr7.EPHEMERAL) &&
            _ &&
            (0, r2.A)(n) >= 1,
        N = o === n.author.id && _ && !l,
        y = n.author.id === o,
        T = n.isFirstMessageInForumPost(t),
        S = (0, r3.A)({
            channel: t,
            canChat: A,
            renderReactions: g,
            canAddNewReactions: I,
            isLurking: x,
            communicationDisabled: C,
            isActiveChannelOrUnarchivableThread: _,
            isAutomodQuarantined: v,
        }),
        b = (0, n5.S)((n.editedTimestamp ?? n.timestamp).valueOf()),
        k = (0, lA.A)(t?.id),
        R = (0, lV.A)(n),
        M = (0, nX.P)(n),
        P = (0, r1.z)(t),
        D = (0, r$._f)(n.id, n.channel_id),
        U = (0, nW._R)(),
        G = (0, n4.U)();
    return (0, s.jsx)(ce, {
        canSuppressEmbeds: j,
        canDeleteAttachments: N,
        ...S,
        disableReactionReads: !!T || S.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && P,
        hasBailedAst: e.hasBailedAst,
        isLurking: x && A,
        isPendingMember: f && A,
        isCurrentUser: y,
        inlineAttachmentMedia: d,
        inlineEmbedMedia: m,
        renderEmbeds: h,
        gifAutoPlay: p,
        canRenderReferralEmbed: t.isDM(),
        poll: R,
        showListsAndHeaders: b,
        showMaskedLinks: b,
        shouldHideMediaOptions: k,
        enabledContentHarmTypeFlags: M,
        ctaButtonType: D,
        shouldAgeVerify: U,
        hideInviteEmbedBanner: r,
        hideActivityInvite: a,
        restrictedPreview: G,
    });
}
function cn(e) {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: l = !1,
            disableReactionCreates: r = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        c = n7.X6.useSetting(),
        u = n7.hD.useSetting(),
        m = n7.rs.useSetting(),
        h = n7.kt.useSetting(),
        g = (0, n4.U)(),
        p = (0, n5.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, lA.A)(n?.id),
        x = (0, nX.P)(t),
        f = (0, r$._f)(t.id, t.channel_id),
        I = (0, lV.A)(t);
    return (0, s.jsx)(ce, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: r,
        disableReactionUpdates: a,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: l,
        inlineAttachmentMedia: c,
        inlineEmbedMedia: u,
        renderEmbeds: m,
        gifAutoPlay: h,
        poll: I,
        showListsAndHeaders: p,
        showMaskedLinks: p,
        shouldHideMediaOptions: A,
        enabledContentHarmTypeFlags: x,
        ctaButtonType: f,
        restrictedPreview: g,
    });
}
