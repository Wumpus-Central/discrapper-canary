r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(47120);
var a = r(192379);
function o() {
    let [, e] = (0, a.useState)(0);
    return (0, a.useCallback)(() => e((e) => e + 1), []);
}
