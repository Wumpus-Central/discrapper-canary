l.d(t, { A: () => c });
var r = l(627968),
    n = l(64700),
    i = l(436857),
    a = l(9578),
    s = l(380610),
    d = l(435954),
    o = l(76843);
function u(e) {
    return null != e.target && (0, o.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, i.$)(e.content));
}
function c(e) {
    return {
        react(t, l, c) {
            if (e.enableBuildOverrides && (0, s.vS)(t.target))
                return (0, r.jsx)(n.Fragment, { children: (0, r.jsx)(d.A, { url: t.target }, t.target) }, c.key);
            let v = l(t.content, c),
                C = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, i.$)(t.content),
                h = e?.mustConfirmExternalLink
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
                C.length + e.length > 1024 && ((e = "..." + e), (C = (C = C.substr(0, 1024 - e.length)).trimEnd())),
                    (C += e);
            }
            return c.noStyleAndInteraction
                ? (0, r.jsx)("span", { title: C, children: v }, c.key)
                : (0, r.jsx)(
                      a.A,
                      {
                          title: C,
                          href: t.target,
                          trusted: () => u(t),
                          onClick: h,
                          messageId: c.messageId,
                          channelId: c.channelId,
                          children: v,
                      },
                      c.key,
                  );
        },
    };
}
