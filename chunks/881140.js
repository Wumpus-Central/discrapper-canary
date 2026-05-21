"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(807081),
    a = n(9578),
    o = n(380610),
    l = n(435954),
    u = n(123917);
function c(e) {
    return null != e.target && (0, u.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, s.$)(e.content));
}
function d(e) {
    return {
        react(t, n, d) {
            if (e.enableBuildOverrides && (0, o.vS)(t.target))
                return (0, i.jsx)(r.Fragment, { children: (0, i.jsx)(l.A, { url: t.target }, t.target) }, d.key);
            let _ = n(t.content, d),
                f = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, s.$)(t.content),
                h = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, u.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: d.messageId,
                              channelId: d.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (d.previewLinkTarget && !c(t)) {
                let e = `

(${t.target})`;
                f.length + e.length > 1024 && ((e = "..." + e), (f = (f = f.substr(0, 1024 - e.length)).trimEnd())),
                    (f += e);
            }
            return d.noStyleAndInteraction
                ? (0, i.jsx)("span", { title: f, children: _ }, d.key)
                : (0, i.jsx)(
                      a.A,
                      {
                          title: f,
                          href: t.target,
                          trusted: () => c(t),
                          onClick: h,
                          messageId: d.messageId,
                          channelId: d.channelId,
                          children: _,
                      },
                      d.key,
                  );
        },
    };
}
