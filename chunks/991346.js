n.d(t, {
    Gj: function () {
        return H;
    },
    Pt: function () {
        return G;
    },
    VO: function () {
        return W;
    },
    ji: function () {
        return q;
    },
    q8: function () {
        return z;
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
    o = n(316496),
    c = n(211242),
    d = n(924557),
    u = n(706140),
    m = n(402234),
    g = n(319828),
    h = n(592204),
    p = n(610697),
    x = n(880257),
    f = n(631885),
    E = n(223639),
    _ = n(160913),
    C = n(725727),
    T = n(977156),
    S = n(922611),
    b = n(921157),
    I = n(667172),
    N = n(237292),
    v = n(314897),
    A = n(283595),
    j = n(699516),
    O = n(663389),
    R = n(594174),
    P = n(202527),
    D = n(413182),
    y = n(695346),
    B = n(620163),
    Z = n(295545),
    L = n(406613),
    M = n(168308),
    k = n(839469),
    w = n(726985),
    F = n(46140),
    U = n(388032);
function V(e) {
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
                settings: [w.s6.CHANGELOG, w.s6.MERCHANDISE, w.s6.HYPESQUAD, w.s6.TOWNHALL, w.s6.EXPERIMENTS, w.s6.DEVELOPER_OPTIONS, w.s6.HOTSPOT_OPTIONS, w.s6.DISMISSIBLE_CONTENT_OPTIONS, w.s6.PAYMENT_FLOW_MODALS, w.s6.REVENUE_STORYBOOK, w.s6.DESIGN_SYSTEMS, w.s6.TEXT_PLAYGROUND, w.s6.TEXT_COMPONENTS, w.s6.INTL_TESTING, w.s6.PROFILE_EFFECTS_PREVIEW_TOOL, w.s6.WEB_SETTING_TREE_TOOL, w.s6.QUEST_PREVIEW_TOOL]
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
        r = {
            header: U.intl.string(U.t.SmHCFR),
            divider: !0,
            settings: [w.s6.ACTIVITY_PRIVACY, w.s6.REGISTERED_GAMES, w.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, r);
}
function G() {
    var e, t, n, i;
    let a = (0, C.YO)().length,
        D = (0, _.U)(),
        k = (0, r.e7)([O.Z], () => O.Z.getProps().impressionSource),
        w = (0, f.gU)(),
        U = (0, M.bC)(),
        V = (0, d.Go)(),
        [G] = (0, u.cv)(V ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        H = 'useGenerateUserSettingsSections';
    (0, l.j)({
        location: H + ' auto on',
        autoTrackExposure: !0
    }),
        (0, l.j)({
            location: H + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: Y } = P.b.useExperiment({ location: 'settings' }),
        W = (0, Z.eA)({ location: 'settings' }),
        z = (0, h.Xo)({ location: 'settings' }),
        K = null !== (n = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        q = (0, N.y0)({ location: 'settings' }),
        X = (0, I.v4)({ location: 'settings' }),
        Q = (0, c.Q)(),
        J = (0, T.Zy)({ location: F.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: $ } = E.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        ee = (0, r.e7)([A.Z], () => A.Z.hasLibraryApplication()),
        et = (0, r.e7)([v.default], () => v.default.hasTOTPEnabled()),
        en = y.Sb.useSetting(),
        ei = (0, p.Z)(),
        { hypeSquadRemoved: er } = g.Z.useExperiment({ location: 'settings' }),
        es = null === (i = (0, x.Z)()) || void 0 === i || i,
        ea = (null === (t = (0, b.s)()) || void 0 === t ? void 0 : t.length) > 0,
        el = (0, S.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: eo, hasIgnoredUsers: ec } = (0, r.cj)([j.Z], () => ({
            hasBlockedUsers: j.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: j.Z.getIgnoredIDs().length > 0
        })),
        ed = (0, m.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: eu } = (0, L.F)({ location: 'SettingRendererUtils' }),
        { updatedSettingsPageEnabled: em } = (0, o.S)('SettingRendererUtils');
    return (0, B.i)({
        unseenGiftCount: a,
        showPrepaidPaymentPastDueWarning: D,
        impressionSource: k,
        numOfPendingFamilyRequests: w,
        isOverlaySupported: U,
        isClipsBetaTagShowing: G === s.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: Y,
        isUserSettingsSearchEnabled: W,
        isKeywordFilteringEnabled: z,
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
        hasSecureFramesVerifiedUserIds: ea,
        hypeSquadRemoved: er,
        stealthRemediationEnabled: el,
        hasIgnoredUsers: ec,
        hasBlockedUsers: eo,
        isAllowGameFriendDMsVisible: ed,
        useRefreshedVoiceAndVideo: eu,
        hasRedesignedActivitySharing: em
    });
}
function H(e) {
    let { searchResults: t } = (0, k.E)(),
        n = G();
    if (!(0, Z.eA)({ location: 'settings' })) return new Set();
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
function Y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = [],
        s = K(t),
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
                            return null == i || ((t = e), (n = i), (r = l), (t === w.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : l.get(e)
                    });
                }));
        }),
        r
    );
}
function W() {
    let e = G(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = D.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                V({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => Y(r, e), [r, e]);
}
function z(e) {
    let t = G(),
        n = (function () {
            let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = D.b.useExperiment({ location: 'settings' }),
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
                            w.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })(),
        r = (0, Z.c3)({ location: 'settings' });
    return i.useMemo(() => Y(n, t, r, new Set(e)), [n, t, r, e]);
}
function K(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function q(e) {
    return Array.from(K(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
