r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(563132);
function a() {
    let { step: e, stepConfigs: n } = (0, i.usePaymentContext)(),
        r = n.find((n) => n.key === e);
    return null == r ? void 0 : r.options;
}
