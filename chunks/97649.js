a.r(t);
var l = a(477900),
    c = a(582128),
    n = a(492462),
    r = a(806163),
    i = a(13202),
    p = a(77468),
    o = a(291007),
    s = a(652215);
function u(e) {
    let { platformType: t } = e,
        a = (0, r.W6)();
    return (
        c.useEffect(() => {
            let { code: e, state: l } = n.qg(window.location.search),
                c = `${s.BVt.CONNECTIONS_ERROR(t)}${window.location.search}`;
            null == e || null == l
                ? a.replace(c)
                : p.A.linkDispatchAuthCallback(t, { code: e, state: l }).then(
                      (e) => {
                          let { status: l } = e;
                          204 === l ? a.replace(s.BVt.CONNECTIONS_SUCCESS(t)) : a.replace(c);
                      },
                      () => {
                          a.replace(c);
                      },
                  );
        }, [a, t]),
        (0, l.jsx)(o.VerifyAccountLoading, { platformType: t })
    );
}
a.d(
    t,
    {},
    {
        default: function (e) {
            let { match: t } = e,
                a = t.params.type,
                { two_way_link_type: c } = n.qg(window.location.search);
            return [s.fg2.XBOX, s.fg2.PLAYSTATION_STAGING, s.fg2.PLAYSTATION, s.fg2.CRUNCHYROLL].includes(a) &&
                c === i.I.DESKTOP
                ? (0, l.jsx)(u, { platformType: a })
                : null;
        },
    },
);
