n.d(t, { Z: () => w }), n(47120);
var r,
    i,
    a,
    o = n(913527),
    l = n.n(o),
    s = n(442837),
    c = n(846519),
    d = n(570140),
    u = n(533307),
    p = n(590783),
    m = n(669079),
    f = n(981631);
let h = {},
    g = new Map(),
    _ = [],
    b = [],
    v = [],
    y = new Set(),
    x = {},
    O = {},
    E = new Set();
function j(e) {
    let t = p.Z.createFromServer(e),
        n = t.code;
    if (g.has(n)) g.set(n, g.get(n).merge(t));
    else if ((g.set(n, t), null != t.expiresAt)) {
        let e = new c.V7();
        (h[n] = e),
            (function e(t) {
                let n = g.get(t);
                if (null == n || null == n.expiresAt) return;
                let r = n.expiresAt.valueOf() - l()().valueOf();
                if (r <= 0) g.delete(t), delete h[t], A.emitChange();
                else {
                    let n = h[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, r), () => e(t));
                }
            })(n);
    }
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !E.has(e.channel_id)) return !1;
    let n = (0, m.Fp)(e) ? (0, m.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, m.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            _.includes(e) || v.includes(e) || (C({ code: e }), d.Z.wait(() => u.Z.resolveGiftCode(e, !1, !0).catch(f.VqG)));
        }),
        !1)
    );
}
function C(e) {
    let { code: t } = e;
    _.includes(t) || (_ = [..._, t]);
}
function I(e) {
    let { message: t } = e;
    return N(t, !0);
}
function S(e) {
    let { channelId: t, messages: n } = e;
    E.add(t), n.forEach((e) => N(e, !0));
}
function P(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => N(e));
}
class T extends (r = s.ZP.Store) {
    get(e) {
        let t = g.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? O[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(g.values()).filter((r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired());
    }
    getIsResolving(e) {
        return _.includes(e);
    }
    getIsResolved(e) {
        return v.includes(e);
    }
    getIsAccepting(e) {
        return b.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return y.has((0, m.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return x[(0, m.Bg)(e, t)];
    }
    getResolvingCodes() {
        return _;
    }
    getResolvedCodes() {
        return v;
    }
    getAcceptingCodes() {
        return b;
    }
}
(a = 'GiftCodeStore'),
    (i = 'displayName') in T
        ? Object.defineProperty(T, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[i] = a);
let A = new T(d.Z, {
        CONNECTION_OPEN: function () {
            return E.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && E.add(t), !1;
        },
        GIFT_CODE_RESOLVE: C,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (_ = _.filter((e) => e !== t.code)), v.includes(t.code) || (v = [...v, t.code]), j(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t } = e;
            (_ = _.filter((e) => e !== t)), v.includes(t) || (v = [...v, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            b.includes(t) || (b = [...b, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            b = b.filter((e) => e !== t);
            let n = g.get(t);
            null != n &&
                g.set(
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
            let r = g.get(t);
            if (((O[t] = n), null != r))
                switch (n.code) {
                    case f.evJ.UNKNOWN_GIFT_CODE:
                        g.set(t, r.set('revoked', !0));
                        break;
                    case f.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        g.set(t, r.set('uses', r.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            g.delete(t);
            let n = h[t];
            null != n && (n.stop(), delete h[t]), v.includes(t) || (v = [...v, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            j(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            y.add((0, m.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
            t.forEach(j);
            let i = (0, m.Bg)(n, r);
            (x[i] = Date.now()), y.delete(i);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            y.delete((0, m.Bg)(t, n));
        },
        MESSAGE_CREATE: I,
        MESSAGE_UPDATE: I,
        LOCAL_MESSAGES_LOADED: S,
        LOAD_MESSAGES_SUCCESS: S,
        LOAD_MESSAGES_AROUND_SUCCESS: S,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => N(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => N(e));
        },
        SEARCH_FINISH: function (e) {
            e.messages.forEach((e) => {
                e.forEach((e) => N(e));
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
                r = g.get(n);
            null != r && g.set(n, r.set('uses', Math.max(r.uses, t)));
        },
        LOAD_THREADS_SUCCESS: P,
        LOAD_ARCHIVED_THREADS_SUCCESS: P,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && N(t);
            });
        }
    }),
    w = A;
