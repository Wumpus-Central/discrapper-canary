n.d(t, {
    Z: () => h,
    r: () => p
}),
    n(653041);
var r,
    i = n(481060),
    l = n(620662),
    o = n(933557),
    a = n(377171),
    s = n(699516),
    c = n(594174),
    u = n(981631),
    d = n(388032),
    p = (((r = {}).UPLOAD_A_FILE = 'UPLOAD_A_FILE'), (r.UPLOAD_TEXT_AS_FILE = 'UPLOAD_TEXT_AS_FILE'), (r.INVITE_TO_PLAY_GAME = 'INVITE_TO_GAME'), (r.INVITE_TO_LISTEN = 'INVITE_TO_LISTEN'), (r.INVITE_TO_WATCH = 'INVITE_TO_WATCH'), (r.CREATE_THREAD = 'CREATE_THREAD'), (r.SLASH_COMMAND = 'SLASH_COMMAND'), (r.CLIPS = 'CLIPS'), (r.POLL = 'POLL'), (r.ACTIVITY = 'ACTIVITY'), (r.SCHEDULED_MESSAGE = 'SCHEDULED_MESSAGE'), r);
function h(e) {
    let { canAttachFiles: t, canStartThreads: n, useSlate: r, canUseApplicationCommands: p, hasClips: h, channel: f, activities: m, newClipsCount: g, canPostPolls: b, canLaunchActivities: _, appContext: C, canSendScheduledMessages: v } = e,
        y = [];
    return (
        t &&
            (y.push({
                type: 'UPLOAD_A_FILE',
                icon: i.xD0,
                display: d.NW.string(d.t['d3+iYm'])
            }),
            y.push({
                type: 'UPLOAD_TEXT_AS_FILE',
                icon: i.xD0,
                display: d.NW.string(d.t['G9s+EB'])
            })),
        h &&
            t &&
            C !== u.IlC.POPOUT &&
            y.push({
                type: 'CLIPS',
                icon: i.AlX,
                display: d.NW.string(d.t.o034cn),
                badgeVal: g,
                badgeColor: a.Z.BG_BRAND
            }),
        n &&
            y.push({
                type: 'CREATE_THREAD',
                icon: i.YPH,
                display: d.NW.string(d.t.rBIGBA)
            }),
        b &&
            y.push({
                type: 'POLL',
                icon: i.QDj,
                display: d.NW.string(d.t.Flr51t)
            }),
        r &&
            p &&
            y.push({
                type: 'SLASH_COMMAND',
                icon: i.jje,
                display: d.NW.string(d.t.Bbvp6O)
            }),
        _ &&
            y.push({
                type: 'ACTIVITY',
                icon: i.nG3,
                display: d.NW.string(d.t['16Lfra'])
            }),
        m.forEach((e) => {
            !(0, l.Z)(e, u.xjy.EMBEDDED) &&
                (e.type === u.IIU.PLAYING &&
                    (0, l.Z)(e, u.xjy.JOIN) &&
                    y.push({
                        type: 'INVITE_TO_GAME',
                        icon: i.xoD,
                        display: d.NW.formatToPlainString(d.t['KHLo+P'], {
                            channel: (0, o.F6)(f, c.default, s.Z, !0),
                            game: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                e.type === u.IIU.LISTENING &&
                    (0, l.Z)(e, u.xjy.SYNC) &&
                    y.push({
                        type: 'INVITE_TO_LISTEN',
                        icon: i.iOO,
                        display: d.NW.formatToPlainString(d.t.I479p6, {
                            channel: (0, o.F6)(f, c.default, s.Z, !0),
                            name: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                e.type === u.IIU.WATCHING &&
                    (0, l.Z)(e, u.xjy.SYNC) &&
                    y.push({
                        type: 'INVITE_TO_WATCH',
                        icon: i.tEF,
                        display: d.NW.formatToPlainString(d.t['EvCP/v'], {
                            channel: (0, o.F6)(f, c.default, s.Z, !0),
                            name: null != e ? e.name : ''
                        }),
                        activity: e
                    }));
        }),
        v &&
            y.push({
                type: 'SCHEDULED_MESSAGE',
                icon: i.T39,
                display: d.NW.string(d.t['3+ii4O'])
            }),
        y
    );
}
