n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(939249),
    r = n(789645),
    o = n(207963),
    d = n(953756),
    c = n(520586),
    u = n(564107),
    m = n(985018),
    _ = n(503556),
    h = n(143517);
function p(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: l,
            getGifFavButton: p,
            getOnMediaItemContextMenu: g,
            shouldHideMediaOptions: A,
            enabledContentHarmTypeFlags: f,
            onSuppressEmbed: x,
            hiddenSpoiler: C = !1,
        } = e,
        [E, I] = (0, d.zn)();
    return 0 === t.length
        ? null
        : (0, i.jsx)(u.N, {
              gifAutoPlay: l,
              getGifFavButton: p,
              getOnMediaItemContextMenu: g,
              shouldHideMediaOptions: A,
              enabledContentHarmTypeFlags: f,
              children: (0, i.jsx)(o.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, i.jsx)(d.O7.Root, {
                      containerInnerWidth: I,
                      children: (0, i.jsx)("div", {
                          style: { width: "100%" },
                          ref: E,
                          children: (0, i.jsx)(d.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, i.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": C,
                                      className: a()(_.O0, h.k, h.z, { [_.dK]: C }),
                                      children: [
                                          null != x &&
                                              (0, i.jsx)(s.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: _.PP,
                                                  onClick: x,
                                                  "aria-label": m.intl.string(m.t.GT3fNz),
                                                  children: (0, i.jsx)(r.P, { size: "xs", color: "currentColor" }),
                                              }),
                                          (0, c.fD)(t),
                                      ],
                                  }),
                          }),
                      }),
                  }),
              }),
          });
}
