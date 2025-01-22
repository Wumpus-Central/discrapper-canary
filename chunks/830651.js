r.d(n, {
    u: function () {
        return d;
    }
});
var i = r(964742),
    a = r(40284),
    o = r(144459);
function s(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function l(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? s(Object(r), !0).forEach(function (n) {
                  u(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
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
function d() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
        n = arguments.length > 1 ? arguments[1] : void 0,
        r = n.payload;
    switch (n.type) {
        case i.qu:
            return l(
                l({}, e),
                {},
                {
                    itemType: r.itemType,
                    item: r.item,
                    sourceId: r.sourceId,
                    isSourcePublic: r.isSourcePublic,
                    dropResult: null,
                    didDrop: !1
                }
            );
        case i.js:
            return l(l({}, e), {}, { isSourcePublic: !0 });
        case i.$T:
            return l(l({}, e), {}, { targetIds: r.targetIds });
        case a.IS:
            if (-1 === e.targetIds.indexOf(r.targetId)) return e;
            return l(l({}, e), {}, { targetIds: (0, o.zu)(e.targetIds, r.targetId) });
        case i.rp:
            return l(
                l({}, e),
                {},
                {
                    dropResult: r.dropResult,
                    didDrop: !0,
                    targetIds: []
                }
            );
        case i.Bs:
            return l(
                l({}, e),
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
