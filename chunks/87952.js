c.d(e, { A: () => a });
var s = c(582128),
    u = c(739508),
    p = c(71532);
function a() {
    let [t, e] = s.useState(null);
    return (
        s.useEffect(() => {
            (0, p.Cv)()
                .then((t) => e(t))
                .catch((t) => {
                    (0, u.pM)(t);
                });
        }, []),
        t
    );
}
