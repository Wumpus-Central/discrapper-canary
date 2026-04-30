"use strict";
n.d(t, { P: () => r });
var i = n(375708);
function r(e) {
    let { application: t, username: n, usernameOnClick: r } = e;
    return null != t
        ? i.intl.formatToParts(i.t.Tes5Ou, { username: n, applicationName: t.name, usernameOnClick: r })
        : i.intl.formatToParts(i.t.PUJtgi, { username: n, usernameOnClick: r });
}
