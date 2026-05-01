n.d(t, { AG: () => a, XT: () => o, gj: () => r });
var l,
    i,
    s,
    r = /^(14256|21552)$/.test(n.j)
        ? (((l = {}).INVITE = "member_joined"),
          (l.CHANNEL = "create_channel"),
          (l.AVATAR = "avatar"),
          (l.MESSAGE = "send_message"),
          (l.COMPLETED = "completed"),
          (l.DISMISSED = "dismissed"),
          l)
        : null,
    a =
        (((i = {}).PERSONALIZE_SERVER = "Personalize Server"),
        (i.INVITE = "Invite Friends"),
        (i.CREATE_CHANNEL = "Create Channel"),
        (i.SEND_MESSAGE = "Send Message"),
        (i.DOWNLOAD = "Download"),
        (i.ADD_APP = "Add App"),
        (i.DISMISS_GUILD_PROGRESS = "Dismiss Guild Progress"),
        (i.DISCORD_OVERVIEW_VIDEO = "Discord Overview Video"),
        (i.JOIN_GUILD = "Join Guild"),
        (i.CONTACT_SYNC = "Sync Contacts"),
        (i.DISMISS = "Dismiss"),
        i),
    o =
        (((s = {}).CHANNEL_WELCOME = "Channel Welcome CTA"),
        (s.GUILD_PROGRESS = "Guild Progress"),
        (s.HUB_PROGRESS = "Hub Progress"),
        s);
