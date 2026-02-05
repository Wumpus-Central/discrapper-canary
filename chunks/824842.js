"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(813516),
    l = n(931664),
    u = n(631576),
    c = n(148355),
    d = n(985018),
    _ = n(115424);
function f(e) {
    let { channelId: t, chatInputType: n } = e,
        [f, p] = i.useState(null),
        h = (0, a.bG)([l.A], () => l.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != h && 0 !== h.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: _.Tz,
                      children: h.map((e) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: _.dp,
                                  children: [
                                      (0, r.jsx)(s.DUT, {
                                          onFocus: () => p(e.id),
                                          onBlur: () => p(null),
                                          className: _.b,
                                          "aria-label": d.intl.formatToPlainString(d.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, u.x5)(t, n.drafts.type),
                                          children: (0, r.jsx)("div", {
                                              className: _.Nk,
                                              children: (0, r.jsx)(s.aXh, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: _.ut,
                                              }),
                                          }),
                                      }),
                                      (0, r.jsx)(c.A, {
                                          isInteracting: f === e.id,
                                          className: _.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, r.jsx)(o.A, { className: _.R }),
              ],
          })
        : null;
}
let p = i.memo(f);
