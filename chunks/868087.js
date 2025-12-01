n.d(e, { p: () => s });
var i = n(473749),
    r = n(5900),
    l = n(773275),
    u = n(960048);
let s = () => {
    let t = (0, l.xf)((t) => t.doInstall),
        e = (0, l.xf)((t) => t.install),
        n = (0, l.xf)((t) => t.installationStatus),
        s = (0, l.xf)((t) => t.setDoInstall),
        a = (0, l.xf)((t) => t.setInstallationStatus);
    return (
        (0, i.useEffect)(() => {
            t &&
                n === r._n.NOT_INSTALLED &&
                (s(!1),
                a(r._n.INSTALLING),
                e().catch((t) => {
                    a(r._n.ERROR), u.Z.captureException(t, { tags: { source: "WARP_INSTALL_HELPER" } });
                }));
        }, [t, s, e, n, a]),
        null
    );
};
