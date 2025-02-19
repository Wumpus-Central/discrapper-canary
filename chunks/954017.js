n.d(t, {
    H: () => v,
    R: () => O
});
var r = n(512722),
    l = n.n(r),
    i = n(493683),
    a = n(726542),
    o = n(122810),
    s = n(503438),
    c = n(693824),
    u = n(690725),
    d = n(90712),
    f = n(592125),
    p = n(81063),
    m = n(201133),
    g = n(55000),
    y = n(314091),
    b = n(981631);
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let v = async (e) => {
        var { reaction: t, altText: n } = e,
            r = h(e, ['reaction', 'altText']);
        let l = await S(r);
        (0, m.a)({
            file: l,
            altText: n,
            user: r.user,
            reaction: t
        });
    },
    O = async (e) => {
        var { reply: t, altText: n } = e,
            r = h(e, ['reply', 'altText']);
        let a = await S(r),
            o = await i.Z.openPrivateChannel(r.user.id, !1, !1),
            s = f.Z.getChannel(o);
        l()(null != s, 'Channel cannot be null'),
            (0, m.B)({
                file: a,
                altText: n,
                channel: s,
                reply: t
            });
    },
    j = (e) => {
        let { activity: t, application: r, user: l } = e,
            { theme: i } = (0, y.j3)(l, 'black'),
            a = 'dark' === i,
            o = (0, d.Z)(t),
            { assets: s, application_id: c } = t,
            u = (0, p.getAssetImage)(c, null == s ? void 0 : s.large_image, 64),
            f = null == r ? void 0 : r.getIconURL(64),
            m = null != o ? (a ? o.icon.darkPNG : o.icon.lightPNG) : t.type === b.IIU.PLAYING ? (a ? n(414575) : n(807612)) : null;
        return (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, null != m && { Platform: m }, null != u && { AssetImage: u.includes('http') ? u : n(869469)(u) }, null != f && { ApplicationImage: f });
    },
    S = async (e) => {
        let { user: t, activity: n, application: r, stream: l } = e,
            d = await i.Z.openPrivateChannel(t.id, !1, !1),
            f = j({
                activity: n,
                application: r,
                user: t
            });
        return await (0, u.f)({
            assetsToLoad: f,
            drawImage: (e) => {
                var r;
                e.setFont({ truncate: c.GX.Truncate }),
                    null != l ? E(e, n, t) : (0, s.Z)(n) ? I(e, n, t) : (0, o.Z)(n) && n.name === a.Z.get(b.ABu.LEAGUE_OF_LEGENDS).name ? x(e, n, t) : P(e, n, t),
                    (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('Platform')) &&
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
    N = (e, t) => {
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
    P = (e, t, n) => {
        var r, l, i;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: a, theme: o } = (0, y.j3)(n, 'black');
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
            e.setColor('dark' === o ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
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
            (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage'))
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
                  : N(e, o);
        let s = g.vS + g.o3 + g.sB;
        e.setColor('dark' === o ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.name),
                {
                    x: s,
                    y: g.SG + +g.Nv,
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, y.b6)(t.timestamps)),
                    {
                        x: s,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    },
    I = (e, t, n) => {
        var r, l;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: i, theme: a } = (0, y.j3)(n, 'black');
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
            (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage')) &&
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
        let o = g.vS + g.o3 + g.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: o,
                    y: g.SG + +g.Nv,
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
                    x: o,
                    y: g.SG + 2 * g.Nv
                },
                !0
            );
    },
    x = (e, t, n) => {
        var r;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: l, theme: i } = (0, y.j3)(n, 'black');
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
            e.setColor('dark' === i ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
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
            e.setColor('dark' === i ? 'white' : 'black'),
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
        let a = g.vS + g.o3 + g.sB;
        e.setColor('dark' === i ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: a,
                    y: g.SG + +g.Nv,
                    w: (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('Platform')) ? g.ee : g.sp
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
    E = (e, t, n) => {
        var r, l, i;
        e.setSize({
            w: g.En,
            h: g.dI
        });
        let { color: a, theme: o } = (0, y.j3)(n, 'black');
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
            e.setColor('dark' === o ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
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
            (null === (r = e.assetMap) || void 0 === r ? void 0 : r.has('AssetImage'))
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
                  : N(e, o);
        let s = g.vS + g.o3 + g.sB;
        e.setColor('dark' === o ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                'Streaming '.concat(t.name),
                {
                    x: s,
                    y: g.SG + g.Nv * (null != t.timestamps ? 1 : 1.5),
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has(g.W3.Platform)) ? g.ee : g.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, y.b6)(t.timestamps)),
                    {
                        x: s,
                        y: g.SG + 2 * g.Nv
                    },
                    !0
                ));
    };
