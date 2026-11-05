(a.d(e, { K: () => v }), a(321073));
var n = a(477900);
a(582128);
var t = a(192308),
    i = a(858899),
    d = a(294454),
    o = a(118517),
    r = a(734057),
    s = a(31717),
    c = a(596344),
    u = a(518960),
    h = a(341923),
    m = a(489496),
    g = a(132319),
    f = a(589553),
    C = a(696016),
    p = a(792996);
async function v(l, e) {
    let { channelId: v, analyticsLocations: _, messageReference: I, povTargetInformation: w, onShared: A } = e,
        K = r.A.getChannel(v);
    if (null != K) {
        if (null != I) {
            let l = c.A.getMessage(I.channel_id, I.message_id);
            null != l && (0, o.Yf)({ message: l, channel: K, shouldMention: !1, showMentionToggle: !1 });
        }
        let e = (0, h.s)();
        try {
            let a = [],
                n = [];
            for (let t of l) {
                let l = (function (l, e) {
                        if (null == e || null == l.syncTimestamp) return l;
                        let { duration: a, syncTimestamp: n } = e,
                            t = l.syncTimestamp - l.length,
                            i = l.syncTimestamp,
                            d = Math.max(t, n - 1e3 * a),
                            o = Math.min(i, n);
                        return d < o
                            ? {
                                  ...l,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...l.editMetadata,
                                      start: (d - t) / 1e3,
                                      end: (o - t) / 1e3,
                                  },
                              }
                            : l;
                    })(t, w),
                    i = await (0, m.VO)(l, { analyticsLocations: _, watermark: e, isTemporaryEdit: l !== t }),
                    d = (0, f.A)(l, l.type === C.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case C.nQ.CLIP:
                    case C.nQ.VOICE_CLIP:
                        (a.push(new File([i], d, { type: "video/mp4" })), n.push({ clip: (0, g.J)(l) }));
                        break;
                    case C.nQ.SCREENSHOT:
                        (a.push(new File([i], d, { type: "image/jpeg" })), n.push({}));
                        break;
                    default:
                        t.type;
                }
            }
            ((0, u.R)(a, K, s.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), A?.(), t.s7());
        } catch (l) {
            throw (C.GU.error(l), e && (0, i.P0)({ text: p.intl.string(p.t.iufib1), variant: "critical" }), l);
        }
    } else
        (0, t.mM)(
            async () => {
                let { default: e } = await Promise.all([
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
                    a.e(937139),
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
                    a.e(37085),
                    a.e(890027),
                    a.e(900361),
                    a.e(161379),
                    a.e(844780),
                    a.e(791154),
                    a.e(592028),
                    a.e(776750),
                    a.e(445980),
                    a.e(425906),
                    a.e(123216),
                    a.e(648365),
                    a.e(182408),
                    a.e(45072),
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
                    a.e(981237),
                    a.e(303730),
                    a.e(362422),
                    a.e(97210),
                    a.e(789573),
                    a.e(732272),
                    a.e(236946),
                    a.e(935948),
                    a.e(692639),
                    a.e(890480),
                    a.e(593020),
                    a.e(440963),
                    a.e(657003),
                    a.e(766031),
                    a.e(394317),
                    a.e(304329),
                    a.e(12762),
                    a.e(895008),
                    a.e(92871),
                ]).then(a.bind(a, 243258));
                return (a) => (0, n.jsx)(e, { ...a, clips: l, analyticsLocations: _, onShared: A });
            },
            { stackingBehavior: "stack", modalKey: d.aU },
        );
}
