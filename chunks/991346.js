(n.d(t, {
    Gj: () => F,
    Pt: () => G,
    VO: () => z,
    ji: () => K,
    q8: () => Y
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
    l = n(493544),
    a = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(704454),
    m = n(470734),
    p = n(319828),
    g = n(592204),
    h = n(610697),
    f = n(880257),
    b = n(631885),
    x = n(160913),
    _ = n(725727),
    E = n(977156),
    j = n(921157),
    O = n(667172),
    C = n(237292),
    S = n(314897),
    v = n(906467),
    T = n(283595),
    N = n(131951),
    I = n(699516),
    y = n(663389),
    A = n(594174),
    P = n(202527),
    R = n(413182),
    D = n(695346),
    Z = n(620163),
    w = n(406613),
    k = n(168308),
    L = n(839469),
    B = n(726985),
    M = n(46140),
    U = n(388032);
function V(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = v.Z.isDeveloper,
        r = [
            {
                header: U.intl.string(U.t.cduTBA),
                settings: n ? [B.s6.ACCOUNT, B.s6.GAMES, B.s6.PROFILE_CUSTOMIZATION, B.s6.CONTENT_SOCIAL, B.s6.DATA_PRIVACY, B.s6.PRIVACY_FAMILY_CENTER, B.s6.THIRD_PARTY_ACCESS, B.s6.SESSIONS, B.s6.CLIPS] : [B.s6.ACCOUNT, B.s6.GAMES, B.s6.PROFILE_CUSTOMIZATION, B.s6.CONTENT_SOCIAL, B.s6.DATA_PRIVACY, B.s6.PRIVACY_FAMILY_CENTER, B.s6.AUTHORIZED_APPS, B.s6.SESSIONS, B.s6.CONNECTIONS, B.s6.CLIPS]
            },
            {
                header: U.intl.string(U.t['4uOdGh']),
                divider: !0,
                settings: [B.s6.PREMIUM, B.s6.GUILD_BOOSTING, B.s6.SUBSCRIPTIONS, B.s6.GIFT_INVENTORY, B.s6.BILLING]
            },
            {
                header: U.intl.string(U.t.f2n1TE),
                divider: !0,
                settings: [B.s6.APPEARANCE, B.s6.ACCESSIBILITY, B.s6.VOICE_AND_VIDEO, B.s6.CLICKER_GAME, B.s6.POGGERMODE, B.s6.CHAT, B.s6.NOTIFICATIONS, B.s6.KEYBINDS, B.s6.LANGUAGE, B.s6.WINDOW_SETTINGS, B.s6.LINUX_SETTINGS, B.s6.STREAMER_MODE, B.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [B.s6.CHANGELOG, B.s6.MERCHANDISE, B.s6.HYPESQUAD, B.s6.TOWNHALL]
            },
            {
                header: 'Developer Only',
                divider: !0,
                settings: i ? [B.s6.EXPERIMENTS, B.s6.DEVELOPER_OPTIONS, B.s6.HOTSPOT_OPTIONS, B.s6.DISMISSIBLE_CONTENT_OPTIONS, B.s6.PAYMENT_FLOW_MODALS, B.s6.REVENUE_STORYBOOK, B.s6.VIRTUAL_CURRENCY_CONFIGURATION, B.s6.DESIGN_SYSTEMS, B.s6.TEXT_PLAYGROUND, B.s6.TEXT_COMPONENTS, B.s6.INTL_TESTING, B.s6.SHOP_KEEPER, B.s6.WEB_SETTING_TREE_TOOL, B.s6.QUEST_PREVIEW_TOOL, B.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
            },
            {
                divider: !0,
                settings: [B.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [B.s6.SOCIAL_LINKS, B.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: U.intl.string(U.t.SmHCFR),
            divider: !0,
            settings: [B.s6.ACTIVITY_PRIVACY, B.s6.REGISTERED_GAMES, B.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function G() {
    var e, t, n, l;
    let v = (0, _.YO)().length,
        R = (0, x.U)(),
        L = (0, r.e7)([y.Z], () => y.Z.getProps().impressionSource),
        B = (0, b.gU)(),
        U = (0, k.bC)(),
        V = (0, c.Go)(),
        [G] = (0, d.cv)(V ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        F = 'useGenerateUserSettingsSections';
    ((0, a.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        }));
    let { shouldMergeGameSettings: H } = P.b.useExperiment({ location: 'settings' }),
        z = (0, g.Xo)({ location: 'settings' }),
        Y = null != (n = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        W = (0, C.y0)({ location: 'settings' }),
        K = (0, O.v4)({ location: 'settings' }),
        q = (0, o.Q)(),
        X = (0, E.Zy)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        Q = (0, r.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        J = (0, r.e7)([S.default], () => S.default.hasTOTPEnabled()),
        $ = D.Sb.useSetting(),
        ee = (0, h.Z)(),
        { hypeSquadRemoved: et } = p.Z.useExperiment({ location: 'settings' }),
        en = null == (l = (0, f.Z)()) || l,
        ei = (null == (t = (0, j.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: er, hasIgnoredUsers: es } = (0, r.cj)([I.Z], () => ({
            hasBlockedUsers: I.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: I.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: el } = (0, w.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        ea = (0, u.UQ)('SettingRendererUtils'),
        {
            inputMode: eo,
            activeInputProfile: ec,
            isInputProfileCustom: ed
        } = (0, r.cj)([N.Z], () => ({
            activeInputProfile: N.Z.getActiveInputProfile(),
            inputMode: N.Z.getMode(),
            isInputProfileCustom: N.Z.isInputProfileCustom()
        })),
        eu = (0, m.pn)('useGenerateUserSettingsSections');
    return i.useMemo(
        () =>
            (0, Z.i)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: R,
                impressionSource: L,
                numOfPendingFamilyRequests: B,
                isOverlaySupported: U,
                isClipsBetaTagShowing: G === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: H,
                isKeywordFilteringEnabled: z,
                isStaff: Y,
                isInappropriateConversationWarningEnabled: W,
                isInapproprateConversationsDefaultOn: K,
                paymentsBlocked: q,
                isEligibleForQuests: X,
                isStricterMessageRequestsEnabled: ee,
                hasLibraryApplication: Q,
                hasTOTPEnabled: J,
                developerMode: $,
                isAdultUser: en,
                hasSecureFramesVerifiedUserIds: ei,
                hypeSquadRemoved: et,
                hasIgnoredUsers: es,
                hasBlockedUsers: er,
                useRefreshedVoiceAndVideo: el,
                isEligibleForSensitiveContentDefaults: ea,
                inputMode: eo,
                activeInputProfile: ec,
                isInputProfileCustom: ed,
                isGoreContentFilteringEnabled: eu
            }),
        [$, G, er, es, Q, ei, J, et, L, en, X, K, W, z, U, Y, ee, B, q, H, R, v, el, ea, eo, ec, ed, eu]
    );
}
function F(e) {
    let { searchResults: t } = (0, L.E)(),
        n = G(),
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
            (Object.values(s).includes(e) && o(e), a(e));
        }
    return l;
}
function H(e, t, n) {
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
                        (l = l = { tabPredicate: () => null == n || (e === B.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
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
function z() {
    let e = G(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = R.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                V({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => H(r, e), [r, e]);
}
function Y(e) {
    let t = G(),
        n = (function () {
            let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = R.b.useExperiment({ location: 'settings' }),
                n = V({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: U.intl.string(U.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            B.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => H(n, t, new Set(e)), [n, t, e]);
}
function W(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function K(e) {
    return Array.from(W(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
