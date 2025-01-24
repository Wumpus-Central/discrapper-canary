n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    u = n(481060),
    s = n(592125),
    c = n(496675),
    d = n(449605),
    f = n(981631),
    p = n(388032),
    m = n(680809);
function h(e) {
    let { isLoading: t, noText: n, previewText: i, className: l } = e;
    return (0, r.jsx)('div', {
        className: o()(m.emptyPreviewContainer, l),
        children: t
            ? (0, r.jsx)(u.Spinner, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: m.emptyPreviewImage }),
                      n
                          ? null
                          : (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: m.emptyPreviewText,
                                children: null != i ? i : p.intl.string(p.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function v(e) {
    let { stream: t, className: n, noText: l = !1 } = e,
        o = (0, a.e7)([s.Z], () => s.Z.getBasicChannel(t.channelId)),
        u = (0, a.e7)([c.Z], () => null != o && c.Z.canBasicChannel(f.S7T.CONNECT, o)),
        { previewUrl: v, isLoading: g } = (0, d.Z)(t.guildId, t.channelId, t.ownerId),
        x = i.useRef(g ? null : v);
    i.useEffect(() => {
        !g && (x.current = v);
    }, [v, g]);
    let P = null == v || g ? x.current : v;
    return null == P
        ? (0, r.jsx)(h, {
              className: n,
              isLoading: g,
              noText: l,
              previewText: u ? void 0 : p.intl.string(p.t.pgUTZG)
          })
        : (0, r.jsx)('div', {
              className: n,
              children: (0, r.jsx)('img', {
                  src: P,
                  alt: '',
                  className: m.image
              })
          });
}
