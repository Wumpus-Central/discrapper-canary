n.d(t, {
    Z: () => p,
    r: () => h
}),
    n(653041);
var i,
    l = n(481060),
    a = n(620662),
    r = n(933557),
    s = n(377171),
    o = n(699516),
    c = n(594174),
    d = n(981631),
    u = n(388032),
    h = (((i = {}).UPLOAD_A_FILE = 'UPLOAD_A_FILE'), (i.UPLOAD_TEXT_AS_FILE = 'UPLOAD_TEXT_AS_FILE'), (i.INVITE_TO_PLAY_GAME = 'INVITE_TO_GAME'), (i.INVITE_TO_LISTEN = 'INVITE_TO_LISTEN'), (i.INVITE_TO_WATCH = 'INVITE_TO_WATCH'), (i.CREATE_THREAD = 'CREATE_THREAD'), (i.SLASH_COMMAND = 'SLASH_COMMAND'), (i.CLIPS = 'CLIPS'), (i.POLL = 'POLL'), (i.ACTIVITY = 'ACTIVITY'), (i.SCHEDULED_MESSAGE = 'SCHEDULED_MESSAGE'), i);
function p(e) {
    let { canAttachFiles: t, canStartThreads: n, useSlate: i, canUseApplicationCommands: h, hasClips: p, channel: m, activities: f, newClipsCount: g, canPostPolls: _, canLaunchActivities: C, appContext: x, canSendScheduledMessages: v } = e,
        E = [];
    return (
        t &&
            (E.push({
                type: 'UPLOAD_A_FILE',
                icon: l.xD0,
                display: u.intl.string(u.t['d3+iYm'])
            }),
            E.push({
                type: 'UPLOAD_TEXT_AS_FILE',
                icon: l.xD0,
                display: u.intl.string(u.t['G9s+EB'])
            })),
        p &&
            t &&
            x !== d.IlC.POPOUT &&
            E.push({
                type: 'CLIPS',
                icon: l.AlX,
                display: u.intl.string(u.t.o034cn),
                badgeVal: g,
                badgeColor: s.Z.BG_BRAND
            }),
        n &&
            E.push({
                type: 'CREATE_THREAD',
                icon: l.YPH,
                display: u.intl.string(u.t.rBIGBA)
            }),
        _ &&
            E.push({
                type: 'POLL',
                icon: l.QDj,
                display: u.intl.string(u.t.Flr51t)
            }),
        i &&
            h &&
            E.push({
                type: 'SLASH_COMMAND',
                icon: l.jje,
                display: u.intl.string(u.t.Bbvp6O)
            }),
        C &&
            E.push({
                type: 'ACTIVITY',
                icon: l.nG3,
                display: u.intl.string(u.t['16Lfra'])
            }),
        f.forEach((e) => {
            !(0, a.Z)(e, d.xjy.EMBEDDED) &&
                (e.type === d.IIU.PLAYING &&
                    (0, a.Z)(e, d.xjy.JOIN) &&
                    E.push({
                        type: 'INVITE_TO_GAME',
                        icon: l.xoD,
                        display: u.intl.formatToPlainString(u.t['KHLo+P'], {
                            channel: (0, r.F6)(m, c.default, o.Z, !0),
                            game: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                e.type === d.IIU.LISTENING &&
                    (0, a.Z)(e, d.xjy.SYNC) &&
                    E.push({
                        type: 'INVITE_TO_LISTEN',
                        icon: l.iOO,
                        display: u.intl.formatToPlainString(u.t.I479p6, {
                            channel: (0, r.F6)(m, c.default, o.Z, !0),
                            name: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                e.type === d.IIU.WATCHING &&
                    (0, a.Z)(e, d.xjy.SYNC) &&
                    E.push({
                        type: 'INVITE_TO_WATCH',
                        icon: l.tEF,
                        display: u.intl.formatToPlainString(u.t['EvCP/v'], {
                            channel: (0, r.F6)(m, c.default, o.Z, !0),
                            name: null != e ? e.name : ''
                        }),
                        activity: e
                    }));
        }),
        v &&
            E.push({
                type: 'SCHEDULED_MESSAGE',
                icon: l.T39,
                display: u.intl.string(u.t['3+ii4O'])
            }),
        E
    );
}
