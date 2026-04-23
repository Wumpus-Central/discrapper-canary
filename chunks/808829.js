"use strict";
n.d(t, { P: () => i });
var r = n(985018);
function i(e) {
    let { application: t, username: n, usernameOnClick: i } = e;
    return null != t
        ? r.intl.formatToParts(r.t.Tes5Ou, { username: n, applicationName: t.name, usernameOnClick: i })
        : r.intl.formatToParts(r.t.PUJtgi, { username: n, usernameOnClick: i });
}
