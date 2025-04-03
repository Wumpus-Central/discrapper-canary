n.d(t, { Z: () => d });
var r = n(200651),
    a = n(442837),
    l = n(481060),
    i = n(346486),
    o = n(146282),
    s = n(371991),
    c = n(206583);
function d() {
    let e = (0, a.e7)([o.Z], () => {
            var e;
            return (null == (e = o.Z.getFeed(c.YN.GLOBAL_FEED)) ? void 0 : e.refresh_stale_inbox_after_ms) != null;
        }),
        { loading: t, nextFetchDate: n } = (0, a.cj)([o.Z], () => {
            var e;
            return null != (e = o.Z.getFeedState(c.YN.GLOBAL_FEED)) ? e : { loading: !1 };
        }),
        d = (0, a.e7)([o.Z], () => o.Z.getLastFeedFetchDate(c.YN.GLOBAL_FEED));
    return (0, r.jsxs)('div', {
        children: [
            t
                ? (0, r.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      children: '(fetching)'
                  })
                : (0, r.jsxs)(l.Text, {
                      variant: 'text-md/normal',
                      children: ['Next fetch: ', null != n ? (0, r.jsx)(i.Z, { deadline: n }) : e ? '(awaiting push)' : '(unscheduled)']
                  }),
            (0, r.jsxs)(l.Text, {
                variant: 'text-md/normal',
                children: [
                    'Last fetch:',
                    ' ',
                    null != d
                        ? (0, r.jsx)(s.x3, {
                              inline: !0,
                              entry: { start: d.getTime() }
                          })
                        : '(never)'
                ]
            })
        ]
    });
}
