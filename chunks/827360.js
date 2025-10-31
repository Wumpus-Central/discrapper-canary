n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(907862),
    a = n(100527),
    s = n(906732),
    o = n(335131),
    c = n(215023),
    u = n(388032),
    d = n(595619);
let p = (e) => {
    let { targetElementRef: t, onRequestClose: n, onClick: p } = e,
        { analyticsLocations: f } = (0, s.ZP)(a.Z.HOME_PAGE_SHOP_TAB),
        m = i.useRef(n);
    return (
        (m.current = n),
        i.useEffect(
            () => () => {
                var e;
                null == (e = m.current) || e.call(m);
            },
            [],
        ),
        (0, r.jsx)(l.J2, {
            targetElementRef: t,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: u.intl.string(u.t.epBu6F),
            body: u.intl.string(u.t["o8+3AX"]),
            graphic: {
                type: "image",
                src: d.Z,
            },
            gradientColor: "blue",
            actions: [
                {
                    text: u.intl.string(u.t.dp9qDi),
                    variant: "primary",
                    onClick: () => {
                        null == p || p(),
                            (0, o.mK)({
                                analyticsLocations: f,
                                analyticsSource: a.Z.HOME_PAGE_SHOP_TAB,
                                tab: c.AW.HOME,
                            });
                    },
                },
            ],
            onRequestClose: n,
        })
    );
};
