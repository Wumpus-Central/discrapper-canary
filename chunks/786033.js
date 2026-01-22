n.d(t, { t: () => a });
var l = n(157559),
    i = n(975571),
    r = n(652215),
    s = n(985018);
function a(e) {
    l.A.show({
        title: s.intl.string(s.t.vElC9b),
        body: s.intl.format(s.t.yslqFM, { name: e }),
        cancelText: s.intl.string(s.t.psXQHP),
        onCancel() {
            window.open(i.A.getArticleURL(r.MVz.PERMISSIONS_LOCKOUT));
        },
    });
}
