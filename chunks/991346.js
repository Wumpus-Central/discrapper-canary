n.d(t, {
    Gj: () => K,
    Pt: () => W,
    VO: () => Q,
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
    s = n(211242),
    l = n(924557),
    c = n(706140),
    u = n(592204),
    d = n(657871),
    f = n(610697),
    _ = n(880257),
    p = n(631885),
    h = n(160913),
    m = n(725727),
    g = n(787695),
    E = n(921157),
    b = n(945577),
    y = n(667172),
    O = n(237292),
    v = n(314897),
    I = n(906467),
    T = n(283595),
    S = n(131951),
    A = n(699516),
    C = n(663389),
    N = n(594174),
    R = n(128064),
    P = n(202527),
    D = n(413182),
    w = n(695346),
    L = n(695463),
    x = n(620163),
    M = n(168308),
    k = n(839469),
    j = n(726985),
    U = n(324805),
    G = n(388032);
function B(e, t, n) {
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
function Z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = I.Z.isDeveloper,
        i = [
            {
                header: G.intl.string(G.t.cduTBL),
                settings: n
                    ? [
                          j.s6.ACCOUNT,
                          j.s6.GAMES,
                          j.s6.PROFILE_CUSTOMIZATION,
                          j.s6.CONTENT_SOCIAL,
                          j.s6.DATA_PRIVACY,
                          j.s6.PRIVACY_FAMILY_CENTER,
                          j.s6.THIRD_PARTY_ACCESS,
                          j.s6.SESSIONS,
                          j.s6.CLIPS,
                      ]
                    : [
                          j.s6.ACCOUNT,
                          j.s6.GAMES,
                          j.s6.PROFILE_CUSTOMIZATION,
                          j.s6.CONTENT_SOCIAL,
                          j.s6.DATA_PRIVACY,
                          j.s6.PRIVACY_FAMILY_CENTER,
                          j.s6.AUTHORIZED_APPS,
                          j.s6.SESSIONS,
                          j.s6.CONNECTIONS,
                          j.s6.CLIPS,
                      ],
            },
            {
                header: G.intl.string(G.t["4uOdGr"]),
                divider: !0,
                settings: [j.s6.PREMIUM, j.s6.GUILD_BOOSTING, j.s6.SUBSCRIPTIONS, j.s6.GIFT_INVENTORY, j.s6.BILLING],
            },
            {
                header: G.intl.string(G.t.f2n1TP),
                divider: !0,
                settings: [
                    j.s6.APPEARANCE,
                    j.s6.ACCESSIBILITY,
                    j.s6.VOICE_AND_VIDEO,
                    j.s6.POGGERMODE,
                    j.s6.CHAT,
                    j.s6.NOTIFICATIONS,
                    j.s6.KEYBINDS,
                    j.s6.LANGUAGE,
                    j.s6.WINDOW_SETTINGS,
                    j.s6.LINUX_SETTINGS,
                    j.s6.STREAMER_MODE,
                    j.s6.SETTINGS_ADVANCED,
                ],
            },
            {
                divider: !0,
                settings: [j.s6.CHANGELOG, j.s6.MERCHANDISE],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r ? [j.s6.EXPERIMENTS, j.s6.DEVELOPER_OPTIONS] : [],
            },
            {
                divider: !0,
                settings: [j.s6.LOGOUT],
            },
            {
                divider: !0,
                settings: [j.s6.SOCIAL_LINKS, j.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM, j.s6.CLIENT_DEBUG_INFO],
            },
        ],
        a = {
            header: G.intl.string(G.t.SmHCFf),
            divider: !0,
            settings: [j.s6.ACTIVITY_PRIVACY, j.s6.REGISTERED_GAMES, j.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, a);
}
function Y() {
    let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = D.b.useExperiment({ location: "settings" }),
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
                    j.s6.SEARCH_NO_RESULTS,
                ],
            },
        ],
        [n],
    );
}
function W() {
    var e, t, n, o;
    let I = (0, m.YO)().length,
        D = (0, h.U)(),
        k = (0, i.e7)([C.Z], () => C.Z.getSearchParams()),
        j = (0, p.gU)(),
        G = (0, M.bC)(),
        B = (0, l.w9)(),
        [Z] = (0, c.cv)(B ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: F } = P.b.useExperiment({ location: "settings" }),
        V = (0, u.Xo)({ location: "settings" }),
        H = null != (n = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        Y = (0, O.y0)({ location: "settings" }),
        W = (0, y.v4)({ location: "settings" }),
        K = (0, s.Q)(),
        z = (0, g.Z)({ location: U.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        q = (0, i.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        X = (0, i.e7)([v.default], () => v.default.hasTOTPEnabled()),
        Q = w.Sb.useSetting(),
        J = (0, f.Z)(),
        $ = null == (o = (0, _.Z)()) || o,
        ee = (null == (t = (0, E.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: et, hasIgnoredUsers: en } = (0, i.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0,
        })),
        er = (0, R.pY)("SettingRendererUtils"),
        {
            inputMode: ei,
            activeInputProfile: ea,
            isInputProfileCustom: eo,
        } = (0, i.cj)([S.Z], () => ({
            activeInputProfile: S.Z.getActiveInputProfile(),
            inputMode: S.Z.getMode(),
            isInputProfileCustom: S.Z.isInputProfileCustom(),
        })),
        es = (0, L.W)("useGenerateUserSettingsSections"),
        { enabled: el } = (0, d.zM)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        ec = (0, b.UX)({ location: "useGenerateUserSettingsSections" });
    return r.useMemo(
        () =>
            (0, x.iE)({
                unseenGiftCount: I,
                showPrepaidPaymentPastDueWarning: D,
                searchParams: k,
                numOfPendingFamilyRequests: j,
                isOverlaySupported: G,
                isClipsBetaTagShowing: Z === a.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: F,
                isKeywordFilteringEnabled: V,
                isStaff: H,
                isInappropriateConversationWarningEnabled: Y,
                isInapproprateConversationsDefaultOn: W,
                paymentsBlocked: K,
                isEligibleForQuests: z,
                isStricterMessageRequestsEnabled: J,
                hasLibraryApplication: q,
                hasTOTPEnabled: X,
                developerMode: Q,
                isAdultUser: $,
                hasSecureFramesVerifiedUserIds: ee,
                hasIgnoredUsers: en,
                hasBlockedUsers: et,
                isEligibleForSensitiveContentDefaults: er,
                inputMode: ei,
                activeInputProfile: ea,
                isInputProfileCustom: eo,
                isDataUsage3PToggleEnabled: es,
                isChatMentionSuggestionsSettingEnabled: el,
                isCrossDMSearchEnabledSettingVisible: ec,
            }),
        [Q, Z, et, en, q, ee, X, k, $, z, W, Y, V, G, H, J, j, K, F, D, I, er, ei, ea, eo, es, el, ec],
    );
}
function K(e) {
    let t = k.R.useField("searchResults"),
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
    return (e === j.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
}
function q(e, t, n) {
    let r = [],
        i = $(t),
        a = X(t, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
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
                    r.push(V(Z({}, t[e]), { tabPredicate: () => null == n || z(e, n, a) }));
                }));
        }),
        r
    );
}
function X(e, t) {
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
function Q() {
    let e = W(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = D.b.useExperiment({ location: "settings" }),
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
                (n.section !== o.ID.CUSTOM || t === j.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM) &&
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
