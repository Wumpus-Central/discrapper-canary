n.d(t, {
    A: () => o,
    D: () => s,
});
var l,
    r = n(741918);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function i(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var s = (((l = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (l.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), l);
function o(e, t) {
    switch (t.type) {
        case r.X2.NAVIGATE_UP:
            return i(a({}, e), { focusedIndex: Math.max(0, e.focusedIndex - 1) });
        case r.X2.NAVIGATE_DOWN:
            return i(a({}, e), { focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) });
        case r.X2.NAVIGATE_START:
            return i(a({}, e), { focusedIndex: 0 });
        case r.X2.NAVIGATE_END:
            return i(a({}, e), { focusedIndex: e.itemCount - 1 });
        case "UPDATE_ITEM_COUNT":
            return (function (e, t) {
                let { itemCount: n } = t;
                return i(a({}, e), {
                    itemCount: n,
                    focusedIndex: Math.min(n - 1, e.focusedIndex),
                });
            })(e, t);
        case "SET_FOCUSED_INDEX":
            return (function (e, t) {
                let { index: n } = t;
                return i(a({}, e), { focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1)) });
            })(e, t);
        case r.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn("Listbox navigator was given an unhandled action ".concat(t.type));
    }
    return e;
}
