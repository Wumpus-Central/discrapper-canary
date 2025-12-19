n.d(t, { Z: () => E }), n(388685);
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
    f = n(77498),
    h = n(19780),
    m = n(594174),
    g = n(607361),
    b = n(463421),
    y = n(981631),
    C = n(486014),
    v = n(388032),
    x = n(67103);
function O(e) {
    let t,
        { activity: n, channel: l, userId: a } = e,
        u = (0, d.IX)(n.application_id).data,
        [p, f] = r.useState(!1),
        [m, g] = r.useState(0),
        b = (0, o.e7)([h.Z], () => h.Z.getChannelId() !== l.id);
    async function O() {
        g(1);
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
            g(0);
            return;
        }
        g(2);
    }
    if ((b && (t = v.intl.string(C.default.qRXats)), n.type === y.IIU.PLAYING)) {
        let e = null == u ? void 0 : u.getIconURL(46);
        return (0, i.jsxs)("div", {
            className: x.activityRow,
            children: [
                (0, i.jsxs)("div", {
                    className: x.activityRowContent,
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
                                  onError: () => f(!0),
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
                    text: 2 === m ? v.intl.string(C.default["8HU1M2"]) : v.intl.string(C.default.DKHhec),
                    onClick: O,
                }),
                null != t &&
                    (0, i.jsx)(s.Text, {
                        className: x.disabledReason,
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: t,
                    }),
            ],
        });
    }
}
function E(e) {
    let { userId: t, channel: n } = e,
        s = (0, o.e7)([m.default], () => m.default.getUser(t)),
        c = (0, b.Z)(t, n.guild_id),
        d = (0, g.Z)(t, n.id),
        h = r.useMemo(
            () =>
                l.uniqWith(c, (e, t) => {
                    if (e.application_id === t.application_id) return !0;
                    let n = f.Z.getGameByName(e.name),
                        i = f.Z.getGameByName(t.name);
                    return (null != n && n === i) || e.name === t.name;
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
        : (0, i.jsx)(p.Z.Provider, {
              value: n.guild_id,
              children: (0, i.jsx)("div", {
                  className: x.root,
                  children: (0, i.jsx)("div", {
                      className: x.activityList,
                      children: h.map((e) =>
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
