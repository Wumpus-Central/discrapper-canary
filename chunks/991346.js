n.d(t, {
    Gj: function () {
        return U;
    },
    Pt: function () {
        return w;
    },
    VO: function () {
        return V;
    },
    ji: function () {
        return Y;
    },
    q8: function () {
        return G;
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
    O = n(413182),
    R = n(695346),
    P = n(620163),
    y = n(295545),
    B = n(168308),
    D = n(839469),
    Z = n(726985),
    L = n(46140),
    M = n(388032);
function k(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: M.intl.string(M.t.cduTBA),
                settings: n ? [Z.s6.ACCOUNT, Z.s6.GAMES, Z.s6.PROFILE_CUSTOMIZATION, Z.s6.CONTENT_SOCIAL, Z.s6.DATA_PRIVACY, Z.s6.PRIVACY_FAMILY_CENTER, Z.s6.THIRD_PARTY_ACCESS, Z.s6.SESSIONS, Z.s6.CLIPS] : [Z.s6.ACCOUNT, Z.s6.GAMES, Z.s6.PROFILE_CUSTOMIZATION, Z.s6.CONTENT_SOCIAL, Z.s6.DATA_PRIVACY, Z.s6.PRIVACY_FAMILY_CENTER, Z.s6.AUTHORIZED_APPS, Z.s6.SESSIONS, Z.s6.CONNECTIONS, Z.s6.CLIPS]
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
        r = {
            header: M.intl.string(M.t.SmHCFR),
            divider: !0,
            settings: [Z.s6.ACTIVITY_PRIVACY, Z.s6.REGISTERED_GAMES, Z.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, r);
}
function w() {
    var e, t, n, i;
    let a = (0, _.YO)().length,
        O = (0, f.U)(),
        D = (0, r.e7)([v.Z], () => v.Z.getProps().impressionSource),
        Z = (0, p.gU)(),
        M = (0, B.bC)(),
        k = (0, c.Go)(),
        [w] = (0, d.cv)(k ? [s.z.CLIPS_SETTINGS_BETA_TAG] : []),
        U = 'useGenerateUserSettingsSections';
    (0, l.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, l.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: F } = j.b.useExperiment({ location: 'settings' }),
        V = (0, y.eA)({ location: 'settings' }),
        G = (0, m.Xo)({ location: 'settings' }),
        H = null !== (n = null === (e = A.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        Y = (0, S.y0)({ location: 'settings' }),
        W = (0, o.Q)(),
        z = (0, E.Zy)({ location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: K } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        q = (0, r.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        Q = (0, r.e7)([b.default], () => b.default.hasTOTPEnabled()),
        X = R.Sb.useSetting(),
        J = (0, g.Z)(),
        { hypeSquadRemoved: $ } = u.Z.useExperiment({ location: 'settings' }),
        ee = null === (i = (0, h.Z)()) || void 0 === i || i,
        et = (null === (t = (0, T.s)()) || void 0 === t ? void 0 : t.length) > 0,
        en = (0, C.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: ei, hasIgnoredUsers: er } = (0, r.cj)([N.Z], () => ({
            hasBlockedUsers: N.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: N.Z.getIgnoredIDs().length > 0
        }));
    return (0, P.i)({
        unseenGiftCount: a,
        showPrepaidPaymentPastDueWarning: O,
        impressionSource: D,
        numOfPendingFamilyRequests: Z,
        isOverlaySupported: M,
        isClipsBetaTagShowing: w === s.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: F,
        isUserSettingsSearchEnabled: V,
        isKeywordFilteringEnabled: G,
        isStaff: H,
        isInappropriateConversationWarningEnabled: Y,
        paymentsBlocked: W,
        isEligibleForQuests: z,
        showGiftNitro: K,
        isStricterMessageRequestsEnabled: J,
        hasLibraryApplication: q,
        hasTOTPEnabled: Q,
        developerMode: X,
        isAdultUser: ee,
        hasSecureFramesVerifiedUserIds: et,
        hypeSquadRemoved: $,
        stealthRemediationEnabled: en,
        hasIgnoredUsers: er,
        hasBlockedUsers: ei
    });
}
function U(e) {
    let { searchResults: t } = (0, D.E)(),
        n = w();
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
function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = [],
        s = H(t),
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
                            return null == i || ((t = e), (n = i), (r = l), (t === Z.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : l.get(e)
                    });
                }));
        }),
        r
    );
}
function V() {
    let e = w(),
        { shouldMergeGameSettings: t } = j.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = O.b.useExperiment({ location: 'settings' }),
        r = i.useMemo(
            () =>
                k({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => F(r, e), [r, e]);
}
function G(e) {
    let t = w(),
        n = (function () {
            let { shouldMergeGameSettings: e } = j.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = O.b.useExperiment({ location: 'settings' }),
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
        r = (0, y.c3)({ location: 'settings' });
    return i.useMemo(() => F(n, t, r, new Set(e)), [n, t, r, e]);
}
function H(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function Y(e) {
    return Array.from(H(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
