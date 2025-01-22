let i, a;
var o = r(47120);
var s = r(411104);
var l = r(570140),
    u = r(330516),
    c = r(710845),
    d = r(594174),
    f = r(436181),
    p = r(626135),
    h = r(358085),
    _ = r(998502),
    m = r(981631),
    g = r(186901);
let E = new c.Z('NativeDispatchUtils');
function v() {
    return null != i
        ? Promise.resolve(i)
        : (0, h.isDesktop)()
          ? Promise.all([_.ZP.ensureModule('discord_dispatch'), _.ZP.ensureModule('discord_modules')]).then(() => {
                _.ZP.requireModule('discord_modules');
                let e = _.ZP.getDispatch();
                return null != e ? ((i = e), e) : Promise.reject(Error('dispatch not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function y() {
    return null == a && E.warn('Tried getting Dispatch instance before instantiated'), a;
}
function b(e) {
    let n = JSON.parse(e);
    return E.log('Native Dispatch error', n), new u.Z(n);
}
function I(e, n) {
    '' !== e && b(e);
}
function T(e) {
    let { properties: n } = e;
    switch ((null != n.stage && null != n.stage.type && (n.stage = n.stage.type), e.event_name)) {
        case m.rMx.DISPATCH_PATCH_STARTED:
        case m.rMx.DISPATCH_PATCH_PAUSED:
        case m.rMx.DISPATCH_PATCH_FAILED:
        case m.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
        case m.rMx.DISPATCH_PATCH_COMPLETE:
        case m.rMx.DISPATCH_PATCH_CANCELLED:
        case m.rMx.DISPATCH_APPLICATION_UNINSTALLED:
            p.default.track(e.event_name, n);
    }
}
n.Z = {
    init(e) {
        let { userToken: n, userId: r, installPaths: i, platform: o, stateCallback: s, errorCallback: l } = e;
        if (null == a)
            v().then((e) => {
                var u;
                let c = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '361542'
                    },
                    f = d.default.getCurrentUser();
                null != f && ((c.user_id = f.id), (c.user_name = f.tag), null != f.email && (c.email = f.email));
                let p = {
                    user_token: n,
                    user_id: r,
                    install_paths: i.map((e) => {
                        let { path: n } = e;
                        return n;
                    }),
                    api_endpoint: ''.concat(((u = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: c,
                    platform: o
                };
                a = new e.Dispatch(
                    JSON.stringify(p),
                    (e) => {
                        let n = JSON.parse(e);
                        s({
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
                        l(b(e));
                    },
                    (e) => {
                        T(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = y();
        null != e && void 0 !== e.destroy && (e.destroy(), (a = null));
    },
    setTargetManifest(e) {
        let { applicationId: n, applicationName: r, applicationIcon: i, branchId: a, buildId: o, manifestIds: s, installationPath: l } = e,
            u = y();
        if (null != u)
            u.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: n,
                    application_name: r,
                    application_icon: i,
                    branch_id: a,
                    build_id: o,
                    manifest_ids: s,
                    install_path: l
                }),
                I
            );
    },
    setCurrentTask(e, n, r, i, a) {
        let o = y();
        return (
            null != o &&
            (o.command(
                JSON.stringify({
                    command: 'SetCurrentTask',
                    application_id: e,
                    branch_id: n,
                    action: r,
                    user_id: i,
                    user_token: a
                }),
                I
            ),
            !0)
        );
    },
    setCredentials(e, n) {
        let r = y();
        null != r &&
            r.command(
                JSON.stringify({
                    command: 'SetCredentials',
                    user_id: e,
                    user_token: n
                }),
                I
            );
    },
    cancel(e, n) {
        let r = y();
        if (null != r)
            r.command(
                JSON.stringify({
                    command: 'Cancel',
                    application_id: e,
                    branch_id: n
                }),
                I
            );
    },
    uninstall(e, n) {
        let r = y();
        if (null != r)
            r.command(
                JSON.stringify({
                    command: 'Uninstall',
                    application_id: e,
                    branch_id: n
                }),
                I
            );
    },
    pause() {
        let e = y();
        if (null != e) e.command(JSON.stringify({ command: 'Pause' }), I);
    },
    resume() {
        let e = y();
        if (null != e) e.command(JSON.stringify({ command: 'Resume' }), I);
    },
    queryDirectory(e, n) {
        let r = y();
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
                  let a = y();
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
                              let n = b(e);
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
        new Promise((a, o) => {
            let s = y();
            if (null == s) {
                o(Error('native dispatch instance not found'));
                return;
            }
            function l(e, n) {
                '' !== e ? o(b(e)) : a([JSON.parse(n).pid]);
            }
            s.command(
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
