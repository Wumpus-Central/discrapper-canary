n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(990547),
    o = n(399606),
    s = n(481060),
    c = n(278323),
    u = n(213609),
    d = n(728345),
    p = n(372900),
    h = n(77498),
    f = n(158776),
    m = n(19780),
    g = n(594174),
    b = n(607361),
    _ = n(981631),
    y = n(658805),
    C = n(388032),
    x = n(405143);
function v(e) {
    let t,
        { activity: n, channel: l, userId: a } = e,
        u = (0, d.IX)(n.application_id).data,
        [p, h] = i.useState(!1),
        [f, g] = i.useState(0),
        b = (0, o.e7)([m.Z], () => m.Z.getChannelId() !== l.id);
    async function v() {
        g(1);
        try {
            await c.Z.sendActivityInvite({
                type: _.mFx.STREAM_REQUEST,
                channelId: l.id,
                activity: n,
                content: "<@".concat(a, ">"),
                location: "request to stream hover",
                targetUserId: a,
            });
        } catch (e) {
            g(0);
            return;
        }
        g(2);
    }
    if ((b && (t = C.intl.string(y.default.qRXatr)), n.type === _.IIU.PLAYING)) {
        let e = null == u ? void 0 : u.getIconURL(46);
        return (0, r.jsxs)("div", {
            className: x.activityRow,
            children: [
                (0, r.jsxs)("div", {
                    className: x.activityRowContent,
                    children: [
                        p || null == e
                            ? (0, r.jsx)(s.IMN, {
                                  size: "custom",
                                  width: 46,
                                  height: 46,
                              })
                            : (0, r.jsx)("img", {
                                  src: e,
                                  alt: n.name,
                                  onError: () => h(!0),
                              }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-tertiary",
                                    children: C.intl.string(C.t.BMTj29),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    children: n.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(s.zxk, {
                    loading: 1 === f,
                    disabled: b || 2 === f,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === f ? C.intl.string(y.default["8HU1Mz"]) : C.intl.string(y.default.DKHheX),
                    onClick: v,
                }),
                null != t &&
                    (0, r.jsx)(s.Text, {
                        className: x.disabledReason,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}
function O(e) {
    let { userId: t, channel: n } = e,
        s = (0, o.e7)([g.default], () => g.default.getUser(t)),
        c = (0, o.e7)([f.Z], () => f.Z.getActivities(t, n.getGuildId())),
        d = (0, b.Z)(t, n.id),
        m = null == s || !d,
        y = i.useMemo(
            () =>
                l.uniqWith(
                    c.filter((e) => e.type === _.IIU.PLAYING),
                    (e, t) => {
                        if (e.application_id === t.application_id) return !0;
                        let n = h.Z.getGameByName(e.name),
                            r = h.Z.getGameByName(t.name);
                        return (null != n && n === r) || e.name === t.name;
                    },
                ),
            [c],
        );
    return ((0, u.Z)(
        {
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
            properties: {},
        },
        { disableTrack: m },
    ),
    m)
        ? null
        : (0, r.jsx)(p.Z.Provider, {
              value: n.guild_id,
              children: (0, r.jsx)("div", {
                  className: x.root,
                  children: (0, r.jsx)("div", {
                      className: x.activityList,
                      children: y.map((e) =>
                          (0, r.jsx)(
                              v,
                              {
                                  activity: e,
                                  channel: n,
                                  userId: t,
                              },
                              "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name),
                          ),
                      ),
                  }),
              }),
          });
}
