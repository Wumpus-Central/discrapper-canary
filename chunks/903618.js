n.d(t, {
    A: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(788868),
    o = n(298116),
    l = n(134839),
    c = n(974704),
    u = n(703707),
    d = n(460024),
    f = n(889056),
    p = n(579401),
    _ = n(991564),
    h = n(336417),
    m = n(790193);
let g = {
        [s.o2.STANDARD_BOX]: f,
        [s.o2.CAKE]: p,
        [s.o2.CHEST]: _,
        [s.o2.COFFEE]: h,
        [s.o2.SNOWGLOBE]: "",
        [s.o2.BOX]: "",
        [s.o2.CUP]: "",
        [s.o2.SEASONAL_CAKE]: c,
        [s.o2.SEASONAL_CHEST]: u,
        [s.o2.SEASONAL_COFFEE]: d,
        [s.o2.SEASONAL_STANDARD_BOX]: l,
        [s.o2.NITROWEEN_STANDARD]: m.A,
    },
    E = i.forwardRef(function (e, t) {
        let { isSelected: n, giftStyle: i, setSelectedGiftStyle: s, onFocus: l, onBlur: c } = e;
        return (0, r.jsx)(a.DUT, {
            className: o.x6,
            innerRef: t,
            onClick: () => s(i),
            onFocus: l,
            onBlur: c,
            children: (0, r.jsx)("img", {
                style: {
                    width: "100%",
                    height: "100%",
                },
                alt: "",
                src: g[i],
                className: n ? o.MY : o.dk,
            }),
        });
    });
