n.d(t, {
    Gj: () => F,
    Pt: () => G,
    VO: () => Y,
    ji: () => K,
    q8: () => H
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    s = n(442837),
    l = n(704215),
    r = n(493544),
    a = n(634894),
    o = n(316496),
    c = n(211242),
    d = n(924557),
    u = n(706140),
    h = n(402234),
    m = n(319828),
    g = n(592204),
    x = n(610697),
    _ = n(880257),
    p = n(631885),
    E = n(223639),
    C = n(160913),
    f = n(725727),
    N = n(977156),
    I = n(922611),
    T = n(921157),
    S = n(667172),
    j = n(237292),
    v = n(314897),
    b = n(283595),
    A = n(699516),
    O = n(663389),
    R = n(594174),
    D = n(202527),
    P = n(413182),
    y = n(695346),
    Z = n(620163),
    L = n(406613),
    k = n(168308),
    B = n(839469),
    M = n(726985),
    V = n(46140),
    w = n(388032);
function U(e) {
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
                settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.TOWNHALL, M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.HOTSPOT_OPTIONS, M.s6.DISMISSIBLE_CONTENT_OPTIONS, M.s6.PAYMENT_FLOW_MODALS, M.s6.REVENUE_STORYBOOK, M.s6.VIRTUAL_CURRENCY_CONFIGURATION, M.s6.DESIGN_SYSTEMS, M.s6.TEXT_PLAYGROUND, M.s6.TEXT_COMPONENTS, M.s6.INTL_TESTING, M.s6.PROFILE_EFFECTS_PREVIEW_TOOL, M.s6.NAME_PLATE_TOOL, M.s6.WEB_SETTING_TREE_TOOL, M.s6.QUEST_PREVIEW_TOOL]
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
        s = {
            header: w.intl.string(w.t.SmHCFR),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function G() {
    var e, t, n, i;
    let r = (0, f.YO)().length,
        P = (0, C.U)(),
        B = (0, s.e7)([O.Z], () => O.Z.getProps().impressionSource),
        M = (0, p.gU)(),
        w = (0, k.bC)(),
        U = (0, d.Go)(),
        [G] = (0, u.cv)(U ? [l.z.CLIPS_SETTINGS_BETA_TAG] : []),
        F = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: z } = D.b.useExperiment({ location: 'settings' }),
        Y = (0, g.Xo)({ location: 'settings' }),
        H = null !== (n = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        W = (0, j.y0)({ location: 'settings' }),
        K = (0, S.v4)({ location: 'settings' }),
        X = (0, c.Q)(),
        q = (0, N.Zy)({ location: V.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: J } = E.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        Q = (0, s.e7)([b.Z], () => b.Z.hasLibraryApplication()),
        $ = (0, s.e7)([v.default], () => v.default.hasTOTPEnabled()),
        ee = y.Sb.useSetting(),
        et = (0, x.Z)(),
        { hypeSquadRemoved: en } = m.Z.useExperiment({ location: 'settings' }),
        ei = null === (i = (0, _.Z)()) || void 0 === i || i,
        es = (null === (t = (0, T.s)()) || void 0 === t ? void 0 : t.length) > 0,
        el = (0, I.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: er, hasIgnoredUsers: ea } = (0, s.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0
        })),
        eo = (0, h.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: ec } = (0, L.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        { updatedSettingsPageEnabled: ed } = (0, o.S)('SettingRendererUtils');
    return (0, Z.i)({
        unseenGiftCount: r,
        showPrepaidPaymentPastDueWarning: P,
        impressionSource: B,
        numOfPendingFamilyRequests: M,
        isOverlaySupported: w,
        isClipsBetaTagShowing: G === l.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: z,
        isKeywordFilteringEnabled: Y,
        isStaff: H,
        isInappropriateConversationWarningEnabled: W,
        isInapproprateConversationsDefaultOn: K,
        paymentsBlocked: X,
        isEligibleForQuests: q,
        showGiftNitro: J,
        isStricterMessageRequestsEnabled: et,
        hasLibraryApplication: Q,
        hasTOTPEnabled: $,
        developerMode: ee,
        isAdultUser: ei,
        hasSecureFramesVerifiedUserIds: es,
        hypeSquadRemoved: en,
        stealthRemediationEnabled: el,
        hasIgnoredUsers: ea,
        hasBlockedUsers: er,
        isAllowGameFriendDMsVisible: eo,
        useRefreshedVoiceAndVideo: ec,
        hasRedesignedActivitySharing: ed
    });
}
function F(e) {
    let { searchResults: t } = (0, B.E)(),
        n = G(),
        i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            })
        ),
        l = Object.fromEntries(
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
        r = new Set(),
        a = (e) => {
            let t = s[e];
            if (null == t) return;
            r.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (r.add(e),
            Object.entries(l)
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
        if (!r.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                r.clear();
                break;
            }
            Object.values(l).includes(e) && o(e), a(e);
        }
    return r;
}
function z(e, t, n) {
    let i = [],
        s = W(t),
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
        })(t, new Set(Array.from(null != n ? n : []).filter((e) => s.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && i.push({ section: r.ID.DIVIDER }),
                null != e.header &&
                    i.push({
                        section: r.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    i.push({
                        ...t[e],
                        tabPredicate: () => null == n || (e === M.s6.SEARCH_NO_RESULTS && 0 === n.size) || l.has(e) || n.has(e)
                    });
                }));
        }),
        i
    );
}
function Y() {
    let e = G(),
        { shouldMergeGameSettings: t } = D.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = P.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                U({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => z(s, e), [s, e]);
}
function H(e) {
    let t = G(),
        n = (function () {
            let { shouldMergeGameSettings: e } = D.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = P.b.useExperiment({ location: 'settings' }),
                n = U({
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
        })();
    return i.useMemo(() => z(n, t, new Set(e)), [n, t, e]);
}
function W(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== r.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function K(e) {
    return Array.from(W(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
