n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(493683),
    a = n(726521),
    o = n(868807),
    s = n(388032);
function c(e) {
    let { channel: t, onReportClick: n, onReportSubmit: c, onMouseEnter: u, onMouseLeave: d } = e,
        { error: p, loaded: f, message: h } = (0, o.a)(t);
    if (null == h && (f || p)) return null;
    let m = () => {
        null == c || c(), l.Z.closePrivateChannel(t.id);
    };
    return (0, r.jsx)(i.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == h,
        onClick: (e) => {
            e.stopPropagation(), null == n || n(), null != h && (0, a.WL)(h, m);
        },
        onMouseEnter: u,
        onMouseLeave: d,
        text: s.intl.string(s.t["+78Pfm"]),
    });
}
