n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(493683),
    r = n(726521),
    s = n(718538),
    o = n(868807),
    c = n(388032);
function d(e) {
    let { channel: t, buttonSize: n = l.PhG.TINY, color: d = l.zxk.Colors.RED, className: u, onReportClick: h, onReportSubmit: p, onMouseEnter: m, onMouseLeave: f } = e,
        { error: g, loaded: _ } = (0, o.a)(t),
        C = t.isDM() ? t.getRecipientId() : null,
        x = (0, s.V)(t.id, C);
    if (null == x && (_ || g)) return null;
    let v = () => {
        null == p || p(), a.Z.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(l.zxk, {
        className: u,
        size: n,
        color: d,
        disabled: null == x,
        onClick: (e) => {
            e.stopPropagation(), null == h || h(), null != x && (0, r.WL)(x, v);
        },
        onMouseEnter: m,
        onMouseLeave: f,
        children: c.intl.string(c.t['+78Pfn'])
    });
}
