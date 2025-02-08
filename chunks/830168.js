let i, r;
n.d(t, { Z: () => I }), n(47120), n(411104);
var a = n(570140),
    s = n(330516),
    o = n(710845),
    l = n(594174),
    u = n(436181),
    c = n(626135),
    d = n(358085),
    f = n(998502),
    _ = n(981631),
    p = n(186901);
let h = new o.Z('NativeDispatchUtils');
function m() {
    return null != i
        ? Promise.resolve(i)
        : (0, d.isDesktop)()
          ? Promise.all([f.ZP.ensureModule('discord_dispatch'), f.ZP.ensureModule('discord_modules')]).then(() => {
                f.ZP.requireModule('discord_modules');
                let e = f.ZP.getDispatch();
                return null != e ? ((i = e), e) : Promise.reject(Error('dispatch not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function g() {
    return null == r && h.warn('Tried getting Dispatch instance before instantiated'), r;
}
function E(e) {
    let t = JSON.parse(e);
    return h.log('Native Dispatch error', t), new s.Z(t);
}
function v(e, t) {
    '' !== e && E(e);
}
function y(e) {
    let { properties: t } = e;
    switch ((null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)) {
        case _.rMx.DISPATCH_PATCH_STARTED:
        case _.rMx.DISPATCH_PATCH_PAUSED:
        case _.rMx.DISPATCH_PATCH_FAILED:
        case _.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
        case _.rMx.DISPATCH_PATCH_COMPLETE:
        case _.rMx.DISPATCH_PATCH_CANCELLED:
        case _.rMx.DISPATCH_APPLICATION_UNINSTALLED:
            c.default.track(e.event_name, t);
    }
}
let I = {
    init(e) {
        let { userToken: t, userId: n, installPaths: i, platform: a, stateCallback: s, errorCallback: o } = e;
        null == r &&
            m().then((e) => {
                var u;
                let c = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '366967'
                    },
                    d = l.default.getCurrentUser();
                null != d && ((c.user_id = d.id), (c.user_name = d.tag), null != d.email && (c.email = d.email));
                let f = {
                    user_token: t,
                    user_id: n,
                    install_paths: i.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: ''.concat(((u = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: c,
                    platform: a
                };
                r = new e.Dispatch(
                    JSON.stringify(f),
                    (e) => {
                        let t = JSON.parse(e);
                        s({
                            applications: t.applications,
                            paused: t.paused,
                            currentTask:
                                null != t.current_task
                                    ? {
                                          applicationId: t.current_task.application_id,
                                          branchId: t.current_task.branch_id
                                      }
                                    : null,
                            nextTask:
                                null != t.next_task
                                    ? {
                                          applicationId: t.next_task.application_id,
                                          branchId: t.next_task.branch_id
                                      }
                                    : null
                        });
                    },
                    (e) => {
                        o(E(e));
                    },
                    (e) => {
                        y(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = g();
        null != e && void 0 !== e.destroy && (e.destroy(), (r = null));
    },
    setTargetManifest(e) {
        let { applicationId: t, applicationName: n, applicationIcon: i, branchId: r, buildId: a, manifestIds: s, installationPath: o } = e,
            l = g();
        null != l &&
            l.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: t,
                    application_name: n,
                    application_icon: i,
                    branch_id: r,
                    build_id: a,
                    manifest_ids: s,
                    install_path: o
                }),
                v
            );
    },
    setCurrentTask(e, t, n, i, r) {
        let a = g();
        return (
            null != a &&
            (a.command(
                JSON.stringify({
                    command: 'SetCurrentTask',
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: i,
                    user_token: r
                }),
                v
            ),
            !0)
        );
    },
    setCredentials(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'SetCredentials',
                    user_id: e,
                    user_token: t
                }),
                v
            );
    },
    cancel(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'Cancel',
                    application_id: e,
                    branch_id: t
                }),
                v
            );
    },
    uninstall(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'Uninstall',
                    application_id: e,
                    branch_id: t
                }),
                v
            );
    },
    pause() {
        let e = g();
        null != e && e.command(JSON.stringify({ command: 'Pause' }), v);
    },
    resume() {
        let e = g();
        null != e && e.command(JSON.stringify({ command: 'Resume' }), v);
    },
    queryDirectory(e, t) {
        let n = g();
        null != n &&
            n.command(
                JSON.stringify({
                    command: 'QueryDirectory',
                    path: e
                }),
                (e, n) => {
                    if ('' !== e) t(JSON.parse(e));
                    else if (null != n) {
                        let e = JSON.parse(n);
                        t(null, {
                            hasPermission: e.has_permission,
                            availableKB: parseInt(e.available_kb),
                            totalKB: parseInt(e.total_kb)
                        });
                    }
                }
            );
    },
    runLaunchSetup: (e, t) =>
        u.Z.isRunning()
            ? Promise.reject(Error('Already running launch setup.'))
            : (a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_START' }),
              new Promise((n, i) => {
                  let r = g();
                  if (null == r) {
                      i(Error('native dispatch instance not found'));
                      return;
                  }
                  r.command(
                      JSON.stringify({
                          command: 'RunLaunchSetup',
                          application_id: e,
                          branch_id: t
                      }),
                      (e, t, r) => {
                          if ('' !== e) {
                              a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' });
                              let t = E(e);
                              a.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_ERROR',
                                  error: t
                              }),
                                  null != t.code && t.code === p.ff.POST_INSTALL_CANCELLED ? i(t) : n();
                              return;
                          }
                          if ('' !== t) {
                              a.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' }), n();
                              return;
                          }
                          if ('' !== r) {
                              let e = JSON.parse(r);
                              a.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE',
                                  progress: e.progress,
                                  total: e.total,
                                  name: e.name
                              });
                          }
                      }
                  );
              })),
    launch: (e, t, n, i) =>
        new Promise((r, a) => {
            let s = g();
            if (null == s) {
                a(Error('native dispatch instance not found'));
                return;
            }
            function o(e, t) {
                '' !== e ? a(E(e)) : r([JSON.parse(t).pid]);
            }
            s.command(
                JSON.stringify({
                    command: 'Launch',
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: i
                }),
                o
            );
        })
};
