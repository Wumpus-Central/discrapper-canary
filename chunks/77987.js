n.d(t, { e: () => s });
var a = n(200651);
n(192379);
var r = n(314897),
    o = n(449934),
    i = n(857458),
    l = n(981631);
function s(e, t) {
    var n, s;
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function d(n) {
        return !(0, o.$8)() && r.default.getLoginStatus() !== l.u34.LOGGING_IN && r.default.allowLogoutRedirect() ? (null != t ? (0, a.jsx)(t, { renderRedirect: (0, a.jsx)(i.Z, {}) }) : (0, a.jsx)(i.Z, {})) : (0, a.jsx)(e, { ...(c.passProps ? n : null) });
    }
    return (d.displayName = 'Authenticated('.concat(null !== (s = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== s ? s : '<Unknown>', ')')), d;
}
