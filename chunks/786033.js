"use strict";
n.d(t, { t: () => r });
var l = n(157559),
    i = n(975571),
    s = n(652215),
    a = n(985018);
function r(e) {
    l.A.show({
        title: a.intl.string(a.t.vElC9b),
        body: a.intl.format(a.t.yslqFM, { name: e }),
        cancelText: a.intl.string(a.t.psXQHP),
        onCancel() {
            window.open(i.A.getArticleURL(s.MVz.PERMISSIONS_LOCKOUT));
        },
    });
}
