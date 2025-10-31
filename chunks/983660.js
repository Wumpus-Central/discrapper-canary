n.d(t, { Z: () => h }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(704215),
    o = n(481060),
    s = n(243778),
    a = n(921944),
    c = n(388032),
    d = n(303010),
    u = n(215916);
function h(e) {
    let { locked: t } = e,
        [n, h] = (0, s.US)(t ? [] : [l.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX], void 0, !0);
    return (r.useEffect(() => {
        if (!t && n === l.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
            return () => {
                n === l.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX && h(a.L.AUTO_DISMISS);
            };
    }, [t, h, n]),
    t || n !== l.z.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX)
        ? null
        : (0, i.jsx)("div", {
              className: d.overlayInprocessBackgroundNux,
              children: (0, i.jsxs)("div", {
                  className: d.mainContainer,
                  children: [
                      (0, i.jsxs)("div", {
                          className: d.mainTitleContainer,
                          children: [
                              (0, i.jsx)(o.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  className: d.mainTitle,
                                  children: c.intl.format(c.t.Eg5ybE, {}),
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  className: d.mainTitleBody,
                                  children: c.intl.format(c.t.KkM0s8, {}),
                              }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: d.widgetCalloutContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.qjv, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: c.intl.string(c.t.S6VRyK),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Dkj, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: c.intl.string(c.t.xq8CKY),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.Odl, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: c.intl.string(c.t.GwpRe0),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: d.widgetCallout,
                                  children: [
                                      (0, i.jsx)(o.KY1, {}),
                                      (0, i.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          color: "interactive-normal",
                                          children: c.intl.string(c.t.VUoC5F),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          children: (0, i.jsx)("img", {
                              src: u.Z,
                              alt: c.intl.string(c.t.mdXZh1),
                              className: d.nuxImage,
                          }),
                      }),
                  ],
              }),
          });
}
