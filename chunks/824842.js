"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(939249),
    o = n(285796),
    l = n(813516),
    u = n(931664),
    c = n(631576),
    d = n(148355),
    _ = n(985018),
    f = n(74995);
let p = i.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
        [p, h] = i.useState(null),
        E = (0, s.bG)([u.A], () => u.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != E && 0 !== E.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: f.Tz,
                      children: E.map((e) =>
                          (0, r.jsxs)(
                              "div",
                              {
                                  className: f.dp,
                                  children: [
                                      (0, r.jsx)(a.D, {
                                          onFocus: () => h(e.id),
                                          onBlur: () => h(null),
                                          className: f.b,
                                          "aria-label": _.intl.formatToPlainString(_.t.BGAQRd, { name: e.name }),
                                          onClick: () => (0, c.x5)(t, n.drafts.type),
                                          children: (0, r.jsx)("div", {
                                              className: f.Nk,
                                              children: (0, r.jsx)(o.a, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: f.ut,
                                              }),
                                          }),
                                      }),
                                      (0, r.jsx)(d.A, {
                                          isInteracting: p === e.id,
                                          className: f.UV,
                                          size: 48,
                                          sticker: e,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, r.jsx)(l.A, { className: f.R }),
              ],
          })
        : null;
});
