n.d(t, {
    Gj: () => Y,
    Pt: () => H,
    VO: () => q,
    ji: () => J,
    q8: () => X,
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
    d = n(610697),
    f = n(880257),
    _ = n(631885),
    p = n(160913),
    h = n(725727),
    m = n(977156),
    g = n(921157),
    E = n(667172),
    b = n(237292),
    y = n(314897),
    O = n(906467),
    v = n(283595),
    I = n(131951),
    T = n(699516),
    S = n(663389),
    A = n(594174),
    C = n(128064),
    N = n(202527),
    R = n(413182),
    P = n(695346),
    w = n(695463),
    D = n(620163),
    L = n(168308),
    x = n(839469),
    j = n(726985),
    M = n(46140),
    k = n(388032);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
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
function Z(e, t) {
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
function F(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        r = O.Z.isDeveloper,
        i = [
            {
                header: k.intl.string(k.t.cduTBA),
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
                header: k.intl.string(k.t["4uOdGh"]),
                divider: !0,
                settings: [j.s6.PREMIUM, j.s6.GUILD_BOOSTING, j.s6.SUBSCRIPTIONS, j.s6.GIFT_INVENTORY, j.s6.BILLING],
            },
            {
                header: k.intl.string(k.t.f2n1TE),
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
            header: k.intl.string(k.t.SmHCFR),
            divider: !0,
            settings: [j.s6.ACTIVITY_PRIVACY, j.s6.REGISTERED_GAMES, j.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, a);
}
function V() {
    let { shouldMergeGameSettings: e } = N.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = R.b.useExperiment({ location: "settings" }),
        n = F({
            shouldMergeGameSettings: e,
            showRedesignedThirdPartyAccessSettings: t,
        });
    return r.useMemo(
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
                    j.s6.SEARCH_NO_RESULTS,
                ],
            },
        ],
        [n],
    );
}
function H() {
    var e, t, n, o;
    let O = (0, h.YO)().length,
        R = (0, p.U)(),
        x = (0, i.e7)([S.Z], () => S.Z.getSearchParams()),
        j = (0, _.gU)(),
        k = (0, L.bC)(),
        U = (0, l.Go)(),
        [G] = (0, c.cv)(U ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: B } = N.b.useExperiment({ location: "settings" }),
        Z = (0, u.Xo)({ location: "settings" }),
        F = null != (n = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        V = (0, b.y0)({ location: "settings" }),
        H = (0, E.v4)({ location: "settings" }),
        Y = (0, s.Q)(),
        W = (0, m.Z)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        K = (0, i.e7)([v.Z], () => v.Z.hasLibraryApplication()),
        z = (0, i.e7)([y.default], () => y.default.hasTOTPEnabled()),
        q = P.Sb.useSetting(),
        X = (0, d.Z)(),
        Q = null == (o = (0, f.Z)()) || o,
        J = (null == (t = (0, g.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: $, hasIgnoredUsers: ee } = (0, i.cj)([T.Z], () => ({
            hasBlockedUsers: T.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: T.Z.getIgnoredIDs().length > 0,
        })),
        et = (0, C.pY)("SettingRendererUtils"),
        {
            inputMode: en,
            activeInputProfile: er,
            isInputProfileCustom: ei,
        } = (0, i.cj)([I.Z], () => ({
            activeInputProfile: I.Z.getActiveInputProfile(),
            inputMode: I.Z.getMode(),
            isInputProfileCustom: I.Z.isInputProfileCustom(),
        })),
        ea = (0, w.W)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, D.iE)({
                unseenGiftCount: O,
                showPrepaidPaymentPastDueWarning: R,
                searchParams: x,
                numOfPendingFamilyRequests: j,
                isOverlaySupported: k,
                isClipsBetaTagShowing: G === a.z.CLIPS_SETTINGS_BETA_TAG,
                shouldMergeGameSettings: B,
                isKeywordFilteringEnabled: Z,
                isStaff: F,
                isInappropriateConversationWarningEnabled: V,
                isInapproprateConversationsDefaultOn: H,
                paymentsBlocked: Y,
                isEligibleForQuests: W,
                isStricterMessageRequestsEnabled: X,
                hasLibraryApplication: K,
                hasTOTPEnabled: z,
                developerMode: q,
                isAdultUser: Q,
                hasSecureFramesVerifiedUserIds: J,
                hasIgnoredUsers: ee,
                hasBlockedUsers: $,
                isEligibleForSensitiveContentDefaults: et,
                inputMode: en,
                activeInputProfile: er,
                isInputProfileCustom: ei,
                isDataUsage3PToggleEnabled: ea,
            }),
        [q, G, $, ee, K, J, z, x, Q, W, H, V, Z, k, F, X, j, Y, B, R, O, et, en, er, ei, ea],
    );
}
function Y(e) {
    let t = x.R.useField("searchResults"),
        n = H(),
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
function W(e, t, n) {
    return (e === j.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
}
function K(e, t, n) {
    let r = [],
        i = Q(t),
        a = z(t, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
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
                    r.push(Z(G({}, t[e]), { tabPredicate: () => null == n || W(e, n, a) }));
                }));
        }),
        r
    );
}
function z(e, t) {
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
function q() {
    let e = H(),
        { shouldMergeGameSettings: t } = N.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = R.b.useExperiment({ location: "settings" }),
        i = r.useMemo(
            () =>
                F({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n,
                }),
            [t, n],
        );
    return r.useMemo(() => K(i, e), [i, e]);
}
function X(e) {
    let t = H(),
        n = V();
    return r.useMemo(() => K(n, t, new Set(e)), [n, t, e]);
}
function Q(e) {
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
function J(e) {
    return Array.from(Q(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
