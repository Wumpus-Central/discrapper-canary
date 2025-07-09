r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var i = r(755721),
    o = r(481060),
    l = r(847033),
    s = r(544978),
    c = r(388032),
    a = r(356874);
function d() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: r } = (0, l.m)();
    return t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: a.previewNotice,
                      children: [
                          (0, n.jsx)(o.kZF, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              className: a.previewNoticeText,
                              children: e === s.y.GUILD_PRODUCTS_PREVIEW ? c.intl.string(c.t.F4Z0nZ) : c.intl.string(c.t.pzTFpK)
                          })
                      ]
                  }),
                  (0, n.jsx)(i.zx, {
                      size: i.zx.Sizes.MIN,
                      color: i.zx.Colors.PRIMARY,
                      className: a.removePreviewButton,
                      onClick: r,
                      children: e === s.y.GUILD_PRODUCTS_PREVIEW ? c.intl.string(c.t.YF35pa) : c.intl.string(c.t.r30bk5)
                  })
              ]
          })
        : null;
}
