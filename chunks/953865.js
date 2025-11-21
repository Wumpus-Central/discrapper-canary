n.d(t, {
    o8: () => g,
    ov: () => b,
    xf: () => O,
    xz: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(343203),
    o = n(663042),
    s = n(818710),
    l = n(956097),
    c = n(998054),
    u = n(5900),
    d = n(848984);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
        perkAvailableToUser: !1,
        installationStatus: u._n.UNKNOWN,
        connectionStatus: u.Ij.INITIALIZING,
        isWeb: (0, s.$L)(),
        isSupportedPrivateBrowsingPerkPlatform: (0, s.ED)() || (0, s.V5)(),
    },
    g = (e) =>
        (0, a.M)()((t) =>
            _(
                h(_({}, m), {
                    setRegistration: (e) => t((t) => h(_({}, t), { registration: e })),
                    setInstallationStatus: (e) => t((t) => h(_({}, t), { installationStatus: e })),
                    setConnectionStatus: (e) => t((t) => h(_({}, t), { connectionStatus: e })),
                    setPerkAvailableToUser: (e) => t(() => ({ perkAvailableToUser: e })),
                    setIsWeb: (e) => t(() => ({ isWeb: e })),
                    setIsSupportedPrivateBrowsingPerkPlatform: (e) =>
                        t(() => ({ isSupportedPrivateBrowsingPerkPlatform: e })),
                    getWarpInstallationStatus: c.Y,
                    finishSetup: async () => await l.Z.finishSetup(),
                    connect: async () => !1,
                    disconnect: async () => !1,
                    install: async () => {},
                    uninstall: async () => {},
                    setConnect: (e) => t(() => ({ connect: e })),
                    setDisconnect: (e) => t(() => ({ disconnect: e })),
                    setInstall: (e) => t(() => ({ install: e })),
                    setUninstall: (e) => t(() => ({ uninstall: e })),
                    doInstall: !1,
                    setDoInstall: (e) => t(() => ({ doInstall: e })),
                    setGetWarpInstallationStatus: (e) => t(() => ({ getWarpInstallationStatus: e })),
                }),
                e,
            ),
        ),
    E = i.createContext(null),
    b = (e) => {
        let { children: t } = e,
            n = y();
        return (0, r.jsx)(E.Provider, {
            value: n,
            children: t,
        });
    },
    y = () => {
        let e = (0, d.u)(),
            [t] = (0, i.useState)(() =>
                g({
                    install: c.f,
                    connect: async () => await l.Z.connect(),
                    disconnect: async () => await l.Z.disconnect(),
                    perkAvailableToUser: e,
                }),
            ),
            n = (0, o.o)(t, (e) => e.setPerkAvailableToUser);
        return (
            (0, i.useEffect)(() => {
                n(e);
            }, [e, n]),
            t
        );
    };
function O(e) {
    let t = (0, i.useContext)(E),
        n = y(),
        r = null != t ? t : n;
    return null != e ? (0, o.o)(r, e) : (0, o.o)(r);
}
