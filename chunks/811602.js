"use strict";
n.d(t, { Jn: () => f, LO: () => _, kn: () => d });
var r = n(873298),
    i = n(731068),
    a = n(253932),
    s = n(930125),
    o = n(338717),
    l = n(632119),
    u = n(444802),
    c = n(652215),
    d = (function (e) {
        return (e.EXPLICIT = "explicit"), (e.GORE = "gore"), (e.SELF_HARM = "self_harm"), e;
    })({}),
    _ = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.EXPLICIT = 1)] = "EXPLICIT"),
            (e[(e.GORE = 2)] = "GORE"),
            (e[(e.SELF_HARM = 4)] = "SELF_HARM"),
            (e[(e.ALL = 7)] = "ALL"),
            e
        );
    })({});
let f = {
    explicit: {
        harmType: "explicit",
        obscureReason: o.Oc.EXPLICIT_CONTENT,
        attachmentFlag: c.sbO.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: c.iSj.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: i.IS.EXPLICIT,
        bitmask: 1,
        devSettingKey: "obscure_blur_effect_explicit_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.explicitContentSettings;
            return {
                [s.v.GUILD]: t?.explicitContentGuilds,
                [s.v.FRIEND_DM]: t?.explicitContentFriendDm,
                [s.v.NON_FRIEND_DM]: t?.explicitContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            let t = e ?? {
                [s.v.GUILD]: a.Vd.getSetting()?.explicitContentGuilds,
                [s.v.FRIEND_DM]: a.Vd.getSetting()?.explicitContentFriendDm,
                [s.v.NON_FRIEND_DM]: a.Vd.getSetting()?.explicitContentNonFriendDm,
            };
            return {
                [s.v.GUILD]: (0, l.Ys)({ setting: t?.[s.v.GUILD] }),
                [s.v.FRIEND_DM]: (0, l.Ys)({ setting: t?.[s.v.FRIEND_DM], isDm: !0, isFriend: !0 }),
                [s.v.NON_FRIEND_DM]: (0, l.Ys)({ setting: t?.[s.v.NON_FRIEND_DM], isDm: !0 }),
            };
        },
    },
    gore: {
        harmType: "gore",
        obscureReason: o.Oc.GORE_CONTENT,
        attachmentFlag: c.sbO.CONTAINS_GORE_CONTENT,
        embedFlag: c.iSj.CONTAINS_GORE_CONTENT,
        genericMediaFlag: i.IS.GORE,
        bitmask: 2,
        devSettingKey: "obscure_blur_effect_gore_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.goreContentSettings;
            return {
                [s.v.GUILD]: t?.goreContentGuilds,
                [s.v.FRIEND_DM]: t?.goreContentFriendDm,
                [s.v.NON_FRIEND_DM]: t?.goreContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            let t = e ?? {
                [s.v.GUILD]: a.qN.getSetting()?.goreContentGuilds,
                [s.v.FRIEND_DM]: a.qN.getSetting()?.goreContentFriendDm,
                [s.v.NON_FRIEND_DM]: a.qN.getSetting()?.goreContentNonFriendDm,
            };
            return {
                [s.v.GUILD]: (0, u.gC)({ setting: t?.[s.v.GUILD] }),
                [s.v.FRIEND_DM]: (0, u.gC)({ setting: t?.[s.v.FRIEND_DM], isDm: !0, isFriend: !0 }),
                [s.v.NON_FRIEND_DM]: (0, u.gC)({ setting: t?.[s.v.NON_FRIEND_DM], isDm: !0 }),
            };
        },
    },
    self_harm: {
        harmType: "self_harm",
        obscureReason: o.Oc.SELF_HARM_CONTENT,
        attachmentFlag: c.sbO.CONTAINS_SELF_HARM_CONTENT,
        embedFlag: c.iSj.CONTAINS_SELF_HARM_CONTENT,
        genericMediaFlag: i.IS.SELF_HARM,
        bitmask: 4,
        devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
        getProtoUserSettings: (e) => {
            let t = e?.textAndImages?.selfHarmContentSettings;
            return {
                [s.v.GUILD]: t?.selfHarmContentGuilds,
                [s.v.FRIEND_DM]: t?.selfHarmContentFriendDm,
                [s.v.NON_FRIEND_DM]: t?.selfHarmContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: () => ({
            [s.v.GUILD]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [s.v.FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [s.v.NON_FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        }),
    },
};
