"use strict";
n.d(t, { Jn: () => h, LO: () => E, kn: () => f });
var r,
    i,
    s = n(873298),
    a = n(731068),
    o = n(253932),
    l = n(930125),
    u = n(338717),
    d = n(632119),
    c = n(444802),
    _ = n(652215),
    f = (((r = {}).EXPLICIT = "explicit"), (r.GORE = "gore"), (r.SELF_HARM = "self_harm"), r),
    E =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.EXPLICIT = 1)] = "EXPLICIT"),
        (i[(i.GORE = 2)] = "GORE"),
        (i[(i.SELF_HARM = 4)] = "SELF_HARM"),
        (i[(i.ALL = 7)] = "ALL"),
        i);
let h = {
    explicit: {
        harmType: "explicit",
        obscureReason: u.Oc.EXPLICIT_CONTENT,
        attachmentFlag: _.sbO.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: _.iSj.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: a.IS.EXPLICIT,
        bitmask: 1,
        devSettingKey: "obscure_blur_effect_explicit_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.explicitContentSettings;
            return {
                [l.v.GUILD]: t?.explicitContentGuilds,
                [l.v.FRIEND_DM]: t?.explicitContentFriendDm,
                [l.v.NON_FRIEND_DM]: t?.explicitContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            let t = e ?? {
                [l.v.GUILD]: o.Vd.getSetting()?.explicitContentGuilds,
                [l.v.FRIEND_DM]: o.Vd.getSetting()?.explicitContentFriendDm,
                [l.v.NON_FRIEND_DM]: o.Vd.getSetting()?.explicitContentNonFriendDm,
            };
            return {
                [l.v.GUILD]: (0, d.Ys)({ setting: t?.[l.v.GUILD] }),
                [l.v.FRIEND_DM]: (0, d.Ys)({ setting: t?.[l.v.FRIEND_DM], isDm: !0, isFriend: !0 }),
                [l.v.NON_FRIEND_DM]: (0, d.Ys)({ setting: t?.[l.v.NON_FRIEND_DM], isDm: !0 }),
            };
        },
    },
    gore: {
        harmType: "gore",
        obscureReason: u.Oc.GORE_CONTENT,
        attachmentFlag: _.sbO.CONTAINS_GORE_CONTENT,
        embedFlag: _.iSj.CONTAINS_GORE_CONTENT,
        genericMediaFlag: a.IS.GORE,
        bitmask: 2,
        devSettingKey: "obscure_blur_effect_gore_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.goreContentSettings;
            return {
                [l.v.GUILD]: t?.goreContentGuilds,
                [l.v.FRIEND_DM]: t?.goreContentFriendDm,
                [l.v.NON_FRIEND_DM]: t?.goreContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            let t = e ?? {
                [l.v.GUILD]: o.qN.getSetting()?.goreContentGuilds,
                [l.v.FRIEND_DM]: o.qN.getSetting()?.goreContentFriendDm,
                [l.v.NON_FRIEND_DM]: o.qN.getSetting()?.goreContentNonFriendDm,
            };
            return {
                [l.v.GUILD]: (0, c.gC)({ setting: t?.[l.v.GUILD] }),
                [l.v.FRIEND_DM]: (0, c.gC)({ setting: t?.[l.v.FRIEND_DM], isDm: !0, isFriend: !0 }),
                [l.v.NON_FRIEND_DM]: (0, c.gC)({ setting: t?.[l.v.NON_FRIEND_DM], isDm: !0 }),
            };
        },
    },
    self_harm: {
        harmType: "self_harm",
        obscureReason: u.Oc.SELF_HARM_CONTENT,
        attachmentFlag: _.sbO.CONTAINS_SELF_HARM_CONTENT,
        embedFlag: _.iSj.CONTAINS_SELF_HARM_CONTENT,
        genericMediaFlag: a.IS.SELF_HARM,
        bitmask: 4,
        devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.selfHarmContentSettings;
            return {
                [l.v.GUILD]: t?.selfHarmContentGuilds,
                [l.v.FRIEND_DM]: t?.selfHarmContentFriendDm,
                [l.v.NON_FRIEND_DM]: t?.selfHarmContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: () => ({
            [l.v.GUILD]: s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [l.v.FRIEND_DM]: s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [l.v.NON_FRIEND_DM]: s.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        }),
    },
};
