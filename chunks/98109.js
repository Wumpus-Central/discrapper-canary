i.d(e, { default: () => h });
var a = i(477900),
    n = i(582128),
    c = i(17928),
    s = i(980707),
    o = i(477782),
    r = i(442433),
    u = i(222407),
    d = i(592598),
    l = i(672396),
    f = i(660183);
function h(t) {
    let { onSelect: e, onClose: i } = t,
        h = (0, c.bG)([d.A], () => d.A.isNotificationDisabled(l.KS.TextChat)),
        p = n.useRef(i);
    return (
        n.useEffect(() => {
            p.current = i;
        }),
        n.useEffect(() => () => p.current?.(), []),
        (0, a.jsx)(s.W, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-notifications-widget-context-menu",
            onClose: r.Z_,
            "aria-label": f.intl.string(f.t.tPfVWi),
            onSelect: e,
            children: (0, a.jsx)(o.sL, {
                label: f.intl.string(f.t.Fy5kPp),
                checked: !h,
                id: "overlay-text-chat-notifications",
                action: () => (0, u.i)(l.KS.TextChat, !h),
            }),
        })
    );
}
