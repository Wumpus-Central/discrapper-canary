n.d(t, { Z: () => m });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(782568),
    o = n(388032),
    d = n(879918),
    c = n(644809);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: i, is_localized: o }
    } = e;
    return o
        ? (0, l.jsxs)(a.P3F, {
              role: 'link',
              className: r()(c.linkButton, d.listElement),
              onClick: () => {
                  (0, s.Z)(t);
              },
              children: [
                  (0, l.jsxs)('div', {
                      className: c.linkTextContainer,
                      children: [
                          (0, l.jsx)(a.Text, {
                              className: c.__invalid_linkText,
                              variant: 'text-md/semibold',
                              children: n
                          }),
                          null != i &&
                              '' !== i &&
                              (0, l.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: i
                              })
                      ]
                  }),
                  (0, l.jsx)(a.Gr1, {
                      size: 'sm',
                      color: 'currentColor',
                      className: c.linkIcon
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
            return (0, l.jsx)(u, { data: n }, 'external-link+'.concat(t));
        }),
        i = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, l.jsxs)('div', {
        className: r()(c.linksContainer, d.listElementWrapper),
        children: [
            !i &&
                (0, l.jsx)(a.X6q, {
                    variant: 'heading-sm/semibold',
                    color: 'header-secondary',
                    className: c.header,
                    children: o.intl.string(o.t.hvVgAQ)
                }),
            n
        ]
    });
}
