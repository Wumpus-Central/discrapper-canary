n.d(t, { Z: () => v });
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    u = n(592125),
    c = n(496675),
    d = n(449605),
    f = n(981631),
    m = n(388032),
    p = n(680809);
function h(e) {
    let { isLoading: t, noText: n, previewText: i, className: r } = e;
    return (0, l.jsx)('div', {
        className: a()(p.emptyPreviewContainer, r),
        children: t
            ? (0, l.jsx)(s.$jN, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)('div', { className: p.emptyPreviewImage }),
                      n
                          ? null
                          : (0, l.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: p.emptyPreviewText,
                                children: null != i ? i : m.intl.string(m.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function v(e) {
    let { stream: t, className: n, noText: r = !1 } = e,
        a = (0, o.e7)([u.Z], () => u.Z.getBasicChannel(t.channelId)),
        s = (0, o.e7)([c.Z], () => null != a && c.Z.canBasicChannel(f.S7T.CONNECT, a)),
        { previewUrl: v, isLoading: g } = (0, d.Z)(t.guildId, t.channelId, t.ownerId),
        x = i.useRef(g ? null : v);
    i.useEffect(() => {
        g || (x.current = v);
    }, [v, g]);
    let E = null == v || g ? x.current : v;
    return null == E
        ? (0, l.jsx)(h, {
              className: n,
              isLoading: g,
              noText: r,
              previewText: s ? void 0 : m.intl.string(m.t.pgUTZG)
          })
        : (0, l.jsx)('div', {
              className: n,
              children: (0, l.jsx)('img', {
                  src: E,
                  alt: '',
                  className: p.image
              })
          });
}
