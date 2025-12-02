n.d(e, { p: () => u });
var i = n(473749),
    r = n(5900),
    l = n(773275),
    s = n(960048);
let u = () => {
    let t = (0, l.xf)((t) => t.doInstall),
        e = (0, l.xf)((t) => t.install),
        n = (0, l.xf)((t) => t.installationStatus),
        u = (0, l.xf)((t) => t.setDoInstall),
        a = (0, l.xf)((t) => t.setInstallationStatus);
    return (
        (0, i.useEffect)(() => {
            t &&
                n === r._n.NOT_INSTALLED &&
                (u(!1),
                a(r._n.INSTALLING),
                e().catch((t) => {
                    a(r._n.ERROR), s.Z.captureException(t, { tags: { source: "WARP_INSTALL_HELPER" } });
                }));
        }, [t, u, e, n, a]),
        null
    );
};
