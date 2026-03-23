"use strict";
n.d(t, { A: () => f, X: () => p });
var i,
    s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(735438),
    c = n(827734),
    d = n(397927),
    u = n(817281),
    h = n(761929),
    A = n(964404),
    m = n(743898),
    _ = n(3651),
    p =
        (((i = {})[(i.PostSidebar = 0)] = "PostSidebar"),
        (i[(i.ThreadSidebar = 1)] = "ThreadSidebar"),
        (i[(i.CallChatSidebar = 2)] = "CallChatSidebar"),
        (i[(i.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (i[(i.HomeSidebar = 4)] = "HomeSidebar"),
        i);
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i, maxWidth: l, minWidth: a } = e,
        r = (0, h.A)({
            minDimension: a,
            maxDimension: l,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, s.jsx)("div", { onMouseDown: r, className: _.Di });
}
function f(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: a, floatingLayer: h } = e,
        p = l.useRef(null),
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
                    className: r()(_.PA, { [_.R]: !1 }),
                    children: [
                        (0, s.jsx)("div", { className: r()(_.Uc, { [_.DU]: I, [_.iK]: !I }), style: { width: S } }),
                        !I &&
                            (0, s.jsx)(g, {
                                minWidth: 450,
                                maxWidth: n,
                                resizableNode: p,
                                onResize: C,
                                onResizeEnd: E,
                            }),
                        (0, s.jsx)("div", {
                            ref: p,
                            className: r()(_.kL, { [_.DU]: I }),
                            style: { width: b },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
