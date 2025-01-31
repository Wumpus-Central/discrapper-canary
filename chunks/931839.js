s.d(t, {
    O: () => o,
    Z: () => m
});
var i,
    n = s(200651);
s(192379);
var a = s(120356),
    r = s.n(a),
    l = s(481060),
    c = s(388032),
    d = s(311893),
    o = (((i = {})[(i.Intro = 0)] = 'Intro'), (i[(i.Customize = 1)] = 'Customize'), (i[(i.Tips = 2)] = 'Tips'), i);
function m(e) {
    let { selectedTab: t, onClick: s, submitted: i } = e;
    return (0, n.jsxs)('div', {
        className: d.tabs,
        children: [
            (0, n.jsx)(x, {
                tab: 0,
                selectedTab: t,
                label: c.intl.string(c.t.JwwVrq),
                disabled: i,
                onClick: s
            }),
            (0, n.jsx)(x, {
                tab: 1,
                selectedTab: t,
                label: c.intl.string(c.t['56vYWV']),
                disabled: i,
                onClick: s
            }),
            (0, n.jsx)(x, {
                tab: 2,
                selectedTab: t,
                label: c.intl.string(c.t['0l0rJi']),
                disabled: !i,
                onClick: s
            })
        ]
    });
}
function x(e) {
    let { tab: t, selectedTab: s, label: i, disabled: a, onClick: c } = e;
    return a
        ? (0, n.jsxs)('div', {
              className: r()(d.tab, { [d.current]: s === t }),
              children: [
                  (0, n.jsx)('div', { className: d.progressBar }),
                  (0, n.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: s === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          })
        : (0, n.jsxs)(l.P3F, {
              onClick: () => c(t),
              className: r()(d.tab, { [d.current]: s === t }),
              children: [
                  (0, n.jsx)('div', { className: d.progressBar }),
                  (0, n.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: s === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          });
}
