"use strict";
n.d(t, { m: () => h });
var i = n(627968),
    r = n(64700),
    s = n(140735),
    a = n(460890),
    o = n(834730),
    l = n(475358),
    u = n(237140),
    c = n(348275),
    d = n(505679),
    _ = n(521754),
    f = n(74567);
function h(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: h,
            __unsupportedReactNodeAsText: p,
            asContainer: E = !1,
            tag: m = "span",
            position: g = "top",
            align: A = "center",
            spacing: I,
            layerContext: T,
            targetElementRef: S,
            anchorRef: N,
            caretConfig: y,
            positionKey: C,
            ariaHidden: v = !1,
            ...O
        } = e,
        [R, b] = r.useState(null);
    r.useLayoutEffect(() => {
        null != N && b(N.current);
    }, [N]);
    let D = r.useCallback(
            (e) => {
                null == N && b(e), (0, c.cZ)(S, e);
            },
            [S, N],
        ),
        {
            tooltipId: L,
            isVisible: w,
            targetElementRef: M,
            trigger: P,
        } = (0, _.D)({ children: t, targetElementRef: D, asContainer: E, containerTag: m, ariaHidden: v, ...O }),
        [x, U] = r.useState(!1),
        { defaultLayerContext: k } = (0, a.G9)(),
        G = r.useMemo(
            () =>
                null != p
                    ? p
                    : null == n || "" === n
                      ? null
                      : null != h && "" !== h
                        ? (0, i.jsxs)("div", {
                              className: f.Cl,
                              children: [
                                  (0, i.jsx)(o.E, { variant: "text-sm/medium", children: n }),
                                  (0, i.jsx)(l.e, { shortcut: h }),
                              ],
                          })
                        : n,
            [n, h, p],
        ),
        F = null != G && ("string" != typeof G || "" !== G),
        V = w || x;
    r.useEffect(() => {
        w && F ? U(!0) : F || U(!1);
    }, [w, F]);
    let B = r.useCallback(() => {
            U(!1);
        }, []),
        H = (0, d.j)({ shouldShow: w, onExitComplete: B });
    if (!F && (w || !x)) return t;
    if (null == t || (!E && !r.isValidElement(t))) return null;
    let j = C ?? (0, c.Xj)(n),
        Y = H((e, t) =>
            t
                ? (0, i.jsx)(u.R, {
                      isVisible: w,
                      isRendered: V,
                      targetElementRef: M,
                      targetElement: R,
                      anchorRef: N,
                      id: L,
                      content: G,
                      position: g,
                      align: A,
                      spacing: I,
                      caretConfig: y,
                      layerContext: T ?? k,
                      animationStyle: e,
                      positionKey: j,
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [P, v || null == G || "" === G ? null : (0, i.jsx)(s.A, { id: L, children: G }), Y],
    });
}
