l.d(t, { A: () => u });
var n = l(477900),
    r = l(582128),
    i = l(807081),
    s = l(9578),
    a = l(380610),
    d = l(325213),
    o = l(123917);
function c(e) {
    return null != e.target && (0, o.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, i.$)(e.content));
}
function u(e) {
    return {
        react(t, l, u) {
            if (e.enableBuildOverrides && (0, a.vS)(t.target))
                return (0, n.jsx)(r.Fragment, { children: (0, n.jsx)(d.default, { url: t.target }, t.target) }, u.key);
            let m = l(t.content, u),
                h = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, i.$)(t.content),
                v = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, o.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: u.messageId,
                              channelId: u.channelId,
                          }),
                          !0
                      )
                    : void 0;
            if (u.previewLinkTarget && !c(t)) {
                let e = `

(${t.target})`;
                (h.length + e.length > 1024 && ((e = "..." + e), (h = (h = h.substr(0, 1024 - e.length)).trimEnd())),
                    (h += e));
            }
            return u.noStyleAndInteraction
                ? (0, n.jsx)("span", { title: h, children: m }, u.key)
                : (0, n.jsx)(
                      s.A,
                      {
                          title: h,
                          href: t.target,
                          trusted: function () {
                              return c(t);
                          },
                          onClick: v,
                          messageId: u.messageId,
                          channelId: u.channelId,
                          children: m,
                      },
                      u.key,
                  );
        },
    };
}
