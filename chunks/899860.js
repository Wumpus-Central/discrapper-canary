a.d(t, { A: () => s });
var n = a(627968),
    l = a(64700),
    i = a(292666);
let s = function (e) {
    let { assetKey: t, initialValue: a, onMessageChange: s, title: r } = e,
        [o, d] = l.useState("");
    return (
        l.useEffect(() => {
            d(a ?? "");
        }, [a]),
        (0, n.jsx)(i.k, {
            label: r,
            value: o,
            onChange: function (e) {
                d(e), s(t, e);
            },
        })
    );
};
