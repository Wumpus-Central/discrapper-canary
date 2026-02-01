n.d(t, {
    AG: () => s,
    XT: () => o,
    gj: () => a,
});
var l,
    r,
    i,
    a = /^(14256|21552)$/.test(n.j)
        ? (((l = {}).INVITE = "member_joined"),
          (l.CHANNEL = "create_channel"),
          (l.AVATAR = "avatar"),
          (l.MESSAGE = "send_message"),
          (l.COMPLETED = "completed"),
          (l.DISMISSED = "dismissed"),
          l)
        : null,
    s =
        (((r = {}).PERSONALIZE_SERVER = "Personalize Server"),
        (r.INVITE = "Invite Friends"),
        (r.CREATE_CHANNEL = "Create Channel"),
        (r.SEND_MESSAGE = "Send Message"),
        (r.DOWNLOAD = "Download"),
        (r.ADD_APP = "Add App"),
        (r.DISMISS_GUILD_PROGRESS = "Dismiss Guild Progress"),
        (r.DISCORD_OVERVIEW_VIDEO = "Discord Overview Video"),
        (r.JOIN_GUILD = "Join Guild"),
        (r.CONTACT_SYNC = "Sync Contacts"),
        (r.DISMISS = "Dismiss"),
        r),
    o =
        (((i = {}).CHANNEL_WELCOME = "Channel Welcome CTA"),
        (i.GUILD_PROGRESS = "Guild Progress"),
        (i.HUB_PROGRESS = "Hub Progress"),
        i);
