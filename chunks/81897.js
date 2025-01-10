r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(211266),
    a = r(493773);
function s() {
    let e = (0, i.Z)(() => new AbortController());
    return (
        (0, a.Z)(() => () => {
            e.abort();
        }),
        e.signal
    );
}
