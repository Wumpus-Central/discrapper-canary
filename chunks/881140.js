l.d(t, { A: () => u });
var r = l(477900),
    n = l(582128),
    i = l(807081),
    a = l(9578),
    s = l(380610),
    d = l(435954),
    o = l(123917);
function c(e) {
    return null != e.target && (0, o.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, i.$)(e.content));
}
function u(e) {
    return {
        react(t, l, u) {
            if (e.enableBuildOverrides && (0, s.vS)(t.target))
                return (0, r.jsx)(n.Fragment, { children: (0, r.jsx)(d.default, { url: t.target }, t.target) }, u.key);
            let v = l(t.content, u),
                C = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, i.$)(t.content),
                h = e?.mustConfirmExternalLink
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
                (C.length + e.length > 1024 && ((e = "..." + e), (C = (C = C.substr(0, 1024 - e.length)).trimEnd())),
                    (C += e));
            }
            return u.noStyleAndInteraction
                ? (0, r.jsx)("span", { title: C, children: v }, u.key)
                : (0, r.jsx)(
                      a.A,
                      {
                          title: C,
                          href: t.target,
                          trusted: function () {
                              return c(t);
                          },
                          onClick: h,
                          messageId: u.messageId,
                          channelId: u.channelId,
                          children: v,
                      },
                      u.key,
                  );
        },
    };
}
