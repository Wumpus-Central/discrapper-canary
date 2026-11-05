var r = n(582128),
    o = n(739508),
    i = n(558740);
n.d(
    e,
    {},
    {
        A: function () {
            let [t, e] = r.useState(null);
            return (
                r.useEffect(() => {
                    (0, i.Cv)()
                        .then((t) => e(t))
                        .catch((t) => {
                            (0, o.pM)(t);
                        });
                }, []),
                t
            );
        },
    },
);
