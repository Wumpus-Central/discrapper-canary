(n.d(t, { h: () => g, A: () => k }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(343446),
    o = n(50258),
    d = n(812020),
    c = n(253932),
    u = n(617617),
    _ = n(153488),
    E = n(994500);
function A(e) {
    return { enabled: !0 };
}
var f = n(689739),
    h = n(620750),
    I = n(194537),
    p = n(529082);
function m(e, t, n) {
    let i = {};
    for (let r in e) {
        let a = e[r];
        t - a <= n && (i[r] = a);
    }
    return i;
}
var T = n(652215);
let g = 6048e5;
function S() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        lastKnownGiftIntentDismissedAtMs: 0,
    };
}
let N = S(),
    C = [],
    O = new Set(),
    R = new Set(),
    L = {},
    y = null,
    D = null,
    b = null;
function v() {
    return b ?? Date.now();
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { highestAffinity: t, highAffinity: n } = (function (e, t, n) {
            let i = new Set(),
                r = new Set();
            if (n) {
                let t = Math.ceil(e.length / 2);
                (e.slice(0, t).forEach((e) => {
                    i.add(e);
                }),
                    e.forEach((e) => {
                        r.add(e);
                    }));
            } else
                for (let n of e) {
                    let e = t(n);
                    (null != e && e > 0.7 && i.add(n), null != e && e > 0.5 && r.add(n));
                }
            return { highestAffinity: i, highAffinity: r };
        })(C, (e) => d.A.getUserAffinity(e)?.dmProbability, e);
    ((O = t), (R = n));
}
function M() {
    if (null != y) return void G(y);
    if ((U(), !_.A.hasConsented(T.YAq.PERSONALIZATION) || !c.oz.getSetting())) return;
    for (let e of E.A.getFriendIDs()) {
        let t = E.A.getSince(e),
            n = d.A.getUserAffinity(e);
        if (E.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
            let n = new Date(t);
            (function (e) {
                let t = new Date(),
                    n = t.getFullYear();
                for (let i of [-1, 0, 1]) {
                    let r = (0, f.default)(e, n + i);
                    if (!(0, h.default)(r, e) && 7 >= Math.abs((0, I.A)(t, r))) return !0;
                }
                return !1;
            })(n) && (C.push(e), (L[e] = { friendsSince: n }));
        }
    }
    if (0 === C.length) return;
    let { enabled: e } = A({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    e ? (C.sort((e, t) => d.A.compareByDmProbability(e, t)), P()) : U();
}
function U() {
    ((C.length = 0), (O = new Set()), (R = new Set()), (L = {}));
}
function w(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = v());
}
function G(e) {
    U();
    let { enabled: t } = A({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t || !c.oz.getSetting()) return;
    y = e;
    let n = E.A.getFriendIDs().filter((e) => !E.A.isIgnored(e)),
        i = new Set(n),
        a = null != D && D.length === e && D.every((e) => i.has(e)) ? D : r().sampleSize(n, e);
    ((D = a),
        a.forEach((e) => {
            let t = E.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                (C.push(e), (L[e] = { friendsSince: n }));
            }
        }),
        C.sort((e, t) => d.A.compareByDmProbability(e, t)),
        P(!0));
}
class x extends a.Ay.PersistedStore {
    static displayName = "PremiumGiftingIntentStore";
    static persistKey = "PremiumGiftingIntentStore";
    static migrations = [
        (e) =>
            null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: e.friendsTabBadgeLastDismissedTime ?? null,
                      lastShownFriendsListGiftIntents: e.lastShownFriendsListGiftIntents ?? [],
                      messageGiftIntentLastShownMap: {},
                  },
        (e) =>
            null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null,
                      lastShownFriendsListGiftIntents: e.lastShownFriendsListGiftIntents ?? [],
                      messageGiftIntentLastShownMap: e.messageGiftIntentLastShownMap ?? {},
                      giftUnreadNotificationLastDismissedTimes: [],
                  },
        (e) =>
            null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null,
                      lastShownFriendsListGiftIntents: e.lastShownFriendsListGiftIntents ?? [],
                      messageGiftIntentLastShownMap: e.messageGiftIntentLastShownMap ?? {},
                      giftUnreadNotificationLastDismissedTimes: e.giftUnreadNotificationLastDismissedTimes ?? [],
                      profilePopoutGiftIntentsDismissMap: {},
                  },
        (e) => (null == e ? e : { ...e, lastKnownGiftIntentDismissedAtMs: e.lastKnownGiftIntentDismissedAtMs ?? 0 }),
        (e) => (null == e || delete e.profilePopoutGiftIntentsDismissMap, e),
        (e) => {
            if (null == e) return e;
            let t = { ...e };
            return (delete t.giftUnreadNotificationLastDismissedTimes, t);
        },
    ];
    initialize(e) {
        ((N = S()),
            null != e &&
                ((N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (N.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (N.lastKnownGiftIntentDismissedAtMs = e.lastKnownGiftIntentDismissedAtMs ?? 0)),
            this.syncWith([E.A, d.A, _.A, l.A, o.A, u.A], M),
            (N.messageGiftIntentLastShownMap = m(N.messageGiftIntentLastShownMap, v(), 12096e5)));
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return C;
    }
    canShowFriendsTabBadge() {
        return Array.from(R).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = L[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round((0, p.A)(new Date(), t) / 12));
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return y;
    }
    getDevToolCurrentDate() {
        return b;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(O);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(R);
    }
    getMessageGiftIntentLastShownMap() {
        return N.messageGiftIntentLastShownMap;
    }
    getLastKnownGiftIntentDismissedAtMs() {
        return N.lastKnownGiftIntentDismissedAtMs;
    }
}
let k = new x(s.h, {
    CONNECTION_OPEN: function () {
        U();
    },
    LOGOUT: function () {
        ((N = S()), U());
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        w(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        N.lastShownFriendsListGiftIntents = Array.from(C);
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        w(t);
    },
    GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function (e) {
        let { dismissals: t, settingsTimestampMs: n } = e,
            i = { ...N.messageGiftIntentLastShownMap };
        for (let { targetId: e, dismissedAtMs: n } of t) {
            let t = i[e];
            i[e] = null == t ? n : Math.max(t, n);
        }
        ((N.messageGiftIntentLastShownMap = m(i, v(), 1296e6)), (N.lastKnownGiftIntentDismissedAtMs = n));
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        N.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        N.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            ((y = null), (D = null), M());
            return;
        }
        G(t);
    },
    DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function () {
        return null != y && ((D = null), G(y), !0);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        b = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        b = null;
    },
});
