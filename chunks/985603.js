n.d(t, { A: () => B }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var a = n(835245),
    l = n(80703),
    r = n(397927),
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
    E = n(507263),
    I = n(352306),
    f = n(829203),
    C = n(121623),
    T = n(200330),
    N = n(708281),
    S = n(807876),
    x = n(890687),
    v = n(976860),
    b = n(849823),
    y = n(858897),
    O = n(962173),
    L = n(287809),
    R = n(954571),
    P = n(203982),
    D = n(998218),
    M = n(837921),
    j = n(636401),
    w = n(43203),
    U = n(613057),
    G = n(652215),
    k = n(654487);
function V(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        R.default.track(G.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, l.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let B = {
    [G.e$_.INVITE_BROWSER]: {
        scope: U.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, w.$)(t, "Desktop Modal", n);
        },
    },
    [G.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: U.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == L.default.getCurrentUser()) return;
            let { guildTemplate: a } = await C.A.resolveGuildTemplate(t);
            if (null == a)
                throw new j.A({ errorCode: G.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                M.Ay.focus(),
                (0, r.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("49040")]).then(n.bind(n, 72715));
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: a });
                }),
                { guildTemplate: a, code: t }
            );
        },
    },
    [G.e$_.GIFT_CODE_BROWSER]: {
        scope: U.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, a) => {
                s.h.wait(() => {
                    A.A.resolveGiftCode(t, !0, !0)
                        .then((a) => {
                            let { giftCode: l } = a;
                            M.Ay.focus(),
                                R.default.track(G.HAw.OPEN_MODAL, { type: "gift_accept", location: G.$OG }),
                                (0, r.mMO)(async () => {
                                    let { default: e } = await n.e("14439").then(n.bind(n, 67327));
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() => a(new j.A({ errorCode: G.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
                });
            });
        },
    },
    [G.e$_.DEEP_LINK]: {
        scope: { [U.sm.ANY]: [U.LQ, U.hj] },
        handler(e) {
            let {
                args: { type: t, params: i },
            } = e;
            switch ((M.Ay.focus(), t)) {
                case U.XK.USER_SETTINGS:
                    null != i &&
                        (0, E.B)(() => {
                            let e = G.BVt.SETTINGS(i.section, i.subsection),
                                n = (0, b.default)({ path: e, search: i.search });
                            (0, b.trackParseSettingsUrl)(n, "deeplink"),
                                (0, y.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                V(i, (0, U.OE)(t));
                        });
                    break;
                case U.XK.CHANGELOG:
                    null != i &&
                        ((0, v.pX)(D.A.formatPathWithQuery(G.BVt.CHANGELOGS(i.date), i.query)), V(i, (0, U.OE)(t)));
                    break;
                case U.XK.LIBRARY:
                    (0, v.pX)(G.BVt.APPLICATION_LIBRARY), null != i && V(i, (0, U.OE)(t));
                    break;
                case U.XK.STORE_HOME:
                    (0, v.pX)(G.BVt.APPLICATION_STORE), null != i && V(i, (0, U.OE)(t));
                    break;
                case U.XK.STORE_LISTING:
                    null != i && ((0, v.pX)(G.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), V(i, (0, U.OE)(t)));
                    break;
                case U.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, v.pX)(G.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                        V(i, (0, U.OE)(t)));
                    break;
                case U.XK.CHANNEL:
                    null != i &&
                        ((0, v.pX)(G.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                        V(i, (0, U.OE)(t)));
                    break;
                case U.XK.GAME_SHOP:
                    null != i &&
                        ((0, v.pX)(G.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                        V(i, (0, U.OE)(t)));
                    break;
                case U.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(x.L1.SORT, i.sort),
                            null != i.filter && e.set(x.L1.FILTER, i.filter),
                            null != i.tab && e.set(x.L1.TAB, i.tab),
                            (0, v.pX)(G.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                            V(i, (0, U.OE)(t));
                    } else (0, v.pX)(G.BVt.QUEST_HOME);
                    break;
                case U.XK.QUEST_PREVIEW_TOOL:
                    if ((0, S.U)({ location: k.rE.QUEST_PREVIEW_TOOL_2 }) && null != i) {
                        let e = new URLSearchParams();
                        e.set(x.L1.TAB, x.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(x.L1.QUEST_ID, i.questId),
                            (0, v.pX)(G.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                            V(i, (0, U.OE)(t));
                    }
                    break;
                case U.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, v.pX)(G.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                        V(i, (0, U.OE)(t)));
                    break;
                case U.XK.OAUTH2:
                    let l = new URL(G.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    l.search = i.search;
                    let r = (0, T.getOAuth2AuthorizeProps)(l.toString());
                    if (null != r) return (0, T.openOAuth2ModalWithCreateGuildModal)(r), !0;
                    return !1;
                case U.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, N.N)({ token: i.token }), V(i, (0, U.OE)(t)), !0;
                    return !1;
                case U.XK.SHOP:
                    null != i && ((0, v.pX)(G.BVt.COLLECTIBLES_SHOP, { search: i.search }), V(i, (0, U.OE)(t)));
                    break;
                case U.XK.FEATURES:
                    i?.path != null && ((0, v.pX)(i.path), V(i, (0, U.OE)(t)));
                    break;
                case U.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, a.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = h.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void R.default.track(G.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let a = await g.Ay.fetchApplication(e),
                                        l = a?.bot?.id;
                                    if (null == l)
                                        return void R.default.track(G.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let r = await c.A.openPrivateChannel({ recipientIds: l }),
                                        s = new URL(t),
                                        o = s.searchParams.get("referrer_id") ?? void 0,
                                        { customId: d } = await (0, m.d9)(
                                            e,
                                            s.searchParams.get("link_id"),
                                            s.searchParams.get("custom_id"),
                                        );
                                    await (0, _.A)({
                                        targetApplicationId: e,
                                        channelId: r,
                                        analyticsLocations: [p.A.DEEPLINK],
                                        customId: d,
                                        referrerId: o,
                                    }),
                                        R.default.track(G.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    R.default.track(G.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(i.applicationId, i.url, e),
                            V(i, (0, U.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case U.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), V(i, (0, U.OE)(t));
                    }
                    break;
                case U.XK.GORILLA:
                    null != i &&
                        I.s.getConfig({ location: "rpc_deeplink" }).enabled &&
                        ((0, f.A)({ source: "rpc_deeplink" }), V(i, (0, U.OE)(t)));
            }
        },
    },
    [G.e$_.BROWSER_HANDOFF]: {
        scope: U.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            M.Ay.focus(null, !0), (0, d.mZ)(t, n);
        },
    },
    [G.e$_.CONNECTIONS_CALLBACK]: {
        scope: U.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: a, state: l },
            } = e;
            if (!O.A.hasPendingAuthorizedState(l))
                throw new j.A(
                    { errorCode: G.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    O.A.deletePendingAuthorizedState(l),
                    await u.A.callback(t, { code: n, openid_params: i, iss: a, state: l })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new j.A({ errorCode: G.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (P._.dispatch(G.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [G.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: U.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i },
            } = e;
            return (0, o.re)({ paymentSourceType: G.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [G.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: U.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: a },
            } = e;
            return (0, o.re)({ paymentSourceType: a, state: t, path: n, query: i });
        },
    },
};
