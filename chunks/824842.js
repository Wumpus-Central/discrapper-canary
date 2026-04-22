"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(939249),
    a = n(285796),
    o = n(813516),
    c = n(931664),
    u = n(631576),
    d = n(148355),
    h = n(985018),
    m = n(901664);
let p = l.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [p, f] = l.useState(null),
        g = (0, s.bG)([c.A], () => c.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != g && 0 !== g.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", {
                      className: m.Tz,
                      children: g.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: m.dp,
                                  children: [
                                      (0, i.jsx)(r.D, {
                                          onFocus: () => f(e.id),
                                          onBlur: () => f(null),
                                          className: m.b,
                                          "aria-label": h.intl.formatToPlainString(h.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, u.x5)(t, n.drafts.type),
                                          children: (0, i.jsx)("div", {
                                              className: m.Nk,
                                              children: (0, i.jsx)(a.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: m.ut,
                                              }),
                                          }),
                                      }),
                                      (0, i.jsx)(d.A, {
                                          isInteracting: p === e.id,
                                          className: m.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, i.jsx)(o.A, { className: m.R }),
              ],
          })
        : null;
});
