n.d(t, {
    Z: () => g,
    h: () => f,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
    c = n(314897),
    s = n(224724),
    u = n(384166),
    d = n(465707);
function f(e) {
    let t = (0, l.e7)([c.default], () => c.default.getId() === e),
        n = (0, o.zPA)(),
        r = (0, l.e7)([s.Z], () => s.Z.hasUnsavedChanges());
    return t && (n || r);
}
function g(e) {
    let { userId: t, className: n } = e,
        i = (0, l.e7)([c.default], () => c.default.getId() === t),
        s = (0, o.zPA)();
    return i
        ? (0, r.jsx)("div", {
              className: a()(d.container, n),
              children: s
                  ? (0, r.jsx)(o.c43, { className: d.dndKeyboardHelpBar })
                  : (0, r.jsx)(u.Z, { className: d.pendingChangesNotice }),
          })
        : null;
}
