n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(939249),
    r = n(789645),
    o = n(298236),
    d = n(953756),
    c = n(398817),
    u = n(564107),
    m = n(985018),
    h = n(503556),
    g = n(143517);
function A(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: l,
            getGifFavButton: A,
            getOnMediaItemContextMenu: p,
            shouldHideMediaOptions: x,
            enabledContentHarmTypeFlags: f,
            onSuppressEmbed: C,
            hiddenSpoiler: E = !1,
        } = e,
        [v, I] = (0, d.zn)();
    return 0 === t.length
        ? null
        : (0, i.jsx)(u.N, {
              gifAutoPlay: l,
              getGifFavButton: A,
              getOnMediaItemContextMenu: p,
              shouldHideMediaOptions: x,
              enabledContentHarmTypeFlags: f,
              children: (0, i.jsx)(o.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, i.jsx)(d.O7.Root, {
                      containerInnerWidth: I,
                      children: (0, i.jsx)("div", {
                          style: { width: "100%" },
                          ref: v,
                          children: (0, i.jsx)(d.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, i.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": E,
                                      className: s()(h.O0, g.k, g.z, { [h.dK]: E }),
                                      children: [
                                          null != C &&
                                              (0, i.jsx)(a.D, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: h.PP,
                                                  onClick: C,
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
