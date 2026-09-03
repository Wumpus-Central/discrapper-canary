a.d(i, { A: () => g, X: () => R });
var n,
    t = a(477900),
    s = a(582128),
    d = a(503698),
    r = a.n(d),
    l = a(435558),
    o = a(661531),
    u = a(602853),
    c = a(817281),
    h = a(761929),
    b = a(742023),
    m = a(743898),
    S = a(909735),
    f = a(53569),
    R =
        (((n = {})[(n.PostSidebar = 0)] = "PostSidebar"),
        (n[(n.ThreadSidebar = 1)] = "ThreadSidebar"),
        (n[(n.CallChatSidebar = 2)] = "CallChatSidebar"),
        (n[(n.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (n[(n.HomeSidebar = 4)] = "HomeSidebar"),
        n);
function C(e) {
    let { resizableNode: i, onResize: a, onResizeEnd: n, maxWidth: s, minWidth: d } = e,
        r = (0, h.A)({
            minDimension: d,
            maxDimension: s,
            resizableDomNodeRef: i,
            onElementResize: a,
            onElementResizeEnd: n,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, t.jsx)("div", { onMouseDown: r, className: f.Di });
}
function g(e) {
    let { sidebarType: i, maxWidth: a, onWidthChange: n, children: d, floatingLayer: h } = e,
        R = s.useRef(null),
        g = (function (e) {
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
        [W, p] = s.useState(b.Ay[g]),
        x = s.useCallback(
            (e) => {
                c.Ay.updatedUnsyncedSettings({ [g]: e });
            },
            [g],
        ),
        D = (0, m.P)({ maxWidth: a, minWidth: 450 }),
        E = (0, u.r)(o.A.modules.chat.RESIZE_HANDLE_WIDTH),
        j = (0, S.f4)("ChannelChatResizableSidebar") && (1 === i || 0 === i),
        N = (0, l.clamp)(W, 450, a),
        z = N + (D || j ? 0 : E);
    s.useEffect(() => {
        n?.(N, D);
    }, [N, n, D]);
    let A = h ?? s.Fragment;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            !D && (0, t.jsx)("div", { style: { minWidth: z } }),
            (0, t.jsx)(A, {
                children: (0, t.jsxs)("div", {
                    className: r()(f.PA, { [f.aW]: j }),
                    children: [
                        (0, t.jsx)("div", { className: r()(f.Uc, { [f.DU]: D, [f.iK]: !D }), style: { width: z } }),
                        (0, t.jsx)("div", {
                            ref: R,
                            className: r()(f.kL, { [f.DU]: D }),
                            style: { width: N },
                            children: d,
                        }),
                        !D &&
                            (0, t.jsx)(C, {
                                minWidth: 450,
                                maxWidth: a,
                                resizableNode: R,
                                onResize: p,
                                onResizeEnd: x,
                            }),
                    ],
                }),
            }),
        ],
    });
}
