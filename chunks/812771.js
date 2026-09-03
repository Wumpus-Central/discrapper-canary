n.d(t, { A: () => x, X: () => S });
var r,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    d = n.n(s),
    l = n(435558),
    u = n(661531),
    c = n(602853),
    o = n(817281),
    b = n(761929),
    h = n(742023),
    f = n(743898),
    m = n(909735),
    p = n(53569),
    S =
        (((r = {})[(r.PostSidebar = 0)] = "PostSidebar"),
        (r[(r.ThreadSidebar = 1)] = "ThreadSidebar"),
        (r[(r.CallChatSidebar = 2)] = "CallChatSidebar"),
        (r[(r.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (r[(r.HomeSidebar = 4)] = "HomeSidebar"),
        r);
function C(e) {
    let { resizableNode: t, onApply: n, onEmit: r, onEnd: i, capturePointer: s } = e,
        d = (0, b.A)({
            resizableDomNodeRef: t,
            onApplyDimension: n,
            onElementResize: r,
            onElementResizeEnd: i,
            orientation: b.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: s,
        });
    return s ? (0, a.jsx)(R, { handleResizeStart: d }) : (0, a.jsx)("div", { onMouseDown: d, className: p.Di });
}
function R(e) {
    let { handleResizeStart: t } = e,
        n = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), t(e));
            },
            [t],
        );
    return (0, a.jsx)("div", { onPointerDown: n, className: p.Di });
}
function x(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: r, children: s, floatingLayer: b, capturePointer: S = !1 } = e,
        R = i.useRef(null),
        x = i.useRef(null),
        g = i.useRef(null),
        j = (function (e) {
            switch (e) {
                case 0:
                    return "postSidebarWidth";
                case 1:
                    return "threadSidebarWidth";
                case 2:
                    return "callChatSidebarWidth";
                case 3:
                    return "messageRequestSidebarWidth";
                case 4:
                    return "homeSidebarWidth";
            }
        })(t),
        D = (0, f.P)({ maxWidth: n, minWidth: 450 }),
        E = (0, c.r)(u.A.modules.chat.RESIZE_HANDLE_WIDTH),
        k = (0, m.f4)("ChannelChatResizableSidebar") && (1 === t || 0 === t),
        y = i.useRef(h.Ay[j] ?? 450),
        A = i.useCallback(
            (e) => {
                let t = (0, l.clamp)(e, 450, n);
                (y.current = t), null != R.current && (R.current.style.width = `${t}px`);
                let r = D || k ? t : t + E;
                null != x.current && (x.current.style.minWidth = `${r}px`),
                    null != g.current && (g.current.style.width = `${r}px`);
            },
            [450, n, D, k, E],
        ),
        N = i.useCallback(() => {
            r?.(y.current, D);
        }, [r, D]),
        v = i.useCallback(() => {
            o.Ay.updatedUnsyncedSettings({ [j]: y.current });
        }, [j]);
    i.useLayoutEffect(() => {
        A(y.current), N();
    }, [A, N]);
    let P = b ?? i.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !D && (0, a.jsx)("div", { ref: x }),
            (0, a.jsx)(P, {
                children: (0, a.jsxs)("div", {
                    className: d()(p.PA, { [p.aW]: k }),
                    children: [
                        (0, a.jsx)("div", { ref: g, className: d()(p.Uc, { [p.DU]: D, [p.iK]: !D }) }),
                        !D && (0, a.jsx)(C, { resizableNode: R, onApply: A, onEmit: N, onEnd: v, capturePointer: S }),
                        (0, a.jsx)("div", { ref: R, className: d()(p.kL, { [p.DU]: D }), children: s }),
                    ],
                }),
            }),
        ],
    });
}
