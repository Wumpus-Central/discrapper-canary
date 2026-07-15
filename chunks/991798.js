"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.flattenNames = void 0);
var n = u(r(565102)),
    o = u(r(43646)),
    a = u(r(862711)),
    i = u(r(363093));
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = (t.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = [];
    return (
        (0, i.default)(t, function (t) {
            Array.isArray(t)
                ? e(t).map(function (e) {
                      return r.push(e);
                  })
                : (0, a.default)(t)
                  ? (0, o.default)(t, function (e, t) {
                        !0 === e && r.push(t), r.push(t + "-" + e);
                    })
                  : (0, n.default)(t) && r.push(t);
        }),
        r
    );
});
t.default = l;
