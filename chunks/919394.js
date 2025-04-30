n.d(t, { SO: () => y }), n(539854), n(953529), n(512722);
var r = n(913527),
    i = n.n(r),
    a = n(705512);
n(812206);
var o = n(55000);
n(220082);
var s = n(693824),
    l = n(690725);
n(706454), n(594174);
var c = n(70956),
    u = n(709054),
    d = n(561308);
n(206295);
var f = n(737583);
n(438226);
var _ = n(169040),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = (e, t) => m({ AvatarImage1: e[0] }, null != e[1] && { AvatarImage2: e[1] }, null != e[2] && { AvatarImage3: e[2] }, null != t && { ApplicationImage: t }),
    E = (e, t) => {
        let n = [
                {
                    iconPath: _.NM,
                    text: t
                }
            ],
            r = u.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= i()().diff(i()(r), 'days') &&
                n.push({
                    iconPath: _.As,
                    text: p.intl.string(p.t.vYuyWV)
                }),
            (0, d.Ol)(e) &&
                n.push({
                    iconPath: _.fO,
                    text: p.intl.string(p.t.keY6mZ)
                }),
            (0, d.q_)(e))
        ) {
            let t = (0, d.vU)(e);
            n.push({
                iconPath: _.t1,
                text: p.intl.formatToPlainString(p.t['Klie/P'], { days: t })
            });
        }
        (0, d.ig)(e) === a.o.GLOBAL &&
            n.push({
                iconPath: _.Op,
                text: p.intl.string(p.t.kAlUs7)
            });
        let o = (0, d.dw)(e);
        if (
            (null != o &&
                n.push({
                    iconPath: _.Z,
                    text: (0, d.GE)(o)
                }),
            (0, d.V5)(e))
        ) {
            let { text: t } = (0, d.zo)(e);
            null != t &&
                n.push({
                    iconPath: _.Md,
                    text: t
                });
        }
        if ((0, d.Jd)(e)) {
            let t = (0, d.yA)(e);
            if (null != t) {
                let e = p.intl.formatToPlainString(p.t.C0Axoa, { hours: Math.round(t / c.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: _.eF,
                        text: ''.concat(p.intl.string(p.t['/50eHh']), ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return n;
    },
    b = (e, t) => {
        let { timestamp: n, colors: r, description: i, entry: a, numAvatars: l } = t,
            c = r.map((e, t) => ({
                color: e,
                stop: t
            }));
        e.setSize(
            {
                w: _.nx,
                h: _.bg
            },
            4
        ),
            e.drawRoundedGradientRect(
                c,
                {
                    x: 0,
                    y: _.bg
                },
                {
                    x: _.nx,
                    y: 0
                },
                {
                    x: 0,
                    y: 0,
                    h: _.bg,
                    w: _.nx
                },
                8
            ),
            e.setColor('white'),
            e.drawRoundedImage(
                'ApplicationImage',
                {
                    x: _.sB,
                    y: _.sB
                },
                {
                    w: _.Pu,
                    h: _.Pu
                },
                8
            ) === s.vP.Failure &&
                e.drawPath(
                    o.Cv,
                    {
                        x: _.sB,
                        y: _.sB
                    },
                    !0,
                    2 + 2 / 3
                );
        let u = ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'];
        (0, f.l)({
            canvas: e,
            avatarSrcs: u.slice(0, l),
            position: {
                x: _.Iq,
                y: _.sB
            },
            avatarImageSize: _.$S
        }),
            e.setColor('white'),
            e.setFont({
                size: 16,
                family: _.I8,
                weight: _.Ue,
                truncate: s.GX.Wrap
            }),
            e.drawText(
                i,
                {
                    x: _.Iq,
                    y: 64,
                    h: 32,
                    w: _.kC
                },
                !0
            );
        let d = E(a, n);
        (0, f.J)({
            canvas: e,
            badges: d,
            startPosition: _.Iq,
            maxWidth: _.kC
        });
    },
    y = async (e) => {
        let { applicationImageSrc: t, entry: n, avatarSrcs: r, description: i, timestamp: a, colors: o, channelId: c } = e,
            u = n.extra.game_name,
            d = g(r, t);
        return await (0, l.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                b(e, {
                    timestamp: a,
                    colors: o,
                    description: i,
                    entry: n,
                    numAvatars: r.length
                }),
            exportConfigs: {
                format: s.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
                fileType: 'png',
                channelId: c
            }
        });
    };
