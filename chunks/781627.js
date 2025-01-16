n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(388032),
    r = n(526906);
function c(e) {
    let { imageSrc: t, header: n, description: c, secondaryInfo: o, mutualGuildCount: s, ctaLabel: d, onCtaClick: u, children: m } = e,
        g = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: r.topWrapper,
                children: [
                    (0, i.jsx)('div', {
                        className: r.__invalid_imageContainer,
                        children: (0, i.jsx)('img', {
                            alt: '',
                            className: r.image,
                            src: t
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: r.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: r.header,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: r.info,
                                        children: [
                                            (0, i.jsx)(a.Heading, {
                                                className: r.name,
                                                variant: 'heading-md/semibold',
                                                children: n
                                            }),
                                            null != s
                                                ? s
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: (0, i.jsxs)('div', {
                                                          className: r.details,
                                                          children: [
                                                              (0, i.jsx)(a.Text, {
                                                                  tag: 'span',
                                                                  color: 'header-secondary',
                                                                  variant: 'text-sm/medium',
                                                                  children: l.intl.string(l.t['xp3V9/'])
                                                              }),
                                                              null != o
                                                                  ? (0, i.jsxs)(i.Fragment, {
                                                                        children: [
                                                                            (0, i.jsx)(a.Text, {
                                                                                tag: 'span',
                                                                                color: 'interactive-muted',
                                                                                variant: 'text-sm/normal',
                                                                                className: r.bullet,
                                                                                children: '\u2022'
                                                                            }),
                                                                            (0, i.jsx)(a.Text, {
                                                                                tag: 'span',
                                                                                color: 'header-secondary',
                                                                                variant: 'text-sm/medium',
                                                                                children: o
                                                                            })
                                                                        ]
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                                  })
                                        ]
                                    }),
                                    null != u && null != d
                                        ? (0, i.jsx)(a.Button, {
                                              size: a.Button.Sizes.SMALL,
                                              onClick: u,
                                              className: r.__invalid_button,
                                              children: d
                                          })
                                        : null
                                ]
                            }),
                            null != c
                                ? (0, i.jsx)(a.Text, {
                                      className: r.listingDescription,
                                      variant: 'text-md/normal',
                                      children: c
                                  })
                                : null,
                            (0, i.jsx)('div', {
                                className: r.children,
                                children: m
                            })
                        ]
                    })
                ]
            })
        });
    return (0, i.jsx)(a.FocusRing, {
        children: (0, i.jsx)('div', {
            className: r.listing,
            children: g
        })
    });
}
