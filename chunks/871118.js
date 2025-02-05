n.d(t, { Z: () => v });
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    d = n(592125),
    c = n(496675),
    u = n(449605),
    p = n(981631),
    f = n(388032),
    m = n(680809);
function h(e) {
    let { isLoading: t, noText: n, noImage: i, previewText: r, className: o } = e;
    return (0, l.jsx)('div', {
        className: a()(m.emptyPreviewContainer, o),
        children: t
            ? (0, l.jsx)(s.$jN, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)('div', { className: a()(m.emptyPreviewImage, { [m.noImage]: i }) }),
                      n
                          ? null
                          : (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: m.emptyPreviewText,
                                children: null != r ? r : f.intl.string(f.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function v(e) {
    let { stream: t, className: n, noText: r = !1, noImage: a = !1 } = e,
        s = (0, o.e7)([d.Z], () => d.Z.getBasicChannel(t.channelId)),
        v = (0, o.e7)([c.Z], () => null != s && c.Z.canBasicChannel(p.S7T.CONNECT, s)),
        { previewUrl: g, isLoading: E } = (0, u.Z)(t.guildId, t.channelId, t.ownerId),
        C = i.useRef(E ? null : g);
    i.useEffect(() => {
        E || (C.current = g);
    }, [g, E]);
    let P = null == g || E ? C.current : g;
    return null == P
        ? (0, l.jsx)(h, {
              className: n,
              isLoading: E,
              noText: r,
              noImage: a,
              previewText: v ? void 0 : f.intl.string(f.t.pgUTZG)
          })
        : (0, l.jsx)('div', {
              className: n,
              children: (0, l.jsx)('img', {
                  src: P,
                  alt: '',
                  className: m.image
              })
          });
}
