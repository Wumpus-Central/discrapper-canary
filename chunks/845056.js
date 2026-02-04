n.d(t, {
    N: () => c,
    m: () => u,
});
var r = n(311907),
    l = n(961350),
    i = n(290863),
    s = n(461213),
    a = n(765379),
    o = n(652215);
let c = (e) =>
    ([o.$pd.PLAYING, o.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === o.$pd.LISTENING;

function u(e, t) {
    return (0, r.bG)(
        [s.A, i.A, l.default],
        () =>
            (e.id === l.default.getId() ? s.A.getActivities() : i.A.getActivities(e.id))
                .filter(c)
                .filter(
                    (e) =>
                        !(0, a.A)(e) &&
                        (null == t ||
                            null == e.application_id ||
                            null == t.application_id ||
                            e.application_id !== t.application_id),
                ),
        [e.id, t],
        r.My,
    );
}
