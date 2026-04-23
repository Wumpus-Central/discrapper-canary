r.r(t), r.d(t, { default: () => f });
var n = r(627968),
    l = r(64700),
    a = r(492462),
    i = r(873263),
    c = r(13202),
    s = r(77468),
    o = r(29599),
    u = r(652215);
function d(e) {
    let { platformType: t } = e,
        r = (0, i.W6)();
    return (
        l.useEffect(() => {
            let { code: e, state: n } = a.parse(window.location.search),
                l = `${u.BVt.CONNECTIONS_ERROR(t)}${window.location.search}`;
            null == e || null == n
                ? r.replace(l)
                : s.A.linkDispatchAuthCallback(t, { code: e, state: n }).then(
                      (e) => {
                          let { status: n } = e;
                          204 === n ? r.replace(u.BVt.CONNECTIONS_SUCCESS(t)) : r.replace(l);
                      },
                      () => {
                          r.replace(l);
                      },
                  );
        }, [r, t]),
        (0, n.jsx)(o.VerifyAccountLoading, { platformType: t })
    );
}
let f = function (e) {
    let { match: t } = e,
        r = t.params.type,
        { two_way_link_type: l } = a.parse(window.location.search);
    return [u.fg2.XBOX, u.fg2.PLAYSTATION_STAGING, u.fg2.PLAYSTATION, u.fg2.CRUNCHYROLL].includes(r) &&
        l === c.I.DESKTOP
        ? (0, n.jsx)(d, { platformType: r })
        : null;
};
