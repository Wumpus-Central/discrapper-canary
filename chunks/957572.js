n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(847033),
    l = n(544978),
    o = n(388032),
    a = n(28604);
function c() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: n } = (0, s.m)();
    return t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: a.previewNotice,
                      children: [
                          (0, i.jsx)(r.kZF, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/normal',
                              className: a.previewNoticeText,
                              children: e === l.y.GUILD_PRODUCTS_PREVIEW ? o.intl.string(o.t.F4Z0nZ) : o.intl.string(o.t.pzTFpK)
                          })
                      ]
                  }),
                  (0, i.jsx)(r.zxk, {
                      size: r.zxk.Sizes.MIN,
                      color: r.zxk.Colors.PRIMARY,
                      className: a.removePreviewButton,
                      onClick: n,
                      children: e === l.y.GUILD_PRODUCTS_PREVIEW ? o.intl.string(o.t.YF35pa) : o.intl.string(o.t.r30bk5)
                  })
              ]
          })
        : null;
}
