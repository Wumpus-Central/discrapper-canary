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
    _ = n(894524);
function f(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: f,
            __unsupportedReactNodeAsText: p,
            asContainer: h = !1,
            tag: m = "span",
            position: g = "top",
            align: E = "center",
            spacing: A,
            layerContext: I,
            targetElementRef: T,
            anchorRef: y,
            caretConfig: S,
            positionKey: v,
            ariaHidden: C = !1,
            ...b
        } = e,
        [N, R] = i.useState(null);
    i.useLayoutEffect(() => {
        null != y && R(y.current);
    }, [y]);
    let O = i.useCallback(
            (e) => {
                null == y && R(e), (0, u.cZ)(T, e);
            },
            [T, y],
        ),
        {
            tooltipId: D,
            isVisible: L,
            targetElementRef: w,
            trigger: x,
        } = (0, d.D)({ children: t, targetElementRef: O, asContainer: h, containerTag: m, ariaHidden: C, ...b }),
        [P, M] = i.useState(!1),
        { defaultLayerContext: k } = (0, s.G98)(),
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
        V = L || P;
    i.useEffect(() => {
        L && G ? M(!0) : G || M(!1);
    }, [L, G]);
    let F = i.useCallback(() => {
            M(!1);
        }, []),
        B = (0, c.j)({ shouldShow: L, onExitComplete: F });
    if (!G && (L || !P)) return t;
    if (null == t || (!h && !i.isValidElement(t))) return null;
    let j = v ?? (0, u.Xj)(n),
        H = B((e, t) =>
            t
                ? (0, r.jsx)(l.R, {
                      isVisible: L,
                      isRendered: V,
                      targetElementRef: w,
                      targetElement: N,
                      anchorRef: y,
                      id: D,
                      content: U,
                      position: g,
                      align: E,
                      spacing: A,
                      caretConfig: S,
                      layerContext: I ?? k,
                      animationStyle: e,
                      positionKey: j,
                  })
                : null,
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [x, C || null == U || "" === U ? null : (0, r.jsx)(a.A, { id: D, children: U }), H],
    });
}
