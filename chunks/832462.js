n.r(t), n.d(t, { default: () => f }), n(35282), n(704826);
var r = n(54381),
    c = n(473749),
    o = n(593473),
    l = n(828700),
    a = n(478677),
    i = n(457330),
    u = n(675207),
    s = n(981631);
function d(e) {
    let { platformType: t } = e,
        n = (0, l.k6)();
    return (
        c.useEffect(() => {
            let { code: e, state: r } = o.parse(window.location.search),
                c = "".concat(s.Z5c.CONNECTIONS_ERROR(t)).concat(window.location.search);
            if (null == e || null == r) return void n.replace(c);
            i.Z.linkDispatchAuthCallback(t, {
                code: e,
                state: r,
            }).then(
                (e) => {
                    let { status: r } = e;
                    204 === r ? n.replace(s.Z5c.CONNECTIONS_SUCCESS(t)) : n.replace(c);
                },
                () => {
                    n.replace(c);
                },
            );
        }, [n, t]),
        (0, r.jsx)(u.VerifyAccountLoading, { platformType: t })
    );
}
let f = function (e) {
    let { match: t } = e,
        n = t.params.type,
        { two_way_link_type: c } = o.parse(window.location.search);
    return [s.ABu.XBOX, s.ABu.PLAYSTATION_STAGING, s.ABu.PLAYSTATION, s.ABu.CRUNCHYROLL].includes(n) &&
        c === a.g.DESKTOP
        ? (0, r.jsx)(d, { platformType: n })
        : null;
};
