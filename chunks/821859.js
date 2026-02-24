n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(876230),
    o = n(61491),
    u = n(397927),
    c = n(972441),
    d = n(23373);
function m(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: s,
            interactionEnabled: m,
            backgroundColor: p,
            playerState: E,
            preloadedBuffers: f,
            duration: v,
            maxSeekableTime: h,
            onClick: x,
            onScrubBack: g,
            onScrubForward: S,
            "data-testid": C,
        } = e,
        {
            contRef: A,
            boundingRect: _,
            handleMouseEnter: b,
            handleMouseLeave: T,
            handleMouseMove: y,
            handleKeyDown: N,
            hoveredAtX: D,
            maxSeekableX: L,
            isHovering: j,
            handleClick: I,
        } = (0, c.A)({
            onScrubBack: g,
            onScrubForward: S,
            maxSeekableTime: h,
            interactionEnabled: m,
            duration: v,
            onClick: x,
        }),
        M = i.useMemo(() => (null == D || null == _ ? null : (0, o.rB)((0, o.hc)(D, _, v))), [D, _, v]),
        k = i.useMemo(() => {
            if (null != _) return (0, o.TO)(n, _);
        }, [n, _]);
    return (0, r.jsxs)("div", {
        className: d.jD,
        ref: A,
        "data-testid": C,
        style: { "--custom-timeline-height": "4px", "--custom-initial-timeline-height": "4px" },
        children: [
            (0, r.jsxs)(u.DUT, {
                className: l()(d.KF, { [d.uc]: m }),
                ignoreKeyPress: !0,
                onClick: I,
                onMouseEnter: b,
                onMouseLeave: T,
                onMouseMove: y,
                onKeyDown: N,
                tabIndex: m ? void 0 : -1,
                children: [
                    f?.map((e) =>
                        (0, r.jsx)(
                            "div",
                            {
                                className: l()(d.r, d.KR),
                                style: { width: `${100 * e.size}%`, left: `${100 * e.start}%` },
                            },
                            `${e.start}:${e.size}`,
                        ),
                    ),
                    !m &&
                        null != L &&
                        L > 0 &&
                        (0, r.jsx)("div", {
                            className: l()(d.YK, d.KR),
                            style: { width: null != L ? `${L}px` : "auto", opacity: +(null != L) },
                        }),
                    (0, r.jsx)(u.iCB, {
                        className: l()(d.qB, d.KR),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: p ?? void 0,
                        size: u.iCB.Sizes.XSMALL,
                        animate: s,
                    }),
                    j &&
                        null != M &&
                        t &&
                        (0, r.jsx)(u.Text, {
                            className: d.Ey,
                            variant: "text-xs/normal",
                            color: "always-white",
                            style: { left: null != D ? `${D}px` : "auto" },
                            children: M,
                        }),
                    j && m && null != k && (0, r.jsx)("div", { className: d.Ub, style: { left: `${k}px` } }),
                ],
            }),
            E !== a.Q6.ENDED && (0, r.jsx)("div", { className: d.pN, style: { width: `${n}%` } }),
        ],
    });
}
