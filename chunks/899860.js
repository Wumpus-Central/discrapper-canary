n.d(t, { A: () => l });
var a = n(627968),
    s = n(64700),
    i = n(397927);
let l = function (e) {
    let { assetKey: t, initialValue: n, onMessageChange: l, title: r } = e,
        [o, d] = s.useState("");
    return (
        s.useEffect(() => {
            d(n ?? "");
        }, [n]),
        (0, a.jsx)(i.ksK, {
            label: r,
            value: o,
            onChange: function (e) {
                d(e), l(t, e);
            },
        })
    );
};
