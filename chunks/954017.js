n.d(t, {
    H: () => _,
    R: () => I
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
    p = n(201133),
    h = n(55000),
    g = n(314091),
    v = n(981631);
let _ = async (e) => {
        let { reaction: t, altText: n, ...i } = e,
            l = await x(i);
        (0, p.a)({
            file: l,
            altText: n,
            user: i.user,
            reaction: t
        });
    },
    I = async (e) => {
        let { reply: t, altText: n, ...i } = e,
            r = await x(i),
            s = await a.Z.openPrivateChannel(i.user.id, !1, !1),
            o = m.Z.getChannel(s);
        l()(null != o, 'Channel cannot be null'),
            (0, p.B)({
                file: r,
                altText: n,
                channel: o,
                reply: t
            });
    },
    S = (e) => {
        let { activity: t, application: i, user: l } = e,
            { theme: a } = (0, g.j3)(l, 'black'),
            r = 'dark' === a,
            s = (0, d.Z)(t),
            { assets: o, application_id: c } = t,
            u = (0, f.getAssetImage)(c, null == o ? void 0 : o.large_image, 64),
            m = null == i ? void 0 : i.getIconURL(64),
            p = null != s ? (r ? s.icon.darkPNG : s.icon.lightPNG) : t.type === v.IIU.PLAYING ? (r ? n(414575) : n(807612)) : null;
        return {
            ...(null != p && { Platform: p }),
            ...(null != u && { AssetImage: u.includes('http') ? u : n(869469)(u) }),
            ...(null != m && { ApplicationImage: m })
        };
    },
    x = async (e) => {
        let { user: t, activity: n, application: i, stream: l } = e,
            d = await a.Z.openPrivateChannel(t.id, !1, !1),
            m = S({
                activity: n,
                application: i,
                user: t
            });
        return await (0, u.f)({
            assetsToLoad: m,
            drawImage: (e) => {
                var i;
                e.setFont({ truncate: c.GX.Truncate }),
                    null != l ? b(e, n, t) : (0, o.Z)(n) ? Z(e, n, t) : (0, s.Z)(n) && n.name === r.Z.get(v.ABu.LEAGUE_OF_LEGENDS).name ? y(e, n, t) : C(e, n, t),
                    (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) &&
                        e.drawImage(
                            'Platform',
                            {
                                x: h.En - h.o3 - h.ez,
                                y: h.o3
                            },
                            {
                                w: h.ez,
                                h: h.ez
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
    E = (e, t) => {
        e.setColor('dark' === t ? 'white' : 'black'),
            e.drawPath(
                h.Cv,
                {
                    x: h.o3,
                    y: h.o3
                },
                !0,
                2 + 2 / 3
            );
    },
    C = (e, t, n) => {
        var i, l, a;
        e.setSize({
            w: h.En,
            h: h.dI
        });
        let { color: r, theme: s } = (0, g.j3)(n, 'black');
        e.setColor(r),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: h.o3,
                          y: h.o3
                      },
                      {
                          w: h.vS,
                          h: h.vS
                      },
                      8
                  )
                : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: h.o3,
                            y: h.o3
                        },
                        {
                            w: h.vS,
                            h: h.vS
                        },
                        8
                    )
                  : E(e, s);
        let o = h.vS + h.o3 + h.sB;
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
                    y: h.SG + 1 * h.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(h.W3.Platform)) ? h.ee : h.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, g.b6)(t.timestamps)),
                    {
                        x: o,
                        y: h.SG + 2 * h.Nv
                    },
                    !0
                ));
    },
    Z = (e, t, n) => {
        var i, l;
        e.setSize({
            w: h.En,
            h: h.dI
        });
        let { color: a, theme: r } = (0, g.j3)(n, 'black');
        e.setColor(a),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage')) &&
                e.drawRoundedImage(
                    'AssetImage',
                    {
                        x: h.o3,
                        y: h.o3
                    },
                    {
                        w: h.vS,
                        h: h.vS
                    },
                    8
                );
        let s = h.vS + h.o3 + h.sB;
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
                    y: h.SG + 1 * h.Nv,
                    w: (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has(h.W3.Platform)) ? h.ee : h.sp
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
                    y: h.SG + 2 * h.Nv
                },
                !0
            );
    },
    y = (e, t, n) => {
        var i;
        e.setSize({
            w: h.En,
            h: h.dI
        });
        let { color: l, theme: a } = (0, g.j3)(n, 'black');
        e.setColor(l),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'white' : 'black'),
            e.drawRoundedImage(
                'AssetImage',
                {
                    x: h.o3,
                    y: h.o3
                },
                {
                    w: h.vS,
                    h: h.vS
                },
                8
            ) === c.vP.Failure &&
                e.drawPath(
                    h.Cv,
                    {
                        x: h.o3,
                        y: h.o3
                    },
                    !0,
                    2 + 2 / 3
                );
        let r = h.vS + h.o3 + h.sB;
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
                    y: h.SG + 1 * h.Nv,
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) ? h.ee : h.sp
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
                    y: h.SG + 2 * h.Nv
                },
                !0
            );
    },
    b = (e, t, n) => {
        var i, l, a;
        e.setSize({
            w: h.En,
            h: h.dI
        });
        let { color: r, theme: s } = (0, g.j3)(n, 'black');
        e.setColor(r),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            e.setColor('dark' === s ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: h.dI,
                    w: h.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: h.o3,
                          y: h.o3
                      },
                      {
                          w: h.vS,
                          h: h.vS
                      },
                      8
                  )
                : (null === (l = e.assetMap) || void 0 === l ? void 0 : l.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: h.o3,
                            y: h.o3
                        },
                        {
                            w: h.vS,
                            h: h.vS
                        },
                        8
                    )
                  : E(e, s);
        let o = h.vS + h.o3 + h.sB;
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
                    y: h.SG + h.Nv * (null != t.timestamps ? 1 : 1.5),
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(h.W3.Platform)) ? h.ee : h.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, g.b6)(t.timestamps)),
                    {
                        x: o,
                        y: h.SG + 2 * h.Nv
                    },
                    !0
                ));
    };
