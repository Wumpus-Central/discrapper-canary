let i, r;
n.d(t, { A: () => T });
var a = n(228366),
    s = n(274593),
    l = n(626584),
    o = n(287809),
    d = n(422033),
    c = n(174459),
    u = n(723702),
    _ = n(19575),
    E = n(652215),
    A = n(613057);
let h = new l.A("NativeDispatchUtils");
function I() {
    return null == r && h.warn("Tried getting Dispatch instance before instantiated"), r;
}
function f(e) {
    let t = JSON.parse(e);
    return h.log("Native Dispatch error", t), new s.A(t);
}
function p(e, t) {
    "" !== e && f(e);
}
let T = {
    init(e) {
        let { userToken: t, userId: n, installPaths: a, platform: s, stateCallback: l, errorCallback: d } = e;
        null == r &&
            (null != i
                ? Promise.resolve(i)
                : (0, u.isDesktop)()
                  ? Promise.all([_.Ay.ensureModule("discord_dispatch"), _.Ay.ensureModule("discord_modules")]).then(
                        () => {
                            _.Ay.requireModule("discord_modules");
                            let e = _.Ay.getDispatch();
                            return null != e ? ((i = e), e) : Promise.reject(Error("dispatch not found"));
                        },
                    )
                  : Promise.reject(Error("not desktop client"))
            ).then((e) => {
                let i = { environment: window.GLOBAL_ENV.RELEASE_CHANNEL, build_number: "607222" },
                    u = o.default.getCurrentUser();
                null != u && ((i.user_id = u.id), (i.user_name = u.tag), null != u.email && (i.email = u.email));
                let _ = {
                    user_token: t,
                    user_id: n,
                    install_paths: a.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: `https:${window.GLOBAL_ENV.API_ENDPOINT}`,
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: i,
                    platform: s,
                };
                r = new e.Dispatch(
                    JSON.stringify(_),
                    (e) => {
                        let t = JSON.parse(e);
                        l({
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
                        d(f(e));
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
                                    c.default.track(e.event_name, t);
                            }
                        })(JSON.parse(e));
                    },
                );
            });
    },
    destroy() {
        let e = I();
        null != e && void 0 !== e.destroy && (e.destroy(), (r = null));
    },
    setTargetManifest(e) {
        let {
                applicationId: t,
                applicationName: n,
                applicationIcon: i,
                branchId: r,
                buildId: a,
                manifestIds: s,
                installationPath: l,
            } = e,
            o = I();
        null != o &&
            o.command(
                JSON.stringify({
                    command: "SetTargetManifest",
                    application_id: t,
                    application_name: n,
                    application_icon: i,
                    branch_id: r,
                    build_id: a,
                    manifest_ids: s,
                    install_path: l,
                }),
                p,
            );
    },
    setCurrentTask(e, t, n, i, r) {
        let a = I();
        return (
            null != a &&
            (a.command(
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
        let n = I();
        null != n && n.command(JSON.stringify({ command: "SetCredentials", user_id: e, user_token: t }), p);
    },
    cancel(e, t) {
        let n = I();
        null != n && n.command(JSON.stringify({ command: "Cancel", application_id: e, branch_id: t }), p);
    },
    uninstall(e, t) {
        let n = I();
        null != n && n.command(JSON.stringify({ command: "Uninstall", application_id: e, branch_id: t }), p);
    },
    pause() {
        let e = I();
        null != e && e.command(JSON.stringify({ command: "Pause" }), p);
    },
    resume() {
        let e = I();
        null != e && e.command(JSON.stringify({ command: "Resume" }), p);
    },
    queryDirectory(e, t) {
        let n = I();
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
            : (a.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_START" }),
              new Promise((n, i) => {
                  let r = I();
                  null == r
                      ? i(Error("native dispatch instance not found"))
                      : r.command(
                            JSON.stringify({ command: "RunLaunchSetup", application_id: e, branch_id: t }),
                            (e, t, r) => {
                                if ("" !== e) {
                                    a.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" });
                                    let t = f(e);
                                    a.h.dispatch({ type: "DISPATCH_APPLICATION_ERROR", error: t }),
                                        null != t.code && t.code === A.Hi.POST_INSTALL_CANCELLED ? i(t) : n();
                                    return;
                                }
                                if ("" !== t) {
                                    a.h.dispatch({ type: "DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE" }), n();
                                    return;
                                }
                                if ("" !== r) {
                                    let e = JSON.parse(r);
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
    launch: (e, t, n, i) =>
        new Promise((r, a) => {
            let s = I();
            null == s
                ? a(Error("native dispatch instance not found"))
                : s.command(
                      JSON.stringify({
                          command: "Launch",
                          application_id: e,
                          branch_id: t,
                          option_name: n,
                          environment: i,
                      }),
                      function (e, t) {
                          "" !== e ? a(f(e)) : r([JSON.parse(t).pid]);
                      },
                  );
        }),
};
