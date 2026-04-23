n.d(t, {
    BK: () => b,
    BO: () => L,
    K3: () => f,
    NQ: () => C,
    Ts: () => S,
    U: () => p,
    Vt: () => h,
    ZT: () => D,
    jU: () => g,
    oc: () => O,
    qv: () => R,
    v7: () => m,
    zr: () => N,
});
var i = n(636537),
    r = n(228366),
    a = n(587895),
    s = n(328153),
    _ = n(976860),
    l = n(253932),
    o = n(775228),
    E = n(954571),
    d = n(645243),
    c = n(738533),
    u = n(962052),
    I = n(356645),
    A = n(652215),
    T = n(985018);
function S(e, t) {
    u.A.init({
        userToken: e,
        userId: t,
        installPaths: o.A.installationPaths,
        platform: (0, d.O)(),
        stateCallback: (e) => {
            r.h.dispatch({ type: "DISPATCH_APPLICATION_STATE_UPDATE", state: e });
        },
        errorCallback: (e) => {
            r.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: e });
        },
    });
}
function N() {
    u.A.destroy();
}
function O(e) {
    let { application: t, branchId: n, buildId: i, manifestIds: a, installationPath: s, analyticsLocation: _ } = e;
    u.A.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: i,
        manifestIds: a,
        installationPath: s,
    }),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_INSTALL", applicationId: t.id, branchId: n, installationPath: s }),
        E.default.track(A.HAw.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: _,
        });
}
function R(e, t, n) {
    (0, I.n)(e.id, t).then(() => {
        r.h.dispatch({ type: "DISPATCH_APPLICATION_REPAIR", applicationId: e.id, branchId: t });
    }),
        E.default.track(A.HAw.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n,
        });
}
function f(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !(function (e, t, n, i) {
        if (s.Ay.getRunningDiscordApplicationIds().includes(e.id)) return;
        let r = o.A.getInstallationPath(e.id, t);
        if (null == r) throw Error(`Missing installation path for application: ${e.id} ${t}`);
        u.A.setTargetManifest({
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
function C(e, t, n) {
    let i = a.A.getApplication(e);
    null != i &&
        (c.A.removeShortcuts(i.name),
        E.default.track(A.HAw.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n,
        })),
        u.A.uninstall(e, t),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_UNINSTALL", applicationId: e, branchId: t });
}
function p() {
    u.A.resume();
}
function m() {
    u.A.pause();
}
function L(e, t) {
    r.h.dispatch({ type: "DISPATCH_APPLICATION_MOVE_UP", applicationId: e, branchId: t });
}
function D(e, t) {
    u.A.cancel(e, t), r.h.dispatch({ type: "DISPATCH_APPLICATION_CANCEL", applicationId: e, branchId: t });
}
function h(e, t) {
    r.h.dispatch({ type: "DISPATCH_APPLICATION_REMOVE_FINISHED", applicationId: e, branchId: t });
}
function g(e, t) {
    let n = a.A.getApplication(e);
    null != n && c.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), n.name, n.id, t.installPath);
}
function b(e, t) {
    let r = a.A.getApplication(e);
    i.Bo.post({ url: A.Rsh.LIBRARY_APPLICATION_INSTALLED(e, e), oldFormErrors: !0, rejectWithError: !0 }),
        null != r &&
            (c.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), r.name, r.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 264686))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        r.getIconURL(64),
                        T.intl.string(T.t["1wR7yI"]),
                        T.intl.formatToPlainString(T.t["89VAgW"], { name: r.name }),
                        { notif_type: "Game Library Game Installed" },
                        { onClick: () => (0, _.pX)(A.BVt.APPLICATION_LIBRARY), omitViewTracking: !0, isUserAvatar: !1 },
                    );
                }));
}
