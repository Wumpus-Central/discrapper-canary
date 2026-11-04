var c = e(164636),
    u = e(590180),
    s = e(4227);
e.d(
    r,
    {},
    {
        A: function (t) {
            let [r, e] = (0, c.yK)([u.A], () => [u.A.getCategoryForProduct(t), u.A.getProduct(t)]);
            return { category: r, product: e, purchase: (0, c.bG)([s.A], () => s.A.getPurchase(t)) };
        },
    },
);
