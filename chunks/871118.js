n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(592125),
    u = n(496675),
    d = n(449605),
    f = n(981631),
    p = n(388032),
    _ = n(999770);
function m(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: a, className: s } = e;
    return (0, r.jsx)("div", {
        className: o()(_.emptyPreviewContainer, s),
        children: t
            ? (0, r.jsx)(l.$jN, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", { className: o()(_.emptyPreviewImage, { [_.noImage]: i }) }),
                      n
                          ? null
                          : (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "none",
                                className: _.emptyPreviewText,
                                children: null != a ? a : p.intl.string(p.t.uQZTBV),
                            }),
                  ],
              }),
    });
}
function h(e) {
    let { stream: t, className: n, noText: a = !1, noImage: o = !1 } = e,
        l = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        h = (0, s.e7)([u.Z], () => null != l && u.Z.canBasicChannel(f.S7T.CONNECT, l)),
        { previewUrl: g, isLoading: E } = (0, d.Z)(t.guildId, t.channelId, t.ownerId),
        b = i.useRef(E ? null : g);
    i.useEffect(() => {
        E || (b.current = g);
    }, [g, E]);
    let y = null == g || E ? b.current : g;
    return null == y
        ? (0, r.jsx)(m, {
              className: n,
              isLoading: E,
              noText: a,
              noImage: o,
              previewText: h ? void 0 : p.intl.string(p.t.pgUTZC),
          })
        : (0, r.jsx)("div", {
              className: n,
              children: (0, r.jsx)("img", {
                  src: y,
                  alt: "",
                  className: _.image,
              }),
          });
}
