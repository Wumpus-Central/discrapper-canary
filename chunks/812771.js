"use strict";
n.d(t, { A: () => f, X: () => g });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    c = n(827734),
    d = n(397927),
    u = n(817281),
    h = n(761929),
    A = n(964404),
    m = n(743898),
    p = n(83181),
    g =
        (((i = {})[(i.PostSidebar = 0)] = "PostSidebar"),
        (i[(i.ThreadSidebar = 1)] = "ThreadSidebar"),
        (i[(i.CallChatSidebar = 2)] = "CallChatSidebar"),
        (i[(i.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (i[(i.HomeSidebar = 4)] = "HomeSidebar"),
        i);
function _(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l, minWidth: r } = e,
        a = (0, h.A)({
            minDimension: r,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, s.jsx)("div", { onMouseDown: a, className: p.Di });
}
function f(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: r, floatingLayer: h } = e,
        g = l.useRef(null),
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
        [x, C] = l.useState(A.Ay[f]),
        E = l.useCallback(
            (e) => {
                u.Ay.updatedUnsyncedSettings({ [f]: e });
            },
            [f],
        ),
        I = (0, m.P)({ maxWidth: n, minWidth: 450 }),
        N = (0, d.rdh)(c.A.modules.chat.RESIZE_HANDLE_WIDTH),
        b = (0, o.clamp)(x, 450, n),
        S = I ? b : b + N;
    l.useEffect(() => {
        i?.(b, I);
    }, [b, i, I]);
    let T = h ?? l.Fragment;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            !I && (0, s.jsx)("div", { style: { minWidth: S } }),
            (0, s.jsx)(T, {
                children: (0, s.jsxs)("div", {
                    className: a()(p.PA, { [p.R]: !1 }),
                    children: [
                        (0, s.jsx)("div", { className: a()(p.Uc, { [p.DU]: I, [p.iK]: !I }), style: { width: S } }),
                        !I &&
                            (0, s.jsx)(_, {
                                minWidth: 450,
                                maxWidth: n,
                                resizableNode: g,
                                onResize: C,
                                onResizeEnd: E,
                            }),
                        (0, s.jsx)("div", {
                            ref: g,
                            className: a()(p.kL, { [p.DU]: I }),
                            style: { width: b },
                            children: r,
                        }),
                    ],
                }),
            }),
        ],
    });
}
