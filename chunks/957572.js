r.d(t, { Z: () => a });
var n = r(255367);
r(73800);
var i = r(481060),
    o = r(847033),
    l = r(544978),
    s = r(388032),
    c = r(356874);
function a() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: r } = (0, o.m)();
    return t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: c.previewNotice,
                      children: [
                          (0, n.jsx)(i.kZF, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, n.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              className: c.previewNoticeText,
                              children: e === l.y.GUILD_PRODUCTS_PREVIEW ? s.intl.string(s.t.F4Z0nZ) : s.intl.string(s.t.pzTFpK)
                          })
                      ]
                  }),
                  (0, n.jsx)(i.zxk, {
                      size: i.zxk.Sizes.MIN,
                      color: i.zxk.Colors.PRIMARY,
                      className: c.removePreviewButton,
                      onClick: r,
                      children: e === l.y.GUILD_PRODUCTS_PREVIEW ? s.intl.string(s.t.YF35pa) : s.intl.string(s.t.r30bk5)
                  })
              ]
          })
        : null;
}
