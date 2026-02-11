"use strict";
n.d(t, { m: () => f });
var r = n(627968),
    i = n(64700),
    a = n(140735),
    s = n(158954),
    o = n(397927),
    l = n(717995),
    u = n(348275),
    c = n(505679),
    d = n(747781),
    _ = n(69042);
function f(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: f,
            __unsupportedReactNodeAsText: h,
            asContainer: p = !1,
            tag: g = "span",
            position: E = "top",
            align: A = "center",
            spacing: I,
            layerContext: T,
            targetElementRef: y,
            anchorRef: S,
            caretConfig: v,
            positionKey: C,
            ariaHidden: b = !1,
            ...N
        } = e,
        [R, O] = i.useState(null);
    i.useLayoutEffect(() => {
        null != S && O(S.current);
    }, [S]);
    let D = i.useCallback(
            (e) => {
                null == S && O(e), (0, u.cZ)(y, e);
            },
            [y, S],
        ),
        {
            tooltipId: L,
            isVisible: w,
            targetElementRef: x,
            trigger: P,
        } = (0, d.D)({ children: t, targetElementRef: D, asContainer: p, containerTag: g, ariaHidden: b, ...N }),
        [M, k] = i.useState(!1),
        { defaultLayerContext: U } = (0, s.G98)(),
        G = i.useMemo(
            () =>
                null != h
                    ? h
                    : null == n || "" === n
                      ? null
                      : null != f && "" !== f
                        ? (0, r.jsxs)("div", {
                              className: _.Cl,
                              children: [
                                  (0, r.jsx)(o.Text, { variant: "text-sm/medium", children: n }),
                                  (0, r.jsx)(o.e7I, { shortcut: f }),
                              ],
                          })
                        : n,
            [n, f, h],
        ),
        F = null != G && ("string" != typeof G || "" !== G),
        V = w || M;
    i.useEffect(() => {
        w && F ? k(!0) : F || k(!1);
    }, [w, F]);
    let B = i.useCallback(() => {
            k(!1);
        }, []),
        j = (0, c.j)({ shouldShow: w, onExitComplete: B });
    if (!F && (w || !M)) return t;
    if (null == t || (!p && !i.isValidElement(t))) return null;
    let H = C ?? (0, u.Xj)(n),
        Y = j((e, t) =>
            t
                ? (0, r.jsx)(l.R, {
                      isVisible: w,
                      isRendered: V,
                      targetElementRef: x,
                      targetElement: R,
                      anchorRef: S,
                      id: L,
                      content: G,
                      position: E,
                      align: A,
                      spacing: I,
                      caretConfig: v,
                      layerContext: T ?? U,
                      animationStyle: e,
                      positionKey: H,
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [P, b || null == G || "" === G ? null : (0, r.jsx)(a.A, { id: L, children: G }), Y],
    });
}
