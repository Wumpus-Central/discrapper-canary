n.d(t, {
    SO: function () {
        return g;
    }
}),
    n(653041),
    n(512722);
var l = n(913527),
    a = n.n(l),
    i = n(705512);
n(812206);
var r = n(55000);
n(220082);
var o = n(693824),
    s = n(690725);
n(706454), n(594174);
var u = n(70956),
    c = n(709054),
    d = n(561308);
n(206295);
var m = n(737583);
n(438226);
var x = n(169040),
    h = n(388032);
let p = (e, t) => ({
        AvatarImage1: e[0],
        ...(null != e[1] && { AvatarImage2: e[1] }),
        ...(null != e[2] && { AvatarImage3: e[2] }),
        ...(null != t && { ApplicationImage: t })
    }),
    C = (e, t) => {
        let n = [
                {
                    iconPath: x.NM,
                    text: t
                }
            ],
            l = c.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= a()().diff(a()(l), 'days') &&
                n.push({
                    iconPath: x.As,
                    text: h.intl.string(h.t.vYuyWV)
                }),
            (0, d.Ol)(e) &&
                n.push({
                    iconPath: x.fO,
                    text: h.intl.string(h.t.keY6mZ)
                }),
            (0, d.q_)(e))
        ) {
            let t = (0, d.vU)(e);
            n.push({
                iconPath: x.t1,
                text: h.intl.formatToPlainString(h.t['Klie/P'], { days: t })
            });
        }
        (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({
                iconPath: x.Op,
                text: h.intl.string(h.t.kAlUs7)
            });
        let r = (0, d.dw)(e);
        if (
            (null != r &&
                n.push({
                    iconPath: x.Z,
                    text: (0, d.GE)(r)
                }),
            (0, d.V5)(e))
        ) {
            let { text: t } = (0, d.zo)(e);
            null != t &&
                n.push({
                    iconPath: x.Md,
                    text: t
                });
        }
        if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
                let e = h.intl.formatToPlainString(h.t.C0Axoa, { hours: Math.round(t / u.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: x.eF,
                        text: ''.concat(h.intl.string(h.t['/50eHh']), ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return n;
    },
    v = (e, t) => {
        let { timestamp: n, colors: l, description: a, entry: i, numAvatars: s } = t,
            u = l.map((e, t) => ({
                color: e,
                stop: t
            }));
        e.setSize(
            {
                w: x.nx,
                h: x.bg
            },
            4
        ),
            e.drawRoundedGradientRect(
                u,
                {
                    x: 0,
                    y: x.bg
                },
                {
                    x: x.nx,
                    y: 0
                },
                {
                    x: 0,
                    y: 0,
                    h: x.bg,
                    w: x.nx
                },
                8
            ),
            e.setColor('white'),
            e.drawRoundedImage(
                'ApplicationImage',
                {
                    x: x.sB,
                    y: x.sB
                },
                {
                    w: x.Pu,
                    h: x.Pu
                },
                8
            ) === o.vP.Failure &&
                e.drawPath(
                    r.Cv,
                    {
                        x: x.sB,
                        y: x.sB
                    },
                    !0,
                    2 + 2 / 3
                );
        (0, m.l)({
            canvas: e,
            avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, s),
            position: {
                x: x.Iq,
                y: x.sB
            },
            avatarImageSize: x.$S
        }),
            e.setColor('white'),
            e.setFont({
                size: 16,
                family: x.I8,
                weight: x.Ue,
                truncate: o.GX.Wrap
            }),
            e.drawText(
                a,
                {
                    x: x.Iq,
                    y: 64,
                    h: 32,
                    w: x.kC
                },
                !0
            );
        let c = C(i, n);
        (0, m.J)({
            canvas: e,
            badges: c,
            startPosition: x.Iq,
            maxWidth: x.kC
        });
    },
    g = async (e) => {
        let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: a, timestamp: i, colors: r, channelId: u } = e,
            c = n.extra.game_name,
            d = p(l, t);
        return await (0, s.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                v(e, {
                    timestamp: i,
                    colors: r,
                    description: a,
                    entry: n,
                    numAvatars: l.length
                }),
            exportConfigs: {
                format: o.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(c, '.png').toLowerCase(),
                fileType: 'png',
                channelId: u
            }
        });
    };
