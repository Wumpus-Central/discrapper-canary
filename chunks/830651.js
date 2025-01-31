n.d(t, { u: () => c });
var i = n(964742),
    r = n(40284),
    a = n(144459);
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? s(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var u = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null
};
function c() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = t.payload;
    switch (t.type) {
        case i.qu:
            return o(
                o({}, e),
                {},
                {
                    itemType: n.itemType,
                    item: n.item,
                    sourceId: n.sourceId,
                    isSourcePublic: n.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                }
            );
        case i.js:
            return o(o({}, e), {}, { isSourcePublic: !0 });
        case i.$T:
            return o(o({}, e), {}, { targetIds: n.targetIds });
        case r.IS:
            if (-1 === e.targetIds.indexOf(n.targetId)) return e;
            return o(o({}, e), {}, { targetIds: (0, a.zu)(e.targetIds, n.targetId) });
        case i.rp:
            return o(
                o({}, e),
                {},
                {
                    dropResult: n.dropResult,
                    didDrop: !0,
                    targetIds: []
                }
            );
        case i.Bs:
            return o(
                o({}, e),
                {},
                {
                    itemType: null,
                    item: null,
                    sourceId: null,
                    dropResult: null,
                    didDrop: !1,
                    isSourcePublic: null,
                    targetIds: []
                }
            );
        default:
            return e;
    }
}
