n.d(t, {
    BK: () => D,
    BO: () => O,
    K3: () => g,
    NQ: () => S,
    Ts: () => f,
    U: () => N,
    Vt: () => L,
    ZT: () => R,
    jU: () => y,
    oc: () => T,
    qv: () => m,
    v7: () => C,
    zr: () => p,
});
var i = n(636537),
    r = n(228366),
    a = n(587895),
    s = n(952818),
    l = n(976860),
    o = n(885386),
    d = n(775228),
    c = n(174459),
    u = n(645243),
    _ = n(738533),
    E = n(962052),
    A = n(356645),
    h = n(652215),
    I = n(375708);
function f(e, t) {
    E.A.init({
        userToken: e,
        userId: t,
        installPaths: d.A.installationPaths,
        platform: (0, u.O)(),
        stateCallback: (e) => {
            r.h.dispatch({ type: "DISPATCH_APPLICATION_STATE_UPDATE", state: e });
        },
        errorCallback: (e) => {
            r.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: e });
        },
    });
}
function p() {
    E.A.destroy();
}
function T(e) {
    let { application: t, branchId: n, buildId: i, manifestIds: a, installationPath: s, analyticsLocation: l } = e;
    E.A.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: i,
        manifestIds: a,
        installationPath: s,
    }),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_INSTALL", applicationId: t.id, branchId: n, installationPath: s }),
        c.default.track(h.HAw.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: l,
        });
}
function m(e, t, n) {
    (0, A.n)(e.id, t).then(() => {
        r.h.dispatch({ type: "DISPATCH_APPLICATION_REPAIR", applicationId: e.id, branchId: t });
    }),
        c.default.track(h.HAw.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n,
        });
}
function g(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !(function (e, t, n, i) {
        if (s.Ay.getRunningDiscordApplicationIds().includes(e.id)) return;
        let r = d.A.getInstallationPath(e.id, t);
        if (null == r) throw Error(`Missing installation path for application: ${e.id} ${t}`);
        E.A.setTargetManifest({
            applicationId: e.id,
            applicationName: e.name,
            applicationIcon: e.icon,
            branchId: t,
            buildId: n,
            manifestIds: i,
            installationPath: r,
        });
    })(e, t, n, i),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_UPDATE", applicationId: e.id, branchId: t, automatic: a });
}
function S(e, t, n) {
    let i = a.A.getApplication(e);
    null != i &&
        (_.A.removeShortcuts(i.name),
        c.default.track(h.HAw.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n,
        })),
        E.A.uninstall(e, t),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_UNINSTALL", applicationId: e, branchId: t });
}
function N() {
    E.A.resume();
}
function C() {
    E.A.pause();
}
function O(e, t) {
    r.h.dispatch({ type: "DISPATCH_APPLICATION_MOVE_UP", applicationId: e, branchId: t });
}
function R(e, t) {
    E.A.cancel(e, t), r.h.dispatch({ type: "DISPATCH_APPLICATION_CANCEL", applicationId: e, branchId: t });
}
function L(e, t) {
    r.h.dispatch({ type: "DISPATCH_APPLICATION_REMOVE_FINISHED", applicationId: e, branchId: t });
}
function y(e, t) {
    let n = a.A.getApplication(e);
    null != n && _.A.createShortcuts(o.uB.getSetting(), o.Pf.getSetting(), n.name, n.id, t.installPath);
}
function D(e, t) {
    let r = a.A.getApplication(e);
    i.Bo.post({ url: h.Rsh.LIBRARY_APPLICATION_INSTALLED(e, e), oldFormErrors: !0, rejectWithError: !0 }),
        null != r &&
            (_.A.createShortcuts(o.uB.getSetting(), o.Pf.getSetting(), r.name, r.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 264686))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        r.getIconURL(64),
                        I.intl.string(I.t["1wR7yI"]),
                        I.intl.formatToPlainString(I.t["89VAgW"], { name: r.name }),
                        { notif_type: "Game Library Game Installed" },
                        { onClick: () => (0, l.pX)(h.BVt.APPLICATION_LIBRARY), omitViewTracking: !0, isUserAvatar: !1 },
                    );
                }));
}
