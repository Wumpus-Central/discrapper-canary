n.d(t, { A: () => w }), n(323874), n(14289), n(35956);
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
    S = n(962173),
    x = n(287809),
    v = n(954571),
    y = n(203982),
    b = n(998218),
    O = n(837921),
    L = n(636401),
    R = n(43203),
    P = n(613057),
    j = n(652215),
    D = n(654487);
function M(e, t) {
    null != e &&
        v.default.track(j.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.d)(e),
            link_type: t,
        });
}
let w = {
    [j.e$_.INVITE_BROWSER]: {
        scope: P.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, R.$)(t, "Desktop Modal", n);
        },
    },
    [j.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: P.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == x.default.getCurrentUser()) return;
            let { guildTemplate: r } = await E.A.resolveGuildTemplate(t);
            if (null == r)
                throw new L.A({ errorCode: j.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                O.Ay.focus(),
                (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("58938")]).then(n.bind(n, 72715));
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: r });
                }),
                { guildTemplate: r, code: t }
            );
        },
    },
    [j.e$_.GIFT_CODE_BROWSER]: {
        scope: P.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, r) => {
                s.h.wait(() => {
                    A.A.resolveGiftCode(t, !0, !0)
                        .then((r) => {
                            let { giftCode: l } = r;
                            O.Ay.focus(),
                                v.default.track(j.HAw.OPEN_MODAL, { type: "gift_accept", location: j.$OG }),
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("36820").then(n.bind(n, 67327));
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() => r(new L.A({ errorCode: j.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
                });
            });
        },
    },
    [j.e$_.DEEP_LINK]: {
        scope: { [P.sm.ANY]: [P.LQ, P.hj] },
        handler(e) {
            let {
                args: { type: t, params: i },
            } = e;
            switch ((O.Ay.focus(), t)) {
                case P.XK.USER_SETTINGS:
                    null != i &&
                        ((0, N.bG)({ pathname: j.BVt.SETTINGS(i.section, i.subsection), search: i.search }),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.CHANGELOG:
                    null != i &&
                        ((0, N.bG)(b.A.formatPathWithQuery(j.BVt.CHANGELOGS(i.date), i.query)),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.LIBRARY:
                    (0, N.bG)(j.BVt.APPLICATION_LIBRARY), null != i && M(i.fingerprint, (0, P.OE)(t));
                    break;
                case P.XK.STORE_HOME:
                    (0, N.bG)(j.BVt.APPLICATION_STORE), null != i && M(i.fingerprint, (0, P.OE)(t));
                    break;
                case P.XK.STORE_LISTING:
                    null != i &&
                        ((0, N.bG)(j.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, N.bG)({ pathname: j.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), search: i.search }),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.CHANNEL:
                    null != i &&
                        ((0, N.bG)({ pathname: j.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), search: i.search }),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.GAME_SHOP:
                    null != i &&
                        ((0, N.bG)({ pathname: j.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug) }),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(T.L1.SORT, i.sort),
                            null != i.filter && e.set(T.L1.FILTER, i.filter),
                            null != i.tab && e.set(T.L1.TAB, i.tab),
                            (0, N.bG)({ pathname: j.BVt.QUEST_HOME_V2, hash: i.questId, search: `?${e.toString()}` }),
                            M(i.fingerprint, (0, P.OE)(t));
                    } else (0, N.bG)(j.BVt.QUEST_HOME_V2);
                    break;
                case P.XK.QUEST_PREVIEW_TOOL:
                    if ((0, C.U)({ location: D.rE.QUEST_PREVIEW_TOOL_2 }) && null != i) {
                        let e = new URLSearchParams();
                        e.set(T.L1.TAB, T.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(T.L1.QUEST_ID, i.questId),
                            (0, N.bG)({ pathname: j.BVt.QUEST_HOME_V2, search: `?${e.toString()}` }),
                            M(i.fingerprint, (0, P.OE)(t));
                    }
                    break;
                case P.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, N.bG)({ pathname: j.BVt.GLOBAL_DISCOVERY_SERVERS, search: `?game=${i.gameId}` }),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.OAUTH2:
                    let l = new URL(j.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    l.search = i.search;
                    let a = (0, I.getOAuth2AuthorizeProps)(l.toString());
                    if (null != a) return (0, I.openOAuth2ModalWithCreateGuildModal)(a), !0;
                    return !1;
                case P.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, f.N)({ token: i.token }), M(i.fingerprint, (0, P.OE)(t)), !0;
                    return !1;
                case P.XK.SHOP:
                    null != i &&
                        ((0, N.bG)({ pathname: j.BVt.COLLECTIBLES_SHOP, search: i.search }),
                        M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.FEATURES:
                    i?.path != null && ((0, N.bG)({ pathname: i.path }), M(i.fingerprint, (0, P.OE)(t)));
                    break;
                case P.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, r.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = h.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void v.default.track(j.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let r = await g.Ay.fetchApplication(e),
                                        l = r?.bot?.id;
                                    if (null == l)
                                        return void v.default.track(j.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
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
                                        v.default.track(j.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    v.default.track(j.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(i.applicationId, i.url, e),
                            M(i.fingerprint, (0, P.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case P.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), M(i.fingerprint, (0, P.OE)(t));
                    }
            }
        },
    },
    [j.e$_.BROWSER_HANDOFF]: {
        scope: P.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            O.Ay.focus(null, !0), (0, d.mZ)(t, n);
        },
    },
    [j.e$_.CONNECTIONS_CALLBACK]: {
        scope: P.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: r, state: l },
            } = e;
            if (!S.A.hasPendingAuthorizedState(l))
                throw new L.A(
                    { errorCode: j.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    S.A.deletePendingAuthorizedState(l),
                    await u.A.callback(t, { code: n, openid_params: i, iss: r, state: l })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new L.A({ errorCode: j.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (y._.dispatch(j.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [j.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: P.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i },
            } = e;
            return (0, o.re)({ paymentSourceType: j.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [j.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: P.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: r },
            } = e;
            return (0, o.re)({ paymentSourceType: r, state: t, path: n, query: i });
        },
    },
};
