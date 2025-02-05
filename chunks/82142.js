n.d(t, { Z: () => L }), n(47120);
var i,
    l,
    a,
    r = n(913527),
    s = n.n(r),
    o = n(442837),
    c = n(846519),
    d = n(570140),
    u = n(533307),
    m = n(590783),
    _ = n(669079),
    h = n(981631);
let p = {},
    g = new Map(),
    f = [],
    x = [],
    C = [],
    v = new Set(),
    E = {},
    I = {},
    N = new Set();
function S(e) {
    let t = m.Z.createFromServer(e),
        n = t.code;
    if (g.has(n)) g.set(n, g.get(n).merge(t));
    else if ((g.set(n, t), null != t.expiresAt)) {
        let e = new c.V7();
        (p[n] = e),
            (function e(t) {
                let n = g.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - s()().valueOf();
                if (i <= 0) g.delete(t), delete p[t], R.emitChange();
                else {
                    let n = p[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, i), () => e(t));
                }
            })(n);
    }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !N.has(e.channel_id)) return !1;
    let n = (0, _.Fp)(e) ? (0, _.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, _.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            f.includes(e) || C.includes(e) || (b({ code: e }), d.Z.wait(() => u.Z.resolveGiftCode(e, !1, !0).catch(h.VqG)));
        }),
        !1)
    );
}
function b(e) {
    let { code: t } = e;
    f.includes(t) || (f = [...f, t]);
}
function A(e) {
    let { message: t } = e;
    return T(t, !0);
}
function j(e) {
    let { channelId: t, messages: n } = e;
    N.add(t), n.forEach((e) => T(e, !0));
}
function y(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => T(e));
}
class Z extends (i = o.ZP.Store) {
    get(e) {
        let t = g.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? I[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(g.values()).filter((i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
    }
    getIsResolving(e) {
        return f.includes(e);
    }
    getIsResolved(e) {
        return C.includes(e);
    }
    getIsAccepting(e) {
        return x.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return v.has((0, _.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return E[(0, _.Bg)(e, t)];
    }
    getResolvingCodes() {
        return f;
    }
    getResolvedCodes() {
        return C;
    }
    getAcceptingCodes() {
        return x;
    }
}
(a = 'GiftCodeStore'),
    (l = 'displayName') in Z
        ? Object.defineProperty(Z, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Z[l] = a);
let R = new Z(d.Z, {
        CONNECTION_OPEN: function () {
            return N.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && N.add(t), !1;
        },
        GIFT_CODE_RESOLVE: b,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (f = f.filter((e) => e !== t.code)), C.includes(t.code) || (C = [...C, t.code]), S(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t } = e;
            (f = f.filter((e) => e !== t)), C.includes(t) || (C = [...C, t]);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            x.includes(t) || (x = [...x, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            x = x.filter((e) => e !== t);
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
            x = x.filter((e) => e !== t);
            let i = g.get(t);
            if (((I[t] = n), null != i))
                switch (n.code) {
                    case h.evJ.UNKNOWN_GIFT_CODE:
                        g.set(t, i.set('revoked', !0));
                        break;
                    case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        g.set(t, i.set('uses', i.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            g.delete(t);
            let n = p[t];
            null != n && (n.stop(), delete p[t]), C.includes(t) || (C = [...C, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            S(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            v.add((0, _.Bg)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
            t.forEach(S);
            let l = (0, _.Bg)(n, i);
            (E[l] = Date.now()), v.delete(l);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            v.delete((0, _.Bg)(t, n));
        },
        MESSAGE_CREATE: A,
        MESSAGE_UPDATE: A,
        LOCAL_MESSAGES_LOADED: j,
        LOAD_MESSAGES_SUCCESS: j,
        LOAD_MESSAGES_AROUND_SUCCESS: j,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => T(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => T(e));
        },
        SEARCH_FINISH: function (e) {
            e.messages.forEach((e) => {
                e.forEach((e) => T(e));
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
                i = g.get(n);
            null != i && g.set(n, i.set('uses', Math.max(i.uses, t)));
        },
        LOAD_THREADS_SUCCESS: y,
        LOAD_ARCHIVED_THREADS_SUCCESS: y,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && T(t);
            });
        }
    }),
    L = R;
