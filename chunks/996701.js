n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    o = n(782568),
    s = n(388032),
    c = n(88309),
    d = n(735247);
let u = (e) => {
    let {
        data: { url: t, link_text: n, link_description: a, is_localized: s }
    } = e;
    return s
        ? (0, r.jsxs)(l.P3F, {
              role: 'link',
              className: i()(d.linkButton, c.listElement),
              onClick: () => {
                  (0, o.Z)(t);
              },
              children: [
                  (0, r.jsxs)('div', {
                      className: d.linkTextContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              className: d.__invalid_linkText,
                              variant: 'text-md/semibold',
                              children: n
                          }),
                          null != a &&
                              '' !== a &&
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: a
                              })
                      ]
                  }),
                  (0, r.jsx)(l.Gr1, {
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
        a = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, r.jsxs)('div', {
        className: i()(d.linksContainer, c.listElementWrapper),
        children: [
            !a &&
                (0, r.jsx)(l.X6q, {
                    variant: 'heading-sm/semibold',
                    color: 'header-secondary',
                    className: d.header,
                    children: s.intl.string(s.t.hvVgAQ)
                }),
            n
        ]
    });
}
