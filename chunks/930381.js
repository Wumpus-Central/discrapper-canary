e.d(a, { default: () => c });
var n = e(200651);
e(192379);
var i = e(481060),
    r = e(239091),
    s = e(13245),
    l = e(145597),
    o = e(388032);
function c(t) {
    let { onSelect: a, layoutId: e = l.OVERLAY_LAYOUT_ID, version: c } = t;
    return (0, n.jsx)(i.v2r, {
        navId: 'overlay',
        onClose: r.Zy,
        'aria-label': o.intl.string(o.t.tPfVWl),
        onSelect: a,
        children: (0, n.jsx)(i.sNh, {
            id: 'reset',
            label: o.intl.string(o.t['hW+EMj']),
            action: (t) => {
                t.stopPropagation(), s.Z.resetDefaultLayout(e, c);
            }
        })
    });
}
