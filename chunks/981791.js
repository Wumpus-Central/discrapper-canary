n.d(t, { A: () => l });
var r = n(981631),
    i = n(388032);
function l(e) {
    let { application: t, username: n, usernameHook: l = r.dG4 } = e;
    return null != t
        ? i.intl.format(i.t.dXdgnp, {
              username: n,
              applicationName: t.name,
              usernameHook: l
          })
        : i.intl.format(i.t.O829Ul, {
              username: n,
              usernameHook: l
          });
}
