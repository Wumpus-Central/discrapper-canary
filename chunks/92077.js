n.d(t, {
    BK: () => P,
    BO: () => C,
    K3: () => v,
    NQ: () => S,
    Ts: () => E,
    U: () => I,
    Vt: () => R,
    ZT: () => N,
    jU: () => w,
    oc: () => y,
    qv: () => O,
    v7: () => T,
    zr: () => b,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(587895),
    s = n(15285),
    o = n(976860),
    l = n(253932),
    c = n(775228),
    u = n(954571),
    d = n(645243),
    f = n(25171),
    p = n(962052),
    _ = n(356645),
    h = n(652215),
    m = n(985018);
let g = 64;

function E(e, t) {
    p.A.init({
        userToken: e,
        userId: t,
        installPaths: c.A.installationPaths,
        platform: (0, d.O)(),
        stateCallback: (e) => {
            i.h.dispatch({
                type: "DISPATCH_APPLICATION_STATE_UPDATE",
                state: e,
            });
        },
        errorCallback: (e) => {
            i.h.dispatch({
                type: "DISPATCH_APPLICATION_ERROR",
                error: e,
            });
        },
    });
}

function b() {
    p.A.destroy();
}

function y(e) {
    let { application: t, branchId: n, buildId: r, manifestIds: a, installationPath: s, analyticsLocation: o } = e;
    p.A.setTargetManifest({
        applicationId: t.id,
        applicationName: t.name,
        applicationIcon: t.icon,
        branchId: n,
        buildId: r,
        manifestIds: a,
        installationPath: s,
    }),
        i.h.dispatch({
            type: "DISPATCH_APPLICATION_INSTALL",
            applicationId: t.id,
            branchId: n,
            installationPath: s,
        }),
        u.default.track(h.HAw.LIBRARY_INSTALL_INITIATED, {
            application_id: t.id,
            application_name: t.name,
            sku_id: t.primarySkuId,
            location: o,
        });
}

function O(e, t, n) {
    (0, _.n)(e.id, t).then(() => {
        i.h.dispatch({
            type: "DISPATCH_APPLICATION_REPAIR",
            applicationId: e.id,
            branchId: t,
        });
    }),
        u.default.track(h.HAw.LIBRARY_REPAIR_INITIATED, {
            application_id: e.id,
            application_name: e.name,
            sku_id: e.primarySkuId,
            location: n,
        });
}

function A(e, t, n, r) {
    if (s.Ay.getRunningDiscordApplicationIds().includes(e.id)) return;
    let i = c.A.getInstallationPath(e.id, t);
    if (null == i) throw Error("Missing installation path for application: ".concat(e.id, " ").concat(t));
    p.A.setTargetManifest({
        applicationId: e.id,
        applicationName: e.name,
        applicationIcon: e.icon,
        branchId: t,
        buildId: n,
        manifestIds: r,
        installationPath: i,
    });
}

function v(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    A(e, t, n, r),
        i.h.dispatch({
            type: "DISPATCH_APPLICATION_UPDATE",
            applicationId: e.id,
            branchId: t,
            automatic: a,
        });
}

function S(e, t, n) {
    let r = a.A.getApplication(e);
    null != r &&
        (f.A.removeShortcuts(r.name),
        u.default.track(h.HAw.LIBRARY_UNINSTALL_INITIATED, {
            application_id: r.id,
            application_name: r.name,
            sku_id: r.primarySkuId,
            location: n,
        })),
        p.A.uninstall(e, t),
        i.h.dispatch({
            type: "DISPATCH_APPLICATION_UNINSTALL",
            applicationId: e,
            branchId: t,
        });
}

function I() {
    p.A.resume();
}

function T() {
    p.A.pause();
}

function C(e, t) {
    i.h.dispatch({
        type: "DISPATCH_APPLICATION_MOVE_UP",
        applicationId: e,
        branchId: t,
    });
}

function N(e, t) {
    p.A.cancel(e, t),
        i.h.dispatch({
            type: "DISPATCH_APPLICATION_CANCEL",
            applicationId: e,
            branchId: t,
        });
}

function R(e, t) {
    i.h.dispatch({
        type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
        applicationId: e,
        branchId: t,
    });
}

function w(e, t) {
    let n = a.A.getApplication(e);
    null != n && f.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), n.name, n.id, t.installPath);
}

function P(e, t) {
    let i = a.A.getApplication(e);
    r.Bo.post({
        url: h.Rsh.LIBRARY_APPLICATION_INSTALLED(e, e),
        oldFormErrors: !0,
        rejectWithError: !0,
    }),
        null != i &&
            (f.A.createShortcuts(l.uB.getSetting(), l.Pf.getSetting(), i.name, i.id, t.installPath),
            Promise.resolve()
                .then(n.bind(n, 264686))
                .then((e) => {
                    let { default: t } = e;
                    t.showNotification(
                        i.getIconURL(g),
                        m.intl.string(m.t["1wR7yI"]),
                        m.intl.formatToPlainString(m.t["89VAgW"], {
                            name: i.name,
                        }),
                        {
                            notif_type: "Game Library Game Installed",
                        },
                        {
                            onClick: () => (0, o.pX)(h.BVt.APPLICATION_LIBRARY),
                            omitViewTracking: !0,
                            isUserAvatar: !1,
                        },
                    );
                }));
}
