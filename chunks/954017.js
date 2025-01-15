n.r(t),
    n.d(t, {
        sendReactionToActivity: function () {
            return _;
        },
        sendReplyToActivity: function () {
            return x;
        }
    });
var i = n(512722),
    l = n.n(i),
    a = n(493683),
    r = n(726542),
    s = n(122810),
    o = n(503438),
    c = n(693824),
    u = n(690725),
    d = n(90712),
    m = n(592125),
    f = n(81063),
    p = n(176354),
    h = n(201133),
    g = n(55000),
    v = n(314091),
    S = n(981631),
    I = n(388032);
let _ = async (e) => {
        let { reaction: t, altText: n, ...i } = e,
            l = await C(i);
        (0, h.a)({
            file: l,
            altText: n,
            user: i.user,
            reaction: t
        });
    },
    x = async (e) => {
        let { reply: t, altText: n, ...i } = e,
            r = await C(i),
            s = await a.Z.openPrivateChannel(i.user.id, !1, !1),
            o = m.Z.getChannel(s);
        l()(null != o, 'Channel cannot be null'),
            (0, h.B)({
                file: r,
                altText: n,
                channel: o,
                reply: t
            });
    },
    E = (e) => {
        var t;
        let { activity: i, application: l, user: a } = e,
            { theme: r } = (0, v.j3)(a, 'black'),
            s = 'dark' === r,
            o = (0, d.Z)(i),
            { assets: c, application_id: u } = i,
            m = (0, f.getAssetImage)(u, null == c ? void 0 : c.large_image, 64),
            h = null == l ? void 0 : l.getIconURL(64),
            g = null != o ? (s ? o.icon.darkPNG : o.icon.lightPNG) : i.type === S.IIU.PLAYING ? (s ? n(414575) : n(807612)) : null,
            I =
                i.type === S.IIU.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null
                    ? (0, p.qc)({
                          id: i.emoji.id,
                          name: i.emoji.name,
                          animated: !1
                      })
                    : null;
        return {
            ...(null != g && { Platform: g }),
            ...(null != m && { AssetImage: m.includes('http') ? m : n(869469)(m) }),
            ...(null != h && { ApplicationImage: h }),
            ...(null != I && { HangStatus: I })
        };
    },
    C = async (e) => {
        let { user: t, activity: n, application: i, stream: l } = e,
            d = await a.Z.openPrivateChannel(t.id, !1, !1),
            m = E({
                activity: n,
                application: i,
                user: t
            });
        return await (0, u.f)({
            assetsToLoad: m,
            drawImage: (e) => {
                var i;
                e.setFont({ truncate: c.GX.Truncate }),
                    null != l ? N(e, n, t) : (0, o.Z)(n) ? b(e, n, t) : (0, s.Z)(n) && n.name === r.Z.get(S.ABu.LEAGUE_OF_LEGENDS).name ? A(e, n, t) : n.type === S.IIU.HANG_STATUS ? T(e, n, t) : Z(e, n, t),
                    (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) &&
                        e.drawImage(
                            'Platform',
                            {
                                x: g.En - g.o3 - g.ez,
                                y: g.o3
                            },
                            {
                                w: g.ez,
                                h: g.ez
                            }
                        );
            },
            exportConfigs: {
                format: c.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(n.name, '.png').toLowerCase(),
                fileType: 'png',
                channelId: d
            }
        });
    },
    y = (e, t) => {
        e.setColor('dark' === t ? 'white' : 'black'),
            e.drawPath(
                g.Cv,
                {
                    x: g.o3,
                    y: g.o3
                },
                !0,
                2 + 2 / 3
            );
    },
    Z = (e, t, n) => {
        var i, l, a;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: r, theme: s } = (0, v.j3)(n, 'black');
        e.setColor(r),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: g.o3,
                          y: g.o3
                      },
                      {
                          w: g.vS,
                          h: g.vS
                      },
                      8
                  )
                : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: g.o3,
                            y: g.o3
                        },
                        {
                            w: g.vS,
                            h: g.vS
                        },
                        8
                    )
                  : y(e, s);
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.name),
                {
                    x: o,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, v.b6)(t.timestamps)),
                    {
                        x: o,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    },
    b = (e, t, n) => {
        var i, l;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: a, theme: r } = (0, v.j3)(n, 'black');
        e.setColor(a),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage')) &&
                e.drawRoundedImage(
                    'AssetImage',
                    {
                        x: g.o3,
                        y: g.o3
                    },
                    {
                        w: g.vS,
                        h: g.vS
                    },
                    8
                );
        let s = g.vS + g.o3 + g.sB;
        e.setColor('dark' === r ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: s,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            }),
            e.drawText(
                'by '.concat(t.state),
                {
                    x: s,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    T = (e, t, i) => {
        var l, a;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: r, theme: s } = (0, v.j3)(i, 'black');
        e.setColor(r),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('HangStatus'))
                ? e.drawRoundedImage(
                      'HangStatus',
                      {
                          x: g.o3,
                          y: g.o3
                      },
                      {
                          w: g.vS,
                          h: g.vS
                      },
                      8
                  )
                : y(e, s);
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                I.intl.string(I.t['74vS//']),
                {
                    x: o,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            });
        let c = '';
        (c = (0, n(833858).O8)(t)),
            e.drawText(
                c,
                {
                    x: o,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    A = (e, t, n) => {
        var i;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: l, theme: a } = (0, v.j3)(n, 'black');
        e.setColor(l),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'white' : 'black'),
            e.drawRoundedImage(
                'AssetImage',
                {
                    x: g.o3,
                    y: g.o3
                },
                {
                    w: g.vS,
                    h: g.vS
                },
                8
            ) === c.vP.Failure &&
                e.drawPath(
                    g.Cv,
                    {
                        x: g.o3,
                        y: g.o3
                    },
                    !0,
                    2 + 2 / 3
                );
        let r = g.vS + g.o3 + g.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: r,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) ? g.ee : g.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            }),
            e.drawText(
                ''.concat(t.state),
                {
                    x: r,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    N = (e, t, n) => {
        var i, l, a;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: r, theme: s } = (0, v.j3)(n, 'black');
        e.setColor(r),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: g.dI,
                    w: g.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: g.o3,
                          y: g.o3
                      },
                      {
                          w: g.vS,
                          h: g.vS
                      },
                      8
                  )
                : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: g.o3,
                            y: g.o3
                        },
                        {
                            w: g.vS,
                            h: g.vS
                        },
                        8
                    )
                  : y(e, s);
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === s ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                'Streaming '.concat(t.name),
                {
                    x: o,
                    y: g.SG + g.Nv * (null != t.timestamps ? 1 : 1.5),
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, v.b6)(t.timestamps)),
                    {
                        x: o,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    };
