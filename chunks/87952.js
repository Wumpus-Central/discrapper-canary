"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(739508),
    s = n(71532);
function a() {
    let [e, t] = i.useState(null);
    return (
        i.useEffect(() => {
            (0, s.Cv)()
                .then((e) => t(e))
                .catch((e) => {
                    (0, r.pM)(e);
                });
        }, []),
        e
    );
}
