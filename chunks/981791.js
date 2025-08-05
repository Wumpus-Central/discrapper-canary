n.d(t, { A: () => a });
var r = n(981631),
    i = n(388032);
function a(e) {
    let { application: t, username: n, usernameHook: a = r.dG4 } = e;
    return null != t
        ? i.intl.format(i.t.dXdgnp, {
              username: n,
              applicationName: t.name,
              usernameHook: a
          })
        : i.intl.format(i.t.O829Ul, {
              username: n,
              usernameHook: a
          });
}
