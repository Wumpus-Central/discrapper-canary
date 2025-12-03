n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(782568),
    o = n(388032),
    d = n(520310),
    c = n(315665);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: l, is_localized: o },
    } = e;
    return o
        ? (0, r.jsxs)(a.P3F, {
              role: "link",
              className: i()(c.linkButton, d.listElement),
              onClick: () => {
                  (0, s.Z)(t);
              },
              children: [
                  (0, r.jsxs)("div", {
                      className: c.linkTextContainer,
                      children: [
                          (0, r.jsx)(a.Text, {
                              className: c.__invalid_linkText,
                              variant: "text-md/semibold",
                              children: n,
                          }),
                          null != l &&
                              "" !== l &&
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: l,
                              }),
                      ],
                  }),
                  (0, r.jsx)(a.Gr1, {
                      size: "sm",
                      color: "currentColor",
                      className: c.linkIcon,
                  }),
              ],
          })
        : null;
};
function m(e) {
    let { elements: t } = e;
    if (
        null == t ||
        0 === t.length ||
        null ==
            t.find((e) => {
                let { data: t } = e;
                return t.is_localized;
            })
    )
        return null;
    let n = t.map((e, t) => {
            let { data: n } = e;
            return (0, r.jsx)(u, { data: n }, "external-link+".concat(t));
        }),
        l = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, r.jsxs)("div", {
        className: i()(c.linksContainer, d.listElementWrapper),
        children: [
            !l &&
                (0, r.jsx)(a.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    className: c.header,
                    children: o.intl.string(o.t.hvVgAZ),
                }),
            n,
        ],
    });
}
