"use strict";
n.d(t, { Jn: () => h, LO: () => A, kn: () => E });
var i,
    r,
    a = n(873298),
    s = n(731068),
    l = n(885386),
    o = n(930125),
    d = n(338717),
    c = n(632119),
    u = n(444802),
    _ = n(652215),
    E = (((i = {}).EXPLICIT = "explicit"), (i.GORE = "gore"), (i.SELF_HARM = "self_harm"), i),
    A =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.EXPLICIT = 1)] = "EXPLICIT"),
        (r[(r.GORE = 2)] = "GORE"),
        (r[(r.SELF_HARM = 4)] = "SELF_HARM"),
        (r[(r.ALL = 7)] = "ALL"),
        r);
let h = {
    explicit: {
        harmType: "explicit",
        obscureReason: d.Oc.EXPLICIT_CONTENT,
        attachmentFlag: _.sbO.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: _.iSj.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: s.IS.EXPLICIT,
        bitmask: 1,
        devSettingKey: "obscure_blur_effect_explicit_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.explicitContentSettings;
            return {
                [o.v.GUILD]: t?.explicitContentGuilds,
                [o.v.FRIEND_DM]: t?.explicitContentFriendDm,
                [o.v.NON_FRIEND_DM]: t?.explicitContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            let t = e ?? {
                [o.v.GUILD]: l.Vd.getSetting()?.explicitContentGuilds,
                [o.v.FRIEND_DM]: l.Vd.getSetting()?.explicitContentFriendDm,
                [o.v.NON_FRIEND_DM]: l.Vd.getSetting()?.explicitContentNonFriendDm,
            };
            return {
                [o.v.GUILD]: (0, c.Ys)({ setting: t?.[o.v.GUILD] }),
                [o.v.FRIEND_DM]: (0, c.Ys)({ setting: t?.[o.v.FRIEND_DM], isDm: !0, isFriend: !0 }),
                [o.v.NON_FRIEND_DM]: (0, c.Ys)({ setting: t?.[o.v.NON_FRIEND_DM], isDm: !0 }),
            };
        },
    },
    gore: {
        harmType: "gore",
        obscureReason: d.Oc.GORE_CONTENT,
        attachmentFlag: _.sbO.CONTAINS_GORE_CONTENT,
        embedFlag: _.iSj.CONTAINS_GORE_CONTENT,
        genericMediaFlag: s.IS.GORE,
        bitmask: 2,
        devSettingKey: "obscure_blur_effect_gore_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.goreContentSettings;
            return {
                [o.v.GUILD]: t?.goreContentGuilds,
                [o.v.FRIEND_DM]: t?.goreContentFriendDm,
                [o.v.NON_FRIEND_DM]: t?.goreContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            let t = e ?? {
                [o.v.GUILD]: l.qN.getSetting()?.goreContentGuilds,
                [o.v.FRIEND_DM]: l.qN.getSetting()?.goreContentFriendDm,
                [o.v.NON_FRIEND_DM]: l.qN.getSetting()?.goreContentNonFriendDm,
            };
            return {
                [o.v.GUILD]: (0, u.gC)({ setting: t?.[o.v.GUILD] }),
                [o.v.FRIEND_DM]: (0, u.gC)({ setting: t?.[o.v.FRIEND_DM], isDm: !0, isFriend: !0 }),
                [o.v.NON_FRIEND_DM]: (0, u.gC)({ setting: t?.[o.v.NON_FRIEND_DM], isDm: !0 }),
            };
        },
    },
    self_harm: {
        harmType: "self_harm",
        obscureReason: d.Oc.SELF_HARM_CONTENT,
        attachmentFlag: _.sbO.CONTAINS_SELF_HARM_CONTENT,
        embedFlag: _.iSj.CONTAINS_SELF_HARM_CONTENT,
        genericMediaFlag: s.IS.SELF_HARM,
        bitmask: 4,
        devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.selfHarmContentSettings;
            return {
                [o.v.GUILD]: t?.selfHarmContentGuilds,
                [o.v.FRIEND_DM]: t?.selfHarmContentFriendDm,
                [o.v.NON_FRIEND_DM]: t?.selfHarmContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: () => ({
            [o.v.GUILD]: a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [o.v.FRIEND_DM]: a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [o.v.NON_FRIEND_DM]: a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        }),
    },
};
