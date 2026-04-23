"use strict";
n.d(t, {
    BK: () => b,
    BO: () => v,
    K3: () => T,
    NQ: () => S,
    Ts: () => m,
    U: () => y,
    Vt: () => O,
    ZT: () => C,
    jU: () => R,
    oc: () => A,
    qv: () => I,
    v7: () => N,
    zr: () => g,
});
var r = n(562465),
    i = n(73153),
    s = n(587895),
    a = n(15285),
    o = n(976860),
    l = n(253932),
    u = n(775228),
    c = n(954571),
    d = n(645243),
    _ = n(25171),
    f = n(962052),
    p = n(356645),
    h = n(652215),
    E = n(985018);
function m(e, t) {
    f.A.init({
        userToken: e,
        userId: t,
        installPaths: u.A.installationPaths,
        platform: (0, d.O)(),
        stateCallback: (e) => {
            i.h.dispatch({ type: "DISPATCH_APPLICATION_STATE_UPDATE", state: e });
        },
        errorCallback: (e) => {
            i.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: e });
        },
    });
}
function g() {
    f.A.destroy();
}
function A(e) {
    let { application: t, branchId: n, buildId: r, manifestIds: s, installationPath: a, analyticsLocation: o } = e;
    f.A.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: r,
        manifestIds: s,
        installationPath: a,
    }),
        i.h.dispatch({ type: "DISPATCH_APPLICATION_INSTALL", applicationId: t.id, branchId: n, installationPath: a }),
        c.default.track(h.HAw.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o,
        });
}
function I(e, t, n) {
    (0, p.n)(e.id, t).then(() => {
        i.h.dispatch({ type: "DISPATCH_APPLICATION_REPAIR", applicationId: e.id, branchId: t });
    }),
        c.default.track(h.HAw.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n,
        });
}
function T(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !(function (e, t, n, r) {
        if (a.Ay.getRunningDiscordApplicationIds().includes(e.id)) return;
        let i = u.A.getInstallationPath(e.id, t);
        if (null == i) throw Error(`Missing installation path for application: ${e.id} ${t}`);
        f.A.setTargetManifest({
            applicationId: e.id,
            applicationName: e.name,
            applicationIcon: e.icon,
            branchId: t,
            buildId: n,
            manifestIds: r,
            installationPath: i,
        });
    })(e, t, n, r),
        i.h.dispatch({ type: "DISPATCH_APPLICATION_UPDATE", applicationId: e.id, branchId: t, automatic: s });
}
function S(e, t, n) {
    let r = s.A.getApplication(e);
    null != r &&
        (_.A.removeShortcuts(r.name),
        c.default.track(h.HAw.LIBRARY_UNINSTALL_INITIATED, {
            application_id: r.id,
            application_name: r.name,
            sku_id: r.primarySkuId,
            location: n,
        })),
        f.A.uninstall(e, t),
        i.h.dispatch({ type: "DISPATCH_APPLICATION_UNINSTALL", applicationId: e, branchId: t });
}
function y() {
    f.A.resume();
}
function N() {
    f.A.pause();
}
function v(e, t) {
    i.h.dispatch({ type: "DISPATCH_APPLICATION_MOVE_UP", applicationId: e, branchId: t });
}
function C(e, t) {
    f.A.cancel(e, t), i.h.dispatch({ type: "DISPATCH_APPLICATION_CANCEL", applicationId: e, branchId: t });
}
function O(e, t) {
    i.h.dispatch({ type: "DISPATCH_APPLICATION_REMOVE_FINISHED", applicationId: e, branchId: t });
}
function R(e, t) {
    let n = s.A.getApplication(e);
    null != n && _.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), n.name, n.id, t.installPath);
}
function b(e, t) {
    let i = s.A.getApplication(e);
    r.Bo.post({ url: h.Rsh.LIBRARY_APPLICATION_INSTALLED(e, e), oldFormErrors: !0, rejectWithError: !0 }),
        null != i &&
            (_.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), i.name, i.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 264686))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        i.getIconURL(64),
                        E.intl.string(E.t["1wR7yI"]),
                        E.intl.formatToPlainString(E.t["89VAgW"], { name: i.name }),
                        { notif_type: "Game Library Game Installed" },
                        { onClick: () => (0, o.pX)(h.BVt.APPLICATION_LIBRARY), omitViewTracking: !0, isUserAvatar: !1 },
                    );
                }));
}
