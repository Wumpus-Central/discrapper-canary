n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(493683),
    a = n(726521),
    o = n(868807),
    s = n(388032);
function c(e) {
    let { channel: t, onReportClick: n, onReportSubmit: c, onMouseEnter: u, onMouseLeave: d } = e,
        { error: p, loaded: h, message: f } = (0, o.a)(t);
    if (null == f && (h || p)) return null;
    let m = () => {
        (null == c || c(), l.Z.closePrivateChannel(t.id));
    };
    return (0, r.jsx)(i.zxk, {
        variant: 'critical-primary',
        size: 'sm',
        disabled: null == f,
        onClick: (e) => {
            (e.stopPropagation(), null == n || n(), null != f && (0, a.WL)(f, m));
        },
        onMouseEnter: u,
        onMouseLeave: d,
        text: s.intl.string(s.t['+78Pfn'])
    });
}
