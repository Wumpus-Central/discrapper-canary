n.d(t, { Z: () => x }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(392711),
    a = n(990547),
    o = n(399606),
    s = n(481060),
    c = n(278323),
    u = n(213609),
    d = n(728345),
    p = n(372900),
    h = n(77498),
    f = n(19780),
    m = n(594174),
    g = n(607361),
    b = n(463421),
    C = n(981631),
    y = n(946992),
    v = n(388032),
    _ = n(405143);
function O(e) {
    let t,
        { activity: n, channel: l, userId: a } = e,
        u = (0, d.IX)(n.application_id).data,
        [p, h] = r.useState(!1),
        [m, g] = r.useState(0),
        b = (0, o.e7)([f.Z], () => f.Z.getChannelId() !== l.id);
    async function O() {
        g(1);
        try {
            await c.Z.sendActivityInvite({
                type: C.mFx.STREAM_REQUEST,
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
    if ((b && (t = v.intl.string(y.default.qRXats)), n.type === C.IIU.PLAYING)) {
        let e = null == u ? void 0 : u.getIconURL(46);
        return (0, i.jsxs)("div", {
            className: _.activityRow,
            children: [
                (0, i.jsxs)("div", {
                    className: _.activityRowContent,
                    children: [
                        p || null == e
                            ? (0, i.jsx)(s.IMN, {
                                  size: "custom",
                                  width: 46,
                                  height: 46,
                              })
                            : (0, i.jsx)("img", {
                                  src: e,
                                  alt: n.name,
                                  onError: () => h(!0),
                              }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: v.intl.string(v.t.BMTj28),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    children: n.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(s.Button, {
                    loading: 1 === m,
                    disabled: b || 2 === m,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === m ? v.intl.string(y.default["8HU1M2"]) : v.intl.string(y.default.DKHhec),
                    onClick: O,
                }),
                null != t &&
                    (0, i.jsx)(s.Text, {
                        className: _.disabledReason,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}
function x(e) {
    let { userId: t, channel: n } = e,
        s = (0, o.e7)([m.default], () => m.default.getUser(t)),
        c = (0, b.Z)(t, n.guild_id),
        d = (0, g.Z)(t, n.id),
        f = r.useMemo(
            () =>
                l.uniqWith(c, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = h.Z.getGameByName(e.name),
                        i = h.Z.getGameByName(t.name);
                    return (null != n && n === i) || e.name === t.name;
                }),
            [c],
        ),
        C = null == s || !d || 0 === f.length;
    return ((0, u.Z)(
        {
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
            properties: {},
        },
        { disableTrack: C },
    ),
    C)
        ? null
        : (0, i.jsx)(p.Z.Provider, {
              value: n.guild_id,
              children: (0, i.jsx)("div", {
                  className: _.root,
                  children: (0, i.jsx)("div", {
                      className: _.activityList,
                      children: f.map((e) =>
                          (0, i.jsx)(
                              O,
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
