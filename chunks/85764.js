var r = n(724039);

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

function a(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function s(e, t, n) {
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

function o(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var l = n(220115),
    c = n(595042),
    u = n(64700),
    d = n(550835),
    f = n(37998),
    p = n(670200),
    _ = function (e, t, n, r) {
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
    o(t, e);
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
                a = n.isInCompositionMode();
            if (t === n || (null !== r && n.getCurrentContent() === r) || (i && a)) return !1;
            var s = t.getCurrentContent(),
                o = n.getCurrentContent(),
                l = t.getDecorator(),
                c = n.getDecorator();
            return i !== a || s !== o || l !== c || n.mustForceSelection();
        }),
        (n.render = function () {
            for (
                var e = this.props,
                    t = e.blockRenderMap,
                    n = e.blockRendererFn,
                    r = e.blockStyleFn,
                    s = e.customStyleMap,
                    o = e.customStyleFn,
                    d = e.editorState,
                    h = e.editorKey,
                    m = e.preventScroll,
                    g = e.textDirectionality,
                    E = d.getCurrentContent(),
                    b = d.getSelection(),
                    y = d.mustForceSelection(),
                    O = d.getDecorator(),
                    A = p(d.getDirectionMap()),
                    v = E.getBlocksAsArray(),
                    S = [],
                    I = null,
                    T = null,
                    C = 0;
                C < v.length;
                C++
            ) {
                var N = v[C],
                    R = N.getKey(),
                    w = N.getType(),
                    P = n(N),
                    D = void 0,
                    x = void 0,
                    L = void 0;
                P && ((D = P.component), (x = P.props), (L = P.editable));
                var j = g || A.get(R),
                    M = c.encode(R, 0, 0),
                    k = {
                        contentState: E,
                        block: N,
                        blockProps: x,
                        blockStyleFn: r,
                        customStyleMap: s,
                        customStyleFn: o,
                        decorator: O,
                        direction: j,
                        forceSelection: y,
                        offsetKey: M,
                        preventScroll: m,
                        selection: b,
                        tree: d.getBlockTree(R),
                    },
                    U = t.get(w) || t.get("unstyled"),
                    G = U.wrapper,
                    V = U.element || t.get("unstyled").element,
                    F = N.getDepth(),
                    B = "";
                if ((r && (B = r(N)), "li" === V)) {
                    var H = T !== G || null === I || F > I;
                    B = f(B, _(w, F, H, j));
                }
                var Y = D || l,
                    W = {
                        className: B,
                        "data-block": !0,
                        "data-editor": h,
                        "data-offset-key": M,
                        key: R,
                    };
                void 0 !== L &&
                    (W = a({}, W, {
                        contentEditable: L,
                        suppressContentEditableWarning: !0,
                    }));
                var K = u.createElement(
                    V,
                    W,
                    u.createElement(
                        Y,
                        i({}, k, {
                            key: R,
                        }),
                    ),
                );
                S.push({
                    block: K,
                    wrapperTemplate: G,
                    key: R,
                    offsetKey: M,
                }),
                    (I = G ? N.getDepth() : null),
                    (T = G);
            }
            for (var z = [], q = 0; q < S.length; ) {
                var X = S[q];
                if (X.wrapperTemplate) {
                    var Z = [];
                    do Z.push(S[q].block), q++;
                    while (q < S.length && S[q].wrapperTemplate === X.wrapperTemplate);
                    var Q = u.cloneElement(
                        X.wrapperTemplate,
                        {
                            key: X.key + "-wrap",
                            "data-offset-key": X.offsetKey,
                        },
                        Z,
                    );
                    z.push(Q);
                } else z.push(X.block), q++;
            }
            return u.createElement(
                "div",
                {
                    "data-contents": "true",
                },
                z,
            );
        }),
        t
    );
})(u.Component);
