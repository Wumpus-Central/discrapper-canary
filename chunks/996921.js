n.d(t, {
    Z: () => g,
    h: () => f,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
    s = n(314897),
    c = n(224724),
    u = n(384166),
    d = n(352614);
function f(e) {
    let t = (0, l.e7)([s.default], () => s.default.getId() === e),
        n = (0, o.zPA)(),
        r = (0, l.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
    return t && (n || r);
}
function g(e) {
    let { userId: t, className: n } = e,
        i = (0, l.e7)([s.default], () => s.default.getId() === t),
        c = (0, o.zPA)();
    return i
        ? (0, r.jsx)("div", {
              className: a()(d.container, n),
              children: c
                  ? (0, r.jsx)(o.c43, { className: d.dndKeyboardHelpBar })
                  : (0, r.jsx)(u.Z, { className: d.pendingChangesNotice }),
          })
        : null;
}
