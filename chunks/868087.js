n.d(e, { p: () => T }), n(415506), n(49124);
var i = n(473749),
    l = n(323183),
    s = n(5900),
    u = n(773275),
    r = n(626135),
    a = n(960048),
    o = n(981631);
let T = () => {
    let t = (0, u.xf)((t) => t.doInstall),
        e = (0, u.xf)((t) => t.install),
        n = (0, u.xf)((t) => t.installationStatus),
        T = (0, u.xf)((t) => t.setDoInstall),
        S = (0, u.xf)((t) => t.setInstallationStatus);
    return (
        (0, i.useEffect)(() => {
            t &&
                n === s._n.NOT_INSTALLED &&
                (T(!1),
                S(s._n.INSTALLING),
                e().catch((t) => {
                    S(s._n.ERROR),
                        a.Z.captureException(t, { tags: { source: l.D.WARP_INSTALL_HELPER } }),
                        r.default.track(o.rMx.PREMIUM_FEATURE_ERROR, {
                            error_message: t instanceof Error ? t.message : JSON.stringify(t),
                            error_source: l.D.WARP_INSTALL_HELPER,
                        });
                }));
        }, [t, T, e, n, S]),
        null
    );
};
