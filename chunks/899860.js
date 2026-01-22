n.d(t, {
    A: () => r,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(397927);
let r = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: r, title: s } = e,
        [o, c] = l.useState("");
    return (
        l.useEffect(() => {
            c(null != n ? n : "");
        }, [n]),
        (0, a.jsx)(i.ksK, {
            label: s,
            value: o,
            onChange: function (e) {
                c(e), r(t, e);
            },
        })
    );
};
