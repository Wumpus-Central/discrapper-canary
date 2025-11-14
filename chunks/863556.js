r.d(t, { default: () => u });
var n = r(951288),
    o = r(647438),
    c = r(481060),
    a = r(239091),
    i = r(313426);
function u(e) {
    let { groupId: t, onSelect: u } = e,
        l = o.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await r.e("24378").then(r.bind(r, 717756));
                return (r) => {
                    var o, c;
                    return (0, n.jsx)(
                        e,
                        ((o = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, r)),
                        (c = c = { groupId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(c)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                              }),
                        o),
                    );
                };
            }),
                (0, a.Zy)();
        }, [t]),
        p = o.useCallback(() => {
            i.Z.deleteGroup(t), (0, a.Zy)();
        }, [t]);
    return (0, n.jsxs)(c.v2r, {
        "aria-label": "Group Context Menu",
        navId: "group-context-menu",
        onClose: a.Zy,
        onSelect: u,
        children: [
            (0, n.jsx)(c.sNh, {
                id: "edit",
                label: "Edit Group",
                action: l,
            }),
            (0, n.jsx)(c.sNh, {
                id: "delete",
                label: "Delete Group",
                action: p,
                color: "danger",
            }),
        ],
    });
}
