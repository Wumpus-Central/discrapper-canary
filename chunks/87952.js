n.d(t, { A: () => a });
var o = n(64700),
    r = n(739508),
    i = n(71532);
function a() {
    let [e, t] = o.useState(null);
    return (
        o.useEffect(() => {
            (0, i.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.pM)(e);
                });
        }, []),
        e
    );
}
