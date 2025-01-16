n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(847033),
    o = n(544978),
    l = n(388032),
    a = n(224430);
function c() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: n } = (0, s.m)();
    return t
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)('div', {
                      className: a.previewNotice,
                      children: [
                          (0, r.jsx)(i.EyeSlashIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              className: a.previewNoticeText,
                              children: e === o.y.GUILD_PRODUCTS_PREVIEW ? l.intl.string(l.t.F4Z0nZ) : l.intl.string(l.t.pzTFpK)
                          })
                      ]
                  }),
                  (0, r.jsx)(i.Button, {
                      size: i.Button.Sizes.MIN,
                      color: i.Button.Colors.PRIMARY,
                      className: a.removePreviewButton,
                      onClick: n,
                      children: e === o.y.GUILD_PRODUCTS_PREVIEW ? l.intl.string(l.t.YF35pa) : l.intl.string(l.t.r30bk5)
                  })
              ]
          })
        : null;
}
