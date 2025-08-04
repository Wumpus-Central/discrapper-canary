(n.d(t, {
    Gj: () => V,
    Pt: () => U,
    VO: () => F,
    ji: () => z,
    q8: () => H
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
    u = n(319828),
    m = n(592204),
    p = n(610697),
    g = n(880257),
    h = n(631885),
    f = n(160913),
    b = n(725727),
    x = n(977156),
    _ = n(921157),
    j = n(667172),
    E = n(237292),
    C = n(314897),
    O = n(906467),
    v = n(283595),
    S = n(131951),
    T = n(699516),
    I = n(663389),
    N = n(594174),
    y = n(202527),
    A = n(413182),
    P = n(695346),
    R = n(620163),
    D = n(406613),
    Z = n(168308),
    w = n(839469),
    k = n(726985),
    L = n(46140),
    B = n(388032);
function M(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = O.Z.isDeveloper,
        r = [
            {
                header: B.intl.string(B.t.cduTBA),
                settings: n ? [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.THIRD_PARTY_ACCESS, k.s6.SESSIONS, k.s6.CLIPS] : [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.AUTHORIZED_APPS, k.s6.SESSIONS, k.s6.CONNECTIONS, k.s6.CLIPS]
            },
            {
                header: B.intl.string(B.t['4uOdGh']),
                divider: !0,
                settings: [k.s6.PREMIUM, k.s6.GUILD_BOOSTING, k.s6.SUBSCRIPTIONS, k.s6.GIFT_INVENTORY, k.s6.BILLING]
            },
            {
                header: B.intl.string(B.t.f2n1TE),
                divider: !0,
                settings: [k.s6.APPEARANCE, k.s6.ACCESSIBILITY, k.s6.VOICE_AND_VIDEO, k.s6.CLICKER_GAME, k.s6.POGGERMODE, k.s6.CHAT, k.s6.NOTIFICATIONS, k.s6.KEYBINDS, k.s6.LANGUAGE, k.s6.WINDOW_SETTINGS, k.s6.LINUX_SETTINGS, k.s6.STREAMER_MODE, k.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [k.s6.CHANGELOG, k.s6.MERCHANDISE, k.s6.HYPESQUAD, k.s6.TOWNHALL]
            },
            {
                header: 'Developer Only',
                divider: !0,
                settings: i ? [k.s6.EXPERIMENTS, k.s6.DEVELOPER_OPTIONS, k.s6.HOTSPOT_OPTIONS, k.s6.DISMISSIBLE_CONTENT_OPTIONS, k.s6.PAYMENT_FLOW_MODALS, k.s6.REVENUE_STORYBOOK, k.s6.VIRTUAL_CURRENCY_CONFIGURATION, k.s6.DESIGN_SYSTEMS, k.s6.INTL_TESTING, k.s6.SHOP_KEEPER, k.s6.WEB_SETTING_TREE_TOOL, k.s6.QUEST_PREVIEW_TOOL, k.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
            },
            {
                divider: !0,
                settings: [k.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [k.s6.SOCIAL_LINKS, k.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: B.intl.string(B.t.SmHCFR),
            divider: !0,
            settings: [k.s6.ACTIVITY_PRIVACY, k.s6.REGISTERED_GAMES, k.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function U() {
    var e, t, n, a;
    let O = (0, b.YO)().length,
        A = (0, f.U)(),
        w = (0, r.e7)([I.Z], () => I.Z.getProps().impressionSource),
        k = (0, h.gU)(),
        B = (0, Z.bC)(),
        M = (0, o.Go)(),
        [U] = (0, c.cv)(M ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: V } = y.b.useExperiment({ location: 'settings' }),
        G = (0, m.Xo)({ location: 'settings' }),
        F = null != (n = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        H = (0, E.y0)({ location: 'settings' }),
        W = (0, j.v4)({ location: 'settings' }),
        z = (0, l.Q)(),
        Y = (0, x.Zy)({ location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        K = (0, r.e7)([v.Z], () => v.Z.hasLibraryApplication()),
        q = (0, r.e7)([C.default], () => C.default.hasTOTPEnabled()),
        X = P.Sb.useSetting(),
        J = (0, p.Z)(),
        { hypeSquadRemoved: Q } = u.Z.useExperiment({ location: 'settings' }),
        $ = null == (a = (0, g.Z)()) || a,
        ee = (null == (t = (0, _.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: et, hasIgnoredUsers: en } = (0, r.cj)([T.Z], () => ({
            hasBlockedUsers: T.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: T.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: ei } = (0, D.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        er = (0, d.UQ)('SettingRendererUtils'),
        {
            inputMode: es,
            activeInputProfile: ea,
            isInputProfileCustom: el
        } = (0, r.cj)([S.Z], () => ({
            activeInputProfile: S.Z.getActiveInputProfile(),
            inputMode: S.Z.getMode(),
            isInputProfileCustom: S.Z.isInputProfileCustom()
        }));
    return i.useMemo(
        () =>
            (0, R.i)({
                unseenGiftCount: O,
                showPrepaidPaymentPastDueWarning: A,
                impressionSource: w,
                numOfPendingFamilyRequests: k,
                isOverlaySupported: B,
                isClipsBetaTagShowing: U === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: V,
                isKeywordFilteringEnabled: G,
                isStaff: F,
                isInappropriateConversationWarningEnabled: H,
                isInapproprateConversationsDefaultOn: W,
                paymentsBlocked: z,
                isEligibleForQuests: Y,
                isStricterMessageRequestsEnabled: J,
                hasLibraryApplication: K,
                hasTOTPEnabled: q,
                developerMode: X,
                isAdultUser: $,
                hasSecureFramesVerifiedUserIds: ee,
                hypeSquadRemoved: Q,
                hasIgnoredUsers: en,
                hasBlockedUsers: et,
                useRefreshedVoiceAndVideo: ei,
                isEligibleForSensitiveContentDefaults: er,
                inputMode: es,
                activeInputProfile: ea,
                isInputProfileCustom: el
            }),
        [X, U, et, en, K, ee, q, Q, w, $, Y, W, H, G, B, F, J, k, z, V, A, O, ei, er, es, ea, el]
    );
}
function V(e) {
    let { searchResults: t } = (0, w.E)(),
        n = U(),
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
function G(e, t, n) {
    let i = [],
        r = W(t),
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
                        (a = a = { tabPredicate: () => null == n || (e === k.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
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
function F() {
    let e = U(),
        { shouldMergeGameSettings: t } = y.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = A.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                M({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => G(r, e), [r, e]);
}
function H(e) {
    let t = U(),
        n = (function () {
            let { shouldMergeGameSettings: e } = y.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = A.b.useExperiment({ location: 'settings' }),
                n = M({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: B.intl.string(B.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            k.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => G(n, t, new Set(e)), [n, t, e]);
}
function W(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function z(e) {
    return Array.from(W(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
