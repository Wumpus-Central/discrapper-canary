n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n(399606),
    s = n(481060),
    l = n(278323),
    c = n(99690),
    u = n(740265),
    d = n(728345),
    f = n(372900),
    _ = n(809244),
    p = n(158776),
    h = n(19780),
    m = n(594174),
    g = n(172029),
    E = n(762578),
    b = n(981631),
    y = n(704483),
    O = n(388032),
    v = n(430238);
let I = 46;
function T(e) {
    let { activity: t, channel: n, userId: o } = e,
        c = (0, d.IX)(t.application_id).data,
        f = (0, a.e7)([g.Z], () => null != g.Z.getPendingRequestForUser(o)),
        [_, p] = i.useState(!1),
        [m, E] = i.useState(!1),
        T = (0, a.e7)([h.Z], () => h.Z.getChannelId() !== n.id);
    async function S() {
        E(!0);
        try {
            await l.Z.sendActivityInvite({
                type: b.mFx.STREAM_REQUEST,
                channelId: n.id,
                activity: t,
                content: "<@".concat(o, ">"),
                location: "request to stream hover",
                targetUserId: o,
            });
        } finally {
            E(!1);
        }
    }
    function A() {
        return f
            ? O.intl.string(y.default["8HU1Mz"])
            : T
              ? O.intl.string(y.default.qRXatr)
              : O.intl.string(y.default.DKHheX);
    }
    if (t.type === b.IIU.PLAYING) {
        let e = null == c ? void 0 : c.getIconURL(I);
        return (0, r.jsxs)("div", {
            className: v.activityRow,
            children: [
                (0, r.jsxs)("div", {
                    className: v.activityRowContent,
                    children: [
                        _ || null == e
                            ? (0, r.jsx)(s.IMN, {
                                  size: "custom",
                                  width: I,
                                  height: I,
                              })
                            : (0, r.jsx)("img", {
                                  src: e,
                                  alt: t.name,
                                  onError: () => p(!0),
                              }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-tertiary",
                                    children: (0, u.Z)(t),
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
                    disabled: f || T,
                    fullWidth: !0,
                    size: "sm",
                    text: A(),
                    onClick: S,
                }),
            ],
        });
    }
}
function S(e) {
    let { userId: t, channel: n } = e,
        l = (0, a.e7)([m.default], () => m.default.getUser(t)),
        u = (0, a.e7)([p.Z], () => p.Z.getActivities(t, n.getGuildId())),
        d = (0, a.e7)([p.Z], () => p.Z.getStatus(t, n.getGuildId())),
        h = (0, _.Z)(n, null != l ? l : null),
        g = (0, E.Z)(n.id),
        y = i.useMemo(
            () =>
                o.uniqBy(
                    u.filter((e) => e.type === b.IIU.PLAYING),
                    (e) => e.application_id,
                ),
            [u],
        );
    return null != l && g
        ? (0, r.jsx)(f.Z.Provider, {
              value: n.guild_id,
              children: (0, r.jsxs)("div", {
                  className: v.root,
                  children: [
                      (0, r.jsxs)("div", {
                          className: v.userHeader,
                          children: [
                              (0, r.jsx)(c.Z, {
                                  user: l,
                                  status: d,
                                  size: s.EFr.SIZE_24,
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  children: h,
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: v.activityList,
                          children: y.map((e) =>
                              (0, r.jsx)(
                                  T,
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
          })
        : null;
}
