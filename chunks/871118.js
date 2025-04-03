r.d(t, { Z: () => b });
var n = r(200651),
    a = r(192379),
    o = r(120356),
    i = r.n(o),
    l = r(442837),
    s = r(481060),
    c = r(592125),
    u = r(496675),
    d = r(449605),
    p = r(981631),
    f = r(388032),
    m = r(269363);
function g(e) {
    let { isLoading: t, noText: r, noImage: a, previewText: o, className: l } = e;
    return (0, n.jsx)('div', {
        className: i()(m.emptyPreviewContainer, l),
        children: t
            ? (0, n.jsx)(s.$jN, {})
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)('div', { className: i()(m.emptyPreviewImage, { [m.noImage]: a }) }),
                      r
                          ? null
                          : (0, n.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: m.emptyPreviewText,
                                children: null != o ? o : f.NW.string(f.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function b(e) {
    let { stream: t, className: r, noText: o = !1, noImage: i = !1 } = e,
        s = (0, l.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        b = (0, l.e7)([u.Z], () => null != s && u.Z.canBasicChannel(p.S7T.CONNECT, s)),
        { previewUrl: _, isLoading: h } = (0, d.Z)(t.guildId, t.channelId, t.ownerId),
        O = a.useRef(h ? null : _);
    a.useEffect(() => {
        h || (O.current = _);
    }, [_, h]);
    let y = null == _ || h ? O.current : _;
    return null == y
        ? (0, n.jsx)(g, {
              className: r,
              isLoading: h,
              noText: o,
              noImage: i,
              previewText: b ? void 0 : f.NW.string(f.t.pgUTZG)
          })
        : (0, n.jsx)('div', {
              className: r,
              children: (0, n.jsx)('img', {
                  src: y,
                  alt: '',
                  className: m.image
              })
          });
}
