n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(939249),
    s = n(789645),
    o = n(298236),
    c = n(953756),
    d = n(398817),
    u = n(564107),
    _ = n(985018),
    m = n(503556),
    h = n(143517);
function p(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: l,
            getGifFavButton: p,
            getOnMediaItemContextMenu: g,
            shouldHideMediaOptions: f,
            enabledContentHarmTypeFlags: x,
            onSuppressEmbed: A,
            hiddenSpoiler: C = !1,
        } = e,
        [v, I] = (0, c.zn)();
    return 0 === t.length
        ? null
        : (0, i.jsx)(u.N, {
              gifAutoPlay: l,
              getGifFavButton: p,
              getOnMediaItemContextMenu: g,
              shouldHideMediaOptions: f,
              enabledContentHarmTypeFlags: x,
              children: (0, i.jsx)(o.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, i.jsx)(c.O7.Root, {
                      containerInnerWidth: I,
                      children: (0, i.jsx)("div", {
                          style: { width: "100%" },
                          ref: v,
                          children: (0, i.jsx)(c.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, i.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": C,
                                      className: a()(m.O0, h.k, h.z, { [m.dK]: C }),
                                      children: [
                                          null != A &&
                                              (0, i.jsx)(r.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: m.PP,
                                                  onClick: A,
                                                  "aria-label": _.intl.string(_.t.GT3fNz),
                                                  children: (0, i.jsx)(s.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, d.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
