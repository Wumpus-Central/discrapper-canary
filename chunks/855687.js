n.d(t, { K: () => i });
var l = n(652215);
function i(e, t, n, i) {
    let r = n ?? t;
    return (
        (null != r && e.can(l.xBc.CREATE_INSTANT_INVITE, r)) ||
        (null != t && null != t.vanityURLCode) ||
        i?.invite_code != null
    );
}
