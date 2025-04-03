n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(493683),
    o = n(726521),
    a = n(718538),
    s = n(868807),
    c = n(388032);
function u(e) {
    let { channel: t, buttonSize: n = i.PhG.TINY, color: u = i.zxk.Colors.RED, className: d, onReportClick: p, onReportSubmit: h, onMouseEnter: f, onMouseLeave: m } = e,
        { error: g, loaded: b } = (0, s.a)(t),
        _ = t.isDM() ? t.getRecipientId() : null,
        C = (0, a.V)(t.id, _);
    if (null == C && (b || g)) return null;
    let y = () => {
        null == h || h(), l.Z.closePrivateChannel(t.id);
    };
    return (0, r.jsx)(i.zxk, {
        className: d,
        size: n,
        color: u,
        disabled: null == C,
        onClick: (e) => {
            e.stopPropagation(), null == p || p(), null != C && (0, o.WL)(C, y);
        },
        onMouseEnter: f,
        onMouseLeave: m,
        children: c.NW.string(c.t['+78Pfn'])
    });
}
