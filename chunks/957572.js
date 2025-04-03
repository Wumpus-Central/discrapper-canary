r.d(t, { Z: () => a });
var n = r(200651);
r(192379);
var i = r(481060),
    o = r(847033),
    s = r(544978),
    c = r(388032),
    l = r(356874);
function a() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: r } = (0, o.m)();
    return t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: l.previewNotice,
                      children: [
                          (0, n.jsx)(i.kZF, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, n.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              className: l.previewNoticeText,
                              children: e === s.y.GUILD_PRODUCTS_PREVIEW ? c.NW.string(c.t.F4Z0nZ) : c.NW.string(c.t.pzTFpK)
                          })
                      ]
                  }),
                  (0, n.jsx)(i.zxk, {
                      size: i.zxk.Sizes.MIN,
                      color: i.zxk.Colors.PRIMARY,
                      className: l.removePreviewButton,
                      onClick: r,
                      children: e === s.y.GUILD_PRODUCTS_PREVIEW ? c.NW.string(c.t.YF35pa) : c.NW.string(c.t.r30bk5)
                  })
              ]
          })
        : null;
}
