(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(399606),
    o = n(481060),
    s = n(278323),
    c = n(99690),
    u = n(740265),
    d = n(728345),
    p = n(372900),
    h = n(809244),
    f = n(158776),
    m = n(19780),
    g = n(594174),
    b = n(172029),
    _ = n(762578),
    y = n(981631),
    C = n(704483),
    x = n(388032),
    v = n(219917);
function j(e) {
    let { activity: t, channel: n, userId: l } = e,
        c = (0, d.IX)(t.application_id).data,
        p = (0, a.e7)([b.Z], () => null != b.Z.getPendingRequestForUser(l)),
        [h, f] = i.useState(!1),
        [g, _] = i.useState(!1),
        j = (0, a.e7)([m.Z], () => m.Z.getChannelId() !== n.id);
    async function O() {
        _(!0);
        try {
            await s.Z.sendActivityInvite({
                type: y.mFx.STREAM_REQUEST,
                channelId: n.id,
                activity: t,
                content: '<@'.concat(l, '>'),
                location: 'request to stream hover',
                targetUserId: l
            });
        } finally {
            _(!1);
        }
    }
    if (t.type === y.IIU.PLAYING) {
        let e = null == c ? void 0 : c.getIconURL(46);
        return (0, r.jsxs)('div', {
            className: v.activityRow,
            children: [
                (0, r.jsxs)('div', {
                    className: v.activityRowContent,
                    children: [
                        h || null == e
                            ? (0, r.jsx)(o.IMN, {
                                  size: 'custom',
                                  width: 46,
                                  height: 46
                              })
                            : (0, r.jsx)('img', {
                                  src: e,
                                  alt: t.name,
                                  onError: () => f(!0)
                              }),
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-tertiary',
                                    children: (0, u.Z)(t)
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    children: t.name
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(o.zxk, {
                    loading: g,
                    disabled: p || j,
                    fullWidth: !0,
                    size: 'sm',
                    text: p ? x.intl.string(C.default['8HU1Mz']) : j ? x.intl.string(C.default.qRXatr) : x.intl.string(C.default.DKHheX),
                    onClick: O
                })
            ]
        });
    }
}
function O(e) {
    let { userId: t, channel: n } = e,
        s = (0, a.e7)([g.default], () => g.default.getUser(t)),
        u = (0, a.e7)([f.Z], () => f.Z.getActivities(t, n.getGuildId())),
        d = (0, a.e7)([f.Z], () => f.Z.getStatus(t, n.getGuildId())),
        m = (0, h.Z)(n, null != s ? s : null),
        b = (0, _.Z)(n.id),
        C = i.useMemo(
            () =>
                l.uniqBy(
                    u.filter((e) => e.type === y.IIU.PLAYING),
                    (e) => e.application_id
                ),
            [u]
        );
    return null != s && b
        ? (0, r.jsx)(p.Z.Provider, {
              value: n.guild_id,
              children: (0, r.jsxs)('div', {
                  className: v.root,
                  children: [
                      (0, r.jsxs)('div', {
                          className: v.userHeader,
                          children: [
                              (0, r.jsx)(c.Z, {
                                  user: s,
                                  status: d,
                                  size: o.EFr.SIZE_24
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: m
                              })
                          ]
                      }),
                      (0, r.jsx)('div', {
                          className: v.activityList,
                          children: C.map((e) =>
                              (0, r.jsx)(
                                  j,
                                  {
                                      activity: e,
                                      channel: n,
                                      userId: t
                                  },
                                  ''.concat(e.session_id, '-').concat(e.application_id, '-').concat(e.name)
                              )
                          )
                      })
                  ]
              })
          })
        : null;
}
