var r = n(381538);
function i() {
    return (i =
        r ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t, n) {
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
function s(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var l = n(962759),
    c = n(152477),
    u = n(73800),
    d = n(606166),
    f = n(679785),
    _ = n(467159),
    p = function (e, t, n, r) {
        return d({
            "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === e,
            "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === e,
            "public/DraftStyleDefault/reset": n,
            "public/DraftStyleDefault/depth0": 0 === t,
            "public/DraftStyleDefault/depth1": 1 === t,
            "public/DraftStyleDefault/depth2": 2 === t,
            "public/DraftStyleDefault/depth3": 3 === t,
            "public/DraftStyleDefault/depth4": t >= 4,
            "public/DraftStyleDefault/listLTR": "LTR" === r,
            "public/DraftStyleDefault/listRTL": "RTL" === r,
        });
    };
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    s(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            var t = this.props.editorState,
                n = e.editorState;
            if (
                t.getDirectionMap() !== n.getDirectionMap() ||
                t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()
            )
                return !0;
            var r = n.getNativelyRenderedContent(),
                i = t.isInCompositionMode(),
                o = n.isInCompositionMode();
            if (t === n || (null !== r && n.getCurrentContent() === r) || (i && o)) return !1;
            var a = t.getCurrentContent(),
                s = n.getCurrentContent(),
                l = t.getDecorator(),
                c = n.getDecorator();
            return i !== o || a !== s || l !== c || n.mustForceSelection();
        }),
        (n.render = function () {
            for (
                var e = this.props,
                    t = e.blockRenderMap,
                    n = e.blockRendererFn,
                    r = e.blockStyleFn,
                    a = e.customStyleMap,
                    s = e.customStyleFn,
                    d = e.editorState,
                    h = e.editorKey,
                    m = e.preventScroll,
                    g = e.textDirectionality,
                    E = d.getCurrentContent(),
                    b = d.getSelection(),
                    y = d.mustForceSelection(),
                    O = d.getDecorator(),
                    v = _(d.getDirectionMap()),
                    I = E.getBlocksAsArray(),
                    T = [],
                    S = null,
                    A = null,
                    N = 0;
                N < I.length;
                N++
            ) {
                var C = I[N],
                    R = C.getKey(),
                    P = C.getType(),
                    w = n(C),
                    D = void 0,
                    L = void 0,
                    x = void 0;
                w && ((D = w.component), (L = w.props), (x = w.editable));
                var M = g || v.get(R),
                    j = c.encode(R, 0, 0),
                    k = {
                        contentState: E,
                        block: C,
                        blockProps: L,
                        blockStyleFn: r,
                        customStyleMap: a,
                        customStyleFn: s,
                        decorator: O,
                        direction: M,
                        forceSelection: y,
                        offsetKey: j,
                        preventScroll: m,
                        selection: b,
                        tree: d.getBlockTree(R),
                    },
                    U = t.get(P) || t.get("unstyled"),
                    G = U.wrapper,
                    B = U.element || t.get("unstyled").element,
                    Z = C.getDepth(),
                    F = "";
                if ((r && (F = r(C)), "li" === B)) {
                    var V = A !== G || null === S || Z > S;
                    F = f(F, p(P, Z, V, M));
                }
                var H = D || l,
                    Y = {
                        className: F,
                        "data-block": !0,
                        "data-editor": h,
                        "data-offset-key": j,
                        key: R,
                    };
                void 0 !== x &&
                    (Y = o({}, Y, {
                        contentEditable: x,
                        suppressContentEditableWarning: !0,
                    }));
                var W = u.createElement(B, Y, u.createElement(H, i({}, k, { key: R })));
                T.push({
                    block: W,
                    wrapperTemplate: G,
                    key: R,
                    offsetKey: j,
                }),
                    (S = G ? C.getDepth() : null),
                    (A = G);
            }
            for (var K = [], z = 0; z < T.length; ) {
                var q = T[z];
                if (q.wrapperTemplate) {
                    var X = [];
                    do X.push(T[z].block), z++;
                    while (z < T.length && T[z].wrapperTemplate === q.wrapperTemplate);
                    var Q = u.cloneElement(
                        q.wrapperTemplate,
                        {
                            key: q.key + "-wrap",
                            "data-offset-key": q.offsetKey,
                        },
                        X,
                    );
                    K.push(Q);
                } else K.push(q.block), z++;
            }
            return u.createElement("div", { "data-contents": "true" }, K);
        }),
        t
    );
})(u.Component);
