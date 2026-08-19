s.d(i, { A: () => p, X: () => R });
var t,
    a = s(477900),
    d = s(582128),
    n = s(503698),
    r = s.n(n),
    l = s(435558),
    o = s(661531),
    c = s(602853),
    h = s(817281),
    u = s(761929),
    m = s(742023),
    b = s(743898),
    S = s(53569),
    R =
        (((t = {})[(t.PostSidebar = 0)] = "PostSidebar"),
        (t[(t.ThreadSidebar = 1)] = "ThreadSidebar"),
        (t[(t.CallChatSidebar = 2)] = "CallChatSidebar"),
        (t[(t.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (t[(t.HomeSidebar = 4)] = "HomeSidebar"),
        t);
function f(e) {
    let { resizableNode: i, onResize: s, onResizeEnd: t, maxWidth: d, minWidth: n } = e,
        r = (0, u.A)({
            minDimension: n,
            maxDimension: d,
            resizableDomNodeRef: i,
            onElementResize: s,
            onElementResizeEnd: t,
            orientation: u.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, a.jsx)("div", { onMouseDown: r, className: S.Di });
}
function p(e) {
    let { sidebarType: i, maxWidth: s, onWidthChange: t, children: n, floatingLayer: u } = e,
        R = d.useRef(null),
        p = (function (e) {
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
        })(i),
        [x, D] = d.useState(m.Ay[p]),
        E = d.useCallback(
            (e) => {
                h.Ay.updatedUnsyncedSettings({ [p]: e });
            },
            [p],
        ),
        W = (0, b.P)({ maxWidth: s, minWidth: 450 }),
        j = (0, c.r)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        A = (0, l.clamp)(x, 450, s),
        C = W ? A : A + j;
    d.useEffect(() => {
        t?.(A, W);
    }, [A, t, W]);
    let N = u ?? d.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !W && (0, a.jsx)("div", { style: { minWidth: C } }),
            (0, a.jsx)(N, {
                children: (0, a.jsxs)("div", {
                    className: S.PA,
                    children: [
                        (0, a.jsx)("div", { className: r()(S.Uc, { [S.DU]: W, [S.iK]: !W }), style: { width: C } }),
                        !W &&
                            (0, a.jsx)(f, {
                                minWidth: 450,
                                maxWidth: s,
                                resizableNode: R,
                                onResize: D,
                                onResizeEnd: E,
                            }),
                        (0, a.jsx)("div", {
                            ref: R,
                            className: r()(S.kL, { [S.DU]: W }),
                            style: { width: A },
                            children: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
