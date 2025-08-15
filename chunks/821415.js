n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(990547),
    o = n(399606),
    s = n(481060),
    c = n(278323),
    u = n(99690),
    d = n(740265),
    p = n(213609),
    h = n(728345),
    f = n(372900),
    m = n(809244),
    g = n(158776),
    b = n(19780),
    y = n(594174),
    _ = n(877912),
    C = n(762578),
    x = n(981631),
    v = n(658805),
    j = n(388032),
    O = n(405143);
function E(e) {
    let { activity: t, channel: n, userId: l } = e,
        a = (0, h.IX)(t.application_id).data,
        u = (0, _.Z)(l),
        [p, f] = i.useState(!1),
        [m, g] = i.useState(!1),
        y = (0, o.e7)([b.Z], () => b.Z.getChannelId() !== n.id);
    async function C() {
        g(!0);
        try {
            await c.Z.sendActivityInvite({
                type: x.mFx.STREAM_REQUEST,
                channelId: n.id,
                activity: t,
                content: "<@".concat(l, ">"),
                location: "request to stream hover",
                targetUserId: l,
            });
        } finally {
            g(!1);
        }
    }
    if (t.type === x.IIU.PLAYING) {
        let e = null == a ? void 0 : a.getIconURL(46);
        return (0, r.jsxs)("div", {
            className: O.activityRow,
            children: [
                (0, r.jsxs)("div", {
                    className: O.activityRowContent,
                    children: [
                        p || null == e
                            ? (0, r.jsx)(s.IMN, {
                                  size: "custom",
                                  width: 46,
                                  height: 46,
                              })
                            : (0, r.jsx)("img", {
                                  src: e,
                                  alt: t.name,
                                  onError: () => f(!0),
                              }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-tertiary",
                                    children: (0, d.Z)(t),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    children: t.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(s.zxk, {
                    loading: m,
                    disabled: u || y,
                    fullWidth: !0,
                    size: "sm",
                    text: u
                        ? j.intl.string(v.default["8HU1Mz"])
                        : y
                          ? j.intl.string(v.default.qRXatr)
                          : j.intl.string(v.default.DKHheX),
                    onClick: C,
                }),
            ],
        });
    }
}
function S(e) {
    let { userId: t, channel: n } = e,
        c = (0, o.e7)([y.default], () => y.default.getUser(t)),
        d = (0, o.e7)([g.Z], () => g.Z.getActivities(t, n.getGuildId())),
        h = (0, o.e7)([g.Z], () => g.Z.getStatus(t, n.getGuildId())),
        b = (0, m.Z)(n, null != c ? c : null),
        _ = (0, C.Z)(n.id),
        v = null == c || !_,
        j = i.useMemo(
            () =>
                l.uniqBy(
                    d.filter((e) => e.type === x.IIU.PLAYING),
                    (e) => e.application_id,
                ),
            [d],
        );
    return ((0, p.Z)(
        {
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
            properties: {},
        },
        { disableTrack: v },
    ),
    v)
        ? null
        : (0, r.jsx)(f.Z.Provider, {
              value: n.guild_id,
              children: (0, r.jsxs)("div", {
                  className: O.root,
                  children: [
                      (0, r.jsxs)("div", {
                          className: O.userHeader,
                          children: [
                              (0, r.jsx)(u.Z, {
                                  user: c,
                                  status: h,
                                  size: s.EFr.SIZE_24,
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  children: b,
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: O.activityList,
                          children: j.map((e) =>
                              (0, r.jsx)(
                                  E,
                                  {
                                      activity: e,
                                      channel: n,
                                      userId: t,
                                  },
                                  "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name),
                              ),
                          ),
                      }),
                  ],
              }),
          });
}
