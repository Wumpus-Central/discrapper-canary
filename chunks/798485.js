function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var a = n(703579),
    o = n(581079),
    s = function (e, t) {
        for (var n = [].concat(e).reverse(); n.length; ) {
            var r = n.pop();
            t(r);
            var i = r.children;
            Array.isArray(i) || o(!1), (n = n.concat([].concat(i.reverse())));
        }
    },
    l = function (e) {
        if (!(e && e.type)) return !1;
        var t = e.type;
        return "unordered-list-item" === t || "ordered-list-item" === t;
    },
    c = function (e) {
        Array.isArray(e.children) &&
            (e.children = e.children.map(function (t) {
                return t.type === e.type ? r({}, t, { depth: (e.depth || 0) + 1 }) : t;
            }));
    };
e.exports = {
    fromRawTreeStateToRawState: function (e) {
        var t = e.blocks,
            n = [];
        return (Array.isArray(t) || o(!1), Array.isArray(t) && t.length)
            ? (s(t, function (e) {
                  var t = r({}, e);
                  (l(e) && ((t.depth = t.depth || 0), c(e), null != e.children && e.children.length > 0)) ||
                      (delete t.children, n.push(t));
              }),
              (e.blocks = n),
              r({}, e, { blocks: n }))
            : e;
    },
    fromRawStateToRawTreeState: function (e) {
        var t = [],
            n = [];
        return (
            e.blocks.forEach(function (e) {
                var i = l(e),
                    o = e.depth || 0,
                    s = r({}, e, { children: [] });
                if (!i) return void t.push(s);
                var c = n[0];
                if (null == c && 0 === o) t.push(s);
                else if (null == c || c.depth < o - 1) {
                    var u = {
                        key: a(),
                        text: "",
                        depth: o - 1,
                        type: e.type,
                        children: [],
                        entityRanges: [],
                        inlineStyleRanges: [],
                    };
                    n.unshift(u), 1 === o ? t.push(u) : null != c && c.children.push(u), u.children.push(s);
                } else if (c.depth === o - 1) c.children.push(s);
                else {
                    for (; null != c && c.depth >= o; ) n.shift(), (c = n[0]);
                    o > 0 ? c.children.push(s) : t.push(s);
                }
            }),
            r({}, e, { blocks: t })
        );
    },
};
