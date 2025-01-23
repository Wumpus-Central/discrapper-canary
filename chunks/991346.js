n.d(t, {
    Gj: function () {
        return G;
    },
    Pt: function () {
        return V;
    },
    VO: function () {
        return Y;
    },
    ji: function () {
        return K;
    },
    q8: function () {
        return W;
    }
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(442837),
    s = n(704215),
    a = n(493544),
    l = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(402234),
    m = n(319828),
    g = n(592204),
    h = n(610697),
    p = n(880257),
    x = n(631885),
    f = n(223639),
    E = n(160913),
    _ = n(725727),
    C = n(977156),
    T = n(922611),
    S = n(921157),
    b = n(667172),
    I = n(237292),
    N = n(314897),
    v = n(283595),
    A = n(699516),
    j = n(663389),
    O = n(594174),
    R = n(202527),
    P = n(413182),
    D = n(695346),
    y = n(620163),
    B = n(295545),
    Z = n(406613),
    L = n(168308),
    M = n(839469),
    k = n(726985),
    w = n(46140),
    F = n(388032);
function U(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: F.intl.string(F.t.cduTBA),
                settings: n ? [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.THIRD_PARTY_ACCESS, k.s6.SESSIONS, k.s6.CLIPS] : [k.s6.ACCOUNT, k.s6.GAMES, k.s6.PROFILE_CUSTOMIZATION, k.s6.CONTENT_SOCIAL, k.s6.DATA_PRIVACY, k.s6.PRIVACY_FAMILY_CENTER, k.s6.AUTHORIZED_APPS, k.s6.SESSIONS, k.s6.CONNECTIONS, k.s6.CLIPS]
            },
            {
                header: F.intl.string(F.t['4uOdGh']),
                divider: !0,
                settings: [k.s6.PREMIUM, k.s6.GUILD_BOOSTING, k.s6.SUBSCRIPTIONS, k.s6.GIFT_INVENTORY, k.s6.BILLING]
            },
            {
                header: F.intl.string(F.t.f2n1TE),
                divider: !0,
                settings: [k.s6.APPEARANCE, k.s6.ACCESSIBILITY, k.s6.VOICE_AND_VIDEO, k.s6.POGGERMODE, k.s6.CHAT, k.s6.NOTIFICATIONS, k.s6.KEYBINDS, k.s6.LANGUAGE, k.s6.WINDOW_SETTINGS, k.s6.LINUX_SETTINGS, k.s6.STREAMER_MODE, k.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [k.s6.CHANGELOG, k.s6.MERCHANDISE, k.s6.HYPESQUAD, k.s6.TOWNHALL, k.s6.EXPERIMENTS, k.s6.DEVELOPER_OPTIONS, k.s6.HOTSPOT_OPTIONS, k.s6.DISMISSIBLE_CONTENT_OPTIONS, k.s6.PAYMENT_FLOW_MODALS, k.s6.REVENUE_STORYBOOK, k.s6.DESIGN_SYSTEMS, k.s6.TEXT_PLAYGROUND, k.s6.TEXT_COMPONENTS, k.s6.INTL_TESTING, k.s6.PROFILE_EFFECTS_PREVIEW_TOOL, k.s6.WEB_SETTING_TREE_TOOL, k.s6.QUEST_PREVIEW_TOOL]
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
        r = {
            header: F.intl.string(F.t.SmHCFR),
            divider: !0,
            settings: [k.s6.ACTIVITY_PRIVACY, k.s6.REGISTERED_GAMES, k.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, r);
}
function V() {
    var e, t, n, i;
    let a = (0, _.YO)().length,
        P = (0, E.U)(),
        M = (0, r.e7)([j.Z], () => j.Z.getProps().impressionSource),
        k = (0, x.gU)(),
        F = (0, L.bC)(),
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
    let { shouldMergeGameSettings: H } = R.b.useExperiment({ location: 'settings' }),
        Y = (0, B.eA)({ location: 'settings' }),
        W = (0, g.Xo)({ location: 'settings' }),
        z = null !== (n = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        K = (0, I.y0)({ location: 'settings' }),
        q = (0, b.v4)({ location: 'settings' }),
        Q = (0, o.Q)(),
        X = (0, C.Zy)({ location: w.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: J } = f.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        $ = (0, r.e7)([v.Z], () => v.Z.hasLibraryApplication()),
        ee = (0, r.e7)([N.default], () => N.default.hasTOTPEnabled()),
        et = D.Sb.useSetting(),
        en = (0, h.Z)(),
        { hypeSquadRemoved: ei } = m.Z.useExperiment({ location: 'settings' }),
        er = null === (i = (0, p.Z)()) || void 0 === i || i,
        es = (null === (t = (0, S.s)()) || void 0 === t ? void 0 : t.length) > 0,
        ea = (0, T.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: el, hasIgnoredUsers: eo } = (0, r.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0
        })),
        ec = (0, u.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: ed } = (0, Z.F)({ location: 'SettingRendererUtils' });
    return (0, y.i)({
        unseenGiftCount: a,
        showPrepaidPaymentPastDueWarning: P,
        impressionSource: M,
        numOfPendingFamilyRequests: k,
        isOverlaySupported: F,
        isClipsBetaTagShowing: V === s.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: H,
        isUserSettingsSearchEnabled: Y,
        isKeywordFilteringEnabled: W,
        isStaff: z,
        isInappropriateConversationWarningEnabled: K,
        isInapproprateConversationsDefaultOn: q,
        paymentsBlocked: Q,
        isEligibleForQuests: X,
        showGiftNitro: J,
        isStricterMessageRequestsEnabled: en,
        hasLibraryApplication: $,
        hasTOTPEnabled: ee,
        developerMode: et,
        isAdultUser: er,
        hasSecureFramesVerifiedUserIds: es,
        hypeSquadRemoved: ei,
        stealthRemediationEnabled: ea,
        hasIgnoredUsers: eo,
        hasBlockedUsers: el,
        isAllowGameFriendDMsVisible: ec,
        useRefreshedVoiceAndVideo: ed
    });
}
function G(e) {
    let { searchResults: t } = (0, M.E)(),
        n = V();
    if (!(0, B.eA)({ location: 'settings' })) return new Set();
    let i = n[e],
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
            Object.values(s).includes(e) && o(e), l(e);
        }
    return a;
}
function H(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = [],
        s = z(t),
        l = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let i = e[t].parent;
                        for (; null != i && null != e[i].parent; ) i = e[i].parent;
                        if (null != i) {
                            var r;
                            let e = null !== (r = n.get(i)) && void 0 !== r ? r : 0;
                            n.set(i, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != i ? i : []).filter((e) => s.has(e))));
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
                    r.push({
                        ...t[e],
                        tabPredicate: () => {
                            var t, n, r;
                            return null == i || ((t = e), (n = i), (r = l), (t === k.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : l.get(e)
                    });
                }));
        }),
        r
    );
}
function Y() {
    let e = V(),
        { shouldMergeGameSettings: t } = R.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = P.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                U({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => H(r, e), [r, e]);
}
function W(e) {
    let t = V(),
        n = (function () {
            let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = P.b.useExperiment({ location: 'settings' }),
                n = U({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: F.intl.string(F.t.zkoeq6),
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
        })(),
        r = (0, B.c3)({ location: 'settings' });
    return i.useMemo(() => H(n, t, r, new Set(e)), [n, t, r, e]);
}
function z(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function K(e) {
    return Array.from(z(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
