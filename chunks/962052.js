"use strict";
let r, i;
n.d(t, { A: () => A });
var s = n(73153),
    a = n(274593),
    o = n(626584),
    l = n(287809),
    u = n(422033),
    d = n(954571),
    c = n(723702),
    _ = n(837921),
    f = n(652215),
    E = n(613057);
let h = new o.A("NativeDispatchUtils");
function p() {
    return null == i && h.warn("Tried getting Dispatch instance before instantiated"), i;
}
function m(e) {
    let t = JSON.parse(e);
    return h.log("Native Dispatch error", t), new a.A(t);
}
function g(e, t) {
    "" !== e && m(e);
}
let A = {
    init(e) {
        let { userToken: t, userId: n, installPaths: s, platform: a, stateCallback: o, errorCallback: u } = e;
        null == i &&
            (null != r
                ? Promise.resolve(r)
                : (0, c.isDesktop)()
                  ? Promise.all([_.Ay.ensureModule("discord_dispatch"), _.Ay.ensureModule("discord_modules")]).then(
                        () => {
                            _.Ay.requireModule("discord_modules");
                            let e = _.Ay.getDispatch();
                            return null != e ? ((r = e), e) : Promise.reject(Error("dispatch not found"));
                        },
                    )
                  : Promise.reject(Error("not desktop client"))
            ).then((e) => {
                let r = { environment: window.GLOBAL_ENV.RELEASE_CHANNEL, build_number: "533526" },
                    c = l.default.getCurrentUser();
                null != c && ((r.user_id = c.id), (r.user_name = c.tag), null != c.email && (r.email = c.email));
                let _ = {
                    user_token: t,
                    user_id: n,
                    install_paths: s.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: `https:${window.GLOBAL_ENV.API_ENDPOINT}`,
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: r,
                    platform: a,
                };
                i = new e.Dispatch(
                    JSON.stringify(_),
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
                        u(m(e));
                    },
                    (e) => {
                        !(function (e) {
                            let { properties: t } = e;
                            switch (
                                (null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)
                            ) {
                                case f.HAw.DISPATCH_PATCH_STARTED:
                                case f.HAw.DISPATCH_PATCH_PAUSED:
                                case f.HAw.DISPATCH_PATCH_FAILED:
                                case f.HAw.DISPATCH_PATCH_VERIFICATION_FAILED:
                                case f.HAw.DISPATCH_PATCH_COMPLETE:
                                case f.HAw.DISPATCH_PATCH_CANCELLED:
                                case f.HAw.DISPATCH_APPLICATION_UNINSTALLED:
                                    d.default.track(e.event_name, t);
                            }
                        })(JSON.parse(e));
                    },
                );
            });
    },
    destroy() {
        let e = p();
        null != e && void 0 !== e.destroy && (e.destroy(), (i = null));
    },
    setTargetManifest(e) {
        let {
                applicationId: t,
                applicationName: n,
                applicationIcon: r,
                branchId: i,
                buildId: s,
                manifestIds: a,
                installationPath: o,
            } = e,
            l = p();
        null != l &&
            l.command(
                JSON.stringify({
                    command: "SetTargetManifest",
                    application_id: t,
                    application_name: n,
                    application_icon: r,
                    branch_id: i,
                    build_id: s,
                    manifest_ids: a,
                    install_path: o,
                }),
                g,
            );
    },
    setCurrentTask(e, t, n, r, i) {
        let s = p();
        return (
            null != s &&
            (s.command(
                JSON.stringify({
                    command: "SetCurrentTask",
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: r,
                    user_token: i,
                }),
                g,
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = p();
        null != n && n.command(JSON.stringify({ command: "SetCredentials", user_id: e, user_token: t }), g);
    },
    cancel(e, t) {
        let n = p();
        null != n && n.command(JSON.stringify({ command: "Cancel", application_id: e, branch_id: t }), g);
    },
    uninstall(e, t) {
        let n = p();
        null != n && n.command(JSON.stringify({ command: "Uninstall", application_id: e, branch_id: t }), g);
    },
    pause() {
        let e = p();
        null != e && e.command(JSON.stringify({ command: "Pause" }), g);
    },
    resume() {
        let e = p();
        null != e && e.command(JSON.stringify({ command: "Resume" }), g);
    },
    queryDirectory(e, t) {
        let n = p();
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
        u.A.isRunning()
            ? Promise.reject(Error("Already running launch setup."))
            : (s.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START" }),
              new Promise((n, r) => {
                  let i = p();
                  null == i
                      ? r(Error("native dispatch instance not found"))
                      : i.command(
                            JSON.stringify({ command: "RunLaunchSetup", application_id: e, branch_id: t }),
                            (e, t, i) => {
                                if ("" !== e) {
                                    s.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" });
                                    let t = m(e);
                                    s.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: t }),
                                        null != t.code && t.code === E.Hi.POST_INSTALL_CANCELLED ? r(t) : n();
                                    return;
                                }
                                if ("" !== t) {
                                    s.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" }), n();
                                    return;
                                }
                                if ("" !== i) {
                                    let e = JSON.parse(i);
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
    launch: (e, t, n, r) =>
        new Promise((i, s) => {
            let a = p();
            null == a
                ? s(Error("native dispatch instance not found"))
                : a.command(
                      JSON.stringify({
                          command: "Launch",
                          application_id: e,
                          branch_id: t,
                          option_name: n,
                          environment: r,
                      }),
                      function (e, t) {
                          "" !== e ? s(m(e)) : i([JSON.parse(t).pid]);
                      },
                  );
        }),
};
