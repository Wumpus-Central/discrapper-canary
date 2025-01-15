let i;
var a,
    s = r(47120);
var o = r(442837),
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
    _ = new Set(),
    h = new Set(),
    p = new Set(),
    m = new Map(),
    g = null,
    E = !1;
let v = (e) => {
        _.add(e.skuId);
    },
    I = (e) => {
        f.set(e.skuId, e.price), _.delete(e.skuId);
    },
    T = (e) => {
        _.delete(e.skuId), p.add(e.skuId);
    },
    b = (e) => {
        p.delete(e.skuId);
    },
    y = (e) => {
        if (1 !== e.entitlements.length) return;
        let n = e.entitlements[0];
        if (!!c.Rm.has(n.sku_id)) m.set(e.skuId, u.Z.createFromServer(n));
    },
    S = (e) => {
        h.delete(e.skuId), m.set(e.skuId, e.entitlement);
    },
    A = (e) => {
        p.add(e.skuId), h.delete(e.skuId);
    },
    N = (e) => {
        h.add(e.skuId);
    },
    C = (e) => {
        g = e.previousGoLiveSettings;
    },
    R = (e) => {
        m.delete(e.skuId);
    },
    O = () => {
        i = Date.now();
    },
    D = (e) => {
        E = e.enabled;
    };
class L extends (a = o.ZP.Store) {
    get lastConfettiTrigger() {
        return i;
    }
    get confettiMode() {
        return E;
    }
    getPrice(e) {
        return f.get(e);
    }
    isFetchingPrice(e) {
        return _.has(e);
    }
    getErrored(e) {
        return p.has(e);
    }
    getEntitlement(e) {
        return m.get(e);
    }
    isEntitlementFetched(e) {
        return m.has(e);
    }
    isEntitlementFetching(e) {
        return h.has(e);
    }
    getPreviousGoLiveSettings() {
        return g;
    }
}
d(L, 'displayName', 'ConsumablesStore'),
    (n.Z = new L(l.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: v,
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: I,
        CONSUMABLES_PRICE_FETCH_FAILED: T,
        CONSUMABLES_CLEAR_ERROR: b,
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: S,
        SKU_PURCHASE_SUCCESS: y,
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: A,
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: N,
        SET_PREVIOUS_GO_LIVE_SETTINGS: C,
        CLEAR_CONSUMED_ENTITLEMENT: R,
        POTIONS_TRIGGER_MESSAGE_CONFETTI: O,
        POTIONS_SET_CONFETTI_MODE: D
    }));
