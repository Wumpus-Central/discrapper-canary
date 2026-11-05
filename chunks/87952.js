var r = n(582128),
    i = n(739508),
    s = n(558740);
n.d(
    e,
    {},
    {
        A: function () {
            let [t, e] = r.useState(null);
            return (
                r.useEffect(() => {
                    (0, s.Cv)()
                        .then((t) => e(t))
                        .catch((t) => {
                            (0, i.pM)(t);
                        });
                }, []),
                t
            );
        },
    },
);
