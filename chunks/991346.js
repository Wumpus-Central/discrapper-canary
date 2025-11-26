n.d(t, {
    Gj: () => z,
    Pt: () => K,
    VO: () => J,
    ji: () => et,
    q8: () => $,
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
    L = n(526665),
    x = n(695463),
    M = n(620163),
    k = n(168308),
    j = n(839469),
    U = n(726985),
    G = n(324805),
    B = n(388032);
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
function V(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = I.Z.isDeveloper,
        i = [
            {
                header: B.intl.string(B.t.cduTBL),
                settings: n
                    ? [
                          U.s6.ACCOUNT,
                          U.s6.GAMES,
                          U.s6.PROFILE_CUSTOMIZATION,
                          U.s6.CONTENT_SOCIAL,
                          U.s6.DATA_PRIVACY,
                          U.s6.PRIVACY_FAMILY_CENTER,
                          U.s6.THIRD_PARTY_ACCESS,
                          U.s6.SESSIONS,
                          U.s6.CLIPS,
                      ]
                    : [
                          U.s6.ACCOUNT,
                          U.s6.GAMES,
                          U.s6.PROFILE_CUSTOMIZATION,
                          U.s6.CONTENT_SOCIAL,
                          U.s6.DATA_PRIVACY,
                          U.s6.PRIVACY_FAMILY_CENTER,
                          U.s6.AUTHORIZED_APPS,
                          U.s6.SESSIONS,
                          U.s6.CONNECTIONS,
                          U.s6.CLIPS,
                      ],
            },
            {
                header: B.intl.string(B.t["4uOdGr"]),
                divider: !0,
                settings: [U.s6.PREMIUM, U.s6.GUILD_BOOSTING, U.s6.SUBSCRIPTIONS, U.s6.GIFT_INVENTORY, U.s6.BILLING],
            },
            {
                header: B.intl.string(B.t.f2n1TP),
                divider: !0,
                settings: [
                    U.s6.APPEARANCE,
                    U.s6.ACCESSIBILITY,
                    U.s6.VOICE_AND_VIDEO,
                    U.s6.POGGERMODE,
                    U.s6.CHAT,
                    U.s6.NOTIFICATIONS,
                    U.s6.KEYBINDS,
                    U.s6.LANGUAGE,
                    U.s6.WINDOW_SETTINGS,
                    U.s6.LINUX_SETTINGS,
                    U.s6.STREAMER_MODE,
                    U.s6.SETTINGS_ADVANCED,
                ],
            },
            {
                divider: !0,
                settings: [U.s6.CHANGELOG, U.s6.MERCHANDISE],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r ? [U.s6.EXPERIMENTS, U.s6.DEVELOPER_OPTIONS] : [],
            },
            {
                divider: !0,
                settings: [U.s6.LOGOUT],
            },
            {
                divider: !0,
                settings: [U.s6.SOCIAL_LINKS, U.s6.CLIENT_DEBUG_INFO],
            },
        ],
        a = {
            header: B.intl.string(B.t.SmHCFf),
            divider: !0,
            settings: [U.s6.ACTIVITY_PRIVACY, U.s6.REGISTERED_GAMES, U.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, a);
}
function Y() {
    let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = D.b.useExperiment({ location: "settings" }),
        n = W({
            shouldMergeGameSettings: e,
            showRedesignedThirdPartyAccessSettings: t,
        });
    return r.useMemo(
        () => [
            {
                header: B.intl.string(B.t["zkoeq/"]),
                settings: [
                    ...n
                        .map((e) => {
                            let { settings: t } = e;
                            return t;
                        })
                        .flat(1),
                    U.s6.SEARCH_NO_RESULTS,
                ],
            },
        ],
        [n],
    );
}
function K() {
    var e, t, n, o;
    let I = (0, m.YO)().length,
        D = (0, h.U)(),
        j = (0, i.e7)([C.Z], () => C.Z.getSearchParams()),
        U = (0, p.gU)(),
        B = (0, k.bC)(),
        Z = (0, l.w9)(),
        [F] = (0, c.cv)(Z ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: V } = P.b.useExperiment({ location: "settings" }),
        H = (0, u.Xo)({ location: "settings" }),
        W = null != (n = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        Y = (0, O.y0)({ location: "settings" }),
        K = (0, y.v4)({ location: "settings" }),
        z = (0, s.Q)(),
        q = (0, g.Z)({ location: G.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        X = (0, i.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        Q = (0, i.e7)([v.default], () => v.default.hasTOTPEnabled()),
        J = w.Sb.useSetting(),
        $ = (0, f.Z)(),
        ee = null == (o = (0, _.Z)()) || o,
        et = (null == (t = (0, E.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: en, hasIgnoredUsers: er } = (0, i.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0,
        })),
        ei = (0, R.pY)("SettingRendererUtils"),
        {
            inputMode: ea,
            activeInputProfile: eo,
            isInputProfileCustom: es,
        } = (0, i.cj)([S.Z], () => ({
            activeInputProfile: S.Z.getActiveInputProfile(),
            inputMode: S.Z.getMode(),
            isInputProfileCustom: S.Z.isInputProfileCustom(),
        })),
        el = (0, x.W)("useGenerateUserSettingsSections"),
        { enabled: ec } = (0, d.zM)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        eu = (0, b.UX)({ location: "useGenerateUserSettingsSections" }),
        ed = (0, L.gj)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, M.iE)({
                unseenGiftCount: I,
                showPrepaidPaymentPastDueWarning: D,
                searchParams: j,
                numOfPendingFamilyRequests: U,
                isOverlaySupported: B,
                isClipsBetaTagShowing: F === a.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: V,
                isKeywordFilteringEnabled: H,
                isStaff: W,
                isInappropriateConversationWarningEnabled: Y,
                isInapproprateConversationsDefaultOn: K,
                paymentsBlocked: z,
                isEligibleForQuests: q,
                isStricterMessageRequestsEnabled: $,
                hasLibraryApplication: X,
                hasTOTPEnabled: Q,
                developerMode: J,
                isAdultUser: ee,
                hasSecureFramesVerifiedUserIds: et,
                hasIgnoredUsers: er,
                hasBlockedUsers: en,
                isEligibleForSensitiveContentDefaults: ei,
                inputMode: ea,
                activeInputProfile: eo,
                isInputProfileCustom: es,
                isDataUsage3PToggleEnabled: el,
                isChatMentionSuggestionsSettingEnabled: ec,
                isCrossDMSearchEnabledSettingVisible: eu,
                isRedesignedNotificationsEnabled: ed,
            }),
        [J, F, en, er, X, et, Q, j, ee, q, K, Y, H, B, W, $, U, z, V, D, I, ei, ea, eo, es, el, ec, eu, ed],
    );
}
function z(e) {
    let t = j.R.useField("searchResults"),
        n = K(),
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
function q(e, t, n) {
    return (e === U.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
}
function X(e, t, n) {
    let r = [],
        i = ee(t),
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
                    r.push(H(F({}, t[e]), { tabPredicate: () => null == n || q(e, n, a) }));
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
function J() {
    let e = K(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = D.b.useExperiment({ location: "settings" }),
        i = r.useMemo(
            () =>
                W({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => X(i, e), [i, e]);
}
function $(e) {
    let t = K(),
        n = Y();
    return r.useMemo(() => X(n, t, new Set(e)), [n, t, e]);
}
function ee(e) {
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
function et(e) {
    return Array.from(ee(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
