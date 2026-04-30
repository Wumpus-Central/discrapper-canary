n.d(t, { A: () => i });
var o = n(64700),
    r = n(739508),
    a = n(71532);
function i() {
    let [e, t] = o.useState(null);
    return (
        o.useEffect(() => {
            (0, a.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.pM)(e);
                });
        }, []),
        e
    );
}
