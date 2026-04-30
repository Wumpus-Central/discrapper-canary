"use strict";
n.d(t, {
    BK: () => b,
    BO: () => C,
    K3: () => T,
    NQ: () => S,
    Ts: () => m,
    U: () => N,
    Vt: () => O,
    ZT: () => v,
    jU: () => R,
    oc: () => A,
    qv: () => I,
    v7: () => y,
    zr: () => g,
});
var i = n(636537),
    r = n(228366),
    s = n(587895),
    a = n(328153),
    o = n(976860),
    l = n(885386),
    u = n(775228),
    c = n(174459),
    d = n(645243),
    _ = n(738533),
    f = n(962052),
    h = n(356645),
    p = n(652215),
    E = n(375708);
function m(e, t) {
    f.A.init({
        userToken: e,
        userId: t,
        installPaths: u.A.installationPaths,
        platform: (0, d.O)(),
        stateCallback: (e) => {
            r.h.dispatch({ type: "DISPATCH_APPLICATION_STATE_UPDATE", state: e });
        },
        errorCallback: (e) => {
            r.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: e });
        },
    });
}
function g() {
    f.A.destroy();
}
function A(e) {
    let { application: t, branchId: n, buildId: i, manifestIds: s, installationPath: a, analyticsLocation: o } = e;
    f.A.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: i,
        manifestIds: s,
        installationPath: a,
    }),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_INSTALL", applicationId: t.id, branchId: n, installationPath: a }),
        c.default.track(p.HAw.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o,
        });
}
function I(e, t, n) {
    (0, h.n)(e.id, t).then(() => {
        r.h.dispatch({ type: "DISPATCH_APPLICATION_REPAIR", applicationId: e.id, branchId: t });
    }),
        c.default.track(p.HAw.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n,
        });
}
function T(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !(function (e, t, n, i) {
        if (a.Ay.getRunningDiscordApplicationIds().includes(e.id)) return;
        let r = u.A.getInstallationPath(e.id, t);
        if (null == r) throw Error(`Missing installation path for application: ${e.id} ${t}`);
        f.A.setTargetManifest({
            applicationId: e.id,
            applicationName: e.name,
            applicationIcon: e.icon,
            branchId: t,
            buildId: n,
            manifestIds: i,
            installationPath: r,
        });
    })(e, t, n, i),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_UPDATE", applicationId: e.id, branchId: t, automatic: s });
}
function S(e, t, n) {
    let i = s.A.getApplication(e);
    null != i &&
        (_.A.removeShortcuts(i.name),
        c.default.track(p.HAw.LIBRARY_UNINSTALL_INITIATED, {
            application_id: i.id,
            application_name: i.name,
            sku_id: i.primarySkuId,
            location: n,
        })),
        f.A.uninstall(e, t),
        r.h.dispatch({ type: "DISPATCH_APPLICATION_UNINSTALL", applicationId: e, branchId: t });
}
function N() {
    f.A.resume();
}
function y() {
    f.A.pause();
}
function C(e, t) {
    r.h.dispatch({ type: "DISPATCH_APPLICATION_MOVE_UP", applicationId: e, branchId: t });
}
function v(e, t) {
    f.A.cancel(e, t), r.h.dispatch({ type: "DISPATCH_APPLICATION_CANCEL", applicationId: e, branchId: t });
}
function O(e, t) {
    r.h.dispatch({ type: "DISPATCH_APPLICATION_REMOVE_FINISHED", applicationId: e, branchId: t });
}
function R(e, t) {
    let n = s.A.getApplication(e);
    null != n && _.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), n.name, n.id, t.installPath);
}
function b(e, t) {
    let r = s.A.getApplication(e);
    i.Bo.post({ url: p.Rsh.LIBRARY_APPLICATION_INSTALLED(e, e), oldFormErrors: !0, rejectWithError: !0 }),
        null != r &&
            (_.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), r.name, r.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 264686))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        r.getIconURL(64),
                        E.intl.string(E.t["1wR7yI"]),
                        E.intl.formatToPlainString(E.t["89VAgW"], { name: r.name }),
                        { notif_type: "Game Library Game Installed" },
                        { onClick: () => (0, o.pX)(p.BVt.APPLICATION_LIBRARY), omitViewTracking: !0, isUserAvatar: !1 },
                    );
                }));
}
