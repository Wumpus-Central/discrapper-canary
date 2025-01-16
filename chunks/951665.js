n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(457414),
    a = n(311173),
    o = n(388032),
    c = n(91378);
function d(e) {
    var t;
    let { rule: n, onChangeRule: d, collapsed: u = !1 } = e,
        [m, h] = r.useState(!u),
        g = r.useCallback(() => {
            h(!m);
        }, [m, h]),
        x = r.useCallback(
            (e) => {
                d({
                    ...n,
                    triggerMetadata: {
                        ...n.triggerMetadata,
                        regexPatterns: e
                    }
                });
            },
            [d, n]
        );
    return (0, s.S)(n.triggerType)
        ? (0, i.jsx)(l.Collapsible, {
              isExpanded: m,
              collapsibleContent: (0, i.jsx)(a.Z, {
                  rule: n,
                  onChangeText: x,
                  className: c.textAreaContainer,
                  initialValue: null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.regexPatterns
              }),
              className: c.collapseable,
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(l.Clickable, {
                      onClick: (e) => {
                          g(), t(e);
                      },
                      children: (0, i.jsxs)('div', {
                          className: c.header,
                          children: [
                              (0, i.jsx)(l.Heading, {
                                  variant: 'text-sm/medium',
                                  children: o.intl.string(o.t.dnunm5)
                              }),
                              m
                                  ? (0, i.jsx)(l.ChevronSmallUpIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: c.arrow
                                    })
                                  : (0, i.jsx)(l.ChevronSmallDownIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: c.arrow
                                    })
                          ]
                      })
                  });
              }
          })
        : null;
}
