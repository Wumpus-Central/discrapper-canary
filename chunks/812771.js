s.d(i, { A: () => x, X: () => R });
var t,
    a = s(627968),
    d = s(64700),
    r = s(503698),
    n = s.n(r),
    l = s(735438),
    h = s(661531),
    o = s(602853),
    c = s(817281),
    u = s(761929),
    m = s(742023),
    b = s(743898),
    S = s(318974),
    R =
        (((t = {})[(t.PostSidebar = 0)] = "PostSidebar"),
        (t[(t.ThreadSidebar = 1)] = "ThreadSidebar"),
        (t[(t.CallChatSidebar = 2)] = "CallChatSidebar"),
        (t[(t.MessageRequestSidebar = 3)] = "MessageRequestSidebar"),
        (t[(t.HomeSidebar = 4)] = "HomeSidebar"),
        t);
function p(e) {
    let { resizableNode: i, onResize: s, onResizeEnd: t, maxWidth: d, minWidth: r } = e,
        n = (0, u.A)({
            minDimension: r,
            maxDimension: d,
            resizableDomNodeRef: i,
            onElementResize: s,
            onElementResizeEnd: t,
            orientation: u.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, a.jsx)("div", { onMouseDown: n, className: S.Di });
}
function x(e) {
    let { sidebarType: i, maxWidth: s, onWidthChange: t, children: r, floatingLayer: u } = e,
        R = d.useRef(null),
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
            }
        })(i),
        [D, E] = d.useState(m.Ay[x]),
        W = d.useCallback(
            (e) => {
                c.Ay.updatedUnsyncedSettings({ [x]: e });
            },
            [x],
        ),
        f = (0, b.P)({ maxWidth: s, minWidth: 450 }),
        j = (0, o.r)(h.A.modules.chat.RESIZE_HANDLE_WIDTH),
        A = (0, l.clamp)(D, 450, s),
        C = f ? A : A + j;
    d.useEffect(() => {
        t?.(A, f);
    }, [A, t, f]);
    let N = u ?? d.Fragment;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            !f && (0, a.jsx)("div", { style: { minWidth: C } }),
            (0, a.jsx)(N, {
                children: (0, a.jsxs)("div", {
                    className: S.PA,
                    children: [
                        (0, a.jsx)("div", { className: n()(S.Uc, { [S.DU]: f, [S.iK]: !f }), style: { width: C } }),
                        !f &&
                            (0, a.jsx)(p, {
                                minWidth: 450,
                                maxWidth: s,
                                resizableNode: R,
                                onResize: E,
                                onResizeEnd: W,
                            }),
                        (0, a.jsx)("div", {
                            ref: R,
                            className: n()(S.kL, { [S.DU]: f }),
                            style: { width: A },
                            children: r,
                        }),
                    ],
                }),
            }),
        ],
    });
}
