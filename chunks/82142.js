n.d(t, { Z: () => A }), n(388685);
var r,
    i,
    l = n(913527),
    a = n.n(l),
    o = n(442837),
    s = n(846519),
    c = n(570140),
    u = n(533307),
    d = n(590783),
    p = n(669079),
    m = n(981631);
let f = {},
    _ = new Map(),
    g = [],
    h = [],
    b = [],
    E = new Set(),
    C = {},
    v = {},
    O = new Set();
function y(e) {
    let t = d.Z.createFromServer(e),
        n = t.code;
    if (_.has(n)) _.set(n, _.get(n).merge(t));
    else if ((_.set(n, t), null != t.expiresAt)) {
        let e = new s.V7();
        (f[n] = e),
            (function e(t) {
                let n = _.get(t);
                if (null == n || null == n.expiresAt) return;
                let r = n.expiresAt.valueOf() - a()().valueOf();
                if (r <= 0) _.delete(t), delete f[t], N.emitChange();
                else {
                    let n = f[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, r), () => e(t));
                }
            })(n);
    }
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !O.has(e.channel_id)) return !1;
    let n = (0, p.Fp)(e)
        ? (0, p.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0)
        : (0, p.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            g.includes(e) ||
                b.includes(e) ||
                (j({ code: e }), c.Z.wait(() => u.Z.resolveGiftCode(e, !1, !0).catch(m.VqG)));
        }),
        !1)
    );
}
function j(e) {
    let { code: t } = e;
    g.includes(t) || (g = [...g, t]);
}
function I(e) {
    let { message: t } = e;
    return x(t, !0);
}
function S(e) {
    let { channelId: t, messages: n } = e;
    O.add(t), n.forEach((e) => x(e, !0));
}
function T(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => x(e));
}
class P extends (r = o.ZP.Store) {
    get(e) {
        let t = _.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? v[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(_.values()).filter(
            (r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired(),
        );
    }
    getIsResolving(e) {
        return g.includes(e);
    }
    getIsResolved(e) {
        return b.includes(e);
    }
    getIsAccepting(e) {
        return h.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return E.has((0, p.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return C[(0, p.Bg)(e, t)];
    }
    getResolvingCodes() {
        return g;
    }
    getResolvedCodes() {
        return b;
    }
    getAcceptingCodes() {
        return h;
    }
}
(i = "displayName") in P
    ? Object.defineProperty(P, i, {
          value: "GiftCodeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (P[i] = "GiftCodeStore");
let N = new P(c.Z, {
        CONNECTION_OPEN: function () {
            return O.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && O.add(t), !1;
        },
        GIFT_CODE_RESOLVE: j,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (g = g.filter((e) => e !== t.code)), b.includes(t.code) || (b = [...b, t.code]), y(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t } = e;
            (g = g.filter((e) => e !== t)), b.includes(t) || (b = [...b, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            h.includes(t) || (h = [...h, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            h = h.filter((e) => e !== t);
            let n = _.get(t);
            null != n &&
                _.set(
                    t,
                    n.merge({
                        redeemed: !0,
                        uses: n.uses + 1,
                    }),
                );
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: n } = e;
            h = h.filter((e) => e !== t);
            let r = _.get(t);
            if (((v[t] = n), null != r))
                switch (n.code) {
                    case m.evJ.UNKNOWN_GIFT_CODE:
                        _.set(t, r.set("revoked", !0));
                        break;
                    case m.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        _.set(t, r.set("uses", r.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            _.delete(t);
            let n = f[t];
            null != n && (n.stop(), delete f[t]), b.includes(t) || (b = [...b, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            y(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            E.add((0, p.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
            t.forEach(y);
            let i = (0, p.Bg)(n, r);
            (C[i] = Date.now()), E.delete(i);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            E.delete((0, p.Bg)(t, n));
        },
        MESSAGE_CREATE: I,
        MESSAGE_UPDATE: I,
        LOCAL_MESSAGES_LOADED: S,
        LOAD_MESSAGES_SUCCESS: S,
        LOAD_MESSAGES_AROUND_SUCCESS: S,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => x(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
                let { message: t } = e;
                return x(t);
            });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
            let { data: t } = e;
            t.forEach((e) => {
                let { messages: t } = e;
                t.forEach((e) => {
                    e.forEach((e) => x(e));
                });
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
                r = _.get(n);
            null != r && _.set(n, r.set("uses", Math.max(r.uses, t)));
        },
        LOAD_THREADS_SUCCESS: T,
        LOAD_ARCHIVED_THREADS_SUCCESS: T,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && x(t);
            });
        },
    }),
    A = N;
