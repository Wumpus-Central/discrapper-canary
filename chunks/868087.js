n.d(t, { p: () => s });
var r = n(473749),
    i = n(5900),
    a = n(953865),
    o = n(960048);
let s = () => {
    let e = (0, a.xf)((e) => e.doInstall),
        t = (0, a.xf)((e) => e.install),
        n = (0, a.xf)((e) => e.installationStatus),
        s = (0, a.xf)((e) => e.setDoInstall),
        l = (0, a.xf)((e) => e.setInstallationStatus);
    return (
        (0, r.useEffect)(() => {
            e &&
                n === i._n.NOT_INSTALLED &&
                (s(!1),
                l(i._n.INSTALLING),
                t().catch((e) => {
                    l(i._n.ERROR), o.Z.captureException(e, { tags: { source: "WARP_INSTALL_HELPER" } });
                }));
        }, [e, s, t, n, l]),
        null
    );
};
