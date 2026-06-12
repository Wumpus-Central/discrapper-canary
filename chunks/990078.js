"use strict";
n.d(t, { m: () => f });
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
    h = n(310855);
function f(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: f,
            __unsupportedReactNodeAsText: p,
            asContainer: E = !1,
            tag: m = "span",
            position: g = "top",
            align: A = "center",
            spacing: I,
            layerContext: T,
            targetElementRef: S,
            anchorRef: y,
            caretConfig: N,
            positionKey: v,
            ariaHidden: C = !1,
            ...R
        } = e,
        [O, b] = r.useState(null);
    r.useLayoutEffect(() => {
        null != y && b(y.current);
    }, [y]);
    let D = r.useCallback(
            (e) => {
                null == y && b(e), (0, c.cZ)(S, e);
            },
            [S, y],
        ),
        {
            tooltipId: L,
            isVisible: w,
            targetElementRef: M,
            trigger: P,
        } = (0, _.D)({ children: t, targetElementRef: D, asContainer: E, containerTag: m, ariaHidden: C, ...R }),
        [x, k] = r.useState(!1),
        { defaultLayerContext: U } = (0, a.G9)(),
        G = r.useMemo(
            () =>
                null != p
                    ? p
                    : null == n || "" === n
                      ? null
                      : null != f && "" !== f
                        ? (0, i.jsxs)("div", {
                              className: h.Cl,
                              children: [
                                  (0, i.jsx)(o.E, { variant: "text-sm/medium", children: n }),
                                  (0, i.jsx)(l.e, { shortcut: f }),
                              ],
                          })
                        : n,
            [n, f, p],
        ),
        F = null != G && ("string" != typeof G || "" !== G),
        V = w || x;
    r.useEffect(() => {
        w && F ? k(!0) : F || k(!1);
    }, [w, F]);
    let B = r.useCallback(() => {
            k(!1);
        }, []),
        H = (0, d.j)({ shouldShow: w, onExitComplete: B });
    if (!F && (w || !x)) return t;
    if (null == t || (!E && !r.isValidElement(t))) return null;
    let j = v ?? (0, c.Xj)(n),
        Y = H((e, t) =>
            t
                ? (0, i.jsx)(u.R, {
                      isVisible: w,
                      isRendered: V,
                      targetElementRef: M,
                      targetElement: O,
                      anchorRef: y,
                      id: L,
                      content: G,
                      position: g,
                      align: A,
                      spacing: I,
                      caretConfig: N,
                      layerContext: T ?? U,
                      animationStyle: e,
                      positionKey: j,
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [P, C || null == G || "" === G ? null : (0, i.jsx)(s.A, { id: L, children: G }), Y],
    });
}
