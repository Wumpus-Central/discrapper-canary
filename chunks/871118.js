n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(592125),
    u = n(496675),
    d = n(449605),
    f = n(981631),
    _ = n(388032),
    p = n(269363);
function h(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: a, className: s } = e;
    return (0, r.jsx)('div', {
        className: o()(p.emptyPreviewContainer, s),
        children: t
            ? (0, r.jsx)(l.$jN, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: o()(p.emptyPreviewImage, { [p.noImage]: i }) }),
                      n
                          ? null
                          : (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: p.emptyPreviewText,
                                children: null != a ? a : _.NW.string(_.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function m(e) {
    let { stream: t, className: n, noText: a = !1, noImage: o = !1 } = e,
        l = (0, s.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        m = (0, s.e7)([u.Z], () => null != l && u.Z.canBasicChannel(f.S7T.CONNECT, l)),
        { previewUrl: g, isLoading: E } = (0, d.Z)(t.guildId, t.channelId, t.ownerId),
        b = i.useRef(E ? null : g);
    i.useEffect(() => {
        E || (b.current = g);
    }, [g, E]);
    let y = null == g || E ? b.current : g;
    return null == y
        ? (0, r.jsx)(h, {
              className: n,
              isLoading: E,
              noText: a,
              noImage: o,
              previewText: m ? void 0 : _.NW.string(_.t.pgUTZG)
          })
        : (0, r.jsx)('div', {
              className: n,
              children: (0, r.jsx)('img', {
                  src: y,
                  alt: '',
                  className: p.image
              })
          });
}
