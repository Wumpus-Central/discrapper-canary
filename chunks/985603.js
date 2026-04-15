n.d(t, { A: () => U }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var l = n(835245),
    r = n(80703),
    a = n(397927),
    s = n(73153),
    o = n(6981),
    d = n(308528),
    c = n(77468),
    u = n(869038),
    A = n(933958),
    h = n(956549),
    _ = n(257269),
    m = n(793574),
    g = n(627363),
    p = n(323082),
    E = n(507263),
    I = n(121623),
    f = n(200330),
    C = n(708281),
    T = n(890687),
    S = n(976860),
    N = n(718446),
    x = n(858897),
    v = n(962173),
    b = n(287809),
    y = n(954571),
    O = n(203982),
    L = n(998218),
    R = n(837921),
    P = n(636401),
    D = n(43203),
    j = n(613057),
    M = n(652215);
function w(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        y.default.track(M.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, r.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let U = {
    [M.e$_.INVITE_BROWSER]: {
        scope: j.LQ,
        async handler(e) {
            let {
                args: { code: t, ...n },
            } = e;
            return await (0, D.$)(t, "Desktop Modal", n);
        },
    },
    [M.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: j.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == b.default.getCurrentUser()) return;
            let { guildTemplate: l } = await I.A.resolveGuildTemplate(t);
            if (null == l)
                throw new P.A({ errorCode: M.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
            return (
                R.Ay.focus(),
                (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("49040")]).then(n.bind(n, 72715));
                    return (t) => (0, i.jsx)(e, { ...t, guildTemplate: l });
                }),
                { guildTemplate: l, code: t }
            );
        },
    },
    [M.e$_.GIFT_CODE_BROWSER]: {
        scope: j.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, l) => {
                s.h.wait(() => {
                    u.A.resolveGiftCode(t, !0, !0)
                        .then((l) => {
                            let { giftCode: r } = l;
                            R.Ay.focus(),
                                y.default.track(M.HAw.OPEN_MODAL, { type: "gift_accept", location: M.$OG }),
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("36820").then(n.bind(n, 67327));
                                    return (n) => (0, i.jsx)(e, { code: t, ...n });
                                }),
                                e({ giftCode: r });
                        })
                        .catch(() => l(new P.A({ errorCode: M.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)));
                });
            });
        },
    },
    [M.e$_.DEEP_LINK]: {
        scope: { [j.sm.ANY]: [j.LQ, j.hj] },
        handler(e) {
            let {
                args: { type: t, params: i },
            } = e;
            switch ((R.Ay.focus(), t)) {
                case j.XK.USER_SETTINGS:
                    null != i &&
                        (0, E.B)(() => {
                            let e = M.BVt.SETTINGS(i.section, i.subsection),
                                n = (0, N.parseSettingsUrl)({ path: e, search: i.search });
                            (0, N.trackParseSettingsUrl)(n, "deeplink"),
                                (0, x.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                w(i, (0, j.OE)(t));
                        });
                    break;
                case j.XK.CHANGELOG:
                    null != i &&
                        ((0, S.pX)(L.A.formatPathWithQuery(M.BVt.CHANGELOGS(i.date), i.query)), w(i, (0, j.OE)(t)));
                    break;
                case j.XK.LIBRARY:
                    (0, S.pX)(M.BVt.APPLICATION_LIBRARY), null != i && w(i, (0, j.OE)(t));
                    break;
                case j.XK.STORE_HOME:
                    (0, S.pX)(M.BVt.APPLICATION_STORE), null != i && w(i, (0, j.OE)(t));
                    break;
                case j.XK.STORE_LISTING:
                    null != i && ((0, S.pX)(M.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), w(i, (0, j.OE)(t)));
                    break;
                case j.XK.PICK_GUILD_SETTINGS:
                    null != i &&
                        ((0, S.pX)(M.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                        w(i, (0, j.OE)(t)));
                    break;
                case j.XK.CHANNEL:
                    null != i &&
                        ((0, S.pX)(M.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                        w(i, (0, j.OE)(t)));
                    break;
                case j.XK.GAME_SHOP:
                    null != i &&
                        ((0, S.pX)(M.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                        w(i, (0, j.OE)(t)));
                    break;
                case j.XK.QUEST_HOME:
                    if (null != i) {
                        let e = new URLSearchParams();
                        null != i.sort && e.set(T.L1.SORT, i.sort),
                            null != i.filter && e.set(T.L1.FILTER, i.filter),
                            null != i.tab && e.set(T.L1.TAB, i.tab),
                            (0, S.pX)(M.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                            w(i, (0, j.OE)(t));
                    } else (0, S.pX)(M.BVt.QUEST_HOME);
                    break;
                case j.XK.QUEST_PREVIEW_TOOL:
                    if (null != i) {
                        let e = new URLSearchParams();
                        e.set(T.L1.TAB, T.NC.PREVIEW_TOOL),
                            null != i.questId && e.set(T.L1.QUEST_ID, i.questId),
                            (0, S.pX)(M.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                            w(i, (0, j.OE)(t));
                    }
                    break;
                case j.XK.DISCOVERY_GAME_RESULTS:
                    null != i &&
                        ((0, S.pX)(M.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                        w(i, (0, j.OE)(t)));
                    break;
                case j.XK.OAUTH2:
                    let r = new URL(M.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    r.search = i.search;
                    let a = (0, f.getOAuth2AuthorizeProps)(r.toString());
                    if (null != a) return (0, f.openOAuth2ModalWithCreateGuildModal)(a), !0;
                    return !1;
                case j.XK.ONE_TIME_LOGIN:
                    if (null != i) return (0, C.N)({ token: i.token }), w(i, (0, j.OE)(t)), !0;
                    return !1;
                case j.XK.SHOP:
                    null != i && ((0, S.pX)(M.BVt.COLLECTIBLES_SHOP, { search: i.search }), w(i, (0, j.OE)(t)));
                    break;
                case j.XK.FEATURES:
                    i?.path != null && ((0, S.pX)(i.path), w(i, (0, j.OE)(t)));
                    break;
                case j.XK.ACTIVITIES:
                    if (null != i) {
                        let e = i.attemptId || (0, l.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    let i = A.Ay.getCurrentEmbeddedActivity();
                                    if (i?.applicationId === e)
                                        return void y.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let l = await g.Ay.fetchApplication(e),
                                        r = l?.bot?.id;
                                    if (null == r)
                                        return void y.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let a = await d.A.openPrivateChannel({ recipientIds: r }),
                                        s = new URL(t),
                                        o = s.searchParams.get("referrer_id") ?? void 0,
                                        { customId: c } = await (0, _.d9)(
                                            e,
                                            s.searchParams.get("link_id"),
                                            s.searchParams.get("custom_id"),
                                        );
                                    await (0, h.A)({
                                        targetApplicationId: e,
                                        channelId: a,
                                        analyticsLocations: [m.A.DEEPLINK],
                                        customId: c,
                                        referrerId: o,
                                    }),
                                        y.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    y.default.track(M.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(i.applicationId, i.url, e),
                            w(i, (0, j.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case j.XK.PLAYGROUND:
                    if (null != i) {
                        let { openPlayground: e } = n(965042);
                        e(i.collection, i.story), w(i, (0, j.OE)(t));
                    }
            }
        },
    },
    [M.e$_.BROWSER_HANDOFF]: {
        scope: j.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            R.Ay.focus(null, !0), (0, o.mZ)(t, n);
        },
    },
    [M.e$_.CONNECTIONS_CALLBACK]: {
        scope: j.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: i, iss: l, state: r },
            } = e;
            if (!v.A.hasPendingAuthorizedState(r))
                throw new P.A(
                    { errorCode: M.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    v.A.deletePendingAuthorizedState(r),
                    await c.A.callback(t, { code: n, openid_params: i, iss: l, state: r })
                );
            } catch (e) {
                if (e?.status === 400)
                    throw new P.A({ errorCode: M.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (O._.dispatch(M.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [M.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: j.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i },
            } = e;
            return (0, p.re)({ paymentSourceType: M.hes.PAYPAL, state: t, path: n, query: i });
        },
    },
    [M.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: j.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: i, payment_source_type: l },
            } = e;
            return (0, p.re)({ paymentSourceType: l, state: t, path: n, query: i });
        },
    },
};
