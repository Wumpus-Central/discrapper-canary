n.d(t, { A: () => i });
var a = n(582128),
    r = n(739508),
    l = n(71532);
function i() {
    let [e, t] = a.useState(null);
    return (
        a.useEffect(() => {
            (0, l.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.pM)(e);
                });
        }, []),
        e
    );
}
