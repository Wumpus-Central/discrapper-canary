n(47120);
var i,
    r,
    l,
    a,
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    d = n(846519),
    u = n(570140),
    m = n(533307),
    h = n(590783),
    f = n(669079),
    p = n(981631);
let _ = {},
    g = new Map(),
    E = [],
    C = [],
    I = [],
    x = new Set(),
    N = {},
    v = {},
    T = new Set();
function S(e) {
    let t = h.Z.createFromServer(e),
        n = t.code;
    if (g.has(n)) g.set(n, g.get(n).merge(t));
    else if ((g.set(n, t), null != t.expiresAt)) {
        let e = new d.V7();
        (_[n] = e),
            (function e(t) {
                let n = g.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - s()().valueOf();
                if (i <= 0) g.delete(t), delete _[t], L.emitChange();
                else {
                    let n = _[t];
                    if (null == n) return;
                    n.start(Math.min(2147483647, i), () => e(t));
                }
            })(n);
    }
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !T.has(e.channel_id)) return !1;
    let n = (0, f.Fp)(e) ? (0, f.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0) : (0, f.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            !E.includes(e) && !I.includes(e) && (b({ code: e }), u.Z.wait(() => m.Z.resolveGiftCode(e, !1, !0).catch(p.VqG)));
        }),
        !1)
    );
}
function b(e) {
    let { code: t } = e;
    !E.includes(t) && (E = [...E, t]);
}
function j(e) {
    let { message: t } = e;
    return A(t, !0);
}
function R(e) {
    let { channelId: t, messages: n } = e;
    T.add(t), n.forEach((e) => A(e, !0));
}
function Z(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => A(e));
}
class P extends (i = c.ZP.Store) {
    get(e) {
        let t = g.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? v[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(g.values()).filter((i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired());
    }
    getIsResolving(e) {
        return E.includes(e);
    }
    getIsResolved(e) {
        return I.includes(e);
    }
    getIsAccepting(e) {
        return C.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return x.has((0, f.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return N[(0, f.Bg)(e, t)];
    }
    getResolvingCodes() {
        return E;
    }
    getResolvedCodes() {
        return I;
    }
    getAcceptingCodes() {
        return C;
    }
}
(a = 'GiftCodeStore'),
    (l = 'displayName') in (r = P)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a);
let L = new P(u.Z, {
    CONNECTION_OPEN: function () {
        return T.clear(), !1;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && T.add(t), !1;
    },
    GIFT_CODE_RESOLVE: b,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        return (E = E.filter((e) => e !== t.code)), !I.includes(t.code) && (I = [...I, t.code]), S(t);
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t } = e;
        (E = E.filter((e) => e !== t)), !I.includes(t) && (I = [...I, t]);
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        !C.includes(t) && (C = [...C, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        C = C.filter((e) => e !== t);
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
        C = C.filter((e) => e !== t);
        let i = g.get(t);
        if (((v[t] = n), null != i))
            switch (n.code) {
                case p.evJ.UNKNOWN_GIFT_CODE:
                    g.set(t, i.set('revoked', !0));
                    break;
                case p.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    g.set(t, i.set('uses', i.maxUses));
            }
    },
    GIFT_CODE_REVOKE_SUCCESS: function (e) {
        let { code: t } = e;
        g.delete(t);
        let n = _[t];
        null != n && (n.stop(), delete _[t]), !I.includes(t) && (I = [...I, t]);
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        S(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        x.add((0, f.Bg)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
        t.forEach(S);
        let r = (0, f.Bg)(n, i);
        (N[r] = Date.now()), x.delete(r);
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        x.delete((0, f.Bg)(t, n));
    },
    MESSAGE_CREATE: j,
    MESSAGE_UPDATE: j,
    LOCAL_MESSAGES_LOADED: R,
    LOAD_MESSAGES_SUCCESS: R,
    LOAD_MESSAGES_AROUND_SUCCESS: R,
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => A(e));
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => A(e));
    },
    SEARCH_FINISH: function (e) {
        e.messages.forEach((e) => {
            e.forEach((e) => A(e));
        });
    },
    GIFT_CODE_UPDATE: function (e) {
        let { uses: t, code: n } = e,
            i = g.get(n);
        null != i && g.set(n, i.set('uses', Math.max(i.uses, t)));
    },
    LOAD_THREADS_SUCCESS: Z,
    LOAD_ARCHIVED_THREADS_SUCCESS: Z,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && A(t);
        });
    }
});
t.Z = L;
