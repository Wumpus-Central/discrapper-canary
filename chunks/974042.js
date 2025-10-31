n.d(t, { ZP: () => H }), n(539854), n(388685);
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    s = n(570140),
    o = n(194359),
    c = n(81825),
    u = n(353926),
    d = n(633289),
    p = n(5254),
    f = n(91896),
    m = n(441623),
    h = n(199902),
    g = n(271383),
    _ = n(430824),
    b = n(158776),
    E = n(699516),
    O = n(594174),
    I = n(981631),
    y = n(474936);
function v(e, t, n) {
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
function C(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let t = O.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null,
    };
}
function N(e) {
    return {
        status: b.Z.getStatus(e),
        isMobile: b.Z.isMobileOnline(e),
        activities: b.Z.getActivities(e),
        applicationStream: h.Z.getAnyStreamForUser(e),
    };
}
function j(e) {
    let t = [];
    return (
        l()(g.ZP.memberOf(e))
            .map(_.Z.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        {
            mutualGuildsLength: t.length,
            mutualGuilds: t.slice(0, 5),
        }
    );
}
class P extends c.Z {
    get comparator() {
        var e, t, n, r, i;
        return [
            this.type,
            +(null == this.giftIntentType),
            null !=
            (i =
                null != (r = null == (e = this.nickname) ? void 0 : e.toLowerCase())
                    ? r
                    : null == (n = this.user) || null == (t = n.globalName)
                      ? void 0
                      : t.toLowerCase())
                ? i
                : this.usernameLower,
        ];
    }
    constructor(e) {
        var t;
        super(),
            v(this, "key", void 0),
            v(this, "userId", void 0),
            v(this, "type", void 0),
            v(this, "status", void 0),
            v(this, "isMobile", void 0),
            v(this, "activities", void 0),
            v(this, "applicationStream", void 0),
            v(this, "user", void 0),
            v(this, "usernameLower", void 0),
            v(this, "mutualGuildsLength", void 0),
            v(this, "mutualGuilds", void 0),
            v(this, "nickname", void 0),
            v(this, "spam", void 0),
            v(this, "giftIntentType", void 0),
            v(this, "ignoredUser", void 0),
            v(this, "applicationId", void 0),
            v(this, "isGameRelationship", void 0),
            (this.key = e.key),
            (this.userId = e.userId),
            (this.type = e.type),
            (this.status = e.status),
            (this.activities = e.activities),
            (this.applicationStream = e.applicationStream),
            (this.user = e.user),
            (this.isMobile = e.isMobile),
            (this.usernameLower = e.usernameLower),
            (this.mutualGuildsLength = e.mutualGuildsLength),
            (this.mutualGuilds = e.mutualGuilds),
            (this.nickname = e.nickname),
            (this.spam = e.spam),
            (this.giftIntentType = e.giftIntentType),
            (this.ignoredUser = e.ignoredUser),
            (this.applicationId = e.applicationId),
            (this.isGameRelationship = null != (t = e.isGameRelationship) && t);
    }
}
class x {
    reset() {
        let e = new Set(),
            t = Array.from(E.Z.getMutableRelationships().entries()).map((t) => {
                let [n, r] = t;
                return (
                    r === I.OGo.FRIEND && e.add(n),
                    new P(
                        S(
                            C(
                                {
                                    key: n,
                                    type: r,
                                    userId: n,
                                    nickname: E.Z.getNickname(n),
                                },
                                T(n),
                                N(n),
                                j(n),
                            ),
                            {
                                spam: E.Z.isSpam(n),
                                ignoredUser: E.Z.isIgnored(n),
                                giftIntentType:
                                    r === I.OGo.FRIEND && m.Z.isTopAffinityFriendAnniversary({ userId: n })
                                        ? y.hX.FRIEND_ANNIVERSARY
                                        : void 0,
                                applicationId: E.Z.getOriginApplicationId(n),
                            },
                        ),
                    )
                );
            }),
            n = [],
            r = f.Z.getGameRelationships().values(),
            i = new Set();
        r.forEach((t) => {
            let { id: r, applicationId: l, type: a } = t;
            !(a === I.OGo.FRIEND && e.has(r)) &&
                ((a === I.OGo.FRIEND && i.has(r)) ||
                    (a === I.OGo.FRIEND && i.add(r),
                    n.push(
                        new P(
                            S(
                                C(
                                    {
                                        key: "".concat(r, "-").concat(l),
                                        type: a,
                                        userId: r,
                                        applicationId: l,
                                        nickname: E.Z.getNickname(r),
                                    },
                                    T(r),
                                    N(r),
                                    j(r),
                                ),
                                {
                                    spam: E.Z.isSpam(r),
                                    ignoredUser: E.Z.isIgnored(r),
                                    isGameRelationship: !0,
                                },
                            ),
                        ),
                    )));
        });
        let a = l().map(
            p.Z.getSuggestions(),
            (e) =>
                new P(
                    C(
                        {
                            key: e.key,
                            userId: e.key,
                            type: 99,
                            nickname: e.name,
                        },
                        T(e.key),
                        N(e.key),
                        j(e.key),
                    ),
                ),
        );
        return new x(l().concat(t, n, a));
    }
    clone() {
        return new x(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let r = this._rows[n],
                i = r.merge(e(r.userId));
            (t = t || i !== r), (this._rows[n] = i);
        }
        return t;
    }
    filter(e, t) {
        return l()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && "" !== t) {
                    let n = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName]
                        .map((e) => (null == e ? void 0 : e.toLowerCase()))
                        .some((e) => (null == e ? void 0 : e.includes(n)));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case I.pJs.ONLINE:
                        return t.type === I.OGo.FRIEND && t.status !== I.Skl.OFFLINE;
                    case I.pJs.PENDING:
                        return (
                            (t.type === I.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === I.OGo.PENDING_OUTGOING
                        );
                    case I.pJs.SPAM:
                        return t.type === I.OGo.PENDING_INCOMING && t.spam;
                    case I.pJs.PENDING_IGNORED:
                        return t.type === I.OGo.PENDING_INCOMING && t.ignoredUser;
                    case I.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case I.pJs.ALL:
                    default:
                        return t.type === I.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [I.OGo.FRIEND]: 0,
            [I.OGo.PENDING_INCOMING]: 0,
            [I.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [I.OGo.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        v(this, "_rows", void 0), (this._rows = e);
    }
}
let A = !0,
    Z = !1,
    w = I.pJs.ONLINE,
    L = new x(),
    R = !0,
    D = !1;
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    A && (e || (w !== I.pJs.ONLINE && w !== I.pJs.ADD_FRIEND)) && !Z && ((A = !1), (Z = !0), o.Z.fetchRelationships());
}
function k() {
    if (((A = !0), R ? (Z = !1) : M(), (L = L.reset()), D)) return;
    let e = L.getRelationshipCounts();
    w = 0 === e[I.OGo.FRIEND] ? (0 !== e[I.OGo.PENDING_INCOMING] ? I.pJs.PENDING : I.pJs.ADD_FRIEND) : I.pJs.ONLINE;
}
function U() {
    L = R ? new x() : L.reset();
}
function G(e) {
    return function () {
        return !R && !!L.update(e) && ((L = L.clone()), !0);
    };
}
class B extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, h.Z, u.Z, p.Z, f.Z, g.ZP, _.Z, m.Z, b.Z, E.Z, O.default),
            this.syncWith([E.Z], U),
            this.syncWith([f.Z], U),
            this.syncWith([p.Z], U),
            this.syncWith([m.Z], U),
            this.syncWith([O.default], G(T)),
            this.syncWith([b.Z, h.Z], G(N)),
            k();
    }
    getState() {
        return {
            fetching: Z,
            section: w,
            rows: L,
        };
    }
}
v(B, "displayName", "FriendsStore");
let H = new B(s.Z, {
    CONNECTION_OPEN: function () {
        k();
    },
    FRIENDS_SET_SECTION: function (e) {
        (w = e.section), M();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (R = null != t), U(), !R;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        Z = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (A = !0), (Z = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (w = e.section), (D = !0);
    },
});
