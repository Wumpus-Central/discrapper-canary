l.d(t, {
    Z: () => r,
}),
    l(896048);
var n = l(64700);
let r = (e) => {
    let [t, l] = n.useState(1);
    return {
        currentPage: t,
        handlePageChange: n.useCallback(
            (t) => {
                var n;
                l(t),
                    null == (n = e.current) ||
                        n.scrollTo({
                            to: 0,
                        });
            },
            [e, l],
        ),
    };
};
