"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(739508),
    s = n(71532);
function a() {
    let [e, t] = r.useState(null);
    return (
        r.useEffect(() => {
            (0, s.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, i.pM)(e);
                });
        }, []),
        e
    );
}
