i.d(e, { default: () => h });
var a = i(627968),
    n = i(64700),
    s = i(17928),
    c = i(980707),
    o = i(477782),
    r = i(442433),
    d = i(684013),
    l = i(592598),
    u = i(672396),
    f = i(375708);
function h(t) {
    let { onSelect: e, onClose: i } = t,
        h = (0, s.bG)([l.A], () => l.A.isNotificationDisabled(u.KS.TextChat)),
        p = n.useRef(i);
    return (
        n.useEffect(() => {
            p.current = i;
        }),
        n.useEffect(() => () => p.current?.(), []),
        (0, a.jsx)(c.W, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-notifications-widget-context-menu",
            onClose: r.Z_,
            "aria-label": f.intl.string(f.t.tPfVWi),
            onSelect: e,
            children: (0, a.jsx)(o.sL, {
                label: f.intl.string(f.t.Fy5kPp),
                checked: !h,
                id: "overlay-text-chat-notifications",
                action: () => d.A.setNotificationDisabled(u.KS.TextChat, !h),
            }),
        })
    );
}
