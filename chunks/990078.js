n.d(t, { m: () => g }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(140735),
    s = n(158954),
    o = n(397927),
    l = n(717995),
    c = n(348275),
    u = n(505679),
    d = n(747781),
    f = n(894524);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function g(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: p,
            __unsupportedReactNodeAsText: m,
            asContainer: g = !1,
            tag: E = "span",
            position: b = "top",
            align: y = "center",
            spacing: O,
            layerContext: A,
            targetElementRef: v,
            anchorRef: S,
            caretConfig: I,
            positionKey: T,
            ariaHidden: C = !1,
        } = e,
        N = h(e, [
            "children",
            "text",
            "keyboardShortcut",
            "__unsupportedReactNodeAsText",
            "asContainer",
            "tag",
            "position",
            "align",
            "spacing",
            "layerContext",
            "targetElementRef",
            "anchorRef",
            "caretConfig",
            "positionKey",
            "ariaHidden",
        ]),
        [R, w] = i.useState(null);
    i.useLayoutEffect(() => {
        null != S && w(S.current);
    }, [S]);
    let P = i.useCallback(
            (e) => {
                null == S && w(e), (0, c.cZ)(v, e);
            },
            [v, S],
        ),
        {
            tooltipId: D,
            isVisible: x,
            targetElementRef: L,
            trigger: j,
        } = (0, d.D)(
            _(
                {
                    children: t,
                    targetElementRef: P,
                    asContainer: g,
                    containerTag: E,
                    ariaHidden: C,
                },
                N,
            ),
        ),
        [M, k] = i.useState(!1),
        { defaultLayerContext: U } = (0, s.G98)(),
        G = i.useMemo(
            () =>
                null != m
                    ? m
                    : null == n || "" === n
                      ? null
                      : null != p && "" !== p
                        ? (0, r.jsxs)("div", {
                              className: f.Cl,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      children: n,
                                  }),
                                  (0, r.jsx)(o.e7I, { shortcut: p }),
                              ],
                          })
                        : n,
            [n, p, m],
        ),
        V = null != G && ("string" != typeof G || "" !== G),
        F = x || M;
    i.useEffect(() => {
        x && V ? k(!0) : V || k(!1);
    }, [x, V]);
    let B = i.useCallback(() => {
            k(!1);
        }, []),
        H = (0, u.j)({
            shouldShow: x,
            onExitComplete: B,
        });
    if (!V && (x || !M)) return t;
    if (null == t || (!g && !i.isValidElement(t))) return null;
    let Y = null != T ? T : (0, c.Xj)(n),
        W = H((e, t) =>
            t
                ? (0, r.jsx)(l.R, {
                      isVisible: x,
                      isRendered: F,
                      targetElementRef: L,
                      targetElement: R,
                      anchorRef: S,
                      id: D,
                      content: G,
                      position: b,
                      align: y,
                      spacing: O,
                      caretConfig: I,
                      layerContext: null != A ? A : U,
                      animationStyle: e,
                      positionKey: Y,
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j,
            C || null == G || "" === G
                ? null
                : (0, r.jsx)(a.A, {
                      id: D,
                      children: G,
                  }),
            W,
        ],
    });
}
