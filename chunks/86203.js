n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(493683),
    o = n(726521),
    a = n(868807),
    s = n(388032);
function c(e) {
    let { channel: t, buttonSize: n = i.PhG.TINY, color: c = i.zxk.Colors.RED, className: u, onReportClick: d, onReportSubmit: p, onMouseEnter: h, onMouseLeave: f } = e,
        { error: m, loaded: g, message: b } = (0, a.a)(t);
    if (null == b && (g || m)) return null;
    let y = () => {
        null == p || p(), l.Z.closePrivateChannel(t.id);
    };
    return (0, r.jsx)(i.zxk, {
        className: u,
        size: n,
        color: c,
        disabled: null == b,
        onClick: (e) => {
            e.stopPropagation(), null == d || d(), null != b && (0, o.WL)(b, y);
        },
        onMouseEnter: h,
        onMouseLeave: f,
        children: s.NW.string(s.t['+78Pfn'])
    });
}
