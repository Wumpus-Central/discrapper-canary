n.d(t, {
    m: () => u,
});
var r = n(311907),
    i = n(961350),
    a = n(290863),
    s = n(461213),
    o = n(765379),
    l = n(652215);
let c = (e) =>
    ([l.$pd.PLAYING, l.$pd.WATCHING].includes(e.type) &&
        (null != e.assets || null != e.state || null != e.details || null != e.party)) ||
    e.type === l.$pd.LISTENING;

function u(e, t) {
    return (0, r.bG)(
        [s.A, a.A, i.default],
        () =>
            (e.id === i.default.getId() ? s.A.getActivities() : a.A.getActivities(e.id))
                .filter(c)
                .filter(
                    (e) =>
                        !(0, o.A)(e) &&
                        (null == t ||
                            null == e.application_id ||
                            null == t.application_id ||
                            e.application_id !== t.application_id),
                ),
        [e.id, t],
        r.My,
    );
}
