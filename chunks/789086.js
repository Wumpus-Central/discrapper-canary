a.d(t, { Z: () => d });
var n = a(255367),
    r = a(442837),
    l = a(481060),
    i = a(346486),
    s = a(146282),
    o = a(371991),
    c = a(206583);
function d() {
    let e = (0, r.e7)([s.Z], () => {
            var e;
            return (null == (e = s.Z.getFeed(c.YN.GLOBAL_FEED)) ? void 0 : e.refresh_stale_inbox_after_ms) != null;
        }),
        { loading: t, nextFetchDate: a } = (0, r.cj)([s.Z], () => {
            var e;
            return null != (e = s.Z.getFeedState(c.YN.GLOBAL_FEED)) ? e : { loading: !1 };
        }),
        d = (0, r.e7)([s.Z], () => s.Z.getLastFeedFetchDate(c.YN.GLOBAL_FEED));
    return (0, n.jsxs)('div', {
        children: [
            t
                ? (0, n.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      children: '(fetching)'
                  })
                : (0, n.jsxs)(l.Text, {
                      variant: 'text-md/normal',
                      children: ['Next fetch: ', null != a ? (0, n.jsx)(i.Z, { deadline: a }) : e ? '(awaiting push)' : '(unscheduled)']
                  }),
            (0, n.jsxs)(l.Text, {
                variant: 'text-md/normal',
                children: [
                    'Last fetch:',
                    ' ',
                    null != d
                        ? (0, n.jsx)(o.x3, {
                              inline: !0,
                              entry: { start: d.getTime() }
                          })
                        : '(never)'
                ]
            })
        ]
    });
}
