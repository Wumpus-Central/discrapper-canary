n.d(t, { N: () => s }), n(47120);
var i = n(192379),
    l = n(302221),
    r = n(956664);
async function a(e) {
    return (
        await new Promise((t, n) => {
            let i = new Image();
            (i.crossOrigin = 'Anonymous'),
                (i.onerror = (e) => {
                    n(e), null != i && ((i.onerror = null), (i.onload = null)), (i = null);
                }),
                (i.onload = () => {
                    null != i ? (t((0, r.XN)(i, 2, 10)), (i.onerror = null), (i.onload = null), (i = null)) : n('image is null');
                }),
                (i.src = e);
        })
    ).map((e) => {
        let [t, n, i] = e;
        return (0, l.vq)(t, n, i);
    });
}
function s(e) {
    let [t, n] = i.useState(),
        l = i.useRef(!1);
    return (
        null == e ||
            null != t ||
            l.current ||
            ((l.current = !0),
            a(e).then((e) => {
                n(e[0]);
            })),
        t
    );
}
