n.d(t, { C4: () => v }), n(653041), n(266796), n(627494), n(757143), n(301563), n(512722);
var r = n(913527),
    a = n.n(r),
    l = n(705512);
n(812206);
var i = n(55000);
n(220082);
var o = n(693824),
    s = n(690725);
n(706454), n(594174);
var c = n(70956);
n(5192);
var u = n(709054),
    d = n(561308);
n(206295);
var m = n(737583),
    p = n(169040),
    h = n(388032);
let f = (e, t) =>
        (function (e) {
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
        })({ AvatarImage1: e[0] }, null != e[1] && { AvatarImage2: e[1] }, null != e[2] && { AvatarImage3: e[2] }, null != t && { ApplicationImage: t }),
    g = (e, t) => {
        let n = [
                {
                    iconPath: p.NM,
                    text: t
                }
            ],
            r = u.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= a()().diff(a()(r), 'days') &&
                n.push({
                    iconPath: p.As,
                    text: h.NW.string(h.t.vYuyWV)
                }),
            (0, d.Ol)(e) &&
                n.push({
                    iconPath: p.fO,
                    text: h.NW.string(h.t.keY6mZ)
                }),
            (0, d.q_)(e))
        ) {
            let t = (0, d.vU)(e);
            n.push({
                iconPath: p.t1,
                text: h.NW.formatToPlainString(h.t['Klie/P'], { days: t })
            });
        }
        (0, d.ig)(e) === l.o.GLOBAL &&
            n.push({
                iconPath: p.Op,
                text: h.NW.string(h.t.kAlUs7)
            });
        let i = (0, d.dw)(e);
        if (
            (null != i &&
                n.push({
                    iconPath: p.Z,
                    text: (0, d.GE)(i)
                }),
            (0, d.V5)(e))
        ) {
            let { text: t } = (0, d.zo)(e);
            null != t &&
                n.push({
                    iconPath: p.Md,
                    text: t
                });
        }
        if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
                let e = h.NW.formatToPlainString(h.t.C0Axoa, { hours: Math.round(t / c.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: p.eF,
                        text: ''.concat(h.NW.string(h.t['/50eHh']), ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return n;
    },
    x = (e, t) => {
        let { timestamp: n, colors: r, description: a, entry: l, numAvatars: s } = t,
            c = r.map((e, t) => ({
                color: e,
                stop: t
            }));
        e.setSize(
            {
                w: p.nx,
                h: p.bg
            },
            4
        ),
            e.drawRoundedGradientRect(
                c,
                {
                    x: 0,
                    y: p.bg
                },
                {
                    x: p.nx,
                    y: 0
                },
                {
                    x: 0,
                    y: 0,
                    h: p.bg,
                    w: p.nx
                },
                8
            ),
            e.setColor('white'),
            e.drawRoundedImage(
                'ApplicationImage',
                {
                    x: p.sB,
                    y: p.sB
                },
                {
                    w: p.Pu,
                    h: p.Pu
                },
                8
            ) === o.vP.Failure &&
                e.drawPath(
                    i.Cv,
                    {
                        x: p.sB,
                        y: p.sB
                    },
                    !0,
                    2 + 2 / 3
                ),
            (0, m.l)({
                canvas: e,
                avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, s),
                position: {
                    x: p.Iq,
                    y: p.sB
                },
                avatarImageSize: p.$S
            }),
            e.setColor('white'),
            e.setFont({
                size: 16,
                family: p.I8,
                weight: p.Ue,
                truncate: o.GX.Wrap
            }),
            e.drawText(
                a,
                {
                    x: p.Iq,
                    y: 64,
                    h: 32,
                    w: p.kC
                },
                !0
            );
        let u = g(l, n);
        (0, m.J)({
            canvas: e,
            badges: u,
            startPosition: p.Iq,
            maxWidth: p.kC
        });
    },
    v = async (e) => {
        let { applicationImageSrc: t, entry: n, avatarSrcs: r, description: a, timestamp: l, colors: i, channelId: c } = e,
            u = n.extra.activity_name,
            d = f(r, t);
        return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                x(e, {
                    timestamp: l,
                    colors: i,
                    description: a,
                    entry: n,
                    numAvatars: r.length
                }),
            exportConfigs: {
                format: o.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
                fileType: 'png',
                channelId: c
            }
        });
    };
