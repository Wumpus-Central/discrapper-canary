"use strict";
r.d(t, { A: () => l });
var a = r(1139),
    n = r(64700),
    o = r(431384);
function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function i(e, t) {
    var r = 0,
        a = !1;
    if (Number.isSafeInteger(e.size)) r = e.size;
    else {
        var n,
            o = (function (e) {
                var t = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!t) {
                    if (
                        Array.isArray(e) ||
                        (t = (function (e) {
                            if (e) {
                                if ("string" == typeof e) return s(e, void 0);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return s(e, void 0);
                            }
                        })(e))
                    ) {
                        t && (e = t);
                        var r = 0,
                            a = function () {};
                        return {
                            s: a,
                            n: function () {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: a,
                        };
                    }
                    throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var n,
                    o = !0,
                    i = !1;
                return {
                    s: function () {
                        t = t.call(e);
                    },
                    n: function () {
                        var e = t.next();
                        return (o = e.done), e;
                    },
                    e: function (e) {
                        (i = !0), (n = e);
                    },
                    f: function () {
                        try {
                            o || null == t.return || t.return();
                        } finally {
                            if (i) throw n;
                        }
                    },
                };
            })(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                if ((n.value, t && r + 1 > t)) {
                    a = !0;
                    break;
                }
                r += 1;
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
    }
    return ""
        .concat(a ? ">" : "")
        .concat(r, " ")
        .concat(1 !== r ? "entries" : "entry");
}
let l = function (e) {
    var t = (0, a.A)({}, e);
    return n.createElement(
        o.A,
        (0, a.A)({}, t, { nodeType: "Iterable", nodeTypeIndicator: "()", createItemString: i }),
    );
};
