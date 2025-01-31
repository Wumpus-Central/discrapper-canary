n.d(t, {
    Gj: () => H,
    Pt: () => F,
    VO: () => Y,
    ji: () => X,
    q8: () => W
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    s = n(442837),
    r = n(704215),
    l = n(493544),
    a = n(634894),
    o = n(316496),
    c = n(211242),
    d = n(924557),
    u = n(706140),
    m = n(402234),
    h = n(319828),
    g = n(592204),
    _ = n(610697),
    x = n(880257),
    p = n(631885),
    E = n(223639),
    C = n(160913),
    f = n(725727),
    T = n(977156),
    N = n(922611),
    I = n(921157),
    S = n(667172),
    b = n(237292),
    v = n(314897),
    j = n(283595),
    A = n(699516),
    O = n(663389),
    R = n(594174),
    P = n(202527),
    D = n(413182),
    y = n(695346),
    Z = n(620163),
    L = n(295545),
    k = n(406613),
    B = n(168308),
    M = n(839469),
    w = n(726985),
    V = n(46140),
    U = n(388032);
function G(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: U.intl.string(U.t.cduTBA),
                settings: n ? [w.s6.ACCOUNT, w.s6.GAMES, w.s6.PROFILE_CUSTOMIZATION, w.s6.CONTENT_SOCIAL, w.s6.DATA_PRIVACY, w.s6.PRIVACY_FAMILY_CENTER, w.s6.THIRD_PARTY_ACCESS, w.s6.SESSIONS, w.s6.CLIPS] : [w.s6.ACCOUNT, w.s6.GAMES, w.s6.PROFILE_CUSTOMIZATION, w.s6.CONTENT_SOCIAL, w.s6.DATA_PRIVACY, w.s6.PRIVACY_FAMILY_CENTER, w.s6.AUTHORIZED_APPS, w.s6.SESSIONS, w.s6.CONNECTIONS, w.s6.CLIPS]
            },
            {
                header: U.intl.string(U.t['4uOdGh']),
                divider: !0,
                settings: [w.s6.PREMIUM, w.s6.GUILD_BOOSTING, w.s6.SUBSCRIPTIONS, w.s6.GIFT_INVENTORY, w.s6.BILLING]
            },
            {
                header: U.intl.string(U.t.f2n1TE),
                divider: !0,
                settings: [w.s6.APPEARANCE, w.s6.ACCESSIBILITY, w.s6.VOICE_AND_VIDEO, w.s6.POGGERMODE, w.s6.CHAT, w.s6.NOTIFICATIONS, w.s6.KEYBINDS, w.s6.LANGUAGE, w.s6.WINDOW_SETTINGS, w.s6.LINUX_SETTINGS, w.s6.STREAMER_MODE, w.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [w.s6.CHANGELOG, w.s6.MERCHANDISE, w.s6.HYPESQUAD, w.s6.TOWNHALL, w.s6.EXPERIMENTS, w.s6.DEVELOPER_OPTIONS, w.s6.HOTSPOT_OPTIONS, w.s6.DISMISSIBLE_CONTENT_OPTIONS, w.s6.PAYMENT_FLOW_MODALS, w.s6.REVENUE_STORYBOOK, w.s6.DESIGN_SYSTEMS, w.s6.TEXT_PLAYGROUND, w.s6.TEXT_COMPONENTS, w.s6.INTL_TESTING, w.s6.PROFILE_EFFECTS_PREVIEW_TOOL, w.s6.NAME_PLATE_TOOL, w.s6.WEB_SETTING_TREE_TOOL, w.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [w.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [w.s6.SOCIAL_LINKS, w.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: U.intl.string(U.t.SmHCFR),
            divider: !0,
            settings: [w.s6.ACTIVITY_PRIVACY, w.s6.REGISTERED_GAMES, w.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function F() {
    var e, t, n, i;
    let l = (0, f.YO)().length,
        D = (0, C.U)(),
        M = (0, s.e7)([O.Z], () => O.Z.getProps().impressionSource),
        w = (0, p.gU)(),
        U = (0, B.bC)(),
        G = (0, d.Go)(),
        [F] = (0, u.cv)(G ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        H = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: H + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: H + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: z } = P.b.useExperiment({ location: 'settings' }),
        Y = (0, L.eA)({ location: 'settings' }),
        W = (0, g.Xo)({ location: 'settings' }),
        K = null !== (n = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        X = (0, b.y0)({ location: 'settings' }),
        q = (0, S.v4)({ location: 'settings' }),
        J = (0, c.Q)(),
        Q = (0, T.Zy)({ location: V.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: $ } = E.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        ee = (0, s.e7)([j.Z], () => j.Z.hasLibraryApplication()),
        et = (0, s.e7)([v.default], () => v.default.hasTOTPEnabled()),
        en = y.Sb.useSetting(),
        ei = (0, _.Z)(),
        { hypeSquadRemoved: es } = h.Z.useExperiment({ location: 'settings' }),
        er = null === (i = (0, x.Z)()) || void 0 === i || i,
        el = (null === (t = (0, I.s)()) || void 0 === t ? void 0 : t.length) > 0,
        ea = (0, N.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: eo, hasIgnoredUsers: ec } = (0, s.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0
        })),
        ed = (0, m.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: eu } = (0, k.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        { updatedSettingsPageEnabled: em } = (0, o.S)('SettingRendererUtils');
    return (0, Z.i)({
        unseenGiftCount: l,
        showPrepaidPaymentPastDueWarning: D,
        impressionSource: M,
        numOfPendingFamilyRequests: w,
        isOverlaySupported: U,
        isClipsBetaTagShowing: F === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: z,
        isUserSettingsSearchEnabled: Y,
        isKeywordFilteringEnabled: W,
        isStaff: K,
        isInappropriateConversationWarningEnabled: X,
        isInapproprateConversationsDefaultOn: q,
        paymentsBlocked: J,
        isEligibleForQuests: Q,
        showGiftNitro: $,
        isStricterMessageRequestsEnabled: ei,
        hasLibraryApplication: ee,
        hasTOTPEnabled: et,
        developerMode: en,
        isAdultUser: er,
        hasSecureFramesVerifiedUserIds: el,
        hypeSquadRemoved: es,
        stealthRemediationEnabled: ea,
        hasIgnoredUsers: ec,
        hasBlockedUsers: eo,
        isAllowGameFriendDMsVisible: ed,
        useRefreshedVoiceAndVideo: eu,
        hasRedesignedActivitySharing: em
    });
}
function H(e) {
    let { searchResults: t } = (0, M.E)(),
        n = F();
    if (!(0, L.eA)({ location: 'settings' })) return new Set();
    let i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            })
        ),
        r = Object.fromEntries(
            Object.entries(s)
                .filter((e) => {
                    let [t, { parent: n, section: s }] = e;
                    return null != n && s === i.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                })
        ),
        l = new Set(),
        a = (e) => {
            let t = s[e];
            if (null == t) return;
            l.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (l.add(e),
            Object.entries(r)
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
    for (let e of t.filter((e) => e in s))
        if (!l.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                l.clear();
                break;
            }
            Object.values(r).includes(e) && o(e), a(e);
        }
    return l;
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = [],
        r = K(t),
        a = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let i = e[t].parent;
                        for (; null != i && null != e[i].parent; ) i = e[i].parent;
                        if (null != i) {
                            var s;
                            let e = null !== (s = n.get(i)) && void 0 !== s ? s : 0;
                            n.set(i, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != i ? i : []).filter((e) => r.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && s.push({ section: l.ID.DIVIDER }),
                null != e.header &&
                    s.push({
                        section: l.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    s.push({
                        ...t[e],
                        tabPredicate: () => null == i || (e === w.s6.SEARCH_NO_RESULTS && 0 === i.size) || a.has(e) || i.has(e),
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : a.get(e)
                    });
                }));
        }),
        s
    );
}
function Y() {
    let e = F(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = D.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                G({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => z(s, e), [s, e]);
}
function W(e) {
    let t = F(),
        n = (function () {
            let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = D.b.useExperiment({ location: 'settings' }),
                n = G({
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
                            w.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })(),
        s = (0, L.c3)({ location: 'settings' });
    return i.useMemo(() => z(n, t, s, new Set(e)), [n, t, s, e]);
}
function K(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function X(e) {
    return Array.from(K(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
