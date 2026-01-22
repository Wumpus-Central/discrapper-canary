n.d(t, { A: () => s }), n(896048);
var r = n(64700),
    i = n(739508),
    a = n(71532);
function s() {
    let [e, t] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, a.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, i.pM)(e);
                });
        }, []),
        e
    );
}
