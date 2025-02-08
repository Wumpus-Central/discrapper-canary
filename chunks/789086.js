n.d(t, { Z: () => d });
var a = n(200651),
    r = n(442837),
    l = n(481060),
    i = n(346486),
    o = n(146282),
    s = n(371991),
    c = n(206583);
function d() {
    let e = (0, r.e7)([o.Z], () => {
            var e;
            return (null === (e = o.Z.getFeed(c.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.refresh_stale_inbox_after_ms) != null;
        }),
        { loading: t, nextFetchDate: n } = (0, r.cj)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getFeedState(c.YN.GLOBAL_FEED)) && void 0 !== e ? e : { loading: !1 };
        }),
        d = (0, r.e7)([o.Z], () => o.Z.getLastFeedFetchDate(c.YN.GLOBAL_FEED));
    return (0, a.jsxs)('div', {
        children: [
            t
                ? (0, a.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      children: '(fetching)'
                  })
                : (0, a.jsxs)(l.Text, {
                      variant: 'text-md/normal',
                      children: ['Next fetch: ', null != n ? (0, a.jsx)(i.Z, { deadline: n }) : e ? '(awaiting push)' : '(unscheduled)']
                  }),
            (0, a.jsxs)(l.Text, {
                variant: 'text-md/normal',
                children: [
                    'Last fetch:',
                    ' ',
                    null != d
                        ? (0, a.jsx)(s.x3, {
                              inline: !0,
                              entry: { start: d.getTime() }
                          })
                        : '(never)'
                ]
            })
        ]
    });
}
