n.d(t, {
    Gj: () => W,
    Pt: () => Y,
    VO: () => Q,
    ji: () => $,
    q8: () => X,
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
    u = n(657871),
    d = n(610697),
    f = n(880257),
    p = n(631885),
    _ = n(160913),
    m = n(725727),
    h = n(787695),
    g = n(921157),
    E = n(945577),
    b = n(667172),
    y = n(237292),
    O = n(314897),
    v = n(906467),
    S = n(283595),
    I = n(131951),
    T = n(699516),
    C = n(663389),
    A = n(594174),
    N = n(128064),
    P = n(202527),
    R = n(413182),
    D = n(695346),
    w = n(526665),
    x = n(620163),
    L = n(168308),
    j = n(839469),
    M = n(726985),
    k = n(324805),
    U = n(388032);
function G(e, t, n) {
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
                G(e, t, n[t]);
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
function F(e, t) {
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
function V(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = v.Z.isDeveloper,
        i = [
            {
                header: U.intl.string(U.t.cduTBL),
                settings: n
                    ? [
                          M.s6.ACCOUNT,
                          M.s6.GAMES,
                          M.s6.PROFILE_CUSTOMIZATION,
                          M.s6.CONTENT_SOCIAL,
                          M.s6.DATA_PRIVACY,
                          M.s6.PRIVACY_FAMILY_CENTER,
                          M.s6.THIRD_PARTY_ACCESS,
                          M.s6.SESSIONS,
                          M.s6.CLIPS,
                      ]
                    : [
                          M.s6.ACCOUNT,
                          M.s6.GAMES,
                          M.s6.PROFILE_CUSTOMIZATION,
                          M.s6.CONTENT_SOCIAL,
                          M.s6.DATA_PRIVACY,
                          M.s6.PRIVACY_FAMILY_CENTER,
                          M.s6.AUTHORIZED_APPS,
                          M.s6.SESSIONS,
                          M.s6.CONNECTIONS,
                          M.s6.CLIPS,
                      ],
            },
            {
                header: U.intl.string(U.t["4uOdGr"]),
                divider: !0,
                settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING],
            },
            {
                header: U.intl.string(U.t.f2n1TP),
                divider: !0,
                settings: [
                    M.s6.APPEARANCE,
                    M.s6.ACCESSIBILITY,
                    M.s6.VOICE_AND_VIDEO,
                    M.s6.POGGERMODE,
                    M.s6.CHAT,
                    M.s6.NOTIFICATIONS,
                    M.s6.KEYBINDS,
                    M.s6.LANGUAGE,
                    M.s6.WINDOW_SETTINGS,
                    M.s6.LINUX_SETTINGS,
                    M.s6.STREAMER_MODE,
                    M.s6.SETTINGS_ADVANCED,
                ],
            },
            {
                divider: !0,
                settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r ? [M.s6.EXPERIMENTS, M.s6.DEVELOPER_OPTIONS] : [],
            },
            {
                divider: !0,
                settings: [M.s6.LOGOUT],
            },
            {
                divider: !0,
                settings: [M.s6.SOCIAL_LINKS, M.s6.CLIENT_DEBUG_INFO],
            },
        ],
        a = {
            header: U.intl.string(U.t.SmHCFf),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, a);
}
function H() {
    let { shouldMergeGameSettings: e } = P.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = R.b.useExperiment({ location: "settings" }),
        n = V({
            shouldMergeGameSettings: e,
            showRedesignedThirdPartyAccessSettings: t,
        });
    return r.useMemo(
        () => [
            {
                header: U.intl.string(U.t["zkoeq/"]),
                settings: [
                    ...n
                        .map((e) => {
                            let { settings: t } = e;
                            return t;
                        })
                        .flat(1),
                    M.s6.SEARCH_NO_RESULTS,
                ],
            },
        ],
        [n],
    );
}
function Y() {
    var e, t, n, o;
    let v = (0, m.YO)().length,
        R = (0, _.U)(),
        j = (0, i.e7)([C.Z], () => C.Z.getSearchParams()),
        M = (0, p.gU)(),
        U = (0, L.bC)(),
        G = (0, l.w9)(),
        [Z] = (0, c.cv)(G ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: B } = P.b.useExperiment({ location: "settings" }),
        F = null != (n = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        V = (0, y.y0)({ location: "settings" }),
        H = (0, b.v4)({ location: "settings" }),
        Y = (0, s.Q)(),
        W = (0, h.Z)({ location: k.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        K = (0, i.e7)([S.Z], () => S.Z.hasLibraryApplication()),
        z = (0, i.e7)([O.default], () => O.default.hasTOTPEnabled()),
        q = D.Sb.useSetting(),
        Q = (0, d.Z)(),
        X = null == (o = (0, f.Z)()) || o,
        J = (null == (t = (0, g.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: $, hasIgnoredUsers: ee } = (0, i.cj)([T.Z], () => ({
            hasBlockedUsers: T.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: T.Z.getIgnoredIDs().length > 0,
        })),
        et = (0, N.pY)("SettingRendererUtils"),
        {
            inputMode: en,
            activeInputProfile: er,
            isInputProfileCustom: ei,
        } = (0, i.cj)([I.Z], () => ({
            activeInputProfile: I.Z.getActiveInputProfile(),
            inputMode: I.Z.getMode(),
            isInputProfileCustom: I.Z.isInputProfileCustom(),
        })),
        { enabled: ea } = (0, u.zM)("useGenerateUserSettingsSections", { autoTrackExposure: !1 }),
        eo = (0, E.U)({ location: "useGenerateUserSettingsSections" }),
        es = (0, w.gj)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, x.iE)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: R,
                searchParams: j,
                numOfPendingFamilyRequests: M,
                isOverlaySupported: U,
                isClipsBetaTagShowing: Z === a.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: B,
                isStaff: F,
                isInappropriateConversationWarningEnabled: V,
                isInapproprateConversationsDefaultOn: H,
                paymentsBlocked: Y,
                isEligibleForQuests: W,
                isStricterMessageRequestsEnabled: Q,
                hasLibraryApplication: K,
                hasTOTPEnabled: z,
                developerMode: q,
                isAdultUser: X,
                hasSecureFramesVerifiedUserIds: J,
                hasIgnoredUsers: ee,
                hasBlockedUsers: $,
                isEligibleForSensitiveContentDefaults: et,
                inputMode: en,
                activeInputProfile: er,
                isInputProfileCustom: ei,
                isChatMentionSuggestionsSettingEnabled: ea,
                isCrossDMSearchEnabledSettingVisible: eo,
                isRedesignedNotificationsEnabled: es,
            }),
        [q, Z, $, ee, K, J, z, j, X, W, H, V, U, F, Q, M, Y, B, R, v, et, en, er, ei, ea, eo, es],
    );
}
function W(e) {
    let t = j.R.useField("searchResults"),
        n = Y(),
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
function K(e, t, n) {
    return (e === M.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
}
function z(e, t, n) {
    let r = [],
        i = J(t),
        a = q(t, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
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
                    r.push(F(Z({}, t[e]), { tabPredicate: () => null == n || K(e, n, a) }));
                }));
        }),
        r
    );
}
function q(e, t) {
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
    let e = Y(),
        { shouldMergeGameSettings: t } = P.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = R.b.useExperiment({ location: "settings" }),
        i = r.useMemo(
            () =>
                V({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => z(i, e), [i, e]);
}
function X(e) {
    let t = Y(),
        n = H();
    return r.useMemo(() => z(n, t, new Set(e)), [n, t, e]);
}
function J(e) {
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
function $(e) {
    return Array.from(J(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
