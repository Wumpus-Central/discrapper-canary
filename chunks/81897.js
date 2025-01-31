n.d(t, { Z: () => a });
var i = n(211266),
    r = n(493773);
function a() {
    let e = (0, i.Z)(() => new AbortController());
    return (
        (0, r.Z)(() => () => {
            e.abort();
        }),
        e.signal
    );
}
