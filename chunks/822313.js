var l = n(582128);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, r] = l.useState(null),
                [i, a] = l.useState(e);
            return (
                e !== i && (a(e), r(null)),
                [
                    n ?? e,
                    l.useCallback(
                        (e) => {
                            (r(e), t(e));
                        },
                        [t],
                    ),
                ]
            );
        },
    },
);
