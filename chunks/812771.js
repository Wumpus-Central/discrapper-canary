n.d(t, { A: () => x, X: () => p });
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
    g = n(743898),
    m = n(3651),
    p =
        (((i = {})[(i.PostSidebar = 0)] = "PostSidebar"),
        (i[(i.ThreadSidebar = 1)] = "ThreadSidebar"),
        (i[(i.CallChatSidebar = 2)] = "CallChatSidebar"),
        (i[(i.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (i[(i.HomeSidebar = 4)] = "HomeSidebar"),
        (i[(i.ParticipantsSidebar = 5)] = "ParticipantsSidebar"),
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
    return (0, l.jsx)("div", { onMouseDown: r, className: m.Di });
}
function x(e) {
    let { sidebarType: t, maxWidth: n, onWidthChange: i, children: a, floatingLayer: h } = e,
        p = s.useRef(null),
        x = (function (e) {
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
                    return "callParticipantsSidebarWidth";
            }
        })(t),
        [f, E] = s.useState(A.Ay[x]),
        C = s.useCallback(
            (e) => {
                u.Ay.updatedUnsyncedSettings({ [x]: e });
            },
            [x],
        ),
        I = 5 === t ? 360 : 450,
        S = (0, g.P)({ maxWidth: n, minWidth: I }),
        b = (0, c.rdh)(d.A.modules.chat.RESIZE_HANDLE_WIDTH),
        N = (0, o.clamp)(f, I, n),
        T = S ? N : N + b;
    s.useEffect(() => {
        i?.(N, S);
    }, [N, i, S]);
    let j = h ?? s.Fragment;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !S && (0, l.jsx)("div", { style: { minWidth: T } }),
            (0, l.jsx)(j, {
                children: (0, l.jsxs)("div", {
                    className: r()(m.PA, { [m.R]: !1 }),
                    children: [
                        (0, l.jsx)("div", { className: r()(m.Uc, { [m.DU]: S, [m.iK]: !S }), style: { width: T } }),
                        !S &&
                            (0, l.jsx)(_, { minWidth: I, maxWidth: n, resizableNode: p, onResize: E, onResizeEnd: C }),
                        (0, l.jsx)("div", {
                            ref: p,
                            className: r()(m.kL, { [m.DU]: S }),
                            style: { width: N },
                            children: a,
                        }),
                    ],
                }),
            }),
        ],
    });
}
