n.d(t, { Z: () => o });
var r = n(211266),
    i = n(493773);
function o() {
    let e = (0, r.Z)(() => new AbortController());
    return (
        (0, i.zq)(() => {
            e.abort();
        }),
        e.signal
    );
}
