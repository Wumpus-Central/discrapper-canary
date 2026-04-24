"use strict";
var n = r(724039);
function i() {
    return (i =
        n ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }).apply(this, arguments);
}
var o = r(220115),
    a = r(595042),
    s = r(64700),
    u = r(550835),
    c = r(37998),
    l = r(670200);
t.exports = (function (t) {
    function e() {
        return t.apply(this, arguments) || this;
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.shouldComponentUpdate = function (t) {
            var e = this.props.editorState,
                r = t.editorState;
            if (
                e.getDirectionMap() !== r.getDirectionMap() ||
                e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()
            )
                return !0;
            var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode();
            if (e === r || (null !== n && r.getCurrentContent() === n) || (i && o)) return !1;
            var a = e.getCurrentContent(),
                s = r.getCurrentContent(),
                u = e.getDecorator(),
                c = r.getDecorator();
            return i !== o || a !== s || u !== c || r.mustForceSelection();
        }),
        (r.render = function () {
            for (
                var t = this.props,
                    e = t.blockRenderMap,
                    r = t.blockRendererFn,
                    n = t.blockStyleFn,
                    f = t.customStyleMap,
                    p = t.customStyleFn,
                    h = t.editorState,
                    d = t.editorKey,
                    g = t.preventScroll,
                    y = t.textDirectionality,
                    v = h.getCurrentContent(),
                    m = h.getSelection(),
                    _ = h.mustForceSelection(),
                    b = h.getDecorator(),
                    S = l(h.getDirectionMap()),
                    w = v.getBlocksAsArray(),
                    k = [],
                    x = null,
                    C = null,
                    E = 0;
                E < w.length;
                E++
            ) {
                var O = w[E],
                    D = O.getKey(),
                    K = O.getType(),
                    T = r(O),
                    M = void 0,
                    A = void 0,
                    I = void 0;
                T && ((M = T.component), (A = T.props), (I = T.editable));
                var B = y || S.get(D),
                    L = a.encode(D, 0, 0),
                    R = {
                        contentState: v,
                        block: O,
                        blockProps: A,
                        blockStyleFn: n,
                        customStyleMap: f,
                        customStyleFn: p,
                        decorator: b,
                        direction: B,
                        forceSelection: _,
                        offsetKey: L,
                        preventScroll: g,
                        selection: m,
                        tree: h.getBlockTree(D),
                    },
                    N = e.get(K) || e.get("unstyled"),
                    F = N.wrapper,
                    z = N.element || e.get("unstyled").element,
                    P = O.getDepth(),
                    j = "";
                (n && (j = n(O)), "li" === z) &&
                    (j = c(
                        j,
                        u({
                            "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === K,
                            "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === K,
                            "public/DraftStyleDefault/reset": C !== F || null === x || P > x,
                            "public/DraftStyleDefault/depth0": 0 === P,
                            "public/DraftStyleDefault/depth1": 1 === P,
                            "public/DraftStyleDefault/depth2": 2 === P,
                            "public/DraftStyleDefault/depth3": 3 === P,
                            "public/DraftStyleDefault/depth4": P >= 4,
                            "public/DraftStyleDefault/listLTR": "LTR" === B,
                            "public/DraftStyleDefault/listRTL": "RTL" === B,
                        }),
                    ));
                var U = M || o,
                    q = { className: j, "data-block": !0, "data-editor": d, "data-offset-key": L, key: D };
                void 0 !== I &&
                    (q = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                    }),
                                )),
                                n.forEach(function (e) {
                                    var n, i, o;
                                    (n = t),
                                        (i = e),
                                        (o = r[e]),
                                        i in n
                                            ? Object.defineProperty(n, i, {
                                                  value: o,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (n[i] = o);
                                });
                        }
                        return t;
                    })({}, q, { contentEditable: I, suppressContentEditableWarning: !0 }));
                var H = s.createElement(z, q, s.createElement(U, i({}, R, { key: D })));
                k.push({ block: H, wrapperTemplate: F, key: D, offsetKey: L }), (x = F ? O.getDepth() : null), (C = F);
            }
            for (var W = [], V = 0; V < k.length; ) {
                var G = k[V];
                if (G.wrapperTemplate) {
                    var J = [];
                    do J.push(k[V].block), V++;
                    while (V < k.length && k[V].wrapperTemplate === G.wrapperTemplate);
                    var X = s.cloneElement(
                        G.wrapperTemplate,
                        { key: G.key + "-wrap", "data-offset-key": G.offsetKey },
                        J,
                    );
                    W.push(X);
                } else W.push(G.block), V++;
            }
            return s.createElement("div", { "data-contents": "true" }, W);
        }),
        e
    );
})(s.Component);
