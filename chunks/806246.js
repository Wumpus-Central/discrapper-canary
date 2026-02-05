"use strict";
n.d(t, { A: () => s });
var r = n(734057),
    i = n(383501),
    a = n(607567);
function s(e) {
    return null == e
        ? { channel_id: void 0, guild_id: void 0, media_session_id: i.A.getMediaSessionId(), call_num_participants: 0 }
        : {
              channel_id: e,
              guild_id: r.A.getChannel(e)?.guild_id,
              media_session_id: i.A.getMediaSessionId(),
              call_num_participants: a.Ay.countVoiceStatesForChannel(e),
          };
}
