n.d(t, { Z: () => Q }), n(388685);
var r,
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(846519),
    l = n(570140),
    c = n(533307),
    u = n(590783),
    d = n(669079),
    f = n(981631);
function p(e, t, n) {
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
let _ = 2147483647,
    m = {},
    h = new Map(),
    g = [],
    E = [],
    b = [],
    y = new Set(),
    O = {},
    v = {},
    S = new Set();
function I(e) {
    let t = u.Z.createFromServer(e),
        n = t.code;
    if (h.has(n)) h.set(n, h.get(n).merge(t));
    else if ((h.set(n, t), null != t.expiresAt)) {
        let e = new s.V7();
        (m[n] = e), T(n);
    }
}
function T(e) {
    let t = h.get(e);
    if (null == t || null == t.expiresAt) return;
    let n = t.expiresAt.valueOf() - a()().valueOf();
    if (n <= 0) h.delete(e), delete m[e], q.emitChange();
    else {
        let t = m[e];
        if (null == t) return;
        t.start(Math.min(_, n), () => T(e));
    }
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !S.has(e.channel_id)) return !1;
    let n = (0, d.Fp)(e)
        ? (0, d.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0)
        : (0, d.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            g.includes(e) ||
                b.includes(e) ||
                (P({ code: e }), l.Z.wait(() => c.Z.resolveGiftCode(e, !1, !0).catch(f.VqG)));
        }),
        !1)
    );
}
function C() {
    return S.clear(), !1;
}
function N(e) {
    let { channelId: t } = e;
    return null != t && S.add(t), !1;
}
function P(e) {
    let { code: t } = e;
    g.includes(t) || (g = [...g, t]);
}
function R(e) {
    let { giftCode: t } = e;
    return (g = g.filter((e) => e !== t.code)), b.includes(t.code) || (b = [...b, t.code]), I(t);
}
function D(e) {
    let { code: t } = e;
    (g = g.filter((e) => e !== t)), b.includes(t) || (b = [...b, t]);
}
function w(e) {
    let { code: t } = e;
    h.delete(t);
    let n = m[t];
    null != n && (n.stop(), delete m[t]), b.includes(t) || (b = [...b, t]);
}
function x(e) {
    let { code: t } = e;
    E.includes(t) || (E = [...E, t]);
}
function L(e) {
    let { giftCode: t } = e;
    I(t);
}
function j(e) {
    let { uses: t, code: n } = e,
        r = h.get(n);
    null != r && h.set(n, r.set("uses", Math.max(r.uses, t)));
}
function M(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    y.add((0, d.Bg)(t, n));
}
function k(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    y.delete((0, d.Bg)(t, n));
}
function U(e) {
    let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
    t.forEach(I);
    let i = (0, d.Bg)(n, r);
    (O[i] = Date.now()), y.delete(i);
}
function G(e) {
    let { code: t } = e;
    E = E.filter((e) => e !== t);
    let n = h.get(t);
    null != n &&
        h.set(
            t,
            n.merge({
                redeemed: !0,
                uses: n.uses + 1,
            }),
        );
}
function Z(e) {
    let { code: t, error: n } = e;
    E = E.filter((e) => e !== t);
    let r = h.get(t);
    if (((v[t] = n), null != r))
        switch (n.code) {
            case f.evJ.UNKNOWN_GIFT_CODE:
                h.set(t, r.set("revoked", !0));
                break;
            case f.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                h.set(t, r.set("uses", r.maxUses));
        }
}
function B(e) {
    let { message: t } = e;
    return A(t, !0);
}
function F(e) {
    let { channelId: t, messages: n } = e;
    S.add(t), n.forEach((e) => A(e, !0));
}
function V(e) {
    let { messages: t } = e;
    t.forEach((e) => A(e));
}
function H(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return A(t);
    });
}
function Y(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t } = e;
        t.forEach((e) => {
            e.forEach((e) => A(e));
        });
    });
}
function W(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => A(e));
}
function K(e) {
    let { threads: t } = e;
    Object.values(t).map((e) => {
        let { first_message: t } = e;
        return null != t && A(t);
    });
}
class z extends (r = o.ZP.Store) {
    get(e) {
        let t = h.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? v[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(h.values()).filter(
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
        return E.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return y.has((0, d.Bg)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return O[(0, d.Bg)(e, t)];
    }
    getResolvingCodes() {
        return g;
    }
    getResolvedCodes() {
        return b;
    }
    getAcceptingCodes() {
        return E;
    }
}
p(z, "displayName", "GiftCodeStore");
let q = new z(l.Z, {
        CONNECTION_OPEN: C,
        CHANNEL_SELECT: N,
        GIFT_CODE_RESOLVE: P,
        GIFT_CODE_RESOLVE_SUCCESS: R,
        GIFT_CODE_RESOLVE_FAILURE: D,
        GIFT_CODE_REDEEM: x,
        GIFT_CODE_REDEEM_SUCCESS: G,
        GIFT_CODE_REDEEM_FAILURE: Z,
        GIFT_CODE_REVOKE_SUCCESS: w,
        GIFT_CODE_CREATE_SUCCESS: L,
        GIFT_CODES_FETCH: M,
        GIFT_CODES_FETCH_SUCCESS: U,
        GIFT_CODES_FETCH_FAILURE: k,
        MESSAGE_CREATE: B,
        MESSAGE_UPDATE: B,
        LOCAL_MESSAGES_LOADED: F,
        LOAD_MESSAGES_SUCCESS: F,
        LOAD_MESSAGES_AROUND_SUCCESS: F,
        LOAD_RECENT_MENTIONS_SUCCESS: V,
        LOAD_PINNED_MESSAGES_SUCCESS: H,
        SEARCH_MESSAGES_SUCCESS: Y,
        GIFT_CODE_UPDATE: j,
        LOAD_THREADS_SUCCESS: W,
        LOAD_ARCHIVED_THREADS_SUCCESS: W,
        LOAD_FORUM_POSTS: K,
    }),
    Q = q;
