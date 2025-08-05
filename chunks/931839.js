n.d(t, {
    O: () => d,
    Z: () => m
});
var i,
    s = n(255367);
n(73800);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    c = n(388032),
    o = n(923918),
    d = (((i = {})[(i.Intro = 0)] = 'Intro'), (i[(i.Customize = 1)] = 'Customize'), (i[(i.Tips = 2)] = 'Tips'), i);
function m(e) {
    let { selectedTab: t, onClick: n, submitted: i } = e;
    return (0, s.jsxs)('div', {
        className: o.tabs,
        children: [
            (0, s.jsx)(x, {
                tab: 0,
                selectedTab: t,
                label: c.intl.string(c.t.JwwVrq),
                disabled: i,
                onClick: n
            }),
            (0, s.jsx)(x, {
                tab: 1,
                selectedTab: t,
                label: c.intl.string(c.t['56vYWV']),
                disabled: i,
                onClick: n
            }),
            (0, s.jsx)(x, {
                tab: 2,
                selectedTab: t,
                label: c.intl.string(c.t['0l0rJi']),
                disabled: !i,
                onClick: n
            })
        ]
    });
}
function x(e) {
    let { tab: t, selectedTab: n, label: i, disabled: r, onClick: c } = e;
    return r
        ? (0, s.jsxs)('div', {
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                  (0, s.jsx)('div', { className: o.progressBar }),
                  (0, s.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: n === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          })
        : (0, s.jsxs)(l.P3F, {
              onClick: () => c(t),
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                  (0, s.jsx)('div', { className: o.progressBar }),
                  (0, s.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: n === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          });
}
