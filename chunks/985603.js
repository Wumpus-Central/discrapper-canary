n.d(t, { A: () => V }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var l = n(835245),
    a = n(80703),
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
    E = n(352306),
    I = n(829203),
    f = n(121623),
    C = n(200330),
    T = n(708281),
    N = n(807876),
    S = n(890687),
    x = n(976860),
    v = n(849823),
    b = n(840065),
    y = n(962173),
    O = n(287809),
    L = n(954571),
    R = n(203982),
    P = n(998218),
    D = n(837921),
    M = n(636401),
    j = n(43203),
    w = n(613057),
    U = n(652215),
    G = n(654487);
function k(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        L.default.track(U.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, a.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let V = {
    [U.e$_.INVITE_BROWSER]: {
        scope: w.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, j.$)(t, "Desktop Modal", n);
        },
    },
    [U.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: w.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == O.default.getCurrentUser()) return;
            let { guildTemplate: l } = await f.A.resolveGuildTemplate(t);
            if (null == l)
                throw new M.A({ errorCode: U.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                D.Ay.focus(),
                (0, r.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("49040")]).then(n.bind(n, 72715));
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: l });
                }),
                { guildTemplate: l, code: t }
            );
        },
    },
    [U.e$_.GIFT_CODE_BROWSER]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, l) => {
                s.h.wait(() => {
                    A.A.resolveGiftCode(t, !0, !0)
                        .then((l) => {
                            let { giftCode: a } = l;
                            D.Ay.focus(),
                                L.default.track(U.HAw.OPEN_MODAL, { type: "gift_accept", location: U.$OG }),
                                (0, r.mMO)(async () => {
                                    let { default: e } = await n.e("14439").then(n.bind(n, 67327));
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: a });
                        })
                        .catch(() => l(new M.A({ errorCode: U.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
                });
            });
        },
    },
    [U.e$_.DEEP_LINK]: {
        scope: { [w.sm.ANY]: [w.LQ, w.hj] },
        handler(e) {
            let {
                args: { type: t, params: i },
            } = e;
            switch ((D.Ay.focus(), t)) {
                case w.XK.USER_SETTINGS:
                    if (null != i) {
                        let e = U.BVt.SETTINGS(i.section, i.subsection),
                            n = (0, v.default)({ path: e, search: i.search });
                        (0, v.trackParseSettingsUrl)(n, "deeplink"),
                            (0, b.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                            k(i, (0, w.OE)(t));
                    }
                    break;
                case w.XK.CHANGELOG:
                    null != i &&
                        ((0, x.pX)(P.A.formatPathWithQuery(U.BVt.CHANGELOGS(i.date), i.query)), k(i, (0, w.OE)(t)));
                    break;
                case w.XK.LIBRARY:
                    (0, x.pX)(U.BVt.APPLICATION_LIBRARY), null != i && k(i, (0, w.OE)(t));
                    break;
                case w.XK.STORE_HOME:
                    (0, x.pX)(U.BVt.APPLICATION_STORE), null != i && k(i, (0, w.OE)(t));
                    break;
                case w.XK.STORE_LISTING:
                    null != i && ((0, x.pX)(U.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), k(i, (0, w.OE)(t)));
                    break;
                case w.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, x.pX)(U.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                        k(i, (0, w.OE)(t)));
                    break;
                case w.XK.CHANNEL:
                    null != i &&
                        ((0, x.pX)(U.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                        k(i, (0, w.OE)(t)));
                    break;
                case w.XK.GAME_SHOP:
                    null != i &&
                        ((0, x.pX)(U.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                        k(i, (0, w.OE)(t)));
                    break;
                case w.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(S.L1.SORT, i.sort),
                            null != i.filter && e.set(S.L1.FILTER, i.filter),
                            null != i.tab && e.set(S.L1.TAB, i.tab),
                            (0, x.pX)(U.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                            k(i, (0, w.OE)(t));
                    } else (0, x.pX)(U.BVt.QUEST_HOME);
                    break;
                case w.XK.QUEST_PREVIEW_TOOL:
                    if ((0, N.U)({ location: G.rE.QUEST_PREVIEW_TOOL_2 }) && null != i) {
                        let e = new URLSearchParams();
                        e.set(S.L1.TAB, S.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(S.L1.QUEST_ID, i.questId),
                            (0, x.pX)(U.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                            k(i, (0, w.OE)(t));
                    }
                    break;
                case w.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, x.pX)(U.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                        k(i, (0, w.OE)(t)));
                    break;
                case w.XK.OAUTH2:
                    let a = new URL(U.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    a.search = i.search;
                    let r = (0, C.getOAuth2AuthorizeProps)(a.toString());
                    if (null != r) return (0, C.openOAuth2ModalWithCreateGuildModal)(r), !0;
                    return !1;
                case w.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, T.N)({ token: i.token }), k(i, (0, w.OE)(t)), !0;
                    return !1;
                case w.XK.SHOP:
                    null != i && ((0, x.pX)(U.BVt.COLLECTIBLES_SHOP, { search: i.search }), k(i, (0, w.OE)(t)));
                    break;
                case w.XK.FEATURES:
                    i?.path != null && ((0, x.pX)(i.path), k(i, (0, w.OE)(t)));
                    break;
                case w.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, l.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = h.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void L.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let l = await g.Ay.fetchApplication(e),
                                        a = l?.bot?.id;
                                    if (null == a)
                                        return void L.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let r = await c.A.openPrivateChannel({ recipientIds: a }),
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
                                        L.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    L.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(i.applicationId, i.url, e),
                            k(i, (0, w.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case w.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), k(i, (0, w.OE)(t));
                    }
                    break;
                case w.XK.GORILLA:
                    null != i &&
                        E.s.getConfig({ location: "rpc_deeplink" }).enabled &&
                        ((0, I.A)({ source: "rpc_deeplink" }), k(i, (0, w.OE)(t)));
            }
        },
    },
    [U.e$_.BROWSER_HANDOFF]: {
        scope: w.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            D.Ay.focus(null, !0), (0, d.mZ)(t, n);
        },
    },
    [U.e$_.CONNECTIONS_CALLBACK]: {
        scope: w.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: l, state: a },
            } = e;
            if (!y.A.hasPendingAuthorizedState(a))
                throw new M.A(
                    { errorCode: U.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    y.A.deletePendingAuthorizedState(a),
                    await u.A.callback(t, { code: n, openid_params: i, iss: l, state: a })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new M.A({ errorCode: U.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (R._.dispatch(U.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [U.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i },
            } = e;
            return (0, o.re)({ paymentSourceType: U.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [U.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: l },
            } = e;
            return (0, o.re)({ paymentSourceType: l, state: t, path: n, query: i });
        },
    },
};
