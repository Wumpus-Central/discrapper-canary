n.d(t, { A: () => A, X: () => C });
var a,
    r = n(477900),
    i = n(582128),
    s = n(503698),
    d = n.n(s),
    l = n(435558),
    u = n(661531),
    c = n(602853),
    o = n(817281),
    b = n(761929),
    h = n(925166),
    f = n(964404),
    S = n(743898),
    m = n(909735),
    p = n(53569),
    C =
        (((a = {})[(a.PostSidebar = 0)] = "PostSidebar"),
        (a[(a.ThreadSidebar = 1)] = "ThreadSidebar"),
        (a[(a.CallChatSidebar = 2)] = "CallChatSidebar"),
        (a[(a.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (a[(a.HomeSidebar = 4)] = "HomeSidebar"),
        (a[(a.StageAudienceSidebar = 5)] = "StageAudienceSidebar"),
        a);
function g(e) {
    let { resizableNode: t, onApply: n, onEmit: a, onEnd: i, capturePointer: s } = e,
        d = (0, b.A)({
            resizableDomNodeRef: t,
            onApplyDimension: n,
            onElementResize: a,
            onElementResizeEnd: i,
            orientation: b.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: s,
        });
    return s ? (0, r.jsx)(R, { handleResizeStart: d }) : (0, r.jsx)("div", { onMouseDown: d, className: p.Di });
}
function R(e) {
    let { handleResizeStart: t } = e,
        n = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), t(e));
            },
            [t],
        );
    return (0, r.jsx)("div", { onPointerDown: n, className: p.Di });
}
function A(e) {
    let {
            sidebarType: t,
            maxWidth: n,
            onWidthChange: a,
            children: s,
            floatingLayer: b,
            capturePointer: C = !1,
            minWidth: R = 450,
        } = e,
        A = i.useRef(null),
        x = i.useRef(null),
        E = i.useRef(null),
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
                case 5:
                    return "stageAudienceSidebarWidth";
            }
        })(t),
        D = (0, S.P)({ maxWidth: n, minWidth: R }),
        N = (0, c.r)(u.A.modules.chat.RESIZE_HANDLE_WIDTH),
        k = (0, m.f4)("ChannelChatResizableSidebar") && (1 === t || 0 === t),
        y = h.A.useConfig({ location: "ChannelChatResizableSidebar" }).sidebarEnabled && !__OVERLAY__,
        v = i.useRef(Math.max(f.Ay[j] ?? R, R)),
        P = i.useCallback(
            (e) => {
                let t = (0, l.clamp)(e, R, n);
                ((v.current = t), null != A.current && (A.current.style.width = `${t}px`));
                let a = D || k ? t : t + N;
                (null != x.current && (x.current.style.minWidth = `${a}px`),
                    null != E.current && (E.current.style.width = `${a}px`));
            },
            [R, n, D, k, N],
        ),
        _ = i.useCallback(() => {
            a?.(v.current, D);
        }, [a, D]),
        W = i.useCallback(() => {
            o.Ay.updatedUnsyncedSettings({ [j]: v.current });
        }, [j]);
    i.useLayoutEffect(() => {
        (P(v.current), _());
    }, [P, _]);
    let w = b ?? i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !D && (0, r.jsx)("div", { ref: x }),
            (0, r.jsx)(w, {
                children: (0, r.jsxs)("div", {
                    className: d()(p.PA, { [p.Nc]: k, [p.cg]: !y }),
                    children: [
                        (0, r.jsx)("div", { ref: E, className: d()(p.Uc, { [p.DU]: D, [p.iK]: !D }) }),
                        !D && (0, r.jsx)(g, { resizableNode: A, onApply: P, onEmit: _, onEnd: W, capturePointer: C }),
                        (0, r.jsx)("div", { ref: A, className: d()(p.kL, { [p.DU]: D }), children: s }),
                    ],
                }),
            }),
        ],
    });
}
