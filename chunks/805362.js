t.d(e, { default: () => c });
var i = t(255367);
t(73800);
var l = t(481060),
    a = t(239091),
    r = t(358085),
    d = t(905041),
    s = t(388032);
function c(n) {
    let { href: e, textContent: t, onSelect: c } = n,
        o = (0, d.Z)(e, t);
    return r.isPlatformEmbedded && null != o
        ? (0, i.jsx)(l.v2r, {
              navId: "image-context",
              onClose: a.Zy,
              "aria-label": s.intl.string(s.t.Zow2V1),
              onSelect: c,
              children: (0, i.jsx)(l.kSQ, { children: o }),
          })
        : null;
}
