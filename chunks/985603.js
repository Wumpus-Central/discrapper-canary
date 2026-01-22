n.d(t, { A: () => k }), n(747238), n(896048), n(680155), n(323874), n(14289), n(35956), n(638769), n(693327), n(554719);
var r = n(627968);
n(64700);
var i = n(835245),
    l = n(80703),
    a = n(397927),
    s = n(73153),
    o = n(384904),
    c = n(6981),
    u = n(308528),
    d = n(77468),
    p = n(869038),
    f = n(933958),
    h = n(956549),
    A = n(257269),
    g = n(793574),
    m = n(627363),
    b = n(121623),
    _ = n(200330),
    E = n(708281),
    O = n(807876),
    y = n(890687),
    I = n(976860),
    v = n(962173),
    S = n(287809),
    C = n(954571),
    N = n(203982),
    T = n(998218),
    j = n(837921),
    x = n(636401),
    P = n(43203),
    w = n(613057),
    L = n(652215),
    R = n(654487);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function M(e, t) {
    null != e &&
        C.default.track(L.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, l.d)(e),
            link_type: t,
        });
}
let k = {
    [L.e$_.INVITE_BROWSER]: {
        scope: w.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            return await (0, P.$)(t, "Desktop Modal");
        },
    },
    [L.e$_.GUILD_TEMPLATE_BROWSER]: {
        scope: w.LQ,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            if (null == S.default.getCurrentUser()) return;
            let { guildTemplate: i } = await b.A.resolveGuildTemplate(t);
            if (null == i)
                throw new x.A({ errorCode: L.Lw6.INVALID_GUILD_TEMPLATE }, "Invalid guild template id: ".concat(t));
            return (
                j.Ay.focus(),
                (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = D({}, t)),
                            (l = l = { guildTemplate: i }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n),
                        );
                    };
                }),
                {
                    guildTemplate: i,
                    code: t,
                }
            );
        },
    },
    [L.e$_.GIFT_CODE_BROWSER]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { code: t },
            } = e;
            return new Promise((e, i) => {
                s.h.wait(() => {
                    p.A.resolveGiftCode(t, !0, !0)
                        .then((i) => {
                            let { giftCode: l } = i;
                            j.Ay.focus(),
                                C.default.track(L.HAw.OPEN_MODAL, {
                                    type: "gift_accept",
                                    location: L.$OG,
                                }),
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("14439").then(n.bind(n, 67327));
                                    return (n) => (0, r.jsx)(e, D({ code: t }, n));
                                }),
                                e({ giftCode: l });
                        })
                        .catch(() =>
                            i(new x.A({ errorCode: L.Lw6.INVALID_GIFT_CODE }, "Invalid gift code: ".concat(t))),
                        );
                });
            });
        },
    },
    [L.e$_.DEEP_LINK]: {
        scope: {
            [w.sm.ANY]: [w.LQ, w.hj],
        },
        handler(e) {
            let {
                args: { type: t, params: r },
            } = e;
            switch ((j.Ay.focus(), t)) {
                case w.XK.USER_SETTINGS:
                    null != r &&
                        ((0, I.bG)({
                            pathname: L.BVt.SETTINGS(r.section, r.subsection),
                            search: r.search,
                        }),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.CHANGELOG:
                    null != r &&
                        ((0, I.bG)(T.A.formatPathWithQuery(L.BVt.CHANGELOGS(r.date), r.query)),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.LIBRARY:
                    (0, I.bG)(L.BVt.APPLICATION_LIBRARY), null != r && M(r.fingerprint, (0, w.OE)(t));
                    break;
                case w.XK.STORE_HOME:
                    (0, I.bG)(L.BVt.APPLICATION_STORE), null != r && M(r.fingerprint, (0, w.OE)(t));
                    break;
                case w.XK.STORE_LISTING:
                    null != r &&
                        ((0, I.bG)(L.BVt.APPLICATION_STORE_LISTING_SKU(r.skuId, r.slug)),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.PICK_GUILD_SETTINGS:
                    null != r &&
                        ((0, I.bG)({
                            pathname: L.BVt.PICK_GUILD_SETTINGS(r.section, r.subsection),
                            search: r.search,
                        }),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.CHANNEL:
                    null != r &&
                        ((0, I.bG)({
                            pathname: L.BVt.CHANNEL(r.guildId, r.channelId, r.messageId),
                            search: r.search,
                        }),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.GAME_SHOP:
                    null != r &&
                        ((0, I.bG)({ pathname: L.BVt.CHANNELS_GAME_SHOP(r.guildId, r.pageIndex, r.skuId, r.slug) }),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.QUEST_HOME:
                    if (null != r) {
                        let e = new URLSearchParams();
                        null != r.sort && e.set(y.L1.SORT, r.sort),
                            null != r.filter && e.set(y.L1.FILTER, r.filter),
                            null != r.tab && e.set(y.L1.TAB, r.tab),
                            (0, I.bG)({
                                pathname: L.BVt.QUEST_HOME_V2,
                                hash: r.questId,
                                search: "?".concat(e.toString()),
                            }),
                            M(r.fingerprint, (0, w.OE)(t));
                    } else (0, I.bG)(L.BVt.QUEST_HOME_V2);
                    break;
                case w.XK.QUEST_PREVIEW_TOOL:
                    if ((0, O.U)({ location: R.rE.QUEST_PREVIEW_TOOL_2 }) && null != r) {
                        let e = new URLSearchParams();
                        e.set(y.L1.TAB, y.NC.PREVIEW_TOOL),
                            null != r.questId && e.set(y.L1.QUEST_ID, r.questId),
                            (0, I.bG)({
                                pathname: L.BVt.QUEST_HOME_V2,
                                search: "?".concat(e.toString()),
                            }),
                            M(r.fingerprint, (0, w.OE)(t));
                    }
                    break;
                case w.XK.DISCOVERY_GAME_RESULTS:
                    null != r &&
                        ((0, I.bG)({
                            pathname: L.BVt.GLOBAL_DISCOVERY_SERVERS,
                            search: "?game=".concat(r.gameId),
                        }),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.OAUTH2:
                    let l = new URL(L.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                    l.search = r.search;
                    let a = (0, _.getOAuth2AuthorizeProps)(l.toString());
                    if (null != a) return (0, _.openOAuth2ModalWithCreateGuildModal)(a), !0;
                    return !1;
                case w.XK.ONE_TIME_LOGIN:
                    if (null != r) return (0, E.N)({ token: r.token }), M(r.fingerprint, (0, w.OE)(t)), !0;
                    return !1;
                case w.XK.SHOP:
                    null != r &&
                        ((0, I.bG)({
                            pathname: L.BVt.COLLECTIBLES_SHOP,
                            search: r.search,
                        }),
                        M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.FEATURES:
                    (null == r ? void 0 : r.path) != null &&
                        ((0, I.bG)({ pathname: r.path }), M(r.fingerprint, (0, w.OE)(t)));
                    break;
                case w.XK.ACTIVITIES:
                    if (null != r) {
                        let e = r.attemptId || (0, i.A)();
                        return (
                            (async function (e, t, n) {
                                try {
                                    var r, i;
                                    let l = f.Ay.getCurrentEmbeddedActivity();
                                    if ((null == l ? void 0 : l.applicationId) === e)
                                        return void C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "activity_already_running",
                                            attempt_id: n,
                                        });
                                    let a = await m.Ay.fetchApplication(e),
                                        s = null == a || null == (i = a.bot) ? void 0 : i.id;
                                    if (null == s)
                                        return void C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "no_bot_user",
                                            attempt_id: n,
                                        });
                                    let o = await u.A.openPrivateChannel({ recipientIds: s }),
                                        c = new URL(t),
                                        d = null != (r = c.searchParams.get("referrer_id")) ? r : void 0,
                                        { customId: p } = await (0, A.d9)(
                                            e,
                                            c.searchParams.get("link_id"),
                                            c.searchParams.get("custom_id"),
                                        );
                                    await (0, h.A)({
                                        targetApplicationId: e,
                                        channelId: o,
                                        analyticsLocations: [g.A.DEEPLINK],
                                        customId: p,
                                        referrerId: d,
                                    }),
                                        C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !0,
                                            failure_reason: null,
                                            attempt_id: n,
                                        });
                                } catch (t) {
                                    C.default.track(L.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                        application_id: e,
                                        success: !1,
                                        failure_reason: "launch_failed",
                                        attempt_id: n,
                                    });
                                }
                            })(r.applicationId, r.url, e),
                            M(r.fingerprint, (0, w.OE)(t)),
                            !0
                        );
                    }
                    return !1;
                case w.XK.PLAYGROUND:
                    if (null != r) {
                        let { openPlayground: e } = n(965042);
                        e(r.collection, r.story), M(r.fingerprint, (0, w.OE)(t));
                    }
            }
        },
    },
    [L.e$_.BROWSER_HANDOFF]: {
        scope: w.kw,
        handler(e) {
            let {
                args: { handoffToken: t, fingerprint: n },
            } = e;
            j.Ay.focus(null, !0), (0, c.mZ)(t, n);
        },
    },
    [L.e$_.CONNECTIONS_CALLBACK]: {
        scope: w.LQ,
        handler: async (e) => {
            let {
                args: { providerType: t, code: n, openid_params: r, iss: i, state: l },
            } = e;
            if (!v.A.hasPendingAuthorizedState(l))
                throw new x.A(
                    { errorCode: L.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                    "Provider authorization did not originate from this discord client",
                );
            try {
                return (
                    v.A.deletePendingAuthorizedState(l),
                    await d.A.callback(t, {
                        code: n,
                        openid_params: r,
                        iss: i,
                        state: l,
                    })
                );
            } catch (e) {
                if ((null == e ? void 0 : e.status) === 400)
                    throw new x.A({ errorCode: L.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                throw (N._.dispatch(L.jej.CONNECTIONS_CALLBACK_ERROR), e);
            }
        },
    },
    [L.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: r },
            } = e;
            return (0, o.re)({
                paymentSourceType: L.hes.PAYPAL,
                state: t,
                path: n,
                query: r,
            });
        },
    },
    [L.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
        scope: w.LQ,
        handler(e) {
            let {
                args: { state: t, path: n, query: r, payment_source_type: i },
            } = e;
            return (0, o.re)({
                paymentSourceType: i,
                state: t,
                path: n,
                query: r,
            });
        },
    },
};
