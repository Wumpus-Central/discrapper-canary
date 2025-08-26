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
    o = n(704215),
    a = n(493544),
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
    D = n(620163),
    x = n(168308),
    L = n(839469),
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
        r = I.Z.isDeveloper,
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
                settings: [j.s6.CHANGELOG, j.s6.MERCHANDISE, j.s6.HYPESQUAD, j.s6.TOWNHALL],
            },
            {
                header: "Developer Only",
                divider: !0,
                settings: r
                    ? [
                          j.s6.EXPERIMENTS,
                          j.s6.DEVELOPER_OPTIONS,
                          j.s6.HOTSPOT_OPTIONS,
                          j.s6.DISMISSIBLE_CONTENT_OPTIONS,
                          j.s6.PAYMENT_FLOW_MODALS,
                          j.s6.REVENUE_STORYBOOK,
                          j.s6.VIRTUAL_CURRENCY_CONFIGURATION,
                          j.s6.DESIGN_SYSTEMS,
                          j.s6.INTL_TESTING,
                          j.s6.SHOP_KEEPER,
                          j.s6.WEB_SETTING_TREE_TOOL,
                          j.s6.QUEST_PREVIEW_TOOL,
                          j.s6.QUEST_PREVIEW_TOOL_2,
                          j.s6.QUEST_MINOR_REWARD_CAPPING_CONFIG,
                      ]
                    : [],
            },
            {
                divider: !0,
                settings: [j.s6.LOGOUT],
            },
            {
                divider: !0,
                settings: [j.s6.SOCIAL_LINKS, j.s6.CLIENT_DEBUG_INFO],
            },
        ],
        o = {
            header: k.intl.string(k.t.SmHCFR),
            divider: !0,
            settings: [j.s6.ACTIVITY_PRIVACY, j.s6.REGISTERED_GAMES, j.s6.OVERLAY],
        };
    return t ? i : i.toSpliced(3, 0, o);
}
function V() {
    let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: "settings" }),
        { showRedesign: t } = P.b.useExperiment({ location: "settings" }),
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
    var e, t, n, a;
    let I = (0, g.YO)().length,
        P = (0, m.U)(),
        L = (0, i.e7)([C.Z], () => C.Z.getProps().impressionSource),
        j = (0, h.gU)(),
        k = (0, x.bC)(),
        U = (0, l.Go)(),
        [G] = (0, c.cv)(U ? [o.z.CLIPS_SETTINGS_BETA_TAG] : []),
        { shouldMergeGameSettings: B } = R.b.useExperiment({ location: "settings" }),
        Z = (0, f.Xo)({ location: "settings" }),
        F = null != (n = null == (e = N.default.getCurrentUser()) ? void 0 : e.isStaff()) && n,
        V = (0, O.y0)({ location: "settings" }),
        H = (0, y.v4)({ location: "settings" }),
        Y = (0, s.Q)(),
        W = (0, E.Z)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        K = (0, i.e7)([T.Z], () => T.Z.hasLibraryApplication()),
        z = (0, i.e7)([v.default], () => v.default.hasTOTPEnabled()),
        q = w.Sb.useSetting(),
        X = (0, _.Z)(),
        { hypeSquadRemoved: Q } = d.Z.useExperiment({ location: "settings" }),
        J = null == (a = (0, p.Z)()) || a,
        $ = (null == (t = (0, b.s)()) ? void 0 : t.length) > 0,
        { hasBlockedUsers: ee, hasIgnoredUsers: et } = (0, i.cj)([A.Z], () => ({
            hasBlockedUsers: A.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: A.Z.getIgnoredIDs().length > 0,
        })),
        en = (0, u.UQ)("SettingRendererUtils"),
        {
            inputMode: er,
            activeInputProfile: ei,
            isInputProfileCustom: eo,
        } = (0, i.cj)([S.Z], () => ({
            activeInputProfile: S.Z.getActiveInputProfile(),
            inputMode: S.Z.getMode(),
            isInputProfileCustom: S.Z.isInputProfileCustom(),
        }));
    return r.useMemo(
        () =>
            (0, D.i)({
                unseenGiftCount: I,
                showPrepaidPaymentPastDueWarning: P,
                impressionSource: L,
                numOfPendingFamilyRequests: j,
                isOverlaySupported: k,
                isClipsBetaTagShowing: G === o.z.CLIPS_SETTINGS_BETA_TAG,
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
                isAdultUser: J,
                hasSecureFramesVerifiedUserIds: $,
                hypeSquadRemoved: Q,
                hasIgnoredUsers: et,
                hasBlockedUsers: ee,
                isEligibleForSensitiveContentDefaults: en,
                inputMode: er,
                activeInputProfile: ei,
                isInputProfileCustom: eo,
            }),
        [q, G, ee, et, K, $, z, Q, L, J, W, H, V, Z, k, F, X, j, Y, B, P, I, en, er, ei, eo],
    );
}
function Y(e) {
    let { searchResults: t } = (0, L.E)(),
        n = H(),
        r = n[e],
        i = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === r.section;
            }),
        ),
        o = Object.fromEntries(
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
        a = new Set(),
        s = (e) => {
            let t = i[e];
            if (null == t) return;
            a.add(e);
            let n = t.parent;
            null != n && s(n);
        },
        l = (e) => {
            for (let t of (a.add(e),
            Object.entries(o)
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
        if (!a.has(e)) {
            if (null != i[e].element && null == i[e].parent) {
                a.clear();
                break;
            }
            Object.values(o).includes(e) && l(e), s(e);
        }
    return a;
}
function W(e, t, n) {
    return (e === j.s6.SEARCH_NO_RESULTS && 0 === t.size) || n.has(e) || t.has(e);
}
function K(e, t, n) {
    let r = [],
        i = Q(t),
        o = z(t, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && r.push({ section: a.ID.DIVIDER }),
                null != e.header &&
                    r.push({
                        section: a.ID.HEADER,
                        label: e.header,
                    }),
                e.settings.forEach((e) => {
                    r.push(Z(G({}, t[e]), { tabPredicate: () => null == n || W(e, n, o) }));
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
        { shouldMergeGameSettings: t } = R.b.useExperiment({ location: "settings" }),
        { showRedesign: n } = P.b.useExperiment({ location: "settings" }),
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
            return n.section !== a.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        }),
    );
}
function J(e) {
    return Array.from(Q(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
