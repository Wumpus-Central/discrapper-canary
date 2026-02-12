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
    m = n(743898),
    p = n(3651),
    g =
        (((i = {})[(i.PostSidebar = 0)] = "PostSidebar"),
        (i[(i.ThreadSidebar = 1)] = "ThreadSidebar"),
        (i[(i.CallChatSidebar = 2)] = "CallChatSidebar"),
        (i[(i.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (i[(i.HomeSidebar = 4)] = "HomeSidebar"),
        i);
function _(e) {
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
    return (0, l.jsx)("div", { onMouseDown: r, className: p.Di });
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
        [x, C] = s.useState(A.Ay[f]),
        E = s.useCallback(
            (e) => {
                u.Ay.updatedUnsyncedSettings({ [f]: e });
            },
            [f],
        ),
        I = (0, m.P)({ maxWidth: n, minWidth: 450 }),
        b = (0, c.rdh)(d.A.modules.chat.RESIZE_HANDLE_WIDTH),
        N = (0, o.clamp)(x, 450, n),
        S = I ? N : N + b;
    s.useEffect(() => {
        i?.(N, I);
    }, [N, i, I]);
    let T = h ?? s.Fragment;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !I && (0, l.jsx)("div", { style: { minWidth: S } }),
            (0, l.jsx)(T, {
                children: (0, l.jsxs)("div", {
                    className: r()(p.PA, { [p.R]: !1 }),
                    children: [
                        (0, l.jsx)("div", { className: r()(p.Uc, { [p.DU]: I, [p.iK]: !I }), style: { width: S } }),
                        !I &&
                            (0, l.jsx)(_, {
                                minWidth: 450,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: C,
                                onResizeEnd: E,
                            }),
                        (0, l.jsx)("div", {
                            ref: g,
                            className: r()(p.kL, { [p.DU]: I }),
                            style: { width: N },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
