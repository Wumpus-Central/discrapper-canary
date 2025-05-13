e.d(a, { default: () => c });
var n = e(255367);
e(73800);
var i = e(481060),
    l = e(239091),
    r = e(13245),
    s = e(145597),
    o = e(757744),
    u = e(388032);
function c(t) {
    let { onSelect: a, layoutId: e = s.OVERLAY_LAYOUT_ID, version: c } = t;
    return (0, n.jsx)(i.v2r, {
        navId: 'overlay',
        onClose: l.Zy,
        'aria-label': u.intl.string(u.t.tPfVWl),
        onSelect: a,
        children: (0, n.jsx)(i.sNh, {
            id: 'reset',
            label: u.intl.string(u.t['hW+EMj']),
            action: (t) => {
                t.stopPropagation(), r.Z.resetDefaultLayout(e, null != c ? c : o.bv);
            }
        })
    });
}
