var i = n(477900),
    r = n(582128),
    a = n(140735),
    s = n(475358),
    l = n(834730),
    o = n(160733),
    d = n(710778),
    c = n(280336),
    u = n(402883),
    _ = n(770915);
n.d(
    t,
    {},
    {
        m: function (e) {
            let {
                    children: t,
                    text: n,
                    keyboardShortcut: E,
                    __unsupportedReactNodeAsText: A,
                    asContainer: h = !1,
                    tag: f = "span",
                    position: I = "top",
                    align: p = "center",
                    spacing: m,
                    targetElementRef: g,
                    anchorRef: T,
                    caretConfig: S,
                    positionKey: N,
                    ariaHidden: C = !1,
                    ...O
                } = e,
                [R, L] = r.useState(null);
            r.useLayoutEffect(() => {
                null != T && L(T.current);
            }, [T]);
            let y = r.useCallback(
                    (e) => {
                        (null == T && L(e), (0, d.cZ)(g, e));
                    },
                    [g, T],
                ),
                {
                    tooltipId: D,
                    isVisible: b,
                    targetElementRef: v,
                    trigger: P,
                } = (0, u.D)({
                    children: t,
                    targetElementRef: y,
                    asContainer: h,
                    containerTag: f,
                    ariaHidden: C,
                    ...O,
                }),
                [M, U] = r.useState(!1),
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
                                          (0, i.jsx)(l.E, { variant: "body-sm/medium", children: n }),
                                          (0, i.jsx)(s.e, { shortcut: E }),
                                      ],
                                  })
                                : n,
                    [n, E, A],
                ),
                G = null != w && ("string" != typeof w || "" !== w),
                x = b || M;
            r.useEffect(() => {
                b && G ? U(!0) : G || U(!1);
            }, [b, G]);
            let k = r.useCallback(() => {
                    U(!1);
                }, []),
                F = (0, c.j)({ shouldShow: b, onExitComplete: k });
            if (!G && (b || !M)) return t;
            if (null == t || (!h && !r.isValidElement(t))) return null;
            let B = N ?? (0, d.Xj)(n),
                V = F((e, t) =>
                    t
                        ? (0, i.jsx)(o.R, {
                              isVisible: b,
                              isRendered: x,
                              targetElementRef: v,
                              targetElement: R,
                              anchorRef: T,
                              id: D,
                              content: w,
                              position: I,
                              align: p,
                              spacing: m,
                              caretConfig: S,
                              animationStyle: e,
                              positionKey: B,
                          })
                        : null,
                );
            return (0, i.jsxs)(i.Fragment, {
                children: [P, C || null == w || "" === w ? null : (0, i.jsx)(a.A, { id: D, children: w }), V],
            });
        },
    },
);
