n.d(t, { A: () => G }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var r = n(835245),
    a = n(80703),
    l = n(192308),
    s = n(73153),
    o = n(6981),
    d = n(308528),
    u = n(77468),
    c = n(869038),
    A = n(933958),
    h = n(956549),
    _ = n(257269),
    E = n(793574),
    p = n(627363),
    m = n(323082),
    g = n(507263),
    I = n(121623),
    C = n(200330),
    f = n(708281),
    T = n(890687),
    S = n(976860),
    N = n(718446),
    O = n(858897),
    L = n(962173),
    y = n(287809),
    v = n(954571),
    b = n(203982),
    D = n(998218),
    R = n(837921),
    P = n(636401),
    w = n(43203),
    M = n(613057),
    U = n(652215);
function x(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        v.default.track(U.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, a.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let G = {
    [U.e$_.INVITE_BROWSER]: {
        scope: M.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, w.$)(t, "Desktop Modal", n);
        },
    },
    [U.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: M.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == y.default.getCurrentUser()) return;
            let { guildTemplate: r } = await I.A.resolveGuildTemplate(t);
            if (null == r)
                throw new P.A({ errorCode: U.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                R.Ay.focus(),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("82486"), n.e("7726"), n.e("43264")]).then(
                        n.bind(n, 72715),
                    );
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: r });
                }),
                { guildTemplate: r, code: t }
            );
        },
    },
    [U.e$_.GIFT_CODE_BROWSER]: {
        scope: M.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, r) => {
                s.h.wait(() => {
                    c.A.resolveGiftCode(t, !0, !0)
                        .then((r) => {
                            let { giftCode: a } = r;
                            R.Ay.focus(),
                                v.default.track(U.HAw.OPEN_MODAL, { type: "gift_accept", location: U.$OG }),
                                (0, l.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([n.e("3630"), n.e("73646")]).then(
                                        n.bind(n, 67327),
                                    );
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: a });
                        })
                        .catch(() => r(new P.A({ errorCode: U.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
                });
            });
        },
    },
    [U.e$_.DEEP_LINK]: {
        scope: { [M.sm.ANY]: [M.LQ, M.hj] },
        handler(e) {
            let {
                args: { type: t, params: i },
            } = e;
            switch ((R.Ay.focus(), t)) {
                case M.XK.USER_SETTINGS:
                    null != i &&
                        (0, g.B)(() => {
                            let e = U.BVt.SETTINGS(i.section, i.subsection),
                                n = (0, N.parseSettingsUrl)({ path: e, search: i.search });
                            (0, N.trackParseSettingsUrl)(n, "deeplink"),
                                (0, O.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                x(i, (0, M.OE)(t));
                        });
                    break;
                case M.XK.CHANGELOG:
                    null != i &&
                        ((0, S.pX)(D.A.formatPathWithQuery(U.BVt.CHANGELOGS(i.date), i.query)), x(i, (0, M.OE)(t)));
                    break;
                case M.XK.LIBRARY:
                    (0, S.pX)(U.BVt.APPLICATION_LIBRARY), null != i && x(i, (0, M.OE)(t));
                    break;
                case M.XK.STORE_HOME:
                    (0, S.pX)(U.BVt.APPLICATION_STORE), null != i && x(i, (0, M.OE)(t));
                    break;
                case M.XK.STORE_LISTING:
                    null != i && ((0, S.pX)(U.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), x(i, (0, M.OE)(t)));
                    break;
                case M.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, S.pX)(U.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                        x(i, (0, M.OE)(t)));
                    break;
                case M.XK.CHANNEL:
                    null != i &&
                        ((0, S.pX)(U.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                        x(i, (0, M.OE)(t)));
                    break;
                case M.XK.GAME_SHOP:
                    null != i &&
                        ((0, S.pX)(U.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                        x(i, (0, M.OE)(t)));
                    break;
                case M.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(T.L1.SORT, i.sort),
                            null != i.filter && e.set(T.L1.FILTER, i.filter),
                            null != i.tab && e.set(T.L1.TAB, i.tab),
                            (0, S.pX)(U.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                            x(i, (0, M.OE)(t));
                    } else (0, S.pX)(U.BVt.QUEST_HOME);
                    break;
                case M.XK.QUEST_PREVIEW_TOOL:
                    if (null != i) {
                        let e = new URLSearchParams();
                        e.set(T.L1.TAB, T.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(T.L1.QUEST_ID, i.questId),
                            (0, S.pX)(U.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                            x(i, (0, M.OE)(t));
                    }
                    break;
                case M.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, S.pX)(U.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                        x(i, (0, M.OE)(t)));
                    break;
                case M.XK.OAUTH2:
                    let a = new URL(U.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    a.search = i.search;
                    let l = (0, C.getOAuth2AuthorizeProps)(a.toString());
                    if (null != l) return (0, C.openOAuth2ModalWithCreateGuildModal)(l), !0;
                    return !1;
                case M.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, f.N)({ token: i.token }), x(i, (0, M.OE)(t)), !0;
                    return !1;
                case M.XK.SHOP:
                    null != i && ((0, S.pX)(U.BVt.COLLECTIBLES_SHOP, { search: i.search }), x(i, (0, M.OE)(t)));
                    break;
                case M.XK.FEATURES:
                    i?.path != null && ((0, S.pX)(i.path), x(i, (0, M.OE)(t)));
                    break;
                case M.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, r.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = A.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void v.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let r = await p.Ay.fetchApplication(e),
                                        a = r?.bot?.id;
                                    if (null == a)
                                        return void v.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let l = await d.A.openPrivateChannel({ recipientIds: a }),
                                        s = new URL(t),
                                        o = s.searchParams.get("referrer_id") ?? void 0,
                                        { customId: u } = await (0, _.d9)(
                                            e,
                                            s.searchParams.get("link_id"),
                                            s.searchParams.get("custom_id"),
                                        );
                                    await (0, h.A)({
                                        targetApplicationId: e,
                                        channelId: l,
                                        analyticsLocations: [E.A.DEEPLINK],
                                        customId: u,
                                        referrerId: o,
                                    }),
                                        v.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    v.default.track(U.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(i.applicationId, i.url, e),
                            x(i, (0, M.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case M.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), x(i, (0, M.OE)(t));
                    }
            }
        },
    },
    [U.e$_.BROWSER_HANDOFF]: {
        scope: M.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            R.Ay.focus(null, !0), (0, o.mZ)(t, n);
        },
    },
    [U.e$_.CONNECTIONS_CALLBACK]: {
        scope: M.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: r, state: a },
            } = e;
            if (!L.A.hasPendingAuthorizedState(a))
                throw new P.A(
                    { errorCode: U.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    L.A.deletePendingAuthorizedState(a),
                    await u.A.callback(t, { code: n, openid_params: i, iss: r, state: a })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new P.A({ errorCode: U.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (b._.dispatch(U.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [U.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: M.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i },
            } = e;
            return (0, m.re)({ paymentSourceType: U.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [U.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: M.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: r },
            } = e;
            return (0, m.re)({ paymentSourceType: r, state: t, path: n, query: i });
        },
    },
};
