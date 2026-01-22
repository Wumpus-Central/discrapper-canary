r.r(t), r.d(t, { default: () => f }), r(747238), r(812715);
var n = r(627968),
    c = r(64700),
    l = r(492462),
    a = r(960488),
    o = r(13202),
    i = r(77468),
    u = r(556074),
    s = r(652215);
function d(e) {
    let { platformType: t } = e,
        r = (0, a.W6)();
    return (
        c.useEffect(() => {
            let { code: e, state: n } = l.parse(window.location.search),
                c = "".concat(s.BVt.CONNECTIONS_ERROR(t)).concat(window.location.search);
            null == e || null == n
                ? r.replace(c)
                : i.A.linkDispatchAuthCallback(t, {
                      code: e,
                      state: n,
                  }).then(
                      (e) => {
                          let { status: n } = e;
                          204 === n ? r.replace(s.BVt.CONNECTIONS_SUCCESS(t)) : r.replace(c);
                      },
                      () => {
                          r.replace(c);
                      },
                  );
        }, [r, t]),
        (0, n.jsx)(u.VerifyAccountLoading, { platformType: t })
    );
}
let f = function (e) {
    let { match: t } = e,
        r = t.params.type,
        { two_way_link_type: c } = l.parse(window.location.search);
    return [s.fg2.XBOX, s.fg2.PLAYSTATION_STAGING, s.fg2.PLAYSTATION, s.fg2.CRUNCHYROLL].includes(r) &&
        c === o.I.DESKTOP
        ? (0, n.jsx)(d, { platformType: r })
        : null;
};
