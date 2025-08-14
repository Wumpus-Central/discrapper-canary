n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n(990547),
    s = n(399606),
    l = n(481060),
    c = n(278323),
    u = n(99690),
    d = n(740265),
    f = n(213609),
    _ = n(728345),
    p = n(372900),
    h = n(809244),
    m = n(158776),
    g = n(19780),
    E = n(594174),
    b = n(877912),
    y = n(762578),
    O = n(981631),
    v = n(658805),
    I = n(388032),
    T = n(405143);
let S = 46;
function A(e) {
    let { activity: t, channel: n, userId: o } = e,
        a = (0, _.IX)(t.application_id).data,
        u = (0, b.Z)(o),
        [f, p] = i.useState(!1),
        [h, m] = i.useState(!1),
        E = (0, s.e7)([g.Z], () => g.Z.getChannelId() !== n.id);
    async function y() {
        m(!0);
        try {
            await c.Z.sendActivityInvite({
                type: O.mFx.STREAM_REQUEST,
                channelId: n.id,
                activity: t,
                content: "<@".concat(o, ">"),
                location: "request to stream hover",
                targetUserId: o,
            });
        } finally {
            m(!1);
        }
    }
    function A() {
        return u
            ? I.intl.string(v.default["8HU1Mz"])
            : E
              ? I.intl.string(v.default.qRXatr)
              : I.intl.string(v.default.DKHheX);
    }
    if (t.type === O.IIU.PLAYING) {
        let e = null == a ? void 0 : a.getIconURL(S);
        return (0, r.jsxs)("div", {
            className: T.activityRow,
            children: [
                (0, r.jsxs)("div", {
                    className: T.activityRowContent,
                    children: [
                        f || null == e
                            ? (0, r.jsx)(l.IMN, {
                                  size: "custom",
                                  width: S,
                                  height: S,
                              })
                            : (0, r.jsx)("img", {
                                  src: e,
                                  alt: t.name,
                                  onError: () => p(!0),
                              }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-tertiary",
                                    children: (0, d.Z)(t),
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-md/medium",
                                    children: t.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(l.zxk, {
                    loading: h,
                    disabled: u || E,
                    fullWidth: !0,
                    size: "sm",
                    text: A(),
                    onClick: y,
                }),
            ],
        });
    }
}
function N(e) {
    let { userId: t, channel: n } = e,
        c = (0, s.e7)([E.default], () => E.default.getUser(t)),
        d = (0, s.e7)([m.Z], () => m.Z.getActivities(t, n.getGuildId())),
        _ = (0, s.e7)([m.Z], () => m.Z.getStatus(t, n.getGuildId())),
        g = (0, h.Z)(n, null != c ? c : null),
        b = (0, y.Z)(n.id),
        v = null == c || !b,
        I = i.useMemo(
            () =>
                o.uniqBy(
                    d.filter((e) => e.type === O.IIU.PLAYING),
                    (e) => e.application_id,
                ),
            [d],
        );
    return ((0, f.Z)(
        {
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
            properties: {},
        },
        { disableTrack: v },
    ),
    v)
        ? null
        : (0, r.jsx)(p.Z.Provider, {
              value: n.guild_id,
              children: (0, r.jsxs)("div", {
                  className: T.root,
                  children: [
                      (0, r.jsxs)("div", {
                          className: T.userHeader,
                          children: [
                              (0, r.jsx)(u.Z, {
                                  user: c,
                                  status: _,
                                  size: l.EFr.SIZE_24,
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "text-md/medium",
                                  children: g,
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: T.activityList,
                          children: I.map((e) =>
                              (0, r.jsx)(
                                  A,
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
