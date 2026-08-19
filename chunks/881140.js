r.d(t, { A: () => c });
var l = r(477900),
    n = r(582128),
    i = r(807081),
    a = r(9578),
    s = r(380610),
    d = r(435954),
    o = r(123917);
function u(e) {
    return null != e.target && (0, o.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, i.$)(e.content));
}
function c(e) {
    return {
        react(t, r, c) {
            if (e.enableBuildOverrides && (0, s.vS)(t.target))
                return (0, l.jsx)(n.Fragment, { children: (0, l.jsx)(d.A, { url: t.target }, t.target) }, c.key);
            let v = r(t.content, c),
                h = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, i.$)(t.content),
                C = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, o.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: c.messageId,
                              channelId: c.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (c.previewLinkTarget && !u(t)) {
                let e = `

(${t.target})`;
                h.length + e.length > 1024 && ((e = "..." + e), (h = (h = h.substr(0, 1024 - e.length)).trimEnd())),
                    (h += e);
            }
            return c.noStyleAndInteraction
                ? (0, l.jsx)("span", { title: h, children: v }, c.key)
                : (0, l.jsx)(
                      a.A,
                      {
                          title: h,
                          href: t.target,
                          trusted: function () {
                              return u(t);
                          },
                          onClick: C,
                          messageId: c.messageId,
                          channelId: c.channelId,
                          children: v,
                      },
                      c.key,
                  );
        },
    };
}
