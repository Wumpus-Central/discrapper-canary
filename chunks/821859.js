n.d(t, { A: () => E });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(876230),
    o = n(61491),
    u = n(397927),
    c = n(770178),
    d = n(765548),
    m = n(650583),
    p = n(712119);
function E(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: i,
            interactionEnabled: E,
            backgroundColor: f,
            playerState: v,
            preloadedBuffers: h,
            duration: g,
            maxSeekableTime: S,
            onClick: C,
            onScrubBack: A,
            onScrubForward: x,
            "data-testid": _,
        } = e,
        [b, T] = l.useState(null),
        [y, N] = l.useState(null),
        [D, L] = l.useState(null),
        [I, j] = l.useState(!1),
        R = l.useRef(null),
        k = (e) => {
            (R.current = e), T(e);
        };
    l.useEffect(() => {
        null != b && (null == S ? L(null) : L((0, o.DX)(S, g, b)));
    }, [b, S, g]);
    let w = (0, d.A)((e) => {
            k(e.contentRect);
        }),
        M = (0, c.w)(w);
    l.useLayoutEffect(() => {
        null != M.current && k(M.current.getBoundingClientRect());
    }, [M]),
        l.useEffect(() => {
            let e = () => {
                null != M.current && k(M.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [M]);
    let O = (e) => {
            N(e.clientX);
        },
        P = l.useCallback(
            (e) => {
                let { key: t } = e;
                t === m.N$.ArrowLeft && null != A
                    ? (e.preventDefault(), e.stopPropagation(), A())
                    : t === m.N$.ArrowRight && null != x && (e.preventDefault(), e.stopPropagation(), x());
            },
            [A, x],
        ),
        V = null != y && null != b ? (0, o.hc)(y, b, g) : 0,
        Q = (0, o.rB)(V),
        U = null != b ? b.right - (0, o.DX)((n / 100) * g, g, b) : null,
        B = null != y && null != b ? b.right - y : null,
        F = null != D && null != b ? b.right - D : null;
    return (0, r.jsxs)("div", {
        className: p.jD,
        ref: M,
        "data-testid": _,
        children: [
            (0, r.jsxs)(u.DUT, {
                className: s()(p.KF, { [p.uc]: E }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    E && null != C && C((0, o.hc)(e.clientX, e.currentTarget.getBoundingClientRect(), g));
                },
                onMouseEnter: (e) => {
                    E && (null != M.current && k(M.current.getBoundingClientRect()), j(!0), O(e));
                },
                onMouseLeave: (e) => {
                    E && (j(!1), N(null));
                },
                onMouseMove: (e) => {
                    E && I && O(e);
                },
                onKeyDown: P,
                tabIndex: E ? void 0 : -1,
                focusProps: { offset: { top: 12, bottom: 12 } },
                children: [
                    h?.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: s()(p.r, p.Wf, { [p.yz]: I }),
                                style: { width: `${100 * e.size}%`, left: `${100 * e.start}%` },
                            },
                            `${e.start}:${e.size}`,
                        ),
                    ),
                    !E &&
                        null != F &&
                        F > 0 &&
                        (0, r.jsx)("div", {
                            className: s()(p.YK, p.Wf),
                            style: { right: null != F ? `${F}px` : "auto", opacity: +(null != F) },
                        }),
                    (0, r.jsx)(u.iCB, {
                        className: s()(p.qB, p.Wf),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: f ?? void 0,
                        size: I ? u.iCB.Sizes.XSMALL : u.iCB.Sizes.XXSMALL,
                        animate: i,
                    }),
                    I &&
                        null != Q &&
                        t &&
                        (0, r.jsx)(u.Text, {
                            className: p.Ey,
                            variant: "text-xs/normal",
                            style: { right: null != B ? `${B - 10}px` : "auto", color: "#FFFFFF" },
                            children: Q,
                        }),
                    I && E && null != U && (0, r.jsx)("div", { className: p.Ub, style: { right: `${U - 6}px` } }),
                ],
            }),
            v !== a.Q6.ENDED && (0, r.jsx)("div", { className: p.pN, style: { width: `${n}%` } }),
        ],
    });
}
