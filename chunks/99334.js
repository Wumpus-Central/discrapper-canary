t.d(e, { default: () => d });
var r = t(255367);
t(73800);
var a = t(481060),
    c = t(239091),
    l = t(108843),
    i = t(100527),
    o = t(299206),
    s = t(852245),
    u = t(388032);
let d = (0, l.Z)(
    function (n) {
        let { channel: e, onSelect: t } = n,
            l = (0, s.Z)(e),
            i = (0, o.Z)({
                id: e.id,
                label: u.intl.string(u.t.gFHI3t)
            });
        return (0, r.jsxs)(a.v2r, {
            navId: 'channel-context',
            onClose: c.Zy,
            'aria-label': u.intl.string(u.t.Xm41aW),
            onSelect: t,
            children: [(0, r.jsx)(a.kSQ, { children: l }), (0, r.jsx)(a.kSQ, { children: i })]
        });
    },
    [i.Z.CONTEXT_MENU, i.Z.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU]
);
