n.d(t, {
    Z: () => f,
    r: () => h,
}),
    n(539854);
var i,
    r = n(692547),
    l = n(481060),
    a = n(620662),
    o = n(933557),
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
            canSummarizeThreads: O,
            showAppLauncher: x,
        } = e,
        E = [];
    t &&
        (E.push({
            type: "UPLOAD_A_FILE",
            icon: l.xD0,
            display: p.intl.string(p.t["d3+iYs"]),
        }),
        E.push({
            type: "UPLOAD_TEXT_AS_FILE",
            icon: l.xD0,
            display: p.intl.string(p.t["G9s+EM"]),
        })),
        f &&
            t &&
            v !== d.IlC.POPOUT &&
            E.push({
                type: "CLIPS",
                icon: l.AlX,
                display: p.intl.string(p.t.o034cv),
                badgeVal: b,
                badgeColor: r.Z.colors.BG_BRAND.css,
            }),
        n &&
            E.push({
                type: "CREATE_THREAD",
                icon: l.YPH,
                display: p.intl.string(p.t.rBIGBL),
            }),
        y &&
            E.push({
                type: "POLL",
                icon: l.QDj,
                display: p.intl.string(p.t.Flr51u),
            });
    let { renameAppsToAppCommandsInOverflow: j, moveAppsEntrypointToOverflow: S } = u.n.getConfig({
        location: "getChannelAttachOptions",
    });
    return (
        S
            ? x &&
              E.push({
                  type: "APP_LAUNCHER",
                  icon: l.jje,
                  display: p.intl.string(p.t.nqswKn),
              })
            : i &&
              h &&
              E.push({
                  type: "SLASH_COMMAND",
                  icon: l.jje,
                  display: p.intl.string(j ? p.t["5Y0Fam"] : p.t.Bbvp6G),
              }),
        C &&
            E.push({
                type: "ACTIVITY",
                icon: l.nG3,
                display: p.intl.string(p.t["16Lfrb"]),
            }),
        g.forEach((e) => {
            !(0, a.Z)(e, d.xjy.EMBEDDED) &&
                (e.type === d.IIU.PLAYING &&
                    (0, a.Z)(e, d.xjy.JOIN) &&
                    E.push({
                        type: "INVITE_TO_GAME",
                        icon: l.xoD,
                        display: p.intl.formatToPlainString(p.t["KHLo+F"], {
                            channel: (0, o.F6)(m, c.default, s.Z, !0),
                            game: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.IIU.LISTENING &&
                    (0, a.Z)(e, d.xjy.SYNC) &&
                    E.push({
                        type: "INVITE_TO_LISTEN",
                        icon: l.iOO,
                        display: p.intl.formatToPlainString(p.t.I479px, {
                            channel: (0, o.F6)(m, c.default, s.Z, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }),
                e.type === d.IIU.WATCHING &&
                    (0, a.Z)(e, d.xjy.SYNC) &&
                    E.push({
                        type: "INVITE_TO_WATCH",
                        icon: l.tEF,
                        display: p.intl.formatToPlainString(p.t["EvCP/g"], {
                            channel: (0, o.F6)(m, c.default, s.Z, !0),
                            name: null != e ? e.name : "",
                        }),
                        activity: e,
                    }));
        }),
        _ &&
            E.push({
                type: "SCHEDULED_MESSAGE",
                icon: l.T39,
                display: p.intl.string(p.t["3+ii4F"]),
            }),
        m.isThread() &&
            O &&
            E.push({
                type: "SUMMARIZE_THREAD",
                icon: l.$2U,
                display: p.intl.string(p.t.EXfguE),
            }),
        E
    );
}
