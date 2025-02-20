n.d(t, { Z: () => b });
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(592125),
    u = n(496675),
    d = n(449605),
    p = n(981631),
    f = n(388032),
    O = n(98378);
function y(e) {
    let { isLoading: t, noText: n, noImage: l, previewText: o, className: a } = e;
    return (0, r.jsx)('div', {
        className: i()(O.emptyPreviewContainer, a),
        children: t
            ? (0, r.jsx)(s.$jN, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: i()(O.emptyPreviewImage, { [O.noImage]: l }) }),
                      n
                          ? null
                          : (0, r.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: O.emptyPreviewText,
                                children: null != o ? o : f.NW.string(f.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function b(e) {
    let { stream: t, className: n, noText: o = !1, noImage: i = !1 } = e,
        s = (0, a.e7)([c.Z], () => c.Z.getBasicChannel(t.channelId)),
        b = (0, a.e7)([u.Z], () => null != s && u.Z.canBasicChannel(p.S7T.CONNECT, s)),
        { previewUrl: m, isLoading: g } = (0, d.Z)(t.guildId, t.channelId, t.ownerId),
        v = l.useRef(g ? null : m);
    l.useEffect(() => {
        g || (v.current = m);
    }, [m, g]);
    let h = null == m || g ? v.current : m;
    return null == h
        ? (0, r.jsx)(y, {
              className: n,
              isLoading: g,
              noText: o,
              noImage: i,
              previewText: b ? void 0 : f.NW.string(f.t.pgUTZG)
          })
        : (0, r.jsx)('div', {
              className: n,
              children: (0, r.jsx)('img', {
                  src: h,
                  alt: '',
                  className: O.image
              })
          });
}
