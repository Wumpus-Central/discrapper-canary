n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(990547),
    o = n(399606),
    s = n(481060),
    c = n(278323),
    u = n(213609),
    d = n(728345),
    p = n(372900),
    f = n(404577),
    h = n(19780),
    g = n(594174),
    m = n(607361),
    b = n(463421),
    y = n(981631),
    v = n(486014),
    O = n(388032),
    j = n(67103);
function x(e) {
    let t,
        { activity: n, channel: l, userId: a } = e,
        u = (0, d.IX)(n.application_id).data,
        [p, f] = i.useState(!1),
        [g, m] = i.useState(0),
        b = (0, o.e7)([h.Z], () => h.Z.getChannelId() !== l.id);
    async function x() {
        m(1);
        try {
            await c.Z.sendActivityInvite({
                type: y.mFx.STREAM_REQUEST,
                channelId: l.id,
                activity: n,
                content: "<@".concat(a, ">"),
                location: "request to stream hover",
                targetUserId: a,
            });
        } catch (e) {
            m(0);
            return;
        }
        m(2);
    }
    if ((b && (t = O.intl.string(v.default.qRXats)), n.type === y.IIU.PLAYING)) {
        let e = null == u ? void 0 : u.getIconURL(46);
        return (0, r.jsxs)("div", {
            className: j.activityRow,
            children: [
                (0, r.jsxs)("div", {
                    className: j.activityRowContent,
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
                                  onError: () => f(!0),
                              }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: O.intl.string(O.t.BMTj28),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    children: n.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(s.Button, {
                    loading: 1 === g,
                    disabled: b || 2 === g,
                    fullWidth: !0,
                    size: "sm",
                    text: 2 === g ? O.intl.string(v.default["8HU1M2"]) : O.intl.string(v.default.DKHhec),
                    onClick: x,
                }),
                null != t &&
                    (0, r.jsx)(s.Text, {
                        className: j.disabledReason,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}
function C(e) {
    let { userId: t, channel: n } = e,
        s = (0, o.e7)([g.default], () => g.default.getUser(t)),
        c = (0, b.Z)(t, n.guild_id),
        d = (0, m.Z)(t, n.id),
        h = i.useMemo(
            () =>
                l.uniqWith(c, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = f.Z.getGameByName(e.name),
                        r = f.Z.getGameByName(t.name);
                    return (null != n && n === r) || e.name === t.name;
                }),
            [c],
        ),
        y = null == s || !d || 0 === h.length;
    return ((0, u.Z)(
        {
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
            properties: {},
        },
        { disableTrack: y },
    ),
    y)
        ? null
        : (0, r.jsx)(p.Z.Provider, {
              value: n.guild_id,
              children: (0, r.jsx)("div", {
                  className: j.root,
                  children: (0, r.jsx)("div", {
                      className: j.activityList,
                      children: h.map((e) =>
                          (0, r.jsx)(
                              x,
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
