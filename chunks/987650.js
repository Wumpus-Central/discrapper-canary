n.d(t, {
    Vk: () => s,
    YK: () => a,
    ap: () => u,
    bv: () => c,
    iP: () => i,
    n0: () => l,
    nc: () => o,
    wF: () => d
});
var r = n(358085);
let i = r.isPlatformEmbedded && ((0, r.isWindows)() || !1);
var o = (function (e) {
    return (e[(e.WELCOME = 0)] = 'WELCOME'), (e[(e.NEWS = 1)] = 'NEWS'), (e[(e.GO_LIVE_VOICE = 2)] = 'GO_LIVE_VOICE'), (e[(e.GO_LIVE_NON_VOICE = 3)] = 'GO_LIVE_NON_VOICE'), (e[(e.KEYBIND_INDICATORS = 4)] = 'KEYBIND_INDICATORS'), (e[(e.CONTENT_INVENTORY = 5)] = 'CONTENT_INVENTORY'), (e[(e.OOP_WELCOME = 6)] = 'OOP_WELCOME'), e;
})({});
function a(e) {
    switch (e) {
        case 'News Nudge':
        case 'Welcome Nudge':
        case 'Oop Welcome Nudge':
        case 'Go Live Nudge':
        case 'Go Live Non Voice Nudge':
            return 0;
        case 'Text Chat':
            return 1;
        case 'Activity User Join':
        case 'Activity Invite':
            return 3;
        case 'Incoming Call':
            return 2;
        case 'Clips Reminder Notification':
        case 'Clips Notification':
            return 4;
        default:
            return 5;
    }
}
var s = (function (e) {
        return (e[(e.Nudge = 0)] = 'Nudge'), (e[(e.TextChat = 1)] = 'TextChat'), (e[(e.VoiceCall = 2)] = 'VoiceCall'), (e[(e.Activity = 3)] = 'Activity'), (e[(e.Clips = 4)] = 'Clips'), (e[(e.Other = 5)] = 'Other'), e;
    })({}),
    l = (function (e) {
        return (e.NewsNudge = 'News Nudge'), (e.WelcomeNudge = 'Welcome Nudge'), (e.OopWelcomeNudge = 'Oop Welcome Nudge'), (e.TextChat = 'Text Chat'), (e.ActivityUserJoin = 'Activity User Join'), (e.ActivityInvite = 'Activity Invite'), (e.IncomingCall = 'Incoming Call'), (e.GoLiveNudge = 'Go Live Nudge'), (e.GoLiveNonVoiceNudge = 'Go Live Non Voice Nudge'), (e.OverlayCrashed = 'Overlay Crashed'), (e.ClipsReminderNotification = 'Clips Reminder Notification'), (e.ClipsNotification = 'Clips Notification'), (e.KeybindIndicatorsNotification = 'Keybind Indicators Notification'), (e.SendGameInvitesNotification = 'Send Game Invites Notification'), (e.NowPlayingNotification = 'Now Playing Notification'), e;
    })({}),
    c = (function (e) {
        return (e[(e.Viewed = 0)] = 'Viewed'), (e[(e.Clicked = 1)] = 'Clicked'), e;
    })({});
let u = Object.freeze({
        LOW: 'background-opacity-low',
        MEDIUM: 'background-opacity-medium',
        HIGH: 'background-opacity-high',
        FULL: 'background-opacity-full',
        DISABLED: null
    }),
    d = Object.freeze({
        BOTTOM: 0,
        LOWER: 0.25,
        UPPER: 0.75,
        TOP: 1
    });
