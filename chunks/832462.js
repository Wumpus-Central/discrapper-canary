n.r(t), n.d(t, { default: () => d }), n(301563), n(757143);
var r = n(200651),
    o = n(192379),
    c = n(593473),
    l = n(512969),
    i = n(478677),
    a = n(457330),
    s = n(675207),
    u = n(981631);
function f(e) {
    let { platformType: t } = e,
        n = (0, l.k6)();
    return (
        o.useEffect(() => {
            let { code: e, state: r } = c.parse(window.location.search),
                o = ''.concat(u.Z5c.CONNECTIONS_ERROR(t)).concat(window.location.search);
            if (null == e || null == r) {
                n.replace(o);
                return;
            }
            a.Z.linkDispatchAuthCallback(t, {
                code: e,
                state: r
            }).then(
                (e) => {
                    let { status: r } = e;
                    204 === r ? n.replace(u.Z5c.CONNECTIONS_SUCCESS(t)) : n.replace(o);
                },
                () => {
                    n.replace(o);
                }
            );
        }, [n, t]),
        (0, r.jsx)(s.VerifyAccountLoading, { platformType: t })
    );
}
let d = function (e) {
    let { match: t } = e,
        n = t.params.type,
        { two_way_link_type: o } = c.parse(window.location.search);
    return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(n) && o === i.g.DESKTOP ? (0, r.jsx)(f, { platformType: n }) : null;
};
