n.d(t, {
    Gj: () => F,
    Pt: () => G,
    VO: () => z,
    ji: () => K,
    q8: () => Y
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
    k = n(406613),
    L = n(168308),
    B = n(839469),
    M = n(726985),
    w = n(46140),
    V = n(388032);
function U(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: V.intl.string(V.t.cduTBA),
                settings: n ? [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.THIRD_PARTY_ACCESS, M.s6.SESSIONS, M.s6.CLIPS] : [M.s6.ACCOUNT, M.s6.GAMES, M.s6.PROFILE_CUSTOMIZATION, M.s6.CONTENT_SOCIAL, M.s6.DATA_PRIVACY, M.s6.PRIVACY_FAMILY_CENTER, M.s6.AUTHORIZED_APPS, M.s6.SESSIONS, M.s6.CONNECTIONS, M.s6.CLIPS]
            },
            {
                header: V.intl.string(V.t['4uOdGh']),
                divider: !0,
                settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING]
            },
            {
                header: V.intl.string(V.t.f2n1TE),
                divider: !0,
                settings: [M.s6.APPEARANCE, M.s6.ACCESSIBILITY, M.s6.VOICE_AND_VIDEO, M.s6.POGGERMODE, M.s6.CHAT, M.s6.NOTIFICATIONS, M.s6.KEYBINDS, M.s6.LANGUAGE, M.s6.WINDOW_SETTINGS, M.s6.LINUX_SETTINGS, M.s6.STREAMER_MODE, M.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.TOWNHALL, M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS, M.s6.HOTSPOT_OPTIONS, M.s6.DISMISSIBLE_CONTENT_OPTIONS, M.s6.PAYMENT_FLOW_MODALS, M.s6.REVENUE_STORYBOOK, M.s6.DESIGN_SYSTEMS, M.s6.TEXT_PLAYGROUND, M.s6.TEXT_COMPONENTS, M.s6.INTL_TESTING, M.s6.PROFILE_EFFECTS_PREVIEW_TOOL, M.s6.NAME_PLATE_TOOL, M.s6.WEB_SETTING_TREE_TOOL, M.s6.QUEST_PREVIEW_TOOL]
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
            header: V.intl.string(V.t.SmHCFR),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function G() {
    var e, t, n, i;
    let l = (0, f.YO)().length,
        D = (0, C.U)(),
        B = (0, s.e7)([O.Z], () => O.Z.getProps().impressionSource),
        M = (0, p.gU)(),
        V = (0, L.bC)(),
        U = (0, d.Go)(),
        [G] = (0, u.cv)(U ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        F = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: H } = P.b.useExperiment({ location: 'settings' }),
        z = (0, g.Xo)({ location: 'settings' }),
        Y = null !== (n = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        W = (0, b.y0)({ location: 'settings' }),
        K = (0, S.v4)({ location: 'settings' }),
        X = (0, c.Q)(),
        q = (0, T.Zy)({ location: w.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: Q } = E.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        J = (0, s.e7)([j.Z], () => j.Z.hasLibraryApplication()),
        $ = (0, s.e7)([v.default], () => v.default.hasTOTPEnabled()),
        ee = y.Sb.useSetting(),
        et = (0, _.Z)(),
        { hypeSquadRemoved: en } = h.Z.useExperiment({ location: 'settings' }),
        ei = null === (i = (0, x.Z)()) || void 0 === i || i,
        es = (null === (t = (0, I.s)()) || void 0 === t ? void 0 : t.length) > 0,
        er = (0, N.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: el, hasIgnoredUsers: ea } = (0, s.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0
        })),
        eo = (0, m.B)({ location: 'SettingRendererUtils' }),
        { showRefreshedSettings: ec } = (0, k.F)({
            location: 'SettingRendererUtils',
            autoTrackExposure: !1
        }),
        { updatedSettingsPageEnabled: ed } = (0, o.S)('SettingRendererUtils');
    return (0, Z.i)({
        unseenGiftCount: l,
        showPrepaidPaymentPastDueWarning: D,
        impressionSource: B,
        numOfPendingFamilyRequests: M,
        isOverlaySupported: V,
        isClipsBetaTagShowing: G === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: H,
        isKeywordFilteringEnabled: z,
        isStaff: Y,
        isInappropriateConversationWarningEnabled: W,
        isInapproprateConversationsDefaultOn: K,
        paymentsBlocked: X,
        isEligibleForQuests: q,
        showGiftNitro: Q,
        isStricterMessageRequestsEnabled: et,
        hasLibraryApplication: J,
        hasTOTPEnabled: $,
        developerMode: ee,
        isAdultUser: ei,
        hasSecureFramesVerifiedUserIds: es,
        hypeSquadRemoved: en,
        stealthRemediationEnabled: er,
        hasIgnoredUsers: ea,
        hasBlockedUsers: el,
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
function H(e, t, n) {
    let i = [],
        s = W(t),
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
                        tabPredicate: () => null == n || (e === M.s6.SEARCH_NO_RESULTS && 0 === n.size) || r.has(e) || n.has(e)
                    });
                }));
        }),
        i
    );
}
function z() {
    let e = G(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = D.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                U({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => H(s, e), [s, e]);
}
function Y(e) {
    let t = G(),
        n = (function () {
            let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = D.b.useExperiment({ location: 'settings' }),
                n = U({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: V.intl.string(V.t.zkoeq6),
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
    return i.useMemo(() => H(n, t, new Set(e)), [n, t, e]);
}
function W(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function K(e) {
    return Array.from(W(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
