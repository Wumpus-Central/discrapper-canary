n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(493683),
    a = n(726521),
    s = n(868807),
    l = n(388032);
function c(e) {
    let { channel: t, onReportClick: n, onReportSubmit: c, onMouseEnter: u, onMouseLeave: d } = e,
        { error: f, loaded: _, message: p } = (0, s.a)(t);
    if (null == p && (_ || f)) return null;
    let h = () => {
            (null == c || c(), o.Z.closePrivateChannel(t.id));
        },
        m = (e) => {
            (e.stopPropagation(), null == n || n(), null != p && (0, a.WL)(p, h));
        };
    return (0, r.jsx)(i.zxk, {
        variant: 'critical-primary',
        size: 'sm',
        disabled: null == p,
        onClick: m,
        onMouseEnter: u,
        onMouseLeave: d,
        text: l.intl.string(l.t['+78Pfn'])
    });
}
