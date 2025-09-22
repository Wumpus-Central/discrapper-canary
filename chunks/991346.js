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
    u = n(704454),
    d = n(319828),
    f = n(592204),
    _ = n(610697),
    p = n(880257),
    h = n(631885),
    m = n(160913),
    g = n(725727),
    E = n(977156),
    b = n(921157),
    y = n(667172),
    O = n(237292),
    v = n(314897),
    I = n(906467),
    T = n(283595),
    S = n(131951),
    A = n(699516),
    C = n(663389),
    N = n(594174),
    R = n(202527),
    P = n(413182),
    w = n(695346),
    D = n(695463),
    x = n(620163),
    L = n(168308),
    j = n(839469),
    M = n(726985),
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
        r = I.Z.isDeveloper,
        i = [
            {
                header: U.intl.string(U.t.cduTBA),
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
                header: U.intl.string(U.t["4uOdGh"]),
                divider: !0,
                settings: [M.s6.PREMIUM, M.s6.GUILD_BOOSTING, M.s6.SUBSCRIPTIONS, M.s6.GIFT_INVENTORY, M.s6.BILLING],
            },
            {
                header: U.intl.string(U.t.f2n1TE),
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
                settings: [M.s6.CHANGELOG, M.s6.MERCHANDISE, M.s6.HYPESQUAD, M.s6.TOWNHALL],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r
                    ? [
                          M.s6.EXPERIMENTS,
                          M.s6.DEVELOPER_OPTIONS,
                          M.s6.REVENUE_STORYBOOK,
                          M.s6.VIRTUAL_CURRENCY_CONFIGURATION,
                          M.s6.SHOP_KEEPER,
                          M.s6.QUEST_PREVIEW_TOOL,
                          M.s6.QUEST_PREVIEW_TOOL_2,
                          M.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM,
                      ]
                    : [],
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
            header: U.intl.string(U.t.SmHCFR),
            divider: !0,
            settings: [M.s6.ACTIVITY_PRIVACY, M.s6.REGISTERED_GAMES, M.s6.OVERLAY],
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
                    M.s6.SEARCH_NO_RESULTS,
                ],
            },
        ],
        [n],
    );
}
function Y() {
    var e, t, n, o;
    let I = (0, g.YO)().length,
        P = (0, m.U)(),
        j = (0, i.e7)([C.Z], () => C.Z.getProps().searchParams),
        M = (0, h.gU)(),
        U = (0, L.bC)(),
        G = (0, l.Go)(),
        [B] = (0, c.cv)(G ? [a.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: Z } = R.b.useExperiment({ location: "settings" }),
        F = (0, f.Xo)({ location: "settings" }),
        V = null != (n = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        H = (0, O.y0)({ location: "settings" }),
        Y = (0, y.v4)({ location: "settings" }),
        W = (0, s.Q)(),
        K = (0, E.Z)({ location: k.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        z = (0, i.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        q = (0, i.e7)([v.default], () => v.default.hasTOTPEnabled()),
        X = w.Sb.useSetting(),
        Q = (0, _.Z)(),
        { hypeSquadRemoved: J } = d.Z.useExperiment({ location: "settings" }),
        $ = null == (o = (0, p.Z)()) || o,
        ee = (null == (t = (0, b.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: et, hasIgnoredUsers: en } = (0, i.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0,
        })),
        er = (0, u.UQ)("SettingRendererUtils"),
        {
            inputMode: ei,
            activeInputProfile: ea,
            isInputProfileCustom: eo,
        } = (0, i.cj)([S.Z], () => ({
            activeInputProfile: S.Z.getActiveInputProfile(),
            inputMode: S.Z.getMode(),
            isInputProfileCustom: S.Z.isInputProfileCustom(),
        })),
        es = (0, D.W)("useGenerateUserSettingsSections");
    return r.useMemo(
        () =>
            (0, x.iE)({
                unseenGiftCount: I,
                showPrepaidPaymentPastDueWarning: P,
                searchParams: j,
                numOfPendingFamilyRequests: M,
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
                isAdultUser: $,
                hasSecureFramesVerifiedUserIds: ee,
                hypeSquadRemoved: J,
                hasIgnoredUsers: en,
                hasBlockedUsers: et,
                isEligibleForSensitiveContentDefaults: er,
                inputMode: ei,
                activeInputProfile: ea,
                isInputProfileCustom: eo,
                isDataUsage3PToggleEnabled: es,
            }),
        [X, B, et, en, z, ee, q, J, j, $, K, Y, H, F, U, V, Q, M, W, Z, P, I, er, ei, ea, eo, es],
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
                (n.section !== o.ID.CUSTOM || t === M.s6.TEMP_DEVELOPER_EDUCATION_SIDEBAR_ITEM) &&
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
