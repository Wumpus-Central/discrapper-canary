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
                  writable: !0
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
        return this._orderId;
    }
    handleOrderCreateStart(e) {
        let {} = e;
        this._isCreatingOrder = !0;
    }
    handleOrderCreateSuccess(e) {
        let { orderId: t } = e;
        ((this._isCreatingOrder = !1), (this._orderId = t));
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
    handlePaymentModalOpen(e) {
        let {} = e;
        this._orderId = null;
    }
    constructor() {
        (super(a.Z, {
            ORDER_CREATE_START: (e) => this.handleOrderCreateStart(e),
            ORDER_CREATE_SUCCESS: (e) => this.handleOrderCreateSuccess(e),
            ORDER_CREATE_FAIL: (e) => this.handleOrderCreateFail(e),
            ORDER_UPDATE_START: (e) => this.handleOrderUpdateStart(e),
            ORDER_UPDATE_SUCCESS: (e) => this.handleOrderUpdateSuccess(e),
            ORDER_UPDATE_FAIL: (e) => this.handleOrderUpdateFail(e),
            PAYMENT_MODAL_OPEN: (e) => this.handlePaymentModalOpen(e)
        }),
            o(this, '_isCreatingOrder', !1),
            o(this, '_isUpdatingOrder', !1),
            o(this, '_orderId', null));
    }
}
o(s, 'displayName', 'OrderStore');
let l = new s();
