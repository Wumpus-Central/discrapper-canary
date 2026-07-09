"use strict";
n.d(t, { m: () => A });
var i = n(627968),
    r = n(64700),
    a = n(140735),
    s = n(460890),
    l = n(834730),
    o = n(475358),
    d = n(237140),
    c = n(348275),
    u = n(505679),
    _ = n(521754),
    E = n(74567);
function A(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: A,
            __unsupportedReactNodeAsText: h,
            asContainer: I = !1,
            tag: f = "span",
            position: p = "top",
            align: T = "center",
            spacing: m,
            layerContext: g,
            targetElementRef: S,
            anchorRef: N,
            caretConfig: C,
            positionKey: R,
            ariaHidden: O = !1,
            ...L
        } = e,
        [D, y] = r.useState(null);
    r.useLayoutEffect(() => {
        null != N && y(N.current);
    }, [N]);
    let v = r.useCallback(
            (e) => {
                null == N && y(e), (0, c.cZ)(S, e);
            },
            [S, N],
        ),
        {
            tooltipId: b,
            isVisible: M,
            targetElementRef: P,
            trigger: U,
        } = (0, _.D)({ children: t, targetElementRef: v, asContainer: I, containerTag: f, ariaHidden: O, ...L }),
        [w, G] = r.useState(!1),
        { defaultLayerContext: x } = (0, s.G9)(),
        k = r.useMemo(
            () =>
                null != h
                    ? h
                    : null == n || "" === n
                      ? null
                      : null != A && "" !== A
                        ? (0, i.jsxs)("div", {
                              className: E.Cl,
                              children: [
                                  (0, i.jsx)(l.E, { variant: "text-sm/medium", children: n }),
                                  (0, i.jsx)(o.e, { shortcut: A }),
                              ],
                          })
                        : n,
            [n, A, h],
        ),
        F = null != k && ("string" != typeof k || "" !== k),
        V = M || w;
    r.useEffect(() => {
        M && F ? G(!0) : F || G(!1);
    }, [M, F]);
    let B = r.useCallback(() => {
            G(!1);
        }, []),
        H = (0, u.j)({ shouldShow: M, onExitComplete: B });
    if (!F && (M || !w)) return t;
    if (null == t || (!I && !r.isValidElement(t))) return null;
    let j = R ?? (0, c.Xj)(n),
        W = H((e, t) =>
            t
                ? (0, i.jsx)(d.R, {
                      isVisible: M,
                      isRendered: V,
                      targetElementRef: P,
                      targetElement: D,
                      anchorRef: N,
                      id: b,
                      content: k,
                      position: p,
                      align: T,
                      spacing: m,
                      caretConfig: C,
                      layerContext: g ?? x,
                      animationStyle: e,
                      positionKey: j,
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [U, O || null == k || "" === k ? null : (0, i.jsx)(a.A, { id: b, children: k }), W],
    });
}
