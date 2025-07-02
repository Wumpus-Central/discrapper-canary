(n.d(t, { Z: () => w }), n(388685));
var r,
    i,
    l,
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    c = n(846519),
    u = n(570140),
    d = n(533307),
    p = n(590783),
    m = n(669079),
    f = n(981631);
let g = {},
    _ = new Map(),
    h = [],
    b = [],
    E = [],
    y = new Set(),
    C = {},
    x = {},
    v = new Set();
function O(e) {
    let t = p.Z.createFromServer(e),
        n = t.code;
    if (_.has(n)) _.set(n, _.get(n).merge(t));
    else if ((_.set(n, t), null != t.expiresAt)) {
        let e = new c.V7();
        ((g[n] = e),
            (function e(t) {
                let n = _.get(t);
                if (null == n || null == n.expiresAt) return;
                let r = n.expiresAt.valueOf() - o()().valueOf();
                if (r <= 0) (_.delete(t), delete g[t], A.emitChange());
                else {
                    let n = g[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, r), () => e(t));
                }
            })(n));
    }
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !v.has(e.channel_id)) return !1;
    let n = (0, m.Fp)(e) ? (0, m.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, m.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            h.includes(e) || E.includes(e) || (I({ code: e }), u.Z.wait(() => d.Z.resolveGiftCode(e, !1, !0).catch(f.VqG)));
        }),
        !1)
    );
}
function I(e) {
    let { code: t } = e;
    h.includes(t) || (h = [...h, t]);
}
function S(e) {
    let { message: t } = e;
    return j(t, !0);
}
function T(e) {
    let { channelId: t, messages: n } = e;
    (v.add(t), n.forEach((e) => j(e, !0)));
}
function N(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => j(e));
}
class P extends (r = s.ZP.Store) {
    get(e) {
        let t = _.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? x[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(_.values()).filter((r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired());
    }
    getIsResolving(e) {
        return h.includes(e);
    }
    getIsResolved(e) {
        return E.includes(e);
    }
    getIsAccepting(e) {
        return b.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return y.has((0, m.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return C[(0, m.Bg)(e, t)];
    }
    getResolvingCodes() {
        return h;
    }
    getResolvedCodes() {
        return E;
    }
    getAcceptingCodes() {
        return b;
    }
}
((l = 'GiftCodeStore'),
    (i = 'displayName') in P
        ? Object.defineProperty(P, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (P[i] = l));
let A = new P(u.Z, {
        CONNECTION_OPEN: function () {
            return (v.clear(), !1);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (null != t && v.add(t), !1);
        },
        GIFT_CODE_RESOLVE: I,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return ((h = h.filter((e) => e !== t.code)), E.includes(t.code) || (E = [...E, t.code]), O(t));
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t } = e;
            ((h = h.filter((e) => e !== t)), E.includes(t) || (E = [...E, t]));
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            b.includes(t) || (b = [...b, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            b = b.filter((e) => e !== t);
            let n = _.get(t);
            null != n &&
                _.set(
                    t,
                    n.merge({
                        redeemed: !0,
                        uses: n.uses + 1
                    })
                );
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: n } = e;
            b = b.filter((e) => e !== t);
            let r = _.get(t);
            if (((x[t] = n), null != r))
                switch (n.code) {
                    case f.evJ.UNKNOWN_GIFT_CODE:
                        _.set(t, r.set('revoked', !0));
                        break;
                    case f.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        _.set(t, r.set('uses', r.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            _.delete(t);
            let n = g[t];
            (null != n && (n.stop(), delete g[t]), E.includes(t) || (E = [...E, t]));
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            O(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            y.add((0, m.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
            t.forEach(O);
            let i = (0, m.Bg)(n, r);
            ((C[i] = Date.now()), y.delete(i));
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            y.delete((0, m.Bg)(t, n));
        },
        MESSAGE_CREATE: S,
        MESSAGE_UPDATE: S,
        LOCAL_MESSAGES_LOADED: T,
        LOAD_MESSAGES_SUCCESS: T,
        LOAD_MESSAGES_AROUND_SUCCESS: T,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => j(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
                let { message: t } = e;
                return j(t);
            });
        },
        SEARCH_FINISH: function (e) {
            e.messages.forEach((e) => {
                e.forEach((e) => j(e));
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
                r = _.get(n);
            null != r && _.set(n, r.set('uses', Math.max(r.uses, t)));
        },
        LOAD_THREADS_SUCCESS: N,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && j(t);
            });
        }
    }),
    w = A;
