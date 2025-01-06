var i = n(200651);
n(192379);
var r = n(692547),
    l = n(481060),
    a = n(355011),
    s = n(388032),
    o = n(530130);
t.Z = (e) => {
    let { title: t, subtext: n = s.intl.string(s.t.jHpxws), localizedNumber: c, isTrendingUp: d, isTrendingDown: u, tooltipText: m } = e,
        h = 'string' == typeof m ? m : t,
        g =
            null != m
                ? (0, i.jsx)(l.Tooltip, {
                      text: m,
                      position: 'top',
                      'aria-label': h,
                      children: (e) =>
                          (0, i.jsx)(l.CircleInformationIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              ...e,
                              className: o.infoIcon
                          })
                  })
                : null;
    return (0, i.jsxs)('div', {
        className: o.analyticsCard,
        children: [
            (0, i.jsxs)(l.FormTitle, {
                className: o.analyticsCardTitle,
                children: [t, g]
            }),
            (0, i.jsx)('div', {
                className: o.analyticsCardContent,
                children: (0, i.jsx)(l.Heading, {
                    className: null != c ? o.analyticsCardNumber : o.analyticsCardNumberNotAvailable,
                    variant: 'heading-xl/semibold',
                    children: null != c ? c : s.intl.string(s.t.jHpxws)
                })
            }),
            (0, i.jsxs)('div', {
                className: o.analyticsCardArrowSubText,
                children: [
                    d
                        ? (0, i.jsx)(a.Z, {
                              className: o.trendingArrow,
                              color: r.Z.unsafe_rawColors.GREEN_360.css,
                              'aria-label': s.intl.string(s.t['8mcccX']),
                              width: 14,
                              height: 12
                          })
                        : null,
                    u
                        ? (0, i.jsx)(a.Z, {
                              className: o.trendingArrowIconDown,
                              color: r.Z.unsafe_rawColors.RED_400.css,
                              'aria-label': s.intl.string(s.t.NLl6Q0),
                              width: 14,
                              height: 12
                          })
                        : null,
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        children: n
                    })
                ]
            })
        ]
    });
};
