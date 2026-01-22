n.d(t, { A: () => E }), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(397927),
    a = n(770178),
    c = n(765548),
    u = n(261331),
    d = n(457775),
    f = n(650583),
    m = n(790191);
function p(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function v(e, t, n) {
    return n.left + (e / t) * n.width;
}
function E(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: o,
            interactionEnabled: E,
            backgroundColor: g,
            playerState: h,
            preloadedBuffers: b,
            duration: y,
            maxSeekableTime: O,
            onClick: S,
            onScrubBack: _,
            onScrubForward: C,
        } = e,
        [x, A] = l.useState(null),
        [j, T] = l.useState(null),
        [D, w] = l.useState(null),
        [N, P] = l.useState(!1),
        I = l.useRef(null),
        L = (e) => {
            (I.current = e), A(e);
        };
    l.useEffect(() => {
        null != x && (null == O ? w(null) : w(v(O, y, x)));
    }, [x, O, y]);
    let R = (0, c.A)((e) => {
            L(e.contentRect);
        }),
        k = (0, a.w)(R);
    l.useLayoutEffect(() => {
        null != k.current && L(k.current.getBoundingClientRect());
    }, [k]),
        l.useEffect(() => {
            let e = () => {
                null != k.current && L(k.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [k]);
    let M = (e) => {
            T(e.clientX);
        },
        V = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === f.N$.ArrowLeft && null != _
                    ? (e.preventDefault(), e.stopPropagation(), _())
                    : t === f.N$.ArrowRight && null != C && (e.preventDefault(), e.stopPropagation(), C());
            },
            [_, C],
        ),
        Q = null != j && null != x ? p(j, x, y) : 0,
        U = (0, d.rB)(Q),
        F = null != x ? x.right - v((n / 100) * y, y, x) : null,
        B = null != j && null != x ? x.right - j : null,
        K = null != D && null != x ? x.right - D : null;
    return (0, r.jsxs)("div", {
        className: m.jD,
        ref: k,
        children: [
            (0, r.jsxs)(s.DUT, {
                className: i()(m.KF, { [m.uc]: E }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    E && null != S && S(p(e.clientX, e.currentTarget.getBoundingClientRect(), y));
                },
                onMouseEnter: (e) => {
                    E && (null != k.current && L(k.current.getBoundingClientRect()), P(!0), M(e));
                },
                onMouseLeave: (e) => {
                    E && (P(!1), T(null));
                },
                onMouseMove: (e) => {
                    E && N && M(e);
                },
                onKeyDown: V,
                tabIndex: E ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12,
                    },
                },
                children: [
                    null == b
                        ? void 0
                        : b.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: i()(m.r, m.Wf, { [m.yz]: N }),
                                      style: {
                                          width: "".concat(100 * e.size, "%"),
                                          left: "".concat(100 * e.start, "%"),
                                      },
                                  },
                                  "".concat(e.start, ":").concat(e.size),
                              ),
                          ),
                    !E &&
                        null != K &&
                        K > 0 &&
                        (0, r.jsx)("div", {
                            className: i()(m.YK, m.Wf),
                            style: {
                                right: null != K ? "".concat(K, "px") : "auto",
                                opacity: +(null != K),
                            },
                        }),
                    (0, r.jsx)(s.kej, {
                        className: i()(m.qB, m.Wf),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: null != g ? g : void 0,
                        size: N ? s.kej.Sizes.XSMALL : s.kej.Sizes.XXSMALL,
                        animate: o,
                    }),
                    N &&
                        null != U &&
                        t &&
                        (0, r.jsx)(s.Text, {
                            className: m.Ey,
                            variant: "text-xs/normal",
                            style: {
                                right: null != B ? "".concat(B - 10, "px") : "auto",
                                color: "#FFFFFF",
                            },
                            children: U,
                        }),
                    N &&
                        E &&
                        null != F &&
                        (0, r.jsx)("div", {
                            className: m.Ub,
                            style: { right: "".concat(F - 6, "px") },
                        }),
                ],
            }),
            h !== u.Q6.ENDED &&
                (0, r.jsx)("div", {
                    className: m.pN,
                    style: { width: "".concat(n, "%") },
                }),
        ],
    });
}
