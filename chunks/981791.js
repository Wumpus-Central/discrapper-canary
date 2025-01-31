n.d(t, { A: () => a });
var i = n(981631),
    l = n(388032);
function a(e) {
    let { application: t, username: n, usernameHook: a = i.dG4 } = e;
    return null != t
        ? l.intl.format(l.t.dXdgnp, {
              username: n,
              applicationName: t.name,
              usernameHook: a
          })
        : l.intl.format(l.t.O829Ul, {
              username: n,
              usernameHook: a
          });
}
