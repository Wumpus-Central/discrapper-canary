n.r(t), n.d(t, { default: () => f }), n(35282), n(704826);
var r = n(255367),
    c = n(73800),
    o = n(593473),
    l = n(114858),
    a = n(478677),
    i = n(457330),
    s = n(675207),
    u = n(981631);
function d(e) {
    let { platformType: t } = e,
        n = (0, l.k6)();
    return (
        c.useEffect(() => {
            let { code: e, state: r } = o.parse(window.location.search),
                c = ''.concat(u.Z5c.CONNECTIONS_ERROR(t)).concat(window.location.search);
            if (null == e || null == r) return void n.replace(c);
            i.Z.linkDispatchAuthCallback(t, {
                code: e,
                state: r
            }).then(
                (e) => {
                    let { status: r } = e;
                    204 === r ? n.replace(u.Z5c.CONNECTIONS_SUCCESS(t)) : n.replace(c);
                },
                () => {
                    n.replace(c);
                }
            );
        }, [n, t]),
        (0, r.jsx)(s.VerifyAccountLoading, { platformType: t })
    );
}
let f = function (e) {
    let { match: t } = e,
        n = t.params.type,
        { two_way_link_type: c } = o.parse(window.location.search);
    return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(n) && c === a.g.DESKTOP ? (0, r.jsx)(d, { platformType: n }) : null;
};
