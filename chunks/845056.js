i.d(t, { m: () => u });
var n = i(17928),
    l = i(495544),
    s = i(290863),
    a = i(461213),
    r = i(765379),
    d = i(652215);
let o = (e) =>
    ([d.$pd.PLAYING, d.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === d.$pd.LISTENING;
function u(e, t) {
    return (0, n.yK)([a.A, s.A, l.default], () => {
        let i = e.id === l.default.getId() ? a.A.getActivities() : s.A.getActivities(e.id),
            n = new Map();
        for (let e of i) {
            if (
                !o(e) ||
                (0, r.A)(e) ||
                (null != t &&
                    ((null != t.application_id && e.application_id === t.application_id) ||
                        (null != t.name && e.name === t.name)))
            )
                continue;
            let i = e.application_id ?? e.name;
            null == i || n.has(i) || n.set(i, e);
        }
        return Array.from(n.values());
    }, [e.id, t]);
}
