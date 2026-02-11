"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(770178),
    u = n(765548),
    c = n(261331),
    d = n(894307),
    _ = n(650583),
    f = n(790191);
function h(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: h,
            backgroundColor: p,
            playerState: g,
            preloadedBuffers: E,
            duration: A,
            maxSeekableTime: I,
            onClick: T,
            onScrubBack: y,
            onScrubForward: S,
            "data-testid": v,
        } = e,
        [C, b] = i.useState(null),
        [N, R] = i.useState(null),
        [O, D] = i.useState(null),
        [L, w] = i.useState(!1),
        x = i.useRef(null),
        P = (e) => {
            (x.current = e), b(e);
        };
    i.useEffect(() => {
        null != C && (null == I ? D(null) : D((0, d.DX)(I, A, C)));
    }, [C, I, A]);
    let M = (0, u.A)((e) => {
            P(e.contentRect);
        }),
        k = (0, l.w)(M);
    i.useLayoutEffect(() => {
        null != k.current && P(k.current.getBoundingClientRect());
    }, [k]),
        i.useEffect(() => {
            let e = () => {
                null != k.current && P(k.current.getBoundingClientRect());
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [k]);
    let U = (e) => {
            R(e.clientX);
        },
        G = (e) => {
            h && (null != k.current && P(k.current.getBoundingClientRect()), w(!0), U(e));
        },
        F = (e) => {
            h && (w(!1), R(null));
        },
        V = (e) => {
            h && L && U(e);
        },
        B = i.useCallback(
            (e) => {
                let { key: t } = e;
                t === _.N$.ArrowLeft && null != y
                    ? (e.preventDefault(), e.stopPropagation(), y())
                    : t === _.N$.ArrowRight && null != S && (e.preventDefault(), e.stopPropagation(), S());
            },
            [y, S],
        ),
        j = (e) => {
            h && null != T && T((0, d.hc)(e.clientX, e.currentTarget.getBoundingClientRect(), A));
        },
        H = null != N && null != C ? (0, d.hc)(N, C, A) : 0,
        Y = (0, d.rB)(H),
        W = null != C ? C.right - (0, d.DX)((n / 100) * A, A, C) : null,
        K = null != N && null != C ? C.right - N : null,
        $ = null != O && null != C ? C.right - O : null;
    return (0, r.jsxs)("div", {
        className: f.jD,
        ref: k,
        "data-testid": v,
        children: [
            (0, r.jsxs)(o.DUT, {
                className: s()(f.KF, { [f.uc]: h }),
                ignoreKeyPress: !0,
                onClick: j,
                onMouseEnter: G,
                onMouseLeave: F,
                onMouseMove: V,
                onKeyDown: B,
                tabIndex: h ? void 0 : -1,
                focusProps: { offset: { top: 12, bottom: 12 } },
                children: [
                    E?.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: s()(f.r, f.Wf, { [f.yz]: L }),
                                style: { width: `${100 * e.size}%`, left: `${100 * e.start}%` },
                            },
                            `${e.start}:${e.size}`,
                        ),
                    ),
                    !h &&
                        null != $ &&
                        $ > 0 &&
                        (0, r.jsx)("div", {
                            className: s()(f.YK, f.Wf),
                            style: { right: null != $ ? `${$}px` : "auto", opacity: +(null != $) },
                        }),
                    (0, r.jsx)(o.iCB, {
                        className: s()(f.qB, f.Wf),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: p ?? void 0,
                        size: L ? o.iCB.Sizes.XSMALL : o.iCB.Sizes.XXSMALL,
                        animate: a,
                    }),
                    L &&
                        null != Y &&
                        t &&
                        (0, r.jsx)(o.Text, {
                            className: f.Ey,
                            variant: "text-xs/normal",
                            style: { right: null != K ? `${K - 10}px` : "auto", color: "#FFFFFF" },
                            children: Y,
                        }),
                    L && h && null != W && (0, r.jsx)("div", { className: f.Ub, style: { right: `${W - 6}px` } }),
                ],
            }),
            g !== c.Q6.ENDED && (0, r.jsx)("div", { className: f.pN, style: { width: `${n}%` } }),
        ],
    });
}
