"use strict";
n.d(t, { T: () => c });
var r = n(54304),
    i = n(607490),
    s = n(970585),
    a = n(780439),
    o = n(8041),
    l = n(988440);
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? u(Object(n), !0).forEach(function (t) {
                  var r, i, s;
                  (r = e),
                      (i = t),
                      (s = n[t]),
                      i in r
                          ? Object.defineProperty(r, i, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                          : (r[i] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function c() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
    return {
        dirtyHandlerIds: (0, a.T)(e.dirtyHandlerIds, {
            type: t.type,
            payload: d(d({}, t.payload), {}, { prevTargetIds: (0, l.Jt)(e, "dragOperation.targetIds", []) }),
        }),
        dragOffset: (0, r.T)(e.dragOffset, t),
        refCount: (0, s.T)(e.refCount, t),
        dragOperation: (0, i.T)(e.dragOperation, t),
        stateId: (0, o.T)(e.stateId),
    };
}
