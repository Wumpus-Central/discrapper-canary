n.d(t, {
    Gj: () => z,
    Pt: () => H,
    VO: () => W,
    ji: () => X,
    q8: () => K
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
    x = n(223639),
    E = n(160913),
    C = n(725727),
    j = n(977156),
    O = n(921157),
    S = n(667172),
    v = n(237292),
    T = n(314897),
    I = n(906467),
    N = n(283595),
    y = n(131951),
    A = n(699516),
    P = n(663389),
    R = n(594174),
    D = n(202527),
    Z = n(413182),
    w = n(695346),
    k = n(620163),
    L = n(406613),
    B = n(168308),
    M = n(839469),
    U = n(726985),
    V = n(46140),
    G = n(388032);
function F(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = I.Z.isDeveloper,
        r = [
            {
                header: G.intl.string(G.t.cduTBA),
                settings: n ? [U.s6.ACCOUNT, U.s6.GAMES, U.s6.PROFILE_CUSTOMIZATION, U.s6.CONTENT_SOCIAL, U.s6.DATA_PRIVACY, U.s6.PRIVACY_FAMILY_CENTER, U.s6.THIRD_PARTY_ACCESS, U.s6.SESSIONS, U.s6.CLIPS] : [U.s6.ACCOUNT, U.s6.GAMES, U.s6.PROFILE_CUSTOMIZATION, U.s6.CONTENT_SOCIAL, U.s6.DATA_PRIVACY, U.s6.PRIVACY_FAMILY_CENTER, U.s6.AUTHORIZED_APPS, U.s6.SESSIONS, U.s6.CONNECTIONS, U.s6.CLIPS]
            },
            {
                header: G.intl.string(G.t['4uOdGh']),
                divider: !0,
                settings: [U.s6.PREMIUM, U.s6.GUILD_BOOSTING, U.s6.SUBSCRIPTIONS, U.s6.GIFT_INVENTORY, U.s6.BILLING]
            },
            {
                header: G.intl.string(G.t.f2n1TE),
                divider: !0,
                settings: [U.s6.APPEARANCE, U.s6.ACCESSIBILITY, U.s6.VOICE_AND_VIDEO, U.s6.CLICKER_GAME, U.s6.POGGERMODE, U.s6.CHAT, U.s6.NOTIFICATIONS, U.s6.KEYBINDS, U.s6.LANGUAGE, U.s6.WINDOW_SETTINGS, U.s6.LINUX_SETTINGS, U.s6.STREAMER_MODE, U.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [U.s6.CHANGELOG, U.s6.MERCHANDISE, U.s6.HYPESQUAD, U.s6.TOWNHALL]
            },
            {
                header: 'Developer Only',
                divider: !0,
                settings: i ? [U.s6.EXPERIMENTS, U.s6.DEVELOPER_OPTIONS, U.s6.HOTSPOT_OPTIONS, U.s6.DISMISSIBLE_CONTENT_OPTIONS, U.s6.PAYMENT_FLOW_MODALS, U.s6.REVENUE_STORYBOOK, U.s6.VIRTUAL_CURRENCY_CONFIGURATION, U.s6.DESIGN_SYSTEMS, U.s6.TEXT_PLAYGROUND, U.s6.TEXT_COMPONENTS, U.s6.INTL_TESTING, U.s6.SHOP_KEEPER, U.s6.WEB_SETTING_TREE_TOOL, U.s6.QUEST_PREVIEW_TOOL, U.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
            },
            {
                divider: !0,
                settings: [U.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [U.s6.SOCIAL_LINKS, U.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: G.intl.string(G.t.SmHCFR),
            divider: !0,
            settings: [U.s6.ACTIVITY_PRIVACY, U.s6.REGISTERED_GAMES, U.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function H() {
    var e, t, n, l;
    let I = (0, C.YO)().length,
        Z = (0, E.U)(),
        M = (0, r.e7)([P.Z], () => P.Z.getProps().impressionSource),
        U = (0, _.gU)(),
        G = (0, B.bC)(),
        F = (0, d.Go)(),
        [H] = (0, u.cv)(F ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        z = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: z + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: z + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: Y } = D.b.useExperiment({ location: 'settings' }),
        W = (0, h.Xo)({ location: 'settings' }),
        K = null != (n = null == (e = R.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        q = (0, v.y0)({ location: 'settings' }),
        X = (0, S.v4)({ location: 'settings' }),
        Q = (0, c.Q)(),
        J = (0, j.Zy)({ location: V.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: $ } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        ee = (0, r.e7)([N.Z], () => N.Z.hasLibraryApplication()),
        et = (0, r.e7)([T.default], () => T.default.hasTOTPEnabled()),
        en = w.Sb.useSetting(),
        ei = (0, f.Z)(),
        { hypeSquadRemoved: er } = p.Z.useExperiment({ location: 'settings' }),
        es = null == (l = (0, b.Z)()) || l,
        el = (null == (t = (0, O.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: ea, hasIgnoredUsers: eo } = (0, r.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: ec } = (0, L.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        ed = (0, m.UQ)('SettingRendererUtils'),
        {
            inputMode: eu,
            activeInputProfile: em,
            isInputProfileCustom: eg
        } = (0, r.cj)([y.Z], () => ({
            activeInputProfile: y.Z.getActiveInputProfile(),
            inputMode: y.Z.getMode(),
            isInputProfileCustom: y.Z.isInputProfileCustom()
        })),
        { isEnabled: ep } = (0, o.D)('SettingRendererUtils'),
        eh = (0, g.pn)('useGenerateUserSettingsSections');
    return i.useMemo(
        () =>
            (0, k.i)({
                unseenGiftCount: I,
                showPrepaidPaymentPastDueWarning: Z,
                impressionSource: M,
                numOfPendingFamilyRequests: U,
                isOverlaySupported: G,
                isClipsBetaTagShowing: H === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: Y,
                isKeywordFilteringEnabled: W,
                isStaff: K,
                isInappropriateConversationWarningEnabled: q,
                isInapproprateConversationsDefaultOn: X,
                paymentsBlocked: Q,
                isEligibleForQuests: J,
                showGiftNitro: $,
                isStricterMessageRequestsEnabled: ei,
                hasLibraryApplication: ee,
                hasTOTPEnabled: et,
                developerMode: en,
                isAdultUser: es,
                hasSecureFramesVerifiedUserIds: el,
                hypeSquadRemoved: er,
                hasIgnoredUsers: eo,
                hasBlockedUsers: ea,
                useRefreshedVoiceAndVideo: ec,
                isEligibleForSensitiveContentDefaults: ed,
                inputMode: eu,
                activeInputProfile: em,
                isInputProfileCustom: eg,
                isActivitySharingExperimentEnabled: ep,
                isGoreContentFilteringEnabled: eh
            }),
        [en, H, ea, eo, ee, el, et, er, M, es, J, X, q, W, G, K, ei, U, Q, Y, $, Z, I, ec, ed, eu, em, eg, ep, eh]
    );
}
function z(e) {
    let { searchResults: t } = (0, M.E)(),
        n = H(),
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
function Y(e, t, n) {
    let i = [],
        r = q(t),
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
                        (l = l = { tabPredicate: () => null == n || (e === U.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
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
function W() {
    let e = H(),
        { shouldMergeGameSettings: t } = D.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = Z.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                F({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => Y(r, e), [r, e]);
}
function K(e) {
    let t = H(),
        n = (function () {
            let { shouldMergeGameSettings: e } = D.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = Z.b.useExperiment({ location: 'settings' }),
                n = F({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: G.intl.string(G.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            U.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => Y(n, t, new Set(e)), [n, t, e]);
}
function q(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function X(e) {
    return Array.from(q(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
