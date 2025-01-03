let i, a;
var s = r(47120);
var o = r(411104);
var l = r(570140),
    u = r(330516),
    c = r(710845),
    d = r(594174),
    f = r(436181),
    _ = r(626135),
    h = r(358085),
    p = r(998502),
    m = r(981631),
    g = r(186901);
let E = new c.Z('NativeDispatchUtils');
function v() {
    return null != i
        ? Promise.resolve(i)
        : (0, h.isDesktop)()
          ? Promise.all([p.ZP.ensureModule('discord_dispatch'), p.ZP.ensureModule('discord_modules')]).then(() => {
                p.ZP.requireModule('discord_modules');
                let e = p.ZP.getDispatch();
                return null != e ? ((i = e), e) : Promise.reject(Error('dispatch not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function I() {
    return null == a && E.warn('Tried getting Dispatch instance before instantiated'), a;
}
function T(e) {
    let n = JSON.parse(e);
    return E.log('Native Dispatch error', n), new u.Z(n);
}
function b(e, n) {
    '' !== e && T(e);
}
function y(e) {
    let { properties: n } = e;
    switch ((null != n.stage && null != n.stage.type && (n.stage = n.stage.type), e.event_name)) {
        case m.rMx.DISPATCH_PATCH_STARTED:
        case m.rMx.DISPATCH_PATCH_PAUSED:
        case m.rMx.DISPATCH_PATCH_FAILED:
        case m.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
        case m.rMx.DISPATCH_PATCH_COMPLETE:
        case m.rMx.DISPATCH_PATCH_CANCELLED:
        case m.rMx.DISPATCH_APPLICATION_UNINSTALLED:
            _.default.track(e.event_name, n);
    }
}
n.Z = {
    init(e) {
        let { userToken: n, userId: r, installPaths: i, platform: s, stateCallback: o, errorCallback: l } = e;
        if (null == a)
            v().then((e) => {
                var u;
                let c = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '356457'
                    },
                    f = d.default.getCurrentUser();
                null != f && ((c.user_id = f.id), (c.user_name = f.tag), null != f.email && (c.email = f.email));
                let _ = {
                    user_token: n,
                    user_id: r,
                    install_paths: i.map((e) => {
                        let { path: n } = e;
                        return n;
                    }),
                    api_endpoint: ''.concat(((u = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: c,
                    platform: s
                };
                a = new e.Dispatch(
                    JSON.stringify(_),
                    (e) => {
                        let n = JSON.parse(e);
                        o({
                            applications: n.applications,
                            paused: n.paused,
                            currentTask:
                                null != n.current_task
                                    ? {
                                          applicationId: n.current_task.application_id,
                                          branchId: n.current_task.branch_id
                                      }
                                    : null,
                            nextTask:
                                null != n.next_task
                                    ? {
                                          applicationId: n.next_task.application_id,
                                          branchId: n.next_task.branch_id
                                      }
                                    : null
                        });
                    },
                    (e) => {
                        l(T(e));
                    },
                    (e) => {
                        y(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = I();
        null != e && void 0 !== e.destroy && (e.destroy(), (a = null));
    },
    setTargetManifest(e) {
        let { applicationId: n, applicationName: r, applicationIcon: i, branchId: a, buildId: s, manifestIds: o, installationPath: l } = e,
            u = I();
        if (null != u)
            u.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: n,
                    application_name: r,
                    application_icon: i,
                    branch_id: a,
                    build_id: s,
                    manifest_ids: o,
                    install_path: l
                }),
                b
            );
    },
    setCurrentTask(e, n, r, i, a) {
        let s = I();
        return (
            null != s &&
            (s.command(
                JSON.stringify({
                    command: 'SetCurrentTask',
                    application_id: e,
                    branch_id: n,
                    action: r,
                    user_id: i,
                    user_token: a
                }),
                b
            ),
            !0)
        );
    },
    setCredentials(e, n) {
        let r = I();
        null != r &&
            r.command(
                JSON.stringify({
                    command: 'SetCredentials',
                    user_id: e,
                    user_token: n
                }),
                b
            );
    },
    cancel(e, n) {
        let r = I();
        if (null != r)
            r.command(
                JSON.stringify({
                    command: 'Cancel',
                    application_id: e,
                    branch_id: n
                }),
                b
            );
    },
    uninstall(e, n) {
        let r = I();
        if (null != r)
            r.command(
                JSON.stringify({
                    command: 'Uninstall',
                    application_id: e,
                    branch_id: n
                }),
                b
            );
    },
    pause() {
        let e = I();
        if (null != e) e.command(JSON.stringify({ command: 'Pause' }), b);
    },
    resume() {
        let e = I();
        if (null != e) e.command(JSON.stringify({ command: 'Resume' }), b);
    },
    queryDirectory(e, n) {
        let r = I();
        if (null != r)
            r.command(
                JSON.stringify({
                    command: 'QueryDirectory',
                    path: e
                }),
                (e, r) => {
                    if ('' !== e) n(JSON.parse(e));
                    else if (null != r) {
                        let e = JSON.parse(r);
                        n(null, {
                            hasPermission: e.has_permission,
                            availableKB: parseInt(e.available_kb),
                            totalKB: parseInt(e.total_kb)
                        });
                    }
                }
            );
    },
    runLaunchSetup: (e, n) =>
        f.Z.isRunning()
            ? Promise.reject(Error('Already running launch setup.'))
            : (l.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_START' }),
              new Promise((r, i) => {
                  let a = I();
                  if (null == a) {
                      i(Error('native dispatch instance not found'));
                      return;
                  }
                  a.command(
                      JSON.stringify({
                          command: 'RunLaunchSetup',
                          application_id: e,
                          branch_id: n
                      }),
                      (e, n, a) => {
                          if ('' !== e) {
                              l.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' });
                              let n = T(e);
                              l.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_ERROR',
                                  error: n
                              }),
                                  null != n.code && n.code === g.ff.POST_INSTALL_CANCELLED ? i(n) : r();
                              return;
                          }
                          if ('' !== n) {
                              l.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' }), r();
                              return;
                          }
                          if ('' !== a) {
                              let e = JSON.parse(a);
                              l.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE',
                                  progress: e.progress,
                                  total: e.total,
                                  name: e.name
                              });
                          }
                      }
                  );
              })),
    launch: (e, n, r, i) =>
        new Promise((a, s) => {
            let o = I();
            if (null == o) {
                s(Error('native dispatch instance not found'));
                return;
            }
            function l(e, n) {
                '' !== e ? s(T(e)) : a([JSON.parse(n).pid]);
            }
            o.command(
                JSON.stringify({
                    command: 'Launch',
                    application_id: e,
                    branch_id: n,
                    option_name: r,
                    environment: i
                }),
                l
            );
        })
};
