i.d(t, { ZP: () => J }), i(539854), i(388685);
var n,
    s = i(392711),
    r = i.n(s),
    o = i(442837),
    a = i(570140),
    l = i(194359),
    u = i(81825),
    c = i(353926),
    h = i(633289),
    p = i(5254),
    d = i(91896),
    m = i(441623),
    N = i(199902),
    O = i(271383),
    y = i(430824),
    f = i(158776),
    g = i(699516),
    I = i(594174),
    v = i(981631),
    E = i(474936);
function b(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                b(e, t, i[t]);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
function G(e) {
    let t = I.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null,
    };
}
function P(e) {
    return {
        status: f.Z.getStatus(e),
        isMobile: f.Z.isMobileOnline(e),
        activities: f.Z.getActivities(e),
        applicationStream: N.Z.getAnyStreamForUser(e),
    };
}
function S(e) {
    let t = [];
    return (
        r()(O.ZP.memberOf(e))
            .map(y.Z.getGuild)
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
class D extends u.Z {
    get comparator() {
        var e, t, i, n, s;
        return [
            this.type,
            +(this.giftIntentType !== E.hX.FRIEND_ANNIVERSARY),
            null !=
            (s =
                null != (n = null == (e = this.nickname) ? void 0 : e.toLowerCase())
                    ? n
                    : null == (i = this.user) || null == (t = i.globalName)
                      ? void 0
                      : t.toLowerCase())
                ? s
                : this.usernameLower,
        ];
    }
    constructor(e) {
        var t;
        super(),
            b(this, "key", void 0),
            b(this, "userId", void 0),
            b(this, "type", void 0),
            b(this, "status", void 0),
            b(this, "isMobile", void 0),
            b(this, "activities", void 0),
            b(this, "applicationStream", void 0),
            b(this, "user", void 0),
            b(this, "usernameLower", void 0),
            b(this, "mutualGuildsLength", void 0),
            b(this, "mutualGuilds", void 0),
            b(this, "nickname", void 0),
            b(this, "spam", void 0),
            b(this, "giftIntentType", void 0),
            b(this, "ignoredUser", void 0),
            b(this, "applicationId", void 0),
            b(this, "isGameRelationship", void 0),
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
class C {
    reset() {
        let e = new Set(),
            t = Array.from(g.Z.getMutableRelationships().entries()).map((t) => {
                let [i, n] = t;
                return (
                    n === v.OGo.FRIEND && e.add(i),
                    new D(
                        Z(
                            w(
                                {
                                    key: i,
                                    type: n,
                                    userId: i,
                                    nickname: g.Z.getNickname(i),
                                },
                                G(i),
                                P(i),
                                S(i),
                            ),
                            {
                                spam: g.Z.isSpam(i),
                                ignoredUser: g.Z.isIgnored(i),
                                giftIntentType:
                                    n === v.OGo.FRIEND && m.ZP.getFriendAnniversaries().includes(i)
                                        ? E.hX.FRIEND_ANNIVERSARY
                                        : void 0,
                                applicationId: g.Z.getOriginApplicationId(i),
                            },
                        ),
                    )
                );
            }),
            i = [],
            n = d.Z.getGameRelationships().values(),
            s = new Set();
        n.forEach((t) => {
            let { id: n, applicationId: r, type: o } = t;
            !(o === v.OGo.FRIEND && e.has(n)) &&
                ((o === v.OGo.FRIEND && s.has(n)) ||
                    (o === v.OGo.FRIEND && s.add(n),
                    i.push(
                        new D(
                            Z(
                                w(
                                    {
                                        key: "".concat(n, "-").concat(r),
                                        type: o,
                                        userId: n,
                                        applicationId: r,
                                        nickname: g.Z.getNickname(n),
                                    },
                                    G(n),
                                    P(n),
                                    S(n),
                                ),
                                {
                                    spam: g.Z.isSpam(n),
                                    ignoredUser: g.Z.isIgnored(n),
                                    isGameRelationship: !0,
                                },
                            ),
                        ),
                    )));
        });
        let o = r().map(
            p.Z.getSuggestions(),
            (e) =>
                new D(
                    w(
                        {
                            key: e.key,
                            userId: e.key,
                            type: 99,
                            nickname: e.name,
                        },
                        G(e.key),
                        P(e.key),
                        S(e.key),
                    ),
                ),
        );
        return new C(r().concat(t, i, o));
    }
    clone() {
        return new C(this._rows);
    }
    update(e) {
        let t = !1;
        for (let i = 0; i < this._rows.length; i++) {
            let n = this._rows[i],
                s = n.merge(e(n.userId));
            (t = t || s !== n), (this._rows[i] = s);
        }
        return t;
    }
    filter(e, t) {
        return r()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && "" !== t) {
                    let i = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName]
                        .map((e) => (null == e ? void 0 : e.toLowerCase()))
                        .some((e) => (null == e ? void 0 : e.includes(i)));
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
        b(this, "_rows", void 0), (this._rows = e);
    }
}
let j = !0,
    L = !1,
    k = v.pJs.ONLINE,
    _ = new C(),
    R = !0,
    A = !1;
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    j && (e || (k !== v.pJs.ONLINE && k !== v.pJs.ADD_FRIEND)) && !L && ((j = !1), (L = !0), l.Z.fetchRelationships());
}
function M() {
    if (((j = !0), R ? (L = !1) : F(), (_ = _.reset()), A)) return;
    let e = _.getRelationshipCounts();
    k = 0 === e[v.OGo.FRIEND] ? (0 !== e[v.OGo.PENDING_INCOMING] ? v.pJs.PENDING : v.pJs.ADD_FRIEND) : v.pJs.ONLINE;
}
function x() {
    _ = R ? new C() : _.reset();
}
function T(e) {
    return function () {
        return !R && !!_.update(e) && ((_ = _.clone()), !0);
    };
}
class U extends (n = o.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, N.Z, c.Z, p.Z, d.Z, O.ZP, y.Z, m.ZP, f.Z, g.Z, I.default),
            this.syncWith([g.Z], x),
            this.syncWith([d.Z], x),
            this.syncWith([p.Z], x),
            this.syncWith([m.ZP], x),
            this.syncWith([I.default], T(G)),
            this.syncWith([f.Z, N.Z], T(P)),
            M();
    }
    getState() {
        return {
            fetching: L,
            section: k,
            rows: _,
        };
    }
}
b(U, "displayName", "FriendsStore");
let J = new U(a.Z, {
    CONNECTION_OPEN: function () {
        M();
    },
    FRIENDS_SET_SECTION: function (e) {
        (k = e.section), F();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (R = null != t), x(), !R;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        L = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (j = !0), (L = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (k = e.section), (A = !0);
    },
});
