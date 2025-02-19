n.d(t, {
    Gj: () => V,
    Pt: () => U,
    VO: () => F,
    ji: () => Y,
    q8: () => H
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
    u = n(402234),
    m = n(319828),
    g = n(592204),
    p = n(610697),
    h = n(880257),
    f = n(631885),
    N = n(223639),
    x = n(160913),
    b = n(725727),
    _ = n(977156),
    E = n(922611),
    j = n(921157),
    C = n(667172),
    O = n(237292),
    v = n(314897),
    S = n(283595),
    T = n(699516),
    I = n(663389),
    y = n(594174),
    A = n(202527),
    P = n(413182),
    R = n(695346),
    D = n(620163),
    Z = n(406613),
    w = n(168308),
    k = n(839469),
    W = n(726985),
    L = n(46140),
    B = n(388032);
function M(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = [
            {
                header: B.NW.string(B.t.cduTBA),
                settings: n ? [W.s6.ACCOUNT, W.s6.GAMES, W.s6.PROFILE_CUSTOMIZATION, W.s6.CONTENT_SOCIAL, W.s6.DATA_PRIVACY, W.s6.PRIVACY_FAMILY_CENTER, W.s6.THIRD_PARTY_ACCESS, W.s6.SESSIONS, W.s6.CLIPS] : [W.s6.ACCOUNT, W.s6.GAMES, W.s6.PROFILE_CUSTOMIZATION, W.s6.CONTENT_SOCIAL, W.s6.DATA_PRIVACY, W.s6.PRIVACY_FAMILY_CENTER, W.s6.AUTHORIZED_APPS, W.s6.SESSIONS, W.s6.CONNECTIONS, W.s6.CLIPS]
            },
            {
                header: B.NW.string(B.t['4uOdGh']),
                divider: !0,
                settings: [W.s6.PREMIUM, W.s6.GUILD_BOOSTING, W.s6.SUBSCRIPTIONS, W.s6.GIFT_INVENTORY, W.s6.BILLING]
            },
            {
                header: B.NW.string(B.t.f2n1TE),
                divider: !0,
                settings: [W.s6.APPEARANCE, W.s6.ACCESSIBILITY, W.s6.VOICE_AND_VIDEO, W.s6.POGGERMODE, W.s6.CHAT, W.s6.NOTIFICATIONS, W.s6.KEYBINDS, W.s6.LANGUAGE, W.s6.WINDOW_SETTINGS, W.s6.LINUX_SETTINGS, W.s6.STREAMER_MODE, W.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [W.s6.CHANGELOG, W.s6.MERCHANDISE, W.s6.HYPESQUAD, W.s6.TOWNHALL, W.s6.EXPERIMENTS, W.s6.DEVELOPER_OPTIONS, W.s6.HOTSPOT_OPTIONS, W.s6.DISMISSIBLE_CONTENT_OPTIONS, W.s6.PAYMENT_FLOW_MODALS, W.s6.REVENUE_STORYBOOK, W.s6.VIRTUAL_CURRENCY_CONFIGURATION, W.s6.DESIGN_SYSTEMS, W.s6.TEXT_PLAYGROUND, W.s6.TEXT_COMPONENTS, W.s6.INTL_TESTING, W.s6.PROFILE_EFFECTS_PREVIEW_TOOL, W.s6.NAMEPLATES_PREVIEW_TOOL, W.s6.WEB_SETTING_TREE_TOOL, W.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [W.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [W.s6.SOCIAL_LINKS, W.s6.CLIENT_DEBUG_INFO]
            }
        ],
        i = {
            header: B.NW.string(B.t.SmHCFR),
            divider: !0,
            settings: [W.s6.ACTIVITY_PRIVACY, W.s6.REGISTERED_GAMES, W.s6.OVERLAY]
        };
    return t ? r : r.toSpliced(3, 0, i);
}
function U() {
    var e, t, n, a;
    let P = (0, b.YO)().length,
        k = (0, x.U)(),
        W = (0, i.e7)([I.Z], () => I.Z.getProps().impressionSource),
        B = (0, f.gU)(),
        M = (0, w.bC)(),
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
    let { shouldMergeGameSettings: F } = A.b.useExperiment({ location: 'settings' }),
        H = (0, g.Xo)({ location: 'settings' }),
        z = null !== (n = null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        Y = (0, O.y0)({ location: 'settings' }),
        K = (0, C.v4)({ location: 'settings' }),
        q = (0, o.Q)(),
        X = (0, _.Zy)({ location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: J } = N.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, i.e7)([S.Z], () => S.Z.hasLibraryApplication()),
        $ = (0, i.e7)([v.default], () => v.default.hasTOTPEnabled()),
        ee = R.Sb.useSetting(),
        et = (0, p.Z)(),
        { hypeSquadRemoved: en } = m.Z.useExperiment({ location: 'settings' }),
        er = null === (a = (0, h.Z)()) || void 0 === a || a,
        ei = (null === (t = (0, j.s)()) || void 0 === t ? void 0 : t.length) > 0,
        es = (0, E.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: ea, hasIgnoredUsers: el } = (0, i.cj)([T.Z], () => ({
            hasBlockedUsers: T.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: T.Z.getIgnoredIDs().length > 0
        })),
        eo = (0, u.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: ec } = (0, Z.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        });
    return r.useMemo(
        () =>
            (0, D.i)({
                unseenGiftCount: P,
                showPrepaidPaymentPastDueWarning: k,
                impressionSource: W,
                numOfPendingFamilyRequests: B,
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
                stealthRemediationEnabled: es,
                hasIgnoredUsers: el,
                hasBlockedUsers: ea,
                isAllowGameFriendDMsVisible: eo,
                useRefreshedVoiceAndVideo: ec
            }),
        [ee, V, ea, el, Q, ei, $, en, W, er, eo, X, K, Y, H, M, z, et, B, q, F, J, k, es, P, ec]
    );
}
function V(e) {
    let { searchResults: t } = (0, k.E)(),
        n = U(),
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
function G(e, t, n) {
    let r = [],
        i = z(t),
        s = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let r = e[t].parent;
                        for (; null != r && null != e[r].parent; ) r = e[r].parent;
                        if (null != r) {
                            var i;
                            let e = null !== (i = n.get(r)) && void 0 !== i ? i : 0;
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
                        (a = a = { tabPredicate: () => null == n || (e === W.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(e) || n.has(e) }),
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
function F() {
    let e = U(),
        { shouldMergeGameSettings: t } = A.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = P.b.useExperiment({ location: 'settings' }),
        i = r.useMemo(
            () =>
                M({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return r.useMemo(() => G(i, e), [i, e]);
}
function H(e) {
    let t = U(),
        n = (function () {
            let { shouldMergeGameSettings: e } = A.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = P.b.useExperiment({ location: 'settings' }),
                n = M({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return r.useMemo(
                () => [
                    {
                        header: B.NW.string(B.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            W.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return r.useMemo(() => G(n, t, new Set(e)), [n, t, e]);
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
