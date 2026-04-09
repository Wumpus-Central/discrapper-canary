n.d(t, { A: () => k }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var a = n(835245),
    r = n(80703),
    l = n(397927),
    s = n(73153),
    o = n(6981),
    d = n(308528),
    c = n(77468),
    u = n(869038),
    A = n(933958),
    _ = n(956549),
    h = n(257269),
    m = n(793574),
    g = n(627363),
    p = n(323082),
    E = n(507263),
    I = n(352306),
    f = n(829203),
    C = n(121623),
    T = n(200330),
    N = n(708281),
    S = n(890687),
    x = n(976860),
    v = n(718446),
    b = n(858897),
    y = n(962173),
    O = n(287809),
    L = n(954571),
    R = n(203982),
    P = n(998218),
    D = n(837921),
    j = n(636401),
    M = n(43203),
    w = n(613057),
    U = n(652215);
function G(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        L.default.track(U.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, r.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let k = {
    [U.e$_.INVITE_BROWSER]: {
        scope: w.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, M.$)(t, "Desktop Modal", n);
        },
    },
    [U.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: w.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == O.default.getCurrentUser()) return;
            let { guildTemplate: a } = await C.A.resolveGuildTemplate(t);
            if (null == a)
                throw new j.A({ errorCode: U.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                D.Ay.focus(),
                (0, l.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("30106")]).then(n.bind(n, 72715));
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: a });
                }),
                { guildTemplate: a, code: t }
            );
        },
    },
    [U.e$_.GIFT_CODE_BROWSER]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, a) => {
                s.h.wait(() => {
                    u.A.resolveGiftCode(t, !0, !0)
                        .then((a) => {
                            let { giftCode: r } = a;
                            D.Ay.focus(),
                                L.default.track(U.HAw.OPEN_MODAL, { type: "gift_accept", location: U.$OG }),
                                (0, l.mMO)(async () => {
                                    let { default: e } = await n.e("36820").then(n.bind(n, 67327));
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: r });
                        })
                        .catch(() => a(new j.A({ errorCode: U.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
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
                    null != i &&
                        (0, E.B)(() => {
                            let e = U.BVt.SETTINGS(i.section, i.subsection),
                                n = (0, v.parseSettingsUrl)({ path: e, search: i.search });
                            (0, v.trackParseSettingsUrl)(n, "deeplink"),
                                (0, b.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                G(i, (0, w.OE)(t));
                        });
                    break;
                case w.XK.CHANGELOG:
                    null != i &&
                        ((0, x.pX)(P.A.formatPathWithQuery(U.BVt.CHANGELOGS(i.date), i.query)), G(i, (0, w.OE)(t)));
                    break;
                case w.XK.LIBRARY:
                    (0, x.pX)(U.BVt.APPLICATION_LIBRARY), null != i && G(i, (0, w.OE)(t));
                    break;
                case w.XK.STORE_HOME:
                    (0, x.pX)(U.BVt.APPLICATION_STORE), null != i && G(i, (0, w.OE)(t));
                    break;
                case w.XK.STORE_LISTING:
                    null != i && ((0, x.pX)(U.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), G(i, (0, w.OE)(t)));
                    break;
                case w.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, x.pX)(U.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                        G(i, (0, w.OE)(t)));
                    break;
                case w.XK.CHANNEL:
                    null != i &&
                        ((0, x.pX)(U.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                        G(i, (0, w.OE)(t)));
                    break;
                case w.XK.GAME_SHOP:
                    null != i &&
                        ((0, x.pX)(U.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                        G(i, (0, w.OE)(t)));
                    break;
                case w.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(S.L1.SORT, i.sort),
                            null != i.filter && e.set(S.L1.FILTER, i.filter),
                            null != i.tab && e.set(S.L1.TAB, i.tab),
                            (0, x.pX)(U.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                            G(i, (0, w.OE)(t));
                    } else (0, x.pX)(U.BVt.QUEST_HOME);
                    break;
                case w.XK.QUEST_PREVIEW_TOOL:
                    if (null != i) {
                        let e = new URLSearchParams();
                        e.set(S.L1.TAB, S.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(S.L1.QUEST_ID, i.questId),
                            (0, x.pX)(U.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                            G(i, (0, w.OE)(t));
                    }
                    break;
                case w.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, x.pX)(U.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                        G(i, (0, w.OE)(t)));
                    break;
                case w.XK.OAUTH2:
                    let r = new URL(U.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = i.search;
                    let l = (0, T.getOAuth2AuthorizeProps)(r.toString());
                    if (null != l) return (0, T.openOAuth2ModalWithCreateGuildModal)(l), !0;
                    return !1;
                case w.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, N.N)({ token: i.token }), G(i, (0, w.OE)(t)), !0;
                    return !1;
                case w.XK.SHOP:
                    null != i && ((0, x.pX)(U.BVt.COLLECTIBLES_SHOP, { search: i.search }), G(i, (0, w.OE)(t)));
                    break;
                case w.XK.FEATURES:
                    i?.path != null && ((0, x.pX)(i.path), G(i, (0, w.OE)(t)));
                    break;
                case w.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, a.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = A.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void L.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let a = await g.Ay.fetchApplication(e),
                                        r = a?.bot?.id;
                                    if (null == r)
                                        return void L.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let l = await d.A.openPrivateChannel({ recipientIds: r }),
                                        s = new URL(t),
                                        o = s.searchParams.get("referrer_id") ?? void 0,
                                        { customId: c } = await (0, h.d9)(
                                            e,
                                            s.searchParams.get("link_id"),
                                            s.searchParams.get("custom_id"),
                                        );
                                    await (0, _.A)({
                                        targetApplicationId: e,
                                        channelId: l,
                                        analyticsLocations: [m.A.DEEPLINK],
                                        customId: c,
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
                            G(i, (0, w.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case w.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), G(i, (0, w.OE)(t));
                    }
                    break;
                case w.XK.GORILLA:
                    null != i &&
                        I.s.getConfig({ location: "rpc_deeplink" }).enabled &&
                        ((0, f.A)({ source: "rpc_deeplink" }), G(i, (0, w.OE)(t)));
            }
        },
    },
    [U.e$_.BROWSER_HANDOFF]: {
        scope: w.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            D.Ay.focus(null, !0), (0, o.mZ)(t, n);
        },
    },
    [U.e$_.CONNECTIONS_CALLBACK]: {
        scope: w.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: a, state: r },
            } = e;
            if (!y.A.hasPendingAuthorizedState(r))
                throw new j.A(
                    { errorCode: U.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    y.A.deletePendingAuthorizedState(r),
                    await c.A.callback(t, { code: n, openid_params: i, iss: a, state: r })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new j.A({ errorCode: U.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
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
            return (0, p.re)({ paymentSourceType: U.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [U.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: a },
            } = e;
            return (0, p.re)({ paymentSourceType: a, state: t, path: n, query: i });
        },
    },
};
