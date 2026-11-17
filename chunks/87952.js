var n = e(582128),
    o = e(949192),
    s = e(558740);
e.d(
    t,
    {},
    {
        A: function () {
            let [r, t] = n.useState(null);
            return (
                n.useEffect(() => {
                    (0, s.Cv)()
                        .then((r) => t(r))
                        .catch((r) => {
                            (0, o.pM)(r);
                        });
                }, []),
                r
            );
        },
    },
);
