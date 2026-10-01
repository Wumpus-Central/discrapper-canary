l.d(t, { A: () => d });
var r = l(477900),
    n = l(582128),
    s = l(807081),
    i = l(9578),
    a = l(380610),
    o = l(435954),
    c = l(123917);
function u(e) {
    return null != e.target && (0, c.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, s.$)(e.content));
}
function d(e) {
    return {
        react(t, l, d) {
            if (e.enableBuildOverrides && (0, a.vS)(t.target))
                return (0, r.jsx)(n.Fragment, { children: (0, r.jsx)(o.default, { url: t.target }, t.target) }, d.key);
            let h = l(t.content, d),
                m = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, s.$)(t.content),
                p = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, c.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: d.messageId,
                              channelId: d.channelId,
                          }),
                          !0
                      )
                    : void 0;
            if (d.previewLinkTarget && !u(t)) {
                let e = `

(${t.target})`;
                (m.length + e.length > 1024 && ((e = "..." + e), (m = (m = m.substr(0, 1024 - e.length)).trimEnd())),
                    (m += e));
            }
            return d.noStyleAndInteraction
                ? (0, r.jsx)("span", { title: m, children: h }, d.key)
                : (0, r.jsx)(
                      i.A,
                      {
                          title: m,
                          href: t.target,
                          trusted: function () {
                              return u(t);
                          },
                          onClick: p,
                          messageId: d.messageId,
                          channelId: d.channelId,
                          children: h,
                      },
                      d.key,
                  );
        },
    };
}
