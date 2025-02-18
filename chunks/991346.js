n.d(t, {
    Gj: () => G,
    Pt: () => U,
    VO: () => H,
    ji: () => W,
    q8: () => z
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
    u = n(402234),
    m = n(319828),
    g = n(592204),
    h = n(610697),
    x = n(880257),
    _ = n(631885),
    p = n(223639),
    E = n(160913),
    C = n(725727),
    f = n(977156),
    T = n(922611),
    N = n(921157),
    S = n(667172),
    I = n(237292),
    b = n(314897),
    v = n(283595),
    j = n(699516),
    A = n(663389),
    O = n(594174),
    R = n(202527),
    P = n(413182),
    D = n(695346),
    Z = n(620163),
    y = n(406613),
    k = n(168308),
    L = n(839469),
    B = n(726985),
    M = n(46140),
    w = n(388032);
function V(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: w.intl.string(w.t.cduTBA),
                settings: n ? [B.s6.ACCOUNT, B.s6.GAMES, B.s6.PROFILE_CUSTOMIZATION, B.s6.CONTENT_SOCIAL, B.s6.DATA_PRIVACY, B.s6.PRIVACY_FAMILY_CENTER, B.s6.THIRD_PARTY_ACCESS, B.s6.SESSIONS, B.s6.CLIPS] : [B.s6.ACCOUNT, B.s6.GAMES, B.s6.PROFILE_CUSTOMIZATION, B.s6.CONTENT_SOCIAL, B.s6.DATA_PRIVACY, B.s6.PRIVACY_FAMILY_CENTER, B.s6.AUTHORIZED_APPS, B.s6.SESSIONS, B.s6.CONNECTIONS, B.s6.CLIPS]
            },
            {
                header: w.intl.string(w.t['4uOdGh']),
                divider: !0,
                settings: [B.s6.PREMIUM, B.s6.GUILD_BOOSTING, B.s6.SUBSCRIPTIONS, B.s6.GIFT_INVENTORY, B.s6.BILLING]
            },
            {
                header: w.intl.string(w.t.f2n1TE),
                divider: !0,
                settings: [B.s6.APPEARANCE, B.s6.ACCESSIBILITY, B.s6.VOICE_AND_VIDEO, B.s6.POGGERMODE, B.s6.CHAT, B.s6.NOTIFICATIONS, B.s6.KEYBINDS, B.s6.LANGUAGE, B.s6.WINDOW_SETTINGS, B.s6.LINUX_SETTINGS, B.s6.STREAMER_MODE, B.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [B.s6.CHANGELOG, B.s6.MERCHANDISE, B.s6.HYPESQUAD, B.s6.TOWNHALL, B.s6.EXPERIMENTS, B.s6.DEVELOPER_OPTIONS, B.s6.HOTSPOT_OPTIONS, B.s6.DISMISSIBLE_CONTENT_OPTIONS, B.s6.PAYMENT_FLOW_MODALS, B.s6.REVENUE_STORYBOOK, B.s6.VIRTUAL_CURRENCY_CONFIGURATION, B.s6.DESIGN_SYSTEMS, B.s6.TEXT_PLAYGROUND, B.s6.TEXT_COMPONENTS, B.s6.INTL_TESTING, B.s6.PROFILE_EFFECTS_PREVIEW_TOOL, B.s6.NAMEPLATES_PREVIEW_TOOL, B.s6.WEB_SETTING_TREE_TOOL, B.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [B.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [B.s6.SOCIAL_LINKS, B.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: w.intl.string(w.t.SmHCFR),
            divider: !0,
            settings: [B.s6.ACTIVITY_PRIVACY, B.s6.REGISTERED_GAMES, B.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function U() {
    var e, t, n, l;
    let P = (0, C.YO)().length,
        L = (0, E.U)(),
        B = (0, s.e7)([A.Z], () => A.Z.getProps().impressionSource),
        w = (0, _.gU)(),
        V = (0, k.bC)(),
        U = (0, c.Go)(),
        [G] = (0, d.cv)(U ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        F = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: H } = R.b.useExperiment({ location: 'settings' }),
        z = (0, g.Xo)({ location: 'settings' }),
        Y = null !== (n = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        W = (0, I.y0)({ location: 'settings' }),
        K = (0, S.v4)({ location: 'settings' }),
        q = (0, o.Q)(),
        X = (0, f.Zy)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: J } = p.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, s.e7)([v.Z], () => v.Z.hasLibraryApplication()),
        $ = (0, s.e7)([b.default], () => b.default.hasTOTPEnabled()),
        ee = D.Sb.useSetting(),
        et = (0, h.Z)(),
        { hypeSquadRemoved: en } = m.Z.useExperiment({ location: 'settings' }),
        ei = null === (l = (0, x.Z)()) || void 0 === l || l,
        es = (null === (t = (0, N.s)()) || void 0 === t ? void 0 : t.length) > 0,
        er = (0, T.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: el, hasIgnoredUsers: ea } = (0, s.cj)([j.Z], () => ({
            hasBlockedUsers: j.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: j.Z.getIgnoredIDs().length > 0
        })),
        eo = (0, u.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: ec } = (0, y.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        });
    return i.useMemo(
        () =>
            (0, Z.i)({
                unseenGiftCount: P,
                showPrepaidPaymentPastDueWarning: L,
                impressionSource: B,
                numOfPendingFamilyRequests: w,
                isOverlaySupported: V,
                isClipsBetaTagShowing: G === r.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: H,
                isKeywordFilteringEnabled: z,
                isStaff: Y,
                isInappropriateConversationWarningEnabled: W,
                isInapproprateConversationsDefaultOn: K,
                paymentsBlocked: q,
                isEligibleForQuests: X,
                showGiftNitro: J,
                isStricterMessageRequestsEnabled: et,
                hasLibraryApplication: Q,
                hasTOTPEnabled: $,
                developerMode: ee,
                isAdultUser: ei,
                hasSecureFramesVerifiedUserIds: es,
                hypeSquadRemoved: en,
                stealthRemediationEnabled: er,
                hasIgnoredUsers: ea,
                hasBlockedUsers: el,
                isAllowGameFriendDMsVisible: eo,
                useRefreshedVoiceAndVideo: ec
            }),
        [ee, G, el, ea, Q, es, $, en, B, ei, eo, X, K, W, z, V, Y, et, w, q, H, J, L, er, P, ec]
    );
}
function G(e) {
    let { searchResults: t } = (0, L.E)(),
        n = U(),
        i = n[e],
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
function F(e, t, n) {
    let i = [],
        s = Y(t),
        r = (function (e, t) {
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
        })(t, new Set(Array.from(null != n ? n : []).filter((e) => s.has(e))));
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
                    i.push({
                        ...t[e],
                        tabPredicate: () => null == n || (e === B.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(e) || n.has(e)
                    });
                }));
        }),
        i
    );
}
function H() {
    let e = U(),
        { shouldMergeGameSettings: t } = R.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = P.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                V({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => F(s, e), [s, e]);
}
function z(e) {
    let t = U(),
        n = (function () {
            let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = P.b.useExperiment({ location: 'settings' }),
                n = V({
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
                            B.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })();
    return i.useMemo(() => F(n, t, new Set(e)), [n, t, e]);
}
function Y(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function W(e) {
    return Array.from(Y(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
