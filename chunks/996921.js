n.d(t, {
    Z: () => f,
    h: () => p,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(314897),
    c = n(224724),
    u = n(384166),
    d = n(352614);
function p(e) {
    let t = (0, a.e7)([s.default], () => s.default.getId() === e),
        n = (0, o.zPA)(),
        r = (0, a.e7)([c.Z], () => c.Z.hasSaveablePendingChanges());
    return t && (n || r);
}
function f(e) {
    let { userId: t, className: n } = e,
        i = (0, a.e7)([s.default], () => s.default.getId() === t),
        c = (0, o.zPA)();
    return i
        ? (0, r.jsx)("div", {
              className: l()(d.container, n),
              children: c
                  ? (0, r.jsx)(o.c43, { className: d.dndKeyboardHelpBar })
                  : (0, r.jsx)(u.Z, { className: d.pendingChangesNotice }),
          })
        : null;
}
