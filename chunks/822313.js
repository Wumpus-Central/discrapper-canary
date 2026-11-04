var r = n(582128);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, l] = r.useState(null),
                [i, a] = r.useState(e);
            return (
                e !== i && (a(e), l(null)),
                [
                    n ?? e,
                    r.useCallback(
                        (e) => {
                            (l(e), t(e));
                        },
                        [t],
                    ),
                ]
            );
        },
    },
);
