n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(397927),
    s = n(207963),
    o = n(953756),
    d = n(520586),
    c = n(564107),
    u = n(985018),
    _ = n(810644),
    m = n(725325);
function h(e) {
    let {
            components: t,
            message: n,
            gifAutoPlay: a,
            getGifFavButton: h,
            getOnMediaItemContextMenu: p,
            shouldHideMediaOptions: g,
            enabledContentHarmTypeFlags: A,
            onSuppressEmbed: x,
            hiddenSpoiler: f = !1,
        } = e,
        [C, I] = (0, o.zn)();
    return 0 === t.length
        ? null
        : (0, i.jsx)(c.N, {
              gifAutoPlay: a,
              getGifFavButton: h,
              getOnMediaItemContextMenu: p,
              shouldHideMediaOptions: g,
              enabledContentHarmTypeFlags: A,
              children: (0, i.jsx)(s.f5, {
                  message: n,
                  shouldDisableInteractiveComponents: !0,
                  children: (0, i.jsx)(o.O7.Root, {
                      containerInnerWidth: I,
                      children: (0, i.jsx)("div", {
                          style: { width: "100%" },
                          ref: C,
                          children: (0, i.jsx)(o.O7.AutoMeasuredNestedContainer, {
                              children: (e) =>
                                  (0, i.jsxs)("div", {
                                      ref: e,
                                      "aria-hidden": f,
                                      className: r()(_.O0, m.k, m.z, { [_.dK]: f }),
                                      children: [
                                          null != x &&
                                              (0, i.jsx)(l.DUT, {
                                                  focusProps: { offset: { bottom: 4 } },
                                                  className: _.PP,
                                                  onClick: x,
                                                  "aria-label": u.intl.string(u.t.GT3fNz),
                                                  children: (0, i.jsx)(l.PGe, { size: "xs", color: "currentColor" }),
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
