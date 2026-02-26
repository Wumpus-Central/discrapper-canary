n.d(t, { A: () => G }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var r = n(835245),
    l = n(80703),
    a = n(397927),
    s = n(73153),
    o = n(384904),
    d = n(6981),
    c = n(308528),
    u = n(77468),
    A = n(869038),
    h = n(933958),
    _ = n(956549),
    m = n(257269),
    p = n(793574),
    g = n(627363),
    E = n(121623),
    I = n(200330),
    f = n(708281),
    C = n(807876),
    T = n(890687),
    N = n(976860),
    S = n(849823),
    x = n(840065),
    v = n(962173),
    y = n(287809),
    b = n(954571),
    O = n(203982),
    L = n(998218),
    R = n(837921),
    P = n(636401),
    j = n(43203),
    D = n(613057),
    M = n(652215),
    w = n(654487);
function U(e, t) {
    null != e &&
        b.default.track(M.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.d)(e),
            link_type: t,
        });
}
let G = {
    [M.e$_.INVITE_BROWSER]: {
        scope: D.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, j.$)(t, "Desktop Modal", n);
        },
    },
    [M.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: D.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == y.default.getCurrentUser()) return;
            let { guildTemplate: r } = await E.A.resolveGuildTemplate(t);
            if (null == r)
                throw new P.A({ errorCode: M.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                R.Ay.focus(),
                (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("58938")]).then(n.bind(n, 72715));
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: r });
                }),
                { guildTemplate: r, code: t }
            );
        },
    },
    [M.e$_.GIFT_CODE_BROWSER]: {
        scope: D.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, r) => {
                s.h.wait(() => {
                    A.A.resolveGiftCode(t, !0, !0)
                        .then((r) => {
                            let { giftCode: l } = r;
                            R.Ay.focus(),
                                b.default.track(M.HAw.OPEN_MODAL, { type: "gift_accept", location: M.$OG }),
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("36820").then(n.bind(n, 67327));
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() => r(new P.A({ errorCode: M.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
                });
            });
        },
    },
    [M.e$_.DEEP_LINK]: {
        scope: { [D.sm.ANY]: [D.LQ, D.hj] },
        handler(e) {
            let {
                args: { type: t, params: i },
            } = e;
            switch ((R.Ay.focus(), t)) {
                case D.XK.USER_SETTINGS:
                    if (null != i) {
                        let e = M.BVt.SETTINGS(i.section, i.subsection),
                            n = (0, S.default)(e, i.search);
                        null != n && (0, x.openUserSettingsFromParsedUrl)({ match: n, urlOrigin: "deeplink" }),
                            U(i.fingerprint, (0, D.OE)(t));
                    }
                    break;
                case D.XK.CHANGELOG:
                    null != i &&
                        ((0, N.pX)(L.A.formatPathWithQuery(M.BVt.CHANGELOGS(i.date), i.query)),
                        U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.LIBRARY:
                    (0, N.pX)(M.BVt.APPLICATION_LIBRARY), null != i && U(i.fingerprint, (0, D.OE)(t));
                    break;
                case D.XK.STORE_HOME:
                    (0, N.pX)(M.BVt.APPLICATION_STORE), null != i && U(i.fingerprint, (0, D.OE)(t));
                    break;
                case D.XK.STORE_LISTING:
                    null != i &&
                        ((0, N.pX)(M.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)),
                        U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, N.pX)(M.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                        U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.CHANNEL:
                    null != i &&
                        ((0, N.pX)(M.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                        U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.GAME_SHOP:
                    null != i &&
                        ((0, N.pX)(M.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                        U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(T.L1.SORT, i.sort),
                            null != i.filter && e.set(T.L1.FILTER, i.filter),
                            null != i.tab && e.set(T.L1.TAB, i.tab),
                            (0, N.pX)(M.BVt.QUEST_HOME_V2, { hash: i.questId, search: `?${e.toString()}` }),
                            U(i.fingerprint, (0, D.OE)(t));
                    } else (0, N.pX)(M.BVt.QUEST_HOME_V2);
                    break;
                case D.XK.QUEST_PREVIEW_TOOL:
                    if ((0, C.U)({ location: w.rE.QUEST_PREVIEW_TOOL_2 }) && null != i) {
                        let e = new URLSearchParams();
                        e.set(T.L1.TAB, T.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(T.L1.QUEST_ID, i.questId),
                            (0, N.pX)(M.BVt.QUEST_HOME_V2, { search: `?${e.toString()}` }),
                            U(i.fingerprint, (0, D.OE)(t));
                    }
                    break;
                case D.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, N.pX)(M.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                        U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.OAUTH2:
                    let l = new URL(M.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    l.search = i.search;
                    let a = (0, I.getOAuth2AuthorizeProps)(l.toString());
                    if (null != a) return (0, I.openOAuth2ModalWithCreateGuildModal)(a), !0;
                    return !1;
                case D.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, f.N)({ token: i.token }), U(i.fingerprint, (0, D.OE)(t)), !0;
                    return !1;
                case D.XK.SHOP:
                    null != i &&
                        ((0, N.pX)(M.BVt.COLLECTIBLES_SHOP, { search: i.search }), U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.FEATURES:
                    i?.path != null && ((0, N.pX)(i.path), U(i.fingerprint, (0, D.OE)(t)));
                    break;
                case D.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, r.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = h.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void b.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let r = await g.Ay.fetchApplication(e),
                                        l = r?.bot?.id;
                                    if (null == l)
                                        return void b.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let a = await c.A.openPrivateChannel({ recipientIds: l }),
                                        s = new URL(t),
                                        o = s.searchParams.get("referrer_id") ?? void 0,
                                        { customId: d } = await (0, m.d9)(
                                            e,
                                            s.searchParams.get("link_id"),
                                            s.searchParams.get("custom_id"),
                                        );
                                    await (0, _.A)({
                                        targetApplicationId: e,
                                        channelId: a,
                                        analyticsLocations: [p.A.DEEPLINK],
                                        customId: d,
                                        referrerId: o,
                                    }),
                                        b.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    b.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(i.applicationId, i.url, e),
                            U(i.fingerprint, (0, D.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case D.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), U(i.fingerprint, (0, D.OE)(t));
                    }
            }
        },
    },
    [M.e$_.BROWSER_HANDOFF]: {
        scope: D.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            R.Ay.focus(null, !0), (0, d.mZ)(t, n);
        },
    },
    [M.e$_.CONNECTIONS_CALLBACK]: {
        scope: D.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: r, state: l },
            } = e;
            if (!v.A.hasPendingAuthorizedState(l))
                throw new P.A(
                    { errorCode: M.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    v.A.deletePendingAuthorizedState(l),
                    await u.A.callback(t, { code: n, openid_params: i, iss: r, state: l })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new P.A({ errorCode: M.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (O._.dispatch(M.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [M.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: D.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i },
            } = e;
            return (0, o.re)({ paymentSourceType: M.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [M.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: D.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: r },
            } = e;
            return (0, o.re)({ paymentSourceType: r, state: t, path: n, query: i });
        },
    },
};
