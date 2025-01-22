r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(355467),
    s = r(78839);
function l() {
    let e = (0, a.e7)([s.ZP], () => s.ZP.hasFetchedSubscriptions());
    return (
        i.useEffect(() => {
            !e && (0, o.jg)();
        }, [e]),
        e
    );
}
