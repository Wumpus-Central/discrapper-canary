"use strict";
n.d(t, { m: () => E });
var r = n(627968),
    i = n(64700),
    s = n(140735),
    a = n(460890),
    o = n(834730),
    l = n(475358),
    u = n(717995),
    d = n(348275),
    c = n(505679),
    _ = n(747781),
    f = n(310855);
function E(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: E,
            __unsupportedReactNodeAsText: h,
            asContainer: p = !1,
            tag: m = "span",
            position: g = "top",
            align: A = "center",
            spacing: I,
            layerContext: T,
            targetElementRef: S,
            anchorRef: y,
            caretConfig: N,
            positionKey: O,
            ariaHidden: R = !1,
            ...v
        } = e,
        [C, b] = i.useState(null);
    i.useLayoutEffect(() => {
        null != y && b(y.current);
    }, [y]);
    let D = i.useCallback(
            (e) => {
                null == y && b(e), (0, d.cZ)(S, e);
            },
            [S, y],
        ),
        {
            tooltipId: L,
            isVisible: w,
            targetElementRef: M,
            trigger: P,
        } = (0, _.D)({ children: t, targetElementRef: D, asContainer: p, containerTag: m, ariaHidden: R, ...v }),
        [U, k] = i.useState(!1),
        { defaultLayerContext: x } = (0, a.G9)(),
        G = i.useMemo(
            () =>
                null != h
                    ? h
                    : null == n || "" === n
                      ? null
                      : null != E && "" !== E
                        ? (0, r.jsxs)("div", {
                              className: f.Cl,
                              children: [
                                  (0, r.jsx)(o.E, { variant: "text-sm/medium", children: n }),
                                  (0, r.jsx)(l.e, { shortcut: E }),
                              ],
                          })
                        : n,
            [n, E, h],
        ),
        V = null != G && ("string" != typeof G || "" !== G),
        F = w || U;
    i.useEffect(() => {
        w && V ? k(!0) : V || k(!1);
    }, [w, V]);
    let B = i.useCallback(() => {
            k(!1);
        }, []),
        H = (0, c.j)({ shouldShow: w, onExitComplete: B });
    if (!V && (w || !U)) return t;
    if (null == t || (!p && !i.isValidElement(t))) return null;
    let Y = O ?? (0, d.Xj)(n),
        W = H((e, t) =>
            t
                ? (0, r.jsx)(u.R, {
                      isVisible: w,
                      isRendered: F,
                      targetElementRef: M,
                      targetElement: C,
                      anchorRef: y,
                      id: L,
                      content: G,
                      position: g,
                      align: A,
                      spacing: I,
                      caretConfig: N,
                      layerContext: T ?? x,
                      animationStyle: e,
                      positionKey: Y,
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [P, R || null == G || "" === G ? null : (0, r.jsx)(s.A, { id: L, children: G }), W],
    });
}
