n.d(t, {
    Gj: function () {
        return U;
    },
    Pt: function () {
        return w;
    },
    VO: function () {
        return G;
    },
    ji: function () {
        return z;
    },
    q8: function () {
        return Y;
    }
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
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(319828),
    m = n(592204),
    h = n(610697),
    g = n(880257),
    p = n(631885),
    x = n(223639),
    S = n(160913),
    T = n(725727),
    E = n(977156),
    C = n(922611),
    _ = n(921157),
    f = n(237292),
    I = n(314897),
    N = n(283595),
    A = n(699516),
    b = n(663389),
    v = n(594174),
    j = n(202527),
    O = n(187819),
    R = n(413182),
    P = n(695346),
    D = n(620163),
    y = n(295545),
    B = n(168308),
    L = n(839469),
    Z = n(726985),
    F = n(46140),
    M = n(388032);
function k(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: M.intl.string(M.t.cduTBA),
                settings: n ? [Z.s6.ACCOUNT, Z.s6.GAMES, Z.s6.PROFILE_CUSTOMIZATION, Z.s6.PRIVACY_AND_SAFETY, Z.s6.CONTENT_SOCIAL, Z.s6.DATA_PRIVACY, Z.s6.PRIVACY_FAMILY_CENTER, Z.s6.THIRD_PARTY_ACCESS, Z.s6.SESSIONS, Z.s6.CLIPS, Z.s6.FRIEND_REQUESTS] : [Z.s6.ACCOUNT, Z.s6.GAMES, Z.s6.PROFILE_CUSTOMIZATION, Z.s6.PRIVACY_AND_SAFETY, Z.s6.CONTENT_SOCIAL, Z.s6.DATA_PRIVACY, Z.s6.PRIVACY_FAMILY_CENTER, Z.s6.AUTHORIZED_APPS, Z.s6.SESSIONS, Z.s6.CONNECTIONS, Z.s6.CLIPS, Z.s6.FRIEND_REQUESTS]
            },
            {
                header: M.intl.string(M.t['4uOdGh']),
                divider: !0,
                settings: [Z.s6.PREMIUM, Z.s6.GUILD_BOOSTING, Z.s6.SUBSCRIPTIONS, Z.s6.GIFT_INVENTORY, Z.s6.BILLING]
            },
            {
                header: M.intl.string(M.t.f2n1TE),
                divider: !0,
                settings: [Z.s6.APPEARANCE, Z.s6.ACCESSIBILITY, Z.s6.VOICE_AND_VIDEO, Z.s6.POGGERMODE, Z.s6.CHAT, Z.s6.NOTIFICATIONS, Z.s6.KEYBINDS, Z.s6.LANGUAGE, Z.s6.WINDOW_SETTINGS, Z.s6.LINUX_SETTINGS, Z.s6.STREAMER_MODE, Z.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [Z.s6.CHANGELOG, Z.s6.MERCHANDISE, Z.s6.HYPESQUAD, Z.s6.TOWNHALL, Z.s6.EXPERIMENTS, Z.s6.DEVELOPER_OPTIONS, Z.s6.HOTSPOT_OPTIONS, Z.s6.DISMISSIBLE_CONTENT_OPTIONS, Z.s6.PAYMENT_FLOW_MODALS, Z.s6.REVENUE_STORYBOOK, Z.s6.DESIGN_SYSTEMS, Z.s6.TEXT_PLAYGROUND, Z.s6.TEXT_COMPONENTS, Z.s6.INTL_TESTING, Z.s6.PROFILE_EFFECTS_PREVIEW_TOOL, Z.s6.WEB_SETTING_TREE_TOOL, Z.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [Z.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [Z.s6.SOCIAL_LINKS, Z.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: M.intl.string(M.t.SmHCFR),
            divider: !0,
            settings: [Z.s6.ACTIVITY_PRIVACY, Z.s6.REGISTERED_GAMES, Z.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function w() {
    var e, t, n, i;
    let l = (0, T.YO)().length,
        R = (0, S.U)(),
        L = (0, s.e7)([b.Z], () => b.Z.getProps().impressionSource),
        Z = (0, p.gU)(),
        M = (0, B.bC)(),
        k = (0, c.Go)(),
        [w] = (0, d.cv)(k ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        U = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: V } = j.b.useExperiment({ location: 'settings' }),
        G = (0, y.eA)({ location: 'settings' }),
        Y = (0, m.Xo)({ location: 'settings' }),
        H = null !== (n = null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        z = (0, f.y0)({ location: 'settings' }),
        W = (0, o.Q)(),
        K = (0, E.Zy)({ location: F.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: q } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        X = (0, s.e7)([N.Z], () => N.Z.hasLibraryApplication()),
        Q = (0, s.e7)([I.default], () => I.default.hasTOTPEnabled()),
        J = P.Sb.useSetting(),
        $ = (0, h.Z)(),
        ee = (0, O._p)({ location: 'settings-renderer-utils-web' }),
        { hypeSquadRemoved: et } = u.Z.useExperiment({ location: 'settings' }),
        en = null === (i = (0, g.Z)()) || void 0 === i || i,
        ei = (null === (t = (0, _.s)()) || void 0 === t ? void 0 : t.length) > 0,
        es = (0, C.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: er, hasIgnoredUsers: el } = (0, s.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0
        }));
    return (0, D.i)({
        unseenGiftCount: l,
        showPrepaidPaymentPastDueWarning: R,
        impressionSource: L,
        numOfPendingFamilyRequests: Z,
        isOverlaySupported: M,
        isClipsBetaTagShowing: w === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: V,
        isUserSettingsSearchEnabled: G,
        isKeywordFilteringEnabled: Y,
        isStaff: H,
        isInappropriateConversationWarningEnabled: z,
        paymentsBlocked: W,
        isEligibleForQuests: K,
        showGiftNitro: q,
        isStricterMessageRequestsEnabled: $,
        hasLibraryApplication: X,
        hasTOTPEnabled: Q,
        developerMode: J,
        isSafetySettingsV2Enabled: ee,
        isAdultUser: en,
        hasSecureFramesVerifiedUserIds: ei,
        hypeSquadRemoved: et,
        stealthRemediationEnabled: es,
        hasIgnoredUsers: el,
        hasBlockedUsers: er
    });
}
function U(e) {
    let { searchResults: t } = (0, L.E)(),
        n = w();
    if (!(0, y.eA)({ location: 'settings' })) return new Set();
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
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = [],
        r = H(t),
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
                        tabPredicate: () => {
                            var t, n, s;
                            return null == i || ((t = e), (n = i), (s = a), (t === Z.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : a.get(e)
                    });
                }));
        }),
        s
    );
}
function G() {
    let e = w(),
        { shouldMergeGameSettings: t } = j.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = R.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                k({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => V(s, e), [s, e]);
}
function Y(e) {
    let t = w(),
        n = (function () {
            let { shouldMergeGameSettings: e } = j.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = R.b.useExperiment({ location: 'settings' }),
                n = k({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: M.intl.string(M.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            Z.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })(),
        s = (0, y.c3)({ location: 'settings' });
    return i.useMemo(() => V(n, t, s, new Set(e)), [n, t, s, e]);
}
function H(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function z(e) {
    return Array.from(H(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
