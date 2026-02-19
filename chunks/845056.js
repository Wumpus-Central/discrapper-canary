"use strict";
n.d(t, { N: () => c, m: () => d });
var i = n(311907),
    s = n(961350),
    l = n(290863),
    r = n(461213),
    a = n(765379),
    o = n(652215);
let c = (e) =>
    ([o.$pd.PLAYING, o.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === o.$pd.LISTENING;
function d(e, t) {
    return (0, i.bG)(
        [r.A, l.A, s.default],
        () => {
            let n = (e.id === s.default.getId() ? r.A.getActivities() : l.A.getActivities(e.id))
                    .filter(c)
                    .filter(
                        (e) =>
                            !(0, a.A)(e) &&
                            (null == t ||
                                ((null == t.application_id || e.application_id !== t.application_id) &&
                                    (null == t.name || e.name !== t.name))),
                    ),
                i = new Map();
            for (let e of n) {
                let t = e.application_id ?? e.name;
                null == t || i.has(t) || i.set(t, e);
            }
            return Array.from(i.values());
        },
        [e.id, t],
        i.My,
    );
}
