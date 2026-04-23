"use strict";
let i, r;
n.d(t, { A: () => A });
var s = n(228366),
    a = n(274593),
    o = n(626584),
    l = n(287809),
    d = n(422033),
    _ = n(954571),
    u = n(723702),
    c = n(19575),
    E = n(652215),
    h = n(613057);
let m = new o.A("NativeDispatchUtils");
function f() {
    return null == r && m.warn("Tried getting Dispatch instance before instantiated"), r;
}
function g(e) {
    let t = JSON.parse(e);
    return m.log("Native Dispatch error", t), new a.A(t);
}
function p(e, t) {
    "" !== e && g(e);
}
let A = {
    init(e) {
        let { userToken: t, userId: n, installPaths: s, platform: a, stateCallback: o, errorCallback: d } = e;
        null == r &&
            (null != i
                ? Promise.resolve(i)
                : (0, u.isDesktop)()
                  ? Promise.all([c.Ay.ensureModule("discord_dispatch"), c.Ay.ensureModule("discord_modules")]).then(
                        () => {
                            c.Ay.requireModule("discord_modules");
                            let e = c.Ay.getDispatch();
                            return null != e ? ((i = e), e) : Promise.reject(Error("dispatch not found"));
                        },
                    )
                  : Promise.reject(Error("not desktop client"))
            ).then((e) => {
                let i = { environment: window.GLOBAL_ENV.RELEASE_CHANNEL, build_number: "534155" },
                    u = l.default.getCurrentUser();
                null != u && ((i.user_id = u.id), (i.user_name = u.tag), null != u.email && (i.email = u.email));
                let c = {
                    user_token: t,
                    user_id: n,
                    install_paths: s.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: `https:${window.GLOBAL_ENV.API_ENDPOINT}`,
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: i,
                    platform: a,
                };
                r = new e.Dispatch(
                    JSON.stringify(c),
                    (e) => {
                        let t = JSON.parse(e);
                        o({
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
                                    ? { applicationId: t.next_task.application_id, branchId: t.next_task.branch_id }
                                    : null,
                        });
                    },
                    (e) => {
                        d(g(e));
                    },
                    (e) => {
                        !(function (e) {
                            let { properties: t } = e;
                            switch (
                                (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)
                            ) {
                                case E.HAw.DISPATCH_PATCH_STARTED:
                                case E.HAw.DISPATCH_PATCH_PAUSED:
                                case E.HAw.DISPATCH_PATCH_FAILED:
                                case E.HAw.DISPATCH_PATCH_VERIFICATION_FAILED:
                                case E.HAw.DISPATCH_PATCH_COMPLETE:
                                case E.HAw.DISPATCH_PATCH_CANCELLED:
                                case E.HAw.DISPATCH_APPLICATION_UNINSTALLED:
                                    _.default.track(e.event_name, t);
                            }
                        })(JSON.parse(e));
                    },
                );
            });
    },
    destroy() {
        let e = f();
        null != e && void 0 !== e.destroy && (e.destroy(), (r = null));
    },
    setTargetManifest(e) {
        let {
                applicationId: t,
                applicationName: n,
                applicationIcon: i,
                branchId: r,
                buildId: s,
                manifestIds: a,
                installationPath: o,
            } = e,
            l = f();
        null != l &&
            l.command(
                JSON.stringify({
                    command: "SetTargetManifest",
                    application_id: t,
                    application_name: n,
                    application_icon: i,
                    branch_id: r,
                    build_id: s,
                    manifest_ids: a,
                    install_path: o,
                }),
                p,
            );
    },
    setCurrentTask(e, t, n, i, r) {
        let s = f();
        return (
            null != s &&
            (s.command(
                JSON.stringify({
                    command: "SetCurrentTask",
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: i,
                    user_token: r,
                }),
                p,
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = f();
        null != n && n.command(JSON.stringify({ command: "SetCredentials", user_id: e, user_token: t }), p);
    },
    cancel(e, t) {
        let n = f();
        null != n && n.command(JSON.stringify({ command: "Cancel", application_id: e, branch_id: t }), p);
    },
    uninstall(e, t) {
        let n = f();
        null != n && n.command(JSON.stringify({ command: "Uninstall", application_id: e, branch_id: t }), p);
    },
    pause() {
        let e = f();
        null != e && e.command(JSON.stringify({ command: "Pause" }), p);
    },
    resume() {
        let e = f();
        null != e && e.command(JSON.stringify({ command: "Resume" }), p);
    },
    queryDirectory(e, t) {
        let n = f();
        null != n &&
            n.command(JSON.stringify({ command: "QueryDirectory", path: e }), (e, n) => {
                if ("" !== e) t(JSON.parse(e));
                else if (null != n) {
                    let e = JSON.parse(n);
                    t(null, {
                        hasPermission: e.has_permission,
                        availableKB: parseInt(e.available_kb),
                        totalKB: parseInt(e.total_kb),
                    });
                }
            });
    },
    runLaunchSetup: (e, t) =>
        d.A.isRunning()
            ? Promise.reject(Error("Already running launch setup."))
            : (s.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START" }),
              new Promise((n, i) => {
                  let r = f();
                  null == r
                      ? i(Error("native dispatch instance not found"))
                      : r.command(
                            JSON.stringify({ command: "RunLaunchSetup", application_id: e, branch_id: t }),
                            (e, t, r) => {
                                if ("" !== e) {
                                    s.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" });
                                    let t = g(e);
                                    s.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: t }),
                                        null != t.code && t.code === h.Hi.POST_INSTALL_CANCELLED ? i(t) : n();
                                    return;
                                }
                                if ("" !== t) {
                                    s.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" }), n();
                                    return;
                                }
                                if ("" !== r) {
                                    let e = JSON.parse(r);
                                    s.h.dispatch({
                                        type: "DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE",
                                        progress: e.progress,
                                        total: e.total,
                                        name: e.name,
                                    });
                                }
                            },
                        );
              })),
    launch: (e, t, n, i) =>
        new Promise((r, s) => {
            let a = f();
            null == a
                ? s(Error("native dispatch instance not found"))
                : a.command(
                      JSON.stringify({
                          command: "Launch",
                          application_id: e,
                          branch_id: t,
                          option_name: n,
                          environment: i,
                      }),
                      function (e, t) {
                          "" !== e ? s(g(e)) : r([JSON.parse(t).pid]);
                      },
                  );
        }),
};
