(n.d(t, {
    Gj: () => G,
    Pt: () => V,
    VO: () => H,
    ji: () => Y,
    q8: () => W
}),
    n(836215),
    n(472816),
    n(794429),
    n(388685),
    n(467055),
    n(539854));
var i = n(73800),
    r = n(442837),
    s = n(704215),
    a = n(493544),
    l = n(211242),
    o = n(924557),
    c = n(706140),
    d = n(704454),
    u = n(470734),
    m = n(319828),
    p = n(592204),
    g = n(610697),
    h = n(880257),
    f = n(631885),
    b = n(160913),
    x = n(725727),
    _ = n(977156),
    j = n(921157),
    C = n(667172),
    O = n(237292),
    E = n(314897),
    v = n(906467),
    S = n(283595),
    T = n(131951),
    N = n(699516),
    I = n(663389),
    y = n(594174),
    A = n(202527),
    P = n(413182),
    R = n(695346),
    D = n(620163),
    Z = n(406613),
    w = n(168308),
    k = n(839469),
    L = n(726985),
    B = n(46140),
    M = n(388032);
function U(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = v.Z.isDeveloper,
        r = [
            {
                header: M.intl.string(M.t.cduTBA),
                settings: n ? [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.THIRD_PARTY_ACCESS, L.s6.SESSIONS, L.s6.CLIPS] : [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.AUTHORIZED_APPS, L.s6.SESSIONS, L.s6.CONNECTIONS, L.s6.CLIPS]
            },
            {
                header: M.intl.string(M.t['4uOdGh']),
                divider: !0,
                settings: [L.s6.PREMIUM, L.s6.GUILD_BOOSTING, L.s6.SUBSCRIPTIONS, L.s6.GIFT_INVENTORY, L.s6.BILLING]
            },
            {
                header: M.intl.string(M.t.f2n1TE),
                divider: !0,
                settings: [L.s6.APPEARANCE, L.s6.ACCESSIBILITY, L.s6.VOICE_AND_VIDEO, L.s6.CLICKER_GAME, L.s6.POGGERMODE, L.s6.CHAT, L.s6.NOTIFICATIONS, L.s6.KEYBINDS, L.s6.LANGUAGE, L.s6.WINDOW_SETTINGS, L.s6.LINUX_SETTINGS, L.s6.STREAMER_MODE, L.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [L.s6.CHANGELOG, L.s6.MERCHANDISE, L.s6.HYPESQUAD, L.s6.TOWNHALL]
            },
            {
                header: 'Developer Only',
                divider: !0,
                settings: i ? [L.s6.EXPERIMENTS, L.s6.DEVELOPER_OPTIONS, L.s6.HOTSPOT_OPTIONS, L.s6.DISMISSIBLE_CONTENT_OPTIONS, L.s6.PAYMENT_FLOW_MODALS, L.s6.REVENUE_STORYBOOK, L.s6.VIRTUAL_CURRENCY_CONFIGURATION, L.s6.DESIGN_SYSTEMS, L.s6.INTL_TESTING, L.s6.SHOP_KEEPER, L.s6.WEB_SETTING_TREE_TOOL, L.s6.QUEST_PREVIEW_TOOL, L.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
            },
            {
                divider: !0,
                settings: [L.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [L.s6.SOCIAL_LINKS, L.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: M.intl.string(M.t.SmHCFR),
            divider: !0,
            settings: [L.s6.ACTIVITY_PRIVACY, L.s6.REGISTERED_GAMES, L.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function V() {
    var e, t, n, a;
    let v = (0, x.YO)().length,
        P = (0, b.U)(),
        k = (0, r.e7)([I.Z], () => I.Z.getProps().impressionSource),
        L = (0, f.gU)(),
        M = (0, w.bC)(),
        U = (0, o.Go)(),
        [V] = (0, c.cv)(U ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: G } = A.b.useExperiment({ location: 'settings' }),
        F = (0, p.Xo)({ location: 'settings' }),
        H = null != (n = null == (e = y.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        W = (0, O.y0)({ location: 'settings' }),
        z = (0, C.v4)({ location: 'settings' }),
        Y = (0, l.Q)(),
        K = (0, _.Zy)({ location: B.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        q = (0, r.e7)([S.Z], () => S.Z.hasLibraryApplication()),
        X = (0, r.e7)([E.default], () => E.default.hasTOTPEnabled()),
        J = R.Sb.useSetting(),
        Q = (0, g.Z)(),
        { hypeSquadRemoved: $ } = m.Z.useExperiment({ location: 'settings' }),
        ee = null == (a = (0, h.Z)()) || a,
        et = (null == (t = (0, j.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: en, hasIgnoredUsers: ei } = (0, r.cj)([N.Z], () => ({
            hasBlockedUsers: N.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: N.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: er } = (0, Z.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        es = (0, d.UQ)('SettingRendererUtils'),
        {
            inputMode: ea,
            activeInputProfile: el,
            isInputProfileCustom: eo
        } = (0, r.cj)([T.Z], () => ({
            activeInputProfile: T.Z.getActiveInputProfile(),
            inputMode: T.Z.getMode(),
            isInputProfileCustom: T.Z.isInputProfileCustom()
        })),
        ec = (0, u.pn)('useGenerateUserSettingsSections');
    return i.useMemo(
        () =>
            (0, D.i)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: P,
                impressionSource: k,
                numOfPendingFamilyRequests: L,
                isOverlaySupported: M,
                isClipsBetaTagShowing: V === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: G,
                isKeywordFilteringEnabled: F,
                isStaff: H,
                isInappropriateConversationWarningEnabled: W,
                isInapproprateConversationsDefaultOn: z,
                paymentsBlocked: Y,
                isEligibleForQuests: K,
                isStricterMessageRequestsEnabled: Q,
                hasLibraryApplication: q,
                hasTOTPEnabled: X,
                developerMode: J,
                isAdultUser: ee,
                hasSecureFramesVerifiedUserIds: et,
                hypeSquadRemoved: $,
                hasIgnoredUsers: ei,
                hasBlockedUsers: en,
                useRefreshedVoiceAndVideo: er,
                isEligibleForSensitiveContentDefaults: es,
                inputMode: ea,
                activeInputProfile: el,
                isInputProfileCustom: eo,
                isGoreContentFilteringEnabled: ec
            }),
        [J, V, en, ei, q, et, X, $, k, ee, K, z, W, F, M, H, Q, L, Y, G, P, v, er, es, ea, el, eo, ec]
    );
}
function G(e) {
    let { searchResults: t } = (0, k.E)(),
        n = V(),
        i = n[e],
        r = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            })
        ),
        s = Object.fromEntries(
            Object.entries(r)
                .filter((e) => {
                    let [t, { parent: n, section: r }] = e;
                    return null != n && r === i.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                })
        ),
        a = new Set(),
        l = (e) => {
            let t = r[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && l(n);
        },
        o = (e) => {
            for (let t of (a.add(e),
            Object.entries(s)
                .filter((t) => {
                    let [n, i] = t;
                    return i === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in r))
        if (!a.has(e)) {
            if (null != r[e].element && null == r[e].parent) {
                a.clear();
                break;
            }
            (Object.values(s).includes(e) && o(e), l(e));
        }
    return a;
}
function F(e, t, n) {
    let i = [],
        r = z(t),
        s = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let i = e[t].parent;
                        for (; null != i && null != e[i].parent; ) i = e[i].parent;
                        if (null != i) {
                            var r;
                            let e = null != (r = n.get(i)) ? r : 0;
                            n.set(i, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != n ? n : []).filter((e) => r.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && i.push({ section: a.ID.DIVIDER }),
                null != e.header &&
                    i.push({
                        section: a.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    var r, a;
                    i.push(
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
                            }
                            return e;
                        })({}, t[e])),
                        (a = a = { tabPredicate: () => null == n || (e === L.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        r)
                    );
                }));
        }),
        i
    );
}
function H() {
    let e = V(),
        { shouldMergeGameSettings: t } = A.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = P.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                U({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => F(r, e), [r, e]);
}
function W(e) {
    let t = V(),
        n = (function () {
            let { shouldMergeGameSettings: e } = A.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = P.b.useExperiment({ location: 'settings' }),
                n = U({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: M.intl.string(M.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            L.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => F(n, t, new Set(e)), [n, t, e]);
}
function z(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function Y(e) {
    return Array.from(z(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
