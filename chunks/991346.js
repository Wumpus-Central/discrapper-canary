n.d(t, {
    Gj: () => F,
    Pt: () => G,
    VO: () => z,
    ji: () => K,
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
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(704454),
    m = n(319828),
    g = n(592204),
    p = n(610697),
    h = n(880257),
    f = n(631885),
    b = n(223639),
    _ = n(160913),
    x = n(725727),
    E = n(977156),
    C = n(921157),
    j = n(667172),
    O = n(237292),
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
    M = n(726985),
    B = n(46140),
    U = n(388032);
function V(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = v.Z.isDeveloper,
        r = [
            {
                header: U.intl.string(U.t.cduTBA),
                settings: n ? [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.THIRD_PARTY_ACCESS, M.s6.SESSIONS, M.s6.CLIPS] : [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.AUTHORIZED_APPS, M.s6.SESSIONS, M.s6.CONNECTIONS, M.s6.CLIPS]
            },
            {
                header: U.intl.string(U.t['4uOdGh']),
                divider: !0,
                settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING]
            },
            {
                header: U.intl.string(U.t.f2n1TE),
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
                settings: i ? [M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.HOTSPOT_OPTIONS, M.s6.DISMISSIBLE_CONTENT_OPTIONS, M.s6.PAYMENT_FLOW_MODALS, M.s6.REVENUE_STORYBOOK, M.s6.VIRTUAL_CURRENCY_CONFIGURATION, M.s6.DESIGN_SYSTEMS, M.s6.TEXT_PLAYGROUND, M.s6.TEXT_COMPONENTS, M.s6.INTL_TESTING, M.s6.PROFILE_EFFECTS_PREVIEW_TOOL, M.s6.NAMEPLATES_PREVIEW_TOOL, M.s6.WEB_SETTING_TREE_TOOL, M.s6.QUEST_PREVIEW_TOOL, M.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
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
            header: U.intl.string(U.t.SmHCFR),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function G() {
    var e, t, n, l;
    let v = (0, x.YO)().length,
        R = (0, _.U)(),
        L = (0, r.e7)([y.Z], () => y.Z.getProps().impressionSource),
        M = (0, f.gU)(),
        U = (0, k.bC)(),
        V = (0, c.Go)(),
        [G] = (0, d.cv)(V ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        F = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: H } = P.b.useExperiment({ location: 'settings' }),
        z = (0, g.Xo)({ location: 'settings' }),
        W = null != (n = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        Y = (0, O.y0)({ location: 'settings' }),
        K = (0, j.v4)({ location: 'settings' }),
        q = (0, o.Q)(),
        X = (0, E.Zy)({ location: B.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: Q } = b.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        J = (0, r.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        $ = (0, r.e7)([S.default], () => S.default.hasTOTPEnabled()),
        ee = D.Sb.useSetting(),
        et = (0, p.Z)(),
        { hypeSquadRemoved: en } = m.Z.useExperiment({ location: 'settings' }),
        ei = null == (l = (0, h.Z)()) || l,
        er = (null == (t = (0, C.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: es, hasIgnoredUsers: el } = (0, r.cj)([I.Z], () => ({
            hasBlockedUsers: I.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: I.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: ea } = (0, w.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        eo = (0, u.UQ)('SettingRendererUtils'),
        {
            inputMode: ec,
            activeInputProfile: ed,
            isInputProfileCustom: eu
        } = (0, r.cj)([N.Z], () => ({
            activeInputProfile: N.Z.getActiveInputProfile(),
            inputMode: N.Z.getMode(),
            isInputProfileCustom: N.Z.isInputProfileCustom()
        }));
    return i.useMemo(
        () =>
            (0, Z.i)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: R,
                impressionSource: L,
                numOfPendingFamilyRequests: M,
                isOverlaySupported: U,
                isClipsBetaTagShowing: G === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: H,
                isKeywordFilteringEnabled: z,
                isStaff: W,
                isInappropriateConversationWarningEnabled: Y,
                isInapproprateConversationsDefaultOn: K,
                paymentsBlocked: q,
                isEligibleForQuests: X,
                showGiftNitro: Q,
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
                isInputProfileCustom: eu
            }),
        [ee, G, es, el, J, er, $, en, L, ei, X, K, Y, z, U, W, et, M, q, H, Q, R, v, ea, eo, ec, ed, eu]
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
            Object.values(s).includes(e) && o(e), a(e);
        }
    return l;
}
function H(e, t, n) {
    let i = [],
        r = Y(t),
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
function W(e) {
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
                            M.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => H(n, t, new Set(e)), [n, t, e]);
}
function Y(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function K(e) {
    return Array.from(Y(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
