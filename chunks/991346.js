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
    r = n(442837),
    s = n(704215),
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
    E = n(228449),
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
    y = n(620163),
    B = n(295545),
    D = n(168308),
    Z = n(839469),
    L = n(726985),
    M = n(46140),
    k = n(388032);
function w(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: k.intl.string(k.t.cduTBA),
                settings: n ? [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.THIRD_PARTY_ACCESS, L.s6.SESSIONS, L.s6.CLIPS] : [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.CONTENT_SOCIAL, L.s6.DATA_PRIVACY, L.s6.PRIVACY_FAMILY_CENTER, L.s6.AUTHORIZED_APPS, L.s6.SESSIONS, L.s6.CONNECTIONS, L.s6.CLIPS]
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
        r = {
            header: k.intl.string(k.t.SmHCFR),
            divider: !0,
            settings: [L.s6.ACTIVITY_PRIVACY, L.s6.REGISTERED_GAMES, L.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, r);
}
function F() {
    var e, t, n, i;
    let a = (0, _.YO)().length,
        R = (0, f.U)(),
        Z = (0, r.e7)([A.Z], () => A.Z.getProps().impressionSource),
        L = (0, p.gU)(),
        k = (0, D.bC)(),
        w = (0, c.Go)(),
        [F] = (0, d.cv)(w ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        U = 'useGenerateUserSettingsSections';
    (0, l.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, l.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: V } = O.b.useExperiment({ location: 'settings' }),
        G = (0, B.eA)({ location: 'settings' }),
        H = (0, m.Xo)({ location: 'settings' }),
        Y = null !== (n = null === (e = j.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        W = (0, b.y0)({ location: 'settings' }),
        z = (0, o.Q)(),
        K = (0, C.Zy)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: q } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, r.e7)([N.Z], () => N.Z.hasLibraryApplication()),
        X = (0, r.e7)([I.default], () => I.default.hasTOTPEnabled()),
        J = P.Sb.useSetting(),
        $ = (0, g.Z)(),
        { hypeSquadRemoved: ee } = u.Z.useExperiment({ location: 'settings' }),
        et = null === (i = (0, h.Z)()) || void 0 === i || i,
        en = (null === (t = (0, S.s)()) || void 0 === t ? void 0 : t.length) > 0,
        ei = (0, T.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: er, hasIgnoredUsers: es } = (0, r.cj)([v.Z], () => ({
            hasBlockedUsers: v.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: v.Z.getIgnoredIDs().length > 0
        })),
        ea = (0, E.B)();
    return (0, y.i)({
        unseenGiftCount: a,
        showPrepaidPaymentPastDueWarning: R,
        impressionSource: Z,
        numOfPendingFamilyRequests: L,
        isOverlaySupported: k,
        isClipsBetaTagShowing: F === s.z.CLIPS_SETTINGS_BETA_TAG,
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
        isAdultUser: et,
        hasSecureFramesVerifiedUserIds: en,
        hypeSquadRemoved: ee,
        stealthRemediationEnabled: ei,
        hasIgnoredUsers: es,
        hasBlockedUsers: er,
        isAllowGameFriendDMsVisible: ea
    });
}
function U(e) {
    let { searchResults: t } = (0, Z.E)(),
        n = F();
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
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = [],
        s = Y(t),
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
                            return null == i || ((t = e), (n = i), (r = l), (t === L.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : l.get(e)
                    });
                }));
        }),
        r
    );
}
function G() {
    let e = F(),
        { shouldMergeGameSettings: t } = O.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = R.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                w({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => V(r, e), [r, e]);
}
function H(e) {
    let t = F(),
        n = (function () {
            let { shouldMergeGameSettings: e } = O.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = R.b.useExperiment({ location: 'settings' }),
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
        r = (0, B.c3)({ location: 'settings' });
    return i.useMemo(() => V(n, t, r, new Set(e)), [n, t, r, e]);
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
