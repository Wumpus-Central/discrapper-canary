n.d(t, {
    Gj: function () {
        return U;
    },
    Pt: function () {
        return F;
    },
    VO: function () {
        return G;
    },
    ji: function () {
        return W;
    },
    q8: function () {
        return H;
    }
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    s = n(442837),
    r = n(704215),
    a = n(493544),
    l = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(319828),
    m = n(592204),
    g = n(610697),
    h = n(880257),
    p = n(631885),
    x = n(223639),
    f = n(160913),
    _ = n(725727),
    E = n(977156),
    C = n(922611),
    T = n(921157),
    S = n(237292),
    b = n(314897),
    I = n(283595),
    N = n(699516),
    v = n(663389),
    A = n(594174),
    j = n(202527),
    R = n(187819),
    O = n(413182),
    P = n(695346),
    y = n(620163),
    D = n(295545),
    B = n(168308),
    Z = n(839469),
    L = n(726985),
    M = n(46140),
    k = n(388032);
function w(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: k.intl.string(k.t.cduTBA),
                settings: n ? [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.PRIVACY_AND_SAFETY, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.THIRD_PARTY_ACCESS, L.s6.SESSIONS, L.s6.CLIPS, L.s6.FRIEND_REQUESTS] : [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.PRIVACY_AND_SAFETY, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.AUTHORIZED_APPS, L.s6.SESSIONS, L.s6.CONNECTIONS, L.s6.CLIPS, L.s6.FRIEND_REQUESTS]
            },
            {
                header: k.intl.string(k.t['4uOdGh']),
                divider: !0,
                settings: [L.s6.PREMIUM, L.s6.GUILD_BOOSTING, L.s6.SUBSCRIPTIONS, L.s6.GIFT_INVENTORY, L.s6.BILLING]
            },
            {
                header: k.intl.string(k.t.f2n1TE),
                divider: !0,
                settings: [L.s6.APPEARANCE, L.s6.ACCESSIBILITY, L.s6.VOICE_AND_VIDEO, L.s6.POGGERMODE, L.s6.CHAT, L.s6.NOTIFICATIONS, L.s6.KEYBINDS, L.s6.LANGUAGE, L.s6.WINDOW_SETTINGS, L.s6.LINUX_SETTINGS, L.s6.STREAMER_MODE, L.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [L.s6.CHANGELOG, L.s6.MERCHANDISE, L.s6.HYPESQUAD, L.s6.TOWNHALL, L.s6.EXPERIMENTS, L.s6.DEVELOPER_OPTIONS, L.s6.HOTSPOT_OPTIONS, L.s6.DISMISSIBLE_CONTENT_OPTIONS, L.s6.PAYMENT_FLOW_MODALS, L.s6.REVENUE_STORYBOOK, L.s6.DESIGN_SYSTEMS, L.s6.TEXT_PLAYGROUND, L.s6.TEXT_COMPONENTS, L.s6.INTL_TESTING, L.s6.PROFILE_EFFECTS_PREVIEW_TOOL, L.s6.WEB_SETTING_TREE_TOOL, L.s6.QUEST_PREVIEW_TOOL]
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
            header: k.intl.string(k.t.SmHCFR),
            divider: !0,
            settings: [L.s6.ACTIVITY_PRIVACY, L.s6.REGISTERED_GAMES, L.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function F() {
    var e, t, n, i;
    let a = (0, _.YO)().length,
        O = (0, f.U)(),
        Z = (0, s.e7)([v.Z], () => v.Z.getProps().impressionSource),
        L = (0, p.gU)(),
        k = (0, B.bC)(),
        w = (0, c.Go)(),
        [F] = (0, d.cv)(w ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        U = 'useGenerateUserSettingsSections';
    (0, l.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, l.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: V } = j.b.useExperiment({ location: 'settings' }),
        G = (0, D.eA)({ location: 'settings' }),
        H = (0, m.Xo)({ location: 'settings' }),
        Y = null !== (n = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        W = (0, S.y0)({ location: 'settings' }),
        z = (0, o.Q)(),
        K = (0, E.Zy)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: q } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, s.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        X = (0, s.e7)([b.default], () => b.default.hasTOTPEnabled()),
        J = P.Sb.useSetting(),
        $ = (0, g.Z)(),
        ee = (0, R._p)({ location: 'settings-renderer-utils-web' }),
        { hypeSquadRemoved: et } = u.Z.useExperiment({ location: 'settings' }),
        en = null === (i = (0, h.Z)()) || void 0 === i || i,
        ei = (null === (t = (0, T.s)()) || void 0 === t ? void 0 : t.length) > 0,
        es = (0, C.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: er, hasIgnoredUsers: ea } = (0, s.cj)([N.Z], () => ({
            hasBlockedUsers: N.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: N.Z.getIgnoredIDs().length > 0
        }));
    return (0, y.i)({
        unseenGiftCount: a,
        showPrepaidPaymentPastDueWarning: O,
        impressionSource: Z,
        numOfPendingFamilyRequests: L,
        isOverlaySupported: k,
        isClipsBetaTagShowing: F === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: V,
        isUserSettingsSearchEnabled: G,
        isKeywordFilteringEnabled: H,
        isStaff: Y,
        isInappropriateConversationWarningEnabled: W,
        paymentsBlocked: z,
        isEligibleForQuests: K,
        showGiftNitro: q,
        isStricterMessageRequestsEnabled: $,
        hasLibraryApplication: Q,
        hasTOTPEnabled: X,
        developerMode: J,
        isSafetySettingsV2Enabled: ee,
        isAdultUser: en,
        hasSecureFramesVerifiedUserIds: ei,
        hypeSquadRemoved: et,
        stealthRemediationEnabled: es,
        hasIgnoredUsers: ea,
        hasBlockedUsers: er
    });
}
function U(e) {
    let { searchResults: t } = (0, Z.E)(),
        n = F();
    if (!(0, D.eA)({ location: 'settings' })) return new Set();
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
        a = new Set(),
        l = (e) => {
            let t = s[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && l(n);
        },
        o = (e) => {
            for (let t of (a.add(e),
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
        if (!a.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                a.clear();
                break;
            }
            Object.values(r).includes(e) && o(e), l(e);
        }
    return a;
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = [],
        r = Y(t),
        l = (function (e, t) {
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
                (!0 === e.divider && s.push({ section: a.ID.DIVIDER }),
                null != e.header &&
                    s.push({
                        section: a.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    s.push({
                        ...t[e],
                        tabPredicate: () => {
                            var t, n, s;
                            return null == i || ((t = e), (n = i), (s = l), (t === L.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : l.get(e)
                    });
                }));
        }),
        s
    );
}
function G() {
    let e = F(),
        { shouldMergeGameSettings: t } = j.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = O.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                w({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => V(s, e), [s, e]);
}
function H(e) {
    let t = F(),
        n = (function () {
            let { shouldMergeGameSettings: e } = j.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = O.b.useExperiment({ location: 'settings' }),
                n = w({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: k.intl.string(k.t.zkoeq6),
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
        })(),
        s = (0, D.c3)({ location: 'settings' });
    return i.useMemo(() => V(n, t, s, new Set(e)), [n, t, s, e]);
}
function Y(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function W(e) {
    return Array.from(Y(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
