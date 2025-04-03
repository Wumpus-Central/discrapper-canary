s.d(t, {
    O: () => o,
    Z: () => m
});
var n,
    i = s(200651);
s(192379);
var r = s(120356),
    a = s.n(r),
    l = s(481060),
    c = s(388032),
    d = s(923918),
    o = (((n = {})[(n.Intro = 0)] = 'Intro'), (n[(n.Customize = 1)] = 'Customize'), (n[(n.Tips = 2)] = 'Tips'), n);
function m(e) {
    let { selectedTab: t, onClick: s, submitted: n } = e;
    return (0, i.jsxs)('div', {
        className: d.tabs,
        children: [
            (0, i.jsx)(x, {
                tab: 0,
                selectedTab: t,
                label: c.NW.string(c.t.JwwVrq),
                disabled: n,
                onClick: s
            }),
            (0, i.jsx)(x, {
                tab: 1,
                selectedTab: t,
                label: c.NW.string(c.t['56vYWV']),
                disabled: n,
                onClick: s
            }),
            (0, i.jsx)(x, {
                tab: 2,
                selectedTab: t,
                label: c.NW.string(c.t['0l0rJi']),
                disabled: !n,
                onClick: s
            })
        ]
    });
}
function x(e) {
    let { tab: t, selectedTab: s, label: n, disabled: r, onClick: c } = e;
    return r
        ? (0, i.jsxs)('div', {
              className: a()(d.tab, { [d.current]: s === t }),
              children: [
                  (0, i.jsx)('div', { className: d.progressBar }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: s === t ? 'text-brand' : 'text-muted',
                      children: n
                  })
              ]
          })
        : (0, i.jsxs)(l.P3F, {
              onClick: () => c(t),
              className: a()(d.tab, { [d.current]: s === t }),
              children: [
                  (0, i.jsx)('div', { className: d.progressBar }),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: s === t ? 'text-brand' : 'text-muted',
                      children: n
                  })
              ]
          });
}
