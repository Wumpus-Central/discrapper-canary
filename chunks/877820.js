n.d(t, { Z: () => l });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
class s extends (r = i.ZP.Store) {
    get isCreatingOrder() {
        return this._isCreatingOrder;
    }
    get currentOrderId() {
        var e, t;
        return null != (t = null == (e = this._order) ? void 0 : e.id) ? t : null;
    }
    get currentOrder() {
        return this._order;
    }
    get currentPaymentGateway() {
        var e, t, n;
        return null != (n = null == (t = this._order) || null == (e = t.billing_facet) ? void 0 : e.payment_gateway)
            ? n
            : null;
    }
    handleOrderCreateStart(e) {
        let {} = e;
        this._isCreatingOrder = !0;
    }
    handleOrderCreateSuccess(e) {
        let { orderId: t, order: n } = e;
        (this._isCreatingOrder = !1), (this._order = null != n ? n : null);
    }
    handleOrderCreateFail(e) {
        let {} = e;
        this._isCreatingOrder = !1;
    }
    handleOrderUpdateStart(e) {
        let {} = e;
        this._isUpdatingOrder = !0;
    }
    handleOrderUpdateSuccess(e) {
        let {} = e;
        this._isUpdatingOrder = !1;
    }
    handleOrderUpdateFail(e) {
        let {} = e;
        this._isUpdatingOrder = !1;
    }
    handleOrderDiscardSuccess(e) {
        var t;
        let { orderId: n } = e;
        if ((null == (t = this._order) ? void 0 : t.id) !== n) return !1;
        this._order = null;
    }
    handlePaymentModalOpen(e) {
        let {} = e;
        this._order = null;
    }
    constructor() {
        super(a.Z, {
            ORDER_CREATE_START: (e) => this.handleOrderCreateStart(e),
            ORDER_CREATE_SUCCESS: (e) => this.handleOrderCreateSuccess(e),
            ORDER_CREATE_FAIL: (e) => this.handleOrderCreateFail(e),
            ORDER_UPDATE_START: (e) => this.handleOrderUpdateStart(e),
            ORDER_UPDATE_SUCCESS: (e) => this.handleOrderUpdateSuccess(e),
            ORDER_UPDATE_FAIL: (e) => this.handleOrderUpdateFail(e),
            ORDER_DISCARD_SUCCESS: (e) => this.handleOrderDiscardSuccess(e),
            PAYMENT_MODAL_OPEN: (e) => this.handlePaymentModalOpen(e),
        }),
            o(this, "_isCreatingOrder", !1),
            o(this, "_isUpdatingOrder", !1),
            o(this, "_order", null);
    }
}
o(s, "displayName", "OrderStore");
let l = new s();
