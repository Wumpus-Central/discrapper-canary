n.d(t, { m: () => c });
var i = n(311907),
    l = n(961350),
    s = n(290863),
    a = n(461213),
    r = n(765379),
    o = n(652215);
let d = (e) =>
    ([o.$pd.PLAYING, o.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === o.$pd.LISTENING;
function c(e, t) {
    return (0, i.yK)([a.A, s.A, l.default], () => {
        let n = e.id === l.default.getId() ? a.A.getActivities() : s.A.getActivities(e.id),
            i = new Map();
        for (let e of n) {
            if (
                !d(e) ||
                (0, r.A)(e) ||
                (null != t &&
                    ((null != t.application_id && e.application_id === t.application_id) ||
                        (null != t.name && e.name === t.name)))
            )
                continue;
            let n = e.application_id ?? e.name;
            null == n || i.has(n) || i.set(n, e);
        }
        return Array.from(i.values());
    }, [e.id, t]);
}
