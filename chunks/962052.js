let r, i;
n.d(t, { A: () => O }), n(896048), n(65821), n(457529);
var a = n(73153),
    s = n(274593),
    o = n(626584),
    l = n(287809),
    c = n(422033),
    u = n(954571),
    d = n(723702),
    f = n(837921),
    p = n(652215),
    _ = n(613057);
let h = new o.A("NativeDispatchUtils");
function m() {
    return null != r
        ? Promise.resolve(r)
        : (0, d.isDesktop)()
          ? Promise.all([f.Ay.ensureModule("discord_dispatch"), f.Ay.ensureModule("discord_modules")]).then(() => {
                f.Ay.requireModule("discord_modules");
                let e = f.Ay.getDispatch();
                return null != e ? ((r = e), e) : Promise.reject(Error("dispatch not found"));
            })
          : Promise.reject(Error("not desktop client"));
}
function g() {
    return null == i && h.warn("Tried getting Dispatch instance before instantiated"), i;
}
function E(e) {
    let t = JSON.parse(e);
    return h.log("Native Dispatch error", t), new s.A(t);
}
function b(e, t) {
    "" !== e && E(e);
}
function y(e) {
    let { properties: t } = e;
    switch ((null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)) {
        case p.HAw.DISPATCH_PATCH_STARTED:
        case p.HAw.DISPATCH_PATCH_PAUSED:
        case p.HAw.DISPATCH_PATCH_FAILED:
        case p.HAw.DISPATCH_PATCH_VERIFICATION_FAILED:
        case p.HAw.DISPATCH_PATCH_COMPLETE:
        case p.HAw.DISPATCH_PATCH_CANCELLED:
        case p.HAw.DISPATCH_APPLICATION_UNINSTALLED:
            u.default.track(e.event_name, t);
    }
}
let O = {
    init(e) {
        let { userToken: t, userId: n, installPaths: r, platform: a, stateCallback: s, errorCallback: o } = e;
        null == i &&
            m().then((e) => {
                let c = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: "488133",
                    },
                    u = l.default.getCurrentUser();
                null != u && ((c.user_id = u.id), (c.user_name = u.tag), null != u.email && (c.email = u.email));
                let d = {
                    user_token: t,
                    user_id: n,
                    install_paths: r.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: "".concat("https:").concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: c,
                    platform: a,
                };
                i = new e.Dispatch(
                    JSON.stringify(d),
                    (e) => {
                        let t = JSON.parse(e);
                        s({
                            applications: t.applications,
                            paused: t.paused,
                            currentTask:
                                null != t.current_task
                                    ? {
                                          applicationId: t.current_task.application_id,
                                          branchId: t.current_task.branch_id,
                                      }
                                    : null,
                            nextTask:
                                null != t.next_task
                                    ? {
                                          applicationId: t.next_task.application_id,
                                          branchId: t.next_task.branch_id,
                                      }
                                    : null,
                        });
                    },
                    (e) => {
                        o(E(e));
                    },
                    (e) => {
                        y(JSON.parse(e));
                    },
                );
            });
    },
    destroy() {
        let e = g();
        null != e && void 0 !== e.destroy && (e.destroy(), (i = null));
    },
    setTargetManifest(e) {
        let {
                applicationId: t,
                applicationName: n,
                applicationIcon: r,
                branchId: i,
                buildId: a,
                manifestIds: s,
                installationPath: o,
            } = e,
            l = g();
        null != l &&
            l.command(
                JSON.stringify({
                    command: "SetTargetManifest",
                    application_id: t,
                    application_name: n,
                    application_icon: r,
                    branch_id: i,
                    build_id: a,
                    manifest_ids: s,
                    install_path: o,
                }),
                b,
            );
    },
    setCurrentTask(e, t, n, r, i) {
        let a = g();
        return (
            null != a &&
            (a.command(
                JSON.stringify({
                    command: "SetCurrentTask",
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: r,
                    user_token: i,
                }),
                b,
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: "SetCredentials",
                    user_id: e,
                    user_token: t,
                }),
                b,
            );
    },
    cancel(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: "Cancel",
                    application_id: e,
                    branch_id: t,
                }),
                b,
            );
    },
    uninstall(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: "Uninstall",
                    application_id: e,
                    branch_id: t,
                }),
                b,
            );
    },
    pause() {
        let e = g();
        null != e && e.command(JSON.stringify({ command: "Pause" }), b);
    },
    resume() {
        let e = g();
        null != e && e.command(JSON.stringify({ command: "Resume" }), b);
    },
    queryDirectory(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: "QueryDirectory",
                    path: e,
                }),
                (e, n) => {
                    if ("" !== e) t(JSON.parse(e));
                    else if (null != n) {
                        let e = JSON.parse(n);
                        t(null, {
                            hasPermission: e.has_permission,
                            availableKB: parseInt(e.available_kb),
                            totalKB: parseInt(e.total_kb),
                        });
                    }
                },
            );
    },
    runLaunchSetup: (e, t) =>
        c.A.isRunning()
            ? Promise.reject(Error("Already running launch setup."))
            : (a.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START" }),
              new Promise((n, r) => {
                  let i = g();
                  null == i
                      ? r(Error("native dispatch instance not found"))
                      : i.command(
                            JSON.stringify({
                                command: "RunLaunchSetup",
                                application_id: e,
                                branch_id: t,
                            }),
                            (e, t, i) => {
                                if ("" !== e) {
                                    a.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" });
                                    let t = E(e);
                                    a.h.dispatch({
                                        type: "DISPATCH_APPLICATION_ERROR",
                                        error: t,
                                    }),
                                        null != t.code && t.code === _.Hi.POST_INSTALL_CANCELLED ? r(t) : n();
                                    return;
                                }
                                if ("" !== t) {
                                    a.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" }), n();
                                    return;
                                }
                                if ("" !== i) {
                                    let e = JSON.parse(i);
                                    a.h.dispatch({
                                        type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
                                        progress: e.progress,
                                        total: e.total,
                                        name: e.name,
                                    });
                                }
                            },
                        );
              })),
    launch: (e, t, n, r) =>
        new Promise((i, a) => {
            let s = g();
            if (null == s) return void a(Error("native dispatch instance not found"));
            function o(e, t) {
                "" !== e ? a(E(e)) : i([JSON.parse(t).pid]);
            }
            s.command(
                JSON.stringify({
                    command: "Launch",
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: r,
                }),
                o,
            );
        }),
};
