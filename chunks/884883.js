(n.d(t, { h: () => m, A: () => G }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(343446),
    o = n(340344),
    d = n(812020),
    c = n(253932),
    u = n(617617),
    _ = n(153488),
    E = n(994500);
function A(e) {
    return { enabled: !0 };
}
var f = n(536637),
    h = n.n(f);
function I(e, t, n) {
    let i = {};
    for (let r in e) {
        let a = e[r];
        t - a <= n && (i[r] = a);
    }
    return i;
}
var p = n(652215);
let m = 6048e5;
function g() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        lastKnownGiftIntentDismissedAtMs: 0,
    };
}
let T = g(),
    S = [],
    N = new Set(),
    C = new Set(),
    O = {},
    R = null,
    L = null,
    y = null;
function D() {
    return y ?? Date.now();
}
function b() {
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
        })(S, (e) => d.A.getUserAffinity(e)?.dmProbability, e);
    ((N = t), (C = n));
}
function v() {
    if (null != R) return void U(R);
    if ((P(), !_.A.hasConsented(p.YAq.PERSONALIZATION) || !c.oz.getSetting())) return;
    for (let e of E.A.getFriendIDs()) {
        let t = E.A.getSince(e),
            n = d.A.getUserAffinity(e);
        if (E.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
            let n = new Date(t);
            (function (e) {
                let t = new Date(),
                    n = t.getFullYear();
                for (let i of [-1, 0, 1]) {
                    let r = new Date(e);
                    if ((r.setFullYear(n + i), !h()(r).isSame(e, "day") && 7 >= Math.abs(h()(t).diff(r, "days"))))
                        return !0;
                }
                return !1;
            })(n) && (S.push(e), (O[e] = { friendsSince: n }));
        }
    }
    if (0 === S.length) return;
    let { enabled: e } = A({ location: "PremiumGiftingIntentStore updateFriendAnniversaries" });
    e ? (S.sort((e, t) => d.A.compareByDmProbability(e, t)), b()) : P();
}
function P() {
    ((S.length = 0), (N = new Set()), (C = new Set()), (O = {}));
}
function M(e) {
    null == T.messageGiftIntentLastShownMap[e] && (T.messageGiftIntentLastShownMap[e] = D());
}
function U(e) {
    P();
    let { enabled: t } = A({ location: "PremiumGiftingIntentStore generateFriendAnniversaries" });
    if (!t || !c.oz.getSetting()) return;
    R = e;
    let n = E.A.getFriendIDs().filter((e) => !E.A.isIgnored(e)),
        i = new Set(n),
        a = null != L && L.length === e && L.every((e) => i.has(e)) ? L : r().sampleSize(n, e);
    ((L = a),
        a.forEach((e) => {
            let t = E.A.getSince(e);
            if (null != t) {
                let n = new Date(t);
                (S.push(e), (O[e] = { friendsSince: n }));
            }
        }),
        S.sort((e, t) => d.A.compareByDmProbability(e, t)),
        b(!0));
}
class w extends a.Ay.PersistedStore {
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
        ((T = g()),
            null != e &&
                ((T.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime),
                (T.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)),
                (T.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap }),
                (T.lastKnownGiftIntentDismissedAtMs = e.lastKnownGiftIntentDismissedAtMs ?? 0)),
            this.syncWith([E.A, d.A, _.A, l.A, o.A, u.A], v),
            (T.messageGiftIntentLastShownMap = I(T.messageGiftIntentLastShownMap, D(), 12096e5)));
    }
    getState() {
        return T;
    }
    getFriendAnniversaries() {
        return S;
    }
    canShowFriendsTabBadge() {
        return Array.from(C).some((e) => !T.lastShownFriendsListGiftIntents.includes(e));
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = O[e];
        return null == n ? 0 : ((t = n.friendsSince), Math.round(h()().diff(t, "months") / 12));
    }
    isGiftIntentMessageInCooldown(e) {
        return null != T.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return R;
    }
    getDevToolCurrentDate() {
        return y;
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(N);
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(C);
    }
    getMessageGiftIntentLastShownMap() {
        return T.messageGiftIntentLastShownMap;
    }
    getLastKnownGiftIntentDismissedAtMs() {
        return T.lastKnownGiftIntentDismissedAtMs;
    }
}
let G = new w(s.h, {
    CONNECTION_OPEN: function () {
        P();
    },
    LOGOUT: function () {
        ((T = g()), P());
    },
    MESSAGE_GIFT_INTENT_SHOWN: function (e) {
        let { recipientUserId: t } = e;
        M(t);
    },
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: function () {
        T.lastShownFriendsListGiftIntents = Array.from(S);
    },
    GIFT_INTENT_FLOW_PURCHASED_GIFT: function (e) {
        let { recipientUserId: t } = e;
        M(t);
    },
    GIFT_INTENT_DISMISSALS_FETCH_SUCCESS: function (e) {
        let { dismissals: t, settingsTimestampMs: n } = e,
            i = { ...T.messageGiftIntentLastShownMap };
        for (let { targetId: e, dismissedAtMs: n } of t) {
            let t = i[e];
            i[e] = null == t ? n : Math.max(t, n);
        }
        ((T.messageGiftIntentLastShownMap = I(i, D(), 1296e6)), (T.lastKnownGiftIntentDismissedAtMs = n));
    },
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: function () {
        T.lastShownFriendsListGiftIntents = [];
    },
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: function () {
        T.messageGiftIntentLastShownMap = {};
    },
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: function (e) {
        let { total: t } = e;
        if (null == t) {
            ((R = null), (L = null), v());
            return;
        }
        U(t);
    },
    DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES: function () {
        return null != R && ((L = null), U(R), !0);
    },
    DEV_TOOLS_SET_CURRENT_DATE: function (e) {
        let { date: t } = e;
        y = t;
    },
    DEV_TOOLS_RESET_CURRENT_DATE: function () {
        y = null;
    },
});
