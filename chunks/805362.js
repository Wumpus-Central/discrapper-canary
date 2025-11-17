e.d(n, { default: () => c });
var l = e(54381);
e(473749);
var i = e(481060),
    r = e(239091),
    a = e(358085),
    o = e(905041),
    s = e(388032);
function c(t) {
    let { href: n, textContent: e, onSelect: c } = t,
        u = (0, o.Z)(n, e);
    return a.isPlatformEmbedded && null != u
        ? (0, l.jsx)(i.v2r, {
              navId: "image-context",
              onClose: r.Zy,
              "aria-label": s.intl.string(s.t.Zow2V5),
              onSelect: c,
              children: (0, l.jsx)(i.kSQ, { children: u }),
          })
        : null;
}
