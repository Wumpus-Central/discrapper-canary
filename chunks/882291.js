n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(61491),
    o = n(397927),
    u = n(972441),
    c = n(245853),
    d = n(261331),
    m = n(654487),
    p = n(712119);
function E(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: s,
            interactionEnabled: E,
            backgroundColor: f,
            playerState: v,
            preloadedBuffers: h,
            duration: x,
            maxSeekableTime: g,
            onClick: S,
            onScrubBack: C,
            onScrubForward: A,
            "data-testid": _,
        } = e,
        { enabled: b } = c.jS.useConfig({ location: m.rE.VIDEO_MODAL }),
        {
            contRef: T,
            boundingRect: y,
            handleMouseEnter: N,
            handleMouseLeave: D,
            handleMouseMove: L,
            handleKeyDown: j,
            hoveredAtX: I,
            maxSeekableX: M,
            isHovering: k,
            handleClick: R,
        } = (0, u.A)({
            onScrubBack: C,
            onScrubForward: A,
            maxSeekableTime: g,
            interactionEnabled: E,
            duration: x,
            onClick: S,
        }),
        w = i.useMemo(() => (null == I || null == y ? null : (0, a.rB)((0, a.hc)(I, y, x))), [I, y, x]),
        O = i.useMemo(() => {
            if (null != y) return (0, a.TO)(n, y);
        }, [n, y]),
        P = b ? p.KR : p.Fv;
    return (0, r.jsxs)("div", {
        className: p.jD,
        ref: T,
        "data-testid": _,
        style: {
            "--custom-timeline-height": `${b || k ? 4 : 2}px`,
            "--custom-initial-timeline-height": `${b ? 4 : 2}px`,
        },
        children: [
            (0, r.jsxs)(o.DUT, {
                className: l()(p.KF, { [p.uc]: E }),
                ignoreKeyPress: !0,
                onClick: R,
                onMouseEnter: N,
                onMouseLeave: D,
                onMouseMove: L,
                onKeyDown: j,
                tabIndex: E ? void 0 : -1,
                children: [
                    h?.map((e) =>
                        (0, r.jsx)(
                            "div",
                            { className: l()(p.r, P), style: { width: `${100 * e.size}%`, left: `${100 * e.start}%` } },
                            `${e.start}:${e.size}`,
                        ),
                    ),
                    !E &&
                        null != M &&
                        M > 0 &&
                        (0, r.jsx)("div", {
                            className: l()(p.YK, P),
                            style: { width: null != M ? `${M}px` : "auto", opacity: +(null != M) },
                        }),
                    (0, r.jsx)(o.iCB, {
                        className: l()(p.qB, P),
                        percent: n,
                        foregroundColor: "#FFFFFF",
                        backgroundColor: f ?? void 0,
                        size: b || k ? o.iCB.Sizes.XSMALL : o.iCB.Sizes.XXSMALL,
                        animate: s,
                    }),
                    k &&
                        null != w &&
                        t &&
                        (0, r.jsx)(o.Text, {
                            className: p.Ey,
                            variant: "text-xs/normal",
                            color: "always-white",
                            style: { left: null != I ? `${I}px` : "auto" },
                            children: w,
                        }),
                    k && E && null != O && (0, r.jsx)("div", { className: p.Ub, style: { left: `${O}px` } }),
                ],
            }),
            v !== d.Q6.ENDED && (0, r.jsx)("div", { className: p.pN, style: { width: `${n}%` } }),
        ],
    });
}
