n.d(e, { p: () => u });
var i = n(473749),
    l = n(5900),
    s = n(773275),
    r = n(960048);
let u = () => {
    let t = (0, s.xf)((t) => t.doInstall),
        e = (0, s.xf)((t) => t.install),
        n = (0, s.xf)((t) => t.installationStatus),
        u = (0, s.xf)((t) => t.setDoInstall),
        a = (0, s.xf)((t) => t.setInstallationStatus);
    return (
        (0, i.useEffect)(() => {
            t &&
                n === l._n.NOT_INSTALLED &&
                (u(!1),
                a(l._n.INSTALLING),
                e().catch((t) => {
                    a(l._n.ERROR), r.Z.captureException(t, { tags: { source: "WARP_INSTALL_HELPER" } });
                }));
        }, [t, u, e, n, a]),
        null
    );
};
