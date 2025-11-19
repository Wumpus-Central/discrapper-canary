n.d(t, { Z: () => X }), n(388685);
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
function _(e, t, n) {
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
let p = 2147483647,
    h = {},
    m = new Map(),
    g = [],
    E = [],
    b = [],
    y = new Set(),
    O = {},
    v = {},
    I = new Set();
function T(e) {
    let t = u.Z.createFromServer(e),
        n = t.code;
    if (m.has(n)) m.set(n, m.get(n).merge(t));
    else if ((m.set(n, t), null != t.expiresAt)) {
        let e = new s.V7();
        (h[n] = e), S(n);
    }
}
function S(e) {
    let t = m.get(e);
    if (null == t || null == t.expiresAt) return;
    let n = t.expiresAt.valueOf() - a()().valueOf();
    if (n <= 0) m.delete(e), delete h[e], q.emitChange();
    else {
        let t = h[e];
        if (null == t) return;
        t.start(Math.min(p, n), () => S(e));
    }
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !I.has(e.channel_id)) return !1;
    let n = (0, d.Fp)(e)
        ? (0, d.Q_)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0)
        : (0, d.Q_)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            g.includes(e) ||
                b.includes(e) ||
                (R({ code: e }), l.Z.wait(() => c.Z.resolveGiftCode(e, !1, !0).catch(f.VqG)));
        }),
        !1)
    );
}
function C() {
    return I.clear(), !1;
}
function N(e) {
    let { channelId: t } = e;
    return null != t && I.add(t), !1;
}
function R(e) {
    let { code: t } = e;
    g.includes(t) || (g = [...g, t]);
}
function P(e) {
    let { giftCode: t } = e;
    return (g = g.filter((e) => e !== t.code)), b.includes(t.code) || (b = [...b, t.code]), T(t);
}
function D(e) {
    let { code: t } = e;
    (g = g.filter((e) => e !== t)), b.includes(t) || (b = [...b, t]);
}
function w(e) {
    let { code: t } = e;
    m.delete(t);
    let n = h[t];
    null != n && (n.stop(), delete h[t]), b.includes(t) || (b = [...b, t]);
}
function L(e) {
    let { code: t } = e;
    E.includes(t) || (E = [...E, t]);
}
function x(e) {
    let { giftCode: t } = e;
    T(t);
}
function M(e) {
    let { uses: t, code: n } = e,
        r = m.get(n);
    null != r && m.set(n, r.set("uses", Math.max(r.uses, t)));
}
function j(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    y.add((0, d.Bg)(t, n));
}
function k(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    y.delete((0, d.Bg)(t, n));
}
function U(e) {
    let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
    t.forEach(T);
    let i = (0, d.Bg)(n, r);
    (O[i] = Date.now()), y.delete(i);
}
function G(e) {
    let { code: t } = e;
    E = E.filter((e) => e !== t);
    let n = m.get(t);
    null != n &&
        m.set(
            t,
            n.merge({
                redeemed: !0,
                uses: n.uses + 1,
            }),
        );
}
function B(e) {
    let { code: t, error: n } = e;
    E = E.filter((e) => e !== t);
    let r = m.get(t);
    if (((v[t] = n), null != r))
        switch (n.code) {
            case f.evJ.UNKNOWN_GIFT_CODE:
                m.set(t, r.set("revoked", !0));
                break;
            case f.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                m.set(t, r.set("uses", r.maxUses));
        }
}
function Z(e) {
    let { message: t } = e;
    return A(t, !0);
}
function F(e) {
    let { channelId: t, messages: n } = e;
    I.add(t), n.forEach((e) => A(e, !0));
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
        let t = m.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? v[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(m.values()).filter(
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
_(z, "displayName", "GiftCodeStore");
let q = new z(l.Z, {
        CONNECTION_OPEN: C,
        CHANNEL_SELECT: N,
        GIFT_CODE_RESOLVE: R,
        GIFT_CODE_RESOLVE_SUCCESS: P,
        GIFT_CODE_RESOLVE_FAILURE: D,
        GIFT_CODE_REDEEM: L,
        GIFT_CODE_REDEEM_SUCCESS: G,
        GIFT_CODE_REDEEM_FAILURE: B,
        GIFT_CODE_REVOKE_SUCCESS: w,
        GIFT_CODE_CREATE_SUCCESS: x,
        GIFT_CODES_FETCH: j,
        GIFT_CODES_FETCH_SUCCESS: U,
        GIFT_CODES_FETCH_FAILURE: k,
        MESSAGE_CREATE: Z,
        MESSAGE_UPDATE: Z,
        LOCAL_MESSAGES_LOADED: F,
        LOAD_MESSAGES_SUCCESS: F,
        LOAD_MESSAGES_AROUND_SUCCESS: F,
        LOAD_RECENT_MENTIONS_SUCCESS: V,
        LOAD_PINNED_MESSAGES_SUCCESS: H,
        SEARCH_MESSAGES_SUCCESS: Y,
        GIFT_CODE_UPDATE: M,
        LOAD_THREADS_SUCCESS: W,
        LOAD_ARCHIVED_THREADS_SUCCESS: W,
        LOAD_FORUM_POSTS: K,
    }),
    X = q;
