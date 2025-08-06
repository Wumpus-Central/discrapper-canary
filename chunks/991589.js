r.d(t, { r: () => i });
var n = r(73800),
    l = r(114858),
    a = r(675997);
function i(e) {
    let { children: t, routePattern: r = "/shop", className: i = "shop-takeover" } = e,
        o = (0, l.TH)(),
        { enableShopTakeOver: s } = a.Z.useConfig({ location: "CollectiblesShop" });
    return (
        n.useEffect(
            () => (
                o.pathname.startsWith(r) && s ? document.body.classList.add(i) : document.body.classList.remove(i),
                () => {
                    document.body.classList.remove(i);
                }
            ),
            [o.pathname, r, i, s],
        ),
        n.createElement(n.Fragment, null, t)
    );
}
r(989090);
