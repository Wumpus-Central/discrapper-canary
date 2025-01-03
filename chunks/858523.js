n.r(t),
    n.d(t, {
        GlobalDiscoveryServerCardPopout: function () {
            return d;
        },
        default: function () {
            return c;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(239091),
    s = n(299206),
    o = n(388032);
function c(e) {
    let { guild: t, shiftId: n, onSelect: c, closePopout: d, 'aria-label': u } = e,
        h = (0, s.Z)({
            id: t.id,
            label: o.intl.string(o.t['94lLDw']),
            shiftId: n,
            onSuccess: d
        }),
        m = r.useCallback((e) => {
            e.stopPropagation();
        }, []);
    return (0, i.jsx)(l.Clickable, {
        onClick: m,
        children: (0, i.jsx)(l.Menu, {
            onSelect: c,
            navId: 'guild-discovery-context-menu',
            'aria-label': null != u ? u : o.intl.string(o.t.ogxXGh),
            onClose: a.Zy,
            children: (0, i.jsx)(l.MenuGroup, { children: h })
        })
    });
}
let d = (e) => {
    let { guild: t, children: n, onRequestOpen: r, onRequestClose: a } = e;
    return (0, i.jsx)(l.Popout, {
        onRequestOpen: r,
        onRequestClose: a,
        animation: l.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 4,
        align: 'right',
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(c, {
                guild: t,
                closePopout: n
            });
        },
        children: n
    });
};
