n.d(t, {
    Gj: () => W,
    Pt: () => Y,
    VO: () => X,
    ji: () => $,
    q8: () => Q,
}),
    n(836215),
    n(472816),
    n(794429),
    n(388685),
    n(467055),
    n(539854);
var r = n(647438),
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
    g = n(977156),
    E = n(921157),
    b = n(667172),
    y = n(237292),
    O = n(314897),
    v = n(906467),
    I = n(283595),
    T = n(131951),
    S = n(699516),
    A = n(663389),
    C = n(594174),
    N = n(128064),
    R = n(202527),
    P = n(413182),
    w = n(695346),
    D = n(695463),
    L = n(620163),
    x = n(168308),
    M = n(839469),
    j = n(726985),
    k = n(46140),
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
function B(e) {
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
function Z(e, t) {
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
            : Z(Object(t)).forEach(function (n) {
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
                header: U.intl.string(U.t.cduTBA),
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
                header: U.intl.string(U.t["4uOdGh"]),
                divider: !0,
                settings: [j.s6.PREMIUM, j.s6.GUILD_BOOSTING, j.s6.SUBSCRIPTIONS, j.s6.GIFT_INVENTORY, j.s6.BILLING],
            },
            {
                header: U.intl.string(U.t.f2n1TE),
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
            header: U.intl.string(U.t.SmHCFR),
            divider: !0,
            settings: [j.s6.ACTIVITY_PRIVACY, j.s6.REGISTERED_GAMES, j.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, a);
}
function H() {
    let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = P.b.useExperiment({ location: "settings" }),
        n = V({
            shouldMergeGameSettings: e,
            showRedesignedThirdPartyAccessSettings: t,
        });
    return r.useMemo(
        () => [
            {
                header: U.intl.string(U.t.zkoeq6),
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
function Y() {
    var e, t, n, o;
    let v = (0, m.YO)().length,
        P = (0, h.U)(),
        M = (0, i.e7)([A.Z], () => A.Z.getSearchParams()),
        j = (0, p.gU)(),
        U = (0, x.bC)(),
        G = (0, l.Go)(),
        [B] = (0, c.cv)(G ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: Z } = R.b.useExperiment({ location: "settings" }),
        F = (0, u.Xo)({ location: "settings" }),
        V = null != (n = null == (e = C.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        H = (0, y.y0)({ location: "settings" }),
        Y = (0, b.v4)({ location: "settings" }),
        W = (0, s.Q)(),
        K = (0, g.Z)({ location: k.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        z = (0, i.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        q = (0, i.e7)([O.default], () => O.default.hasTOTPEnabled()),
        X = w.Sb.useSetting(),
        Q = (0, f.Z)(),
        J = null == (o = (0, _.Z)()) || o,
        $ = (null == (t = (0, E.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: ee, hasIgnoredUsers: et } = (0, i.cj)([S.Z], () => ({
            hasBlockedUsers: S.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: S.Z.getIgnoredIDs().length > 0,
        })),
        en = (0, N.pY)("SettingRendererUtils"),
        {
            inputMode: er,
            activeInputProfile: ei,
            isInputProfileCustom: ea,
        } = (0, i.cj)([T.Z], () => ({
            activeInputProfile: T.Z.getActiveInputProfile(),
            inputMode: T.Z.getMode(),
            isInputProfileCustom: T.Z.isInputProfileCustom(),
        })),
        eo = (0, D.W)("useGenerateUserSettingsSections"),
        { enabled: es } = (0, d.zM)("useGenerateUserSettingsSections", { autoTrackExposure: !1 });
    return r.useMemo(
        () =>
            (0, L.iE)({
                unseenGiftCount: v,
                showPrepaidPaymentPastDueWarning: P,
                searchParams: M,
                numOfPendingFamilyRequests: j,
                isOverlaySupported: U,
                isClipsBetaTagShowing: B === a.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: Z,
                isKeywordFilteringEnabled: F,
                isStaff: V,
                isInappropriateConversationWarningEnabled: H,
                isInapproprateConversationsDefaultOn: Y,
                paymentsBlocked: W,
                isEligibleForQuests: K,
                isStricterMessageRequestsEnabled: Q,
                hasLibraryApplication: z,
                hasTOTPEnabled: q,
                developerMode: X,
                isAdultUser: J,
                hasSecureFramesVerifiedUserIds: $,
                hasIgnoredUsers: et,
                hasBlockedUsers: ee,
                isEligibleForSensitiveContentDefaults: en,
                inputMode: er,
                activeInputProfile: ei,
                isInputProfileCustom: ea,
                isDataUsage3PToggleEnabled: eo,
                isChatMentionSuggestionsSettingEnabled: es,
            }),
        [X, B, ee, et, z, $, q, M, J, K, Y, H, F, U, V, Q, j, W, Z, P, v, en, er, ei, ea, eo, es],
    );
}
function W(e) {
    let t = M.R.useField("searchResults"),
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
    return (e === j.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
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
                    r.push(F(B({}, t[e]), { tabPredicate: () => null == n || K(e, n, a) }));
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
function X() {
    let e = Y(),
        { shouldMergeGameSettings: t } = R.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = P.b.useExperiment({ location: "settings" }),
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
function Q(e) {
    let t = Y(),
        n = H();
    return r.useMemo(() => z(n, t, new Set(e)), [n, t, e]);
}
function J(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return (
                (n.section !== o.ID.CUSTOM || t === j.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM) &&
                null != n.searchableTitles &&
                (null == n.predicate || n.predicate())
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
