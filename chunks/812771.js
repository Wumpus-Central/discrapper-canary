n.d(t, { A: () => x, X: () => g });
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
    f = n(76268),
    S = n(964404),
    m = n(743898),
    p = n(909735),
    C = n(53569),
    g =
        (((a = {})[(a.PostSidebar = 0)] = "PostSidebar"),
        (a[(a.ThreadSidebar = 1)] = "ThreadSidebar"),
        (a[(a.CallChatSidebar = 2)] = "CallChatSidebar"),
        (a[(a.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (a[(a.HomeSidebar = 4)] = "HomeSidebar"),
        (a[(a.StageAudienceSidebar = 5)] = "StageAudienceSidebar"),
        a);
function R(e) {
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
    return s ? (0, r.jsx)(A, { handleResizeStart: d }) : (0, r.jsx)("div", { onMouseDown: d, className: C.Di });
}
function A(e) {
    let { handleResizeStart: t } = e,
        n = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), t(e));
            },
            [t],
        );
    return (0, r.jsx)("div", { onPointerDown: n, className: C.Di });
}
function x(e) {
    let {
            sidebarType: t,
            maxWidth: n,
            onWidthChange: a,
            children: s,
            floatingLayer: b,
            capturePointer: g = !1,
            minWidth: A = 450,
        } = e,
        x = i.useRef(null),
        E = i.useRef(null),
        j = i.useRef(null),
        D = (function (e) {
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
        N = (0, m.P)({ maxWidth: n, minWidth: A }),
        k = (0, c.r)(u.A.modules.chat.RESIZE_HANDLE_WIDTH),
        y = (0, p.f4)("ChannelChatResizableSidebar") && (1 === t || 0 === t),
        v = h.A.useConfig({ location: "ChannelChatResizableSidebar" }),
        P = !((0, f.A)() && v.sidebarEnabled) || v.appBarToggleEnabled,
        W = i.useRef(Math.max(S.Ay[D] ?? A, A)),
        w = i.useCallback(
            (e) => {
                let t = (0, l.clamp)(e, A, n);
                ((W.current = t), null != x.current && (x.current.style.width = `${t}px`));
                let a = N || y ? t : t + k;
                (null != E.current && (E.current.style.minWidth = `${a}px`),
                    null != j.current && (j.current.style.width = `${a}px`));
            },
            [A, n, N, y, k],
        ),
        z = i.useCallback(() => {
            a?.(W.current, N);
        }, [a, N]),
        T = i.useCallback(() => {
            o.Ay.updatedUnsyncedSettings({ [D]: W.current });
        }, [D]);
    i.useLayoutEffect(() => {
        (w(W.current), z());
    }, [w, z]);
    let L = b ?? i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !N && (0, r.jsx)("div", { ref: E }),
            (0, r.jsx)(L, {
                children: (0, r.jsxs)("div", {
                    className: d()(C.PA, { [C.Nc]: y, [C.cg]: P }),
                    children: [
                        (0, r.jsx)("div", { ref: j, className: d()(C.Uc, { [C.DU]: N, [C.iK]: !N }) }),
                        !N && (0, r.jsx)(R, { resizableNode: x, onApply: w, onEmit: z, onEnd: T, capturePointer: g }),
                        (0, r.jsx)("div", { ref: x, className: d()(C.kL, { [C.DU]: N }), children: s }),
                    ],
                }),
            }),
        ],
    });
}
