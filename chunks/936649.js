var i,
    r,
    l,
    s = /^(221552|614256)$/.test(n.j)
        ? (((i = {}).INVITE = "member_joined"),
          (i.CHANNEL = "create_channel"),
          (i.AVATAR = "avatar"),
          (i.MESSAGE = "send_message"),
          (i.COMPLETED = "completed"),
          (i.DISMISSED = "dismissed"),
          i)
        : null,
    a =
        (((r = {}).PERSONALIZE_SERVER = "Personalize Server"),
        (r.INVITE = "Invite Friends"),
        (r.CREATE_CHANNEL = "Create Channel"),
        (r.SEND_MESSAGE = "Send Message"),
        (r.DOWNLOAD = "Download"),
        (r.ADD_APP = "Add App"),
        (r.BOOST = "Boost Server"),
        (r.DISMISS_GUILD_PROGRESS = "Dismiss Guild Progress"),
        (r.DISCORD_OVERVIEW_VIDEO = "Discord Overview Video"),
        (r.JOIN_GUILD = "Join Guild"),
        (r.CONTACT_SYNC = "Sync Contacts"),
        (r.DISMISS = "Dismiss"),
        r),
    o =
        (((l = {}).CHANNEL_WELCOME = "Channel Welcome CTA"),
        (l.GUILD_PROGRESS = "Guild Progress"),
        (l.HUB_PROGRESS = "Hub Progress"),
        l);
n.d(t, {}, { AG: a, XT: o, gj: s });
