n.d(t, {
    Gj: () => K,
    Pt: () => W,
    VO: () => X,
    ji: () => ee,
    q8: () => J,
}),
    n(836215),
    n(472816),
    n(794429),
    n(388685),
    n(467055),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(704215),
    o = n(493544),
    s = n(651123),
    l = n(211242),
    c = n(924557),
    u = n(706140),
    d = n(657871),
    f = n(610697),
    p = n(880257),
    _ = n(631885),
    m = n(160913),
    h = n(725727),
    g = n(787695),
    E = n(921157),
    b = n(945577),
    y = n(667172),
    O = n(237292),
    v = n(314897),
    S = n(906467),
    I = n(283595),
    T = n(131951),
    C = n(699516),
    A = n(663389),
    N = n(594174),
    P = n(128064),
    R = n(202527),
    w = n(413182),
    D = n(695346),
    x = n(526665),
    L = n(620163),
    j = n(168308),
    M = n(839469),
    k = n(726985),
    U = n(324805),
    G = n(388032);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = S.Z.isDeveloper,
        i = [
            {
                header: G.intl.string(G.t.cduTBL),
                settings: n
                    ? [
                          k.s6.ACCOUNT,
                          k.s6.GAMES,
                          k.s6.PROFILE_CUSTOMIZATION,
                          k.s6.CONTENT_SOCIAL,
                          k.s6.DATA_PRIVACY,
                          k.s6.PRIVACY_FAMILY_CENTER,
                          k.s6.THIRD_PARTY_ACCESS,
                          k.s6.SESSIONS,
                          k.s6.CLIPS,
                      ]
                    : [
                          k.s6.ACCOUNT,
                          k.s6.GAMES,
                          k.s6.PROFILE_CUSTOMIZATION,
                          k.s6.CONTENT_SOCIAL,
                          k.s6.DATA_PRIVACY,
                          k.s6.PRIVACY_FAMILY_CENTER,
                          k.s6.AUTHORIZED_APPS,
                          k.s6.SESSIONS,
                          k.s6.CONNECTIONS,
                          k.s6.CLIPS,
                          k.s6.PRIVATE_BROWSING_PERK,
                      ],
            },
            {
                header: G.intl.string(G.t["4uOdGr"]),
                divider: !0,
                settings: [k.s6.PREMIUM, k.s6.GUILD_BOOSTING, k.s6.SUBSCRIPTIONS, k.s6.GIFT_INVENTORY, k.s6.BILLING],
            },
            {
                header: G.intl.string(G.t.f2n1TP),
                divider: !0,
                settings: [
                    k.s6.APPEARANCE,
                    k.s6.ACCESSIBILITY,
                    k.s6.VOICE_AND_VIDEO,
                    k.s6.POGGERMODE,
                    k.s6.CHAT,
                    k.s6.NOTIFICATIONS,
                    k.s6.KEYBINDS,
                    k.s6.LANGUAGE,
                    k.s6.WINDOW_SETTINGS,
                    k.s6.LINUX_SETTINGS,
                    k.s6.STREAMER_MODE,
                    k.s6.SETTINGS_ADVANCED,
                ],
            },
            {
                divider: !0,
                settings: [k.s6.CHANGELOG, k.s6.MERCHANDISE],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r ? [k.s6.EXPERIMENTS, k.s6.DEVELOPER_OPTIONS] : [],
            },
            {
                divider: !0,
                settings: [k.s6.LOGOUT],
            },
            {
                divider: !0,
                settings: [k.s6.SOCIAL_LINKS, k.s6.CLIENT_DEBUG_INFO],
            },
        ],
        a = {
            header: G.intl.string(G.t.SmHCFf),
            divider: !0,
            settings: [k.s6.ACTIVITY_PRIVACY, k.s6.REGISTERED_GAMES, k.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, a);
}
function Y() {
    let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = w.b.useExperiment({ location: "settings" }),
        n = H({
            shouldMergeGameSettings: e,
            showRedesignedThirdPartyAccessSettings: t,
        });
    return r.useMemo(
        () => [
            {
                header: G.intl.string(G.t["zkoeq/"]),
                settings: [
                    ...n
                        .map((e) => {
                            let { settings: t } = e;
                            return t;
                        })
                        .flat(1),
                    k.s6.SEARCH_NO_RESULTS,
                ],
            },
        ],
        [n],
    );
}
function W() {
    var e, t, n, o;
    let S = (0, h.YO)().length,
        w = (0, m.U)(),
        M = (0, i.e7)([A.Z], () => A.Z.getSearchParams()),
        k = (0, _.gU)(),
        G = (0, j.bC)(),
        Z = (0, c.w9)(),
        [F] = (0, u.cv)(Z ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: B } = R.b.useExperiment({ location: "settings" }),
        V = null != (n = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        H = (0, O.y0)({ location: "settings" }),
        Y = (0, y.v4)({ location: "settings" }),
        W = (0, l.Q)(),
        K = (0, g.Z)({ location: U.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        z = (0, i.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        q = (0, i.e7)([v.default], () => v.default.hasTOTPEnabled()),
        Q = D.Sb.useSetting(),
        X = (0, f.Z)(),
        J = null == (o = (0, p.Z)()) || o,
        $ = (null == (t = (0, E.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: ee, hasIgnoredUsers: et } = (0, i.cj)([C.Z], () => ({
            hasBlockedUsers: C.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: C.Z.getIgnoredIDs().length > 0,
        })),
        en = (0, P.pY)("SettingRendererUtils"),
        {
            inputMode: er,
            activeInputProfile: ei,
            isInputProfileCustom: ea,
        } = (0, i.cj)([T.Z], () => ({
            activeInputProfile: T.Z.getActiveInputProfile(),
            inputMode: T.Z.getMode(),
            isInputProfileCustom: T.Z.isInputProfileCustom(),
        })),
        { enabled: eo } = (0, d.zM)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        es = (0, b.U)({ location: "useGenerateUserSettingsSections" }),
        el = (0, x.gj)("useGenerateUserSettingsSections"),
        ec = (0, s.z)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, L.iE)({
                unseenGiftCount: S,
                showPrepaidPaymentPastDueWarning: w,
                searchParams: M,
                numOfPendingFamilyRequests: k,
                isOverlaySupported: G,
                isClipsBetaTagShowing: F === a.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: B,
                isStaff: V,
                isInappropriateConversationWarningEnabled: H,
                isInapproprateConversationsDefaultOn: Y,
                paymentsBlocked: W,
                isEligibleForQuests: K,
                isStricterMessageRequestsEnabled: X,
                hasLibraryApplication: z,
                hasTOTPEnabled: q,
                developerMode: Q,
                isAdultUser: J,
                hasSecureFramesVerifiedUserIds: $,
                hasIgnoredUsers: et,
                hasBlockedUsers: ee,
                isEligibleForSensitiveContentDefaults: en,
                inputMode: er,
                activeInputProfile: ei,
                isInputProfileCustom: ea,
                isChatMentionSuggestionsSettingEnabled: eo,
                isCrossDMSearchEnabledSettingVisible: es,
                isRedesignedNotificationsEnabled: el,
                isHDRAccessibilitySettingExperimentEnabled: ec,
            }),
        [Q, F, ee, et, z, $, q, M, J, K, Y, H, G, V, X, k, W, B, w, S, en, er, ei, ea, eo, es, el, ec],
    );
}
function K(e) {
    let t = M.R.useField("searchResults"),
        n = W(),
        r = n[e],
        i = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === r.section;
            }),
        ),
        a = Object.fromEntries(
            Object.entries(i)
                .filter((e) => {
                    let [t, { parent: n, section: i }] = e;
                    return null != n && i === r.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                }),
        ),
        o = new Set(),
        s = (e) => {
            let t = i[e];
            if (null == t) return;
            o.add(e);
            let n = t.parent;
            null != n && s(n);
        },
        l = (e) => {
            for (let t of (o.add(e),
            Object.entries(a)
                .filter((t) => {
                    let [n, r] = t;
                    return r === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                l(t);
        };
    for (let e of t.filter((e) => e in i))
        if (!o.has(e)) {
            if (null != i[e].element && null == i[e].parent) {
                o.clear();
                break;
            }
            Object.values(a).includes(e) && l(e), s(e);
        }
    return o;
}
function z(e, t, n) {
    return (e === k.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
}
function q(e, t, n) {
    let r = [],
        i = $(t),
        a = Q(t, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && r.push({ section: o.ID.DIVIDER }),
                null != e.header &&
                    r.push({
                        section: o.ID.HEADER,
                        label: e.header,
                    }),
                e.settings.forEach((e) => {
                    r.push(V(F({}, t[e]), { tabPredicate: () => null == n || z(e, n, a) }));
                }));
        }),
        r
    );
}
function Q(e, t) {
    let n = new Map();
    return (
        null != t &&
            t.forEach((t) => {
                let r = e[t].parent;
                for (; null != r && null != e[r].parent; ) r = e[r].parent;
                if (null != r) {
                    var i;
                    let e = null != (i = n.get(r)) ? i : 0;
                    n.set(r, e + 1);
                }
            }),
        n
    );
}
function X() {
    let e = W(),
        { shouldMergeGameSettings: t } = R.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = w.b.useExperiment({ location: "settings" }),
        i = r.useMemo(
            () =>
                H({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => q(i, e), [i, e]);
}
function J(e) {
    let t = W(),
        n = Y();
    return r.useMemo(() => q(n, t, new Set(e)), [n, t, e]);
}
function $(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return (
                null != n.searchableTitles &&
                (null == n.predicate || n.predicate()) &&
                (null == n.unsearchable || !1 === n.unsearchable)
            );
        }),
    );
}
function ee(e) {
    return Array.from($(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
