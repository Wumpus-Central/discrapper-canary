t.d(i, { N: () => o, m: () => u });
var n = t(17928),
    l = t(495544),
    s = t(290863),
    a = t(461213),
    r = t(765379),
    d = t(652215);
function o(e) {
    return (
        ([d.$pd.PLAYING, d.$pd.WATCHING].includes(e.type) &&
            [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
        e.type === d.$pd.LISTENING
    );
}
function u(e, i) {
    return (0, n.yK)([a.A, s.A, l.default], () => {
        let t = e.id === l.default.getId() ? a.A.getActivities() : s.A.getActivities(e.id),
            n = new Map();
        for (let e of t) {
            if (
                !o(e) ||
                (0, r.A)(e) ||
                (null != i &&
                    ((null != i.application_id && e.application_id === i.application_id) ||
                        (null != i.name && e.name === i.name)))
            )
                continue;
            let t = e.application_id ?? e.name;
            null == t || n.has(t) || n.set(t, e);
        }
        return Array.from(n.values());
    }, [e.id, i]);
}
