n.d(t, { A: () => o });
var l = n(582128),
    r = n(739508),
    i = n(71532);
function o() {
    let [e, t] = l.useState(null);
    return (
        l.useEffect(() => {
            (0, i.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.pM)(e);
                });
        }, []),
        e
    );
}
