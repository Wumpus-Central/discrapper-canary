"use strict";
n.d(t, { m: () => E });
var i = n(477900),
    r = n(582128),
    a = n(140735),
    s = n(475358),
    l = n(834730),
    o = n(255434),
    d = n(710778),
    c = n(280336),
    u = n(194981),
    _ = n(850132);
function E(e) {
    let {
            children: t,
            text: n,
            keyboardShortcut: E,
            __unsupportedReactNodeAsText: A,
            asContainer: h = !1,
            tag: I = "span",
            position: f = "top",
            align: p = "center",
            spacing: T,
            targetElementRef: m,
            anchorRef: g,
            caretConfig: S,
            positionKey: N,
            ariaHidden: C = !1,
            ...O
        } = e,
        [R, L] = r.useState(null);
    r.useLayoutEffect(() => {
        null != g && L(g.current);
    }, [g]);
    let y = r.useCallback(
            (e) => {
                null == g && L(e), (0, d.cZ)(m, e);
            },
            [m, g],
        ),
        {
            tooltipId: D,
            isVisible: v,
            targetElementRef: b,
            trigger: M,
        } = (0, u.D)({ children: t, targetElementRef: y, asContainer: h, containerTag: I, ariaHidden: C, ...O }),
        [P, U] = r.useState(!1),
        w = r.useMemo(
            () =>
                null != A
                    ? A
                    : null == n || "" === n
                      ? null
                      : null != E && "" !== E
                        ? (0, i.jsxs)("div", {
                              className: _.Cl,
                              children: [
                                  (0, i.jsx)(l.E, { variant: "text-sm/medium", children: n }),
                                  (0, i.jsx)(s.e, { shortcut: E }),
                              ],
                          })
                        : n,
            [n, E, A],
        ),
        G = null != w && ("string" != typeof w || "" !== w),
        x = v || P;
    r.useEffect(() => {
        v && G ? U(!0) : G || U(!1);
    }, [v, G]);
    let k = r.useCallback(() => {
            U(!1);
        }, []),
        F = (0, c.j)({ shouldShow: v, onExitComplete: k });
    if (!G && (v || !P)) return t;
    if (null == t || (!h && !r.isValidElement(t))) return null;
    let V = N ?? (0, d.Xj)(n),
        B = F((e, t) =>
            t
                ? (0, i.jsx)(o.R, {
                      isVisible: v,
                      isRendered: x,
                      targetElementRef: b,
                      targetElement: R,
                      anchorRef: g,
                      id: D,
                      content: w,
                      position: f,
                      align: p,
                      spacing: T,
                      caretConfig: S,
                      animationStyle: e,
                      positionKey: V,
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [M, C || null == w || "" === w ? null : (0, i.jsx)(a.A, { id: D, children: w }), B],
    });
}
