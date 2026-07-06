r.d(t, { A: () => c });
var n = r(64700),
    u = r(739508),
    i = r(71532);
function c() {
    let [e, t] = n.useState(null);
    return (
        n.useEffect(() => {
            (0, i.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, u.pM)(e);
                });
        }, []),
        e
    );
}
