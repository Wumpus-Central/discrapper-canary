e.d(a, { default: () => c });
var r = e(200651);
e(192379);
var s = e(481060),
    n = e(239091),
    i = e(13245),
    o = e(145597),
    l = e(388032);
function c(t) {
    let { onSelect: a, layoutId: e = o.OVERLAY_LAYOUT_ID, version: c } = t;
    return (0, r.jsx)(s.v2r, {
        navId: 'overlay',
        onClose: n.Zy,
        'aria-label': l.NW.string(l.t.tPfVWl),
        onSelect: a,
        children: (0, r.jsx)(s.sNh, {
            id: 'reset',
            label: l.NW.string(l.t['hW+EMj']),
            action: (t) => {
                t.stopPropagation(), i.Z.resetDefaultLayout(e, c);
            }
        })
    });
}
