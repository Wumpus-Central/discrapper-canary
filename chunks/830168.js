let r, i;
n.d(t, { Z: () => y }), n(47120), n(411104), n(26686);
var o = n(570140),
    a = n(330516),
    s = n(710845),
    l = n(594174),
    c = n(436181),
    u = n(626135),
    d = n(358085),
    f = n(998502),
    p = n(981631),
    _ = n(186901);
let h = new s.Z('NativeDispatchUtils');
function m() {
    return null != r
        ? Promise.resolve(r)
        : (0, d.isDesktop)()
          ? Promise.all([f.ZP.ensureModule('discord_dispatch'), f.ZP.ensureModule('discord_modules')]).then(() => {
                f.ZP.requireModule('discord_modules');
                let e = f.ZP.getDispatch();
                return null != e ? ((r = e), e) : Promise.reject(Error('dispatch not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function g() {
    return null == i && h.warn('Tried getting Dispatch instance before instantiated'), i;
}
function E(e) {
    let t = JSON.parse(e);
    return h.log('Native Dispatch error', t), new a.Z(t);
}
function v(e, t) {
    '' !== e && E(e);
}
function b(e) {
    let { properties: t } = e;
    switch ((null != t.stage && null != t.stage.type && (t.stage = t.stage.type), e.event_name)) {
        case p.rMx.DISPATCH_PATCH_STARTED:
        case p.rMx.DISPATCH_PATCH_PAUSED:
        case p.rMx.DISPATCH_PATCH_FAILED:
        case p.rMx.DISPATCH_PATCH_VERIFICATION_FAILED:
        case p.rMx.DISPATCH_PATCH_COMPLETE:
        case p.rMx.DISPATCH_PATCH_CANCELLED:
        case p.rMx.DISPATCH_APPLICATION_UNINSTALLED:
            u.default.track(e.event_name, t);
    }
}
let y = {
    init(e) {
        let { userToken: t, userId: n, installPaths: r, platform: o, stateCallback: a, errorCallback: s } = e;
        null == i &&
            m().then((e) => {
                var c;
                let u = {
                        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
                        build_number: '370144'
                    },
                    d = l.default.getCurrentUser();
                null != d && ((u.user_id = d.id), (u.user_name = d.tag), null != d.email && (u.email = d.email));
                let f = {
                    user_token: t,
                    user_id: n,
                    install_paths: r.map((e) => {
                        let { path: t } = e;
                        return t;
                    }),
                    api_endpoint: ''.concat(((c = 'https:'), 'https:')).concat(window.GLOBAL_ENV.API_ENDPOINT),
                    environment: window.GLOBAL_ENV.PROJECT_ENV,
                    sentry: u,
                    platform: o
                };
                i = new e.Dispatch(
                    JSON.stringify(f),
                    (e) => {
                        let t = JSON.parse(e);
                        a({
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
                        s(E(e));
                    },
                    (e) => {
                        b(JSON.parse(e));
                    }
                );
            });
    },
    destroy() {
        let e = g();
        null != e && void 0 !== e.destroy && (e.destroy(), (i = null));
    },
    setTargetManifest(e) {
        let { applicationId: t, applicationName: n, applicationIcon: r, branchId: i, buildId: o, manifestIds: a, installationPath: s } = e,
            l = g();
        null != l &&
            l.command(
                JSON.stringify({
                    command: 'SetTargetManifest',
                    application_id: t,
                    application_name: n,
                    application_icon: r,
                    branch_id: i,
                    build_id: o,
                    manifest_ids: a,
                    install_path: s
                }),
                v
            );
    },
    setCurrentTask(e, t, n, r, i) {
        let o = g();
        return (
            null != o &&
            (o.command(
                JSON.stringify({
                    command: 'SetCurrentTask',
                    application_id: e,
                    branch_id: t,
                    action: n,
                    user_id: r,
                    user_token: i
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
        c.Z.isRunning()
            ? Promise.reject(Error('Already running launch setup.'))
            : (o.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_START' }),
              new Promise((n, r) => {
                  let i = g();
                  if (null == i) {
                      r(Error('native dispatch instance not found'));
                      return;
                  }
                  i.command(
                      JSON.stringify({
                          command: 'RunLaunchSetup',
                          application_id: e,
                          branch_id: t
                      }),
                      (e, t, i) => {
                          if ('' !== e) {
                              o.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' });
                              let t = E(e);
                              o.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_ERROR',
                                  error: t
                              }),
                                  null != t.code && t.code === _.ff.POST_INSTALL_CANCELLED ? r(t) : n();
                              return;
                          }
                          if ('' !== t) {
                              o.Z.dispatch({ type: 'DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE' }), n();
                              return;
                          }
                          if ('' !== i) {
                              let e = JSON.parse(i);
                              o.Z.dispatch({
                                  type: 'DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE',
                                  progress: e.progress,
                                  total: e.total,
                                  name: e.name
                              });
                          }
                      }
                  );
              })),
    launch: (e, t, n, r) =>
        new Promise((i, o) => {
            let a = g();
            if (null == a) {
                o(Error('native dispatch instance not found'));
                return;
            }
            function s(e, t) {
                '' !== e ? o(E(e)) : i([JSON.parse(t).pid]);
            }
            a.command(
                JSON.stringify({
                    command: 'Launch',
                    application_id: e,
                    branch_id: t,
                    option_name: n,
                    environment: r
                }),
                s
            );
        })
};
