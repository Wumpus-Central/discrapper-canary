n.d(t, { A: () => f, X: () => g });
var i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(735438),
    d = n(827734),
    c = n(397927),
    u = n(817281),
    h = n(761929),
    A = n(964404),
    _ = n(743898),
    m = n(53454),
    g =
        (((i = {})[(i.PostSidebar = 0)] = "PostSidebar"),
        (i[(i.ThreadSidebar = 1)] = "ThreadSidebar"),
        (i[(i.CallChatSidebar = 2)] = "CallChatSidebar"),
        (i[(i.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (i[(i.HomeSidebar = 4)] = "HomeSidebar"),
        i);
function p(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: s, minWidth: a } = e,
        r = (0, h.A)({
            minDimension: a,
            maxDimension: s,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, l.jsx)("div", { onMouseDown: r, className: m.Di });
}
function f(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: a, floatingLayer: h } = e,
        g = s.useRef(null),
        f = (function (e) {
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
        [x, E] = s.useState(A.Ay[f]),
        I = s.useCallback(
            (e) => {
                u.Ay.updatedUnsyncedSettings({ [f]: e });
            },
            [f],
        ),
        C = (0, _.P)({ maxWidth: n, minWidth: 450 }),
        N = (0, c.rdh)(d.A.modules.chat.RESIZE_HANDLE_WIDTH),
        T = (0, o.clamp)(x, 450, n),
        S = C ? T : T + N;
    s.useEffect(() => {
        i?.(T, C);
    }, [T, i, C]);
    let b = h ?? s.Fragment;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !C && (0, l.jsx)("div", { style: { minWidth: S } }),
            (0, l.jsx)(b, {
                children: (0, l.jsxs)("div", {
                    className: r()(m.PA, { [m.R]: !1 }),
                    children: [
                        (0, l.jsx)("div", { className: r()(m.Uc, { [m.DU]: C, [m.iK]: !C }), style: { width: S } }),
                        !C &&
                            (0, l.jsx)(p, {
                                minWidth: 450,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: E,
                                onResizeEnd: I,
                            }),
                        (0, l.jsx)("div", {
                            ref: g,
                            className: r()(m.kL, { [m.DU]: C }),
                            style: { width: T },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
