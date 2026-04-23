"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(436857),
    a = n(9578),
    o = n(380610),
    l = n(435954),
    d = n(76843);
function _(e) {
    return null != e.target && (0, d.m)(e.target, null != e.title && "" !== e.title ? e.title : (0, s.$)(e.content));
}
function u(e) {
    return {
        react(t, n, u) {
            if (e.enableBuildOverrides && (0, o.vS)(t.target))
                return (0, i.jsx)(r.Fragment, { children: (0, i.jsx)(l.A, { url: t.target }, t.target) }, u.key);
            let c = n(t.content, u),
                E = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, s.$)(t.content),
                h = e?.mustConfirmExternalLink
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
            if (u.previewLinkTarget && !_(t)) {
                let e = `

(${t.target})`;
                E.length + e.length > 1024 && ((e = "..." + e), (E = (E = E.substr(0, 1024 - e.length)).trimEnd())),
                    (E += e);
            }
            return u.noStyleAndInteraction
                ? (0, i.jsx)("span", { title: E, children: c }, u.key)
                : (0, i.jsx)(
                      a.A,
                      {
                          title: E,
                          href: t.target,
                          trusted: () => _(t),
                          onClick: h,
                          messageId: u.messageId,
                          channelId: u.channelId,
                          children: c,
                      },
                      u.key,
                  );
        },
    };
}
