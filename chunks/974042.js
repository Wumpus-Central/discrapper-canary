n.d(t, { ZP: () => H }), n(539854), n(388685);
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(570140),
    s = n(194359),
    c = n(81825),
    u = n(353926),
    d = n(633289),
    p = n(5254),
    f = n(91896),
    h = n(365113),
    g = n(441623),
    m = n(199902),
    b = n(271383),
    _ = n(430824),
    O = n(158776),
    E = n(699516),
    y = n(594174),
    v = n(981631),
    I = n(474936);
function C(e, t, n) {
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
function S(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
    let t = y.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null,
    };
}
function j(e) {
    return {
        status: O.Z.getStatus(e),
        isMobile: O.Z.isMobileOnline(e),
        activities: O.Z.getActivities(e),
        applicationStream: m.Z.getAnyStreamForUser(e),
    };
}
function P(e) {
    let t = [];
    return (
        l()(b.ZP.memberOf(e))
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
class x extends c.Z {
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
            C(this, "key", void 0),
            C(this, "userId", void 0),
            C(this, "type", void 0),
            C(this, "status", void 0),
            C(this, "isMobile", void 0),
            C(this, "activities", void 0),
            C(this, "applicationStream", void 0),
            C(this, "user", void 0),
            C(this, "usernameLower", void 0),
            C(this, "mutualGuildsLength", void 0),
            C(this, "mutualGuilds", void 0),
            C(this, "nickname", void 0),
            C(this, "spam", void 0),
            C(this, "giftIntentType", void 0),
            C(this, "ignoredUser", void 0),
            C(this, "applicationId", void 0),
            C(this, "isGameRelationship", void 0),
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
class A {
    reset() {
        let e = new Set(),
            t = Array.from(E.Z.getMutableRelationships().entries()).map((t) => {
                let [n, r] = t;
                return (
                    r === v.OGo.FRIEND && e.add(n),
                    new x(
                        N(
                            S(
                                {
                                    key: n,
                                    type: r,
                                    userId: n,
                                    nickname: E.Z.getNickname(n),
                                },
                                T(n),
                                j(n),
                                P(n),
                            ),
                            {
                                spam: E.Z.isSpam(n),
                                ignoredUser: E.Z.isIgnored(n),
                                giftIntentType:
                                    r === v.OGo.FRIEND && g.Z.isTopAffinityFriendAnniversary({ userId: n })
                                        ? I.hX.FRIEND_ANNIVERSARY
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
            !(a === v.OGo.FRIEND && e.has(r)) &&
                ((a === v.OGo.FRIEND && i.has(r)) ||
                    (a === v.OGo.FRIEND && i.add(r),
                    n.push(
                        new x(
                            N(
                                S(
                                    {
                                        key: "".concat(r, "-").concat(l),
                                        type: a,
                                        userId: r,
                                        applicationId: l,
                                        nickname: E.Z.getNickname(r),
                                    },
                                    T(r),
                                    j(r),
                                    P(r),
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
                new x(
                    S(
                        {
                            key: e.key,
                            userId: e.key,
                            type: 99,
                            nickname: e.name,
                        },
                        T(e.key),
                        j(e.key),
                        P(e.key),
                    ),
                ),
        );
        return new A(l().concat(t, n, a));
    }
    clone() {
        return new A(this._rows);
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
                    case v.pJs.ONLINE:
                        return t.type === v.OGo.FRIEND && t.status !== v.Skl.OFFLINE;
                    case v.pJs.PENDING:
                        return (
                            (t.type === v.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === v.OGo.PENDING_OUTGOING
                        );
                    case v.pJs.SPAM:
                        return t.type === v.OGo.PENDING_INCOMING && t.spam;
                    case v.pJs.PENDING_IGNORED:
                        return t.type === v.OGo.PENDING_INCOMING && t.ignoredUser;
                    case v.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case v.pJs.ALL:
                    default:
                        return t.type === v.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [v.OGo.FRIEND]: 0,
            [v.OGo.PENDING_INCOMING]: 0,
            [v.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [v.OGo.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        C(this, "_rows", void 0), (this._rows = e);
    }
}
let Z = !0,
    w = !1,
    L = v.pJs.ONLINE,
    R = new A(),
    D = !0,
    k = !1;
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    Z && (e || (L !== v.pJs.ONLINE && L !== v.pJs.ADD_FRIEND)) && !w && ((Z = !1), (w = !0), s.Z.fetchRelationships());
}
function U() {
    if (((Z = !0), D ? (w = !1) : M(), (R = R.reset()), k)) return;
    let e = R.getRelationshipCounts();
    0 === e[v.OGo.FRIEND]
        ? (L = 0 !== e[v.OGo.PENDING_INCOMING] ? v.pJs.PENDING : v.pJs.ADD_FRIEND)
        : ((L = v.pJs.ONLINE), h.o.getConfig({ location: "friendstore" }).landOnProfilePage && (L = v.pJs.YOU));
}
function G() {
    R = D ? new A() : R.reset();
}
function B(e) {
    return function () {
        return !D && !!R.update(e) && ((R = R.clone()), !0);
    };
}
class V extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, O.Z, y.default, _.Z, b.ZP, m.Z, p.Z, u.Z, d.Z),
            this.syncWith([E.Z], G),
            this.syncWith([f.Z], G),
            this.syncWith([p.Z], G),
            this.syncWith([g.Z], G),
            this.syncWith([y.default], B(T)),
            this.syncWith([O.Z, m.Z], B(j)),
            U();
    }
    getState() {
        return {
            fetching: w,
            section: L,
            rows: R,
        };
    }
}
C(V, "displayName", "FriendsStore");
let H = new V(o.Z, {
    CONNECTION_OPEN: function () {
        U();
    },
    FRIENDS_SET_SECTION: function (e) {
        (L = e.section), M();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (D = null != t), G(), !D;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        w = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (Z = !0), (w = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (L = e.section), (k = !0);
    },
});
