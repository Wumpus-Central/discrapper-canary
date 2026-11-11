(a.d(l, { K: () => C }), a(321073));
var n = a(477900);
a(582128);
var t = a(192308),
    i = a(858899),
    o = a(294454),
    d = a(118517),
    c = a(734057),
    r = a(31717),
    s = a(596344),
    u = a(518960),
    h = a(341923),
    m = a(489496),
    I = a(132319),
    g = a(589553),
    f = a(696016),
    v = a(792996);
async function C(e, l) {
    let { channelId: C, analyticsLocations: p, messageReference: _, povTargetInformation: A, onShared: M } = l,
        w = c.A.getChannel(C);
    if (null != w) {
        if (null != _) {
            let e = s.A.getMessage(_.channel_id, _.message_id);
            null != e && (0, d.Yf)({ message: e, channel: w, shouldMention: !1, showMentionToggle: !1 });
        }
        let l = (0, h.s)();
        try {
            let a = [],
                n = [];
            for (let t of e) {
                let e = (function (e, l) {
                        if (null == l || null == e.syncTimestamp) return e;
                        let { duration: a, syncTimestamp: n } = l,
                            t = e.syncTimestamp - e.length,
                            i = e.syncTimestamp,
                            o = Math.max(t, n - 1e3 * a),
                            d = Math.min(i, n);
                        return o < d
                            ? {
                                  ...e,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...e.editMetadata,
                                      start: (o - t) / 1e3,
                                      end: (d - t) / 1e3,
                                  },
                              }
                            : e;
                    })(t, A),
                    i = await (0, m.VO)(e, { analyticsLocations: p, watermark: l, isTemporaryEdit: e !== t }),
                    o = (0, g.A)(e, e.type === f.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case f.nQ.CLIP:
                    case f.nQ.VOICE_CLIP:
                        (a.push(new File([i], o, { type: "video/mp4" })), n.push({ clip: (0, I.J)(e) }));
                        break;
                    case f.nQ.SCREENSHOT:
                        (a.push(new File([i], o, { type: "image/jpeg" })), n.push({}));
                        break;
                    default:
                        t.type;
                }
            }
            ((0, u.R)(a, w, r.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), M?.(), t.s7());
        } catch (e) {
            throw (f.GU.error(e), l && (0, i.P0)({ text: v.intl.string(v.t.iufib1), variant: "critical" }), e);
        }
    } else
        (0, t.mM)(
            async () => {
                let { default: l } = await Promise.all([
                    a.e(985768),
                    a.e(325522),
                    a.e(790340),
                    a.e(147119),
                    a.e(425292),
                    a.e(209994),
                    a.e(116815),
                    a.e(582012),
                    a.e(166336),
                    a.e(113658),
                    a.e(162182),
                    a.e(860640),
                    a.e(681801),
                    a.e(570385),
                    a.e(67909),
                    a.e(916885),
                    a.e(272804),
                    a.e(449933),
                    a.e(985236),
                    a.e(678906),
                    a.e(799357),
                    a.e(491899),
                    a.e(889880),
                    a.e(375724),
                    a.e(999272),
                    a.e(701406),
                    a.e(216112),
                    a.e(490514),
                    a.e(962953),
                    a.e(550929),
                    a.e(358931),
                    a.e(168248),
                    a.e(533240),
                    a.e(936090),
                    a.e(841136),
                    a.e(560338),
                    a.e(340363),
                    a.e(459086),
                    a.e(720210),
                    a.e(601152),
                    a.e(319714),
                    a.e(331249),
                    a.e(335930),
                    a.e(921611),
                    a.e(686889),
                    a.e(560570),
                    a.e(592e3),
                    a.e(524434),
                    a.e(992956),
                    a.e(896691),
                    a.e(334733),
                    a.e(779367),
                    a.e(428643),
                    a.e(630290),
                    a.e(189423),
                    a.e(706073),
                    a.e(227512),
                    a.e(933947),
                    a.e(866475),
                    a.e(224155),
                    a.e(125729),
                    a.e(888326),
                    a.e(695765),
                    a.e(339282),
                    a.e(508702),
                    a.e(481647),
                    a.e(749248),
                    a.e(879315),
                    a.e(900361),
                    a.e(37085),
                    a.e(890027),
                    a.e(161379),
                    a.e(844780),
                    a.e(401518),
                    a.e(592028),
                    a.e(349460),
                    a.e(425906),
                    a.e(791154),
                    a.e(123216),
                    a.e(45072),
                    a.e(776750),
                    a.e(182408),
                    a.e(491279),
                    a.e(398793),
                    a.e(958428),
                    a.e(317225),
                    a.e(56021),
                    a.e(124060),
                    a.e(146566),
                    a.e(693832),
                    a.e(32661),
                    a.e(346102),
                    a.e(696123),
                    a.e(133179),
                    a.e(784103),
                    a.e(8563),
                    a.e(444376),
                    a.e(499941),
                    a.e(555793),
                    a.e(271244),
                    a.e(959134),
                    a.e(577084),
                    a.e(826240),
                    a.e(924862),
                    a.e(73500),
                    a.e(371482),
                    a.e(68904),
                    a.e(796867),
                    a.e(919307),
                    a.e(565617),
                    a.e(488934),
                    a.e(455924),
                    a.e(41991),
                    a.e(237834),
                    a.e(872648),
                    a.e(409843),
                    a.e(565065),
                    a.e(834386),
                    a.e(130674),
                    a.e(959669),
                    a.e(220518),
                    a.e(875842),
                    a.e(126780),
                    a.e(360781),
                    a.e(368111),
                    a.e(851243),
                    a.e(748015),
                    a.e(952577),
                    a.e(807771),
                    a.e(751202),
                    a.e(496715),
                    a.e(115754),
                    a.e(474055),
                    a.e(744385),
                    a.e(59413),
                    a.e(29664),
                    a.e(471064),
                    a.e(282094),
                    a.e(250478),
                    a.e(421658),
                    a.e(587244),
                    a.e(680986),
                    a.e(90373),
                    a.e(957506),
                    a.e(539319),
                    a.e(203618),
                    a.e(260218),
                    a.e(97210),
                    a.e(303730),
                    a.e(362422),
                    a.e(789573),
                    a.e(732272),
                    a.e(935948),
                    a.e(236946),
                    a.e(692639),
                    a.e(593020),
                    a.e(890480),
                    a.e(440963),
                    a.e(657003),
                    a.e(766031),
                    a.e(394317),
                    a.e(304329),
                    a.e(12762),
                    a.e(895008),
                    a.e(92871),
                ]).then(a.bind(a, 243258));
                return (a) => (0, n.jsx)(l, { ...a, clips: e, analyticsLocations: p, onShared: M });
            },
            { stackingBehavior: "stack", modalKey: o.aU },
        );
}
