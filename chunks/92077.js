n.d(t, {
    BK: () => b,
    BO: () => R,
    K3: () => p,
    NQ: () => m,
    Ts: () => h,
    U: () => O,
    Vt: () => L,
    ZT: () => g,
    jU: () => D,
    oc: () => N,
    qv: () => f,
    v7: () => C,
    zr: () => S,
});
var i = n(636537),
    a = n(228366),
    r = n(587895),
    s = n(328153),
    l = n(976860),
    o = n(253932),
    d = n(775228),
    c = n(954571),
    _ = n(645243),
    E = n(738533),
    u = n(962052),
    A = n(356645),
    I = n(652215),
    T = n(985018);
function h(e, t) {
    u.A.init({
        userToken: e,
        userId: t,
        installPaths: d.A.installationPaths,
        platform: (0, _.O)(),
        stateCallback: (e) => {
            a.h.dispatch({ type: "DISPATCH_APPLICATION_STATE_UPDATE", state: e });
        },
        errorCallback: (e) => {
            a.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: e });
        },
    });
}
function S() {
    u.A.destroy();
}
function N(e) {
    let { application: t, branchId: n, buildId: i, manifestIds: r, installationPath: s, analyticsLocation: l } = e;
    u.A.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: i,
        manifestIds: r,
        installationPath: s,
    }),
        a.h.dispatch({ type: "DISPATCH_APPLICATION_INSTALL", applicationId: t.id, branchId: n, installationPath: s }),
        c.default.track(I.HAw.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: l,
        });
}
function f(e, t, n) {
    (0, A.n)(e.id, t).then(() => {
        a.h.dispatch({ type: "DISPATCH_APPLICATION_REPAIR", applicationId: e.id, branchId: t });
    }),
        c.default.track(I.HAw.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n,
        });
}
function p(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !(function (e, t, n, i) {
        if (s.Ay.getRunningDiscordApplicationIds().includes(e.id)) return;
        let a = d.A.getInstallationPath(e.id, t);
        if (null == a) throw Error(`Missing installation path for application: ${e.id} ${t}`);
        u.A.setTargetManifest({
            applicationId: e.id,
            applicationName: e.name,
            applicationIcon: e.icon,
            branchId: t,
            buildId: n,
            manifestIds: i,
            installationPath: a,
        });
    })(e, t, n, i),
        a.h.dispatch({ type: "DISPATCH_APPLICATION_UPDATE", applicationId: e.id, branchId: t, automatic: r });
}
function m(e, t, n) {
    let i = r.A.getApplication(e);
    null != i &&
        (E.A.removeShortcuts(i.name),
        c.default.track(I.HAw.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n,
        })),
        u.A.uninstall(e, t),
        a.h.dispatch({ type: "DISPATCH_APPLICATION_UNINSTALL", applicationId: e, branchId: t });
}
function O() {
    u.A.resume();
}
function C() {
    u.A.pause();
}
function R(e, t) {
    a.h.dispatch({ type: "DISPATCH_APPLICATION_MOVE_UP", applicationId: e, branchId: t });
}
function g(e, t) {
    u.A.cancel(e, t), a.h.dispatch({ type: "DISPATCH_APPLICATION_CANCEL", applicationId: e, branchId: t });
}
function L(e, t) {
    a.h.dispatch({ type: "DISPATCH_APPLICATION_REMOVE_FINISHED", applicationId: e, branchId: t });
}
function D(e, t) {
    let n = r.A.getApplication(e);
    null != n && E.A.createShortcuts(o.uB.getSetting(), o.Pf.getSetting(), n.name, n.id, t.installPath);
}
function b(e, t) {
    let a = r.A.getApplication(e);
    i.Bo.post({ url: I.Rsh.LIBRARY_APPLICATION_INSTALLED(e, e), oldFormErrors: !0, rejectWithError: !0 }),
        null != a &&
            (E.A.createShortcuts(o.uB.getSetting(), o.Pf.getSetting(), a.name, a.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 264686))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        a.getIconURL(64),
                        T.intl.string(T.t["1wR7yI"]),
                        T.intl.formatToPlainString(T.t["89VAgW"], { name: a.name }),
                        { notif_type: "Game Library Game Installed" },
                        { onClick: () => (0, l.pX)(I.BVt.APPLICATION_LIBRARY), omitViewTracking: !0, isUserAvatar: !1 },
                    );
                }));
}
