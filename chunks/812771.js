t.d(n, { A: () => x, X: () => S });
var r,
    a = t(477900),
    i = t(582128),
    s = t(503698),
    l = t.n(s),
    d = t(435558),
    u = t(661531),
    c = t(602853),
    o = t(817281),
    b = t(761929),
    h = t(925166),
    f = t(742023),
    m = t(743898),
    p = t(909735),
    C = t(53569),
    S =
        (((r = {})[(r.PostSidebar = 0)] = "PostSidebar"),
        (r[(r.ThreadSidebar = 1)] = "ThreadSidebar"),
        (r[(r.CallChatSidebar = 2)] = "CallChatSidebar"),
        (r[(r.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (r[(r.HomeSidebar = 4)] = "HomeSidebar"),
        r);
function R(e) {
    let { resizableNode: n, onApply: t, onEmit: r, onEnd: i, capturePointer: s } = e,
        l = (0, b.A)({
            resizableDomNodeRef: n,
            onApplyDimension: t,
            onElementResize: r,
            onElementResizeEnd: i,
            orientation: b.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: s,
        });
    return s ? (0, a.jsx)(g, { handleResizeStart: l }) : (0, a.jsx)("div", { onMouseDown: l, className: C.Di });
}
function g(e) {
    let { handleResizeStart: n } = e,
        t = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), n(e));
            },
            [n],
        );
    return (0, a.jsx)("div", { onPointerDown: t, className: C.Di });
}
function x(e) {
    let { sidebarType: n, maxWidth: t, onWidthChange: r, children: s, floatingLayer: b, capturePointer: S = !1 } = e,
        g = i.useRef(null),
        x = i.useRef(null),
        E = i.useRef(null),
        A = (function (e) {
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
        })(n),
        j = (0, m.P)({ maxWidth: t, minWidth: 450 }),
        D = (0, c.r)(u.A.modules.chat.RESIZE_HANDLE_WIDTH),
        N = (0, p.f4)("ChannelChatResizableSidebar") && (1 === n || 0 === n),
        k = h.A.useConfig({ location: "ChannelChatResizableSidebar" }).sidebarEnabled && !__OVERLAY__,
        y = i.useRef(f.Ay[A] ?? 450),
        v = i.useCallback(
            (e) => {
                let n = (0, d.clamp)(e, 450, t);
                (y.current = n), null != g.current && (g.current.style.width = `${n}px`);
                let r = j || N ? n : n + D;
                null != x.current && (x.current.style.minWidth = `${r}px`),
                    null != E.current && (E.current.style.width = `${r}px`);
            },
            [450, t, j, N, D],
        ),
        P = i.useCallback(() => {
            r?.(y.current, j);
        }, [r, j]),
        _ = i.useCallback(() => {
            o.Ay.updatedUnsyncedSettings({ [A]: y.current });
        }, [A]);
    i.useLayoutEffect(() => {
        v(y.current), P();
    }, [v, P]);
    let W = b ?? i.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !j && (0, a.jsx)("div", { ref: x }),
            (0, a.jsx)(W, {
                children: (0, a.jsxs)("div", {
                    className: l()(C.PA, { [C.Nc]: N, [C.cg]: !k }),
                    children: [
                        (0, a.jsx)("div", { ref: E, className: l()(C.Uc, { [C.DU]: j, [C.iK]: !j }) }),
                        !j && (0, a.jsx)(R, { resizableNode: g, onApply: v, onEmit: P, onEnd: _, capturePointer: S }),
                        (0, a.jsx)("div", { ref: g, className: l()(C.kL, { [C.DU]: j }), children: s }),
                    ],
                }),
            }),
        ],
    });
}
