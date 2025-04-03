n.d(t, { ZP: () => V }), n(653041), n(47120);
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(570140),
    s = n(194359),
    c = n(81825),
    u = n(353926),
    d = n(5254),
    p = n(372460),
    h = n(91896),
    f = n(441623),
    g = n(199902),
    m = n(271383),
    b = n(430824),
    _ = n(158776),
    E = n(699516),
    O = n(594174),
    N = n(981631),
    y = n(474936);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function S(e) {
    let t = O.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function T(e) {
    return {
        status: _.Z.getStatus(e),
        isMobile: _.Z.isMobileOnline(e),
        activities: _.Z.getActivities(e),
        applicationStream: g.Z.getAnyStreamForUser(e)
    };
}
function P(e) {
    let t = [];
    return (
        l()(m.ZP.memberOf(e))
            .map(b.Z.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        {
            mutualGuildsLength: t.length,
            mutualGuilds: t.slice(0, 5)
        }
    );
}
class j extends c.Z {
    get comparator() {
        var e, t, n, r, i;
        return [this.type, +(null == this.giftIntentType), null != (i = null != (r = null == (e = this.nickname) ? void 0 : e.toLowerCase()) ? r : null == (n = this.user) || null == (t = n.globalName) ? void 0 : t.toLowerCase()) ? i : this.usernameLower];
    }
    constructor(e) {
        var t;
        super(), I(this, 'key', void 0), I(this, 'userId', void 0), I(this, 'type', void 0), I(this, 'status', void 0), I(this, 'isMobile', void 0), I(this, 'activities', void 0), I(this, 'applicationStream', void 0), I(this, 'user', void 0), I(this, 'usernameLower', void 0), I(this, 'mutualGuildsLength', void 0), I(this, 'mutualGuilds', void 0), I(this, 'nickname', void 0), I(this, 'spam', void 0), I(this, 'giftIntentType', void 0), I(this, 'ignoredUser', void 0), I(this, 'applicationId', void 0), I(this, 'isGameRelationship', void 0), (this.key = e.key), (this.userId = e.userId), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam), (this.giftIntentType = e.giftIntentType), (this.ignoredUser = e.ignoredUser), (this.applicationId = e.applicationId), (this.isGameRelationship = null != (t = e.isGameRelationship) && t);
    }
}
class A {
    reset() {
        let e = new Set(),
            t = (0, p.r8)({ location: 'FriendsStore' }),
            n = l().map(
                E.Z.getRelationships(),
                (n, r) => (
                    n === N.OGo.FRIEND && e.add(r),
                    new j(
                        C(
                            v(
                                {
                                    key: r,
                                    type: n,
                                    userId: r,
                                    nickname: E.Z.getNickname(r)
                                },
                                S(r),
                                T(r),
                                P(r)
                            ),
                            {
                                spam: E.Z.isSpam(r),
                                ignoredUser: E.Z.isIgnored(r),
                                giftIntentType: n === N.OGo.FRIEND && f.Z.isTopAffinityFriendAnniversary({ userId: r }) ? y.hX.FRIEND_ANNIVERSARY : void 0,
                                applicationId: t ? E.Z.getOriginApplicationId(r) : void 0
                            }
                        )
                    )
                )
            ),
            r = [];
        if (t) {
            let t = h.Z.getGameRelationships().values(),
                n = new Set();
            t.forEach((t) => {
                let { id: i, applicationId: l, type: a } = t;
                !(a === N.OGo.FRIEND && e.has(i)) &&
                    ((a === N.OGo.FRIEND && n.has(i)) ||
                        (a === N.OGo.FRIEND && n.add(i),
                        r.push(
                            new j(
                                C(
                                    v(
                                        {
                                            key: ''.concat(i, '-').concat(l),
                                            type: a,
                                            userId: i,
                                            applicationId: l,
                                            nickname: E.Z.getNickname(i)
                                        },
                                        S(i),
                                        T(i),
                                        P(i)
                                    ),
                                    {
                                        spam: E.Z.isSpam(i),
                                        ignoredUser: E.Z.isIgnored(i),
                                        isGameRelationship: !0
                                    }
                                )
                            )
                        )));
            });
        }
        let i = l().map(
            d.Z.getSuggestions(),
            (e) =>
                new j(
                    v(
                        {
                            key: e.key,
                            userId: e.key,
                            type: 99,
                            nickname: e.name
                        },
                        S(e.key),
                        T(e.key),
                        P(e.key)
                    )
                )
        );
        return new A(l().concat(n, r, i));
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
                if (null != t && '' !== t) {
                    let n = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName].map((e) => (null == e ? void 0 : e.toLowerCase())).some((e) => (null == e ? void 0 : e.includes(n)));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case N.pJs.ONLINE:
                        return t.type === N.OGo.FRIEND && t.status !== N.Skl.OFFLINE;
                    case N.pJs.PENDING:
                        return (t.type === N.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser) || t.type === N.OGo.PENDING_OUTGOING;
                    case N.pJs.SPAM:
                        return t.type === N.OGo.PENDING_INCOMING && t.spam;
                    case N.pJs.PENDING_IGNORED:
                        return t.type === N.OGo.PENDING_INCOMING && t.ignoredUser;
                    case N.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case N.pJs.ALL:
                    default:
                        return t.type === N.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [N.OGo.FRIEND]: 0,
            [N.OGo.PENDING_INCOMING]: 0,
            [N.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [N.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        I(this, '_rows', void 0), (this._rows = e);
    }
}
let Z = !0,
    x = !1,
    L = N.pJs.ONLINE,
    w = new A(),
    R = !0,
    D = !1;
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    Z && (e || (L !== N.pJs.ONLINE && L !== N.pJs.ADD_FRIEND)) && !x && ((Z = !1), (x = !0), s.Z.fetchRelationships());
}
function M() {
    if (((Z = !0), R ? (x = !1) : k(), (w = w.reset()), D)) return;
    let e = w.getRelationshipCounts();
    L = 0 === e[N.OGo.FRIEND] ? (0 !== e[N.OGo.PENDING_INCOMING] ? N.pJs.PENDING : N.pJs.ADD_FRIEND) : N.pJs.ONLINE;
}
function U() {
    w = R ? new A() : w.reset();
}
function G(e) {
    return function () {
        return !R && !!w.update(e) && ((w = w.clone()), !0);
    };
}
class W extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, _.Z, O.default, b.Z, m.ZP, g.Z, d.Z, u.Z), this.syncWith([E.Z], U), this.syncWith([h.Z], U), this.syncWith([d.Z], U), this.syncWith([f.Z], U), this.syncWith([O.default], G(S)), this.syncWith([_.Z, g.Z], G(T)), M();
    }
    getState() {
        return {
            fetching: x,
            section: L,
            rows: w
        };
    }
}
I(W, 'displayName', 'FriendsStore');
let V = new W(o.Z, {
    CONNECTION_OPEN: function () {
        M();
    },
    FRIENDS_SET_SECTION: function (e) {
        (L = e.section), k();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (R = null != t), U(), !R;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        x = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (Z = !0), (x = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (L = e.section), (D = !0);
    }
});
