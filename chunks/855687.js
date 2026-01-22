n.d(t, { K: () => i });
var r = n(652215);
function i(e, t, n, i) {
    let a = null != n ? n : t;
    return (
        (null != a && e.can(r.xBc.CREATE_INSTANT_INVITE, a)) ||
        (null != t && null != t.vanityURLCode) ||
        (null == i ? void 0 : i.invite_code) != null
    );
}
