r.d(t, { A: () => i });
var n = r(64700),
    a = r(739508),
    l = r(71532);
function i() {
    let [e, t] = n.useState(null);
    return (
        n.useEffect(() => {
            (0, l.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, a.pM)(e);
                });
        }, []),
        e
    );
}
