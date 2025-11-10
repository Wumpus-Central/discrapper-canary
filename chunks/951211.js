n.d(t, {
    Z: () => f,
    r: () => h,
}),
    n(539854);
var i,
    r = n(481060),
    l = n(620662),
    a = n(933557),
    o = n(377171),
    s = n(699516),
    c = n(594174),
    u = n(713913),
    d = n(981631),
    p = n(388032),
    h =
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
        (i.APP_LAUNCHER = "APP_LAUNCHER"),
        (i.SCHEDULED_MESSAGE = "SCHEDULED_MESSAGE"),
        (i.SUMMARIZE_THREAD = "SUMMARIZE_THREAD"),
        i);
function f(e) {
    let {
            canAttachFiles: t,
            canStartThreads: n,
            useSlate: i,
            canUseApplicationCommands: h,
            hasClips: f,
            channel: m,
            activities: g,
            newClipsCount: b,
            canPostPolls: y,
            canLaunchActivities: C,
            appContext: v,
            canSendScheduledMessages: _,
            canSummarizeThreads: x,
            showAppLauncher: j,
        } = e,
        O = [];
    t &&
        (O.push({
            type: "UPLOAD_A_FILE",
            icon: r.xD0,
            display: p.intl.string(p.t["d3+iYs"]),
        }),
        O.push({
            type: "UPLOAD_TEXT_AS_FILE",
            icon: r.xD0,
            display: p.intl.string(p.t["G9s+EM"]),
        })),
        f &&
            t &&
            v !== d.IlC.POPOUT &&
            O.push({
                type: "CLIPS",
                icon: r.AlX,
                display: p.intl.string(p.t.o034cv),
                badgeVal: b,
                badgeColor: o.Z.BG_BRAND,
            }),
        n &&
            O.push({
                type: "CREATE_THREAD",
                icon: r.YPH,
                display: p.intl.string(p.t.rBIGBL),
            }),
        y &&
            O.push({
                type: "POLL",
                icon: r.QDj,
                display: p.intl.string(p.t.Flr51u),
            });
    let { renameAppsToAppCommandsInOverflow: E, moveAppsEntrypointToOverflow: S } = u.n.getConfig({
        location: "getChannelAttachOptions",
    });
    return (
        S
            ? j &&
              O.push({
                  type: "APP_LAUNCHER",
                  icon: r.jje,
                  display: p.intl.string(p.t.nqswKn),
              })
            : i &&
              h &&
              O.push({
                  type: "SLASH_COMMAND",
                  icon: r.jje,
                  display: p.intl.string(E ? p.t["5Y0Fam"] : p.t.Bbvp6G),
              }),
        C &&
            O.push({
                type: "ACTIVITY",
                icon: r.nG3,
                display: p.intl.string(p.t["16Lfrb"]),
            }),
        g.forEach((e) => {
            !(0, l.Z)(e, d.xjy.EMBEDDED) &&
                (e.type === d.IIU.PLAYING &&
                    (0, l.Z)(e, d.xjy.JOIN) &&
                    O.push({
                        type: "INVITE_TO_GAME",
                        icon: r.xoD,
                        display: p.intl.formatToPlainString(p.t["KHLo+F"], {
                            channel: (0, a.F6)(m, c.default, s.Z, !0),
                            game: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.IIU.LISTENING &&
                    (0, l.Z)(e, d.xjy.SYNC) &&
                    O.push({
                        type: "INVITE_TO_LISTEN",
                        icon: r.iOO,
                        display: p.intl.formatToPlainString(p.t.I479px, {
                            channel: (0, a.F6)(m, c.default, s.Z, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.IIU.WATCHING &&
                    (0, l.Z)(e, d.xjy.SYNC) &&
                    O.push({
                        type: "INVITE_TO_WATCH",
                        icon: r.tEF,
                        display: p.intl.formatToPlainString(p.t["EvCP/g"], {
                            channel: (0, a.F6)(m, c.default, s.Z, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }));
        }),
        _ &&
            O.push({
                type: "SCHEDULED_MESSAGE",
                icon: r.T39,
                display: p.intl.string(p.t["3+ii4F"]),
            }),
        m.isThread() &&
            x &&
            O.push({
                type: "SUMMARIZE_THREAD",
                icon: r.$2U,
                display: p.intl.string(p.t.EXfguE),
            }),
        O
    );
}
