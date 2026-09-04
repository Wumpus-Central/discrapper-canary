n.d(t, { A: () => i });
var r = n(582128),
    l = n(739508),
    o = n(71532);
function i() {
    let [e, t] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, o.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, l.pM)(e);
                });
        }, []),
        e
    );
}
