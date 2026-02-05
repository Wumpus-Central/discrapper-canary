n.d(t, { A: () => f });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(397927),
    o = n(770178),
    u = n(765548),
    c = n(261331),
    d = n(894307),
    m = n(650583),
    E = n(790191);
function f(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: i,
            interactionEnabled: f,
            backgroundColor: p,
            playerState: v,
            preloadedBuffers: h,
            duration: _,
            maxSeekableTime: C,
            onClick: g,
            onScrubBack: S,
            onScrubForward: A,
            "data-testid": x,
        } = e,
        [T, b] = s.useState(null),
        [D, N] = s.useState(null),
        [y, I] = s.useState(null),
        [L, R] = s.useState(!1),
        M = s.useRef(null),
        j = (e) => {
            (M.current = e), b(e);
        };
    s.useEffect(() => {
        null != T && (null == C ? I(null) : I((0, d.DX)(C, _, T)));
    }, [T, C, _]);
    let O = (0, u.A)((e) => {
            j(e.contentRect);
        }),
        k = (0, o.w)(O);
    s.useLayoutEffect(() => {
        null != k.current && j(k.current.getBoundingClientRect());
    }, [k]),
        s.useEffect(() => {
            let e = () => {
                null != k.current && j(k.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [k]);
    let w = (e) => {
            N(e.clientX);
        },
        V = s.useCallback(
            (e) => {
                let { key: t } = e;
                t === m.N$.ArrowLeft && null != S
                    ? (e.preventDefault(), e.stopPropagation(), S())
                    : t === m.N$.ArrowRight && null != A && (e.preventDefault(), e.stopPropagation(), A());
            },
            [S, A],
        ),
        P = null != D && null != T ? (0, d.hc)(D, T, _) : 0,
        Q = (0, d.rB)(P),
        U = null != T ? T.right - (0, d.DX)((n / 100) * _, _, T) : null,
        F = null != D && null != T ? T.right - D : null,
        B = null != y && null != T ? T.right - y : null;
    return (0, r.jsxs)("div", {
        className: E.jD,
        ref: k,
        "data-testid": x,
        children: [
            (0, r.jsxs)(a.DUT, {
                className: l()(E.KF, { [E.uc]: f }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    f && null != g && g((0, d.hc)(e.clientX, e.currentTarget.getBoundingClientRect(), _));
                },
                onMouseEnter: (e) => {
                    f && (null != k.current && j(k.current.getBoundingClientRect()), R(!0), w(e));
                },
                onMouseLeave: (e) => {
                    f && (R(!1), N(null));
                },
                onMouseMove: (e) => {
                    f && L && w(e);
                },
                onKeyDown: V,
                tabIndex: f ? void 0 : -1,
                focusProps: { offset: { top: 12, bottom: 12 } },
                children: [
                    h?.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: l()(E.r, E.Wf, { [E.yz]: L }),
                                style: { width: `${100 * e.size}%`, left: `${100 * e.start}%` },
                            },
                            `${e.start}:${e.size}`,
                        ),
                    ),
                    !f &&
                        null != B &&
                        B > 0 &&
                        (0, r.jsx)("div", {
                            className: l()(E.YK, E.Wf),
                            style: { right: null != B ? `${B}px` : "auto", opacity: +(null != B) },
                        }),
                    (0, r.jsx)(a.iCB, {
                        className: l()(E.qB, E.Wf),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: p ?? void 0,
                        size: L ? a.iCB.Sizes.XSMALL : a.iCB.Sizes.XXSMALL,
                        animate: i,
                    }),
                    L &&
                        null != Q &&
                        t &&
                        (0, r.jsx)(a.Text, {
                            className: E.Ey,
                            variant: "text-xs/normal",
                            style: { right: null != F ? `${F - 10}px` : "auto", color: "#FFFFFF" },
                            children: Q,
                        }),
                    L && f && null != U && (0, r.jsx)("div", { className: E.Ub, style: { right: `${U - 6}px` } }),
                ],
            }),
            v !== c.Q6.ENDED && (0, r.jsx)("div", { className: E.pN, style: { width: `${n}%` } }),
        ],
    });
}
