n.d(t, {
    Z: () => h,
    r: () => p,
}),
    n(539854);
var i,
    r = n(481060),
    l = n(620662),
    a = n(933557),
    o = n(377171),
    s = n(699516),
    c = n(594174),
    u = n(981631),
    d = n(388032),
    p =
        (((i = {}).UPLOAD_A_FILE = "UPLOAD_A_FILE"),
        (i.UPLOAD_TEXT_AS_FILE = "UPLOAD_TEXT_AS_FILE"),
        (i.INVITE_TO_PLAY_GAME = "INVITE_TO_GAME"),
        (i.INVITE_TO_LISTEN = "INVITE_TO_LISTEN"),
        (i.INVITE_TO_WATCH = "INVITE_TO_WATCH"),
        (i.CREATE_THREAD = "CREATE_THREAD"),
        (i.SLASH_COMMAND = "SLASH_COMMAND"),
        (i.CLIPS = "CLIPS"),
        (i.POLL = "POLL"),
        (i.ACTIVITY = "ACTIVITY"),
        (i.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        i);
function h(e) {
    let {
            canAttachFiles: t,
            canStartThreads: n,
            useSlate: i,
            canUseApplicationCommands: p,
            hasClips: h,
            channel: f,
            activities: m,
            newClipsCount: g,
            canPostPolls: b,
            canLaunchActivities: C,
            appContext: y,
            canSendScheduledMessages: _,
        } = e,
        v = [];
    return (
        t &&
            (v.push({
                type: "UPLOAD_A_FILE",
                icon: r.xD0,
                display: d.intl.string(d.t["d3+iYm"]),
            }),
            v.push({
                type: "UPLOAD_TEXT_AS_FILE",
                icon: r.xD0,
                display: d.intl.string(d.t["G9s+EB"]),
            })),
        h &&
            t &&
            y !== u.IlC.POPOUT &&
            v.push({
                type: "CLIPS",
                icon: r.AlX,
                display: d.intl.string(d.t.o034cn),
                badgeVal: g,
                badgeColor: o.Z.BG_BRAND,
            }),
        n &&
            v.push({
                type: "CREATE_THREAD",
                icon: r.YPH,
                display: d.intl.string(d.t.rBIGBA),
            }),
        b &&
            v.push({
                type: "POLL",
                icon: r.QDj,
                display: d.intl.string(d.t.Flr51t),
            }),
        i &&
            p &&
            v.push({
                type: "SLASH_COMMAND",
                icon: r.jje,
                display: d.intl.string(d.t.Bbvp6O),
            }),
        C &&
            v.push({
                type: "ACTIVITY",
                icon: r.nG3,
                display: d.intl.string(d.t["16Lfra"]),
            }),
        m.forEach((e) => {
            !(0, l.Z)(e, u.xjy.EMBEDDED) &&
                (e.type === u.IIU.PLAYING &&
                    (0, l.Z)(e, u.xjy.JOIN) &&
                    v.push({
                        type: "INVITE_TO_GAME",
                        icon: r.xoD,
                        display: d.intl.formatToPlainString(d.t["KHLo+P"], {
                            channel: (0, a.F6)(f, c.default, s.Z, !0),
                            game: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === u.IIU.LISTENING &&
                    (0, l.Z)(e, u.xjy.SYNC) &&
                    v.push({
                        type: "INVITE_TO_LISTEN",
                        icon: r.iOO,
                        display: d.intl.formatToPlainString(d.t.I479p6, {
                            channel: (0, a.F6)(f, c.default, s.Z, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === u.IIU.WATCHING &&
                    (0, l.Z)(e, u.xjy.SYNC) &&
                    v.push({
                        type: "INVITE_TO_WATCH",
                        icon: r.tEF,
                        display: d.intl.formatToPlainString(d.t["EvCP/v"], {
                            channel: (0, a.F6)(f, c.default, s.Z, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }));
        }),
        _ &&
            v.push({
                type: "SCHEDULED_MESSAGE",
                icon: r.T39,
                display: d.intl.string(d.t["3+ii4O"]),
            }),
        v
    );
}
