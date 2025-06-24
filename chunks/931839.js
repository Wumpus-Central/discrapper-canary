n.d(t, {
    O: () => d,
    Z: () => m
});
var i,
    r = n(255367);
n(73800);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    c = n(388032),
    o = n(923918),
    d = (((i = {})[(i.Intro = 0)] = 'Intro'), (i[(i.Customize = 1)] = 'Customize'), (i[(i.Tips = 2)] = 'Tips'), i);
function m(e) {
    let { selectedTab: t, onClick: n, submitted: i } = e;
    return (0, r.jsxs)('div', {
        className: o.tabs,
        children: [
            (0, r.jsx)(u, {
                tab: 0,
                selectedTab: t,
                label: c.intl.string(c.t.JwwVrq),
                disabled: i,
                onClick: n
            }),
            (0, r.jsx)(u, {
                tab: 1,
                selectedTab: t,
                label: c.intl.string(c.t['56vYWV']),
                disabled: i,
                onClick: n
            }),
            (0, r.jsx)(u, {
                tab: 2,
                selectedTab: t,
                label: c.intl.string(c.t['0l0rJi']),
                disabled: !i,
                onClick: n
            })
        ]
    });
}
function u(e) {
    let { tab: t, selectedTab: n, label: i, disabled: s, onClick: c } = e;
    return s
        ? (0, r.jsxs)('div', {
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                  (0, r.jsx)('div', { className: o.progressBar }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: n === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          })
        : (0, r.jsxs)(l.P3F, {
              onClick: () => c(t),
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                  (0, r.jsx)('div', { className: o.progressBar }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: n === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          });
}
