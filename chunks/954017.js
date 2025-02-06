n.d(t, {
    H: () => S,
    R: () => I
});
var l = n(512722),
    i = n.n(l),
    r = n(493683),
    a = n(726542),
    s = n(122810),
    o = n(503438),
    u = n(693824),
    c = n(690725),
    d = n(90712),
    m = n(592125),
    h = n(81063),
    f = n(201133),
    g = n(55000),
    p = n(314091),
    v = n(981631);
let S = async (e) => {
        let { reaction: t, altText: n, ...l } = e,
            i = await T(l);
        (0, f.a)({
            file: i,
            altText: n,
            user: l.user,
            reaction: t
        });
    },
    I = async (e) => {
        let { reply: t, altText: n, ...l } = e,
            a = await T(l),
            s = await r.Z.openPrivateChannel(l.user.id, !1, !1),
            o = m.Z.getChannel(s);
        i()(null != o, 'Channel cannot be null'),
            (0, f.B)({
                file: a,
                altText: n,
                channel: o,
                reply: t
            });
    },
    x = (e) => {
        let { activity: t, application: l, user: i } = e,
            { theme: r } = (0, p.j3)(i, 'black'),
            a = 'dark' === r,
            s = (0, d.Z)(t),
            { assets: o, application_id: u } = t,
            c = (0, h.getAssetImage)(u, null == o ? void 0 : o.large_image, 64),
            m = null == l ? void 0 : l.getIconURL(64),
            f = null != s ? (a ? s.icon.darkPNG : s.icon.lightPNG) : t.type === v.IIU.PLAYING ? (a ? n(414575) : n(807612)) : null;
        return {
            ...(null != f && { Platform: f }),
            ...(null != c && { AssetImage: c.includes('http') ? c : n(869469)(c) }),
            ...(null != m && { ApplicationImage: m })
        };
    },
    T = async (e) => {
        let { user: t, activity: n, application: l, stream: i } = e,
            d = await r.Z.openPrivateChannel(t.id, !1, !1),
            m = x({
                activity: n,
                application: l,
                user: t
            });
        return await (0, c.f)({
            assetsToLoad: m,
            drawImage: (e) => {
                var l;
                e.setFont({ truncate: u.GX.Truncate }),
                    null != i ? C(e, n, t) : (0, o.Z)(n) ? N(e, n, t) : (0, s.Z)(n) && n.name === a.Z.get(v.ABu.LEAGUE_OF_LEGENDS).name ? E(e, n, t) : y(e, n, t),
                    (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('Platform')) &&
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
                format: u.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(n.name, '.png').toLowerCase(),
                fileType: 'png',
                channelId: d
            }
        });
    },
    Z = (e, t) => {
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
    y = (e, t, n) => {
        var l, i, r;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: a, theme: s } = (0, p.j3)(n, 'black');
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
            (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('AssetImage'))
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
                : (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('ApplicationImage'))
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
                  : Z(e, s);
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
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, p.b6)(t.timestamps)),
                    {
                        x: o,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    },
    N = (e, t, n) => {
        var l, i;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: r, theme: a } = (0, p.j3)(n, 'black');
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
            (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('AssetImage')) &&
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
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
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
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(g.W3.Platform)) ? g.ee : g.sp
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
    E = (e, t, n) => {
        var l;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: i, theme: r } = (0, p.j3)(n, 'black');
        e.setColor(i),
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
            e.setColor('dark' === r ? 'white' : 'black'),
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
            ) === u.vP.Failure &&
                e.drawPath(
                    g.Cv,
                    {
                        x: g.o3,
                        y: g.o3
                    },
                    !0,
                    2 + 2 / 3
                );
        let a = g.vS + g.o3 + g.sB;
        e.setColor('dark' === r ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: a,
                    y: g.SG + 1 * g.Nv,
                    w: (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('Platform')) ? g.ee : g.sp
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
                    x: a,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    C = (e, t, n) => {
        var l, i, r;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: a, theme: s } = (0, p.j3)(n, 'black');
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
            (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('AssetImage'))
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
                : (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('ApplicationImage'))
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
                  : Z(e, s);
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
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, p.b6)(t.timestamps)),
                    {
                        x: o,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    };
