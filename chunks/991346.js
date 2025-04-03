n.d(t, {
    Gj: () => G,
    Pt: () => V,
    VO: () => H,
    ji: () => K,
    q8: () => z
}),
    n(639576),
    n(86693),
    n(536091),
    n(47120),
    n(977457),
    n(653041);
var r = n(192379),
    i = n(442837),
    s = n(704215),
    a = n(493544),
    l = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(704454),
    m = n(402234),
    g = n(319828),
    p = n(592204),
    h = n(610697),
    f = n(880257),
    b = n(631885),
    N = n(223639),
    x = n(160913),
    _ = n(725727),
    E = n(977156),
    j = n(921157),
    O = n(667172),
    C = n(237292),
    S = n(314897),
    v = n(906467),
    T = n(283595),
    I = n(699516),
    y = n(663389),
    A = n(594174),
    P = n(202527),
    R = n(413182),
    D = n(695346),
    Z = n(620163),
    w = n(406613),
    k = n(168308),
    W = n(839469),
    L = n(726985),
    B = n(46140),
    M = n(388032);
function U(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = v.Z.isDeveloper,
        i = [
            {
                header: M.NW.string(M.t.cduTBA),
                settings: n ? [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.THIRD_PARTY_ACCESS, L.s6.SESSIONS, L.s6.CLIPS] : [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.AUTHORIZED_APPS, L.s6.SESSIONS, L.s6.CONNECTIONS, L.s6.CLIPS]
            },
            {
                header: M.NW.string(M.t['4uOdGh']),
                divider: !0,
                settings: [L.s6.PREMIUM, L.s6.GUILD_BOOSTING, L.s6.SUBSCRIPTIONS, L.s6.GIFT_INVENTORY, L.s6.BILLING]
            },
            {
                header: M.NW.string(M.t.f2n1TE),
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
                settings: r ? [L.s6.EXPERIMENTS, L.s6.DEVELOPER_OPTIONS, L.s6.HOTSPOT_OPTIONS, L.s6.DISMISSIBLE_CONTENT_OPTIONS, L.s6.PAYMENT_FLOW_MODALS, L.s6.REVENUE_STORYBOOK, L.s6.VIRTUAL_CURRENCY_CONFIGURATION, L.s6.DESIGN_SYSTEMS, L.s6.TEXT_PLAYGROUND, L.s6.TEXT_COMPONENTS, L.s6.INTL_TESTING, L.s6.PROFILE_EFFECTS_PREVIEW_TOOL, L.s6.NAMEPLATES_PREVIEW_TOOL, L.s6.WEB_SETTING_TREE_TOOL, L.s6.QUEST_PREVIEW_TOOL] : []
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
            header: M.NW.string(M.t.SmHCFR),
            divider: !0,
            settings: [L.s6.ACTIVITY_PRIVACY, L.s6.REGISTERED_GAMES, L.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function V() {
    var e, t, n, a;
    let v = (0, _.YO)().length,
        R = (0, x.U)(),
        W = (0, i.e7)([y.Z], () => y.Z.getProps().impressionSource),
        L = (0, b.gU)(),
        M = (0, k.bC)(),
        U = (0, c.Go)(),
        [V] = (0, d.cv)(U ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        G = 'useGenerateUserSettingsSections';
    (0, l.j)({
        location: G + ' auto on',
        autoTrackExposure: !0
    }),
        (0, l.j)({
            location: G + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: F } = P.b.useExperiment({ location: 'settings' }),
        H = (0, p.Xo)({ location: 'settings' }),
        z = null != (n = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        Y = (0, C.y0)({ location: 'settings' }),
        K = (0, O.v4)({ location: 'settings' }),
        q = (0, o.Q)(),
        X = (0, E.Zy)({ location: B.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: J } = N.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, i.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        $ = (0, i.e7)([S.default], () => S.default.hasTOTPEnabled()),
        ee = D.Sb.useSetting(),
        et = (0, h.Z)(),
        { hypeSquadRemoved: en } = g.Z.useExperiment({ location: 'settings' }),
        er = null == (a = (0, f.Z)()) || a,
        ei = (null == (t = (0, j.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: es, hasIgnoredUsers: ea } = (0, i.cj)([I.Z], () => ({
            hasBlockedUsers: I.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: I.Z.getIgnoredIDs().length > 0
        })),
        el = (0, m.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: eo } = (0, w.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        ec = (0, u.UQ)('SettingRendererUtils');
    return r.useMemo(
        () =>
            (0, Z.i)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: R,
                impressionSource: W,
                numOfPendingFamilyRequests: L,
                isOverlaySupported: M,
                isClipsBetaTagShowing: V === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: F,
                isKeywordFilteringEnabled: H,
                isStaff: z,
                isInappropriateConversationWarningEnabled: Y,
                isInapproprateConversationsDefaultOn: K,
                paymentsBlocked: q,
                isEligibleForQuests: X,
                showGiftNitro: J,
                isStricterMessageRequestsEnabled: et,
                hasLibraryApplication: Q,
                hasTOTPEnabled: $,
                developerMode: ee,
                isAdultUser: er,
                hasSecureFramesVerifiedUserIds: ei,
                hypeSquadRemoved: en,
                hasIgnoredUsers: ea,
                hasBlockedUsers: es,
                isAllowGameFriendDMsVisible: el,
                useRefreshedVoiceAndVideo: eo,
                isEligibleForSensitiveContentDefaults: ec
            }),
        [ee, V, es, ea, Q, ei, $, en, W, er, el, X, K, Y, H, M, z, et, L, q, F, J, R, v, eo, ec]
    );
}
function G(e) {
    let { searchResults: t } = (0, W.E)(),
        n = V(),
        r = n[e],
        i = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === r.section;
            })
        ),
        s = Object.fromEntries(
            Object.entries(i)
                .filter((e) => {
                    let [t, { parent: n, section: i }] = e;
                    return null != n && i === r.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                })
        ),
        a = new Set(),
        l = (e) => {
            let t = i[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && l(n);
        },
        o = (e) => {
            for (let t of (a.add(e),
            Object.entries(s)
                .filter((t) => {
                    let [n, r] = t;
                    return r === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in i))
        if (!a.has(e)) {
            if (null != i[e].element && null == i[e].parent) {
                a.clear();
                break;
            }
            Object.values(s).includes(e) && o(e), l(e);
        }
    return a;
}
function F(e, t, n) {
    let r = [],
        i = Y(t),
        s = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let r = e[t].parent;
                        for (; null != r && null != e[r].parent; ) r = e[r].parent;
                        if (null != r) {
                            var i;
                            let e = null != (i = n.get(r)) ? i : 0;
                            n.set(r, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && r.push({ section: a.ID.DIVIDER }),
                null != e.header &&
                    r.push({
                        section: a.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    var i, a;
                    r.push(
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t[e])),
                        (a = a = { tabPredicate: () => null == n || (e === L.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        i)
                    );
                }));
        }),
        r
    );
}
function H() {
    let e = V(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = R.b.useExperiment({ location: 'settings' }),
        i = r.useMemo(
            () =>
                U({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return r.useMemo(() => F(i, e), [i, e]);
}
function z(e) {
    let t = V(),
        n = (function () {
            let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = R.b.useExperiment({ location: 'settings' }),
                n = U({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return r.useMemo(
                () => [
                    {
                        header: M.NW.string(M.t.zkoeq6),
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
    return r.useMemo(() => F(n, t, new Set(e)), [n, t, e]);
}
function Y(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function K(e) {
    return Array.from(Y(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
