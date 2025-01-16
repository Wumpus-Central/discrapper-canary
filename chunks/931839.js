n.d(t, {
    O: function () {
        return s;
    },
    Z: function () {
        return m;
    }
});
var i,
    s,
    r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    c = n(481060),
    d = n(388032),
    o = n(311893);
function m(e) {
    let { selectedTab: t, onClick: n, submitted: i } = e;
    return (0, r.jsxs)('div', {
        className: o.tabs,
        children: [
            (0, r.jsx)(x, {
                tab: 0,
                selectedTab: t,
                label: d.intl.string(d.t.JwwVrq),
                disabled: i,
                onClick: n
            }),
            (0, r.jsx)(x, {
                tab: 1,
                selectedTab: t,
                label: d.intl.string(d.t['56vYWV']),
                disabled: i,
                onClick: n
            }),
            (0, r.jsx)(x, {
                tab: 2,
                selectedTab: t,
                label: d.intl.string(d.t['0l0rJi']),
                disabled: !i,
                onClick: n
            })
        ]
    });
}
function x(e) {
    let { tab: t, selectedTab: n, label: i, disabled: s, onClick: l } = e;
    return s
        ? (0, r.jsxs)('div', {
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                  (0, r.jsx)('div', { className: o.progressBar }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: n === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          })
        : (0, r.jsxs)(c.Clickable, {
              onClick: () => l(t),
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                  (0, r.jsx)('div', { className: o.progressBar }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: n === t ? 'text-brand' : 'text-muted',
                      children: i
                  })
              ]
          });
}
((i = s || (s = {}))[(i.Intro = 0)] = 'Intro'), (i[(i.Customize = 1)] = 'Customize'), (i[(i.Tips = 2)] = 'Tips');
