var n = t(350835),
    l = t(855986),
    s = t(46653),
    a = t(290863),
    r = t(894768),
    d = t(765379);
function o(e) {
    return (
        ([n.$.PLAYING, n.$.WATCHING].includes(e.type) &&
            [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
        e.type === n.$.LISTENING
    );
}
t.d(
    i,
    {},
    {
        N: o,
        m: function (e, i) {
            return (0, l.yK)(
                [r.A, a.A, s.default],
                () => {
                    let t = e.id === s.default.getId() ? r.A.getActivities() : a.A.getActivities(e.id),
                        n = new Map();
                    for (let e of t) {
                        if (
                            !o(e) ||
                            (0, d.A)(e) ||
                            (null != i &&
                                ((null != i.application_id && e.application_id === i.application_id) ||
                                    (null != i.name && e.name === i.name)))
                        )
                            continue;
                        let t = e.application_id ?? e.name;
                        null == t || n.has(t) || n.set(t, e);
                    }
                    return Array.from(n.values());
                },
                [e.id, i],
            );
        },
    },
);
