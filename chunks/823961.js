let i;
n.d(t, { Z: () => L }), n(47120);
var r,
    a = n(442837),
    s = n(570140),
    o = n(959546),
    l = n(317951);
function u(e, t, n) {
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
let c = new Map(),
    d = new Set(),
    f = new Set(),
    _ = new Set(),
    p = new Map(),
    h = new Map(),
    m = null,
    g = !1,
    E = (e) => {
        d.add(e.skuId);
    },
    v = (e) => {
        c.set(e.skuId, e.price), d.delete(e.skuId);
    },
    y = (e) => {
        d.delete(e.skuId), _.add(e.skuId);
    },
    I = (e) => {
        _.delete(e.skuId);
    },
    T = (e) => {
        if (1 !== e.entitlements.length) return;
        let t = e.entitlements[0];
        l.Rm.has(t.sku_id) && p.set(e.skuId, o.Z.createFromServer(t));
    },
    b = (e) => {
        f.delete(e.skuId), p.set(e.skuId, e.entitlement), null != e.numPotions && h.set(e.skuId, e.numPotions);
    },
    S = (e) => {
        _.add(e.skuId), f.delete(e.skuId);
    },
    A = (e) => {
        f.add(e.skuId);
    },
    N = (e) => {
        m = e.previousGoLiveSettings;
    },
    C = (e) => {
        p.delete(e.skuId);
    },
    R = (e) => {
        let { emoji: t, boundingRect: n } = e;
        i = {
            emoji: t,
            boundingRect: n,
            triggerTime: Date.now()
        };
    },
    O = (e) => {
        g = e.enabled;
    };
class D extends (r = a.ZP.Store) {
    get lastConfetti() {
        return i;
    }
    get confettiMode() {
        return g;
    }
    getPrice(e) {
        return c.get(e);
    }
    isFetchingPrice(e) {
        return d.has(e);
    }
    getErrored(e) {
        return _.has(e);
    }
    getEntitlement(e) {
        return p.get(e);
    }
    fetchPotionCount(e) {
        return h.get(e);
    }
    isEntitlementFetched(e) {
        return p.has(e);
    }
    isEntitlementFetching(e) {
        return f.has(e);
    }
    getPreviousGoLiveSettings() {
        return m;
    }
}
u(D, 'displayName', 'ConsumablesStore');
let L = new D(s.Z, {
    CONSUMABLES_PRICE_FETCH_STARTED: E,
    CONSUMABLES_PRICE_FETCH_SUCCEEDED: v,
    CONSUMABLES_PRICE_FETCH_FAILED: y,
    CONSUMABLES_CLEAR_ERROR: I,
    CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: b,
    SKU_PURCHASE_SUCCESS: T,
    CONSUMABLES_ENTITLEMENT_FETCH_FAILED: S,
    CONSUMABLES_ENTITLEMENT_FETCH_STARTED: A,
    SET_PREVIOUS_GO_LIVE_SETTINGS: N,
    CLEAR_CONSUMED_ENTITLEMENT: C,
    POTIONS_TRIGGER_MESSAGE_CONFETTI: R,
    POTIONS_SET_CONFETTI_MODE: O
});
