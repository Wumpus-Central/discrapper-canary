n.d(t, { N: () => a }), n(47120);
var r = n(192379),
    i = n(302221),
    l = n(956664);
async function o(e) {
    return (
        await new Promise((t, n) => {
            let r = new Image();
            (r.crossOrigin = 'Anonymous'),
                (r.onerror = (e) => {
                    n(e), null != r && ((r.onerror = null), (r.onload = null)), (r = null);
                }),
                (r.onload = () => {
                    null != r ? (t((0, l.XN)(r, 2, 10)), (r.onerror = null), (r.onload = null), (r = null)) : n('image is null');
                }),
                (r.src = e);
        })
    ).map((e) => {
        let [t, n, r] = e;
        return (0, i.vq)(t, n, r);
    });
}
function a(e) {
    let [t, n] = r.useState(),
        i = r.useRef(!1);
    return (
        null == e ||
            null != t ||
            i.current ||
            ((i.current = !0),
            o(e).then((e) => {
                n(e[0]);
            })),
        t
    );
}
