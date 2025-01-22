let i;
var a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(959546),
    c = r(317951);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = new Map(),
    p = new Set(),
    h = new Set(),
    _ = new Set(),
    m = new Map(),
    g = new Map(),
    E = null,
    v = !1;
let y = (e) => {
        p.add(e.skuId);
    },
    b = (e) => {
        f.set(e.skuId, e.price), p.delete(e.skuId);
    },
    I = (e) => {
        p.delete(e.skuId), _.add(e.skuId);
    },
    T = (e) => {
        _.delete(e.skuId);
    },
    S = (e) => {
        if (1 !== e.entitlements.length) return;
        let n = e.entitlements[0];
        if (!!c.Rm.has(n.sku_id)) m.set(e.skuId, u.Z.createFromServer(n));
    },
    A = (e) => {
        h.delete(e.skuId), m.set(e.skuId, e.entitlement), null != e.numPotions && g.set(e.skuId, e.numPotions);
    },
    C = (e) => {
        _.add(e.skuId), h.delete(e.skuId);
    },
    N = (e) => {
        h.add(e.skuId);
    },
    R = (e) => {
        E = e.previousGoLiveSettings;
    },
    O = (e) => {
        m.delete(e.skuId);
    },
    D = () => {
        i = Date.now();
    },
    L = (e) => {
        v = e.enabled;
    };
class x extends (a = s.ZP.Store) {
    get lastConfettiTrigger() {
        return i;
    }
    get confettiMode() {
        return v;
    }
    getPrice(e) {
        return f.get(e);
    }
    isFetchingPrice(e) {
        return p.has(e);
    }
    getErrored(e) {
        return _.has(e);
    }
    getEntitlement(e) {
        return m.get(e);
    }
    fetchPotionCount(e) {
        return g.get(e);
    }
    isEntitlementFetched(e) {
        return m.has(e);
    }
    isEntitlementFetching(e) {
        return h.has(e);
    }
    getPreviousGoLiveSettings() {
        return E;
    }
}
d(x, 'displayName', 'ConsumablesStore'),
    (n.Z = new x(l.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: y,
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: b,
        CONSUMABLES_PRICE_FETCH_FAILED: I,
        CONSUMABLES_CLEAR_ERROR: T,
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: A,
        SKU_PURCHASE_SUCCESS: S,
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: C,
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: N,
        SET_PREVIOUS_GO_LIVE_SETTINGS: R,
        CLEAR_CONSUMED_ENTITLEMENT: O,
        POTIONS_TRIGGER_MESSAGE_CONFETTI: D,
        POTIONS_SET_CONFETTI_MODE: L
    }));
