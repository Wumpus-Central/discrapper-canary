t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    o = t.n(r),
    a = t(442837),
    u = t(481060),
    s = t(592125),
    d = t(496675),
    c = t(449605),
    p = t(981631),
    f = t(388032),
    v = t(680809);
function m(e) {
    let { isLoading: n, noText: t, previewText: i, className: r } = e;
    return (0, l.jsx)('div', {
        className: o()(v.emptyPreviewContainer, r),
        children: n
            ? (0, l.jsx)(u.Spinner, {})
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)('div', { className: v.emptyPreviewImage }),
                      t
                          ? null
                          : (0, l.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'none',
                                className: v.emptyPreviewText,
                                children: null != i ? i : f.intl.string(f.t.uQZTBQ)
                            })
                  ]
              })
    });
}
function h(e) {
    let { stream: n, className: t, noText: r = !1 } = e,
        o = (0, a.e7)([s.Z], () => s.Z.getBasicChannel(n.channelId)),
        u = (0, a.e7)([d.Z], () => null != o && d.Z.canBasicChannel(p.S7T.CONNECT, o)),
        { previewUrl: h, isLoading: g } = (0, c.Z)(n.guildId, n.channelId, n.ownerId),
        Z = i.useRef(g ? null : h);
    i.useEffect(() => {
        !g && (Z.current = h);
    }, [h, g]);
    let x = null == h || g ? Z.current : h;
    return null == x
        ? (0, l.jsx)(m, {
              className: t,
              isLoading: g,
              noText: r,
              previewText: u ? void 0 : f.intl.string(f.t.pgUTZG)
          })
        : (0, l.jsx)('div', {
              className: t,
              children: (0, l.jsx)('img', {
                  src: x,
                  alt: '',
                  className: v.image
              })
          });
}
