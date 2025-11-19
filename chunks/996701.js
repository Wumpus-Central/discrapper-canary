n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(782568),
    o = n(388032),
    c = n(520310),
    d = n(315665);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: i, is_localized: o },
    } = e;
    return o
        ? (0, r.jsxs)(a.P3F, {
              role: "link",
              className: l()(d.linkButton, c.listElement),
              onClick: () => {
                  (0, s.Z)(t);
              },
              children: [
                  (0, r.jsxs)("div", {
                      className: d.linkTextContainer,
                      children: [
                          (0, r.jsx)(a.Text, {
                              className: d.__invalid_linkText,
                              variant: "text-md/semibold",
                              children: n,
                          }),
                          null != i &&
                              "" !== i &&
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: i,
                              }),
                      ],
                  }),
                  (0, r.jsx)(a.Gr1, {
                      size: "sm",
                      color: "currentColor",
                      className: d.linkIcon,
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
        i = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, r.jsxs)("div", {
        className: l()(d.linksContainer, c.listElementWrapper),
        children: [
            !i &&
                (0, r.jsx)(a.Heading, {
                    variant: "heading-sm/semibold",
                    color: "header-secondary",
                    className: d.header,
                    children: o.intl.string(o.t.hvVgAZ),
                }),
            n,
        ],
    });
}
