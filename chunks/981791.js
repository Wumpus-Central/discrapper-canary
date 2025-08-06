n.d(t, { A: () => o });
var r = n(981631),
    i = n(388032);
function o(e) {
    let { application: t, username: n, usernameHook: o = r.dG4 } = e;
    return null != t
        ? i.intl.format(i.t.dXdgnp, {
              username: n,
              applicationName: t.name,
              usernameHook: o
          })
        : i.intl.format(i.t.O829Ul, {
              username: n,
              usernameHook: o
          });
}
