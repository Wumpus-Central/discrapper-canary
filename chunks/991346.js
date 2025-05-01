n.d(t, {
    Gj: () => G,
    Pt: () => V,
    VO: () => H,
    ji: () => Y,
    q8: () => z
}),
    n(836215),
    n(472816),
    n(794429),
    n(388685),
    n(467055),
    n(539854);
var i = n(192379),
    r = n(442837),
    s = n(704215),
    l = n(493544),
    a = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(704454),
    m = n(319828),
    p = n(592204),
    g = n(610697),
    h = n(880257),
    f = n(631885),
    b = n(223639),
    _ = n(160913),
    x = n(725727),
    E = n(977156),
    j = n(921157),
    C = n(667172),
    O = n(237292),
    S = n(314897),
    v = n(906467),
    T = n(283595),
    I = n(699516),
    N = n(663389),
    y = n(594174),
    A = n(202527),
    P = n(413182),
    R = n(695346),
    D = n(620163),
    Z = n(406613),
    w = n(168308),
    k = n(839469),
    L = n(726985),
    M = n(46140),
    B = n(388032);
function U(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = v.Z.isDeveloper,
        r = [
            {
                header: B.intl.string(B.t.cduTBA),
                settings: n ? [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.THIRD_PARTY_ACCESS, L.s6.SESSIONS, L.s6.CLIPS] : [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.AUTHORIZED_APPS, L.s6.SESSIONS, L.s6.CONNECTIONS, L.s6.CLIPS]
            },
            {
                header: B.intl.string(B.t['4uOdGh']),
                divider: !0,
                settings: [L.s6.PREMIUM, L.s6.GUILD_BOOSTING, L.s6.SUBSCRIPTIONS, L.s6.GIFT_INVENTORY, L.s6.BILLING]
            },
            {
                header: B.intl.string(B.t.f2n1TE),
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
                settings: i ? [L.s6.EXPERIMENTS, L.s6.DEVELOPER_OPTIONS, L.s6.HOTSPOT_OPTIONS, L.s6.DISMISSIBLE_CONTENT_OPTIONS, L.s6.PAYMENT_FLOW_MODALS, L.s6.REVENUE_STORYBOOK, L.s6.VIRTUAL_CURRENCY_CONFIGURATION, L.s6.DESIGN_SYSTEMS, L.s6.TEXT_PLAYGROUND, L.s6.TEXT_COMPONENTS, L.s6.INTL_TESTING, L.s6.PROFILE_EFFECTS_PREVIEW_TOOL, L.s6.NAMEPLATES_PREVIEW_TOOL, L.s6.WEB_SETTING_TREE_TOOL, L.s6.QUEST_PREVIEW_TOOL, L.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG] : []
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
            header: B.intl.string(B.t.SmHCFR),
            divider: !0,
            settings: [L.s6.ACTIVITY_PRIVACY, L.s6.REGISTERED_GAMES, L.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, s);
}
function V() {
    var e, t, n, l;
    let v = (0, x.YO)().length,
        P = (0, _.U)(),
        k = (0, r.e7)([N.Z], () => N.Z.getProps().impressionSource),
        L = (0, f.gU)(),
        B = (0, w.bC)(),
        U = (0, c.Go)(),
        [V] = (0, d.cv)(U ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        G = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: G + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: G + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: F } = A.b.useExperiment({ location: 'settings' }),
        H = (0, p.Xo)({ location: 'settings' }),
        z = null != (n = null == (e = y.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        W = (0, O.y0)({ location: 'settings' }),
        Y = (0, C.v4)({ location: 'settings' }),
        K = (0, o.Q)(),
        q = (0, E.Zy)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: X } = b.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, r.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        J = (0, r.e7)([S.default], () => S.default.hasTOTPEnabled()),
        $ = R.Sb.useSetting(),
        ee = (0, g.Z)(),
        { hypeSquadRemoved: et } = m.Z.useExperiment({ location: 'settings' }),
        en = null == (l = (0, h.Z)()) || l,
        ei = (null == (t = (0, j.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: er, hasIgnoredUsers: es } = (0, r.cj)([I.Z], () => ({
            hasBlockedUsers: I.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: I.Z.getIgnoredIDs().length > 0
        })),
        { showRefreshedSettings: el } = (0, Z.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        ea = (0, u.UQ)('SettingRendererUtils');
    return i.useMemo(
        () =>
            (0, D.i)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: P,
                impressionSource: k,
                numOfPendingFamilyRequests: L,
                isOverlaySupported: B,
                isClipsBetaTagShowing: V === s.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: F,
                isKeywordFilteringEnabled: H,
                isStaff: z,
                isInappropriateConversationWarningEnabled: W,
                isInapproprateConversationsDefaultOn: Y,
                paymentsBlocked: K,
                isEligibleForQuests: q,
                showGiftNitro: X,
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
                isEligibleForSensitiveContentDefaults: ea
            }),
        [$, V, er, es, Q, ei, J, et, k, en, q, Y, W, H, B, z, ee, L, K, F, X, P, v, el, ea]
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
function F(e, t, n) {
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
                        (l = l = { tabPredicate: () => null == n || (e === L.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
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
function z(e) {
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
                        header: B.intl.string(B.t.zkoeq6),
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
function W(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function Y(e) {
    return Array.from(W(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
