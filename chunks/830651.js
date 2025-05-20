n.d(t, { u: () => u });
var r = n(964742),
    i = n(40284),
    o = n(144459);
function a(e, t) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? a(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
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
var c = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null
};
function u() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = t.payload;
    switch (t.type) {
        case r.qu:
            return s(
                s({}, e),
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
        case r.js:
            return s(s({}, e), {}, { isSourcePublic: !0 });
        case r.$T:
            return s(s({}, e), {}, { targetIds: n.targetIds });
        case i.IS:
            if (-1 === e.targetIds.indexOf(n.targetId)) return e;
            return s(s({}, e), {}, { targetIds: (0, o.zu)(e.targetIds, n.targetId) });
        case r.rp:
            return s(
                s({}, e),
                {},
                {
                    dropResult: n.dropResult,
                    didDrop: !0,
                    targetIds: []
                }
            );
        case r.Bs:
            return s(
                s({}, e),
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
