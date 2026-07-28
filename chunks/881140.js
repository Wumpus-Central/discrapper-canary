"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(807081),
    s = n(9578),
    l = n(380610),
    o = n(435954),
    d = n(123917);
function c(e) {
    return null != e.target && (0, d.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, a.$)(e.content));
}
function u(e) {
    return {
        react(t, n, u) {
            if (e.enableBuildOverrides && (0, l.vS)(t.target))
                return (0, i.jsx)(r.Fragment, { children: (0, i.jsx)(o.A, { url: t.target }, t.target) }, u.key);
            let _ = n(t.content, u),
                E = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.$)(t.content),
                A = e?.mustConfirmExternalLink
                    ? (e) => (
                          e?.stopPropagation(),
                          e?.preventDefault(),
                          (0, d.h)({
                              href: t.target,
                              shouldConfirm: !0,
                              messageId: u.messageId,
                              channelId: u.channelId,
                          }),
                          null
                      )
                    : void 0;
            if (u.previewLinkTarget && !c(t)) {
                let e = `

(${t.target})`;
                E.length + e.length > 1024 && ((e = "..." + e), (E = (E = E.substr(0, 1024 - e.length)).trimEnd())),
                    (E += e);
            }
            return u.noStyleAndInteraction
                ? (0, i.jsx)("span", { title: E, children: _ }, u.key)
                : (0, i.jsx)(
                      s.A,
                      {
                          title: E,
                          href: t.target,
                          trusted: function () {
                              return c(t);
                          },
                          onClick: A,
                          messageId: u.messageId,
                          channelId: u.channelId,
                          children: _,
                      },
                      u.key,
                  );
        },
    };
}
