"use strict";
n.d(t, { p6: () => f }), n(321073), n(284009);
var l = n(989349),
    i = n.n(l),
    s = n(379834);
n(587895);
var a = n(491533);
n(654107);
var r = n(583954),
    o = n(745162);
n(773669), n(287809);
var c = n(927813),
    u = n(935208),
    d = n(583846);
n(140651);
var h = n(365170);
n(329575);
var m = n(241678),
    p = n(985018);
let f = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: f, timestamp: g, colors: _, channelId: x } = e,
        C = n.extra.game_name,
        A = {
            AvatarImage1: l[0],
            ...(null != l[1] && { AvatarImage2: l[1] }),
            ...(null != l[2] && { AvatarImage3: l[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await (0, o.r)({
        assetsToLoad: A,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: l, description: o, entry: f, numAvatars: g } = t,
                    _ = l.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(_, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === r.uS.Failure &&
                        e.drawPath(a.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    (0, h.v)({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, g),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: m.mw, weight: 500, truncate: r.Kq.Wrap }),
                    e.drawText(o, { x: 120, y: 64, h: 32, w: 260 }, !0);
                let x = ((e, t) => {
                    let n = [{ iconPath: m.AS, text: t }],
                        l = u.default.extractTimestamp(e.extra.application_id);
                    if (
                        (7 >= i()().diff(i()(l), "days") && n.push({ iconPath: m.fB, text: p.intl.string(p.t.vYuyWf) }),
                        (0, d.Rf)(e) && n.push({ iconPath: m._P, text: p.intl.string(p.t.keY6mW) }),
                        (0, d.BZ)(e))
                    ) {
                        let t = (0, d.iy)(e);
                        n.push({ iconPath: m.Jd, text: p.intl.formatToPlainString(p.t["Klie/P"], { days: t }) });
                    }
                    (0, d.CZ)(e) === s.m.GLOBAL && n.push({ iconPath: m.Cv, text: p.intl.string(p.t.kAlUsy) });
                    let a = (0, d.KH)(e);
                    if ((null != a && n.push({ iconPath: m.$S, text: (0, d.us)(a) }), (0, d.L7)(e))) {
                        let { text: t } = (0, d.Pj)(e);
                        null != t && n.push({ iconPath: m.iI, text: t });
                    }
                    if ((0, d.uw)(e)) {
                        let t = (0, d.ty)(e);
                        if (null != t) {
                            let e = p.intl.formatToPlainString(p.t.C0AxoR, { hours: Math.round(t / c.A.Seconds.HOUR) });
                            return [{ iconPath: m.pc, text: `${p.intl.string(p.t["/50eHi"])} — ${e}` }];
                        }
                    }
                    return n;
                })(f, n);
                (0, h.$)({ canvas: e, badges: x, startPosition: 120, maxWidth: 260 });
            })(e, { timestamp: g, colors: _, description: f, entry: n, numAvatars: l.length }),
        exportConfigs: {
            format: r.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${C}.png`.toLowerCase(),
            fileType: "png",
            channelId: x,
        },
    });
};
