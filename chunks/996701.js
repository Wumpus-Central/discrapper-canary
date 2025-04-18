n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(782568),
    s = n(388032),
    c = n(88309),
    d = n(735247);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: l, is_localized: s }
    } = e;
    return s
        ? (0, r.jsxs)(a.P3F, {
              role: 'link',
              className: i()(d.linkButton, c.listElement),
              onClick: () => {
                  (0, o.Z)(t);
              },
              children: [
                  (0, r.jsxs)('div', {
                      className: d.linkTextContainer,
                      children: [
                          (0, r.jsx)(a.Text, {
                              className: d.__invalid_linkText,
                              variant: 'text-md/semibold',
                              children: n
                          }),
                          null != l &&
                              '' !== l &&
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: l
                              })
                      ]
                  }),
                  (0, r.jsx)(a.Gr1, {
                      size: 'sm',
                      color: 'currentColor',
                      className: d.linkIcon
                  })
              ]
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
            return (0, r.jsx)(u, { data: n }, 'external-link+'.concat(t));
        }),
        l = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, r.jsxs)('div', {
        className: i()(d.linksContainer, c.listElementWrapper),
        children: [
            !l &&
                (0, r.jsx)(a.X6q, {
                    variant: 'heading-sm/semibold',
                    color: 'header-secondary',
                    className: d.header,
                    children: s.NW.string(s.t.hvVgAQ)
                }),
            n
        ]
    });
}
