r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(409813),
    s = r(45572);
function l(e) {
    let [n, r] = a.useState(s.A.WAITING);
    return (
        a.useEffect(() => {
            null != e && e !== o.h8.REVIEW && n !== s.A.WAITING && n !== s.A.COMPLETED && r(s.A.WAITING);
        }, [e, n, r]),
        [n, r]
    );
}
