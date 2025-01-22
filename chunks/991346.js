n.d(t, {
    Gj: function () {
        return V;
    },
    Pt: function () {
        return U;
    },
    VO: function () {
        return H;
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
    _ = n(160913),
    E = n(725727),
    C = n(977156),
    T = n(922611),
    S = n(921157),
    b = n(237292),
    I = n(314897),
    N = n(283595),
    v = n(699516),
    A = n(663389),
    j = n(594174),
    O = n(202527),
    R = n(413182),
    P = n(695346),
    D = n(620163),
    y = n(295545),
    B = n(406613),
    Z = n(168308),
    L = n(839469),
    M = n(726985),
    k = n(46140),
    w = n(388032);
function F(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: w.intl.string(w.t.cduTBA),
                settings: n ? [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.THIRD_PARTY_ACCESS, M.s6.SESSIONS, M.s6.CLIPS] : [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.AUTHORIZED_APPS, M.s6.SESSIONS, M.s6.CONNECTIONS, M.s6.CLIPS]
            },
            {
                header: w.intl.string(w.t['4uOdGh']),
                divider: !0,
                settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING]
            },
            {
                header: w.intl.string(w.t.f2n1TE),
                divider: !0,
                settings: [M.s6.APPEARANCE, M.s6.ACCESSIBILITY, M.s6.VOICE_AND_VIDEO, M.s6.POGGERMODE, M.s6.CHAT, M.s6.NOTIFICATIONS, M.s6.KEYBINDS, M.s6.LANGUAGE, M.s6.WINDOW_SETTINGS, M.s6.LINUX_SETTINGS, M.s6.STREAMER_MODE, M.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.TOWNHALL, M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.HOTSPOT_OPTIONS, M.s6.DISMISSIBLE_CONTENT_OPTIONS, M.s6.PAYMENT_FLOW_MODALS, M.s6.REVENUE_STORYBOOK, M.s6.DESIGN_SYSTEMS, M.s6.TEXT_PLAYGROUND, M.s6.TEXT_COMPONENTS, M.s6.INTL_TESTING, M.s6.PROFILE_EFFECTS_PREVIEW_TOOL, M.s6.WEB_SETTING_TREE_TOOL, M.s6.QUEST_PREVIEW_TOOL]
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
        r = {
            header: w.intl.string(w.t.SmHCFR),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, r);
}
function U() {
    var e, t, n, i;
    let a = (0, E.YO)().length,
        R = (0, _.U)(),
        L = (0, r.e7)([A.Z], () => A.Z.getProps().impressionSource),
        M = (0, x.gU)(),
        w = (0, Z.bC)(),
        F = (0, c.Go)(),
        [U] = (0, d.cv)(F ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        V = 'useGenerateUserSettingsSections';
    (0, l.j)({
        location: V + ' auto on',
        autoTrackExposure: !0
    }),
        (0, l.j)({
            location: V + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: G } = O.b.useExperiment({ location: 'settings' }),
        H = (0, y.eA)({ location: 'settings' }),
        Y = (0, g.Xo)({ location: 'settings' }),
        W = null !== (n = null === (e = j.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        z = (0, b.y0)({ location: 'settings' }),
        K = (0, o.Q)(),
        q = (0, C.Zy)({ location: k.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: Q } = f.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        X = (0, r.e7)([N.Z], () => N.Z.hasLibraryApplication()),
        J = (0, r.e7)([I.default], () => I.default.hasTOTPEnabled()),
        $ = P.Sb.useSetting(),
        ee = (0, h.Z)(),
        { hypeSquadRemoved: et } = m.Z.useExperiment({ location: 'settings' }),
        en = null === (i = (0, p.Z)()) || void 0 === i || i,
        ei = (null === (t = (0, S.s)()) || void 0 === t ? void 0 : t.length) > 0,
        er = (0, T.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: es, hasIgnoredUsers: ea } = (0, r.cj)([v.Z], () => ({
            hasBlockedUsers: v.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: v.Z.getIgnoredIDs().length > 0
        })),
        el = (0, u.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: eo } = (0, B.F)({ location: 'SettingRendererUtils' });
    return (0, D.i)({
        unseenGiftCount: a,
        showPrepaidPaymentPastDueWarning: R,
        impressionSource: L,
        numOfPendingFamilyRequests: M,
        isOverlaySupported: w,
        isClipsBetaTagShowing: U === s.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: G,
        isUserSettingsSearchEnabled: H,
        isKeywordFilteringEnabled: Y,
        isStaff: W,
        isInappropriateConversationWarningEnabled: z,
        paymentsBlocked: K,
        isEligibleForQuests: q,
        showGiftNitro: Q,
        isStricterMessageRequestsEnabled: ee,
        hasLibraryApplication: X,
        hasTOTPEnabled: J,
        developerMode: $,
        isAdultUser: en,
        hasSecureFramesVerifiedUserIds: ei,
        hypeSquadRemoved: et,
        stealthRemediationEnabled: er,
        hasIgnoredUsers: ea,
        hasBlockedUsers: es,
        isAllowGameFriendDMsVisible: el,
        useRefreshedVoiceAndVideo: eo
    });
}
function V(e) {
    let { searchResults: t } = (0, L.E)(),
        n = U();
    if (!(0, y.eA)({ location: 'settings' })) return new Set();
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
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = [],
        s = W(t),
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
                            return null == i || ((t = e), (n = i), (r = l), (t === M.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : l.get(e)
                    });
                }));
        }),
        r
    );
}
function H() {
    let e = U(),
        { shouldMergeGameSettings: t } = O.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = R.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                F({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => G(r, e), [r, e]);
}
function Y(e) {
    let t = U(),
        n = (function () {
            let { shouldMergeGameSettings: e } = O.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = R.b.useExperiment({ location: 'settings' }),
                n = F({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: w.intl.string(w.t.zkoeq6),
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
        })(),
        r = (0, y.c3)({ location: 'settings' });
    return i.useMemo(() => G(n, t, r, new Set(e)), [n, t, r, e]);
}
function W(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function z(e) {
    return Array.from(W(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
