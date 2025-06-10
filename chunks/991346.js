n.d(t, {
    Gj: () => H,
    Pt: () => F,
    VO: () => Y,
    ji: () => q,
    q8: () => W
}),
    n(836215),
    n(472816),
    n(794429),
    n(388685),
    n(467055),
    n(539854);
var i = n(73800),
    r = n(442837),
    s = n(704215),
    l = n(493544),
    a = n(634894),
    o = n(316496),
    c = n(211242),
    d = n(924557),
    u = n(706140),
    m = n(704454),
    g = n(470734),
    p = n(319828),
    h = n(592204),
    f = n(610697),
    b = n(880257),
    _ = n(631885),
    x = n(160913),
    E = n(725727),
    j = n(977156),
    C = n(921157),
    O = n(667172),
    S = n(237292),
    v = n(314897),
    T = n(906467),
    I = n(283595),
    N = n(131951),
    y = n(699516),
    A = n(663389),
    P = n(594174),
    R = n(202527),
    D = n(413182),
    Z = n(695346),
    w = n(620163),
    k = n(406613),
    L = n(168308),
    B = n(839469),
    M = n(726985),
    U = n(46140),
    V = n(388032);
function G(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = T.Z.isDeveloper,
        r = [
            {
                header: V.intl.string(V.t.cduTBA),
                settings: n ? [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.THIRD_PARTY_ACCESS, M.s6.SESSIONS, M.s6.CLIPS] : [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.AUTHORIZED_APPS, M.s6.SESSIONS, M.s6.CONNECTIONS, M.s6.CLIPS]
            },
            {
                header: V.intl.string(V.t['4uOdGh']),
                divider: !0,
                settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING]
            },
            {
                header: V.intl.string(V.t.f2n1TE),
                divider: !0,
                settings: [M.s6.APPEARANCE, M.s6.ACCESSIBILITY, M.s6.VOICE_AND_VIDEO, M.s6.CLICKER_GAME, M.s6.POGGERMODE, M.s6.CHAT, M.s6.NOTIFICATIONS, M.s6.KEYBINDS, M.s6.LANGUAGE, M.s6.WINDOW_SETTINGS, M.s6.LINUX_SETTINGS, M.s6.STREAMER_MODE, M.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.TOWNHALL]
            },
            {
                header: 'Developer Only',
                divider: !0,
                settings: i ? [M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.HOTSPOT_OPTIONS, M.s6.DISMISSIBLE_CONTENT_OPTIONS, M.s6.PAYMENT_FLOW_MODALS, M.s6.REVENUE_STORYBOOK, M.s6.VIRTUAL_CURRENCY_CONFIGURATION, M.s6.DESIGN_SYSTEMS, M.s6.TEXT_PLAYGROUND, M.s6.TEXT_COMPONENTS, M.s6.INTL_TESTING, M.s6.SHOP_KEEPER, M.s6.WEB_SETTING_TREE_TOOL, M.s6.QUEST_PREVIEW_TOOL, M.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
            },
            {
                divider: !0,
                settings: [M.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [M.s6.SOCIAL_LINKS, M.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: V.intl.string(V.t.SmHCFR),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function F() {
    var e, t, n, l;
    let T = (0, E.YO)().length,
        D = (0, x.U)(),
        B = (0, r.e7)([A.Z], () => A.Z.getProps().impressionSource),
        M = (0, _.gU)(),
        V = (0, L.bC)(),
        G = (0, d.Go)(),
        [F] = (0, u.cv)(G ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        H = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: H + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: H + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: z } = R.b.useExperiment({ location: 'settings' }),
        Y = (0, h.Xo)({ location: 'settings' }),
        W = null != (n = null == (e = P.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        K = (0, S.y0)({ location: 'settings' }),
        q = (0, O.v4)({ location: 'settings' }),
        X = (0, c.Q)(),
        Q = (0, j.Zy)({ location: U.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        J = (0, r.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        $ = (0, r.e7)([v.default], () => v.default.hasTOTPEnabled()),
        ee = Z.Sb.useSetting(),
        et = (0, f.Z)(),
        { hypeSquadRemoved: en } = p.Z.useExperiment({ location: 'settings' }),
        ei = null == (l = (0, b.Z)()) || l,
        er = (null == (t = (0, C.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: es, hasIgnoredUsers: el } = (0, r.cj)([y.Z], () => ({
            hasBlockedUsers: y.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: y.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: ea } = (0, k.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        eo = (0, m.UQ)('SettingRendererUtils'),
        {
            inputMode: ec,
            activeInputProfile: ed,
            isInputProfileCustom: eu
        } = (0, r.cj)([N.Z], () => ({
            activeInputProfile: N.Z.getActiveInputProfile(),
            inputMode: N.Z.getMode(),
            isInputProfileCustom: N.Z.isInputProfileCustom()
        })),
        { isEnabled: em } = (0, o.D)('SettingRendererUtils'),
        eg = (0, g.pn)('useGenerateUserSettingsSections');
    return i.useMemo(
        () =>
            (0, w.i)({
                unseenGiftCount: T,
                showPrepaidPaymentPastDueWarning: D,
                impressionSource: B,
                numOfPendingFamilyRequests: M,
                isOverlaySupported: V,
                isClipsBetaTagShowing: F === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: z,
                isKeywordFilteringEnabled: Y,
                isStaff: W,
                isInappropriateConversationWarningEnabled: K,
                isInapproprateConversationsDefaultOn: q,
                paymentsBlocked: X,
                isEligibleForQuests: Q,
                isStricterMessageRequestsEnabled: et,
                hasLibraryApplication: J,
                hasTOTPEnabled: $,
                developerMode: ee,
                isAdultUser: ei,
                hasSecureFramesVerifiedUserIds: er,
                hypeSquadRemoved: en,
                hasIgnoredUsers: el,
                hasBlockedUsers: es,
                useRefreshedVoiceAndVideo: ea,
                isEligibleForSensitiveContentDefaults: eo,
                inputMode: ec,
                activeInputProfile: ed,
                isInputProfileCustom: eu,
                isActivitySharingExperimentEnabled: em,
                isGoreContentFilteringEnabled: eg
            }),
        [ee, F, es, el, J, er, $, en, B, ei, Q, q, K, Y, V, W, et, M, X, z, D, T, ea, eo, ec, ed, eu, em, eg]
    );
}
function H(e) {
    let { searchResults: t } = (0, B.E)(),
        n = F(),
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
        l = new Set(),
        a = (e) => {
            let t = r[e];
            if (null == t) return;
            l.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (l.add(e),
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
        if (!l.has(e)) {
            if (null != r[e].element && null == r[e].parent) {
                l.clear();
                break;
            }
            Object.values(s).includes(e) && o(e), a(e);
        }
    return l;
}
function z(e, t, n) {
    let i = [],
        r = K(t),
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
                (!0 === e.divider && i.push({ section: l.ID.DIVIDER }),
                null != e.header &&
                    i.push({
                        section: l.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    var r, l;
                    i.push(
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t[e])),
                        (l = l = { tabPredicate: () => null == n || (e === M.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r)
                    );
                }));
        }),
        i
    );
}
function Y() {
    let e = F(),
        { shouldMergeGameSettings: t } = R.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = D.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                G({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => z(r, e), [r, e]);
}
function W(e) {
    let t = F(),
        n = (function () {
            let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = D.b.useExperiment({ location: 'settings' }),
                n = G({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: V.intl.string(V.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            M.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => z(n, t, new Set(e)), [n, t, e]);
}
function K(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function q(e) {
    return Array.from(K(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
