e.d(t, { A: () => i });
var n = e(582128),
    o = e(739508),
    s = e(71532);
function i() {
    let [r, t] = n.useState(null);
    return (
        n.useEffect(() => {
            (0, s.Cv)()
                .then((r) => t(r))
                .catch((r) => {
                    (0, o.pM)(r);
                });
        }, []),
        r
    );
}
