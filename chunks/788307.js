r.d(n, {
    DD: function () {
        return w;
    },
    Iv: function () {
        return L;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(596454),
    f = r(122810),
    _ = r(74433),
    h = r(750881),
    p = r(44315),
    m = r(633302),
    g = r(574176),
    E = r(106301),
    v = r(223135),
    I = r(695346),
    T = r(314897),
    b = r(592125),
    y = r(496675),
    S = r(699516),
    A = r(979651),
    N = r(6074),
    C = r(626135),
    R = r(981631),
    O = r(299334);
let D = '14px';
function L(e) {
    let { emoji: n, className: r, animate: i = !0, hideTooltip: s, tooltipDelay: o } = e,
        u = I.Yk.useSetting(),
        f = null != n.id ? ':'.concat(n.name, ':') : m.ZP.translateSurrogatesToInlineEmoji(n.name),
        _ = {
            className: l()(O.emoji, r),
            emojiId: n.id,
            emojiName: n.name,
            autoplay: !0,
            animated: !!(n.animated && u && i)
        };
    return s
        ? (0, a.jsx)(d.Z, { ..._ })
        : (0, a.jsx)(c.Tooltip, {
              text: f,
              delay: o,
              children: (e) =>
                  (0, a.jsx)(d.Z, {
                      ...e,
                      ..._
                  })
          });
}
let x = 150,
    w = (e) => {
        let { className: n, text: r } = e,
            i = s.useRef(null),
            o = s.useRef(null),
            [u, d] = s.useState(!1);
        return (
            s.useLayoutEffect(() => {
                let { current: e } = i,
                    { current: n } = o;
                if (null != e && null != n) d(!(e.clientWidth < n.clientWidth && e.clientHeight <= n.clientHeight));
            }, [r]),
            (0, a.jsx)(c.Tooltip, {
                text: u || null == r || '' === r ? null : r,
                delay: x,
                'aria-label': !1,
                children: (e) =>
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)('div', {
                                ...e,
                                className: n,
                                ref: i,
                                children: r
                            }),
                            (0, a.jsx)('div', {
                                className: l()(O.textRuler, n),
                                ref: o,
                                'aria-hidden': !0,
                                children: r
                            })
                        ]
                    })
            })
        );
    },
    P = (e) => {
        let { activities: n, applicationStream: r, className: i, textClassName: o, emojiClassName: l, animate: d = !0, hideTooltip: m = !1, hideEmoji: I = !1, user: x, hasQuest: P } = e,
            M = null != n ? n.find((e) => e.type === R.IIU.CUSTOM_STATUS) : null,
            k = (0, u.e7)([T.default], () => T.default.getId() === (null == x ? void 0 : x.id)),
            U = (0, u.e7)([E.Z], () => (k ? E.Z.getHangStatusActivity() : null != n ? n.find((e) => e.type === R.IIU.HANG_STATUS) : null)),
            B = (0, u.e7)([A.Z, b.Z], () => {
                var e;
                return null != U && null != x ? b.Z.getChannel(null === (e = A.Z.getVoiceStateForUser(x.id)) || void 0 === e ? void 0 : e.channelId) : null;
            }),
            { enableHangStatus: G } = g.n.useExperiment(
                {
                    guildId: null == B ? void 0 : B.guild_id,
                    location: 'ActivityStatus'
                },
                { autoTrackExposure: !1 }
            ),
            Z = (0, p.Sl)(R.Ilk.BRAND_345),
            F = null,
            V = G && null != U && y.Z.can(R.Plq.CONNECT, B);
        V
            ? (F = (0, a.jsx)(v.Z, {
                  className: l,
                  hangStatusActivity: U
              }))
            : null != M &&
              null != M.emoji &&
              !I &&
              (F = (0, a.jsx)(L, {
                  emoji: M.emoji,
                  animate: d,
                  hideTooltip: m,
                  className: l
              }));
        let { blockeeExperimentEnabled: j, blockerExperimentEnabled: H, analyticsEligible: Y } = (0, h.NR)('activity-status-web'),
            W = (0, u.e7)([S.Z], () => (null != x ? S.Z.getRelationshipType(x.id) : R.OGo.NONE)),
            K = (0, _.Z)(n, r, void 0, V, j),
            z = (0, _.Z)(n, r, void 0, V, !1);
        s.useEffect(() => {
            if (null != z && null == z.activity && null != r && Y) {
                var e;
                C.default.track(R.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    activity_user_id: null == x ? void 0 : x.id,
                    discoverable: null === (e = r.discoverable) || void 0 === e || e,
                    surface: 'activity-status-web',
                    relationship_type: W,
                    treatment: (j && !1 === r.discoverable) || (H && W === R.OGo.BLOCKED) ? h.h9.HIDE : h.h9.SHOW
                });
            }
        }, [j, H, Y, x, r, z, W]);
        let q = null == K ? void 0 : K.activityText,
            Q = null != q && '' !== q;
        return (H && W === R.OGo.BLOCKED) || (null == F && !Q)
            ? null
            : (0, a.jsxs)('div', {
                  className: i,
                  children: [
                      F,
                      (0, a.jsx)(w, {
                          text: q,
                          className: o
                      }),
                      P &&
                          (0, a.jsx)(c.QuestsIcon, {
                              size: 'custom',
                              className: O.questsIcon,
                              height: D,
                              width: D,
                              color: Z.hex
                          }),
                      null != n && n.some((e) => (0, f.Z)(e, V))
                          ? (0, a.jsx)(N.Z, {
                                width: 16,
                                height: 16,
                                className: O.icon
                            })
                          : null
                  ]
              });
    };
n.ZP = P;
