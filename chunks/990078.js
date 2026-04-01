"use strict";
n.d(t, { m: () => f });
var r = n(627968),
    i = n(64700),
    s = n(140735),
    a = n(158954),
    o = n(397927),
    l = n(717995),
    u = n(348275),
    c = n(505679),
    d = n(747781),
    _ = n(958263);
function f(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: f,
            __unsupportedReactNodeAsText: p,
            asContainer: h = !1,
            tag: m = "span",
            position: E = "top",
            align: g = "center",
            spacing: A,
            layerContext: I,
            targetElementRef: T,
            anchorRef: S,
            caretConfig: y,
            positionKey: v,
            ariaHidden: N = !1,
            ...C
        } = e,
        [R, O] = i.useState(null);
    i.useLayoutEffect(() => {
        null != S && O(S.current);
    }, [S]);
    let b = i.useCallback(
            (e) => {
                null == S && O(e), (0, u.cZ)(T, e);
            },
            [T, S],
        ),
        {
            tooltipId: D,
            isVisible: L,
            targetElementRef: w,
            trigger: M,
        } = (0, d.D)({ children: t, targetElementRef: b, asContainer: h, containerTag: m, ariaHidden: N, ...C }),
        [P, x] = i.useState(!1),
        { defaultLayerContext: k } = (0, a.G98)(),
        U = i.useMemo(
            () =>
                null != p
                    ? p
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
            [n, f, p],
        ),
        G = null != U && ("string" != typeof U || "" !== U),
        F = L || P;
    i.useEffect(() => {
        L && G ? x(!0) : G || x(!1);
    }, [L, G]);
    let V = i.useCallback(() => {
            x(!1);
        }, []),
        B = (0, c.j)({ shouldShow: L, onExitComplete: V });
    if (!G && (L || !P)) return t;
    if (null == t || (!h && !i.isValidElement(t))) return null;
    let H = v ?? (0, u.Xj)(n),
        j = B((e, t) =>
            t
                ? (0, r.jsx)(l.R, {
                      isVisible: L,
                      isRendered: F,
                      targetElementRef: w,
                      targetElement: R,
                      anchorRef: S,
                      id: D,
                      content: U,
                      position: E,
                      align: g,
                      spacing: A,
                      caretConfig: y,
                      layerContext: I ?? k,
                      animationStyle: e,
                      positionKey: H,
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [M, N || null == U || "" === U ? null : (0, r.jsx)(s.A, { id: D, children: U }), j],
    });
}
