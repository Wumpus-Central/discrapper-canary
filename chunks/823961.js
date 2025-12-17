let r;
n.d(t, { Z: () => w }), n(388685);
var i,
    a = n(442837),
    o = n(570140),
    s = n(959546),
    l = n(317951);
function c(e, t, n) {
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
let u = new Map(),
    d = new Set(),
    f = new Set(),
    p = new Set(),
    _ = new Map(),
    m = new Map(),
    h = null,
    g = !1,
    E = (e) => {
        d.add(e.skuId);
    },
    b = (e) => {
        u.set(e.skuId, e.price), d.delete(e.skuId);
    },
    y = (e) => {
        d.delete(e.skuId), p.add(e.skuId);
    },
    O = (e) => {
        p.delete(e.skuId);
    },
    v = (e) => {
        if (1 !== e.entitlements.length) return;
        let t = e.entitlements[0];
        l.Rm.has(t.sku_id) && _.set(e.skuId, s.Z.createFromServer(t));
    },
    S = (e) => {
        f.delete(e.skuId), _.set(e.skuId, e.entitlement), null != e.numPotions && m.set(e.skuId, e.numPotions);
    },
    I = (e) => {
        p.add(e.skuId), f.delete(e.skuId);
    },
    T = (e) => {
        f.add(e.skuId);
    },
    C = (e) => {
        h = e.previousGoLiveSettings;
    },
    A = (e) => {
        _.delete(e.skuId);
    },
    N = (e) => {
        let { emoji: t, boundingRect: n } = e;
        r = {
            emoji: t,
            boundingRect: n,
            triggerTime: Date.now(),
        };
    },
    P = (e) => {
        g = e.enabled;
    };
class R extends (i = a.ZP.Store) {
    get lastConfetti() {
        return r;
    }
    get confettiMode() {
        return g;
    }
    getPrice(e) {
        return u.get(e);
    }
    isFetchingPrice(e) {
        return d.has(e);
    }
    getErrored(e) {
        return p.has(e);
    }
    getEntitlement(e) {
        return _.get(e);
    }
    fetchPotionCount(e) {
        return m.get(e);
    }
    isEntitlementFetched(e) {
        return _.has(e);
    }
    isEntitlementFetching(e) {
        return f.has(e);
    }
    getPreviousGoLiveSettings() {
        return h;
    }
}
c(R, "displayName", "ConsumablesStore");
let w = new R(o.Z, {
    CONSUMABLES_PRICE_FETCH_STARTED: E,
    CONSUMABLES_PRICE_FETCH_SUCCEEDED: b,
    CONSUMABLES_PRICE_FETCH_FAILED: y,
    CONSUMABLES_CLEAR_ERROR: O,
    CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: S,
    SKU_PURCHASE_SUCCESS: v,
    CONSUMABLES_ENTITLEMENT_FETCH_FAILED: I,
    CONSUMABLES_ENTITLEMENT_FETCH_STARTED: T,
    SET_PREVIOUS_GO_LIVE_SETTINGS: C,
    CLEAR_CONSUMED_ENTITLEMENT: A,
    POTIONS_TRIGGER_MESSAGE_CONFETTI: N,
    POTIONS_SET_CONFETTI_MODE: P,
});
