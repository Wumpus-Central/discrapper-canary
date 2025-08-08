n.d(t, { r: () => i });
var r = n(73800),
    l = n(114858),
    a = n(675997);
function i(e) {
    let { children: t, routePattern: n = "/shop", className: i = "shop-takeover" } = e,
        o = (0, l.TH)(),
        { enableShopTakeOver: s } = a.Z.useConfig({ location: "CollectiblesShop" });
    return (
        r.useEffect(
            () => (
                o.pathname.startsWith(n) && s ? document.body.classList.add(i) : document.body.classList.remove(i),
                () => {
                    document.body.classList.remove(i);
                }
            ),
            [o.pathname, n, i, s],
        ),
        r.createElement(r.Fragment, null, t)
    );
}
n(989090);
