r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379),
    a = r(931609);
function o(e) {
    let { delay: n, disable: r = !1 } = e,
        o = (0, a.Z)();
    i.useEffect(() => {
        if (n <= 0 || r) return;
        let e = setTimeout(() => {
            o();
        }, n);
        return () => clearTimeout(e);
    }, [n, r, o]);
}
