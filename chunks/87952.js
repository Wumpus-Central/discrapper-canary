n.d(t, { A: () => o });
var r = n(64700),
    a = n(739508),
    i = n(71532);
function o() {
    let [e, t] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, i.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, a.pM)(e);
                });
        }, []),
        e
    );
}
