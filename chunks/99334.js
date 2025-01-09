e.r(t);
var a = e(200651);
e(192379);
var c = e(481060),
    i = e(239091),
    l = e(108843),
    r = e(100527),
    u = e(299206),
    s = e(852245),
    o = e(388032);
t.default = (0, l.Z)(
    function (n) {
        let { channel: t, onSelect: e } = n,
            l = (0, s.Z)(t),
            r = (0, u.Z)({
                id: t.id,
                label: o.intl.string(o.t.gFHI3t)
            });
        return (0, a.jsxs)(c.Menu, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': o.intl.string(o.t.Xm41aW),
            onSelect: e,
            children: [(0, a.jsx)(c.MenuGroup, { children: l }), (0, a.jsx)(c.MenuGroup, { children: r })]
        });
    },
    [r.Z.CONTEXT_MENU, r.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU]
);
