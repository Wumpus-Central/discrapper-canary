r.d(t, { Z: () => d });
var n = r(54381);
r(473749);
var i = r(159691),
    o = r(481060),
    l = r(847033),
    s = r(544978),
    c = r(388032),
    a = r(790632);
function d() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: r } = (0, l.m)();
    return t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)("div", {
                      className: a.previewNotice,
                      children: [
                          (0, n.jsx)(o.kZF, {
                              size: "xs",
                              color: "currentColor",
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              className: a.previewNoticeText,
                              children:
                                  e === s.y.GUILD_PRODUCTS_PREVIEW
                                      ? c.intl.string(c.t.F4Z0nV)
                                      : c.intl.string(c.t.pzTFpM),
                          }),
                      ],
                  }),
                  (0, n.jsx)(i.zxk, {
                      text: e === s.y.GUILD_PRODUCTS_PREVIEW ? c.intl.string(c.t.YF35pV) : c.intl.string(c.t.r30bky),
                      size: "sm",
                      variant: "secondary",
                      onClick: r,
                  }),
              ],
          })
        : null;
}
